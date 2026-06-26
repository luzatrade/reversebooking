import Link from "next/link";

export function ConsoleSearchBanner({ query, clearHref }: { query?: string; clearHref: string }) {
  if (!query?.trim()) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#0f4c81]/20 bg-[#e8f0f8] px-4 py-3 text-sm text-zinc-700">
      <p>
        Filtro ricerca attivo: <strong className="text-zinc-900">{query.trim()}</strong>
      </p>
      <Link href={clearHref} className="font-semibold text-[#0f4c81] hover:underline">
        Rimuovi filtro
      </Link>
    </div>
  );
}
