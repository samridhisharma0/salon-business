"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${0.3 + progress * 0.5})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    const complete = setTimeout(() => {
      setIsComplete(true);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(complete);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold gold-text mb-4 font-[var(--font-display)]">
              SalonHQ
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)] mb-12">
              Where Art Meets Precision
            </p>
            <div className="w-48 h-[2px] bg-[var(--border)] rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full gold-bg rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 font-mono">
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
