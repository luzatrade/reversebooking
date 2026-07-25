import type { Metadata } from "next";
import { GuideIndexPage, guideIndexMetadata } from "@/components/seo/GuideIndexPage";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = guideIndexMetadata(locale);

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLanguageAlternates(meta.internalPath, locale),
    openGraph: buildOpenGraph({ title: meta.title, description: meta.description, path: meta.internalPath, locale }),
    twitter: buildTwitterCard({ title: meta.title, description: meta.description }),
  };
}

export default async function GuidePage() {
  return (
    <main>
      <GuideIndexPage />
    </main>
  );
}
