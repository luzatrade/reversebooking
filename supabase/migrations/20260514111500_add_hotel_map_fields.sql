alter table hotel_accounts
add column if not exists latitude numeric(10,7),
add column if not exists longitude numeric(10,7),
add column if not exists google_maps_url text;
