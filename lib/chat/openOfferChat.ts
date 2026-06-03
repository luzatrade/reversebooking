/** Opens the floating chat widget and optionally selects a conversation by offer id. */
export function openOfferChat(offerId?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("hd-open-chat", { detail: { offerId } }));
}
