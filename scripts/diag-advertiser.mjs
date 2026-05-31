// Diagnostica bug "Profilo inserzionista non trovato".
// 1) Trova profili role=advertiser senza riga in advertiser_profiles (service role).
// 2) Verifica se un utente autenticato legge la PROPRIA riga advertiser_profiles (test RLS).
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

const admin = createClient(url, service, { auth: { persistSession: false } });

// --- 1) Inconsistenza dati ---
const { data: advProfiles, error: pErr } = await admin
  .from("profiles")
  .select("user_id, email, role, account_status, email_verified")
  .eq("role", "advertiser");
if (pErr) { console.error("profiles err:", pErr.message); process.exit(1); }

const { data: advRows, error: aErr } = await admin
  .from("advertiser_profiles")
  .select("user_id");
if (aErr) { console.error("advertiser_profiles err:", aErr.message); process.exit(1); }

const haveAdv = new Set((advRows ?? []).map((r) => r.user_id));
const missing = (advProfiles ?? []).filter((p) => !haveAdv.has(p.user_id));

console.log(`profiles(role=advertiser): ${advProfiles?.length ?? 0}`);
console.log(`advertiser_profiles totali: ${advRows?.length ?? 0}`);
console.log(`INSERZIONISTI SENZA advertiser_profiles: ${missing.length}`);
for (const m of missing) {
  console.log(`  - ${m.email}  (user_id=${m.user_id}, status=${m.account_status}, email_verified=${m.email_verified})`);
}

// --- 1b) Utenti auth SENZA riga profiles (orfani) ---
{
  const profileIds = new Set();
  // ricarico tutti i profiles (qualsiasi ruolo) per il confronto
  const { data: allProfiles } = await admin.from("profiles").select("user_id");
  for (const p of allProfiles ?? []) profileIds.add(p.user_id);

  let page = 1;
  const orphans = [];
  // listUsers è paginato
  for (;;) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) { console.error("listUsers err:", error.message); break; }
    const users = data?.users ?? [];
    for (const u of users) {
      if (!profileIds.has(u.id)) {
        orphans.push({ id: u.id, email: u.email, confirmed: Boolean(u.email_confirmed_at), role: u.user_metadata?.role ?? u.user_metadata?.account_kind ?? "?", created: u.created_at });
      }
    }
    if (users.length < 1000) break;
    page += 1;
  }
  console.log(`\nUTENTI AUTH SENZA profiles (orfani): ${orphans.length}`);
  for (const o of orphans) {
    console.log(`  - ${o.email}  (role/meta=${o.role}, email_confirmed=${o.confirmed}, created=${o.created})`);
  }
}

// --- 2) Test lettura RLS della propria riga (account di test noto) ---
const PASSWORD = "TestPass123!";
try {
  const c = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
  const { error: loginErr } = await c.auth.signInWithPassword({ email: "viaggiatore.test@example.com", password: PASSWORD });
  if (loginErr) {
    console.log(`\n[RLS test] login test fallito: ${loginErr.message}`);
  } else {
    const { data: me } = await c.auth.getUser();
    const { data, error } = await c.from("advertiser_profiles").select("id").eq("user_id", me.user.id).maybeSingle();
    console.log(`\n[RLS test] utente autenticato legge la propria advertiser_profiles: ${error ? "ERRORE " + error.message : (data ? "OK (riga trovata)" : "VUOTO (nessuna riga / bloccato da RLS)")}`);
  }
} catch (e) {
  console.log(`\n[RLS test] eccezione: ${e.message}`);
}
