-- Consente la correzione admin città/coordinate su hotel_accounts collegati al catalogo onboarding.

create or replace function public.admin_sync_hotel_location_from_onboarding(p_onboarding_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row onboarding_hotels%rowtype;
  v_city_id text;
begin
  select * into v_row from public.onboarding_hotels where id = p_onboarding_id;
  if not found then
    raise exception 'Onboarding hotel not found: %', p_onboarding_id;
  end if;

  v_city_id := lower(regexp_replace(trim(v_row.city_name), '[^a-zA-Z0-9]+', '-', 'g')) || '-it';

  alter table public.hotel_accounts disable trigger trg_prevent_hotel_city_change;

  update public.hotel_accounts
  set
    city_name = v_row.city_name,
    city_id = v_city_id,
    country_code = 'IT',
    country_name = 'Italia',
    full_address = coalesce(v_row.indirizzo, full_address),
    latitude = v_row.lat,
    longitude = v_row.lng
  where onboarding_hotel_id = p_onboarding_id;

  alter table public.hotel_accounts enable trigger trg_prevent_hotel_city_change;
end;
$$;

revoke all on function public.admin_sync_hotel_location_from_onboarding(uuid) from public;
grant execute on function public.admin_sync_hotel_location_from_onboarding(uuid) to service_role;

-- Jenka: città corretta Caltabellotta (catalogo aveva Bisacquino).
select public.admin_sync_hotel_location_from_onboarding('a102dbd9-c8d9-43c4-b505-6b56b26073d9'::uuid);
