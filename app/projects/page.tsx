import { getAllProjectsData } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFrontmatter } from "@/lib/types";

export const metadata = {
  title: "All Project | Stanley",
  description: "List of all the projects I have worked on.",
};

export default function ProjectsPage() {
  const allProjects = getAllProjectsData() as ProjectFrontmatter[];

  return (
    <div className="container max-w-screen-lg mx-auto px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          All Project
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Below is a collection of projects that I have built and developed.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
