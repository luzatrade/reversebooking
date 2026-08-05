# Blocco 449/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **B&B La Civetta** — Cartosio
   - slug: `b-b-la-civetta-cartosio`
   - indirizzo: Via Cascinali, 209, 15010 Ponzone AL
   - website: http://www.bblacivetta.com/
2. **B&B La Volpe e la Luna** — Cartosio
   - slug: `b-b-la-volpe-e-la-luna-cartosio`
   - indirizzo: Via Dogli, 26 c, 17040 Mioglia SV
   - website: https://francescastraveltips.com/la-volpe-e-la-luna-italy
3. **B&B Santa Libera** — Cartosio
   - slug: `b-b-santa-libera-cartosio`
   - indirizzo: Regione Santa Libera, 27, 14058 Monastero Bormida AT
   - website: https://www.bbsantalibera.com/
4. **Casa Modero** — Cartosio
   - slug: `casa-modero-cartosio`
   - indirizzo: Località Chiazze, 3, 15015 Cartosio AL
   - website: http://modero.xyz/
5. **Cascina Ciosse** — Cartosio
   - slug: `cascina-ciosse-cartosio`
   - indirizzo: Località Ciosse, 1, 15010 Grognardo AL
   - website: http://www.cascinaciosse.it/
6. **Hotel Pian del Sole** — Cartosio
   - slug: `hotel-pian-del-sole-cartosio`
   - indirizzo: Localita' Pianferioso, 23, 17046 Sassello SV
   - website: https://www.hotelpiandelsolesassello.it/?utm_source=gbp&utm_medium=organic
7. **La Casa dei Pensanti** — Cartosio
   - slug: `la-casa-dei-pensanti-cartosio`
   - indirizzo: Str. Valle Berrino, 237, 15010 Ponzone AL
8. **Ristorante Cacciatori di Milano Massimo** — Cartosio
   - slug: `ristorante-cacciatori-di-milano-massimo-cartosio`
   - indirizzo: Via Moreno, 30, 15015 Cartosio AL
   - website: https://www.cacciatoricartosio.com/
9. **Bed & Breakfast - La Via dell'Ambra - Due Carrare, Padova** — Cartura
   - slug: `bed-breakfast-la-via-dell-ambra-due-carrare-pado-cartura`
   - indirizzo: Via Chiodare, 130, 35020 Due Carrare PD
10. **Bed & Breakfast La Casa del Mulino** — Cartura
   - slug: `bed-breakfast-la-casa-del-mulino-cartura`
   - indirizzo: Via Pontemanco, 98, 35020 Due Carrare PD
   - website: http://www.lacasadelmulino.com/
11. **Ca' Murà, Natura e Resort** — Cartura
   - slug: `ca-mura-natura-e-resort-cartura`
   - indirizzo: Via Ca' Mura', 21/B, 35020 Maserà di Padova PD
   - website: http://www.ca-mura.com/
12. **B&B HOTEL Milano Cologno Studios** — Carugate
   - slug: `b-b-hotel-milano-cologno-studios-carugate`
   - indirizzo: Corso Europa, 56, 20093 Cologno Monzese MI
   - website: https://www.hotel-bb.com/it/hotel/milano-cologno-studios
13. **B&B La Castellana** — Carugate
   - slug: `b-b-la-castellana-carugate`
   - indirizzo: Via Gaetano Donizetti, 10, 20061 Carugate MI
   - website: http://www.bblacastellana.com/
14. **Hotel NH Milano 2** — Carugate
   - slug: `hotel-nh-milano-2-carugate`
   - indirizzo: Strada di Olgia Nuova, 20090 Segrate MI
   - website: https://www.nh-hotels.com/en/hotel/nh-milano-2?utm_campaign=local-gmb&utm_medium=organic_search&utm_source=google_gmb
15. **Hotel Pone** — Carugate
   - slug: `hotel-pone-carugate`
   - indirizzo: Via Mincio, 2, 20099 Sesto San Giovanni MI
   - website: https://www.hotelsitaloweb.com/hotel-pone/
16. **Hotel Sporting** — Carugate
   - slug: `hotel-sporting-carugate`
   - indirizzo: Via Felice Cavallotti, 141, 20093 Cologno Monzese MI
   - website: https://www.hotelsportingcologno.it/
17. **NH Milano 2 Residence** — Carugate
   - slug: `nh-milano-2-residence-carugate`
   - indirizzo: Strada di Olgia Vecchia, 20090 Segrate MI
   - website: https://www.nh-hotels.com/en/hotel/nh-milano-2-residence?utm_campaign=local-gmb&utm_medium=organic_search&utm_source=google_gmb
18. **Residenza Isabella** — Carugate
   - slug: `residenza-isabella-carugate`
   - indirizzo: Via Cesare Battisti, 90/92, 20061 Carugate MI
   - website: http://www.hotelrocco.it/residence_isabella.html
19. **Welcome Milano Guest House** — Carugate
   - slug: `welcome-milano-guest-house-carugate`
   - indirizzo: Via Padova, 370, 20132 Milano MI
   - website: https://www.welcomemilanoguesthouse.it/it
20. **Albergo Nardini s.a.s.** — Carugo
   - slug: `albergo-nardini-s-a-s-carugo`
   - indirizzo: Via Nazionale dei Giovi, 202, 20823 Lentate sul Seveso MB
   - website: http://www.hotelnardini.com/
21. **Albergo Ristorante Giudici Sas** — Carugo
   - slug: `albergo-ristorante-giudici-sas-carugo`
   - indirizzo: Via Liberta', 7, 20823 Lentate sul Seveso MB
   - website: https://www.giudicicamere.it/
22. **B & B Casa di Lia** — Carugo
   - slug: `b-b-casa-di-lia-carugo`
   - indirizzo: Via Vittorio Veneto, 23, 22060 Carugo CO
   - website: http://casa-di-lia.org.es/
23. **Hotel Biffi Srl** — Carugo
   - slug: `hotel-biffi-srl-carugo`
   - indirizzo: Via Papa Giovanni XXIII, 16, 20831 Seregno MB
   - website: http://www.hotelbiffi.it/
24. **AR San Salvo B&B** — Carunchio
   - slug: `ar-san-salvo-b-b-carunchio`
   - indirizzo: Str. Trignina, 3, 66050 San Salvo CH
25. **B&B Il più bello** — Carunchio
   - slug: `b-b-il-piu-bello-carunchio`
   - indirizzo: Via Pier Luigi Nervi, 65, 66050 San Salvo CH
   - website: https://bb-il-pi-bello.vacanzeinitalia.top/
26. **B&B LA VENERE da Gigi e Patty** — Carunchio
   - slug: `b-b-la-venere-da-gigi-e-patty-carunchio`
   - indirizzo: Via Fratelli Cairoli, 4, 66050 San Salvo CH
27. **B&B Paradiso** — Carunchio
   - slug: `b-b-paradiso-carunchio`
   - indirizzo: Via Rigolizia, 14, 66054 Vasto CH
   - website: http://www.bebparadiso.it/
28. **Bed&Breakfast Luna** — Carunchio
   - slug: `bed-breakfast-luna-carunchio`
   - indirizzo: Via Francesco Cilea, 2, 66050 San Salvo CH
   - website: https://www.facebook.com/Bedbreakfast-LUNA-1079904395532330
29. **Colline del Sole** — Carunchio
   - slug: `colline-del-sole-carunchio`
   - indirizzo: Str. Circonvallazione, 28, 66054 San Salvo CH
   - website: https://www.collinedelsolebnb.eu/
30. **Da Italia** — Carunchio
   - slug: `da-italia-carunchio`
   - indirizzo: Via il Caravaggio, 4/B, 66050 San Salvo CH
   - website: https://www.instagram.com/daitaliasansalvo?igsh=ZXQ5eW9xdm55YWRi
31. **Hotel Ristorante Vittoria** — Carunchio
   - slug: `hotel-ristorante-vittoria-carunchio`
   - indirizzo: Largo Taverna, 14, 66050 Carunchio CH
32. **Palazzo Tour D'Eau - Abruzzo Cibus** — Carunchio
   - slug: `palazzo-tour-d-eau-abruzzo-cibus-carunchio`
   - indirizzo: Via Monte, 8, 66050 Carunchio CH
   - website: https://www.abruzzocibus.com/
33. **Agriturismo Monsereno** — Carvico
   - slug: `agriturismo-monsereno-carvico`
   - indirizzo: Via Monsereno, 9, 23898 Imbersago LC
   - website: http://www.agriturismomonsereno.it/
34. **B&B Gavardo** — Carvico
   - slug: `b-b-gavardo-carvico`
   - indirizzo: Via Gavardo, 1, 24030 Villa d'Adda BG
35. **Casa Clelia** — Carvico
   - slug: `casa-clelia-carvico`
   - indirizzo: Via Corna, 1/3, 24039 Sotto il Monte Giovanni XXIII BG
   - website: http://www.casaclelia.com/