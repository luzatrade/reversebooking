import type { Metadata } from "next";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildStructureMetadata } from "@/lib/seo/structure-metadata";
import { fetchStructureBySlug, resolveSlugByUuid } from "@/lib/seo/structure-queries";
import { isUuid } from "@/lib/seo/uuid";

/** Metadata for `/hotel/[id]` — lives in layout so `notFound()` keeps correct canonical + noindex. */
export async function generateHotelRouteMetadata(id: string): Promise<Metadata> {
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
