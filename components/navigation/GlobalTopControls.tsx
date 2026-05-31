"use client";

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { TopbarControlsMenu } from "@/components/navigation/TopbarControlsMenu";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";
import { topbarAuthLinkClass, topbarAuthPrimaryClass } from "@/components/navigation/topbarStyles";

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
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", data.user.id)
        .maybeSingle();
      const profileRole =
        profile?.role === "hotel" || profile?.role === "advertiser" || profile?.role === "admin"
          ? profile.role
          : null;
      setRole(profileRole);
      setLoading(false);
    }

    void loadUser();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="fixed right-3 top-16 z-[10000] sm:right-4 sm:top-[4.25rem]">
      <TopbarControlsMenu desktopClassName="rounded-full border border-zinc-200 bg-white/95 p-1 shadow-lg backdrop-blur">
        <LanguageSwitcher compact />
        <CurrencySwitcher compact />
        {!loading && userId ? (
          <>
            <Link href={dashboardHref(role)} className={topbarAuthLinkClass}>
              <LayoutDashboard className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <LogoutButton variant="topbar" />
          </>
        ) : null}
        {!loading && !userId ? (
          <>
            <Link href="/login" className={topbarAuthLinkClass}>
              Login
            </Link>
            <Link href="/registrazione?mode=partner" className={topbarAuthLinkClass}>
              Diventa partner
            </Link>
            <Link href="/registrazione" className={topbarAuthPrimaryClass}>
              Registrati
            </Link>
          </>
        ) : null}
      </TopbarControlsMenu>
    </div>
  );
}
