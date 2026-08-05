# Blocco 61/500 — 35 strutture senza descrizione IT

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

1. **La Corte e L'Uva** — Albiolo
   - slug: `la-corte-e-l-uva-albiolo`
   - indirizzo: Via A. Volta, 16, 22077 Olgiate Comasco CO
2. **La Maison di Gio & Gio** — Albiolo
   - slug: `la-maison-di-gio-gio-albiolo`
   - indirizzo: Via Pier Amato Perretta, 19 a, 22077 Olgiate Comasco CO
3. **Madonnina Albergo Ristorante** — Albiolo
   - slug: `madonnina-albergo-ristorante-albiolo`
   - indirizzo: Largo Lanfranco da Ligurno, 1, 21050 Cantello VA
4. **Maryhouse** — Albiolo
   - slug: `maryhouse-albiolo`
   - indirizzo: Via Monte Nero, 11, 21040 Venegono Superiore VA
5. **Riarel | B&B - Rooms and hospitality** — Albiolo
   - slug: `riarel-b-b-rooms-and-hospitality-albiolo`
   - indirizzo: Via S. Maffeo, 17, 22070 Rodero CO
6. **Sweet House** — Albiolo
   - slug: `sweet-house-albiolo`
   - indirizzo: V. Sarfatti, 3, 22042 San Fermo della Battaglia CO
7. **Villa Sapi** — Albiolo
   - slug: `villa-sapi-albiolo`
   - indirizzo: Via Roma, 19, 21051 Arcisate VA
8. **Albergo Blue Fish** — Albisola Superiore
   - slug: `albergo-blue-fish-albisola-superiore`
   - indirizzo: Corso Filippo Ferrari, 152, 17013 Albisola Superiore SV
9. **Albisola Bed&Breakfast anche per lavoratori | Casa Vacanze | B&B Albisola (SAVONA)** — Albisola Superiore
   - slug: `albisola-bed-breakfast-anche-per-lavoratori-casa-albisola-superiore`
   - indirizzo: Corso Italia, 3, 17013 Albisola Superiore SV
10. **Antica Dimora Rooms** — Albisola Superiore
   - slug: `antica-dimora-rooms-albisola-superiore`
   - indirizzo: Via della Rovere, 13, 17013 Albisola Superiore SV
11. **B&B Capo Torre Resort & SPA** — Albisola Superiore
   - slug: `b-b-capo-torre-resort-spa-albisola-superiore`
   - indirizzo: Via Torre del Capo, 42, 17013 Albisola Superiore SV
12. **Cà du Praettu** — Albisola Superiore
   - slug: `ca-du-praettu-albisola-superiore`
   - indirizzo: Via alla Maddalena, 13, 17013 Ellera SV
13. **Campeggio Parco Vacanze Anita** — Albisola Superiore
   - slug: `campeggio-parco-vacanze-anita-albisola-superiore`
   - indirizzo: Corso Filippo Ferrari, 206, 17011 Albisola Superiore SV
14. **Hotel Acqua Marina** — Albisola Superiore
   - slug: `hotel-acqua-marina-albisola-superiore`
   - indirizzo: Via Matteo Repetto, 108, 17012 Albissola Marina SV
15. **Hotel Europa** — Albisola Superiore
   - slug: `hotel-europa-albisola-superiore`
   - indirizzo: Viale Liguria, 22, 17012 Albissola Marina SV
16. **Hotel Flora** — Albisola Superiore
   - slug: `hotel-flora-albisola-superiore`
   - indirizzo: Via Monte Tabor, 47, 17015 Celle Ligure SV
17. **Hotel Garden Albisola marina** — Albisola Superiore
   - slug: `hotel-garden-albisola-marina-albisola-superiore`
   - indirizzo: Viale Alessandro Faraggiana, 6, 17012 Albissola Marina SV
18. **Hotel Ristorante Onda Azzurra** — Albisola Superiore
   - slug: `hotel-ristorante-onda-azzurra-albisola-superiore`
   - indirizzo: Via Cesare Battisti, 8, 17013 Albisola Superiore SV
19. **Hotel San Giorgio** — Albisola Superiore
   - slug: `hotel-san-giorgio-albisola-superiore`
   - indirizzo: Corso Giuseppe Mazzini, 24, 17013 Albisola Superiore SV
20. **Idea Hotel Savona** — Albisola Superiore
   - slug: `idea-hotel-savona-albisola-superiore`
   - indirizzo: Piazza Di Vittorio 2 c/o C.Comm. Le Officine, 17100 Savona SV
21. **Mare Hotel** — Albisola Superiore
   - slug: `mare-hotel-albisola-superiore`
   - indirizzo: Via Nizza, 89r, 17100 Savona SV
22. **Nonna Rina b&b** — Albisola Superiore
   - slug: `nonna-rina-b-b-albisola-superiore`
   - indirizzo: Via degli Orefici, 5, 17100 Savona SV
23. **Park Hotel** — Albisola Superiore
   - slug: `park-hotel-albisola-superiore`
   - indirizzo: Via Alba Docilia, 3, 17013 Albisola Superiore SV
24. **Riobasco Guesthouse** — Albisola Superiore
   - slug: `riobasco-guesthouse-albisola-superiore`
   - indirizzo: Via della Rovere, 102, 17013 Albisola Superiore SV
25. **Vittoria** — Albisola Superiore
   - slug: `vittoria-albisola-superiore`
   - indirizzo: Viale Giovanni Battista Perata, 17012 Albissola Marina SV
26. **Albergo Belvedere** — Albissola Marina
   - slug: `albergo-belvedere-albissola-marina`
   - indirizzo: Via F. Gentile, 62, 17012 Albissola Marina SV
27. **B&B HOTEL Riviera Celle Ligure** — Albissola Marina
   - slug: `b-b-hotel-riviera-celle-ligure-albissola-marina`
   - indirizzo: Via Federico Colla, 55, 17015 Celle Ligure SV
28. **B&B HOTEL Savona** — Albissola Marina
   - slug: `b-b-hotel-savona-albissola-marina`
   - indirizzo: Via Nizza, 62, 17100 Savona SV
29. **Bed & Breakfast Gioiello** — Albissola Marina
   - slug: `bed-breakfast-gioiello-albissola-marina`
   - indirizzo: Via Monte Tabor, 65, 17015 Celle Ligure SV
30. **Camera Asia** — Albissola Marina
   - slug: `camera-asia-albissola-marina`
   - indirizzo: Via Poggio dell'Orizzonte, 63, 17012 Albissola Marina SV
31. **Hotel Nuovo Metropol** — Albissola Marina
   - slug: `hotel-nuovo-metropol-albissola-marina`
   - indirizzo: Via Filippo Gentile, 1, 17012 Albissola Marina SV
32. **Joy bandb** — Albissola Marina
   - slug: `joy-bandb-albissola-marina`
   - indirizzo: Via Barrili, 6, 17012 Albissola Marina SV
33. **Ostello "Le Stuoie"** — Albissola Marina
   - slug: `ostello-le-stuoie-albissola-marina`
   - indirizzo: Via Italia, 49, 17012 Albissola Marina SV
34. **Agriturismo Laghi d'Insubria Albizzate.** — Albizzate
   - slug: `agriturismo-laghi-d-insubria-albizzate-albizzate`
   - indirizzo: Via Cascina Bertolina, 5, 21041 Albizzate VA
35. **B&B il Cortile** — Albizzate
   - slug: `b-b-il-cortile-albizzate`
   - indirizzo: Via Torino, 63, 21011 Casorate Sempione VA