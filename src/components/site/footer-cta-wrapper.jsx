"use client";

import { usePathname } from "next/navigation";
import { FooterCTA } from "@/components/site/shared";

// Pages where the footer CTA should appear.
// Home (/) has its own inline CTA; contact (/) already is the CTA.
const SHOW_ON = ["/services", "/work", "/process", "/careers"];

export default function FooterCTAWrapper() {
  const pathname = usePathname();

  // Also show on individual case-study pages /work/[slug]
  const isWorkSlug = pathname.startsWith("/work/");

  if (!SHOW_ON.includes(pathname) && !isWorkSlug) return null;
  return <FooterCTA />;
}
