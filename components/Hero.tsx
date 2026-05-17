"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Digital Marketing Strategist",
  "Growth Specialist",
  "Brand Strategist",
  "Visual Storyteller",
  "Content Strategist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <span className="text-violet font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
            Hey, I&apos;m
          </span>
          <h1 className="text-5xl md:text-8xl font-syne font-bold leading-tight mb-6">
            BINEESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">K S</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center mb-8">
            <h2 className="text-2xl md:text-4xl font-syne text-white/90">
              {currentText}
              <span className="animate-pulse ml-1 text-violet">|</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I build digital strategies that convert attention into revenue. From strategic brand building to viral organic growth, I help brands scale their digital presence and bottom line.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#work"
              className="bg-violet hover:bg-violet/80 text-white px-8 py-4 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-xl shadow-violet/20"
            >
              View My Work
            </Link>
            <Link
              href="/resume.pdf"
              className="border border-white/20 hover:border-violet text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/5"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Main Profile Image */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 rounded-full border-2 border-white/10 p-4 z-0"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative ring-4 ring-violet/20">
                <Image
                  src="/profile.png"
                  alt="Bineesh K S"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-violet/20 animate-ping [animation-duration:4s]" />
              <div className="absolute inset-[-20px] rounded-full border border-cyan/10 animate-pulse" />
            </motion.div>
            <div className="absolute w-96 h-96 bg-violet/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute w-64 h-64 bg-cyan/10 rounded-full blur-[80px] bottom-0 right-0 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
