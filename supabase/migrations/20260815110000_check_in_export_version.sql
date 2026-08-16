-- Versione formato export Alloggiati (2 = codici tipo 18/19 corretti)
alter table public.check_in_guests
  add column if not exists export_format_version smallint;

comment on column public.check_in_guests.export_format_version is
  '2 = export con codici tipo alloggiato ufficiali (18 capo gruppo, 19 familiare)';

-- Ripristina export pendente per righe esportate con formato legacy o sconosciuto
update public.check_in_guests
set exported_questura_at = null,
    export_format_version = null
where exported_questura_at is not null
  and coalesce(export_format_version, 1) < 2;
