import { defineStore } from "pinia";
import { ref } from "vue";

import { api } from "@/lib/api";
import type { Donation, DonationPayload } from "@/lib/types";

export const useDonationStore = defineStore("donation", () => {
  const submitting = ref(false);
  const lastReference = ref<string | null>(null);
  const error = ref<string | null>(null);

  async function submit(payload: DonationPayload): Promise<Donation | null> {
    submitting.value = true;
    error.value = null;
    try {
      const { data } = await api.post<Donation>("/donations", payload);
      lastReference.value = data.reference_code;
      return data;
    } catch (e: any) {
      error.value = e?.response?.data?.detail ?? "Could not submit donation.";
      return null;
    } finally {
      submitting.value = false;
    }
  }

  return { submitting, lastReference, error, submit };
});
