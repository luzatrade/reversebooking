"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getLoginMessages, mapAuthLoginError } from "@/lib/auth/login-errors";
import { dashboardPathForRole, redirectAfterLogin } from "@/lib/auth/redirectAfterLogin";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

function safeRedirectPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

function LoginErrorBanner({
  message,
  showRegisterLink,
  registerLinkLabel,
}: {
  message: string;
  showRegisterLink?: boolean;
  registerLinkLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <p>{message}</p>
      {showRegisterLink ? (
        <Link href="/registrazione" className="mt-2 inline-block font-semibold text-red-900 underline">
          {registerLinkLabel}
        </Link>
      ) : null}
    </div>
  );
}

function LoginPageContent() {
  const { locale, t } = useLanguage();
  const loginMessages = getLoginMessages(locale);
  const searchParams = useSearchParams();
  const redirectTo = safeRedirectPath(searchParams.get("redirect"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mfaRequired, setMfaRequired] = useState(false);
  const [mfaFactorId, setMfaFactorId] = useState<string | null>(null);
  const [mfaUserId, setMfaUserId] = useState<string | null>(null);
  const [mfaCode, setMfaCode] = useState("");

  const showRegisterLink =
    errorMessage === loginMessages.notRegistered || errorMessage === loginMessages.invalidCredentials;

  const finishLogin = async (supabase: ReturnType<typeof createBrowserSupabaseClient>, userId: string) => {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", userId)
      .maybeSingle();

    if (profileError || !profile?.role) {
      await supabase.auth.signOut();
      setErrorMessage(loginMessages.notRegistered);
      return;
    }

    const role = profile.role as UserRole;
    const destination = redirectTo ?? dashboardPathForRole(role);
    redirectAfterLogin(destination);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMessage(mapAuthLoginError(error.message, locale));
        return;
      }
      const userId = data.user?.id;
      if (!userId) {
        setErrorMessage(t.auth.loginIncomplete);
        return;
      }

      // Se l'utente ha un secondo fattore (TOTP) verificato, richiedi il codice
      // prima di completare l'accesso. Fail-open: se questo controllo fallisce
      // si prosegue col login normale, per non bloccare gli utenti.
      try {
        const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
        if (aal?.currentLevel === "aal1" && aal?.nextLevel === "aal2") {
          const { data: factors } = await supabase.auth.mfa.listFactors();
          const totp = factors?.totp?.find((f) => f.status === "verified") ?? factors?.totp?.[0];
          if (totp) {
            setMfaFactorId(totp.id);
            setMfaUserId(userId);
            setMfaRequired(true);
            return;
          }
        }
      } catch {
        // prosegui col login normale
      }

      await finishLogin(supabase, userId);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t.auth.loginGenericError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMfaSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mfaFactorId || !mfaUserId) return;
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({
        factorId: mfaFactorId,
      });
      if (challengeError || !challenge) {
        setErrorMessage(t.auth.mfaError);
        return;
      }
      const { error: verifyError } = await supabase.auth.mfa.verify({
        factorId: mfaFactorId,
        challengeId: challenge.id,
        code: mfaCode.trim(),
      });
      if (verifyError) {
        setErrorMessage(t.auth.mfaInvalidCode);
        return;
      }
      await finishLogin(supabase, mfaUserId);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t.auth.loginGenericError);
    } finally {
      setIsLoading(false);
    }
  };

  const Box = "div" as const;

  return (
    <Box className="mx-auto flex min-h-[75vh] max-w-md flex-col justify-center px-4 py-16">
      <Box className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.auth.accessLabel}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">{t.auth.loginTitle}</h1>
        <p className="mt-3 text-sm text-zinc-600">{t.auth.loginSubtitle}</p>
        {mfaRequired ? (
          <form onSubmit={handleMfaSubmit} className="mt-6 space-y-5">
            <p className="text-sm text-zinc-600">{t.auth.mfaPrompt}</p>
            <Box>
              <label htmlFor="mfa-code" className="text-sm font-medium text-zinc-800">
                {t.auth.mfaCodeLabel}
              </label>
              <input
                id="mfa-code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={mfaCode}
                onChange={(event) => setMfaCode(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-center text-lg tracking-[0.4em] text-zinc-900 outline-none transition focus:border-zinc-900"
                placeholder="000000"
              />
            </Box>
            {errorMessage ? (
              <LoginErrorBanner
                message={errorMessage}
                showRegisterLink={false}
                registerLinkLabel={t.auth.goToRegistration}
              />
            ) : null}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? t.auth.signingIn : t.auth.mfaVerify}
            </button>
          </form>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <Box>
                <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                  {t.common.email}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder={t.auth.emailPlaceholder}
                />
              </Box>
              <Box>
                <label htmlFor="password" className="text-sm font-medium text-zinc-800">
                  {t.common.password}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder={t.auth.passwordPlaceholder}
                />
              </Box>
              {errorMessage ? (
                <LoginErrorBanner
                  message={errorMessage}
                  showRegisterLink={showRegisterLink}
                  registerLinkLabel={t.auth.goToRegistration}
                />
              ) : null}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? t.auth.signingIn : t.auth.signIn}
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-zinc-600">
              {t.auth.noAccount}{" "}
              <Link href="/registrazione" className="font-semibold text-zinc-950 underline">
                {t.common.register}
              </Link>
            </p>
          </>
        )}
      </Box>
    </Box>
  );
}

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[75vh] max-w-md items-center justify-center px-4 py-16 text-sm text-zinc-500">
          {t.common.loading}
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
