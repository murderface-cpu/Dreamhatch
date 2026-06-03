const IMG_MISSION = "https://dreamhatchkenya.org/images/576/15628526/IMG-20250416-WA0000-4TPHTGdpoxBAu2FY6vG6_g.jpg";
const IMG_VISION = "https://dreamhatchkenya.org/images/576/18781510/WhatsAppImage2025-08-29at10.56.08AM-AIxRnlMgzX4MMcGNjMTbuw.jpeg";

const blocks = [
  {
    tag: "Our Mission",
    title: "Art as a force for sustainable change.",
    body: "We harness the transformative power of art and culture to drive sustainable development in health, education, and environmental awareness - empowering individuals to flourish and contribute meaningfully to society.",
    img: IMG_MISSION,
    alt: "Community gathering with Dream Hatch Kenya",
  },
  {
    tag: "Our Vision",
    title: "A world where creativity drives collective progress.",
    body: "We envision a vibrant world where art and culture catalyse personal growth, foster connection across diverse backgrounds, and shape a more sustainable, equitable society where everyone can thrive.",
    img: IMG_VISION,
    alt: "Workshop participants engaged in creative expression",
    reverse: true,
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Why we exist</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
            Creativity is our most powerful tool for change.
          </h2>
        </div>

        <div className="space-y-24">
          {blocks.map((b) => (
            <div
              key={b.tag}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                b.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/30 rounded-3xl rotate-2" />
                <img
                  src={b.img}
                  alt={b.alt}
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-elegant"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
                  {b.tag}
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-black mt-3 leading-[1.05]">
                  {b.title}
                </h3>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
