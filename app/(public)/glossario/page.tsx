import type { Metadata } from "next";
import { GlossaryPage } from "@/components/seo/GlossaryPage";
import { glossaryPageMeta } from "@/lib/i18n/aeo-glossary";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { BRAND_NAME } from "@/lib/legal/company";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = glossaryPageMeta(locale);
  const title = `${meta.title} · ${BRAND_NAME}`;

  return {
    title: { absolute: title },
    description: meta.description,
    alternates: buildLanguageAlternates("/glossario", locale),
    openGraph: buildOpenGraph({ title, description: meta.description, path: "/glossario", locale }),
    twitter: buildTwitterCard({ title, description: meta.description }),
  };
}

export default async function Page() {
  const locale = await getServerLocale();
  return <GlossaryPage locale={locale} />;
}
