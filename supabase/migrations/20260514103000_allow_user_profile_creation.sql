-- Permette agli utenti autenticati di creare il proprio profilo dopo registrazione.
-- PostgreSQL/Supabase non supporta CREATE POLICY IF NOT EXISTS,
-- quindi prima eliminiamo eventuali policy esistenti e poi le ricreiamo.

drop policy if exists "profiles-insert-own" on profiles;
create policy "profiles-insert-own"
on profiles
for insert
with check (auth.uid() = user_id);

drop policy if exists "profiles-update-own" on profiles;
create policy "profiles-update-own"
on profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "advertiser-insert-own" on advertiser_profiles;
create policy "advertiser-insert-own"
on advertiser_profiles
for insert
with check (auth.uid() = user_id);

drop policy if exists "advertiser-update-own" on advertiser_profiles;
create policy "advertiser-update-own"
on advertiser_profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "hotel-insert-own" on hotel_accounts;
create policy "hotel-insert-own"
on hotel_accounts
for insert
with check (auth.uid() = user_id);

drop policy if exists "hotel-update-own" on hotel_accounts;
create policy "hotel-update-own"
on hotel_accounts
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "consents-insert-own" on user_consents;
create policy "consents-insert-own"
on user_consents
for insert
with check (auth.uid() = user_id);
