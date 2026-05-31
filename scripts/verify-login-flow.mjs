import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const email = process.argv[2] || "viaggiatore.test@example.com";
const password = process.argv[3] || "TestPass123!";

const supabase = createClient(url, anonKey, { auth: { persistSession: false } });
let ok = true;
const check = (l, c) => { console.log(`${c ? "PASS" : "FAIL"}  ${l}`); if (!c) ok = false; };

const { data, error } = await supabase.auth.signInWithPassword({ email, password });
check("signInWithPassword riuscito", !error && Boolean(data?.user?.id));
if (error) { console.log("  ->", error.message); process.exit(1); }

const aal = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
check("getAuthenticatorAssuranceLevel risponde", Boolean(aal.data));
const needsMfa = aal.data?.currentLevel === "aal1" && aal.data?.nextLevel === "aal2";
console.log(`  AAL: current=${aal.data?.currentLevel} next=${aal.data?.nextLevel} -> ${needsMfa ? "richiederebbe 2FA" : "login diretto (nessun fattore)"}`);

const { data: profile, error: pErr } = await supabase.from("profiles").select("role").eq("user_id", data.user.id).maybeSingle();
check("fetch profilo + ruolo", !pErr && Boolean(profile?.role));
console.log(`  ruolo: ${profile?.role}`);

await supabase.auth.signOut();
console.log(ok ? "\n== LOGIN NORMALE OK (flusso invariato) ==" : "\n== PROBLEMA NEL FLUSSO LOGIN ==");
process.exit(ok ? 0 : 1);
