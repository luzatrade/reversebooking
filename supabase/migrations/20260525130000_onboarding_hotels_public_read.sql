-- Abilita RLS su onboarding_hotels e permetti lettura pubblica
alter table onboarding_hotels enable row level security;

create policy "onboarding_hotels_public_read"
  on onboarding_hotels
  for select
  using (true);
