# Blocco 108/500 — 35 strutture senza descrizione IT

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

1. **La Balaustra B&B** — Andrano
   - slug: `la-balaustra-b-b-andrano`
   - indirizzo: Via Provinciale, 282, 73032 Andrano LE
2. **La Tartana** — Andrano
   - slug: `la-tartana-andrano`
   - indirizzo: Via IV Novembre, 151, 73030 Castro LE
3. **Le Due Capanne** — Andrano
   - slug: `le-due-capanne-andrano`
   - indirizzo: via Italia, 3, 73030 Castiglione dʼOtranto LE
4. **Le Rose** — Andrano
   - slug: `le-rose-andrano`
   - indirizzo: Via Giuseppe Verdi, 73030 Vignacastrisi LE
5. **Palazzo Vecchio B&B** — Andrano
   - slug: `palazzo-vecchio-b-b-andrano`
   - indirizzo: Via Benvenuto Cellini, 38, 73030 Marittima LE
6. **PETRA. Charme a sud est** — Andrano
   - slug: `petra-charme-a-sud-est-andrano`
   - indirizzo: Via Vecchia Castiglione, 70, 73030 Diso LE
7. **Trappitu Dei Settimi B&B** — Andrano
   - slug: `trappitu-dei-settimi-b-b-andrano`
   - indirizzo: Via Convento, 48, 73030 Diso LE
8. **Vignali Residence** — Andrano
   - slug: `vignali-residence-andrano`
   - indirizzo: Via Filippo Turati, 34, 73030 Diso LE
9. **Vignavecchia** — Andrano
   - slug: `vignavecchia-andrano`
   - indirizzo: Via Umberto Giordano, 30, 73030 Vignacastrisi LE
10. **Zahir B&B** — Andrano
   - slug: `zahir-b-b-andrano`
   - indirizzo: Via di Mezzo, 55, 73030 Castro LE
11. **Agriturismo la Ca' d'Amelio** — Andrate
   - slug: `agriturismo-la-ca-d-amelio-andrate`
   - indirizzo: Via Sibia n. 46/A, 10010 Calea TO
12. **B&B Cascina Bedria** — Andrate
   - slug: `b-b-cascina-bedria-andrate`
   - indirizzo: Via Maresco passare da Burolo, non da Chiaverano attenersi a, quest'indirizzo, 10010 Burolo TO
13. **B&B Cascina Brunod** — Andrate
   - slug: `b-b-cascina-brunod-andrate`
   - indirizzo: Località Pertietto, 5, 10010 Chiaverano TO
14. **B&B I Tre Ciliegi** — Andrate
   - slug: `b-b-i-tre-ciliegi-andrate`
   - indirizzo: Via Mulini, 24, 10013 Borgofranco d'Ivrea TO
15. **B&B L'Albero Maestro** — Andrate
   - slug: `b-b-l-albero-maestro-andrate`
   - indirizzo: Via Torrazza, 18, 10013 Borgofranco d'Ivrea TO
16. **B&B La Coccinella - Ecologico e Biologico CIN: IT096028C1LO23OMD8** — Andrate
   - slug: `b-b-la-coccinella-ecologico-e-biologico-cin-it09-andrate`
   - indirizzo: Casale Grippagli, 17, 13895 Graglia BI
17. **B&B Villa Tavallini Biella** — Andrate
   - slug: `b-b-villa-tavallini-biella-andrate`
   - indirizzo: Via Benedetto Croce, 32, 13814 Pollone BI
18. **L'Ospitalità del Castello** — Andrate
   - slug: `l-ospitalita-del-castello-andrate`
   - indirizzo: P. Conte Rinaldo, 7, 10010 Settimo Vittone TO
19. **La Locanda dei Gatti** — Andrate
   - slug: `la-locanda-dei-gatti-andrate`
   - indirizzo: Via Mombarone, 14, 13893 Donato BI
20. **Ostello del Canoa - Acquapiatta** — Andrate
   - slug: `ostello-del-canoa-acquapiatta-andrate`
   - indirizzo: Via Dora Baltea, 1d, 10015 Ivrea TO
21. **Ostello di San Germano di Ferrando Patrizia** — Andrate
   - slug: `ostello-di-san-germano-di-ferrando-patrizia-andrate`
   - indirizzo: Via Sandro Pertini, 3, 10013 Borgofranco d'Ivrea TO
22. **Relais del Brigante** — Andrate
   - slug: `relais-del-brigante-andrate`
   - indirizzo: V. Umberto I, 6, 10010 Settimo Vittone TO
23. **“Da Nati” Locanda e B&B** — Andreis
   - slug: `da-nati-locanda-e-b-b-andreis`
   - indirizzo: Piazza IV Novembre, 1, 33090 Arba PN
24. **Al Vecje For** — Andreis
   - slug: `al-vecje-for-andreis`
   - indirizzo: Via Centrale, 43, 33080 Andreis PN
25. **B&B il Gufo** — Andreis
   - slug: `b-b-il-gufo-andreis`
   - indirizzo: Via Roma, 135, 33080 Erto e Casso PN
26. **B&B In Fattoria** — Andreis
   - slug: `b-b-in-fattoria-andreis`
   - indirizzo: Borgo, Palazza, 3, 33080 Frisanco PN
27. **Cjasa Celeste Andreis** — Andreis
   - slug: `cjasa-celeste-andreis-andreis`
   - indirizzo: Via Centrale, 16, 33080 Andreis PN
28. **Foresteria del Parco Naturale Regionale delle Dolomiti Friulane - Andreis** — Andreis
   - slug: `foresteria-del-parco-naturale-regionale-delle-do-andreis`
   - indirizzo: Via Acquedotto, 1, 33080 Andreis PN
29. **Affitta Camere La Casa di Ninna** — Andretta
   - slug: `affitta-camere-la-casa-di-ninna-andretta`
   - indirizzo: Contrada Foresta, 33, 83031 Ariano Irpino AV
30. **Agriturismo "A un tiro di schioppo"** — Andretta
   - slug: `agriturismo-a-un-tiro-di-schioppo-andretta`
   - indirizzo: Contrada Valle Santa Maria, 83045 Calitri AV
31. **Agriturismo Caperroni** — Andretta
   - slug: `agriturismo-caperroni-andretta`
   - indirizzo: C.da Caperroni - Pescopagano S.S. Ofantina km 17+300, 85020 Pescopagano PZ
32. **Al 17** — Andretta
   - slug: `al-17-andretta`
   - indirizzo: Via Cesare Battisti, 17, 83055 Sturno AV
33. **B&B Il Tritone** — Andretta
   - slug: `b-b-il-tritone-andretta`
   - indirizzo: Piazza della Repubblica, 25, 84020 Laviano SA
34. **Domus Romulea Albergo Locanda** — Andretta
   - slug: `domus-romulea-albergo-locanda-andretta`
   - indirizzo: Via XXIII Luglio, 303, 83044 Bisaccia AV
35. **Hotel Ambasciatori** — Andretta
   - slug: `hotel-ambasciatori-andretta`
   - indirizzo: Via E. Pitoli,, 83045 Calitri AV