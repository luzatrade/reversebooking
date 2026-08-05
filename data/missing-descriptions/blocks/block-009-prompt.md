# Blocco 9/500 — 35 strutture senza descrizione IT

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

1. **Luxury B&b Euphorbia** — Acireale
   - slug: `luxury-b-b-euphorbia-acireale`
   - indirizzo: Via Canale Torto, 2, 95024 Acireale CT
2. **Palazzo Giovanni Bed and Breakfast** — Acireale
   - slug: `palazzo-giovanni-bed-and-breakfast-acireale`
   - indirizzo: Via XXI Aprile, 103, 95024 Acireale CT
3. **Residenza Cavour** — Acireale
   - slug: `residenza-cavour-acireale`
   - indirizzo: Via Camillo Benso Conte di Cavour, 17, 95024 Acireale CT
4. **Riflessi Acireale Palace Suites** — Acireale
   - slug: `riflessi-acireale-palace-suites-acireale`
   - indirizzo: Via S. Martino, 121, 95024 Acireale CT
5. **Savoia Residence** — Acireale
   - slug: `savoia-residence-acireale`
   - indirizzo: Corso Savoia, 19, 95024 Acireale CT
6. **Villa Arianna Acireale** — Acireale
   - slug: `villa-arianna-acireale-acireale`
   - indirizzo: Via Lazzaretto, 95024 Acireale CT
7. **Villa Feluchia B&B** — Acireale
   - slug: `villa-feluchia-b-b-acireale`
   - indirizzo: Via Collegio Fiandaca, 44/A, 95024 Acireale CT
8. **Agriturismo Il Pioppeto** — Acquafondata
   - slug: `agriturismo-il-pioppeto-acquafondata`
   - indirizzo: Strada Provinciale 81, 44, 03043 Cassino FR
9. **B&B hotel La Villa** — Acquafondata
   - slug: `b-b-hotel-la-villa-acquafondata`
   - indirizzo: Traversa1, Via Atinense, 9/11, 86077 Pozzilli IS
10. **b&b Il Sorriso** — Acquafondata
   - slug: `b-b-il-sorriso-acquafondata`
   - indirizzo: D.Alighieri, 6 Piano terra, 86077 Pozzilli IS
11. **B&B L'EDEN** — Acquafondata
   - slug: `b-b-l-eden-acquafondata`
   - indirizzo: Via Sant'Angelo, 13, 03043 Cassino FR
12. **B&B La Costa** — Acquafondata
   - slug: `b-b-la-costa-acquafondata`
   - indirizzo: Via Caira, 35, 03043 Cassino FR
13. **B&B La Montagnarosa** — Acquafondata
   - slug: `b-b-la-montagnarosa-acquafondata`
   - indirizzo: Via Mainarde, 86070 Castelnuovo A Volturno IS
14. **B&b Sud e Magia** — Acquafondata
   - slug: `b-b-sud-e-magia-acquafondata`
   - indirizzo: Via Lecine, 03040 San Vittore del Lazio FR
15. **Chez Nous Bed and Breakfast** — Acquafondata
   - slug: `chez-nous-bed-and-breakfast-acquafondata`
   - indirizzo: 03040 Picinisco FR
16. **Gerberarooms** — Acquafondata
   - slug: `gerberarooms-acquafondata`
   - indirizzo: Via Atinense, 27/A, 86077 Pozzilli IS
17. **Giosam Bed & Breakfast** — Acquafondata
   - slug: `giosam-bed-breakfast-acquafondata`
   - indirizzo: Via Atinense, 14, 86077 Pozzilli IS
18. **Hotel Continental Cassino** — Acquafondata
   - slug: `hotel-continental-cassino-acquafondata`
   - indirizzo: Piazza Alcide De Gasperi, 4, 03043 Cassino FR
19. **Hotel La Pace - Experience** — Acquafondata
   - slug: `hotel-la-pace-experience-acquafondata`
   - indirizzo: Via Abruzzi, 16, 03043 Cassino FR
20. **Hotel Ristorante Al Boschetto Cassino** — Acquafondata
   - slug: `hotel-ristorante-al-boschetto-cassino-acquafondata`
   - indirizzo: Via Ausonia, 54, SR, 630 KM 0/300, 03043 Cassino FR
21. **Hotel Ristorante La Campagnola** — Acquafondata
   - slug: `hotel-ristorante-la-campagnola-acquafondata`
   - indirizzo: SR630, 24, 03043 Cassino FR
22. **Hotel Sant'Elia** — Acquafondata
   - slug: `hotel-sant-elia-acquafondata`
   - indirizzo: Via Pezzogrande, 798, 03049 Sant'Elia Fiumerapido FR
23. **La Sorgente** — Acquafondata
   - slug: `la-sorgente-acquafondata`
   - indirizzo: Viale Sandro Pertini, 12, 86070 Rocchetta Alta IS
24. **La Suite** — Acquafondata
   - slug: `la-suite-acquafondata`
   - indirizzo: Via Enrico de Nicola, 151, 03043 Cassino FR
25. **Locanda Belvedere da Stefano** — Acquafondata
   - slug: `locanda-belvedere-da-stefano-acquafondata`
   - indirizzo: Località Pratola snc in frazione, 86070 Castelnuovo Al Volturno IS
26. **Palazzo Licinio** — Acquafondata
   - slug: `palazzo-licinio-acquafondata`
   - indirizzo: Via Antonio de Bellis, 3, 86079 Venafro IS
27. **Tenuta degli Uliveti B&B** — Acquafondata
   - slug: `tenuta-degli-uliveti-b-b-acquafondata`
   - indirizzo: Via Degli Uliveti, 03049 Sant'Elia Fiumerapido FR
28. **Agriturismo L'Antico Casale** — Acquaformosa
   - slug: `agriturismo-l-antico-casale-acquaformosa`
   - indirizzo: c/da S. Anna, 87042 Altomonte CS
29. **Albergo Meruo** — Acquaformosa
   - slug: `albergo-meruo-acquaformosa`
   - indirizzo: Piazza Croce, 3, 87016 Morano Calabro CS
30. **Antico Borgo B&B** — Acquaformosa
   - slug: `antico-borgo-b-b-acquaformosa`
   - indirizzo: Via Olivella, 122, 87040 Tarsia CS
31. **B&B Cristallo** — Acquaformosa
   - slug: `b-b-cristallo-acquaformosa`
   - indirizzo: Via Giuseppe Mazzini, 12, 87012 Castrovillari CS
32. **B&B IL LAGHETTO** — Acquaformosa
   - slug: `b-b-il-laghetto-acquaformosa`
   - indirizzo: Via Timpone della Capanna, 12 b, 87012 Castrovillari CS
33. **B&B KA EDDA** — Acquaformosa
   - slug: `b-b-ka-edda-acquaformosa`
   - indirizzo: Via Fontana Vecchia, 61, 87010 Acquaformosa CS
34. **B&B La Brezza del Pollino** — Acquaformosa
   - slug: `b-b-la-brezza-del-pollino-acquaformosa`
   - indirizzo: C.da Mangioppo, 38, 87016 Morano Calabro CS
35. **Castello Di Altomonte Ristorante Albergo** — Acquaformosa
   - slug: `castello-di-altomonte-ristorante-albergo-acquaformosa`
   - indirizzo: Piazza Castello, 6, 87042 Altomonte CS