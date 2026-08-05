# Blocco 274/500 — 35 strutture senza descrizione IT

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

1. **Jenka** — Bisacquino
   - slug: `jenka-bisacquino`
   - indirizzo: Via della Regione, 1D, 92010 Caltabellotta AG
2. **L'Antico Casale** — Bisacquino
   - slug: `l-antico-casale-bisacquino`
   - indirizzo: Contrada Sacramento, 90032 Bisacquino PA
3. **La casa di Bia** — Bisacquino
   - slug: `la-casa-di-bia-bisacquino`
   - indirizzo: Via Giuseppe Impastato, 90034 Corleone PA
4. **Leon d'Oro Corleone** — Bisacquino
   - slug: `leon-d-oro-corleone-bisacquino`
   - indirizzo: Via Madre Teresa Cortimiglia, 2, 90034 Corleone PA
5. **Rosa's House Bed & Breakfast** — Bisacquino
   - slug: `rosa-s-house-bed-breakfast-bisacquino`
   - indirizzo: Via Genova, 22, 92018 Santa Margherita di Belice AG
6. **Albergo Riviera** — Bisceglie
   - slug: `albergo-riviera-bisceglie`
   - indirizzo: Via Galileo Galilei, 6, 76125 Trani BT
7. **APARTHOTEL LE MARINE** — Bisceglie
   - slug: `aparthotel-le-marine-bisceglie`
   - indirizzo: Via Maggiore la Notte, 15, 76011 Bisceglie BT
8. **B&B Agorà Bisceglie** — Bisceglie
   - slug: `b-b-agora-bisceglie-bisceglie`
   - indirizzo: Vico Conforti, 7, 76011 Bisceglie BT
9. **B&B Levante** — Bisceglie
   - slug: `b-b-levante-bisceglie`
   - indirizzo: Via Genova, 3, 76125 Trani BT
10. **B&B Numero Uno** — Bisceglie
   - slug: `b-b-numero-uno-bisceglie`
   - indirizzo: Via della Libertà, 92, 76011 Bisceglie BT
11. **Bed & Breakfast Bisceglie** — Bisceglie
   - slug: `bed-breakfast-bisceglie-bisceglie`
   - indirizzo: Via Plebiscito, 43, 76011 Bisceglie BT
12. **Bed & Breakfast Villa Garden** — Bisceglie
   - slug: `bed-breakfast-villa-garden-bisceglie`
   - indirizzo: Via Giovanni Bovio, 308, 76011 Bisceglie BT
13. **Bellatmosfera** — Bisceglie
   - slug: `bellatmosfera-bisceglie`
   - indirizzo: Via martiri di Palermo, 3, 76125 Trani BT
14. **DONNA LUCREZIA B&B Boutique Hotel Style - Business & Relax** — Bisceglie
   - slug: `donna-lucrezia-b-b-boutique-hotel-style-business-bisceglie`
   - indirizzo: Via Giovanni Bovio, 171, 76011 Bisceglie BT
15. **Hotel Salsello** — Bisceglie
   - slug: `hotel-salsello-bisceglie`
   - indirizzo: Via Vito Siciliani, 42, 76011 Bisceglie BT
16. **Hotel Villa & Resort** — Bisceglie
   - slug: `hotel-villa-resort-bisceglie`
   - indirizzo: Viale la Testa, 2, 76011 Bisceglie BT
17. **Houseboat Floatart Experience Bisceglie** — Bisceglie
   - slug: `houseboat-floatart-experience-bisceglie-bisceglie`
   - indirizzo: Largo Porta Mare, 76011 Bisceglie BT
18. **Nicotel Bisceglie** — Bisceglie
   - slug: `nicotel-bisceglie-bisceglie`
   - indirizzo: Via della Libertà, 62, 76011 Bisceglie BT
19. **Olympo B&B** — Bisceglie
   - slug: `olympo-b-b-bisceglie`
   - indirizzo: Vico III Lancellotti, 16, 76011 Bisceglie BT
20. **Palazzo Lamantea** — Bisceglie
   - slug: `palazzo-lamantea-bisceglie`
   - indirizzo: Vico II Schiavone, 1/Piano 2°, 76011 Bisceglie BT
21. **Samarè Bisceglie** — Bisceglie
   - slug: `samare-bisceglie-bisceglie`
   - indirizzo: Via Sergio Sasso, 37, 76011 Bisceglie BT
22. **TerraCielo** — Bisceglie
   - slug: `terracielo-bisceglie`
   - indirizzo: via Arco Azzella, 6/8, 76011 Bisceglie BT
23. **Torre Bianca Bisceglie B&B vicino al mare** — Bisceglie
   - slug: `torre-bianca-bisceglie-b-b-vicino-al-mare-bisceglie`
   - indirizzo: Via Giovanni Bovio, 408, 76011 Bisceglie BT
24. **Torre Elisa - Luxury Room** — Bisceglie
   - slug: `torre-elisa-luxury-room-bisceglie`
   - indirizzo: Via Forno Nuovo, 15, 76011 Bisceglie BT
25. **Torrelama Room & Breakfast** — Bisceglie
   - slug: `torrelama-room-breakfast-bisceglie`
   - indirizzo: Str. Adriatica, 115, 76125 Trani BT
26. **Hotel Acquevive** — Bisegna
   - slug: `hotel-acquevive-bisegna`
   - indirizzo: Via Circumlacuale, 1, 67038 Scanno AQ
27. **Hotel gemma** — Bisegna
   - slug: `hotel-gemma-bisegna`
   - indirizzo: Via Giuseppe Garibaldi, 52, 67050 Bisegna AQ
28. **Hotel Valle del Lupo** — Bisegna
   - slug: `hotel-valle-del-lupo-bisegna`
   - indirizzo: Localita, Via Collacchi, 3, 67032 Pescasseroli AQ
29. **Park Hotel** — Bisegna
   - slug: `park-hotel-bisegna`
   - indirizzo: Viale della Riviera, 6, 67030 Villalago AQ
30. **Trattoria Il Rifugio del Lupo - Scanno** — Bisegna
   - slug: `trattoria-il-rifugio-del-lupo-scanno-bisegna`
   - indirizzo: SR479, 67038 Scanno AQ
31. **Panfilo Farmhouse** — Bisenti
   - slug: `panfilo-farmhouse-bisenti`
   - indirizzo: Via Astelina, 1, 64036 Cellino Attanasio TE
32. **VILLA PENSIERI Bed & Brekfast** — Bisenti
   - slug: `villa-pensieri-bed-brekfast-bisenti`
   - indirizzo: strada, SP34b, 61, 64033 Bisenti TE
33. **Agriturismo Albachiara** — Bisignano
   - slug: `agriturismo-albachiara-bisignano`
   - indirizzo: Contrada Arena, 87043 Bisignano CS
34. **Agriturismo Pingitore** — Bisignano
   - slug: `agriturismo-pingitore-bisignano`
   - indirizzo: Contrada marzi, 3, 87040 Luzzi CS
35. **Best Western Premier Villa Fabiano Palace Hotel** — Bisignano
   - slug: `best-western-premier-villa-fabiano-palace-hotel-bisignano`
   - indirizzo: Via C. Colombo, 70, 87036 Quattromiglia CS