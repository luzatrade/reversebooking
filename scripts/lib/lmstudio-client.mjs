/**
 * Client OpenAI-compatible per LM Studio (localhost / LAN).
 *
 * Env:
 *   LMSTUDIO_BASE_URL  default http://127.0.0.1:1234/v1
 *   LMSTUDIO_MODEL     model id (es. qwen2.5-7b-instruct-uncensored)
 *   LMSTUDIO_API_KEY   se "Require Authentication" è ON in LM Studio
 *   LM_API_TOKEN       alias di LMSTUDIO_API_KEY
 */

const DEFAULT_BASE = "http://127.0.0.1:1234/v1";

export function getLmStudioConfig() {
  const baseUrl = (process.env.LMSTUDIO_BASE_URL?.trim() || DEFAULT_BASE).replace(/\/$/, "");
  const model = process.env.LMSTUDIO_MODEL?.trim() || null;
  const apiKey =
    process.env.LMSTUDIO_API_KEY?.trim() || process.env.LM_API_TOKEN?.trim() || null;
  return { baseUrl, model, apiKey };
}

function authHeaders(apiKey) {
  const headers = {};
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  return headers;
}

export async function listModels(baseUrl = getLmStudioConfig().baseUrl, apiKey = getLmStudioConfig().apiKey) {
  const res = await fetch(`${baseUrl}/models`, {
    headers: authHeaders(apiKey),
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) {
    const hint =
      res.status === 401 || res.status === 403
        ? " → autenticazione richiesta: crea token in LM Studio (Manage Tokens) o disattiva Require Authentication"
        : "";
    throw new Error(`LM Studio /models → ${res.status}: ${await res.text()}${hint}`);
  }
  const data = await res.json();
  return (data.data ?? []).map((m) => m.id).filter(Boolean);
}

export async function resolveModel(baseUrl, preferred) {
  if (preferred) return preferred;
  const models = await listModels(baseUrl);
  if (!models.length) throw new Error("Nessun modello in LM Studio — carica un modello e avvia il server.");
  return models[0];
}

export async function chatCompletion({
  baseUrl,
  model,
  messages,
  apiKey = getLmStudioConfig().apiKey,
  temperature = 0.65,
  maxTokens = 1200,
  timeoutMs = 180000,
}) {
  const url = `${baseUrl}/chat/completions`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(apiKey),
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (!res.ok) {
    throw new Error(`LM Studio chat → ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content?.trim()) throw new Error("Risposta vuota da LM Studio");
  return content.trim();
}

export async function probeLmStudio(baseUrl = getLmStudioConfig().baseUrl) {
  const { apiKey } = getLmStudioConfig();
  try {
    const models = await listModels(baseUrl, apiKey);
    return { ok: true, baseUrl, auth: Boolean(apiKey), models };
  } catch (err) {
    return { ok: false, baseUrl, auth: Boolean(apiKey), error: err.message };
  }
}
