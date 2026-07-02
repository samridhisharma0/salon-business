"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/siteData";
import { MessageCircle, Sparkles, Eye, Heart, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, React.ReactNode> = {
  "message-circle": <MessageCircle size={24} />,
  "prep": <Zap size={24} />,
  sparkles: <Sparkles size={24} />,
  eye: <Eye size={24} />,
  heart: <Heart size={24} />,
};

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            From Vision to{" "}
            <span className="gold-text">Reality</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            A carefully crafted journey for every client.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-[1px] bg-[var(--border)]" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              <div className="flex-1 text-center md:text-left md:text-right">
                <div className={`${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="text-xs gold-text font-bold tracking-wider">
                    Step {String(step.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-[var(--font-display)] mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-14 h-14 rounded-full gold-bg flex items-center justify-center text-white shrink-0 shadow-lg">
                {icons[step.icon]}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
