"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { certifications } from "@/lib/data";

const colorClasses = {
  teal: "text-[#06ffa5]",
  amber: "text-[#ff6b35]",
};

const icons: Record<string, JSX.Element> = {
  cloud: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-navy relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#06ffa5]/10 to-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <SectionLabel>certifications · professional credentials</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Certifications
        </h2>
        <p className="text-lg text-text-secondary mb-16 max-w-3xl">
          Cloud and development certifications from AWS, Microsoft Azure, and industry partners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-panel border border-border rounded-xl p-6 hover:border-[#06ffa5]/50 hover:shadow-xl hover:shadow-[#06ffa5]/10 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06ffa5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className={`mb-4 ${colorClasses[cert.color]}`}>
                  {icons[cert.icon]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-3 leading-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {cert.desc}
                </p>

                {/* Metric */}
                <div className="text-xs font-mono text-[#06ffa5] pt-3 border-t border-border">
                  {cert.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
