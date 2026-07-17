import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { PublicOnboardingHotelProfile } from "@/components/hotels/PublicOnboardingHotelProfile";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildStructureMetadata } from "@/lib/seo/structure-metadata";
import { fetchOnboardingSlugById, fetchStructureBySlug } from "@/lib/seo/structure-queries";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = await getServerTranslations();
  const slug = await fetchOnboardingSlugById(id);

  if (slug) {
    const record = await fetchStructureBySlug(slug);
    if (record) return buildStructureMetadata(record);
  }

  return {
    title: t.metadata.onboardingHotelProfileTitle,
    description: t.metadata.onboardingHotelProfileDescription,
    alternates: {
      canonical: slug ? canonicalUrl(`/hotel/${slug}`) : canonicalUrl(`/hotel/onboarding/${id}`),
    },
    robots: slug ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function OnboardingHotelProfilePage({ params }: PageProps) {
  const { id } = await params;
  const slug = await fetchOnboardingSlugById(id);
  if (slug) permanentRedirect(`/hotel/${slug}`);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PublicOnboardingHotelProfile />
    </main>
  );
}
