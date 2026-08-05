# Blocco 168/500 — 35 strutture senza descrizione IT

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

1. **Barone d'Asolo Country House Bed Breakfast Ristorazione** — Asolo
   - slug: `barone-d-asolo-country-house-bed-breakfast-risto-asolo`
   - indirizzo: Via Gasparona, 11, 31011 Asolo TV
2. **Cà Cinel Asolo B&B** — Asolo
   - slug: `ca-cinel-asolo-b-b-asolo`
   - indirizzo: Via Mestre, 9, 31011 Asolo TV
3. **Hotel Duse** — Asolo
   - slug: `hotel-duse-asolo`
   - indirizzo: Via Robert Browning, 190, 31011 Asolo TV
4. **Il Molino - Centorizzonti** — Asolo
   - slug: `il-molino-centorizzonti-asolo`
   - indirizzo: Via S. Caterina, 276, 31011 Asolo TV
5. **Progress Country & Wine House** — Asolo
   - slug: `progress-country-wine-house-asolo`
   - indirizzo: Via Palladio, 27/C, 31011 Asolo TV
6. **Residenza Dante Asolo B&B** — Asolo
   - slug: `residenza-dante-asolo-b-b-asolo`
   - indirizzo: Via Dante, 25, 31011 Asolo TV
7. **Villa Flangini** — Asolo
   - slug: `villa-flangini-asolo`
   - indirizzo: Via Foresto di Pagnano, 4, 31011 Asolo TV
8. **Villa Trieste M** — Asolo
   - slug: `villa-trieste-m-asolo`
   - indirizzo: Via Forestuzzo, 33, 31011 Asolo TV
9. **"La Corte di Aldo"** — Assago
   - slug: `la-corte-di-aldo-assago`
   - indirizzo: Via Pavese, 32, 20089 Rozzano MI
10. **B&B Botton D’Oro 2** — Assago
   - slug: `b-b-botton-d-oro-2-assago`
   - indirizzo: Via G. Verdi, Residenza Ontani, 212, 20080 Basiglio MI
11. **B&B I Dieci Mondi** — Assago
   - slug: `b-b-i-dieci-mondi-assago`
   - indirizzo: 20146 Milano MI, Italia
12. **B&B Independente** — Assago
   - slug: `b-b-independente-assago`
   - indirizzo: Via Giacomo Matteotti, 23, 20057 Assago MI
13. **Belstay Milano Assago** — Assago
   - slug: `belstay-milano-assago-assago`
   - indirizzo: A50, 20057 Assago MI
14. **Blu Hotel 4+4 Buccinasco** — Assago
   - slug: `blu-hotel-4-4-buccinasco-assago`
   - indirizzo: Via della Resistenza, 44, 20090 Buccinasco MI
15. **Casa Linda Affitta Camere Rozzano** — Assago
   - slug: `casa-linda-affitta-camere-rozzano-assago`
   - indirizzo: Viale Palmiro Togliatti, 140, 20089 Rozzano MI
16. **Corte Milano** — Assago
   - slug: `corte-milano-assago`
   - indirizzo: Via Alessandro Manzoni, 7/A, 20089 Rozzano MI
17. **CR B&B Rozzano (CR GROUP)** — Assago
   - slug: `cr-b-b-rozzano-cr-group-assago`
   - indirizzo: Viale Monte Amiata, 51, 20089 Rozzano MI
18. **H2C Hotel Milanofiori** — Assago
   - slug: `h2c-hotel-milanofiori-assago`
   - indirizzo: Via Roggia Bartolomea, 5, 20057 Assago MI
19. **Holiday Inn Milano Assago** — Assago
   - slug: `holiday-inn-milano-assago-assago`
   - indirizzo: Km, A50, 19, 20057 Milano MI
20. **Hotel Alga** — Assago
   - slug: `hotel-alga-assago`
   - indirizzo: Via del Mare, 93, 20142 Milano MI
21. **Hotel Forum** — Assago
   - slug: `hotel-forum-assago`
   - indirizzo: Viale Lombardia, 64, 20089 Rozzano MI
22. **Hotel Kristall** — Assago
   - slug: `hotel-kristall-assago`
   - indirizzo: Via Generale Antonio Cantore, 6, 20094 Corsico MI
23. **Hotel Marte** — Assago
   - slug: `hotel-marte-assago`
   - indirizzo: Via Cardinale, Via Ascanio Sforza, 81, 20141 Milano MI
24. **Hotel NH Milano Congress Centre** — Assago
   - slug: `hotel-nh-milano-congress-centre-assago`
   - indirizzo: Strada 2, 7, 20057 Assago MI
25. **Hotel Ristorante Sbranetta S.R.L.** — Assago
   - slug: `hotel-ristorante-sbranetta-s-r-l-assago`
   - indirizzo: Via Mincio, 24/26, 20089 Rozzano MI
26. **Ristorante da Kico** — Assago
   - slug: `ristorante-da-kico-assago`
   - indirizzo: Via Cascina Bazzana, 4, 20057 Assago MI
27. **Royal Garden Hotel** — Assago
   - slug: `royal-garden-hotel-assago`
   - indirizzo: CIN IT015011A1JYM3DXQ8, Via Giuseppe di Vittorio, 4, 20057 Assago MI
28. **Agriturismo Riu Sa Murta** — Assemini
   - slug: `agriturismo-riu-sa-murta-assemini`
   - indirizzo: Località Riu Sa Murta, 09032 Assemini CA
29. **Antares Assemini** — Assemini
   - slug: `antares-assemini-assemini`
   - indirizzo: Via Pio IX, 44, 09032 Assemini CA
30. **Appartamento Il Tulipano** — Assemini
   - slug: `appartamento-il-tulipano-assemini`
   - indirizzo: Via Principe di Piemonte, 93, 09032 Assemini CA
31. **B&B Il Girasole** — Assemini
   - slug: `b-b-il-girasole-assemini`
   - indirizzo: Corso Africa, 35, 09032 Assemini CA
32. **B&B L' obiettivo** — Assemini
   - slug: `b-b-l-obiettivo-assemini`
   - indirizzo: Via Cagliari, 172, 09032 Assemini CA
33. **B&B Maria Montis** — Assemini
   - slug: `b-b-maria-montis-assemini`
   - indirizzo: Via Kennedy, 18, 09032 Assemini CA
34. **B&B Martina - Assemini - vicino Aeroporto Cagliari** — Assemini
   - slug: `b-b-martina-assemini-vicino-aeroporto-cagliari-assemini`
   - indirizzo: Via Oslo, 25, 09032 Assemini CA
35. **B&B Relaxing Spaces** — Assemini
   - slug: `b-b-relaxing-spaces-assemini`
   - indirizzo: Via S. Cristoforo, 78, 09032 Assemini CA