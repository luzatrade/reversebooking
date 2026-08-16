"use client";

import { HardNavLink } from "@/components/navigation/HardNavLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";

export function StrutturaSubNav() {
  const { t } = useLanguage();
  const linkClass = `${dashboardSurfaces.btnSecondary} text-center`;

  return (
    <nav
      aria-label="Area struttura"
      className="mx-auto flex max-w-7xl flex-wrap gap-2 border-b border-zinc-200 bg-white/90 px-4 py-3 sm:px-6 lg:px-8"
    >
      <HardNavLink href="/struttura/dashboard" className={linkClass}>
        Dashboard
      </HardNavLink>
      <HardNavLink href="/struttura/profilo" className={linkClass}>
        {t.dashboard.hotel.structureProfile}
      </HardNavLink>
      <HardNavLink href="/struttura/offerte/crea" className={linkClass}>
        {t.catalogOffers.createOfferCta}
      </HardNavLink>
      <HardNavLink href="/struttura/check-in?tab=export" className={linkClass}>
        {t.dashboard.hotel.questuraExport}
      </HardNavLink>
    </nav>
  );
}
