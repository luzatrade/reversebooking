"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const completeAuth = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error_description") ?? searchParams.get("error");

      if (error) {
        setErrorMessage(error);
        return;
      }

      if (!code) {
        setErrorMessage("Link di verifica non valido o scaduto. Richiedi un nuovo link di accesso.");
        return;
      }

      try {
        const supabase = createBrowserSupabaseClient();
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

        if (exchangeError) {
          setErrorMessage(exchangeError.message);
          return;
        }

        router.replace("/inserzionista/dashboard");
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Errore durante la verifica email.");
      }
    };

    void completeAuth();
  }, [router, searchParams]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {errorMessage ? (
          <>
            <p className="text-sm font-medium uppercase tracking-wide text-red-600">Verifica non completata</p>
            <h1 className="mt-3 text-2xl font-semibold">Il link non è stato accettato</h1>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{errorMessage}</p>
            <Link href="/login" className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
              Torna al login
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Verifica in corso</p>
            <h1 className="mt-3 text-2xl font-semibold">Stiamo confermando la tua email</h1>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Attendi qualche secondo. Verrai reindirizzato automaticamente.</p>
          </>
        )}
      </div>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<main className="p-8 text-center">Verifica in corso...</main>}>
      <AuthCallbackContent />
    </Suspense>
  );
}
