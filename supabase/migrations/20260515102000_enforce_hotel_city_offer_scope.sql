create or replace function enforce_hotel_offer_city_scope()
returns trigger
language plpgsql
as $$
declare
  hotel_city text;
  request_city text;
begin
  select city_id into hotel_city
  from hotel_accounts
  where id = new.hotel_account_id;

  select city_id into request_city
  from travel_requests
  where id = new.travel_request_id;

  if hotel_city is null or request_city is null or hotel_city <> request_city then
    raise exception 'La struttura può inviare offerte solo per annunci nella propria città registrata.';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_enforce_hotel_offer_city_scope on offers;

create trigger trg_enforce_hotel_offer_city_scope
before insert or update of travel_request_id, hotel_account_id on offers
for each row
execute function enforce_hotel_offer_city_scope();

create or replace function prevent_hotel_city_change()
returns trigger
language plpgsql
as $$
begin
  if old.city_id is not null and new.city_id is distinct from old.city_id then
    raise exception 'La città della struttura non può essere modificata dopo la registrazione.';
  end if;

  if old.country_code is not null and new.country_code is distinct from old.country_code then
    raise exception 'La nazione della struttura non può essere modificata dopo la registrazione.';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_prevent_hotel_city_change on hotel_accounts;

create trigger trg_prevent_hotel_city_change
before update of city_id, country_code on hotel_accounts
for each row
execute function prevent_hotel_city_change();
