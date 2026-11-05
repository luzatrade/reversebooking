import type { AssignableRole } from "@/types/app";

const ASSIGNABLE_ROLES = new Set<AssignableRole>(["hotel", "agency", "advertiser"]);

function isAssignableRole(value: unknown): value is AssignableRole {
  return typeof value === "string" && ASSIGNABLE_ROLES.has(value as AssignableRole);
}

/**
 * Risolve il ruolo account per registrazione / complete-profile.
 *
 * Il tipo di ritorno esclude `admin`: né il body della richiesta né i
 * `user_metadata` (scrivibili dall'utente via `auth.updateUser`) possono
 * produrre un profilo amministratore.
 */
export function resolveRegistrationRole(input: {
  meta?: Record<string, unknown> | null;
  existingProfileRole?: string | null;
  requestedRole?: string | null;
}): AssignableRole {
  const meta = input.meta ?? {};

  if (isAssignableRole(input.requestedRole)) return input.requestedRole;

  if (
    isAssignableRole(input.existingProfileRole) &&
    (input.existingProfileRole === "agency" || input.existingProfileRole === "hotel")
  ) {
    return input.existingProfileRole;
  }

  if (isAssignableRole(meta.role)) return meta.role;

  if (meta.account_kind === "agenzia") return "agency";
  if (meta.account_kind === "struttura") return "hotel";

  if (isAssignableRole(input.existingProfileRole)) return input.existingProfileRole;

  return "advertiser";
}
