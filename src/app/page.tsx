import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperiencesSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ExperiencesSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
