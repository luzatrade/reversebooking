/** Fine promozione gratuita per pubblicazione pacchetti agenzia (Europe/Rome). */
export const AGENCY_PACKAGE_PROMO_END = new Date("2026-10-31T23:59:59+02:00");

export type AgencyPackageSubscriptionRow = {
  subscription_active?: boolean | null;
  provider_kind?: string | null;
};

export function isAgencyPackagePromoActive(now = new Date()): boolean {
  return now.getTime() <= AGENCY_PACKAGE_PROMO_END.getTime();
}

export function canAgencyPublishCatalogPackage(
  agency: AgencyPackageSubscriptionRow | null | undefined,
  now = new Date(),
): boolean {
  if (!agency || agency.provider_kind !== "agency") return false;
  if (isAgencyPackagePromoActive(now)) return true;
  return Boolean(agency.subscription_active);
}

export function getAgencyPackagePromoEndLabel(locale: "it" | "en"): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Rome",
  }).format(AGENCY_PACKAGE_PROMO_END);
}
