-- Reverse Booking - schema completo Supabase/PostgreSQL
-- Eseguire in Supabase SQL editor o tramite supabase db push.

create extension if not exists "pgcrypto";

create type user_role as enum ('advertiser', 'hotel', 'admin');
create type advertiser_type as enum ('private_individual', 'company', 'travel_agency', 'tour_operator');
create type structure_type as enum ('hotel', 'bed_and_breakfast', 'apartment');
create type account_status as enum ('pending_verification', 'active', 'suspended', 'banned');
create type meal_plan as enum ('room_only', 'breakfast', 'half_board', 'full_board');
create type preferred_structure_type as enum ('all', 'hotel', 'bed_and_breakfast', 'apartment');
create type request_status as enum ('active', 'expired', 'deleted', 'completed');
create type offer_status as enum ('pending', 'accepted', 'rejected', 'expired');
create type subscription_status as enum ('inactive', 'trialing', 'active', 'past_due', 'unpaid', 'canceled');
create type notification_recipient_type as enum ('advertiser', 'hotel');

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role user_role not null,
  email text not null unique,
  phone_number text not null unique,
  email_verified boolean not null default false,
  phone_verified boolean not null default false,
  account_status account_status not null default 'pending_verification',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger profiles_updated_at before update on profiles for each row execute function set_updated_at();

create table if not exists advertiser_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  advertiser_type advertiser_type not null,
  first_name text not null,
  last_name text not null,
  company_name text,
  vat_number text,
  billing_address text,
  agency_name text,
  operator_name text,
  license_number text,
  website_url text,
  short_description text,
  contact_email text,
  contact_phone text,
  contact_whatsapp text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger advertiser_profiles_updated_at before update on advertiser_profiles for each row execute function set_updated_at();

create table if not exists hotel_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  structure_type structure_type not null,
  property_name text not null,
  cin_code text not null unique,
  main_photo_url text,
  gallery_photo_urls text[] not null default '{}',
  description text,
  full_address text not null,
  country_code text not null,
  country_name text not null,
  city_name text not null,
  city_id text not null,
  specific_area text,
  points_of_interest text[] not null default '{}',
  rooms_quantity integer not null check (rooms_quantity >= 1),
  services jsonb not null default '{"pool":false,"spa":false,"garage":false,"pets_allowed":false,"disabled_access":false}'::jsonb,
  public_email text,
  public_phone text,
  public_phone_clickable_url text,
  private_notification_email text not null,
  new_notification boolean not null default false,
  stripe_customer_id text,
  stripe_subscription_id text,
  subscription_status subscription_status not null default 'inactive',
  subscription_active boolean not null default false,
  current_period_end timestamptz,
  account_status account_status not null default 'pending_verification',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_hotel_accounts_city on hotel_accounts(country_code, city_id);
create index if not exists idx_hotel_accounts_subscription on hotel_accounts(subscription_active, subscription_status);
create index if not exists idx_hotel_accounts_structure_type on hotel_accounts(structure_type);
create trigger hotel_accounts_updated_at before update on hotel_accounts for each row execute function set_updated_at();

create table if not exists travel_requests (
  id uuid primary key default gen_random_uuid(),
  advertiser_id uuid not null references advertiser_profiles(id) on delete cascade,
  country_code text not null,
  country_name text not null,
  city_name text not null,
  city_id text not null,
  preferred_area text not null,
  preferred_structure_type preferred_structure_type not null default 'all',
  check_in date not null,
  check_out date not null,
  guests_count integer not null check (guests_count >= 1),
  rooms_count integer not null check (rooms_count >= 1),
  budget numeric(12,2) not null check (budget > 0),
  meal_plan meal_plan not null,
  notes text,
  visible_contact_email text,
  visible_contact_phone text,
  visible_contact_whatsapp text,
  visible_contact_website text,
  status request_status not null default 'active',
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint check_dates check (check_out > check_in)
);

create index if not exists idx_travel_requests_city on travel_requests(country_code, city_id);
create index if not exists idx_travel_requests_status_expiry on travel_requests(status, expires_at);
create index if not exists idx_travel_requests_preferred_structure on travel_requests(preferred_structure_type);
create trigger travel_requests_updated_at before update on travel_requests for each row execute function set_updated_at();

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  offer_code text unique,
  travel_request_id uuid not null references travel_requests(id) on delete cascade,
  hotel_account_id uuid not null references hotel_accounts(id) on delete cascade,
  total_price numeric(12,2) not null check (total_price > 0),
  description text not null,
  conditions text,
  meal_plan_included meal_plan not null,
  expires_at timestamptz not null,
  status offer_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists offers_one_pending_per_hotel_request
  on offers(travel_request_id, hotel_account_id)
  where status = 'pending';

create index if not exists idx_offers_request on offers(travel_request_id);
create index if not exists idx_offers_hotel on offers(hotel_account_id);
create trigger offers_updated_at before update on offers for each row execute function set_updated_at();

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_type notification_recipient_type not null,
  recipient_id uuid not null,
  travel_request_id uuid references travel_requests(id) on delete cascade,
  offer_id uuid references offers(id) on delete cascade,
  title text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_notifications_recipient on notifications(recipient_type, recipient_id, is_read, created_at desc);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid not null references hotel_accounts(id) on delete cascade,
  stripe_customer_id text not null,
  stripe_subscription_id text not null unique,
  status subscription_status not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger subscriptions_updated_at before update on subscriptions for each row execute function set_updated_at();

create table if not exists billing_invoices (
  id uuid primary key default gen_random_uuid(),
  hotel_account_id uuid references hotel_accounts(id) on delete cascade,
  stripe_invoice_id text unique,
  stripe_customer_id text,
  stripe_subscription_id text,
  invoice_number text,
  status text,
  amount_due integer,
  amount_paid integer,
  currency text,
  hosted_invoice_url text,
  invoice_pdf text,
  period_start timestamptz,
  period_end timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_billing_invoices_hotel on billing_invoices(hotel_account_id, created_at desc);

create table if not exists user_consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  terms_accepted boolean not null default false,
  privacy_accepted boolean not null default false,
  marketing_accepted boolean not null default false,
  terms_version text,
  privacy_version text,
  accepted_at timestamptz not null default now(),
  ip_address text,
  user_agent text
);

alter table profiles enable row level security;
alter table advertiser_profiles enable row level security;
alter table hotel_accounts enable row level security;
alter table travel_requests enable row level security;
alter table offers enable row level security;
alter table notifications enable row level security;
alter table subscriptions enable row level security;
alter table billing_invoices enable row level security;
alter table user_consents enable row level security;

create policy "profiles-own" on profiles for select using (auth.uid() = user_id);
create policy "profiles-admin" on profiles for all using (exists (select 1 from profiles p where p.user_id = auth.uid() and p.role = 'admin'));

create policy "advertiser-own" on advertiser_profiles for all using (auth.uid() = user_id);
create policy "hotel-own" on hotel_accounts for all using (auth.uid() = user_id);
create policy "hotel-public-active" on hotel_accounts for select using (account_status = 'active' and subscription_active = true);

create policy "requests-advertiser-own" on travel_requests for all using (
  exists (select 1 from advertiser_profiles ap where ap.id = travel_requests.advertiser_id and ap.user_id = auth.uid())
);

create policy "requests-hotel-city" on travel_requests for select using (
  status = 'active'
  and expires_at > now()
  and exists (
    select 1 from hotel_accounts h
    where h.user_id = auth.uid()
      and h.country_code = travel_requests.country_code
      and h.city_id = travel_requests.city_id
      and h.account_status = 'active'
      and h.subscription_active = true
      and (travel_requests.preferred_structure_type = 'all' or travel_requests.preferred_structure_type::text = h.structure_type::text)
  )
);

create policy "offers-hotel-own" on offers for all using (
  exists (select 1 from hotel_accounts h where h.id = offers.hotel_account_id and h.user_id = auth.uid() and h.subscription_active = true)
);

create policy "offers-advertiser-own" on offers for select using (
  exists (
    select 1 from travel_requests tr
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where tr.id = offers.travel_request_id and ap.user_id = auth.uid()
  )
);

create policy "notifications-recipient" on notifications for all using (
  (recipient_type = 'advertiser' and exists (select 1 from advertiser_profiles ap where ap.id = notifications.recipient_id and ap.user_id = auth.uid()))
  or
  (recipient_type = 'hotel' and exists (select 1 from hotel_accounts h where h.id = notifications.recipient_id and h.user_id = auth.uid()))
);

create policy "subscriptions-hotel-own" on subscriptions for select using (
  exists (select 1 from hotel_accounts h where h.id = subscriptions.hotel_account_id and h.user_id = auth.uid())
);

create policy "billing-hotel-own" on billing_invoices for select using (
  exists (select 1 from hotel_accounts h where h.id = billing_invoices.hotel_account_id and h.user_id = auth.uid())
);

create policy "consents-own" on user_consents for select using (auth.uid() = user_id);
