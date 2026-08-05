# Blocco 70/500 — 35 strutture senza descrizione IT

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

1. **Albergo del Lago** — Alfedena
   - slug: `albergo-del-lago-alfedena`
   - indirizzo: Via Del Lago, 16, 67030 Villetta Barrea AQ
2. **Albergo Il Giardino Del Rio** — Alfedena
   - slug: `albergo-il-giardino-del-rio-alfedena`
   - indirizzo: Via degli Oschi, 6, 67031 Castel di Sangro AQ
3. **Albergo Leon d'Oro** — Alfedena
   - slug: `albergo-leon-d-oro-alfedena`
   - indirizzo: Via Roma, 7, 67030 Alfedena AQ
4. **Albergo Ristorante Il Pescatore** — Alfedena
   - slug: `albergo-ristorante-il-pescatore-alfedena`
   - indirizzo: Via Roma, 80, 67030 Villetta Barrea AQ
5. **Albergo Ristorante La Poiana** — Alfedena
   - slug: `albergo-ristorante-la-poiana-alfedena`
   - indirizzo: Localita' Masseria, 67030 Barrea AQ
6. **B&B Villa Tina** — Alfedena
   - slug: `b-b-villa-tina-alfedena`
   - indirizzo: SS83, 5, 67030 Alfedena AQ
7. **Da Nonna Li bed & breakfast** — Alfedena
   - slug: `da-nonna-li-bed-breakfast-alfedena`
   - indirizzo: Via Valle Sant'Angelo, 66, 67030 Villetta Barrea AQ
8. **ex Park Hotel Katia** — Alfedena
   - slug: `ex-park-hotel-katia-alfedena`
   - indirizzo: Via Roma, 1, 67030 Alfedena AQ
9. **Hotel degli Olmi** — Alfedena
   - slug: `hotel-degli-olmi-alfedena`
   - indirizzo: Via Fossato, 33, 67030 Villetta Barrea AQ
10. **Hotel Il Tiglio** — Alfedena
   - slug: `hotel-il-tiglio-alfedena`
   - indirizzo: Via XX Settembre, 132/136, 67031 Castel di Sangro AQ
11. **Hotel La Fenice** — Alfedena
   - slug: `hotel-la-fenice-alfedena`
   - indirizzo: Strada Statale 17 Km, 150, 67031 Castel di Sangro AQ
12. **Il Girasole Suite & Luxury Private Spa** — Alfedena
   - slug: `il-girasole-suite-luxury-private-spa-alfedena`
   - indirizzo: Località, Contrada Piana Santa Liberata, 67031 Castel di Sangro AQ
13. **Il Vicoletto B&B** — Alfedena
   - slug: `il-vicoletto-b-b-alfedena`
   - indirizzo: Via Casili, 67030 Alfedena AQ
14. **La scarpetta di Venere B&B** — Alfedena
   - slug: `la-scarpetta-di-venere-b-b-alfedena`
   - indirizzo: Via Fontana Nuova, 17, 67030 Barrea AQ
15. **Agriturismo Cascina Tavolette** — Alfianello
   - slug: `agriturismo-cascina-tavolette-alfianello`
   - indirizzo: SP102 Loc. Tavolette a Sera, Via per Ostiano, 25020 Pralboino BS
16. **Agriturismo Colombarotto** — Alfianello
   - slug: `agriturismo-colombarotto-alfianello`
   - indirizzo: Alfiano Nuovo, 1, 26010 Alfiano Nuovo CR
17. **Agriturismo Le Magnolie** — Alfianello
   - slug: `agriturismo-le-magnolie-alfianello`
   - indirizzo: Cascina Vallate Sera, 31, 25028 Verolanuova BS
18. **Albergo Dell'angelo** — Alfianello
   - slug: `albergo-dell-angelo-alfianello`
   - indirizzo: Via Guglielmo Marconi, 7, 25026 Pontevico BS
19. **Albergo Orzihotel** — Alfianello
   - slug: `albergo-orzihotel-alfianello`
   - indirizzo: Via del Commercio, 20, 25030 Zona Artigianale BS
20. **Foresteria Le Rustiche** — Alfianello
   - slug: `foresteria-le-rustiche-alfianello`
   - indirizzo: Via Roma, 20, 25020 Dello BS
21. **HC Hotel Il Gelso Pontevico** — Alfianello
   - slug: `hc-hotel-il-gelso-pontevico-alfianello`
   - indirizzo: Strada Francesca, 144, 25026 Chiesuola BS
22. **HC HOTEL TOURING SENIGA** — Alfianello
   - slug: `hc-hotel-touring-seniga-alfianello`
   - indirizzo: Via Umberto I', 52, 25020 Seniga BS
23. **Hotel Al Veliero** — Alfianello
   - slug: `hotel-al-veliero-alfianello`
   - indirizzo: Via Vincenzo Foppa, 27, 25026 Pontevico BS
24. **Hotel Gambero** — Alfianello
   - slug: `hotel-gambero-alfianello`
   - indirizzo: Via Verolanuova, 99, 25034 Orzinuovi BS
25. **IL COLIBRÌ B&B** — Alfianello
   - slug: `il-colibri-b-b-alfianello`
   - indirizzo: Via Matteotti G., 3, 25024 Leno BS
26. **La Casina Affittacamere** — Alfianello
   - slug: `la-casina-affittacamere-alfianello`
   - indirizzo: Via Roma, 10, 25020 Dello BS
27. **Motel Cuore Cremona** — Alfianello
   - slug: `motel-cuore-cremona-alfianello`
   - indirizzo: Via Arti e Mestieri, 5, 26030 Gadesco-Pieve Delmona CR
28. **Trattoria BorgoVecchio e Locanda BorgoVecchio** — Alfianello
   - slug: `trattoria-borgovecchio-e-locanda-borgovecchio-alfianello`
   - indirizzo: Viale Stazione, 7, 25025 Manerbio BS
29. **Villa la Canonica** — Alfianello
   - slug: `villa-la-canonica-alfianello`
   - indirizzo: Via Palazzina, 2, 25022 Padernello BS
30. **Agriturismo 'Il Balcone sul Monferrato'** — Alfiano Natta
   - slug: `agriturismo-il-balcone-sul-monferrato-alfiano-natta`
   - indirizzo: Località Casa Paletti, 30, 14039 Tonco AT
31. **Agriturismo Crealto** — Alfiano Natta
   - slug: `agriturismo-crealto-alfiano-natta`
   - indirizzo: Str. Crealto, 6, 15021 Cardona AL
32. **B&B Al Fanfarin** — Alfiano Natta
   - slug: `b-b-al-fanfarin-alfiano-natta`
   - indirizzo: Via Aldo Brosio, 7, 14020 Cinaglio AT
33. **B&B Da nonna Carla** — Alfiano Natta
   - slug: `b-b-da-nonna-carla-alfiano-natta`
   - indirizzo: Via Vittorio Emanuele III, 11, 15021 Sanico AL
34. **B&B I Mandorli** — Alfiano Natta
   - slug: `b-b-i-mandorli-alfiano-natta`
   - indirizzo: Via Troglio, 1/3, 15021 Cardona AL
35. **B&B Julia** — Alfiano Natta
   - slug: `b-b-julia-alfiano-natta`
   - indirizzo: Via Santo Spirito, 12, 15021 Cardona AL