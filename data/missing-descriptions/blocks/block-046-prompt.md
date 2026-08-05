# Blocco 46/500 — 35 strutture senza descrizione IT

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

1. **Hotel Toscana** — Alassio
   - slug: `hotel-toscana-alassio`
   - indirizzo: Corso Dante Alighieri, 83, 17021 Alassio SV
2. **Hotel West End** — Alassio
   - slug: `hotel-west-end-alassio`
   - indirizzo: Via Roma, 42, 17021 Alassio SV
3. **LVG Hotel Collection - Majestic** — Alassio
   - slug: `lvg-hotel-collection-majestic-alassio`
   - indirizzo: Via Leonardo da Vinci, 300, 17021 Alassio SV
4. **Sabbia Blu Alassio - GuestRoom** — Alassio
   - slug: `sabbia-blu-alassio-guestroom-alassio`
   - indirizzo: Via Privata Giotto, 1, 17021 Alassio SV
5. **Agriturismo L'Arco** — Alatri
   - slug: `agriturismo-l-arco-alatri`
   - indirizzo: Contrada Coriano, 3, 03016 Guarcino FR
6. **Astor Hotel Srl** — Alatri
   - slug: `astor-hotel-srl-alatri`
   - indirizzo: Via Marco Tullio Cicerone, 194, 03100 Frosinone FR
7. **B&B Le Mura** — Alatri
   - slug: `b-b-le-mura-alatri`
   - indirizzo: piazzale ceci, Via del Torrione, 9, 03011 Alatri FR
8. **B&B Le XII Marie** — Alatri
   - slug: `b-b-le-xii-marie-alatri`
   - indirizzo: Via Luigi Fiorletta, 4, 03011 Alatri FR
9. **Hotel Residence Memmina** — Alatri
   - slug: `hotel-residence-memmina-alatri`
   - indirizzo: Via Maria, 120, 03100 Frosinone FR
10. **Hotel Ristorante Bassetto** — Alatri
   - slug: `hotel-ristorante-bassetto-alatri`
   - indirizzo: Via Casilina, 74.600, 03013 Ferentino FR
11. **Il Maltese Bed & Breakfast** — Alatri
   - slug: `il-maltese-bed-breakfast-alatri`
   - indirizzo: Corso Giuseppe Garibaldi, 81, 03011 Alatri FR
12. **IL ROSETO B&B** — Alatri
   - slug: `il-roseto-b-b-alatri`
   - indirizzo: Viale Roma, 23, 03100 Frosinone FR
13. **Il Rosone - Rooms&Apartments** — Alatri
   - slug: `il-rosone-rooms-apartments-alatri`
   - indirizzo: Corso Re Umberto I, 7, 03011 Alatri FR
14. **L’Arco Rosa** — Alatri
   - slug: `l-arco-rosa-alatri`
   - indirizzo: Via Carlo Minnocci, 03011 Alatri FR
15. **La Zaffera** — Alatri
   - slug: `la-zaffera-alatri`
   - indirizzo: Piazzetta Santa Giusta, 7, 03011 Alatri FR
16. **Monastero di Sant'Erasmo** — Alatri
   - slug: `monastero-di-sant-erasmo-alatri`
   - indirizzo: Via Giuseppe Garibaldi, 19, 03029 Veroli FR
17. **Agriturismo Villa La Favorita** — Alba
   - slug: `agriturismo-villa-la-favorita-alba`
   - indirizzo: Località Altavilla, 12, 12051 Alba CN, Italia
18. **Alba Morus Guest House** — Alba
   - slug: `alba-morus-guest-house-alba`
   - indirizzo: Borgo Garassini, 68, 12064 La Morra CN, Italia
19. **Alba Serena Camere e Appartamenti** — Alba
   - slug: `alba-serena-camere-e-appartamenti-alba`
   - indirizzo: Corso Bra, 38, 12051 Alba CN, Italia
20. **Alba Village Hotel** — Alba
   - slug: `alba-village-hotel-alba`
   - indirizzo: Corso Piave, 219, 12051 Alba CN, Italia
21. **Albergo San Lorenzo** — Alba
   - slug: `albergo-san-lorenzo-alba`
   - indirizzo: P.za Carlo e Franco Miroglio, 6, 12051 Alba CN, Italia
22. **ALMA** — Alba
   - slug: `alma-alba`
   - indirizzo: Via Pietrino Belli, 1, 12051 Alba CN, Italia
23. **Angolo divino CIN IT004003B48USM2QYF** — Alba
   - slug: `angolo-divino-cin-it004003b48usm2qyf-alba`
   - indirizzo: Via ferdinando Bosio, 4, 12051 Alba CN, Italia
24. **B&B Alba Centro** — Alba
   - slug: `b-b-alba-centro-alba`
   - indirizzo: Piazza Garibaldi, 4, 12051 Alba CN, Italia
25. **B&B HOTEL Alba** — Alba
   - slug: `b-b-hotel-alba-alba`
   - indirizzo: C.so Asti, 5, 12051 Alba CN, Italia
26. **B&B Il nido di Anna Alba CN ITALY** — Alba
   - slug: `b-b-il-nido-di-anna-alba-cn-italy-alba`
   - indirizzo: Piazza Garibaldi, 4, 12051 Alba CN, Italia
27. **Casa Alba Blu** — Alba
   - slug: `casa-alba-blu-alba`
   - indirizzo: Borgata Pianezzo, 31b, 12063 Dogliani CN, Italia
28. **Casa di Ospitalità Religiosa Seminario Vescovile di Alba** — Alba
   - slug: `casa-di-ospitalita-religiosa-seminario-vescovile-alba`
   - indirizzo: Piazza Vittorio Veneto, 1, 12051 Alba CN, Italia
29. **Casa Soave B&B** — Alba
   - slug: `casa-soave-b-b-alba`
   - indirizzo: Via della Liberazione, 19, 12051 Alba CN, Italia
30. **Hotel Calissano** — Alba
   - slug: `hotel-calissano-alba`
   - indirizzo: Via Pola, 8, 12051 Alba CN, Italia
31. **Hotel Giacomo Morra Alba - Handwritten Collection** — Alba
   - slug: `hotel-giacomo-morra-alba-handwritten-collection-alba`
   - indirizzo: Limited Traffic Zone, Via Roma, 1, 12051 Alba CN, Italia
32. **Hotel Langhe** — Alba
   - slug: `hotel-langhe-alba`
   - indirizzo: Str. Profonda, 21, 12051 Alba CN, Italia
33. **Hotel Residence Alba Bra** — Alba
   - slug: `hotel-residence-alba-bra-alba`
   - indirizzo: Str. Borgo S. Martino, 7/a, 12060 Pocapaglia CN, Italia
34. **Hotel Ristorante I Castelli** — Alba
   - slug: `hotel-ristorante-i-castelli-alba`
   - indirizzo: Viale Torino, 14, 12051 Alba CN, Italia
35. **La Basiglia** — Alba
   - slug: `la-basiglia-alba`
   - indirizzo: Via Basiglia, 10, 12065 Monforte d'Alba CN, Italia