"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-display)] leading-tight mb-6">
            Let&apos;s Create{" "}
            <span className="gold-text">Together</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Ready for a transformation? Reach out and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-bg/10 flex items-center justify-center text-[var(--color-primary)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-[var(--text-muted)]">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-bg/10 flex items-center justify-center text-[var(--color-primary)]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-[var(--text-muted)]">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-bg/10 flex items-center justify-center text-[var(--color-primary)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-[var(--text-muted)]">{siteConfig.email}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-sm font-semibold mb-3">Find Us</h4>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948350946658!2d-74.004484!3d40.718224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f5b8b8b8b%3A0x5b8b8b8b8b8b8b8b!2s87%20Walker%20St%20%236A%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SalonHQ Location"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="+1 (646) 870-9252"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors">
                  <option>Hair Coloring</option>
                  <option>Haircut & Styling</option>
                  <option>Hair Treatments</option>
                  <option>Perm & Texture</option>
                  <option>Bridal & Events</option>
                  <option>Extensions</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block text-[var(--text-muted)]">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <MagneticButton
                type="submit"
                className={`w-full py-3.5 rounded-full text-sm font-medium tracking-wide transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "gold-bg text-white hover:opacity-90"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={16} /> Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
