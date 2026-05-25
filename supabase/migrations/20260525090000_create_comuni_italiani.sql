-- Step 1: Tabella comuni italiani (stradario ISTAT)
-- Usata dal motore di onboarding per guidare la scansione Google Places.

create table if not exists comuni_italiani (
  id serial primary key,
  codice_istat text not null unique,
  nome text not null,
  provincia text not null,
  sigla_provincia text not null,
  regione text not null,
  lat numeric(9,6),
  lng numeric(9,6),
  last_scraped_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_comuni_nome on comuni_italiani(nome);
create index if not exists idx_comuni_provincia on comuni_italiani(sigla_provincia);
create index if not exists idx_comuni_regione on comuni_italiani(regione);
