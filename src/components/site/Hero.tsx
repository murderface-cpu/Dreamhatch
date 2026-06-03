import { ArrowRight, Heart } from "lucide-react";

const HERO_IMG = "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Dream Hatch Kenya community performance bringing people together through art"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="container-page relative z-10 pb-16 md:pb-28 pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Empowering Kenyan Communities Since 2020
          </span>

          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] text-cream">
            Art that <em className="text-accent not-italic font-black">heals</em>.
            <br />
            Communities that <span className="text-accent">rise</span>.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
            Dream Hatch Kenya channels creativity, compassion, and action to transform health,
            education, and the environment - one community at a time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#donate"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-warm hover:scale-[1.03] transition-transform"
            >
              <Heart className="size-4 fill-current" />
              Donate Now
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#involved"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream/10 backdrop-blur border border-cream/30 text-cream font-semibold hover:bg-cream/20 transition"
            >
              Get Involved
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            {[
              { n: "2,500+", l: "Students reached" },
              { n: "45", l: "Projects delivered" },
              { n: "120+", l: "Volunteers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-black text-accent">{s.n}</div>
                <div className="text-xs md:text-sm text-cream/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
