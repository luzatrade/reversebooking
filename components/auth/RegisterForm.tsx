"use client";

import { useState } from "react";
import Link from "next/link";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";
import { majorWorldCities } from "@/lib/constants/world-cities";

type AccountKind = "inserzionista" | "struttura";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountKind, setAccountKind] = useState<AccountKind>("inserzionista");
  const [cityIndex, setCityIndex] = useState(0);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!terms || !privacy) {
      setError("È necessario accettare Termini e Privacy per registrarsi.");
      return;
    }

    const selectedCity = majorWorldCities[cityIndex];

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          accountKind,
          hotelCity: accountKind === "struttura" ? selectedCity : undefined,
          termsAccepted: terms,
          privacyAccepted: privacy,
          marketingAccepted: marketing,
          termsVersion: TERMS_VERSION,
          privacyVersion: PRIVACY_VERSION,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        consentStored?: boolean;
        detail?: string;
      };

      if (!res.ok) {
        setError(data.error ?? "Registrazione non riuscita.");
        return;
      }

      setMessage("Registrazione completata. Ora puoi accedere dalla pagina Login con email e password.");
    } catch {
      setError("Errore di rete. Riprova.");
    } finally {
      setLoading(false);
    }
  }

  const canSubmit = terms && privacy && email.length > 3 && password.length >= 8;

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-lg space-y-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Password (min. 8 caratteri)
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Tipo account</legend>
        <div className="mt-2 flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accountKind"
              value="inserzionista"
              checked={accountKind === "inserzionista"}
              onChange={() => setAccountKind("inserzionista")}
            />
            Inserzionista (annunci gratuiti — nessuna fatturazione obbligatoria da piattaforma)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accountKind"
              value="struttura"
              checked={accountKind === "struttura"}
              onChange={() => setAccountKind("struttura")}
            />
            Struttura ricettiva (Hotel / B&B / Appartamento — abbonamento e fatturazione Stripe)
          </label>
        </div>
      </fieldset>

      {accountKind === "struttura" ? (
        <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Città principale della struttura
          <select
            value={cityIndex}
            onChange={(e) => setCityIndex(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
          >
            {majorWorldCities.map((city, index) => (
              <option key={city.city_id} value={index}>{city.label}</option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-zinc-500">La struttura riceverà annunci compatibili solo per questa città.</span>
        </label>
      ) : null}

      <div className="space-y-3 rounded-lg border border-zinc-100 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950/60">
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            required
            aria-required="true"
          />
          <span>
            Accetto i{" "}
            <Link href="/termini-e-condizioni" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Termini e Condizioni
            </Link>{" "}
            <span className="text-zinc-500">(versione {TERMS_VERSION})</span>
          </span>
        </label>
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            required
            aria-required="true"
          />
          <span>
            Ho letto la{" "}
            <Link href="/privacy-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Privacy Policy
            </Link>{" "}
            <span className="text-zinc-500">(versione {PRIVACY_VERSION})</span>
          </span>
        </label>
        <label className="flex gap-2">
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
          <span>Acconsento a ricevere comunicazioni promozionali (facoltativo)</span>
        </label>
      </div>

      {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      {message ? (
        <div className="space-y-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
          <p>{message}</p>
          <Link href="/login" className="inline-flex font-semibold underline">
            Vai al login
          </Link>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {loading ? "Invio in corso…" : "Crea account"}
      </button>
    </form>
  );
}
