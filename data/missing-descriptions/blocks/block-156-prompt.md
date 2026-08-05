# Blocco 156/500 — 35 strutture senza descrizione IT

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

1. **Alloggio Franciscus** — Arqu� Petrarca
   - slug: `alloggio-franciscus-arqu-petrarca`
   - indirizzo: Via Valleselle, 20, 35032 Arquà Petrarca PD
2. **B&B Al Borgo** — Arqu� Petrarca
   - slug: `b-b-al-borgo-arqu-petrarca`
   - indirizzo: Via Ventolone, 4, 35032 Arquà Petrarca PD
3. **B&B Chez Vivì** — Arqu� Petrarca
   - slug: `b-b-chez-vivi-arqu-petrarca`
   - indirizzo: Via Palazzina, 28, 35032 Arquà Petrarca PD
4. **B&B e Centro Naturalistico Ambientale La finestra sui colli** — Arqu� Petrarca
   - slug: `b-b-e-centro-naturalistico-ambientale-la-finestr-arqu-petrarca`
   - indirizzo: Via Benavides, 16, 35030 Valle San Giorgio PD
5. **Cà Borgo delle Rane** — Arqu� Petrarca
   - slug: `ca-borgo-delle-rane-arqu-petrarca`
   - indirizzo: Via Savellon, 24, 35020 Pernumia PD
6. **domus rosarum** — Arqu� Petrarca
   - slug: `domus-rosarum-arqu-petrarca`
   - indirizzo: Via Mandonego, 9, 35032 Arquà Petrarca PD
7. **Holiday house Petrarca** — Arqu� Petrarca
   - slug: `holiday-house-petrarca-arqu-petrarca`
   - indirizzo: Via Fontanelle, 19, 35032 Arquà Petrarca PD
8. **Hotel Petrarca Terme** — Arqu� Petrarca
   - slug: `hotel-petrarca-terme-arqu-petrarca`
   - indirizzo: Piazza Roma, 23, 35036 Montegrotto Terme PD
9. **i grilli** — Arqu� Petrarca
   - slug: `i-grilli-arqu-petrarca`
   - indirizzo: Via Tormene, 13, 35030 Valle San Giorgio PD
10. **Locanda Viridarium** — Arqu� Petrarca
   - slug: `locanda-viridarium-arqu-petrarca`
   - indirizzo: Via Fontanelle, 5, 35032 Arquà Petrarca PD
11. **Locazione Turistica Borgo Petrarca** — Arqu� Petrarca
   - slug: `locazione-turistica-borgo-petrarca-arqu-petrarca`
   - indirizzo: Via Roma, 2, 35032 Arquà Petrarca PD
12. **Locazione Turistica La Giuggiola** — Arqu� Petrarca
   - slug: `locazione-turistica-la-giuggiola-arqu-petrarca`
   - indirizzo: Via Jacopo da Arquà, 28, 35032 Arquà Petrarca PD
13. **Agriturismo I Quarti** — Arqu� Polesine
   - slug: `agriturismo-i-quarti-arqu-polesine`
   - indirizzo: Via John Fitzgerald Kennedy, 1290, 45030 Guarda Veneta RO
14. **B&B Casa dell’Alma** — Arqu� Polesine
   - slug: `b-b-casa-dell-alma-arqu-polesine`
   - indirizzo: Via Magarino, 359, 45038 Polesella RO
15. **B&B Il giardino segreto** — Arqu� Polesine
   - slug: `b-b-il-giardino-segreto-arqu-polesine`
   - indirizzo: Via I Maggio, 18, 44033 Riva del Po FE
16. **B&B Le Sorbolare** — Arqu� Polesine
   - slug: `b-b-le-sorbolare-arqu-polesine`
   - indirizzo: Via Mascherine, 17, 45100 Rovigo RO
17. **B&B Morosini** — Arqu� Polesine
   - slug: `b-b-morosini-arqu-polesine`
   - indirizzo: Via Giuseppe Garibaldi, 353, 45038 Polesella RO
18. **Bed & Breakfast "Grandi Fiumi"** — Arqu� Polesine
   - slug: `bed-breakfast-grandi-fiumi-arqu-polesine`
   - indirizzo: Via Edmondo de Amicis, 3, 45100 Rovigo RO
19. **Bed and Breakfast " da Zio Gianni "** — Arqu� Polesine
   - slug: `bed-and-breakfast-da-zio-gianni-arqu-polesine`
   - indirizzo: Via Stazione, 581, 45025 Fratta Polesine RO
20. **Casa Alice** — Arqu� Polesine
   - slug: `casa-alice-arqu-polesine`
   - indirizzo: Via Raccano, 45030 Polesella RO
21. **Corte Bussari** — Arqu� Polesine
   - slug: `corte-bussari-arqu-polesine`
   - indirizzo: Via Valmolin Superiore, 1432, 45031 Arqua' Polesine RO
22. **Hotel I Laghetti Snc** — Arqu� Polesine
   - slug: `hotel-i-laghetti-snc-arqu-polesine`
   - indirizzo: SS16, 640, 45038 Polesella RO
23. **Hotel Italia** — Arqu� Polesine
   - slug: `hotel-italia-arqu-polesine`
   - indirizzo: Via Eridania, 115, 45030 Occhiobello RO
24. **La Bordeghina** — Arqu� Polesine
   - slug: `la-bordeghina-arqu-polesine`
   - indirizzo: Via Guglielmo Marconi, 1477, 45030 Pontecchio Polesine RO
25. **Motel Karibe** — Arqu� Polesine
   - slug: `motel-karibe-arqu-polesine`
   - indirizzo: Via G. Monti, 241/1, 45025 Fratta Polesine RO
26. **Torre del Po** — Arqu� Polesine
   - slug: `torre-del-po-arqu-polesine`
   - indirizzo: Via Novi, 140, 45030 Guarda Veneta RO
27. **UNA Hotels Occhiobello** — Arqu� Polesine
   - slug: `una-hotels-occhiobello-arqu-polesine`
   - indirizzo: Via Eridania, 36, 45030 Santa Maria Maddalena RO
28. **Villa Saraceni** — Arqu� Polesine
   - slug: `villa-saraceni-arqu-polesine`
   - indirizzo: Via Giuseppe Mazzini, 78, 45030 Chiesa RO
29. **agriturismo Corte Zecchina** — Arre
   - slug: `agriturismo-corte-zecchina-arre`
   - indirizzo: Via Beverare, 59, 35028 Piove di Sacco PD
30. **B&B Dora e Flavio** — Arre
   - slug: `b-b-dora-e-flavio-arre`
   - indirizzo: Via Pesare, 9/A, 35036 Montegrotto Terme PD
31. **B&B Il Centralino** — Arre
   - slug: `b-b-il-centralino-arre`
   - indirizzo: Via Gioacchino Rossini, 39, 35020 Legnaro PD
32. **Cà Sagredo Alloggi** — Arre
   - slug: `ca-sagredo-alloggi-arre`
   - indirizzo: Via Matteotti, 179, 35026 Conselve PD
33. **Ca' delle Rose** — Arre
   - slug: `ca-delle-rose-arre`
   - indirizzo: Via Canaletta Inferiore, 1, 35040 Pozzonovo PD
34. **Hotel Lanterna** — Arre
   - slug: `hotel-lanterna-arre`
   - indirizzo: Via A. Volta, 10, 35031 Abano Terme PD
35. **Hotel Majestic - Galzignano Resort Terme & Golf** — Arre
   - slug: `hotel-majestic-galzignano-resort-terme-golf-arre`
   - indirizzo: Viale delle Terme, 84, 35030 Galzignano Terme PD