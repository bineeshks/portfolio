"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate sending
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "bineeshbineesh518@gmail.com", href: "mailto:bineeshbineesh518@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8300895493", href: "tel:+918300895493" },
    { icon: MapPin, label: "Location", value: "Kerala, India (Open to Kochi)", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/bineesh", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
              06 — Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8 leading-tight">
              Let&apos;s <span className="text-white/40">Work Together</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Let&apos;s build something extraordinary together. Whether it&apos;s a brand strategy, content campaign, or a complete digital overhaul, I&apos;m ready to dive in.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-6 group w-fit"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-violet group-hover:text-white transition-all duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">{info.label}</span>
                    <span className="text-lg font-medium group-hover:text-violet transition-colors">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 hover:bg-violet hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-syne font-bold mb-2">Message Sent!</h3>
                <p className="text-white/40">I&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="What&apos;s on your mind?"
                    className="w-full bg-navy border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-navy border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project"
                    className="w-full bg-navy border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white resize-none"
                  ></textarea>
                </div>
                <button
                  disabled={formState === "sending"}
                  className="w-full bg-violet hover:bg-violet/80 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-violet/20"
                >
                  {formState === "sending" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-violet/5 to-transparent -z-10 pointer-events-none" />
    </section>
  );
};

export default Contact;
