-- Galleria foto per profili catalogo onboarding (come hotel_accounts).
alter table public.onboarding_hotels
  add column if not exists gallery_photo_urls text[] not null default '{}';
