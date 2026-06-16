<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

import { api } from "@/lib/api";
import type { Project } from "@/lib/types";
import ProjectLayout from "@/components/site/ProjectLayout.vue";

const route = useRoute();
const project = ref<Project | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

async function load(slug: string | string[]) {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await api.get<Project>(`/projects/${slug}`);
    project.value = data;
    document.title = `${data.title} — Dream Hatch Kenya`;
  } catch (e: any) {
    error.value = e?.response?.data?.detail ?? "Project not found.";
  } finally {
    loading.value = false;
  }
}

onMounted(() => load(route.params.slug as string));
watch(
  () => route.params.slug,
  (slug) => slug && load(slug)
);
</script>

<template>
  <main>
    <div v-if="loading" class="flex min-h-[60vh] items-center justify-center">
      <p class="text-ink/60">Loading…</p>
    </div>
    <div
      v-else-if="error || !project"
      class="flex min-h-[60vh] items-center justify-center px-4"
    >
      <div class="max-w-md text-center">
        <h1 class="font-display text-3xl font-black">Project not found</h1>
        <p class="mt-2 text-ink/70">
          {{ error ?? "We couldn't find that project." }}
        </p>
        <RouterLink to="/" class="btn-primary mt-6">Back to home</RouterLink>
      </div>
    </div>
    <ProjectLayout v-else :project="project" />
  </main>
</template>
