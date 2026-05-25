export function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function formatMoney(value: number | null | undefined, currency = "EUR") {
  if (value == null) return "—";
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(value);
}

export function formatCents(value: number | null | undefined, currency = "EUR") {
  if (value == null) return "—";
  return formatMoney(value / 100, currency);
}
