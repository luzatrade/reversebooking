import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { getGuideBySlug } from "@/lib/i18n/guides";
import { guidePublicPath, guideSegment, homePath, localizedPath } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/translations";

type Props = {
  slug: string;
};

export async function GuideArticlePage({ slug }: Props) {
  const locale = await getServerLocale();
  const guide = getGuideBySlug(slug, locale);
  if (!guide) notFound();

  const guidesLabel = locale === "en" ? "Guides" : "Guide";

  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SeoBreadcrumb
        items={[
          { label: "Home", href: homePath(locale) },
          { label: guidesLabel, href: localizedPath(locale, "/guide") },
          { label: guide.title },
        ]}
      />

      <header>
        <p className="text-xs font-medium uppercase tracking-wide text-[#0f4c81]">{guidesLabel}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">{guide.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{guide.description}</p>
      </header>

      {guide.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-lg font-semibold text-zinc-950">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base sm:leading-7">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <div className="rounded-2xl border border-[#0f4c81]/20 bg-[#e8f0f8]/50 p-5">
        <p className="text-sm font-semibold text-zinc-900">
          {locale === "en" ? "Ready to try reverse booking?" : "Pronto a provare il reverse booking?"}
        </p>
        <Link
          href={homePath(locale)}
          className="mt-3 inline-flex items-center justify-center rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0c3d66]"
        >
          {locale === "en" ? "Drop your request" : "Droppa la tua richiesta"}
        </Link>
      </div>
    </article>
  );
}

export function guideArticleMetadata(guide: NonNullable<ReturnType<typeof getGuideBySlug>>, locale: Locale) {
  return {
    title: `${guide.title} · HotelsDrop`,
    description: guide.description,
    internalPath: `/guide/${guide.slug}` as const,
  };
}
