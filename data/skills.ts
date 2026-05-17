import { TrendingUp, Palette, Code, BarChart, Cpu, Users, Smartphone, Megaphone, Target } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Instagram Strategy",
    icon: TrendingUp,
    skills: [
      "Content Strategy",
      "Brand Identity Management",
      "Organic Growth Strategy",
      "Audience Engagement",
      "Story Highlight Design",
      "Instagram Feed Aesthetics",
      "Remote Client Management",
    ],
  },
  {
    title: "Visual Content",
    icon: Palette,
    skills: [
      "AI-Generated Visual Content",
      "Reels Content Creation",
      "Cinematic Product Shoots",
      "Canva Design (Posts/Reels)",
      "High-Impact Storytelling",
      "Food & Beverage Marketing",
    ],
  },
  {
    title: "Campaign Planning",
    icon: Target,
    skills: [
      "Festival & Seasonal Campaigns",
      "Marketing Calendar Design",
      "Event Coverage Strategy",
      "Launch Campaigns (K Shack 2.0)",
      "Direct-to-Order Conversion",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Cpu,
    skills: [
      "Canva (Expert)",
      "Meta Business Suite",
      "Instagram",
      "CapCut",
      "AI Image Tools",
      "Midjourney/ChatGPT",
    ],
  },
  {
    title: "SEO & Digital Execution",
    icon: Megaphone,
    skills: [
      "Local SEO & GBP Setup",
      "On-Page SEO Optimization",
      "Organic Search Visibility",
      "Swiggy & Zomato Content",
      "Local Business Branding",
    ],
  },
  {
    title: "Management Skills",
    icon: Users,
    skills: [
      "Full Account Management",
      "Remote Collaboration",
      "Campaign Reporting",
      "Creative Direction",
    ],
  },
];
