"use client";

import { projects } from "@/data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="What I'm Building"
          subtitle="Every application is a step in the journey. From idea to shipped — tracked in real time."
          id="projects"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
