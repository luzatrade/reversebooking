require('dotenv').config({ path: require('path').resolve(__dirname, '../.env.local'), override: true });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

async function seed() {
  const advertisers = [
    { email: 'marco.rossi@example.com', first_name: 'Marco', last_name: 'Rossi', type: 'private_individual' },
    { email: 'giulia.bianchi@example.com', first_name: 'Giulia', last_name: 'Bianchi', type: 'travel_agency', agency_name: 'Viaggi Bianchi' },
    { email: 'anna.verdi@example.com', first_name: 'Anna', last_name: 'Verdi', type: 'company', company_name: 'Verdi Tours Srl' },
    { email: 'luca.ferrari@example.com', first_name: 'Luca', last_name: 'Ferrari', type: 'tour_operator', operator_name: 'Ferrari Experiences' },
    { email: 'sara.marino@example.com', first_name: 'Sara', last_name: 'Marino', type: 'private_individual' },
  ];

  const advProfiles = [];
  for (const a of advertisers) {
    const { data: user } = await sb.auth.admin.createUser({ email: a.email, password: 'TestPass123!', email_confirm: true });
    if (!user?.user) { console.log('Skip user', a.email); continue; }
    await sb.from('profiles').insert({ user_id: user.user.id, role: 'advertiser', email: a.email, phone_number: '+39' + Math.floor(3000000000 + Math.random() * 999999999), email_verified: true, phone_verified: true, account_status: 'active' });
    const { data: ap } = await sb.from('advertiser_profiles').insert({ user_id: user.user.id, advertiser_type: a.type, first_name: a.first_name, last_name: a.last_name, company_name: a.company_name || null, agency_name: a.agency_name || null, operator_name: a.operator_name || null }).select().single();
    if (ap) advProfiles.push(ap);
    console.log('  + Advertiser:', a.email);
  }

  const hotels = [
    { email: 'hotel.roma.centro@example.com', name: 'Hotel Roma Centro', type: 'hotel', city: 'Roma', city_id: 'roma-it', address: 'Via del Corso 100, Roma', area: 'Centro Storico', rooms: 45, desc: 'Hotel elegante nel cuore di Roma, a pochi passi dalla Fontana di Trevi e dal Pantheon.' },
    { email: 'bb.venezia@example.com', name: 'B&B Canal Grande', type: 'bed_and_breakfast', city: 'Venezia', city_id: 'venezia-it', address: 'Dorsoduro 1234, Venezia', area: 'Dorsoduro', rooms: 6, desc: 'Incantevole B&B con vista sul Canal Grande, arredamento veneziano autentico.' },
    { email: 'hotel.firenze@example.com', name: 'Palazzo Medici Suites', type: 'hotel', city: 'Firenze', city_id: 'firenze-it', address: 'Via dei Calzaiuoli 15, Firenze', area: 'Duomo', rooms: 30, desc: 'Dimora storica del Cinquecento trasformata in boutique hotel di lusso nel centro di Firenze.' },
    { email: 'bb.napoli@example.com', name: 'Terrazza sul Golfo B&B', type: 'bed_and_breakfast', city: 'Napoli', city_id: 'napoli-it', address: 'Via Posillipo 88, Napoli', area: 'Posillipo', rooms: 4, desc: 'B&B panoramico con terrazza vista Golfo di Napoli e Vesuvio.' },
    { email: 'hotel.milano@example.com', name: 'Design Hotel Navigli', type: 'hotel', city: 'Milano', city_id: 'milano-it', address: 'Alzaia Naviglio Grande 44, Milano', area: 'Navigli', rooms: 28, desc: 'Hotel di design contemporaneo nel vivace quartiere dei Navigli.' },
    { email: 'bb.amalfi@example.com', name: 'Villa Amalfi Coast', type: 'bed_and_breakfast', city: 'Amalfi', city_id: 'amalfi-it', address: 'Via Maestra dei Villaggi 10, Amalfi', area: 'Costa', rooms: 8, desc: 'Villa esclusiva sulla Costiera Amalfitana con piscina a sfioro e vista mare.' },
    { email: 'hotel.verona@example.com', name: 'Albergo Arena', type: 'hotel', city: 'Verona', city_id: 'verona-it', address: 'Piazza Bra 22, Verona', area: 'Centro', rooms: 35, desc: 'Hotel storico affacciato sull Arena di Verona, perfetto per gli amanti dell opera.' },
    { email: 'hotel.como@example.com', name: 'Lake View Resort', type: 'hotel', city: 'Como', city_id: 'como-it', address: 'Via Lungo Lario 5, Como', area: 'Lungolago', rooms: 20, desc: 'Resort con accesso diretto al lago, spa e ristorante panoramico.' },
  ];

  const hotelAccounts = [];
  for (const h of hotels) {
    const { data: user } = await sb.auth.admin.createUser({ email: h.email, password: 'TestPass123!', email_confirm: true });
    if (!user?.user) { console.log('Skip hotel', h.email); continue; }
    await sb.from('profiles').insert({ user_id: user.user.id, role: 'hotel', email: h.email, phone_number: '+39' + Math.floor(3000000000 + Math.random() * 999999999), email_verified: true, phone_verified: true, account_status: 'active' });
    const { data: ha } = await sb.from('hotel_accounts').insert({
      user_id: user.user.id, structure_type: h.type, property_name: h.name,
      cin_code: 'IT' + Math.random().toString(36).slice(2, 14).toUpperCase(),
      description: h.desc, full_address: h.address, country_code: 'IT', country_name: 'Italia',
      city_name: h.city, city_id: h.city_id, specific_area: h.area, rooms_quantity: h.rooms,
      private_notification_email: h.email, account_status: 'active',
      subscription_status: 'active', subscription_active: true,
      services: { pool: Math.random() > 0.5, spa: Math.random() > 0.6, garage: Math.random() > 0.4, pets_allowed: Math.random() > 0.5, disabled_access: Math.random() > 0.5 },
      public_email: h.email, public_phone: '+39 0' + Math.floor(10000000 + Math.random() * 89999999),
    }).select().single();
    if (ha) hotelAccounts.push(ha);
    console.log('  + Hotel:', h.name);
  }

  const cities = [
    { city: 'Roma', id: 'roma-it', areas: ['Centro Storico', 'Trastevere', 'Vaticano', 'Termini'] },
    { city: 'Venezia', id: 'venezia-it', areas: ['San Marco', 'Dorsoduro', 'Cannaregio', 'Lido'] },
    { city: 'Firenze', id: 'firenze-it', areas: ['Duomo', 'Oltrarno', 'Santa Croce', 'San Lorenzo'] },
    { city: 'Napoli', id: 'napoli-it', areas: ['Centro', 'Posillipo', 'Chiaia', 'Vomero'] },
    { city: 'Milano', id: 'milano-it', areas: ['Centro', 'Navigli', 'Brera', 'Porta Nuova'] },
    { city: 'Amalfi', id: 'amalfi-it', areas: ['Costa', 'Centro', 'Atrani'] },
    { city: 'Verona', id: 'verona-it', areas: ['Centro', 'Arena', 'Veronetta'] },
    { city: 'Como', id: 'como-it', areas: ['Lungolago', 'Centro', 'Brunate'] },
    { city: 'Siena', id: 'siena-it', areas: ['Centro', 'Piazza del Campo'] },
    { city: 'Lecce', id: 'lecce-it', areas: ['Centro Storico', 'Zona Stazione'] },
    { city: 'Matera', id: 'matera-it', areas: ['Sassi', 'Centro'] },
    { city: 'Taormina', id: 'taormina-it', areas: ['Centro', 'Isola Bella'] },
  ];

  const mealPlans = ['room_only', 'breakfast', 'half_board', 'full_board'];
  const structTypes = ['all', 'hotel', 'bed_and_breakfast'];
  let requestCount = 0;

  for (let i = 0; i < 20; i++) {
    const adv = advProfiles[i % advProfiles.length];
    if (!adv) continue;
    const c = cities[i % cities.length];
    const checkIn = new Date(Date.now() + (3 + Math.floor(Math.random() * 30)) * 86400000);
    const nights = 2 + Math.floor(Math.random() * 5);
    const checkOut = new Date(checkIn.getTime() + nights * 86400000);
    const guests = 1 + Math.floor(Math.random() * 4);
    const rooms = Math.ceil(guests / 2);
    const budget = 60 + Math.floor(Math.random() * 200);

    const { error } = await sb.from('travel_requests').insert({
      advertiser_id: adv.id, country_code: 'IT', country_name: 'Italia',
      city_name: c.city, city_id: c.id,
      preferred_area: c.areas[Math.floor(Math.random() * c.areas.length)],
      preferred_structure_type: structTypes[Math.floor(Math.random() * structTypes.length)],
      check_in: checkIn.toISOString().slice(0, 10),
      check_out: checkOut.toISOString().slice(0, 10),
      guests_count: guests, rooms_count: rooms, budget: budget,
      meal_plan: mealPlans[Math.floor(Math.random() * mealPlans.length)],
      status: 'active',
      expires_at: new Date(Date.now() + 30 * 86400000).toISOString(),
    });
    if (error) console.log('  ! Request error:', error.message);
    else requestCount++;
  }
  console.log('  + Travel requests:', requestCount);

  console.log('\n=== DONE ===');
  for (const t of ['profiles', 'advertiser_profiles', 'hotel_accounts', 'travel_requests']) {
    const { count } = await sb.from(t).select('*', { count: 'exact', head: true });
    console.log(' ', t, ':', count);
  }
}
seed().catch(console.error);
