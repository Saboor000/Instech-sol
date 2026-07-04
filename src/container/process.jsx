"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel, PageHero, Dot } from "@/components/site/shared";

const STEPS = [
  { t: "Discover",  d: "We dig into your product, users, and constraints — align on outcomes, not just features.", days: "Week 1" },
  { t: "Design",    d: "Rapid prototypes, motion studies, and pixel-tight interfaces that survive real users.",     days: "Week 2–3" },
  { t: "Develop",   d: "Type-safe, tested code shipped in short iterations with continuous demos.",                days: "Week 3–8" },
  { t: "Deploy",    d: "Zero-downtime releases, observability wired in from day one.",                            days: "Week 8" },
  { t: "Support",   d: "We stick around — SLAs, retainers, and iteration when the market moves.",                days: "Ongoing" },
];

const STACK = ["Next.js","React","TypeScript","Node.js","PostgreSQL","Supabase","Tailwind","Prisma","Docker","AWS","Framer Motion","Vercel"];

const QUOTES = [
  { q: "Instech shipped in six weeks what our last agency couldn't in six months. The design bar and engineering rigor are rare.", n: "Ayesha K.",  r: "Founder, Northwind" },
  { q: "They ask the questions we forgot to ask ourselves. Truly a partner, not a vendor.",                                       n: "Daniel R.",   r: "CTO, Ledger OS" },
  { q: "Every detail — motion, typography, API design — feels considered. Our conversion doubled after launch.",                   n: "Meera S.",    r: "Head of Product, Kite" },
];

export default function ProcessPage() {
  const [qi, setQi] = useState(0);

  /* Simple interval — no scroll listener */
  useEffect(() => {
    const t = setInterval(() => setQi((v) => (v + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const doubled = [...STACK, ...STACK];

  return (
    <>
      <PageHero
        eyebrow="/ Process"
        title="A tight process,"
        italic="built for velocity."
        description="Five stages, weekly demos, and one Slack channel. This is how a five-person team ships like fifteen."
      />

      {/* Steps — CSS progress line via bg-gradient, no scroll motion value */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">How we work</SectionLabel>
          <div className="relative">
            {/* Static line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 md:block" />
            <div className="grid gap-12 md:grid-cols-5 md:gap-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.08}>
                  <div className="relative">
                    <div className="mb-6 flex h-16 items-start">
                      <span className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent">
                        <span className="absolute inset-0 rounded-full bg-accent/50 pulse-dot" />
                      </span>
                    </div>
                    <div className="font-mono text-xs text-accent">0{i + 1} · {s.days}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{s.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack marquee — pure CSS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-10">
          <SectionLabel n="/ 02">Our stack</SectionLabel>
        </div>
        <div className="relative overflow-hidden select-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-track marquee-pause flex whitespace-nowrap">
            {doubled.map((s, i) => (
              <span key={i} className="mx-8 flex items-center gap-6 font-display text-5xl font-bold text-white/40 hover:text-accent transition-colors duration-200 md:text-7xl">
                {s}
                <Dot className="!h-3 !w-3 !bg-white/20" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials rotator */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 03">Kind words</SectionLabel>
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <Reveal>
              <h2 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl">
                Trusted by <span className="text-italic-accent">bold</span> teams.
              </h2>
            </Reveal>
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={qi}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-card/50 p-8 md:p-12"
                >
                  <p className="font-display text-2xl leading-snug md:text-4xl">"{QUOTES[qi].q}"</p>
                  <div className="mt-8 flex items-center gap-3">
                    <Dot className="!h-2 !w-2" />
                    <span className="font-medium">{QUOTES[qi].n}</span>
                    <span className="text-white/50">— {QUOTES[qi].r}</span>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
              <div className="mt-6 flex gap-2">
                {QUOTES.map((_, j) => (
                  <button
                    key={j}
                    onClick={() => setQi(j)}
                    className={`h-1 rounded-full transition-all duration-300 ${qi === j ? "w-10 bg-accent" : "w-4 bg-white/20"}`}
                    aria-label={`Testimonial ${j + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

