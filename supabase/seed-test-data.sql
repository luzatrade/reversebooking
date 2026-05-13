-- Dati test Reverse Booking
-- Prima crea due utenti da Supabase Auth:
-- 1) advertiser.test@example.com
-- 2) hotel.test@example.com
-- Poi copia i loro UUID e sostituiscili qui sotto.

DO $$
DECLARE
  advertiser_user_id uuid := '00000000-0000-0000-0000-000000000001'; -- sostituisci con UUID utente inserzionista
  hotel_user_id uuid := '00000000-0000-0000-0000-000000000002'; -- sostituisci con UUID utente struttura
  advertiser_profile_id uuid;
  hotel_account_id uuid;
BEGIN
  INSERT INTO profiles (
    user_id,
    role,
    email,
    phone_number,
    email_verified,
    phone_verified,
    account_status
  ) VALUES (
    advertiser_user_id,
    'advertiser',
    'advertiser.test@example.com',
    '+393330000001',
    true,
    true,
    'active'
  )
  ON CONFLICT (user_id) DO UPDATE SET
    role = excluded.role,
    email_verified = true,
    phone_verified = true,
    account_status = 'active'
  RETURNING id INTO advertiser_profile_id;

  INSERT INTO advertiser_profiles (
    user_id,
    advertiser_type,
    first_name,
    last_name,
    short_description,
    contact_email,
    contact_phone
  ) VALUES (
    advertiser_user_id,
    'private_individual',
    'Mario',
    'Rossi',
    'Viaggiatore test interessato a ricevere offerte da strutture nella zona richiesta.',
    'mario.test@example.com',
    '+393330000001'
  )
  ON CONFLICT (user_id) DO UPDATE SET
    advertiser_type = excluded.advertiser_type,
    first_name = excluded.first_name,
    last_name = excluded.last_name,
    short_description = excluded.short_description
  RETURNING id INTO advertiser_profile_id;

  INSERT INTO profiles (
    user_id,
    role,
    email,
    phone_number,
    email_verified,
    phone_verified,
    account_status
  ) VALUES (
    hotel_user_id,
    'hotel',
    'hotel.test@example.com',
    '+393330000002',
    true,
    true,
    'active'
  )
  ON CONFLICT (user_id) DO UPDATE SET
    role = excluded.role,
    email_verified = true,
    phone_verified = true,
    account_status = 'active';

  INSERT INTO hotel_accounts (
    user_id,
    structure_type,
    property_name,
    cin_code,
    main_photo_url,
    description,
    full_address,
    country_code,
    country_name,
    city_name,
    city_id,
    specific_area,
    points_of_interest,
    rooms_quantity,
    services,
    public_email,
    public_phone,
    public_phone_clickable_url,
    private_notification_email,
    new_notification,
    subscription_status,
    subscription_active,
    account_status
  ) VALUES (
    hotel_user_id,
    'hotel',
    'Hotel Test Verona Centro',
    'IT-TEST-CIN-00001',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'Struttura test attiva con abbonamento valido per ricevere richieste a Verona.',
    'Via Roma 1, Verona, Italia',
    'IT',
    'Italia',
    'Verona',
    '3164527',
    'Centro storico',
    ARRAY['Arena di Verona', 'Stazione Porta Nuova', 'Piazza Bra'],
    42,
    '{"pool":false,"spa":true,"garage":true,"pets_allowed":true,"disabled_access":true}'::jsonb,
    'info@hoteltestverona.it',
    '+390450000000',
    'tel:+390450000000',
    'hotel.test@example.com',
    true,
    'active',
    true,
    'active'
  )
  ON CONFLICT (user_id) DO UPDATE SET
    structure_type = excluded.structure_type,
    property_name = excluded.property_name,
    cin_code = excluded.cin_code,
    country_code = excluded.country_code,
    city_name = excluded.city_name,
    city_id = excluded.city_id,
    subscription_status = 'active',
    subscription_active = true,
    account_status = 'active',
    new_notification = true
  RETURNING id INTO hotel_account_id;

  INSERT INTO travel_requests (
    advertiser_id,
    country_code,
    country_name,
    city_name,
    city_id,
    preferred_area,
    preferred_structure_type,
    check_in,
    check_out,
    guests_count,
    rooms_count,
    budget,
    meal_plan,
    notes,
    visible_contact_email,
    visible_contact_phone,
    status,
    expires_at
  ) VALUES
  (
    advertiser_profile_id,
    'IT',
    'Italia',
    'Verona',
    '3164527',
    'vicino alla stazione',
    'hotel',
    '2026-06-20',
    '2026-06-23',
    2,
    1,
    450.00,
    'breakfast',
    'Preferenza per struttura comoda alla stazione e con garage.',
    'mario.test@example.com',
    '+393330000001',
    'active',
    '2026-06-20 23:59:00+02'
  ),
  (
    advertiser_profile_id,
    'IT',
    'Italia',
    'Verona',
    '3164527',
    'zona fiera',
    'all',
    '2026-07-05',
    '2026-07-07',
    4,
    2,
    700.00,
    'half_board',
    'Richiesta per famiglia, preferenza zona fiera o ben collegata.',
    NULL,
    NULL,
    'active',
    '2026-07-05 23:59:00+02'
  );

  INSERT INTO notifications (
    recipient_type,
    recipient_id,
    travel_request_id,
    title,
    message,
    is_read
  )
  SELECT
    'hotel',
    hotel_account_id,
    tr.id,
    'Nuova richiesta a Verona',
    'Nuovo annuncio compatibile con la tua struttura. Zona preferita: ' || tr.preferred_area,
    false
  FROM travel_requests tr
  WHERE tr.advertiser_id = advertiser_profile_id
    AND tr.country_code = 'IT'
    AND tr.city_id = '3164527'
    AND tr.status = 'active';
END $$;
