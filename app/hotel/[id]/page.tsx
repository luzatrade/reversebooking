import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PublicHotelProfile } from "@/components/hotels/PublicHotelProfile";
import { StructureJsonLd } from "@/components/seo/StructureJsonLd";
import { StructureSeoPage } from "@/components/seo/StructureSeoPage";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { destinationPublicPath, localizedPath, structurePublicPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildStructureMetadata } from "@/lib/seo/structure-metadata";
import {
  fetchStructureBySlug,
  fetchStructureBySlugAny,
  resolveSlugByUuid,
  resolveSlugByUuidAny,
  resolveSlugFromPrevious,
} from "@/lib/seo/structure-queries";
import { isUuid } from "@/lib/seo/uuid";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = await getServerTranslations();
  const locale = await getServerLocale();

  if (!isUuid(id)) {
    const record = await fetchStructureBySlug(id);
    if (record) return buildStructureMetadata(record, locale);
  } else {
    const slug = await resolveSlugByUuid(id);
    if (slug) {
      const record = await fetchStructureBySlug(slug);
      if (record) return buildStructureMetadata(record, locale);
    }
  }

  return {
    title: t.metadata.publicHotelProfileTitle,
    description: t.metadata.publicHotelProfileDescription,
    alternates: {
      canonical: canonicalUrl(localizedPath(locale, `/hotel/${id}`)),
    },
    robots: { index: false, follow: false },
  };
}

function redirectDeindexedStructure(
  record: NonNullable<Awaited<ReturnType<typeof fetchStructureBySlugAny>>>,
  locale: Awaited<ReturnType<typeof getServerLocale>>,
) {
  permanentRedirect(destinationPublicPath(record.cityName, locale));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const locale = await getServerLocale();

  if (isUuid(id)) {
    const slug = await resolveSlugByUuid(id);
    if (slug) permanentRedirect(structurePublicPath(slug, locale));

    const legacySlug = await resolveSlugByUuidAny(id);
    if (legacySlug) {
      const legacyRecord = await fetchStructureBySlugAny(legacySlug);
      if (legacyRecord && !legacyRecord.seoIndexable) {
        redirectDeindexedStructure(legacyRecord, locale);
      }
    }

    return (
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PublicHotelProfile />
      </main>
    );
  }

  let record = await fetchStructureBySlug(id);
  if (!record) {
    const currentSlug = await resolveSlugFromPrevious(id);
    if (currentSlug) permanentRedirect(structurePublicPath(currentSlug, locale));

    const inactiveRecord = await fetchStructureBySlugAny(id);
    if (inactiveRecord) {
      if (inactiveRecord.seoIndexable) {
        record = inactiveRecord;
      } else {
        redirectDeindexedStructure(inactiveRecord, locale);
      }
    }
  }

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
