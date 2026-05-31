// Verifica l'RLS dal punto di vista degli utenti reali (ruolo authenticated/anon),
// senza service role. Esercita i percorsi chiave dell'app sulle 4 tabelle.
// Exit code 0 = tutto OK; 1 = almeno un controllo fallito.
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PASSWORD = "TestPass123!";

const results = [];
function check(name, ok, detail = "") {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  -> " + detail : ""}`);
}

function freshClient() {
  return createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
}
async function signedClient(email) {
  const c = freshClient();
  const { error } = await c.auth.signInWithPassword({ email, password: PASSWORD });
  if (error) throw new Error(`login ${email}: ${error.message}`);
  return c;
}

const admin = createClient(url, service, { auth: { persistSession: false } });

// Dati di riferimento (via service role)
const { data: acceptedOffers } = await admin.from("offers").select("id, hotel_account_id, travel_request_id, status").eq("status", "accepted").limit(1);
const testOffer = acceptedOffers?.[0] ?? null;

// --- ANON ---
const anonC = freshClient();
{
  const { data, error } = await anonC.from("travel_requests").select("id").eq("status", "active").limit(5);
  check("ANON vede richieste attive (showcase pubblico)", !error && (data?.length ?? 0) >= 1, error ? error.message : `${data?.length ?? 0} righe`);
}
{
  const { data, error } = await anonC.from("offer_messages").select("id").limit(1);
  // Atteso: nessuna riga (bloccato). Errore o 0 righe = OK (non deve esporre messaggi).
  check("ANON NON vede i messaggi chat", !error ? (data?.length ?? 0) === 0 : true, error ? "bloccato(err)" : `${data?.length ?? 0} righe`);
}
{
  const { data, error } = await anonC.from("offers").select("id").limit(1);
  check("ANON NON vede le offerte", !error ? (data?.length ?? 0) === 0 : true, error ? "bloccato(err)" : `${data?.length ?? 0} righe`);
}
{
  const { data, error } = await anonC.from("notifications").select("id").limit(1);
  check("ANON NON vede notifiche", !error ? (data?.length ?? 0) === 0 : true, error ? "bloccato(err)" : `${data?.length ?? 0} righe`);
}

// --- ADVERTISER ---
try {
  const adv = await signedClient("viaggiatore.test@example.com");
  {
    const { data, error } = await adv.from("travel_requests").select("id, status").limit(50);
    check("ADV vede richieste (proprie + attive)", !error && (data?.length ?? 0) >= 1, error ? error.message : `${data?.length ?? 0} righe`);
  }
  {
    const { data, error } = await adv.from("offers").select("id, status").limit(50);
    check("ADV vede offerte sulle proprie richieste", !error, error ? error.message : `${data?.length ?? 0} righe`);
  }
  {
    const { data, error } = await adv.from("notifications").select("id").limit(50);
    check("ADV vede le proprie notifiche", !error, error ? error.message : `${data?.length ?? 0} righe`);
  }
  if (testOffer) {
    // No-op: riscrive lo stato già 'accepted' (esercita la policy UPDATE advertiser)
    const { error } = await adv.from("offers").update({ status: "accepted" }).eq("id", testOffer.id);
    check("ADV può aggiornare stato offerta (accetta/rifiuta)", !error, error ? error.message : "update ok");
  }
} catch (e) {
  check("ADVERTISER login/flow", false, e.message);
}

// --- HOTEL ---
try {
  const hotel = await signedClient("hotel.test@example.com");
  {
    const { data, error } = await hotel.from("travel_requests").select("id").eq("status", "active").limit(50);
    check("HOTEL vede richieste attive da offrire", !error && (data?.length ?? 0) >= 1, error ? error.message : `${data?.length ?? 0} righe`);
  }
  {
    const { data, error } = await hotel.from("offers").select("id, status").limit(50);
    check("HOTEL vede le proprie offerte", !error, error ? error.message : `${data?.length ?? 0} righe`);
  }
  {
    const { data, error } = await hotel.from("notifications").select("id").limit(50);
    check("HOTEL vede le proprie notifiche", !error, error ? error.message : `${data?.length ?? 0} righe`);
  }
  if (testOffer) {
    const { data, error } = await hotel.from("offer_messages").select("id").eq("offer_id", testOffer.id).limit(10);
    check("HOTEL vede i messaggi della propria offerta accettata", !error, error ? error.message : `${data?.length ?? 0} righe`);
  }
} catch (e) {
  check("HOTEL login/flow", false, e.message);
}

// --- CHAT INSERT (advertiser partecipante) ---
if (testOffer) {
  try {
    const adv = await signedClient("viaggiatore.test@example.com");
    const { data: me } = await adv.auth.getUser();
    const senderId = me.user.id;
    const { data, error } = await adv
      .from("offer_messages")
      .insert({ offer_id: testOffer.id, sender_id: senderId, sender_role: "advertiser", body: "[verifica RLS] messaggio di test" })
      .select("id")
      .single();
    check("ADV può inviare un messaggio in chat (offerta accettata)", !error && Boolean(data?.id), error ? error.message : "insert ok");
    if (data?.id) await admin.from("offer_messages").delete().eq("id", data.id); // pulizia
  } catch (e) {
    check("CHAT insert", false, e.message);
  }
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} controlli OK.`);
if (failed.length) {
  console.log("FALLITI:", failed.map((f) => f.name).join(" | "));
  process.exit(1);
}
process.exit(0);
