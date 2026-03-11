"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

const statusColors = {
  idea: "bg-text-dim/20 text-text-muted",
  building: "bg-accent-purple/20 text-accent-glow",
  shipped: "bg-accent-cyan/20 text-accent-cyan",
};

const statusLabels = {
  idea: "Idea",
  building: "Building",
  shipped: "Shipped",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlaceholder = project.status === "idea";

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`group relative rounded-2xl border p-6 transition-all duration-300 ${
          isPlaceholder
            ? "border-dashed border-border bg-surface/30"
            : "border-border bg-surface hover:border-accent-purple/40 hover:glow-purple"
        }`}
      >
        {/* Status & Month */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
          <span className="font-mono text-xs text-text-muted">
            Month {project.month}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mb-2 text-xl font-bold ${
            isPlaceholder ? "text-text-muted" : "text-text-primary"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`mb-4 text-sm leading-relaxed ${
            isPlaceholder ? "text-text-dim" : "text-text-muted"
          }`}
        >
          {project.description}
        </p>

        {/* Story */}
        {project.story && (
          <p className="mb-4 border-l-2 border-accent-purple/30 pl-3 text-sm italic text-text-muted">
            {project.story}
          </p>
        )}

        {/* Tech Stack */}
        {project.techStack.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface-light px-2 py-1 font-mono text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.hasDetailPage && (
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-1.5 text-sm font-medium text-accent-glow transition-colors hover:text-accent-purple"
            >
              <ArrowRight size={14} />
              Read the story
            </Link>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-accent-cyan transition-colors hover:text-accent-glow"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
