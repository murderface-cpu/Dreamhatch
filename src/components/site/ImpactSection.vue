<script setup lang="ts">
const stats = [
  { n: "2,500+", l: "Students engaged in arts-based learning" },
  { n: "45", l: "Community art projects completed" },
  { n: "120+", l: "Volunteers contributing skills & time" },
  { n: "18", l: "Partner organizations collaborating" },
];

const testimonials = [
  {
    initials: "JN",
    quote:
      "Volunteering with Dream Hatch Kenya has been transformative. Using my artistic skills to help children process difficult emotions has shown me the true healing power of art.",
    name: "Jane Njeri",
    role: "Art Therapist · Volunteer for 2 years",
  },
  {
    initials: "DM",
    quote:
      "As an environmental scientist, I was skeptical about how art could address ecological issues. After leading their eco-art workshops, the community engagement has been phenomenal.",
    name: "David Mbugua",
    role: "Environmental Educator · Volunteer",
  },
  {
    initials: "SK",
    quote:
      "Dream Hatch Kenya's art programs have transformed our school. Students are more engaged, creative, and confident. We're seeing improvements in all subject areas.",
    name: "Sarah Kamau",
    role: "Primary School Teacher",
  },
];
</script>

<template>
  <section id="impact" class="bg-cream py-24 md:py-32">
    <div class="container-page">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <span class="section-eyebrow">Our Impact So Far</span>
        <h2 class="section-title">Real numbers. Real lives. Real change.</h2>
      </div>

      <div
        class="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 lg:grid-cols-4"
      >
        <div
          v-for="s in stats"
          :key="s.l"
          class="bg-cream p-8 text-center md:p-10"
        >
          <div class="font-display text-5xl font-black text-terracotta md:text-6xl">
            {{ s.n }}
          </div>
          <div class="mt-3 text-sm text-ink/70">{{ s.l }}</div>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <figure
          v-for="t in testimonials"
          :key="t.name"
          class="flex flex-col rounded-2xl border border-ink/10 bg-cream p-8"
        >
          <blockquote
            class="flex-1 font-display text-lg italic leading-relaxed text-ink"
          >
            &ldquo;{{ t.quote }}&rdquo;
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3">
            <div
              class="flex size-11 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-cream"
            >
              {{ t.initials }}
            </div>
            <div>
              <div class="text-sm font-semibold text-ink">{{ t.name }}</div>
              <div class="text-xs text-ink/60">{{ t.role }}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
