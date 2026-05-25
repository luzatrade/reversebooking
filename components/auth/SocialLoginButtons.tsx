"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type Provider = "google" | "apple" | "azure";

export function SocialLoginButtons() {
  const { t } = useLanguage();
  const labels: Record<Provider, string> = {
    google: t.auth.socialGoogle,
    apple: t.auth.socialApple,
    azure: t.auth.socialMicrosoft,
  };
  const [loading, setLoading] = useState<Provider | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function login(provider: Provider) {
    setLoading(provider);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const origin = window.location.origin;
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${origin}/auth/callback` },
      });
      if (signInError) setError(signInError.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.auth.socialUnavailable);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="mt-8 space-y-3">
      {(Object.keys(labels) as Provider[]).map((provider) => (
        <button
          key={provider}
          type="button"
          onClick={() => login(provider)}
          disabled={Boolean(loading)}
          className="w-full rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-50 disabled:opacity-60"
        >
          {loading === provider ? t.auth.socialOpening : labels[provider]}
        </button>
      ))}
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
    </div>
  );
}
