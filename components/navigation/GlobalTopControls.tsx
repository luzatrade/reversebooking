"use client";

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

function dashboardHref(role: UserRole | null) {
  if (role === "hotel") return "/struttura/dashboard";
  if (role === "advertiser") return "/inserzionista/dashboard";
  if (role === "admin") return "/admin";
  return "/login";
}

export function GlobalTopControls() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    let active = true;

    async function loadUser() {
      const supabase = createBrowserSupabaseClient();
      const { data } = await supabase.auth.getUser();
      if (!active) return;

      if (!data.user) {
        setUserId(null);
        setRole(null);
        setLoading(false);
        return;
      }

      setUserId(data.user.id);
      const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", data.user.id).maybeSingle();
      const profileRole = profile?.role === "hotel" || profile?.role === "advertiser" || profile?.role === "admin" ? profile.role : null;
      setRole(profileRole);
      setLoading(false);
    }

    void loadUser();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="fixed right-4 top-20 z-[10000] flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-2 rounded-full border border-zinc-200 bg-white/95 p-1.5 shadow-lg backdrop-blur">
      <LanguageSwitcher />
      <CurrencySwitcher />
      {!loading && userId ? (
        <Link href={dashboardHref(role)} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>
      ) : null}
      {!loading && !userId ? (
        <>
          <Link href="/login" className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            Login
          </Link>
          <Link href="/register" className="rounded-full bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white shadow-sm">
            Registrati
          </Link>
        </>
      ) : null}
    </div>
  );
}
