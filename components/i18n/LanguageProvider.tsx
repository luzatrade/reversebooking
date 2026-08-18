"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { persistLocaleClient } from "@/lib/i18n/cookie";
import { getTranslations, type Translations } from "@/lib/i18n/messages";
import { parseLocalePath } from "@/lib/i18n/routing";
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
  const pathname = usePathname();
  const pathLocale = parseLocalePath(pathname)?.locale;
  const resolvedLocale = pathLocale ?? initialLocale;

  const [locale, setLocaleState] = useState<Locale>(resolvedLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    persistLocaleClient(nextLocale);
    document.documentElement.lang = nextLocale;
  };

  // URL prefix + middleware header are the source of truth for SSR copy.
  useEffect(() => {
    setLocaleState(resolvedLocale);
    persistLocaleClient(resolvedLocale);
    document.documentElement.lang = resolvedLocale;
  }, [resolvedLocale]);

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
