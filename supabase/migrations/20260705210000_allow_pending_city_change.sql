-- Consenti la scelta città al primo salvataggio profilo (placeholder IT-PENDING o legacy "").

create or replace function prevent_hotel_city_change()
returns trigger
language plpgsql
as $$
begin
  if old.city_id is not null
     and btrim(old.city_id) <> ''
     and old.city_id <> 'IT-PENDING'
     and new.city_id is distinct from old.city_id then
    raise exception 'La città della struttura non può essere modificata dopo la registrazione.';
  end if;

  if old.country_code is not null
     and btrim(old.country_code) <> ''
     and old.city_id is not null
     and btrim(old.city_id) <> ''
     and old.city_id <> 'IT-PENDING'
     and new.country_code is distinct from old.country_code then
    raise exception 'La nazione della struttura non può essere modificata dopo la registrazione.';
  end if;

  return new;
end;
$$;

update public.hotel_accounts
set city_id = 'IT-PENDING'
where btrim(city_id) = '';
