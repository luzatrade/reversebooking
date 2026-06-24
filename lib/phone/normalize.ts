/** Normalizza un numero italiano verso E.164 (+39…). */
export function normalizePhoneE164(raw: string | null | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;

  if (value.startsWith("+")) {
    const digits = value.replace(/\D/g, "");
    return digits ? `+${digits}` : null;
  }

  let digits = value.replace(/\D/g, "");
  if (!digits) return null;

  if (digits.startsWith("0039")) digits = digits.slice(4);
  else if (digits.startsWith("39") && digits.length >= 11) digits = digits.slice(2);

  if (digits.startsWith("0")) digits = digits.slice(1);

  if (digits.length < 8 || digits.length > 12) return null;
  return `+39${digits}`;
}

export function formatPhoneDisplay(e164: string | null | undefined): string {
  if (!e164) return "";
  return e164;
}
