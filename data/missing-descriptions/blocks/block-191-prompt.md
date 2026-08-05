# Blocco 191/500 — 35 strutture senza descrizione IT

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

1. **Bed And Breakfast Gemma** — Badia Calavena
   - slug: `bed-and-breakfast-gemma-badia-calavena`
   - indirizzo: V. Catena, 5, 37023 Grezzana VR
2. **Ca' del Diaolo Ristorante, Camere, Bar** — Badia Calavena
   - slug: `ca-del-diaolo-ristorante-camere-bar-badia-calavena`
   - indirizzo: Via Ca' del diavolo, 4b, 37030 Badia Calavena VR
3. **Corte Baccoi B&B** — Badia Calavena
   - slug: `corte-baccoi-b-b-badia-calavena`
   - indirizzo: Via Baccoi, 30, 37028 San Rocco VR
4. **Corte Bonfiglio Colombari** — Badia Calavena
   - slug: `corte-bonfiglio-colombari-badia-calavena`
   - indirizzo: Località Bonfiglio, 1, 37031 Illasi VR
5. **Corte Grisi** — Badia Calavena
   - slug: `corte-grisi-badia-calavena`
   - indirizzo: Piazza Mercato, 20, 37030 Badia Calavena VR
6. **Corte Marani - Country & Adventure Retreat** — Badia Calavena
   - slug: `corte-marani-country-adventure-retreat-badia-calavena`
   - indirizzo: via Lupatini, 1, 37030 Badia Calavena VR
7. **COUNTRY HOUSE MALGA ZEBARI** — Badia Calavena
   - slug: `country-house-malga-zebari-badia-calavena`
   - indirizzo: Contrada Zebari, 1, 37030 Velo Veronese VR
8. **Hotel Cristina** — Badia Calavena
   - slug: `hotel-cristina-badia-calavena`
   - indirizzo: Via Piazza, 45, 37028 San Rocco di Piegara, Roverè Veronese VR
9. **Hotel Scandola Ristorante Pizzeria** — Badia Calavena
   - slug: `hotel-scandola-ristorante-pizzeria-badia-calavena`
   - indirizzo: Piazza V Corti, 37 Località, 37021 Corbiolo VR
10. **Il Sentiero B&B** — Badia Calavena
   - slug: `il-sentiero-b-b-badia-calavena`
   - indirizzo: contrada Giusi, 7, 37020 Cerro Veronese VR
11. **Ostello La Sosta** — Badia Calavena
   - slug: `ostello-la-sosta-badia-calavena`
   - indirizzo: Piazza Sant'Andrea, 8, 37030 Sant'Andrea VR
12. **Palazzo Fritz** — Badia Calavena
   - slug: `palazzo-fritz-badia-calavena`
   - indirizzo: Via Roma, 3, 37030 Badia Calavena VR
13. **RESIDENCE VILLA VINCO** — Badia Calavena
   - slug: `residence-villa-vinco-badia-calavena`
   - indirizzo: Via Roma, 27, 37039 Verona VR
14. **Ai Due Taxodi di Azienda Agricola Pratolina Sas** — Badia Pavese
   - slug: `ai-due-taxodi-di-azienda-agricola-pratolina-sas-badia-pavese`
   - indirizzo: Cascina Pezzanchera, 27010 Badia Pavese PV
15. **B&B Dragonfly** — Badia Pavese
   - slug: `b-b-dragonfly-badia-pavese`
   - indirizzo: Viale Certosa, 13, 27013 Certosa di Pavia PV
16. **Hotel Badia Hill** — Badia Pavese
   - slug: `hotel-badia-hill-badia-pavese`
   - indirizzo: Str. Damez, 2A, 39036 Badia BZ
17. **Paviaaffittacamere affittacamere** — Badia Pavese
   - slug: `paviaaffittacamere-affittacamere-badia-pavese`
   - indirizzo: Via Giovanni Rasori, 1, 27100 Pavia PV
18. **Agriturismo La Bicocca** — Badia Polesine
   - slug: `agriturismo-la-bicocca-badia-polesine`
   - indirizzo: Via Giuseppe Garibaldi, 170, 46028 Felonica MN
19. **Agriturismo La Bisa** — Badia Polesine
   - slug: `agriturismo-la-bisa-badia-polesine`
   - indirizzo: Via Tenuta Spalletti, 400, 45027 Trecenta RO
20. **Agriturismo Le Clementine** — Badia Polesine
   - slug: `agriturismo-le-clementine-badia-polesine`
   - indirizzo: Via Colombano, 1239/B, 45021 Badia Polesine RO
21. **Alla Nave di Corradin Ivan e Filippo Snc** — Badia Polesine
   - slug: `alla-nave-di-corradin-ivan-e-filippo-snc-badia-polesine`
   - indirizzo: Via Garibaldi, 2, 35040 Masi PD
22. **Amy&Julie Bed&Breakfast** — Badia Polesine
   - slug: `amy-julie-bed-breakfast-badia-polesine`
   - indirizzo: Via Cà Giovanelli, 13, 45021 Crocetta RO
23. **B&B Lilla All'Adige** — Badia Polesine
   - slug: `b-b-lilla-all-adige-badia-polesine`
   - indirizzo: Via S. Luigi Gonzaga, 10, 37045 Ocara VR
24. **B&B RB** — Badia Polesine
   - slug: `b-b-rb-badia-polesine`
   - indirizzo: Via Giovecca, 65, 45030 Gaiba RO
25. **B&B Sweet Home** — Badia Polesine
   - slug: `b-b-sweet-home-badia-polesine`
   - indirizzo: Via G. Ghirardini, 100, 45021 Badia Polesine RO
26. **Hotel Alla Nave** — Badia Polesine
   - slug: `hotel-alla-nave-badia-polesine`
   - indirizzo: Via Garibaldi, N°2, 35040 Masi PD
27. **HOTEL LORY FICAROLO** — Badia Polesine
   - slug: `hotel-lory-ficarolo-badia-polesine`
   - indirizzo: Via delle Regioni, 880/a, 45036 Ficarolo RO
28. **La Bussola Badia Polesine - Camere & Appartamenti** — Badia Polesine
   - slug: `la-bussola-badia-polesine-camere-appartamenti-badia-polesine`
   - indirizzo: Via Leonardo Da Vinci, 185, 45021 Badia Polesine RO
29. **Relax a Badia Polesine** — Badia Polesine
   - slug: `relax-a-badia-polesine-badia-polesine`
   - indirizzo: V. Fratelli Rosselli, 72, 45021 Badia Polesine RO
30. **Santa Sofia Suite Lendinara Hotel** — Badia Polesine
   - slug: `santa-sofia-suite-lendinara-hotel-badia-polesine`
   - indirizzo: Via Baccari, 1, 45026 Lendinara RO
31. **Agriturismo Il Casalone** — Badia Tedalda
   - slug: `agriturismo-il-casalone-badia-tedalda`
   - indirizzo: Località San Patrignano, 53, 52032 Badia Tedalda AR
32. **Agriturismo Il Falco** — Badia Tedalda
   - slug: `agriturismo-il-falco-badia-tedalda`
   - indirizzo: Località Trappola, 7, 47028 Alfero FC
33. **Agriturismo Pian di Botta** — Badia Tedalda
   - slug: `agriturismo-pian-di-botta-badia-tedalda`
   - indirizzo: Strada Comunale Pian di Botta, 13, 52032 Badia Tedalda AR
34. **Agriturismo Segalare** — Badia Tedalda
   - slug: `agriturismo-segalare-badia-tedalda`
   - indirizzo: Unnamed Road 52036, 52036 Pieve Santo Stefano AR
35. **Agriturismo Villaggio Eden** — Badia Tedalda
   - slug: `agriturismo-villaggio-eden-badia-tedalda`
   - indirizzo: Località Sant'Apollinare, 17, 52036 Pieve Santo Stefano AR