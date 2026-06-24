"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { dashboardPathForRole, redirectAfterLogin } from "@/lib/auth/redirectAfterLogin";
import { formatMessage } from "@/lib/i18n/format";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";
import { getStructureTypeLabels } from "@/lib/i18n/labels";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { type StructureType, type UserRole } from "@/types/app";

type AccountKind = "inserzionista" | "struttura" | "agenzia";

type RegisterResponse = {
  ok?: boolean;
  error?: string;
  role?: UserRole;
  session?: { access_token: string; refresh_token: string };
};

async function establishBrowserSession(email: string, password: string, session?: RegisterResponse["session"]) {
  const supabase = createBrowserSupabaseClient();

  if (session?.access_token && session.refresh_token) {
    const { error } = await supabase.auth.setSession({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    });
    if (!error) return true;
  }

  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  return !signInError;
}

export function RegisterForm() {
  const { locale, t } = useLanguage();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const searchParams = useSearchParams();
  const isPartner = searchParams.get("mode") === "partner";
  const onboardingId = searchParams.get("onboarding")?.trim() || "";
  const [claimingName, setClaimingName] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [accountKind, setAccountKind] = useState<AccountKind>(isPartner ? "struttura" : "inserzionista");
  const [structureType, setStructureType] = useState<StructureType>("hotel");
  const [legalAccepted, setLegalAccepted] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!onboardingId) {
      setClaimingName(null);
      return;
    }
    let active = true;
    async function loadClaimTarget() {
      try {
        const supabase = createBrowserSupabaseClient();
        const { data } = await supabase
          .from("onboarding_hotels")
          .select("nome, status")
          .eq("id", onboardingId)
          .maybeSingle();
        if (!active) return;
        if (data?.nome && data.status !== "claimed") {
          setClaimingName(data.nome);
        } else {
          setClaimingName(null);
        }
      } catch {
        if (active) setClaimingName(null);
      }
    }
    void loadClaimTarget();
    return () => {
      active = false;
    };
  }, [onboardingId]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!legalAccepted) {
      setError(t.auth.registerLegalRequired);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          accountKind,
          structureType: accountKind === "struttura" ? structureType : undefined,
          legalAccepted: true,
          termsAccepted: true,
          privacyAccepted: true,
          marketingAccepted: marketing,
          termsVersion: TERMS_VERSION,
          privacyVersion: PRIVACY_VERSION,
          onboardingId: onboardingId || undefined,
        }),
      });
      const data = (await res.json()) as RegisterResponse & { detail?: string; emailConfirmationRequired?: boolean };

      if (!res.ok) {
        setError(data.error ?? t.auth.registerFailed);
        return;
      }

      const role = data.role;
      if (!role) {
        setError(t.auth.registerFailed);
        return;
      }

      if (data.emailConfirmationRequired) {
        setMessage("Registrazione completata! Controlla la tua casella email e clicca il link di conferma per attivare il tuo account.");
        return;
      }

      const sessionReady = await establishBrowserSession(email, password, data.session);
      if (!sessionReady) {
        setMessage(t.auth.registerSuccess);
        return;
      }

      redirectAfterLogin(
        onboardingId && role === "hotel"
          ? "/struttura/profilo?claim=1"
          : dashboardPathForRole(role),
      );
    } catch {
      setError(t.auth.registerNetworkError);
    } finally {
      setLoading(false);
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const emailError = emailTouched && email.length > 0 && !emailRegex.test(email)
    ? (email.includes("@") ? t.auth.registerEmailInvalidFormat : t.auth.registerEmailMissingAt)
    : null;

  const canSubmit =
    legalAccepted &&
    emailRegex.test(email) &&
    password.length >= 10 &&
    /[A-Za-z]/.test(password) &&
    /[0-9]/.test(password);

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-lg space-y-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
        {isPartner ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {t.site.becomePartner}
            </p>
            <p className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {t.auth.registerPartnerHeading}
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-700">{t.auth.registerPartnerSubheading}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.auth.registerPartnerLead}</p>
            {claimingName ? (
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
                <p className="font-semibold">{formatMessage(t.auth.registerClaimBanner, { name: claimingName })}</p>
                <p className="mt-1 text-xs leading-5 text-amber-900/90 dark:text-amber-100/90">
                  {t.auth.registerClaimPhoneNote}
                </p>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {t.auth.registerTravelerQuestion}
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-700">{t.auth.registerTravelerTypes}</p>
            <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {t.auth.registerTravelerCta}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{t.auth.registerTravelerBenefit}</p>
          </>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {t.common.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (!emailTouched) setEmailTouched(true); }}
          onBlur={() => setEmailTouched(true)}
          className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:ring-2 dark:bg-zinc-950 dark:text-zinc-50 ${emailError ? "border-red-400 ring-red-300 dark:border-red-500" : "border-zinc-300 ring-zinc-400 dark:border-zinc-600"}`}
        />
        {emailError ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{emailError}</p> : null}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {t.auth.registerPasswordHint}
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

      {isPartner ? (
        <fieldset>
          <div className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="accountKind"
                value="struttura"
                checked={accountKind === "struttura"}
                onChange={() => setAccountKind("struttura")}
              />
              {t.auth.registerHotelOption}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="accountKind"
                value="agenzia"
                checked={accountKind === "agenzia"}
                onChange={() => setAccountKind("agenzia")}
              />
              {t.auth.registerAgencyOption}
            </label>
          </div>
        </fieldset>
      ) : null}

      {isPartner && accountKind === "struttura" ? (
        <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {t.auth.registerStructureType}
          <select
            value={structureType}
            onChange={(e) => setStructureType(e.target.value as StructureType)}
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
          >
            {Object.entries(structureTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {value === "bed_and_breakfast"
                  ? `${label} (${locale === "en" ? "Room rental" : "Affitta camere"})`
                  : label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-zinc-500">{t.auth.registerStructureTypeHint}</span>
        </label>
      ) : null}

      <div className="space-y-3 rounded-lg border border-zinc-100 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950/60">
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={legalAccepted}
            onChange={(e) => setLegalAccepted(e.target.checked)}
            required
            aria-required="true"
          />
          <span>
            {t.auth.registerAcceptTerms}{" "}
            <Link href="/termini-e-condizioni" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Termini e Condizioni
            </Link>{" "}
            e l&apos;
            <Link href="/privacy-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Informativa Privacy
            </Link>{" "}
            <span className="text-zinc-500">
              (v. {TERMS_VERSION} / {PRIVACY_VERSION})
            </span>
          </span>
        </label>
        <label className="flex gap-2">
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
          <span>{t.auth.registerMarketing}</span>
        </label>
      </div>

      {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      {message ? (
        <div className="space-y-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
          <p>{message}</p>
          <Link href="/login" className="inline-flex font-semibold underline">
            {t.common.goToLogin}
          </Link>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {loading ? t.auth.registerSubmitting : t.auth.registerSubmit}
      </button>
    </form>
  );
}
