# Blocco 442/500 — 35 strutture senza descrizione IT

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

1. **B&B miccoli** — Carosino
   - slug: `b-b-miccoli-carosino`
   - indirizzo: Via Armando Diaz, 4, 74023 Grottaglie TA
2. **B&B Nanze' e Rete' - Esperienze Pugliesi** — Carosino
   - slug: `b-b-nanze-e-rete-esperienze-pugliesi-carosino`
   - indirizzo: Via Dandolo, 4, 74021 Carosino TA
3. **B&B Nuova Salento** — Carosino
   - slug: `b-b-nuova-salento-carosino`
   - indirizzo: Via Ennio, 158, 74023 Grottaglie TA
4. **Domus 0143** — Carosino
   - slug: `domus-0143-carosino`
   - indirizzo: Via Grazia Deledda, 43, 74027 San Giorgio Ionico TA
5. **Gm Le Palme** — Carosino
   - slug: `gm-le-palme-carosino`
   - indirizzo: Via Giuseppe Toniolo, 2, 74021 Carosino TA
6. **Hotel La Tana Del Lupo** — Carosino
   - slug: `hotel-la-tana-del-lupo-carosino`
   - indirizzo: Via Roma, 229, 74020 Monteiasi TA
7. **La Locanda al Castello** — Carosino
   - slug: `la-locanda-al-castello-carosino`
   - indirizzo: Piazza Castello, 3, 74026 Pulsano TA
8. **Le Terrazze b&b** — Carosino
   - slug: `le-terrazze-b-b-carosino`
   - indirizzo: Via Roma, 16, 74026 Pulsano TA
9. **LeTagghjate - Exclusive Rooms and Suites** — Carosino
   - slug: `letagghjate-exclusive-rooms-and-suites-carosino`
   - indirizzo: Via Giovanni Pascoli, 32, 74027 San Giorgio Ionico TA
10. **Ristorante b&b NONNA LUCIA** — Carosino
   - slug: `ristorante-b-b-nonna-lucia-carosino`
   - indirizzo: Via P. G. Zingaropoli, 12, 74027 San Giorgio Ionico TA
11. **San Cataldo Hotel** — Carosino
   - slug: `san-cataldo-hotel-carosino`
   - indirizzo: Zona Industriale Faggiano (TA) - Complanare SP 109 - n° 4, 74020 Faggiano TA
12. **up** — Carosino
   - slug: `up-carosino`
   - indirizzo: Via Dandolo, 63, 74021 Carosino TA
13. **Arya Nobile Dimora** — Carovigno
   - slug: `arya-nobile-dimora-carovigno`
   - indirizzo: Corso Vittorio Emanuele, 23, 72012 Carovigno BR
14. **B&B Coppularossa** — Carovigno
   - slug: `b-b-coppularossa-carovigno`
   - indirizzo: Via Aldo Palazzeschi, 1, 72012 Carovigno BR
15. **B&B da LEO** — Carovigno
   - slug: `b-b-da-leo-carovigno`
   - indirizzo: Via Isaia Pagliara, 30, 72012 Carovigno BR
16. **B&B Delfinia** — Carovigno
   - slug: `b-b-delfinia-carovigno`
   - indirizzo: Via Francesco Conforti, 4, 72012 Carovigno BR
17. **B&B L'Antico Ortale** — Carovigno
   - slug: `b-b-l-antico-ortale-carovigno`
   - indirizzo: Via V. Veneto, 21, 72012 Carovigno BR
18. **B&B LUCERTOLA** — Carovigno
   - slug: `b-b-lucertola-carovigno`
   - indirizzo: Via Vittorio Alfieri, 3, 72012 Carovigno BR
19. **Bed and Breakfast Demetra** — Carovigno
   - slug: `bed-and-breakfast-demetra-carovigno`
   - indirizzo: C.da Malavera sn, 72012 Carovigno BR
20. **BED&BREAD Piazza 'Nzegna** — Carovigno
   - slug: `bed-bread-piazza-nzegna-carovigno`
   - indirizzo: Corso Vittorio Emanuele, 99, 72012 Carovigno BR
21. **Belvedere | Bed & Breakfast** — Carovigno
   - slug: `belvedere-bed-breakfast-carovigno`
   - indirizzo: Via Mario Pagano, 3, 72012 Carovigno BR
22. **Carovigno** — Carovigno
   - slug: `carovigno-carovigno`
   - indirizzo: Corso Umberto I, 72012 Carovigno BR
23. **Casa Angela Rosa** — Carovigno
   - slug: `casa-angela-rosa-carovigno`
   - indirizzo: Via V. Veneto, 95, 72012 Carovigno BR
24. **CASA PASTEUR a due passi da Ostuni** — Carovigno
   - slug: `casa-pasteur-a-due-passi-da-ostuni-carovigno`
   - indirizzo: Via Luigi Pasteur, 9, 72012 Carovigno BR
25. **GH Dimora Sant'Anna** — Carovigno
   - slug: `gh-dimora-sant-anna-carovigno`
   - indirizzo: Via G. Matteotti, 100, 72012 Carovigno BR
26. **Hotel Eden** — Carovigno
   - slug: `hotel-eden-carovigno`
   - indirizzo: Contrada Catanzani, sn, 72012 Carovigno BR
27. **Hotel Victoria** — Carovigno
   - slug: `hotel-victoria-carovigno`
   - indirizzo: Via Vesuvio, 49, 72012 Torre Santa Sabina BR
28. **Isola Verde Agriturismo** — Carovigno
   - slug: `isola-verde-agriturismo-carovigno`
   - indirizzo: Strada Provinciale 34, 84, 72012 Carovigno BR
29. **La Caletta B&B** — Carovigno
   - slug: `la-caletta-b-b-carovigno`
   - indirizzo: Contrada Carisciola-Monacelle, 72012 Torre Santa Sabina, Carovigno BR
30. **REVERSE HOTEL 4 Stelle** — Carovigno
   - slug: `reverse-hotel-4-stelle-carovigno`
   - indirizzo: C/da Taverna Nuova - Loc. Pantanagianni, 72012 Carovigno BR
31. **Antica Dimora Isernia** — Carovilli
   - slug: `antica-dimora-isernia-carovilli`
   - indirizzo: Corso Marcelli, 185/191, 86170 Isernia IS
32. **Hotel B&B Ristorante La Cona** — Carovilli
   - slug: `hotel-b-b-ristorante-la-cona-carovilli`
   - indirizzo: Via Garibaldi, 199, 86097 Pescolanciano IS
33. **Snowake House** — Carovilli
   - slug: `snowake-house-carovilli`
   - indirizzo: Via Sangro, 23, 67031 Castel di Sangro AQ
34. **AFFITTACAMERE CITY LOFT** — Carpaneto Piacentino
   - slug: `affittacamere-city-loft-carpaneto-piacentino`
   - indirizzo: 2PX3+9G, Via Roma, 267, 29121 Piacenza PC
35. **Agriturismo Campogrande** — Carpaneto Piacentino
   - slug: `agriturismo-campogrande-carpaneto-piacentino`
   - indirizzo: Via Valera, 13, 29013 Carpaneto Piacentino PC