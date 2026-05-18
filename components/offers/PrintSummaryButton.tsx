"use client";

export function PrintSummaryButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    >
      Stampa riepilogo
    </button>
  );
}
