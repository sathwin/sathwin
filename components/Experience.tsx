"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#ffd166]/10 to-[#06ffa5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionLabel>experience · career timeline</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Professional Journey
        </h2>
        <p className="text-text-secondary mb-16 max-w-2xl">
          My career path building full-stack applications, AI systems, and cloud infrastructure.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#ff6b35]/20 via-[#f7931e]/30 to-[#ff6b35]/20" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Mobile & Tablet: Single column */}
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] shadow-lg shadow-[#ff6b35]/30" />
                        {index !== experience.length - 1 && (
                          <div className="w-[2px] h-full bg-gradient-to-b from-[#ff6b35]/30 to-transparent mt-2" />
                        )}
                      </div>

                      {/* Content card */}
                      <div className="flex-1 pb-8">
                        <div className="bg-panel border border-border rounded-xl p-6 hover:border-[#ff6b35]/40 transition-all duration-300">
                          <div className="text-xs font-mono text-[#ff6b35] mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-text-primary mb-1">
                            {item.role}
                          </h3>
                          <div className="text-sm text-[#f7931e] mb-4">
                            {item.company}
                          </div>
                          <ul className="space-y-3">
                            {item.bullets.map((bullet, i) => (
                              <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-3">
                                <span className="text-[#ff6b35] mt-1.5 flex-shrink-0">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Alternating layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
                    {/* Left side content (for even indices) */}
                    {isEven && (
                      <>
                        <div className="text-right">
                          <div className="bg-panel border border-border rounded-xl p-6 hover:border-[#ff6b35]/40 transition-all duration-300">
                            <div className="text-xs font-mono text-[#ff6b35] mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-1">
                              {item.role}
                            </h3>
                            <div className="text-sm text-[#f7931e] mb-4">
                              {item.company}
                            </div>
                            <ul className="space-y-3 text-left">
                              {item.bullets.map((bullet, i) => (
                                <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-3">
                                  <span className="text-[#ff6b35] mt-1.5 flex-shrink-0">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] shadow-lg shadow-[#ff6b35]/40 border-4 border-surface z-10" />

                        <div /> {/* Empty space on right */}
                      </>
                    )}

                    {/* Right side content (for odd indices) */}
                    {!isEven && (
                      <>
                        <div /> {/* Empty space on left */}

                        {/* Center dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] shadow-lg shadow-[#ff6b35]/40 border-4 border-surface z-10" />

                        <div>
                          <div className="bg-panel border border-border rounded-xl p-6 hover:border-[#ff6b35]/40 transition-all duration-300">
                            <div className="text-xs font-mono text-[#ff6b35] mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-1">
                              {item.role}
                            </h3>
                            <div className="text-sm text-[#f7931e] mb-4">
                              {item.company}
                            </div>
                            <ul className="space-y-3">
                              {item.bullets.map((bullet, i) => (
                                <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-3">
                                  <span className="text-[#ff6b35] mt-1.5 flex-shrink-0">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

