import type { UserRole } from "@/types/app";

export function dashboardPathForRole(role: UserRole | null | undefined): string {
  if (role === "hotel") return "/struttura/dashboard";
  if (role === "admin") return "/console/dashboard";
  if (role === "advertiser") return "/inserzionista/dashboard";
  return "/scegli-account";
}

/** Full navigation so cookie-based SSR routes (es. /console) vedono la sessione. */
export function redirectAfterLogin(path: string) {
  if (typeof window !== "undefined") {
    window.location.assign(path);
  }
}
