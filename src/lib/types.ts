export type DonationStatus = "pending" | "completed" | "failed" | "refunded";

export interface DonationPayload {
  donor_name: string;
  donor_email: string;
  donor_phone?: string;
  amount_kes: number | string;
  is_monthly?: boolean;
  notes?: string;
}

export interface Donation extends DonationPayload {
  id: number;
  status: DonationStatus;
  reference_code: string;
  created_at: string;
}

export type ContactTopic =
  | "volunteering"
  | "donating"
  | "partnership"
  | "press"
  | "other";

export interface ContactPayload {
  full_name: string;
  email: string;
  phone?: string;
  topic: ContactTopic;
  message: string;
}

export interface ContactSubmission extends ContactPayload {
  id: number;
  is_resolved: boolean;
  created_at: string;
}

export interface ProjectSection {
  title: string;
  body: string;
  img?: string;
  imgAlt?: string;
  items?: string[];
}

export interface Project {
  slug: string;
  title: string;
  cat: string;
  heroImg: string;
  tagline: string;
  overview: string;
  sections: ProjectSection[];
  gallery: string[];
  relatedSlug?: string;
  relatedTitle?: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  cat: string;
  img: string;
  body: string;
}
