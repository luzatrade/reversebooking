"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";

export function DownloadVoucherButton({ data }: { data: AcceptedBookingSummaryData }) {
  const { locale } = useLanguage();
  const [busy, setBusy] = useState(false);

  const label = locale === "en" ? "Download PDF" : "Scarica PDF";

  async function handleDownload() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/booking-voucher/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, locale }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Impossibile generare il PDF");
      }

      const blob = await res.blob();
      if (blob.size < 512) {
        throw new Error("Il file PDF risulta vuoto");
      }

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${locale === "en" ? "Booking-summary" : "Riepilogo-prenotazione"}-${data.requestCode}.pdf`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : locale === "en"
            ? "PDF download failed"
            : "Download PDF non riuscito";
      alert(message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={busy}
      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-60"
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
      {label}
    </button>
  );
}
