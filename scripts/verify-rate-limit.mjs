import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");
const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const key = `test:${Date.now()}`;
const results = [];
for (let i = 0; i < 5; i++) {
  const { data, error } = await admin.rpc("check_rate_limit", { p_key: key, p_max: 3, p_window_seconds: 60 });
  results.push(error ? `ERR:${error.message}` : data);
}
console.log("max=3 -> sequenza attesa [true,true,true,false,false]:");
console.log(results);
const ok = JSON.stringify(results) === JSON.stringify([true, true, true, false, false]);
console.log(ok ? "PASS rate limit" : "FAIL rate limit");
// pulizia
await admin.from("rate_limits").delete().eq("key", key);
process.exit(ok ? 0 : 1);
