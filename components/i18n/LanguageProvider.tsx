"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { LOCALE_COOKIE } from "@/lib/i18n/cookie";
import { getTranslations, type Translations } from "@/lib/i18n/messages";
import { Locale, supportedLocales } from "@/lib/i18n/translations";

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

  // Riconciliazione post-mount con eventuale preferenza salvata solo in
  // localStorage (utenti precedenti senza cookie): avviene dopo l'hydration,
  // quindi non genera mismatch, e riallinea anche il cookie.
  useEffect(() => {
    const saved = window.localStorage.getItem(LOCALE_COOKIE);
    if (saved && supportedLocales.includes(saved as Locale) && saved !== initialLocale) {
      setLocale(saved as Locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
