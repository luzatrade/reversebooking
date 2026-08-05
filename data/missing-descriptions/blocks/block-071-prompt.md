# Blocco 71/500 — 35 strutture senza descrizione IT

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

1. **B&B Monferrato La Casa sui Tetti** — Alfiano Natta
   - slug: `b-b-monferrato-la-casa-sui-tetti-alfiano-natta`
   - indirizzo: Via Vittorio Veneto, 4, 15020 Villadeati AL
2. **B&B The Wine Room - MATUNEI** — Alfiano Natta
   - slug: `b-b-the-wine-room-matunei-alfiano-natta`
   - indirizzo: Via Umberto I, 12, 15021 Cardona AL
3. **Bricc e Foss** — Alfiano Natta
   - slug: `bricc-e-foss-alfiano-natta`
   - indirizzo: Via Roma, 48, 14031 Grana Monferrato AT
4. **Casa Rovelli** — Alfiano Natta
   - slug: `casa-rovelli-alfiano-natta`
   - indirizzo: Via S. Pietro, 15, 15021 Sanico AL
5. **Cascina Fazioli** — Alfiano Natta
   - slug: `cascina-fazioli-alfiano-natta`
   - indirizzo: Via Case Sparse, 23, 15020 Castelletto Merli AL
6. **Cascina Vicentini** — Alfiano Natta
   - slug: `cascina-vicentini-alfiano-natta`
   - indirizzo: Via S. Pietro, 23, 15021 Sanico AL
7. **Castello di Razzano - Relais, Ristorante, Museo e Cantina** — Alfiano Natta
   - slug: `castello-di-razzano-relais-ristorante-museo-e-ca-alfiano-natta`
   - indirizzo: strada gessi, 2, 15021 Alfiano Natta AL
8. **La casa di Babà** — Alfiano Natta
   - slug: `la-casa-di-baba-alfiano-natta`
   - indirizzo: via casa, Località Casa Paletti, 9, 15021 Alfiano Natta AL
9. **La Corte di Gerardo** — Alfiano Natta
   - slug: `la-corte-di-gerardo-alfiano-natta`
   - indirizzo: Via Don Lorenzo Milani, 32/34, 14039 Tonco AT
10. **La Villa di Pà** — Alfiano Natta
   - slug: `la-villa-di-pa-alfiano-natta`
   - indirizzo: Via Vittorio Veneto, 2, 15020 Villadeati AL
11. **Magalocanda | Stanze sotto il Castello** — Alfiano Natta
   - slug: `magalocanda-stanze-sotto-il-castello-alfiano-natta`
   - indirizzo: Via Castello, 7, 14030 Montemagno Monferrato AT
12. **Ristorante Albergo San Candido** — Alfiano Natta
   - slug: `ristorante-albergo-san-candido-alfiano-natta`
   - indirizzo: Via Casale, 7, 15020 Murisengo AL
13. **affitta camere Ravenna BLU DARSENA** — Alfonsine
   - slug: `affitta-camere-ravenna-blu-darsena-alfonsine`
   - indirizzo: Via Magazzini Anteriori, 27, 48122 Ravenna RA
14. **Agriturismo l'Angelina** — Alfonsine
   - slug: `agriturismo-l-angelina-alfonsine`
   - indirizzo: Via Puglie, 18, 48011 Alfonsine RA
15. **Al Gallo Trattoria & Locanda** — Alfonsine
   - slug: `al-gallo-trattoria-locanda-alfonsine`
   - indirizzo: Piazza Vincenzo Monti, 36/39, 48011 Alfonsine RA
16. **Albergo del Cuore** — Alfonsine
   - slug: `albergo-del-cuore-alfonsine`
   - indirizzo: Via Rocca Brancaleone, 42, 48121 Ravenna RA
17. **Amy Rooms** — Alfonsine
   - slug: `amy-rooms-alfonsine`
   - indirizzo: Via Antica Zecca, 6, 48121 Ravenna RA
18. **B&B La Quercia In Giardino** — Alfonsine
   - slug: `b-b-la-quercia-in-giardino-alfonsine`
   - indirizzo: Carrara Turchia, 7, 48022 Lugo RA
19. **B&B Villa Erika** — Alfonsine
   - slug: `b-b-villa-erika-alfonsine`
   - indirizzo: Via Provinciale Bagnara, 46, 48022 Lugo RA
20. **Casa Aurora** — Alfonsine
   - slug: `casa-aurora-alfonsine`
   - indirizzo: Via Giuseppe Pasolini, 27, 48121 Ravenna RA
21. **Hotel Bisanzio** — Alfonsine
   - slug: `hotel-bisanzio-alfonsine`
   - indirizzo: Via Salara, 30, 48121 Ravenna RA
22. **Hotel Diana** — Alfonsine
   - slug: `hotel-diana-alfonsine`
   - indirizzo: Via Girolamo Rossi, 47, 48100 Ravenna RA
23. **Hotel Italia** — Alfonsine
   - slug: `hotel-italia-alfonsine`
   - indirizzo: Viale Giorgio Pallavicini, 4, 48121 Ravenna RA
24. **HOTEL LA CANTINA** — Alfonsine
   - slug: `hotel-la-cantina-alfonsine`
   - indirizzo: Corso Giuseppe Garibaldi, 67/A, 48011 Alfonsine RA
25. **Hotel Roma** — Alfonsine
   - slug: `hotel-roma-alfonsine`
   - indirizzo: Via Candiano, 26, 48100 Ravenna RA
26. **La Casa di Biba** — Alfonsine
   - slug: `la-casa-di-biba-alfonsine`
   - indirizzo: Via Schiantamantello, 4, 48024 Sant'Agata sul Santerno RA
27. **Le Tre Gemme - Luxury Rooms** — Alfonsine
   - slug: `le-tre-gemme-luxury-rooms-alfonsine`
   - indirizzo: Via Antica Zecca, 6, 48121 Ravenna RA
28. **R&B Hotel** — Alfonsine
   - slug: `r-b-hotel-alfonsine`
   - indirizzo: Corso Giacomo Matteotti, 12, 48011 Alfonsine RA
29. **Ristorante Pizzeria Albergo San Carlo** — Alfonsine
   - slug: `ristorante-pizzeria-albergo-san-carlo-alfonsine`
   - indirizzo: Via Tancredi, Via Duccio Galimberti, 48011 Alfonsine RA
30. **Room & Breakfast D'Annunzio** — Alfonsine
   - slug: `room-breakfast-d-annunzio-alfonsine`
   - indirizzo: Piazza Gabriele D'Annunzio, 6/P.2, 48121 Ravenna RA
31. **Terrazza Zalamella B&B** — Alfonsine
   - slug: `terrazza-zalamella-b-b-alfonsine`
   - indirizzo: Via Giuseppe Zalamella, 33, 48123 Ravenna RA
32. **Villa Roncuzzi** — Alfonsine
   - slug: `villa-roncuzzi-alfonsine`
   - indirizzo: Via M. Silvestroni, 6/10, 48026 San Pancrazio RA
33. **Alghero Sunrise** — Alghero
   - slug: `alghero-sunrise-alghero`
   - indirizzo: Via Nuoro, 10, 07041 Alghero SS, Italia
34. **Alghero Vacanze Hotel** — Alghero
   - slug: `alghero-vacanze-hotel-alghero`
   - indirizzo: Via Gallura, 15, 07041 Alghero SS, Italia
35. **Alguest** — Alghero
   - slug: `alguest-alghero`
   - indirizzo: Via L. Canepa, 71, 07041 Alghero SS, Italia