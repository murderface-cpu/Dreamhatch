<script setup lang="ts">
import { computed, ref } from "vue";
import { Check, Heart, ShieldCheck } from "lucide-vue-next";

import { useDonationStore } from "@/stores/donations";

const tiers = [
  { amount: 1000, impact: "Art supplies for one student" },
  { amount: 2500, impact: "Materials for a 30-student classroom", popular: false },
  { amount: 5000, impact: "Sponsor a child for a workshop", popular: true },
  { amount: 10000, impact: "Fund a community workshop for 20" },
  { amount: 25000, impact: "Mentorship for 5 emerging artists" },
  { amount: 50000, impact: "Complete community art initiative" },
];

const selected = ref(5000);
const custom = ref("");
const monthly = ref(false);
const name = ref("");
const email = ref("");
const phone = ref("");
const success = ref(false);

const store = useDonationStore();

const amount = computed(() => (custom.value ? Number(custom.value) : selected.value));

async function onSubmit(e: Event) {
  e.preventDefault();
  const result = await store.submit({
    donor_name: name.value,
    donor_email: email.value,
    donor_phone: phone.value || undefined,
    amount_kes: amount.value,
    is_monthly: monthly.value,
  });
  if (result) {
    success.value = true;
    name.value = "";
    email.value = "";
    phone.value = "";
    custom.value = "";
  }
}
</script>

<template>
  <section
    id="donate"
    class="relative overflow-hidden bg-gradient-to-br from-terracotta via-terracotta to-terracotta-deep py-24 text-cream md:py-32"
  >
    <div
      class="absolute -right-32 -top-32 size-[40rem] rounded-full bg-sun/20 blur-3xl"
    />
    <div class="container-page relative">
      <div class="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <span
            class="mb-5 inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur"
          >
            <Heart :size="12" class="fill-current" /> Make a Donation
          </span>
          <h2 class="font-display text-4xl font-black leading-[1.02] md:text-6xl">
            Your gift today rewrites a child's tomorrow.
          </h2>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Every shilling fuels art supplies, workshops, mentorship and community projects across
            Kenya. 100% of donations go directly to our programs.
          </p>

          <ul class="mt-8 space-y-3">
            <li
              v-for="f in [
                'Tax-deductible - full receipt on request',
                'Secure M-Pesa, card, or bank transfer',
                'Transparent reporting on every program',
              ]"
              :key="f"
              class="flex items-center gap-3 text-cream/90"
            >
              <span
                class="flex size-6 items-center justify-center rounded-full bg-sun text-ink"
              >
                <Check :size="14" :stroke-width="3" />
              </span>
              {{ f }}
            </li>
          </ul>

          <div class="mt-10 flex items-center gap-3 text-sm text-cream/70">
            <ShieldCheck :size="20" class="text-sun" />
            Secure donation · Registered in Kenya
          </div>
        </div>

        <form
          class="rounded-3xl bg-cream p-7 text-ink shadow-elegant md:p-10"
          @submit="onSubmit"
        >
          <div
            v-if="success"
            class="rounded-xl border border-sun/40 bg-sun/10 p-5 text-center"
          >
            <h3 class="font-display text-xl font-black text-forest">
              Thank you!
            </h3>
            <p class="mt-2 text-sm text-ink/80">
              Your pledge has been recorded. Reference code:
              <code class="rounded bg-ink/10 px-1.5 py-0.5 font-mono">{{ store.lastReference }}</code>
            </p>
            <p class="mt-1 text-xs text-ink/60">
              Our team will follow up via email to complete payment.
            </p>
          </div>

          <template v-else>
            <div
              class="mb-4 text-sm font-semibold uppercase tracking-wider text-ink/60"
            >
              Select an amount (KSh)
            </div>
            <div class="grid grid-cols-3 gap-2.5">
              <button
                v-for="t in tiers"
                :key="t.amount"
                type="button"
                class="relative rounded-xl border-2 p-3 text-left transition"
                :class="
                  selected === t.amount && !custom
                    ? 'border-terracotta bg-terracotta/5'
                    : 'border-ink/10 hover:border-terracotta/40'
                "
                @click="
                  () => {
                    selected = t.amount;
                    custom = '';
                  }
                "
              >
                <span
                  v-if="t.popular"
                  class="absolute -right-2 -top-2.5 rounded-full bg-sun px-2 py-0.5 text-[10px] font-bold uppercase text-ink"
                >
                  Popular
                </span>
                <div class="font-display text-lg font-black">
                  {{ t.amount.toLocaleString() }}
                </div>
                <div class="mt-1 text-[10px] leading-tight text-ink/60">
                  {{ t.impact }}
                </div>
              </button>
            </div>

            <div class="relative mt-4">
              <span
                class="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-ink/60"
              >
                KSh
              </span>
              <input
                v-model="custom"
                type="number"
                placeholder="Other amount"
                class="w-full rounded-xl border-2 border-ink/10 px-4 py-3.5 pl-14 outline-none focus:border-terracotta"
              />
            </div>

            <label class="mt-4 flex cursor-pointer select-none items-center gap-3">
              <input
                v-model="monthly"
                type="checkbox"
                class="size-4 accent-terracotta"
              />
              <span class="text-sm">Make this a monthly donation</span>
            </label>

            <div class="mt-5 space-y-3">
              <input
                v-model="name"
                required
                type="text"
                placeholder="Full name"
                class="w-full rounded-xl border border-ink/10 px-4 py-3 outline-none focus:border-terracotta"
              />
              <input
                v-model="email"
                required
                type="email"
                placeholder="Email address"
                class="w-full rounded-xl border border-ink/10 px-4 py-3 outline-none focus:border-terracotta"
              />
              <input
                v-model="phone"
                type="tel"
                placeholder="Phone (for M-Pesa)"
                class="w-full rounded-xl border border-ink/10 px-4 py-3 outline-none focus:border-terracotta"
              />
            </div>

            <p v-if="store.error" class="mt-3 text-xs text-red-700" role="alert">
              {{ store.error }}
            </p>

            <button
              type="submit"
              :disabled="store.submitting"
              class="mt-6 w-full rounded-xl bg-terracotta py-4 text-lg font-bold text-cream shadow-warm transition hover:opacity-95 disabled:opacity-60"
            >
              {{
                store.submitting
                  ? "Submitting..."
                  : `Donate KSh ${amount ? amount.toLocaleString() : "0"}${monthly ? " / month" : ""}`
              }}
            </button>

            <div
              class="mt-4 flex items-center justify-center gap-4 text-xs text-ink/60"
            >
              <span>M-Pesa</span>
              <span>·</span>
              <span>Visa / Mastercard</span>
              <span>·</span>
              <span>Bank Transfer</span>
            </div>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>
