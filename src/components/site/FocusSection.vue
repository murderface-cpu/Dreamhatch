<script setup lang="ts">
import { GraduationCap, HeartPulse, Leaf, Palette } from "lucide-vue-next";

const areas = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "We integrate art into curricula that engage learners and foster critical thinking - equipping the next generation with tools to navigate challenges.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    body: "Art as a healing modality - promoting mental well-being and building supportive networks that enhance community health and resilience.",
  },
  {
    icon: Leaf,
    title: "Environment",
    body: "Creative projects highlight ecological concerns and turn environmental challenges into opportunities for sustainable, lasting change.",
  },
  {
    icon: Palette,
    title: "Culture & Voice",
    body: "Through artistic expression, performers connect, inspire, and provoke thought - sparking dialogue around the issues that matter most.",
  },
];
</script>

<template>
  <section
    id="focus"
    class="relative overflow-hidden bg-forest py-24 text-cream md:py-32"
  >
    <div
      class="absolute right-0 top-0 size-[40rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-sun/10 blur-3xl"
    />
    <div class="container-page relative">
      <div class="mb-16 max-w-3xl">
        <span class="section-eyebrow-on-dark">Our Core Focus Areas</span>
        <h2 class="section-title text-cream">Four pillars. One creative mission.</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="a in areas"
          :key="a.title"
          class="group rounded-2xl border border-cream/10 bg-cream/5 p-8 transition-all hover:border-sun/50 hover:bg-cream/10"
        >
          <div
            class="mb-6 flex size-14 items-center justify-center rounded-xl bg-sun text-ink transition-transform group-hover:scale-110"
          >
            <component :is="a.icon" :size="28" :stroke-width="2.25" />
          </div>
          <h3 class="mb-3 font-display text-2xl font-bold">{{ a.title }}</h3>
          <p class="text-[0.95rem] leading-relaxed text-cream/75">{{ a.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
