"use client";

import { Globe2 } from "lucide-react";
import { localeLabels, supportedLocales, type Locale } from "@/lib/i18n/translations";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
};

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <Globe2 className="h-4 w-4" />
      <span className="sr-only">{t.common.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="bg-transparent text-sm outline-none"
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
