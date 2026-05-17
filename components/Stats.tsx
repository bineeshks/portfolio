"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const stats = [
    { number: 6, suffix: "+", label: "Months Experience" },
    { number: 10, suffix: "+", label: "Clients Worked With" },
    { number: 50, suffix: "+", label: "Reels & Videos Created" },
    { number: 100, suffix: "+", label: "Designs Delivered" },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll(".counter-value");
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-7xl font-syne font-bold text-violet mb-2 flex items-center">
              <span className="counter-value" data-target={stat.number}>0</span>
              <span>{stat.suffix}</span>
            </div>
            <p className="text-white/40 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
