import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");
const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const action = `selftest_${Date.now()}`;
const { error: insErr } = await admin.from("admin_audit_log").insert({
  actor_email: "selftest@example.com",
  action,
  target_type: "test",
  target_id: "123",
  details: { foo: "bar" },
  ip_address: "127.0.0.1",
  user_agent: "verify-script",
});
if (insErr) { console.log("FAIL insert:", insErr.message); process.exit(1); }

const { data, error: selErr } = await admin.from("admin_audit_log").select("action, actor_email, details").eq("action", action).maybeSingle();
if (selErr || !data) { console.log("FAIL select:", selErr?.message ?? "no row"); process.exit(1); }
console.log("riga letta:", data);
await admin.from("admin_audit_log").delete().eq("action", action);
console.log("PASS audit log (insert+read+cleanup)");
