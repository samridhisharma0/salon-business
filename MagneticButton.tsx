"use client";

import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function MagneticButton({ children, className = "", onClick, type = "button" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`inline-flex items-center justify-center transition-all duration-300 ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </button>
  );
}
