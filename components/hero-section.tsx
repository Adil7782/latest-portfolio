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
export function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

    const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#000000" : "#000000ffffff")
  }, [resolvedTheme])


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-background dark:via-blue-950/20 dark:to-background"
    >
      {/* 🔹 Fullscreen Particles Background */}
       <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      {/* 🔹 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.05] -z-10" />

      {/* 🔹 Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Profile Picture */}
        <div data-aos="zoom-in" className="mb-6">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-400 p-[3px] shadow-lg shadow-blue-500/30 animate-pulse">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                <Image
                  src="/adil.jpg"
                  alt="Profile picture"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full rounded-full transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            <ContainerTextFlip words={['Adil', 'Adil Saaly', 'Aadhi']} />
          </span>
        </h1>

        <div className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-4"   data-aos="fade-up"
          data-aos-delay="300">
          And I’m a
        </div>

        {/* Typing Animation */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground h-20"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Content Creator',
              2000,
              'Trilingual Speaker',
              2000,
              'Student of SLIATE',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting modern, responsive, and user-friendly web applications using the latest technologies.
          I’m passionate about clean code, smart design, and delivering seamless user experiences.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <ShinyButton className='w-44' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
          </ShinyButton>
          
          <InteractiveHoverButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get In Touch</InteractiveHoverButton>
      
        </div>



<div className="">

</div>

<div className="" data-aos="fade-up"
          data-aos-delay="1000">
  <DockDemo/>
</div>

        {/* Social Links */}
       

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
