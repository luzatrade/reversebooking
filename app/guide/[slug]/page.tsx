import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticlePage, guideArticleMetadata } from "@/components/seo/GuideArticlePage";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { getGuideBySlug } from "@/lib/i18n/guides";
import { buildGuideLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getServerLocale();
  const { slug } = await params;
  const guide = getGuideBySlug(slug, locale);
  if (!guide) return {};

  const meta = guideArticleMetadata(guide, locale);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildGuideLanguageAlternates(slug, locale),
    openGraph: buildOpenGraph({ title: meta.title, description: meta.description, path: meta.internalPath, locale }),
    twitter: buildTwitterCard({ title: meta.title, description: meta.description }),
  };
}

export default async function GuideArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getServerLocale();
  if (!getGuideBySlug(slug, locale)) notFound();

  return (
    <main>
      <GuideArticlePage slug={slug} />
    </main>
  );
}
