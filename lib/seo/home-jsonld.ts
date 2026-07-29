import { BRAND_DISPLAY, BRAND_NAME, company } from "@/lib/legal/company";
import { localizedPath, structurePublicPath, destinationPublicPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import type { FaqItem, HowItWorksStep } from "@/lib/i18n/seo-marketing";
import type { Locale } from "@/lib/i18n/translations";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { ShowcaseHomeHotel } from "@/lib/showcase/homeData";

const HOME_JSONLD_DATE_MODIFIED = "2026-07-29";

type BuildHomeJsonLdParams = {
  locale: Locale;
  pageUrl: string;
  faqItems: FaqItem[];
  howItWorksSteps: HowItWorksStep[];
  featuredHotels: ShowcaseHomeHotel[];
  destinations: DestinationHub[];
};

function nestedHotelItem(hotel: ShowcaseHomeHotel, locale: Locale, position: number) {
  if (!hotel.slug) return null;

  const item: Record<string, unknown> = {
    "@type": "Hotel",
    name: hotel.property_name,
    url: canonicalUrl(structurePublicPath(hotel.slug, locale)),
  };

  if (hotel.main_photo_url) item.image = hotel.main_photo_url;
  if (hotel.city_name) {
    item.address = {
      "@type": "PostalAddress",
      addressLocality: hotel.city_name,
      addressCountry: hotel.country_code ?? "IT",
    };
  }
  if (hotel.latitude != null && hotel.longitude != null) {
    item.geo = {
      "@type": "GeoCoordinates",
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    };
  }

  return {
    "@type": "ListItem",
    position,
    item,
  };
}

function destinationListItem(hub: DestinationHub, locale: Locale, position: number) {
  return {
    "@type": "ListItem",
    position,
    item: {
      "@type": "TouristDestination",
      name: hub.displayName,
      url: canonicalUrl(destinationPublicPath(hub.slug, locale)),
      description:
        locale === "en"
          ? `${hub.structureCount} hotels and properties in ${hub.displayName}`
          : `${hub.structureCount} hotel e strutture a ${hub.displayName}`,
    },
  };
}

export function buildHomePageJsonLd({
  locale,
  pageUrl,
  faqItems,
  howItWorksSteps,
  featuredHotels,
  destinations,
}: BuildHomeJsonLdParams) {
  const siteRoot = canonicalUrl(localizedPath(locale, "/"));
  const organizationId = `${siteRoot}#organization`;
  const websiteId = `${siteRoot}#website`;

  const hotelElements = featuredHotels
    .map((hotel, index) => nestedHotelItem(hotel, locale, index + 1))
    .filter(Boolean);

  const destinationElements = destinations.slice(0, 10).map((hub, index) => destinationListItem(hub, locale, index + 1));

  const extraNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: locale === "en" ? `${BRAND_NAME} — reverse booking marketplace` : `${BRAND_NAME} — marketplace reverse booking`,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      dateModified: HOME_JSONLD_DATE_MODIFIED,
      inLanguage: locale === "en" ? "en-GB" : "it-IT",
    },
    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#webapp`,
      name: BRAND_DISPLAY,
      url: pageUrl,
      applicationCategory: "TravelApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: locale === "en" ? "Free for travellers" : "Gratuito per chi viaggia",
      },
      featureList:
        locale === "en"
          ? [
              "Reverse booking stay requests",
              "Direct hotel offers without traveller commission",
              "Email alerts to local properties",
              "Group and travel agency workflows",
            ]
          : [
              "Richieste di soggiorno reverse booking",
              "Offerte dirette hotel senza commissioni viaggiatore",
              "Notifica email alle strutture della zona",
              "Flussi per gruppi e agenzie di viaggio",
            ],
      provider: { "@id": organizationId },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: locale === "en" ? `How ${BRAND_NAME} reverse booking works` : `Come funziona il reverse booking su ${BRAND_NAME}`,
      description:
        locale === "en"
          ? "Three steps to receive direct hotel offers without booking commissions."
          : "Tre passaggi per ricevere offerte dirette dagli hotel senza commissioni di prenotazione.",
      step: howItWorksSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: locale === "en" ? `${BRAND_NAME} reverse booking marketplace` : `Marketplace reverse booking ${BRAND_NAME}`,
      alternateName: BRAND_DISPLAY,
      provider: { "@id": organizationId },
      serviceType: locale === "en" ? "Reverse booking platform for hotels and travellers" : "Piattaforma di reverse booking per hotel e viaggiatori",
      areaServed: { "@type": "Place", name: locale === "en" ? "Worldwide" : "Mondo" },
      description:
        locale === "en"
          ? "Travellers publish one stay request; hotels, B&Bs and apartments reply with direct personalised offers. Free for travellers."
          : "Il viaggiatore pubblica una richiesta di soggiorno; hotel, B&B e appartamenti rispondono con offerte dirette personalizzate. Gratuito per chi viaggia.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: locale === "en" ? "Free for travellers" : "Gratuito per chi viaggia",
      },
      url: pageUrl,
      email: company.supportEmail,
      telephone: company.phone,
    },
  ];

  if (hotelElements.length >= 3) {
    extraNodes.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#featured-hotels`,
      name: locale === "en" ? "Featured properties on HotelsDrop" : "Strutture in evidenza su HotelsDrop",
      numberOfItems: hotelElements.length,
      itemListElement: hotelElements,
    });
  }

  if (destinationElements.length >= 3) {
    extraNodes.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#popular-destinations`,
      name: locale === "en" ? "Popular destinations on HotelsDrop" : "Destinazioni popolari su HotelsDrop",
      numberOfItems: destinationElements.length,
      itemListElement: destinationElements,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": extraNodes,
  };
}
