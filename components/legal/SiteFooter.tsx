"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LegalFooterLinks } from "@/components/legal/LegalFooterLinks";
import { company } from "@/lib/legal/company";
import { formatMessage } from "@/lib/i18n/format";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left text-sm text-zinc-600 dark:text-zinc-400">
          <p className="leading-relaxed">{t.site.footerDescription}</p>
          <p className="mt-3 text-xs text-zinc-500">
            {formatMessage(t.site.footerOperatedService, { entity: company.legalEntityName })}
          </p>
          <p className="mt-3">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.vat} </span>
            {company.vatNumber}
          </p>

          <div className="mt-6">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{t.site.contacts}</p>
            <ul className="mt-3 space-y-2">
              <li className="leading-relaxed">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.common.email} </span>
                <a className={`${linkClass} break-all`} href={`mailto:${company.supportEmail}`}>
                  {company.supportEmail}
                </a>
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">PEC </span>
                <a className={`${linkClass} break-all`} href={`mailto:${company.pecEmail}`}>
                  {company.pecEmail}
                </a>
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.phone} </span>
                <a className={linkClass} href={`tel:${company.phone.replace(/\s/g, "")}`}>
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <LegalFooterLinks className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800" />

        <p className="text-left text-xs text-zinc-500">
          © {new Date().getFullYear()} {company.legalEntityName} — {company.companyName}
          {company.atecoCode ? ` · ATECO ${company.atecoCode}` : null}
        </p>
      </div>
    </footer>
  );
}
