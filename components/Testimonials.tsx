"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "We needed someone who could understand our brand — authentic Kerala food in Hyderabad — and translate that into content that feels real. Bineesh did exactly that. The AI-generated visuals he created for our campaigns were unlike anything we had seen for a food brand. He managed everything remotely and we never had to follow up. Consistent, creative, and reliable.",
    author: "Founder",
    role: "elaVate",
    location: "Hyderabad",
  },
  {
    quote: "K Shack has a very specific vibe — gold, dark, premium but local. Bineesh understood this without us having to explain it much. Every festival post, every product design matched what we wanted. He managed our full content — from Vishu to Eid to Valentine's Day — and the feed has been consistent throughout. The Kshack 2.0 launch content especially stood out. Good work ethic and delivers on time.",
    author: "Owner",
    role: "K Shack Cafe",
    location: "Wayanad",
  },
  {
    quote: "We needed a website that matched the premium positioning of Skywyn Developers — clean, modern, and trustworthy. Bineesh delivered exactly that. The site looks great on mobile, the WhatsApp CTA works perfectly for lead generation, and the overall design communicates the right message to our buyers. Very smooth process from start to finish.",
    author: "Management",
    role: "Skywyn Developers",
    location: "Wayanad",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            05 — Social Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold">
            Client <span className="text-white/40">Reviews</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-8 md:p-12 bg-navy border border-white/10 rounded-[2.5rem] relative group hover:border-violet/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 shadow-2xl"
            >
              <Quote className="text-violet opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" size={64} />
              <div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic font-light">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                <div>
                  <h4 className="font-syne font-bold text-white text-xl">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-violet font-bold uppercase tracking-widest mt-1">{testimonials[currentIndex].role} · <span className="text-white/40">{testimonials[currentIndex].location}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-violet/50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-violet" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-violet/50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Testimonials;
