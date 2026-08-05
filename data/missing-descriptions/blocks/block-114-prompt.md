# Blocco 114/500 — 35 strutture senza descrizione IT

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

1. **B&B La Mëisun** — Angrogna
   - slug: `b-b-la-meisun-angrogna`
   - indirizzo: Str. Borgata Cassas, 4, 10060 Perrero TO
2. **B&B La Scuola** — Angrogna
   - slug: `b-b-la-scuola-angrogna`
   - indirizzo: Borgata Mortaria, 10060 Perrero TO
3. **B&B Miravalle** — Angrogna
   - slug: `b-b-miravalle-angrogna`
   - indirizzo: Via Miravalle, 2, 10066 Torre Pellice TO
4. **B&B, Hotel La Vià di Bertone Piergiorgio** — Angrogna
   - slug: `b-b-hotel-la-via-di-bertone-piergiorgio-angrogna`
   - indirizzo: Via Rimembranza, 9, 10061 Cavour TO
5. **Cascina la Demilana** — Angrogna
   - slug: `cascina-la-demilana-angrogna`
   - indirizzo: Via Pellengo, 7, 10060 Bibiana TO
6. **Country house Casa Payer** — Angrogna
   - slug: `country-house-casa-payer-angrogna`
   - indirizzo: Località Payer, 1, 10062 Luserna San Giovanni TO
7. **Dimora San Secondo** — Angrogna
   - slug: `dimora-san-secondo-angrogna`
   - indirizzo: Via Roma, 1, 10060 San Secondo di Pinerolo TO
8. **Foresteria Valdese di Torre Pellice - IT001275B76KFYNDSQ** — Angrogna
   - slug: `foresteria-valdese-di-torre-pellice-it001275b76k-angrogna`
   - indirizzo: Via Arnaud, 34, 10066 Torre Pellice TO
9. **GUEST HOUSE Elisabeth** — Angrogna
   - slug: `guest-house-elisabeth-angrogna`
   - indirizzo: Via Pinerolo, 71, 10060 Miradolo TO
10. **Hotel Barrage** — Angrogna
   - slug: `hotel-barrage-angrogna`
   - indirizzo: Stradale S. Secondo, 100, 10064 Pinerolo TO
11. **Hotel Centro** — Angrogna
   - slug: `hotel-centro-angrogna`
   - indirizzo: Via Caduti per la Libertà, 7, 10066 Torre Pellice TO
12. **Hotel Valentino di Coutandin Dino** — Angrogna
   - slug: `hotel-valentino-di-coutandin-dino-angrogna`
   - indirizzo: P.za III° Alpini, 4, 10063 Perosa Argentina TO
13. **Locanda il Pomo d'Oro - Ristorante & Pizza** — Angrogna
   - slug: `locanda-il-pomo-d-oro-ristorante-pizza-angrogna`
   - indirizzo: Piazza Roma, 3, 10060 Angrogna TO
14. **Agriturismo Zugarelli** — Anguillara Sabazia
   - slug: `agriturismo-zugarelli-anguillara-sabazia`
   - indirizzo: Via Comunale di S. Francesco, 2590, 00061 Anguillara Sabazia RM
15. **Albergo Della Posta** — Anguillara Sabazia
   - slug: `albergo-della-posta-anguillara-sabazia`
   - indirizzo: Via Agostino Fausti, 29, 00062 Bracciano RM
16. **Albergo Ristorante Alfredo da Persichella dal 1960** — Anguillara Sabazia
   - slug: `albergo-ristorante-alfredo-da-persichella-dal-19-anguillara-sabazia`
   - indirizzo: Via della Sposetta Vecchia, 1, 00062 Bracciano RM
17. **Albergo Ristorante Villa Maria** — Anguillara Sabazia
   - slug: `albergo-ristorante-villa-maria-anguillara-sabazia`
   - indirizzo: Via del Lago, 24, 00062 Bracciano RM
18. **Alloggio Turistico Rizzuto** — Anguillara Sabazia
   - slug: `alloggio-turistico-rizzuto-anguillara-sabazia`
   - indirizzo: Via del Pescino, 29, 00062 Bracciano RM
19. **AZZURRO CAMPING VILLAGE** — Anguillara Sabazia
   - slug: `azzurro-camping-village-anguillara-sabazia`
   - indirizzo: Via Settevene Palo I' tronco, Località Rosario, 16, 00062 Bracciano RM
20. **B&B al Vicolo dei Pescatori** — Anguillara Sabazia
   - slug: `b-b-al-vicolo-dei-pescatori-anguillara-sabazia`
   - indirizzo: Vicolo dei Pescatori,23, 00061 Anguillara Sabazia RM, 00061 Anguillara Sabazia RM
21. **B&B La Sosta nel Borgo** — Anguillara Sabazia
   - slug: `b-b-la-sosta-nel-borgo-anguillara-sabazia`
   - indirizzo: Via Roma, 35, 00061 Anguillara Sabazia RM
22. **Domus Angularia** — Anguillara Sabazia
   - slug: `domus-angularia-anguillara-sabazia`
   - indirizzo: Piazza del Comune, 7, 00061 Anguillara Sabazia RM
23. **Eco Hotel Residence il Casale** — Anguillara Sabazia
   - slug: `eco-hotel-residence-il-casale-anguillara-sabazia`
   - indirizzo: Via Dell'Acquarella, 11, 00069 Trevignano Romano RM
24. **Ha Hotel** — Anguillara Sabazia
   - slug: `ha-hotel-anguillara-sabazia`
   - indirizzo: Via Circumlacuale, 7a, 00062 Lungolago RM
25. **Hotel Borgo Vista Lago** — Anguillara Sabazia
   - slug: `hotel-borgo-vista-lago-anguillara-sabazia`
   - indirizzo: Viale Giuseppe Garibaldi, 61, 00069 Trevignano Romano RM
26. **Hotel Cassia** — Anguillara Sabazia
   - slug: `hotel-cassia-anguillara-sabazia`
   - indirizzo: Via Cassia, 1736, 00123 Roma RM
27. **Hotel Massimino** — Anguillara Sabazia
   - slug: `hotel-massimino-anguillara-sabazia`
   - indirizzo: Via Anguillarese, km 4.200/km 4.200, 00061 Anguillara Sabazia RM
28. **Hotel Ristorante da Righetto** — Anguillara Sabazia
   - slug: `hotel-ristorante-da-righetto-anguillara-sabazia`
   - indirizzo: Corso Vittorio Emanuele, 70-72-74, 00063 Campagnano di Roma RM
29. **IL B&B DEL LAGO** — Anguillara Sabazia
   - slug: `il-b-b-del-lago-anguillara-sabazia`
   - indirizzo: Via Aloisio Anguillra, 8, 00061 Anguillara Sabazia RM
30. **Il Postiglione** — Anguillara Sabazia
   - slug: `il-postiglione-anguillara-sabazia`
   - indirizzo: Via Cassia Antica, 15, 00063 Campagnano di Roma RM
31. **La Cannella** — Anguillara Sabazia
   - slug: `la-cannella-anguillara-sabazia`
   - indirizzo: Via Pisa, 2, 00061 Anguillara Sabazia RM
32. **Ristorante Albergo Benigni** — Anguillara Sabazia
   - slug: `ristorante-albergo-benigni-anguillara-sabazia`
   - indirizzo: Via della Vittoria, 13, 00063 Campagnano di Roma RM
33. **Vallelunga Park Hotel** — Anguillara Sabazia
   - slug: `vallelunga-park-hotel-anguillara-sabazia`
   - indirizzo: di Roma&nbsp, Via della Mola Maggiorana, 2, 00063 Campagnano di Roma RM
34. **Agriturismo Locanda Venezze** — Anguillara Veneta
   - slug: `agriturismo-locanda-venezze-anguillara-veneta`
   - indirizzo: Via Feniletti, 420, 45030 San Martino di Venezze RO
35. **Albergo Fattoria Sant'Anna** — Anguillara Veneta
   - slug: `albergo-fattoria-sant-anna-anguillara-veneta`
   - indirizzo: Via Giotto, 37/1, 35020 Correzzola PD