"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Reveal, SectionLabel, CTASection, PageHero, Dot } from "@/components/site/shared";

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

      <section className="relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Open roles</SectionLabel>
          <div className="grid gap-3">
            {ROLES.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.05}>
                <motion.a
                  href="mailto:careers@instechsol.com"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid gap-4 rounded-lg border border-white/10 bg-card/40 p-6 transition-colors hover:border-accent md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-center"
                >
                  <div>
                    <div className="mb-1 font-mono text-xs text-accent">{r.team}</div>
                    <h3 className="font-display text-2xl font-semibold md:text-3xl">{r.t}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4 text-accent" /> {r.loc}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Clock className="h-4 w-4 text-accent" /> {r.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-white/60 transition-colors group-hover:text-accent">
                    Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
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

      <section className="relative border-b border-white/5 py-32">
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

      <CTASection />
    </>
  );
}
