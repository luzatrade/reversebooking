import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { PublicOnboardingHotelProfile } from "@/components/hotels/PublicOnboardingHotelProfile";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath, structurePublicPath } from "@/lib/i18n/routing";
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

  const locale = await getServerLocale();

  return {
    title: t.metadata.onboardingHotelProfileTitle,
    description: t.metadata.onboardingHotelProfileDescription,
    alternates: {
      canonical: slug
        ? canonicalUrl(structurePublicPath(slug, locale))
        : canonicalUrl(localizedPath(locale, `/hotel/onboarding/${id}`)),
    },
    robots: slug ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function OnboardingHotelProfilePage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getServerLocale();
  const slug = await fetchOnboardingSlugById(id);
  if (slug) permanentRedirect(structurePublicPath(slug, locale));

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PublicOnboardingHotelProfile />
    </main>
  );
}
