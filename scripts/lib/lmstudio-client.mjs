/**
 * Client OpenAI-compatible per LM Studio (localhost).
 */

const DEFAULT_BASE = "http://127.0.0.1:1234/v1";

export function getLmStudioConfig() {
  const baseUrl = (process.env.LMSTUDIO_BASE_URL?.trim() || DEFAULT_BASE).replace(/\/$/, "");
  const model = process.env.LMSTUDIO_MODEL?.trim() || null;
  return { baseUrl, model };
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
  temperature = 0.65,
  maxTokens = 1200,
  timeoutMs = 180000,
}) {
  const url = `${baseUrl}/chat/completions`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
  try {
    const models = await listModels(baseUrl);
    return { ok: true, baseUrl, models };
  } catch (err) {
    return { ok: false, baseUrl, error: err.message };
  }
}
