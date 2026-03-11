export interface StoryBlock {
  id: string;
  type: "paragraph" | "highlight" | "quote" | "heading";
  text: string;
}

export const story: StoryBlock[] = [
  {
    id: "intro-heading",
    type: "heading",
    text: "The Story",
  },
  {
    id: "opening",
    type: "paragraph",
    text: "I am Pratik. An engineering student from an average engineering school in India. Average grades. Average faculty. Average everything. And I'm not saying that to be modest — I'm saying it because it's the truth that thousands of us live every day.",
  },
  {
    id: "reality",
    type: "paragraph",
    text: "Four years. Eight semesters. Fifteen courses in computer science. Data structures, algorithms, operating systems, databases — I've studied them all. I can tell you what a binary tree is. I can write a sorting algorithm on a whiteboard. I can explain the OSI model.",
  },
  {
    id: "but",
    type: "highlight",
    text: "But ask me to build a web application from scratch? Ask me to take an idea and turn it into something real, something people can use? I wouldn't know where to start.",
  },
  {
    id: "thousands",
    type: "paragraph",
    text: "And I'm not alone. There are thousands of students just like me, graduating every year, armed with theoretical knowledge but lacking the ability to create. We understand code, but we don't know how to build. We know programming languages, but we've never shipped a product.",
  },
  {
    id: "gap",
    type: "quote",
    text: "The gap between knowing how to code and knowing how to build is the gap between a student and an engineer.",
  },
  {
    id: "realization",
    type: "paragraph",
    text: "But here's what I realized about myself — I'm entrepreneurial. I'm scrappy. I'm resourceful. When life throws a problem at me, I figure it out. I hustle, I learn, I adapt. Every Indian engineering student has this in them. We've been doing it our whole lives.",
  },
  {
    id: "question",
    type: "highlight",
    text: "So why couldn't I apply that same energy, that same scrappiness, to building software? The answer was simple: nobody showed me how.",
  },
  {
    id: "turning-point",
    type: "heading",
    text: "The Turning Point",
  },
  {
    id: "discovery",
    type: "paragraph",
    text: "Then I discovered vibe coding. Not just AI-assisted development — a completely new way of thinking about building software. A way that takes the entrepreneurial mindset I already have and channels it into creating real applications.",
  },
  {
    id: "decision",
    type: "highlight",
    text: "I made a decision. My last semester — these final four months — would not be like the seven semesters before it. I would not sit in classrooms absorbing theory. I would build. I would ship. I would become the engineer I was supposed to be.",
  },
  {
    id: "commitment",
    type: "paragraph",
    text: "Not a 1x engineer who can pass an exam. A 10x engineer who can produce outcomes. Someone who can conceptualize, design, and build applications end to end. Someone who is ready to be productive from day one. Someone who creates value from the moment they join a team.",
  },
  {
    id: "admax",
    type: "quote",
    text: "I call it becoming an AdmaX engineer — someone who maximizes their potential by admitting what they don't know and relentlessly closing that gap.",
  },
  {
    id: "journey",
    type: "heading",
    text: "The Journey",
  },
  {
    id: "plan",
    type: "paragraph",
    text: "Over the next four months, I'm going to build application after application. Each one will teach me something new. Each one will push my boundaries. Each one will be a step from average to exceptional.",
  },
  {
    id: "public",
    type: "paragraph",
    text: "And I'm doing it all in public. Every application I build will be documented here — what it does, why I built it, what I learned. Not to show off, but to show that it's possible. That someone from an average background can do extraordinary things when they decide to stop being average.",
  },
  {
    id: "closing",
    type: "highlight",
    text: "This is not just my portfolio. This is proof that the only thing standing between an average engineering student and a 10x engineer is a decision — and four months of relentless building.",
  },
  {
    id: "invitation",
    type: "paragraph",
    text: "If you're reading this and you see yourself in my story, know this: I started exactly where you are. The journey from here is not about talent or privilege or the school you went to. It's about deciding that average is not your destination — it's just your starting point.",
  },
];
