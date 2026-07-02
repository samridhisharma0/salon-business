"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Hero3DScene from "@/components/Hero3DScene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navigation />
      <CustomCursor />
      <main>
        <section className="relative min-h-screen">
          <Hero3DScene />
          <ParticleBackground />
          <Hero />
        </section>
        <div className="relative z-[3]">
          <About />
          <Testimonials />
          <Services />
          <Portfolio />
          <Team />
          <Pricing />
          <Process />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
