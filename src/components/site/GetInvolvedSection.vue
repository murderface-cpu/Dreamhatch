<script setup lang="ts">
import { Brush, Handshake, Users } from "lucide-vue-next";

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    body: "Share your time and skills - from art and healthcare to education, environment, and event support.",
    cta: "Become a Volunteer",
    href: "#contact",
  },
  {
    icon: Brush,
    title: "Donate",
    body: "Fund art supplies, workshops, scholarships, and community projects. Every shilling counts.",
    cta: "Give Today",
    href: "#donate",
  },
  {
    icon: Handshake,
    title: "Partner",
    body: "Corporate, educational, NGO, or government - let's design a partnership that amplifies impact.",
    cta: "Explore Partnership",
    href: "#contact",
  },
];
</script>

<template>
  <section id="involved" class="bg-cream py-24 md:py-32">
    <div class="container-page">
      <div class="mb-14 max-w-3xl">
        <span class="section-eyebrow">How to join us</span>
        <h2 class="section-title">Three ways to power the movement.</h2>
        <p class="mt-6 text-lg text-ink/70">
          Volunteers are the backbone of our organization. Whether you give a few hours a month or
          partner with us long-term, your contribution creates lasting change.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="w in ways"
          :key="w.title"
          class="group rounded-3xl border border-ink/10 bg-cream p-8 transition-all hover:-translate-y-1 hover:border-terracotta/40"
        >
          <div
            class="mb-6 flex size-14 items-center justify-center rounded-2xl bg-terracotta text-cream"
          >
            <component :is="w.icon" :size="28" :stroke-width="2.25" />
          </div>
          <h3 class="mb-3 font-display text-2xl font-bold">{{ w.title }}</h3>
          <p class="mb-6 leading-relaxed text-ink/70">{{ w.body }}</p>
          <a
            :href="w.href"
            class="inline-flex items-center gap-2 font-semibold text-terracotta transition-all group-hover:gap-3"
          >
            {{ w.cta }} →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
