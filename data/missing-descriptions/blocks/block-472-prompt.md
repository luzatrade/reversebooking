# Blocco 472/500 — 35 strutture senza descrizione IT

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

1. **Marina di Petrolo Hotel & SPA** — Castellammare del Golfo
   - slug: `marina-di-petrolo-hotel-spa-castellammare-del-golfo`
   - indirizzo: Via Marina di Petrolo, 16, 91014 Castellammare del Golfo TP
2. **Oasi del Golfo Premium Guest House** — Castellammare del Golfo
   - slug: `oasi-del-golfo-premium-guest-house-castellammare-del-golfo`
   - indirizzo: Via Costantino, 90, 91014 Castellammare del Golfo TP
3. **White** — Castellammare del Golfo
   - slug: `white-castellammare-del-golfo`
   - indirizzo: Via Segesta, 46, 91014 Castellammare del Golfo TP
4. **Agriturismo Bergi** — Castellana Sicula
   - slug: `agriturismo-bergi-castellana-sicula`
   - indirizzo: SS 286, Km 17.60, 90013 Castelbuono PA
5. **Hotel Miramonti** — Castellana Sicula
   - slug: `hotel-miramonti-castellana-sicula`
   - indirizzo: Via Nazionale, 19, 90024 Gangi PA
6. **Hotel Ristorante alle Querce** — Castellana Sicula
   - slug: `hotel-ristorante-alle-querce-castellana-sicula`
   - indirizzo: Contrada Mandrazze, 90013 Castelbuono PA
7. **Il Castello Ristorante - Pizzeria - Albergo** — Castellana Sicula
   - slug: `il-castello-ristorante-pizzeria-albergo-castellana-sicula`
   - indirizzo: Via Generale di Maria, 27, 90027 Petralia Sottana PA
8. **La Casa del Pittore di Petralia** — Castellana Sicula
   - slug: `la-casa-del-pittore-di-petralia-castellana-sicula`
   - indirizzo: C.so Umberto I, 127, 90026 Petralia Soprana PA
9. **Masseria Xireni** — Castellana Sicula
   - slug: `masseria-xireni-castellana-sicula`
   - indirizzo: Contrada Xireni, 90020 Contrada Xireni, PA
10. **TWENTY MILES Apartments** — Castellana Sicula
   - slug: `twenty-miles-apartments-castellana-sicula`
   - indirizzo: Via Monte S. Salvatore, 85, 90020 Castellana Sicula PA
11. **Al Borgo Medievale** — Castelmola
   - slug: `al-borgo-medievale-castelmola`
   - indirizzo: Via Fortuna, 4, 98030 Castelmola ME
12. **B&B Casa Bellavista** — Castelmola
   - slug: `b-b-casa-bellavista-castelmola`
   - indirizzo: Via Tutti I Santi, 43, 98030 Castelmola ME
13. **B&B Odeon** — Castelmola
   - slug: `b-b-odeon-castelmola`
   - indirizzo: Salita Giafari, 13, 98039 Taormina ME
14. **B&B Santa Lucia** — Castelmola
   - slug: `b-b-santa-lucia-castelmola`
   - indirizzo: Via Cagli Corrado, 98039 Taormina ME
15. **Casa Blandano B&B** — Castelmola
   - slug: `casa-blandano-b-b-castelmola`
   - indirizzo: Via Papa Pio IX, 27, 98030 Castelmola ME
16. **Casa vacanze Giorgina** — Castelmola
   - slug: `casa-vacanze-giorgina-castelmola`
   - indirizzo: Via Medaglia d'Oro Calabrò Giovanni, 5, 98030 Castelmola ME
17. **Hotel Il Piccolo Giardino** — Castelmola
   - slug: `hotel-il-piccolo-giardino-castelmola`
   - indirizzo: Salita Lucio Denti, 4, 98039 Taormina ME
18. **Hotel Méditerranée** — Castelmola
   - slug: `hotel-mediterranee-castelmola`
   - indirizzo: Via Circonvallazione, 61, 98039 Taormina ME
19. **Hotel Panorama di Sicilia** — Castelmola
   - slug: `hotel-panorama-di-sicilia-castelmola`
   - indirizzo: Via Alcide de Gasperi, 44, 98030 Castelmola ME
20. **Hotel Soleado** — Castelmola
   - slug: `hotel-soleado-castelmola`
   - indirizzo: Via Dietro Cappuccini, 41, 98039 Taormina ME
21. **Hotel Villa Greta** — Castelmola
   - slug: `hotel-villa-greta-castelmola`
   - indirizzo: Via Leonardo Da Vinci, 46, 98039 Taormina ME
22. **Hotel Villa Sonia** — Castelmola
   - slug: `hotel-villa-sonia-castelmola`
   - indirizzo: Via Porta Mola, 9, 98030 Castelmola ME
23. **Luxury Suite terrazze e vista mare** — Castelmola
   - slug: `luxury-suite-terrazze-e-vista-mare-castelmola`
   - indirizzo: Via Branco, 98039 Taormina ME
24. **Panoramic Hotel** — Castelmola
   - slug: `panoramic-hotel-castelmola`
   - indirizzo: Via Nazionale, 196b, 98039 Taormina ME
25. **Sicitaly Taormina** — Castelmola
   - slug: `sicitaly-taormina-castelmola`
   - indirizzo: Via Roberto Rimini, 98039 Taormina ME
26. **Splendid Hotel Taormina** — Castelmola
   - slug: `splendid-hotel-taormina-castelmola`
   - indirizzo: Via Dietro Cappuccini, 10, 98039 Taormina ME
27. **The View Luxury Apartments Taormina** — Castelmola
   - slug: `the-view-luxury-apartments-taormina-castelmola`
   - indirizzo: Via Leonardo Da Vinci, 97c, 98039 Taormina ME
28. **U Palmentu** — Castelmola
   - slug: `u-palmentu-castelmola`
   - indirizzo: Tra l'Hotel Sole Castello e il Ristorante Al Saraceno, Via Madonna della Rocca, 14, 98039 Taormina ME
29. **Villa Mabel Boutique Hotel** — Castelmola
   - slug: `villa-mabel-boutique-hotel-castelmola`
   - indirizzo: Salita Acropoli, 11, 98039 Taormina ME
30. **Villa Regina Castelmola** — Castelmola
   - slug: `villa-regina-castelmola-castelmola`
   - indirizzo: Via San Giorgio, 98030 Castelmola ME
31. **B&B Rose Rosse - Sicily Holiday House** — Casteltermini
   - slug: `b-b-rose-rosse-sicily-holiday-house-casteltermini`
   - indirizzo: Via Manzoni, 32, 92020 Racalmuto AG
32. **B&B Sogno e Luce** — Casteltermini
   - slug: `b-b-sogno-e-luce-casteltermini`
   - indirizzo: Via Camillo Benso Conte di Cavour, 55, 92020 Racalmuto AG
33. **Agrisicilia** — Castelvetrano
   - slug: `agrisicilia-castelvetrano`
   - indirizzo: Via Leandro, Marinella di Selinunte, 91022 Castelvetrano TP
34. **B&B Camagna Country House** — Castelvetrano
   - slug: `b-b-camagna-country-house-castelvetrano`
   - indirizzo: camagna country house, Strada Provinciale Partanna - Gibellina, 91028 Partanna TP
35. **B&B del Corso** — Castelvetrano
   - slug: `b-b-del-corso-castelvetrano`
   - indirizzo: Via Alessandro Manzoni, 4, 91029 Santa Ninfa TP