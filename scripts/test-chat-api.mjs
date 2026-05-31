import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { createServerClient } = await import("@supabase/ssr");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BASE = "http://localhost:3000";
const TRAVELER_EMAIL = "viaggiatore.test@example.com";
const PASSWORD = "TestPass123!";

// 1) Trova un'offerta accettata (via service role)
const admin = createClient(url, service, { auth: { persistSession: false } });
const { data: offers } = await admin
  .from("offers")
  .select("id, offer_code, status, created_at")
  .eq("status", "accepted")
  .order("created_at", { ascending: false })
  .limit(1);
const offer = offers?.[0];
if (!offer) {
  console.error("Nessuna offerta accettata trovata.");
  process.exit(1);
}
console.log("Offerta accettata:", offer.offer_code, offer.id);

// 2) Login come viaggiatore tramite @supabase/ssr, catturando i cookie esatti
const store = new Map();
const ssr = createServerClient(url, anon, {
  cookies: {
    getAll() {
      return [...store.entries()].map(([name, value]) => ({ name, value }));
    },
    setAll(list) {
      list.forEach(({ name, value }) => store.set(name, value));
    },
  },
});
const { error: signInErr } = await ssr.auth.signInWithPassword({ email: TRAVELER_EMAIL, password: PASSWORD });
if (signInErr) {
  console.error("Login fallito:", signInErr.message);
  process.exit(1);
}
const cookieHeader = [...store.entries()]
  .map(([n, v]) => `${n}=${encodeURIComponent(v)}`)
  .join("; ");
console.log("Cookie di sessione catturati:", [...store.keys()].join(", "));

async function call(label, cookie, origin) {
  const headers = { "Content-Type": "application/json" };
  if (cookie) headers["Cookie"] = cookie;
  if (origin) headers["Origin"] = origin;
  const res = await fetch(`${BASE}/api/chat/email-notification`, {
    method: "POST",
    headers,
    body: JSON.stringify({ offerId: offer.id, message: "Buongiorno, confermo la prenotazione" }),
  });
  const text = await res.text();
  console.log(`\n[${label}] HTTP ${res.status} -> ${text.slice(0, 200)}`);
  return res.status;
}

// 3a) Caso reale: autenticato + same-origin (atteso 200)
await call("autenticato + Origin valido", cookieHeader, BASE);
// 3b) Controprova: autenticato ma Origin esterno (atteso 403 CSRF)
await call("autenticato + Origin ESTERNO", cookieHeader, "https://evil.example.com");
// 3c) Controprova: senza cookie (atteso 401)
await call("NON autenticato + Origin valido", null, BASE);

process.exit(0);
