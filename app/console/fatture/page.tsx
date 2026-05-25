import Link from "next/link";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { StatusBadge } from "@/components/console/StatusBadge";
import { hotelNamesByIds, listInvoices } from "@/lib/admin/data";
import { formatCents, formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleFatturePage() {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.invoices.title} description={t.console.noServiceRole} />;
  }

  const invoices = await listInvoices();
  const hotelNames = await hotelNamesByIds(
    invoices.map((i) => i.hotel_account_id).filter(Boolean) as string[],
  );

  return (
    <>
      <ConsolePageHeader title={t.console.pages.invoices.title} description={t.console.pages.invoices.description} />
      <DataTable
        columns={[
          { key: "number", label: "Numero" },
          { key: "hotel", label: "Struttura" },
          { key: "amount", label: "Importo" },
          { key: "status", label: "Stato" },
          { key: "paid", label: "Pagata" },
          { key: "link", label: "PDF" },
        ]}
        rows={invoices.map((inv) => ({
          id: inv.id,
          cells: {
            number: inv.invoice_number ?? inv.id.slice(0, 8),
            hotel: inv.hotel_account_id ? hotelNames.get(inv.hotel_account_id) ?? "—" : "—",
            amount: formatCents(inv.amount_due, (inv.currency ?? "eur").toUpperCase()),
            status: <StatusBadge value={inv.status} />,
            paid: formatDate(inv.paid_at),
            link: inv.hosted_invoice_url ? (
              <Link
                href={inv.hosted_invoice_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4c81] underline"
              >
                Apri
              </Link>
            ) : (
              "—"
            ),
          },
        }))}
      />
    </>
  );
}
