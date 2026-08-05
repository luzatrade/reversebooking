# Blocco 27/500 — 35 strutture senza descrizione IT

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

1. **Albergo La Bussola** — Agliana
   - slug: `albergo-la-bussola-agliana`
   - indirizzo: Via Statale, 910, 51039 Catena PT
2. **Albergo Ristorante San Pietro** — Agliana
   - slug: `albergo-ristorante-san-pietro-agliana`
   - indirizzo: Via Montalbano, 451, 51039 Quarrata PT
3. **B&B Buscemi** — Agliana
   - slug: `b-b-buscemi-agliana`
   - indirizzo: Via Andrea Doria, 1, 51100 Bottegone PT
4. **B&B La Casa di Otello** — Agliana
   - slug: `b-b-la-casa-di-otello-agliana`
   - indirizzo: Via Froccina, 2, 59015 Carmignano PO
5. **B&B Locanda La Rotonda** — Agliana
   - slug: `b-b-locanda-la-rotonda-agliana`
   - indirizzo: Via IV Novembre, 90, 51037 Montale PT
6. **Bed & Breakfast Profumo D'Estate** — Agliana
   - slug: `bed-breakfast-profumo-d-estate-agliana`
   - indirizzo: Via Panaro, 43, 51031 Agliana PT
7. **Bed&Breakfast Pianeta Benessere** — Agliana
   - slug: `bed-breakfast-pianeta-benessere-agliana`
   - indirizzo: Via di Forramoro, 34, 51100 Pistoia PT
8. **Hotel Albergo Giugni** — Agliana
   - slug: `hotel-albergo-giugni-agliana`
   - indirizzo: Via dei Migliorati, 3, 59100 Prato PO
9. **Hotel Monti** — Agliana
   - slug: `hotel-monti-agliana`
   - indirizzo: Via della Chiesa, 2, 51035 Lamporecchio PT
10. **Hotel Richard Agliana (PT) - Beautiful bedrooms** — Agliana
   - slug: `hotel-richard-agliana-pt-beautiful-bedrooms-agliana`
   - indirizzo: Via Papa Giovanni XXIII, 11, 51031 Agliana PT
11. **Hotel Toscana** — Agliana
   - slug: `hotel-toscana-agliana`
   - indirizzo: Piazza Giovanni Ciardi, 3, 59100 Prato PO
12. **Il Grifone** — Agliana
   - slug: `il-grifone-agliana`
   - indirizzo: Via Curtatone e Montanara, 24, 51100 Pistoia PT
13. **Locanda Fuoriporta** — Agliana
   - slug: `locanda-fuoriporta-agliana`
   - indirizzo: Via G. Matteotti, 78, 51034 Casalguidi PT
14. **Locanda La Rotonda Di Gioffredi Tiziano E. Snc** — Agliana
   - slug: `locanda-la-rotonda-di-gioffredi-tiziano-e-snc-agliana`
   - indirizzo: Via Sem Benelli, 10, 51037 Montale PT
15. **Osteria & Hotel Bellavista San Baronto** — Agliana
   - slug: `osteria-hotel-bellavista-san-baronto-agliana`
   - indirizzo: Via Montalbano, 61, 51035 San Baronto PT
16. **VILLARTE** — Agliana
   - slug: `villarte-agliana`
   - indirizzo: Via Provinciale Pratese, 374, 51031 Agliana PT
17. **Agriturismo “Le Giustizie”** — Agliano Terme
   - slug: `agriturismo-le-giustizie-agliano-terme`
   - indirizzo: Regione Salere, 73, 14041 Agliano Terme AT
18. **Agriturismo C'Era Una Volta Agliano Terme** — Agliano Terme
   - slug: `agriturismo-c-era-una-volta-agliano-terme-agliano-terme`
   - indirizzo: Regione Dogliano, 11, 14041 Agliano Terme AT
19. **Agriturismo Dacapo** — Agliano Terme
   - slug: `agriturismo-dacapo-agliano-terme`
   - indirizzo: V. Nizza, 4, 14041 Agliano Terme AT
20. **Agriturismo Vecchio Torchio** — Agliano Terme
   - slug: `agriturismo-vecchio-torchio-agliano-terme`
   - indirizzo: Via Battibò, 151, 14053 Sant'Antonio AT
21. **Albergo Il borgo vecchio** — Agliano Terme
   - slug: `albergo-il-borgo-vecchio-agliano-terme`
   - indirizzo: Piazza Vittorio Emanuele III, 14048 Montegrosso d'Asti AT
22. **Amerio Vincenzo Vini - Agriturismo Ca del Nono** — Agliano Terme
   - slug: `amerio-vincenzo-vini-agriturismo-ca-del-nono-agliano-terme`
   - indirizzo: Reg. Slamboira, 5, 14050 Moasca AT
23. **B&B Ca' del Cinema** — Agliano Terme
   - slug: `b-b-ca-del-cinema-agliano-terme`
   - indirizzo: Via Brofferio, 9, 14047 Mombercelli AT
24. **Bed & Breakfast** — Agliano Terme
   - slug: `bed-breakfast-agliano-terme`
   - indirizzo: Via Caduti per la Liberazione, 1, 14040 Vinchio AT
25. **Casa Maria Rosa** — Agliano Terme
   - slug: `casa-maria-rosa-agliano-terme`
   - indirizzo: Via Vittorio Alfieri, 9, 14041 Agliano Terme AT
26. **Cascina Dani - Albergo e ristorante** — Agliano Terme
   - slug: `cascina-dani-albergo-e-ristorante-agliano-terme`
   - indirizzo: Regione Dani, 23, 14041 Agliano AT
27. **Cascina Tre Botti** — Agliano Terme
   - slug: `cascina-tre-botti-agliano-terme`
   - indirizzo: Regione Spessa, 62, 14041 Agliano Terme AT
28. **Hotel Villa Mory** — Agliano Terme
   - slug: `hotel-villa-mory-agliano-terme`
   - indirizzo: Via Asti Mare, 11, 14048 Montegrosso d'Asti AT
29. **International Camping Le Fonti** — Agliano Terme
   - slug: `international-camping-le-fonti-agliano-terme`
   - indirizzo: Via alle Fontane, 54, 14041 Agliano AT
30. **Le Marne Relais** — Agliano Terme
   - slug: `le-marne-relais-agliano-terme`
   - indirizzo: Str. Pasquana, 5, 14055 Costigliole d'Asti AT
31. **Locanda della luna rossa** — Agliano Terme
   - slug: `locanda-della-luna-rossa-agliano-terme`
   - indirizzo: Via Battibò, 11, 14052 Piana del Salto AT
32. **Locanda San Giacomo** — Agliano Terme
   - slug: `locanda-san-giacomo-agliano-terme`
   - indirizzo: Via Amedeo Arullani, 4, 14041 Agliano AT
33. **Naturalmente Srl** — Agliano Terme
   - slug: `naturalmente-srl-agliano-terme`
   - indirizzo: Regione Lovetta, 17, 14041 Agliano AT
34. **Piemonte Country House** — Agliano Terme
   - slug: `piemonte-country-house-agliano-terme`
   - indirizzo: Regione Vianoce 34, 14041 Agliano Terme AT
35. **Villa Fontana Relais Suites & Spa** — Agliano Terme
   - slug: `villa-fontana-relais-suites-spa-agliano-terme`
   - indirizzo: Via Giuseppe Mazzini, 69, 14041 Agliano AT