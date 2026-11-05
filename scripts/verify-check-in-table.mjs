#!/usr/bin/env node
/**
 * Verifica tabella check_in_guests su Supabase (insert + read + cleanup).
 * Richiede NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
 */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env.local'), override: true });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.log('SKIP verify-check-in-table: Supabase secrets missing');
  process.exit(0);
}

const { createClient } = await import('@supabase/supabase-js');
const admin = createClient(url, key, { auth: { persistSession: false } });

const { data: hotel, error: hotelErr } = await admin
  .from('hotel_accounts')
  .select('id')
  .limit(1)
  .maybeSingle();

if (hotelErr || !hotel?.id) {
  console.log('SKIP verify-check-in-table: no hotel_accounts row:', hotelErr?.message ?? 'empty');
  process.exit(0);
}

const row = {
  hotel_account_id: hotel.id,
  guest_type: 'single',
  arrival_date: '2099-01-01',
  stay_days: 1,
  surname: 'VERIFY',
  given_names: 'SCRIPT',
  sex: 'M',
  birth_date: '1990-01-01',
  birth_country_code: '100000100',
  citizenship_code: '100000100',
  document_type_code: 'IDELE',
  document_number: 'ZZ00000ZZ0',
  document_issue_place_code: '403015146',
};

const { data: inserted, error: insErr } = await admin
  .from('check_in_guests')
  .insert(row)
  .select('id, surname, export_format_version')
  .single();

if (insErr) {
  console.log('FAIL insert check_in_guests:', insErr.message);
  process.exit(1);
}

const { data: readBack, error: selErr } = await admin
  .from('check_in_guests')
  .select('surname, given_names')
  .eq('id', inserted.id)
  .maybeSingle();

if (selErr || readBack?.surname !== 'VERIFY') {
  console.log('FAIL select check_in_guests:', selErr?.message ?? 'no row');
  process.exit(1);
}

await admin.from('check_in_guests').delete().eq('id', inserted.id);

console.log('PASS verify-check-in-table (insert+read+cleanup)');
