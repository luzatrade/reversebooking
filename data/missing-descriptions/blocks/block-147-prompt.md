# Blocco 147/500 — 35 strutture senza descrizione IT

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

1. **Ristorante Albergo "Da Maurizio"** — Arguello
   - slug: `ristorante-albergo-da-maurizio-arguello`
   - indirizzo: Via Luigi Einaudi, 5, 12050 Cravanzana CN
2. **Villa Alta Langa** — Arguello
   - slug: `villa-alta-langa-arguello`
   - indirizzo: SP31, 5, 12050 Cravanzana CN
3. **Agriturismo Due Torri** — Argusto
   - slug: `agriturismo-due-torri-argusto`
   - indirizzo: Localita' Feudo, 88064 Chiaravalle Centrale CZ
4. **Azienda Agricola Il Casale** — Argusto
   - slug: `azienda-agricola-il-casale-argusto`
   - indirizzo: SP144, 88060 Argusto CZ
5. **Hotel Elizabeth** — Argusto
   - slug: `hotel-elizabeth-argusto`
   - indirizzo: Via S. Giovanni Bosco, 89, 88068 Soverato CZ
6. **Hotel gli Ulivi** — Argusto
   - slug: `hotel-gli-ulivi-argusto`
   - indirizzo: Via Aldo Moro, 1, 88068 Soverato CZ
7. **Hotel La Ginestra** — Argusto
   - slug: `hotel-la-ginestra-argusto`
   - indirizzo: Via Don Luigi Sturzo, 11, 88060 Montepaone Lido CZ
8. **Hotel Residence Ristorante Baia dell’est** — Argusto
   - slug: `hotel-residence-ristorante-baia-dell-est-argusto`
   - indirizzo: Località Caminia, 88069 Stalettì CZ
9. **Hotel Ristorante Villa Susy** — Argusto
   - slug: `hotel-ristorante-villa-susy-argusto`
   - indirizzo: Viale J.F. Kennedy, 35, 88060 Marina di Davoli CZ
10. **Hotel Rivabella - Davoli Marina** — Argusto
   - slug: `hotel-rivabella-davoli-marina-argusto`
   - indirizzo: Via Ada Negri, 16, 88060 Satriano CZ
11. **Hotel San Domenico Soverato (CZ)** — Argusto
   - slug: `hotel-san-domenico-soverato-cz-argusto`
   - indirizzo: Via della Galleria, 10, 88068 Soverato CZ
12. **Imperial Hotel** — Argusto
   - slug: `imperial-hotel-argusto`
   - indirizzo: Via Nazionale, 52, 88064 Chiaravalle Centrale CZ
13. **Le Vie Mediterranee** — Argusto
   - slug: `le-vie-mediterranee-argusto`
   - indirizzo: Corso Vittorio Emanuele III, Via Regina Margherita, 2, 88060 Torre di Ruggiero CZ
14. **Mirabeau Park Hotel - Calabria** — Argusto
   - slug: `mirabeau-park-hotel-calabria-argusto`
   - indirizzo: Contrada Pilinga, 1, 88060 Gasperina CZ
15. **Tenuta CRETA ROSSA** — Argusto
   - slug: `tenuta-creta-rossa-argusto`
   - indirizzo: Contrada Giantomasi, snc, 88060 Torre di Ruggiero CZ
16. **Villa Ersilia** — Argusto
   - slug: `villa-ersilia-argusto`
   - indirizzo: Via Trento e Trieste, 140, 88068 Soverato CZ
17. **Agriturismo Il Quadrifoglio** — Ari
   - slug: `agriturismo-il-quadrifoglio-ari`
   - indirizzo: Str. Licini, 22, 66100 Chieti CH
18. **Albergo degli Amici** — Ari
   - slug: `albergo-degli-amici-ari`
   - indirizzo: Via Colle dell'Ara, 3, 66100 Chieti CH
19. **ANTICO BORGO** — Ari
   - slug: `antico-borgo-ari`
   - indirizzo: Vico Monaco La Valletta, 1, 66100 Chieti CH
20. **B&B Angels** — Ari
   - slug: `b-b-angels-ari`
   - indirizzo: Via Verso Tollo, 72, 66010 Canosa Sannita CH
21. **B&B Casa Madè** — Ari
   - slug: `b-b-casa-made-ari`
   - indirizzo: Viale B. Croce, 444, 66100 Chieti CH
22. **B&B Civico35** — Ari
   - slug: `b-b-civico35-ari`
   - indirizzo: Via Giuseppe Maria Mazzetti, 66100 Chieti CH
23. **B&B La Casa di Anna** — Ari
   - slug: `b-b-la-casa-di-anna-ari`
   - indirizzo: via alento, 66, 66012 Casalincontrada CH
24. **B&B La Casa di Paolo** — Ari
   - slug: `b-b-la-casa-di-paolo-ari`
   - indirizzo: Contrada Sterparo dei Santi, 32, 66036 Orsogna CH
25. **B&b La Noce** — Ari
   - slug: `b-b-la-noce-ari`
   - indirizzo: Str. dell'Acquedotto, 12, 66100 Chieti Scalo CH
26. **Bed & Breakfast Mafi** — Ari
   - slug: `bed-breakfast-mafi-ari`
   - indirizzo: Via Ortonese, 97, 66036 Orsogna CH
27. **Bed&Breakfast Stella Dell'Adriatico** — Ari
   - slug: `bed-breakfast-stella-dell-adriatico-ari`
   - indirizzo: Contrada Feudo, 36, 66026 Ortona CH
28. **Best Western Hotel Parco Paglia** — Ari
   - slug: `best-western-hotel-parco-paglia-ari`
   - indirizzo: Via Erasmo Piaggio, 13, 66100 Chieti CH
29. **Domvs tva** — Ari
   - slug: `domvs-tva-ari`
   - indirizzo: Piazza Garibaldi, 12, 66100 Chieti CH
30. **Grande Albergo Abruzzo** — Ari
   - slug: `grande-albergo-abruzzo-ari`
   - indirizzo: Via Asinio Herio, 20, 66100 Chieti CH
31. **Mama Maja** — Ari
   - slug: `mama-maja-ari`
   - indirizzo: Corso Umberto I, 4, 66010 Vacri CH
32. **Mé Besito** — Ari
   - slug: `me-besito-ari`
   - indirizzo: Via S. Maria, 130, 66010 Ari CH
33. **Nuovo Albergo** — Ari
   - slug: `nuovo-albergo-ari`
   - indirizzo: Viale B. Croce, 13, 66100 Chieti CH
34. **Ristorante Hotel IL Dito E la Luna** — Ari
   - slug: `ristorante-hotel-il-dito-e-la-luna-ari`
   - indirizzo: Via Alento, n3, 66010 Ripa Teatina CH
35. **Via Vico IV San Rocco ,7** — Ari
   - slug: `via-vico-iv-san-rocco-7-ari`
   - indirizzo: Vico III S. Rocco, 2, 66010 Miglianico CH