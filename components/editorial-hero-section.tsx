'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DockDemo } from './mockDock';

/*
 * =========================================================================
 * TRANSPARENT CUTOUT IMAGE CONFIGURATION:
 * 1. Remove the background from your photo (transparent PNG).
 * 2. Save it inside the /public folder as:
 *    /public/adil-cutout.png
 * =========================================================================
 */
const CUTOUT_IMAGE = '/adil-cutout1.png';
const FALLBACK_IMAGE = '/adil-new.jpeg';

export function EditorialHeroSection() {
  const [imageSrc, setImageSrc] = useState(CUTOUT_IMAGE);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked animation: image starts from the left and arrives at center when scrolling down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.6,
    restDelta: 0.001,
  });

  const imageX = useTransform(smoothProgress, [0, 1], ['-60vw', '0vw']);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.8, 1]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="editorial-hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background text-foreground pt-14 pb-8 px-4 sm:px-8 select-none border-t border-border/50"
    >

      {/* ================================================================ */}
      {/* 2. MAIN STAGE: GIANT TEXT (BEHIND) + PERSON CUTOUT (FOREGROUND)  */}
      {/* ================================================================ */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center my-2 min-h-[520px] lg:min-h-[640px]">
        {/* --- LAYER 1 (z-10): GIANT NAME BEHIND IMAGE --- */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between w-full pointer-events-none select-none px-2 sm:px-4">
          <span className="font-black uppercase tracking-tighter text-red-600 text-[20vw] sm:text-[18vw] lg:text-[15vw] leading-none drop-shadow-sm">
            ADIL
          </span>
          <span className="font-black uppercase tracking-tighter text-red-600 text-[20vw] sm:text-[18vw] lg:text-[15vw] leading-none drop-shadow-sm">
            SAALY
          </span>
        </div>

        {/* --- LAYER 2 (z-20): CUTOUT PERSON PNG IN FRONT OF TEXT WITH SCROLL ANIMATION --- */}
        <motion.div
          style={{
            x: imageX,
            opacity: imageOpacity,
          }}
          className="absolute bottom-0 inset-x-0 mx-auto z-20 h-[88%] sm:h-[92%] max-h-[720px] w-full max-w-[500px] flex items-end justify-center pointer-events-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            onError={() => {
              if (imageSrc !== FALLBACK_IMAGE) {
                setImageSrc(FALLBACK_IMAGE);
              }
            }}
            alt="Adil Saaly"
            className={cn(
              'h-full w-auto object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]',
              imageSrc === FALLBACK_IMAGE && 'rounded-2xl max-h-[460px] opacity-90'
            )}
          />
        </motion.div>

        {/* --- LAYER 3 (z-30): EDITORIAL WIDGETS & FLOATING PANELS --- */}
        <div className="absolute inset-0 z-30 w-full h-full flex flex-col justify-between pointer-events-none p-2 sm:p-4">
          {/* TOP ROW: QUOTE (LEFT) & HATCHED NUMBER (RIGHT) - PARALLEL & UPPER */}
          <div className="flex flex-row items-start justify-between gap-4 pointer-events-auto pt-2">
            {/* Left: Quote & Statement */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[280px] sm:max-w-xs md:max-w-sm"
            >
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-foreground/40 leading-none mb-1 font-serif">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm md:text-base font-black tracking-tight leading-snug uppercase text-foreground mb-1.5">
                Only a few of my dreams have come true; I still have a lot of
                dreams to achieve.
              </p>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                Adil Saaly
              </span>
            </motion.div>

            {/* Right: Hatch Pattern Big Number (15) - Parallel to Quote */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-end select-none"
            >
              <svg
                width="160"
                height="110"
                viewBox="0 0 160 120"
                className="overflow-visible w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-28"
              >
                <defs>
                  {/* Diagonal Hatching Pattern */}
                  <pattern
                    id="diagonalHatch"
                    width="6"
                    height="6"
                    patternTransform="rotate(45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-foreground/70"
                    />
                  </pattern>
                </defs>
                <text
                  x="160"
                  y="105"
                  textAnchor="end"
                  fill="url(#diagonalHatch)"
                  className="font-black text-[120px] tracking-tighter"
                  style={{ fontFamily: 'monospace, sans-serif' }}
                >
                  15
                </text>
              </svg>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground -mt-1 text-right">
                Prod Systems & Projects
              </span>
            </motion.div>
          </div>

          {/* BOTTOM ROW: VIEW MY WORK & CV (RIGHT BOTTOM) */}
          <div className="flex items-center justify-end pointer-events-auto pb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2.5"
            >
              <button
                onClick={() => scrollTo('company-projects')}
                className="rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg shadow-red-600/25 transition-transform hover:scale-105 active:scale-95"
              >
                View My Work
              </button>
              <a
                href="/adil-cv.pdf"
                download="adil-cv.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur hover:bg-secondary text-foreground font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 transition-colors shadow-sm"
              >
                <FileDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 3. SCROLL DOWN INDICATOR                                         */}
      {/* ================================================================ */}

      <div className='justify-center items-center flex'>

        <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
          <div data-aos="fade-up" data-aos-delay="200">
            {<DockDemo />}
          </div>
        </div>
      </div>



      <div className="relative z-30 flex justify-center pt-2">
        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
