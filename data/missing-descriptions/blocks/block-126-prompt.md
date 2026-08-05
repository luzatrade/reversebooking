# Blocco 126/500 — 35 strutture senza descrizione IT

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

1. **B&B Le Palme** — Appiano Gentile
   - slug: `b-b-le-palme-appiano-gentile`
   - indirizzo: Via Ferloni, 33, 22070 Bulgarograsso CO
2. **Bed & Breakfast Indi Thelar** — Appiano Gentile
   - slug: `bed-breakfast-indi-thelar-appiano-gentile`
   - indirizzo: Via San Francesco d'Assisi, 40, 22079 Villa Guardia CO
3. **Convo Al Lago** — Appiano Gentile
   - slug: `convo-al-lago-appiano-gentile`
   - indirizzo: Via Benedetto e Antonio Maria Crespi, 4, 22100 Como CO
4. **Dreamhotel** — Appiano Gentile
   - slug: `dreamhotel-appiano-gentile`
   - indirizzo: Via Vignetta, 22070 Appiano Gentile CO
5. **Hotel Cruise** — Appiano Gentile
   - slug: `hotel-cruise-appiano-gentile`
   - indirizzo: Via Carducci, 3, 22070 Montano Lucino CO
6. **Hotel delle Fiere** — Appiano Gentile
   - slug: `hotel-delle-fiere-appiano-gentile`
   - indirizzo: Via Trieste, Via Piccinelli, 29, 22076 Mozzate CO
7. **Hotel ibis Como - Grandate** — Appiano Gentile
   - slug: `hotel-ibis-como-grandate-appiano-gentile`
   - indirizzo: Via Tornese, 7, 22070 Grandate CO
8. **Hotel Ristorante Marinoni** — Appiano Gentile
   - slug: `hotel-ristorante-marinoni-appiano-gentile`
   - indirizzo: Via Cavour, 3, 22074 Lomazzo CO
9. **Hotel RossoVino** — Appiano Gentile
   - slug: `hotel-rossovino-appiano-gentile`
   - indirizzo: V.le Risorgimento, 18/A, 22100 Como CO
10. **Il Faggio Rosso** — Appiano Gentile
   - slug: `il-faggio-rosso-appiano-gentile`
   - indirizzo: Via Petagna, 22A, 22070 Appiano Gentile CO
11. **Just Hotel Lomazzo** — Appiano Gentile
   - slug: `just-hotel-lomazzo-appiano-gentile`
   - indirizzo: Via Ceresio, 49, 22074 Lomazzo CO
12. **Saso’ - Casa di charme e relax** — Appiano Gentile
   - slug: `saso-casa-di-charme-e-relax-appiano-gentile`
   - indirizzo: Via Sinigaglia, 33, 22075 Lurate Caccivio CO
13. **Victoria Rooms** — Appiano Gentile
   - slug: `victoria-rooms-appiano-gentile`
   - indirizzo: V.le Innocenzo XI, 75, 22100 Como CO
14. **Villa Scalabrini Como** — Appiano Gentile
   - slug: `villa-scalabrini-como-appiano-gentile`
   - indirizzo: Via G. B. Scalabrini, 19, 22100 Como CO
15. **Appiano Sulla Strada Del vino** — Appiano sulla strada del vino/Eppan an der Weinstra�e
   - slug: `appiano-sulla-strada-del-vino-appiano-sulla-strada-del-vino-ep`
   - indirizzo: 39057 Appiano Sulla Strada del Vino BZ
16. **APPIUS DESIGN SUITES - your place to enjoy** — Appiano sulla strada del vino/Eppan an der Weinstra�e
   - slug: `appius-design-suites-your-place-to-enjoy-appiano-sulla-strada-del-vino-ep`
   - indirizzo: Via delle Castagne, 10, 39057 Appiano sulla strada del vino BZ
17. **Hotel Weinberg** — Appiano sulla strada del vino/Eppan an der Weinstra�e
   - slug: `hotel-weinberg-appiano-sulla-strada-del-vino-ep`
   - indirizzo: Via Luziafeld, 3, 39050 San Paolo BZ
18. **Kreuzstein - Bar - Bed&Breakfast** — Appiano sulla strada del vino/Eppan an der Weinstra�e
   - slug: `kreuzstein-bar-bed-breakfast-appiano-sulla-strada-del-vino-ep`
   - indirizzo: Bergweg, 60, 39057 Appiano sulla strada del vino BZ
19. **Agriturismo i Mori** — Appignano
   - slug: `agriturismo-i-mori-appignano`
   - indirizzo: Via Pettovallone, 1, 62011 Cingoli MC
20. **AGRITURISMO IL CONFINE - Treia - Marche** — Appignano
   - slug: `agriturismo-il-confine-treia-marche-appignano`
   - indirizzo: Contrada Schito, 85A, 62010 Treia MC
21. **Arcadia Hotel Macerata** — Appignano
   - slug: `arcadia-hotel-macerata-appignano`
   - indirizzo: Via Padre Matteo Ricci, 134, 62100 Macerata MC
22. **Best Western Hotel I Colli Macerata** — Appignano
   - slug: `best-western-hotel-i-colli-macerata-appignano`
   - indirizzo: Via Roma, 151, 62100 Macerata MC
23. **Country House Binnella** — Appignano
   - slug: `country-house-binnella-appignano`
   - indirizzo: Via Saltregna, 3, 62011 Cingoli MC
24. **Domus San Giuliano** — Appignano
   - slug: `domus-san-giuliano-appignano`
   - indirizzo: Via Cincinelli, 4, 62100 Macerata MC
25. **Hotel Grimaldi** — Appignano
   - slug: `hotel-grimaldi-appignano`
   - indirizzo: Corso Italia Libera, 9, 62010 Treia MC
26. **Hotel Lauri** — Appignano
   - slug: `hotel-lauri-appignano`
   - indirizzo: Via Tommaso Lauri, 6, 62100 Macerata MC
27. **Il Giardino Dei Limoni** — Appignano
   - slug: `il-giardino-dei-limoni-appignano`
   - indirizzo: Contrada Rinaldi, 16, 62010 Montecassiano MC
28. **La Vecchia Scuola** — Appignano
   - slug: `la-vecchia-scuola-appignano`
   - indirizzo: Contrada Monocchia, 13/14, 62010 Montefano MC
29. **Le Case Ristorante e Resort** — Appignano
   - slug: `le-case-ristorante-e-resort-appignano`
   - indirizzo: Contrada Mozzavinci, 16/17, 62100 Macerata MC
30. **OH! Outdoor Hostel San Lorenzo** — Appignano
   - slug: `oh-outdoor-hostel-san-lorenzo-appignano`
   - indirizzo: Contrada S. Lorenzo, 13, 62010 Treia MC
31. **Osteria dei Segreti Spa Resort** — Appignano
   - slug: `osteria-dei-segreti-spa-resort-appignano`
   - indirizzo: Contrada Verdefiore, 41, 62010 Appignano MC
32. **Recina Hotel** — Appignano
   - slug: `recina-hotel-appignano`
   - indirizzo: Via Alcide De Gasperi, 62100 Macerata MC
33. **Relais Il Margarito** — Appignano
   - slug: `relais-il-margarito-appignano`
   - indirizzo: Contrada Intriglione, 8, 62010 Montefano MC
34. **Relais La Colombaia** — Appignano
   - slug: `relais-la-colombaia-appignano`
   - indirizzo: Contrada Carreggiano, 62010 Appignano MC
35. **Ristorante Country House La Colombaia** — Appignano
   - slug: `ristorante-country-house-la-colombaia-appignano`
   - indirizzo: Contrada Carreggiano, 10, 62010 Appignano MC