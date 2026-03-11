"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, FileText, IndianRupee, Users, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: Calendar,
    title: "All Exam Dates in One Place",
    description:
      "JEE, NEET, BITSAT, VITEEE, COMEDK, state CETs — every engineering entrance exam in India, organized and updated.",
  },
  {
    icon: FileText,
    title: "Form Details & Direct Links",
    description:
      "Application deadlines, form links, required documents, and step-by-step guidance for each exam.",
  },
  {
    icon: IndianRupee,
    title: "Fee Information",
    description:
      "Know exactly how much each application costs — general, OBC, SC/ST categories — so there are no surprises.",
  },
  {
    icon: Users,
    title: "Exam Rankings & Difficulty",
    description:
      "Understand which exams are national vs state level, their acceptance rates, and level of difficulty.",
  },
  {
    icon: ShieldCheck,
    title: "One Profile, All Forms",
    description:
      "Fill in your details once — 12th marks, personal info, documents — and auto-fill across multiple exam applications.",
  },
  {
    icon: Zap,
    title: "Smart Reminders",
    description:
      "Never miss a deadline. Get notified before registration closes, admit cards release, or exam dates approach.",
  },
];

export default function EntranceDatesContent() {
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
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-purple" />
            Currently Building
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-black tracking-tight md:text-6xl"
          >
            <span className="gradient-text">entrancedates.com</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl"
          >
            One platform to discover, track, and manage every engineering
            entrance exam in India. No more scattered deadlines. No more
            missed forms. No more chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="rounded-md bg-surface-light px-3 py-1 font-mono text-xs text-text-muted">
              Next.js
            </span>
            <span className="rounded-md bg-surface-light px-3 py-1 font-mono text-xs text-text-muted">
              TypeScript
            </span>
            <span className="rounded-md bg-surface-light px-3 py-1 font-mono text-xs text-text-muted">
              Tailwind CSS
            </span>
          </motion.div>
        </div>
      </section>

      {/* The Story Behind It */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="gradient-text">Why I&apos;m Building This</span>
            </h2>
            <div className="mt-4 mb-10 h-px w-16 bg-gradient-to-r from-accent-purple to-accent-cyan" />
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-muted md:text-lg">
              My younger brother is about to finish his 12th standard. Like every
              Indian student at that stage, he&apos;s staring down a gauntlet of
              entrance exams — JEE Main, JEE Advanced, BITSAT, VITEEE, state
              CETs, and dozens more. Each with its own dates, its own forms, its
              own fees, its own rules.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="my-8 border-l-2 border-accent-purple py-2 pl-6">
              <p className="text-lg font-medium leading-relaxed text-text-primary md:text-xl">
                I&apos;ve been exactly where he is. A few years ago, I was the one
                scrambling to keep track of which form was due when, which exam
                needed which document, how much each one cost. And I remember
                the feeling — overwhelming, confusing, lonely.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              Nobody helped me through it. What I got instead was scolding when I
              missed a deadline, judgment when I didn&apos;t know the process,
              and criticism when I made mistakes. No guidance. No system. No
              support. Just chaos and pressure.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              Watching my brother go through the same thing, I felt something
              click. I&apos;m not that helpless kid anymore. I&apos;m an
              engineering student who&apos;s learning to build things. And this —
              this messy, stressful, broken process that millions of Indian
              students go through every year — this is a problem I can actually
              solve.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="my-10 rounded-lg bg-surface px-6 py-5">
              <p className="font-mono text-sm leading-relaxed text-accent-glow md:text-base">
                &ldquo;I didn&apos;t get help when I needed it. But I can make
                sure my brother — and every student like him — does. That&apos;s
                why entrancedates.com exists.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="my-6 text-base leading-loose text-text-primary/90 md:text-lg">
              This isn&apos;t just a project for my portfolio. This is personal.
              Every feature I build, I&apos;m thinking of the 17-year-old kid who
              just needs someone to say: &ldquo;Here are all your exams. Here
              are the dates. Here are the forms. You&apos;ve got this.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What It Will Do */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <span className="gradient-text">What It Will Do</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Built for the 12th-standard student who deserves a simpler process.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-accent-purple to-accent-cyan" />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.08}>
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

      {/* Vision */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
              <p className="mb-4 font-mono text-sm text-accent-cyan">
                {"//"} the vision
              </p>
              <h3 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
                One Student at a Time
              </h3>
              <p className="mx-auto max-w-lg leading-relaxed text-text-muted">
                If entrancedates.com helps even one student avoid the chaos I went
                through — one missed deadline prevented, one confusing form
                simplified — then every line of code was worth it. Starting with
                my brother, but built for every student in India.
              </p>
              <div className="mt-8">
                <a
                  href="https://entrancedates.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Visit entrancedates.com
                  <ExternalLink size={14} />
                </a>
              </div>
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
