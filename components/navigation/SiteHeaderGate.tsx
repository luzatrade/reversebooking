"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/legal/SiteHeader";
import { isLocaleHomePath, stripLocalePrefix } from "@/lib/i18n/routing";

function shouldShowSiteHeader(pathname: string) {
  if (isLocaleHomePath(pathname)) return false;
  const path = stripLocalePrefix(pathname).pathname;
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

/** Client fallback when the original locale path header is missing. */
export function SiteHeaderGate() {
  const pathname = usePathname() || "/";
  if (!shouldShowSiteHeader(pathname)) return null;
  return <SiteHeader />;
}
