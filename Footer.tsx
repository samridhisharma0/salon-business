"use client";

import { useState } from "react";
import { Heart, Send, Check, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const socialLinks = [
  { icon: <Globe size={18} />, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: <Globe size={18} />, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: <Globe size={18} />, href: siteConfig.social.twitter, label: "X" },
  { icon: <Globe size={18} />, href: siteConfig.social.tiktok, label: "TikTok" },
  { icon: <Globe size={18} />, href: siteConfig.social.pinterest, label: "Pinterest" },
];

const footerLinks = {
  Services: ["Hair Coloring", "Haircut & Styling", "Hair Treatments", "Perm & Texture", "Bridal & Events"],
  Company: ["About Us", "Our Team", "Careers", "Gallery", "Reviews"],
  Support: ["Contact Us", "FAQ", "Book Online", "Gift Cards", "Privacy Policy"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="section-padding relative bg-[var(--secondary)] border-t border-[var(--border)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gold-text font-[var(--font-display)] mb-4">SalonHQ</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-sm">
              Premium hair artistry in the heart of Tribeca, New York. Where every strand tells a story of craftsmanship and care.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for updates"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <button
                type="submit"
                className={`p-2.5 rounded-xl transition-all ${
                  subscribed ? "bg-green-500" : "gold-bg"
                } text-white`}
              >
                {subscribed ? <Check size={18} /> : <Send size={18} />}
              </button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border)] gap-6">
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            &copy; {new Date().getFullYear()} SalonHQ. Made with <Heart size={12} className="text-red-400" /> in NYC.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
