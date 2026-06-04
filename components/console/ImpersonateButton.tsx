"use client";

import { useState } from "react";

type Props = {
  userId: string;
  label?: string;
};

export function ImpersonateButton({ userId, label }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleImpersonate() {
    setLoading(true);
    const res = await fetch("/api/admin/impersonate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error ?? "Errore");
      setLoading(false);
      return;
    }

    if (data.redirectUrl) {
      window.location.assign(data.redirectUrl);
      return;
    }

    alert("Link non generato");
    setLoading(false);
  }

  return (
    <button
      type="button"
      onClick={handleImpersonate}
      disabled={loading}
      className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100 disabled:opacity-50"
    >
      {loading ? "..." : label ?? "Entra come"}
    </button>
  );
}
