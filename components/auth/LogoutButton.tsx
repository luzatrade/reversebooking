"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { topbarAuthLinkClass } from "@/components/navigation/topbarStyles";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type LogoutButtonProps = {
  className?: string;
  variant?: "dashboard" | "topbar" | "console";
};

export function LogoutButton({ className, variant = "dashboard" }: LogoutButtonProps) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const variantClass =
    variant === "topbar"
      ? topbarAuthLinkClass
      : variant === "console"
        ? "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        : dashboardSurfaces.btnSecondary;

  async function handleLogout() {
    setLoading(true);
    try {
      const supabase = createBrowserSupabaseClient();
      await supabase.auth.signOut();
      window.location.assign("/");
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleLogout()}
      disabled={loading}
      className={className ?? variantClass}
    >
      <LogOut className="h-4 w-4 shrink-0" aria-hidden />
      {loading ? t.common.loading : t.common.logout}
    </button>
  );
}
