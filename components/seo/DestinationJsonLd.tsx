import { getServerLocale } from "@/lib/i18n/get-translations";
import { buildDestinationJsonLd } from "@/lib/seo/destination-metadata";
import type { DestinationHub, DestinationStructureItem } from "@/lib/seo/destination-queries";

type Props = {
  hub: DestinationHub;
  items: DestinationStructureItem[];
  pageUrl: string;
};

export async function DestinationJsonLd({ hub, items, pageUrl }: Props) {
  const locale = await getServerLocale();
  const jsonLd = buildDestinationJsonLd(
    hub,
    items.map((item) => ({ slug: item.slug, name: item.name })),
    pageUrl,
    locale,
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
