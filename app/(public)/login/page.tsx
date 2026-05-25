"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
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

  const showRegisterLink =
    errorMessage === loginMessages.notRegistered || errorMessage === loginMessages.invalidCredentials;

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
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", userId)
        .maybeSingle();

      if (profileError) {
        await supabase.auth.signOut();
        setErrorMessage(loginMessages.notRegistered);
        return;
      }

      if (!profile?.role) {
        await supabase.auth.signOut();
        setErrorMessage(loginMessages.notRegistered);
        return;
      }

      const role = profile.role as UserRole;
      const destination = redirectTo ?? dashboardPathForRole(role);
      redirectAfterLogin(destination);
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
        <SocialLoginButtons />
        <Box className="my-7 flex items-center gap-3 text-xs text-zinc-400">
          <span className="h-px flex-1 bg-zinc-200" />
          {t.common.or}
          <span className="h-px flex-1 bg-zinc-200" />
        </Box>
        <form onSubmit={handleSubmit} className="space-y-5">
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
