-- Catalog offers: proactive structured offers from hotels (vacant dates) and agencies (packages).

alter type meal_plan add value if not exists 'all_inclusive';

do $$ begin
  create type catalog_offer_kind as enum ('hotel_vacancy', 'agency_package');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_offer_status as enum ('draft', 'published', 'expired', 'sold_out', 'archived');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_date_mode as enum ('fixed', 'date_range', 'month_flexible');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_trip_type as enum ('leisure', 'business', 'school', 'group');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_target_type as enum ('individual', 'group');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_city_tax as enum ('included', 'excluded', 'not_applicable');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_pricing_model as enum ('per_night_per_room', 'total_package');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_room_type as enum ('single', 'double', 'twin', 'triple', 'family', 'suite');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_destination_role as enum ('primary', 'stop', 'final');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_inclusion_kind as enum ('included', 'excluded');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_interest_status as enum ('open', 'replied', 'closed');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type catalog_acceptance_status as enum ('pending', 'confirmed', 'cancelled', 'completed');
exception when duplicate_object then null;
end $$;

-- Storage bucket for offer media
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'offer-media',
  'offer-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "offer-media-public-read" on storage.objects;
create policy "offer-media-public-read"
on storage.objects for select
using (bucket_id = 'offer-media');

drop policy if exists "offer-media-provider-upload" on storage.objects;
create policy "offer-media-provider-upload"
on storage.objects for insert
with check (
  bucket_id = 'offer-media'
  and auth.uid() is not null
  and exists (
    select 1 from hotel_accounts h
    where h.user_id = auth.uid()
      and h.account_status = 'active'
      and (storage.foldername(name))[1] = h.id::text
  )
);

drop policy if exists "offer-media-provider-update" on storage.objects;
create policy "offer-media-provider-update"
on storage.objects for update
using (
  bucket_id = 'offer-media'
  and auth.uid() is not null
  and exists (
    select 1 from hotel_accounts h
    where h.user_id = auth.uid()
      and (storage.foldername(name))[1] = h.id::text
  )
);

drop policy if exists "offer-media-provider-delete" on storage.objects;
create policy "offer-media-provider-delete"
on storage.objects for delete
using (
  bucket_id = 'offer-media'
  and auth.uid() is not null
  and exists (
    select 1 from hotel_accounts h
    where h.user_id = auth.uid()
      and (storage.foldername(name))[1] = h.id::text
  )
);

create table if not exists catalog_offers (
  id uuid primary key default gen_random_uuid(),
  offer_code text not null unique,
  provider_id uuid not null references hotel_accounts(id) on delete cascade,
  provider_kind provider_kind not null,
  offer_kind catalog_offer_kind not null,

  title_it text not null,
  title_en text not null,
  status catalog_offer_status not null default 'draft',

  date_mode catalog_date_mode not null default 'fixed',
  check_in date,
  check_out date,
  valid_from date,
  valid_until date,
  flexible_month smallint check (flexible_month is null or (flexible_month >= 1 and flexible_month <= 12)),
  flexible_year smallint check (flexible_year is null or flexible_year >= 2024),
  flexible_nights smallint check (flexible_nights is null or flexible_nights >= 1),

  cover_storage_path text,
  cover_public_url text,
  gallery_paths jsonb not null default '[]'::jsonb,

  published_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint catalog_offers_dates check (
    check_out is null or check_in is null or check_out > check_in
  )
);

create index if not exists idx_catalog_offers_status on catalog_offers(status, published_at desc);
create index if not exists idx_catalog_offers_provider on catalog_offers(provider_id, status);
create index if not exists idx_catalog_offers_kind on catalog_offers(offer_kind, status);
create index if not exists idx_catalog_offers_dates on catalog_offers(check_in, check_out) where status = 'published';

create trigger catalog_offers_updated_at
before update on catalog_offers for each row execute function set_updated_at();

create table if not exists catalog_offer_destinations (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  city_id text not null,
  country_code text not null,
  city_name text not null,
  role catalog_destination_role not null default 'primary',
  sort_order integer not null default 0,
  nights_at_destination smallint,
  unique (catalog_offer_id, city_id, sort_order)
);

create index if not exists idx_catalog_offer_destinations_city on catalog_offer_destinations(city_id, country_code);
create index if not exists idx_catalog_offer_destinations_offer on catalog_offer_destinations(catalog_offer_id, sort_order);

create table if not exists hotel_offer_details (
  catalog_offer_id uuid primary key references catalog_offers(id) on delete cascade,
  accommodation_type structure_type not null,
  board_basis meal_plan not null,
  pricing_model catalog_pricing_model not null,
  price_amount numeric(12,2) not null check (price_amount > 0),
  currency text not null default 'EUR',
  min_stay_nights smallint not null default 1 check (min_stay_nights >= 1),
  max_occupancy_per_room smallint check (max_occupancy_per_room is null or max_occupancy_per_room >= 1),
  cancellation_policy_it text not null,
  cancellation_policy_en text not null,
  city_tax catalog_city_tax not null default 'excluded',
  perks jsonb not null default '[]'::jsonb,
  is_weekend_offer boolean not null default false
);

create table if not exists hotel_offer_rooms (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  room_type catalog_room_type not null,
  rooms_available integer not null default 1 check (rooms_available >= 0),
  max_occupancy smallint check (max_occupancy is null or max_occupancy >= 1),
  price_override numeric(12,2) check (price_override is null or price_override > 0),
  sort_order integer not null default 0
);

create index if not exists idx_hotel_offer_rooms_offer on hotel_offer_rooms(catalog_offer_id, sort_order);

create table if not exists agency_offer_details (
  catalog_offer_id uuid primary key references catalog_offers(id) on delete cascade,
  trip_type catalog_trip_type not null,
  duration_days smallint not null check (duration_days >= 1),
  duration_nights smallint not null check (duration_nights >= 0),
  target_type catalog_target_type not null,
  min_participants smallint check (min_participants is null or min_participants >= 1),
  date_type catalog_date_mode not null,
  primary_hotel_name text,
  hotel_category text,
  transport_modes text[] not null default '{}',
  base_price_per_person numeric(12,2) not null check (base_price_per_person > 0),
  single_supplement numeric(12,2) check (single_supplement is null or single_supplement >= 0),
  pricing_notes_it text,
  pricing_notes_en text,
  payment_terms_it text,
  payment_terms_en text,
  cancellation_terms_it text,
  cancellation_terms_en text,
  flight_disclaimer_ack boolean not null default false
);

create table if not exists agency_offer_itinerary_days (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  day_number smallint not null check (day_number >= 1),
  title_it text not null,
  title_en text not null,
  description_it text not null,
  description_en text not null,
  meal_plan meal_plan not null,
  destination_city_id text,
  sort_order integer not null default 0,
  unique (catalog_offer_id, day_number)
);

create index if not exists idx_agency_itinerary_offer on agency_offer_itinerary_days(catalog_offer_id, sort_order);

create table if not exists agency_offer_price_tiers (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  tier_kind catalog_target_type not null,
  min_pax smallint not null check (min_pax >= 1),
  max_pax smallint check (max_pax is null or max_pax >= min_pax),
  price_per_person numeric(12,2) not null check (price_per_person > 0),
  label_it text not null,
  label_en text not null,
  sort_order integer not null default 0
);

create index if not exists idx_agency_price_tiers_offer on agency_offer_price_tiers(catalog_offer_id, sort_order);

create table if not exists agency_offer_inclusions (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  kind catalog_inclusion_kind not null,
  label_it text not null,
  label_en text not null,
  sort_order integer not null default 0
);

create index if not exists idx_agency_inclusions_offer on agency_offer_inclusions(catalog_offer_id, kind, sort_order);

create table if not exists catalog_offer_interests (
  id uuid primary key default gen_random_uuid(),
  catalog_offer_id uuid not null references catalog_offers(id) on delete cascade,
  advertiser_id uuid not null references advertiser_profiles(id) on delete cascade,
  message text,
  contact_snapshot jsonb not null default '{}'::jsonb,
  status catalog_interest_status not null default 'open',
  created_at timestamptz not null default now()
);

create index if not exists idx_catalog_offer_interests_offer on catalog_offer_interests(catalog_offer_id, created_at desc);
create index if not exists idx_catalog_offer_interests_advertiser on catalog_offer_interests(advertiser_id);

create table if not exists catalog_offer_acceptances (
  id uuid primary key default gen_random_uuid(),
  acceptance_code text not null unique,
  catalog_offer_id uuid not null references catalog_offers(id) on delete restrict,
  advertiser_id uuid not null references advertiser_profiles(id) on delete cascade,
  provider_id uuid not null references hotel_accounts(id) on delete cascade,
  snapshot_json jsonb not null,
  total_price_snapshot numeric(12,2) not null check (total_price_snapshot > 0),
  currency text not null default 'EUR',
  status catalog_acceptance_status not null default 'pending',
  accepted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_catalog_acceptances_offer on catalog_offer_acceptances(catalog_offer_id);
create index if not exists idx_catalog_acceptances_advertiser on catalog_offer_acceptances(advertiser_id);

create trigger catalog_offer_acceptances_updated_at
before update on catalog_offer_acceptances for each row execute function set_updated_at();

-- Hotel offers must target provider's own city only
create or replace function enforce_hotel_offer_destination_city()
returns trigger
language plpgsql
as $$
declare
  offer_kind_val catalog_offer_kind;
  provider_city text;
begin
  select co.offer_kind, ha.city_id
  into offer_kind_val, provider_city
  from catalog_offers co
  join hotel_accounts ha on ha.id = co.provider_id
  where co.id = new.catalog_offer_id;

  if offer_kind_val = 'hotel_vacancy' and new.city_id is distinct from provider_city then
    raise exception 'Hotel offers must target the provider own city (%)', provider_city;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_enforce_hotel_offer_destination on catalog_offer_destinations;
create trigger trg_enforce_hotel_offer_destination
before insert or update on catalog_offer_destinations
for each row execute function enforce_hotel_offer_destination_city();

-- RLS
alter table catalog_offers enable row level security;
alter table catalog_offer_destinations enable row level security;
alter table hotel_offer_details enable row level security;
alter table hotel_offer_rooms enable row level security;
alter table agency_offer_details enable row level security;
alter table agency_offer_itinerary_days enable row level security;
alter table agency_offer_price_tiers enable row level security;
alter table agency_offer_inclusions enable row level security;
alter table catalog_offer_interests enable row level security;
alter table catalog_offer_acceptances enable row level security;

create or replace function is_catalog_offer_provider(offer_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from catalog_offers co
    join hotel_accounts ha on ha.id = co.provider_id
    where co.id = offer_id
      and ha.user_id = auth.uid()
      and ha.account_status = 'active'
  );
$$;

create or replace function is_published_catalog_offer(offer_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from catalog_offers co
    where co.id = offer_id
      and co.status = 'published'
      and (co.expires_at is null or co.expires_at > now())
      and (co.check_out is null or co.check_out >= current_date)
  );
$$;

drop policy if exists "catalog_offers_public_read" on catalog_offers;
create policy "catalog_offers_public_read" on catalog_offers
for select using (
  status = 'published'
  and (expires_at is null or expires_at > now())
  and (check_out is null or check_out >= current_date)
);

drop policy if exists "catalog_offers_provider_all" on catalog_offers;
create policy "catalog_offers_provider_all" on catalog_offers
for all using (is_catalog_offer_provider(id))
with check (is_catalog_offer_provider(id));

drop policy if exists "catalog_destinations_public_read" on catalog_offer_destinations;
create policy "catalog_destinations_public_read" on catalog_offer_destinations
for select using (is_published_catalog_offer(catalog_offer_id));

drop policy if exists "catalog_destinations_provider_all" on catalog_offer_destinations;
create policy "catalog_destinations_provider_all" on catalog_offer_destinations
for all using (is_catalog_offer_provider(catalog_offer_id))
with check (is_catalog_offer_provider(catalog_offer_id));

-- Child tables: public read via published offer, provider write
do $$
declare
  tbl text;
begin
  foreach tbl in array array[
    'hotel_offer_details',
    'hotel_offer_rooms',
    'agency_offer_details',
    'agency_offer_itinerary_days',
    'agency_offer_price_tiers',
    'agency_offer_inclusions'
  ]
  loop
    execute format('drop policy if exists "%s_public_read" on %I', tbl, tbl);
    execute format(
      'create policy "%s_public_read" on %I for select using (is_published_catalog_offer(catalog_offer_id))',
      tbl, tbl
    );
    execute format('drop policy if exists "%s_provider_all" on %I', tbl, tbl);
    execute format(
      'create policy "%s_provider_all" on %I for all using (is_catalog_offer_provider(catalog_offer_id)) with check (is_catalog_offer_provider(catalog_offer_id))',
      tbl, tbl
    );
  end loop;
end $$;

drop policy if exists "catalog_interests_advertiser_insert" on catalog_offer_interests;
create policy "catalog_interests_advertiser_insert" on catalog_offer_interests
for insert with check (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_id and ap.user_id = auth.uid()
  )
  and is_published_catalog_offer(catalog_offer_id)
);

drop policy if exists "catalog_interests_advertiser_read" on catalog_offer_interests;
create policy "catalog_interests_advertiser_read" on catalog_offer_interests
for select using (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_id and ap.user_id = auth.uid()
  )
  or is_catalog_offer_provider(catalog_offer_id)
);

drop policy if exists "catalog_interests_provider_update" on catalog_offer_interests;
create policy "catalog_interests_provider_update" on catalog_offer_interests
for update using (is_catalog_offer_provider(catalog_offer_id));

drop policy if exists "catalog_acceptances_advertiser_insert" on catalog_offer_acceptances;
create policy "catalog_acceptances_advertiser_insert" on catalog_offer_acceptances
for insert with check (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_id and ap.user_id = auth.uid()
  )
  and is_published_catalog_offer(catalog_offer_id)
);

drop policy if exists "catalog_acceptances_participant_read" on catalog_offer_acceptances;
create policy "catalog_acceptances_participant_read" on catalog_offer_acceptances
for select using (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_id and ap.user_id = auth.uid()
  )
  or is_catalog_offer_provider(catalog_offer_id)
);

drop policy if exists "catalog_acceptances_advertiser_update" on catalog_offer_acceptances;
create policy "catalog_acceptances_advertiser_update" on catalog_offer_acceptances
for update using (
  exists (
    select 1 from advertiser_profiles ap
    where ap.id = advertiser_id and ap.user_id = auth.uid()
  )
);
