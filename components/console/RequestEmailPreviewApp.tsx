"use client";

import { useState } from "react";
import type { RequestEmailPreviewVariant } from "@/lib/console/request-email-previews";

export function RequestEmailPreviewApp({ previews }: { previews: RequestEmailPreviewVariant[] }) {
  const [activeId, setActiveId] = useState(previews[0]?.id ?? "partner-citta");
  const active = previews.find((p) => p.id === activeId) ?? previews[0];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-xl font-bold text-zinc-900 sm:text-2xl">Anteprima email richieste</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Stessi template e dati di esempio dello script{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">preview-request-emails</code>. Puoi
          installare questa pagina sulla schermata Home del telefono per controllare le modifiche senza aprire file
          HTML locali.
        </p>
        <PwaInstallHints />
      </div>

      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Varianti email"
      >
        {previews.map((preview) => (
          <button
            key={preview.id}
            type="button"
            role="tab"
            aria-selected={preview.id === activeId}
            onClick={() => setActiveId(preview.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
              preview.id === activeId
                ? "bg-[#0f4c81] text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {preview.label}
          </button>
        ))}
      </div>

      {active ? (
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="border-b border-zinc-100 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
            <div className="font-medium text-zinc-800">{active.audience}</div>
            <div className="mt-1 text-xs sm:text-sm">
              <span className="font-semibold text-zinc-700">Oggetto:</span> {active.subject}
            </div>
          </div>
          <iframe
            title={active.subject}
            srcDoc={active.documentHtml}
            className="block h-[min(72vh,720px)] w-full border-0 bg-white"
            sandbox="allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      ) : null}
    </div>
  );
}

function PwaInstallHints() {
  return (
    <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/80 p-3 text-sm text-blue-950">
      <p className="font-semibold">Aggiungi alla Home</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-relaxed">
        <li>
          <strong>Android (Chrome):</strong> menu ⋮ → <em>Aggiungi a schermata Home</em> o{" "}
          <em>Installa app</em>.
        </li>
        <li>
          <strong>iPhone (Safari):</strong> icona Condividi → <em>Aggiungi a Home</em>.
        </li>
        <li>
          Serve login admin console: la PWA apre direttamente questa anteprima dopo l’accesso.
        </li>
      </ul>
    </div>
  );
}
