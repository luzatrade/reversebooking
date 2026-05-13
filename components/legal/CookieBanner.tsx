"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_POLICY_VERSION } from "@/lib/legal/company";

export const COOKIE_STORAGE_KEY = "reverse_booking_cookie_consent_v1";

export type StoredCookieConsent = {
  policyVersion: string;
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  acceptedAt: string;
};

function readStored(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (parsed && typeof parsed === "object" && parsed.necessary === true) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [prefs, setPrefs] = useState({ preferences: false, analytics: false });

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
      setVisible(!readStored());
    });
  }, []);

  const persist = useCallback((preferences: boolean, analytics: boolean) => {
    const payload: StoredCookieConsent = {
      policyVersion: COOKIE_POLICY_VERSION,
      necessary: true,
      preferences,
      analytics,
      acceptedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
    setVisible(false);
    setCustomOpen(false);
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/40 sm:p-5"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-2">
            <h2
              id="cookie-banner-title"
              className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
            >
              Utilizzo dei cookie
            </h2>
            <p id="cookie-banner-desc" className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Utilizziamo cookie tecnici e di autenticazione necessari al funzionamento del portale. Con il tuo
              consenso possiamo attivare preferenze e, in futuro, strumenti di analisi aggregata. Per i dettagli
              consulta la{" "}
              <Link href="/cookie-policy" className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              onClick={() => {
                setPrefs({ preferences: false, analytics: false });
                setCustomOpen(true);
              }}
            >
              Personalizza
            </button>
            <button
              type="button"
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              onClick={() => persist(false, false)}
            >
              Rifiuta non necessari
            </button>
            <button
              type="button"
              className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              onClick={() => persist(true, true)}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
      {customOpen ? (
        <CookieCustomizeModal
          prefs={prefs}
          setPrefs={setPrefs}
          onClose={() => setCustomOpen(false)}
          onSave={() => persist(prefs.preferences, prefs.analytics)}
        />
      ) : null}
    </>
  );
}

function CookieCustomizeModal({
  prefs,
  setPrefs,
  onClose,
  onSave,
}: {
  prefs: { preferences: boolean; analytics: boolean };
  setPrefs: (p: { preferences: boolean; analytics: boolean }) => void;
  onClose: () => void;
  onSave: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-950"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-custom-title"
      >
        <h3 id="cookie-custom-title" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Preferenze cookie
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          I cookie tecnici e di autenticazione restano attivi perché necessari. Puoi attivare o disattivare le
          altre categorie qui sotto.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start justify-between gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Necessari</p>
              <p className="text-xs text-zinc-500">Sempre attivi</p>
            </div>
            <span className="text-xs font-semibold uppercase text-zinc-400">On</span>
          </li>
          <li className="flex items-start justify-between gap-4 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Preferenze</p>
              <p className="text-xs text-zinc-500">Lingua, impostazioni interfaccia, ecc.</p>
            </div>
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-zinc-300"
              checked={prefs.preferences}
              onChange={(e) => setPrefs({ ...prefs, preferences: e.target.checked })}
              aria-label="Consenti cookie preferenze"
            />
          </li>
          <li className="flex items-start justify-between gap-4 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Analytics (futuri)</p>
              <p className="text-xs text-zinc-500">Statistiche aggregate, attivabili in seguito.</p>
            </div>
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-zinc-300"
              checked={prefs.analytics}
              onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
              aria-label="Consenti cookie analytics"
            />
          </li>
        </ul>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
            onClick={onClose}
          >
            Annulla
          </button>
          <button
            type="button"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
            onClick={onSave}
          >
            Salva preferenze
          </button>
        </div>
      </div>
    </div>
  );
}
