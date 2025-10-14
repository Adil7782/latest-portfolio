'use client';

import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-background dark:via-blue-950/20 dark:to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
         <div className="relative w-64 h-64 mx-auto">
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 p-[3px] animate-gradient-x shadow-lg shadow-blue-500/30">
    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
      <Image
        src="/adil.jpg"
        alt="Profile picture"
        width={128}
        height={128}
        className="object-cover w-full h-full rounded-full transition-transform duration-500 hover:scale-110"
      />
    </div>
  </div>
</div>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="text-gradient">Adil Saaly</span>
          </motion.h1>

          <div className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Content creator',
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Crafting beautiful, responsive, and user-friendly web applications with modern
            technologies. Passionate about clean code and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:john@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
}
