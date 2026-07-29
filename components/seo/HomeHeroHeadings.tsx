import { getServerTranslations } from "@/lib/i18n/get-translations";

/** Server-rendered H1 block for correct DOM heading order and AI crawlability. */
export async function HomeHeroHeadings() {
  const t = await getServerTranslations();

  return (
    <div className="hd-home-tagline font-brand">
      <h1 className="hd-home-headline">{t.showcase.homeHeadline}</h1>
      <p className="hd-home-subtitle">{t.showcase.homeSubtitle}</p>
      <p className="hd-home-subtitle mt-2 text-sm opacity-90">{t.showcase.homeEntityIntro}</p>
    </div>
  );
}
