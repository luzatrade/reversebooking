"use client";

import Link from "next/link";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Navbar, navLink } from "@/components/navigation/Navbar";
import { topbarControlsRowClass } from "@/components/navigation/topbarStyles";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <Navbar>
      <div className={topbarControlsRowClass}>
        <LanguageSwitcher compact />
        <CurrencySwitcher compact />
        <nav className="flex flex-wrap items-center gap-1 sm:gap-1.5" aria-label="Principale">
          <Link className={navLink} href="/directory">
            Strutture
          </Link>
          <Link className={navLink} href="/registrazione?mode=partner">
            {t.site.becomePartner}
          </Link>
          <Link className={navLink} href="/registrazione">
            {t.site.registration}
          </Link>
          <Link className={navLink} href="/contatti">
            {t.site.contacts}
          </Link>
        </nav>
      </div>
    </Navbar>
  );
}
