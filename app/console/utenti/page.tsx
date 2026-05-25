import { AccountStatusSelect } from "@/components/console/AccountStatusSelect";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listProfiles } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleUtentiPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.users.title} description={t.console.noServiceRole} />;
  }

  const profiles = await listProfiles();

  return (
    <>
      <ConsolePageHeader title={t.console.pages.users.title} description={t.console.pages.users.description} />
      <DataTable
        columns={[
          { key: "email", label: "Email" },
          { key: "role", label: "Ruolo" },
          { key: "phone", label: "Telefono" },
          { key: "status", label: "Stato" },
          { key: "created", label: "Registrato" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={profiles.map((p) => ({
          id: p.id,
          cells: {
            email: <span className="font-medium">{p.email}</span>,
            role: <StatusBadge value={p.role} />,
            phone: p.phone_number,
            status: <StatusBadge value={p.account_status} />,
            created: formatDate(p.created_at),
            actions: (
              <AccountStatusSelect profileId={p.id} current={p.account_status} kind="profile" />
            ),
          },
        }))}
      />
    </>
  );
}
