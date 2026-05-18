"use client";

import { Printer} from "lucide-react";

type PrintSummaryButtonProps = {
  className?: string;
};

export function PrintSummaryButton({ className}: PrintSummaryButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 print:hidden ${className ?? ""}`}
    >
      <Printer className="h-4 w-4" />
      Stampa riepilogo
    </button>
  );
}
