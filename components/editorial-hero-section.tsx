'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DockDemo } from './mockDock';
import { TypeAnimation } from 'react-type-animation';

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
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background text-foreground pt-14 pb-8 px-4 sm:px-8 select-none border-t border-border/50"
    >

      {/* ================================================================ */}
      {/* 2. MAIN STAGE: GIANT TEXT (BEHIND) + PERSON CUTOUT (FOREGROUND)  */}
      {/* ================================================================ */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center my-2 min-h-[520px] lg:min-h-[640px]">
        {/* --- LAYER 1 (z-10): GIANT NAME BEHIND IMAGE --- */}
        <h1 className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between w-full pointer-events-none select-none px-2 sm:px-4">
          <span className="sr-only">Adil Saaly – Full Stack Developer &amp; Software Engineer</span>
          <span aria-hidden="true" className="font-black uppercase tracking-tighter text-gradient text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-none drop-shadow-sm">
            ADIL
          </span>
          <span aria-hidden="true" className="font-black uppercase tracking-tighter text-gradient text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-none drop-shadow-sm">
            SAALY
          </span>
        </h1>

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
            alt="Adil Saaly, Full Stack Developer"
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
                Only a few of my dreams have come true
                I still have a lot of
                dreams to achieve.
              </p>

            </motion.div>

            {/* Right: Hatch Pattern Big Number (15) - Parallel to Quote */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-end select-none"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-2xl text-gradient md:text-4xl font-semibold mb-8 text-muted-foreground h-20"
              >
                {true && (
                  <>
                    <TypeAnimation
                      sequence={[
                        'Software Engineer',
                        2000,
                        'HNDIT Graduate',
                        2000,
                        'BIT Undergraduate @ UoM',
                        2000,
                        'Content Creator',
                        2000,
                        'Trilingual Speaker',
                        2000,
                        'CI/CD Pipelines Developer',
                        2000,
                        'Content Creator',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </>
                )}
              </div>

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
                className="rounded-full text-gradient  text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg shadow-blue-600/25 transition-transform hover:scale-105 active:scale-95"
              >
                View My Work
              </button>
              <a
                href="/adil-cv.pdf"
                download="adil-cv.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur hover:bg-secondary text-foreground font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 transition-colors shadow-sm"
              >
                <FileDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Get my CV
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

      </div>
    </section>
  );
}
