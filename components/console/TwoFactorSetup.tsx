"use client";

import { useCallback, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type Status = "loading" | "off" | "enrolling" | "on";

export function TwoFactorSetup() {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [factorId, setFactorId] = useState<string | null>(null);
  const [code, setCode] = useState("");

  const refresh = useCallback(async () => {
    try {
      const supabase = createBrowserSupabaseClient();
      const { data, error: listError } = await supabase.auth.mfa.listFactors();
      if (listError) throw listError;
      const verified = data?.totp?.find((f) => f.status === "verified");
      if (verified) {
        setFactorId(verified.id);
        setStatus("on");
      } else {
        setStatus("off");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore nel caricamento dello stato 2FA.");
      setStatus("off");
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const startEnroll = async () => {
    setBusy(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      // Rimuovi eventuali fattori non verificati rimasti da tentativi precedenti.
      const { data: existing } = await supabase.auth.mfa.listFactors();
      for (const f of existing?.totp ?? []) {
        if (f.status !== "verified") await supabase.auth.mfa.unenroll({ factorId: f.id });
      }
      const { data, error: enrollError } = await supabase.auth.mfa.enroll({
        factorType: "totp",
        friendlyName: `TOTP ${new Date().toISOString().slice(0, 16)}`,
      });
      if (enrollError || !data) throw enrollError ?? new Error("Enroll fallito");
      setFactorId(data.id);
      setQrCode(data.totp.qr_code);
      setSecret(data.totp.secret);
      setCode("");
      setStatus("enrolling");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossibile avviare l'attivazione.");
    } finally {
      setBusy(false);
    }
  };

  const verifyEnroll = async () => {
    if (!factorId) return;
    setBusy(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({ factorId });
      if (challengeError || !challenge) throw challengeError ?? new Error("Challenge fallita");
      const { error: verifyError } = await supabase.auth.mfa.verify({
        factorId,
        challengeId: challenge.id,
        code: code.trim(),
      });
      if (verifyError) {
        setError("Codice non valido o scaduto. Riprova.");
        return;
      }
      setQrCode(null);
      setSecret(null);
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verifica non riuscita.");
    } finally {
      setBusy(false);
    }
  };

  const disable = async () => {
    if (!factorId) return;
    if (!window.confirm("Disattivare l'autenticazione a due fattori per questo account?")) return;
    setBusy(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: unenrollError } = await supabase.auth.mfa.unenroll({ factorId });
      if (unenrollError) throw unenrollError;
      setFactorId(null);
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossibile disattivare il 2FA.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-xl rounded-2xl border border-zinc-200 bg-white p-6">
      {error ? (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      ) : null}

      {status === "loading" ? <p className="text-sm text-zinc-500">Caricamento…</p> : null}

      {status === "off" ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <p className="text-sm font-medium text-zinc-700">2FA non attivo</p>
          </div>
          <p className="text-sm text-zinc-600">
            Aggiungi un secondo fattore (app di autenticazione TOTP come Google Authenticator, 1Password, Authy) per
            proteggere l&apos;accesso al pannello.
          </p>
          <button
            onClick={startEnroll}
            disabled={busy}
            className="rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d4373] disabled:opacity-60"
          >
            {busy ? "Attendere…" : "Attiva 2FA"}
          </button>
        </div>
      ) : null}

      {status === "enrolling" ? (
        <div className="space-y-4">
          <p className="text-sm text-zinc-700">
            1. Scansiona il QR con la tua app di autenticazione (oppure inserisci la chiave manuale).
          </p>
          {qrCode ? (
            <div
              className="inline-block rounded-xl border border-zinc-200 bg-white p-3 [&_svg]:h-44 [&_svg]:w-44"
              // qr_code è un markup SVG generato da Supabase
              dangerouslySetInnerHTML={{ __html: qrCode }}
            />
          ) : null}
          {secret ? (
            <p className="text-xs text-zinc-500">
              Chiave manuale: <span className="font-mono text-zinc-700">{secret}</span>
            </p>
          ) : null}
          <p className="text-sm text-zinc-700">2. Inserisci il codice a 6 cifre per confermare.</p>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="000000"
            className="w-40 rounded-xl border border-zinc-300 px-4 py-2.5 text-center text-lg tracking-[0.3em] outline-none focus:border-zinc-900"
          />
          <div className="flex gap-3">
            <button
              onClick={verifyEnroll}
              disabled={busy || code.trim().length < 6}
              className="rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d4373] disabled:opacity-60"
            >
              {busy ? "Verifica…" : "Conferma e attiva"}
            </button>
            <button
              onClick={() => {
                setStatus("off");
                setQrCode(null);
                setSecret(null);
              }}
              disabled={busy}
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Annulla
            </button>
          </div>
        </div>
      ) : null}

      {status === "on" ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <p className="text-sm font-medium text-emerald-700">2FA attivo</p>
          </div>
          <p className="text-sm text-zinc-600">
            Al prossimo accesso ti verrà richiesto il codice dell&apos;app di autenticazione.
          </p>
          <button
            onClick={disable}
            disabled={busy}
            className="rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
          >
            {busy ? "Attendere…" : "Disattiva 2FA"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
