import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "@/lib/i18n/cookie";
import { supportedLocales, type Locale } from "@/lib/i18n/translations";

/** Cookie first, then Accept-Language primary tag, default Italian. */
export function preferredLocaleFromRequest(request: NextRequest): Locale {
  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieValue)) return cookieValue;

  const header = (request.headers.get("accept-language") ?? "").toLowerCase();
  const primary = header.split(",")[0]?.trim() ?? "";

  const fromPrimary = supportedLocales.find((locale) => primary.startsWith(locale));
  if (fromPrimary) return fromPrimary;

  const fromAnywhere = supportedLocales.find((locale) =>
    new RegExp(`\\b${locale}[-_;]|[-_;]${locale}\\b`).test(header),
  );
  if (fromAnywhere) return fromAnywhere;

  return "it";
}
