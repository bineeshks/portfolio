"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-violet to-cyan relative overflow-hidden group border border-white/10">
              <Image
                src="/profile.png"
                alt="Bineesh K S"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
            </div>
            
            {/* Badges */}
            <div className="absolute -bottom-6 -right-6 flex flex-col gap-3">
              <div className="bg-green-500/10 backdrop-blur-md border border-green-500/20 px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl">
                <span className="text-sm font-bold text-green-500">Available for Work</span>
              </div>
              <div className="bg-violet/10 backdrop-blur-md border border-violet/20 px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl">
                <span className="text-sm font-bold text-white">Based in Kerala &rarr; Kochi</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
              04 &mdash; Who I Am
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8 leading-tight">
              A strategist who <br />
              <span className="text-white/40">understands growth</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I&apos;m Bineesh K S, a Growth Marketer and Digital Strategist focused on driving brand growth through strategic content, organic marketing, and AI-powered visual storytelling. 
              </p>
              <p>
                From producing high-end cinematic resort reels and travel branding to managing remote cloud kitchens, I bridge the gap between creative aesthetics and business results. I don&apos;t just create content; I build digital ecosystems that generate leads, increase footfall, and scale brands.
              </p>
              <p className="font-bold text-white">
                Currently open to full-time agency roles in Kochi or remote opportunities.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 border-l border-white/10 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-violet border-4 border-navy" />
                <span className="text-xs font-bold text-violet uppercase tracking-widest block mb-1">2024 — Present</span>
                <h4 className="text-xl font-syne font-bold">Freelance Digital Marketer</h4>
                <p className="text-sm text-white/40 mt-1">Specializing in travel/resort branding, SMM campaigns, content production, and organic reach.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white/20 border-4 border-navy" />
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-1">2022 — 2023</span>
                <h4 className="text-xl font-syne font-bold text-white/60">Desktop Engineer</h4>
                <p className="text-sm text-white/40 mt-1">Foundational technical role in hardware and systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
