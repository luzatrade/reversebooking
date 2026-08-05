# Blocco 68/500 — 35 strutture senza descrizione IT

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

1. **Hotel Pizzeria Miravalle** — Alessandria della Rocca
   - slug: `hotel-pizzeria-miravalle-alessandria-della-rocca`
   - indirizzo: Via Circonvallazione, 2, 92016 Ribera AG
2. **Hotel Residence 11 Ponti** — Alessandria della Rocca
   - slug: `hotel-residence-11-ponti-alessandria-della-rocca`
   - indirizzo: Contrada Canalotto, 90038 Prizzi PA
3. **La Tana del Lupo** — Alessandria della Rocca
   - slug: `la-tana-del-lupo-alessandria-della-rocca`
   - indirizzo: Via Nuova, 1, 92020 San Giovanni Gemini AG
4. **OSPITALITA' MELIA** — Alessandria della Rocca
   - slug: `ospitalita-melia-alessandria-della-rocca`
   - indirizzo: Via Arco, 17, 92020 Santo Stefano Quisquina AG
5. **Pizzuco holiday rooms** — Alessandria della Rocca
   - slug: `pizzuco-holiday-rooms-alessandria-della-rocca`
   - indirizzo: Via Volturno, 92010 Montallegro AG
6. **Sicilian Manor** — Alessandria della Rocca
   - slug: `sicilian-manor-alessandria-della-rocca`
   - indirizzo: Via Favorita, 92020 Villafranca Sicula AG
7. **Sweety House** — Alessandria della Rocca
   - slug: `sweety-house-alessandria-della-rocca`
   - indirizzo: Via S. Luigi Gonzaga, 24, 92020 San Giovanni Gemini AG
8. **Agriturismo Terra di Leuca** — Alessano
   - slug: `agriturismo-terra-di-leuca-alessano`
   - indirizzo: Via S. Marina, 73050 Ruggiano LE
9. **B&B A casa di Paolo** — Alessano
   - slug: `b-b-a-casa-di-paolo-alessano`
   - indirizzo: Contrada Terramessere, 9, 73031 Alessano LE
10. **B&B il Baiocco** — Alessano
   - slug: `b-b-il-baiocco-alessano`
   - indirizzo: Via Genova, 22, 73030 Tiggiano LE
11. **B&B Masseria Lu Palummaru** — Alessano
   - slug: `b-b-masseria-lu-palummaru-alessano`
   - indirizzo: Via Vigna la Corte, 47, 73031 Alessano LE
12. **Borgo Specchia Natural Resort** — Alessano
   - slug: `borgo-specchia-natural-resort-alessano`
   - indirizzo: Contrada Caiaffa, 73040 Specchia LE
13. **Corte Manfredi** — Alessano
   - slug: `corte-manfredi-alessano`
   - indirizzo: Corte Manfredi, 5, 73031 Alessano LE
14. **Hotel Adriatico** — Alessano
   - slug: `hotel-adriatico-alessano`
   - indirizzo: Via Giuseppe Tartini, 34, 73039 Tricase LE
15. **Hotel Colibrì** — Alessano
   - slug: `hotel-colibri-alessano`
   - indirizzo: Via Boceti, 1/3, 73031 Alessano LE
16. **Hotel Salento** — Alessano
   - slug: `hotel-salento-alessano`
   - indirizzo: Stra Povinciale, Via Miggiano Specchia, 53, 73040 Specchia LE
17. **L'Assunta B&B** — Alessano
   - slug: `l-assunta-b-b-alessano`
   - indirizzo: Via Alessio Comneno, 58, 73031 Alessano LE
18. **La Natura Agriturismo e Campeggio** — Alessano
   - slug: `la-natura-agriturismo-e-campeggio-alessano`
   - indirizzo: SP210, 73033 Alessano LE
19. **Le Lantane Luxury Rooms** — Alessano
   - slug: `le-lantane-luxury-rooms-alessano`
   - indirizzo: Via Gonfalone, 73031 Alessano LE
20. **Masseria Delle Rose** — Alessano
   - slug: `masseria-delle-rose-alessano`
   - indirizzo: Contrada Trappeti, 34, 73031 Alessano LE
21. **Palazzo Ducale Sangiovanni** — Alessano
   - slug: `palazzo-ducale-sangiovanni-alessano`
   - indirizzo: Piazza Castello, 26, 73031 Alessano LE
22. **Palazzo San Giovanni** — Alessano
   - slug: `palazzo-san-giovanni-alessano`
   - indirizzo: Vico S. Giovanni, 31, 73040 Morciano di Leuca LE
23. **Pulia Dimore Salentine B&B** — Alessano
   - slug: `pulia-dimore-salentine-b-b-alessano`
   - indirizzo: Via Francesco Storella, 27, 73031 Alessano LE
24. **Room & Breakfast Antonuccio** — Alessano
   - slug: `room-breakfast-antonuccio-alessano`
   - indirizzo: Via C. Sangiovanni, 35, 73031 Alessano LE
25. **Sirio13** — Alessano
   - slug: `sirio13-alessano`
   - indirizzo: Corso Roma, Via Enrico Toti, 8, 73039 Tricase LE
26. **Villa B&B Antiche Macine del Salento nel cuore del Salento - villetta con piscina - punto strategico spiaggia del Salento** — Alessano
   - slug: `villa-b-b-antiche-macine-del-salento-nel-cuore-d-alessano`
   - indirizzo: Via Giuseppe Mazzini, 2a, 73050 Ruggiano LE
27. **Villa Ciardo** — Alessano
   - slug: `villa-ciardo-alessano`
   - indirizzo: Piazza, Via don Tonino Bello, 25, 73031 Alessano LE
28. **Agriturismo Santa Chiara** — Alezio
   - slug: `agriturismo-santa-chiara-alezio`
   - indirizzo: Via Parabita, 73011 Alezio LE
29. **B&B Mandarino e Arancio by Montedelia Tour** — Alezio
   - slug: `b-b-mandarino-e-arancio-by-montedelia-tour-alezio`
   - indirizzo: Via Roma, 294, 73011 Alezio LE
30. **B&B Residenza Celeste** — Alezio
   - slug: `b-b-residenza-celeste-alezio`
   - indirizzo: Via Lizza, 57, 73011 Alezio LE
31. **B&B Sant'Antonio Gallipoli** — Alezio
   - slug: `b-b-sant-antonio-gallipoli-alezio`
   - indirizzo: SP361, 73014 Gallipoli LE
32. **Casale Donna Rosa** — Alezio
   - slug: `casale-donna-rosa-alezio`
   - indirizzo: Via, 73017 Tuglie LE
33. **Gioia del Mare** — Alezio
   - slug: `gioia-del-mare-alezio`
   - indirizzo: Via della Chiesa, 3, 73014 Baia Verde LE
34. **La casa di Chloé** — Alezio
   - slug: `la-casa-di-chloe-alezio`
   - indirizzo: Via Leonardi, Sn, 73011 Alezio LE
35. **La Fenice Salentina B&B** — Alezio
   - slug: `la-fenice-salentina-b-b-alezio`
   - indirizzo: Via Carlo Alberto dalla Chiesa, 33, 73011 Alezio LE