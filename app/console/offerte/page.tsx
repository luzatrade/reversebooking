import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchBanner } from "@/components/console/ConsoleSearchBanner";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { hotelNamesByIds, listOffers } from "@/lib/admin/data";
import { formatDate, formatMoney } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleOffertePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.offers.title} description={t.console.noServiceRole} />;
  }

  const { q } = await searchParams;
  const offers = await listOffers(q);
  const hotelNames = await hotelNamesByIds(offers.map((o) => o.hotel_account_id));

  return (
    <>
      <ConsolePageHeader title={t.console.pages.offers.title} description={t.console.pages.offers.description} />
      <ConsoleSearchBanner query={q} clearHref="/console/offerte" />
      <DataTable
        columns={[
          { key: "code", label: "Codice" },
          { key: "hotel", label: "Struttura" },
          { key: "price", label: "Prezzo" },
          { key: "status", label: "Stato" },
          { key: "expires", label: "Scadenza" },
          { key: "created", label: "Creata" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={offers.map((o) => ({
          id: o.id,
          cells: {
            code: <span className="font-mono text-xs">{o.offer_code ?? o.id.slice(0, 8)}</span>,
            hotel: hotelNames.get(o.hotel_account_id) ?? "—",
            price: formatMoney(Number(o.total_price)),
            status: <StatusBadge value={o.status} />,
            expires: formatDate(o.expires_at),
            created: formatDate(o.created_at),
            actions: <DeleteButton entity="offer" id={o.id} />,
          },
        }))}
      />
    </>
  );
}
