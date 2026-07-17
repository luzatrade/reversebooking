import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PublicHotelProfile } from "@/components/hotels/PublicHotelProfile";
import { StructureJsonLd } from "@/components/seo/StructureJsonLd";
import { StructureSeoPage } from "@/components/seo/StructureSeoPage";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildStructureMetadata } from "@/lib/seo/structure-metadata";
import { fetchStructureBySlug, resolveSlugByUuid } from "@/lib/seo/structure-queries";
import { isUuid } from "@/lib/seo/uuid";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = await getServerTranslations();

  if (!isUuid(id)) {
    const record = await fetchStructureBySlug(id);
    if (record) return buildStructureMetadata(record);
  } else {
    const slug = await resolveSlugByUuid(id);
    if (slug) {
      const record = await fetchStructureBySlug(slug);
      if (record) return buildStructureMetadata(record);
    }
  }

  return {
    title: t.metadata.publicHotelProfileTitle,
    description: t.metadata.publicHotelProfileDescription,
    alternates: {
      canonical: canonicalUrl(`/hotel/${id}`),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  if (isUuid(id)) {
    const slug = await resolveSlugByUuid(id);
    if (slug) permanentRedirect(`/hotel/${slug}`);

    return (
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PublicHotelProfile />
      </main>
    );
  }

  const record = await fetchStructureBySlug(id);
  if (!record) notFound();

  return (
    <>
      <StructureJsonLd record={record} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <StructureSeoPage record={record} />
      </main>
    </>
  );
}
