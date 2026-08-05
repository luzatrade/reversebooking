# Blocco 431/500 — 35 strutture senza descrizione IT

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

1. **CASA MORELLI | Boutique Hotel in Brianza** — Carate Brianza
   - slug: `casa-morelli-boutique-hotel-in-brianza-carate-brianza`
   - indirizzo: Via Giuseppe Garibaldi, 35, 20831 Seregno MB
2. **Doremi - Affittacamere** — Carate Brianza
   - slug: `doremi-affittacamere-carate-brianza`
   - indirizzo: Piazza Prealpi, 10, 20831 Seregno MB
3. **Locanda La Piana** — Carate Brianza
   - slug: `locanda-la-piana-carate-brianza`
   - indirizzo: Via Pietro Zappelli, 15, 20841 Carate Brianza MB
4. **Albergo Ristorante Pizzeria Giardino** — Carate Urio
   - slug: `albergo-ristorante-pizzeria-giardino-carate-urio`
   - indirizzo: Via Regina, 73, 22012 Cernobbio CO
5. **B&B A Casa di Camilla** — Carate Urio
   - slug: `b-b-a-casa-di-camilla-carate-urio`
   - indirizzo: Via Santa Marta, 14, 22010 Carate Urio CO
6. **BAITA MIRELLA** — Carate Urio
   - slug: `baita-mirella-carate-urio`
   - indirizzo: Via per Molina, 312 Loc Piazzaga, 22020, 22020 Torno CO
7. **Darsena di Riva Grande** — Carate Urio
   - slug: `darsena-di-riva-grande-carate-urio`
   - indirizzo: Via Regina, 24, 22010 Moltrasio CO
8. **Hotel Centrale** — Carate Urio
   - slug: `hotel-centrale-carate-urio`
   - indirizzo: Via Regina, 39, 22012 Cernobbio CO
9. **Hotel Orso Bruno** — Carate Urio
   - slug: `hotel-orso-bruno-carate-urio`
   - indirizzo: Via Regina, 45, 22010 Carate Urio CO
10. **Hotel Regina Olga** — Carate Urio
   - slug: `hotel-regina-olga-carate-urio`
   - indirizzo: Via Regina, 18, 22012 Cernobbio CO
11. **Hotel Ristorante Glavjc** — Carate Urio
   - slug: `hotel-ristorante-glavjc-carate-urio`
   - indirizzo: Via Cesare Poggi, 25/A, 22020 Torno CO
12. **Hotel Ristorante il Belvedere** — Carate Urio
   - slug: `hotel-ristorante-il-belvedere-carate-urio`
   - indirizzo: Piazza Casartelli, 3, 22020 Torno CO
13. **Hotel San Giuseppe** — Carate Urio
   - slug: `hotel-san-giuseppe-carate-urio`
   - indirizzo: Via Cinque Giornate, 31, 22012 Cernobbio CO
14. **Il Sereno** — Carate Urio
   - slug: `il-sereno-carate-urio`
   - indirizzo: Via Torrazza, 10, 22020 Torno CO
15. **L'O Hotel** — Carate Urio
   - slug: `l-o-hotel-carate-urio`
   - indirizzo: Via Alessandro Manzoni, 16, 22100 Como CO
16. **Ristorante Hotel La Vignetta** — Carate Urio
   - slug: `ristorante-hotel-la-vignetta-carate-urio`
   - indirizzo: Via Monte Grappa, 32, 22012 Cernobbio CO
17. **Una Terrazza da Sogno** — Carate Urio
   - slug: `una-terrazza-da-sogno-carate-urio`
   - indirizzo: Via Alemanni, 2, 22010 Carate Urio CO
18. **Villa Albonico** — Carate Urio
   - slug: `villa-albonico-carate-urio`
   - indirizzo: Via Sopra Ponte, 5, 22010 Laglio CO
19. **Hotel Caravaggio** — Caravaggio
   - slug: `hotel-caravaggio-caravaggio`
   - indirizzo: Via Palermo, 75, 00184 Roma RM
20. **B&B IL CILIEGIO DI ZOE** — Caravate
   - slug: `b-b-il-ciliegio-di-zoe-caravate`
   - indirizzo: Via Vignola, 18, 21014 Laveno-Mombello VA
21. **B&B La Civetta CIN IT012088C2BOCXL9IB** — Caravate
   - slug: `b-b-la-civetta-cin-it012088c2bocxl9ib-caravate`
   - indirizzo: Via Bosco, 4, 21038 Leggiuno VA
22. **La Rosa Del Lago** — Caravate
   - slug: `la-rosa-del-lago-caravate`
   - indirizzo: Via Como, 2, 21038 Leggiuno VA
23. **Locanda Pozzetto** — Caravate
   - slug: `locanda-pozzetto-caravate`
   - indirizzo: Via Montecristo, 23, 21014 Laveno-Mombello VA
24. **Villa Le Arcate Cittiglio** — Caravate
   - slug: `villa-le-arcate-cittiglio-caravate`
   - indirizzo: Proseguire la salita dopo il N⁰ 29, Via N. Sauro, 27, 21033 Cittiglio VA
25. **Agriturismo Primo Bacio - IT008019B56FLUOB9S** — Caravonica
   - slug: `agriturismo-primo-bacio-it008019b56fluob9s-caravonica`
   - indirizzo: Via Monte Pasubio, 8, 18023 Chiusanico IM
26. **B&B Villa Anna** — Caravonica
   - slug: `b-b-villa-anna-caravonica`
   - indirizzo: STRADA PIANI, 9, 18023 Chiusanico IM
27. **Hotel Caravelle** — Caravonica
   - slug: `hotel-caravelle-caravonica`
   - indirizzo: Via Sausette, 34, 18013 Diano Marina IM
28. **Hotel Diano Marina** — Caravonica
   - slug: `hotel-diano-marina-caravonica`
   - indirizzo: Via Generale Ardoino, 75, 18013 Diano Marina IM
29. **Hotel Mayola** — Caravonica
   - slug: `hotel-mayola-caravonica`
   - indirizzo: Via Corsica, 20, 18016 San Bartolomeo al Mare IM
30. **Hotel Ristorante La Marina** — Caravonica
   - slug: `hotel-ristorante-la-marina-caravonica`
   - indirizzo: Via Moreno, 2, 18016 San Bartolomeo al Mare IM
31. **Hotel San Matteo** — Caravonica
   - slug: `hotel-san-matteo-caravonica`
   - indirizzo: Via Faraldi, 77, 18016 San Bartolomeo al Mare IM
32. **Hotel Tina** — Caravonica
   - slug: `hotel-tina-caravonica`
   - indirizzo: Viale Torino, 22, 18013 Diano Marina IM
33. **Hotel Villa Igea** — Caravonica
   - slug: `hotel-villa-igea-caravonica`
   - indirizzo: Via Sant'Elmo, 1, 18013 Diano Marina IM
34. **L'ULIVO di SEMPRE** — Caravonica
   - slug: `l-ulivo-di-sempre-caravonica`
   - indirizzo: Via Caduti al Passo del Ginestro, 4 fraz. Chiusanico ria IM,, 18023 Torria IM
35. **Agriturismo Casale Loreto** — Carbognano
   - slug: `agriturismo-casale-loreto-carbognano`
   - indirizzo: Località Madonna delle Grazie, 11, 01030 Corchiano VT