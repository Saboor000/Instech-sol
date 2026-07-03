"use client";

import { Reveal, SectionLabel, Counter, CTASection, PageHero, Dot } from "@/components/site/shared";

const VALUES = [
  { t: "Craft over speed", d: "We move fast, but never at the cost of quality. Every interaction earns its place." },
  { t: "Radical clarity", d: "Weekly demos, transparent estimates, no surprise invoices — ever." },
  { t: "Own the outcome", d: "We don't hand off a repo and disappear. We stay until it ships and performs." },
  { t: "Design + engineering", d: "One team, one Slack, one shared taste. Design informs code, code informs design." },
];

const TEAM = [
  { n: "Hamza A.", r: "Founder & Engineering" },
  { n: "Sara N.", r: "Product Design Lead" },
  { n: "Bilal M.", r: "Full-Stack Engineer" },
  { n: "Zainab R.", r: "UX / Motion Designer" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="/ About"
        title="A small team,"
        italic="big ambitions."
        description="Instech Sol was founded in 2024 in Islamabad to prove that a tight, senior team can outship any body-shop agency. We work with founders, product teams, and marketing leads who care about the details."
      />

      <section className="relative border-b border-white/5 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-4 md:px-10">
          {[
            { n: 50, s: "+", l: "Projects shipped" },
            { n: 20, s: "+", l: "Active clients" },
            { n: 12, s: "", l: "Team members" },
            { n: 8, s: "+", l: "Countries served" },
          ].map((it, i) => (
            <Reveal key={it.l} delay={i * 0.08}>
              <div>
                <div className="font-display text-5xl font-bold text-accent md:text-6xl">
                  <Counter to={it.n} suffix={it.s} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-white/50">{it.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative border-b border-white/5 py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Our values</SectionLabel>
          <Reveal>
            <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              How we <span className="text-italic-accent">operate</span>.
            </h2>
          </Reveal>
          <div className="grid gap-px bg-white/5 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-background p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <Dot className="!h-2 !w-2" />
                    <span className="font-mono text-xs text-white/50">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold">{v.t}</h3>
                  <p className="mt-4 text-white/60">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5 py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 02">The team</SectionLabel>
          <Reveal>
            <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Senior <span className="text-italic-accent">humans</span>, no juniors on your bill.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-card p-6 transition-all hover:border-accent">
                  <div className="mb-6 aspect-square rounded bg-gradient-to-br from-primary/40 via-primary/10 to-accent/20" />
                  <div className="font-display text-xl font-semibold">{m.n}</div>
                  <div className="mt-1 text-sm text-white/50">{m.r}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
