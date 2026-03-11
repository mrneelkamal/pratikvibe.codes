"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-purple/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-cyan/5 blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-mono text-sm tracking-wider text-text-muted md:text-base"
        >
          {"//"} last semester. one shot. no regrets.
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 text-7xl font-black tracking-tighter md:text-9xl"
        >
          <span className="gradient-text">PRATIK</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-4 text-xl font-light tracking-wide text-text-primary md:text-2xl"
        >
          From average engineer to{" "}
          <span className="font-semibold text-accent-glow">10x builder</span>
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto max-w-xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Building in public. Vibe coding my way through the final semester.
          <br />
          Becoming an{" "}
          <span className="font-mono text-accent-cyan">AdmaX</span> engineer.
        </motion.p>

        {/* Nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "My Story", href: "#story" },
            { label: "Projects", href: "#projects" },
            { label: "Resources", href: "#resources" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-text-muted transition-all duration-300 hover:border-accent-purple/50 hover:text-text-primary hover:glow-purple"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}
