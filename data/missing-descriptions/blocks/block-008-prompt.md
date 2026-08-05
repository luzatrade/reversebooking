# Blocco 8/500 — 35 strutture senza descrizione IT

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

1. **CBH Sicitaly Group** — Aci Castello
   - slug: `cbh-sicitaly-group-aci-castello`
   - indirizzo: Via Piave, 25, 95021 Aci Castello CT
2. **Ciclope Resort** — Aci Castello
   - slug: `ciclope-resort-aci-castello`
   - indirizzo: Via Provinciale, 3, 95021 Aci Castello CT
3. **Four Points by Sheraton Catania** — Aci Castello
   - slug: `four-points-by-sheraton-catania-aci-castello`
   - indirizzo: Via Antonello Da Messina 45 Aci Castello, 95021 Catania, CT
4. **Grand Hotel Baia Verde** — Aci Castello
   - slug: `grand-hotel-baia-verde-aci-castello`
   - indirizzo: Via Angelo Musco, 8, 95021 Aci Castello CT
5. **GRAND HOTEL FARAGLIONI** — Aci Castello
   - slug: `grand-hotel-faraglioni-aci-castello`
   - indirizzo: Via Lungomare Dei Ciclopi, 115, 95021 Aci Castello CT
6. **Hello B&B** — Aci Castello
   - slug: `hello-b-b-aci-castello`
   - indirizzo: Via Pantolla, 3, 95021 Aci Trezza CT
7. **La Scogliera In - Bed & Breakfast** — Aci Castello
   - slug: `la-scogliera-in-bed-breakfast-aci-castello`
   - indirizzo: Via Domenico Tempio, 8, 95021 Aci Castello CT
8. **La Terrazza sul Mare** — Aci Castello
   - slug: `la-terrazza-sul-mare-aci-castello`
   - indirizzo: Via Fornace, 20, 95021 Aci Castello CT
9. **Lachea Hotel** — Aci Castello
   - slug: `lachea-hotel-aci-castello`
   - indirizzo: Via Cardinale Dusmet, 4, 95021 Aci Castello CT
10. **Oasi Perla del Mare - Bed&Breakfast** — Aci Castello
   - slug: `oasi-perla-del-mare-bed-breakfast-aci-castello`
   - indirizzo: Via Sciarelli, 55, 95021 Aci Castello CT
11. **President Park Hotel** — Aci Castello
   - slug: `president-park-hotel-aci-castello`
   - indirizzo: Via Vampolieri, 49, 95021 Aci Castello CT
12. **Sicilia's - Residence Hotel - Art & Spa** — Aci Castello
   - slug: `sicilia-s-residence-hotel-art-spa-aci-castello`
   - indirizzo: Via dei Tigli, 3, 95022 Aci Catena CT
13. **SicItaly Acicastello** — Aci Castello
   - slug: `sicitaly-acicastello-aci-castello`
   - indirizzo: Via Piave, 23, 95021 Aci Castello CT
14. **Zeus Residence Hotel - Aparthotel - Meeting & Congress Catania** — Aci Castello
   - slug: `zeus-residence-hotel-aparthotel-meeting-congress-aci-castello`
   - indirizzo: Via Antonello da Messina, 8, 95021 Aci Castello CT
15. **Best Western Hotel Santa Caterina** — Aci Catena
   - slug: `best-western-hotel-santa-caterina-aci-catena`
   - indirizzo: Via Santa Caterina, 42B, 95024 Acireale CT
16. **CASA VACANZE SOLE DELLE ACI** — Aci Catena
   - slug: `casa-vacanze-sole-delle-aci-aci-catena`
   - indirizzo: Via Dante Alighieri, 30, 95025 Aci Sant'Antonio CT
17. **Grande Albergo Maugeri** — Aci Catena
   - slug: `grande-albergo-maugeri-aci-catena`
   - indirizzo: Piazza Giuseppe Garibaldi, 27, 95024 Acireale CT
18. **Il vecchio sentiero** — Aci Catena
   - slug: `il-vecchio-sentiero-aci-catena`
   - indirizzo: Via Aranci, 61, 95024 Acireale CT
19. **San Nicolò** — Aci Catena
   - slug: `san-nicolo-aci-catena`
   - indirizzo: Via S. Nicolò, 151, 95022 Aci Catena CT
20. **Wave Hotel** — Aci Catena
   - slug: `wave-hotel-aci-catena`
   - indirizzo: Viale della Fiera Franca, 33, 95024 Acireale CT
21. **B&B Vicolo del Chiostro** — Aci Sant'Antonio
   - slug: `b-b-vicolo-del-chiostro-aci-sant-antonio`
   - indirizzo: Via Don Giovanni Bosco, 3, 95025 Aci Sant'Antonio CT
22. **BeB Casa di Mari** — Aci Sant'Antonio
   - slug: `beb-casa-di-mari-aci-sant-antonio`
   - indirizzo: Via Dante Alighieri, 16, 95025 Aci Sant'Antonio CT
23. **Relais San Giuliano Boutique Hotel De Charme** — Aci Sant'Antonio
   - slug: `relais-san-giuliano-boutique-hotel-de-charme-aci-sant-antonio`
   - indirizzo: Via Giuseppe Garibaldi, 280, Via Antonello da Messina, 3, 95029 Viagrande CT
24. **Villa Corallo dell'Etna** — Aci Sant'Antonio
   - slug: `villa-corallo-dell-etna-aci-sant-antonio`
   - indirizzo: Via Allegracuore, 21, 95024 Acireale CT
25. **Villa Delle Palme** — Aci Sant'Antonio
   - slug: `villa-delle-palme-aci-sant-antonio`
   - indirizzo: Via Livorno, 143, 95026 Aci Castello CT
26. **Villa Di Leo Borgo Viscalori** — Aci Sant'Antonio
   - slug: `villa-di-leo-borgo-viscalori-aci-sant-antonio`
   - indirizzo: Piazza S. Biagio, 2, 95029 Viagrande CT
27. **B&B ACIREALE- il Cavalluccio Marino fronte mare** — Acireale
   - slug: `b-b-acireale-il-cavalluccio-marino-fronte-mare-acireale`
   - indirizzo: Via Argenta, 38, 95024 Acireale CT
28. **B&B ComeinSicily - Corte dei Limoni - Charming & Relaxing Luxury Hotel** — Acireale
   - slug: `b-b-comeinsicily-corte-dei-limoni-charming-relax-acireale`
   - indirizzo: Via Monsignor Genuardi, 32, 95024 Acireale CT
29. **B&B Le Chiazzette** — Acireale
   - slug: `b-b-le-chiazzette-acireale`
   - indirizzo: Via Marzulli, 67, 95024 Acireale CT
30. **B&B THE ARTISTS ACIREALE** — Acireale
   - slug: `b-b-the-artists-acireale-acireale`
   - indirizzo: Via Romeo, 40, 95024 Acireale CT
31. **baroque B&B** — Acireale
   - slug: `baroque-b-b-acireale`
   - indirizzo: P.za Duomo, 95024 Acireale CT
32. **Hotel Capomulini Dimora Storica** — Acireale
   - slug: `hotel-capomulini-dimora-storica-acireale`
   - indirizzo: Via Capomulini, 32, 95024 Acireale CT
33. **Hotel ibis Styles Catania Acireale** — Acireale
   - slug: `hotel-ibis-styles-catania-acireale-acireale`
   - indirizzo: Via Madonna delle Grazie, 98A/B, 95024 Acireale CT
34. **Hotel Orizzonte Acireale** — Acireale
   - slug: `hotel-orizzonte-acireale-acireale`
   - indirizzo: Viale Cristoforo Colombo, 2, 95024 Acireale CT
35. **Hotel Santa Tecla Palace** — Acireale
   - slug: `hotel-santa-tecla-palace-acireale`
   - indirizzo: Via Balestrate, 100, 95024 Acireale CT