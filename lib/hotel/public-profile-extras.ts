import type { HouseRules } from "@/lib/constants/house-rules";
import { normalizeHouseRules } from "@/lib/constants/house-rules";
import { formatMessage } from "@/lib/i18n/format";

type HouseRulesCopy = {
  checkInLine: string;
  checkOutLine: string;
  smokingYes: string;
  smokingNo: string;
  childrenYes: string;
  childrenNo: string;
  petsAllowedLine: string;
  petsNotAllowedLine: string;
  petsOnRequestLine: string;
};

export function buildHouseRulesLines(rulesInput: HouseRules | null | undefined, copy: HouseRulesCopy): string[] {
  const rules = normalizeHouseRules(rulesInput);
  const lines: string[] = [
    formatMessage(copy.checkInLine, { time: rules.check_in }),
    formatMessage(copy.checkOutLine, { time: rules.check_out }),
    rules.smoking_allowed ? copy.smokingYes : copy.smokingNo,
    rules.children_welcome ? copy.childrenYes : copy.childrenNo,
  ];

  if (rules.pets_policy === "allowed") lines.push(copy.petsAllowedLine);
  else if (rules.pets_policy === "on_request") lines.push(copy.petsOnRequestLine);
  else lines.push(copy.petsNotAllowedLine);

  if (rules.pets_notes) lines.push(rules.pets_notes);
  if (rules.deposit_notes) lines.push(rules.deposit_notes);
  if (rules.cancellation_notes) lines.push(rules.cancellation_notes);
  if (rules.other_notes) lines.push(rules.other_notes);

  return lines;
}

export function hasCustomHouseRules(rulesInput: HouseRules | null | undefined): boolean {
  const rules = normalizeHouseRules(rulesInput);
  return Boolean(
    rules.pets_notes ||
      rules.deposit_notes ||
      rules.cancellation_notes ||
      rules.other_notes ||
      rules.smoking_allowed ||
      !rules.children_welcome ||
      rules.pets_policy !== "not_allowed" ||
      rules.check_in !== "15:00" ||
      rules.check_out !== "11:00",
  );
}
