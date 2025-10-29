"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes"; // --- ADD THIS ---

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false); // --- ADD THIS ---
  const { resolvedTheme } = useTheme(); // --- ADD THIS ---

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // --- ADD THIS useEffect to handle theme hydration ---
  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => {
      // --- ADD THIS LOGIC ---
      // Set particle and link colors based on the resolved theme
      const particleColor = resolvedTheme === "light" ? "#000000" : "#ffffff";

      return {
        // --- REMOVED the 'background' property to make it transparent ---
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: particleColor, // --- USE DYNAMIC COLOR ---
          },
          links: {
            color: particleColor, // --- USE DYNAMIC COLOR ---
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: { default: OutMode.out },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      };
    },
    [resolvedTheme], // --- ADD DEPENDENCY ---
  );

  // --- UPDATE THIS CHECK ---
  // Wait for both particles to init AND theme to be mounted
  if (init && mounted) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    );
  }

  return <></>;
};