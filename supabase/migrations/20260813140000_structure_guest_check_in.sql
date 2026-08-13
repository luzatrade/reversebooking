-- FastCheckin → HotelsDrop: registro ospiti Alloggiati / Questura
-- Collegato a hotel_accounts (strutture e agenzie fornitore).
-- Sostituisce structure_guest_registrations se presente.

drop function if exists public.register_guest(
  uuid, text, text, date, date, uuid, uuid, text, date, text, text, text, guest_document_type, text, text, text, text
);
drop function if exists public.mark_guests_exported(uuid[]);

drop table if exists public.structure_guest_registrations cascade;

drop type if exists public.guest_document_type;
drop type if exists public.guest_registration_status;

alter table public.hotel_accounts
  add column if not exists questura_username text,
  add column if not exists checkin_region text not null default 'lazio';

create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references public.hotel_accounts(id) on delete cascade,
  guest_type text not null check (guest_type in ('single', 'head_family', 'family', 'head_group', 'group')),
  arrival_date date not null,
  stay_days smallint not null check (stay_days between 1 and 30),
  surname text not null,
  given_names text not null,
  sex text not null check (sex in ('M', 'F')),
  birth_date date not null,
  birth_municipality_code text,
  birth_province_code text,
  birth_country_code text not null,
  citizenship_code text not null,
  document_type_code text,
  document_number text,
  document_issue_place_code text,
  exported_questura_at timestamptz,
  exported_istat_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists guests_hotel_account_id_idx on public.guests(hotel_account_id);
create index if not exists guests_arrival_date_idx on public.guests(arrival_date);
create index if not exists guests_export_pending_idx on public.guests(hotel_account_id, exported_questura_at)
  where exported_questura_at is null;

comment on table public.guests is 'Ospiti registrati per export Questura (Alloggiati Web).';

create or replace function public.current_hotel_account_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select id from public.hotel_accounts where user_id = auth.uid() limit 1;
$$;

create or replace function public.register_guest(p_guest jsonb)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hotel_account_id uuid;
  v_guest_id uuid;
begin
  v_hotel_account_id := public.current_hotel_account_id();
  if v_hotel_account_id is null then
    raise exception 'Nessuna struttura collegata all''utente';
  end if;

  insert into public.guests (
    hotel_account_id, guest_type, arrival_date, stay_days,
    surname, given_names, sex, birth_date,
    birth_municipality_code, birth_province_code, birth_country_code,
    citizenship_code, document_type_code, document_number, document_issue_place_code
  ) values (
    v_hotel_account_id,
    p_guest->>'guest_type',
    (p_guest->>'arrival_date')::date,
    (p_guest->>'stay_days')::smallint,
    p_guest->>'surname',
    p_guest->>'given_names',
    p_guest->>'sex',
    (p_guest->>'birth_date')::date,
    nullif(p_guest->>'birth_municipality_code', ''),
    nullif(p_guest->>'birth_province_code', ''),
    p_guest->>'birth_country_code',
    p_guest->>'citizenship_code',
    nullif(p_guest->>'document_type_code', ''),
    nullif(p_guest->>'document_number', ''),
    nullif(p_guest->>'document_issue_place_code', '')
  )
  returning id into v_guest_id;

  return v_guest_id;
end;
$$;

create or replace function public.mark_guests_exported(p_guest_ids uuid[])
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hotel_account_id uuid;
begin
  v_hotel_account_id := public.current_hotel_account_id();
  if v_hotel_account_id is null then
    raise exception 'Nessuna struttura collegata all''utente';
  end if;

  update public.guests
  set exported_questura_at = now()
  where id = any(p_guest_ids)
    and hotel_account_id = v_hotel_account_id
    and exported_questura_at is null;
end;
$$;

revoke all on function public.register_guest(jsonb) from public;
grant execute on function public.register_guest(jsonb) to authenticated;

revoke all on function public.mark_guests_exported(uuid[]) from public;
grant execute on function public.mark_guests_exported(uuid[]) to authenticated;

alter table public.guests enable row level security;

drop policy if exists "guests_select_own_hotel" on public.guests;
create policy "guests_select_own_hotel"
  on public.guests for select to authenticated
  using (hotel_account_id = public.current_hotel_account_id());

drop policy if exists "guests_insert_own_hotel" on public.guests;
create policy "guests_insert_own_hotel"
  on public.guests for insert to authenticated
  with check (hotel_account_id = public.current_hotel_account_id());

drop policy if exists "guests_update_own_hotel" on public.guests;
create policy "guests_update_own_hotel"
  on public.guests for update to authenticated
  using (hotel_account_id = public.current_hotel_account_id())
  with check (hotel_account_id = public.current_hotel_account_id());
