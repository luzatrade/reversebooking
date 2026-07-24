"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LegalFooterLinks } from "@/components/legal/LegalFooterLinks";
import { company } from "@/lib/legal/company";
import { formatMessage } from "@/lib/i18n/format";
import { getMarketingLabels } from "@/lib/i18n/seo-marketing";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

const metaLineClass = "text-xs leading-relaxed text-zinc-500";

export function SiteFooter() {
  const { t, locale } = useLanguage();
  const labels = getMarketingLabels(locale);

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:px-8">
        <p className="max-w-3xl text-left text-sm font-medium leading-relaxed text-[#0f4c81]">
          {labels.footerTagline}
        </p>
        <div className="max-w-3xl text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{t.site.footerDescription}</p>

          <div className="mt-3 space-y-1">
            <p className={metaLineClass}>
              {formatMessage(t.site.footerOperatedService, { entity: company.legalEntityName })}
            </p>
            <p className={metaLineClass}>{formatMessage(t.site.footerVatLine, { vat: company.vatNumber })}</p>
          </div>

          <div className="mt-5 sm:mt-6">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t.site.contacts}</p>
            <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              <li className={`${metaLineClass} text-zinc-600 dark:text-zinc-400`}>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.common.email} </span>
                <a className={`${linkClass} break-all`} href={`mailto:${company.supportEmail}`}>
                  {company.supportEmail}
                </a>
              </li>
              <li className={`${metaLineClass} text-zinc-600 dark:text-zinc-400`}>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">PEC </span>
                <a className={`${linkClass} break-all`} href={`mailto:${company.pecEmail}`}>
                  {company.pecEmail}
                </a>
              </li>
              <li className={`${metaLineClass} text-zinc-600 dark:text-zinc-400`}>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{t.site.phone} </span>
                <a className={linkClass} href={`tel:${company.phone.replace(/\s/g, "")}`}>
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <LegalFooterLinks className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-5 text-sm sm:pt-6 dark:border-zinc-800" />

        <p className="text-left text-xs leading-relaxed text-zinc-500">
          © {new Date().getFullYear()} {company.legalEntityName} — {company.companyName}
          {company.atecoCode ? ` · ATECO ${company.atecoCode}` : null}
        </p>
      </div>
    </footer>
  );
}
