create or replace function prevent_hotel_city_change()
returns trigger
language plpgsql
as $$
declare
  profile_is_placeholder boolean;
begin
  profile_is_placeholder :=
    coalesce(old.property_name, '') in ('', 'Struttura da completare')
    or coalesce(old.full_address, '') in ('', 'Indirizzo da completare')
    or old.main_photo_url is null;

  if profile_is_placeholder then
    return new;
  end if;

  if old.city_id is not null and new.city_id is distinct from old.city_id then
    raise exception 'La città della struttura non può essere modificata dopo la registrazione.';
  end if;

  if old.country_code is not null and new.country_code is distinct from old.country_code then
    raise exception 'La nazione della struttura non può essere modificata dopo la registrazione.';
  end if;

  return new;
end;
$$;
