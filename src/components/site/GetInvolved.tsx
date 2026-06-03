import { Brush, Handshake, Users } from "lucide-react";

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    body: "Share your time and skills - from art and healthcare to education, environment, and event support.",
    cta: "Become a Volunteer",
  },
  {
    icon: Brush,
    title: "Donate",
    body: "Fund art supplies, workshops, scholarships, and community projects. Every shilling counts.",
    cta: "Give Today",
    href: "#donate",
  },
  {
    icon: Handshake,
    title: "Partner",
    body: "Corporate, educational, NGO, or government - let's design a partnership that amplifies impact.",
    cta: "Explore Partnership",
  },
];

export function GetInvolved() {
  return (
    <section id="involved" className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
            How to join us
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
            Three ways to power the movement.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Volunteers are the backbone of our organization. Whether you give a few hours a month or
            partner with us long-term, your contribution creates lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((w) => (
            <div
              key={w.title}
              className="group p-8 rounded-3xl bg-cream border border-border hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="size-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <w.icon className="size-7" strokeWidth={2.25} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{w.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{w.body}</p>
              <a
                href={w.href || "#contact"}
                className="inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all"
              >
                {w.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
