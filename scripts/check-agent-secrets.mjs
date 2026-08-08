/**
 * Verifica che i secret necessari al Cloud Agent siano disponibili.
 * Non stampa mai i valori — solo presenza/assenza.
 *
 * I secret vanno configurati in:
 * https://cursor.com/dashboard/cloud-agents → Secrets
 * (Environment Variable o Runtime Secret, scope repo reversebooking)
 */

const REQUIRED = [
  {
    key: "NEXT_PUBLIC_SUPABASE_URL",
    why: "Connessione al database Supabase (lettura/scrittura onboarding)",
  },
  {
    key: "SUPABASE_SERVICE_ROLE_KEY",
    why: "Import hotel, foto, email, coordinate — bypass RLS lato server",
  },
];

const RECOMMENDED = [
  {
    key: "GOOGLE_PLACES_API_KEY",
    why: "Import onboarding completi (foto Google, telefono, sito, mappa)",
    alt: ["GOOGLE_PLACES_API_KEY_TEMP"],
  },
  {
    key: "GEMINI_API_KEY",
    why: "Generazione automatica descrizioni SEO (Gemini API)",
    optional: true,
  },
  {
    key: "GOOGLE_PLACES_PHOTOS_KEY",
    why: "Download foto Places (opzionale se inclusa nella chiave principale)",
    optional: true,
  },
  {
    key: "RESEND_API_KEY",
    why: "Email transazionali e notifiche",
    optional: true,
  },
  {
    key: "CRON_SECRET",
    why: "API n8n handoff + publish approvato + cron Vercel",
    optional: true,
  },
  {
    key: "N8N_WEBHOOK_URL",
    why: "Webhook produzione n8n — agente avvia workflow scrape",
    optional: true,
  },
];

function hasKey(key) {
  return Boolean(process.env[key]?.trim());
}

function getResendApiKey() {
  for (const name of ["RESEND_API_KEY", "RESENDAPI_KEY", "RESENDAPI", "RESEND_APIKEY", "RESEND_KEY"]) {
    const value = process.env[name]?.trim();
    if (value) return { value, sourceVar: name };
  }
  return null;
}

function getResendEnvDiagnostics() {
  const hit = getResendApiKey();
  if (hit) {
    return {
      configured: true,
      sourceVar: hit.sourceVar,
      wrongNameHints: hit.sourceVar !== "RESEND_API_KEY" ? [`Usa RESEND_API_KEY (trovato ${hit.sourceVar})`] : [],
    };
  }
  const wrongNameHints = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (!value?.trim()) continue;
    if (key.toLowerCase().includes("resend") && key !== "RESEND_API_KEY") {
      wrongNameHints.push(`Trovata variabile "${key}" — il codice legge RESEND_API_KEY`);
    }
  }
  return { configured: false, sourceVar: null, wrongNameHints };
}

function hasKeyOrAlt(entry) {
  if (hasKey(entry.key)) return true;
  for (const alt of entry.alt ?? []) {
    if (hasKey(alt)) return true;
  }
  return false;
}

const missingRequired = REQUIRED.filter((entry) => !hasKey(entry.key));
const missingRecommended = RECOMMENDED.filter(
  (entry) => !entry.optional && !hasKeyOrAlt(entry),
);

console.log("\n[check-agent-secrets] Cloud Agent — verifica permessi\n");

for (const entry of REQUIRED) {
  const ok = hasKey(entry.key);
  console.log(`${ok ? "✓" : "✗"} ${entry.key}${ok ? "" : ` — ${entry.why}`}`);
}

for (const entry of RECOMMENDED) {
  const ok = entry.key === "RESEND_API_KEY" ? Boolean(getResendApiKey()) : hasKeyOrAlt(entry);
  const label = entry.optional ? "(opz.)" : "";
  console.log(`${ok ? "✓" : "○"} ${entry.key} ${label}${ok ? "" : ` — ${entry.why}`}`);
}

if (missingRequired.length) {
  console.log(`
⚠️  Secret obbligatori mancanti: l'agente NON può scrivere su Supabase in autonomia.
   Aggiungili in Cursor → Dashboard → Cloud Agents → Secrets
   Tipo: Environment Variable (runtime)
   Repo: luzatrade/reversebooking

   Dopo averli aggiunti: Update environment / nuovo agent run.
`);
  process.exitCode = 0;
} else if (missingRecommended.length) {
  console.log(`
✓ Database OK. Per import hotel completi (foto Google) aggiungi GOOGLE_PLACES_API_KEY nei Secrets.
`);
} else {
  console.log(`
✓ Tutti i secret principali presenti — l'agente può importare onboarding e agire su Supabase in autonomia.
`);
}

const resendDiag = getResendEnvDiagnostics();
if (!resendDiag.configured && resendDiag.wrongNameHints.length) {
  console.log("⚠ Resend: nome variabile non standard:");
  for (const hint of resendDiag.wrongNameHints) console.log(`   ${hint}`);
} else if (resendDiag.configured && resendDiag.sourceVar !== "RESEND_API_KEY") {
  console.log(`ℹ Resend: chiave letta da ${resendDiag.sourceVar} (consigliato RESEND_API_KEY)`);
}
