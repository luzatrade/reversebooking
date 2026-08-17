import type { Metadata } from "next";
import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";
import { HomeBottomSections } from "@/components/seo/HomeBottomSections";
import { HomeComparisonSection } from "@/components/seo/HomeComparisonSection";
import { HomeHeroHeadings } from "@/components/seo/HomeHeroHeadings";
import { HomeMarketingSections } from "@/components/seo/HomeMarketingSections";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { PopularDestinationsBlock } from "@/components/seo/PopularDestinationsBlock";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { getHomeFaq, getHomeHowItWorks } from "@/lib/i18n/seo-marketing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { listPopularDestinations } from "@/lib/seo/destination-queries";
import { buildHomePageJsonLd } from "@/lib/seo/home-jsonld";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { trimSeoDescription } from "@/lib/seo/serp-copy";
import { fetchShowcaseHomeInitialData } from "@/lib/showcase/homeData";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const title = t.metadata.siteTitleDefault;
  const description = trimSeoDescription(t.metadata.siteDescription);

  return {
    title,
    description,
    keywords: locale === "en"
      ? ["reverse booking", "reversebooking", "HotelsDrop", "hotel offers", "no commission"]
      : ["reverse booking", "reversebooking", "HotelsDrop", "offerte hotel", "senza commissioni"],
    alternates: buildLanguageAlternates("/", locale),
    openGraph: buildOpenGraph({ title, description, path: "/", locale }),
    twitter: buildTwitterCard({ title, description }),
  };
}

export default async function HomePage() {
  const locale = await getServerLocale();
  const [initialData, destinations] = await Promise.all([
    fetchShowcaseHomeInitialData(),
    listPopularDestinations(),
  ]);
  const faqItems = getHomeFaq(locale);
  const howItWorksSteps = getHomeHowItWorks(locale);
  const pageUrl = canonicalUrl(localizedPath(locale, "/"));
  const featuredHotels = (initialData?.hotels ?? []).filter((hotel) => hotel.slug).slice(0, 12);

  return (
    <div className="rb-soft-white-home">
      <JsonLdScript
        data={buildHomePageJsonLd({
          locale,
          pageUrl,
          faqItems,
          howItWorksSteps,
          featuredHotels,
          destinations,
        })}
      />
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <PublicShowcaseClient initialData={initialData} heroHeadings={<HomeHeroHeadings />} />
      <HomeMarketingSections />
      <HomeComparisonSection />
      <PopularDestinationsBlock />
      <HomeBottomSections />
    </div>
  );
}
