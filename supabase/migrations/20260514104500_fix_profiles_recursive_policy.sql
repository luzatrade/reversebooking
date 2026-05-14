-- Fix temporaneo MVP: rimuove policy ricorsive su profiles.
-- La policy profiles-admin originale leggeva dalla stessa tabella profiles,
-- causando "infinite recursion detected in policy for relation profiles".

alter table profiles enable row level security;

drop policy if exists "profiles-admin" on profiles;
drop policy if exists "profiles-own" on profiles;
drop policy if exists "profiles-insert-own" on profiles;
drop policy if exists "profiles-update-own" on profiles;
drop policy if exists "profiles-select-own" on profiles;

create policy "profiles-select-own"
on profiles
for select
using (auth.uid() = user_id);

create policy "profiles-insert-own"
on profiles
for insert
with check (auth.uid() = user_id);

create policy "profiles-update-own"
on profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
