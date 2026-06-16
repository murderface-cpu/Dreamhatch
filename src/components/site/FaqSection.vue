<script setup lang="ts">
import { ref } from "vue";
import { Plus, Minus } from "lucide-vue-next";

const faqs = [
  {
    q: "How much time do I need to commit as a volunteer?",
    a: "We welcome volunteers with various availability - from regular weekly sessions to occasional events. During onboarding we match opportunities to your schedule.",
  },
  {
    q: "Do I need artistic skills to volunteer?",
    a: "Not at all. We welcome artists, but also need administration, event planning, education, healthcare, and passionate community members of every background.",
  },
  {
    q: "How are donations used?",
    a: "Donations directly fund programs - art supplies, workshops, community projects, and essential operations. We maintain full transparency and send donors regular impact updates.",
  },
  {
    q: "How can my organization partner with Dream Hatch Kenya?",
    a: "We design custom partnerships based on mutual goals - joint projects, sponsorships, skill-sharing, and more. Reach out and we'll start the conversation.",
  },
];

const open = ref<number | null>(0);
</script>

<template>
  <section class="bg-cream py-24 md:py-32">
    <div class="container-page max-w-3xl">
      <div class="mb-14 text-center">
        <span class="section-eyebrow">FAQ</span>
        <h2 class="mt-4 font-display text-4xl font-black md:text-5xl">
          Questions, answered.
        </h2>
      </div>
      <div class="space-y-3">
        <div
          v-for="(f, i) in faqs"
          :key="f.q"
          class="overflow-hidden rounded-2xl border border-ink/10 bg-cream"
        >
          <button
            class="flex w-full items-center justify-between gap-6 p-6 text-left"
            :aria-expanded="open === i"
            @click="open = open === i ? null : i"
          >
            <span class="font-display text-lg font-bold">{{ f.q }}</span>
            <span
              class="flex size-9 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta"
            >
              <Minus v-if="open === i" :size="16" />
              <Plus v-else :size="16" />
            </span>
          </button>
          <div v-if="open === i" class="px-6 pb-6 leading-relaxed text-ink/70">
            {{ f.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
