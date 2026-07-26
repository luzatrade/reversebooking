"use client";

import { usePathname } from "next/navigation";
import { LegalFooterCompact } from "@/components/legal/LegalFooterCompact";
import { SiteFooter } from "@/components/legal/SiteFooter";
import { stripLocalePrefix } from "@/lib/i18n/routing";

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
  "/cos-e-hotelsdrop",
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
  const internalPath = stripLocalePrefix(pathname).pathname;

  if (PUBLIC_LAYOUT_FOOTER_PATHS.has(internalPath)) return null;
  if (needsFullFooter(internalPath)) return <SiteFooter />;
  if (needsCompactFooter(internalPath)) return <LegalFooterCompact />;
  return null;
}
