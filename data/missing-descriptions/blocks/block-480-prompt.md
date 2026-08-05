# Blocco 480/500 — 35 strutture senza descrizione IT

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

1. **Dolce Siesta camere** — Custonaci
   - slug: `dolce-siesta-camere-custonaci`
   - indirizzo: Viale C. Colombo, 184, 91030 Castelluzzo TP
2. **History Hotel** — Custonaci
   - slug: `history-hotel-custonaci`
   - indirizzo: Via Salemi, 5, 91019 Valderice TP
3. **Hotel Achibea** — Custonaci
   - slug: `hotel-achibea-custonaci`
   - indirizzo: Via Verdesca, 26, 91030 Castelluzzo TP
4. **Hotel Baglio Catalano** — Custonaci
   - slug: `hotel-baglio-catalano-custonaci`
   - indirizzo: Contrada Purgatorio, 18, 91015 Purgatorio TP
5. **IL CORTILE | HOTEL & RESTAURANT** — Custonaci
   - slug: `il-cortile-hotel-restaurant-custonaci`
   - indirizzo: Via Padre Francesco Randazzo, 33B, 91015 Custonaci TP
6. **Il Giardino della Nonna** — Custonaci
   - slug: `il-giardino-della-nonna-custonaci`
   - indirizzo: Viale C. Colombo, 162, 91030 Castelluzzo TP
7. **Il Tramonto B&B** — Custonaci
   - slug: `il-tramonto-b-b-custonaci`
   - indirizzo: Via Don Bartolo, 7, 91030 Castelluzzo TP
8. **Rotte e Sentieri B&B** — Custonaci
   - slug: `rotte-e-sentieri-b-b-custonaci`
   - indirizzo: Viale C. Colombo, 157, 91030 Castelluzzo TP
9. **B&B "Le Stanze nel Castello"** — Delia
   - slug: `b-b-le-stanze-nel-castello-delia`
   - indirizzo: Piazza Castello, 1, 93010 Delia CL
10. **B&B ANGELO** — Delia
   - slug: `b-b-angelo-delia`
   - indirizzo: Via Padre Pio da Pietrelcina, 4, 93100 Caltanissetta CL
11. **B&B DE CASA** — Delia
   - slug: `b-b-de-casa-delia`
   - indirizzo: Via Casale, 31, 93017 San Cataldo CL
12. **Corte Antica Luxury** — Delia
   - slug: `corte-antica-luxury-delia`
   - indirizzo: Corso Giuseppe Garibaldi, 237, 92029 Ravanusa AG
13. **Sicily Bike** — Delia
   - slug: `sicily-bike-delia`
   - indirizzo: Contrada Cusatino, n/n, 93010 Serradifalco CL
14. **Carlton Downtown Hotel** — Dubai
   - slug: `carlton-downtown-hotel-dubai`
   - indirizzo: Sheikh Zayed Road Near - Metro Station - المركز التجاري الثانية - DIFC - دبي
15. **Emirates Grand Hotel** — Dubai
   - slug: `emirates-grand-hotel-dubai`
   - indirizzo: 116957 Sheikh Zayed Rd - Trade Center First - Dubai
16. **Four Points by Sheraton Sheikh Zayed Road, Dubai** — Dubai
   - slug: `four-points-by-sheraton-sheikh-zayed-road-dubai-dubai`
   - indirizzo: Union Tower - Sheikh Zayed Rd - Trade Center First - Dubai
17. **Gevora Hotel** — Dubai
   - slug: `gevora-hotel-dubai`
   - indirizzo: 101 Sheikh Zayed Rd - Trade Center Second - DIFC - Dubai
18. **ibis One Central** — Dubai
   - slug: `ibis-one-central-dubai`
   - indirizzo: Trade Centre - 1st Floor - District - دبي
19. **ibis World Trade Centre Dubai** — Dubai
   - slug: `ibis-world-trade-centre-dubai-dubai`
   - indirizzo: Sheikh Zayed Rd - Trade Center Second - Dubai
20. **LEVA Hotel , Mazaya Centre** — Dubai
   - slug: `leva-hotel-mazaya-centre-dubai`
   - indirizzo: Sheikh Zayed Collector Rd - opposite Downtown - Al Wasl - Dubai
21. **Millennium Central Downtown - Dubai** — Dubai
   - slug: `millennium-central-downtown-dubai-dubai`
   - indirizzo: Al Asayel St - Business Bay - Dubai
22. **Novotel World Trade Centre Dubai** — Dubai
   - slug: `novotel-world-trade-centre-dubai-dubai`
   - indirizzo: Al Mustaqbal St - Trade Center Second - Dubai
23. **Number One Tower Suites Dubai** — Dubai
   - slug: `number-one-tower-suites-dubai-dubai`
   - indirizzo: 676F+5FM - Sheikh Zayed Rd - Trade Center First - Dubai
24. **Park Regis Business Bay** — Dubai
   - slug: `park-regis-business-bay-dubai`
   - indirizzo: ParkLane Tower - Al A'amal St - Business Bay - Dubai
25. **Ramada by Wyndham Downtown Dubai** — Dubai
   - slug: `ramada-by-wyndham-downtown-dubai-dubai`
   - indirizzo: Boulevard Street - برج خليفة - Burj Residence Phase I & II - دبي
26. **Residence Inn by Marriott Sheikh Zayed Road, Dubai** — Dubai
   - slug: `residence-inn-by-marriott-sheikh-zayed-road-duba-dubai`
   - indirizzo: Sheikh Zayed Rd - Trade Center Second - DIFC - Dubai
27. **Staybridge Suites Dubai Financial Centre by IHG** — Dubai
   - slug: `staybridge-suites-dubai-financial-centre-by-ihg-dubai`
   - indirizzo: Financial Centre Metro Station - Sheikh Zayed Rd - Trade Center First - Dubai
28. **The Tower Plaza Hotel Dubai** — Dubai
   - slug: `the-tower-plaza-hotel-dubai-dubai`
   - indirizzo: Sheikh Zayed Road - TC - Metro Station - opp. Emirates Towers - Trade Center First - Dubai
29. **384 Guesthouse** — Enna
   - slug: `384-guesthouse-enna`
   - indirizzo: Via Roma, 384, 94100 Enna EN
30. **B&B Centro Sicilia Enna Centro** — Enna
   - slug: `b-b-centro-sicilia-enna-centro-enna`
   - indirizzo: Via Ree Pentite, 6, 94100 Enna EN
31. **B&B Del Centro** — Enna
   - slug: `b-b-del-centro-enna`
   - indirizzo: Via Sant'Agata, 104, 94100 Enna EN
32. **B&B Enna Inn Centro** — Enna
   - slug: `b-b-enna-inn-centro-enna`
   - indirizzo: Via Sant'Agata, 49, 94100 Enna EN
33. **Doctor House** — Enna
   - slug: `doctor-house-enna`
   - indirizzo: Via Roma, 353, 94100 Enna EN
34. **Hotel Bristol Enna Centro** — Enna
   - slug: `hotel-bristol-enna-centro-enna`
   - indirizzo: Piazza Arcangelo Ghisleri, 13, 94100 Enna EN
35. **Affittacamere Antico Borgo Erice** — Erice
   - slug: `affittacamere-antico-borgo-erice-erice`
   - indirizzo: Via Gian Filippo Guarnotti, 12, 91016 Erice TP