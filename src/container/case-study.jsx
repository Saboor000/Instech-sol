"use client";
/* eslint-disable */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Calendar, Clock, Quote, Building2 } from "lucide-react";
import { Reveal, Dot, SectionLabel, CodeBackdrop } from "@/components/site/shared";
import { WORK } from "@/lib/work-data";

export default function CaseStudyPage({ project }) {
  // Related projects (exclude current)
  const relatedProjects = WORK.filter((w) => w.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <CodeBackdrop />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

        <div className="relative mx-auto max-w-350 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <Link
              href="/work"
              className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">{project.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-5xl font-bold leading-none tracking-tighter md:text-[5.5vw]"
          >
            {project.headline}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-white/60">
              <Building2 className="h-4 w-4 text-accent" />
              <span className="font-medium">{project.client}</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="font-mono">{project.year}</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="h-4 w-4 text-accent" />
              <span className="font-mono">{project.duration}</span>
            </div>
            <span className="text-white/20">·</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-mono border ${project.accentTag}`}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative py-12">
        <div className="mx-auto max-w-250 px-6 md:px-10">
          <Reveal>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-card shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={project.img}
                alt={project.t}
                className="h-full w-full object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-16 border-b border-white/5">
        <div className="mx-auto max-w-225 px-6 md:px-10">
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed">{project.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative py-20 border-b border-white/5">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <div className="grid gap-px bg-white/5 md:grid-cols-4 rounded-xl overflow-hidden">
            {project.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="bg-background p-8 md:p-10 transition-colors duration-300 hover:bg-card/50">
                  <div className="font-display text-5xl md:text-6xl font-bold text-accent mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="relative py-24">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <div className="grid gap-20 lg:grid-cols-[1fr_400px]">

            {/* Left Column — Main narrative */}
            <div className="space-y-20">

              {/* Challenge */}
              <Reveal>
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <Dot className="h-2! w-2!" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">The challenge</span>
                  </div>
                  <p className="text-lg text-white/75 leading-relaxed">{project.challenge}</p>
                </div>
              </Reveal>

              {/* Solution */}
              <Reveal delay={0.1}>
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <Dot className="h-2! w-2!" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">Our solution</span>
                  </div>
                  <p className="text-lg text-white/75 leading-relaxed">{project.solution}</p>
                </div>
              </Reveal>

              {/* Process Timeline */}
              {project.process && (
                <Reveal delay={0.15}>
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <Dot className="h-2! w-2!" />
                      <span className="font-mono text-xs uppercase tracking-widest text-white/50">How we worked</span>
                    </div>
                    <div className="space-y-4">
                      {project.process.map((step, i) => (
                        <Reveal key={step.phase} delay={i * 0.06}>
                          <div className="group relative flex gap-6 rounded-xl border border-white/10 bg-card/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card/60">
                            <div className="shrink-0">
                              <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${project.accentBorder} ${project.accentTag} font-display text-lg font-bold`}>
                                {i + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-4 mb-2">
                                <h3 className="font-display text-xl font-semibold text-white">{step.phase}</h3>
                                <span className="font-mono text-xs text-white/40">{step.weeks}</span>
                              </div>
                              <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Results */}
              <Reveal delay={0.2}>
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Dot className="h-2! w-2!" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">Results</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.results.map((r, i) => (
                      <Reveal key={r} delay={i * 0.04}>
                        <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-card/30 p-5 transition-colors hover:border-accent/30">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm text-white/80 leading-relaxed">{r}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Sidebar — Sticky */}
            <div className="space-y-8">

              {/* Tech Stack */}
              <Reveal delay={0.25}>
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm p-8">
                    <div className="mb-6 text-xs font-mono uppercase tracking-widest text-white/40">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-background/80 px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-accent/30 hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className={`rounded-xl border p-8 ${project.accentBorder} ${project.accentTag.replace('text-', 'bg-').replace(/\/10/, '/5')}`}>
                      <Quote className="h-8 w-8 mb-4 opacity-40" />
                      <p className="text-sm leading-relaxed mb-6 text-white/90 italic">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/40 to-accent/30 font-display text-sm font-bold text-white">
                          {project.testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-display text-sm font-semibold text-white">{project.testimonial.name}</div>
                          <div className="text-xs text-white/50">{project.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-8">
                    <div className="mb-4 text-sm font-display font-semibold text-white">Want full case details?</div>
                    <p className="mb-6 text-sm text-white/60 leading-relaxed">
                      Detailed specs, metrics, and architecture diagrams are available under NDA. Reach out and we'll send them over.
                    </p>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    >
                      Request full study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="relative py-24">
          <div className="mx-auto max-w-350 px-6 md:px-10">
            <SectionLabel n="/ More work">Related projects</SectionLabel>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {relatedProjects.map((w, i) => (
                <Reveal key={w.slug} delay={i * 0.1}>
                  <Link
                    href={`/work/${w.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card transition-all duration-500 hover:border-accent hover:shadow-[0_24px_80px_-20px_rgba(139,92,246,0.3)]"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={w.img}
                        alt={w.t}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {w.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent border border-accent/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <span className="font-mono text-xs text-white/40 mb-2">{w.year}</span>
                      <h3 className="font-display text-2xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-accent">{w.t}</h3>
                      <p className="text-sm text-white/60 flex-1 leading-relaxed">{w.d}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm text-accent font-medium">
                        View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

