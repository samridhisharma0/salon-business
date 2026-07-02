"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/siteData";
import { Scissors, Palette, Sparkles, Waves, Heart, Star, X, Clock, Check } from "lucide-react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons: Record<string, React.ReactNode> = {
  palette: <Palette size={28} />,
  scissors: <Scissors size={28} />,
  sparkles: <Sparkles size={28} />,
  waves: <Waves size={28} />,
  heart: <Heart size={28} />,
  star: <Star size={28} />,
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const openModal = (id: number) => setSelected(id);
  const closeModal = () => setSelected(null);

  return (
    <section id="services" ref={sectionRef} className="section-padding relative bg-[var(--surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Premium{" "}
            <span className="gold-text">Hair Artistry</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            From precision cuts to transformative color, every service is crafted with care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => openModal(service.id)}
              className="glass-card p-8 cursor-pointer group hover:translate-y-[-4px] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl gold-bg/10 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="text-xl font-bold font-[var(--font-display)] mb-3">{service.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <span className="gold-text font-bold">{service.price}</span>
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                  <Clock size={12} /> {service.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-lg w-full p-8 md:p-10"
            >
              {services.find((s) => s.id === selected) && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl gold-bg/10 flex items-center justify-center text-[var(--color-primary)]">
                      {serviceIcons[services.find((s) => s.id === selected)!.icon]}
                    </div>
                    <button onClick={closeModal} className="p-2 rounded-full hover:bg-[var(--border)] transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold font-[var(--font-display)] mb-2">
                    {services.find((s) => s.id === selected)!.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6">
                    {services.find((s) => s.id === selected)!.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl gold-text font-bold">
                      {services.find((s) => s.id === selected)!.price}
                    </span>
                    <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                      <Clock size={14} /> {services.find((s) => s.id === selected)!.duration}
                    </span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {services.find((s) => s.id === selected)!.features.map((f: string, fi: number) => (
                      <div key={fi} className="flex items-center gap-3 text-sm">
                        <Check size={16} className="text-[var(--color-primary)]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <MagneticButton
                    onClick={() => { closeModal(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="w-full py-3 gold-bg text-white font-medium rounded-full text-sm tracking-wide"
                  >
                    Book This Service
                  </MagneticButton>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
