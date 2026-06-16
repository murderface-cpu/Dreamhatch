import { defineStore } from "pinia";
import { ref } from "vue";

import { api } from "@/lib/api";
import type { ContactPayload, ContactSubmission } from "@/lib/types";

export const useContactStore = defineStore("contact", () => {
  const submitting = ref(false);
  const success = ref(false);
  const error = ref<string | null>(null);

  async function submit(payload: ContactPayload): Promise<ContactSubmission | null> {
    submitting.value = true;
    error.value = null;
    success.value = false;
    try {
      const { data } = await api.post<ContactSubmission>("/contact", payload);
      success.value = true;
      return data;
    } catch (e: any) {
      error.value = e?.response?.data?.detail ?? "Could not send your message.";
      return null;
    } finally {
      submitting.value = false;
    }
  }

  return { submitting, success, error, submit };
});
