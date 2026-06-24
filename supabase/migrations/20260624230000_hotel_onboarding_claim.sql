-- Claim struttura onboarding: collegamento hotel_accounts ↔ onboarding_hotels.

alter table public.hotel_accounts
  add column if not exists onboarding_hotel_id uuid references public.onboarding_hotels(id) on delete set null;

create index if not exists idx_hotel_accounts_onboarding
  on public.hotel_accounts(onboarding_hotel_id)
  where onboarding_hotel_id is not null;

drop policy if exists onboarding_hotels_public_read on public.onboarding_hotels;
create policy onboarding_hotels_public_read
  on public.onboarding_hotels
  for select
  to anon, authenticated
  using (status in ('unclaimed', 'claimed', 'pending_verification'));
