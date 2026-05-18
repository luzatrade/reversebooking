const EMAIL_PATTERN = /[a-z0-9._%+-]+\s*@\s*[a-z0-9.-]+\s*\.\s*[a-z]{2,}/i;
const URL_PATTERN = /\b((https?:\/\/)?(www\.)?[a-z0-9-]+\.(com|it|net|org|co|io|hotel|travel|eu|info|biz)\b|wa\.me|t\.me|telegram\.me|instagram\.com|facebook\.com|fb\.com)/i;
const SOCIAL_PATTERN = /(^|\s)@[a-z0-9._-]{3,}/i;
const CONTACT_WORDS_PATTERN = /\b(whatsapp|wa|telegram|instagram|facebook|email|mail|e-mail|telefono|tel|cellulare|cell|numero|contattami|chiamami|scrivimi|sms|messaggio privato|dm)\b/i;

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function hasPhoneLikeNumber(value: string) {
  const normalized = digitsOnly(value);
  if (/^(39|0039)?3\d{8,10}$/.test(normalized)) return true;
  if (/^(39|0039)?0\d{8,11}$/.test(normalized)) return true;
  if (normalized.length >= 9 && normalized.length <= 14 && /\d/.test(normalized)) {
    const spacedPhone = /(?:\+?\d[\s().-]*){9,14}/.test(value);
    return spacedPhone;
  }
  return false;
}

export function findForbiddenContact(value: string | null | undefined) {
  const text = value?.trim() ?? "";
  if (!text) return null;
  if (EMAIL_PATTERN.test(text)) return "email";
  if (URL_PATTERN.test(text)) return "link o sito web";
  if (SOCIAL_PATTERN.test(text)) return "profilo social";
  if (hasPhoneLikeNumber(text)) return "numero di telefono";
  if (CONTACT_WORDS_PATTERN.test(text)) return "invito al contatto diretto";
  return null;
}

export function validateNoContact(value: string | null | undefined, fieldLabel = "testo") {
  const forbidden = findForbiddenContact(value);
  if (!forbidden) return null;
  return `Nel campo ${fieldLabel} non puoi inserire ${forbidden}. I contatti potranno essere condivisi solo tramite i pulsanti autorizzati o dopo l’accettazione dell’offerta.`;
}

export function validateNoContactsInFields(fields: Array<{ label: string; value: string | null | undefined }>) {
  for (const field of fields) {
    const error = validateNoContact(field.value, field.label);
    if (error) return error;
  }
  return null;
}
