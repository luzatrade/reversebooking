create table if not exists public.check_in_nuclei (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references public.hotel_accounts(id) on delete cascade,
  nucleus_type text not null check (nucleus_type in ('family', 'group')),
  status text not null default 'open' check (status in ('open', 'completed')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists check_in_nuclei_open_idx
  on public.check_in_nuclei(hotel_account_id, created_at desc)
  where status = 'open';

alter table public.check_in_nuclei enable row level security;

drop policy if exists "check_in_nuclei_select_own" on public.check_in_nuclei;
create policy "check_in_nuclei_select_own"
  on public.check_in_nuclei
  for select
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_nuclei.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

drop policy if exists "check_in_nuclei_insert_own" on public.check_in_nuclei;
create policy "check_in_nuclei_insert_own"
  on public.check_in_nuclei
  for insert
  with check (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_nuclei.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

drop policy if exists "check_in_nuclei_update_own" on public.check_in_nuclei;
create policy "check_in_nuclei_update_own"
  on public.check_in_nuclei
  for update
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_nuclei.hotel_account_id
        and h.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_nuclei.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

alter table public.check_in_guests
  add column if not exists nucleus_id uuid references public.check_in_nuclei(id) on delete set null;

drop policy if exists "check_in_nuclei_delete_empty_own" on public.check_in_nuclei;
create policy "check_in_nuclei_delete_empty_own"
  on public.check_in_nuclei
  for delete
  using (
    status = 'open'
    and exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_nuclei.hotel_account_id
        and h.user_id = auth.uid()
    )
    and not exists (
      select 1 from public.check_in_guests g
      where g.nucleus_id = check_in_nuclei.id
    )
  );

create index if not exists check_in_guests_nucleus_idx
  on public.check_in_guests(nucleus_id, created_at asc)
  where nucleus_id is not null;

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
    and (
      nucleus_id is null
      or exists (
        select 1 from public.check_in_nuclei n
        where n.id = check_in_guests.nucleus_id
          and n.hotel_account_id = check_in_guests.hotel_account_id
          and n.status = 'open'
      )
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
    and (
      nucleus_id is null
      or exists (
        select 1 from public.check_in_nuclei n
        where n.id = check_in_guests.nucleus_id
          and n.hotel_account_id = check_in_guests.hotel_account_id
          and n.status = 'open'
      )
    )
  );

drop policy if exists "check_in_guests_delete_own_pending" on public.check_in_guests;
create policy "check_in_guests_delete_own_pending"
  on public.check_in_guests
  for delete
  using (
    exported_questura_at is null
    and exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_guests.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

create or replace function public.create_check_in_nucleus_export(
  p_hotel_account_id uuid,
  p_nucleus_id uuid,
  p_arrival_date date,
  p_records jsonb,
  p_guest_ids uuid[]
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  export_id uuid;
  updated_count integer;
  open_guest_count integer;
  head_count integer;
  nucleus_kind text;
  member_kind text;
begin
  if not exists (
    select 1 from public.hotel_accounts h
    where h.id = p_hotel_account_id
      and h.user_id = auth.uid()
  ) then
    raise exception 'Not authorized to export this nucleus';
  end if;

  select nucleus_type into nucleus_kind
  from public.check_in_nuclei
  where id = p_nucleus_id
    and hotel_account_id = p_hotel_account_id
    and status = 'open'
  for update;

  if nucleus_kind is null then
    raise exception 'Nucleus not found or already completed';
  end if;

  member_kind := case nucleus_kind when 'family' then 'family' else 'group' end;

  if coalesce(array_length(p_guest_ids, 1), 0) < 2
    or coalesce(jsonb_array_length(p_records), 0) <> array_length(p_guest_ids, 1) then
    raise exception 'A family or group export must contain at least two matching guest records';
  end if;

  select count(*) into open_guest_count
  from public.check_in_guests
  where hotel_account_id = p_hotel_account_id
    and nucleus_id = p_nucleus_id
    and exported_questura_at is null;

  if open_guest_count <> array_length(p_guest_ids, 1) then
    raise exception 'Export must contain every unexported guest in this nucleus';
  end if;

  select count(*) into head_count
  from public.check_in_guests
  where hotel_account_id = p_hotel_account_id
    and nucleus_id = p_nucleus_id
    and id = any(p_guest_ids)
    and guest_type = case nucleus_kind when 'family' then 'head_family' else 'head_group' end;

  if head_count <> 1 or exists (
    select 1
    from public.check_in_guests
    where hotel_account_id = p_hotel_account_id
      and nucleus_id = p_nucleus_id
      and id = any(p_guest_ids)
      and guest_type not in (case nucleus_kind when 'family' then 'head_family' else 'head_group' end, member_kind)
  ) then
    raise exception 'Nucleus must contain exactly one head and members of the matching type';
  end if;

  insert into public.check_in_exports (hotel_account_id, arrival_date, records, guest_count)
  values (p_hotel_account_id, p_arrival_date, p_records, array_length(p_guest_ids, 1))
  returning id into export_id;

  update public.check_in_guests
  set exported_questura_at = now(),
      export_format_version = 2
  where hotel_account_id = p_hotel_account_id
    and nucleus_id = p_nucleus_id
    and id = any(p_guest_ids)
    and exported_questura_at is null;

  get diagnostics updated_count = row_count;
  if updated_count <> array_length(p_guest_ids, 1) then
    raise exception 'One or more nucleus guests were already exported or do not belong to this nucleus';
  end if;

  update public.check_in_nuclei
  set status = 'completed', completed_at = now()
  where id = p_nucleus_id and hotel_account_id = p_hotel_account_id;

  return export_id;
end;
$$;

grant execute on function public.create_check_in_nucleus_export(uuid, uuid, date, jsonb, uuid[]) to authenticated;