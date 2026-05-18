/** Superfici dashboard: champagne + tocchi blu brand + arancione per accettate. */
export const dashboardChampagne = {
  page: "#FCFAF6",
  panel: "#FDF9F3",
  card: "#FAF6EF",
  soft: "#FBF8F4",
  border: "#EBE4D8",
  borderMuted: "#E8DFD4",
} as const;

export const dashboardBlue = {
  brand: "#0f4c81",
  brandHover: "#0d4270",
  light: "#E8F1FA",
  soft: "#F4F8FC",
  border: "#B8D4EB",
  text: "#0c3d66",
  textMuted: "#3d6f99",
} as const;

export const dashboardSurfaces = {
  page: "min-h-screen bg-gradient-to-b from-[#E8F1FA]/80 via-[#F4F8FC] to-[#FCFAF6]",
  shell: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
  headerPanel:
    "rounded-3xl border border-[#B8D4EB] border-t-4 border-t-[#0f4c81] bg-gradient-to-br from-white via-white to-[#F4F8FC]/90 px-5 py-6 shadow-sm ring-1 ring-[#0f4c81]/[0.08] sm:px-6",
  panelWhite:
    "rounded-3xl border border-[#B8D4EB]/70 bg-white p-6 shadow-sm ring-1 ring-[#0f4c81]/[0.06]",
  panelCream: "rounded-3xl border border-[#EBE4D8] bg-[#FDF9F3] p-6 shadow-sm ring-1 ring-[#0f4c81]/[0.04]",
  panelBlue:
    "rounded-3xl border border-[#B8D4EB] bg-gradient-to-b from-[#F4F8FC] to-[#E8F1FA]/40 p-6 shadow-sm ring-1 ring-[#0f4c81]/[0.08]",
  cardWhite: "rounded-2xl border border-[#EBE4D8] bg-white p-5 shadow-sm",
  cardCream: "rounded-2xl border border-[#EBE4D8] bg-[#FAF6EF] p-4 shadow-sm",
  cardCreamLg: "rounded-2xl border border-[#EBE4D8] bg-[#FAF6EF] p-5 shadow-sm",
  cardBlue: "rounded-2xl border border-[#B8D4EB] bg-[#F4F8FC] p-5 shadow-sm ring-1 ring-[#0f4c81]/[0.06]",
  acceptedPanel: "rounded-3xl border border-orange-400 bg-orange-100 p-6 shadow-sm",
  acceptedCard: "rounded-2xl border border-orange-300 bg-white p-5 shadow-sm",
  acceptedCardAlt: "rounded-2xl border border-orange-300 bg-orange-100/60 p-5 shadow-sm",
  acceptedEmpty: "rounded-2xl border border-dashed border-orange-400 bg-orange-50 p-5 text-sm text-orange-900",
  acceptedBadge:
    "inline-flex rounded-full border border-orange-400 bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-800",
  emptyDashed: "rounded-2xl border border-dashed border-[#B8D4EB] bg-[#F4F8FC]/60 p-5 text-sm text-[#3d6f99]",
  btnHover: "hover:bg-[#F4F8FC]",
  badgeChampagne: "rounded-full bg-[#FBF8F4] px-3 py-1 ring-1 ring-[#EBE4D8]",
  areaLabel: "text-sm font-medium uppercase tracking-wide text-[#0f4c81]",
  sectionIcon: "h-5 w-5 text-[#0f4c81]",
  sectionTitle: "text-xl font-semibold text-[#0c3d66]",
  sectionSubtitle: "mt-2 text-sm text-[#3d6f99]",
  btnPrimary:
    "inline-flex items-center gap-2 rounded-full bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4270]",
  btnPrimarySm: "inline-flex rounded-full bg-[#0f4c81] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0d4270]",
  btnSecondary:
    "inline-flex items-center gap-2 rounded-full border border-[#B8D4EB] bg-white px-5 py-3 text-sm font-semibold text-[#0c3d66] transition hover:bg-[#F4F8FC]",
  badgeBlue: "rounded-full bg-[#E8F1FA] px-3 py-1 text-xs font-semibold text-[#0f4c81] ring-1 ring-[#B8D4EB]",
} as const;
