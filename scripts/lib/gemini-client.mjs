/**
 * Google Gemini API (AI Studio) — generateContent.
 */

const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "gemini-2.0-flash";

function quotaHint(status, bodyText) {
  if (status !== 429) return "";
  if (bodyText.includes("limit: 0")) {
    return "\n→ Quota free tier = 0: attiva billing su https://aistudio.google.com/apikey o verifica il piano API.";
  }
  return "\n→ Rate limit: riprova tra qualche secondo o riduci GEMINI_DELAY_MS.";
}

export function getGeminiConfig() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const model = process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL;
  return { apiKey, model };
}

export async function listGeminiModels(apiKey) {
  const res = await fetch(`${API_BASE}/models`, {
    headers: { "x-goog-api-key": apiKey },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Gemini /models → ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return (data.models ?? [])
    .map((m) => m.name?.replace(/^models\//, ""))
    .filter((n) => n?.includes("gemini"));
}

export async function probeGemini() {
  const { apiKey, model } = getGeminiConfig();
  if (!apiKey) return { ok: false, error: "GEMINI_API_KEY non configurata" };
  try {
    const models = await listGeminiModels(apiKey);
    return { ok: true, model, models: models.slice(0, 8) };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function geminiGenerateContent({
  system,
  user,
  model = getGeminiConfig().model,
  temperature = 0.7,
  maxOutputTokens = 1400,
  jsonMode = true,
  retries = 3,
}) {
  const apiKey = getGeminiConfig().apiKey;
  if (!apiKey) throw new Error("GEMINI_API_KEY non configurata");

  const url = `${API_BASE}/models/${model}:generateContent`;
  const body = {
    system_instruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text: user }] }],
    generationConfig: {
      temperature,
      maxOutputTokens,
      ...(jsonMode ? { responseMimeType: "application/json" } : {}),
    },
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120000),
    });

    if (res.status === 429 && attempt < retries) {
      await sleep(2000 * (attempt + 1));
      continue;
    }

    if (!res.ok) {
      const bodyText = await res.text();
      throw new Error(`Gemini generateContent → ${res.status}: ${bodyText}${quotaHint(res.status, bodyText)}`);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("")?.trim();
    if (!text) throw new Error("Risposta Gemini vuota");
    return text;
  }

  throw new Error("Gemini: max retries exceeded");
}
