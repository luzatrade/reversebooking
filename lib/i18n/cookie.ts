import type { Locale } from "@/lib/i18n/translations";

export const LOCALE_COOKIE = "reversebooking-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "it" || value === "en" || value === "de" || value === "zh";
}

export function parseLocaleCookie(value: string | undefined | null): Locale {
  return isLocale(value) ? value : "it";
}

/** Persist locale in cookie + localStorage (client only). */
export function persistLocaleClient(locale: Locale) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCALE_COOKIE, locale);
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}
