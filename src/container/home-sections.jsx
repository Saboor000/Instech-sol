"use client";
/* eslint-disable */

import { memo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Quote,
  Globe, Shield, Clock, Users, TrendingUp, Award, Star, Brain,Sparkles 
} from "lucide-react";
import {
  CodeBackdrop, Dot, MagneticButton, Reveal, SectionLabel, Counter,
} from "@/components/site/shared";
import { WORK } from "@/lib/work-data";
import {
  SERVICE_LIST, STATS, PROCESS, TESTIMONIALS, REASONS,
  TECH_ROW1, TECH_ROW2, AI_CAPABILITIES, INDUSTRIES, TECH_CATEGORIES,
} from "@/lib/home-data.js";

/* ─── Floating Hero Widgets ─────────────────────────────────────────────── */
function FloatingHeroWidgets() {
  return (
    <div className="relative z-10 flex w-full select-none flex-col gap-6 py-4">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/15 blur-[100px]" style={{ animationDuration: "6s" }} />

      {/* Deploy widget */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotateY: -15, y: -20 }}
        animate={{ opacity: 1, x: 0, rotateY: -5, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateY: 0, y: -5, scale: 1.02, borderColor: "rgba(20,184,166,0.4)" }}
        className="group relative w-[90%] self-end rounded-xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300"
      >
        <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">production-deploy</span>
        </div>
        <div className="space-y-2 font-mono text-[11px] text-white/70">
          <p className="text-white/40">&gt; instech-deploy --prod</p>
          <p className="flex items-center gap-1.5"><span className="text-brand-mint">✔</span> next build: 104 pages [2.8s]</p>
          <p className="flex items-center gap-1.5"><span className="text-brand-mint">✔</span> edge CDN: 100% propagated</p>
          <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
            <span className="h-2 w-2 rounded-full bg-brand-mint pulse-dot" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-mint">Deploy Success (v2.8.1)</span>
          </div>
        </div>
      </motion.div>

      {/* Performance widget */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotateY: 15 }}
        animate={{ opacity: 1, x: 0, rotateY: 5 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateY: 0, y: -5, scale: 1.02, borderColor: "rgba(139,92,246,0.4)" }}
        className="group relative w-[95%] self-start rounded-xl border border-white/10 bg-white/[0.02] p-5 shadow-2xl backdrop-blur-xl transition-all duration-300"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">Performance Audit</h4>
            <p className="text-[9px] font-mono text-white/40">Real-time Web Vitals</p>
          </div>
          <span className="rounded border border-brand-mint/10 bg-brand-mint/5 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-mint">100/100</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[{ l: "LCP", v: "0.8s" }, { l: "FID", v: "12ms" }, { l: "CLS", v: "0.01" }].map((m) => (
            <div key={m.l} className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <div className="text-[9px] font-mono uppercase tracking-widest text-white/40">{m.l}</div>
              <div className="mt-1 font-display text-sm font-bold text-white group-hover:text-brand-mint transition-colors duration-300">{m.v}</div>
              <div className="mt-0.5 text-[8px] font-mono text-brand-mint">Optimal</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Client satisfaction widget */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(20,184,166,0.4)" }}
        className="group relative w-[88%] self-end rounded-xl border border-white/10 bg-white/[0.015] p-5 shadow-2xl backdrop-blur-xl transition-all duration-300"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Project Delivery</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-mint animate-pulse" />
        </div>
        <div className="space-y-2 text-xs">
          {[
            { l: "On-time delivery rate", v: "99%", c: "text-brand-mint" },
            { l: "Client satisfaction", v: "4.9 / 5", c: "text-violet-400" },
          ].map((item) => (
            <div key={item.l} className="flex items-center justify-between rounded border border-white/5 bg-white/[0.05] p-2">
              <span className="font-medium text-white/80">{item.l}</span>
              <span className={`font-mono text-[10px] font-semibold ${item.c}`}>{item.v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 150]);
  const wordVariant = {
    hidden: { y: "110%", opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-background text-white" style={{ "--white": "#aaaaaa" }}>
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 ken-burns">
          <img src="/assets/hero-computer.jpg" alt="" className="h-full w-full object-cover grayscale opacity-68" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.04),transparent_26%),radial-gradient(circle_at_78%_24%,rgba(0,0,0,0.58),transparent_30%),linear-gradient(135deg,rgba(2,3,6,0.72) 0%,rgba(2,3,6,0.9) 50%,rgba(2,3,6,0.98) 100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-black/60 blur-[110px] z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[15%] right-[5%] h-[450px] w-[450px] rounded-full bg-black/45 blur-[120px] z-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-12 z-0" />
      <CodeBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-6 pb-24 pt-40 md:px-10 lg:grid-cols-12">
        <div className="flex flex-col justify-center overflow-hidden lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="font-italic text-xs italic tracking-[0.15em] text-brand-mint/80">
              Innovate. Build. Scale.
            </span>
          </motion.div>

          <h1 className="font-display text-[9vw] font-bold leading-[0.95] tracking-tighter text-white md:text-[5.5vw]">
            <div className="overflow-hidden py-1.5 md:py-3">
              <motion.span initial="hidden" animate="visible" variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="mr-4 inline-block md:mr-6">Building</motion.span>
              <motion.span initial="hidden" animate="visible" variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="inline-block">Powerful</motion.span>
            </div>
            <div className="overflow-hidden py-1.5 md:py-3">
              <motion.span initial="hidden" animate="visible" variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                className="mr-4 inline-block md:mr-6">Digital</motion.span>
              <motion.span initial="hidden" animate="visible" variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
                className="text-italic-accent inline-block drop-shadow-[0_0_24px_rgba(20,184,166,0.35)]">Solutions</motion.span>
            </div>
            <div className="overflow-hidden py-1.5 mt-3 md:py-3 md:mt-5">
              <motion.span initial="hidden" animate="visible" variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
                className="inline-block">for Modern Brands</motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
          >
            From AI-powered chatbots to enterprise SaaS platforms — we are your one-stop digital transformation partner. Trusted by startups, SMEs, and enterprises across 8+ countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <MagneticButton as="a" href="/services" className="shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.45)]">
              <Dot className="!h-2 !w-2" />
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <Link href="/contact" className="group relative text-sm font-medium uppercase tracking-wider text-white/85 transition-colors duration-300 hover:text-brand-mint">
              Free Consultation →
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/70 transition-transform duration-500 group-hover:scale-x-0 group-hover:bg-brand-mint" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/45 tracking-wider"
          >
            {["50+ Projects Shipped", "8+ Countries", "Reply in 24h"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-mint/70" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden items-center justify-center lg:col-span-5 lg:flex">
          <FloatingHeroWidgets />
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/45"
        >
          <span>Scroll</span>
          <div className="h-12 w-[1.5px] overflow-hidden rounded-full bg-white/20">
            <div className="scroll-line h-1/2 w-full bg-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Services (homepage teaser) ───────────────────────────────────────── */
const ServiceCard = memo(function ServiceCard({ t, d, tags, delay, i }) {
  return (
    <Reveal delay={delay}>
      <Link
        href="/services"
        className="service-teaser-card group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-500 hover:border-white/20 hover:bg-card hover:shadow-[0_18px_48px_-20px_rgba(17,24,39,0.28)]"
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.04),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">0{String(i + 1)}</span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Service</span>
          </div>
          <h3 className="max-w-[12ch] font-display text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-brand-mint">{t}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{d}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-white/50 transition-colors duration-300 group-hover:border-accent/20 group-hover:text-accent/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-mint">
          Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </Reveal>
  );
});

export function Services() {
  return (
    <section className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_top_right,rgba(139,92,246,0.04),transparent)] dark-only" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 01">Services</SectionLabel>
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
              We build <span className="text-italic-accent">powerful</span> products.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-accent">
              All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_LIST.map((s, i) => <ServiceCard key={s.t} {...s} i={i} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────────────────── */
const StatCard = memo(function StatCard({ st, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-background p-8 transition-all duration-300 hover:border-accent/40 hover:bg-card">
        <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/12" />
        <div className="font-display text-6xl font-bold tracking-tight text-accent">
          <Counter to={st.n} suffix={st.s} />
        </div>
        <div className="mt-3 font-display text-lg font-semibold text-white">{st.l}</div>
        <div className="mt-1 text-sm text-white/50">{st.d}</div>
        <div className="mt-6 h-0.5 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
      </div>
    </Reveal>
  );
});

export function Stats() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((st, i) => <StatCard key={st.l} st={st} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── AI Capabilities ────────────────────────────────────────────────────── */
export function AICapabilities() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 02" hideLine>Artificial Intelligence</SectionLabel>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
              AI that <span className="text-italic-accent">works.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-white/60 leading-relaxed">
              We turn cutting-edge AI research into revenue-generating product features — from intelligent chatbots to autonomous agents.
            </p>
          </Reveal>
        </div>

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

        <Reveal delay={0.3}>
          <div className="ai-capabilities-actions mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton as="a" href="/services#ai" className="ai-capabilities-cta-primary shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.45)]">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton as="a" href="/contact" variant="outline" className="ai-capabilities-cta-secondary hover:bg-accent/10">
              Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Featured Work ──────────────────────────────────────────────────────── */
const WorkCard = memo(function WorkCard({ w, delay }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${w.slug}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-500 hover:border-accent/40 hover:shadow-[0_24px_60px_-15px_rgba(139,92,246,0.3)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={w.img} alt={w.t} loading="lazy" decoding="async" width={600} height={450}
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            {w.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full border border-accent/20 bg-background/80 px-3 py-1 text-xs font-mono text-accent backdrop-blur-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 font-mono text-xs text-white/40">{w.year}</span>
          <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-accent">{w.t}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{w.d}</p>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-accent">
            View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
});

export function FeaturedWork() {
  const FEATURED = WORK.slice(0, 3);
  return (
    <section className="relative bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel n="/ 03">Selected Work</SectionLabel>
            <Reveal>
              <h2 className="max-w-xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
                Things we&apos;ve <span className="text-italic-accent">shipped.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-accent">
              View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURED.map((w, i) => <WorkCard key={w.slug} w={w} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Tech Stack ─────────────────────────────────────────────────────────── */
const TECH_BRAND_COLORS = {
  "next.js": { border: "hover:border-white", glow: "rgba(255,255,255,0.25)" },
  "react": { border: "hover:border-sky-400", glow: "rgba(56,189,248,0.25)" },
  "react native": { border: "hover:border-sky-400", glow: "rgba(56,189,248,0.25)" },
  "typescript": { border: "hover:border-blue-500", glow: "rgba(59,130,246,0.25)" },
  "tailwind css": { border: "hover:border-teal-400", glow: "rgba(45,212,191,0.25)" },
  "framer motion": { border: "hover:border-pink-500", glow: "rgba(236,72,153,0.25)" },
  "figma": { border: "hover:border-orange-400", glow: "rgba(251,146,60,0.25)" },
  "trpc": { border: "hover:border-indigo-400", glow: "rgba(129,140,248,0.25)" },
  "stripe": { border: "hover:border-indigo-500", glow: "rgba(99,102,241,0.25)" },
  "openai": { border: "hover:border-emerald-400", glow: "rgba(52,211,153,0.25)" },
  "node.js": { border: "hover:border-emerald-500", glow: "rgba(16,185,129,0.25)" },
  "postgresql": { border: "hover:border-blue-600", glow: "rgba(37,99,235,0.25)" },
  "graphql": { border: "hover:border-pink-600", glow: "rgba(219,39,119,0.25)" },
  "aws": { border: "hover:border-amber-500", glow: "rgba(245,158,11,0.25)" },
  "vercel": { border: "hover:border-white", glow: "rgba(255,255,255,0.25)" },
  "docker": { border: "hover:border-cyan-500", glow: "rgba(6,182,212,0.25)" },
  "terraform": { border: "hover:border-purple-600", glow: "rgba(147,51,234,0.25)" },
  "prisma": { border: "hover:border-indigo-600", glow: "rgba(79,70,229,0.25)" },
  "redis": { border: "hover:border-rose-600", glow: "rgba(225,29,72,0.25)" },
  "langchain": { border: "hover:border-emerald-400", glow: "rgba(52,211,153,0.25)" },
};
const getTechColors = (tech) => TECH_BRAND_COLORS[tech.toLowerCase()] ?? { border: "hover:border-accent", glow: "rgba(20,184,166,0.2)" };

export function TechStack() {
  const doubledFront = [...TECH_ROW1, ...TECH_ROW1, ...TECH_ROW1];
  const doubledBack = [...TECH_ROW2, ...TECH_ROW2, ...TECH_ROW2];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_bottom_left,rgba(139,92,246,0.04),transparent_50%)] dark-only" />
      <div className="mx-auto mb-16 max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 04">Tech Stack</SectionLabel>
        <Reveal>
          <h2 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Built with the <span className="text-italic-accent">best tools.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl leading-relaxed text-white/60">
            We choose the right technology for the problem — not the trendiest one. Our go-to toolkit for shipping production-grade software.
          </p>
        </Reveal>
      </div>

      <div className="relative flex select-none flex-col gap-6 overflow-hidden py-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max gap-6 marquee-track marquee-pause">
          {doubledFront.map((tech, i) => {
            const cfg = getTechColors(tech);
            return (
              <motion.div key={`f-${i}`} whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${cfg.glow}` }}
                className={`flex cursor-default items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-card/60 px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur transition-all duration-300 ${cfg.border}`}>
                <Dot className="!h-1.5 !w-1.5" />{tech}
              </motion.div>
            );
          })}
        </div>
        <div className="flex w-max gap-6 marquee-track-reverse marquee-pause">
          {doubledBack.map((tech, i) => {
            const cfg = getTechColors(tech);
            return (
              <motion.div key={`b-${i}`} whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${cfg.glow}` }}
                className={`flex cursor-default items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-card/60 px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur transition-all duration-300 ${cfg.border}`}>
                <Dot className="!h-1.5 !w-1.5 !bg-primary" />{tech}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ────────────────────────────────────────────────────────────── */
const ProcessCard = memo(function ProcessCard({ step, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="process-card group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-300 hover:border-white/20 hover:bg-card hover:shadow-[0_16px_36px_-20px_rgba(17,24,39,0.18)]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-white/35">Step</span>
          <span className="rounded-full border border-accent/10 bg-accent/5 px-2.5 py-1 font-mono text-xs text-accent">{step.n}</span>
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-brand-mint">{step.t}</h3>
        <p className="flex-1 text-sm leading-relaxed text-white/60">{step.d}</p>
        <div className="mt-6 h-0.5 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
      </div>
    </Reveal>
  );
});

export function HowWeWork() {
  return (
    <section className="relative bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel n="/ 05">Process</SectionLabel>
            <Reveal>
              <h2 className="max-w-xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
                How we <span className="text-italic-accent">work.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-accent">
              Full process <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {PROCESS.map((step, i) => (
            <div key={step.n} className="lg:col-span-1">
              <ProcessCard step={step} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries ─────────────────────────────────────────────────────────── */
export function Industries() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(20,184,166,0.04),transparent)] dark-only" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 06">Industries</SectionLabel>
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
              Industries we <span className="text-italic-accent">serve.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-white/60 leading-relaxed text-sm">
              Deep domain knowledge across 12+ verticals means faster delivery and fewer costly mistakes.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.t} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-6 transition-all duration-500 hover:border-accent/20 hover:bg-white/[0.03] hover:shadow-[0_12px_40px_-12px_rgba(20,184,166,0.15)] hover:-translate-y-0.5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-white/30 group-hover:text-accent transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>

                <h3 className="font-display text-base font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-accent mt-4">
                  {ind.t}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/80">
                  {ind.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────────────── */
const TestimonialCard = memo(function TestimonialCard({ t, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-300 hover:border-accent/40 hover:bg-card hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]">
        <div className="mb-2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="mb-4 h-7 w-7 shrink-0 text-accent/30 transition-colors duration-300 group-hover:text-accent/60" />
        <p className="flex-1 text-sm leading-relaxed text-white/80">"{t.q}"</p>
        <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/50 to-accent/30 font-display text-sm font-bold text-white">
            {t.avatar || t.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display text-sm font-semibold text-white">{t.name}</div>
            <div className="truncate text-xs text-white/50">{t.role}</div>
          </div>
          <span className="whitespace-nowrap rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">{t.tag}</span>
        </div>
      </div>
    </Reveal>
  );
});

export function Testimonials() {
  return (
    <section className="relative bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 07">Testimonials</SectionLabel>
        <Reveal>
          <h2 className="mb-14 max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Clients who <span className="text-italic-accent">trust us.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ──────────────────────────────────────────────────────── */
const WHY_ICONS = [Users, Brain, TrendingUp, Globe, Shield, Award, Sparkles, Clock];

export function WhyUs() {
  return (
    <section className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_center,rgba(139,92,246,0.04),transparent)] dark-only" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Sticky left */}
          <div className="md:sticky md:top-28">
            <SectionLabel n="/ 08">Why Instech Sol</SectionLabel>
            <Reveal>
              <h2 className="font-display text-5xl font-bold leading-[0.95] md:text-6xl">
                A different kind of <span className="text-italic-accent">agency.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                We built Instech Sol because we were tired of bloated agencies, offshore chaos, and projects that never quite shipped.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { n: 50, s: "+", l: "Projects" },
                  { n: 30, s: "+", l: "Clients" },
                  { n: 99, s: "%", l: "On-time" },
                  { n: 8, s: "+", l: "Countries" },
                ].map((st, i) => (
                  <div key={st.l} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                    <div className="font-display text-2xl font-bold text-accent">
                      <Counter to={st.n} suffix={st.s} />
                    </div>
                    <div className="mt-1 text-xs text-white/50 uppercase tracking-widest">{st.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <MagneticButton as="a" href="/about">
                  <Dot className="!h-2 !w-2" />
                  About the team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Reasons list */}
          <div className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10">
            {REASONS.map((r, i) => {
              const Icon = WHY_ICONS[i] ?? CheckCircle2;
              return (
                <Reveal key={r.t} delay={i * 0.06}>
                  <div className="group flex items-start gap-4 bg-background px-8 py-6 transition-colors duration-200 hover:bg-card">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/15 bg-accent/8 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/15">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-display text-base font-semibold text-white">{r.t}</div>
                      <div className="mt-0.5 text-sm text-white/60">{r.d}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────────────────── */
export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <CodeBackdrop />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="dark-only absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[130px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="dark-only absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-mint/10 blur-[110px] -z-10"
      />
      <div className="relative mx-auto max-w-[1000px] px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-12 md:p-24 backdrop-blur-2xl text-center shadow-[0_30px_90px_-25px_rgba(139,92,246,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(139,92,246,0.06),transparent_80%)] pointer-events-none" />

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
              <Dot className="!h-1.5 !w-1.5" />
              Ready to Transform Your Business?
            </div>

            <h2 className="relative z-10 font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-[6vw] text-white">
              Let&apos;s build <br />
              something <span className="text-italic-accent drop-shadow-[0_0_20px_rgba(20,184,166,0.3)]">remarkable.</span>
            </h2>

            <p className="relative z-10 mx-auto mt-8 max-w-xl text-base md:text-lg text-white/60 leading-relaxed">
              Schedule a free consultation, discuss your project, or request a quote. We respond within 24 hours — no sales fluff, just a straight conversation about what you need.
            </p>

            <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton as="a" href="/contact" className="!px-8 !py-4 !text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                <Dot className="!h-2 !w-2" />
                Schedule a Consultation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
              <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/25 tracking-wider">
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />Free Consultation</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />No Obligation</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />Reply in 24 Hours</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Root export ─────────────────────────────────────────────────────────── */
export default function HomePageSections() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <AICapabilities />
      <FeaturedWork />
      <TechStack />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <WhyUs />
      {/* <HomeCTA /> */}
    </>
  );
}
