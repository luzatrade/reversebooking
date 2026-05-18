/** Stile condiviso per offerte / soggiorni accettati (come badge vetrina «🤝 Accettata»). */
export const acceptedOfferTheme = {
  panel: "rounded-3xl border border-orange-400 bg-orange-100 p-6 shadow-sm",
  summary: "rounded-3xl border border-orange-400 bg-white p-6 shadow-sm",
  card: "rounded-2xl border border-orange-300 bg-white p-5 shadow-sm",
  cardAlt: "rounded-2xl border border-orange-300 bg-orange-100/60 p-5 shadow-sm",
  empty: "rounded-2xl border border-dashed border-orange-400 bg-orange-50 p-5 text-sm text-orange-900",
  statCard: "rounded-2xl border border-orange-400 bg-orange-100 p-5 shadow-sm",
  badge: "inline-flex items-center gap-1 rounded-full border border-orange-400 bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-800",
  badgeLg: "inline-flex rounded-full border border-orange-400 bg-orange-100 px-5 py-3 text-sm font-semibold text-orange-800",
  icon: "text-orange-700",
  heading: "text-xl font-semibold text-orange-950",
  subtitle: "text-sm text-orange-900/85",
  statusPill: "rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-300",
  message: "rounded-2xl border border-orange-300 bg-orange-100 p-4 text-sm text-orange-900",
  label: "text-sm font-medium uppercase tracking-wide text-orange-800",
} as const;
