-- Public read for onboarding hotel catalog profiles (vetrina + /hotel/onboarding/[id]).
alter table public.onboarding_hotels enable row level security;

drop policy if exists onboarding_hotels_public_read on public.onboarding_hotels;
create policy onboarding_hotels_public_read
  on public.onboarding_hotels
  for select
  to anon, authenticated
  using (status in ('unclaimed', 'claimed'));
