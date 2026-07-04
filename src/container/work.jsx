"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, PageHero } from "@/components/site/shared";
import { WORK } from "@/lib/work-data";

export { WORK };

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Work"
        title="Selected"
        italic="projects."
        description="A sample of what we've shipped recently. Ask us for the full case studies under NDA."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel n="/ 01">Case studies</SectionLabel>
          <div className="grid gap-10">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.05}>
                <Link
                  href={`/work/${w.slug}`}
                  className="group grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr] md:items-center"
                >
                  {/* CSS-only scale — no motion.div wrapper */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-card">
                    <img
                      src={w.img}
                      alt={w.t}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/50">
                      <span>{w.year}</span>
                      <span>/</span>
                      {w.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <h3 className="font-display text-4xl font-semibold md:text-5xl">{w.t}</h3>
                    <p className="mt-4 max-w-md text-white/60">{w.d}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wider text-accent">
                      Read case <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
