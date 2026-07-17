import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationHubPage } from "@/components/seo/DestinationHubPage";
import { DestinationJsonLd } from "@/components/seo/DestinationJsonLd";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildDestinationMetadata } from "@/lib/seo/destination-metadata";
import { fetchDestinationHubBySlug, fetchDestinationStructures } from "@/lib/seo/destination-queries";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);
  const result = await fetchDestinationStructures(slug, page);

  if (!result) notFound();

  const pageUrl =
    page === 1 ? canonicalUrl(`/destinazioni/${slug}`) : canonicalUrl(`/destinazioni/${slug}?page=${page}`);

  return (
    <>
      <DestinationJsonLd hub={result.hub} items={result.items} pageUrl={pageUrl} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DestinationHubPage hub={result.hub} items={result.items} page={page} totalPages={result.totalPages} />
      </main>
    </>
  );
}
