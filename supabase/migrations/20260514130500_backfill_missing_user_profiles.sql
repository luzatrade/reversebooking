insert into advertiser_profiles (
  user_id,
  advertiser_type,
  first_name,
  last_name,
  short_description,
  contact_email
)
select
  p.user_id,
  'private_individual',
  'Nome',
  'Cognome',
  'Profilo inserzionista creato automaticamente. Da completare nel pannello inserzionista.',
  p.email
from profiles p
where p.role = 'advertiser'
  and not exists (
    select 1
    from advertiser_profiles ap
    where ap.user_id = p.user_id
  );

insert into hotel_accounts (
  user_id,
  structure_type,
  property_name,
  cin_code,
  description,
  full_address,
  country_code,
  country_name,
  city_name,
  city_id,
  specific_area,
  rooms_quantity,
  private_notification_email,
  subscription_status,
  subscription_active,
  account_status
)
select
  p.user_id,
  'hotel',
  'Struttura test',
  'TEST-' || left(replace(p.user_id::text, '-', ''), 8),
  'Profilo struttura creato automaticamente. Da completare nel pannello struttura.',
  'Indirizzo da completare',
  'IT',
  'Italia',
  'Verona',
  '3164527',
  'Centro',
  1,
  p.email,
  'active',
  true,
  'active'
from profiles p
where p.role = 'hotel'
  and not exists (
    select 1
    from hotel_accounts h
    where h.user_id = p.user_id
  );
