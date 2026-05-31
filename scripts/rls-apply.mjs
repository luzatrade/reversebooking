// Applica un file SQL al database remoto usando la connessione pooler di Supabase.
// Uso: node scripts/rls-apply.mjs <percorso-file.sql>
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { default: pg } = await import("pg");

const sqlPath = process.argv[2];
if (!sqlPath) {
  console.error("Specificare il file SQL da applicare.");
  process.exit(1);
}

const connectionString = readFileSync(resolve(__dirname, "../supabase/.temp/pooler-url"), "utf8").trim();
const sql = readFileSync(resolve(sqlPath), "utf8");

const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });

try {
  await client.connect();
  console.log("Connesso al DB. Applico:", sqlPath);
  await client.query("begin");
  await client.query(sql);
  await client.query("commit");
  console.log("OK — SQL applicato e committato.");
} catch (e) {
  try { await client.query("rollback"); } catch {}
  console.error("ERRORE applicazione SQL:", e.message);
  process.exit(1);
} finally {
  await client.end();
}
