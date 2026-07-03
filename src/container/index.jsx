"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Smartphone, Palette, Server, Cloud, Compass, CheckCircle2, Quote, ChevronRight, Zap, Globe, Activity, Terminal, Cpu, GitBranch } from "lucide-react";
import {
  CodeBackdrop, Dot, MagneticButton, Reveal, SectionLabel, Counter, CTASection,
} from "@/components/site/shared";



function FloatingHeroWidgets() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-6 relative select-none z-10 [perspective:1200px] py-4">
      {/* Background radial soft light behind widgets */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "6s" }} />

      {/* Widget 1: Deployment Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotateY: -15, y: -20 }}
        animate={{ opacity: 1, x: 0, rotateY: -5, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateY: 0, y: -5, scale: 1.02, borderColor: "rgba(20, 184, 166, 0.4)" }}
        className="group relative rounded-xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 w-[90%] self-end"
      >
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">production-pipeline</span>
        </div>
        <div className="font-mono text-[11px] space-y-2 text-white/70">
          <p className="text-white/40 flex items-center gap-1.5"><Terminal className="h-3 w-3" /> instech-deploy --prod</p>
          <p className="flex items-center gap-1.5">
            <span className="text-brand-mint">✔</span> next build: compiled 104 static pages [2.8s]
          </p>
          <p className="flex items-center gap-1.5">
            <span className="text-brand-mint">✔</span> edge CDN propagation: 100% propagated
          </p>
          <div className="flex items-center gap-2 mt-4 text-xs border-t border-white/5 pt-3">
            <span className="h-2 w-2 rounded-full bg-brand-mint pulse-dot" />
            <span className="text-brand-mint font-semibold uppercase tracking-wider text-[10px] drop-shadow-[0_0_5px_rgba(20,184,166,0.3)]">Deploy Success (v2.8.1)</span>
          </div>
        </div>
      </motion.div>

      {/* Widget 2: Performance Analyzer */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotateY: 15, y: 0 }}
        animate={{ opacity: 1, x: 0, rotateY: 5, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateY: 0, y: -5, scale: 1.02, borderColor: "rgba(139, 92, 246, 0.4)" }}
        className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 w-[95%] self-start"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <Zap className="h-4 w-4 text-brand-purple" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Performance Audit</h4>
              <p className="text-[9px] font-mono text-white/40">Real-time Web Vitals</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-brand-mint bg-brand-mint/5 px-2 py-0.5 rounded border border-brand-mint/10 font-mono shadow-[0_0_10px_rgba(20,184,166,0.15)]">100/100</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center mt-2">
          {[
            { l: "LCP", v: "0.8s", stat: "Optimal" },
            { l: "FID", v: "12ms", stat: "Optimal" },
            { l: "CLS", v: "0.01", stat: "Optimal" },
          ].map((item, idx) => (
            <div key={item.l} className="bg-white/[0.02] border border-white/5 p-2 rounded-lg transition-colors group-hover:bg-white/[0.04]">
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{item.l}</div>
              <div className="text-sm font-display font-bold text-white mt-1 group-hover:text-brand-mint transition-colors duration-300">{item.v}</div>
              <div className="text-[8px] font-mono text-brand-mint mt-0.5">{item.stat}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Widget 3: Task Flow Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotateY: -10, y: 20 }}
        animate={{ opacity: 1, x: 0, rotateY: -2, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateY: 0, y: -5, scale: 1.02, borderColor: "rgba(20, 184, 166, 0.4)" }}
        className="group relative rounded-xl border border-white/10 bg-white/[0.015] p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 w-[88%] self-end"
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Active Development Stream</span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-mint animate-pulse" />
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5 transition-colors group-hover:bg-white/[0.08]">
            <span className="font-medium text-white/80">Visual Design Assets</span>
            <span className="text-[9px] bg-brand-purple/10 border border-brand-purple/20 text-brand-purple px-1.5 py-0.5 rounded font-mono">Approved</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5 transition-colors group-hover:bg-white/[0.08]">
            <span className="font-medium text-white/80">API Gateway Integration</span>
            <span className="text-[9px] bg-brand-mint/10 border border-brand-mint/20 text-brand-mint px-1.5 py-0.5 rounded font-mono animate-pulse">Active</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const wordVariant = {
    hidden: { y: "110%", opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Graphic elements */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 ken-burns">
          <img src="/assets/hero-computer.jpg" alt="" className="h-full w-full object-cover grayscale opacity-90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Grid Pattern and Ambient Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-80 pointer-events-none z-0" />
      
      {/* Dynamic Animated Ambient light shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-accent/8 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      <CodeBackdrop />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-accent shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/95 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
              A Full-Stack Dev Agency
            </span>
          </motion.div>

          {/* Mask-Reveal Title */}
          <h1 className="max-w-4xl font-display text-[10vw] font-bold leading-[0.95] tracking-tighter md:text-[6.5vw] text-white">
            <div className="overflow-hidden py-1.5 md:py-3">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="inline-block mr-4 md:mr-6"
              >
                Building
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="inline-block"
              >
                Powerful
              </motion.span>
            </div>
            <div className="overflow-hidden py-1.5 md:py-3">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                className="inline-block mr-4 md:mr-6"
              >
                Digital
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
                className="text-italic-accent inline-block drop-shadow-[0_0_20px_rgba(20,184,166,0.25)]"
              >
                Solutions
              </motion.span>
            </div>
            <div className="overflow-hidden py-1.5 md:py-3">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={wordVariant}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
                className="inline-block"
              >
                for Modern Brands
              </motion.span>
            </div>
          </h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <MagneticButton as="a" href="/services" className="shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.45)]">
              <Dot className="!h-2 !w-2" />
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <Link href="/work" className="group relative text-sm font-medium uppercase tracking-wider text-white hover:text-accent transition-colors duration-300">
              See our work →
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 group-hover:scale-x-0 group-hover:bg-accent" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Floating Interactive Cards (Desktop/Large screens only) */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          <FloatingHeroWidgets />
        </div>

        {/* Elegant scrolling line indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[9px] uppercase tracking-[0.25em] font-mono pointer-events-none"
        >
          <span>Scroll</span>
          <div className="h-12 w-[1.5px] bg-white/15 rounded-full overflow-hidden">
            <div className="h-1/2 w-full bg-accent scroll-line" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ icon: Icon, t, d, tags, delay }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const mousePX = useMotionValue(0);
  const mousePY = useMotionValue(0);
  const springPX = useSpring(mousePX, { stiffness: 150, damping: 20 });
  const springPY = useSpring(mousePY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    x.set(relX - 0.5);
    y.set(relY - 0.5);

    mousePX.set(e.clientX - rect.left);
    mousePY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${springPX}px ${springPY}px, rgba(20, 184, 166, 0.1) 0%, rgba(139, 92, 246, 0.04) 60%, transparent 80%)`;

  return (
    <Reveal delay={delay}>
      <div
        className="w-full h-full [perspective:1000px]"
        onMouseLeave={handleMouseLeave}
      >
        <motion.a
          ref={cardRef}
          href="/services"
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl p-8 transition-all duration-500 hover:border-accent/40 hover:bg-card/75 hover:shadow-[0_30px_80px_-20px_rgba(20,184,166,0.3)] select-none"
        >
          {/* Spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
            style={{ background: spotlightBg }}
          />

          <div className="relative z-10 [transform:translateZ(20px)]">
            <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
              <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Icon className="relative z-10 h-7 w-7 text-accent transition-all duration-500 group-hover:rotate-[8deg]" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{t}</h3>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">{d}</p>
            
            {/* Feature tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 transition-colors group-hover:text-accent/80 group-hover:border-accent/25 group-hover:bg-accent/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-2 text-accent font-medium text-sm [transform:translateZ(30px)]">
            Explore Services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </motion.a>
      </div>
    </Reveal>
  );
}

function Services() {
  const services = [
    { 
      icon: Code2, 
      t: "Web Development", 
      d: "Production-scale apps featuring server-side rendering, ultra-low latency, and structured API layers.", 
      tags: ["Next.js & React", "Headless Arch", "Performance API"] 
    },
    { 
      icon: Smartphone, 
      t: "Mobile Apps", 
      d: "High-performance iOS and Android apps built with smooth native integrations and robust offline-first functionality.", 
      tags: ["React Native", "Native Modules", "Offline Storage"] 
    },
    { 
      icon: Palette, 
      t: "UI / UX Design", 
      d: "Aesthetic interfaces paired with micro-animations and custom design tokens built to optimize user retention.", 
      tags: ["Figma Systems", "Interaction Motion", "User Validation"] 
    },
  ];
  return (
    <section className="relative border-y border-white/5 py-32 overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 01">Services</SectionLabel>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
            We build <span className="text-italic-accent">powerful</span> products.
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.t} icon={s.icon} t={s.t} d={s.d} tags={s.tags} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
function StatCard({ st, delay }) {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.1 });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Custom paths for sparklines based on stat labels
  let sparklinePath = "M0 25 C 20 10, 45 5, 60 15 S 85 5, 100 2";
  if (st.n === 99) sparklinePath = "M0 25 Q 30 18, 50 12 T 100 0";
  if (st.n === 8) sparklinePath = "M0 20 Q 25 5 50 15 T 100 5";

  return (
    <Reveal delay={delay}>
      <motion.div
        ref={cardRef}
        whileHover={{ y: -6, borderColor: "rgba(20, 184, 166, 0.4)", boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.2)" }}
        transition={{ duration: 0.4 }}
        className="relative bg-white/[0.015] border border-white/10 p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 group flex flex-col justify-between h-full overflow-hidden"
      >
        {/* Soft backlighting */}
        <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />

        <div>
          <div className="flex justify-between items-start">
            <div className="font-display text-5xl font-bold text-accent md:text-6xl flex items-baseline tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-mint group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-500">
                <Counter to={st.n} suffix={st.s} />
              </span>
            </div>
            {/* Sparkline visualization */}
            <div className="w-16 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
                <motion.path
                  d={sparklinePath}
                  fill="none"
                  stroke="var(--brand-mint)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
                />
              </svg>
            </div>
          </div>
          <div className="mt-6 font-display text-lg font-semibold text-white tracking-wide">{st.l}</div>
          <div className="mt-2 text-sm text-white/50 leading-relaxed">{st.d}</div>
        </div>

        {/* Dynamic footer bar */}
        <div className="mt-8 h-[2.5px] w-0 bg-gradient-to-r from-accent to-brand-mint group-hover:w-full transition-all duration-500 ease-out rounded-full" />
      </motion.div>
    </Reveal>
  );
}

function Stats() {
  const stats = [
    { n: 50, s: "+", l: "Projects shipped", d: "Across web, mobile & cloud solutions." },
    { n: 20, s: "+", l: "Happy clients", d: "From early startups to mid-market companies." },
    { n: 8, s: "+", l: "Countries served", d: "Deploying globally with remote reliability." },
    { n: 99, s: "%", l: "On-time delivery", d: "Reliable sprints with transparent checkpoints." },
  ];
  return (
    <section className="relative border-y border-white/5 py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.05),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((st, i) => (
            <StatCard key={st.l} st={st} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURED WORK
───────────────────────────────────────────── */
const FEATURED_WORK = [
  {
    img: "/assets/work-1.jpg",
    t: "Northwind Cloud",
    tags: ["Infra", "DevOps"],
    year: "2025",
    d: "Migrated a 12-year-old logistics stack to Kubernetes with zero downtime and 40% lower infrastructure cost.",
  },
  {
    img: "/assets/work-2.jpg",
    t: "Kite Mobile",
    tags: ["iOS", "Android"],
    year: "2025",
    d: "Ground-up React Native rebuild for a European travel brand — 4.9★ on both stores at launch.",
  },
  {
    img: "/assets/work-3.jpg",
    t: "Studio Vellum",
    tags: ["Design", "Web"],
    year: "2024",
    d: "Editorial site and design system for a luxury interiors studio in Milan.",
  },
];

function FeaturedProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 40);
    mouseY.set(e.clientY - rect.top - 40);
  };

  return (
    <Reveal delay={delay}>
      <motion.a
        href="/work"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover="hover"
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl transition-all duration-500 hover:border-accent/40 hover:shadow-[0_24px_80px_-20px_rgba(20,184,166,0.25)] cursor-none"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                left: springX,
                top: springY,
              }}
              className="pointer-events-none absolute z-30 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-accent text-background font-display text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20"
            >
              <div className="flex flex-col items-center leading-none">
                <span>View</span>
                <span className="mt-0.5">Study</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mock Browser Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[9px] text-white/30 tracking-wider">instech-product-preview</span>
          <span className="font-mono text-[9px] text-white/30">{project.year}</span>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.img}
            alt={project.t}
            loading="lazy"
            width={600}
            height={450}
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-40" />
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent border border-accent/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 relative z-10 bg-white/[0.005]">
          <h3 className="font-display text-2xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-accent">{project.t}</h3>
          <p className="text-sm text-white/60 flex-1 leading-relaxed">{project.d}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-accent font-medium">
            View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

function FeaturedWork() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel n="/ 02">Selected Work</SectionLabel>
            <Reveal>
              <h2 className="max-w-xl font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
                Things we've <span className="text-italic-accent">shipped.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 hover:text-accent transition-colors">
              View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURED_WORK.map((w, i) => (
            <FeaturedProjectCard key={w.t} project={w} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK MARQUEE
 ───────────────────────────────────────────── */
const FRONTEND_TECH = [
  "Next.js", "React", "TypeScript", "React Native", "Tailwind CSS", "Framer Motion", "Figma", "tRPC", "Stripe",
];

const BACKEND_TECH = [
  "Node.js", "PostgreSQL", "GraphQL", "AWS", "Vercel", "Docker", "Terraform", "Prisma", "Redis",
];

const getTechBrandColors = (tech) => {
  switch (tech.toLowerCase()) {
    case "next.js": return { border: "hover:border-white", glow: "rgba(255,255,255,0.25)" };
    case "react":
    case "react native": return { border: "hover:border-sky-400", glow: "rgba(56,189,248,0.25)" };
    case "typescript": return { border: "hover:border-blue-500", glow: "rgba(59,130,246,0.25)" };
    case "tailwind css": return { border: "hover:border-teal-400", glow: "rgba(45,212,191,0.25)" };
    case "framer motion": return { border: "hover:border-pink-500", glow: "rgba(236,72,153,0.25)" };
    case "figma": return { border: "hover:border-orange-400", glow: "rgba(251,146,60,0.25)" };
    case "trpc": return { border: "hover:border-indigo-400", glow: "rgba(129,140,248,0.25)" };
    case "stripe": return { border: "hover:border-indigo-500", glow: "rgba(99,102,241,0.25)" };
    case "node.js": return { border: "hover:border-emerald-500", glow: "rgba(16,185,129,0.25)" };
    case "postgresql": return { border: "hover:border-blue-600", glow: "rgba(37,99,235,0.25)" };
    case "graphql": return { border: "hover:border-pink-600", glow: "rgba(219,39,119,0.25)" };
    case "aws": return { border: "hover:border-amber-500", glow: "rgba(245,158,11,0.25)" };
    case "vercel": return { border: "hover:border-white", glow: "rgba(255,255,255,0.25)" };
    case "docker": return { border: "hover:border-cyan-500", glow: "rgba(6,182,212,0.25)" };
    case "terraform": return { border: "hover:border-purple-600", glow: "rgba(147,51,234,0.25)" };
    case "prisma": return { border: "hover:border-indigo-600", glow: "rgba(79,70,229,0.25)" };
    case "redis": return { border: "hover:border-rose-600", glow: "rgba(225,29,72,0.25)" };
    default: return { border: "hover:border-accent", glow: "rgba(20,184,166,0.2)" };
  }
};

function TechStack() {
  const doubledFront = [...FRONTEND_TECH, ...FRONTEND_TECH, ...FRONTEND_TECH];
  const doubledBack = [...BACKEND_TECH, ...BACKEND_TECH, ...BACKEND_TECH];
  return (
    <section className="relative border-y border-white/5 py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_bottom_left,rgba(139,92,246,0.03),transparent_50%)] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-16">
        <SectionLabel n="/ 03">Tech Stack</SectionLabel>
        <Reveal>
          <h2 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
            Built with the <span className="text-italic-accent">best tools.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            We choose the right technology for the problem — not the trendiest one. Here's our go-to toolkit for shipping production-grade software.
          </p>
        </Reveal>
      </div>

      {/* marquee strips */}
      <div className="relative flex flex-col gap-6 select-none overflow-hidden py-4 mask-horizontal">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 - Left track */}
        <div className="flex marquee-track marquee-pause gap-6 w-max">
          {doubledFront.map((tech, i) => {
            const config = getTechBrandColors(tech);
            return (
              <motion.div
                key={`front-${i}`}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${config.glow}` }}
                className={`flex items-center gap-3 rounded-full border border-white/10 bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 cursor-default whitespace-nowrap ${config.border}`}
              >
                <Dot className="!h-1.5 !w-1.5" />
                {tech}
              </motion.div>
            );
          })}
        </div>

        {/* Row 2 - Right track */}
        <div className="flex marquee-track-reverse marquee-pause gap-6 w-max">
          {doubledBack.map((tech, i) => {
            const config = getTechBrandColors(tech);
            return (
              <motion.div
                key={`back-${i}`}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${config.glow}` }}
                className={`flex items-center gap-3 rounded-full border border-white/10 bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 cursor-default whitespace-nowrap ${config.border}`}
              >
                <Dot className="!h-1.5 !w-1.5 !bg-primary" />
                {tech}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW WE WORK  (Process preview)
 ───────────────────────────────────────────── */
const PROCESS_STEPS = [
  {
    n: "01",
    t: "Discovery",
    d: "We dig into your goals, constraints, and users before writing a single line of code. 1–2 week sprint.",
    icon: Compass,
  },
  {
    n: "02",
    t: "Design & Prototype",
    d: "Interactive Figma prototypes validated with real users. You approve before we build.",
    icon: Palette,
  },
  {
    n: "03",
    t: "Engineering",
    d: "Two-week sprints, weekly demos, and a shared Notion board so you're never in the dark.",
    icon: Code2,
  },
  {
    n: "04",
    t: "Ship & Scale",
    d: "We handle staging, QA, deployment, and post-launch monitoring. Zero-downtime releases.",
    icon: Cloud,
  },
];

function ProcessCard({ step, delay, isLast }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const mousePX = useMotionValue(0);
  const mousePY = useMotionValue(0);
  const springPX = useSpring(mousePX, { stiffness: 150, damping: 20 });
  const springPY = useSpring(mousePY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    x.set(relX - 0.5);
    y.set(relY - 0.5);

    mousePX.set(e.clientX - rect.left);
    mousePY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardGlow = useMotionTemplate`radial-gradient(250px circle at ${springPX}px ${springPY}px, rgba(20, 184, 166, 0.08) 0%, rgba(139, 92, 246, 0.03) 60%, transparent 80%)`;

  return (
    <Reveal delay={delay} className="relative h-full">
      <div
        className="w-full h-full [perspective:1000px]"
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl transition-all duration-500 hover:border-accent/40 hover:bg-card/75 hover:shadow-[0_24px_60px_-15px_rgba(20,184,166,0.15)] select-none animate-none"
        >
          {/* Giant background step number */}
          <span className="absolute right-6 top-2 font-display text-[9vw] font-black text-white/[0.02] group-hover:text-accent/[0.04] transition-colors duration-500 select-none pointer-events-none [transform:translateZ(-10px)] md:text-[6vw]">
            {step.n}
          </span>

          {/* Spotlight background */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{ background: cardGlow }}
          />

          <div className="mb-6 flex items-center gap-3 relative z-10 [transform:translateZ(20px)]">
            <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent/70 transition-all duration-500 group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110">
              <step.icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="font-mono text-[10px] text-accent/60 uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{step.n}</span>
          </div>

          <h3 className="font-display text-2xl font-bold mb-4 text-white relative z-10 [transform:translateZ(15px)] transition-colors duration-300 group-hover:text-accent">{step.t}</h3>

          <p className="text-sm text-white/50 leading-relaxed flex-1 relative z-10 [transform:translateZ(10px)] group-hover:text-white/70 transition-colors duration-300">{step.d}</p>

          <div className="mt-8 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out rounded-full z-10" />
        </motion.div>
      </div>

      {/* Connecting timeline dashes */}
      {!isLast && (
        <div className="hidden lg:block absolute top-[40%] -right-3 translate-x-1/2 w-6 border-t-2 border-dashed border-white/10 z-20 pointer-events-none group-hover:border-accent/40 transition-colors duration-300" />
      )}
    </Reveal>
  );
}

function HowWeWork() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel n="/ 04">Process</SectionLabel>
            <Reveal>
              <h2 className="max-w-xl font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
                How we <span className="text-italic-accent">work.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/70 hover:text-accent transition-colors">
              Full process breakdown <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessCard key={step.n} step={step} delay={i * 0.1} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    q: "Instech Sol delivered our entire platform in 8 weeks — polished UI, solid API, live on AWS. Exactly what a startup needs.",
    name: "James R.",
    role: "CEO, Northwind Cloud",
    tag: "Cloud / DevOps",
  },
  {
    q: "Best design system we've ever had. The team actually pushed back on our ideas when they had better ones. That's rare.",
    name: "Leila M.",
    role: "CPO, Studio Vellum",
    tag: "UI / UX Design",
  },
  {
    q: "4.9 stars on both app stores at launch, zero crash reports in the first month. I've never seen a dev team so obsessed with quality.",
    name: "Tom B.",
    role: "Founder, Kite Mobile",
    tag: "Mobile Apps",
  },
];

function TestimonialCard({ t, delay }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const mousePX = useMotionValue(0);
  const mousePY = useMotionValue(0);
  const springPX = useSpring(mousePX, { stiffness: 150, damping: 20 });
  const springPY = useSpring(mousePY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    x.set(relX - 0.5);
    y.set(relY - 0.5);

    mousePX.set(e.clientX - rect.left);
    mousePY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardGlow = useMotionTemplate`radial-gradient(300px circle at ${springPX}px ${springPY}px, rgba(20, 184, 166, 0.1) 0%, rgba(139, 92, 246, 0.04) 60%, transparent 80%)`;

  return (
    <Reveal delay={delay}>
      <div
        className="w-full h-full [perspective:1000px]"
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl transition-all duration-500 hover:border-accent/40 hover:bg-card/75 hover:shadow-[0_30px_70px_-20px_rgba(20,184,166,0.25)] select-none"
        >
          {/* Spotlight background */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{ background: cardGlow }}
          />

          {/* Star ratings */}
          <div className="flex gap-1 mb-6 text-amber-400/80 z-10 relative group-hover:text-amber-400 transition-colors duration-300 [transform:translateZ(10px)]">
            {[...Array(5)].map((_, idx) => (
              <svg key={idx} className="h-4.5 w-4.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-white/85 leading-relaxed flex-1 text-[15px] relative z-10 font-sans transition-transform duration-300 [transform:translateZ(20px)] group-hover:text-white transition-colors">
            "{t.q}"
          </p>

          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 transition-transform duration-300 [transform:translateZ(30px)]">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-accent/30 flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0 ring-1 ring-white/10 group-hover:ring-accent/40 transition-all duration-500">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-display font-semibold text-sm text-white group-hover:text-accent transition-colors duration-300">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </div>
            <span className="ml-auto rounded-full bg-accent/5 border border-accent/20 px-3 py-1 text-xs font-mono text-accent whitespace-nowrap tracking-wide font-medium">
              {t.tag}
            </span>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function Testimonials() {
  return (
    <section className="relative border-t border-white/5 py-32 overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="/ 05">Testimonials</SectionLabel>
        <Reveal>
          <h2 className="mb-16 max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
            Clients who <span className="text-italic-accent">trust us.</span>
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE US
───────────────────────────────────────────── */
const REASONS = [
  { t: "Senior-only team", d: "Every engagement is staffed with mid-to-senior engineers. No juniors on your dime." },
  { t: "Fixed-price sprints", d: "Clear scopes, no scope creep surprises. We absorb overruns from our own estimates." },
  { t: "Full-stack ownership", d: "Design → dev → deployment under one roof. No finger-pointing across vendors." },
  { t: "Speed without shortcuts", d: "Two-week sprints and daily commits. Quality gates run on every push." },
  { t: "Radical transparency", d: "Weekly demos, Loom updates, shared Notion. You're never waiting for status reports." },
  { t: "Post-launch support", d: "Three months of free bug fixes after go-live. We stay until the product performs." },
];

function WhyUsVisual({ index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 backdrop-blur-xl h-[210px] flex flex-col justify-center select-none"
    >
      {/* Background glow shadow inside the visual */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      {index === 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-white/90">Instech Sol (Senior Only)</span>
            <span className="text-accent font-mono font-bold">100% Senior</span>
          </div>
          <div className="h-4.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-brand-mint shadow-[0_0_15px_rgba(20,184,166,0.5)]"
            />
          </div>
          <div className="flex justify-between items-center text-xs pt-2">
            <span className="text-white/40">Competitor Agencies</span>
            <span className="text-white/40 font-mono">~20% Senior</span>
          </div>
          <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-white/20"
            />
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-white/90">Flat-Rate Sprints vs. Billable Chaos</span>
            <span className="text-brand-mint font-mono font-bold">$ Predictable flat-rate</span>
          </div>
          <div className="relative h-24 w-full flex items-end bg-white/[0.02] rounded-lg border border-white/5 p-2 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 300 80">
              <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <motion.path
                d="M 0 65 Q 40 25 80 70 T 160 15 T 240 75 T 300 30"
                fill="none"
                stroke="rgba(239, 68, 68, 0.4)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.line
                x1="0"
                y1="45"
                x2="300"
                y2="45"
                stroke="var(--brand-mint)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]"
              />
            </svg>
            <div className="flex justify-between w-full text-[9px] text-white/30 font-mono relative z-10">
              <span>Sprint 1</span>
              <span>Sprint 3</span>
              <span>Sprint 5</span>
            </div>
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-8 relative">
            <div className="absolute top-[22px] left-8 right-8 h-0.5 bg-white/10 -z-10" />
            <motion.div
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[18px] h-1.5 w-1.5 rounded-full bg-accent blur-[2px] shadow-[0_0_8px_var(--brand-mint)]"
            />
            {[
              { l: "Design", i: Palette },
              { l: "Dev", i: Code2 },
              { l: "Cloud", i: Cloud }
            ].map((layer, idx) => (
              <motion.div
                key={layer.l}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shadow-lg group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                  <layer.i className="h-5 w-5 text-accent" />
                </div>
                <span className="text-[9px] text-white/50 font-mono uppercase tracking-widest">{layer.l}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-[10px] text-brand-mint font-mono uppercase tracking-widest bg-brand-mint/5 px-3 py-1 rounded-full border border-brand-mint/10">
            Unified Deliverables → Zero Handover Drag
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="grid grid-cols-2 gap-3.5 text-xs relative">
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-0.5 bg-accent/20 blur-[1px] -z-10 shadow-[0_0_8px_rgba(20,184,166,0.3)]"
          />
          {[
            { label: "Types Checked", check: true },
            { label: "Unit Tests Passed", check: true },
            { label: "Build Compiled", check: true },
            { label: "Staging Release", check: true },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-2.5 bg-white/5 border border-white/5 p-2.5 rounded-lg transition-colors group-hover:bg-white/[0.08]"
            >
              <div className="h-4.5 w-4.5 rounded-full bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center">
                <CheckCircle2 className="h-3 w-3 text-brand-mint" />
              </div>
              <span className="text-white/80 font-mono text-[9px] uppercase tracking-wider">{item.label}</span>
            </motion.div>
          ))}
        </div>
      )}

      {index === 4 && (
        <div className="grid grid-cols-3 gap-2.5 text-[9px] font-mono w-full">
          {[
            { title: "Backlog", tasks: ["Setup APIs", "Auth Layout"], active: false },
            { title: "In Progress", tasks: ["Loom Demo"], active: true },
            { title: "Shipped", tasks: ["Live AWS", "Figma V2"], active: false },
          ].map((col, idx) => (
            <div
              key={col.title}
              className={`bg-white/5 border border-white/5 p-2 rounded-lg flex flex-col justify-between h-[130px] transition-colors ${
                col.active ? "border-accent/30 ring-1 ring-accent/20 bg-accent/[0.02]" : ""
              }`}
            >
              <span className={`uppercase font-bold tracking-wider ${col.active ? "text-accent" : "text-white/40"}`}>{col.title}</span>
              <div className="space-y-1.5 my-2">
                {col.tasks.map((task) => (
                  <div
                    key={task}
                    className={`p-1 rounded text-[8px] border leading-tight ${
                      col.active
                        ? "bg-accent/5 border-accent/20 text-accent animate-pulse"
                        : "bg-background border-white/5 text-white/50"
                    }`}
                  >
                    {task}
                  </div>
                ))}
              </div>
              <span className="text-[7px] text-white/20 uppercase tracking-widest text-center border-t border-white/5 pt-1">
                {col.active ? "Weekly Loom" : "Notion"}
              </span>
            </div>
          ))}
        </div>
      )}

      {index === 5 && (
        <div className="flex items-center justify-around gap-6">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <svg className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="transparent" />
              <motion.circle
                cx="48"
                cy="48"
                r="40"
                stroke="var(--brand-mint)"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 62.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="drop-shadow-[0_0_10px_rgba(20,184,166,0.4)]"
              />
            </svg>
            <div className="text-center z-10">
              <div className="text-2xl font-display font-black text-white group-hover:text-brand-mint transition-colors">90 Days</div>
              <div className="text-[7px] uppercase tracking-wider text-white/40 font-mono">Free Bug Fixes</div>
            </div>
          </div>
          <div className="space-y-1.5 text-left max-w-[150px]">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Post-Launch Security</h4>
            <p className="text-[9px] text-white/50 font-mono leading-relaxed">
              We stay on standby to ensure site metrics remain at peak levels post-migration.
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function WhyUs() {
  const [activeReason, setActiveReason] = useState(0);
  return (
    <section className="relative border-y border-white/5 py-32 overflow-hidden bg-background">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-20 md:grid-cols-2 md:items-start">
          {/* left — sticky heading */}
          <div className="md:sticky md:top-32">
            <SectionLabel n="/ 06">Why Instech Sol</SectionLabel>
            <Reveal>
              <h2 className="font-display text-5xl font-bold leading-[0.95] md:text-6xl text-white">
                A different kind of <span className="text-italic-accent">agency.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
                We built Instech Sol because we were tired of bloated agencies and offshore chaos. Here's what makes us different.
              </p>
            </Reveal>

            {/* Interactive proof dashboard illustration */}
            <AnimatePresence mode="wait">
              <WhyUsVisual index={activeReason} />
            </AnimatePresence>

            <Reveal delay={0.25}>
              <div className="mt-10">
                <MagneticButton as="a" href="/about">
                  <Dot className="!h-2 !w-2" />
                  About the team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* right — reasons list */}
          <div className="space-y-px bg-white/5 rounded-xl overflow-hidden">
            {REASONS.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <motion.div
                  onMouseEnter={() => setActiveReason(i)}
                  whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.03)" }}
                  transition={{ duration: 0.3 }}
                  className={`group flex items-start gap-5 p-8 transition-colors cursor-default ${activeReason === i ? "bg-card border-l-2 border-accent" : "bg-background"
                    }`}
                >
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${activeReason === i ? "text-accent scale-110" : "text-white/30"
                    }`} />
                  <div>
                    <h3 className={`font-display text-lg font-semibold transition-colors duration-300 ${activeReason === i ? "text-accent" : "text-white"
                      }`}>{r.t}</h3>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">{r.d}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const bgGlow = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(139, 92, 246, 0.12) 0%, rgba(20, 184, 166, 0.06) 50%, transparent 80%)`;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-primary via-accent to-brand-purple origin-left z-50 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        style={{ scaleX }}
      />

      {/* Cursor tracking ambient background glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none"
        style={{ background: bgGlow }}
      />

      <Hero />
      <Services />
      <Stats />
      <FeaturedWork />
      <TechStack />
      <HowWeWork />
      <Testimonials />
      <WhyUs />
      <CTASection />
    </>
  );
}
