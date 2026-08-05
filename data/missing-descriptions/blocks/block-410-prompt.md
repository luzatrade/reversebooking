# Blocco 410/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Ca' De' Magnani** — Cantagallo
   - slug: `agriturismo-ca-de-magnani-cantagallo`
   - indirizzo: Via Ca' dei Bravi, 2, 40035 Baragazza BO
2. **Agriturismo Il Frantoio di Colle Alberto** — Cantagallo
   - slug: `agriturismo-il-frantoio-di-colle-alberto-cantagallo`
   - indirizzo: Via Risorgimento, 76, 51037 Fognano PT
3. **Agriturismo Il Pianaccio** — Cantagallo
   - slug: `agriturismo-il-pianaccio-cantagallo`
   - indirizzo: Via Maone e Casello, 150, 51037 Montale PT
4. **Agriturismo il Ponticello** — Cantagallo
   - slug: `agriturismo-il-ponticello-cantagallo`
   - indirizzo: Nucleo Fabio, località Fabio, 6, 59021 Vaiano PO
5. **Agriturismo Selvapiana** — Cantagallo
   - slug: `agriturismo-selvapiana-cantagallo`
   - indirizzo: Via selvapiana, 5, 59025 Cantagallo PO
6. **Azienda Agricola CasaMatta B&B** — Cantagallo
   - slug: `azienda-agricola-casamatta-b-b-cantagallo`
   - indirizzo: Via di Torri e Ciarlico, 50041 Calenzano FI
7. **Bar Albergo Ristorante Il Ponte** — Cantagallo
   - slug: `bar-albergo-ristorante-il-ponte-cantagallo`
   - indirizzo: Via G. Pepoli, 32, 40035 Castiglione dei Pepoli BO
8. **Casa Vacanze e Ristorante Casa Le Bandite** — Cantagallo
   - slug: `casa-vacanze-e-ristorante-casa-le-bandite-cantagallo`
   - indirizzo: Fraz. S. Ippolito Bolzano, 189, 59024 Vernio PO
9. **I Vivai Hotel** — Cantagallo
   - slug: `i-vivai-hotel-cantagallo`
   - indirizzo: Via Parugiano di Sopra, 33, 59013 Montemurlo PO
10. **Nido del Merlo** — Cantagallo
   - slug: `nido-del-merlo-cantagallo`
   - indirizzo: Via Montalese, 67/b, 51100 Pistoia PT
11. **Rifugio le Cave** — Cantagallo
   - slug: `rifugio-le-cave-cantagallo`
   - indirizzo: Cave, 59025 Cantagallo PO
12. **Rifugio Pacini - Pian della Rasa** — Cantagallo
   - slug: `rifugio-pacini-pian-della-rasa-cantagallo`
   - indirizzo: 59025, SP24, 33, 59025 Cantagallo PO
13. **B&B Il Casale dei Nonni** — Cantalice
   - slug: `b-b-il-casale-dei-nonni-cantalice`
   - indirizzo: Via Torretta, 30, 02100 Rieti RI
14. **B&B Stella Polare** — Cantalice
   - slug: `b-b-stella-polare-cantalice`
   - indirizzo: Via Angelo Maria Ricci, 107, 02100 Rieti RI
15. **Bed and Breakfast La Cascina della Vachina** — Cantalice
   - slug: `bed-and-breakfast-la-cascina-della-vachina-cantalice`
   - indirizzo: via fonte giovannone, 4, 02018 Poggio Bustone RI
16. **Casa Vacanze San Giacomo** — Cantalice
   - slug: `casa-vacanze-san-giacomo-cantalice`
   - indirizzo: Via S. Giacomo, 4, 02018 Poggio Bustone RI
17. **Villa Dell'Annunziata** — Cantalice
   - slug: `villa-dell-annunziata-cantalice`
   - indirizzo: Via Foresta, 26, 02100 Rieti RI
18. **B&B Il Baciass** — Cantalupa
   - slug: `b-b-il-baciass-cantalupa`
   - indirizzo: Via S. Pietro V. L., 112, 10064 Pinerolo TO
19. **B&B Il Furtin** — Cantalupa
   - slug: `b-b-il-furtin-cantalupa`
   - indirizzo: Via Rocca, 28, 10060 Cantalupa TO
20. **B&b La Ciuenda** — Cantalupa
   - slug: `b-b-la-ciuenda-cantalupa`
   - indirizzo: Via Campo Sportivo, 2, 10063 Perosa Argentina TO
21. **B&B La Poiana** — Cantalupa
   - slug: `b-b-la-poiana-cantalupa`
   - indirizzo: Str. delle Cascine, 282, 10064 Pinerolo TO
22. **La Locanda della Maison Verte** — Cantalupa
   - slug: `la-locanda-della-maison-verte-cantalupa`
   - indirizzo: Via Rossi, 34, 10060 Cantalupa TO
23. **Agriturismo la collina degli ulivi** — Cantalupo in Sabina
   - slug: `agriturismo-la-collina-degli-ulivi-cantalupo-in-sabina`
   - indirizzo: Via Selci, 72, 02044 Forano RI
24. **Agriturismo Monterone** — Cantalupo in Sabina
   - slug: `agriturismo-monterone-cantalupo-in-sabina`
   - indirizzo: Contrada Monterone, 00060 Ponzano Romano RM
25. **Agriturismo Nociquerceto** — Cantalupo in Sabina
   - slug: `agriturismo-nociquerceto-cantalupo-in-sabina`
   - indirizzo: Contrada Noci Querceto, 02040 Tarano RI
26. **Agriturismo Terra Sabina** — Cantalupo in Sabina
   - slug: `agriturismo-terra-sabina-cantalupo-in-sabina`
   - indirizzo: V. Santa Lucia, 5, 02047 Poggio Mirteto RI
27. **Agriturismo Valle d'Ambrosia** — Cantalupo in Sabina
   - slug: `agriturismo-valle-d-ambrosia-cantalupo-in-sabina`
   - indirizzo: Via San Giovanni snc (Loc. Cantalupo in Sabina), 02040 Selci RI
28. **Albergo da Peppino** — Cantalupo in Sabina
   - slug: `albergo-da-peppino-cantalupo-in-sabina`
   - indirizzo: Via Goffredo Mameli, 53, 02047 Poggio Mirteto RI
29. **L'Angoletto in Selci Hotel** — Cantalupo in Sabina
   - slug: `l-angoletto-in-selci-hotel-cantalupo-in-sabina`
   - indirizzo: Via Roma, 195 A, 02044 Selci RI
30. **La Casa del Viandante | Guest House in Sabina** — Cantalupo in Sabina
   - slug: `la-casa-del-viandante-guest-house-in-sabina-cantalupo-in-sabina`
   - indirizzo: Contrada Galantina, 1, 02044 Forano RI
31. **La Torretta Boutique Guest House** — Cantalupo in Sabina
   - slug: `la-torretta-boutique-guest-house-cantalupo-in-sabina`
   - indirizzo: Via Mazzini, 7, 02041 Casperia RI
32. **La Valle del Tevere** — Cantalupo in Sabina
   - slug: `la-valle-del-tevere-cantalupo-in-sabina`
   - indirizzo: Borgo Regina Margherita, 46, 00060 Torrita Tiberina RM
33. **Le Vecchie Scuderie** — Cantalupo in Sabina
   - slug: `le-vecchie-scuderie-cantalupo-in-sabina`
   - indirizzo: Via Difesa, 31 A, 02032 Passo Corese RI
34. **Locanda le GINESTRE** — Cantalupo in Sabina
   - slug: `locanda-le-ginestre-cantalupo-in-sabina`
   - indirizzo: Via Luigi Chierici, 02040 Cantalupo in Sabina RI
35. **Resort Sabino** — Cantalupo in Sabina
   - slug: `resort-sabino-cantalupo-in-sabina`
   - indirizzo: Via Palombara, 23, 02040 Poggio Catino RI