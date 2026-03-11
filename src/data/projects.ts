export interface Project {
  id: string;
  title: string;
  description: string;
  story?: string;
  status: "idea" | "building" | "shipped";
  techStack: string[];
  link?: string;
  githubLink?: string;
  image?: string;
  month: number;
  hasDetailPage?: boolean;
}

export const projects: Project[] = [
  {
    id: "pratikvibe-codes",
    title: "pratikvibe.codes",
    description:
      "This very website — my digital home and portfolio. Built as my first project to establish my presence and document the journey.",
    story:
      "Every journey needs a starting point. This website is mine. I built it to prove to myself that I could ship something real, and to hold myself accountable by building in public.",
    status: "shipped",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://pratikvibe.codes",
    month: 1,
  },
  {
    id: "entrancedates",
    title: "entrancedates.com",
    description:
      "A one-stop platform for Indian students to discover, track, and manage engineering entrance exam dates, forms, fees, and applications — all from one place.",
    story:
      "When my younger brother started preparing for his entrance exams, I saw him go through the same chaos I went through. Dozens of exams, scattered deadlines, confusing forms. Nobody helped me back then — so I decided to build the help I never had.",
    status: "building",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://entrancedates.com",
    month: 1,
    hasDetailPage: true,
  },
  {
    id: "moon-and-seema",
    title: "Moon & Seema — 25 Years",
    description:
      "A digital celebration of Moon and Seema's 25th wedding anniversary — their love story, photos, videos, and memories preserved forever on the web.",
    story:
      "I attended their 25th anniversary and was so moved by their journey together that I decided to build something lasting — a website that captures their story so the celebration lives on forever.",
    status: "shipped",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://pratik1284.github.io/M-and-S/",
    githubLink: "https://github.com/pratik1284/M-and-S",
    month: 1,
    hasDetailPage: true,
  },
  {
    id: "project-4",
    title: "Coming Soon",
    description: "Building momentum, one application at a time.",
    status: "idea",
    techStack: [],
    month: 2,
  },
  {
    id: "project-5",
    title: "Coming Soon",
    description:
      "By month 3, the compound effect of building kicks in.",
    status: "idea",
    techStack: [],
    month: 3,
  },
  {
    id: "project-6",
    title: "Coming Soon",
    description:
      "The final stretch. Shipping with confidence and velocity.",
    status: "idea",
    techStack: [],
    month: 4,
  },
];
