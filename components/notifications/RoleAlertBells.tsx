"use client";

import { useEffect, useState } from "react";
import { DashboardAlertBells } from "@/components/notifications/DashboardAlertBells";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type Props = {
  role?: Extract<UserRole, "hotel" | "advertiser">;
};

export function RoleAlertBells({ role: fixedRole }: Props) {
  const [role, setRole] = useState<Extract<UserRole, "hotel" | "advertiser"> | null>(fixedRole ?? null);

  useEffect(() => {
    if (fixedRole) {
      setRole(fixedRole);
      return;
    }

    let active = true;

    async function detectRole() {
      const supabase = createBrowserSupabaseClient();
      const { data: authData } = await supabase.auth.getUser();
      if (!active || !authData.user) {
        if (active) setRole(null);
        return;
      }

      const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
      if (profile?.role === "hotel" || profile?.role === "advertiser") {
        if (active) setRole(profile.role);
        return;
      }

      const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id").eq("user_id", authData.user.id).maybeSingle();
      if (active) setRole(hotelAccount ? "hotel" : "advertiser");
    }

    void detectRole();
    return () => {
      active = false;
    };
  }, [fixedRole]);

  if (!role) return null;
  return <DashboardAlertBells role={role} />;
}
