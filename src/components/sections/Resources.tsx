"use client";

import { resources } from "@/data/resources";
import SectionHeading from "../ui/SectionHeading";
import ResourceCard from "../ui/ResourceCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Resources() {
  const categories = Object.keys(resources);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Resources & Inspiration"
          subtitle="Everything that helped me on this journey. If you see yourself in my story, start here."
          id="resources"
        />

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <ScrollReveal>
                <h3 className="mb-6 text-xl font-bold text-text-primary">
                  {category}
                </h3>
              </ScrollReveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {resources[category].map((resource, index) => (
                  <ResourceCard
                    key={resource.title}
                    resource={resource}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <ScrollReveal className="mt-20">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
            <p className="mb-4 font-mono text-sm text-accent-cyan">
              {"//"} pass it on
            </p>
            <h3 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
              Your Turn
            </h3>
            <p className="mx-auto max-w-lg text-text-muted">
              Just like someone helped me see what&apos;s possible, I want to
              pass it on. If this page gave you even a spark of motivation,
              that&apos;s enough. Now go build something.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
