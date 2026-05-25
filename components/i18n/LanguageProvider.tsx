"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { LOCALE_COOKIE } from "@/lib/i18n/cookie";
import { Locale, supportedLocales, translations } from "@/lib/i18n/translations";

type TranslationValue = (typeof translations)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationValue;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "it";
  const saved = window.localStorage.getItem(LOCALE_COOKIE);
  if (saved && supportedLocales.includes(saved as Locale)) return saved as Locale;
  return "it";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === "undefined" ? "it" : getInitialLocale(),
  );

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(LOCALE_COOKIE, nextLocale);
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale] as TranslationValue,
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
