import Stripe from "stripe";

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
 }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
 });
}

export const stripePriceIds = {
  small: process.env.STRIPE_PRICE_SMALL ?? "",
  medium: process.env.STRIPE_PRICE_MEDIUM ?? "",
  large: process.env.STRIPE_PRICE_LARGE ?? "",
};
