# Blocco 494/500 — 35 strutture senza descrizione IT

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

1. **Eight Paraggi** — Portofino
   - slug: `eight-paraggi-portofino`
   - indirizzo: Via Paraggi a mare, 8, 16038 Santa Margherita Ligure GE
2. **Hotel Argentina Portofino** — Portofino
   - slug: `hotel-argentina-portofino-portofino`
   - indirizzo: Via Paraggi a Monte, 56, 16038 Santa Margherita Ligure GE
3. **Hotel Eden** — Portofino
   - slug: `hotel-eden-portofino`
   - indirizzo: Vico Dritto, 18/20, 16034 Portofino GE
4. **Hotel Nazionale** — Portofino
   - slug: `hotel-nazionale-portofino`
   - indirizzo: Vico Dritto, 3, 16034 Portofino GE
5. **Hotel Piccolo Portofino** — Portofino
   - slug: `hotel-piccolo-portofino-portofino`
   - indirizzo: Via Duca degli Abruzzi, 31, 16034 Portofino GE
6. **Splendido Mare, A Belmond Hotel, Portofino** — Portofino
   - slug: `splendido-mare-a-belmond-hotel-portofino-portofino`
   - indirizzo: Via Roma, 2, 16034 Portofino GE
7. **Splendido, a Belmond Hotel,** — Portofino
   - slug: `splendido-a-belmond-hotel-portofino`
   - indirizzo: Viale Baratta, 16, 16034 Portofino GE
8. **Villa Beatrice** — Portofino
   - slug: `villa-beatrice-portofino`
   - indirizzo: Via Duca degli Abruzzi, 60, 16034 Portofino GE
9. **City-Inn Hotel** — Prague
   - slug: `city-inn-hotel-prague`
   - indirizzo: Hybernská 13, 110 00 Praha 1-Nové Město
10. **Golden City Hotel Garni** — Prague
   - slug: `golden-city-hotel-garni-prague`
   - indirizzo: Táboritská 913/3, 130 00 Praha 3-Žižkov
11. **Hotel City - Central** — Prague
   - slug: `hotel-city-central-prague`
   - indirizzo: Sokolská 1492/21, 120 00 Praha 2-Nové Město
12. **Hotel City Bell Praha** — Prague
   - slug: `hotel-city-bell-praha-prague`
   - indirizzo: Belgická 10, 120 00 Praha 2-Vinohrady
13. **Hotel City Centre** — Prague
   - slug: `hotel-city-centre-prague`
   - indirizzo: Revoluční 1081/4, Nové Město, 110 00 Praha-Praha 1
14. **Hotel NH Collection Prague Carlo IV** — Prague
   - slug: `hotel-nh-collection-prague-carlo-iv-prague`
   - indirizzo: Senovážné nám. 13/991, Nové Město, 110 00 Praha-Praha 1
15. **Hotel Prague Center Superior** — Prague
   - slug: `hotel-prague-center-superior-prague`
   - indirizzo: Legerova 1844/32, 120 00 Praha 2-Nové Město
16. **Hotel Prague Centre Plaza** — Prague
   - slug: `hotel-prague-centre-plaza-prague`
   - indirizzo: Fügnerovo nám. 1806 /1, Nové Město, 120 00 Praha-Praha 2
17. **Hotel Trevi** — Prague
   - slug: `hotel-trevi-prague`
   - indirizzo: Záhřebská 562/41, 120 00 Praha 2-Vinohrady
18. **Hotel UNIQUE** — Prague
   - slug: `hotel-unique-prague`
   - indirizzo: Uruguayská 540/20, Vinohrady, 120 00 Praha-Praha 2
19. **ibis Praha Old Town** — Prague
   - slug: `ibis-praha-old-town-prague`
   - indirizzo: Na Poříčí 5, Nové Město, 110 00 Praha-Praha 1
20. **Prague City hotel** — Prague
   - slug: `prague-city-hotel-prague`
   - indirizzo: 13, Štítného 363, 130 00 Praha 3-Žižkov
21. **Prague Season Hotel** — Prague
   - slug: `prague-season-hotel-prague`
   - indirizzo: Legerova 24, Nové Město, 120 00 Praha-Praha 2
22. **Ramada by Wyndham Prague City Centre** — Prague
   - slug: `ramada-by-wyndham-prague-city-centre-prague`
   - indirizzo: 41, Václavské nám. 820, 110 00 Praha 1-Nové Město
23. **Wenceslas Square Hotel** — Prague
   - slug: `wenceslas-square-hotel-prague`
   - indirizzo: 13, Mezibranská 1450, Nové Město, 110 00 Praha-Praha 1
24. **Caruso, A Belmond Hotel, Amalfi Coast** — Ravello
   - slug: `caruso-a-belmond-hotel-amalfi-coast-ravello`
   - indirizzo: Piazza S. Giovanni del Toro, 2, 84010 Ravello SA
25. **Garden Ravello Hotel** — Ravello
   - slug: `garden-ravello-hotel-ravello`
   - indirizzo: Via Giovanni Boccaccio, 4, 84010 Ravello SA
26. **Hotel Bonadies** — Ravello
   - slug: `hotel-bonadies-ravello`
   - indirizzo: Piazza Fontana Moresca, 5, 84010 Ravello SA
27. **Hotel Giordano** — Ravello
   - slug: `hotel-giordano-ravello`
   - indirizzo: Via Santissima Trinità, 14, 84010 Ravello SA
28. **Hotel Graal** — Ravello
   - slug: `hotel-graal-ravello`
   - indirizzo: Via della Repubblica, 8, 84010 Ravello SA
29. **Hotel La Moresca** — Ravello
   - slug: `hotel-la-moresca-ravello`
   - indirizzo: Piazza Fontana Moresca, 8, 84010 Ravello SA
30. **Hotel Palazzo Confalone** — Ravello
   - slug: `hotel-palazzo-confalone-ravello`
   - indirizzo: Via S. Giovanni del Toro, 16, 84010 Ravello SA
31. **Hotel Rufolo** — Ravello
   - slug: `hotel-rufolo-ravello`
   - indirizzo: Via S. Francesco, 1, 84010 Ravello SA
32. **Hotel Toro** — Ravello
   - slug: `hotel-toro-ravello`
   - indirizzo: Via Roma, 16, 84010 Ravello SA
33. **Hotel Villa Fraulo** — Ravello
   - slug: `hotel-villa-fraulo-ravello`
   - indirizzo: Via Giovanni Boccaccio, 7, 84010 Ravello SA
34. **Palazzo Avino** — Ravello
   - slug: `palazzo-avino-ravello`
   - indirizzo: Via S. Giovanni del Toro, 28, 84010 Ravello SA
35. **Ravello Art Hotel Marmorata** — Ravello
   - slug: `ravello-art-hotel-marmorata-ravello`
   - indirizzo: Via Bizantina, 3, 84010 Marmorata SA