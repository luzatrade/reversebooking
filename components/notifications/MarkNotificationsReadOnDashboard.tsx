"use client";

import { useEffect } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type Props = {
  role: Extract<UserRole, "hotel" | "advertiser">;
};

export function MarkNotificationsReadOnDashboard({ role }: Props) {
  useEffect(() => {
    async function markRead() {
      const supabase = createBrowserSupabaseClient();
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) return;

      if (role === "hotel") {
        const { data: hotel } = await supabase.from("hotel_accounts").select("id").eq("user_id", authData.user.id).maybeSingle();
        if (!hotel?.id) return;
        await supabase.from("notifications").update({ is_read: true }).eq("recipient_type", "hotel").eq("recipient_id", hotel.id).eq("is_read", false);
        return;
      }

      const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).maybeSingle();
      if (!advertiser?.id) return;
      const { data: requests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
      const requestIds = (requests ?? []).map((request) => request.id);
      if (!requestIds.length) return;
      await supabase.from("notifications").update({ is_read: true }).eq("recipient_type", "advertiser").eq("is_read", false).in("travel_request_id", requestIds);
    }

    const timeout = window.setTimeout(() => { void markRead(); }, 600);
    return () => window.clearTimeout(timeout);
  }, [role]);

  return null;
}
