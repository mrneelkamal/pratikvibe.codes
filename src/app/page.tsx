import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Projects from "@/components/sections/Projects";
import Resources from "@/components/sections/Resources";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <Projects />
      <Resources />
      <Footer />
    </main>
  );
}
