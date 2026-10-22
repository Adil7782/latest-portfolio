import { Navbar } from '@/components/navbar';
import { EditorialHeroSection } from '@/components/editorial-hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { CompanyProjectsSection } from '@/components/company-projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import TerminalCompo from '@/components/terminal';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />
      {/* Editorial Hero Layout */}
      <EditorialHeroSection />
      <AboutSection />
      <CompanyProjectsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TerminalCompo />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
