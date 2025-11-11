import { ContactSection } from "@/components/ContactSection/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SubHeroSection from "@/components/SubHero/SubHeroSection";

export default function Home() {

  return (
    <>
      <Hero />
      <SubHeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
