# Blocco 329/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo IL TERRAZZO** — Brivio
   - slug: `agriturismo-il-terrazzo-brivio`
   - indirizzo: Biglio Superiore 8 Valgreghentino, 23857 Lecco LC
2. **B&b nina-o** — Brivio
   - slug: `b-b-nina-o-brivio`
   - indirizzo: Via ignazio cantu, 2, 23883 Brivio LC
3. **Casetta Canosse** — Brivio
   - slug: `casetta-canosse-brivio`
   - indirizzo: Frazione, Via Canosse, 16, 23883 Brivio LC
4. **Hotel Brivio (Nuova Apertura 2025)** — Brivio
   - slug: `hotel-brivio-nuova-apertura-2025-brivio`
   - indirizzo: Via Cesare Brivio, 33, 20158 Milano MI
5. **Hotel La Sosta** — Brivio
   - slug: `hotel-la-sosta-brivio`
   - indirizzo: Via Amatore Sciesa, 7, 24034 Sosta BG
6. **Ristorante Hotel La Sosta** — Brivio
   - slug: `ristorante-hotel-la-sosta-brivio`
   - indirizzo: Via Amatore Sciesa, 3, 24034 Sosta BG
7. **B&B I melograni** — Broccostella
   - slug: `b-b-i-melograni-broccostella`
   - indirizzo: Via Dante Alighieri, 03039 Sora FR
8. **Bed & Breakfast Portella delle Fate** — Broccostella
   - slug: `bed-breakfast-portella-delle-fate-broccostella`
   - indirizzo: Piazza Cesare Baronio, 27, 03039 Sora FR
9. **HOTEL OLIMPUS** — Broccostella
   - slug: `hotel-olimpus-broccostella`
   - indirizzo: Viale S. Domenico, 74, 03039 Sora FR
10. **Il Ciclope - CountryHotel & Restaurant** — Broccostella
   - slug: `il-ciclope-countryhotel-restaurant-broccostella`
   - indirizzo: Via S. Francesco, 23, 03033 Arpino FR
11. **Morry's lodge guest house** — Broccostella
   - slug: `morry-s-lodge-guest-house-broccostella`
   - indirizzo: Via Quarto, 4, 03039 Sora FR
12. **Agriturismo Le Poscole Al Canton** — Brogliano
   - slug: `agriturismo-le-poscole-al-canton-brogliano`
   - indirizzo: Strada Comunale Canton, 17, 36070 Castelgomberto VI
13. **Hotel la Terrazza** — Brogliano
   - slug: `hotel-la-terrazza-brogliano`
   - indirizzo: Via Alessandro Rossi, 86, 36100 Vicenza VI
14. **Hotel Sirio Life** — Brogliano
   - slug: `hotel-sirio-life-brogliano`
   - indirizzo: Via Belvedere, 1, 36070 Selva VI
15. **Masari Alla Casa Rossa** — Brogliano
   - slug: `masari-alla-casa-rossa-brogliano`
   - indirizzo: Via Spesse 5 (Impostare come tappa intermedia, e poi proseguire verso la nostra sede, Via Grigio, 36070 Cornedo Vicentino VI
16. **Agriturismo Il Borgo sul Lago Pizzo** — Brognaturo
   - slug: `agriturismo-il-borgo-sul-lago-pizzo-brognaturo`
   - indirizzo: SS110, Snc, 89812 Pizzo VV
17. **B&B Iside** — Brognaturo
   - slug: `b-b-iside-brognaturo`
   - indirizzo: Via Alcide De Gasperi, 47, 88060 Montepaone Lido CZ
18. **B&B La Santera** — Brognaturo
   - slug: `b-b-la-santera-brognaturo`
   - indirizzo: Via Sandro Pertini, 8, 88060 Marina di Davoli CZ
19. **FRA.TAS. Agriturismo Belvedere** — Brognaturo
   - slug: `fra-tas-agriturismo-belvedere-brognaturo`
   - indirizzo: Contrada Forgevecchie, 89822 Brognaturo VV
20. **Hotel Ristorante la Fontanella** — Brognaturo
   - slug: `hotel-ristorante-la-fontanella-brognaturo`
   - indirizzo: Località Cannella, 22, 89822 Spadola VV
21. **Hotel Valeria** — Brognaturo
   - slug: `hotel-valeria-brognaturo`
   - indirizzo: Via Kennedy, 89822 Simbario VV
22. **Agriturismo "Il Sole"** — Brolo
   - slug: `agriturismo-il-sole-brolo`
   - indirizzo: Contrada Scarapulli, 5, 98060 Sant'Angelo di Brolo ME
23. **Albergo Baia Verde** — Brolo
   - slug: `albergo-baia-verde-brolo`
   - indirizzo: Via Nazionale, km 100+400, 98071 Capo d'Orlando ME
24. **Albergo la Scogliera** — Brolo
   - slug: `albergo-la-scogliera-brolo`
   - indirizzo: Via del Popolo, 5, 98060 Gliaca ME
25. **Antico Casale di Gioiosa Marea** — Brolo
   - slug: `antico-casale-di-gioiosa-marea-brolo`
   - indirizzo: Contrada Casale, 25, 98063 Gioiosa Marea ME
26. **B&B Mare Blu** — Brolo
   - slug: `b-b-mare-blu-brolo`
   - indirizzo: Contrada Mangano, 3, 98063 Gioiosa Marea ME
27. **Capo Skino Park Hotel** — Brolo
   - slug: `capo-skino-park-hotel-brolo`
   - indirizzo: Contrada Schino, 98063 Gioiosa Marea ME
28. **El Concept Room** — Brolo
   - slug: `el-concept-room-brolo`
   - indirizzo: Via Luigi Pirandello, 1, 98061 Brolo ME
29. **Five Rooms Brolo** — Brolo
   - slug: `five-rooms-brolo-brolo`
   - indirizzo: Via Alcide de Gasperi, 34, 98061 Brolo ME
30. **GH Avalon Sikani Resort** — Brolo
   - slug: `gh-avalon-sikani-resort-brolo`
   - indirizzo: Contrada, Via Licari, 98063 Gioiosa Marea ME
31. **Hotel Corallo** — Brolo
   - slug: `hotel-corallo-brolo`
   - indirizzo: Contrada Calavà, 34, 98063 Gioiosa Marea ME
32. **Hotel Il Gattopardo** — Brolo
   - slug: `hotel-il-gattopardo-brolo`
   - indirizzo: Via Marina, 69, 98061 Brolo ME
33. **Hotel Ristorante Il Mulino** — Brolo
   - slug: `hotel-ristorante-il-mulino-brolo`
   - indirizzo: Via Andrea Doria, 46, 98071 Capo d'Orlando ME
34. **Le Vele Residence&Pool** — Brolo
   - slug: `le-vele-residence-pool-brolo`
   - indirizzo: Via Santa Barbara, 98061 Brolo ME
35. **Lo Scoglio della Formica b&b Capo D'Orlando (Me)** — Brolo
   - slug: `lo-scoglio-della-formica-b-b-capo-d-orlando-me-brolo`
   - indirizzo: Via Nino Mancari, 13, 98071 Capo d'Orlando ME