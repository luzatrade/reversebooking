import Link from "next/link";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";

export default async function HotelNotFound() {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const homeHref = localizedPath(locale, "/");

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-zinc-900">{t.metadata.publicHotelProfileTitle}</h1>
      <p className="mt-3 text-sm text-zinc-600">{t.errors.notFound}</p>
      <Link
        href={homeHref}
        className="mt-8 inline-flex rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0d4373]"
      >
        {locale === "en" ? "Back to homepage" : "Torna alla home"}
      </Link>
    </main>
  );
}
