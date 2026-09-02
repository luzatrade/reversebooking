-- Telemetria OCR check-in (MRZ vs dati salvati) per miglioramento bench offline.

create table if not exists public.check_in_ocr_telemetry (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references public.hotel_accounts(id) on delete cascade,
  event_kind text not null check (event_kind in ('scan', 'save', 'export')),
  document_type_mrz text,
  nationality text,
  mrz_valid boolean,
  review_fields text[],
  mrz_raw_hash text,
  ocr_payload jsonb,
  saved_payload jsonb,
  export_guest_count integer,
  created_at timestamptz not null default now()
);

create index if not exists check_in_ocr_telemetry_hotel_idx
  on public.check_in_ocr_telemetry(hotel_account_id, created_at desc);

alter table public.check_in_ocr_telemetry enable row level security;

drop policy if exists "check_in_ocr_telemetry_insert_own" on public.check_in_ocr_telemetry;
create policy "check_in_ocr_telemetry_insert_own"
  on public.check_in_ocr_telemetry
  for insert
  with check (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_ocr_telemetry.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

drop policy if exists "check_in_ocr_telemetry_select_own" on public.check_in_ocr_telemetry;
create policy "check_in_ocr_telemetry_select_own"
  on public.check_in_ocr_telemetry
  for select
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_ocr_telemetry.hotel_account_id
        and h.user_id = auth.uid()
    )
  );
