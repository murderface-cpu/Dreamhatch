import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export interface ProjectData {
  slug: string;
  title: string;
  cat: string;
  heroImg: string;
  tagline: string;
  overview: string;
  sections: {
    title: string;
    body: string;
    img?: string;
    imgAlt?: string;
    items?: string[];
  }[];
  gallery: string[];
  relatedSlug?: string;
  relatedTitle?: string;
}

export const projects: ProjectData[] = [
  {
    slug: "mazingira-community-drive",
    title: "Mazingira Community Drive",
    cat: "Environment · Ikolomani",
    heroImg: "https://dreamhatchkenya.org/images/1024/14106734/Drive1.jpg",
    tagline: "Healing land, water, and heritage - one community at a time.",
    overview:
      "The Mazingira Community Drive is a cultural revival rooted in Ikolomani, Kenya. Bringing together the powerful traditions of the Isukha and Idakho communities with modern restoration techniques, we are healing land and water sources damaged by years of gold mining. This initiative empowers local women to reclaim their ancestral role as guardians of the land, using art and culture to rebuild not just the environment, but also the spirit of the community.",
    sections: [
      {
        title: "Building on Success",
        body: "This project builds on the success of the Mazingira School Drive and emphasises the use of art and culture as powerful tools to inspire collective action and foster a sustainable relationship between the community and the environment.",
        img: "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg",
        imgAlt: "Community gathering during the Mazingira Drive",
      },
      {
        title: "Awareness Through Art & Culture",
        body: "Community members actively engage in traditional songs, energetic dances, captivating theatre performances, and symbolic bullfighting displays to raise awareness about pressing environmental issues. Cultural expressions serve as powerful tools for education and advocacy - uniting the community to promote sustainability.",
        img: "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
        imgAlt: "Cultural performance raising environmental awareness",
      },
      {
        title: "Key Components",
        body: "The project operates through four interconnected pillars, each reinforcing the others to create lasting, measurable change across the community.",
        items: [
          "Awareness Through Art and Culture - songs, dance, theatre, storytelling, and poetry held in schools, markets, and community spaces",
          "Educational Workshops - sustainable practices including land mediation, agroforestry, and organic farming for women",
          "Physical Restoration - tree planting, filling manholes, clearing debris, and restoring River Isiukhu with beneficial microorganisms",
          "Digital Monitoring App - tracking tree growth and water quality improvement to ensure accountability and long-term sustainability",
        ],
      },
      {
        title: "Sustainable Beekeeping",
        body: "Nestled among eucalyptus trees, our apiary represents a sustainable livelihood for community members. Strategically placed hives provide a cool, shaded environment for healthy bee colonies. Inside the protected structure, dozens of hives support colony growth and honey production, with each hive numbered for monitoring and management.",
        img: "https://dreamhatchkenya.org/images/576/15628526/IMG-20250416-WA0000-4TPHTGdpoxBAu2FY6vG6_g.jpg",
        imgAlt: "Sustainable beekeeping apiary",
      },
    ],
    gallery: [
      "https://dreamhatchkenya.org/images/1024/14106734/Drive1.jpg",
      "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg",
      "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
      "https://dreamhatchkenya.org/images/576/15628526/IMG-20250416-WA0000-4TPHTGdpoxBAu2FY6vG6_g.jpg",
    ],
    relatedSlug: "sustainability-climate-smart-farming",
    relatedTitle: "Sustainability & Climate-Smart Farming",
  },
  {
    slug: "sustainability-climate-smart-farming",
    title: "Sustainability & Climate-Smart Farming",
    cat: "Environment",
    heroImg: "https://dreamhatchkenya.org/images/1024/14106719/2.jpeg.jpg",
    tagline: "Restoring the soil. Feeding the future.",
    overview:
      "Our community is taking action to build a more sustainable future. This team is at the forefront of a new environmental initiative, focusing on land reclamation and responsible agriculture. We work to restore the health of the soil and create a model for climate-smart farming that will benefit the entire community - nurturing the land and protecting our environment for generations to come.",
    sections: [
      {
        title: "Land Reclamation & Soil Restoration",
        body: "Degraded land is rehabilitated through careful land mediation techniques, restoring organic matter and soil structure. Once marginal plots are returned to fertility, they become productive demonstration farms that inspire the wider community.",
        img: "https://dreamhatchkenya.org/images/1024/18781503/WhatsAppImage2025-08-29at10.56.10AM-98xqwwOLBYcl259PvO4J-w.jpeg",
        imgAlt: "Land reclamation activities in the field",
      },
      {
        title: "Responsible Agriculture Practices",
        body: "Working with farmers to introduce climate-smart techniques - composting, intercropping, water harvesting, and reduced agrochemical use - that improve yields while protecting biodiversity and water sources.",
        img: "https://dreamhatchkenya.org/images/1024/18781507/WhatsAppImage2025-08-29at10.56.09AM-wagqMOmo-IBx2X9CrIXMTw.jpeg",
        imgAlt: "Farmers learning climate-smart techniques",
      },
      {
        title: "A Model for the Region",
        body: "The farms we establish serve as living classrooms - demonstrating what is possible when traditional knowledge meets modern agronomy. Farmers, students, and policymakers visit to see the results firsthand and take lessons back to their own communities.",
        items: [
          "Composting and organic fertiliser production",
          "Intercropping and companion planting to maximise yields",
          "Rainwater harvesting structures and drip irrigation",
          "Reduced chemical inputs through integrated pest management",
          "Farmer field schools and peer-to-peer learning",
        ],
      },
      {
        title: "Women at the Centre",
        body: "Women make up a majority of smallholder farmers in the region. Our programme specifically targets women-led households with training, inputs, and market linkages - recognising that empowering women multiplies impact across entire families and communities.",
        img: "https://dreamhatchkenya.org/images/1024/18781512/WhatsAppImage2025-08-29at10.56.08AM1-fS2c3lygyLd7zWUmNV_xOQ.jpeg",
        imgAlt: "Women farmers engaged in sustainable agriculture training",
      },
    ],
    gallery: [
      "https://dreamhatchkenya.org/images/1024/14106719/2.jpeg.jpg",
      "https://dreamhatchkenya.org/images/1024/18781503/WhatsAppImage2025-08-29at10.56.10AM-98xqwwOLBYcl259PvO4J-w.jpeg",
      "https://dreamhatchkenya.org/images/1024/18781507/WhatsAppImage2025-08-29at10.56.09AM-wagqMOmo-IBx2X9CrIXMTw.jpeg",
      "https://dreamhatchkenya.org/images/1024/18781516/WhatsAppImage2025-08-29at10.56.06AM-zkOo3SZyIoA9xGkuaDRAiw.jpeg",
    ],
    relatedSlug: "reforestation",
    relatedTitle: "Reforestation Projects",
  },
  {
    slug: "reforestation",
    title: "Reforestation Projects",
    cat: "Environment",
    heroImg: "https://dreamhatchkenya.org/images/1024/14106695/4.jpeg.jpg",
    tagline: "Planting hope. Growing futures.",
    overview:
      "Reforestation initiatives are crucial for restoring ecosystems, enhancing biodiversity, and mitigating climate change. Our projects involve planting trees in deforested and degraded areas, aiming to revive natural habitats and sequester carbon dioxide. Successful reforestation not only improves air quality but also fosters wildlife habitats, promotes sustainable land use, and supports local communities.",
    sections: [
      {
        title: "Why Reforestation Matters",
        body: "Kenya has lost a significant portion of its forest cover over the past century. Deforestation leads to soil erosion, reduced water retention, loss of biodiversity, and increased vulnerability to climate extremes. Restoring tree cover is one of the most cost-effective climate interventions available.",
        img: "https://dreamhatchkenya.org/images/475/14111155/IMG-20240516-WA0280-1.jpg",
        imgAlt: "Volunteers planting trees in a deforested area",
      },
      {
        title: "Community-Led Tree Planting",
        body: "We work with schools, local landowners, and community groups to plant native and fruit tree species across degraded landscapes. Every planting event doubles as an environmental education session - connecting people to the land and building long-term stewardship.",
        img: "https://dreamhatchkenya.org/images/475/14111158/IMG-20240516-WA0287.jpg",
        imgAlt: "Community members engaged in a tree planting event",
      },
      {
        title: "Our Approach",
        body: "Reforestation is most successful when communities own the process. We source locally adapted seedlings, train community nursery managers, and establish simple monitoring systems to track survival rates and growth.",
        items: [
          "Community nurseries producing locally adapted seedlings",
          "Native species prioritised to maximise biodiversity value",
          "School-based tree adoption programmes for long-term stewardship",
          "Follow-up monitoring and care support for the first two years",
          "Integration with agroforestry on smallholder farms",
        ],
      },
      {
        title: "Impact on People & Planet",
        body: "Beyond carbon and biodiversity, our reforestation work creates tangible livelihood benefits: firewood, fruit, fodder, and shade. Trees planted on farms improve crop yields through better water retention and reduced soil erosion, creating a virtuous cycle between environmental and economic wellbeing.",
        img: "https://dreamhatchkenya.org/images/475/14111160/IMG-20240516-WA0292.jpg",
        imgAlt: "Healthy young trees growing after planting",
      },
    ],
    gallery: [
      "https://dreamhatchkenya.org/images/475/14111155/IMG-20240516-WA0280-1.jpg",
      "https://dreamhatchkenya.org/images/475/14111158/IMG-20240516-WA0287.jpg",
      "https://dreamhatchkenya.org/images/475/14111160/IMG-20240516-WA0292.jpg",
      "https://dreamhatchkenya.org/images/475/14111163/IMG-20240516-WA0289-1.jpg",
      "https://dreamhatchkenya.org/images/475/14111164/IMG-20240516-WA0294.jpg",
      "https://dreamhatchkenya.org/images/475/14111166/IMG-20240516-WA0288-1.jpg",
    ],
    relatedSlug: "arts-based-awareness",
    relatedTitle: "Arts-Based Awareness Campaigns",
  },
  {
    slug: "arts-based-awareness",
    title: "Arts-Based Awareness Campaigns",
    cat: "Awareness",
    heroImg: "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
    tagline: "Art that speaks. Communities that listen.",
    overview:
      "Through performances, workshops, and creative campaigns, Dream Hatch Kenya uses art to spark dialogue and stimulate change around the issues that matter most - health, environment, education, and social justice. We believe that creative expression reaches people in ways that statistics never can.",
    sections: [
      {
        title: "Performance as Advocacy",
        body: "Our performance teams travel to schools, markets, community centres, and religious institutions with theatre, music, dance, and spoken word that bring pressing social issues to life. Reaching audiences where they already gather removes barriers to engagement and creates shared experiences that shift attitudes.",
        img: "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
        imgAlt: "Artists performing at a community awareness event",
      },
      {
        title: "Creative Workshops",
        body: "Beyond passive audiences, we run participatory workshops where community members become creators - painting murals, writing songs, and telling their own stories. This ownership deepens engagement and turns awareness into action.",
        img: "https://dreamhatchkenya.org/images/576/18781510/WhatsAppImage2025-08-29at10.56.08AM-AIxRnlMgzX4MMcGNjMTbuw.jpeg",
        imgAlt: "Workshop participants in a creative session",
      },
      {
        title: "What We Raise Awareness About",
        body: "Our campaigns are shaped by community needs and address topics that have the greatest potential for positive change.",
        items: [
          "Environmental degradation, deforestation, and climate adaptation",
          "Mental health and psychosocial support for young people",
          "Gender equality, women's rights, and girls' education",
          "Nutrition, hygiene, and preventable disease",
          "Civic participation and community governance",
        ],
      },
      {
        title: "Measuring Change",
        body: "We partner with community leaders to track attitudinal and behavioural change following campaigns - from school enrolment rates and environmental actions to health-seeking behaviour. Art without accountability is entertainment; art with evidence is transformation.",
        img: "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg",
        imgAlt: "Community members engaged in a post-campaign discussion",
      },
    ],
    gallery: [
      "https://dreamhatchkenya.org/images/1024/14106660/IMG-20250111-WA0016.jpg",
      "https://dreamhatchkenya.org/images/576/18781510/WhatsAppImage2025-08-29at10.56.08AM-AIxRnlMgzX4MMcGNjMTbuw.jpeg",
      "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg",
      "https://dreamhatchkenya.org/images/1024/14106734/Drive1.jpg",
    ],
    relatedSlug: "mazingira-community-drive",
    relatedTitle: "Mazingira Community Drive",
  },
];

// ─── Layout Component ────────────────────────────────────────────────────────

interface ProjectPageProps {
  project: ProjectData;
}

export function ProjectPageLayout({ project: p }: ProjectPageProps) {
  return (
    <main>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <img
          src={p.heroImg}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/20" />
        <div className="container-page relative z-10 pb-16 md:pb-24 pt-32">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-cream text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to all projects
          </a>
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-accent mb-4">
              {p.cat}
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.0] text-cream">
              {p.title}
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-accent font-display font-semibold italic">
              {p.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display font-medium">
              {p.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      {p.sections.map((s, i) => (
        <section
          key={s.title}
          className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-cream" : "bg-background"}`}
        >
          <div className="container-page">
            {s.img ? (
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-1" />
                  <img
                    src={s.img}
                    alt={s.imgAlt || s.title}
                    className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-elegant"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-5">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{s.body}</p>
                  {s.items && (
                    <ul className="mt-6 space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-3 text-muted-foreground">
                          <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="max-w-4xl">
                <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-5">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{s.body}</p>
                {s.items && (
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 p-4 rounded-xl bg-background border border-border"
                      >
                        <span className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ── Gallery ── */}
      {p.gallery.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container-page">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Gallery</span>
            <h2 className="font-display text-3xl md:text-5xl font-black mt-3 mb-10 text-secondary-foreground leading-tight">
              See the work in action.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {p.gallery.map((img, i) => (
                <div
                  key={img}
                  className={`relative overflow-hidden rounded-2xl ${
                    i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${p.title} - photo ${i + 1}`}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                      i === 0 ? "aspect-square md:h-full md:absolute md:inset-0" : "aspect-square"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-[30rem] bg-accent/20 rounded-full blur-3xl" />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Help us grow this project.
            </h2>
            <p className="mt-4 text-lg text-cream/80 leading-relaxed">
              Your donation, time, or partnership directly supports {p.title} and communities like it
              across Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#donate"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream text-ink font-semibold hover:scale-[1.03] transition-transform shadow-elegant"
              >
                <Heart className="size-4 fill-current text-primary" />
                Donate to this project
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream/10 backdrop-blur border border-cream/30 text-cream font-semibold hover:bg-cream/20 transition"
              >
                Get involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related project ── */}
      {p.relatedSlug && (
        <section className="py-14 bg-background border-t border-border">
          <div className="container-page flex items-center justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
                Up next
              </span>
              <p className="font-display text-2xl font-black mt-1">{p.relatedTitle}</p>
            </div>
            <a
              href={`/projects/${p.relatedSlug}`}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View project <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
