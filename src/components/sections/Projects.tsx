import ProjectCard from "@/components/cards/ProjectCard";
import {projectsData} from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl text-center leading-tight font-bold">
        Full Stack Projects
      </h1>

      <div className="flex flex-col gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}