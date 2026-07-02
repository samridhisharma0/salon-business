"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Balayage Masterpiece", cat: "Color", color: "#c9a96e" },
  { id: 2, title: "Precision Cut", cat: "Cut", color: "#1a1a2e" },
  { id: 3, title: "Bridal Elegance", cat: "Styling", color: "#c9a96e" },
  { id: 4, title: "Texture Transformation", cat: "Texture", color: "#dfc28e" },
  { id: 5, title: "Blowout Perfection", cat: "Styling", color: "#1a1a2e" },
  { id: 6, title: "Color Correction", cat: "Color", color: "#c9a96e" },
  { id: 7, title: "Editorial Look", cat: "Editorial", color: "#1a1a2e" },
  { id: 8, title: "Premium Extensions", cat: "Extensions", color: "#dfc28e" },
];

const categories = ["All", "Color", "Cut", "Styling", "Texture", "Editorial"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Gallery of{" "}
            <span className="gold-text">Transformations</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-wide transition-all duration-300 ${
                active === cat
                  ? "gold-bg text-white"
                  : "glass-card text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setSelected(item.id)}
                className={`glass-card overflow-hidden cursor-pointer group relative aspect-square ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs text-white/60 uppercase tracking-wider">{item.cat}</span>
                  <h3 className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full p-6"
            >
              {galleryItems.find((g) => g.id === selected) && (
                <div className="text-center">
                  <div
                    className="w-full aspect-video rounded-xl mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${galleryItems.find((g) => g.id === selected)!.color}33, ${galleryItems.find((g) => g.id === selected)!.color}66)`,
                    }}
                  />
                  <h3 className="text-2xl font-bold font-[var(--font-display)] mb-2">
                    {galleryItems.find((g) => g.id === selected)!.title}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">
                    {galleryItems.find((g) => g.id === selected)!.cat}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
