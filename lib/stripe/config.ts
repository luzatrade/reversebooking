import Stripe from "stripe";

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  return new Stripe(secretKey, { typescript: true });
}

export const stripePriceIds = {
  small: process.env.STRIPE_PRICE_SMALL ?? "",
  medium: process.env.STRIPE_PRICE_MEDIUM ?? "",
  large: process.env.STRIPE_PRICE_LARGE ?? "",
  // Agenzie viaggi: piano a prezzo unico. L'importo va creato come Price su
  // Stripe; qui basta incollare l'id (price_...) in STRIPE_PRICE_AGENCY.
  agency: process.env.STRIPE_PRICE_AGENCY ?? "",
};
