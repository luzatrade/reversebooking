"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { mapAuthLoginError } from "@/lib/auth/login-errors";
import { resolveLoginRole, roleFromUserMetadata } from "@/lib/auth/resolveLoginRole";
import { dashboardPathForRole, redirectAfterLogin } from "@/lib/auth/redirectAfterLogin";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

function AuthCallbackContent() {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const completeAuth = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error_description") ?? searchParams.get("error");
      const next = searchParams.get("next");
      if (error) {
        setErrorMessage(mapAuthLoginError(error, locale));
        return;
      }
      try {
        const supabase = createBrowserSupabaseClient();
        if (code) {
          const { data: exchangeData, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) {
            setErrorMessage(mapAuthLoginError(exchangeError.message, locale));
            return;
          }

          const user = exchangeData.session?.user ?? exchangeData.user;
          const token = exchangeData.session?.access_token;
          if (token) {
            await fetch("/api/auth/complete-profile", {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
            });
          }

          if (!user) {
            router.replace("/login");
            return;
          }

          const metaRole = roleFromUserMetadata(user);
          const onboardingHotelId =
            typeof user.user_metadata?.onboarding_hotel_id === "string"
              ? user.user_metadata.onboarding_hotel_id
              : null;
          if (metaRole) {
            redirectAfterLogin(
              next ||
                (metaRole === "hotel" && onboardingHotelId
                  ? "/struttura/profilo?claim=1"
                  : dashboardPathForRole(metaRole)),
            );
            return;
          }

          const role = await resolveLoginRole(supabase, user);
          redirectAfterLogin(next || dashboardPathForRole(role ?? undefined));
          return;
        }

        const tokenHash = searchParams.get("token_hash");
        const tokenType = searchParams.get("type");
        if (tokenHash) {
          const otpType =
            tokenType === "signup" || tokenType === "email" || tokenType === "magiclink"
              ? tokenType
              : "email";
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: otpType,
          });
          if (verifyError) {
            setErrorMessage(mapAuthLoginError(verifyError.message, locale));
            return;
          }

          const { data: sessionData } = await supabase.auth.getSession();
          const user = sessionData.session?.user;
          const accessToken = sessionData.session?.access_token;
          if (accessToken) {
            await fetch("/api/auth/complete-profile", {
              method: "POST",
              headers: { Authorization: `Bearer ${accessToken}` },
            });
          }

          if (!user) {
            router.replace("/login");
            return;
          }

          const metaRole = roleFromUserMetadata(user);
          redirectAfterLogin(next || dashboardPathForRole(metaRole ?? undefined));
          return;
        }

        const { data: sessionData } = await supabase.auth.getSession();
        const user = sessionData.session?.user;
        if (!user) {
          router.replace("/login");
          return;
        }

        const role = roleFromUserMetadata(user) ?? (await resolveLoginRole(supabase, user));
        redirectAfterLogin(next || dashboardPathForRole(role ?? undefined));
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : t.auth.callbackGenericError);
      }
    };
    void completeAuth();
  }, [locale, router, searchParams, t.auth.callbackGenericError]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {errorMessage ? (
          <>
            <p className="text-sm font-medium uppercase tracking-wide text-red-600">{t.auth.callbackFailedLabel}</p>
            <h1 className="mt-3 text-2xl font-semibold">{t.auth.callbackFailedTitle}</h1>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{errorMessage}</p>
            <Link
              href="/login"
              className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950"
            >
              {t.auth.backToLogin}
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.auth.callbackInProgressLabel}</p>
            <h1 className="mt-3 text-2xl font-semibold">{t.auth.callbackInProgressTitle}</h1>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{t.auth.callbackInProgressHint}</p>
          </>
        )}
      </div>
    </main>
  );
}

function AuthCallbackFallback() {
  const { t } = useLanguage();
  return (
    <main className="p-8 text-center">
      {t.auth.callbackInProgressLabel}...
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<AuthCallbackFallback />}>
      <AuthCallbackContent />
    </Suspense>
  );
}
