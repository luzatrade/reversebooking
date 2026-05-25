"use client";

import type { UserRole } from "@/types/app";

type Props = {
  role: Extract<UserRole, "hotel" | "advertiser">;
};

/** Legacy hook: le notifiche restano finché l'utente non apre la campanella. */
export function MarkNotificationsReadOnDashboard(_props: Props) {
  return null;
}
