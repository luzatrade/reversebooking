# Blocco 232/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Villa Lidia Teramo B&B** — Basciano
   - slug: `villa-lidia-teramo-b-b-basciano`
   - indirizzo: Via Cona, 93, 64100 Teramo TE
   - website: http://www.villalidiateramo.it/
2. **Albergo Miramonti** — Baselga di Pin�
   - slug: `albergo-miramonti-baselga-di-pin`
   - indirizzo: Via Cavour, 20, 38043 Bedollo TN
   - website: http://www.miramontipine.it/
3. **B&B Ristorante Edera** — Baselga di Pin�
   - slug: `b-b-ristorante-edera-baselga-di-pin`
   - indirizzo: Via Per Trento, 31, 38042 Baselga di Pinè TN
   - website: http://www.hotel-edera.it/
4. **Bike Bed & Breakfast Mille Pini** — Baselga di Pin�
   - slug: `bike-bed-breakfast-mille-pini-baselga-di-pin`
   - indirizzo: Piazzetta Conti di Schreck, 23, 38042 Baselga di Piné TN
   - website: http://www.bbmillepini.com/
5. **Hotel Al Ponte** — Baselga di Pin�
   - slug: `hotel-al-ponte-baselga-di-pin`
   - indirizzo: Località Maso Grillo, 4, 38057 Pergine Valsugana TN
   - website: http://www.alponte.net/
6. **Hotel SANTORSOLA - vacanza relax & trekking in trentino** — Baselga di Pin�
   - slug: `hotel-santorsola-vacanza-relax-trekking-in-trent-baselga-di-pin`
   - indirizzo: Località Pintarei, 78/B, 38050 Sant'Orsola TN
   - website: http://www.relaxhoteltrentino.it/
7. **Locanda 2 Camini - hotel b&b** — Baselga di Pin�
   - slug: `locanda-2-camini-hotel-b-b-baselga-di-pin`
   - indirizzo: Via del 26 Maggio, 38042 Baselga di Pinè TN
   - website: http://www.locanda2camini.it/
8. **Agriturismo Castello** — Baselice
   - slug: `agriturismo-castello-baselice`
   - indirizzo: Contrada Castello, 9, 82020 San Giorgio La Molara BN
   - website: http://www.agriturismocastello.it/
9. **B&B dimora Albani** — Baselice
   - slug: `b-b-dimora-albani-baselice`
   - indirizzo: Piazza del Castello, 3, 83030 Savignano Irpino AV
   - website: https://evelynstravelexperience.eu/luxury-b-amp-b-dimora-albani-italy
10. **B&B Il Giardino Nascosto** — Baselice
   - slug: `b-b-il-giardino-nascosto-baselice`
   - indirizzo: Via Colonnello Lorenzo D'Avanzo, 13, 71039 Roseto Valfortore FG
   - website: https://www.ilgiardinonascostoroseto.com/
11. **Bed & Breakfast Celeste - Palazzo D'Addario** — Baselice
   - slug: `bed-breakfast-celeste-palazzo-d-addario-baselice`
   - indirizzo: Largo Belvedere Cerulli, 7, 71035 Celenza Valfortore FG
12. **Bed And Breakfast I Capurali** — Baselice
   - slug: `bed-and-breakfast-i-capurali-baselice`
   - indirizzo: Via Rovagnera, 82029 San Marco dei Cavoti BN
13. **Bed and Breakfast Vicidomini** — Baselice
   - slug: `bed-and-breakfast-vicidomini-baselice`
   - indirizzo: Codice UNIVOCO STRUTTURE RICETTIVE 15062064EXT0021, CIN IT062064B4353N9IHH, Via Vicidomini, 26, 82029 San Marco dei Cavoti BN
   - website: http://www.bbvicidomini.it/
14. **Casa Albergo Oasi Piana Romana** — Baselice
   - slug: `casa-albergo-oasi-piana-romana-baselice`
   - indirizzo: Contrada Piana Romana, 324, 82020 Pago Veiano BN
   - website: https://www.oasipianaromana.it/
15. **Il Gheppio Bed & Breakfast** — Baselice
   - slug: `il-gheppio-bed-breakfast-baselice`
   - indirizzo: 82026 Morcone BN, Italia
   - website: https://amandastraveltips.com/b-amp-b-il-gheppio-italy
16. **L'Affresco di Mobilia Massimo** — Baselice
   - slug: `l-affresco-di-mobilia-massimo-baselice`
   - indirizzo: Via Bebiana, 6, 82020 Campolattaro BN
   - website: http://www.laffresco.it/
17. **Hotel Motel Daniel** — Basiano
   - slug: `hotel-motel-daniel-basiano`
   - indirizzo: Vle delle Industrie, 6, 20060 Basiano MI
   - website: https://www.hoteldaniel-basiano.it/
18. **Accogliente Dimora** — Basic�
   - slug: `accogliente-dimora-basic`
   - indirizzo: Via Santo Stefano, 44, 70017 Putignano BA
   - website: https://www.accoglientedimora.it/
19. **b&b beby in viaggio** — Basic�
   - slug: `b-b-beby-in-viaggio-basic`
   - indirizzo: Via Porta Barsento, 41, 70017 Putignano BA
   - website: https://www.bebinviaggio.com/
20. **B&B Bellavista** — Basic�
   - slug: `b-b-bellavista-basic`
   - indirizzo: Via S. Vito, 11, 70043 Monopoli BA
   - website: http://www.bellavistamonopoli.it/
21. **Bed & Breakfast Amati** — Basic�
   - slug: `bed-breakfast-amati-basic`
   - indirizzo: Via Cenci, 66, 72015 Fasano BR
   - website: http://www.bbamati.it/
22. **BED & BREAKFAST PL PALACE** — Basic�
   - slug: `bed-breakfast-pl-palace-basic`
   - indirizzo: Largo Guglielmo Marconi, 15, 70010 Sammichele di Bari BA
   - website: https://bedbreakfastplpalace.traveleto.com/
23. **Bed and Breakfast Il Civico 2** — Basic�
   - slug: `bed-and-breakfast-il-civico-2-basic`
   - indirizzo: Via Monte S. Michele, 2, 70128 Bari BA
   - website: http://www.bbilcivico2.com/
24. **Cenobio Hotel & Spa Matera** — Basic�
   - slug: `cenobio-hotel-spa-matera-basic`
   - indirizzo: Via Civita, 10, 75100 Matera MT
   - website: https://www.cenobiohotelmatera.it/
25. **Comeacasatua** — Basic�
   - slug: `comeacasatua-basic`
   - indirizzo: Str. Torre Tresca, 22, 70124 Bari BA
   - website: https://www.booking.com/hotel/it/comeacasatua.it.html?aid=2323143&no_rooms=1&group_adults=2
26. **Grotta Cilicia** — Basic�
   - slug: `grotta-cilicia-basic`
   - indirizzo: Via Giulio Pastore, 70015 Noci BA
   - website: http://www.grottacilicia.it/
27. **Hotel Barsotti** — Basic�
   - slug: `hotel-barsotti-basic`
   - indirizzo: Via Camillo Benso Conte di Cavour, 1, 72100 Brindisi BR
   - website: https://barsotti.donhotel.net/
28. **Hotel Sassi** — Basic�
   - slug: `hotel-sassi-basic`
   - indirizzo: Via S. Giovanni Vecchio, 89, 75100 Matera MT
   - website: https://www.hotelsassi.it/
29. **A Casa di Grace** — Basiglio
   - slug: `a-casa-di-grace-basiglio`
   - indirizzo: Residenza Golfo, Via Giotto, 2, 20079 Basiglio MI
   - website: https://stayedhotel.eu/a-casa-di-grace-milano-3-basiglio-italy
30. **Agriturismo Le Risaie** — Basiglio
   - slug: `agriturismo-le-risaie-basiglio`
   - indirizzo: Piazza Monsignor Rossi, 2, 20079 Basiglio MI
   - website: http://agriturismolerisaie.it/
31. **B&B Botton d'Oro** — Basiglio
   - slug: `b-b-botton-d-oro-basiglio`
   - indirizzo: Via Giuseppe Verdi, 5D, 20079 Basiglio MI
   - website: http://www.bottondorobasiglio.com/
32. **B&B La Dimora di Charme** — Basiglio
   - slug: `b-b-la-dimora-di-charme-basiglio`
   - indirizzo: Via Cristoforo Colombo, 20079 Basiglio MI
33. **BB I Salici** — Basiglio
   - slug: `bb-i-salici-basiglio`
   - indirizzo: Via Giuseppe Verdi, Salici 132, 20079 Basiglio MI
   - website: http://www.bbisalici.it/
34. **Corte Basiglio** — Basiglio
   - slug: `corte-basiglio-basiglio`
   - indirizzo: Via Privata Gennari, 1, 20079 Basiglio MI
   - website: https://www.cortebasiglio.com/
35. **Hotel Ascot** — Basiglio
   - slug: `hotel-ascot-basiglio`
   - indirizzo: Strada Provinciale 35, SPexSS35, 12, 20082 Binasco MI