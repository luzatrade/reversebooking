import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { listConsents, profileEmailsByUserIds } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

function yesNo(value: boolean) {
  return value ? (
    <span className="font-semibold text-emerald-700">Sì</span>
  ) : (
    <span className="text-zinc-400">No</span>
  );
}

export default async function ConsoleConsensiPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.consents.title} description={t.console.noServiceRole} />;
  }

  const consents = await listConsents();
  const emails = await profileEmailsByUserIds(consents.map((c) => c.user_id));

  return (
    <>
      <ConsolePageHeader title={t.console.pages.consents.title} description={t.console.pages.consents.description} />
      <DataTable
        columns={[
          { key: "email", label: "Utente" },
          { key: "terms", label: "Termini" },
          { key: "privacy", label: "Privacy" },
          { key: "marketing", label: "Marketing" },
          { key: "subscription", label: "Abbonamento" },
          { key: "versions", label: "Versioni" },
          { key: "when", label: "Data" },
        ]}
        rows={consents.map((c) => ({
          id: c.id,
          cells: {
            email: emails.get(c.user_id) ?? c.user_id.slice(0, 8),
            terms: yesNo(c.terms_accepted),
            privacy: yesNo(c.privacy_accepted),
            marketing: yesNo(c.marketing_accepted),
            subscription: yesNo(c.subscription_terms_accepted),
            versions: (
              <span className="text-xs text-zinc-600">
                T:{c.terms_version ?? "—"} · P:{c.privacy_version ?? "—"}
              </span>
            ),
            when: formatDate(c.accepted_at),
          },
        }))}
      />
    </>
  );
}
