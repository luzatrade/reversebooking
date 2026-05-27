"use client";

import { usePathname } from "next/navigation";
import { LegalFooterCompact } from "@/components/legal/LegalFooterCompact";
import { SiteFooter } from "@/components/legal/SiteFooter";

/** Pagine che usano già SiteFooter nel layout (public). */
const PUBLIC_LAYOUT_FOOTER_PATHS = new Set([
  "/login",
  "/registrazione",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/condizioni-abbonamento",
  "/contatti",
  "/annunci",
  "/struttura",
]);

const COMPACT_PREFIXES = ["/struttura/", "/inserzionista/", "/console/", "/chat/", "/admin/", "/auth/"];

function needsFullFooter(pathname: string) {
  return pathname === "/" || pathname === "/vetrina" || pathname.startsWith("/hotel/");
}

function needsCompactFooter(pathname: string) {
  if (COMPACT_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true;
  return pathname === "/account" || pathname === "/scegli-account";
}

export function AppFooter() {
  const pathname = usePathname();

  if (PUBLIC_LAYOUT_FOOTER_PATHS.has(pathname)) return null;
  if (needsFullFooter(pathname)) return <SiteFooter />;
  if (needsCompactFooter(pathname)) return <LegalFooterCompact />;
  return null;
}
