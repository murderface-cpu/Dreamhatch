<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex min-h-[80vh] items-center justify-center px-4 pt-24">
    <div class="max-w-md text-center">
      <h1 class="font-display text-7xl font-black text-ink">404</h1>
      <h2 class="mt-4 font-display text-xl font-semibold">Page not found</h2>
      <p class="mt-2 text-sm text-ink/60">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="mt-6">
        <RouterLink to="/" class="btn-primary">Go home</RouterLink>
      </div>
    </div>
  </main>
</template>
