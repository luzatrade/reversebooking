import type { Metadata } from "next";
import { DestinationsIndexPage, destinationsIndexMetadata } from "@/components/seo/DestinationsIndexPage";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { listAllDestinationHubs } from "@/lib/seo/destination-queries";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = destinationsIndexMetadata(locale);

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLanguageAlternates(meta.internalPath, locale),
    openGraph: buildOpenGraph({
      title: meta.title,
      description: meta.description,
      path: meta.internalPath,
      locale,
    }),
    twitter: buildTwitterCard({ title: meta.title, description: meta.description }),
  };
}

export default async function DestinazioniIndexPage() {
  const destinations = await listAllDestinationHubs();
  return (
    <main>
      <DestinationsIndexPage destinations={destinations} />
    </main>
  );
}
