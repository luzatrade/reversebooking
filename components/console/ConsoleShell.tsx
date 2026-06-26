"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { AdminSearchPalette } from "@/components/console/AdminSearchPalette";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { BRAND_DISPLAY } from "@/lib/legal/company";
import { cn } from "@/lib/utils";

export function ConsoleShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const pathname = usePathname();

  const nav = [
    { href: "/console/dashboard", label: t.console.navOverview },
    { href: "/console/utenti", label: t.console.navUsers },
    { href: "/console/inserzionisti", label: t.console.navAdvertisers },
    { href: "/console/strutture", label: t.console.navStructures },
    { href: "/console/annunci", label: t.console.navListings },
    { href: "/console/offerte", label: t.console.navOffers },
    { href: "/console/abbonamenti", label: t.console.navSubscriptions },
    { href: "/console/fatture", label: t.console.navInvoices },
    { href: "/console/consensi", label: t.console.navConsents },
    { href: "/console/audit", label: t.console.navAudit },
    { href: "/console/sicurezza", label: t.console.navSecurity },
    { href: "/console/onboarding", label: "Onboarding" },
  ] as const;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/console/dashboard" className="text-lg font-bold text-orange-500">
              {BRAND_DISPLAY}
            </Link>
            <span className="hidden rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-white sm:inline">
              {t.console.adminBadge}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <AdminSearchPalette />
            <span className="hidden text-zinc-500 md:inline">{email}</span>
            <Link href="/" className="font-medium text-[#0f4c81] hover:underline">
              {t.console.goToSite}
            </Link>
            <LogoutButton variant="console" />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <aside className="hidden w-56 shrink-0 border-r border-zinc-200 bg-white md:block">
          <nav className="flex flex-col gap-0.5 p-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  pathname === item.href ? "bg-[#0f4c81] text-white" : "text-zinc-700 hover:bg-zinc-100",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-zinc-200 bg-white p-3 md:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold",
                    pathname === item.href ? "bg-[#0f4c81] text-white" : "bg-zinc-100 text-zinc-700",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
