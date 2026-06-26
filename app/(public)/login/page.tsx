"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getLoginMessages, mapAuthLoginError } from "@/lib/auth/login-errors";
import { resolveLoginRole, roleFromUserMetadata } from "@/lib/auth/resolveLoginRole";
import { dashboardPathForRole, redirectAfterLogin } from "@/lib/auth/redirectAfterLogin";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

function safeRedirectPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

function LoginErrorBanner({
  message,
  showRegisterLink,
  registerLinkLabel,
  registerHref = "/registrazione",
}: {
  message: string;
  showRegisterLink?: boolean;
  registerLinkLabel: string;
  registerHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <p>{message}</p>
      {showRegisterLink ? (
        <Link href={registerHref} className="mt-2 inline-block font-semibold text-red-900 underline">
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
  const mfaParam = searchParams.get("mfa") === "1";
  const redirectTo = safeRedirectPath(searchParams.get("redirect"));
  const isOfferLogin = Boolean(redirectTo?.startsWith("/struttura/annunci/"));
  const isTravelRequestLogin = Boolean(redirectTo?.startsWith("/inserzionista/crea-annuncio"));
  const partnerRegisterHref = redirectTo
    ? `/registrazione?mode=partner&redirect=${encodeURIComponent(redirectTo)}`
    : "/registrazione?mode=partner";
  const travelerRegisterHref = redirectTo
    ? `/registrazione?redirect=${encodeURIComponent(redirectTo)}`
    : "/registrazione";
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

  const finishLogin = async (supabase: ReturnType<typeof createBrowserSupabaseClient>, user: User) => {
    const role = roleFromUserMetadata(user) ?? (await resolveLoginRole(supabase, user));
    if (!role) {
      await supabase.auth.signOut();
      setErrorMessage(loginMessages.notRegistered);
      return;
    }

    redirectAfterLogin(redirectTo ?? dashboardPathForRole(role));
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
      const user = data.user;
      if (!user) {
        setErrorMessage(t.auth.loginIncomplete);
        return;
      }

      // MFA check only when redirected from server guard (?mfa=1), not on every password login.
      if (mfaParam) {
        try {
          const { data: factors } = await supabase.auth.mfa.listFactors();
          const totp = factors?.totp?.find((f) => f.status === "verified") ?? factors?.totp?.[0];
          if (totp) {
            const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
            if (aal?.currentLevel === "aal1" && aal?.nextLevel === "aal2") {
              setMfaFactorId(totp.id);
              setMfaUserId(user.id);
              setMfaRequired(true);
              return;
            }
          }
        } catch {
          // prosegui col login normale
        }
      }

      await finishLogin(supabase, user);
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
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) {
        setErrorMessage(t.auth.loginIncomplete);
        return;
      }
      await finishLogin(supabase, authData.user);
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
        <p className="mt-3 text-sm text-zinc-600">
          {isOfferLogin
            ? t.auth.loginOfferSubtitle
            : isTravelRequestLogin
              ? t.auth.loginTravelRequestSubtitle
              : t.auth.loginSubtitle}
        </p>
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
                  registerLinkLabel={
                    isOfferLogin ? t.site.becomePartner : isTravelRequestLogin ? t.common.register : t.auth.goToRegistration
                  }
                  registerHref={
                    isOfferLogin ? partnerRegisterHref : isTravelRequestLogin ? travelerRegisterHref : "/registrazione"
                  }
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
              {isOfferLogin ? (
                <>
                  {t.auth.noPartnerAccountYet}{" "}
                  <Link href={partnerRegisterHref} className="font-semibold text-zinc-950 underline">
                    {t.site.becomePartner}
                  </Link>
                </>
              ) : isTravelRequestLogin ? (
                <>
                  {t.auth.noAccountYet}{" "}
                  <Link href={travelerRegisterHref} className="font-semibold text-zinc-950 underline">
                    {t.common.register}
                  </Link>
                </>
              ) : (
                <>
                  {t.auth.noAccount}{" "}
                  <Link href="/registrazione" className="font-semibold text-zinc-950 underline">
                    {t.common.register}
                  </Link>
                </>
              )}
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
