import type { Locale } from "@/lib/i18n/translations";
import { uiLocale } from "@/lib/i18n/ui-locale";

type Props = {
  totalPrice: number;
  budgetTotal: number;
  locale?: Locale;
  className?: string;
};

const EPSILON = 0.01;

function formatCurrency(value: number, locale: Locale) {
  const ui = uiLocale(locale);
  return new Intl.NumberFormat(ui === "en" ? "en-GB" : "it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

/**
 * Confronta il prezzo dell'offerta (totale per tutte le camere) con il budget
 * totale richiesto dal viaggiatore (somma dei budget di ogni camera). Mostra un
 * badge: sopra budget (arancione), sotto/in linea (verde).
 */
export function OfferBudgetComparison({ totalPrice, budgetTotal, locale = "it", className }: Props) {
  const indicativeTotal = Number(budgetTotal) || 0;
  if (!(indicativeTotal > 0)) return null;

  const diff = Number(totalPrice) - indicativeTotal;
  const en = uiLocale(locale) === "en";
  const budgetText = formatCurrency(indicativeTotal, locale);

  let tone: "over" | "ok";
  let label: string;
  if (diff > EPSILON) {
    tone = "over";
    label = en
      ? `Attention: ${formatCurrency(diff, locale)} above your budget (${budgetText})`
      : `Attenzione: ${formatCurrency(diff, locale)} sopra il tuo budget (${budgetText})`;
  } else if (diff < -EPSILON) {
    tone = "ok";
    label = en
      ? `${formatCurrency(Math.abs(diff), locale)} below your budget (${budgetText})`
      : `${formatCurrency(Math.abs(diff), locale)} sotto il tuo budget (${budgetText})`;
  } else {
    tone = "ok";
    label = en ? `In line with your budget (${budgetText})` : `In linea con il tuo budget (${budgetText})`;
  }

  const toneClasses =
    tone === "over"
      ? "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
      : "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200";

  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses} ${className ?? ""}`}>
      {tone === "over" ? "⚠️" : "✓"} {label}
    </span>
  );
}
