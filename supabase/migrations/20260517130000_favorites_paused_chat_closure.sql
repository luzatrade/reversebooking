alter type account_status add value if not exists 'paused';

create table if not exists advertiser_hotel_favorites (
  id uuid primary key default gen_random_uuid(),
  advertiser_id uuid not null references advertiser_profiles(id) on delete cascade,
  hotel_account_id uuid not null references hotel_accounts(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (advertiser_id, hotel_account_id)
);

create index if not exists idx_advertiser_hotel_favorites_advertiser
  on advertiser_hotel_favorites(advertiser_id);

create index if not exists idx_advertiser_hotel_favorites_hotel
  on advertiser_hotel_favorites(hotel_account_id);

alter table advertiser_hotel_favorites enable row level security;

drop policy if exists "favorites-advertiser-own" on advertiser_hotel_favorites;
create policy "favorites-advertiser-own"
on advertiser_hotel_favorites
for all
to authenticated
using (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_hotel_favorites.advertiser_id
      and ap.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_hotel_favorites.advertiser_id
      and ap.user_id = auth.uid()
  )
  and exists (
    select 1 from hotel_accounts h
    where h.id = advertiser_hotel_favorites.hotel_account_id
      and h.account_status = 'active'
      and h.subscription_active = true
  )
);

create or replace function sync_hotel_subscription_pause()
returns trigger
language plpgsql
as $$
begin
  if new.subscription_active is false then
    new.account_status := 'paused';
  elsif new.subscription_active is true and old.account_status = 'paused' then
    new.account_status := 'active';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_sync_hotel_subscription_pause on hotel_accounts;
create trigger trg_sync_hotel_subscription_pause
before insert or update of subscription_active, account_status on hotel_accounts
for each row
execute function sync_hotel_subscription_pause();

create or replace function close_expired_accepted_chats()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  closed_count integer := 0;
  target_ids uuid[];
begin
  select coalesce(array_agg(o.id), '{}')
  into target_ids
  from offers o
  join travel_requests tr on tr.id = o.travel_request_id
  where o.status = 'accepted'
    and (tr.check_in::timestamp + interval '24 hours') <= now();

  if array_length(target_ids, 1) is null then
    return 0;
  end if;

  delete from offer_messages where offer_id = any(target_ids);

  update offers
  set status = 'expired', updated_at = now()
  where id = any(target_ids) and status = 'accepted';

  get diagnostics closed_count = row_count;
  return closed_count;
end;
$$;

grant execute on function close_expired_accepted_chats() to authenticated;
grant execute on function close_expired_accepted_chats() to service_role;
