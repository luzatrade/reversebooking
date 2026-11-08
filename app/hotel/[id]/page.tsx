import { notFound, permanentRedirect } from "next/navigation";
import { PublicHotelProfile } from "@/components/hotels/PublicHotelProfile";
import { StructureJsonLd } from "@/components/seo/StructureJsonLd";
import { StructureSeoPage } from "@/components/seo/StructureSeoPage";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { destinationPublicPath, structurePublicPath } from "@/lib/i18n/routing";
import {
  fetchStructureBySlug,
  fetchStructureBySlugAny,
  resolveSlugByUuid,
  resolveSlugFromPrevious,
  structureIdExists,
} from "@/lib/seo/structure-queries";
import { isUuid } from "@/lib/seo/uuid";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ id: string }>;
};

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

    if (!(await structureIdExists(id))) notFound();

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
