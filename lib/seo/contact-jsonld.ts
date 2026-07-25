import { company } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import type { Locale } from "@/lib/i18n/translations";

export function buildContactPageJsonLd(locale: Locale) {
  const pageUrl = canonicalUrl(localizedPath(locale, "/contatti"));

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#contact`,
    url: pageUrl,
    name: locale === "en" ? "Contacts · HotelsDrop" : "Contatti · HotelsDrop",
    description:
      locale === "en"
        ? "Contact HotelsDrop for partner support, billing and general enquiries."
        : "Contatta HotelsDrop per supporto partner, fatturazione e informazioni generali.",
    mainEntity: {
      "@type": "Organization",
      name: company.companyName,
      legalName: company.legalEntityName,
      email: company.supportEmail,
      telephone: company.phone,
      taxID: company.vatNumber,
      url: canonicalUrl(localizedPath(locale, "/")),
    },
  };
}
