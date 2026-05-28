/**
 * Mitigazione CSRF per route che mutano stato e si autenticano via cookie.
 * Verifica che l'header Origin (o Referer come fallback) corrisponda all'host
 * della richiesta o a un'origine esplicitamente consentita.
 *
 * Le richieste cross-site forgiate da un altro sito invieranno un Origin diverso
 * (i browser lo impostano automaticamente sulle richieste non-GET) e verranno bloccate.
 */
function allowedHosts(request: Request): Set<string> {
  const hosts = new Set<string>();

  const host = request.headers.get("host");
  if (host) hosts.add(host.toLowerCase());

  for (const envUrl of [process.env.NEXT_PUBLIC_APP_URL, process.env.NEXT_PUBLIC_SITE_URL]) {
    if (!envUrl) continue;
    try {
      hosts.add(new URL(envUrl).host.toLowerCase());
    } catch {
      /* env malformato: ignora */
    }
  }

  return hosts;
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const source = origin ?? referer;

  // Nessun Origin/Referer: tipico di richieste server-to-server o navigazioni
  // dirette. Per le nostre route (chiamate dal browser via fetch) l'header è
  // sempre presente; in sua assenza preferiamo bloccare.
  if (!source) return false;

  let sourceHost: string;
  try {
    sourceHost = new URL(source).host.toLowerCase();
  } catch {
    return false;
  }

  return allowedHosts(request).has(sourceHost);
}
