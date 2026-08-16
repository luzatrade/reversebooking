-- Registro ospiti Alloggiati per strutture/agenzie HotelsDrop

create table if not exists public.check_in_guests (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references public.hotel_accounts(id) on delete cascade,
  guest_type text not null check (guest_type in ('single', 'head_family', 'head_group', 'family', 'group')),
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
  created_at timestamptz not null default now()
);

create index if not exists check_in_guests_hotel_account_id_idx
  on public.check_in_guests(hotel_account_id);

create index if not exists check_in_guests_arrival_date_idx
  on public.check_in_guests(arrival_date);

create index if not exists check_in_guests_export_pending_idx
  on public.check_in_guests(hotel_account_id)
  where exported_questura_at is null;

alter table public.check_in_guests enable row level security;

drop policy if exists "check_in_guests_select_own" on public.check_in_guests;
create policy "check_in_guests_select_own"
  on public.check_in_guests
  for select
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_guests.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

drop policy if exists "check_in_guests_insert_own" on public.check_in_guests;
create policy "check_in_guests_insert_own"
  on public.check_in_guests
  for insert
  with check (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_guests.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

drop policy if exists "check_in_guests_update_own" on public.check_in_guests;
create policy "check_in_guests_update_own"
  on public.check_in_guests
  for update
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_guests.hotel_account_id
        and h.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_guests.hotel_account_id
        and h.user_id = auth.uid()
    )
  );
