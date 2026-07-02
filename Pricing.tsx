"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/siteData";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative bg-[var(--surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Investment in{" "}
            <span className="gold-text">Your Style</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Transparent pricing for exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass-card p-8 relative ${
                plan.highlighted
                  ? "border-[var(--color-primary)] scale-105 md:scale-110"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gold-bg text-white text-xs font-medium rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-lg font-bold font-[var(--font-display)] mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gold-text">${plan.price}</span>
                  <span className="text-sm text-[var(--text-muted)]">/session</span>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{f}</span>
                  </div>
                ))}
              </div>
              <MagneticButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
                  plan.highlighted
                    ? "gold-bg text-white"
                    : "glass-card text-[var(--foreground)] hover:border-[var(--color-primary)]"
                }`}
              >
                Book Now
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
