import { getServerLocale } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";
import { buildStructureJsonLd } from "@/lib/seo/structure-metadata";
import { canonicalUrl } from "@/lib/seo/canonical";

type Props = {
  record: StructureSeoRecord;
};

export async function StructureJsonLd({ record }: Props) {
  const locale = await getServerLocale();
  const pageUrl = canonicalUrl(localizedPath(locale, `/hotel/${record.slug}`));
  const jsonLd = buildStructureJsonLd(record, pageUrl, locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
