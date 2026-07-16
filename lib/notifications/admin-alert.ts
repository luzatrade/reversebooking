import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";

const DEFAULT_ADMIN_EMAIL = "info@hotelsdrop.com";

export function resolveAdminNotifyEmail() {
  return process.env.ADMIN_NOTIFY_EMAIL?.trim() || DEFAULT_ADMIN_EMAIL;
}

export function accountKindLabel(role: string) {
  if (role === "hotel") return "Struttura";
  if (role === "agency") return "Agenzia";
  if (role === "advertiser") return "Inserzionista";
  if (role === "admin") return "Admin";
  return role;
}

type AdminAlertParams = {
  subject: string;
  title: string;
  lines: Array<{ label: string; value: string | null | undefined }>;
  consolePath?: string;
};

function buildAdminAlertHtml(params: AdminAlertParams) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://www.hotelsdrop.com";
  const rows = params.lines
    .filter((line) => line.value != null && String(line.value).trim())
    .map(
      (line) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(line.label)}</td><td style="padding:4px 0">${escapeHtml(String(line.value))}</td></tr>`,
    )
    .join("");

  const consoleLink = params.consolePath
    ? `<p style="margin-top:16px"><a href="${escapeHtml(`${appUrl}${params.consolePath}`)}">Apri in console</a></p>`
    : "";

  return `<div style="font-family:system-ui,sans-serif;line-height:1.5;color:#18181b"><p style="font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#71717a">HotelsDrop · Alert admin</p><h2 style="margin:8px 0 16px;font-size:18px">${escapeHtml(params.title)}</h2><table>${rows}</table>${consoleLink}</div>`;
}

/** Best-effort: non blocca il flusso principale se Resend non è configurato. */
export async function notifyAdminAlert(params: AdminAlertParams) {
  try {
    await sendEmailNotification({
      to: resolveAdminNotifyEmail(),
      subject: params.subject,
      html: buildAdminAlertHtml(params),
    });
  } catch {
    // best-effort
  }
}

export function notifyAdminAlertSafe(params: AdminAlertParams) {
  void notifyAdminAlert(params);
}
