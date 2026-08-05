# Blocco 314/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Risorgimento** — Bovezzo
   - slug: `albergo-ristorante-risorgimento-bovezzo`
   - indirizzo: Via Triumplina, 238, 25136 Brescia BS
2. **B & B Campanì** — Bovezzo
   - slug: `b-b-campani-bovezzo`
   - indirizzo: Via G. Cesare Abba, 6, 25064 Gussago BS
3. **Bed and Breakfast La Pieve** — Bovezzo
   - slug: `bed-and-breakfast-la-pieve-bovezzo`
   - indirizzo: Via Antonio Gramsci, 33, 25062 Concesio BS
4. **Casa Marcolini Facella Fondazione Padre Marcolini** — Bovezzo
   - slug: `casa-marcolini-facella-fondazione-padre-marcolin-bovezzo`
   - indirizzo: Via delle Grazzine, 14, 25128 Brescia BS
5. **Dimore Morelli Brescia** — Bovezzo
   - slug: `dimore-morelli-brescia-bovezzo`
   - indirizzo: P.le Spedali Civili, 27, 25123 Brescia BS
6. **DoubleTree by Hilton Brescia** — Bovezzo
   - slug: `doubletree-by-hilton-brescia-bovezzo`
   - indirizzo: Viale Europa, 45, 25133 Brescia BS
7. **Hotel Impero** — Bovezzo
   - slug: `hotel-impero-bovezzo`
   - indirizzo: Via Triumplina, 6, 25123 Brescia BS
8. **La Valle B&B** — Bovezzo
   - slug: `la-valle-b-b-bovezzo`
   - indirizzo: Via Ottaviano Montini, 119, 25133 Brescia BS
9. **Locanda del Pesco** — Bovezzo
   - slug: `locanda-del-pesco-bovezzo`
   - indirizzo: Via Trento, 33, 25060 Collebeato BS
10. **Villa Beatrice Bed&Breakfast** — Bovezzo
   - slug: `villa-beatrice-bed-breakfast-bovezzo`
   - indirizzo: Via Val di Fiemme, 29, 25123 Brescia BS
11. **B&B Il Melograno** — Boville Ernica
   - slug: `b-b-il-melograno-boville-ernica`
   - indirizzo: Via Umberto I, 36, 03029 Veroli FR
12. **L'Uliveto - Ristorante,Albergo,Pizzeria,Piscina** — Boville Ernica
   - slug: `l-uliveto-ristorante-albergo-pizzeria-piscina-boville-ernica`
   - indirizzo: Via Colle Capito, 160, 03029 Veroli FR
13. **B&B Abatjour** — Bovino
   - slug: `b-b-abatjour-bovino`
   - indirizzo: Via Piave, 10, 71121 Foggia FG
14. **B&B La Casetta di Nonna Carmela** — Bovino
   - slug: `b-b-la-casetta-di-nonna-carmela-bovino`
   - indirizzo: Piazza Bizantina, 6, 71023 Bovino FG
15. **B&B Lei** — Bovino
   - slug: `b-b-lei-bovino`
   - indirizzo: Viale XXIV Maggio, 33, 71121 Foggia FG
16. **B&B Maison Reale** — Bovino
   - slug: `b-b-maison-reale-bovino`
   - indirizzo: Via Camporeale km 1,100, Via Camporeale, 71122 Foggia FG
17. **B&B Residenza Ducale** — Bovino
   - slug: `b-b-residenza-ducale-bovino`
   - indirizzo: Via Guevara, 5, 71023 Bovino FG
18. **Bed & Breakfast La Posta** — Bovino
   - slug: `bed-breakfast-la-posta-bovino`
   - indirizzo: Piazza Conti di Loretello, 71023 Bovino FG
19. **Hotel Europa** — Bovino
   - slug: `hotel-europa-bovino`
   - indirizzo: Via Monfalcone, 52, 71121 Foggia FG
20. **Hotel Up - Wellness & Spa** — Bovino
   - slug: `hotel-up-wellness-spa-bovino`
   - indirizzo: Via Trieste, 14, 71121 Foggia FG
21. **La casetta dei racconti** — Bovino
   - slug: `la-casetta-dei-racconti-bovino`
   - indirizzo: Via Vincenzo Barone, 1, 71023 Bovino FG
22. **LE STAGIONI DELLA VITA** — Bovino
   - slug: `le-stagioni-della-vita-bovino`
   - indirizzo: Via Michelangelo Buonarroti, 16, 71023 Bovino FG
23. **Bar Hotel Ristorante Golfetto** — Bovisio-Masciago
   - slug: `bar-hotel-ristorante-golfetto-bovisio-masciago`
   - indirizzo: Viale Brianza, 106, 20814 Varedo MB
24. **Dalla Linda B&B** — Bovisio-Masciago
   - slug: `dalla-linda-b-b-bovisio-masciago`
   - indirizzo: Via Reali, 68, 20037 Paderno Dugnano MI
25. **Hotel Bristol** — Bovisio-Masciago
   - slug: `hotel-bristol-bovisio-masciago`
   - indirizzo: Via Fratelli Bandiera, 100, 20099 Sesto San Giovanni MI
26. **Hotel San Carlo** — Bovisio-Masciago
   - slug: `hotel-san-carlo-bovisio-masciago`
   - indirizzo: Via Friuli, 41, 20031 Cesano Maderno MB
27. **Hotel Victoria** — Bovisio-Masciago
   - slug: `hotel-victoria-bovisio-masciago`
   - indirizzo: Via Como, 7, 20039 Varedo MB
28. **Hotel York** — Bovisio-Masciago
   - slug: `hotel-york-bovisio-masciago`
   - indirizzo: Viale Marche, 19, 20092 Cinisello Balsamo MI
29. **Pensione Paradiso** — Bovisio-Masciago
   - slug: `pensione-paradiso-bovisio-masciago`
   - indirizzo: Via Magenta, 13, 20024 Garbagnate Milanese MI
30. **Agriturismo Villa Greggio Di Greggio Liana & C. S.S. Agricola** — Bovolenta
   - slug: `agriturismo-villa-greggio-di-greggio-liana-c-s-s-bovolenta`
   - indirizzo: Via S. Martino, 9, 35020 Casalserugo PD
31. **Hotel Diana** — Bovolenta
   - slug: `hotel-diana-bovolenta`
   - indirizzo: Via Romea, 136, 35020 Legnaro PD
32. **Va Oltre - La Tenuta** — Bovolenta
   - slug: `va-oltre-la-tenuta-bovolenta`
   - indirizzo: Via Candiana, 2, 35024 Bovolenta PD
33. **Villa Casa Country** — Bovolenta
   - slug: `villa-casa-country-bovolenta`
   - indirizzo: Via Gorgo, 35024 Bovolenta PD
34. **Best Western CTC Hotel Verona** — Bovolone
   - slug: `best-western-ctc-hotel-verona-bovolone`
   - indirizzo: Via Monte Pastello, 28, 37057 San Giovanni Lupatoto VR
35. **Borgocinquanta** — Bovolone
   - slug: `borgocinquanta-bovolone`
   - indirizzo: Via Doltra, 50, 37063 Isola della Scala VR