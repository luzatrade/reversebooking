"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMarketingLabels } from "@/lib/i18n/seo-marketing";
import { homePath, localizedPath } from "@/lib/i18n/routing";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

export function LegalFooterLinks({ className = "" }: { className?: string }) {
  const { t, locale } = useLanguage();
  const labels = getMarketingLabels(locale);
  const prefix = (path: string) => localizedPath(locale, path);

  return (
    <nav aria-label={t.site.legalLinksAria} className={className}>
      <Link className={linkClass} href={prefix("/note-legali")}>
        {t.site.legalNav.legalNotice}
      </Link>
      <Link className={linkClass} href={prefix("/privacy-policy")}>
        {t.site.legalNav.privacy}
      </Link>
      <Link className={linkClass} href={prefix("/cookie-policy")}>
        {t.site.legalNav.cookies}
      </Link>
      <Link className={linkClass} href={prefix("/termini-e-condizioni")}>
        {t.site.legalNav.terms}
      </Link>
      <Link className={linkClass} href={prefix("/condizioni-abbonamento")}>
        {t.site.legalNav.subscription}
      </Link>
      <Link className={linkClass} href={prefix("/contatti")}>
        {t.site.contacts}
      </Link>
      <Link className={linkClass} href={prefix("/cos-e-hotelsdrop")}>
        {t.site.legalNav.about}
      </Link>
      <Link className={linkClass} href={`${homePath(locale)}#home-faq`}>
        {labels.faqNav}
      </Link>
      <Link className={linkClass} href={prefix("/destinazioni")}>
        {labels.destinationsNav}
      </Link>
      <Link className={linkClass} href={prefix("/guide")}>
        {locale === "en" ? "Guides" : "Guide"}
      </Link>
    </nav>
  );
}
