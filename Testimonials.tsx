"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding relative overflow-hidden bg-[var(--surface)]">
      <Marquee items={["Reviews", "Testimonials", "5 Stars", "SalonHQ"]} />

      <div className="container-custom mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            What Our{" "}
            <span className="gold-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-6 md:p-8"
            >
              <Quote size={24} className="text-[var(--color-primary)] mb-4 opacity-50" />
              <p className="text-sm md:text-base leading-relaxed mb-6 italic text-[var(--text-muted)]">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={si < item.rating ? "text-[var(--color-primary)] fill-current" : "text-[var(--border)]"}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.service}</p>
                </div>
                <span className="text-xs text-[var(--text-muted)]">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
