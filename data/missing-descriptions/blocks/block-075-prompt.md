# Blocco 75/500 — 35 strutture senza descrizione IT

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

1. **Le Cortiglie Affittacamere** — Alife
   - slug: `le-cortiglie-affittacamere-alife`
   - indirizzo: Via Gianfrancesco Trutta, 14, 81016 Piedimonte Matese CE
2. **PURA Smart Veg Farmhouse - Il Rifugio Pecorella** — Alife
   - slug: `pura-smart-veg-farmhouse-il-rifugio-pecorella-alife`
   - indirizzo: Via San Salvatore, 42, 81012 Alvignano CE
3. **RAJA ROOMS** — Alife
   - slug: `raja-rooms-alife`
   - indirizzo: Viale Caduti Sul Lavoro, 86, 81011 Alife CE
4. **Ruviano La Torre** — Alife
   - slug: `ruviano-la-torre-alife`
   - indirizzo: Via Orientale, 1, 81010 Ruviano CE
5. **Vernelle Country Resort** — Alife
   - slug: `vernelle-country-resort-alife`
   - indirizzo: Via Mulino Vernelle, 81011 Zona Industriale, Alife CE
6. **Agriturismo Capuano** — Alimena
   - slug: `agriturismo-capuano-alimena`
   - indirizzo: Ctr. Capuano, 90024 Gangi PA
7. **Agriturismo Gelso** — Alimena
   - slug: `agriturismo-gelso-alimena`
   - indirizzo: Loc. catalani Castellana Sicula, 90020 Castellana Sicula PA
8. **Agriturismo Giardino Donna Lavia - Polizzi Generosa - Parco delle Madonie - Ristorante** — Alimena
   - slug: `agriturismo-giardino-donna-lavia-polizzi-generos-alimena`
   - indirizzo: Contrada Donna Laura, SNC, 90028 Polizzi Generosa PA
9. **Agriturismo Monaco di Mezzo** — Alimena
   - slug: `agriturismo-monaco-di-mezzo-alimena`
   - indirizzo: Contrada Monaco di Mezzo, 90027 Petralia Sottana PA
10. **Agriturismo Villa Assunta** — Alimena
   - slug: `agriturismo-villa-assunta-alimena`
   - indirizzo: C/da Musciarello, 93018 Santa Caterina Villarmosa CL
11. **B&B A Casa dei Nonni** — Alimena
   - slug: `b-b-a-casa-dei-nonni-alimena`
   - indirizzo: Via Sant'Agata, 127, 94100 Enna EN
12. **B&B il Galletto r…** — Alimena
   - slug: `b-b-il-galletto-r-alimena`
   - indirizzo: Via Rocca Castello, 13, 90024 Gangi PA
13. **B&B La Casa In Pietra** — Alimena
   - slug: `b-b-la-casa-in-pietra-alimena`
   - indirizzo: Via Piano Castelnuovo, 16, 93018 Santa Caterina Villarmosa CL
14. **B&B MADONIE Guest House** — Alimena
   - slug: `b-b-madonie-guest-house-alimena`
   - indirizzo: MADONIE Guest House, 90026 Petralia Soprana PA
15. **B&B Proserpina** — Alimena
   - slug: `b-b-proserpina-alimena`
   - indirizzo: Via Sant'Agata, 108, 94100 Enna EN
16. **Casa del monte Locazione Turistica** — Alimena
   - slug: `casa-del-monte-locazione-turistica-alimena`
   - indirizzo: Via Silvio Pellico, 19, 94100 Enna EN
17. **Castello Piraino** — Alimena
   - slug: `castello-piraino-alimena`
   - indirizzo: Contrada Piraino, 93018 Santa Caterina Villarmosa CL
18. **Donna Vì Hotel** — Alimena
   - slug: `donna-vi-hotel-alimena`
   - indirizzo: Via della Libertà, 11, 90054 Geraci Siculo PA
19. **Hotel Residenza Petra** — Alimena
   - slug: `hotel-residenza-petra-alimena`
   - indirizzo: Via Errante, 5, 90026 Petralia Soprana PA
20. **LA CASA DEL BORGO** — Alimena
   - slug: `la-casa-del-borgo-alimena`
   - indirizzo: Via Nazionale, 27, 90026 Petralia Soprana PA
21. **Locanda di Cadì** — Alimena
   - slug: `locanda-di-cadi-alimena`
   - indirizzo: Borgo Cipampini, 90026 Petralia Soprana PA
22. **Locanda Susuiusu** — Alimena
   - slug: `locanda-susuiusu-alimena`
   - indirizzo: Via S. Girolamo, 45, 94100 Enna EN
23. **P&G DESIGN BY LAGO WELCOME** — Alimena
   - slug: `p-g-design-by-lago-welcome-alimena`
   - indirizzo: Via Fratelli Attilio e Guido Vigna, 121/123, 94100 Enna EN
24. **Un Posto Al Sole** — Alimena
   - slug: `un-posto-al-sole-alimena`
   - indirizzo: contrada milicia, 93018 Caltanissetta CL
25. **Agriturismo Villa Splendore - Ristorante tipico con piscina e camere, sicilian restaurant** — Aliminusa
   - slug: `agriturismo-villa-splendore-ristorante-tipico-co-aliminusa`
   - indirizzo: Contrada Baiata- Spinasanta S.S.120, Km 9, 500, 90052 Cerda PA
26. **B&B "Da Nina"** — Aliminusa
   - slug: `b-b-da-nina-aliminusa`
   - indirizzo: Via Libertà, 92, 90010 Lascari PA
27. **B&B Giardino dei Cedri** — Aliminusa
   - slug: `b-b-giardino-dei-cedri-aliminusa`
   - indirizzo: Via Giardini 1, a, 90019 Trabia PA
28. **B&B Ottolune Accomodations** — Aliminusa
   - slug: `b-b-ottolune-accomodations-aliminusa`
   - indirizzo: Via Salvatore Cipolla, 60, 90010 Campofelice di Roccella PA
29. **Bed And Breakfast Ulivo** — Aliminusa
   - slug: `bed-and-breakfast-ulivo-aliminusa`
   - indirizzo: Via Ettore Maiorana, 75, 90019 Trabia PA
30. **Belvedere Rent Rooms** — Aliminusa
   - slug: `belvedere-rent-rooms-aliminusa`
   - indirizzo: Via Imera, 4, 90010 Campofelice di Roccella PA
31. **Casa Siciliana Altarbiah** — Aliminusa
   - slug: `casa-siciliana-altarbiah-aliminusa`
   - indirizzo: Contrada Spinasanta, 90019 Trabia PA
32. **Il Muretto** — Aliminusa
   - slug: `il-muretto-aliminusa`
   - indirizzo: Via S. Chiaramonte, 16, 90010 Lascari PA
33. **Il Vittoria Lascari** — Aliminusa
   - slug: `il-vittoria-lascari-aliminusa`
   - indirizzo: Via Gugliuzza Croce, 34, 90010 Lascari PA
34. **La Cycas** — Aliminusa
   - slug: `la-cycas-aliminusa`
   - indirizzo: Via Sardegna, 10, 90019 Trabia PA
35. **STONE HOUSE** — Aliminusa
   - slug: `stone-house-aliminusa`
   - indirizzo: Via Scuole, 22, 90020 Montemaggiore Belsito PA