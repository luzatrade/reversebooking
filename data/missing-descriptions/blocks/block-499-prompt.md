# Blocco 499/500 — 35 strutture senza descrizione IT

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

1. **Bed E Breakfast Ai Tre Portoni** — Trento
   - slug: `bed-e-breakfast-ai-tre-portoni-trento`
   - indirizzo: Vicolo Cristoforo Madruzzo, 8, 38122 Trento TN, Italia
2. **BnB Trento** — Trento
   - slug: `bnb-trento-trento`
   - indirizzo: Via Galassa, 45, 38123 Trento TN, Italia
3. **Casa Mia** — Trento
   - slug: `casa-mia-trento`
   - indirizzo: Via Torre Vanga, 14, 38122 Trento TN, Italia
4. **Hotel al Dos Trento - Breakfast & private SPA** — Trento
   - slug: `hotel-al-dos-trento-breakfast-private-spa-trento`
   - indirizzo: Via Brescia, 133, 38122 Trento TN, Italia
5. **House of Bruno Rooms & Apartments** — Trento
   - slug: `house-of-bruno-rooms-apartments-trento`
   - indirizzo: Via Torre Vanga, 14, 38122 Trento TN, Italia
6. **House of Trento** — Trento
   - slug: `house-of-trento-trento`
   - indirizzo: Via Torre Vanga, 14, 38122 Trento TN, Italia
7. **I Dodici Mesi Rooms & Apartments** — Trento
   - slug: `i-dodici-mesi-rooms-apartments-trento`
   - indirizzo: Via della Saluga, 3/B, 38121 Trento TN, Italia
8. **La Villa Luxury Guest House In Trento** — Trento
   - slug: `la-villa-luxury-guest-house-in-trento-trento`
   - indirizzo: Salita della Spalliera, 3, 38121 Trento TN, Italia
9. **Le Palme Rooms & Breakfast** — Trento
   - slug: `le-palme-rooms-breakfast-trento`
   - indirizzo: Via Torquato Taramelli, 5, 38121 Trento TN, Italia
10. **Soul of Trento - Vicolo del Vo, 27** — Trento
   - slug: `soul-of-trento-vicolo-del-vo-27-trento`
   - indirizzo: Vicolo del Vó, 27, 38122 Trento TN, Italia
11. **501 Hotel** — Tropea
   - slug: `501-hotel-tropea`
   - indirizzo: Vle Emanuele Bucciarelli, 14, 89900 Vibo Valentia VV, Italia
12. **B&B Al Vecchio Castello** — Tropea
   - slug: `b-b-al-vecchio-castello-tropea`
   - indirizzo: Via Glorizio, 3, 89861 Tropea VV, Italia
13. **B&B Casale Pietrantica Tropea** — Tropea
   - slug: `b-b-casale-pietrantica-tropea-tropea`
   - indirizzo: Contrada Manna, 89866 Ciaramiti VV, Italia
14. **B&B Donna Rosa Accommodation** — Tropea
   - slug: `b-b-donna-rosa-accommodation-tropea`
   - indirizzo: Via Carmine, 42, 89861 Tropea VV, Italia
15. **B&B ILary Tropea** — Tropea
   - slug: `b-b-ilary-tropea-tropea`
   - indirizzo: Via dei Bizantini, 16, 89861 Tropea VV, Italia
16. **B&B Sunset Tropea** — Tropea
   - slug: `b-b-sunset-tropea-tropea`
   - indirizzo: Via Indipendenza, 54, 89861 Tropea VV, Italia
17. **Bella Tropea Accommodation** — Tropea
   - slug: `bella-tropea-accommodation-tropea`
   - indirizzo: Via Libertà, 162, 89861 Tropea VV, Italia
18. **Donnaciccina Accomodation** — Tropea
   - slug: `donnaciccina-accomodation-tropea`
   - indirizzo: Via Pelliccia, 9, 89861 Tropea VV, Italia
19. **Imperium** — Tropea
   - slug: `imperium-tropea`
   - indirizzo: Via Indipendenza, 54, 89861 Tropea VV, Italia
20. **Korello - B&B Tropea** — Tropea
   - slug: `korello-b-b-tropea-tropea`
   - indirizzo: Via Che Guevara, 15, 89862 Gasponi VV, Italia
21. **L'Orchidea** — Tropea
   - slug: `l-orchidea-tropea`
   - indirizzo: Viale Tondo, TRAVERSA IX N, 24, 89861 Tropea VV, Italia
22. **Le Terrazze Tropea** — Tropea
   - slug: `le-terrazze-tropea-tropea`
   - indirizzo: Via Aragona, 9, 89861 Tropea VV, Italia
23. **Le Twins -Bed and Breakfast** — Tropea
   - slug: `le-twins-bed-and-breakfast-tropea`
   - indirizzo: Via Leonida Repaci, 90 90, 89861 Tropea VV, Italia
24. **Pepè Accommodation Bed and breakfast** — Tropea
   - slug: `pepe-accommodation-bed-and-breakfast-tropea`
   - indirizzo: Via Trento, 4, 89861 Parghelia VV, Italia
25. **Solmaris Tropea - Rooms & Suites** — Tropea
   - slug: `solmaris-tropea-rooms-suites-tropea`
   - indirizzo: Via Piave, 5, 89861 Tropea VV, Italia
26. **Tropea Boutique Hotel** — Tropea
   - slug: `tropea-boutique-hotel-tropea`
   - indirizzo: Via Libertà, 52, 89861 Tropea VV, Italia
27. **Tropea Casa Scirocco CIN IT102044B4EECW6KF8** — Tropea
   - slug: `tropea-casa-scirocco-cin-it102044b4eecw6kf8-tropea`
   - indirizzo: contrada barricello snc, 89861 Tropea VV, Italia
28. **Villa Antica Tropea** — Tropea
   - slug: `villa-antica-tropea-tropea`
   - indirizzo: Via Pietro Ruffo di Calabria, 37, 89861 Tropea VV, Italia
29. **Villa Garden Tropea** — Tropea
   - slug: `villa-garden-tropea-tropea`
   - indirizzo: Via Cesare Battisti, 110, 89862 Gasponi VV, Italia
30. **Albergo S. Domenico** — Urbino
   - slug: `albergo-s-domenico-urbino`
   - indirizzo: Piazza Rinascimento, 3, 61029 Urbino PU
31. **Domus Urbino** — Urbino
   - slug: `domus-urbino-urbino`
   - indirizzo: Piazza Rinascimento, 2, 61029 Urbino PU
32. **Hotel Bonconte** — Urbino
   - slug: `hotel-bonconte-urbino`
   - indirizzo: Via delle Mura, 28, 61029 Urbino PU
33. **Hotel Raffaello - Temporaneamente chiuso** — Urbino
   - slug: `hotel-raffaello-temporaneamente-chiuso-urbino`
   - indirizzo: Via Santa Margherita, 40, 61029 Urbino PU
34. **Palazzo Giusti Suites and Spa Urbino** — Urbino
   - slug: `palazzo-giusti-suites-and-spa-urbino-urbino`
   - indirizzo: Via Vittorio Veneto, 37, 61029 Urbino PU
35. **Villa Liberty Urbino** — Urbino
   - slug: `villa-liberty-urbino-urbino`
   - indirizzo: Viale Antonio Gramsci, 22, 61029 Urbino PU