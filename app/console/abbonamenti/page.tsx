import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { StatusBadge } from "@/components/console/StatusBadge";
import { hotelNamesByIds, listSubscriptions } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleAbbonamentiPage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.subscriptions.title} description={t.console.noServiceRole} />;
  }

  const subs = await listSubscriptions();
  const hotelNames = await hotelNamesByIds(subs.map((s) => s.hotel_account_id));

  return (
    <>
      <ConsolePageHeader title={t.console.pages.subscriptions.title} description={t.console.pages.subscriptions.description} />
      <DataTable
        columns={[
          { key: "hotel", label: "Struttura" },
          { key: "status", label: "Stato" },
          { key: "stripe", label: "Stripe sub" },
          { key: "period", label: "Fine periodo" },
          { key: "cancel", label: "Disdetta" },
          { key: "created", label: "Creato" },
        ]}
        rows={subs.map((s) => ({
          id: s.id,
          cells: {
            hotel: hotelNames.get(s.hotel_account_id) ?? "—",
            status: <StatusBadge value={s.status} />,
            stripe: <span className="font-mono text-xs">{s.stripe_subscription_id?.slice(0, 18)}…</span>,
            period: formatDate(s.current_period_end),
            cancel: s.cancel_at_period_end ? "A fine periodo" : "—",
            created: formatDate(s.created_at),
          },
        }))}
      />
    </>
  );
}
