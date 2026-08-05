# Blocco 189/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Edelweiss - Larespa** — Baceno
   - slug: `albergo-ristorante-edelweiss-larespa-baceno`
   - indirizzo: Frazione Viceno, 7, 28862 Crodo VB
2. **Albergo Ristorante Minoli** — Baceno
   - slug: `albergo-ristorante-minoli-baceno`
   - indirizzo: Via Provinciale, 41, 28866 Premia VB
3. **Albergo Ristorante Vecchio Scarpone** — Baceno
   - slug: `albergo-ristorante-vecchio-scarpone-baceno`
   - indirizzo: Via Roma, 48, 28861 Baceno VB
4. **B&B Casa Fattorini** — Baceno
   - slug: `b-b-casa-fattorini-baceno`
   - indirizzo: Via Roma, 77, 28861 Baceno VB
5. **B&B Casa Tomà** — Baceno
   - slug: `b-b-casa-toma-baceno`
   - indirizzo: Via Menogno, 5, 28855 Masera VB
6. **B&B La Beula** — Baceno
   - slug: `b-b-la-beula-baceno`
   - indirizzo: Frazione Beola, 2, 28861 Baceno VB
7. **B&B OSSOLA DAL MONTE** — Baceno
   - slug: `b-b-ossola-dal-monte-baceno`
   - indirizzo: VIA G. PROTTI, 28865 Crevoladossola VB
8. **Bed & Bike La Stalla Guest House** — Baceno
   - slug: `bed-bike-la-stalla-guest-house-baceno`
   - indirizzo: Via Pontetto, 50, 28864 Montecrestese VB
9. **Bed & Breakfast Dimora d'Artista** — Baceno
   - slug: `bed-breakfast-dimora-d-artista-baceno`
   - indirizzo: Via Rossetti Valentini, 23, 28857 Santa Maria Maggiore VB
10. **Hotel Miramonti** — Baceno
   - slug: `hotel-miramonti-baceno`
   - indirizzo: Piazzale Armando Diaz, 3, 28857 Santa Maria Maggiore VB
11. **La Casermetta - Santa Maria Maggiore** — Baceno
   - slug: `la-casermetta-santa-maria-maggiore-baceno`
   - indirizzo: Via Pittor G.Borgnis, 3, 28857 Santa Maria Maggiore VB
12. **Rifugio Monte Zeus** — Baceno
   - slug: `rifugio-monte-zeus-baceno`
   - indirizzo: Frazione Crego, 6, 28866 Premia VB
13. **Stella Alpina Hotel e Ristorante** — Baceno
   - slug: `stella-alpina-hotel-e-ristorante-baceno`
   - indirizzo: Via Domodossola, 13, 28853 Druogno VB
14. **Avernum Relais** — Bacoli
   - slug: `avernum-relais-bacoli`
   - indirizzo: Via Lago D'Averno, 7, 80078 Pozzuoli NA
15. **Baia Flegrea Meublè** — Bacoli
   - slug: `baia-flegrea-meuble-bacoli`
   - indirizzo: Via Francesco Petrarca, 19, 80070 Bacoli NA
16. **Cala Moresca** — Bacoli
   - slug: `cala-moresca-bacoli`
   - indirizzo: Via Faro, 44, 80070 Bacoli NA
17. **Calea Hotel** — Bacoli
   - slug: `calea-hotel-bacoli`
   - indirizzo: Via Lido Miliscola, 31, 80070 Bacoli NA
18. **Domus Diana Baia** — Bacoli
   - slug: `domus-diana-baia-bacoli`
   - indirizzo: Via Sella di Baia, 80070 Bacoli NA
19. **Grand Hotel Serapide** — Bacoli
   - slug: `grand-hotel-serapide-bacoli`
   - indirizzo: Via S. Gennaro Agnano, 34, 80078 Pozzuoli NA
20. **Hotel Agave** — Bacoli
   - slug: `hotel-agave-bacoli`
   - indirizzo: SS. 7/IV Domitiana, Km 53, 80078 Pozzuoli NA
21. **Hotel Cocceio** — Bacoli
   - slug: `hotel-cocceio-bacoli`
   - indirizzo: Via Scalandrone, 109, 80070 Bacoli NA
22. **Hotel Villa Del Mare Ho.Gi. Srl** — Bacoli
   - slug: `hotel-villa-del-mare-ho-gi-srl-bacoli`
   - indirizzo: Via Sacello di Miseno, 69, 80070 Bacoli NA
23. **Il Barbacane** — Bacoli
   - slug: `il-barbacane-bacoli`
   - indirizzo: Via Castello, 2, 80070 Bacoli NA
24. **Kira suite and rooms** — Bacoli
   - slug: `kira-suite-and-rooms-bacoli`
   - indirizzo: Via Palinuro, 25, 80078 Pozzuoli NA
25. **La Sabbia Rooms** — Bacoli
   - slug: `la-sabbia-rooms-bacoli`
   - indirizzo: Via Molo di Baia, 1, 80070 Bacoli NA
26. **La Suite Hotel & Spa** — Bacoli
   - slug: `la-suite-hotel-spa-bacoli`
   - indirizzo: Via Flavio Gioia, 81, 80079 Procida NA
27. **Pharus Miseni suites and rooms** — Bacoli
   - slug: `pharus-miseni-suites-and-rooms-bacoli`
   - indirizzo: Via Faro, 42, 80070 Bacoli NA
28. **Relais Tiaré Bed and Breakfast** — Bacoli
   - slug: `relais-tiare-bed-and-breakfast-bacoli`
   - indirizzo: Via Cicerone, 35, 80070 Bacoli NA
29. **Suite B&B Mustafà pozzuoli** — Bacoli
   - slug: `suite-b-b-mustafa-pozzuoli-bacoli`
   - indirizzo: Vico Magazzini, 80078 Pozzuoli NA
30. **Villa Aragonese Rooms** — Bacoli
   - slug: `villa-aragonese-rooms-bacoli`
   - indirizzo: Via Torregaveta, 123, 80070 Monte di Procida NA
31. **Villa Edelweiss** — Bacoli
   - slug: `villa-edelweiss-bacoli`
   - indirizzo: Via Fusaro, 33, 80070 Bacoli NA
32. **Villa Gervasio** — Bacoli
   - slug: `villa-gervasio-bacoli`
   - indirizzo: Via Bellavista, 176, 80070 Bacoli NA
33. **Villa Oteri Rooms & Bistrot** — Bacoli
   - slug: `villa-oteri-rooms-bistrot-bacoli`
   - indirizzo: Via Miliscola, 22, 80070 Bacoli NA
34. **Affittacamere Teré Ceriana** — Badalucco
   - slug: `affittacamere-tere-ceriana-badalucco`
   - indirizzo: Corso Italia, 72, 18034 Ceriana IM
35. **Agriturismo L'Adagio** — Badalucco
   - slug: `agriturismo-l-adagio-badalucco`
   - indirizzo: Via Ortai, 15, 18010 Badalucco IM