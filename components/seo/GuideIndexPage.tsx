import Link from "next/link";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { guidePublicPath, homePath, localizedPath } from "@/lib/i18n/routing";
import { listGuides } from "@/lib/i18n/guides";

export async function GuideIndexPage() {
  const locale = await getServerLocale();
  const guides = listGuides(locale);
  const title = locale === "en" ? "Guides" : "Guide";
  const subtitle =
    locale === "en"
      ? "Learn how reverse booking works and how to get the most from HotelsDrop."
      : "Scopri come funziona il reverse booking e come sfruttare al meglio HotelsDrop.";

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SeoBreadcrumb
        items={[
          { label: "Home", href: homePath(locale) },
          { label: title },
        ]}
      />
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{subtitle}</p>
      </header>
      <ul className="space-y-4">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={guidePublicPath(guide.slug, locale)}
              className="block rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-[#0f4c81]/30 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold text-zinc-950">{guide.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{guide.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function guideIndexMetadata(locale: "it" | "en") {
  return {
    title: locale === "en" ? "Guides · HotelsDrop" : "Guide · HotelsDrop",
    description:
      locale === "en"
        ? "Guides on reverse booking, group travel and travel agencies on HotelsDrop."
        : "Guide su reverse booking, viaggi di gruppo e agenzie di viaggio su HotelsDrop.",
    internalPath: "/guide" as const,
  };
}
