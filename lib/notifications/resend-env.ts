/** Legge la chiave Resend da env (nome canonico + alias comuni). */
export function getResendApiKey(): string | undefined {
  const candidates = [
    "RESEND_API_KEY",
    "RESENDAPI_KEY",
    "RESENDAPI",
    "RESEND_APIKEY",
    "RESEND_KEY",
  ];

  for (const name of candidates) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }

  return undefined;
}

export function getResendEnvDiagnostics(): {
  configured: boolean;
  sourceVar: string | null;
  wrongNameHints: string[];
} {
  const canonical = process.env.RESEND_API_KEY?.trim();
  if (canonical) {
    return { configured: true, sourceVar: "RESEND_API_KEY", wrongNameHints: [] };
  }

  const aliases = ["RESENDAPI_KEY", "RESENDAPI", "RESEND_APIKEY", "RESEND_KEY"];
  for (const name of aliases) {
    if (process.env[name]?.trim()) {
      return {
        configured: true,
        sourceVar: name,
        wrongNameHints: [`Usa RESEND_API_KEY (trovato ${name})`],
      };
    }
  }

  const wrongNameHints: string[] = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (!value?.trim()) continue;
    const k = key.toLowerCase();
    if (k.includes("resend") && key !== "RESEND_API_KEY") {
      wrongNameHints.push(`Trovata variabile "${key}" — il codice legge RESEND_API_KEY`);
    }
  }

  return { configured: false, sourceVar: null, wrongNameHints };
}
