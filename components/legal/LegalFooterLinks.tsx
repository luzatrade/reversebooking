"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

export function LegalFooterLinks({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <nav aria-label={t.site.legalLinksAria} className={className}>
      <Link className={linkClass} href="/note-legali">
        {t.site.legalNav.legalNotice}
      </Link>
      <Link className={linkClass} href="/privacy-policy">
        {t.site.legalNav.privacy}
      </Link>
      <Link className={linkClass} href="/cookie-policy">
        {t.site.legalNav.cookies}
      </Link>
      <Link className={linkClass} href="/termini-e-condizioni">
        {t.site.legalNav.terms}
      </Link>
      <Link className={linkClass} href="/condizioni-abbonamento">
        {t.site.legalNav.subscription}
      </Link>
      <Link className={linkClass} href="/contatti">
        {t.site.contacts}
      </Link>
      <Link className={linkClass} href="/cos-e-hotelsdrop">
        {t.site.legalNav.about}
      </Link>
    </nav>
  );
}
