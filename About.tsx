"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/data/siteData";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".stat-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
            },
          }
        );
      }

      const tl = timelineRef.current?.querySelectorAll(".timeline-item");
      if (tl) {
        gsap.fromTo(
          tl,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Crafting Beauty in the{" "}
            <span className="gold-text">Heart of Tribeca</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            For over a decade, SalonHQ has been the destination for discerning clients who demand
            excellence. Our team of master stylists brings together techniques from around the world
            to create hair that is nothing short of art.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-card glass-card p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold font-[var(--font-display)] gold-text mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div ref={timelineRef} className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-[var(--font-display)] mb-12 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[var(--border)]" />
            {[
              { year: "2010", title: "Founded in Tribeca", desc: "SalonHQ opened its doors with a vision to redefine salon excellence." },
              { year: "2014", title: "Award-Winning Team", desc: "Recognized as one of NYC's top salons by multiple publications." },
              { year: "2018", title: "Expansion & Innovation", desc: "Doubled our space and introduced advanced color techniques." },
              { year: "2024+", title: "Continuing Excellence", desc: "Named #1 Salon in Tribeca with a 4.9★ Google rating." },
            ].map((item, i) => (
              <div key={i} className="timeline-item relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-[27px] top-1 w-4 h-4 rounded-full gold-bg border-4 border-[var(--background)]" />
                <span className="text-xs gold-text font-bold tracking-wider">{item.year}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
