<script setup lang="ts">
const blocks = [
  {
    tag: "Our Mission",
    title: "Art as a force for sustainable change.",
    body: "We harness the transformative power of art and culture to drive sustainable development in health, education, and environmental awareness - empowering individuals to flourish and contribute meaningfully to society.",
    img: "https://dreamhatchkenya.org/images/576/15628526/IMG-20250416-WA0000-4TPHTGdpoxBAu2FY6vG6_g.jpg",
    alt: "Community gathering with Dream Hatch Kenya",
  },
  {
    tag: "Our Vision",
    title: "A world where creativity drives collective progress.",
    body: "We envision a vibrant world where art and culture catalyse personal growth, foster connection across diverse backgrounds, and shape a more sustainable, equitable society where everyone can thrive.",
    img: "https://dreamhatchkenya.org/images/576/18781510/WhatsAppImage2025-08-29at10.56.08AM-AIxRnlMgzX4MMcGNjMTbuw.jpeg",
    alt: "Workshop participants engaged in creative expression",
    reverse: true,
  },
];
</script>

<template>
  <section id="mission" class="bg-cream py-24 md:py-32">
    <div class="container-page">
      <div class="mb-16 max-w-2xl">
        <span class="section-eyebrow">Why we exist</span>
        <h2 class="section-title">
          Creativity is our most powerful tool for change.
        </h2>
      </div>

      <div class="space-y-24">
        <div
          v-for="b in blocks"
          :key="b.tag"
          class="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          :class="b.reverse ? 'md:[&>*:first-child]:order-2' : ''"
        >
          <div class="relative">
            <div class="absolute -inset-4 rotate-2 rounded-3xl bg-sun/30" />
            <img
              :src="b.img"
              :alt="b.alt"
              class="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
              loading="lazy"
            />
          </div>
          <div>
            <span class="section-eyebrow">{{ b.tag }}</span>
            <h3 class="mt-3 font-display text-3xl font-black leading-[1.05] md:text-5xl">
              {{ b.title }}
            </h3>
            <p class="mt-6 text-lg leading-relaxed text-ink/70">{{ b.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
