import Link from "next/link";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { formatMessage } from "@/lib/i18n/format";
import { buildCreateRequestPrefillUrl, homeSeoDestinations } from "@/lib/seo/home-destinations";

export async function HomeSeoSections() {
  const t = await getServerTranslations();
  const s = t.homeSeo;

  return (
    <div className="hd-home-seo mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <section className="hd-seo-block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0f4c81] sm:text-2xl">{s.otaTitle}</h2>
        <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">{s.otaIntro}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {s.otaBullets.map((bullet) => (
            <li key={bullet} className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-800">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="hd-seo-block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0f4c81] sm:text-2xl">{s.howTitle}</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {s.howSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0f4c81] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-3 font-semibold text-zinc-900">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hd-seo-block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0f4c81] sm:text-2xl">{s.citiesTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{s.citiesIntro}</p>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {homeSeoDestinations.map(({ city }) => (
            <li key={city.city_id}>
              <Link
                href={buildCreateRequestPrefillUrl(city)}
                className="block rounded-xl border border-zinc-200 px-3 py-2.5 text-sm font-semibold text-[#0f4c81] transition hover:border-[#0f4c81]/30 hover:bg-blue-50"
              >
                {formatMessage(s.cityLinkLabel, { city: city.city_name })}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="hd-seo-block rounded-3xl border border-amber-200 bg-amber-50/80 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-amber-950 sm:text-2xl">{s.partnerTitle}</h2>
        <p className="mt-4 text-sm leading-7 text-amber-950/90 sm:text-base">{s.partnerBody}</p>
        <Link
          href="/registrazione?mode=partner"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          {s.partnerCta}
        </Link>
      </section>

      <section className="hd-seo-block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-900">{s.faqTitle}</h2>
        <dl className="mt-5 space-y-5">
          {s.faqItems.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-zinc-900">{item.question}</dt>
              <dd className="mt-2 text-sm leading-7 text-zinc-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
