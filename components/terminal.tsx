"use client";
import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const TerminalCompo = () => {
  return (
    <section className="w-full py-16 px-4">
      {/* Section title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Educational <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Background</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          My academic qualifications and key results.
        </p>
      </div>

      {/* Terminals container */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
        
        {/* Terminal 1: A-Level */}
        <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200">
          <Terminal>
            <TypingAnimation data-aos="fade-up" data-aos-delay="100" className="text-green-500">&gt; GCE Advanced Level (2020)</TypingAnimation>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="300">✔ ICT C</AnimatedSpan>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="400">✔ Accounting C</AnimatedSpan>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="500">✔ Business Studies C</AnimatedSpan>
            <TypingAnimation data-aos="fade-up" data-aos-delay="200"className="text-green-500">&gt; In Commerce Stream</TypingAnimation>
          </Terminal>
        </div>

        {/* Terminal 2: O-Level */}
        <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
          <Terminal>
            <TypingAnimation data-aos="fade-up" data-aos-delay="100" className="text-green-500">&gt; GCE Ordinary Level (2017)</TypingAnimation>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="200">✔ 4 A's</AnimatedSpan>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="300">✔ 3 B's</AnimatedSpan>
            <AnimatedSpan data-aos="fade-up" data-aos-delay="400">✔ 2 C's</AnimatedSpan>
            <TypingAnimation data-aos="fade-up" data-aos-delay="500"className="text-green-500">&gt; Studied at Dutugemunu Central College</TypingAnimation>
          </Terminal>
        </div>

      </div>
    </section>
  );
};

export default TerminalCompo;
