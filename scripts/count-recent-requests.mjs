import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const today = new Date().toISOString().slice(0, 10);
const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();

for (const [label, filter] of [
  ["Tutte attive future", {}],
  ["Ultimi 7 giorni", { since: weekAgo }],
  ["Ultimo 1 giorno", { since: new Date(Date.now() - 86400000).toISOString() }],
]) {
  let q = sb
    .from("travel_requests")
    .select("id", { count: "exact", head: true })
    .eq("status", "active")
    .gte("check_in", today);
  if (filter.since) q = q.gte("created_at", filter.since);
  const { count } = await q;
  console.log(`${label}: ${count ?? 0}`);
}
