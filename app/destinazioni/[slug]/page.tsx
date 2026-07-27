import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { DestinationHubPage } from "@/components/seo/DestinationHubPage";
import { DestinationJsonLd } from "@/components/seo/DestinationJsonLd";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { getDestinationFaq } from "@/lib/i18n/seo-marketing";
import { resolveDestinationHubSlug } from "@/lib/seo/city-canonical";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildDestinationMetadata } from "@/lib/seo/destination-metadata";
import { buildFaqPageJsonLd } from "@/lib/seo/faq-jsonld";
import { fetchDestinationHubBySlug, fetchDestinationStructures } from "@/lib/seo/destination-queries";
import { listRelatedDestinations } from "@/lib/seo/related-destinations";
import { slugifySeo } from "@/lib/seo/slug";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = resolveDestinationHubSlug(rawSlug);
  const { page: pageParam } = await searchParams;
  const locale = await getServerLocale();
  const hub = await fetchDestinationHubBySlug(slug);
  if (!hub) {
    return { title: "Destinazione non trovata", robots: { index: false, follow: false } };
  }

  const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);
  return buildDestinationMetadata(hub, locale, page);
}

export default async function DestinationPage({ params, searchParams }: PageProps) {
  const { slug: rawSlug } = await params;
  const slug = resolveDestinationHubSlug(rawSlug);
  const locale = await getServerLocale();

  if (slugifySeo(rawSlug, 64) !== slug) {
    permanentRedirect(localizedPath(locale, `/destinazioni/${slug}`));
  }

  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);
  const result = await fetchDestinationStructures(slug, page);

  if (!result) notFound();

  const relatedDestinations =
    page === 1 ? await listRelatedDestinations(result.hub.slug, result.hub.countryCode) : [];

  const pageUrl =
    page === 1 ? canonicalUrl(localizedPath(locale, `/destinazioni/${slug}`)) : canonicalUrl(localizedPath(locale, `/destinazioni/${slug}?page=${page}`));

  return (
    <>
      <DestinationJsonLd hub={result.hub} items={result.items} pageUrl={pageUrl} />
      {page === 1 ? (
        <JsonLdScript data={buildFaqPageJsonLd(getDestinationFaq(locale, result.hub.displayName), pageUrl)} />
      ) : null}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DestinationHubPage
          hub={result.hub}
          items={result.items}
          page={page}
          totalPages={result.totalPages}
          relatedDestinations={relatedDestinations}
        />
      </main>
    </>
  );
}
