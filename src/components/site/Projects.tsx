import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Mazingira Community Drive",
    cat: "Environment · Ikolomani",
    img: "https://dreamhatchkenya.org/images/1024/14106734/Drive1.jpg",
    href: "/projects/mazingira-community-drive",
    body: "A cultural revival bringing Isukha and Idakho traditions together with modern restoration techniques - healing land and water damaged by mining, and empowering local women as guardians of the land.",
  },
  {
    title: "Sustainability & Climate-Smart Farming",
    cat: "Environment",
    img: "https://dreamhatchkenya.org/images/1024/14106719/2.jpeg.jpg",
    href: "/projects/sustainability-climate-smart-farming",
    body: "Land reclamation and responsible agriculture restoring soil health and creating a model for climate-smart farming that benefits the entire community.",
  },
  {
    title: "Reforestation Projects",
    cat: "Environment",
    img: "https://dreamhatchkenya.org/images/1024/14106695/4.jpeg.jpg",
    href: "/projects/reforestation",
    body: "Planting trees in deforested areas to revive habitats, sequester carbon, and support local communities through sustainable land use.",
  },
  {
    title: "Arts-Based Awareness Campaigns",
    cat: "Awareness",
    img: "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
    href: "/projects/arts-based-awareness",
    body: "Performances and workshops raising consciousness around important social issues - using art to spark dialogue and stimulate change.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
              What we're building
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
              Projects with measurable impact.
            </h2>
          </div>
          
          <a href="#donate"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Fund a project <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-elegant block ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <article>
                <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[16/10]"} overflow-hidden`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end text-cream">
                    <span className="text-xs uppercase tracking-[0.18em] font-bold text-accent mb-3">
                      {p.cat}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-cream/85 text-sm md:text-base leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                    {/* CTA on hover */}
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}