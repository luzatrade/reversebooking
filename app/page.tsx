import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";
import { HomeBottomSections } from "@/components/seo/HomeBottomSections";
import { HomeMarketingSections } from "@/components/seo/HomeMarketingSections";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { PopularDestinationsBlock } from "@/components/seo/PopularDestinationsBlock";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { getHomeFaq, getHomeHowItWorks } from "@/lib/i18n/seo-marketing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildFaqPageJsonLd } from "@/lib/seo/faq-jsonld";
import { buildHowToJsonLd } from "@/lib/seo/howto-jsonld";
import { buildMarketplaceServiceJsonLd } from "@/lib/seo/service-jsonld";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { fetchShowcaseHomeInitialData } from "@/lib/showcase/homeData";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const title = t.metadata.siteTitleDefault;
  const description = t.metadata.siteDescription;

  return {
    alternates: buildLanguageAlternates("/", locale),
    openGraph: buildOpenGraph({ title, description, path: "/", locale }),
    twitter: buildTwitterCard({ title, description }),
  };
}

export default async function HomePage() {
  const locale = await getServerLocale();
  const initialData = await fetchShowcaseHomeInitialData();
  const faqItems = getHomeFaq(locale);
  const pageUrl = canonicalUrl(localizedPath(locale, "/"));

  return (
    <div className="rb-soft-white-home">
      <JsonLdScript data={buildFaqPageJsonLd(faqItems, pageUrl)} />
      <JsonLdScript data={buildHowToJsonLd(getHomeHowItWorks(locale), locale, "/")} />
      <JsonLdScript data={buildMarketplaceServiceJsonLd(locale, "/")} />
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <Suspense fallback={null}>
        <PublicShowcaseClient initialData={initialData} />
      </Suspense>
      <HomeMarketingSections />
      <PopularDestinationsBlock />
      <HomeBottomSections initialData={initialData} />
    </div>
  );
}
