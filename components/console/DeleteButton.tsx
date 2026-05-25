"use client";

import { useState } from "react";

type Props = {
  entity: "user" | "hotel" | "advertiser" | "request" | "offer" | "onboarding";
  id: string;
  label?: string;
};

export function DeleteButton({ entity, id, label }: Props) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(`Sei sicuro di voler eliminare questo elemento? Questa azione è irreversibile.`);
    if (!confirmed) return;

    setLoading(true);
    const res = await fetch("/api/admin/delete-entity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entity, id }),
    });

    if (res.ok) {
      setDone(true);
      window.location.reload();
    } else {
      const data = await res.json();
      alert(data.error ?? "Errore durante l'eliminazione");
    }
    setLoading(false);
  }

  if (done) return <span className="text-xs text-zinc-400">Eliminato</span>;

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
    >
      {loading ? "..." : label ?? "Elimina"}
    </button>
  );
}
