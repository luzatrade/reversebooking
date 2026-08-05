# Blocco 454/500 — 35 strutture senza descrizione IT

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

1. **Magnolia** — Casale Monferrato
   - slug: `magnolia-casale-monferrato`
   - indirizzo: Via Benvenuto Sangiorgio, 22, 15033 Casale Monferrato AL
2. **Agriturismo Porcaloca** — Casale sul Sile
   - slug: `agriturismo-porcaloca-casale-sul-sile`
   - indirizzo: Vicolo Schiavonia, 22, 31032 Casale sul Sile TV
3. **Ai Bastioni Boutique Hotel** — Casale sul Sile
   - slug: `ai-bastioni-boutique-hotel-casale-sul-sile`
   - indirizzo: Viale Fratelli Bandiera, 18, 31100 Treviso TV
4. **B&B HOTEL Quarto D'Altino** — Casale sul Sile
   - slug: `b-b-hotel-quarto-d-altino-casale-sul-sile`
   - indirizzo: Via Giovanni Pascoli, 1, 30020 Quarto d'Altino VE
5. **B&B Sile e Natura** — Casale sul Sile
   - slug: `b-b-sile-e-natura-casale-sul-sile`
   - indirizzo: Via Nuova Trevigiana Lughignano, 43, 31032 Lughignano TV
6. **Borgo Cà dei Sospiri** — Casale sul Sile
   - slug: `borgo-ca-dei-sospiri-casale-sul-sile`
   - indirizzo: Via Roma, 146, 30020 San Michele Vecchio VE
7. **Civico 493 bed&breakfast** — Casale sul Sile
   - slug: `civico-493-bed-breakfast-casale-sul-sile`
   - indirizzo: Via Baratta Vecchia, 49, 31022 Preganziol TV
8. **Civico4** — Casale sul Sile
   - slug: `civico4-casale-sul-sile`
   - indirizzo: Piazza del Donatore, 4, 31032 Conscio TV
9. **Crowne Plaza Venice East - Quarto d'Altino** — Casale sul Sile
   - slug: `crowne-plaza-venice-east-quarto-d-altino-casale-sul-sile`
   - indirizzo: Viale della Resistenza, 18/20, 30020 Quarto d'Altino VE
10. **Hotel Ambra** — Casale sul Sile
   - slug: `hotel-ambra-casale-sul-sile`
   - indirizzo: Via Adige, 3, 30020 Quarto d'Altino VE
11. **Hotel Continental** — Casale sul Sile
   - slug: `hotel-continental-casale-sul-sile`
   - indirizzo: Via Roma, 16, 31100 Treviso TV
12. **Hotel Duca D'Aosta** — Casale sul Sile
   - slug: `hotel-duca-d-aosta-casale-sul-sile`
   - indirizzo: Piazza Duca D'Aosta, 31, 31021 Mogliano Veneto TV
13. **Hotel Magnolia** — Casale sul Sile
   - slug: `hotel-magnolia-casale-sul-sile`
   - indirizzo: Str. Terraglio, 136/2, 31022 Preganziol TV
14. **Hotel Semi di Limone** — Casale sul Sile
   - slug: `hotel-semi-di-limone-casale-sul-sile`
   - indirizzo: Via Giambattista Tiepolo, 20, 31021 Zona Industriale S.p.z. TV
15. **Hotel Villa Braida** — Casale sul Sile
   - slug: `hotel-villa-braida-casale-sul-sile`
   - indirizzo: Via Bonisiolo, 16b, 31021 Mogliano Veneto TV
16. **Laerte Palace Hotel** — Casale sul Sile
   - slug: `laerte-palace-hotel-casale-sul-sile`
   - indirizzo: Via Monte Grappa, 2, 31021 Mogliano Veneto TV
17. **Move Hotels Venezia Nord** — Casale sul Sile
   - slug: `move-hotels-venezia-nord-casale-sul-sile`
   - indirizzo: Via Bonfadini, 1, 31021 Mogliano Veneto TV
18. **The Foscarini** — Casale sul Sile
   - slug: `the-foscarini-casale-sul-sile`
   - indirizzo: Via Terraglio, 4, 31021 Mogliano Veneto TV
19. **Villa Irene - luxury B&B** — Casale sul Sile
   - slug: `villa-irene-luxury-b-b-casale-sul-sile`
   - indirizzo: Via Vecchia Trevigiana Lughignano, 32, 31032 Casale Sul Sile TV
20. **Villa Pace Park Hotel Bolognese** — Casale sul Sile
   - slug: `villa-pace-park-hotel-bolognese-casale-sul-sile`
   - indirizzo: Str. Terraglio, 175, 31022 Preganziol TV
21. **A casa di Giotto** — Casalecchio di Reno
   - slug: `a-casa-di-giotto-casalecchio-di-reno`
   - indirizzo: Via Don Luigi Sturzo, 43, 40135 Bologna BO
22. **Amatì Design Hotel con Centro Congressi a Bologna** — Casalecchio di Reno
   - slug: `amati-design-hotel-con-centro-congressi-a-bologn-casalecchio-di-reno`
   - indirizzo: Via Rigosa, 14 Zola Predosa, 40069 Bologna BO
23. **B&B Ca' di Trittoni** — Casalecchio di Reno
   - slug: `b-b-ca-di-trittoni-casalecchio-di-reno`
   - indirizzo: Via Isonzo, 46, 40033 Casalecchio di Reno BO
24. **B&B Galleria del Reno** — Casalecchio di Reno
   - slug: `b-b-galleria-del-reno-casalecchio-di-reno`
   - indirizzo: Via Marconi 51, c/o, Galleria del Reno, 3, 40122 Bologna BO
25. **B&B La Magnolia** — Casalecchio di Reno
   - slug: `b-b-la-magnolia-casalecchio-di-reno`
   - indirizzo: Via Andrea Costa, 45, 40134 Bologna BO
26. **B&B La Terrazza sul Reno** — Casalecchio di Reno
   - slug: `b-b-la-terrazza-sul-reno-casalecchio-di-reno`
   - indirizzo: Via G. Mazzini, 6, 40033 Casalecchio di Reno BO
27. **B&B Le Stanze di Erika** — Casalecchio di Reno
   - slug: `b-b-le-stanze-di-erika-casalecchio-di-reno`
   - indirizzo: Via del Francia, 7, 40033 Casalecchio di Reno BO
28. **B&B Maison Magnani** — Casalecchio di Reno
   - slug: `b-b-maison-magnani-casalecchio-di-reno`
   - indirizzo: Via Amerigo Vespucci, 8, 40033 Casalecchio di Reno BO
29. **Bed & Breakfast Chalet i Colli** — Casalecchio di Reno
   - slug: `bed-breakfast-chalet-i-colli-casalecchio-di-reno`
   - indirizzo: Via di Monte Albano, 25, 40135 Bologna BO
30. **Bed & Breakfast Chiusa di Casalecchio** — Casalecchio di Reno
   - slug: `bed-breakfast-chiusa-di-casalecchio-casalecchio-di-reno`
   - indirizzo: Via Filippo Turati, 3/piano terra, 40033 Casalecchio di Reno BO
31. **Boutique Hotel Calzavecchio** — Casalecchio di Reno
   - slug: `boutique-hotel-calzavecchio-casalecchio-di-reno`
   - indirizzo: Via Calzavecchio, 1, 40033 Casalecchio di Reno BO
32. **Casa Gardel Appartamento per brevi periodi Bed and breakfast** — Casalecchio di Reno
   - slug: `casa-gardel-appartamento-per-brevi-periodi-bed-a-casalecchio-di-reno`
   - indirizzo: Via I Maggio, 7, 40033 Casalecchio di Reno BO
33. **Continental Urban Art Hotel** — Casalecchio di Reno
   - slug: `continental-urban-art-hotel-casalecchio-di-reno`
   - indirizzo: Via G. Garibaldi, 8, 40069 Zola Predosa BO
34. **hotel naxos** — Casalecchio di Reno
   - slug: `hotel-naxos-casalecchio-di-reno`
   - indirizzo: Via Bazzanese, 95/3, 40033 Casalecchio di Reno BO
35. **Hotel San Martino Bologna** — Casalecchio di Reno
   - slug: `hotel-san-martino-bologna-casalecchio-di-reno`
   - indirizzo: Via Bazzanese, 7, 40033 Casalecchio di Reno BO