import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";
import { HomeMarketingSections } from "@/components/seo/HomeMarketingSections";
import { PopularDestinationsBlock } from "@/components/seo/PopularDestinationsBlock";
import { canonicalUrl } from "@/lib/seo/canonical";
import { fetchShowcaseHomeInitialData } from "@/lib/showcase/homeData";

export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

export default async function HomePage() {
  const initialData = await fetchShowcaseHomeInitialData();

  return (
    <div className="rb-soft-white-home">
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <Suspense fallback={null}>
        <PublicShowcaseClient initialData={initialData} />
      </Suspense>
      <HomeMarketingSections />
      <PopularDestinationsBlock />
    </div>
  );
}
