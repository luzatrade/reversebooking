create table if not exists public.check_in_exports (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references public.hotel_accounts(id) on delete cascade,
  arrival_date date not null,
  records jsonb not null,
  guest_count smallint not null check (guest_count > 0),
  created_at timestamptz not null default now()
);

create index if not exists check_in_exports_hotel_account_id_idx
  on public.check_in_exports(hotel_account_id, created_at desc);

alter table public.check_in_exports enable row level security;

drop policy if exists "check_in_exports_select_own" on public.check_in_exports;
create policy "check_in_exports_select_own"
  on public.check_in_exports
  for select
  using (
    exists (
      select 1 from public.hotel_accounts h
      where h.id = check_in_exports.hotel_account_id
        and h.user_id = auth.uid()
    )
  );

create or replace function public.create_check_in_export(
  p_hotel_account_id uuid,
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
begin
  if not exists (
    select 1 from public.hotel_accounts h
    where h.id = p_hotel_account_id
      and h.user_id = auth.uid()
  ) then
    raise exception 'Not authorized to export guests';
  end if;

  insert into public.check_in_exports (hotel_account_id, arrival_date, records, guest_count)
  values (p_hotel_account_id, p_arrival_date, p_records, coalesce(jsonb_array_length(p_records), 0))
  returning id into export_id;

  update public.check_in_guests
  set exported_questura_at = now(),
      export_format_version = 2
  where hotel_account_id = p_hotel_account_id
    and id = any(p_guest_ids)
    and exported_questura_at is null;

  get diagnostics updated_count = row_count;
  if updated_count <> coalesce(array_length(p_guest_ids, 1), 0) then
    raise exception 'One or more guests were already exported';
  end if;

  return export_id;
end;
$$;

grant execute on function public.create_check_in_export(uuid, date, jsonb, uuid[]) to authenticated;
