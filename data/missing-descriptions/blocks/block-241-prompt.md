# Blocco 241/500 — 35 strutture senza descrizione IT

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

1. **Relais Dolomiti** — Bedollo
   - slug: `relais-dolomiti-bedollo`
   - indirizzo: Via Guglielmo Marconi, 95, 38043 Cialini TN
2. **Agriturismo Agricampeggio Società Agricola Cacigolara** — Bedonia
   - slug: `agriturismo-agricampeggio-societa-agricola-cacig-bedonia`
   - indirizzo: Località Cacigolara, 8, 500 meters on the right after passing Breia (Compiano), 43043 Borgo Val di Taro PR
3. **Agriturismo La Tempestosa, Agriturismo, Ristorante, Ristorazione Tipica Bedonia (PR)** — Bedonia
   - slug: `agriturismo-la-tempestosa-agriturismo-ristorante-bedonia`
   - indirizzo: Località Momarola, 33, 43041 Bedonia PR
4. **Albergo Ristorante Amici** — Bedonia
   - slug: `albergo-ristorante-amici-bedonia`
   - indirizzo: Via Maurizio Caranza, 33, 19028 Varese Ligure SP
5. **B&B Celeste** — Bedonia
   - slug: `b-b-celeste-bedonia`
   - indirizzo: SP359R, 14, 43041 Bedonia PR
6. **B&B La Provenzale** — Bedonia
   - slug: `b-b-la-provenzale-bedonia`
   - indirizzo: Via Lusardi, 13, 43059 Tornolo PR
7. **Casale delle farfalle** — Bedonia
   - slug: `casale-delle-farfalle-bedonia`
   - indirizzo: 43059 Tornolo PR
8. **Hotel - Albergo - Casa per ferie del Seminario Vescovile di Bedonia** — Bedonia
   - slug: `hotel-albergo-casa-per-ferie-del-seminario-vesco-bedonia`
   - indirizzo: Via Don S.Raffi, 30, 43041 Bedonia PR
9. **Villa Tre Angeli** — Bedonia
   - slug: `villa-tre-angeli-bedonia`
   - indirizzo: Via Roma, 37, 43041 Bedonia PR
10. **ALBERGHI PER ANZIANI ROTA D'IMAGNA HOTEL POSTA** — Bedulita
   - slug: `alberghi-per-anziani-rota-d-imagna-hotel-posta-bedulita`
   - indirizzo: Via Calchera, 4, 24037 Rota d'Imagna BG
11. **B&B Oltre Il Bosco** — Bedulita
   - slug: `b-b-oltre-il-bosco-bedulita`
   - indirizzo: Via Ca' Moschè, 20, 24030 Roncola BG
12. **Hotel Aurora** — Bedulita
   - slug: `hotel-aurora-bedulita`
   - indirizzo: Piazza Guglielmo Marconi, 7, 24030 Roncola BG
13. **Hotel Miramonti | Resort & SPA** — Bedulita
   - slug: `hotel-miramonti-resort-spa-bedulita`
   - indirizzo: Via alle Fonti, 5/6, 24037 Rota d'Imagna BG
14. **Hotel Ristorante Posta** — Bedulita
   - slug: `hotel-ristorante-posta-bedulita`
   - indirizzo: Località Calchera, 4, 24037 Rota d'Imagna BG
15. **Il Borgo Del Castello-Foresteria Lombarda** — Bedulita
   - slug: `il-borgo-del-castello-foresteria-lombarda-bedulita`
   - indirizzo: Via Giacomo Quarenghi, 50, 24037 Rota d'Imagna BG
16. **Il Castello Di Venere - Foresteria Lombarda** — Bedulita
   - slug: `il-castello-di-venere-foresteria-lombarda-bedulita`
   - indirizzo: Via Giacomo Quarenghi, 50, 24037 Calchera-frontale BG
17. **Ristorante Bar Albergo da Elia** — Bedulita
   - slug: `ristorante-bar-albergo-da-elia-bedulita`
   - indirizzo: Viale V. Veneto, 176, 24038 Selino Basso BG
18. **Albergo Canetta** — Bee
   - slug: `albergo-canetta-bee`
   - indirizzo: Via Belvedere, 23, 28818 Pollino VB
19. **Hotel Ghiffa** — Bee
   - slug: `hotel-ghiffa-bee`
   - indirizzo: Corso Belvedere, 88, 28823 Ghiffa VB
20. **Hotel Sant'Anna** — Bee
   - slug: `hotel-sant-anna-bee`
   - indirizzo: Viale Sant'Anna, 65, 28922 Verbania VB
21. **Kimyô Exclusive House, SPA e Wellness** — Bee
   - slug: `kimyo-exclusive-house-spa-e-wellness-bee`
   - indirizzo: Via Farinet, 34, 28813 Bee VB
22. **La Casa degli Aceri** — Bee
   - slug: `la-casa-degli-aceri-bee`
   - indirizzo: Via Riva, 2, 28813 Pian Nava VB
23. **Affittacamere B&Biscuit** — Beinasco
   - slug: `affittacamere-b-biscuit-beinasco`
   - indirizzo: Via Ellero, 31, 10126 Torino TO
24. **BnB Muriaglio - affitto appartamenti brevi periodi** — Beinasco
   - slug: `bnb-muriaglio-affitto-appartamenti-brevi-periodi-beinasco`
   - indirizzo: Via Muriaglio, 10, 10141 Torino TO
25. **Boston Art Hotel Torino** — Beinasco
   - slug: `boston-art-hotel-torino-beinasco`
   - indirizzo: Via Massena, 70, 10128 Torino TO
26. **Casa Stefania** — Beinasco
   - slug: `casa-stefania-beinasco`
   - indirizzo: Via Bernardino Drovetti, 6, 10138 Torino TO
27. **Duca's Guest House** — Beinasco
   - slug: `duca-s-guest-house-beinasco`
   - indirizzo: Corso Duca degli Abruzzi, 94, 10129 Torino TO
28. **Eco Art Hotel Torino** — Beinasco
   - slug: `eco-art-hotel-torino-beinasco`
   - indirizzo: Via Principi d'Acaja, 17, 10138 Torino TO
29. **Hotel Astor** — Beinasco
   - slug: `hotel-astor-beinasco`
   - indirizzo: Piazza Tancredi Galimberti, 12, 10134 Torino TO
30. **Hotel Bengasi** — Beinasco
   - slug: `hotel-bengasi-beinasco`
   - indirizzo: Via Cimabue, 6, 10124 Moncalieri TO
31. **Hotel Montevecchio** — Beinasco
   - slug: `hotel-montevecchio-beinasco`
   - indirizzo: Via Rodolfo Montevecchio, 13 Bis, 10128 Torino TO
32. **Hotel San Luigi** — Beinasco
   - slug: `hotel-san-luigi-beinasco`
   - indirizzo: Via S. Luigi, 5, 10092 Beinasco TO
33. **HOTEL TOURIST** — Beinasco
   - slug: `hotel-tourist-beinasco`
   - indirizzo: Via Alpignano, 3, 10143 Torino TO
34. **Hotel Vinzaglio** — Beinasco
   - slug: `hotel-vinzaglio-beinasco`
   - indirizzo: Corso Vinzaglio, 12, 10121 Torino TO
35. **Idea Hotel Torino Mirafiori** — Beinasco
   - slug: `idea-hotel-torino-mirafiori-beinasco`
   - indirizzo: Via Paolo Gaidano, 113, 10137 Torino TO