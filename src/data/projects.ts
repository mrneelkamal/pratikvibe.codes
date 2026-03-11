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
    id: "project-2",
    title: "Coming Soon",
    description:
      "The next application in my journey. Currently in the ideation phase.",
    status: "idea",
    techStack: [],
    month: 1,
  },
  {
    id: "project-3",
    title: "Coming Soon",
    description:
      "Month 2 brings new challenges and new applications to build.",
    status: "idea",
    techStack: [],
    month: 2,
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
