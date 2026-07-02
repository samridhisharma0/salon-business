"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
}

export default function Marquee({ items, direction = "left" }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-[var(--border)]">
            {item}
            <span className="mx-8 text-[var(--color-primary)]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
