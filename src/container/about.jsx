"use client";

import { Reveal, SectionLabel, Counter, PageHero, Dot } from "@/components/site/shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const VALUES = [
  { t: "Craft over speed",       d: "We move fast, but never at the cost of quality. Every interaction earns its place." },
  { t: "Radical clarity",        d: "Weekly demos, transparent estimates, no surprise invoices — ever." },
  { t: "Own the outcome",        d: "We don't hand off a repo and disappear. We stay until it ships and performs." },
  { t: "Design + engineering",   d: "One team, one Slack, one shared taste. Design informs code, code informs design." },
  { t: "AI-first thinking",      d: "We explore AI opportunities in every engagement — not as a gimmick, but as leverage." },
  { t: "Security by default",    d: "OWASP practices, dependency scanning, and secure auth patterns on every project." },
];

const TEAM = [
  { n: "Hamza A.",  r: "Founder & Engineering Lead",     color: "from-violet-500/30 to-blue-500/20" },
  { n: "Sara N.",   r: "Product Design Lead",             color: "from-pink-500/30 to-rose-500/20" },
  { n: "Bilal M.",  r: "Full-Stack Engineer",             color: "from-emerald-500/30 to-teal-500/20" },
  { n: "Zainab R.", r: "UX / Motion Designer",            color: "from-amber-500/30 to-orange-500/20" },
  { n: "Umar K.",   r: "AI / ML Engineer",                color: "from-purple-500/30 to-violet-500/20" },
  { n: "Fatima S.", r: "Mobile App Developer",            color: "from-cyan-500/30 to-blue-500/20" },
  { n: "Ali R.",    r: "DevOps & Cloud Engineer",         color: "from-green-500/30 to-emerald-500/20" },
  { n: "Hina T.",   r: "Business Development Manager",   color: "from-rose-500/30 to-pink-500/20" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="/ About"
        title="Built to deliver"
        italic="excellence."
        description="Instech Sol was founded in Islamabad to prove that a tight, senior team can outship any body-shop agency. We work with founders, product teams, and enterprises who care about the details and demand results."
      />

      {/* Stats */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-4 md:px-10">
          {[
            { n: 50, s: "+", l: "Projects shipped",  d: "Web, mobile, AI & cloud" },
            { n: 30, s: "+", l: "Happy clients",     d: "Startups to enterprises" },
            { n: 12, s: "",  l: "Team members",      d: "Senior engineers & designers" },
            { n: 8,  s: "+", l: "Countries served",  d: "Remote-first, global reach" },
          ].map((it, i) => (
            <Reveal key={it.l} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-300 hover:border-accent/30 hover:bg-card">
                <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
                <div className="font-display text-5xl font-bold text-accent md:text-6xl">
                  <Counter to={it.n} suffix={it.s} />
                </div>
                <div className="mt-3 text-sm font-semibold text-white">{it.l}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/40">{it.d}</div>
                <div className="mt-5 h-0.5 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(139,92,246,0.05),transparent)] dark-only" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <SectionLabel n="/ 01">Our Mission</SectionLabel>
              <h2 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl">
                We make <span className="text-italic-accent">technology</span> work for your business.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-5 text-white/65 leading-relaxed">
                <p>
                  We started Instech Sol because we saw too many companies overpaying for mediocre software. Body-shop agencies sending juniors on senior rates. Offshore chaos that cost more to fix than build. Projects that "shipped" but never really worked.
                </p>
                <p>
                  Our answer: a lean, senior team that owns the outcome end-to-end. From the first discovery call to post-launch monitoring, we treat every engagement as a long-term partnership — not a one-off transaction.
                </p>
                <p>
                  We specialise in AI integration, full-stack development, and cloud infrastructure — the three pillars of any modern digital business.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 02">Our Values</SectionLabel>
          <Reveal>
            <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              How we <span className="text-italic-accent">operate.</span>
            </h2>
          </Reveal>
          <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <div className="group flex h-full flex-col bg-background p-10 transition-colors duration-200 hover:bg-card">
                  <div className="mb-6 flex items-center gap-3">
                    <Dot className="!h-2 !w-2" />
                    <span className="font-mono text-xs text-white/50">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-accent">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 03">The Team</SectionLabel>
          <Reveal>
            <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Meet the <span className="text-italic-accent">people</span> behind your product.
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.07}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-transparent p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.02] hover:shadow-[0_12px_40px_-12px_rgba(20,184,166,0.15)]">
                  {/* Glowing top line */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-500 group-hover:w-full" />
                  
                  {/* Subtle Grid Backdrop inside the card */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.008)_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Header Row */}
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="font-mono text-[9px] tracking-widest text-white/30 group-hover:text-accent transition-colors">
                      // TEAM_NODE_{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/20 group-hover:bg-accent group-hover:animate-pulse transition-all duration-300" />
                  </div>

                  {/* Avatar Scanner Container */}
                  <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-accent/25 group-hover:bg-white/[0.04]">
                    {/* Concentric Scanner Rings */}
                    <div className="absolute h-[85%] w-[85%] rounded-full border border-white/[0.02] transition-transform duration-1000 group-hover:rotate-180 group-hover:border-accent/5" />
                    <div className="absolute h-[70%] w-[70%] rounded-full border border-dashed border-white/[0.02] transition-transform duration-1000 group-hover:-rotate-180 group-hover:border-accent/10" />

                    {/* Monogram Badge */}
                    <div className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${m.color} border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-105 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]`}>
                      <span className="font-display text-3xl font-extrabold tracking-tight text-white/70 group-hover:text-accent transition-colors duration-300">
                        {m.n.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="relative z-10">
                    <h3 className="font-display text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent leading-none">
                      {m.n}
                    </h3>
                    <p className="mt-2 text-xs text-white/45 group-hover:text-white/65 transition-colors duration-300">
                      {m.r}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl p-12 text-center md:p-20">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_50%,rgba(20,184,166,0.05),transparent)] pointer-events-none" />
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                Ready to work with a team that <span className="text-italic-accent">cares?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/60 leading-relaxed">
                Let's talk about your project. No sales pitch — just an honest conversation about whether we're the right fit.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(20,184,166,0.4)]">
                  <Dot className="!h-1.5 !w-1.5 !bg-background" />
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 uppercase tracking-wider transition-colors hover:text-white">
                  See our work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
