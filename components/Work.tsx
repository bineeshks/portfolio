"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, X, Instagram, Globe, TrendingUp, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Work = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ["All", "SMM", "Design", "Web Dev", "Video"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            02 — Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold">
            Crafted <span className="text-white/40">Experiences</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                filter === cat
                  ? "bg-violet border-violet text-white"
                  : "bg-transparent border-white/10 text-white/50 hover:border-white/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-violet/50 group-hover:-translate-y-2 flex flex-col">
                  <div className="aspect-[16/10] relative overflow-hidden shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-white/10">
                        <ExternalLink size={64} />
                      </div>
                    )}
                    
                    {/* Category Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-navy/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-violet border border-violet/20">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Result Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-cyan text-navy rounded-full text-[10px] font-bold uppercase shadow-lg shadow-cyan/20">
                        {project.result}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center",
                        project.title.includes("elaVate") 
                          ? "bg-gradient-to-br from-[#006D32]/90 to-[#004d23]/95" 
                          : "bg-gradient-to-br from-[#D4AF37]/90 to-[#b8952e]/95"
                      )}
                    >
                      <div className="bg-white text-navy px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Case Study <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-syne font-bold mb-3 group-hover:text-violet transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-6 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/30 font-bold tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full h-full md:h-[95vh] md:w-[95vw] md:max-w-6xl md:rounded-[3rem] bg-[#0A0A0B] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Modal Header/Nav */}
              <div className="sticky top-0 z-30 px-8 py-6 flex items-center justify-between border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center text-violet">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-violet font-bold block mb-0.5">
                      {selectedProject.headerTag}
                    </span>
                    <h4 className="text-sm font-bold text-white/60">Case Study Detail</h4>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="flex-grow overflow-y-auto custom-scrollbar">
                {/* Hero Section */}
                <div className="px-8 md:px-16 pt-12 pb-16">
                  <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-syne font-bold mb-4 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/40 font-medium mb-12">
                      {selectedProject.subtitle}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                      {selectedProject.stats.map((stat, i) => (
                        <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                          <span className="text-2xl md:text-3xl font-syne font-bold text-white mb-1">{stat.value}</span>
                          <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-20 border border-white/10 shadow-2xl">
                    {selectedProject.image && (
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-20">
                      {/* Overview */}
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.3em] text-violet font-bold mb-6 flex items-center gap-3">
                          <div className="w-8 h-px bg-violet/30" /> Overview
                        </h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                          {selectedProject.overview}
                        </p>
                      </div>

                      {/* My Role */}
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.3em] text-violet font-bold mb-8 flex items-center gap-3">
                          <div className="w-8 h-px bg-violet/30" /> Key Responsibilities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {selectedProject.role.map((item, i) => (
                            <div key={i} className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-violet/30 transition-all">
                              <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center text-violet mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-lg">✦</span>
                              </div>
                              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Content Samples / Design Gallery */}
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.3em] text-violet font-bold mb-8 flex items-center gap-3">
                          <div className="w-8 h-px bg-violet/30" /> Visual Showcase
                        </h3>
                        
                        {selectedProject.gallery ? (
                          <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {selectedProject.gallery.map((img, i) => (
                              <div key={i} className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl break-inside-avoid group">
                                <Image
                                  src={img}
                                  alt={`${selectedProject.title} Design ${i + 1}`}
                                  width={800}
                                  height={800}
                                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        ) : selectedProject.instagramImage ? (
                          <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                              src={selectedProject.instagramImage}
                              alt={`${selectedProject.title} Instagram Showcase`}
                              width={1200}
                              height={1200}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ) : (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {["Festival Campaign", "Product Post", "AI Reel Cover"].map((label, i) => (
                                <div key={i} className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest z-10">{label}</span>
                                  <div className="absolute inset-0 bg-gradient-to-t from-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <div className="absolute bottom-4 right-4 text-white/10 group-hover:text-violet transition-colors">
                                    <Sparkles size={24} />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-center text-white/20 text-[10px] uppercase tracking-widest mt-6">
                              Visual samples being updated from live feed
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Sidebar Meta */}
                    <div className="lg:col-span-4 space-y-12">
                      {/* Results Box */}
                      <div className="p-8 rounded-[2.5rem] bg-violet border border-violet/20 shadow-2xl shadow-violet/20 text-white">
                        <TrendingUp className="mb-6" size={32} />
                        <h3 className="text-2xl font-syne font-bold mb-4">The Result</h3>
                        <p className="text-white/80 leading-relaxed mb-6">
                          {selectedProject.results}
                        </p>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={20} />
                          <span className="text-sm font-bold uppercase tracking-widest">Brand Growth</span>
                        </div>
                      </div>

                      {/* Tools Used */}
                      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Technology Stack</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tools.map((tool) => (
                            <span key={tool} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-white/60 border border-white/10">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final CTA */}
                  {(selectedProject.website || selectedProject.instagram) && (
                    <div className="mt-32 pb-12 border-t border-white/5 pt-20 text-center">
                      <h3 className="text-2xl md:text-4xl font-syne font-bold mb-8">
                        {selectedProject.website ? "Ready to see the live site?" : "Ready to see the live feed?"}
                      </h3>
                      
                      {selectedProject.website ? (
                        <a 
                          href={selectedProject.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 px-10 py-5 bg-white text-navy rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10"
                        >
                          Visit Website <ArrowUpRight size={24} />
                        </a>
                      ) : selectedProject.instagram ? (
                        <a 
                          href={selectedProject.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 px-10 py-5 bg-white text-navy rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10"
                        >
                          View Live Instagram @{selectedProject.instagram.split('/').pop()} <ArrowUpRight size={24} />
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
