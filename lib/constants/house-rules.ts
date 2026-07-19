export type PetsPolicy = "allowed" | "not_allowed" | "on_request";

export type HouseRules = {
  check_in: string;
  check_out: string;
  smoking_allowed: boolean;
  pets_policy: PetsPolicy;
  pets_notes: string;
  children_welcome: boolean;
  deposit_notes: string;
  cancellation_notes: string;
  other_notes: string;
};

export const DEFAULT_HOUSE_RULES: HouseRules = {
  check_in: "15:00",
  check_out: "11:00",
  smoking_allowed: false,
  pets_policy: "not_allowed",
  pets_notes: "",
  children_welcome: true,
  deposit_notes: "",
  cancellation_notes: "",
  other_notes: "",
};

export function normalizeHouseRules(input: Partial<HouseRules> | null | undefined): HouseRules {
  if (!input) return { ...DEFAULT_HOUSE_RULES };
  return {
    check_in: input.check_in?.trim() || DEFAULT_HOUSE_RULES.check_in,
    check_out: input.check_out?.trim() || DEFAULT_HOUSE_RULES.check_out,
    smoking_allowed: Boolean(input.smoking_allowed),
    pets_policy:
      input.pets_policy === "allowed" || input.pets_policy === "on_request"
        ? input.pets_policy
        : "not_allowed",
    pets_notes: input.pets_notes?.trim() ?? "",
    children_welcome: input.children_welcome ?? DEFAULT_HOUSE_RULES.children_welcome,
    deposit_notes: input.deposit_notes?.trim() ?? "",
    cancellation_notes: input.cancellation_notes?.trim() ?? "",
    other_notes: input.other_notes?.trim() ?? "",
  };
}
