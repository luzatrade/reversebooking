"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LegalFooterLinks } from "@/components/legal/LegalFooterLinks";
import { company, formatLegalAddress } from "@/lib/legal/company";
import { formatMessage } from "@/lib/i18n/format";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

export function SiteFooter() {
  const { t } = useLanguage();
  const fullAddress = formatLegalAddress();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{company.companyName}</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.site.footerTagline}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {t.site.operatedBy} {company.legalEntityName}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.site.footerDescription}</p>
          <p className="mt-3 text-xs text-zinc-500">
            {formatMessage(t.site.footerOperatedService, { entity: company.legalEntityName })}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.vat} </span>
              {company.vatNumber}
            </p>
            <p className="mt-2">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.headquarters} </span>
              {fullAddress}
            </p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.contacts} </span>
              <Link className={linkClass} href="/contatti">
                {t.contact.title}
              </Link>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.common.pec} </span>
              <a className={linkClass} href={`mailto:${company.pecEmail}`}>
                {company.pecEmail}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.phone} </span>
              <a className={linkClass} href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
          </div>
        </div>

        <LegalFooterLinks className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800" />

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {company.legalEntityName} — {company.companyName}
          {company.atecoCode ? ` · ATECO ${company.atecoCode}` : null}
        </p>
      </div>
    </footer>
  );
}
