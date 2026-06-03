const stats = [
  { n: "2,500+", l: "Students engaged in arts-based learning" },
  { n: "45", l: "Community art projects completed" },
  { n: "120+", l: "Volunteers contributing skills & time" },
  { n: "18", l: "Partner organizations collaborating" },
];

const testimonials = [
  {
    initials: "JN",
    quote:
      "Volunteering with Dream Hatch Kenya has been transformative. Using my artistic skills to help children process difficult emotions has shown me the true healing power of art.",
    name: "Jane Njeri",
    role: "Art Therapist · Volunteer for 2 years",
  },
  {
    initials: "DM",
    quote:
      "As an environmental scientist, I was skeptical about how art could address ecological issues. After leading their eco-art workshops, the community engagement has been phenomenal.",
    name: "David Mbugua",
    role: "Environmental Educator · Volunteer",
  },
  {
    initials: "SK",
    quote:
      "Dream Hatch Kenya's art programs have transformed our school. Students are more engaged, creative, and confident. We're seeing improvements in all subject areas.",
    name: "Sarah Kamau",
    role: "Primary School Teacher",
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-cream">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
            Our Impact So Far
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
            Real numbers. Real lives. Real change.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border mb-20">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 md:p-10 text-center">
              <div className="font-display text-5xl md:text-6xl font-black text-primary">{s.n}</div>
              <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl bg-background border border-border flex flex-col"
            >
              <blockquote className="font-display text-lg leading-relaxed text-foreground italic flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
