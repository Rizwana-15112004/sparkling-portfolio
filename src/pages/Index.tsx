import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Loader } from "@/components/portfolio/Loader";
import { BackgroundCanvas } from "@/components/portfolio/BackgroundCanvas";
import { ArchitecturePlayground } from "@/components/portfolio/ArchitecturePlayground";
import { HireModal } from "@/components/portfolio/HireModal";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <BackgroundCanvas />
        <ScrollProgress />
        <Navbar onOpenHireModal={() => setIsHireModalOpen(true)} />
        <Hero />
        <Marquee />
        <About />
        <ArchitecturePlayground />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
      </main>
    </>
  );
};

export default Index;
