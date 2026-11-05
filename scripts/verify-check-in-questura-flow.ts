import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'mrz';
import { guestToAlloggiatiRecord } from '../lib/check-in/export/guestMapper';
import { formatAlloggiatiRecord } from '../lib/check-in/export/questura';
import { documentTypeFromMrz } from '../lib/check-in/documentTypeFromMrz';
import {
  ITALY_CODE,
  searchComuni,
  searchIssuePlaces,
  searchNations,
  type ComuneEntry,
  type NationEntry,
} from '../lib/check-in/lookup/alloggiatiTables';
import type { GuestRecord } from '../types/check-in';

const comuni = JSON.parse(readFileSync('public/data/comuni.json', 'utf8')) as ComuneEntry[];
const nations = JSON.parse(readFileSync('public/data/nations.json', 'utf8')) as NationEntry[];

/** CIE Rottino — MRZ dal retro carta (TD1 italiana). */
const CIE_ROTTINO_MRZ = [
  'C<ITACA74219GP2<<<<<<<<<<<<<<<',
  '9907308F3007309ITA<<<<<<<<<<<0',
  'ROTTINO<<ALESSANDRA<<<<<<<<<<<',
].join('\n');

function milanoComune(): ComuneEntry {
  const m = comuni.find((c) => c.name === 'MILANO');
  assert.ok(m, 'MILANO must exist in comuni.json');
  return m;
}

function assertRecord168(guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>) {
  const rec = guestToAlloggiatiRecord({ ...guest, hotelAccountId: 'test' });
  const line = formatAlloggiatiRecord(rec);
  assert.equal(line.length, 168, `CREAFILE line length ${line.length}`);
  return { rec, line };
}

console.log('=== MRZ reference (CIE Rottino — TD1 italiana) ===');
const mrzResult = parse(CIE_ROTTINO_MRZ);
assert.equal(mrzResult.fields.lastName, 'ROTTINO');
assert.equal(mrzResult.fields.firstName, 'ALESSANDRA');
// mrz npm può troncare l'ultimo check digit; l'app usa parseMrz/perField con doc completo.
const docFromMrz = mrzResult.fields.documentNumber as string;
console.log('mrz package doc:', docFromMrz, 'valid:', mrzResult.valid);
assert.match('CA74219GP2', new RegExp(`^${docFromMrz}`));

console.log('\n=== documentTypeFromMrz ===');
assert.equal(documentTypeFromMrz('TD1', 'ITA'), 'IDELE');
assert.equal(documentTypeFromMrz('TD3', 'ITA'), 'PASOR');
assert.equal(documentTypeFromMrz(undefined, 'DEU'), 'IDENT');

console.log('\n=== Lookup tables ===');
const milano = milanoComune();
assert.equal(searchComuni(comuni, 'MILANO')[0]?.name, 'MILANO');
assert.doesNotThrow(() => searchNations(nations, 'ITALIA'));
assert.ok(searchIssuePlaces(comuni, nations, 'MILANO').some((p) => p.label === 'MILANO'));

console.log('\n=== Questura CREAFILE (happy path CIE) ===');
const guestBase: Omit<GuestRecord, 'id' | 'hotelAccountId'> = {
  guestType: 'single',
  arrivalDate: '2026-09-02',
  stayDays: 1,
  surname: 'ROTTINO',
  givenNames: 'ALESSANDRA',
  sex: 'F',
  birthDate: '1999-07-30',
  birthMunicipalityCode: milano.code,
  birthProvinceCode: milano.province,
  birthCountryCode: ITALY_CODE,
  citizenshipCode: ITALY_CODE,
  documentTypeCode: 'IDELE',
  documentNumber: 'CA74219GP2',
  documentIssuePlaceCode: milano.code,
};

const { line } = assertRecord168(guestBase);
console.log('line ok');

console.log('\n=== Predictable export rules ===');
const foreignBirth = assertRecord168({
  ...guestBase,
  birthCountryCode: nations.find((n) => n.name === 'FRANCIA')!.code,
  birthMunicipalityCode: milano.code,
  birthProvinceCode: milano.province,
});
assert.equal(foreignBirth.rec.birthMunicipalityCode, '');

console.log('\nverify-check-in-questura-flow: OK');
