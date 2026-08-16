import type { AlloggiatiRecord } from '@/types/check-in';
import { ALLOGGIATI_RECORD_LENGTH } from '@/types/check-in';

/** Formato CREAFILE: 168 caratteri per riga, UTF-8, CRLF tra righe. */
export function formatAlloggiatiRecord(record: AlloggiatiRecord): string {
  const line = [
    padAlpha(record.guestTypeCode, 2),
    padDate(record.arrivalDate, 10),
    padNumeric(record.stayDays, 2),
    padAlpha(record.surname.toUpperCase(), 50),
    padAlpha(record.givenNames.toUpperCase(), 30),
    record.sexCode,
    padDate(record.birthDate, 10),
    padAlpha(record.birthMunicipalityCode, 9),
    padAlpha(record.birthProvinceCode, 2),
    padAlpha(record.birthCountryCode, 9),
    padAlpha(record.citizenshipCode, 9),
    padAlpha(record.documentTypeCode, 5),
    padAlpha(record.documentNumber.toUpperCase(), 20),
    padAlpha(record.documentIssuePlaceCode, 9),
  ].join('');

  if (line.length !== ALLOGGIATI_RECORD_LENGTH) {
    throw new Error(
      `Alloggiati record length mismatch: ${line.length} (expected ${ALLOGGIATI_RECORD_LENGTH})`,
    );
  }

  return line;
}

export function buildAlloggiatiFile(records: AlloggiatiRecord[]): Blob {
  const content = records.map(formatAlloggiatiRecord).join('\r\n');
  return new Blob([content], { type: 'text/plain;charset=utf-8' });
}

export function downloadAlloggiatiFile(records: AlloggiatiRecord[], filename: string): void {
  const blob = buildAlloggiatiFile(records);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/** ISO yyyy-mm-dd → dd/mm/yyyy (label UI). */
export function formatItalianDateLabel(isoDate: string): string {
  const [y, m, d] = isoDate.split('-');
  return `${d}/${m}/${y}`;
}

/** ISO yyyy-mm-dd → alloggiati_dd-mm-yyyy.txt */
export function alloggiatiExportFilename(isoDate: string): string {
  const [y, m, d] = isoDate.split('-');
  return `alloggiati_${d}-${m}-${y}.txt`;
}

function padDate(value: string, length: number): string {
  const normalized = value.trim();
  if (normalized.length > length) return normalized.slice(0, length);
  return normalized + ' '.repeat(length - normalized.length);
}

function padAlpha(value: string, length: number): string {
  const normalized = removeSpecialChars(value);
  if (normalized.length > length) return normalized.slice(0, length);
  return normalized + ' '.repeat(length - normalized.length);
}

function padNumeric(value: string, length: number): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length > length) return digits.slice(0, length);
  return digits.padStart(length, '0');
}

function removeSpecialChars(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9 ]/g, '');
}
