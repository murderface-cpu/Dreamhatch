import { GraduationCap, HeartPulse, Leaf, Palette } from "lucide-react";

const areas = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "We integrate art into curricula that engage learners and foster critical thinking - equipping the next generation with tools to navigate challenges.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    body: "Art as a healing modality - promoting mental well-being and building supportive networks that enhance community health and resilience.",
  },
  {
    icon: Leaf,
    title: "Environment",
    body: "Creative projects highlight ecological concerns and turn environmental challenges into opportunities for sustainable, lasting change.",
  },
  {
    icon: Palette,
    title: "Culture & Voice",
    body: "Through artistic expression, performers connect, inspire, and provoke thought - sparking dialogue around the issues that matter most.",
  },
];

export function Focus() {
  return (
    <section id="focus" className="py-24 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container-page relative">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-accent">
            Our Core Focus Areas
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
            Four pillars. One creative mission.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="group p-8 rounded-2xl bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-accent/50 transition-all"
            >
              <div className="size-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <a.icon className="size-7" strokeWidth={2.25} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{a.title}</h3>
              <p className="text-secondary-foreground/75 leading-relaxed text-[0.95rem]">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
