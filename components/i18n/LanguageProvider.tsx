"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { LOCALE_COOKIE } from "@/lib/i18n/cookie";
import { getTranslations, type Translations } from "@/lib/i18n/messages";
import { Locale } from "@/lib/i18n/translations";

type TranslationValue = Translations;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationValue;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLocale = "it",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  // Parte dal valore deciso lato server (cookie): server e client renderizzano
  // lo stesso locale al primo paint, quindi nessun mismatch di hydration.
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(LOCALE_COOKIE, nextLocale);
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
  };

  // URL + cookie (middleware) are the source of truth for SSR copy. Keep client
  // state and localStorage aligned so a stale preference cannot desync the UI.
  useEffect(() => {
    setLocaleState(initialLocale);
    window.localStorage.setItem(LOCALE_COOKIE, initialLocale);
    document.cookie = `${LOCALE_COOKIE}=${initialLocale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: getTranslations(locale),
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
