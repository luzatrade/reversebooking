"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { company } from "@/lib/legal/company";

type Props = {
  phone: string;
  verified: boolean;
  onVerified?: () => void;
};

async function authHeader() {
  const supabase = createBrowserSupabaseClient();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("Sessione non valida.");
  return `Bearer ${token}`;
}

export function HotelPhoneVerification({ phone, verified, onVerified }: Props) {
  const { t } = useLanguage();
  const cv = t.claimVerification;
  const [code, setCode] = useState("");
  const [calling, setCalling] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (verified) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        {cv.verifiedSuccess}
      </div>
    );
  }

  async function requestCall() {
    setCalling(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/phone/request-verification", {
        method: "POST",
        headers: { Authorization: await authHeader() },
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) throw new Error(data.error ?? cv.requestFailed);
      setMessage(cv.callStarted.replace("{phone}", phone));
    } catch (err) {
      setError(err instanceof Error ? err.message : cv.requestFailed);
    } finally {
      setCalling(false);
    }
  }

  async function confirmCode(event: React.FormEvent) {
    event.preventDefault();
    setConfirming(true);
    setError(null);
    try {
      const res = await fetch("/api/phone/confirm-verification", {
        method: "POST",
        headers: { Authorization: await authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) throw new Error(data.error ?? cv.confirmFailed);
      setMessage(cv.verifiedSuccess);
      onVerified?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : cv.confirmFailed);
    } finally {
      setConfirming(false);
    }
  }

  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50/90 p-5">
      <div className="flex items-start gap-3">
        <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-amber-950">{cv.title}</h2>
          <p className="mt-2 text-sm leading-6 text-amber-950/90">{cv.intro}</p>
          <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-sm font-semibold text-zinc-900">
            {cv.phoneLabel}: {phone}
          </p>
          <p className="mt-2 text-xs leading-5 text-amber-900/80">{cv.callHint}</p>

          <button
            type="button"
            onClick={() => void requestCall()}
            disabled={calling}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0d4373] disabled:opacity-60"
          >
            {calling ? cv.calling : cv.requestCall}
          </button>

          <form onSubmit={(event) => void confirmCode(event)} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="block flex-1 text-sm font-medium text-amber-950">
              {cv.codeLabel}
              <input
                value={code}
                onChange={(event) => setCode(event.target.value)}
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="123456"
                className="mt-2 w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm text-zinc-900"
              />
            </label>
            <button
              type="submit"
              disabled={confirming || code.trim().length < 4}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:opacity-60"
            >
              {confirming ? cv.confirming : cv.confirmCode}
            </button>
          </form>

          {message ? <p className="mt-3 text-sm text-emerald-800">{message}</p> : null}
          {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

          <p className="mt-4 text-xs leading-5 text-amber-900/90">
            {cv.supportHint}{" "}
            <Link href={`mailto:${company.supportEmail}`} className="font-semibold underline">
              {company.supportEmail}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
