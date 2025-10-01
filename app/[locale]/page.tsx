import { ContactSection } from "@/components/ContactSection/ContactSection";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { useWeatherData } from "@/hooks/useWeatherData";

export default function Home() {

  return (
    <>
      <Hero />
      <Timeline />
      <ContactSection />
    </>
  );
}
