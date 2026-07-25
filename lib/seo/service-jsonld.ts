import { BRAND_DISPLAY, BRAND_NAME, company } from "@/lib/legal/company";
import { canonicalUrl } from "@/lib/seo/canonical";
import { localizedPath } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/translations";

export function buildMarketplaceServiceJsonLd(locale: Locale, internalPath = "/") {
  const pageUrl = canonicalUrl(localizedPath(locale, internalPath));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: locale === "en" ? `${BRAND_NAME} reverse booking marketplace` : `Marketplace reverse booking ${BRAND_NAME}`,
    alternateName: BRAND_DISPLAY,
    provider: { "@id": `${canonicalUrl(localizedPath(locale, "/"))}#organization` },
    serviceType: locale === "en" ? "Reverse booking platform for hotels and travellers" : "Piattaforma di reverse booking per hotel e viaggiatori",
    areaServed: {
      "@type": "Place",
      name: locale === "en" ? "Worldwide" : "Mondo",
    },
    description:
      locale === "en"
        ? "Travellers publish one stay request; hotels, B&Bs and apartments reply with direct personalised offers. Free for travellers. Ideal for groups, schools and travel agencies."
        : "Il viaggiatore pubblica una richiesta di soggiorno; hotel, B&B e appartamenti rispondono con offerte dirette personalizzate. Gratuito per chi viaggia. Ideale per gruppi, scuole e agenzie.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: locale === "en" ? "Free for travellers" : "Gratuito per chi viaggia",
    },
    audience: {
      "@type": "Audience",
      audienceType: locale === "en" ? "Travellers, groups, travel agencies, hotels" : "Viaggiatori, gruppi, agenzie di viaggio, strutture ricettive",
    },
    url: pageUrl,
    email: company.supportEmail,
    telephone: company.phone,
  };
}
