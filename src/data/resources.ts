export interface Resource {
  title: string;
  url: string;
  type: "youtube" | "twitter" | "article" | "blog" | "person" | "tool";
  description: string;
  author?: string;
}

export const resources: Record<string, Resource[]> = {
  "People to Follow": [
    {
      title: "Andrej Karpathy",
      url: "https://x.com/karpathy",
      type: "person",
      description:
        "Former Tesla AI Director, Stanford PhD. His approach to building and learning in public is incredibly inspiring.",
      author: "@karpathy",
    },
    {
      title: "Pieter Levels",
      url: "https://x.com/levelsio",
      type: "person",
      description:
        "Indie hacker who builds profitable startups solo. The godfather of building in public and shipping fast.",
      author: "@levelsio",
    },
    {
      title: "Sahil Lavingia",
      url: "https://x.com/shl",
      type: "person",
      description:
        "CEO of Gumroad. Champion of the minimalist entrepreneur mindset.",
      author: "@shl",
    },
    {
      title: "Guillermo Rauch",
      url: "https://x.com/raaborern",
      type: "person",
      description:
        "CEO of Vercel, creator of Next.js. Follow him to understand where web development is going.",
      author: "@rauchg",
    },
    {
      title: "Dario Amodei",
      url: "https://x.com/DarioAmodei",
      type: "person",
      description:
        "CEO of Anthropic. Understanding AI leadership helps you understand where vibe coding is headed.",
      author: "@DarioAmodei",
    },
  ],
  "YouTube Channels": [
    {
      title: "Fireship",
      url: "https://www.youtube.com/@Fireship",
      type: "youtube",
      description:
        "100-second explainers on every tech topic imaginable. Perfect for rapid learning.",
    },
    {
      title: "Theo - t3.gg",
      url: "https://www.youtube.com/@t3dotgg",
      type: "youtube",
      description:
        "Deep dives into web development, TypeScript, and the modern dev ecosystem.",
    },
    {
      title: "The Primeagen",
      url: "https://www.youtube.com/@ThePrimeTimeagen",
      type: "youtube",
      description:
        "High-energy takes on software engineering, performance, and the craft of coding.",
    },
    {
      title: "freeCodeCamp",
      url: "https://www.youtube.com/@freecodecamp",
      type: "youtube",
      description:
        "Full-length tutorials and courses on everything from web dev to machine learning. Free.",
    },
  ],
  "Articles & Blogs": [
    {
      title: "How to Build a Startup",
      url: "https://www.ycombinator.com/library",
      type: "article",
      description:
        "Y Combinator's library of startup advice. Applicable to building any product.",
      author: "Y Combinator",
    },
    {
      title: "The Pragmatic Engineer",
      url: "https://blog.pragmaticengineer.com/",
      type: "blog",
      description:
        "Gergely Orosz writes the most insightful engineering career and industry content on the internet.",
      author: "Gergely Orosz",
    },
    {
      title: "Paul Graham's Essays",
      url: "https://paulgraham.com/articles.html",
      type: "blog",
      description:
        "Timeless essays on startups, programming, and thinking clearly. Required reading.",
      author: "Paul Graham",
    },
    {
      title: "Build in Public Handbook",
      url: "https://kevoncheung.com/building-in-public",
      type: "article",
      description:
        "A practical guide to building in public — exactly what I'm doing with this website.",
      author: "Kevon Cheung",
    },
  ],
  "Tools & Frameworks": [
    {
      title: "Claude by Anthropic",
      url: "https://claude.ai",
      type: "tool",
      description:
        "The AI assistant powering my vibe coding journey. My pair programmer, mentor, and collaborator.",
    },
    {
      title: "Vercel",
      url: "https://vercel.com",
      type: "tool",
      description:
        "Deploy web applications in seconds. Where all my projects live.",
    },
    {
      title: "Next.js",
      url: "https://nextjs.org",
      type: "tool",
      description:
        "The React framework for the web. My go-to for building modern applications.",
    },
    {
      title: "Tailwind CSS",
      url: "https://tailwindcss.com",
      type: "tool",
      description:
        "Utility-first CSS that makes styling fast and consistent. A game-changer.",
    },
    {
      title: "GitHub",
      url: "https://github.com",
      type: "tool",
      description:
        "Where all my code lives. Version control and collaboration made simple.",
    },
  ],
};
