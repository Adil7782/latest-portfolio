'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { ContainerTextFlip } from './ui/container-text-flip';
import { Particles } from './ui/particles';
import { useTheme } from 'next-themes';
import { DockDemo } from './mockDock';
import { ShinyButton } from "@/components/ui/shiny-button"
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { CometCardDemo } from './hero-image';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    setMounted(true);
  }, []);

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (mounted) {
      setColor(resolvedTheme === "light" ? "#000000" : "#ffffff");
    }
  }, [mounted, resolvedTheme]);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-background dark:via-blue-950/20 dark:to-background"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.05] -z-10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Profile Picture */}
        <div data-aos="zoom-in" className="mb-6">
          <div className="relative w-72 h-7w-72 mx-auto">
            <CometCardDemo/>
          </div>
        </div>

        {/* Name */}
        <div className="flex items-center justify-center gap-24">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-bold mb-4 flex items-center gap-4"
          >
            <span>Hi, I&apos;m</span>
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {/* 🔹 FIX 1: Wrapped client component in mounted check */}
              {mounted && (
                <ContainerTextFlip words={[ 'Adil Saaly','Adil', 'Aadhi']} />
              )}
            </span>
          </h1>
        </div>

        {/* Typing Animation */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground h-20"
        >
          {mounted && (
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Content Creator', 2000,
                'Trilingual Speaker', 2000,
                'Student of SLIATE', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          )}
        </div>

        {/* Subtitle */}
        {/* 🔹 FIX 2: Changed <p> to <div> to prevent nesting errors */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting modern, responsive, and user-friendly web applications using the latest technologies.
          I&apos;m passionate about clean code, smart design, and delivering seamless user experiences.
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View My Work</span>
          </HoverBorderGradient>
          <InteractiveHoverButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </InteractiveHoverButton>
        </div>

        <div className=""></div>

        <div className="" data-aos="fade-up" data-aos-delay="1000">
          {mounted && <DockDemo/>}
        </div>
        
        {/* Floating Arrow */}
        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}