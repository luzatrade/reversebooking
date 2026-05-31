-- Supporto Agenzie Viaggi come FORNITORE riusando l'infrastruttura esistente
-- (Strada B). Un'agenzia vive come riga in `hotel_accounts` con
-- provider_kind = 'agency' ed eredita gratis: offerte, abbonamento, fatture,
-- notifiche, RLS e il vincolo "offri solo nella tua città".
--
-- Lato ACQUIRENTE l'agenzia usa invece una riga in `advertiser_profiles`
-- (advertiser_type = 'travel_agency'): nessuna modifica di schema necessaria,
-- può pubblicare richieste alle strutture col flusso già esistente.

-- Discriminatore fornitore: strutture ricettive vs agenzie viaggi.
do $$
begin
  if not exists (select 1 from pg_type where typname = 'provider_kind') then
    create type provider_kind as enum ('structure', 'agency');
  end if;
end
$$;

alter table if exists hotel_accounts
  add column if not exists provider_kind provider_kind not null default 'structure';

-- Codice identificativo dell'agenzia (analogo al CIN delle strutture).
-- Opzionale, come il CIN reso opzionale in 20260514153000.
alter table if exists hotel_accounts
  add column if not exists cun_code text;

create index if not exists idx_hotel_accounts_provider_kind on hotel_accounts(provider_kind);

comment on column hotel_accounts.provider_kind is 'structure = struttura ricettiva, agency = agenzia viaggi';
comment on column hotel_accounts.cun_code is 'Codice identificativo agenzia (CUN), opzionale. Per le strutture si usa cin_code.';
