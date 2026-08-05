# Blocco 209/500 — 35 strutture senza descrizione IT

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

1. **Gelsi Luxury Suites** — Balsorano
   - slug: `gelsi-luxury-suites-balsorano`
   - indirizzo: Via Gelsi, 6, 03039 Sora FR
2. **Grand Hotel del Parco** — Balsorano
   - slug: `grand-hotel-del-parco-balsorano`
   - indirizzo: Viale Santa Lucia, 3, 67032 Pescasseroli AQ
3. **Hotel Iris** — Balsorano
   - slug: `hotel-iris-balsorano`
   - indirizzo: Via Fontana della Difesa, 1, 67032 Pescasseroli AQ
4. **Hotel Sport Daniel** — Balsorano
   - slug: `hotel-sport-daniel-balsorano`
   - indirizzo: Viale Fausto Grassi, 67032 Pescasseroli AQ
5. **Hotel Valle Dell'Oro** — Balsorano
   - slug: `hotel-valle-dell-oro-balsorano`
   - indirizzo: Viale Fausto Grassi, 20, 67032 Pescasseroli AQ
6. **Locanda Del Ponte** — Balsorano
   - slug: `locanda-del-ponte-balsorano`
   - indirizzo: Località Ponte Collepiano 11, 67052 Balsorano AQ
7. **Residenza Nonna Saveria** — Balsorano
   - slug: `residenza-nonna-saveria-balsorano`
   - indirizzo: Via Ponte Marziano, 1, 03039 Sora FR
8. **Villa Benice** — Balsorano
   - slug: `villa-benice-balsorano`
   - indirizzo: Via Brecciose, 67050 Morino AQ
9. **BeB Villareal** — Balvano
   - slug: `beb-villareal-balvano`
   - indirizzo: 200 metri dal centro, 3klm dalla Zona Industriale, Via San Sebastiano, 45/B, 85050 Balvano PZ
10. **Bed and Breakfast All in Basilicata** — Balvano
   - slug: `bed-and-breakfast-all-in-basilicata-balvano`
   - indirizzo: Via S. Rocco, piazza Plebiscito, Piazza Plebiscito, 11, 85050 Baragiano PZ
11. **Eità Palace Hotel** — Balvano
   - slug: `eita-palace-hotel-balvano`
   - indirizzo: Strada Prima Cugni, 25, 85058 Vietri di Potenza PZ
12. **Hotel Giordan GM S.R.L.S** — Balvano
   - slug: `hotel-giordan-gm-s-r-l-s-balvano`
   - indirizzo: Contrada Tusciano, 16, 85058 Vietri di Potenza PZ
13. **Il rifugio delle stelle** — Balvano
   - slug: `il-rifugio-delle-stelle-balvano`
   - indirizzo: Contrada pistello, grande 12, 85050 Castelgrande PZ
14. **IQOS PARTNER - Motel Tempio, Polla** — Balvano
   - slug: `iqos-partner-motel-tempio-polla-balvano`
   - indirizzo: Via Annia, 5, 84035 Polla SA
15. **B&B Arcotel** — Balzola
   - slug: `b-b-arcotel-balzola`
   - indirizzo: SP 31, 23, 15030 Villanova Monferrato AL
16. **B&B Casa della Sala Spada** — Balzola
   - slug: `b-b-casa-della-sala-spada-balzola`
   - indirizzo: Via D.B Salaspada, 15, 15033 Casale Monferrato AL
17. **b&b CASCINA SORTINA - bed and breakfast in Monferrato - Treville (AL)** — Balzola
   - slug: `b-b-cascina-sortina-bed-and-breakfast-in-monferr-balzola`
   - indirizzo: Cascina Sortina, 1, 15030 Treville AL
18. **Business Hotel** — Balzola
   - slug: `business-hotel-balzola`
   - indirizzo: Strada Valenza, 4g, 15033 Casale Monferrato AL
19. **Cascina Montalbano** — Balzola
   - slug: `cascina-montalbano-balzola`
   - indirizzo: Località Cascina Montalbano, 64, 15030 Cascina Montalbano AL
20. **döit - Turismo e Cultura** — Balzola
   - slug: `doit-turismo-e-cultura-balzola`
   - indirizzo: Via Fratelli Bandiera, 1, 15030 Coniolo AL
21. **Gabanon Hostel** — Balzola
   - slug: `gabanon-hostel-balzola`
   - indirizzo: Via Aristide Oggero, 14, 15033 Casale Monferrato AL
22. **Hotel Candiani** — Balzola
   - slug: `hotel-candiani-balzola`
   - indirizzo: Via Candiani d'Olivola, 36, 15033 Casale Monferrato AL
23. **Hotel Leon D'Oro Casale Monferrato** — Balzola
   - slug: `hotel-leon-d-oro-casale-monferrato-balzola`
   - indirizzo: Via Roma, 62, 15033 Casale Monferrato AL
24. **Hotel Principe** — Balzola
   - slug: `hotel-principe-balzola`
   - indirizzo: Via Camillo Benso Cavour, 55, 15033 Casale Monferrato AL
25. **Affittacamere Chiaro di Luna** — Banari
   - slug: `affittacamere-chiaro-di-luna-banari`
   - indirizzo: Viale Italia, 5, 07100 Sassari SS
26. **Agriturismo Sas Abbilas** — Banari
   - slug: `agriturismo-sas-abbilas-banari`
   - indirizzo: località Mariani, 07012 Bonorva SS
27. **B&B Antas** — Banari
   - slug: `b-b-antas-banari`
   - indirizzo: Via Roma, 98, 07010 Mara SS
28. **B&B Ferdinando' s House** — Banari
   - slug: `b-b-ferdinando-s-house-banari`
   - indirizzo: Via Concordia, 19/e, 07018 Pozzomaggiore SS
29. **B&B La Perla Bianca** — Banari
   - slug: `b-b-la-perla-bianca-banari`
   - indirizzo: Via Salvo D'Acquisto, 10, 07100 Li Punti SS
30. **Bed and Breakfast S'Asilo** — Banari
   - slug: `bed-and-breakfast-s-asilo-banari`
   - indirizzo: Via Marongiu, 28, 07040 Banari SS
31. **Hotel Leonardo Da Vinci** — Banari
   - slug: `hotel-leonardo-da-vinci-banari`
   - indirizzo: Via Roma, 79, 07100 Sassari SS
32. **Hotel Locanda Minerva** — Banari
   - slug: `hotel-locanda-minerva-banari`
   - indirizzo: SP88, 07019 Villanova Monteleone SS
33. **Pegasus Hotel** — Banari
   - slug: `pegasus-hotel-banari`
   - indirizzo: Via Predda Niedda, 37/L, 07100 Sassari SS
34. **Sa domo de su re** — Banari
   - slug: `sa-domo-de-su-re-banari`
   - indirizzo: Via Carlo Felice, 55, 07048 Torralba SS
35. **Sa Mariposa** — Banari
   - slug: `sa-mariposa-banari`
   - indirizzo: Via Aldo Moro, 29, 07044 Ittiri SS