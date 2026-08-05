# Blocco 98/500 — 35 strutture senza descrizione IT

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

1. **B&B "Da Gabry"** — Amaseno
   - slug: `b-b-da-gabry-amaseno`
   - indirizzo: Via Monte delle Fate, 04022 Fondi LT
2. **B&B ALTURA** — Amaseno
   - slug: `b-b-altura-amaseno`
   - indirizzo: Via Principessa Augusta Gabrielli, 67, 04010 Prossedi LT
3. **B&B Domus Victoria** — Amaseno
   - slug: `b-b-domus-victoria-amaseno`
   - indirizzo: Via Colle Pietroso, 4, 04015, 04015 Priverno LT
4. **B&B La Casa Di Nonna Tella CIN: IT059012C1D4NCDPEV** — Amaseno
   - slug: `b-b-la-casa-di-nonna-tella-cin-it059012c1d4ncdpe-amaseno`
   - indirizzo: Via Valle Bernardo, 49, 04025 Lenola LT
5. **B&B Oro Puro** — Amaseno
   - slug: `b-b-oro-puro-amaseno`
   - indirizzo: Via Giordano Luca, 15, 04022 Fondi LT
6. **B&B Solerosa** — Amaseno
   - slug: `b-b-solerosa-amaseno`
   - indirizzo: Via Chiavino, 14, 04025 Lenola LT
7. **B&B Villa Sabrina** — Amaseno
   - slug: `b-b-villa-sabrina-amaseno`
   - indirizzo: Via Consolare Capocroce, 3550, 04010 Sonnino LT
8. **Bed and Breakfast La Coccinella** — Amaseno
   - slug: `bed-and-breakfast-la-coccinella-amaseno`
   - indirizzo: Località Spinetti, 18, 03021 Amaseno FR
9. **Centro estivo Il Piccolo Paradiso** — Amaseno
   - slug: `centro-estivo-il-piccolo-paradiso-amaseno`
   - indirizzo: Via Cerreto, 04010 Sonnino LT
10. **Hotel "La Villa"** — Amaseno
   - slug: `hotel-la-villa-amaseno`
   - indirizzo: Via S. Sebastiano, 52, 03023 Ceccano FR
11. **Imperatrice Livia** — Amaseno
   - slug: `imperatrice-livia-amaseno`
   - indirizzo: Via Imperatrice Livia, 17, 04022 Fondi LT
12. **La rezztella** — Amaseno
   - slug: `la-rezztella-amaseno`
   - indirizzo: Via di Ponsano, 26, 04022 Fondi LT
13. **La Tenuta di Trimalcione** — Amaseno
   - slug: `la-tenuta-di-trimalcione-amaseno`
   - indirizzo: Via Fontana, 7, 03026 Pofi FR
14. **La Terrazza Ceprano** — Amaseno
   - slug: `la-terrazza-ceprano-amaseno`
   - indirizzo: Via Ristretto, snc, 03024 Ceprano FR
15. **La Vie En Rose** — Amaseno
   - slug: `la-vie-en-rose-amaseno`
   - indirizzo: Via Giovanni Pascoli, 16, 04022 Fondi LT
16. **Medievalia** — Amaseno
   - slug: `medievalia-amaseno`
   - indirizzo: Piazza Castello, 03021 Amaseno FR
17. **Petalo Rosso** — Amaseno
   - slug: `petalo-rosso-amaseno`
   - indirizzo: Via Pozzavegli, 22, 04025 Lenola LT
18. **Albergo Centrale** — Amato
   - slug: `albergo-centrale-amato`
   - indirizzo: Piazza San Giovanni, 88046 Lamezia Terme CZ
19. **b&b amato** — Amato
   - slug: `b-b-amato-amato`
   - indirizzo: Corso A. Mauro, 3, 88040 Amato CZ
20. **B&B La casa di Ely** — Amato
   - slug: `b-b-la-casa-di-ely-amato`
   - indirizzo: Piazzetta Principi, V. Cigala, 88056 Tiriolo CZ
21. **B&B Romy House** — Amato
   - slug: `b-b-romy-house-amato`
   - indirizzo: Contrada Pantanelle, 3ª, 88040 Pianopoli CZ
22. **Bed & Breakfast Garrupa by Nino Angotti** — Amato
   - slug: `bed-breakfast-garrupa-by-nino-angotti-amato`
   - indirizzo: Via S. Francesco di Paola, 107C, 88044 Marcellinara CZ
23. **E Turre Agriturismo** — Amato
   - slug: `e-turre-agriturismo-amato`
   - indirizzo: C.da Viterale, 61, 88040 Serrastretta CZ
24. **Hotel Guglielmo - Boutique Hotel Wellness & SPA** — Amato
   - slug: `hotel-guglielmo-boutique-hotel-wellness-spa-amato`
   - indirizzo: Via Azaria Tedeschi, 1, 88100 Catanzaro CZ
25. **Palahotel Vallenoce** — Amato
   - slug: `palahotel-vallenoce-amato`
   - indirizzo: Contrada Vallenoce, 88041 Decollatura CZ
26. **Pm hotel** — Amato
   - slug: `pm-hotel-amato`
   - indirizzo: Viale Europa, 88100 Catanzaro CZ
27. **Polifunzionale Germaneto** — Amato
   - slug: `polifunzionale-germaneto-amato`
   - indirizzo: Contrada Difesa, Via Ravenna, 7, 88050 Caraffa di Catanzaro CZ
28. **Residenze Cassoli - B&B - Luxury Hotel - Spa Relax** — Amato
   - slug: `residenze-cassoli-b-b-luxury-hotel-spa-relax-amato`
   - indirizzo: Via Loriedo, n. 9, 88046 Lamezia Terme CZ
29. **T Hotel Lamezia | Centro Benessere - Centro Congressi** — Amato
   - slug: `t-hotel-lamezia-centro-benessere-centro-congress-amato`
   - indirizzo: SS 280 dei Due Mari, 88040 Lamezia Terme CZ
30. **Agricamping Amatrice** — Amatrice
   - slug: `agricamping-amatrice-amatrice`
   - indirizzo: Frazione Retrosi, 57, 02012 Retrosi RI
31. **Agriturismo Amatrice** — Amatrice
   - slug: `agriturismo-amatrice-amatrice`
   - indirizzo: Frazione S. Cipriano, 158, 02012 Amatrice RI
32. **Agriturismo L.D.L Amatrice** — Amatrice
   - slug: `agriturismo-l-d-l-amatrice-amatrice`
   - indirizzo: Frazione Cornelle Di Sopra, Snc, 02012 Amatrice RI
33. **Albergo Diffuso Amatrice** — Amatrice
   - slug: `albergo-diffuso-amatrice-amatrice`
   - indirizzo: SS260, 35, 02012 Amatrice RI
34. **ALBERGO DIFFUSO BORGO RETROSI di AMATRICE** — Amatrice
   - slug: `albergo-diffuso-borgo-retrosi-di-amatrice-amatrice`
   - indirizzo: SP, 20, 02012 Retrosi RI
35. **Albergo Ristorante da Tonino** — Amatrice
   - slug: `albergo-ristorante-da-tonino-amatrice`
   - indirizzo: Frazione Albaneto, 02016 Albaneto RI