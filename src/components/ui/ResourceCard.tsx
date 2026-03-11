"use client";

import {
  Youtube,
  Twitter,
  FileText,
  BookOpen,
  User,
  Wrench,
  ExternalLink,
} from "lucide-react";
import type { Resource } from "@/data/resources";
import ScrollReveal from "./ScrollReveal";

const typeIcons = {
  youtube: Youtube,
  twitter: Twitter,
  article: FileText,
  blog: BookOpen,
  person: User,
  tool: Wrench,
};

const typeColors = {
  youtube: "text-red-400",
  twitter: "text-blue-400",
  article: "text-accent-glow",
  blog: "text-green-400",
  person: "text-accent-cyan",
  tool: "text-yellow-400",
};

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];

  return (
    <ScrollReveal delay={index * 0.05}>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:border-accent-purple/30 hover:bg-surface-light"
      >
        <div
          className={`mt-0.5 flex-shrink-0 ${typeColors[resource.type]}`}
        >
          <Icon size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h4 className="font-semibold text-text-primary transition-colors group-hover:text-accent-glow">
              {resource.title}
            </h4>
            <ExternalLink
              size={12}
              className="flex-shrink-0 text-text-dim opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          {resource.author && (
            <p className="mb-1 font-mono text-xs text-accent-cyan">
              {resource.author}
            </p>
          )}
          <p className="text-sm leading-relaxed text-text-muted">
            {resource.description}
          </p>
        </div>
      </a>
    </ScrollReveal>
  );
}
