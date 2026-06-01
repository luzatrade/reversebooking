function randomSuffix(length: number) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}

export function makeOfferCode() {
  return `OF${randomSuffix(6)}`;
}

export function makeRequestCode() {
  return `RB${randomSuffix(6)}`;
}

export function makeCatalogOfferCode() {
  return `CO${randomSuffix(6)}`;
}

export function makeCatalogAcceptanceCode() {
  return `AC${randomSuffix(6)}`;
}

export function catalogOfferHref(code: string) {
  return `/offerta/${code}`;
}

export function relaunchOfferHref(requestId: string, offerId: string) {
  return `/struttura/annunci/${requestId}?relaunch_from=${encodeURIComponent(offerId)}`;
}
