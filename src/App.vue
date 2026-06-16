<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/site/AppHeader.vue";
import AppFooter from "@/components/site/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
  <AppFooter />
</template>
