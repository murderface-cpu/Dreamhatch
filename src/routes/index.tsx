import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Focus } from "@/components/site/Focus";
import { Projects } from "@/components/site/Projects";
import { Impact } from "@/components/site/Impact";
import { Donate } from "@/components/site/Donate";
import { GetInvolved } from "@/components/site/GetInvolved";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Hatch Kenya - Art that heals. Communities that rise." },
      {
        name: "description",
        content:
          "Dream Hatch Kenya channels creativity, compassion and action to transform health, education and the environment across Kenya. Donate, volunteer, or partner with us.",
      },
      { property: "og:title", content: "Dream Hatch Kenya - Art that heals. Communities that rise." },
      {
        property: "og:description",
        content:
          "Empowering Kenyan communities through art, health, education and environmental sustainability.",
      },
      {
        property: "og:image",
        content: "https://dreamhatchkenya.org/images/1024/14106728/Drive4.jpg",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Focus />
      <Projects />
      <Impact />
      <Donate />
      <GetInvolved />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
