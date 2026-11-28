"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  labels: {
    sendOne: string;
    applySchema: string;
    working: string;
    done: string;
    error: string;
  };
};

export function GoogleIndexingPanel({ labels }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<"tick" | "schema" | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function post(path: string) {
    setLoading(path === "/api/admin/google-indexing/tick" ? "tick" : "schema");
    setMessage(null);
    setError(null);
    try {
      const res = await fetch(path, { method: "POST", credentials: "include" });
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string; url?: string; skipped?: boolean };
      if (!res.ok) throw new Error(data.error ?? labels.error);
      if (data.skipped) {
        setMessage(data.message ?? labels.done);
      } else if (data.url) {
        setMessage(`${labels.done}: ${data.url}`);
      } else {
        setMessage(data.message ?? labels.done);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : labels.error);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        disabled={loading !== null}
        onClick={() => post("/api/admin/google-indexing/tick")}
        className="rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d3d66] disabled:opacity-60"
      >
        {loading === "tick" ? labels.working : labels.sendOne}
      </button>
      <button
        type="button"
        disabled={loading !== null}
        onClick={() => post("/api/admin/google-indexing/schema")}
        className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-[#0f4c81]/40 disabled:opacity-60"
      >
        {loading === "schema" ? labels.working : labels.applySchema}
      </button>
      {message ? <p className="text-sm text-emerald-700">{message}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}