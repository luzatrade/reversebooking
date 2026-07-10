import type { Metadata } from "next";
import { PublicOnboardingHotelProfile } from "@/components/hotels/PublicOnboardingHotelProfile";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { canonicalUrl } from "@/lib/seo/canonical";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = await getServerTranslations();

  return {
    title: t.metadata.onboardingHotelProfileTitle,
    description: t.metadata.onboardingHotelProfileDescription,
    alternates: {
      canonical: canonicalUrl(`/hotel/onboarding/${id}`),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function OnboardingHotelProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PublicOnboardingHotelProfile />
    </main>
  );
}
