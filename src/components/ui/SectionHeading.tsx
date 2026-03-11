import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-16 text-center">
      <div id={id} className="scroll-mt-24">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-accent-purple to-accent-cyan" />
      </div>
    </ScrollReveal>
  );
}
