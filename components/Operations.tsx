"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { opsCards } from "@/lib/data";

const colorClasses = {
  blue: "text-accent-blue",
  teal: "text-accent-teal",
  amber: "text-accent-amber",
};

const icons: Record<string, JSX.Element> = {
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m-9-9h6m6 0h6" />
    </svg>
  ),
  "git-merge": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
  "chart-line": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
};

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-navy relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ffd166]/10 to-[#f7931e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ff6b35]/10 to-[#06ffa5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <SectionLabel>operations · infra & devops highlights</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">How I run it</h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Cloud infrastructure, CI/CD automation, observability, and cost optimization across production systems.
        </p>

        {/* Ops cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.025] border border-border rounded-lg p-6 hover:border-border-light hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={colorClasses[card.color]}>{icons[card.icon]}</div>
                <h3 className="text-[17px] font-medium text-text-primary">{card.title}</h3>
              </div>
              <ul className="space-y-3">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="text-[15px] text-text-muted leading-relaxed flex gap-3">
                    <span className="text-text-faint mt-1.5">·</span>
                    <span className="flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

