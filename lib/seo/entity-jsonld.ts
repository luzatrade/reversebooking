import { BRAND_DISPLAY, BRAND_NAME, company } from "@/lib/legal/company";
import { canonicalUrl } from "@/lib/seo/canonical";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site-url";

export function buildOrganizationWebSiteJsonLd() {
  const siteUrl = canonicalUrl("/");

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
          "Marketplace di reverse booking: il viaggiatore pubblica una richiesta di soggiorno e le strutture ricettive rispondono con offerte dirette, senza commissioni per chi viaggia.",
        email: company.supportEmail,
        telephone: company.phone,
        taxID: company.vatNumber,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IT",
          addressLocality: company.city || "Italia",
          streetAddress: company.legalAddress,
        },
        sameAs: [siteUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: BRAND_DISPLAY,
        description:
          "HotelsDrop è una piattaforma di reverse booking per hotel, B&B e appartamenti: una richiesta, offerte personalizzate, zero commissioni viaggiatore.",
        publisher: { "@id": `${siteUrl}#organization` },
        inLanguage: ["it-IT", "en-GB"],
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
