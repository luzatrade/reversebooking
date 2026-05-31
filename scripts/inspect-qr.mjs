import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

const email = `qrtest_${Date.now()}@example.com`;
const { data: created } = await admin.auth.admin.createUser({ email, password: "TestPass123!mfa", email_confirm: true });
const user = createClient(url, anonKey, { auth: { persistSession: false } });
await user.auth.signInWithPassword({ email, password: "TestPass123!mfa" });
const { data: enroll, error } = await user.auth.mfa.enroll({ factorType: "totp", friendlyName: "qrtest" });
if (error) { console.log("enroll error:", error.message); }
else {
  const qr = enroll.totp.qr_code;
  console.log("qr length:", qr.length);
  console.log("primi 160 char:\n", qr.slice(0, 160));
  console.log("\ninizia con <svg?:", qr.trimStart().startsWith("<svg"));
  console.log("inizia con data:?:", qr.startsWith("data:"));
  console.log("uri (otpauth) presente?:", enroll.totp.uri ? enroll.totp.uri.slice(0, 80) : "no campo uri");
}
await admin.auth.admin.deleteUser(created.user.id);
console.log("cleanup ok");
