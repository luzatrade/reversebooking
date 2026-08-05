# Blocco 146/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Ai Due Laghi del Verginese** — Argenta
   - slug: `agriturismo-ai-due-laghi-del-verginese-argenta`
   - indirizzo: Via Bargellesi, 2, 44015 Gambulaga FE
2. **Agriturismo Bassara Le Capanne** — Argenta
   - slug: `agriturismo-bassara-le-capanne-argenta`
   - indirizzo: Via Cardinala, 2, 44011 Argenta FE
3. **B&B La Salghè** — Argenta
   - slug: `b-b-la-salghe-argenta`
   - indirizzo: Via Borgo Seliciata, 1, 44011 Argenta FE
4. **Bed & Breakfast Ciliegio Felice Argenta** — Argenta
   - slug: `bed-breakfast-ciliegio-felice-argenta-argenta`
   - indirizzo: Str. Valletta, 31, 44011 Traghetto FE
5. **Boni Room & Breakfast/SMART ROOMS ARGENTA** — Argenta
   - slug: `boni-room-breakfast-smart-rooms-argenta-argenta`
   - indirizzo: Via Imperiale, 8/B, 44011 Traghetto FE
6. **Cà Morari** — Argenta
   - slug: `ca-morari-argenta`
   - indirizzo: Via Morari, 18, 44011 San Biagio FE
7. **Corte Dossello Ristorante - Albergo** — Argenta
   - slug: `corte-dossello-ristorante-albergo-argenta`
   - indirizzo: Via Briccola, 7, 44027 Massa Fiscaglia FE
8. **Hotel Centrale** — Argenta
   - slug: `hotel-centrale-argenta`
   - indirizzo: Via Gustavo Bianchi, 1, 44011 Argenta FE
9. **Hotel la candela** — Argenta
   - slug: `hotel-la-candela-argenta`
   - indirizzo: Via San Vitale, 175, 40026 Sesto Imolese BO
10. **Hotel Villa Reale** — Argenta
   - slug: `hotel-villa-reale-argenta`
   - indirizzo: Viale Antonio Roiti, 16/A, 44011 Argenta FE
11. **I Due Orfici** — Argenta
   - slug: `i-due-orfici-argenta`
   - indirizzo: Via Comacchio, 1051, 44123 Cona FE
12. **Il Correggiolo** — Argenta
   - slug: `il-correggiolo-argenta`
   - indirizzo: JRFX+J5, 44011 Argenta FE
13. **Locanda Al Cavaliere** — Argenta
   - slug: `locanda-al-cavaliere-argenta`
   - indirizzo: Via Fascinata, 2, 40062 San Pietro Capofiume BO
14. **Residence Appartamenti Villa Masi** — Argenta
   - slug: `residence-appartamenti-villa-masi-argenta`
   - indirizzo: Viale Adriatico, 2, 44124 Masi Torello FE
15. **Sacripante** — Argenta
   - slug: `sacripante-argenta`
   - indirizzo: Str. Bordocchia, 160, 44020 Ostellato FE
16. **Affittacamere L'Abrì** — Argentera
   - slug: `affittacamere-l-abri-argentera`
   - indirizzo: Via Francia, 3, 12010 Pontebernardo CN
17. **B&B del Villaggio** — Argentera
   - slug: `b-b-del-villaggio-argentera`
   - indirizzo: Via Nazionale, 1, 12010 Villaggio Primavera CN
18. **La Barmo Affittacamere** — Argentera
   - slug: `la-barmo-affittacamere-argentera`
   - indirizzo: Via Longa, 9, 12010 Pietraporzio CN
19. **Locanda La Marmu e Osteria della Croce bianca Marmora** — Argentera
   - slug: `locanda-la-marmu-e-osteria-della-croce-bianca-ma-argentera`
   - indirizzo: Borgata Vernetti, 18, 12020 Marmora CN
20. **Lou Loop** — Argentera
   - slug: `lou-loop-argentera`
   - indirizzo: Frazione Bagni , 59, 12010 Vinadio CN
21. **Rifugio Becchi Rossi** — Argentera
   - slug: `rifugio-becchi-rossi-argentera`
   - indirizzo: 12010 Ferrere CN
22. **Rifugio della Pace** — Argentera
   - slug: `rifugio-della-pace-argentera`
   - indirizzo: SS21 - Colle della maddalena, 12010 Val d'Oronaye, Francia
23. **A Casa di Anna** — Arguello
   - slug: `a-casa-di-anna-arguello`
   - indirizzo: Via Roma, 3, 12070 Pezzolo Valle Uzzone CN
24. **Agriturismo Cascina Prato** — Arguello
   - slug: `agriturismo-cascina-prato-arguello`
   - indirizzo: Cascina Prato, 1, 12050 Cravanzana CN
25. **Agriturismo La Collina degli Scoiattoli** — Arguello
   - slug: `agriturismo-la-collina-degli-scoiattoli-arguello`
   - indirizzo: Via Dietro Langhe, 19, 12050 Cravanzana CN
26. **B&B Cà d' FeFI** — Arguello
   - slug: `b-b-ca-d-fefi-arguello`
   - indirizzo: Fossati, 14, 12070 Gorzegno CN
27. **B&B Ca' Pavaglione - Fraz.San Bovo** — Arguello
   - slug: `b-b-ca-pavaglione-fraz-san-bovo-arguello`
   - indirizzo: Via Trezzo Tinella, 19, 12050 Castino CN
28. **B&B Le Coccinelle** — Arguello
   - slug: `b-b-le-coccinelle-arguello`
   - indirizzo: scaravascio, 10, 12050 Torre Bormida CN
29. **B&B Tra Cielo e Terra** — Arguello
   - slug: `b-b-tra-cielo-e-terra-arguello`
   - indirizzo: Località Molinari, 3, 12050 Roddino CN
30. **Ca' Ginet** — Arguello
   - slug: `ca-ginet-arguello`
   - indirizzo: Via Costavita, 10, 12050 Cravanzana CN
31. **Ciabot Langhe** — Arguello
   - slug: `ciabot-langhe-arguello`
   - indirizzo: Località Chiabotto, 3, 12050 Roddino CN
32. **Dimora Storico Romantica Il Sole E La Luna** — Arguello
   - slug: `dimora-storico-romantica-il-sole-e-la-luna-arguello`
   - indirizzo: Piazza Giovanni Sobrero, 9, 12050 Cerretto Langhe CN
33. **Hotel Trepiasì** — Arguello
   - slug: `hotel-trepiasi-arguello`
   - indirizzo: Viale Guglielmo Marconi, 1, 12074 Cortemilia CN
34. **Locanda degli sfizi** — Arguello
   - slug: `locanda-degli-sfizi-arguello`
   - indirizzo: Via Provinciale, 105, 12050 Cravanzana CN
35. **Ristorante Albergo 'l bunet** — Arguello
   - slug: `ristorante-albergo-l-bunet-arguello`
   - indirizzo: Via Roma, 24, 12074 Bergolo CN