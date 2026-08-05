# Blocco 498/500 — 35 strutture senza descrizione IT

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

1. **Shimokita Stay シモキタステイ** — Tokyo
   - slug: `shimokita-stay-tokyo`
   - indirizzo: 2-chōme-27-2 Kitazawa, Setagaya City, Tokyo 155-0031
2. **Shinjuku Washington Hotel** — Tokyo
   - slug: `shinjuku-washington-hotel-tokyo`
   - indirizzo: 3-chōme-2-9 Nishishinjuku, Shinjuku City, Tokyo 160-8336
3. **Smile Hotel Tokyo Asagaya** — Tokyo
   - slug: `smile-hotel-tokyo-asagaya-tokyo`
   - indirizzo: 3-chōme-37-11 Asagayaminami, Suginami City, Tokyo 166-0004
4. **The Knot Tokyo Shinjuku** — Tokyo
   - slug: `the-knot-tokyo-shinjuku-tokyo`
   - indirizzo: 4-chōme-31-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023
5. **WPÜ HOTEL** — Tokyo
   - slug: `wpu-hotel-tokyo`
   - indirizzo: 7-chōme-10-5 Nishishinjuku, Shinjuku City, Tokyo 160-0023
6. **Albergo Maccotta** — Trapani
   - slug: `albergo-maccotta-trapani`
   - indirizzo: Via Argentieri, 4, 91100 Trapani TP, Italia
7. **Albergo Room of Andrea - Palazzo Platamone** — Trapani
   - slug: `albergo-room-of-andrea-palazzo-platamone-trapani`
   - indirizzo: Viale Regina Margherita, 31, 91100 Trapani TP, Italia
8. **Albergo Russo** — Trapani
   - slug: `albergo-russo-trapani`
   - indirizzo: Via Tintori, 4, 91100 Trapani TP, Italia
9. **Albergo Tiziano** — Trapani
   - slug: `albergo-tiziano-trapani`
   - indirizzo: Via Giuseppe Rubino, 4, 91100 Trapani TP, Italia
10. **Albergo Vittoria** — Trapani
   - slug: `albergo-vittoria-trapani`
   - indirizzo: Via Francesco Crispi, 4, 91100 Trapani TP, Italia
11. **ALLA MARINA - BED AND BREAKFAST** — Trapani
   - slug: `alla-marina-bed-and-breakfast-trapani`
   - indirizzo: Viale Regina Elena, 4, 91100 Trapani TP, Italia
12. **B&B Il profumo del porto** — Trapani
   - slug: `b-b-il-profumo-del-porto-trapani`
   - indirizzo: Via Ammiraglio Staiti, 15, 91100 Trapani TP, Italia
13. **Bed & Breakfast Terrazze Villanova** — Trapani
   - slug: `bed-breakfast-terrazze-villanova-trapani`
   - indirizzo: Vicolo Villanova, 33, 91100 Trapani TP, Italia
14. **Bed and Breakfast "Le 5 Torri"** — Trapani
   - slug: `bed-and-breakfast-le-5-torri-trapani`
   - indirizzo: Via Fiscale, 4, 91100 Trapani TP, Italia
15. **Bed And Breakfast Il Cavaliere** — Trapani
   - slug: `bed-and-breakfast-il-cavaliere-trapani`
   - indirizzo: Via Pompeo Zuccalà, 19, 91100 Trapani TP, Italia
16. **Bed and Breakfast Il Quadrifoglio a Trapani - Casa Vacanze Trapani** — Trapani
   - slug: `bed-and-breakfast-il-quadrifoglio-a-trapani-casa-trapani`
   - indirizzo: Via Nettuno, 26, 91100 Trapani TP, Italia
17. **Bed And Breakfast Ligny** — Trapani
   - slug: `bed-and-breakfast-ligny-trapani`
   - indirizzo: Via Torre di Ligny, 14, 91100 Trapani TP, Italia
18. **Bed and Breakfast Via Spalti 52** — Trapani
   - slug: `bed-and-breakfast-via-spalti-52-trapani`
   - indirizzo: Via Spalti, 52, 91100 Trapani TP, Italia
19. **Central Gallery Rooms | Palazzo D'Alì Staiti XIX** — Trapani
   - slug: `central-gallery-rooms-palazzo-d-ali-staiti-xix-trapani`
   - indirizzo: Lungomare Dante Alighieri, 28, 91100 Trapani TP, Italia
20. **Drepanon, prospettive sul mediterraneo B&B** — Trapani
   - slug: `drepanon-prospettive-sul-mediterraneo-b-b-trapani`
   - indirizzo: Viale Regina Elena, 24, 91100 Trapani TP, Italia
21. **Giardini Mon Plaisir** — Trapani
   - slug: `giardini-mon-plaisir-trapani`
   - indirizzo: Via Giacomo Mistretta, 13, 91100 Trapani TP, Italia
22. **La Casa sul Mare - Bed & Breakfast** — Trapani
   - slug: `la-casa-sul-mare-bed-breakfast-trapani`
   - indirizzo: Via Torre di Ligny, 30, 91100 Trapani TP, Italia
23. **La Trinacria Rooms** — Trapani
   - slug: `la-trinacria-rooms-trapani`
   - indirizzo: Via Corallai, 49, 91100 Trapani TP, Italia
24. **Teti Sea View Rooms & Apts. Trapani City Center** — Trapani
   - slug: `teti-sea-view-rooms-apts-trapani-city-center-trapani`
   - indirizzo: Via Scudaniglio, 30, 91100 Trapani TP, Italia
25. **Vida Rooms** — Trapani
   - slug: `vida-rooms-trapani`
   - indirizzo: Via Francesco Manzo, 17, 91100 Trapani TP, Italia
26. **Albergo Trento** — Trento
   - slug: `albergo-trento-trento`
   - indirizzo: Corso Porta Nuova, 36, 37122 Verona VR, Italia
27. **B&B Eden** — Trento
   - slug: `b-b-eden-trento`
   - indirizzo: Via Roma, 27, 38122 Trento TN, Italia
28. **B&B HOTEL Trento** — Trento
   - slug: `b-b-hotel-trento-trento`
   - indirizzo: Via Innsbruck, 11, 38100 Trento TN, Italia
29. **B&B la Malvasia** — Trento
   - slug: `b-b-la-malvasia-trento`
   - indirizzo: Via della Malvasia, 77, 38122 Trento TN, Italia
30. **B&B Le Muse Trento** — Trento
   - slug: `b-b-le-muse-trento-trento`
   - indirizzo: Vicolo Cristoforo Madruzzo, 6, 38122 Trento TN, Italia
31. **B&B Margot Trento** — Trento
   - slug: `b-b-margot-trento-trento`
   - indirizzo: Via Andrea Maffei, 1, 38122 Trento TN, Italia
32. **B&B Palazzo Malfatti** — Trento
   - slug: `b-b-palazzo-malfatti-trento`
   - indirizzo: Via Rodolfo Belenzani, 47, 38122 Trento TN, Italia
33. **B&B PIEDICASTELLO** — Trento
   - slug: `b-b-piedicastello-trento`
   - indirizzo: Via Dòs Trento, 70, 38121 Trento TN, Italia
34. **B&B Trento nel Verde** — Trento
   - slug: `b-b-trento-nel-verde-trento`
   - indirizzo: Via Mesiano, 77/A, 38122 Trento TN, Italia
35. **Bed and Breakfast Relax** — Trento
   - slug: `bed-and-breakfast-relax-trento`
   - indirizzo: Via Giacomo Matteotti, 85, 38122 Trento TN, Italia