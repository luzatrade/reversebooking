# Blocco 48/500 — 35 strutture senza descrizione IT

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

1. **Domo Achenza Guesthouse** — Albagiara
   - slug: `domo-achenza-guesthouse-albagiara`
   - indirizzo: Via Roma, 70, 09098 Terralba OR
2. **Il Nido dell'aquila** — Albagiara
   - slug: `il-nido-dell-aquila-albagiara`
   - indirizzo: Via Regina Margherita, 32, 09030 Sardara VS
3. **Isprocilis House** — Albagiara
   - slug: `isprocilis-house-albagiara`
   - indirizzo: Via Sebastiano Satta, 22, 09090 Palmas Arborea OR
4. **Locanda La Rosa di Sanna Fabiano** — Albagiara
   - slug: `locanda-la-rosa-di-sanna-fabiano-albagiara`
   - indirizzo: Via S. Agostino, 27, 09020 Pauli Arbarei VS
5. **Ristorante Pizzeria Bar Guest House FB Famiglia Bittu** — Albagiara
   - slug: `ristorante-pizzeria-bar-guest-house-fb-famiglia-albagiara`
   - indirizzo: Via Vitt. Emanuele, 37, 09086 Samugheo OR
6. **Agriturismo Cascina Scanna** — Albairate
   - slug: `agriturismo-cascina-scanna-albairate`
   - indirizzo: VIA CASCINA SCANNA. PARI, 20046 Cisliano MI
7. **Agriturismo La Morosina - Ristorante - Camere** — Albairate
   - slug: `agriturismo-la-morosina-ristorante-camere-albairate`
   - indirizzo: Via alla Cascina Morosina, 2, 20081 Abbiategrasso MI
8. **B&B Ca' Nobil** — Albairate
   - slug: `b-b-ca-nobil-albairate`
   - indirizzo: Via Gioacchino Rossini, 1, 20010 Bernate Ticino (loc. Casate) MI
9. **B&B SOFIA** — Albairate
   - slug: `b-b-sofia-albairate`
   - indirizzo: Via Don Giuseppe Oldrati, 9, 20010 Santo Stefano Ticino MI
10. **B&B Villa Milano** — Albairate
   - slug: `b-b-villa-milano-albairate`
   - indirizzo: Via Ghisolfa, 48, 20010 Cornaredo MI
11. **BeB Cascina Mentirone** — Albairate
   - slug: `beb-cascina-mentirone-albairate`
   - indirizzo: Cascina Mentirone, 20088 Rosate MI
12. **Hotel Diamante Corbetta** — Albairate
   - slug: `hotel-diamante-corbetta-albairate`
   - indirizzo: Via Simone da Corbetta, 162, 20011 Magenta MI
13. **Hotel Excelsior Magenta** — Albairate
   - slug: `hotel-excelsior-magenta-albairate`
   - indirizzo: Via Giovanni Cattaneo, 69, 20013 Magenta MI
14. **Hotel La Pendola** — Albairate
   - slug: `hotel-la-pendola-albairate`
   - indirizzo: Località Soria Moderna, snc, tra Abbiategrasso e Vigevano, SS494, 20080 Ozzero MI
15. **Hotel Malpensafiera** — Albairate
   - slug: `hotel-malpensafiera-albairate`
   - indirizzo: Via Autostrada, 1, 20010 Bernate Ticino MI
16. **Hotel Motel Regal** — Albairate
   - slug: `hotel-motel-regal-albairate`
   - indirizzo: Via G. Verdi, 10, 20071 Vermezzo con Zelo MI
17. **Hotel Peralba Cornaredo** — Albairate
   - slug: `hotel-peralba-cornaredo-albairate`
   - indirizzo: Via Giacomo Matteotti, 18, 20007 Cornaredo MI
18. **Hotel Rosy** — Albairate
   - slug: `hotel-rosy-albairate`
   - indirizzo: Via Adua, 25/A, 20004 Arluno MI
19. **Hotel Tiffany Milano** — Albairate
   - slug: `hotel-tiffany-milano-albairate`
   - indirizzo: Viale Leonardo da Vinci, 209, 20090 Trezzano sul Naviglio MI
20. **iH Hotels Milano Blu Visconti** — Albairate
   - slug: `ih-hotels-milano-blu-visconti-albairate`
   - indirizzo: Via Carlo Goldoni, 49, 20090 Trezzano sul Naviglio MI
21. **Motel Europa** — Albairate
   - slug: `motel-europa-albairate`
   - indirizzo: Via Toscana, 18, 20002 Ossona MI
22. **Agriturismo Carretiello** — Albanella
   - slug: `agriturismo-carretiello-albanella`
   - indirizzo: Via Carretiello, 13, 84069 Roccadaspide SA
23. **agriturismo Il Girasole** — Albanella
   - slug: `agriturismo-il-girasole-albanella`
   - indirizzo: Via Serra, 84069 Roccadaspide SA
24. **Agriturismo Mammarella** — Albanella
   - slug: `agriturismo-mammarella-albanella`
   - indirizzo: C.da Scalareta, 77, 84045 Altavilla Silentina SA
25. **Aia Resort** — Albanella
   - slug: `aia-resort-albanella`
   - indirizzo: 84070 Trentinara SA
26. **B&B Il Giardino dei Pini** — Albanella
   - slug: `b-b-il-giardino-dei-pini-albanella`
   - indirizzo: Via Filette, 11, 84047 Capaccio Paestum SA
27. **B&B La Mortella** — Albanella
   - slug: `b-b-la-mortella-albanella`
   - indirizzo: Via Doglie, 44, 84069 Roccadaspide SA
28. **B&B Nonna Angela** — Albanella
   - slug: `b-b-nonna-angela-albanella`
   - indirizzo: Via Difesa Ciglio, 24, 84044 Albanella SA
29. **B&b Palazzo Albini** — Albanella
   - slug: `b-b-palazzo-albini-albanella`
   - indirizzo: Via Marconi, 4, 84044 Albanella SA
30. **Casa degli Ulivi** — Albanella
   - slug: `casa-degli-ulivi-albanella`
   - indirizzo: Via Feudo Vignone, 32, 84047 Capaccio Paestum SA
31. **CASALE DEGLI ULIVI** — Albanella
   - slug: `casale-degli-ulivi-albanella`
   - indirizzo: Via Carretiello, 31, 84069 Roccadaspide SA
32. **Country House L'ippocastano** — Albanella
   - slug: `country-house-l-ippocastano-albanella`
   - indirizzo: Località Campoluongo, 9, 84045 Altavilla Silentina SA
33. **Hotel Baia del Sole** — Albanella
   - slug: `hotel-baia-del-sole-albanella`
   - indirizzo: Via Urano, 23, 84047 Capaccio Paestum SA
34. **Hotel Paradiso** — Albanella
   - slug: `hotel-paradiso-albanella`
   - indirizzo: Via Monteverde, 31, 84044 Albanella SA
35. **Il Casolare degli Alburni** — Albanella
   - slug: `il-casolare-degli-alburni-albanella`
   - indirizzo: Contrada Serra, 84020 Castelcivita SA