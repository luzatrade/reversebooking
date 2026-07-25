import { canonicalUrl } from "@/lib/seo/canonical";
import { localizedPath } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/translations";
import type { HowItWorksStep } from "@/lib/i18n/seo-marketing";
import { BRAND_NAME } from "@/lib/legal/company";

export function buildHowToJsonLd(steps: HowItWorksStep[], locale: Locale, internalPath = "/cos-e-hotelsdrop") {
  const pageUrl = canonicalUrl(localizedPath(locale, internalPath));

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: locale === "en" ? `How ${BRAND_NAME} reverse booking works` : `Come funziona il reverse booking su ${BRAND_NAME}`,
    description:
      locale === "en"
        ? "Three steps to receive direct hotel offers without booking commissions."
        : "Tre passaggi per ricevere offerte dirette dagli hotel senza commissioni di prenotazione.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}
