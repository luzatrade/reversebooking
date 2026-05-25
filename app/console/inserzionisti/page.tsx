import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listAdvertisers, profileEmailsByUserIds } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { advertiserTypeLabels } from "@/types/app";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleInserzionistiPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.advertisers.title} description={t.console.noServiceRole} />;
  }

  const advertisers = await listAdvertisers();
  const emails = await profileEmailsByUserIds(advertisers.map((a) => a.user_id));

  return (
    <>
      <ConsolePageHeader title={t.console.pages.advertisers.title} description={t.console.pages.advertisers.description} />
      <DataTable
        columns={[
          { key: "name", label: "Nome / Azienda" },
          { key: "type", label: "Tipo" },
          { key: "email", label: "Email account" },
          { key: "contact", label: "Contatto" },
          { key: "created", label: "Registrato" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={advertisers.map((a) => ({
          id: a.id,
          cells: {
            name: (
              <span className="font-medium">
                {a.company_name || `${a.first_name} ${a.last_name}`}
              </span>
            ),
            type: (
              <StatusBadge
                value={advertiserTypeLabels[a.advertiser_type as keyof typeof advertiserTypeLabels] ?? a.advertiser_type}
              />
            ),
            email: emails.get(a.user_id) ?? "—",
            contact: a.contact_email ?? "—",
            created: formatDate(a.created_at),
            actions: (
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                <ImpersonateButton userId={a.user_id} />
                <DeleteButton entity="advertiser" id={a.id} />
              </div>
            ),
          },
        }))}
      />
    </>
  );
}
