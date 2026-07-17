import type { StructureSeoRecord } from "@/lib/seo/structure-queries";
import { buildStructureJsonLd } from "@/lib/seo/structure-metadata";
import { canonicalUrl } from "@/lib/seo/canonical";

type Props = {
  record: StructureSeoRecord;
};

export function StructureJsonLd({ record }: Props) {
  const pageUrl = canonicalUrl(`/hotel/${record.slug}`);
  const jsonLd = buildStructureJsonLd(record, pageUrl);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
