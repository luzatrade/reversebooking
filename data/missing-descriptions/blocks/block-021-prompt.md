# Blocco 21/500 — 35 strutture senza descrizione IT

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

1. **B&B La Marica** — Adrano
   - slug: `b-b-la-marica-adrano`
   - indirizzo: Via Cappuccini, 100/102, 95031 Adrano CT
2. **B&B Patty's House** — Adrano
   - slug: `b-b-patty-s-house-adrano`
   - indirizzo: Via Madonna delle Grazie, 16, 95031 Adrano CT
3. **Bosco Ciancio** — Adrano
   - slug: `bosco-ciancio-adrano`
   - indirizzo: Strada Provinciale, 95033 Biancavilla CT
4. **Boscoscuro** — Adrano
   - slug: `boscoscuro-adrano`
   - indirizzo: Via Monte Arso, 95030 Ragalna CT
5. **Casa Romeo** — Adrano
   - slug: `casa-romeo-adrano`
   - indirizzo: Via Riganati, 5, 95031 Adrano CT
6. **Centro Benessere Acquaplanet** — Adrano
   - slug: `centro-benessere-acquaplanet-adrano`
   - indirizzo: Via Baratta, 190, 95047 Paternò CT
7. **Corten Hotel** — Adrano
   - slug: `corten-hotel-adrano`
   - indirizzo: Via Aldo Moro, 38, 95038 Santa Maria di Licodia CT
8. **Etna Morada Adrano** — Adrano
   - slug: `etna-morada-adrano-adrano`
   - indirizzo: Via Casale dei Greci, 41, 95031 Adrano CT
9. **Hotel "Casale dei Greci"** — Adrano
   - slug: `hotel-casale-dei-greci-adrano`
   - indirizzo: Viale C. Colombo, 95033 Biancavilla CT
10. **Hotel Paradise** — Adrano
   - slug: `hotel-paradise-adrano`
   - indirizzo: Via Alcide de Gasperi, 39, 95038 Santa Maria di Licodia CT
11. **Locale Dimora Rurale** — Adrano
   - slug: `locale-dimora-rurale-adrano`
   - indirizzo: Contrada Naviccia, snc, 95031 Adrano CT
12. **Rifugio Ariel** — Adrano
   - slug: `rifugio-ariel-adrano`
   - indirizzo: C.da Serra la Nave, 95030 Ragalna CT
13. **Rifugio Giovanni Sapienza** — Adrano
   - slug: `rifugio-giovanni-sapienza-adrano`
   - indirizzo: Piazzale Rifugio Sapienza, 95030 Nicolosi CT
14. **Siculea Home** — Adrano
   - slug: `siculea-home-adrano`
   - indirizzo: Via Tagliamento, 47, 95031 Adrano CT
15. **Affittacamere La Martina** — Adrara San Martino
   - slug: `affittacamere-la-martina-adrara-san-martino`
   - indirizzo: Via Nazionale, 26, 24060 Vigano San Martino BG
16. **Agriturismo Grammelot** — Adrara San Martino
   - slug: `agriturismo-grammelot-adrara-san-martino`
   - indirizzo: Via Brugali, 31, 24060 Adrara San Martino BG
17. **Albergo Stazione** — Adrara San Martino
   - slug: `albergo-stazione-adrara-san-martino`
   - indirizzo: Via Roma, 12, 25030 Paratico BS
18. **B&B Casa del Nonno** — Adrara San Martino
   - slug: `b-b-casa-del-nonno-adrara-san-martino`
   - indirizzo: Via Longo, 24, 24060 Adrara San Martino BG
19. **B&B I Lazzarini** — Adrara San Martino
   - slug: `b-b-i-lazzarini-adrara-san-martino`
   - indirizzo: Via Besenzoni Don G., 32, 24067 Sarnico BG
20. **B&B IL SANTO PELLEGRINO CHIUSO DEFINITIVAMENTE** — Adrara San Martino
   - slug: `b-b-il-santo-pellegrino-chiuso-definitivamente-adrara-san-martino`
   - indirizzo: san, SP79, 26, 24060 Adrara San Rocco BG
21. **B&B in Fattoria** — Adrara San Martino
   - slug: `b-b-in-fattoria-adrara-san-martino`
   - indirizzo: Via Bescasolo, 27, 24060 Berzo San Fermo BG
22. **B&B La Contrada** — Adrara San Martino
   - slug: `b-b-la-contrada-adrara-san-martino`
   - indirizzo: Via Lantieri, 22, 24067 Sarnico BG
23. **B&B La Fenice sul Lago** — Adrara San Martino
   - slug: `b-b-la-fenice-sul-lago-adrara-san-martino`
   - indirizzo: Via Gaetano Donizetti, 21, 24060 Villongo BG
24. **B&B Videtti** — Adrara San Martino
   - slug: `b-b-videtti-adrara-san-martino`
   - indirizzo: Via Tasso T., 11, 24060 Villongo BG
25. **Baita Tosca** — Adrara San Martino
   - slug: `baita-tosca-adrara-san-martino`
   - indirizzo: Viale dei Fiori, 4, 24060 San Fermo BG
26. **Colletto AgriBio Relais** — Adrara San Martino
   - slug: `colletto-agribio-relais-adrara-san-martino`
   - indirizzo: Via Colletto, 6, 24060 Adrara San Martino BG
27. **Giuseppe B&B** — Adrara San Martino
   - slug: `giuseppe-b-b-adrara-san-martino`
   - indirizzo: Via Lombardia, 31, 24067 Sarnico BG
28. **Hotel & Residence Ulivi** — Adrara San Martino
   - slug: `hotel-residence-ulivi-adrara-san-martino`
   - indirizzo: Viale A. Madruzza, 11, 25030 Paratico BS
29. **Hotel Moderno** — Adrara San Martino
   - slug: `hotel-moderno-adrara-san-martino`
   - indirizzo: Viale Vittorio Veneto, 53, 24064 Grumello del Monte BG
30. **Hotel Piccolo Principe** — Adrara San Martino
   - slug: `hotel-piccolo-principe-adrara-san-martino`
   - indirizzo: Via Gennaro Sora, 2, 24060 Villongo BG
31. **La Piazza Bergamo** — Adrara San Martino
   - slug: `la-piazza-bergamo-adrara-san-martino`
   - indirizzo: Piazza 4 Novembre, 1, 24060 Monasterolo del Castello BG
32. **Locanda Del Boscaiolo** — Adrara San Martino
   - slug: `locanda-del-boscaiolo-adrara-san-martino`
   - indirizzo: Via Montegrappa, 41, 24060 Monasterolo del Castello BG
33. **Resort Podere Castel Merlo** — Adrara San Martino
   - slug: `resort-podere-castel-merlo-adrara-san-martino`
   - indirizzo: Via G. Verdi, 6, 24060 Villongo BG
34. **Sole della Franciacorta - Hotel & Restaurant** — Adrara San Martino
   - slug: `sole-della-franciacorta-hotel-restaurant-adrara-san-martino`
   - indirizzo: Via Sarnico, 2, 25031 Capriolo BS
35. **B&B Mirabilia** — Adrara San Rocco
   - slug: `b-b-mirabilia-adrara-san-rocco`
   - indirizzo: Via S. Fermo, 28, 24060 Grone BG