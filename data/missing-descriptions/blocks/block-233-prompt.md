# Blocco 233/500 — 35 strutture senza descrizione IT

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

1. **Hotel Comtur** — Basiglio
   - slug: `hotel-comtur-basiglio`
   - indirizzo: Via Europa, 11, 20082 Binasco MI
2. **Hotel Elys** — Basiglio
   - slug: `hotel-elys-basiglio`
   - indirizzo: Via Liguria, 5, 20090 Pieve Emanuele MI
3. **Hotel Motel Visconteo** — Basiglio
   - slug: `hotel-motel-visconteo-basiglio`
   - indirizzo: Str. Cerca, 130, 20082 Binasco MI
4. **Residenze Il Borromeo** — Basiglio
   - slug: `residenze-il-borromeo-basiglio`
   - indirizzo: Via Sardegna, 7, 20072 Pieve Emanuele MI
5. **Ristorante La Pergola** — Basiglio
   - slug: `ristorante-la-pergola-basiglio`
   - indirizzo: Strada Statale dei Giovi, 23 20058, 20058 Badile MI
6. **Ai Gelsi Hotel** — Basiliano
   - slug: `ai-gelsi-hotel-basiliano`
   - indirizzo: Via Circonvallazione Ovest, 12, 33033 Codroipo UD
7. **Albergo Baschera** — Basiliano
   - slug: `albergo-baschera-basiliano`
   - indirizzo: Via Umberto I, 6/2, 33034 Fagagna UD
8. **Astoria Hotel Italia** — Basiliano
   - slug: `astoria-hotel-italia-basiliano`
   - indirizzo: Piazza XX Settembre, 24, 33100 Udine UD
9. **B&B Altebas** — Basiliano
   - slug: `b-b-altebas-basiliano`
   - indirizzo: Piazza S. Martino, 13, 33035 Nogaredo di Prato UD
10. **B&B Nono Tilio** — Basiliano
   - slug: `b-b-nono-tilio-basiliano`
   - indirizzo: Via Piave, 52/1, 33030 Talmassons UD
11. **B&B Villa mi Sueño** — Basiliano
   - slug: `b-b-villa-mi-sueno-basiliano`
   - indirizzo: Via Antonio Feruglio, 1, 33035 Udine UD
12. **Best Western Hotel Continental** — Basiliano
   - slug: `best-western-hotel-continental-basiliano`
   - indirizzo: Via Tricesimo, 71, 33100 Udine UD
13. **Chiarelli House** — Basiliano
   - slug: `chiarelli-house-basiliano`
   - indirizzo: Via Partistagno, 7, 33100 Udine UD
14. **Comfort Zone Codroipo** — Basiliano
   - slug: `comfort-zone-codroipo-basiliano`
   - indirizzo: Via Foro Boario, 1, 33033 Codroipo UD
15. **Corte Degli OstiNati** — Basiliano
   - slug: `corte-degli-ostinati-basiliano`
   - indirizzo: Via G. Oberdan, 11, 33031 Variano UD
16. **Friulmarangon** — Basiliano
   - slug: `friulmarangon-basiliano`
   - indirizzo: Via Montenero, 4, 33031 Basiliano UD
17. **Guest House Italo & Anna** — Basiliano
   - slug: `guest-house-italo-anna-basiliano`
   - indirizzo: Via Selvis, 41, 33037 Pasian di Prato UD
18. **Hotel Belvedere** — Basiliano
   - slug: `hotel-belvedere-basiliano`
   - indirizzo: Viale Venezia, 66, 33033 Codroipo UD
19. **Hotel Concorde** — Basiliano
   - slug: `hotel-concorde-basiliano`
   - indirizzo: Via Pozzuolo, 226, 33100 Udine UD
20. **La Blave Rooms** — Basiliano
   - slug: `la-blave-rooms-basiliano`
   - indirizzo: Via Udine, 24, 33050 Mortegliano UD
21. **Palazzo Richard Leone** — Basiliano
   - slug: `palazzo-richard-leone-basiliano`
   - indirizzo: Via Pozzuolo, 58, 33100 Udine UD
22. **Resort Villa Manin** — Basiliano
   - slug: `resort-villa-manin-basiliano`
   - indirizzo: Via dei Dogi, 7, 33033 Codroipo UD
23. **Sleep In Udine** — Basiliano
   - slug: `sleep-in-udine-basiliano`
   - indirizzo: secondo piano, V.le Europa Unita, 101/int.3, 33100 Udine UD
24. **Trattoria Albergo da Nando Mortegliano** — Basiliano
   - slug: `trattoria-albergo-da-nando-mortegliano-basiliano`
   - indirizzo: Via Divisione Julia, 14, 33050 Mortegliano UD
25. **Albergo Ristorante La Scaiola** — Bassano Bresciano
   - slug: `albergo-ristorante-la-scaiola-bassano-bresciano`
   - indirizzo: Via Gardesana, 15, 25080 Nuvolera BS
26. **Atena Dolce Vita | Luxury Suites** — Bassano Bresciano
   - slug: `atena-dolce-vita-luxury-suites-bassano-bresciano`
   - indirizzo: Via Codignole, 52, 25124 Brescia BS
27. **Franciacorta Executive Resort** — Bassano Bresciano
   - slug: `franciacorta-executive-resort-bassano-bresciano`
   - indirizzo: Via Chiari, 15/a, 25039 Travagliato BS
28. **Garda Hotel** — Bassano Bresciano
   - slug: `garda-hotel-bassano-bresciano`
   - indirizzo: Via Brescia, 128, 25018 Montichiari BS
29. **Hotel Colombera Rossa** — Bassano Bresciano
   - slug: `hotel-colombera-rossa-bassano-bresciano`
   - indirizzo: Via S. Zeno, 197, 25124 Brescia BS
30. **Hotel Continental** — Bassano Bresciano
   - slug: `hotel-continental-bassano-bresciano`
   - indirizzo: Via Martiri della Libertà, 267, 25030 Roncadelle BS
31. **Hotel Ferretti Majestic House** — Bassano Bresciano
   - slug: `hotel-ferretti-majestic-house-bassano-bresciano`
   - indirizzo: Via Brescia, 49, 25014 Castenedolo BS
32. **Hotel Michelangelo** — Bassano Bresciano
   - slug: `hotel-michelangelo-bassano-bresciano`
   - indirizzo: Via Padana Superiore, 82/A, 25080 Mazzano BS
33. **La Rosa Dei Venti** — Bassano Bresciano
   - slug: `la-rosa-dei-venti-bassano-bresciano`
   - indirizzo: Str. per Offlaga, 1A, 25025 Manerbio BS
34. **RESIDENZA BORGO MANERBIO** — Bassano Bresciano
   - slug: `residenza-borgo-manerbio-bassano-bresciano`
   - indirizzo: Viale Stazione, 7, 25025 Manerbio BS
35. **TERRAZZA Rooms** — Bassano Bresciano
   - slug: `terrazza-rooms-bassano-bresciano`
   - indirizzo: Via Giuseppe Ungaretti, 12, 25030 Castrezzato BS