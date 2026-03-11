"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Heart, Camera, Film, BookOpen } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: BookOpen,
    title: "Their Love Story",
    description:
      "The journey of Moon and Seema — from how they met to 25 years of building a life together, told through the moments that mattered most.",
  },
  {
    icon: Camera,
    title: "Photo Gallery",
    description:
      "A curated collection of photographs spanning 25 years — from early days to the anniversary celebration itself.",
  },
  {
    icon: Film,
    title: "Video Memories",
    description:
      "Video highlights from the celebration and cherished moments captured over the years.",
  },
  {
    icon: Heart,
    title: "Forever on the Web",
    description:
      "A permanent digital home for these memories — accessible anytime, anywhere, by everyone who was part of their journey.",
  },
];

export default function MoonAndSeemaContent() {
  return (
    <main className="min-h-screen">
      {/* Back navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-accent-purple/8 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-accent-cyan/8 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-1.5 text-sm font-medium text-accent-glow"
          >
            <Heart size={14} className="animate-pulse" />
            A Token of Love
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 text-4xl font-black tracking-tight md:text-6xl"
          >
            <span className="gradient-text">Moon & Seema</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-2xl font-light text-text-muted md:text-3xl"
          >
            25 Years of Together
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            A digital celebration of a love story that has lasted a quarter
            century — their journey, their memories, their celebration,
            preserved forever.
          </motion.p>
        </div>
      </section>

      {/* The Story Behind It */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="gradient-text">Why I Built This</span>
            </h2>
            <div className="mt-4 mb-10 h-px w-16 bg-gradient-to-r from-accent-purple to-accent-cyan" />
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-muted md:text-lg">
              I recently attended the 25th wedding anniversary of my uncle Moon
              and aunt Seema. Twenty-five years. A quarter of a century of
              choosing each other, every single day.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="my-8 border-l-2 border-accent-purple py-2 pl-6">
              <p className="text-lg font-medium leading-relaxed text-text-primary md:text-xl">
                Sitting at that celebration, listening to their stories, watching
                their family and friends share memories — I was moved. Not just
                by the milestone, but by the weight of it. Twenty-five years of
                love, compromise, laughter, and resilience.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              Celebrations end. The decorations come down. The guests go home.
              But the stories — the stories deserve to live on. And I realized
              that I now have the skills to make that happen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="my-10 rounded-lg bg-surface px-6 py-5">
              <p className="font-mono text-sm leading-relaxed text-accent-glow md:text-base">
                &ldquo;As a token of my love and appreciation for Moon uncle and
                Seema aunty, I decided to build them something that would last
                longer than any gift — a digital home for their memories.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              This website will capture their story — how they met, how they
              built a life together, and the beautiful celebration that marked
              their silver jubilee. It will hold the photos, the videos, and the
              moments that made the day special. So that years from now, anyone
              in the family can visit this site and relive it all.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              This project is also proof of something I believe deeply — that
              coding isn&apos;t just about building products or landing jobs.
              It&apos;s about creating things that matter to the people you love.
              And what matters more than preserving the story of a love that has
              lasted 25 years?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What It Will Include */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <span className="gradient-text">What It Will Include</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-accent-purple to-accent-cyan" />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-purple/30">
                  <feature.icon
                    size={24}
                    className="mb-4 text-accent-cyan"
                  />
                  <h3 className="mb-2 text-lg font-bold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
              <Heart size={32} className="mx-auto mb-4 text-accent-glow" />
              <h3 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
                For Moon & Seema
              </h3>
              <p className="mx-auto max-w-lg leading-relaxed text-text-muted">
                Here&apos;s to 25 more years of love, laughter, and togetherness.
                This website is my small way of saying — your story matters, and
                it deserves to be remembered.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
