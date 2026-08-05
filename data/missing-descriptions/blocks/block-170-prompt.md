# Blocco 170/500 — 35 strutture senza descrizione IT

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

1. **Hotel Il Nibbio** — Asso
   - slug: `hotel-il-nibbio-asso`
   - indirizzo: Via Adua, 13, 22030 Magreglio CO
2. **Ristorante Albergo La Genzianella** — Asso
   - slug: `ristorante-albergo-la-genzianella-asso`
   - indirizzo: Localita San Primo, 4, 22021 Bellagio CO
3. **Sara Hotel** — Asso
   - slug: `sara-hotel-asso`
   - indirizzo: Via Santa Valeria, 10, 22030 Caglio CO
4. **Villa Dei Cedri** — Asso
   - slug: `villa-dei-cedri-asso`
   - indirizzo: Via Dosso, 25, 22033 Asso CO
5. **B&B Casa Piras** — Assolo
   - slug: `b-b-casa-piras-assolo`
   - indirizzo: Traversa II Principessa Maria, 13, 09021 Barumini VS
6. **B&B Casa Susanna** — Assolo
   - slug: `b-b-casa-susanna-assolo`
   - indirizzo: Vicolo I Pozzo, 10, 09090 Sini OR
7. **B&B Is Camminantis** — Assolo
   - slug: `b-b-is-camminantis-assolo`
   - indirizzo: SS128, km 58.400, 09058 Loc. Pira e Laconi ,Su Lau CA
8. **B&B La Pavoncella** — Assolo
   - slug: `b-b-la-pavoncella-assolo`
   - indirizzo: Vico I Roma, 73, 09020 Villamar VS
9. **B&B Mitzixeddas** — Assolo
   - slug: `b-b-mitzixeddas-assolo`
   - indirizzo: Via Lamarmora, 1, 09040 Mandas CA
10. **B&B Ventuno** — Assolo
   - slug: `b-b-ventuno-assolo`
   - indirizzo: Via Cagliari, 21, 09021 Barumini VS
11. **De Ajala - B&B de Charme - Antica Dimora Laconese** — Assolo
   - slug: `de-ajala-b-b-de-charme-antica-dimora-laconese-assolo`
   - indirizzo: Via Cavour, 3, 09090 Laconi OR
12. **Funtana Noa** — Assolo
   - slug: `funtana-noa-assolo`
   - indirizzo: Via Vittorio Emanuele III, 66, 09020 Villanovaforru VS
13. **Is Coronas affittacamere** — Assolo
   - slug: `is-coronas-affittacamere-assolo`
   - indirizzo: Piazza Costituzione, 4, 09056 Isili CA
14. **Villa Chiara Villamar** — Assolo
   - slug: `villa-chiara-villamar-assolo`
   - indirizzo: Via Regina Elena, 6, 09020 Villamar VS
15. **Al Vicolo Apartments** — Assoro
   - slug: `al-vicolo-apartments-assoro`
   - indirizzo: Vicolo Scavi, 2, 94100 Enna EN
16. **Appartamento 24 Cannoli** — Assoro
   - slug: `appartamento-24-cannoli-assoro`
   - indirizzo: Via Francesco Crispi, 30, 94013 Leonforte EN
17. **B&B Diamante** — Assoro
   - slug: `b-b-diamante-assoro`
   - indirizzo: Località Contrada Cannolo-Picinosi snc, 94010 Nissoria EN
18. **B&B La Casa di Pinocchio** — Assoro
   - slug: `b-b-la-casa-di-pinocchio-assoro`
   - indirizzo: Via Candrilli, 55/57, 94100 Enna EN
19. **B&B La Perla Nera** — Assoro
   - slug: `b-b-la-perla-nera-assoro`
   - indirizzo: C/da Picinosi, snc, 94010 Nissoria EN
20. **B&B Stazione Dittaino** — Assoro
   - slug: `b-b-stazione-dittaino-assoro`
   - indirizzo: Zona industriale Dittaino, 94010 Assoro EN
21. **B&B Welc(h)ome** — Assoro
   - slug: `b-b-welc-h-ome-assoro`
   - indirizzo: Via, Largo Rosso, 18, 94100 Enna EN
22. **Agriturismo Tenuta Polledro** — Asti
   - slug: `agriturismo-tenuta-polledro-asti`
   - indirizzo: Frazione Serravalle, 135, 14100 Asti AT
23. **Albergo Antica Dogana** — Asti
   - slug: `albergo-antica-dogana-asti`
   - indirizzo: Via Antica Dogana, 5, 14100 Quarto AT
24. **B&B Casa del Ventiniere** — Asti
   - slug: `b-b-casa-del-ventiniere-asti`
   - indirizzo: Str. Variglie, n.81, 14100 Asti AT
25. **B&B Cascina Ciapilau** — Asti
   - slug: `b-b-cascina-ciapilau-asti`
   - indirizzo: Val Ciapilau, 214, 14100 Quarto Inferiore AT
26. **B&b cascina Patrizia** — Asti
   - slug: `b-b-cascina-patrizia-asti`
   - indirizzo: Frazione Sessant, 257, 14100 Asti AT
27. **B&B Il Portichetto** — Asti
   - slug: `b-b-il-portichetto-asti`
   - indirizzo: Via Vetrai, 15, 14100 Asti AT
28. **Casa Tavasso** — Asti
   - slug: `casa-tavasso-asti`
   - indirizzo: Strada Sottoripa, 73, 14100 Quarto Superiore AT
29. **Cascina Desderi Società Semplice Agricola** — Asti
   - slug: `cascina-desderi-societa-semplice-agricola-asti`
   - indirizzo: Località Quarto Inferiore, 208, 14100 Asti AT
30. **Guest House La Carolina** — Asti
   - slug: `guest-house-la-carolina-asti`
   - indirizzo: Str. Pianetti, 30, 14016 Tigliole di Asti AT
31. **Hotel Aleramo** — Asti
   - slug: `hotel-aleramo-asti`
   - indirizzo: Via Emanuele Filiberto, 13, 14100 Asti AT
32. **Hotel Asti Albergo Etico** — Asti
   - slug: `hotel-asti-albergo-etico-asti`
   - indirizzo: Via Don Urbano Isnardi, 11, 14100 Asti AT
33. **Hotel Rainero** — Asti
   - slug: `hotel-rainero-asti`
   - indirizzo: Via C. Benso di Cavour, 85, 14100 Asti AT
34. **La Casa Celeste B&B - Asti, Italy** — Asti
   - slug: `la-casa-celeste-b-b-asti-italy-asti`
   - indirizzo: Strada Valmolina, Località Cappuccini, 32, 14100 Asti AT
35. **La Tintoria Suites** — Asti
   - slug: `la-tintoria-suites-asti`
   - indirizzo: Corso Vittorio Alfieri, 429, 14100 Asti AT