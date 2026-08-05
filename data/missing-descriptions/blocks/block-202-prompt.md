# Blocco 202/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Martin Pescatore** — Bagnolo San Vito
   - slug: `b-b-il-martin-pescatore-bagnolo-san-vito`
   - indirizzo: Via Virgiliana, 89, 46034 Borgo Virgilio MN
2. **Bed & Breakfast La Pilona** — Bagnolo San Vito
   - slug: `bed-breakfast-la-pilona-bagnolo-san-vito`
   - indirizzo: Via P. Gobetti, 1, 46031 Bagnolo San Vito MN
3. **Ca' degli Uberti Palace Hotel** — Bagnolo San Vito
   - slug: `ca-degli-uberti-palace-hotel-bagnolo-san-vito`
   - indirizzo: Piazza Sordello, 13, 46100 Mantova MN
4. **Corte castella** — Bagnolo San Vito
   - slug: `corte-castella-bagnolo-san-vito`
   - indirizzo: Via Colombarotto, 73a, 46031 Bagnolo San Vito MN
5. **Hotel Italia** — Bagnolo San Vito
   - slug: `hotel-italia-bagnolo-san-vito`
   - indirizzo: Piazza Felice Cavallotti, 8, 46100 Mantova MN
6. **Hotel La Favorita** — Bagnolo San Vito
   - slug: `hotel-la-favorita-bagnolo-san-vito`
   - indirizzo: Via S, Via Salvatore Cognetti de Martiis, 1, 46100 Mantova MN
7. **Hotel Mantegna Stazione** — Bagnolo San Vito
   - slug: `hotel-mantegna-stazione-bagnolo-san-vito`
   - indirizzo: Piazza Don Eugenio Leoni, 25/27, 46100 Mantova MN
8. **Hotel Mantova Sud** — Bagnolo San Vito
   - slug: `hotel-mantova-sud-bagnolo-san-vito`
   - indirizzo: Via Romana Zuccona, 170, 46031 Bagnolo San Vito MN
9. **Hotel Riccò** — Bagnolo San Vito
   - slug: `hotel-ricco-bagnolo-san-vito`
   - indirizzo: V. Romana Conventino, 1, 46031 Bagnolo San Vito MN
10. **Residenza Gonzaga** — Bagnolo San Vito
   - slug: `residenza-gonzaga-bagnolo-san-vito`
   - indirizzo: Via S. Longino, 42, 46100 Mantova MN
11. **Residenza il Salice** — Bagnolo San Vito
   - slug: `residenza-il-salice-bagnolo-san-vito`
   - indirizzo: Via Dante Alighieri, 18, 46031 Bagnolo San Vito MN
12. **Residenze Mazzini** — Bagnolo San Vito
   - slug: `residenze-mazzini-bagnolo-san-vito`
   - indirizzo: Via Giuseppe Mazzini, 16, 46100 Mantova MN
13. **San Lorenzo Luxury Boutique** — Bagnolo San Vito
   - slug: `san-lorenzo-luxury-boutique-bagnolo-san-vito`
   - indirizzo: Via Dottrina Cristiana, 2, 46100 Mantova MN
14. **Villa Cittadella** — Bagnolo San Vito
   - slug: `villa-cittadella-bagnolo-san-vito`
   - indirizzo: Via Santa Maria Nuova, 4, 46100 Mantova MN
15. **Zara Rooms & Suites** — Bagnolo San Vito
   - slug: `zara-rooms-suites-bagnolo-san-vito`
   - indirizzo: Via Cairoli, 46029 Suzzara MN
16. **Agriturismo Giunasco** — Bagnone
   - slug: `agriturismo-giunasco-bagnone`
   - indirizzo: di Sopra, 54021 Orturano MS
17. **Agriturismo I Giunchi** — Bagnone
   - slug: `agriturismo-i-giunchi-bagnone`
   - indirizzo: Località Leugio, 10, 54021 Massa MS
18. **B&B Il suono del fiume** — Bagnone
   - slug: `b-b-il-suono-del-fiume-bagnone`
   - indirizzo: Via della Repubblica, 12, 54021 Bagnone MS
19. **B&B Luna & Stelle** — Bagnone
   - slug: `b-b-luna-stelle-bagnone`
   - indirizzo: Piazza Immacolata, 13, 54028 Filetto MS
20. **B&B Poggio delle Rondini** — Bagnone
   - slug: `b-b-poggio-delle-rondini-bagnone`
   - indirizzo: Loc. Mochignano di Sotto, 6, 54021 Bagnone MS
21. **Baglio della Luna Resort** — Bagnone
   - slug: `baglio-della-luna-resort-bagnone`
   - indirizzo: Via La Ghiaia, 7, 54021 Bagnone MS
22. **Castello di Pontebosio Luxury Resort** — Bagnone
   - slug: `castello-di-pontebosio-luxury-resort-bagnone`
   - indirizzo: Via Pontebosio, 3, 54016 Pontebosio MS
23. **Da Rita** — Bagnone
   - slug: `da-rita-bagnone`
   - indirizzo: Borgo di Mezzo, 1, 43010 Valditacca PR
24. **Dimora i Donati -B&B Gredo - Antica Dimora** — Bagnone
   - slug: `dimora-i-donati-b-b-gredo-antica-dimora-bagnone`
   - indirizzo: Via Ariberti, 19, 54028 Villafranca in Lunigiana MS
25. **Hotel Podere Conti** — Bagnone
   - slug: `hotel-podere-conti-bagnone`
   - indirizzo: Via Dobbiana Macerie, 3, 54023 Filattiera MS
26. **Il Mulino Del Tempo Perduto** — Bagnone
   - slug: `il-mulino-del-tempo-perduto-bagnone`
   - indirizzo: Piazza Roma (Via Francigena) Località Tre Fontane, 54021 Bagnone MS
27. **La Cascina dei Chicchi** — Bagnone
   - slug: `la-cascina-dei-chicchi-bagnone`
   - indirizzo: LOC, Località Leugio, 8, 54021 Bagnone MS
28. **La Pineta Cravilla** — Bagnone
   - slug: `la-pineta-cravilla-bagnone`
   - indirizzo: Via Cravilla, 50, 54026 Arionzo-cravilla MS
29. **Locanda Il Rustichello** — Bagnone
   - slug: `locanda-il-rustichello-bagnone`
   - indirizzo: Via Crocetta, 2, 54026 Mulazzo MS
30. **Locanda Ristorante Gavarini** — Bagnone
   - slug: `locanda-ristorante-gavarini-bagnone`
   - indirizzo: Via A. Benedicenti, 50, 54028 Mocrone MS
31. **Ristorante Locanda Fermento** — Bagnone
   - slug: `ristorante-locanda-fermento-bagnone`
   - indirizzo: Località Mochignano di Sotto, via Scroce, 1, 54021 Bagnone MS
32. **...."dopo il settimo cielo"** — Bagnoregio
   - slug: `dopo-il-settimo-cielo-bagnoregio`
   - indirizzo: Località Santa Caterina, 40, 01020 Lubriano VT
33. **Acqua di Civita Beauty & Rooms in Mercatello** — Bagnoregio
   - slug: `acqua-di-civita-beauty-rooms-in-mercatello-bagnoregio`
   - indirizzo: Via Bonaventura Tecchi, 8, 01022 Bagnoregio VT
34. **Agriturismo La Peonia** — Bagnoregio
   - slug: `agriturismo-la-peonia-bagnoregio`
   - indirizzo: Via Roma, 51, 01022 Bagnoregio VT
35. **B&B Butterfly** — Bagnoregio
   - slug: `b-b-butterfly-bagnoregio`
   - indirizzo: Via Antonio Diviziani, snc, 01022 Bagnoregio VT