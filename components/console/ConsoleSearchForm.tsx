import Link from "next/link";
import { Search } from "lucide-react";

type ConsoleSearchFormProps = {
  action: string;
  query?: string;
  placeholder?: string;
  hint?: string;
  clearHref?: string;
};

export function ConsoleSearchForm({
  action,
  query,
  placeholder = "Cerca per nome, indirizzo, email, città o ID...",
  hint,
  clearHref,
}: ConsoleSearchFormProps) {
  const trimmedQuery = query?.trim() ?? "";

  return (
    <div className="mb-6 space-y-3">
      <form action={action} method="get" className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Cerca</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            name="q"
            type="search"
            defaultValue={trimmedQuery}
            placeholder={placeholder}
            enterKeyHint="search"
            autoComplete="off"
            className="w-full rounded-xl border border-zinc-300 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 shadow-sm outline-none ring-[#0f4c81]/20 placeholder:text-zinc-400 focus:border-[#0f4c81] focus:ring-2"
          />
        </label>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3f68]"
        >
          Cerca
        </button>
      </form>
      {hint ? <p className="text-sm text-zinc-600">{hint}</p> : null}
      {trimmedQuery && clearHref ? (
        <Link href={clearHref} className="inline-block text-sm font-semibold text-[#0f4c81] hover:underline">
          Rimuovi filtro
        </Link>
      ) : null}
    </div>
  );
}
