"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Reveal, SectionLabel, PageHero, Dot } from "@/components/site/shared";

const ROLES = [
  { t: "Senior Full-Stack Engineer", loc: "Islamabad / Remote", type: "Full-time", team: "Engineering" },
  { t: "Product Designer", loc: "Islamabad", type: "Full-time", team: "Design" },
  { t: "Mobile Engineer (React Native)", loc: "Remote", type: "Contract", team: "Engineering" },
  { t: "DevOps Engineer", loc: "Islamabad / Remote", type: "Full-time", team: "Infra" },
  { t: "Motion Designer", loc: "Remote", type: "Part-time", team: "Design" },
];

const PERKS = [
  { t: "Senior-only team", d: "You'll be surrounded by 10+ year practitioners. No juniors, no ladder politics." },
  { t: "Real ownership", d: "You lead work end-to-end. If you shipped it, your name is on it — and in the changelog." },
  { t: "Flexible hours", d: "Async by default. Overlap 4 hours a day; the rest is yours." },
  { t: "Learning budget", d: "$1,500/yr for books, courses, conferences — no approval theatre." },
  { t: "Hardware you love", d: "Pick your setup. We'll pay for it." },
  { t: "Health & rest", d: "Full health cover + 25 days PTO + your birthday off." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Careers"
        title="Build with"
        italic="us."
        description="We hire senior humans who take their craft personally. If that's you, we should talk."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Open roles</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.05}>
                <motion.a
                  href="mailto:careers@instechsol.com"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-transparent p-6 transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.02] hover:shadow-[0_12px_40px_-12px_rgba(20,184,166,0.2)]"
                >
                  {/* Subtle high-tech grid overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.012)_1px,transparent_1px)] bg-[size:16px_16px] transition-all duration-500 group-hover:bg-[linear-gradient(rgba(20,184,166,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.025)_1px,transparent_1px)]" />
                  
                  {/* Top glowing gradient border line */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-500 group-hover:w-full" />
                  
                  {/* Subtle inner radial glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10 w-full">
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider text-accent uppercase">
                        {r.team}
                      </span>
                      <span className="font-mono text-[10px] text-white/20 group-hover:text-accent/60 transition-colors duration-300">
                        // {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    
                    {/* Role Title */}
                    <h3 className="font-display text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-accent mb-6 leading-snug">
                      {r.t}
                    </h3>
                  </div>
                  
                  <div className="relative z-10 mt-auto w-full">
                    {/* Metadata details */}
                    <div className="space-y-2.5 border-t border-white/5 pt-4 pb-5">
                      <div className="flex items-center gap-2 text-xs text-white/50 transition-colors duration-300 group-hover:text-white/70">
                        <MapPin className="h-3.5 w-3.5 text-accent/60 transition-colors duration-300 group-hover:text-accent" />
                        {r.loc}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/50 transition-colors duration-300 group-hover:text-white/70">
                        <Clock className="h-3.5 w-3.5 text-accent/60 transition-colors duration-300 group-hover:text-accent" />
                        {r.type}
                      </div>
                    </div>
                    
                    {/* Apply action pill button */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                      Apply Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-10 text-sm text-white/50">
              Don't see your role? <a href="mailto:careers@instechsol.com" className="text-accent underline underline-offset-4">Pitch us anyway</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 02">Why here</SectionLabel>
          <Reveal>
            <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              A place to do the <span className="text-italic-accent">best</span> work of your career.
            </h2>
          </Reveal>
          <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="flex h-full flex-col bg-background p-8">
                  <Dot className="!h-2 !w-2" />
                  <h3 className="mt-6 font-display text-xl font-semibold">{p.t}</h3>
                  <p className="mt-3 text-sm text-white/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

