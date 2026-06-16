<script setup lang="ts">
import { ref } from "vue";
import { Mail, Phone } from "lucide-vue-next";

import { useContactStore } from "@/stores/contact";
import type { ContactTopic } from "@/lib/types";

const store = useContactStore();
const full_name = ref("");
const email = ref("");
const phone = ref("");
const topic = ref<ContactTopic | "">("");
const message = ref("");

async function onSubmit(e: Event) {
  e.preventDefault();
  if (!topic.value) return;
  await store.submit({
    full_name: full_name.value,
    email: email.value,
    phone: phone.value || undefined,
    topic: topic.value,
    message: message.value,
  });
  if (store.success) {
    full_name.value = "";
    email.value = "";
    phone.value = "";
    topic.value = "";
    message.value = "";
  }
}
</script>

<template>
  <section id="contact" class="bg-forest py-24 text-cream md:py-32">
    <div class="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <span class="section-eyebrow-on-dark">Get in touch</span>
        <h2 class="section-title text-cream">
          Let's build something meaningful together.
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-cream/80">
          Reach out about volunteering, partnerships, press, or just to learn more about our work.
        </p>

        <div class="mt-10 space-y-5">
          <a href="tel:+254104868447" class="group flex items-center gap-4">
            <span
              class="flex size-12 items-center justify-center rounded-full bg-sun text-ink"
            >
              <Phone :size="20" />
            </span>
            <div>
              <div class="text-xs uppercase tracking-wider text-cream/60">Phone</div>
              <div
                class="font-display text-xl font-bold transition group-hover:text-sun"
              >
                +254 104 868 447
              </div>
            </div>
          </a>
          <a
            href="mailto:dreamhatchke2020@gmail.com"
            class="group flex items-center gap-4"
          >
            <span
              class="flex size-12 items-center justify-center rounded-full bg-sun text-ink"
            >
              <Mail :size="20" />
            </span>
            <div>
              <div class="text-xs uppercase tracking-wider text-cream/60">Email</div>
              <div
                class="break-all font-display text-xl font-bold transition group-hover:text-sun"
              >
                dreamhatchke2020@gmail.com
              </div>
            </div>
          </a>
        </div>
      </div>

      <form
        class="space-y-4 rounded-3xl border border-cream/10 bg-cream/5 p-7 backdrop-blur md:p-9"
        @submit="onSubmit"
      >
        <div v-if="store.success" class="rounded-xl bg-sun/20 p-5 text-center">
          <h3 class="font-display text-lg font-bold">Message received</h3>
          <p class="mt-1 text-sm text-cream/80">
            Thank you - we'll be in touch within 2 business days.
          </p>
        </div>

        <template v-else>
          <div class="grid gap-4 sm:grid-cols-2">
            <input
              v-model="full_name"
              required
              placeholder="Full name"
              class="input-field-dark"
            />
            <input
              v-model="email"
              required
              type="email"
              placeholder="Email"
              class="input-field-dark"
            />
          </div>
          <input
            v-model="phone"
            type="tel"
            placeholder="Phone (optional)"
            class="input-field-dark"
          />
          <select v-model="topic" required class="input-field-dark">
            <option value="" disabled>I'm interested in…</option>
            <option value="volunteering">Volunteering</option>
            <option value="donating">Donating</option>
            <option value="partnership">Partnership opportunities</option>
            <option value="press">Press / Media</option>
            <option value="other">Other</option>
          </select>
          <textarea
            v-model="message"
            required
            rows="4"
            placeholder="Tell us more…"
            class="input-field-dark resize-none"
          />
          <p v-if="store.error" class="text-xs text-red-300" role="alert">
            {{ store.error }}
          </p>
          <button
            type="submit"
            :disabled="store.submitting"
            class="w-full rounded-xl bg-sun py-4 font-bold text-ink transition hover:opacity-95 disabled:opacity-60"
          >
            {{ store.submitting ? "Sending..." : "Send Message" }}
          </button>
        </template>
      </form>
    </div>
  </section>
</template>
