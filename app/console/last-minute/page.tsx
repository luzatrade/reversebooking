import Link from "next/link";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchForm } from "@/components/console/ConsoleSearchForm";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listCatalogOffers, primaryCatalogOfferCity } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

function offerKindLabel(kind: string) {
  if (kind === "agency_package") return "Pacchetto agenzia";
  if (kind === "hotel_vacancy") return "Hotel / Last Minute";
  return kind;
}

export default async function ConsoleLastMinutePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.lastMinute.title} description={t.console.noServiceRole} />;
  }

  const { q } = await searchParams;
  const offers = await listCatalogOffers(q);
  const publishedCount = offers.filter((offer) => offer.status === "published").length;

  return (
    <>
      <ConsolePageHeader
        title={t.console.pages.lastMinute.title}
        description={`${t.console.pages.lastMinute.description} ${offers.length} totali · ${publishedCount} pubblicate in vetrina.`}
      />
      <ConsoleSearchForm
        action="/console/last-minute"
        query={q}
        clearHref="/console/last-minute"
        placeholder="Cerca per codice, titolo, struttura o città..."
        hint="Le offerte Last Minute sono catalog_offers (vetrina), diverse dalle offerte risposta agli annunci in /console/offerte."
      />
      <DataTable
        columns={[
          { key: "code", label: "Codice" },
          { key: "title", label: "Titolo" },
          { key: "provider", label: "Struttura / agenzia" },
          { key: "city", label: "Destinazione" },
          { key: "kind", label: "Tipo" },
          { key: "dates", label: "Date" },
          { key: "status", label: "Stato" },
          { key: "published", label: "Pubblicata" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={offers.map((offer) => ({
          id: offer.id,
          cells: {
            code: <span className="font-mono text-xs">{offer.offer_code}</span>,
            title: (
              <div className="space-y-1">
                <span className="font-medium">{offer.title_it}</span>
                <Link href={`/offerta/${offer.offer_code}`} className="block text-xs font-semibold text-[#0f4c81] hover:underline">
                  Vedi in vetrina
                </Link>
              </div>
            ),
            provider: offer.provider?.property_name ?? "—",
            city: primaryCatalogOfferCity(offer),
            kind: offerKindLabel(offer.offer_kind),
            dates:
              offer.check_in && offer.check_out
                ? `${formatDate(offer.check_in)} → ${formatDate(offer.check_out)}`
                : "—",
            status: <StatusBadge value={offer.status} />,
            published: offer.published_at ? formatDate(offer.published_at) : "—",
            actions: <DeleteButton entity="catalog_offer" id={offer.id} />,
          },
        }))}
      />
    </>
  );
}
