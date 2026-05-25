"use client";

import { Globe2 } from "lucide-react";
import { localeLabels, supportedLocales, type Locale } from "@/lib/i18n/translations";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
};

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  const shellClass = compact
    ? "inline-flex h-7 items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0 shadow-sm sm:h-8 sm:gap-1.5 sm:px-2.5"
    : "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";

  const iconClass = compact ? "h-3.5 w-3.5 text-slate-500" : "h-4 w-4";
  const selectClass = compact
    ? "max-w-[4.5rem] bg-transparent text-[11px] font-semibold text-slate-700 outline-none sm:max-w-none sm:text-xs"
    : "bg-transparent text-sm outline-none";

  return (
    <label className={shellClass}>
      <Globe2 className={iconClass} />
      <span className="sr-only">{t.common.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className={selectClass}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item}>
            {localeFlags[item]} {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
