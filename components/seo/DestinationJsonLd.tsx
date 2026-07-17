import { canonicalUrl } from "@/lib/seo/canonical";
import { buildDestinationJsonLd } from "@/lib/seo/destination-metadata";
import type { DestinationHub, DestinationStructureItem } from "@/lib/seo/destination-queries";

type Props = {
  hub: DestinationHub;
  items: DestinationStructureItem[];
  pageUrl: string;
};

export function DestinationJsonLd({ hub, items, pageUrl }: Props) {
  const jsonLd = buildDestinationJsonLd(
    hub,
    items.map((item) => ({ slug: item.slug, name: item.name })),
    pageUrl,
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
