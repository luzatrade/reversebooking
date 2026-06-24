import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { formatMessage } from "@/lib/i18n/format";
import { getAppUrl } from "@/lib/legal/company";
import { allDestinationSlugs, buildCreateRequestPrefillUrl, getDestinationBySlug } from "@/lib/seo/home-destinations";
import { createServiceRoleClient } from "@/lib/supabase/admin";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  const t = await getServerTranslations();
  const hub = t.destinationHub;
  const cityName = destination.city.city_name;
  const siteUrl = getAppUrl().replace(/\/$/, "");
  const title = formatMessage(hub.metaTitle, { city: cityName });
  const description = formatMessage(hub.metaDescription, { city: cityName });
  const url = `${siteUrl}/destinazioni/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "HotelsDrop",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

async function loadStructures(cityName: string) {
  const sb = createServiceRoleClient();
  if (!sb) return [];

  const { data } = await sb
    .from("onboarding_hotels")
    .select("id, nome, main_photo_url, indirizzo")
    .ilike("city_name", cityName)
    .in("status", ["unclaimed", "claimed"])
    .order("nome")
    .limit(12);

  return data ?? [];
}

function DestinationHubJsonLd({
  cityName,
  slug,
  structureCount,
}: {
  cityName: string;
  slug: string;
  structureCount: number;
}) {
  const siteUrl = getAppUrl().replace(/\/$/, "");
  const pageUrl = `${siteUrl}/destinazioni/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: cityName, item: pageUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `Prenotazione hotel a ${cityName}`,
        url: pageUrl,
        description: `Offerte hotel e strutture ricettive a ${cityName} su HotelsDrop.`,
        numberOfItems: structureCount,
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default async function DestinationHubPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const t = await getServerTranslations();
  const hub = t.destinationHub;
  const cityName = destination.city.city_name;
  const intro =
    hub.cityIntros[slug as keyof typeof hub.cityIntros] ??
    formatMessage(hub.lead, { city: cityName });
  const structures = await loadStructures(cityName);
  const requestUrl = buildCreateRequestPrefillUrl(destination.city);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <DestinationHubJsonLd cityName={cityName} slug={slug} structureCount={structures.length} />

      <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="font-medium text-[#0f4c81] hover:underline">
              {hub.breadcrumbHome}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{hub.breadcrumbDestinations}</li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-800">{cityName}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0f4c81] sm:text-4xl">
          {formatMessage(hub.h1, { city: cityName })}
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">{intro}</p>
        <Link
          href={requestUrl}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          {formatMessage(hub.cta, { city: cityName })}
        </Link>
      </header>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-zinc-900">{formatMessage(hub.structuresTitle, { city: cityName })}</h2>
        {structures.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">{hub.structuresEmpty}</p>
        ) : (
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {structures.map((structure) => (
              <li key={structure.id}>
                <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                  {structure.main_photo_url ? (
                    <img
                      src={structure.main_photo_url}
                      alt={structure.nome}
                      className="h-32 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-32 items-center justify-center bg-zinc-100 text-xs text-zinc-400">Foto non disponibile</div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-zinc-900">{structure.nome}</h3>
                    {structure.indirizzo ? (
                      <p className="mt-1 line-clamp-2 text-xs text-zinc-500">{structure.indirizzo}</p>
                    ) : null}
                    <Link
                      href={`/hotel/onboarding/${structure.id}`}
                      className="mt-3 inline-flex text-sm font-semibold text-[#0f4c81] hover:underline"
                    >
                      {hub.viewProfile}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-zinc-600 hover:text-zinc-950">
          ← {hub.backHome}
        </Link>
      </p>
    </main>
  );
}
