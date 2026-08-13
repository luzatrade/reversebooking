import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './locales/it.json';
import en from './locales/en.json';
import type { Locale } from '@/types/check-in';

const STORAGE_KEY = 'fastcheckin_locale';

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "it";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "it" || stored === "en") return stored;
  return navigator.language.startsWith("it") ? "it" : "en";
}

void i18n.use(initReactI18next).init({
  resources: {
    it: { translation: it },
    en: { translation: en },
  },
  lng: getInitialLocale(),
  fallbackLng: 'it',
  interpolation: { escapeValue: false },
});

export function setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  void i18n.changeLanguage(locale);
  document.documentElement.lang = locale;
}

export default i18n;
