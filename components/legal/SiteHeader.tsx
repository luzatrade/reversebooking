"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Home, LayoutDashboard, Menu, X } from "lucide-react";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { BrandLogo } from "@/components/navigation/BrandLogo";
import {
  topbarAuthLinkClass,
  topbarAuthPrimaryClass,
  topbarMenuTriggerClass,
} from "@/components/navigation/topbarStyles";
import { homePath } from "@/lib/i18n/routing";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

function dashboardHref(role: UserRole | null) {
  if (role === "hotel") return "/struttura/dashboard";
  if (role === "advertiser") return "/inserzionista/dashboard";
  if (role === "admin") return "/admin";
  return "/login";
}

function NavLinks({
  userId,
  role,
  onNavigate,
  className = "",
}: {
  userId: string | null;
  role: UserRole | null;
  onNavigate?: () => void;
  className?: string;
}) {
  const { t, locale } = useLanguage();

  return (
    <nav className={className || "flex flex-col gap-2"} aria-label="Principale">
      <Link href={homePath(locale)} className={topbarAuthLinkClass} onClick={onNavigate}>
        <Home className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {t.common.home}
      </Link>
      {userId ? (
        <>
          <Link href={dashboardHref(role)} className={topbarAuthLinkClass} onClick={onNavigate}>
            <LayoutDashboard className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {t.common.dashboard}
          </Link>
          <LogoutButton variant="topbar" />
        </>
      ) : (
        <>
          <Link href="/login" className={topbarAuthLinkClass} onClick={onNavigate}>
            {t.common.login}
          </Link>
          <Link href="/registrazione?mode=partner" className={topbarAuthLinkClass} onClick={onNavigate}>
            {t.site.becomePartner}
          </Link>
          <Link href="/registrazione" className={topbarAuthPrimaryClass} onClick={onNavigate}>
            {t.site.registration}
          </Link>
        </>
      )}
      <Link href="/contatti" className={topbarAuthLinkClass} onClick={onNavigate}>
        {t.site.contacts}
      </Link>
    </nav>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const menuId = useId();

  useEffect(() => {
    let active = true;

    async function loadUser() {
      const supabase = createBrowserSupabaseClient();
      const { data } = await supabase.auth.getUser();
      if (!active) return;

      if (!data.user) {
        setUserId(null);
        setRole(null);
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
    }

    void loadUser();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const details = detailsRef.current;
      if (!details?.open) return;
      if (!details.contains(event.target as Node)) details.open = false;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && detailsRef.current) detailsRef.current.open = false;
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <header className="sticky top-0 z-[60] border-b border-zinc-200/80 bg-white/95">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-3 px-4 py-2 safe-top sm:px-6 lg:px-8">
        <BrandLogo size="topbar" className="min-w-0 shrink-0" />

        <div className="hidden items-center justify-end gap-1.5 md:flex">
          <LanguageSwitcher compact />
          <CurrencySwitcher compact />
          <NavLinks
            userId={userId}
            role={role}
            className="flex flex-row flex-wrap items-center justify-end gap-1.5"
          />
        </div>

        <details ref={detailsRef} className="group relative md:hidden">
          <summary
            className={`${topbarMenuTriggerClass} list-none [&::-webkit-details-marker]:hidden`}
            aria-controls={menuId}
            aria-label={t.common.openMenu}
          >
            <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
            <X className="hidden h-5 w-5 group-open:inline" aria-hidden />
          </summary>

          <div
            id={menuId}
            role="menu"
            data-site-header-menu=""
            className="hd-topbar-menu-panel absolute right-0 top-[calc(100%+0.5rem)] z-[10050] w-[min(18rem,calc(100vw-1.5rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
          >
            <div className="mb-2 flex items-center justify-center gap-2">
              <LanguageSwitcher compact />
              <CurrencySwitcher compact />
            </div>
            <NavLinks userId={userId} role={role} onNavigate={closeMenu} />
          </div>
        </details>
      </div>
    </header>
  );
}
