"use client";

import { story } from "@/data/story";
import ScrollReveal from "../ui/ScrollReveal";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        {story.map((block, index) => {
          if (block.type === "heading") {
            return (
              <ScrollReveal key={block.id} className="mb-12 mt-16 first:mt-0">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  <span className="gradient-text">{block.text}</span>
                </h2>
                <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-purple to-accent-cyan" />
              </ScrollReveal>
            );
          }

          if (block.type === "highlight") {
            return (
              <ScrollReveal key={block.id} className="my-8">
                <div className="border-l-2 border-accent-purple py-2 pl-6">
                  <p className="text-lg font-medium leading-relaxed text-text-primary md:text-xl">
                    {block.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          }

          if (block.type === "quote") {
            return (
              <ScrollReveal key={block.id} className="my-10">
                <blockquote className="rounded-lg bg-surface px-6 py-5">
                  <p className="font-mono text-sm leading-relaxed text-accent-glow md:text-base">
                    &ldquo;{block.text}&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            );
          }

          // paragraph
          const isEarly = index < 5;
          return (
            <ScrollReveal key={block.id} className="my-6">
              <p
                className={`text-base leading-loose md:text-lg ${
                  isEarly ? "text-text-muted" : "text-text-primary/90"
                }`}
              >
                {block.text}
              </p>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
