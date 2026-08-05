# Blocco 159/500 — 35 strutture senza descrizione IT

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

1. **Càdor Hotel** — Arsi�
   - slug: `cador-hotel-arsi`
   - indirizzo: Via XX Settembre, 42, 32040 Valle di Cadore BL
2. **Dolomitiloungebelluno** — Arsi�
   - slug: `dolomitiloungebelluno-arsi`
   - indirizzo: Via Tisoi, 36, 32100 Belluno BL
3. **Faloria Mountain Spa Resort** — Arsi�
   - slug: `faloria-mountain-spa-resort-arsi`
   - indirizzo: Località Zuel di Sopra, 46, 32043 Cortina d'Ampezzo BL
4. **Grand Hotel Savoia Cortina d’Ampezzo, A Radisson Collection Hotel** — Arsi�
   - slug: `grand-hotel-savoia-cortina-d-ampezzo-a-radisson-arsi`
   - indirizzo: Via Roma, 62, 32043 Cortina d'Ampezzo BL
5. **Hotel alla Posta** — Arsi�
   - slug: `hotel-alla-posta-arsi`
   - indirizzo: Piazza O. Dogliani, 19, 32023 Caprile BL
6. **Hotel Kreuzberg** — Arsi�
   - slug: `hotel-kreuzberg-arsi`
   - indirizzo: Kreuzbergpass, 39030 Sesto BZ
7. **Hotel Posta Zoldo** — Arsi�
   - slug: `hotel-posta-zoldo-arsi`
   - indirizzo: Via Roma, 13, 32012 Forno di Zoldo BL
8. **Olympic Spa Hotel** — Arsi�
   - slug: `olympic-spa-hotel-arsi`
   - indirizzo: S.da de Ciarlonch, 5, 38036 San Giovanni di Fassa TN
9. **Park Hotel Villa Carpenada** — Arsi�
   - slug: `park-hotel-villa-carpenada-arsi`
   - indirizzo: Via Mier, 158, 32100 Belluno BL
10. **Rosapetra Spa Resort** — Arsi�
   - slug: `rosapetra-spa-resort-arsi`
   - indirizzo: Località Zuel di Sopra, 1, 32043 Cortina d'Ampezzo BL
11. **Sky Garden & Wellness R.** — Arsi�
   - slug: `sky-garden-wellness-r-arsi`
   - indirizzo: Via Masi Simonetti, 26, 32100 Belluno BL
12. **Sporthotel Arabba** — Arsi�
   - slug: `sporthotel-arabba-arsi`
   - indirizzo: Via Mesdi Arabba, 76, 32020 Arabba BL
13. **TH Borca di Cadore - Park Hotel Des Dolomites** — Arsi�
   - slug: `th-borca-di-cadore-park-hotel-des-dolomites-arsi`
   - indirizzo: V. Roma, 81, 32040 Borca di Cadore BL
14. **TH Cadore - Hotel Antelao** — Arsi�
   - slug: `th-cadore-hotel-antelao-arsi`
   - indirizzo: V. Roma, 11, 32040 Borca di Cadore BL
15. **A casa dei Miei** — Arsoli
   - slug: `a-casa-dei-miei-arsoli`
   - indirizzo: SP26/a, 33, 02024 Castelluccio RI
16. **Agriturismo Incantesimo del Lago Salto** — Arsoli
   - slug: `agriturismo-incantesimo-del-lago-salto-arsoli`
   - indirizzo: Strada provinciale 27 Km 1, 02020 Varco Sabino RI
17. **Agriturismo la Ferrera** — Arsoli
   - slug: `agriturismo-la-ferrera-arsoli`
   - indirizzo: Via Giovanni Xxiii,, 02020 Varco Sabino RI
18. **B & B CASALE FREZZINI** — Arsoli
   - slug: `b-b-casale-frezzini-arsoli`
   - indirizzo: CONTRADA COLLI, N 6, 67068 Scurcola Marsicana AQ
19. **B&B Ad Un Passo Dal Cielo** — Arsoli
   - slug: `b-b-ad-un-passo-dal-cielo-arsoli`
   - indirizzo: Via Palazzo, 3, 67065 Pietrasecca AQ
20. **B&B Casa di Orazio** — Arsoli
   - slug: `b-b-casa-di-orazio-arsoli`
   - indirizzo: Via di Ponte Trave, 4, 00020 Roccagiovine RM
21. **B&B Fiume** — Arsoli
   - slug: `b-b-fiume-arsoli`
   - indirizzo: Via Camillo Benso Conte di Cavour, 149B, 67050 La Grancia AQ
22. **B&B Il Sogno nel Vento** — Arsoli
   - slug: `b-b-il-sogno-nel-vento-arsoli`
   - indirizzo: Via Dritta, 28, 67061 Tufo, AQ
23. **B&B Sogno e Realtà** — Arsoli
   - slug: `b-b-sogno-e-realta-arsoli`
   - indirizzo: Via Goffredo Mameli, 20, 67061 Carsoli AQ
24. **Le Macchie** — Arsoli
   - slug: `le-macchie-arsoli`
   - indirizzo: Località Colle del Prete, 00023 Arsoli RM
25. **RG Maison** — Arsoli
   - slug: `rg-maison-arsoli`
   - indirizzo: Via della Vittoria, 67050 La Grancia AQ
26. **Sole** — Arsoli
   - slug: `sole-arsoli`
   - indirizzo: Via dell'Alloro, 9/15, 00172 Roma RM
27. **Sole e Luna** — Arsoli
   - slug: `sole-e-luna-arsoli`
   - indirizzo: Via Merulana, 117, 00185 Roma RM
28. **Al Fogolâr Rooms & Osteria** — Arta Terme
   - slug: `al-fogolar-rooms-osteria-arta-terme`
   - indirizzo: Via Udine, 15, 33020 Verzegnis UD
29. **Albergo Cristofoli** — Arta Terme
   - slug: `albergo-cristofoli-arta-terme`
   - indirizzo: Via Giacomo Matteotti, 10, 33014 Treppo Ligosullo UD
30. **Albergo Hotel Park Oasi** — Arta Terme
   - slug: `albergo-hotel-park-oasi-arta-terme`
   - indirizzo: Viale delle Terme, 15, 33022 Piano D'arta UD
31. **Casa Zarabara** — Arta Terme
   - slug: `casa-zarabara-arta-terme`
   - indirizzo: Via Chiusini, 2, 33022 Arta Terme UD
32. **Hotel Cella** — Arta Terme
   - slug: `hotel-cella-arta-terme`
   - indirizzo: Via Umberto I, 50, 33022 Arta Terme UD
33. **Hotel La Perla - Restaurant&Wellness** — Arta Terme
   - slug: `hotel-la-perla-restaurant-wellness-arta-terme`
   - indirizzo: Via S. Spirito, 43, 33020 Ravascletto UD
34. **Hotel Ristorante Del Negro** — Arta Terme
   - slug: `hotel-ristorante-del-negro-arta-terme`
   - indirizzo: Via Roma, 55, 33020 Sutrio UD
35. **Hotel Saustri** — Arta Terme
   - slug: `hotel-saustri-arta-terme`
   - indirizzo: Via Risorgimento, 21, 33020 Sutrio UD