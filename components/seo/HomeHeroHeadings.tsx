import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { buildHomepageSeoCopy } from "@/lib/seo/homepage-metadata";

/** Server-rendered H1 block for correct DOM heading order and AI crawlability. */
export async function HomeHeroHeadings() {
  const locale = await getServerLocale();
  const t = await getServerTranslations();
  const seo = buildHomepageSeoCopy(locale, t);

  return (
    <>
      <h1 className="hd-home-headline">{seo.heroHeadline}</h1>
      <p className="hd-home-subtitle">{seo.heroSubheadline}</p>
      {seo.heroEntityIntro ? (
        <p className="hd-home-subtitle mt-2 text-sm opacity-90">{seo.heroEntityIntro}</p>
      ) : null}
    </>
  );
}
