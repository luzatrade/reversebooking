# Blocco 67/500 — 35 strutture senza descrizione IT

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

1. **Albergo E Ristorante Delle Rose Di Mancuso Mario Xa7 C.** — Alessandria
   - slug: `albergo-e-ristorante-delle-rose-di-mancuso-mario-alessandria`
   - indirizzo: Via Achille Grandi, 5, 15121 Alessandria AL
2. **Albergo Keiko** — Alessandria
   - slug: `albergo-keiko-alessandria`
   - indirizzo: Via Marengo, 130, 15121 Alessandria AL
3. **Albergo Ristorante "da Tunon" - Alessandria** — Alessandria
   - slug: `albergo-ristorante-da-tunon-alessandria-alessandria`
   - indirizzo: Via Dante Alighieri, 4, 15026 Oviglio AL
4. **Alli Due Buoi Rossi** — Alessandria
   - slug: `alli-due-buoi-rossi-alessandria`
   - indirizzo: Via Camillo Cavour, 32, 15121 Alessandria AL
5. **B&B Arcobaleno** — Alessandria
   - slug: `b-b-arcobaleno-alessandria`
   - indirizzo: V.Verona, 102, 15121 Alessandria AL
6. **B&B I tre gatti** — Alessandria
   - slug: `b-b-i-tre-gatti-alessandria`
   - indirizzo: Via Carlo Alberto, 15035 Frassinello Monferrato AL
7. **CasaSport Alessandria** — Alessandria
   - slug: `casasport-alessandria-alessandria`
   - indirizzo: Via Colombo, zona Orti, 8, 15121 Alessandria AL
8. **Hotel Diamante Alessandria** — Alessandria
   - slug: `hotel-diamante-alessandria-alessandria`
   - indirizzo: Viale della Valletta, 180, 15100 Spinetta Marengo AL
9. **Hotel Domus** — Alessandria
   - slug: `hotel-domus-alessandria`
   - indirizzo: Via Teresa Castellani, 12, 15121 Alessandria AL
10. **Hotel Europa** — Alessandria
   - slug: `hotel-europa-alessandria`
   - indirizzo: Via Palestro, 1, 15100 Alessandria AL
11. **Hotel Il Torrese** — Alessandria
   - slug: `hotel-il-torrese-alessandria`
   - indirizzo: Via Roma, 38, 27030 Torre Beretti PV
12. **Hotel Londra Alessandria** — Alessandria
   - slug: `hotel-londra-alessandria-alessandria`
   - indirizzo: Corso Felice Cavallotti, 51, 15121 Alessandria AL
13. **Hotel Lux** — Alessandria
   - slug: `hotel-lux-alessandria`
   - indirizzo: Via Piacenza, 72, 15121 Alessandria AL
14. **Hotel Royal** — Alessandria
   - slug: `hotel-royal-alessandria`
   - indirizzo: Corso Carlo Marx, 18, 15121 Alessandria AL
15. **Il Chiostro - hostel and hotel** — Alessandria
   - slug: `il-chiostro-hostel-and-hotel-alessandria`
   - indirizzo: Via Santa Maria di Castello, 14, 15121 Alessandria AL
16. **La Corte** — Alessandria
   - slug: `la-corte-alessandria`
   - indirizzo: ingresso nel cortile, Via Sant'Ubaldo, 50, 15121 Alessandria AL
17. **LVG Hotel Collection - Al Mulino** — Alessandria
   - slug: `lvg-hotel-collection-al-mulino-alessandria`
   - indirizzo: Via Casale, 44, 15122 San Michele AL
18. **Relais Palazzo Paleologi - Secolo XIV** — Alessandria
   - slug: `relais-palazzo-paleologi-secolo-xiv-alessandria`
   - indirizzo: Via Cardinale Bobba, 4, Via Antico Monastero, 8, 15037 Lu e Cuccaro Monferrato AL
19. **Residence Corso Monferrato** — Alessandria
   - slug: `residence-corso-monferrato-alessandria`
   - indirizzo: Corso Monferrato, 99, 15121 Alessandria AL
20. **Villa Aurora** — Alessandria
   - slug: `villa-aurora-alessandria`
   - indirizzo: SP75, 8, C, 15044 Quargnento AL
21. **ambrosia hostel** — Alessandria del Carretto
   - slug: `ambrosia-hostel-alessandria-del-carretto`
   - indirizzo: Via Difisella, 23, 87070 Alessandria del Carretto CS
22. **Bed and Breakfast LA CASETTA** — Alessandria del Carretto
   - slug: `bed-and-breakfast-la-casetta-alessandria-del-carretto`
   - indirizzo: Contrada Lavine, 85030 Terranova di Pollino PZ
23. **Hotel la Falconara** — Alessandria del Carretto
   - slug: `hotel-la-falconara-alessandria-del-carretto`
   - indirizzo: Via La Falconara, 87012 Castrovillari CS
24. **Hotel Picchio Nero** — Alessandria del Carretto
   - slug: `hotel-picchio-nero-alessandria-del-carretto`
   - indirizzo: Via Mulino, 1, 85030 Terranova di Pollino PZ
25. **Hotel Pino Loricato** — Alessandria del Carretto
   - slug: `hotel-pino-loricato-alessandria-del-carretto`
   - indirizzo: Via Ines Zurlini, 130, 85030 Terranova di Pollino PZ
26. **L&B B&B** — Alessandria del Carretto
   - slug: `l-b-b-b-alessandria-del-carretto`
   - indirizzo: Via Convento, 1, 85030 Terranova di Pollino PZ
27. **Maritato Hotel Villapiana Lido** — Alessandria del Carretto
   - slug: `maritato-hotel-villapiana-lido-alessandria-del-carretto`
   - indirizzo: Via Lungomare, 87076 Villapiana Lido CS
28. **ADLER Spa Resort SICILIA** — Alessandria della Rocca
   - slug: `adler-spa-resort-sicilia-alessandria-della-rocca`
   - indirizzo: Contrada Salsa, 92010 Siculiana AG
29. **Albergo Ristorante Pizzeria Del Viale** — Alessandria della Rocca
   - slug: `albergo-ristorante-pizzeria-del-viale-alessandria-della-rocca`
   - indirizzo: Via XX Settembre, 1, 90030 Palazzo Adriano PA
30. **Alico** — Alessandria della Rocca
   - slug: `alico-alessandria-della-rocca`
   - indirizzo: Via Vittorio Emanuele III, 30, 92020 San Biagio Platani AG
31. **B&B Da Francesca** — Alessandria della Rocca
   - slug: `b-b-da-francesca-alessandria-della-rocca`
   - indirizzo: Contrada Scaldamosche, Via Nazionale Sud, 72, 92010 Bivona AG
32. **B&B Macalube** — Alessandria della Rocca
   - slug: `b-b-macalube-alessandria-della-rocca`
   - indirizzo: Via Fontes Episcopi, 25, 92021 Aragona AG
33. **B&B ZAHRA ARAGONA** — Alessandria della Rocca
   - slug: `b-b-zahra-aragona-alessandria-della-rocca`
   - indirizzo: Via Carmagnola, 1, 92021 Aragona AG
34. **Casa Quisquina** — Alessandria della Rocca
   - slug: `casa-quisquina-alessandria-della-rocca`
   - indirizzo: Via Palma, 50, 92020 Santo Stefano Quisquina AG
35. **Ciuci's Manor** — Alessandria della Rocca
   - slug: `ciuci-s-manor-alessandria-della-rocca`
   - indirizzo: Contrada Carbonia, 92021 Aragona AG