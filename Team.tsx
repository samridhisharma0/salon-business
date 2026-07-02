"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { teamMembers } from "@/data/siteData";

export default function Team() {
  return (
    <section id="team" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Masters of{" "}
            <span className="gold-text">Their Craft</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Meet the artists behind the transformations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-card overflow-hidden"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.2))`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={12} className="text-[var(--color-primary)] fill-current" />
                    <span className="text-xs text-white font-medium">{member.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-white/70">{member.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full gold-bg/10 text-[var(--color-primary)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
