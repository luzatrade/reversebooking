alter table public.onboarding_hotels
  add column if not exists description_en text;

alter table public.hotel_accounts
  add column if not exists description_en text;

comment on column public.onboarding_hotels.description is 'Descrizione pubblica italiana';
comment on column public.onboarding_hotels.description_en is 'Descrizione pubblica inglese';
comment on column public.hotel_accounts.description is 'Descrizione pubblica italiana';
comment on column public.hotel_accounts.description_en is 'Descrizione pubblica inglese';
