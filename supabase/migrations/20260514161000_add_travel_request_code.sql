alter table if exists travel_requests
  add column if not exists request_code text;

update travel_requests
set request_code = 'RB-' || lpad(floor(random() * 900000 + 100000)::text, 6, '0')
where request_code is null;

create unique index if not exists travel_requests_request_code_key
  on travel_requests(request_code);
