import { createFileRoute } from "@tanstack/react-router";
import { ProjectPageLayout, projects } from "@/components/site/ProjectPage";

const project = projects.find((p) => p.slug === "mazingira-community-drive")!;

export const Route = createFileRoute("/projects/mazingira-community-drive")({
  head: () => ({
    meta: [
      { title: `${project.title} - Dream Hatch Kenya` },
      { name: "description", content: project.overview },
      { property: "og:title", content: `${project.title} - Dream Hatch Kenya` },
      { property: "og:description", content: project.overview },
      { property: "og:image", content: project.heroImg },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <ProjectPageLayout project={project} />,
});
