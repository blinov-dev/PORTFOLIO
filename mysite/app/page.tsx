import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/features/about/about-section";
import { ContactsSection } from "@/features/contacts/contacts-section";
import { HeroSection } from "@/features/hero/hero-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ServicesSection } from "@/features/services/services-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { WorkProcessSection } from "@/features/work-process/work-process-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
