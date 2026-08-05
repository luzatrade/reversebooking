# Blocco 436/500 — 35 strutture senza descrizione IT

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

1. **b&b Castello Michelina** — Carfizzi
   - slug: `b-b-castello-michelina-carfizzi`
   - indirizzo: Via Ciuxa, 2, 88817 San Nicola dell'Alto KR
2. **B&B il Girasole** — Carfizzi
   - slug: `b-b-il-girasole-carfizzi`
   - indirizzo: Via Madonna di Mare, 22, 88811 Cirò Marina KR
3. **Civico17room** — Carfizzi
   - slug: `civico17room-carfizzi`
   - indirizzo: Via Francesco Borromini, Via Vittorio Emanuele, 79, 88811 Cirò Marina KR
4. **Grand Hotel Balestrieri** — Carfizzi
   - slug: `grand-hotel-balestrieri-carfizzi`
   - indirizzo: Via Litorale Nord, snc, 88814 Melissa KR
5. **Hotel Miramare** — Carfizzi
   - slug: `hotel-miramare-carfizzi`
   - indirizzo: Via Lungomare Stefano Pugliese, 146, 88811 Cirò Marina KR
6. **Mediterraneo bed and breakfast ed appartamenti** — Carfizzi
   - slug: `mediterraneo-bed-and-breakfast-ed-appartamenti-carfizzi`
   - indirizzo: Via Gattatico, 23, 88814 Melissa KR
7. **Antiche Conce rooms** — Cargeghe
   - slug: `antiche-conce-rooms-cargeghe`
   - indirizzo: Via Piandanna, 2, 07100 Sassari SS
8. **B & B Al Centro - Ossi** — Cargeghe
   - slug: `b-b-al-centro-ossi-cargeghe`
   - indirizzo: Via Statuto, 6, 07045 Ossi SS
9. **B&B Via Garibaldi** — Cargeghe
   - slug: `b-b-via-garibaldi-cargeghe`
   - indirizzo: Via Giuseppe Garibaldi, 27, 07045 Ossi SS
10. **Bed & Breakfast Sara Di Pinna Gavina** — Cargeghe
   - slug: `bed-breakfast-sara-di-pinna-gavina-cargeghe`
   - indirizzo: Via Nuraghe, 5, 07045 Ossi SS
11. **Guest House Tzia Udroni** — Cargeghe
   - slug: `guest-house-tzia-udroni-cargeghe`
   - indirizzo: Via Litterai, 28, 07045 Ossi SS
12. **Memento** — Cargeghe
   - slug: `memento-cargeghe`
   - indirizzo: Regione Luzzanas, 07045 Ossi SS
13. **Nonna Dora** — Cargeghe
   - slug: `nonna-dora-cargeghe`
   - indirizzo: Via IV Novembre, 17, 07030 Muros SS
14. **B&B SAN LORENZO CARIATI** — Cariati
   - slug: `b-b-san-lorenzo-cariati-cariati`
   - indirizzo: Via Cesare Battisti, via lungomare Cristoforo Colombo, 6, 87062 Cariati CS
15. **Corte dei Greci Resort & Spa** — Cariati
   - slug: `corte-dei-greci-resort-spa-cariati`
   - indirizzo: Piana dei Greci, 87062 Cariati Marina CS
16. **Costa Elisabeth Hotel Club Village** — Cariati
   - slug: `costa-elisabeth-hotel-club-village-cariati`
   - indirizzo: S.da Statale 106 Jonica, 88813 Cirò KR
17. **Hotel Village Paradise** — Cariati
   - slug: `hotel-village-paradise-cariati`
   - indirizzo: S.da Statale 106 Jonica, 106, 87060 Mandatoriccio Mare CS
18. **NETTUNO | Hotel Ristorante Pizzeria Lido Balneare** — Cariati
   - slug: `nettuno-hotel-ristorante-pizzeria-lido-balneare-cariati`
   - indirizzo: Via Cristoforo Colombo, 22, 87062 Cariati CS
19. **Vascellero Club Resort** — Cariati
   - slug: `vascellero-club-resort-cariati`
   - indirizzo: Contrada Vascellero, 87062 Cariati Marina CS
20. **Dimora 1924** — Carife
   - slug: `dimora-1924-carife`
   - indirizzo: Via Capitano Clementi, Via Croce, 2, 83040 Carife AV
21. **Il Palazzo Marchesale** — Carife
   - slug: `il-palazzo-marchesale-carife`
   - indirizzo: Via avvocato Michele Contardi, 1/int. 2, 83040 Carife AV
22. **Affittacamere Carignano: Tra Menta e Meliga** — Carignano
   - slug: `affittacamere-carignano-tra-menta-e-meliga-carignano`
   - indirizzo: Str. Piobesi, 25, 10041 Carignano TO
23. **Bed & Breakfast Il Carignano** — Carignano
   - slug: `bed-breakfast-il-carignano-carignano`
   - indirizzo: Vico I Principe di Carignano, 11, 09134 Cagliari CA
24. **Bed & Breakfast Renato di Savoia** — Carignano
   - slug: `bed-breakfast-renato-di-savoia-carignano`
   - indirizzo: Via Borgo Vecchio, 6, 10041 Carignano TO
25. **Hotel Carignano** — Carignano
   - slug: `hotel-carignano-carignano-2`
   - indirizzo: Via di Sant'Alessio, 3680, 55100 Lucca LU
26. **Hotel Carignano** — Carignano
   - slug: `hotel-carignano-carignano`
   - indirizzo: Viale Guglielmo Oberdan, 9, 47838 Riccione RN
27. **Il Trattore Bed & Breakfast** — Carignano
   - slug: `il-trattore-bed-breakfast-carignano`
   - indirizzo: Frazione Gorra, 29, 10024 Carignano TO
28. **b&b le magnolie** — Carimate
   - slug: `b-b-le-magnolie-carimate`
   - indirizzo: Via del Golf, 51, 22060 Carimate CO
29. **Bed and Breakfast. ViadelGolf41** — Carimate
   - slug: `bed-and-breakfast-viadelgolf41-carimate`
   - indirizzo: Strada Privata del Golf, 41, 22060 Carimate CO
30. **Castello di Carimate** — Carimate
   - slug: `castello-di-carimate-carimate`
   - indirizzo: Piazza Castello, 1, 22060 Carimate CO
31. **Lake Como Golf Hotel** — Carimate
   - slug: `lake-como-golf-hotel-carimate`
   - indirizzo: Piazza Spallino, 2, 22060 Montesolaro CO
32. **Benjoy Hotel** — Carinaro
   - slug: `benjoy-hotel-carinaro`
   - indirizzo: Via Martiri Atellani, 6, 81030 Sant'Arpino CE
33. **Building Hotel Caserta** — Carinaro
   - slug: `building-hotel-caserta-carinaro`
   - indirizzo: Zona Industriale, 81032 Carinaro CE
34. **Hangar Hotel** — Carinaro
   - slug: `hangar-hotel-carinaro`
   - indirizzo: Aversa Nord, Str. Consortile, 81031 Asi CE
35. **Hotel Briganti** — Carinaro
   - slug: `hotel-briganti-carinaro`
   - indirizzo: SP1, 40, 80019 Qualiano NA