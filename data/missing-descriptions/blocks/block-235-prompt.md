# Blocco 235/500 — 35 strutture senza descrizione IT

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

1. **B&B La Rocca** — Bassano Romano
   - slug: `b-b-la-rocca-bassano-romano`
   - indirizzo: Via Giuseppe Garibaldi, 23, 01030 Bassano Romano VT
2. **B&B Monticelli** — Bassano Romano
   - slug: `b-b-monticelli-bassano-romano`
   - indirizzo: Località Monticelli, 1, 01012 Capranica VT
3. **B&B Notti d'Oriente** — Bassano Romano
   - slug: `b-b-notti-d-oriente-bassano-romano`
   - indirizzo: Via Giuseppe Garibaldi, 01015 Sutri VT
4. **Casale Sant'Elia** — Bassano Romano
   - slug: `casale-sant-elia-bassano-romano`
   - indirizzo: Via Monte Sant' Elia, 01100 Capranica-Scalo VT
5. **Corte Sospesa Guest House & Spa** — Bassano Romano
   - slug: `corte-sospesa-guest-house-spa-bassano-romano`
   - indirizzo: Via S. Gratiliano, 3, 01030 Bassano Romano VT
6. **La Canonica - Country House Anna Fendi** — Bassano Romano
   - slug: `la-canonica-country-house-anna-fendi-bassano-romano`
   - indirizzo: 01037 Ronciglione VT
7. **La Noce Appartamenti Agriturismo** — Bassano Romano
   - slug: `la-noce-appartamenti-agriturismo-bassano-romano`
   - indirizzo: Via San Pietro, snc, 01030 Bassano Romano VT
8. **Life B&B** — Bassano Romano
   - slug: `life-b-b-bassano-romano`
   - indirizzo: Via Cassia, km 44,900, 01015 Sutri VT
9. **Monastero San Vincenzo M.** — Bassano Romano
   - slug: `monastero-san-vincenzo-m-bassano-romano`
   - indirizzo: Via S. Vincenzo, 88, 01030 Bassano Romano VT
10. **Relais Sans Souci and Spa** — Bassano Romano
   - slug: `relais-sans-souci-and-spa-bassano-romano`
   - indirizzo: Via dei Noccioleti, 18, 01037 Ronciglione VT
11. **Scuderie Della Contea** — Bassano Romano
   - slug: `scuderie-della-contea-bassano-romano`
   - indirizzo: Via di Monte Topino, 14, 01015 Sutri VT
12. **Albergo Bellavista** — Bassiano
   - slug: `albergo-bellavista-bassiano`
   - indirizzo: Via delle Medaglie d'Oro, 7, 04100 Latina LT
13. **Albergo Ristorante la Pace** — Bassiano
   - slug: `albergo-ristorante-la-pace-bassiano`
   - indirizzo: Via dei Cappuccini, 9, 00037 Segni RM
14. **American Motel** — Bassiano
   - slug: `american-motel-bassiano`
   - indirizzo: Via Pontina km 63,400, 04012 Cisterna di Latina LT
15. **B&B HOTEL Latina** — Bassiano
   - slug: `b-b-hotel-latina-bassiano`
   - indirizzo: Via dei Volsini, 30, 04100 Latina LT
16. **B&B Piazza Roma** — Bassiano
   - slug: `b-b-piazza-roma-bassiano`
   - indirizzo: 〒04010, Provincia di Latina, Norma, ローマ広場 1
17. **Casa Blanca B&B** — Bassiano
   - slug: `casa-blanca-b-b-bassiano`
   - indirizzo: Strada Riserva Pantano del Monsignore, 12, 04100 Latina LT
18. **Eco House San Michele** — Bassiano
   - slug: `eco-house-san-michele-bassiano`
   - indirizzo: Via dei Monti Lepini, 69 SS156 dei Monti Lepini, 69, 04100 Borgo San Michele LT
19. **Foro Appio Mansio Hotel** — Bassiano
   - slug: `foro-appio-mansio-hotel-bassiano`
   - indirizzo: Via Appia Est, 04100 Latina LT
20. **Garden Hotel** — Bassiano
   - slug: `garden-hotel-bassiano`
   - indirizzo: Via del Lido, 129, 04100 Latina LT
21. **Guest House - Il Granaio** — Bassiano
   - slug: `guest-house-il-granaio-bassiano`
   - indirizzo: P.za della Rinascita, 3, 04010 Norma LT
22. **Hotel Degli Aranci** — Bassiano
   - slug: `hotel-degli-aranci-bassiano`
   - indirizzo: V. Appia, 04012 Cisterna di Latina LT
23. **Hotel Excelsior** — Bassiano
   - slug: `hotel-excelsior-bassiano`
   - indirizzo: P.le Lelia Caetani, 04100 Latina Scalo LT
24. **Hotel Principe Serrone** — Bassiano
   - slug: `hotel-principe-serrone-bassiano`
   - indirizzo: Via del Serrone, 1, 04013 Sermoneta LT
25. **Hotel Tirreno** — Bassiano
   - slug: `hotel-tirreno-bassiano`
   - indirizzo: Via Lungomare, 4174, 04100 Latina LT
26. **Il Borgo Antico B&B Rocca Massima** — Bassiano
   - slug: `il-borgo-antico-b-b-rocca-massima-bassiano`
   - indirizzo: Via S. Giuliano, 10, 04010 Rocca Massima LT
27. **Park Hotel** — Bassiano
   - slug: `park-hotel-bassiano`
   - indirizzo: Via dei Monti Lepini, 25, 04100 Latina LT
28. **Spicchio di Luna** — Bassiano
   - slug: `spicchio-di-luna-bassiano`
   - indirizzo: Via Alessandro Manzoni, 14, 04014 Pontinia LT
29. **B&B Perbacco** — Bassignana
   - slug: `b-b-perbacco-bassignana`
   - indirizzo: Via Mazzini, 7, 27020 Sartirana Lomellina PV
30. **Hermoso Housing HH Valenza** — Bassignana
   - slug: `hermoso-housing-hh-valenza-bassignana`
   - indirizzo: Corso Giuseppe Garibaldi, 61, 15048 Valenza AL
31. **Hotel Motel 2 Tortona** — Bassignana
   - slug: `hotel-motel-2-tortona-bassignana`
   - indirizzo: SP211, 14, 15057 Tortona AL
32. **La Casetta** — Bassignana
   - slug: `la-casetta-bassignana`
   - indirizzo: Via Gustavo Bisoglio, 32bis, 15046 San Salvatore Monferrato AL
33. **MA.MI** — Bassignana
   - slug: `ma-mi-bassignana`
   - indirizzo: Via Cerchetta, 12, 15045 Sale AL
34. **Agriturismo Il Palazzetto** — Bastia Mondov�
   - slug: `agriturismo-il-palazzetto-bastia-mondov`
   - indirizzo: borgata Palazzetto 18, 12060 Clavesana CN
35. **All' Ombra Del Castello** — Bastia Mondov�
   - slug: `all-ombra-del-castello-bastia-mondov`
   - indirizzo: Via Molino, 60, 12060 Cigliè CN