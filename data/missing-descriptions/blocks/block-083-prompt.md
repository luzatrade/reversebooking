# Blocco 83/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante Vittoria** — Alta Valle Intelvi
   - slug: `hotel-ristorante-vittoria-alta-valle-intelvi`
   - indirizzo: Via Provinciale, 116, 22023 San Fedele Intelvi CO
2. **La Locanda del Notaio** — Alta Valle Intelvi
   - slug: `la-locanda-del-notaio-alta-valle-intelvi`
   - indirizzo: Località Piano delle Noci, 42 loc. Pellio, 22024 Alta Valle Intelvi CO
3. **Le Radici Agriturismo** — Alta Valle Intelvi
   - slug: `le-radici-agriturismo-alta-valle-intelvi`
   - indirizzo: Località Alpe di, 22028 Blessagno CO
4. **Locanda Corte di Pellio - B&B** — Alta Valle Intelvi
   - slug: `locanda-corte-di-pellio-b-b-alta-valle-intelvi`
   - indirizzo: Piazza 20 Settembre, 22024 Pellio Intelvi CO
5. **Villa Alma Lake Como Bed and Breakfast - your Alpine Retreat** — Alta Valle Intelvi
   - slug: `villa-alma-lake-como-bed-and-breakfast-your-alpi-alta-valle-intelvi`
   - indirizzo: Via Blessagno, 37/39, 22023 San Fedele Intelvi CO
6. **Villa San Fedele - Hotel** — Alta Valle Intelvi
   - slug: `villa-san-fedele-hotel-alta-valle-intelvi`
   - indirizzo: Via S. Rocco, 2, 22023 San Fedele Intelvi CO
7. **Villa San Giorgio (Alta Valle Intelvi, Como)** — Alta Valle Intelvi
   - slug: `villa-san-giorgio-alta-valle-intelvi-como-alta-valle-intelvi`
   - indirizzo: 22024 Alta Valle Intelvi CO
8. **Villa Simplicitas e Solferino** — Alta Valle Intelvi
   - slug: `villa-simplicitas-e-solferino-alta-valle-intelvi`
   - indirizzo: Localita' Villa Simplicitas, 22023 Centro Valle Intelvi CO
9. **"San Francesco" Bed & Breakfast** — Altamura
   - slug: `san-francesco-bed-breakfast-altamura`
   - indirizzo: Via Sant'Andrea, 6, 70022 Altamura BA
10. **B & B Panorama Lucano - Foresteria Multicamere** — Altamura
   - slug: `b-b-panorama-lucano-foresteria-multicamere-altamura`
   - indirizzo: Via Treviso, 9, 70022 Altamura BA
11. **B&B Capovento della Murgia** — Altamura
   - slug: `b-b-capovento-della-murgia-altamura`
   - indirizzo: Via Harrar, 28, 70022 Altamura BA
12. **B&B Casa Felda** — Altamura
   - slug: `b-b-casa-felda-altamura`
   - indirizzo: Via Ruggiero Paolo, 9, 70022 Altamura BA
13. **Beb Luna Federiciana** — Altamura
   - slug: `beb-luna-federiciana-altamura`
   - indirizzo: Claustro Labriola, 18, 70022 Altamura BA
14. **Bed and Breakfast 1951** — Altamura
   - slug: `bed-and-breakfast-1951-altamura`
   - indirizzo: Via 1ª Traversa Viale Traiano, 5, 70022 Altamura BA
15. **deB&SPA** — Altamura
   - slug: `deb-spa-altamura`
   - indirizzo: Via Cristoforo Colombo, 13/15 17a, 70022 Altamura BA
16. **Hotel Fuori Le Mura** — Altamura
   - slug: `hotel-fuori-le-mura-altamura`
   - indirizzo: Via Maestri del Lavoro, 5, 70022 Altamura BA
17. **Hotel San Nicola** — Altamura
   - slug: `hotel-san-nicola-altamura`
   - indirizzo: Via G. B, Via G. Manfredi, 29, 70022 Altamura BA
18. **Il Borgo Antico - Bed & Breakfast Altamura** — Altamura
   - slug: `il-borgo-antico-bed-breakfast-altamura-altamura`
   - indirizzo: Claustro Patella, 1, 70022 Altamura BA
19. **Il Nido Dei Falchi B&B** — Altamura
   - slug: `il-nido-dei-falchi-b-b-altamura`
   - indirizzo: Corso Federico II di Svevia, 105, 70022 Altamura BA
20. **Il Paradiso a Claustro Inferno B&B** — Altamura
   - slug: `il-paradiso-a-claustro-inferno-b-b-altamura`
   - indirizzo: Claustro Inferno, 3, 70022 Altamura BA
21. **Il Soprano B&B Altamura** — Altamura
   - slug: `il-soprano-b-b-altamura-altamura`
   - indirizzo: Via Santa Caterina, 43, 70022 Altamura BA
22. **L'incanto Delle Mura | Boutique B&B Altamura** — Altamura
   - slug: `l-incanto-delle-mura-boutique-b-b-altamura-altamura`
   - indirizzo: Via Marsala, 2/4, 70022 Altamura BA
23. **La locanda di Alice** — Altamura
   - slug: `la-locanda-di-alice-altamura`
   - indirizzo: Via Domenico Santoro, 6, 70022 Altamura BA
24. **Malandrì B&B** — Altamura
   - slug: `malandri-b-b-altamura`
   - indirizzo: Via Solofrano, 2, 70022 Altamura BA
25. **Masseria Conti Filo - B&B ALTAMURA** — Altamura
   - slug: `masseria-conti-filo-b-b-altamura-altamura`
   - indirizzo: SP79 KM 6 Strada Provinciale Altamura-Cassano, 70022 Altamura BA
26. **Mattei Luxury B&B** — Altamura
   - slug: `mattei-luxury-b-b-altamura`
   - indirizzo: Via Michele Continisio, 1/3, 5, 70022 Altamura BA
27. **Room26** — Altamura
   - slug: `room26-altamura`
   - indirizzo: Via Piemonte, 26, 70022 Altamura BA
28. **Affittacamere Bocca d’Orso** — Altare
   - slug: `affittacamere-bocca-d-orso-altare`
   - indirizzo: Via Verne, 17041 Altare SV
29. **Albergo al Castello** — Altare
   - slug: `albergo-al-castello-altare`
   - indirizzo: Località Bosi, 12, 17010 Cosseria SV
30. **Albergo della Stazione** — Altare
   - slug: `albergo-della-stazione-altare`
   - indirizzo: Via dell' Indipendenza, 8, 17014 San Giuseppe SV
31. **Albergo Ristorante Al Castello** — Altare
   - slug: `albergo-ristorante-al-castello-altare`
   - indirizzo: Località Bosi, 12, 17010 Cosseria SV
32. **B&B I Calleri garden & rooms** — Altare
   - slug: `b-b-i-calleri-garden-rooms-altare`
   - indirizzo: Località Calleri, 92, 17010 Cosseria SV
33. **B&B La casa dei cuori** — Altare
   - slug: `b-b-la-casa-dei-cuori-altare`
   - indirizzo: Loc, Località Povigna, 70, 17010 Cosseria SV
34. **B&B La casa del Daino** — Altare
   - slug: `b-b-la-casa-del-daino-altare`
   - indirizzo: Unnamed Road, 17017, 17010 Cosseria SV
35. **B&B Le Stanze del Moro** — Altare
   - slug: `b-b-le-stanze-del-moro-altare`
   - indirizzo: Via 25 Aprile, 17, 17040 Pallare SV