import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { RequestStatusSelect } from "@/components/console/RequestStatusSelect";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listTravelRequests } from "@/lib/admin/data";
import { formatDate, formatMoney } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleAnnunciPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.listings.title} description={t.console.noServiceRole} />;
  }

  const requests = await listTravelRequests();

  return (
    <>
      <ConsolePageHeader title={t.console.pages.listings.title} description={t.console.pages.listings.description} />
      <DataTable
        columns={[
          { key: "destination", label: "Destinazione" },
          { key: "dates", label: "Date" },
          { key: "guests", label: "Ospiti" },
          { key: "budget", label: "Budget" },
          { key: "status", label: "Stato" },
          { key: "expires", label: "Scadenza" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={requests.map((r) => ({
          id: r.id,
          cells: {
            destination: (
              <div>
                <p className="font-medium">
                  {r.city_name}, {r.country_name}
                </p>
                <p className="text-xs text-zinc-500">{r.preferred_area}</p>
              </div>
            ),
            dates: `${formatDate(r.check_in)} → ${formatDate(r.check_out)}`,
            guests: `${r.guests_count} ospiti · ${r.rooms_count} camere`,
            budget: formatMoney(Number(r.budget)),
            status: <StatusBadge value={r.status} />,
            expires: formatDate(r.expires_at),
            actions: <RequestStatusSelect requestId={r.id} current={r.status} />,
          },
        }))}
      />
    </>
  );
}
