"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, MessageSquare } from "lucide-react";

const logoAsset = {
  url: "/assets/instech-logo.png",
};

/* ---------------- Cursor ---------------- */
export function CustomCursor() {
  return null;
}

/* ---------------- Code background ---------------- */
const CODE_SNIPPETS = [
  'print("Hello, world")',
  "const build = () => ship();",
  "> npm run deploy",
  "async function fetch()",
  "0xFF3A2B  0x1A1A1A",
  "$ git push origin main",
  "SELECT * FROM users;",
  "// TODO: ship it",
  "export default App",
  "docker compose up -d",
  "return <Instech />",
  "curl -X POST /api/v1",
];
export function CodeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {CODE_SNIPPETS.map((s, i) => (
        <span
          key={i}
          className="absolute font-mono text-xs text-white/40 flicker whitespace-nowrap"
          style={{
            top: `${(i * 83) % 95}%`,
            left: `${(i * 137) % 90}%`,
            animationDelay: `${(i * 0.7) % 6}s`,
            transform: `rotate(${i % 2 ? -2 : 2}deg)`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export function Dot({ className = "" }) {
  return <span className={`inline-block h-2.5 w-2.5 rounded-full bg-accent pulse-dot ${className}`} />;
}

/* ---------------- Button ---------------- */
export function MagneticButton({
  children,
  className = "",
  variant = "solid",
  as = "button",
  href,
  onClick,
}) {
  const base = "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-accent"
      : variant === "outline"
        ? "border border-white/20 text-white hover:border-accent"
        : "text-white";
  const inner = (
    <span className="relative z-10 flex items-center gap-3">{children}</span>
  );
  if (as === "a") {
    return (
      <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {inner}
    </button>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ n, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-8 flex items-center gap-4"
    >
      <span className="font-mono text-xs text-accent">{n}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="block h-px w-16 origin-left bg-accent"
      />
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">{children}</span>
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------------- Page hero (used on inner pages) ---------------- */
export function PageHero({ eyebrow, title, italic, description }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <CodeBackdrop />
      <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="relative mx-auto max-w-350 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">{eyebrow}</span>
        </motion.div>
        <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.95] tracking-tighter md:text-[7vw]">
          <motion.span
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {title} {" "}
          </motion.span>
          {italic && (
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-italic-accent inline-block"
            >
              {italic}
            </motion.span>
          )}
        </h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-2xl text-lg text-white/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

/* ---------------- Navbar ---------------- */
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "Company" },
];

const NAV_DROPDOWNS = {
  "/services": {
    heading: "What we build",
    items: [
      { label: "Web Development", desc: "Next.js, React & TypeScript apps that scale.", href: "/services#web" },
      { label: "Mobile Apps", desc: "React Native for iOS & Android.", href: "/services#mobile" },
      { label: "UI / UX Design", desc: "Every pixel, motion & interaction.", href: "/services#design" },
      { label: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes & CI/CD.", href: "/services#cloud" },
    ],
    cta: { label: "See all services", href: "/services" },
  },
  "/work": {
    heading: "Selected work",
    items: [
      { label: "Northwind Cloud", desc: "Zero-downtime Kubernetes migration.", href: "/work/northwind-cloud" },
      { label: "Kite Mobile", desc: "4.9★ travel app, rebuilt in 14 weeks.", href: "/work/kite-mobile" },
      { label: "Studio Vellum", desc: "Editorial site for a luxury interiors studio.", href: "/work/studio-vellum" },
      { label: "Ledger OS", desc: "Multi-tenant accounting API at 4M+ req/day.", href: "/work/ledger-os" },
    ],
    cta: { label: "View all projects", href: "/work" },
  },
  "/process": {
    heading: "How we work",
    items: [
      { label: "Discovery", desc: "Goals, constraints & user research first.", href: "/process#discovery" },
      { label: "Design & Prototype", desc: "Figma prototypes approved before we build.", href: "/process#design" },
      { label: "Engineering", desc: "Two-week sprints with weekly demos.", href: "/process#engineering" },
      { label: "Ship & Scale", desc: "Zero-downtime deploys & post-launch support.", href: "/process#ship" },
    ],
    cta: { label: "Full process breakdown", href: "/process" },
  },
  "/about": {
    heading: "The company",
    items: [
      { label: "About Us", desc: "Who we are and how we got here.", href: "/about" },
      { label: "Careers", desc: "Join a senior team that ships.", href: "/careers" },
      { label: "Contact", desc: "Start a conversation with us.", href: "/contact" },
    ],
    cta: { label: "Start a project", href: "/contact" },
  },
};

function NavDropdown({ dropdown, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-1/2 top-full mt-3 w-85 -translate-x-1/2 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      {/* Arrow */}
      <div className="absolute -top-1.25 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/10 bg-background/95" />

      <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
        {dropdown.heading}
      </p>

      <div className="space-y-0.5">
        {dropdown.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start gap-2.5 rounded-xl px-2.5 py-2.5 transition-all duration-150 hover:bg-white/5"
          >
            <div className="flex h-5 w-1.5 items-center justify-start shrink-0">
              <span className="h-1 w-1 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </div>
            
            <div className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1">
              <div className="text-sm font-medium text-white/90 group-hover:text-white">{item.label}</div>
              <div className="mt-0.5 text-xs text-white/40 group-hover:text-white/60">{item.desc}</div>
            </div>
            
            <ArrowUpRight className="ml-auto mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ))}
      </div>

      <div className="mt-3 border-t border-white/5 pt-3">
        <Link
          href={dropdown.cta.href}
          className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent/5"
        >
          {dropdown.cta.label}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);
  useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const s = () => setScrolled(window.scrollY > 40);
    s();
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  const openDropdown = (key) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-white/20 shadow-sm transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(255,255,255,0.3)]">
            <img src={logoAsset.url} alt="Instech Sol" width={28} height={28} className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-[-0.02em] text-white">
              Instech<span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">Sol</span>
            </span>
            <span className="mt-0.5 font-italic text-[9px] italic tracking-[0.15em] text-accent/70">Innovate. Build. Scale.</span>
          </div>
        </Link>

        {/* Pill Nav � desktop */}
        <nav className="hidden md:flex items-center">
          <div className={`flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-white/4 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/3 border-white/[0.07] backdrop-blur-md"
          }`}>
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              const hasDropdown = !!NAV_DROPDOWNS[l.to];
              return (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openDropdown(l.to)}
                  onMouseLeave={() => hasDropdown && closeDropdown()}
                >
                  <Link
                    href={l.to}
                    className={`relative flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      active
                        ? "bg-white text-background shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/6"
                    }`}
                  >
                    {l.label}
                    {hasDropdown && (
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === l.to ? "rotate-180" : ""} ${active ? "text-background/60" : "text-white/40"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {hasDropdown && (
                    <NavDropdown
                      dropdown={NAV_DROPDOWNS[l.to]}
                      visible={activeDropdown === l.to}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Right side � CTA + mobile menu */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/25 px-4 py-2 text-xs font-semibold text-accent uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse inline-block" />
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/3 backdrop-blur md:hidden transition-colors hover:border-white/30"
          >
            <span className={`block h-px w-4 bg-white transition-all duration-300 ${open ? "translate-y-0.75 rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-white transition-all duration-300 ${open ? "-translate-y-0.75 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/5 bg-background/90 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              const dropdown = NAV_DROPDOWNS[l.to];
              return (
                <div key={l.to}>
                  <Link
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      active ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                  {dropdown && (
                    <div className="ml-4 mt-1 mb-2 space-y-0.5">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white/50 transition-colors hover:text-white/80"
                        >
                          <span className="text-accent/60">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/25 px-5 py-3 text-sm font-semibold text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ---------------- Footer CTA ---------------- */
export function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-75 w-75 -translate-y-1/2 rounded-full bg-accent/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-75 w-75 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[100px]" />

      <div className="relative mx-auto max-w-250 px-6 text-center md:px-10">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
            <Dot className="h-1.5 w-1.5" />
            Your Digital Transformation Partner
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Have a project worth <span className="text-italic-accent">building?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            From AI-powered apps to enterprise platforms � we&apos;re ready to help. Schedule a free consultation and let&apos;s map your roadmap together.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton as="a" href="/contact" className="px-7! py-3.5! shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              <MessageSquare className="h-4 w-4" />
              Free Consultation
            </MagneticButton>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
            >
              Explore services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/25 tracking-wider">
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />50+ projects shipped</span>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />8+ countries served</span>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent/40" />Free consultation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const socials = [
    { Icon: Github, href: "https://github.com" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Instagram, href: "https://instagram.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-background pt-16 pb-8">
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-65 w-130 rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-accent/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 border-b border-white/5 pb-10 md:grid-cols-4">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white shadow-sm transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(255,255,255,0.25)]">
                  <img
                    src={logoAsset.url}
                    alt="Instech Sol Logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-2xl font-bold tracking-[-0.02em] text-white">
                    Instech<span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">Sol</span>
                  </span>
                  <span className="mt-0.5 font-italic text-[9px] italic tracking-[0.15em] text-accent/70">
                    Innovate. Build. Scale.
                  </span>
                </div>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                Your one-stop AI and full-stack technology partner. Building powerful digital solutions from Islamabad to the world.
              </p>
            </div>
            
            {/* Availability status indicator */}
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-medium text-white/70">Available for new projects — Q3 2026</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Navigate</div>
            <ul className="space-y-3.5">
              {NAV_LINKS.slice(1).map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="group flex items-center gap-1 text-sm font-medium text-white/70 transition-all duration-300 hover:text-accent hover:translate-x-1.5"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-1 text-sm font-medium text-white/70 transition-all duration-300 hover:text-accent hover:translate-x-1.5"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Socials Col */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Contact</div>
              <a
                href="mailto:Info@instechsol.com"
                className="group flex items-center gap-2.5 text-sm font-medium text-white/80 transition-colors hover:text-accent"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent">
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                </div>
                Info@instechsol.com
              </a>
            </div>

            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Connect</div>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.015] text-white/60 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  >
                    <s.Icon className="h-4.5 w-4.5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            ? {new Date().getFullYear()} Instech Sol. All rights reserved.
          </div>
          
          {/* Back to top dynamic scroll button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-300 text-white/60 hover:text-white cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

          <div className="font-mono uppercase tracking-[0.2em] text-white/30 text-[10px]">Islamabad, Pakistan</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- CTA (shared bottom section) ---------------- */
export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 bg-background">
      <CodeBackdrop />
      {/* Futuristic glowing mesh circles behind the CTA block */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[130px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-mint/10 blur-[110px] -z-10"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-12 md:p-24 backdrop-blur-2xl text-center shadow-[0_30px_90px_-25px_rgba(139,92,246,0.3)]">
            {/* Radial card highlight spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(139,92,246,0.06),transparent_80%)] pointer-events-none" />

            <h2 className="relative z-10 font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-[7vw] text-white">
              Let's build <br />
              something <span className="text-italic-accent drop-shadow-[0_0_20px_rgba(20,184,166,0.3)]">unique</span>.
            </h2>
            
            <p className="relative z-10 mx-auto mt-8 max-w-xl text-base md:text-lg text-white/60 leading-relaxed">
              Have a product to ship, a project to migrate, or a bold idea worth building? We respond within 24 hours.
            </p>

            <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-6">
              <MagneticButton as="a" href="/contact" className="!px-8 !py-4 !text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                <Dot className="!h-2 !w-2" />
                Start a project
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
              <a href="mailto:hello@instechsol.com" className="group text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-accent transition-colors duration-300">
                hello@instechsol.com
                <span className="mt-1 block h-px w-full origin-left scale-x-100 bg-white/40 transition-transform duration-500 group-hover:scale-x-0 group-hover:bg-accent" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { ArrowUpRight, ArrowRight };

