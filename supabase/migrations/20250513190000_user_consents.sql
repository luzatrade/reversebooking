-- Bozza schema consensi utente. Eseguire su Supabase (SQL editor o CLI) dopo revisione DBA/legal.
-- Tabella: public.user_consents

create table if not exists public.user_consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  terms_accepted boolean not null default false,
  privacy_accepted boolean not null default false,
  marketing_accepted boolean not null default false,
  terms_version text,
  privacy_version text,
  accepted_at timestamptz not null default now(),
  ip_address text,
  user_agent text,
  constraint user_consents_user_id_unique unique (user_id)
);

create index if not exists user_consents_user_id_idx on public.user_consents (user_id);

alter table public.user_consents enable row level security;

-- Lettura: solo il titolare dell'account
create policy "user_consents_select_own"
  on public.user_consents
  for select
  to authenticated
  using (auth.uid() = user_id);

-- Inserimento da client autenticato (es. dopo conferma email con sessione attiva)
create policy "user_consents_insert_own"
  on public.user_consents
  for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Aggiornamento consensi da utente autenticato
create policy "user_consents_update_own"
  on public.user_consents
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

comment on table public.user_consents is 'Consensi legali utente (bozza). Inserimento server-side consigliato con service role alla registrazione.';
