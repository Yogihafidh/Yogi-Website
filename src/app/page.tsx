import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { EngineeringExpertiseSection } from "@/sections/EngineeringExpertise";
import { ExperiencesSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { EngineeringThoughtsSection } from "@/sections/EngineeringThoughts";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ExperiencesSection />
      <TapeSection />
      <EngineeringExpertiseSection />
      <EngineeringThoughtsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
