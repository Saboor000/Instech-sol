"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal, SectionLabel, PageHero, Dot, MagneticButton } from "@/components/site/shared";
import { ALL_SERVICES, AI_CAPABILITIES, TECH_CATEGORIES } from "@/lib/home-data";
import Link from "next/link";

/* ─── Category filter tabs ─────────────────────────────────────────────── */
const FILTERS = ["All", "Development", "AI", "Design", "Infrastructure", "Strategy"];

const SERVICE_FILTERS = {
  All: ALL_SERVICES.map((s) => s.id),
  Development: ["web", "mobile", "shopify", "backend"],
  AI:          ["ai"],
  Design:      ["design"],
  Infrastructure: ["cloud", "maintenance"],
  Strategy:    ["consulting"],
};

const BORDER_GRADIENTS = {
  ai: "from-violet-500 to-purple-500",
  web: "from-blue-500 to-cyan-500",
  mobile: "from-emerald-500 to-teal-500",
  shopify: "from-green-500 to-lime-500",
  cloud: "from-sky-500 to-blue-500",
  design: "from-pink-500 to-rose-500"
};

/* ─── Premium Service Card ──────────────────────────────────────────────── */
function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={i * 0.06}>
      <motion.div
        id={s.id}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-8 transition-all duration-500 ${s.border} hover:shadow-2xl`}
        style={{ boxShadow: hovered ? `0 24px 80px -20px ${s.glow}` : undefined }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top glowing gradient border line */}
        <div className={`absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r ${BORDER_GRADIENTS[s.id] || "from-brand-purple to-brand-mint"} transition-all duration-500 group-hover:w-full`} />

        {/* Gradient overlay on hover */}
        <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

        {/* Corner decoration */}
        <div className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl transition-all duration-500 group-hover:bg-white/[0.04]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-xs font-semibold tracking-wider ${s.accent}`}>
                // {s.n}
              </span>
              <span className="h-px w-6 bg-white/10 transition-all duration-500 group-hover:w-10 group-hover:bg-white/25" />
            </div>
            <ArrowUpRight className={`h-5 w-5 text-white/20 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
          </div>

          <h3 className={`font-display text-2xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:${s.accent} mb-1.5`}>
            {s.t}
          </h3>

          <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors duration-300">{s.tagline}</p>
          <p className="mb-6 text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">{s.d}</p>

          {/* Items grid */}
          <ul className="grid gap-y-2 gap-x-4 sm:grid-cols-2">
            {s.items.slice(0, 6).map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-white/55 transition-colors duration-300 group-hover:text-white/75">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.accent.replace('text-', 'bg-')} opacity-35 group-hover:opacity-80 transition-opacity duration-300`} />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={`mt-8 flex items-center gap-2 text-sm font-medium ${s.accent}`}>
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ─── Tech Categories Section ───────────────────────────────────────────── */
function TechCategorySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 03">Technology Stack</SectionLabel>
        <Reveal>
          <h2 className="mb-4 max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Our <span className="text-italic-accent">toolkit.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-12 max-w-xl text-white/60 leading-relaxed">
            We pick the best tool for the job — categorised by discipline so you know exactly what powers your product.
          </p>
        </Reveal>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {TECH_CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech pills for active category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {TECH_CATEGORIES[active].items.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="rounded-full border border-white/10 bg-card/60 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Page export ───────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleIds = SERVICE_FILTERS[activeFilter] ?? SERVICE_FILTERS.All;
  const visibleServices = ALL_SERVICES.filter((s) => visibleIds.includes(s.id));

  return (
    <>
      <PageHero
        eyebrow="/ Services"
        title="Everything you need"
        italic="to succeed."
        description="From AI-powered applications to enterprise cloud infrastructure — we are your one-stop digital transformation partner covering every layer of the modern tech stack."
      />

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 border-b border-white/5 bg-background/80 backdrop-blur-xl py-4">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-6 md:px-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === f
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-white/30">{visibleServices.length} services</span>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Full Menu</SectionLabel>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleServices.map((s, i) => (
                <ServiceCard key={s.id} s={s} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI Capabilities deep-dive */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.06),transparent)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 02">AI Capabilities</SectionLabel>
          <Reveal>
            <h2 className="mb-4 max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
              AI that actually <span className="text-italic-accent">works.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12 max-w-xl text-white/60 leading-relaxed">
              We don't just bolt on AI — we architect systems that deliver measurable ROI from day one.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AI_CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.t} delay={i * 0.04}>
                <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-6 transition-all duration-500 hover:border-brand-purple/20 hover:bg-white/[0.03] hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.15)] hover:-translate-y-0.5">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-purple to-brand-mint transition-all duration-500 group-hover:w-full" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-widest text-white/30 group-hover:text-brand-mint transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-mint" />
                  </div>
                  
                  <h3 className="font-display text-base font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-brand-mint mt-4">
                    {cap.t}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/80">
                    {cap.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack categorised */}
      <TechCategorySection />

      {/* Bottom CTA
      <section className="relative py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_50%,rgba(20,184,166,0.06),transparent)] pointer-events-none" />
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                <Dot className="!h-1.5 !w-1.5" />
                Let's get started
              </div>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Not sure where to <span className="text-italic-accent">begin?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/60 leading-relaxed">
                Book a free 30-minute discovery call. We'll map your needs to the right services and give you a clear roadmap — no obligation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton as="a" href="/contact" className="shadow-[0_0_30px_rgba(20,184,166,0.25)]">
                  <Dot className="!h-2 !w-2" />
                  Book a Free Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white uppercase tracking-wider">
                  See our work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}
