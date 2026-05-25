/**
 * Step 3 — Generazione e verifica del token di claim.
 *
 * Ogni hotel unclaimed riceve un token firmato (random + HMAC)
 * con scadenza 30 giorni. L'hotel clicca il magic link nell'email,
 * atterra su /claim?token=xxx e completa la registrazione.
 */

import { createHmac, randomBytes } from "crypto";

const SECRET = process.env.CLAIM_TOKEN_SECRET ?? "hotelsdrop-claim-default-secret";
const TOKEN_VALIDITY_DAYS = 30;

/**
 * Genera un token di claim: 32 byte random + HMAC signature.
 * Ritorna { token, expiresAt }.
 */
export function generateClaimToken(): {
  token: string;
  expiresAt: Date;
} {
  const raw = randomBytes(32).toString("hex");
  const signature = createHmac("sha256", SECRET).update(raw).digest("hex").slice(0, 12);
  const token = `${raw}.${signature}`;

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + TOKEN_VALIDITY_DAYS);

  return { token, expiresAt };
}

/**
 * Verifica che il token abbia una firma valida (non verifica scadenza — quella è nel DB).
 */
export function isValidClaimToken(token: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [raw, signature] = parts;
  const expected = createHmac("sha256", SECRET).update(raw).digest("hex").slice(0, 12);
  return signature === expected;
}

/**
 * Costruisce l'URL completo del magic link.
 */
export function claimUrl(token: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://hotelsdrop.com";
  return `${baseUrl}/claim?token=${encodeURIComponent(token)}`;
}
