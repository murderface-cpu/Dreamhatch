<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Menu, X } from "lucide-vue-next";

import logoUrl from "@/assets/logo.svg";

const links = [
  { href: "/#mission", label: "Mission" },
  { href: "/#focus", label: "Focus" },
  { href: "/#projects", label: "Projects" },
  { href: "/#impact", label: "Impact" },
  { href: "/#involved", label: "Get Involved" },
  { href: "/#contact", label: "Contact" },
];

const open = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'border-b border-ink/10 bg-cream/85 backdrop-blur-lg'
        : 'bg-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between md:h-20">
      <a href="/" class="flex items-center gap-3">
        <img
          :src="logoUrl"
          alt="Dream Hatch Kenya"
          class="size-9 shrink-0 drop-shadow-sm md:size-10"
        />
        <span class="flex flex-col leading-none">
          <span class="font-display text-lg font-black text-terracotta md:text-xl">
            Dream<span class="text-terracotta">Hatch</span>
          </span>
          <span class="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60 md:text-xs">
            Kenya
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 lg:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium text-ink/80 transition-colors hover:text-terracotta"
        >
          {{ l.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="/#donate"
          class="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream shadow-warm transition hover:opacity-90 sm:inline-flex"
        >
          Donate
        </a>
        <button
          class="p-2 text-ink lg:hidden"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <X v-if="open" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </div>

    <div v-if="open" class="border-t border-ink/10 bg-cream lg:hidden">
      <nav class="container-page flex flex-col gap-1 py-4">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="border-b border-ink/5 py-3 text-base font-medium text-ink"
          @click="open = false"
        >
          {{ l.label }}
        </a>
        <a
          href="/#donate"
          class="mt-3 inline-flex justify-center rounded-full bg-terracotta px-5 py-3 font-semibold text-cream"
          @click="open = false"
        >
          Donate
        </a>
      </nav>
    </div>
  </header>
</template>
