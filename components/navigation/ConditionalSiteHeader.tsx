"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/legal/SiteHeader";

function normalizePath(pathname: string) {
  const stripped = pathname.replace(/^\/(it|en)(?=\/|$)/, "") || "/";
  return stripped.replace(/\/+$/, "") || "/";
}

function shouldShowSiteHeader(pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/") return false;

  const privatePrefixes = [
    "/console",
    "/admin",
    "/struttura",
    "/agenzia",
    "/inserzionista",
    "/account",
    "/chat",
    "/scegli-account",
    "/auth",
    "/api",
  ];

  return !privatePrefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

/** Header pubblico globale (Home + auth + lingua). Esclusi home dedicata e area privata. */
export function ConditionalSiteHeader() {
  const pathname = usePathname() || "/";
  if (!shouldShowSiteHeader(pathname)) return null;
  return <SiteHeader />;
}
