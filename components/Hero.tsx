"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { siteConfig } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-[var(--background)] z-10" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] z-[2]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-[3] container-custom px-6 pt-24">
        <div ref={textRef} className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[var(--color-primary)] fill-current" />
              ))}
            </div>
            <span className="text-sm text-[var(--text-muted)] tracking-wide">
              {siteConfig.rating} · {siteConfig.reviews} Reviews
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <h1 className="reveal-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-[var(--font-display)]">
              Where Art
            </h1>
          </div>
          <div className="overflow-hidden mb-4">
            <h1 className="reveal-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-[var(--font-display)] gold-text">
              Meets Hair
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[var(--text-muted)] max-w-xl mt-6 leading-relaxed"
          >
            Premium hair artistry in the heart of Tribeca. Where every strand tells a story of craftsmanship and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <MagneticButton
              onClick={scrollToServices}
              className="px-8 py-4 gold-bg text-white font-medium rounded-full text-sm tracking-wide hover:shadow-xl transition-all"
            >
              Explore Services
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 glass-card text-[var(--foreground)] font-medium rounded-full text-sm tracking-wide hover:border-[var(--color-primary)] transition-all"
            >
              Book Appointment
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 0.8 }}
            className="flex flex-wrap gap-6 mt-16 text-sm text-[var(--text-muted)]"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {siteConfig.address}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> {siteConfig.phone}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {siteConfig.hours}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
      >
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Scroll</span>
          <div className="w-[1px] h-8 bg-[var(--color-primary)]" />
        </div>
      </motion.div>
    </section>
  );
}
