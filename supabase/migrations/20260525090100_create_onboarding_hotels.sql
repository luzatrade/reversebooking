-- Step 3: Tabella hotel scoperti dal motore di onboarding.
-- Ogni record è "unclaimed" finché la struttura non rivendica il profilo.

create table if not exists onboarding_hotels (
  id uuid primary key default gen_random_uuid(),
  place_id text not null unique,
  nome text not null,
  indirizzo text,
  city_name text not null,
  city_istat text references comuni_italiani(codice_istat),
  lat numeric(9,6),
  lng numeric(9,6),
  google_maps_url text,
  website text,
  phone text,
  email text,
  main_photo_url text,
  status text not null default 'unclaimed',
  claim_token text unique,
  claim_token_expires_at timestamptz,
  claimed_by uuid references auth.users(id) on delete set null,
  invite_sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_onboarding_hotels_city on onboarding_hotels(city_istat);
create index if not exists idx_onboarding_hotels_status on onboarding_hotels(status);
create index if not exists idx_onboarding_hotels_claim on onboarding_hotels(claim_token) where claim_token is not null;
create trigger onboarding_hotels_updated_at
  before update on onboarding_hotels
  for each row execute function set_updated_at();
