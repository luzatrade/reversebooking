import type { Metadata } from "next";
import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { HomeSeoSections } from "@/components/showcase/HomeSeoSections";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";
import { HomeFaqJsonLd, HomeWebSiteJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { getAppUrl } from "@/lib/legal/company";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const siteUrl = getAppUrl().replace(/\/$/, "");
  const title = t.metadata.homeTitle;
  const description = t.metadata.homeDescription;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/`,
      siteName: "HotelsDrop",
      title,
      description,
      locale: "it_IT",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function HomePage() {
  return (
    <div className="rb-soft-white-home">
      <HomeFaqJsonLd />
      <HomeWebSiteJsonLd />
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <PublicShowcaseClient seoContent={<HomeSeoSections />} />
    </div>
  );
}
