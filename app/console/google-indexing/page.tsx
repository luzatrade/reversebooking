import Link from "next/link";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { GoogleIndexingPanel } from "@/components/console/GoogleIndexingPanel";
import {
  getGoogleIndexingDashboard,
  googleIndexingTierLabel,
} from "@/lib/admin/google-indexing-data";
import { formatDate } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleGoogleIndexingPage() {
  const t = await getServerTranslations();
  const p = t.console.pages.googleIndexing;

  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={p.title} description={t.console.noServiceRole} />;
  }

  const data = await getGoogleIndexingDashboard();

  return (
    <>
      <ConsolePageHeader title={p.title} description={p.description} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">{p.statConfigured}</p>
          <p className="mt-2 text-2xl font-bold text-zinc-900">{data.configured ? p.yes : p.no}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">{p.statSchema}</p>
          <p className="mt-2 text-2xl font-bold text-zinc-900">{data.schemaReady ? p.yes : p.no}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">{p.statOk24h}</p>
          <p className="mt-2 text-2xl font-bold text-[#0f4c81]">
            {data.ok24h} / {data.dailyLimit}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">{p.statPending}</p>
          <p className="mt-2 text-2xl font-bold text-zinc-900">{data.pendingCount}</p>
        </div>
      </div>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">{p.actions}</h2>
        <GoogleIndexingPanel labels={p.panel} />
        <p className="text-sm text-zinc-600">
          {p.cronHint} <code className="text-xs">/api/cron/google-indexing</code> · {p.indexnowHint}{" "}
          <Link href="/console/audit" className="text-[#0f4c81] underline">
            Audit log
          </Link>
        </p>
        {!data.schemaReady ? (
          <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {p.schemaMissing}
          </p>
        ) : null}
        {data.configured === false ? (
          <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {p.secretMissing}
          </p>
        ) : null}
      </section>

      {data.tier7d.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900">{p.mix7d}</h2>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-700">
            {data.tier7d.map((row) => (
              <li key={row.tier} className="rounded-full bg-zinc-100 px-3 py-1">
                {googleIndexingTierLabel(row.tier)}: {row.count}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900">{p.recent}</h2>
        <DataTable
          columns={[
            { key: "when", label: p.colWhen },
            { key: "url", label: p.colUrl },
            { key: "tier", label: p.colTier },
            { key: "ok", label: p.colOk },
            { key: "status", label: p.colStatus },
            { key: "error", label: p.colError },
          ]}
          rows={data.recent.map((row) => ({
            id: row.id,
            cells: {
              when: formatDate(row.notified_at),
              url: (
                <a href={row.url} className="text-[#0f4c81] underline" target="_blank" rel="noreferrer">
                  {row.url.replace("https://www.hotelsdrop.com", "")}
                </a>
              ),
              tier: googleIndexingTierLabel(row.tier),
              ok: row.ok ? p.okYes : p.okNo,
              status: row.http_status ?? "—",
              error: row.error_message ? (
                <span className="font-mono text-xs text-red-600">{row.error_message.slice(0, 120)}</span>
              ) : (
                "—"
              ),
            },
          }))}
        />
      </section>
    </>
  );
}