"use client";

import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { persistLocaleClient } from "@/lib/i18n/cookie";
import { localeLabels, supportedLocales, type Locale } from "@/lib/i18n/translations";
import { switchLocalePath } from "@/lib/i18n/routing";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  de: "🇩🇪",
  zh: "🇨🇳",
};

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { locale, t } = useLanguage();
  const pathname = usePathname();

  const onChange = (nextLocale: Locale) => {
    const browserPath = window.location.pathname || pathname;
    const target = switchLocalePath(browserPath, nextLocale);
    persistLocaleClient(nextLocale);
    if (target === browserPath) {
      window.location.reload();
      return;
    }
    window.location.assign(`${target}${window.location.search}`);
  };

  const options = supportedLocales.map((item) => (
    <option key={item} value={item}>
      {localeFlags[item]} {localeLabels[item]}
    </option>
  ));

  if (compact) {
    return (
      <label className="relative inline-flex h-7 cursor-pointer select-none items-center justify-center rounded-full border border-slate-200 bg-white px-2.5 shadow-sm transition focus-within:ring-2 focus-within:ring-slate-300 hover:bg-slate-50 sm:h-8">
        <span className="sr-only">{t.common.language}</span>
        <span aria-hidden className="text-base leading-none">
          {localeFlags[locale]}
        </span>
        <select
          value={locale}
          onChange={(event) => onChange(event.target.value as Locale)}
          aria-label={t.common.language}
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
        >
          {options}
        </select>
      </label>
    );
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <Globe2 className="h-4 w-4" />
      <span className="sr-only">{t.common.language}</span>
      <select
        value={locale}
        onChange={(event) => onChange(event.target.value as Locale)}
        className="bg-transparent text-sm outline-none"
      >
        {options}
      </select>
    </label>
  );
}
