import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { listAuditLog } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

const ACTION_LABELS: Record<string, string> = {
  impersonate: "Impersonazione",
  profile_status_change: "Cambio stato profilo",
  hotel_status_change: "Cambio stato struttura",
  request_status_change: "Cambio stato richiesta",
  delete_entity: "Eliminazione",
};

export default async function ConsoleAuditPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.audit.title} description={t.console.noServiceRole} />;
  }

  const rows = await listAuditLog();

  return (
    <>
      <ConsolePageHeader title={t.console.pages.audit.title} description={t.console.pages.audit.description} />
      <DataTable
        columns={[
          { key: "when", label: "Data" },
          { key: "actor", label: "Admin" },
          { key: "action", label: "Azione" },
          { key: "target", label: "Target" },
          { key: "details", label: "Dettagli" },
          { key: "ip", label: "IP" },
        ]}
        rows={rows.map((r) => ({
          id: r.id,
          cells: {
            when: formatDate(r.created_at),
            actor: r.actor_email ?? "—",
            action: ACTION_LABELS[r.action] ?? r.action,
            target: r.target_type ? `${r.target_type}: ${r.target_id ?? "—"}` : "—",
            details: r.details ? (
              <span className="font-mono text-xs text-zinc-600">{JSON.stringify(r.details)}</span>
            ) : (
              <span className="text-zinc-400">—</span>
            ),
            ip: <span className="font-mono text-xs">{r.ip_address ?? "—"}</span>,
          },
        }))}
      />
    </>
  );
}
