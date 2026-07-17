import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";
import { PopularDestinationsBlock } from "@/components/seo/PopularDestinationsBlock";
import { canonicalUrl } from "@/lib/seo/canonical";

export const metadata: Metadata = {
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

export default function HomePage() {
  return (
    <div className="rb-soft-white-home">
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <Suspense fallback={null}>
        <PublicShowcaseClient />
      </Suspense>
      <PopularDestinationsBlock />
    </div>
  );
}
