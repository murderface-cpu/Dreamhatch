import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
            Questions, answered.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div
                key={f.q}
                className="bg-background border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="font-display font-bold text-lg">{f.q}</span>
                  <span className="shrink-0 size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {active ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {active && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
