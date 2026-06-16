<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";

const projects = [
  {
    title: "Mazingira Community Drive",
    cat: "Environment · Ikolomani",
    img: "https://dreamhatchkenya.org/images/1024/14106734/Drive1.jpg",
    href: "/projects/mazingira-community-drive",
    body: "A cultural revival bringing Isukha and Idakho traditions together with modern restoration techniques - healing land and water damaged by mining, and empowering local women as guardians of the land.",
  },
  {
    title: "Sustainability & Climate-Smart Farming",
    cat: "Environment",
    img: "https://dreamhatchkenya.org/images/1024/14106719/2.jpeg.jpg",
    href: "/projects/sustainability-climate-smart-farming",
    body: "Land reclamation and responsible agriculture restoring soil health and creating a model for climate-smart farming that benefits the entire community.",
  },
  {
    title: "Reforestation Projects",
    cat: "Environment",
    img: "https://dreamhatchkenya.org/images/1024/14106695/4.jpeg.jpg",
    href: "/projects/reforestation",
    body: "Planting trees in deforested areas to revive habitats, sequester carbon, and support local communities through sustainable land use.",
  },
  {
    title: "Arts-Based Awareness Campaigns",
    cat: "Awareness",
    img: "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
    href: "/projects/arts-based-awareness",
    body: "Performances and workshops raising consciousness around important social issues - using art to spark dialogue and stimulate change.",
  },
];
</script>

<template>
  <section id="projects" class="bg-cream py-24 md:py-32">
    <div class="container-page">
      <div class="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div class="max-w-2xl">
          <span class="section-eyebrow">What we're building</span>
          <h2 class="section-title">Projects with measurable impact.</h2>
        </div>

        <a
          href="#donate"
          class="inline-flex items-center gap-2 font-semibold text-terracotta transition-all hover:gap-3"
        >
          Fund a project <ArrowUpRight :size="16" />
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2 md:gap-8">
        <a
          v-for="(p, i) in projects"
          :key="p.title"
          :href="p.href"
          class="group relative block overflow-hidden rounded-3xl bg-cream shadow-elegant"
          :class="i === 0 ? 'md:row-span-2' : ''"
        >
          <article>
            <div
              class="relative overflow-hidden"
              :class="i === 0 ? 'aspect-[4/5]' : 'aspect-[16/10]'"
            >
              <img
                :src="p.img"
                :alt="p.title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
              />
              <div
                class="absolute inset-0 bg-terracotta/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div class="absolute inset-0 flex flex-col justify-end p-7 text-cream md:p-9">
                <span
                  class="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sun"
                >
                  {{ p.cat }}
                </span>
                <h3
                  class="mb-3 font-display text-2xl font-bold leading-tight md:text-3xl"
                >
                  {{ p.title }}
                </h3>
                <p class="max-w-xl text-sm leading-relaxed text-cream/85 md:text-base">
                  {{ p.body }}
                </p>
                <span
                  class="mt-4 inline-flex translate-y-2 items-center gap-1.5 text-sm font-semibold text-sun opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Learn more <ArrowUpRight :size="16" />
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  </section>
</template>
