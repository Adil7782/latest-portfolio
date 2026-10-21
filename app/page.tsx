'use client';

import { useEffect, useRef } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { EditorialHeroSection } from '@/components/editorial-hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { CompanyProjectsSection } from '@/components/company-projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ParticlesBackground } from '@/components/ui/meshBackground';
import TerminalCompo from '@/components/terminal';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const ctx = gsap.context(() => {
      // Create ScrollSmoother
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
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
        </div>
      </div>
    </main>
  );
}
