"use client";

import { localeLabels, supportedLocales, type Locale} from "@/lib/i18n/translations";
import { useLanguage} from "@/components/i18n/LanguageProvider";

const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
};

export function LanguageSwitcher() {
  const { locale, setLocale, t} = useLanguage();

  return (
    <label className="inline-flex h-8 items-center rounded-full border border-zinc-200 bg-white px-2 text-xs font-semibold text-zinc-700 shadow-sm">
      <span className="sr-only">{t.common.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="bg-transparent text-xs outline-none"
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
