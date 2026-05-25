import { getTranslations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";

export function getLoginMessages(locale: Locale) {
  const t = getTranslations(locale);
  return {
    notRegistered: t.auth.msgNotRegistered,
    invalidCredentials: t.auth.msgInvalidCredentials,
    emailNotConfirmed: t.auth.msgEmailNotConfirmed,
    tooManyRequests: t.auth.msgRateLimited,
    genericFailed: t.auth.msgLoginFailed,
  };
}

export function mapAuthLoginError(message: string, locale: Locale): string {
  const messages = getLoginMessages(locale);
  const lower = message.toLowerCase();

  if (
    lower.includes("invalid login credentials") ||
    lower.includes("invalid email or password") ||
    lower.includes("invalid credentials")
  ) {
    return messages.invalidCredentials;
  }

  if (lower.includes("email not confirmed") || lower.includes("not confirmed")) {
    return messages.emailNotConfirmed;
  }

  if (lower.includes("user not found")) {
    return messages.notRegistered;
  }

  if (lower.includes("too many requests") || lower.includes("rate limit")) {
    return messages.tooManyRequests;
  }

  return messages.genericFailed;
}
