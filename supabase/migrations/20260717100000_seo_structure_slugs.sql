-- SEO: slug URL parlanti + flag indicizzabilità (onboarding + strutture partner).

alter table public.onboarding_hotels
  add column if not exists slug text,
  add column if not exists seo_indexable boolean not null default false,
  add column if not exists slug_previous text[] not null default '{}';

alter table public.hotel_accounts
  add column if not exists slug text,
  add column if not exists seo_indexable boolean not null default false,
  add column if not exists slug_previous text[] not null default '{}';

create unique index if not exists idx_onboarding_hotels_slug_unique
  on public.onboarding_hotels (slug)
  where slug is not null;

create unique index if not exists idx_hotel_accounts_slug_unique
  on public.hotel_accounts (slug)
  where slug is not null;

create index if not exists idx_onboarding_hotels_seo_indexable
  on public.onboarding_hotels (seo_indexable)
  where seo_indexable = true;

create index if not exists idx_hotel_accounts_seo_indexable
  on public.hotel_accounts (seo_indexable)
  where seo_indexable = true;
