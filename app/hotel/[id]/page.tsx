import type { Metadata } from "next";
import { PublicHotelProfile } from "@/components/hotels/PublicHotelProfile";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { canonicalUrl } from "@/lib/seo/canonical";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = await getServerTranslations();

  return {
    title: t.metadata.publicHotelProfileTitle,
    description: t.metadata.publicHotelProfileDescription,
    alternates: {
      canonical: canonicalUrl(`/hotel/${id}`),
    },
  };
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PublicHotelProfile />
    </main>
  );
}
