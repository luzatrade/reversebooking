"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUSES = ["pending_verification", "active", "suspended", "banned"] as const;

export function AccountStatusSelect({
  profileId,
  current,
  kind,
}: {
  profileId: string;
  current: string;
  kind: "profile" | "hotel";
}) {
  const router = useRouter();
  const [value, setValue] = useState(current);
  const [loading, setLoading] = useState(false);

  const onChange = async (next: string) => {
    setValue(next);
    setLoading(true);
    try {
      const endpoint =
        kind === "profile" ? "/api/admin/profile-status" : "/api/admin/hotel-status";
      const body =
        kind === "profile"
          ? { profileId, accountStatus: next }
          : { hotelAccountId: profileId, accountStatus: next };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Aggiornamento non riuscito");
      }
      router.refresh();
    } catch {
      setValue(current);
      alert("Impossibile aggiornare lo stato. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={value}
      disabled={loading}
      onChange={(e) => void onChange(e.target.value)}
      className="rounded-lg border border-zinc-300 bg-white px-2 py-1 text-xs font-medium text-zinc-800 disabled:opacity-50"
    >
      {STATUSES.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
