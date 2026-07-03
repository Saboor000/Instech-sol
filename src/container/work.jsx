"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, CTASection, PageHero } from "@/components/site/shared";

const WORK = [
  { img: "/assets/work-1.jpg", t: "Northwind Cloud", tags: ["Infra", "DevOps"], year: "2025", d: "Migrated a 12-year-old logistics stack to Kubernetes with zero downtime and 40% lower cost." },
  { img: "/assets/work-2.jpg", t: "Kite Mobile", tags: ["iOS", "Android"], year: "2025", d: "Ground-up React Native rebuild for a European travel brand — 4.9★ on both stores." },
  { img: "/assets/work-3.jpg", t: "Studio Vellum", tags: ["Design", "Web"], year: "2024", d: "Editorial site and design system for a luxury interiors studio in Milan." },
  { img: "/assets/work-4.jpg", t: "Ledger OS", tags: ["FinTech", "API"], year: "2024", d: "Multi-tenant accounting API and admin portal serving 4M+ requests/day." },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Work"
        title="Selected"
        italic="projects."
        description="A sample of what we've shipped recently. Ask us for the full case studies under NDA."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Case studies</SectionLabel>
          <div className="grid gap-10">
            {WORK.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  className="group grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr] md:items-center"
                >
                  <motion.div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-card">
                    <motion.img
                      src={w.img}
                      alt={w.t}
                      loading="lazy"
                      width={800}
                      height={500}
                      variants={{ hover: { scale: 1.06 } }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </motion.div>
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/50">
                      <span>{w.year}</span>
                      <span>/</span>
                      {w.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <h3 className="font-display text-4xl font-semibold md:text-5xl">{w.t}</h3>
                    <p className="mt-4 max-w-md text-white/60">{w.d}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wider text-accent">
                      Read case <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
