/**
 * Client OpenAI-compatible per LM Studio (localhost).
 */

const DEFAULT_BASE = "http://127.0.0.1:1234/v1";

function numEnv(name, fallback) {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

export function getLmStudioConfig() {
  const baseUrl = (process.env.LMSTUDIO_BASE_URL?.trim() || DEFAULT_BASE).replace(/\/$/, "");
  const model = process.env.LMSTUDIO_MODEL?.trim() || null;
  return { baseUrl, model };
}

/** Parametri generazione — override via LMSTUDIO_* in .env.local */
export function getLmStudioGenerationParams() {
  return {
    temperature: numEnv("LMSTUDIO_TEMPERATURE", 0.2),
    maxTokens: Math.round(numEnv("LMSTUDIO_MAX_TOKENS", 900)),
    topP: numEnv("LMSTUDIO_TOP_P", 0.9),
    repeatPenalty: numEnv("LMSTUDIO_REPEAT_PENALTY", 1.12),
  };
}

export async function listModels(baseUrl = getLmStudioConfig().baseUrl) {
  const res = await fetch(`${baseUrl}/models`, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) {
    throw new Error(`LM Studio /models → ${res.status}: ${await res.text()}`);
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
  temperature = getLmStudioGenerationParams().temperature,
  maxTokens = getLmStudioGenerationParams().maxTokens,
  topP = getLmStudioGenerationParams().topP,
  repeatPenalty = getLmStudioGenerationParams().repeatPenalty,
  timeoutMs = 180000,
}) {
  const url = `${baseUrl}/chat/completions`;
  const body = {
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    top_p: topP,
    repeat_penalty: repeatPenalty,
    stream: false,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
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
  try {
    const models = await listModels(baseUrl);
    return { ok: true, baseUrl, models };
  } catch (err) {
    return { ok: false, baseUrl, error: err.message };
  }
}
