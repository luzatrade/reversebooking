# Blocco 188/500 — 35 strutture senza descrizione IT

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

1. **Agrit. - Lago D'Oro** — Azzio
   - slug: `agrit-lago-d-oro-azzio`
   - indirizzo: Via per Cavona, 14, 21030 Cuveglio VA
2. **agriturismo campo dei fiori** — Azzio
   - slug: `agriturismo-campo-dei-fiori-azzio`
   - indirizzo: Via Battaglia S. Martino, 147, 21030 Cuveglio VA
3. **Al Picchio Verde A.P.S** — Azzio
   - slug: `al-picchio-verde-a-p-s-azzio`
   - indirizzo: Via Luinese, 37, 21035 Cunardo VA
4. **Albergo Ristorante Cristallo** — Azzio
   - slug: `albergo-ristorante-cristallo-azzio`
   - indirizzo: Via Provinciale, 75, 21033 Cittiglio VA
5. **Antico Borgo Sanda - Lago Maggiore** — Azzio
   - slug: `antico-borgo-sanda-lago-maggiore-azzio`
   - indirizzo: Via Sanda, 16, 21030 Casalzuigno VA
6. **Appartamenti del Vecchio Convento** — Azzio
   - slug: `appartamenti-del-vecchio-convento-azzio`
   - indirizzo: Via Guglielmo Marconi, 17, 21030 Azzio VA
7. **B&B LA CORTE DEL POETA** — Azzio
   - slug: `b-b-la-corte-del-poeta-azzio`
   - indirizzo: Via Sant'Antonio, 21030 Arcumeggia VA
8. **Corte di Brenta** — Azzio
   - slug: `corte-di-brenta-azzio`
   - indirizzo: Vicolo Superiore, 4, 21030 Brenta VA
9. **HOTEL RISTORANTE CORONA** — Azzio
   - slug: `hotel-ristorante-corona-azzio`
   - indirizzo: Largo Cappia, 6, 21030 Cuvio VA
10. **Hotel Ristorante la Bussola** — Azzio
   - slug: `hotel-ristorante-la-bussola-azzio`
   - indirizzo: Via G. Marconi, 28, 21033 Cittiglio VA
11. **Il Cortile** — Azzio
   - slug: `il-cortile-azzio`
   - indirizzo: Via Liberta', 87, 21030 Casalzuigno VA
12. **In Campagna** — Azzio
   - slug: `in-campagna-azzio`
   - indirizzo: Via delle Selve, 19, 21023 Besozzo VA
13. **La Posteria by iCasamia** — Azzio
   - slug: `la-posteria-by-icasamia-azzio`
   - indirizzo: Via General Cantore, 4, 21030 Orino VA
14. **Locanda del Brinsc** — Azzio
   - slug: `locanda-del-brinsc-azzio`
   - indirizzo: Via Guglielmo Marconi, 5, 21030 Brinzio VA
15. **Locanda del Pittore** — Azzio
   - slug: `locanda-del-pittore-azzio`
   - indirizzo: Via Malcotti, 1, 21030 Arcumeggia VA
16. **Villa Sarchi** — Azzio
   - slug: `villa-sarchi-azzio`
   - indirizzo: Via S. Francesco, 1, 21030 Grantola VA
17. **Albergo Brescia** — Azzone
   - slug: `albergo-brescia-azzone`
   - indirizzo: Piazza Giustizia, 6, 24020 Vilminore BG
18. **Albergo Pineta** — Azzone
   - slug: `albergo-pineta-azzone`
   - indirizzo: Via della Clusa, 15, 24020 Schilpario BG
19. **Albergo Pizzo Camino** — Azzone
   - slug: `albergo-pizzo-camino-azzone`
   - indirizzo: Via Padre Maj, 27, 24020 Schilpario BG
20. **Albergo Ristorante Edelweiss** — Azzone
   - slug: `albergo-ristorante-edelweiss-azzone`
   - indirizzo: Via Padre Maj, 43, 24020 Schilpario BG
21. **Albergo Ristorante Gabà** — Azzone
   - slug: `albergo-ristorante-gaba-azzone`
   - indirizzo: Viale Pineta, 34, 25042 Borno BS
22. **Albergo Ristorante La Pigna** — Azzone
   - slug: `albergo-ristorante-la-pigna-azzone`
   - indirizzo: Via Salven, 9, 25042 Borno BS
23. **Alpen Chalet - Charme Mountain Hotel & Private Spa** — Azzone
   - slug: `alpen-chalet-charme-mountain-hotel-private-spa-azzone`
   - indirizzo: Via Serta, 1, 24020 Schilpario BG
24. **Hotel Alpino Ristorante** — Azzone
   - slug: `hotel-alpino-ristorante-azzone`
   - indirizzo: Via Cantoniera, 7, 24020 Passo della Presolana BG
25. **Hotel Cristallino** — Azzone
   - slug: `hotel-cristallino-azzone`
   - indirizzo: Via Cantoniera, 73, 24020 Castione della Presolana BG
26. **Hotel Gioan** — Azzone
   - slug: `hotel-gioan-azzone`
   - indirizzo: Via Onorevole T. Pacati, 91, 24020 Lizzola BG
27. **Hotel Ristorante "San Marco"** — Azzone
   - slug: `hotel-ristorante-san-marco-azzone`
   - indirizzo: Frazione Pradella, 3, 24020 Schilpario BG
28. **Hotel Sorgente** — Azzone
   - slug: `hotel-sorgente-azzone`
   - indirizzo: Via Giallo, 2, 25042 Borno BS
29. **Hotel Spampatti** — Azzone
   - slug: `hotel-spampatti-azzone`
   - indirizzo: Via Cantoniera, 89, 24020 Castione della Presolana BG
30. **Navertino Trattoria e Bed&Breakfast** — Azzone
   - slug: `navertino-trattoria-e-bed-breakfast-azzone`
   - indirizzo: Via Navertino, 4, 25042 Borno BS
31. **Olimpic Hostel** — Azzone
   - slug: `olimpic-hostel-azzone`
   - indirizzo: Via della Costa, 14, 24020 Schilpario BG
32. **Ostello Gardenia** — Azzone
   - slug: `ostello-gardenia-azzone`
   - indirizzo: Via Valle, 69, 24020 Colere BG
33. **Albergo Hotel Monte Giove** — Baceno
   - slug: `albergo-hotel-monte-giove-baceno`
   - indirizzo: Frazione Cadarese, 31, 28866 Premia VB
34. **Albergo Panorama** — Baceno
   - slug: `albergo-panorama-baceno`
   - indirizzo: Via per Re, 25, 28854 Malesco VB
35. **Albergo Ristorante del Ponte** — Baceno
   - slug: `albergo-ristorante-del-ponte-baceno`
   - indirizzo: Frazione Piedilago, 3, 28866 Piedilago VB