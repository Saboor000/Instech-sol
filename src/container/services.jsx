"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Server, Cloud, Compass, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, CTASection, PageHero } from "@/components/site/shared";

const SERVICES = [
  {
    n: "01",
    icon: Code2,
    t: "Web Development",
    d: "Production-grade web apps built on modern stacks — Next.js, React, TanStack, TypeScript.",
    items: ["Marketing sites & landing pages", "SaaS dashboards & admin tools", "E-commerce storefronts", "CMS integrations"],
  },
  {
    n: "02",
    icon: Smartphone,
    t: "Mobile Apps",
    d: "Cross-platform apps with React Native and native modules where performance matters.",
    items: ["iOS & Android release engineering", "Offline-first data sync", "Push notifications & deep links", "App Store optimization"],
  },
  {
    n: "03",
    icon: Palette,
    t: "UI / UX Design",
    d: "Interfaces designed with intent — every pixel, motion, and micro-interaction earning its place.",
    items: ["Product design systems", "Motion & interaction design", "User research & testing", "Rapid prototyping"],
  },
  {
    n: "04",
    icon: Server,
    t: "Backend & API",
    d: "Scalable Node & Postgres backends, clean REST & GraphQL APIs, and rock-solid auth.",
    items: ["REST & GraphQL APIs", "Database design & migrations", "Auth, RBAC & billing", "Third-party integrations"],
  },
  {
    n: "05",
    icon: Cloud,
    t: "Cloud & DevOps",
    d: "Infrastructure as code, CI/CD pipelines, observability, and zero-downtime deployments.",
    items: ["AWS / GCP / Vercel setup", "Terraform & IaC", "CI/CD pipelines", "Monitoring & alerting"],
  },
  {
    n: "06",
    icon: Compass,
    t: "Consulting",
    d: "Product strategy, architecture reviews, and technical due diligence for founders and teams.",
    items: ["Architecture audits", "Tech due diligence", "Team & hiring guidance", "Product discovery sprints"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Services"
        title="Six ways we"
        italic="ship."
        description="From napkin sketch to production traffic — pick a service or bundle. We flex to the project."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Full menu</SectionLabel>
          <div className="grid gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid gap-8 border-b border-white/10 py-10 transition-colors hover:border-accent md:grid-cols-[80px_1fr_1fr_auto] md:items-start"
                >
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      <h3 className="font-display text-3xl font-semibold md:text-4xl">{s.t}</h3>
                    </div>
                    <p className="max-w-md text-white/60">{s.d}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-white/70">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <ArrowRight className="h-6 w-6 text-white/40 transition-all group-hover:translate-x-2 group-hover:text-accent" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
