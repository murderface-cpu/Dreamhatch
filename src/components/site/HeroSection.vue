<script setup lang="ts">
import { ArrowRight, Heart } from "lucide-vue-next";

const HERO_IMG = "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg";

const stats = [
  { n: "2,500+", l: "Students reached" },
  { n: "45", l: "Projects delivered" },
  { n: "120+", l: "Volunteers" },
];
</script>

<template>
  <section
    id="top"
    class="relative flex min-h-[100svh] items-end overflow-hidden"
  >
    <img
      :src="HERO_IMG"
      alt="Dream Hatch Kenya community performance bringing people together through art"
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/30" />
    <div
      class="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent"
    />

    <div class="container-page relative z-10 pb-16 pt-32 md:pb-28">
      <div class="max-w-3xl">
        <span
          class="mb-6 inline-flex items-center gap-2 rounded-full bg-sun/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink"
        >
          <span class="size-1.5 animate-pulse rounded-full bg-terracotta" />
          Empowering Kenyan Communities Since 2020
        </span>

        <h1
          class="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] text-cream"
        >
          Art that <em class="not-italic font-black text-sun">heals</em>.
          <br />
          Communities that <span class="text-sun">rise</span>.
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
          Dream Hatch Kenya channels creativity, compassion, and action to transform health,
          education, and the environment - one community at a time.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a href="#donate" class="btn-primary">
            <Heart :size="16" class="fill-current" />
            Donate Now
            <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#involved" class="btn-secondary">Get Involved</a>
        </div>

        <div class="mt-14 grid max-w-xl grid-cols-3 gap-6 md:gap-10">
          <div v-for="s in stats" :key="s.l">
            <div class="font-display text-3xl font-black text-sun md:text-4xl">
              {{ s.n }}
            </div>
            <div class="mt-1 text-xs text-cream/70 md:text-sm">{{ s.l }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
