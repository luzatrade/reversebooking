import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, parseLocaleCookie } from "@/lib/i18n/cookie";
import { getTranslations, type Translations } from "@/lib/i18n/messages";
import { isLocale, LOCALE_HEADER } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/translations";

export type { Translations };
export { getTranslations };

export async function getServerLocale(): Promise<Locale> {
  const headerStore = await headers();
  const fromHeader = headerStore.get(LOCALE_HEADER);
  if (isLocale(fromHeader)) return fromHeader;

  const cookieStore = await cookies();
  return parseLocaleCookie(cookieStore.get(LOCALE_COOKIE)?.value);
}

export async function getServerTranslations(): Promise<Translations> {
  return getTranslations(await getServerLocale());
}
