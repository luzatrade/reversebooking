/** Check digit ICAO 9303 (usato in MRZ / CIE italiana). */
const WEIGHTS = [7, 3, 1] as const;
const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function mrzCheckDigit(input: string): string {
  let sum = 0;
  const normalized = input.toUpperCase().replace(/[^A-Z0-9<]/g, '');
  for (let i = 0; i < normalized.length; i++) {
    const ch = normalized[i]!;
    const value = ch === '<' ? 0 : CHARS.indexOf(ch);
    sum += (value < 0 ? 0 : value) * WEIGHTS[i % 3]!;
  }
  return String(sum % 10);
}

const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;

/** Valida numero CIE italiano (AA#####AA#) inclusa cifra di controllo finale. */
export function validateItalianCieDocumentNumber(documentNumber: string): boolean {
  const doc = documentNumber.replace(/<+$/, '').toUpperCase();
  if (!ITALIAN_CIE_DOC.test(doc)) return false;
  const body = doc.slice(0, 9);
  const check = doc.slice(9, 10);
  return mrzCheckDigit(body) === check;
}
