export function makeRequestCode() {
  return `RB-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function makeOfferCode() {
  return `OF-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function relaunchRequestHref(requestId: string) {
  return `/inserzionista/crea-annuncio?clone_from=${encodeURIComponent(requestId)}`;
}

export function relaunchOfferHref(requestId: string, offerId: string) {
  return `/struttura/annunci/${encodeURIComponent(requestId)}?relaunch_from=${encodeURIComponent(offerId)}`;
}
