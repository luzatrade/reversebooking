import type { Locale } from "@/lib/i18n/translations";

export const LOCALE_COOKIE = "reversebooking-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "it" || value === "en" || value === "de";
}

export function parseLocaleCookie(value: string | undefined | null): Locale {
  return isLocale(value) ? value : "it";
}
