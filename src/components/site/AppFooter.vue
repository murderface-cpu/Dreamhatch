<script setup lang="ts">
import { ref } from "vue";
import { useNewsletterStore } from "@/stores/newsletter";

const newsletter = useNewsletterStore();
const email = ref("");
const name = ref("");

async function onSubmit(e: Event) {
  e.preventDefault();
  if (!email.value) return;
  await newsletter.subscribe(email.value, name.value || undefined);
  if (newsletter.success) {
    email.value = "";
    name.value = "";
  }
}
</script>

<template>
  <footer class="bg-ink py-14 text-cream">
    <div class="container-page">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="md:col-span-1">
          <div class="font-display text-2xl font-black">
            Dream<span class="text-sun">Hatch</span> Kenya
          </div>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Empowering communities through art, health, education, and environmental sustainability.
          </p>
        </div>

        <div>
          <h4 class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">
            Navigate
          </h4>
          <ul class="space-y-2 text-sm text-cream/80">
            <li><a href="#mission" class="hover:text-sun">Mission</a></li>
            <li><a href="#focus" class="hover:text-sun">Focus Areas</a></li>
            <li><a href="#projects" class="hover:text-sun">Projects</a></li>
            <li><a href="#involved" class="hover:text-sun">Get Involved</a></li>
            <li><a href="#donate" class="hover:text-sun">Donate</a></li>
            <li>
              <a href="/api/docs" target="_blank" rel="noopener" class="hover:text-sun">
                Developer API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">
            Contact
          </h4>
          <ul class="space-y-2 text-sm text-cream/80">
            <li>Phone: +254 104 868 447</li>
            <li>
              <a
                href="mailto:dreamhatchke2020@gmail.com"
                class="break-all hover:text-sun"
              >
                dreamhatchke2020@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">
            Stay in touch
          </h4>
          <form class="space-y-2" @submit="onSubmit">
            <input
              v-model="name"
              type="text"
              placeholder="Your name"
              class="w-full rounded-lg border border-cream/15 bg-cream/10 px-3 py-2.5 text-sm text-cream placeholder:text-cream/50 focus:border-sun focus:outline-none"
            />
            <div class="flex gap-2">
              <input
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full rounded-lg border border-cream/15 bg-cream/10 px-3 py-2.5 text-sm text-cream placeholder:text-cream/50 focus:border-sun focus:outline-none"
              />
              <button
                type="submit"
                :disabled="newsletter.submitting"
                class="rounded-lg bg-sun px-4 text-sm font-semibold text-ink transition hover:opacity-90 disabled:opacity-60"
              >
                {{ newsletter.submitting ? "..." : "Join" }}
              </button>
            </div>
            <p
              v-if="newsletter.success"
              class="text-xs text-sun"
              role="status"
            >
              Thank you - you're subscribed.
            </p>
            <p v-if="newsletter.error" class="text-xs text-red-300" role="alert">
              {{ newsletter.error }}
            </p>
          </form>
        </div>
      </div>

      <div
        class="mt-12 flex flex-wrap justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50"
      >
        <span>© {{ new Date().getFullYear() }} Dream Hatch Kenya. All rights reserved.</span>
        <span>Legal Notice · Privacy</span>
      </div>

      <div class="mt-3 flex justify-center text-xs text-cream/40">
        Powered By
        <a
          href="https://nerdware.systems"
          target="_blank"
          rel="noopener"
          class="ml-1 font-semibold text-sun hover:underline"
        >
          Nerdware Systems
        </a>
      </div>
    </div>
  </footer>
</template>
