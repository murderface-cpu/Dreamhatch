<script setup lang="ts">
import { ArrowLeft, ArrowRight, Heart } from "lucide-vue-next";

import type { Project } from "@/lib/types";

defineProps<{ project: Project }>();
</script>

<template>
  <main>
    <section class="relative flex min-h-[70svh] items-end overflow-hidden">
      <img
        :src="project.heroImg"
        :alt="project.title"
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/20"
      />
      <div class="container-page relative z-10 pb-16 pt-32 md:pb-24">
        <a
          href="/#projects"
          class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
        >
          <ArrowLeft :size="16" /> Back to all projects
        </a>
        <div class="max-w-3xl">
          <span class="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sun">
            {{ project.cat }}
          </span>
          <h1
            class="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.0] text-cream"
          >
            {{ project.title }}
          </h1>
          <p
            class="mt-5 font-display text-xl font-semibold italic text-sun md:text-2xl"
          >
            {{ project.tagline }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-cream py-16 md:py-20">
      <div class="container-page">
        <div class="max-w-3xl">
          <p
            class="font-display text-xl font-medium leading-relaxed text-ink md:text-2xl"
          >
            {{ project.overview }}
          </p>
        </div>
      </div>
    </section>

    <section
      v-for="(s, i) in project.sections"
      :key="s.title"
      class="py-16 md:py-20"
      :class="i % 2 === 0 ? 'bg-cream' : 'bg-cream'"
    >
      <div class="container-page">
        <div
          v-if="s.img"
          class="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          :class="i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''"
        >
          <div class="relative">
            <div class="absolute -inset-4 rotate-1 rounded-3xl bg-sun/20" />
            <img
              :src="s.img"
              :alt="s.imgAlt || s.title"
              class="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant"
              loading="lazy"
            />
          </div>
          <div>
            <h2 class="mb-5 font-display text-3xl font-black leading-tight md:text-4xl">
              {{ s.title }}
            </h2>
            <p class="text-lg leading-relaxed text-ink/70">{{ s.body }}</p>
            <ul v-if="s.items" class="mt-6 space-y-3">
              <li
                v-for="item in s.items"
                :key="item"
                class="flex gap-3 text-ink/70"
              >
                <span class="mt-1.5 size-2 shrink-0 rounded-full bg-terracotta" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div v-else class="max-w-4xl">
          <h2 class="mb-5 font-display text-3xl font-black leading-tight md:text-4xl">
            {{ s.title }}
          </h2>
          <p class="mb-6 text-lg leading-relaxed text-ink/70">{{ s.body }}</p>
          <ul v-if="s.items" class="grid gap-4 sm:grid-cols-2">
            <li
              v-for="item in s.items"
              :key="item"
              class="flex gap-3 rounded-xl border border-ink/10 bg-cream p-4"
            >
              <span class="mt-1 size-2 shrink-0 rounded-full bg-terracotta" />
              <span class="text-sm leading-relaxed text-ink/70">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="project.gallery.length" class="bg-forest py-16 md:py-20">
      <div class="container-page">
        <span class="section-eyebrow-on-dark">Gallery</span>
        <h2
          class="mt-3 mb-10 font-display text-3xl font-black leading-tight text-cream md:text-5xl"
        >
          See the work in action.
        </h2>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <div
            v-for="(img, i) in project.gallery"
            :key="img"
            class="relative overflow-hidden rounded-2xl"
            :class="i === 0 ? 'col-span-2 row-span-2 md:col-span-1' : ''"
          >
            <img
              :src="img"
              :alt="`${project.title} - photo ${i + 1}`"
              class="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              :class="i === 0 ? 'md:absolute md:inset-0 md:h-full' : ''"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-terracotta py-16 text-cream md:py-24"
    >
      <div
        class="absolute -right-24 -top-24 size-[30rem] rounded-full bg-sun/20 blur-3xl"
      />
      <div class="container-page relative">
        <div class="max-w-2xl">
          <h2 class="font-display text-4xl font-black leading-tight md:text-5xl">
            Help us grow this project.
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-cream/80">
            Your donation, time, or partnership directly supports {{ project.title }} and
            communities like it across Kenya.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="/#donate"
              class="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 font-semibold text-ink shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <Heart :size="16" class="fill-current text-terracotta" />
              Donate to this project
            </a>
            <a href="/#contact" class="btn-secondary">Get involved</a>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="project.relatedSlug"
      class="border-t border-ink/10 bg-cream py-14"
    >
      <div class="container-page flex flex-wrap items-center justify-between gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            Up next
          </span>
          <p class="mt-1 font-display text-2xl font-black">
            {{ project.relatedTitle }}
          </p>
        </div>
        <RouterLink
          :to="`/projects/${project.relatedSlug}`"
          class="inline-flex items-center gap-2 font-semibold text-terracotta transition-all hover:gap-3"
        >
          View project <ArrowRight :size="16" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>
