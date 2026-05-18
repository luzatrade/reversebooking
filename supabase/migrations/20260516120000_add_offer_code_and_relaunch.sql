alter table if exists offers
  add column if not exists offer_code text;

update offers
set offer_code = 'OF-' || lpad(floor(random() * 900000 + 100000)::text, 6, '0')
where offer_code is null;

create unique index if not exists offers_offer_code_key
  on offers(offer_code);

alter table if exists offers
  drop constraint if exists offers_travel_request_id_hotel_account_id_key;

create unique index if not exists offers_one_pending_per_hotel_request
  on offers(travel_request_id, hotel_account_id)
  where status = 'pending';
