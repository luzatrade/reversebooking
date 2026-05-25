"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUSES = ["active", "expired", "deleted", "completed"] as const;

export function RequestStatusSelect({
  requestId,
  current,
}: {
  requestId: string;
  current: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(current);
  const [loading, setLoading] = useState(false);

  const onChange = async (next: string) => {
    setValue(next);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/request-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId, status: next }),
      });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      setValue(current);
      alert("Impossibile aggiornare lo stato annuncio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={value}
      disabled={loading}
      onChange={(e) => void onChange(e.target.value)}
      className="rounded-lg border border-zinc-300 bg-white px-2 py-1 text-xs font-medium"
    >
      {STATUSES.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
