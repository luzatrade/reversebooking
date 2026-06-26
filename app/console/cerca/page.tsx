import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import {
  adminGlobalSearch,
  adminSearchTypeLabels,
  groupAdminSearchHits,
  type AdminSearchHitType,
} from "@/lib/admin/search";
import { isServiceRoleConfigured } from "@/lib/utils/env";

const groupOrder: AdminSearchHitType[] = [
  "user",
  "hotel",
  "advertiser",
  "request",
  "offer",
  "invoice",
  "onboarding",
];

export default async function ConsoleCercaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title="Ricerca" description="Service role non configurato." />;
  }

  const { results, total } = query.length >= 2 ? await adminGlobalSearch(query, 20) : { results: [], total: 0 };
  const groups = groupAdminSearchHits(results);

  return (
    <>
      <ConsolePageHeader
        title="Ricerca console"
        description={
          query.length >= 2
            ? `${total} risultat${total === 1 ? "o" : "i"} per "${query}"`
            : "Digita almeno 2 caratteri nella barra di ricerca (⌘K) per trovare utenti, strutture, annunci e altro."
        }
      />

      {query.length >= 2 && total === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
          Nessun risultato trovato.
        </div>
      ) : null}

      <div className="space-y-8">
        {groupOrder.map((type) => {
          const hits = groups.get(type);
          if (!hits?.length) return null;
          return (
            <section key={type}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-500">{adminSearchTypeLabels[type]}</h2>
              <div className="mt-3 divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                {hits.map((hit) => (
                  <Link
                    key={`${hit.type}-${hit.id}`}
                    href={hit.href}
                    className="flex items-center justify-between gap-4 px-4 py-3 transition hover:bg-zinc-50"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-zinc-900">{hit.title}</p>
                      <p className="truncate text-sm text-zinc-500">{hit.subtitle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
