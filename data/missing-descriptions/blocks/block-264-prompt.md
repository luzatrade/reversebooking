# Blocco 264/500 — 35 strutture senza descrizione IT

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

1. **BNBIZ Coworking Hotel** — Besenzone
   - slug: `bnbiz-coworking-hotel-besenzone`
   - indirizzo: Corso Giuseppe Garibaldi, 127, 29017 Fiorenzuola d'Arda PC
2. **Hotel & Loisirs "Le Ruote"** — Besenzone
   - slug: `hotel-loisirs-le-ruote-besenzone`
   - indirizzo: Via Emilia, 204, 29010 Roveleto PC
3. **HOTEL BASTIMENTO** — Besenzone
   - slug: `hotel-bastimento-besenzone`
   - indirizzo: Via XX Settembre, 54, 29017 Fiorenzuola d'Arda PC
4. **Hotel Centrale** — Besenzone
   - slug: `hotel-centrale-besenzone`
   - indirizzo: Largo Umberto I, 29016 Cortemaggiore PC
5. **Hotel Motel Fiore** — Besenzone
   - slug: `hotel-motel-fiore-besenzone`
   - indirizzo: Localita' Barabasca, 29017 Fiorenzuola d'Arda PC
6. **Hotel Route 9** — Besenzone
   - slug: `hotel-route-9-besenzone`
   - indirizzo: Via Emilia Parmense , 21 29010, 29010 Fontana Fredda PC
7. **La Tavola Rotonda** — Besenzone
   - slug: `la-tavola-rotonda-besenzone`
   - indirizzo: Via Piacenza, 35, 29016 Chiavenna Landi PC
8. **Locanda Da Romano** — Besenzone
   - slug: `locanda-da-romano-besenzone`
   - indirizzo: Via Emilia, 71, 29010 Cadeo PC
9. **Locanda Del Re Guerriero** — Besenzone
   - slug: `locanda-del-re-guerriero-besenzone`
   - indirizzo: Via Melchiorre Gioia, 5, 29010 San Pietro In Cerro PC
10. **Ristorante Trattoria Albergo Sole** — Besenzone
   - slug: `ristorante-trattoria-albergo-sole-besenzone`
   - indirizzo: Piazza Giacomo Matteotti, 10, 43011 Busseto PR
11. **Room & Breakfast Fermo della Guazzona** — Besenzone
   - slug: `room-breakfast-fermo-della-guazzona-besenzone`
   - indirizzo: Str. Consolatico Superiore, 56, 43011 Busseto PR
12. **B&B Quattro Stagioni** — Besnate
   - slug: `b-b-quattro-stagioni-besnate`
   - indirizzo: Via Crugnola, 6, 21010 Besnate VA
13. **La Corte Del Gallo** — Besnate
   - slug: `la-corte-del-gallo-besnate`
   - indirizzo: Via Don G. Frippo, 8, 21013 Gallarate VA
14. **Villa Lidya Malpensa** — Besnate
   - slug: `villa-lidya-malpensa-besnate`
   - indirizzo: Via Marche, 2, 21013 Gallarate VA
15. **B&B da Gaia e Giulio** — Besozzo
   - slug: `b-b-da-gaia-e-giulio-besozzo`
   - indirizzo: Via Venezia, 2, 21038 Leggiuno VA
16. **B&B Dei Laghi** — Besozzo
   - slug: `b-b-dei-laghi-besozzo`
   - indirizzo: Via IV Novembre, 12, 21020 Brebbia VA
17. **B&B Quercia** — Besozzo
   - slug: `b-b-quercia-besozzo`
   - indirizzo: Via Lago, 49, 21023 Besozzo VA
18. **B&B Villa Buzzi** — Besozzo
   - slug: `b-b-villa-buzzi-besozzo`
   - indirizzo: Via del Pozzo, 21023 Besozzo VA
19. **Bed and Breakfast "Il bel Giardinetto" Lago Maggiore** — Besozzo
   - slug: `bed-and-breakfast-il-bel-giardinetto-lago-maggio-besozzo`
   - indirizzo: Via G. Quaglia, 8, 21023 Besozzo VA
20. **Bed and Breakfast Il Sass Lago Maggiore** — Besozzo
   - slug: `bed-and-breakfast-il-sass-lago-maggiore-besozzo`
   - indirizzo: Via Masserano, 35/c, 21023 Besozzo VA
21. **Villa Magnolia Lago Maggiore** — Besozzo
   - slug: `villa-magnolia-lago-maggiore-besozzo`
   - indirizzo: Via Sant' Alessandro, 3, 21023 Besozzo VA
22. **La casa delle fate** — Bessude
   - slug: `la-casa-delle-fate-bessude`
   - indirizzo: Via Vincenzo Gioberti, 14, 07010 Giave SS
23. **Agriturismo L'Urteia** — Bettola
   - slug: `agriturismo-l-urteia-bettola`
   - indirizzo: Viale Guglielmo Marconi, 56 Loc, 29029 Vei PC
24. **Albergo Bar Ristorante "Vecchio Mulino"** — Bettola
   - slug: `albergo-bar-ristorante-vecchio-mulino-bettola`
   - indirizzo: Bar - Ristorante - Locanda, Via Genova, 32, 29022 Bobbio PC
25. **Albergo Del Turista srl** — Bettola
   - slug: `albergo-del-turista-srl-bettola`
   - indirizzo: Via Guglielmo Marconi, 35, 29010 Vernasca PC
26. **Albergo Ristorante La Vecchia Quercia** — Bettola
   - slug: `albergo-ristorante-la-vecchia-quercia-bettola`
   - indirizzo: Via Gino Bianchi, 5, 29021 Bettola PC
27. **Albergo Ristorante Piacentino** — Bettola
   - slug: `albergo-ristorante-piacentino-bettola`
   - indirizzo: Piazza S. Francesco, 19, 29022 Bobbio PC
28. **B&b Boblin blu** — Bettola
   - slug: `b-b-boblin-blu-bettola`
   - indirizzo: Località Maiolo, 46, 29021 Bettola PC
29. **B&B La Forgia** — Bettola
   - slug: `b-b-la-forgia-bettola`
   - indirizzo: Località Negri, 29021 Negri PC
30. **Da Nando Antica Osteria Hotel** — Bettola
   - slug: `da-nando-antica-osteria-hotel-bettola`
   - indirizzo: Frazione Godi, 19, 29019 Godi PC
31. **Grazzano Antica Stazione** — Bettola
   - slug: `grazzano-antica-stazione-bettola`
   - indirizzo: Via Stazione, 1, 29020 Grazzano Visconti PC
32. **Il Portichetto Rivergaro** — Bettola
   - slug: `il-portichetto-rivergaro-bettola`
   - indirizzo: Via dei Borzoli, 6, 29029 Rivergaro PC
33. **L'angolo nascosto** — Bettola
   - slug: `l-angolo-nascosto-bettola`
   - indirizzo: V. Rallio, 189, 29029 Rallio PC
34. **La Locanda dei Cavalieri** — Bettola
   - slug: `la-locanda-dei-cavalieri-bettola`
   - indirizzo: Via Ca Ciani, 1, 29018 Lugagnano Val d'Arda PC
35. **Nuova Pensione San Giuseppe** — Bettola
   - slug: `nuova-pensione-san-giuseppe-bettola`
   - indirizzo: Via del Pozzone, 3, 29019 San Damiano PC