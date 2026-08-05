# Blocco 208/500 — 35 strutture senza descrizione IT

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

1. **HOTEL Mater Mediterranea** — Ballao
   - slug: `hotel-mater-mediterranea-ballao`
   - indirizzo: Via Piemonte, 23, 09040 Senorbì CA
2. **Albergo Furnasa** — Balme
   - slug: `albergo-furnasa-balme`
   - indirizzo: Via XXIV Maggio, 16, 10070 Usseglio TO
3. **Albergo Gran Paradiso - centro benessere - ristorante - Noasca** — Balme
   - slug: `albergo-gran-paradiso-centro-benessere-ristorant-balme`
   - indirizzo: Via, Corso Umberto I, 2, 10080 Noasca TO
4. **Albergo Grand'Usseglio** — Balme
   - slug: `albergo-grand-usseglio-balme`
   - indirizzo: Via Roma, 21, 10070 Usseglio TO
5. **Albergo Ristorante Cantoira ****** — Balme
   - slug: `albergo-ristorante-cantoira-balme`
   - indirizzo: Via Roma, 137, 10070 Cantoira TO
6. **B&B Scòla Vèja** — Balme
   - slug: `b-b-scola-veja-balme`
   - indirizzo: Borgata Pavaglione, 174, 10050 Chianocco TO
7. **Ceresole Sport village (La Casa del Re)** — Balme
   - slug: `ceresole-sport-village-la-casa-del-re-balme`
   - indirizzo: Borgata Le Prese, 10, 10080 Ceresole Reale TO
8. **Chalet sul lago Hotel a Moncenisio -Piemonte-** — Balme
   - slug: `chalet-sul-lago-hotel-a-moncenisio-piemonte-balme`
   - indirizzo: Via Regione Lago, 8, 10050 Moncenisio TO
9. **Convento Boutique Hotel** — Balme
   - slug: `convento-boutique-hotel-balme`
   - indirizzo: Piazza S. Francesco, 5, 10059 Susa TO
10. **Grand Hotel Ceresole** — Balme
   - slug: `grand-hotel-ceresole-balme`
   - indirizzo: Borgata Le Prese, 10, 10080 Ceresole Reale TO
11. **Hotel Isolabella** — Balme
   - slug: `hotel-isolabella-balme`
   - indirizzo: S.da Susa, 13, 10053 Bussoleno TO
12. **Hotel PALAS** — Balme
   - slug: `hotel-palas-balme`
   - indirizzo: Via Camillo Benso Conte di Cavour, 18/B, 10050 Bruzolo TO
13. **Hotel Susa** — Balme
   - slug: `hotel-susa-balme`
   - indirizzo: Corso Stati Uniti, 4, 10059 Susa TO
14. **Il Baraccone Resort** — Balme
   - slug: `il-baraccone-resort-balme`
   - indirizzo: Località Baraccone, 7/A, 10050 San Didero TO
15. **Sunrise Inn & Spa** — Balme
   - slug: `sunrise-inn-spa-balme`
   - indirizzo: Frazione Gisola, 27, 10070 Gisola TO
16. **VILLA BELVEDERE** — Balme
   - slug: `villa-belvedere-balme`
   - indirizzo: Via Oulx, 12, 10059 Susa TO
17. **Al Cantuccio** — Balmuccia
   - slug: `al-cantuccio-balmuccia`
   - indirizzo: Via Statale, 17, 13028 Scopello VC
18. **Albergo Ristorante La Coldra - Quarona** — Balmuccia
   - slug: `albergo-ristorante-la-coldra-quarona-balmuccia`
   - indirizzo: Via S. Giovanni, 28, 13017 Quarona VC
19. **B&B LA BAITA DELLE COCCINELLE** — Balmuccia
   - slug: `b-b-la-baita-delle-coccinelle-balmuccia`
   - indirizzo: Localita Roncaglio, 13019 Varallo VC
20. **Campeggio ai Dinelli** — Balmuccia
   - slug: `campeggio-ai-dinelli-balmuccia`
   - indirizzo: Via Varallo, 51, 13027 Scopa VC
21. **Casa Gemma** — Balmuccia
   - slug: `casa-gemma-balmuccia`
   - indirizzo: Localita' Centro, 15, 13020 Rimella VC
22. **Hotel Residence Giardini** — Balmuccia
   - slug: `hotel-residence-giardini-balmuccia`
   - indirizzo: Via Umberto I, 9, 13020 Piode VC
23. **B&B Il Cigno** — Balocco
   - slug: `b-b-il-cigno-balocco`
   - indirizzo: Via Guglielmo Oberdan, 1, 13871 Benna BI
24. **Castello della Bastia** — Balocco
   - slug: `castello-della-bastia-balocco`
   - indirizzo: Frazione Bastia, Piazza Castello, 5/C, 13040 Balocco VC
25. **Da Ovidio - Fraz.Fornace Crocicchio** — Balocco
   - slug: `da-ovidio-fraz-fornace-crocicchio-balocco`
   - indirizzo: SP230, 6, 13030 Carisio VC
26. **Hotel Balocco** — Balocco
   - slug: `hotel-balocco-balocco`
   - indirizzo: Viale Giovanni Maria Orecchioni, 07021 Liscia di Vacca OT
27. **I Platani** — Balocco
   - slug: `i-platani-balocco`
   - indirizzo: Localita' Donna, 3, 13877 Villanova Biellese BI
28. **La Carosera B&B** — Balocco
   - slug: `la-carosera-b-b-balocco`
   - indirizzo: Via Castellengo, 29, 13836 Cossato BI
29. **La Casa di Pietro** — Balocco
   - slug: `la-casa-di-pietro-balocco`
   - indirizzo: Via Guglielmo Marconi, 10, 13882 Cerrione BI
30. **ANTICA TENUTA AGRITURISMO** — Balsorano
   - slug: `antica-tenuta-agriturismo-balsorano`
   - indirizzo: Case Sparse, 67052 Balsorano AQ
31. **B&B Albergo Della Corte L'Aquila** — Balsorano
   - slug: `b-b-albergo-della-corte-l-aquila-balsorano`
   - indirizzo: Via Oppieto, 11/A, 67032 Pescasseroli AQ
32. **B&B Charme** — Balsorano
   - slug: `b-b-charme-balsorano`
   - indirizzo: Via Barca S. Domenico, 37, 03039 Sora FR
33. **B&B La Collina di Peppino** — Balsorano
   - slug: `b-b-la-collina-di-peppino-balsorano`
   - indirizzo: SP 19 km 16.800, 67059 Trasacco AQ
34. **B&B Via Della Piazza** — Balsorano
   - slug: `b-b-via-della-piazza-balsorano`
   - indirizzo: Via della Piazza, 52, 67032 Pescasseroli AQ
35. **Casa Radiosa** — Balsorano
   - slug: `casa-radiosa-balsorano`
   - indirizzo: Via S. Vincenzo Ferreri, 80, 03039 Sora FR