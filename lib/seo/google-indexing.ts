import { createSign } from "crypto";

const INDEXING_SCOPE = "https://www.googleapis.com/auth/indexing";
const INDEXING_PUBLISH_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";

export type GoogleIndexingCredentials = {
  client_email: string;
  private_key: string;
  token_uri: string;
};

export type GoogleIndexingPublishResult = {
  ok: boolean;
  status?: number;
  error?: string;
};

function parseCredentialsFromEnv(): GoogleIndexingCredentials | null {
  const raw = process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON?.trim();
  if (!raw) return null;
  try {
    const json = JSON.parse(raw) as GoogleIndexingCredentials;
    if (!json.client_email || !json.private_key || !json.token_uri) return null;
    return json;
  } catch {
    return null;
  }
}

function base64UrlJson(value: unknown): string {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function signJwt(credentials: GoogleIndexingCredentials): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: credentials.client_email,
    scope: INDEXING_SCOPE,
    aud: credentials.token_uri,
    iat: now,
    exp: now + 3600,
  };
  const signingInput = `${base64UrlJson(header)}.${base64UrlJson(payload)}`;
  const signature = createSign("RSA-SHA256").update(signingInput).sign(credentials.private_key, "base64url");
  return `${signingInput}.${signature}`;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(credentials: GoogleIndexingCredentials): Promise<string | null> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) return cachedToken.value;

  const assertion = signJwt(credentials);
  const response = await fetch(credentials.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => response.statusText);
    console.warn("[google-indexing] token:", response.status, text);
    return null;
  }

  const body = (await response.json()) as { access_token?: string; expires_in?: number };
  if (!body.access_token) return null;

  cachedToken = {
    value: body.access_token,
    expiresAt: now + (body.expires_in ?? 3600) * 1000,
  };
  return body.access_token;
}

export function isGoogleIndexingConfigured(): boolean {
  return Boolean(parseCredentialsFromEnv());
}

export async function publishGoogleUrlNotification(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED",
): Promise<GoogleIndexingPublishResult> {
  const credentials = parseCredentialsFromEnv();
  if (!credentials) {
    return { ok: false, error: "GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON non configurata" };
  }

  const token = await getAccessToken(credentials);
  if (!token) {
    return { ok: false, error: "Impossibile ottenere access token Google" };
  }

  const response = await fetch(INDEXING_PUBLISH_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url.trim(), type }),
  });

  if (response.ok) {
    return { ok: true, status: response.status };
  }

  const error = await response.text().catch(() => response.statusText);
  return { ok: false, status: response.status, error: error || response.statusText };
}

export function googleIndexingDailyLimit(): number {
  const parsed = Number(process.env.GOOGLE_INDEXING_DAILY_LIMIT ?? "100");
  if (!Number.isFinite(parsed) || parsed < 1) return 100;
  return Math.min(500, Math.floor(parsed));
}