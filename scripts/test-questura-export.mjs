#!/usr/bin/env node
/** Smoke test formato export Alloggiati (168 char/riga, codici ufficiali). */
import { formatAlloggiatiRecord, buildAlloggiatiFile } from '../lib/check-in/export/questura.ts';
import {
  guestToAlloggiatiRecord,
  GUEST_TYPE_CODES,
  validateGuestForExport,
} from '../lib/check-in/export/guestMapper.ts';
import { ALLOGGIATI_RECORD_LENGTH } from '../types/check-in.ts';

const OFFICIAL_TYPES = {
  single: '16',
  head_family: '17',
  head_group: '18',
  family: '19',
  group: '20',
};

for (const [key, code] of Object.entries(OFFICIAL_TYPES)) {
  if (GUEST_TYPE_CODES[key] !== code) {
    console.error(`FAIL guest type ${key}: got ${GUEST_TYPE_CODES[key]}, expected ${code}`);
    process.exit(1);
  }
}

const sample = {
  id: '1',
  hotelAccountId: 'x',
  guestType: 'single',
  arrivalDate: '2026-08-20',
  stayDays: 3,
  surname: "D'ANGELO",
  givenNames: 'MARIO',
  sex: 'M',
  birthDate: '1990-05-15',
  birthMunicipalityCode: '412058091',
  birthProvinceCode: 'RM',
  birthCountryCode: '100000100',
  citizenshipCode: '100000100',
  documentTypeCode: 'IDENT',
  documentNumber: 'CA12345AB',
  documentIssuePlaceCode: '412058091',
};

validateGuestForExport(sample);

const rec = guestToAlloggiatiRecord(sample);
const line = formatAlloggiatiRecord(rec);
console.log('single line length', line.length, '/', ALLOGGIATI_RECORD_LENGTH);

const family = { ...sample, guestType: 'family', documentTypeCode: undefined };
const famLine = formatAlloggiatiRecord(guestToAlloggiatiRecord(family));
console.log('family type', famLine.slice(0, 2), '(expected 19)');
console.log('family doc blank', famLine.slice(134).trim() === '' ? 'OK' : 'FAIL');

const blob = buildAlloggiatiFile([rec, guestToAlloggiatiRecord(family)]);
const text = await blob.text();
const lines = text.split('\r\n');
console.log('file lines', lines.length, 'each 168?', lines.every((l) => l.length === 168));

try {
  validateGuestForExport({ ...sample, birthMunicipalityCode: '058091001' });
  console.error('FAIL legacy comune should throw');
  process.exit(1);
} catch {
  console.log('legacy comune rejected OK');
}

if (line.length !== 168 || famLine.slice(0, 2) !== '19') {
  process.exit(1);
}

console.log('All checks passed');
