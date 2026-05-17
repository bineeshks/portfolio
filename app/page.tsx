import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-navy selection:bg-violet selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Skills />
      <Stats />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
