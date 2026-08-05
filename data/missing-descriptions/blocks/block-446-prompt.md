# Blocco 446/500 — 35 strutture senza descrizione IT

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

1. **B&B Marina Sleep and Ship (NUOVA GESTIONE 2024)** — Carpino
   - slug: `b-b-marina-sleep-and-ship-nuova-gestione-2024-carpino`
   - indirizzo: Via Scalo Marittimo, 61, 71012 Rodi Garganico FG
2. **B&b Mulino di Canneto** — Carpino
   - slug: `b-b-mulino-di-canneto-carpino`
   - indirizzo: Contrada canneto chiesetta, 71012 Rodi Garganico FG
3. **Bed&Breakfast "Belvedere"** — Carpino
   - slug: `bed-breakfast-belvedere-carpino`
   - indirizzo: Contrada Belvedere, Snc, primo piano, 71010 Ischitella FG
4. **Garganomareborghi Vacanze** — Carpino
   - slug: `garganomareborghi-vacanze-carpino`
   - indirizzo: Vico Saliero, 71018 Vico del Gargano FG
5. **Gárgara Bed and Breakfast** — Carpino
   - slug: `gargara-bed-and-breakfast-carpino`
   - indirizzo: Via Coppamendole, 47, 71018 Vico del Gargano FG
6. **Holiday B&B Vico Del Gargano** — Carpino
   - slug: `holiday-b-b-vico-del-gargano-carpino`
   - indirizzo: Via Michele Monaco, 4, 71018 Vico del Gargano FG
7. **Hotel De La Ville** — Carpino
   - slug: `hotel-de-la-ville-carpino`
   - indirizzo: Via Scalabrini, 71010 Carpino FG
8. **Hotel Miramare** — Carpino
   - slug: `hotel-miramare-carpino`
   - indirizzo: Via XX Settembre, 2, 71012 Rodi Garganico FG
9. **Hotel Pineta** — Carpino
   - slug: `hotel-pineta-carpino`
   - indirizzo: Via Passarella, 6, 71018 San Menaio FG
10. **Ibisco hotel** — Carpino
   - slug: `ibisco-hotel-carpino`
   - indirizzo: Contrada Santa Barbara, 6, 71012 Rodi Garganico FG
11. **La Casa al Gelso** — Carpino
   - slug: `la-casa-al-gelso-carpino`
   - indirizzo: via Tirolo, 21, 71012 Rodi Garganico FG
12. **B&B Il Buon Cammino** — Carpinone
   - slug: `b-b-il-buon-cammino-carpinone`
   - indirizzo: Via Annunziata, vico III, 1, 86092 Roccamandolfi IS
13. **Casa vacanze Quarto di Sopra** — Carpinone
   - slug: `casa-vacanze-quarto-di-sopra-carpinone`
   - indirizzo: Vico I Chiaia, 86093 Carpinone IS
14. **Grand Hotel Europa Isernia** — Carpinone
   - slug: `grand-hotel-europa-isernia-carpinone`
   - indirizzo: Viale dei Pentri, 76, 86170 Isernia IS
15. **Hotel S. Maria del Bagno** — Carpinone
   - slug: `hotel-s-maria-del-bagno-carpinone`
   - indirizzo: Via Santa Maria del Bagno, 1, 86090 Pesche IS
16. **Albergo Sergio** — Carrara
   - slug: `albergo-sergio-carrara`
   - indirizzo: Via Provinciale Avenza Carrara, 180, 54033 Carrara MS
17. **B&B Alberica10** — Carrara
   - slug: `b-b-alberica10-carrara`
   - indirizzo: Piazza Alberica, 10, 54033 Carrara MS
18. **B&B IL MARLO** — Carrara
   - slug: `b-b-il-marlo-carrara`
   - indirizzo: Viale delle Pinete, 21, 54033 Carrara MS
19. **B&B Nannalia** — Carrara
   - slug: `b-b-nannalia-carrara`
   - indirizzo: Marina di Carrara, Viale Monzoni, 107/bis, 54033 Carrara MS
20. **B&B Residenza Marina** — Carrara
   - slug: `b-b-residenza-marina-carrara`
   - indirizzo: Via Venezia, 72, 54033 Marina di Carrara MS
21. **B&B Rossana** — Carrara
   - slug: `b-b-rossana-carrara`
   - indirizzo: Viale XX Settembre, 104, 54033 Carrara MS
22. **B&B Villa Belverde** — Carrara
   - slug: `b-b-villa-belverde-carrara`
   - indirizzo: Viale XX Settembre, 73, 54033 Carrara MS
23. **Exclusive - Hotel & Apartments** — Carrara
   - slug: `exclusive-hotel-apartments-carrara`
   - indirizzo: Viale Cristoforo Colombo, 57/63, 54033 Carrara MS
24. **Fattoria Battilana** — Carrara
   - slug: `fattoria-battilana-carrara`
   - indirizzo: Via Ca' Marchetti, 7A, 54033 Carrara MS
25. **Hotel Atlantic** — Carrara
   - slug: `hotel-atlantic-carrara`
   - indirizzo: Viale Amerigo Vespucci, 36, 54033 Marina di Carrara MS
26. **Hotel Carrara** — Carrara
   - slug: `hotel-carrara-carrara`
   - indirizzo: Via Enzo Petacchi, 21, 54033 Carrara MS
27. **Hotel Eco del Mare** — Carrara
   - slug: `hotel-eco-del-mare-carrara`
   - indirizzo: Via Verona, 1, 54100 Marina di Massa MS
28. **Hotel Eura** — Carrara
   - slug: `hotel-eura-carrara`
   - indirizzo: Via delle Pinete, 1, 54100 Marina di Massa MS
29. **Hotel Gabrini** — Carrara
   - slug: `hotel-gabrini-carrara`
   - indirizzo: Via Don Luigi Sturzo, 19, 54100 Marina di Massa MS
30. **Hotel La Pineta** — Carrara
   - slug: `hotel-la-pineta-carrara`
   - indirizzo: Viale Cristoforo Colombo, 119 bis, 54033 Marina di Carrara MS
31. **Hotel Luna** — Carrara
   - slug: `hotel-luna-carrara`
   - indirizzo: Via Tornaboni, 17, 54100 Marina di Massa MS
32. **Hotel Marina** — Carrara
   - slug: `hotel-marina-carrara`
   - indirizzo: Via Magliano, 3, 54039 Massa MS
33. **Hotel Roma** — Carrara
   - slug: `hotel-roma-carrara`
   - indirizzo: Piazza Giovanni Pellerano, 16, 54100 Marina di Massa MS
34. **Hotel Villa Tiziana** — Carrara
   - slug: `hotel-villa-tiziana-carrara`
   - indirizzo: Via delle Pinete, 266/A, 54100 Marina di Massa MS
35. **Sally's B&B** — Carrara
   - slug: `sally-s-b-b-carrara`
   - indirizzo: Via Casalina, 18A, 54033 Carrara MS