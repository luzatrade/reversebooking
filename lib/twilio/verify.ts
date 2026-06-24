import { normalizePhoneE164 } from "@/lib/phone/normalize";

function twilioConfig() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
  if (!accountSid || !authToken || !serviceSid) return null;
  return { accountSid, authToken, serviceSid };
}

function authHeader(accountSid: string, authToken: string) {
  return `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`;
}

export function isTwilioVerifyConfigured() {
  return twilioConfig() !== null;
}

export async function startVoiceVerification(rawPhone: string) {
  const phone = normalizePhoneE164(rawPhone);
  if (!phone) throw new Error("Numero di telefono non valido.");

  const config = twilioConfig();
  if (!config) throw new Error("Verifica telefonica non configurata. Contatta assistenza.");

  const res = await fetch(
    `https://verify.twilio.com/v2/Services/${config.serviceSid}/Verifications`,
    {
      method: "POST",
      headers: {
        Authorization: authHeader(config.accountSid, config.authToken),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: phone, Channel: "call" }),
    },
  );

  const payload = (await res.json()) as { status?: string; message?: string; code?: number };
  if (!res.ok) {
    throw new Error(payload.message ?? "Impossibile avviare la chiamata di verifica.");
  }

  return { phone, status: payload.status ?? "pending" };
}

export async function checkVoiceVerification(rawPhone: string, code: string) {
  const phone = normalizePhoneE164(rawPhone);
  if (!phone) throw new Error("Numero di telefono non valido.");

  const trimmedCode = code.replace(/\D/g, "");
  if (trimmedCode.length < 4) throw new Error("Codice non valido.");

  const config = twilioConfig();
  if (!config) throw new Error("Verifica telefonica non configurata. Contatta assistenza.");

  const res = await fetch(
    `https://verify.twilio.com/v2/Services/${config.serviceSid}/VerificationCheck`,
    {
      method: "POST",
      headers: {
        Authorization: authHeader(config.accountSid, config.authToken),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: phone, Code: trimmedCode }),
    },
  );

  const payload = (await res.json()) as { status?: string; message?: string };
  if (!res.ok) {
    throw new Error(payload.message ?? "Verifica non riuscita.");
  }

  return { phone, status: payload.status ?? "pending", approved: payload.status === "approved" };
}
