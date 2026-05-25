alter table travel_requests
  add column if not exists target_hotel_account_id uuid references hotel_accounts(id) on delete set null;

create index if not exists idx_travel_requests_target_hotel
  on travel_requests(target_hotel_account_id)
  where target_hotel_account_id is not null;
