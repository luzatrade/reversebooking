"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function GlobalTopControls() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadUser() {
      const supabase = createBrowserSupabaseClient();
      const { data } = await supabase.auth.getUser();
      if (!active) return;
      setUserId(data.user?.id ?? null);
      setLoading(false);
    }

    void loadUser();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="fixed right-4 top-3 z-[10000] flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-1.5 rounded-full border border-zinc-200 bg-white/95 p-1 shadow-sm backdrop-blur">
      <LanguageSwitcher />
      <CurrencySwitcher />
      {!loading && !userId ? (
        <>
          <Link href="/login" className="inline-flex h-8 items-center rounded-full border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 shadow-sm">
            Login
          </Link>
          <Link href="/register" className="inline-flex h-8 items-center rounded-full bg-[#0f4c81] px-3 text-xs font-semibold text-white shadow-sm">
            Registrati
          </Link>
        </>
      ) : null}
    </div>
  );
}
