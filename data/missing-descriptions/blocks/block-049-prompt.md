# Blocco 49/500 — 35 strutture senza descrizione IT

Compila descrizioni SEO per HotelsDrop.com.

## Regole obbligatorie (NON inventare)

1. **Solo informazioni verificabili** da fonti ufficiali o affidabili:
   - sito ufficiale della struttura
   - pagina Google Business / Maps della struttura
   - pagine ufficiali di catena/franchising
2. **VIETATO inventare**: servizi, stelle, premi, distanze, storia, ristrutturazioni, Michelin, piscine/spa se non confermate.
3. Se **non trovi** testo descrittivo sufficiente e verificabile:
   - **NON** compila `description` né `description_en`
   - aggiungi la struttura in `not_found` con motivo breve (es. "sito assente", "solo nome su OTA", "dati insufficienti")
4. Se trovi solo testo in inglese: `description_en` = adattamento fedele; `description` = traduzione fedele (non creativa).
5. Se trovi solo testo in italiano: `description` = fedele; `description_en` = traduzione fedele.
6. Lunghezza quando presente: ~120–200 parole per lingua, tono hospitality professionale.
7. Puoi menzionare HotelsDrop solo in chiusura (1 frase): richiesta gratuita, offerte dirette, zero commissioni per chi viaggia — **solo** se il resto del testo è reale.

## Formato output (JSON strict)

Rispondi **solo** con un oggetto JSON (no markdown fence):

{
  "updates": [
    {
      "slug": "slug-esatto",
      "indirizzo": "indirizzo verificato o seed",
      "description": "testo IT solo se verificato",
      "description_en": "testo EN solo se verificato",
      "sources": ["https://sito-ufficiale...", "https://..."]
    }
  ],
  "not_found": [
    {
      "slug": "slug-esatto",
      "nome": "Nome struttura",
      "city_name": "Città",
      "reason": "motivo sintetico"
    }
  ]
}

- In `updates`: **solo** strutture con almeno `description` O `description_en` verificati (idealmente entrambi).
- In `not_found`: **tutte** le strutture del blocco senza testo verificabile.
- Ogni struttura del blocco deve comparire in `updates` O in `not_found` (non omettere righe).

## Strutture del blocco

1. **L'Antico Casolare** — Albanella
   - slug: `l-antico-casolare-albanella`
   - indirizzo: contrada suvero, 84020 Castelcivita SA
2. **L'Araba Fenice Hotel & Resort** — Albanella
   - slug: `l-araba-fenice-hotel-resort-albanella`
   - indirizzo: Contrada Falagato, 39, 84045 Altavilla Silentina SA
3. **Pietra del Colle Agriturismo** — Albanella
   - slug: `pietra-del-colle-agriturismo-albanella`
   - indirizzo: via cassile, 24, 84045 Altavilla Silentina SA
4. **San Nicola il sole Counrty House** — Albanella
   - slug: `san-nicola-il-sole-counrty-house-albanella`
   - indirizzo: Via San Nicola, 17, 84044 Albanella SA SA
5. **Tenuta il Giardino di Eros** — Albanella
   - slug: `tenuta-il-giardino-di-eros-albanella`
   - indirizzo: Via Chiazzino, 5, 84069 Roccadaspide SA
6. **Villa di Bartolomeo** — Albanella
   - slug: `villa-di-bartolomeo-albanella`
   - indirizzo: SS166, n° 324, 84069 Capaccio Paestum SA
7. **Agriturismo Il Molino Della Contessa** — Albano di Lucania
   - slug: `agriturismo-il-molino-della-contessa-albano-di-lucania`
   - indirizzo: Località, Str. Interpoderale Santa Croce Camastra, 85010 Castelmezzano PZ
8. **B&B Il Patriarca** — Albano di Lucania
   - slug: `b-b-il-patriarca-albano-di-lucania`
   - indirizzo: Via Gioberti, 4, 85010 Albano di Lucania PZ
9. **B&B La Bella Vista** — Albano di Lucania
   - slug: `b-b-la-bella-vista-albano-di-lucania`
   - indirizzo: Via Bellini, 3, 85010 Albano di Lucania PZ
10. **B&B La casa di Giulietta** — Albano di Lucania
   - slug: `b-b-la-casa-di-giulietta-albano-di-lucania`
   - indirizzo: Via Giuseppe Garibaldi, 18, 85010 Castelmezzano PZ
11. **Hotel Dolomiti Castelmezzano** — Albano di Lucania
   - slug: `hotel-dolomiti-castelmezzano-albano-di-lucania`
   - indirizzo: Via Michele Volini, 19, 85010 Castelmezzano PZ
12. **Il Nibbio Reale** — Albano di Lucania
   - slug: `il-nibbio-reale-albano-di-lucania`
   - indirizzo: Via Padre Pio, 2a, 85010 Albano di Lucania PZ
13. **La Locanda di Castromediano** — Albano di Lucania
   - slug: `la-locanda-di-castromediano-albano-di-lucania`
   - indirizzo: Via Michele Volini, 50, 85010 Castelmezzano PZ
14. **Residenza Balios** — Albano di Lucania
   - slug: `residenza-balios-albano-di-lucania`
   - indirizzo: Piazza dei Caduti, 12, 85010 Vaglio Basilicata PZ
15. **Agriturismo Casale degli Archi** — Albano Laziale
   - slug: `agriturismo-casale-degli-archi-albano-laziale`
   - indirizzo: Via Appia Nuova, 3, 00073 Castel Gandolfo RM
16. **Ai Vecchi Tempi** — Albano Laziale
   - slug: `ai-vecchi-tempi-albano-laziale`
   - indirizzo: Via Nettunense, Km 3.200, 00047 Marino RM
17. **Albano Station Rooms Bed & Breakfast Castelli Romani Castelgandolfo Marino Ciampino Ariccia Genzano** — Albano Laziale
   - slug: `albano-station-rooms-bed-breakfast-castelli-roma-albano-laziale`
   - indirizzo: Via del Mare 34 00041 Pavona, di Albano Laziale RM
18. **B&B La Casa di Milady** — Albano Laziale
   - slug: `b-b-la-casa-di-milady-albano-laziale`
   - indirizzo: Via Ettore Ronconi, 33, 00045 Genzano di Roma RM
19. **Bed and Breakfast 4 Rent Albano Laziale** — Albano Laziale
   - slug: `bed-and-breakfast-4-rent-albano-laziale-albano-laziale`
   - indirizzo: Via Parma, 3A/3B, 00041 Albano Laziale RM
20. **Cape House** — Albano Laziale
   - slug: `cape-house-albano-laziale`
   - indirizzo: Via Tenutella, 70 bis, 00041 Albano Laziale RM
21. **Casale della Certosa** — Albano Laziale
   - slug: `casale-della-certosa-albano-laziale`
   - indirizzo: Via Pietrelcina, 6, 00134 Roma RM
22. **Casita Jolanda** — Albano Laziale
   - slug: `casita-jolanda-albano-laziale`
   - indirizzo: VIA CAVOUR, 17, 00041 Albano Laziale RM
23. **Hotel California** — Albano Laziale
   - slug: `hotel-california-albano-laziale`
   - indirizzo: Via Quarto Negroni, 46, 00072 Ariccia RM
24. **Hotel Castel Vecchio** — Albano Laziale
   - slug: `hotel-castel-vecchio-albano-laziale`
   - indirizzo: Viale Pio XI, 23, 00073 Castel Gandolfo RM
25. **Hotel Miralago** — Albano Laziale
   - slug: `hotel-miralago-albano-laziale`
   - indirizzo: Via dei Cappuccini, 12, 00041 Albano Laziale RM
26. **Hotel Ristorante Villa Aricia** — Albano Laziale
   - slug: `hotel-ristorante-villa-aricia-albano-laziale`
   - indirizzo: Via dei Villini, 4-6, 00072 Ariccia RM
27. **Hotel Villa Altieri** — Albano Laziale
   - slug: `hotel-villa-altieri-albano-laziale`
   - indirizzo: Via Appia Nuova, 1, 00041 Albano Laziale RM
28. **La Villetta Suite** — Albano Laziale
   - slug: `la-villetta-suite-albano-laziale`
   - indirizzo: Via Bari, 52, 00043 Ciampino RM
29. **Loft 17** — Albano Laziale
   - slug: `loft-17-albano-laziale`
   - indirizzo: Via della Vignetta, 17, 00041 Albano Laziale RM
30. **Park Hotel Villamaria** — Albano Laziale
   - slug: `park-hotel-villamaria-albano-laziale`
   - indirizzo: Via del Mare, 263, 00041 Albano Laziale RM
31. **Tenute Al Bano** — Albano Laziale
   - slug: `tenute-al-bano-albano-laziale`
   - indirizzo: San Giovanni Bosco, 1, 72020 Cellino San Marco BR
32. **Villa dei Fantasmi** — Albano Laziale
   - slug: `villa-dei-fantasmi-albano-laziale`
   - indirizzo: Via dell'Osservatorio, 9, 00040 Rocca di Papa RM
33. **Villa Maximo in Albano** — Albano Laziale
   - slug: `villa-maximo-in-albano-albano-laziale`
   - indirizzo: Vicolo Olivella, 48, 00041 Albano Laziale RM
34. **"I Silos" Guest House** — Albano Sant'Alessandro
   - slug: `i-silos-guest-house-albano-sant-alessandro`
   - indirizzo: Via Dolomiti, 24, 24068 Seriate BG
35. **B&B Corte Seguini** — Albano Sant'Alessandro
   - slug: `b-b-corte-seguini-albano-sant-alessandro`
   - indirizzo: Via Roma, 10, 24060 Bagnatica BG