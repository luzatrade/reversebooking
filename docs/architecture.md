# Architettura HotelsDrop

## Obiettivo

HotelsDrop è un marketplace SaaS per richieste di soggiorno: gli inserzionisti pubblicano annunci gratuitamente, mentre Hotel, B&B e Appartamenti pagano un abbonamento per ricevere richieste compatibili e inviare offerte.

## Regola centrale di matching

Una struttura riceve e vede un annuncio solo quando:

- `travel_requests.country_code = hotel_accounts.country_code`
- `travel_requests.city_id = hotel_accounts.city_id`
- `hotel_accounts.account_status = active`
- `hotel_accounts.subscription_active = true`
- `travel_requests.status = active`
- `travel_requests.expires_at > now()`
- `preferred_structure_type = all` oppure coincide con `hotel_accounts.structure_type`

La `preferred_area` non filtra le strutture: è solo informativa.

## Privacy inserzionisti

Email e telefono di registrazione restano privati. Nell'annuncio vengono mostrati solo i contatti inseriti manualmente nei campi `visible_contact_*`.

## Fatturazione

La fatturazione è solo per strutture ricettive. Gli inserzionisti non pagano e non hanno fatturazione obbligatoria.

## Moduli principali

- `app/(advertiser)` area inserzionista
- `app/(hotel)` area strutture
- `app/(admin)` area admin
- `supabase/schema.sql` schema database completo
- `types/app.ts` tipi applicativi condivisi
- `lib/validators/schemas.ts` validazioni Zod
- `lib/constants/options.ts` opzioni UI e valori DB
