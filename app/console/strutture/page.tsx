import { AccountStatusSelect } from "@/components/console/AccountStatusSelect";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listHotels } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { structureTypeLabels } from "@/types/app";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleStrutturePage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.structures.title} description={t.console.noServiceRole} />;
  }

  const hotels = await listHotels();

  return (
    <>
      <ConsolePageHeader title={t.console.pages.structures.title} description={t.console.pages.structures.description} />
      <DataTable
        columns={[
          { key: "name", label: "Struttura" },
          { key: "city", label: "Città" },
          { key: "type", label: "Tipo" },
          { key: "cin", label: "CIN" },
          { key: "sub", label: "Abbonamento" },
          { key: "status", label: "Stato" },
          { key: "created", label: "Registrata" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={hotels.map((h) => ({
          id: h.id,
          cells: {
            name: <span className="font-medium">{h.property_name}</span>,
            city: `${h.city_name}, ${h.country_name}`,
            type: structureTypeLabels[h.structure_type as keyof typeof structureTypeLabels] ?? h.structure_type,
            cin: <span className="font-mono text-xs">{h.cin_code}</span>,
            sub: (
              <div className="flex flex-col gap-1">
                <StatusBadge value={h.subscription_active ? "active" : "inactive"} />
                <span className="text-xs text-zinc-500">{h.subscription_status}</span>
              </div>
            ),
            status: <StatusBadge value={h.account_status} />,
            created: formatDate(h.created_at),
            actions: (
              <AccountStatusSelect profileId={h.id} current={h.account_status} kind="hotel" />
            ),
          },
        }))}
      />
    </>
  );
}
