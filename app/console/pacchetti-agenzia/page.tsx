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

export default async function ConsoleAgencyPackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return (
      <ConsolePageHeader
        title={t.console.pages.agencyPackages.title}
        description={t.console.noServiceRole}
      />
    );
  }

  const { q } = await searchParams;
  const offers = await listCatalogOffers(q, { offerKind: "agency_package" });
  const publishedCount = offers.filter((offer) => offer.status === "published").length;

  return (
    <>
      <ConsolePageHeader
        title={t.console.pages.agencyPackages.title}
        description={`${t.console.pages.agencyPackages.description} ${offers.length} totali · ${publishedCount} pubblicati in vetrina.`}
      />
      <ConsoleSearchForm
        action="/console/pacchetti-agenzia"
        query={q}
        clearHref="/console/pacchetti-agenzia"
        placeholder={t.console.pages.agencyPackages.searchPlaceholder}
        hint={t.console.pages.agencyPackages.searchHint}
      />
      <DataTable
        columns={[
          { key: "code", label: t.console.pages.agencyPackages.colCode },
          { key: "title", label: t.console.pages.agencyPackages.colTitle },
          { key: "agency", label: t.console.pages.agencyPackages.colAgency },
          { key: "city", label: t.console.pages.agencyPackages.colDestination },
          { key: "dates", label: t.console.pages.agencyPackages.colDates },
          { key: "status", label: t.console.pages.agencyPackages.colStatus },
          { key: "published", label: t.console.pages.agencyPackages.colPublished },
          { key: "actions", label: t.console.pages.agencyPackages.colActions },
        ]}
        rows={offers.map((offer) => ({
          id: offer.id,
          cells: {
            code: <span className="font-mono text-xs">{offer.offer_code}</span>,
            title: (
              <div className="space-y-1">
                <span className="font-medium">{offer.title_it}</span>
                <Link
                  href={`/offerta/${offer.offer_code}`}
                  className="block text-xs font-semibold text-[#0f4c81] hover:underline"
                >
                  {t.console.pages.agencyPackages.viewInShowcase}
                </Link>
              </div>
            ),
            agency: offer.provider?.property_name ?? "—",
            city: primaryCatalogOfferCity(offer),
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
