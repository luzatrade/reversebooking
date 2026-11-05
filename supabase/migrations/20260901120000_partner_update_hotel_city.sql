-- Consente al partner proprietario di aggiornare città/nazione dopo la registrazione
-- (bypass del trigger trg_prevent_hotel_city_change) e sincronizza onboarding + slug SEO.

create or replace function public.seo_slugify_part(value text, max_len int default 72)
returns text
language sql
immutable
as $$
  select coalesce(
    nullif(
      left(
        regexp_replace(
          lower(trim(translate(coalesce(value, ''), 'ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÌÍÎÏìíîïÒÓÔÕÖòóôõöÙÚÛÜùúûüÑñÇç', 'AAAAAAaaaaaaEEEEeeeeIIIIiiiiOOOOooooUUUUuuuuNnCc'))),
          '[^a-z0-9]+',
          '-',
          'g'
        ),
        '-',
        '',
        'g'
      ),
      max_len
    ),
    ''
  ),
  'struttura'
  );
$$;

create or replace function public.resolve_unique_structure_slug(base_slug text, exclude_hotel_id uuid default null, exclude_onboarding_id uuid default null)
returns text
language plpgsql
stable
set search_path = public
as $$
declare
  candidate text := base_slug;
  suffix int := 2;
begin
  if base_slug is null or btrim(base_slug) = '' then
    return 'struttura';
  end if;

  loop
    if not exists (
      select 1 from public.hotel_accounts h
      where h.slug = candidate and (exclude_hotel_id is null or h.id <> exclude_hotel_id)
    ) and not exists (
      select 1 from public.onboarding_hotels o
      where o.slug = candidate and (exclude_onboarding_id is null or o.id <> exclude_onboarding_id)
    ) then
      return candidate;
    end if;

    candidate := base_slug || '-' || suffix::text;
    suffix := suffix + 1;
    if suffix > 9999 then
      raise exception 'Impossibile generare slug univoco per %', base_slug;
    end if;
  end loop;
end;
$$;

create or replace function public.partner_update_hotel_city(
  p_hotel_id uuid,
  p_country_code text,
  p_country_name text,
  p_city_name text,
  p_city_id text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hotel public.hotel_accounts%rowtype;
  v_old_slug text;
  v_new_slug text;
  v_slug_base text;
begin
  if auth.uid() is null then
    raise exception 'Autenticazione richiesta';
  end if;

  select * into v_hotel from public.hotel_accounts where id = p_hotel_id;
  if not found then
    raise exception 'Struttura non trovata';
  end if;

  if v_hotel.user_id <> auth.uid() then
    raise exception 'Non autorizzato';
  end if;

  if p_city_id is null or btrim(p_city_id) = '' or p_city_id = 'IT-PENDING' then
    raise exception 'Seleziona una città valida';
  end if;

  if p_city_name is null or btrim(p_city_name) = '' then
    raise exception 'Nome città non valido';
  end if;

  if p_country_code is null or btrim(p_country_code) = '' then
    raise exception 'Codice nazione non valido';
  end if;

  v_slug_base :=
    public.seo_slugify_part(v_hotel.property_name, 48) || '-' || public.seo_slugify_part(p_city_name, 32);
  v_new_slug := public.resolve_unique_structure_slug(
    v_slug_base,
    v_hotel.id,
    v_hotel.onboarding_hotel_id
  );
  v_old_slug := v_hotel.slug;

  alter table public.hotel_accounts disable trigger trg_prevent_hotel_city_change;

  update public.hotel_accounts
  set
    country_code = upper(btrim(p_country_code)),
    country_name = btrim(p_country_name),
    city_name = btrim(p_city_name),
    city_id = btrim(p_city_id),
    slug = v_new_slug,
    slug_previous = case
      when v_old_slug is not null and v_old_slug <> v_new_slug
        then (select array(select distinct unnest(coalesce(slug_previous, '{}'::text[]) || v_old_slug)))
      else slug_previous
    end
  where id = p_hotel_id;

  alter table public.hotel_accounts enable trigger trg_prevent_hotel_city_change;

  if v_hotel.onboarding_hotel_id is not null then
    update public.onboarding_hotels o
    set
      city_name = btrim(p_city_name),
      slug = v_new_slug,
      slug_previous = case
        when o.slug is not null and o.slug <> v_new_slug
          then (select array(select distinct unnest(coalesce(o.slug_previous, '{}'::text[]) || o.slug)))
        else o.slug_previous
      end
    where o.id = v_hotel.onboarding_hotel_id;
  end if;
end;
$$;

revoke all on function public.partner_update_hotel_city(uuid, text, text, text, text) from public;
grant execute on function public.partner_update_hotel_city(uuid, text, text, text, text) to authenticated;

revoke all on function public.resolve_unique_structure_slug(text, uuid, uuid) from public;
grant execute on function public.resolve_unique_structure_slug(text, uuid, uuid) to service_role;

revoke all on function public.seo_slugify_part(text, int) from public;
grant execute on function public.seo_slugify_part(text, int) to service_role;

-- Correzione one-off: Tolasudolsa Rooms (Bardi → Compiano) — onboarding già aggiornato in prod.
do $$
begin
  if exists (
    select 1 from public.hotel_accounts
    where id = 'e0d9d737-0a8e-42ed-8f15-971adf9ec0c7'
      and city_id = 'bardi-it'
  ) then
    alter table public.hotel_accounts disable trigger trg_prevent_hotel_city_change;

    update public.hotel_accounts
    set
      city_name = 'Compiano',
      city_id = 'IT-compiano',
      country_code = 'IT',
      country_name = 'Italia',
      slug = 'tolasudolsa-rooms-breakfast-mountain-bike-compiano',
      slug_previous = (
        select array(select distinct unnest(
          coalesce(slug_previous, '{}'::text[]) || array['tolasudolsa-rooms-breakfast-mountain-bike-bardi']
        ))
      )
    where id = 'e0d9d737-0a8e-42ed-8f15-971adf9ec0c7';

    alter table public.hotel_accounts enable trigger trg_prevent_hotel_city_change;
  end if;
end $$;

-- Correzione one-off: Le Libellule Relais (Altavilla → Vignale Monferrato).
do $$
begin
  if exists (
    select 1 from public.hotel_accounts
    where id = 'd5c04705-1892-422b-9cfa-7c115e270855'
      and city_id = 'altavilla-monferrato-it'
  ) then
    alter table public.hotel_accounts disable trigger trg_prevent_hotel_city_change;

    update public.hotel_accounts
    set
      city_name = 'Vignale Monferrato',
      city_id = 'IT-vignale-monferrato',
      country_code = 'IT',
      country_name = 'Italia',
      slug = 'le-libellule-relais-vignale-monferrato',
      slug_previous = (
        select array(select distinct unnest(
          coalesce(slug_previous, '{}'::text[]) || array['le-libellule-relais-altavilla-monferrato']
        ))
      )
    where id = 'd5c04705-1892-422b-9cfa-7c115e270855';

    alter table public.hotel_accounts enable trigger trg_prevent_hotel_city_change;
  end if;
end $$;
