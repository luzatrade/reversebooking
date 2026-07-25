import { BRAND_DISPLAY, BRAND_NAME, company } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site-url";
import type { Locale } from "@/lib/i18n/translations";

export function buildOrganizationWebSiteJsonLd(locale: Locale = "it") {
  const siteUrl = canonicalUrl(localizedPath(locale, "/"));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: BRAND_NAME,
        alternateName: BRAND_DISPLAY,
        url: siteUrl,
        logo: DEFAULT_OG_IMAGE,
        description:
          locale === "en"
            ? "Reverse booking marketplace: travellers publish a stay request and properties reply with direct offers, free for travellers."
            : "Marketplace di reverse booking: il viaggiatore pubblica una richiesta di soggiorno e le strutture ricettive rispondono con offerte dirette, senza commissioni per chi viaggia.",
        email: company.supportEmail,
        telephone: company.phone,
        taxID: company.vatNumber,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IT",
          addressLocality: company.city || "Italia",
          streetAddress: company.legalAddress,
        },
        sameAs: [siteUrl, "https://www.linkedin.com/company/hotelsdrop"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: BRAND_DISPLAY,
        description:
          locale === "en"
            ? "HotelsDrop is a reverse booking platform for hotels, B&Bs and apartments: one request, tailored offers, zero traveller commission."
            : "HotelsDrop è una piattaforma di reverse booking per hotel, B&B e appartamenti: una richiesta, offerte personalizzate, zero commissioni viaggiatore.",
        publisher: { "@id": `${siteUrl}#organization` },
        inLanguage: locale === "en" ? ["en-GB"] : ["it-IT"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}?city={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
