import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import * as dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

function base32Decode(b32) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let bits = "";
  for (const c of b32.replace(/=+$/, "").toUpperCase()) {
    const idx = alphabet.indexOf(c);
    if (idx >= 0) bits += idx.toString(2).padStart(5, "0");
  }
  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2));
  return Buffer.from(bytes);
}
function totp(secret, step = 30, digits = 6, offsetSteps = 0) {
  const key = base32Decode(secret);
  const counter = Math.floor(Date.now() / 1000 / step) + offsetSteps;
  const buf = Buffer.alloc(8);
  buf.writeBigUInt64BE(BigInt(counter));
  const hmac = crypto.createHmac("sha1", key).update(buf).digest();
  const off = hmac[hmac.length - 1] & 0xf;
  const code = ((hmac[off] & 0x7f) << 24) | ((hmac[off + 1] & 0xff) << 16) | ((hmac[off + 2] & 0xff) << 8) | (hmac[off + 3] & 0xff);
  return (code % 10 ** digits).toString().padStart(digits, "0");
}

const email = `mfatest_${Date.now()}@example.com`;
const password = "TestPass123!mfa";
let userId = null;
let ok = true;
function check(label, cond) { console.log(`${cond ? "PASS" : "FAIL"}  ${label}`); if (!cond) ok = false; }

try {
  const { data: created, error: cErr } = await admin.auth.admin.createUser({ email, password, email_confirm: true });
  if (cErr) throw cErr;
  userId = created.user.id;

  const user = createClient(url, anonKey, { auth: { persistSession: false } });
  const { error: sErr } = await user.auth.signInWithPassword({ email, password });
  if (sErr) throw sErr;

  const aal0 = await user.auth.mfa.getAuthenticatorAssuranceLevel();
  check("sessione iniziale aal1 senza fattori", aal0.data?.currentLevel === "aal1" && aal0.data?.nextLevel === "aal1");

  const { data: enroll, error: eErr } = await user.auth.mfa.enroll({ factorType: "totp", friendlyName: "test" });
  if (eErr) throw eErr;
  const factorId = enroll.id;
  const secret = enroll.totp.secret;
  check("enroll restituisce secret + qr", Boolean(secret) && Boolean(enroll.totp.qr_code));

  const { data: ch, error: chErr } = await user.auth.mfa.challenge({ factorId });
  if (chErr) throw chErr;
  const { error: vErr } = await user.auth.mfa.verify({ factorId, challengeId: ch.id, code: totp(secret) });
  check("verify con codice corretto riuscita", !vErr);

  const aal2 = await user.auth.mfa.getAuthenticatorAssuranceLevel();
  check("sessione elevata ad aal2 dopo verify", aal2.data?.currentLevel === "aal2");

  // Simula un nuovo login: nuova sessione password -> deve servire la sfida (aal1 -> aal2).
  const user2 = createClient(url, anonKey, { auth: { persistSession: false } });
  await user2.auth.signInWithPassword({ email, password });
  const aalLogin = await user2.auth.mfa.getAuthenticatorAssuranceLevel();
  check("nuovo login richiede 2FA (aal1 -> aal2)", aalLogin.data?.currentLevel === "aal1" && aalLogin.data?.nextLevel === "aal2");
  const { data: factors } = await user2.auth.mfa.listFactors();
  check("listFactors mostra fattore verificato", Boolean(factors?.totp?.find((f) => f.status === "verified")));

  // Codice errato deve fallire.
  const { data: ch2 } = await user2.auth.mfa.challenge({ factorId });
  const { error: wrongErr } = await user2.auth.mfa.verify({ factorId, challengeId: ch2.id, code: "000000" });
  check("codice errato rifiutato", Boolean(wrongErr));
} catch (err) {
  console.log("ERRORE:", err?.message ?? err);
  ok = false;
} finally {
  if (userId) {
    await admin.auth.admin.deleteUser(userId);
    console.log("cleanup: utente temporaneo eliminato");
  }
}
console.log(ok ? "\n== TUTTI I TEST MFA PASSATI ==" : "\n== ALCUNI TEST FALLITI ==");
process.exit(ok ? 0 : 1);
