import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getServerTranslations } from "@/lib/i18n/get-translations";

export default async function AdvertiserProfilePage() {
  const t = await getServerTranslations();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/inserzionista/dashboard"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950"
      >
        <ArrowLeft className="h-4 w-4" /> {t.common.backToDashboard}
      </Link>

      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.pages.advertiserProfile.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t.pages.advertiserProfile.title}</h1>
        <p className="mt-3 text-sm text-zinc-600">{t.pages.advertiserProfile.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/inserzionista/crea-annuncio" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
            {t.pages.advertiserProfile.createListing}
          </Link>
          <Link href="/vetrina" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold">
            {t.pages.advertiserProfile.goToShowcase}
          </Link>
        </div>
      </section>
    </main>
  );
}
