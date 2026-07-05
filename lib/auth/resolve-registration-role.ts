import type { UserRole } from "@/types/app";

const VALID_ROLES = new Set<UserRole>(["hotel", "agency", "advertiser", "admin"]);

function isUserRole(value: unknown): value is UserRole {
  return typeof value === "string" && VALID_ROLES.has(value as UserRole);
}

/** Risolve il ruolo account per registrazione / complete-profile. */
export function resolveRegistrationRole(input: {
  meta?: Record<string, unknown> | null;
  existingProfileRole?: string | null;
  requestedRole?: string | null;
}): UserRole {
  const meta = input.meta ?? {};

  if (isUserRole(input.requestedRole)) return input.requestedRole;

  if (
    isUserRole(input.existingProfileRole) &&
    (input.existingProfileRole === "agency" || input.existingProfileRole === "hotel")
  ) {
    return input.existingProfileRole;
  }

  if (isUserRole(meta.role)) return meta.role;

  if (meta.account_kind === "agenzia") return "agency";
  if (meta.account_kind === "struttura") return "hotel";

  if (isUserRole(input.existingProfileRole)) return input.existingProfileRole;

  return "advertiser";
}
