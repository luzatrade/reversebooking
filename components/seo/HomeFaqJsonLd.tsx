import { getServerTranslations } from "@/lib/i18n/get-translations";
import { getAppUrl } from "@/lib/legal/company";

export async function HomeFaqJsonLd() {
  const t = await getServerTranslations();
  const faq = t.homeSeo.faqItems;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export async function HomeWebSiteJsonLd() {
  const siteUrl = getAppUrl().replace(/\/$/, "");

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HotelsDrop",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/inserzionista/crea-annuncio?city={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
