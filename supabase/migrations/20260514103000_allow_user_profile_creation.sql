-- Permette agli utenti autenticati di creare il proprio profilo dopo registrazione.

create policy if not exists "profiles-insert-own"
on profiles
for insert
with check (auth.uid() = user_id);

create policy if not exists "profiles-update-own"
on profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy if not exists "advertiser-insert-own"
on advertiser_profiles
for insert
with check (auth.uid() = user_id);

create policy if not exists "advertiser-update-own"
on advertiser_profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy if not exists "hotel-insert-own"
on hotel_accounts
for insert
with check (auth.uid() = user_id);

create policy if not exists "hotel-update-own"
on hotel_accounts
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy if not exists "consents-insert-own"
on user_consents
for insert
with check (auth.uid() = user_id);
