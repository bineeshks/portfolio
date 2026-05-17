"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-syne font-bold mb-1">Bineesh K S</h3>
          <p className="text-white/40 text-sm">Digital Marketer & Content Creator</p>
        </div>

        {/* Center: Links */}
        <div className="flex gap-8">
          {["Work", "Skills", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-violet hover:text-white transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-violet hover:text-white transition-all">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-violet hover:text-white transition-all">
            <Github size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Designed & Built with intention. {currentYear}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
