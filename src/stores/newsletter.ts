import { defineStore } from "pinia";
import { ref } from "vue";

import { api } from "@/lib/api";

export const useNewsletterStore = defineStore("newsletter", () => {
  const submitting = ref(false);
  const success = ref(false);
  const error = ref<string | null>(null);

  async function subscribe(email: string, full_name?: string): Promise<boolean> {
    submitting.value = true;
    error.value = null;
    success.value = false;
    try {
      await api.post("/newsletter/subscribe", { email, full_name });
      success.value = true;
      return true;
    } catch (e: any) {
      error.value = e?.response?.data?.detail ?? "Subscription failed.";
      return false;
    } finally {
      submitting.value = false;
    }
  }

  return { submitting, success, error, subscribe };
});
