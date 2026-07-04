"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import { Reveal, SectionLabel, PageHero, Dot, MagneticButton } from "@/components/site/shared";

const fields = [
  { l: "Your name", n: "name", t: "text", required: true },
  { l: "Email", n: "email", t: "email", required: true },
  { l: "Company (optional)", n: "company", t: "text" },
];

function AnimatedField({ f }) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || val.length > 0;
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-0 origin-left text-sm uppercase tracking-widest transition-all duration-200 ease-out ${
          active ? "-translate-y-[18px] scale-[0.82] text-accent" : "translate-y-2 text-white/50"
        } ${focused ? "text-accent" : ""}`}
      >
        {f.l}
      </span>
      <input
        required={f.required}
        type={f.t}
        name={f.n}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative w-full bg-transparent pb-3 pt-6 text-lg text-white outline-none"
      />
      <span className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
      <span
        className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ease-out ${focused ? "w-full" : "w-0"}`}
      />
    </label>
  );
}

function AnimatedTextarea() {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || val.length > 0;
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-0 origin-left text-sm uppercase tracking-widest transition-all duration-200 ease-out ${
          active ? "-translate-y-[18px] scale-[0.82] text-accent" : "translate-y-2 text-white/50"
        } ${focused ? "text-accent" : ""}`}
      >
        Tell us about your project
      </span>
      <textarea
        required
        name="message"
        rows={5}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full resize-none bg-transparent pb-3 pt-6 text-lg text-white outline-none"
      />
      <span className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
      <span
        className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ease-out ${focused ? "w-full" : "w-0"}`}
      />
    </label>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [budget, setBudget] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <>
      <PageHero
        eyebrow="/ Contact"
        title="Start a"
        italic="project."
        description="Tell us what you're building. We'll reply within 24 hours with next steps."
      />

      <section className="relative py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:px-10">
          <Reveal>
            <SectionLabel n="/ 01">Reach us</SectionLabel>
            <div className="space-y-8">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                  <Mail className="h-4 w-4 text-accent" /> Email
                </div>
                <a href="mailto:Info@instechsol.com" className="font-display text-2xl hover:text-accent md:text-3xl">
                  Info@instechsol.com
                </a>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                  <MapPin className="h-4 w-4 text-accent" /> Studio
                </div>
                <div className="font-display text-2xl md:text-3xl">Islamabad, Pakistan</div>
                <p className="mt-2 text-sm text-white/50">Open Mon–Fri · 10am–7pm PKT</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                  <Dot className="!h-1.5 !w-1.5" /> Response time
                </div>
                <p className="text-white/70">Under 24 hours on weekdays. We read every message.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-8 backdrop-blur-sm md:p-10"
            >
              {/* Static accent border — no rotation animation */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-accent/10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="relative rounded-2xl bg-card/60 p-1">
                <AnimatePresence mode="wait">
                  {status !== "sent" ? (
                    <motion.div
                      key="form"
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid gap-8 p-6"
                    >
                      {fields.map((f) => (
                        <motion.div
                          key={f.n}
                          variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <AnimatedField f={f} />
                        </motion.div>
                      ))}
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                      >
                        <span className="mb-3 block text-xs uppercase tracking-widest text-white/50">Budget</span>
                        <div className="flex flex-wrap gap-2">
                          {["< $10k", "$10–25k", "$25–50k", "$50k+"].map((b) => {
                            const selected = budget === b;
                            return (
                              <motion.button
                                type="button"
                                key={b}
                                onClick={() => setBudget(b)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${
                                  selected
                                    ? "border-accent bg-accent/10 text-accent"
                                    : "border-white/20 text-white/70 hover:border-white/40"
                                }`}
                              >
                                {b}
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                      >
                        <AnimatedTextarea />
                      </motion.div>
                      <motion.button
                        type="submit"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "sending"}
                        className="relative flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-medium text-background transition-all disabled:opacity-70"
                      >
                        {status === "idle" && (
                          <>
                            Send <Send className="h-4 w-4" />
                          </>
                        )}
                        {status === "sending" && (
                          <>
                            Sending <Loader2 className="h-4 w-4 animate-spin" />
                          </>
                        )}
                        {status === "sent" && (
                          <>
                            Sent! <Check className="h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center gap-4 p-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20"
                      >
                        <Check className="h-8 w-8 text-accent" />
                      </motion.div>
                      <div>
                        <p className="font-display text-2xl font-semibold text-white">Thanks!</p>
                        <p className="mt-2 text-white/60">We'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
