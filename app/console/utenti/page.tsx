import { AccountStatusSelect } from "@/components/console/AccountStatusSelect";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchBanner } from "@/components/console/ConsoleSearchBanner";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listProfiles } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleUtentiPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.users.title} description={t.console.noServiceRole} />;
  }

  const { q } = await searchParams;
  const profiles = await listProfiles(q);

  return (
    <>
      <ConsolePageHeader title={t.console.pages.users.title} description={t.console.pages.users.description} />
      <ConsoleSearchBanner query={q} clearHref="/console/utenti" />
      <DataTable
        columns={[
          { key: "email", label: "Email" },
          { key: "role", label: "Ruolo" },
          { key: "phone", label: "Telefono" },
          { key: "emailVerified", label: "Email verificata" },
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
            emailVerified: p.email_verified ? (
              <span className="text-xs font-semibold text-emerald-700">Sì</span>
            ) : (
              <span className="text-xs font-semibold text-amber-700">No</span>
            ),
            status: <StatusBadge value={p.account_status} />,
            created: formatDate(p.created_at),
            actions: (
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                <AccountStatusSelect profileId={p.id} current={p.account_status} kind="profile" />
                <ImpersonateButton userId={p.user_id} />
                {p.role !== "admin" && <DeleteButton entity="user" id={p.user_id} />}
              </div>
            ),
          },
        }))}
      />
    </>
  );
}
