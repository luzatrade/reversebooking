# Blocco 6/500 — 35 strutture senza descrizione IT

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

1. **MANTRA - Suite & Room** — Acerenza
   - slug: `mantra-suite-room-acerenza`
   - indirizzo: Corso Vittorio Emanuele III, 158, 85011 Acerenza PZ
2. **Nido nel Borgo** — Acerenza
   - slug: `nido-nel-borgo-acerenza`
   - indirizzo: Via Nicia, 85011 Acerenza PZ
3. **Park Hotel Centro Congressi** — Acerenza
   - slug: `park-hotel-centro-congressi-acerenza`
   - indirizzo: E847, 85100 Potenza PZ
4. **White Room** — Acerenza
   - slug: `white-room-acerenza`
   - indirizzo: C/da Costa Del Canneto, snc, 85056 Ruoti PZ
5. **Agriturismo Il Rifugio** — Acerno
   - slug: `agriturismo-il-rifugio-acerno`
   - indirizzo: Contrada Incassata, 10, 84096 Montecorvino Rovella SA
6. **Agriturismo La Magione Del Capitano Vincenza** — Acerno
   - slug: `agriturismo-la-magione-del-capitano-vincenza-acerno`
   - indirizzo: Via Vittorio Emanuele II, 1, 84090 Pugliano SA
7. **Agriturismo la Vecchia Lanterna** — Acerno
   - slug: `agriturismo-la-vecchia-lanterna-acerno`
   - indirizzo: Contrada Cannito Pezze, 23, 84096 Montecorvino Rovella SA
8. **Albergo Le Dodici Lune Di Alessandra E Paola Coralluzzo S.N.C.** — Acerno
   - slug: `albergo-le-dodici-lune-di-alessandra-e-paola-cor-acerno`
   - indirizzo: Via Roma, 29, 84096 Montecorvino Rovella SA
9. **Annabella Bed and Breakfast** — Acerno
   - slug: `annabella-bed-and-breakfast-acerno`
   - indirizzo: Via Pietro Giraldi, 84095 Giffoni Valle Piana SA
10. **B&B Clio** — Acerno
   - slug: `b-b-clio-acerno`
   - indirizzo: via S. NICOLA, 72, 84022 Campagna SA
11. **B&B La perla dei casali** — Acerno
   - slug: `b-b-la-perla-dei-casali-acerno`
   - indirizzo: Via Tito Zaniboni, 4, 84090 Capitignano SA
12. **B&B LE TERRAZZE** — Acerno
   - slug: `b-b-le-terrazze-acerno`
   - indirizzo: VIA ACHILLE VIANELLI, N° 13, 84062 Olevano sul Tusciano SA
13. **B&B Normanni 28** — Acerno
   - slug: `b-b-normanni-28-acerno`
   - indirizzo: Via Normanni, 28, 84022 Campagna SA
14. **B&B Ospiti a Corte** — Acerno
   - slug: `b-b-ospiti-a-corte-acerno`
   - indirizzo: Via Corte, 10, 84095 Giffoni Valle Piana SA
15. **Domus Vivian b&b** — Acerno
   - slug: `domus-vivian-b-b-acerno`
   - indirizzo: Via Papa Pio XI, 62, 84090 Pratole SA
16. **FABROS B&B** — Acerno
   - slug: `fabros-b-b-acerno`
   - indirizzo: Corso Umberto I, 80, 84022 Campagna SA
17. **Grand Hotel Grisone** — Acerno
   - slug: `grand-hotel-grisone-acerno`
   - indirizzo: Via Serroncelli, 46, 83043 Bagnoli Irpino AV
18. **Hotel Sica** — Acerno
   - slug: `hotel-sica-acerno`
   - indirizzo: Via Romualdo Trifone, 6, 84096 Montecorvino Rovella SA
19. **Lamberti Boutique Hotel** — Acerno
   - slug: `lamberti-boutique-hotel-acerno`
   - indirizzo: Via Belvedere, 108, 84091 Battipaglia SA
20. **Lorenzo** — Acerno
   - slug: `lorenzo-acerno`
   - indirizzo: Via Mensa, 130, 84062 Monticelli SA
21. **Oasi Verde** — Acerno
   - slug: `oasi-verde-acerno`
   - indirizzo: Via Serroni, 14/B, 84090 Giffoni Sei Casali SA
22. **Valle degli Alburni** — Acerno
   - slug: `valle-degli-alburni-acerno`
   - indirizzo: Vi Salice, 661, 84026 Postiglione SA
23. **Villa Alessandra** — Acerno
   - slug: `villa-alessandra-acerno`
   - indirizzo: Via Piantito, 43, 84022 Campagna SA
24. **Vittoria Guest House Battipaglia** — Acerno
   - slug: `vittoria-guest-house-battipaglia-acerno`
   - indirizzo: Traversa, Via Italia, 20, 84091 Battipaglia SA
25. **B&B Il Girasole** — Acerra
   - slug: `b-b-il-girasole-acerra`
   - indirizzo: Via Padre Pio, 7, 81024 Maddaloni CE
26. **B&B Villa Milly** — Acerra
   - slug: `b-b-villa-milly-acerra`
   - indirizzo: III Traversa Pasquale Ianniello, 17, 80020 Frattamaggiore NA
27. **Bed & Breakfast Angel's Paradise** — Acerra
   - slug: `bed-breakfast-angel-s-paradise-acerra`
   - indirizzo: SP464, 80030 Mariglianella NA
28. **Bed & Breakfast La Primavera** — Acerra
   - slug: `bed-breakfast-la-primavera-acerra`
   - indirizzo: Via Alcide De Gasperi, 44, 80011 Acerra NA
29. **Casa Giulia** — Acerra
   - slug: `casa-giulia-acerra`
   - indirizzo: Via Volturno, 80011 Acerra NA
30. **Charming GEA** — Acerra
   - slug: `charming-gea-acerra`
   - indirizzo: Via Coste, 41, 81027 San Felice a Cancello CE
31. **Hotel Buona Luna** — Acerra
   - slug: `hotel-buona-luna-acerra`
   - indirizzo: vico Marisa bellisario, 4/6, 80038 Pomigliano d'Arco NA
32. **Hotel Cenacolo** — Acerra
   - slug: `hotel-cenacolo-acerra`
   - indirizzo: Via del Cenacolo, 20, 80049 Somma Vesuviana NA
33. **Hotel Martini** — Acerra
   - slug: `hotel-martini-acerra`
   - indirizzo: Viale Guglielmo Marconi, 203, 80020 Casavatore NA
34. **Hotel Movida** — Acerra
   - slug: `hotel-movida-acerra`
   - indirizzo: Via Pignatelli Ferdinando, 4, 80026 Casoria NA
35. **Hotel Ristorante Pizzeria Elio** — Acerra
   - slug: `hotel-ristorante-pizzeria-elio-acerra`
   - indirizzo: Corso Umberto I, 115, 80034 Marigliano NA