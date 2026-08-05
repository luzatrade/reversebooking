# Blocco 266/500 — 35 strutture senza descrizione IT

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

1. **Camere Paolina** — Bevagna
   - slug: `camere-paolina-bevagna`
   - indirizzo: Via Monte di Pale, 2, 06034 Foligno PG
2. **Casa Berti** — Bevagna
   - slug: `casa-berti-bevagna`
   - indirizzo: Via G. Bonci, 18, 06038 Spello PG
3. **Casa di nonna** — Bevagna
   - slug: `casa-di-nonna-bevagna`
   - indirizzo: Via dei Forni, 3, 06031 Bevagna PG
4. **Casa Vacanze "Il Clitunno"** — Bevagna
   - slug: `casa-vacanze-il-clitunno-bevagna`
   - indirizzo: Via Clitunno, 10, 06031 Bevagna PG
5. **Hotel Ristorante El Rancho** — Bevagna
   - slug: `hotel-ristorante-el-rancho-bevagna`
   - indirizzo: Via Flaminia, 55, 06031 Bevagna PG
6. **La Casetta affittacamere** — Bevagna
   - slug: `la-casetta-affittacamere-bevagna`
   - indirizzo: Via Onofri, 5, 06031 Bevagna PG
7. **Nuovo Mondo** — Bevagna
   - slug: `nuovo-mondo-bevagna`
   - indirizzo: Viale della Vittoria, 7, 06036 Montefalco PG
8. **Ostello Bello Assisi Bevagna** — Bevagna
   - slug: `ostello-bello-assisi-bevagna-bevagna`
   - indirizzo: Via di Mezzo, 12, 06031 Torre del Colle PG
9. **Palazzo Brunamonti Boutique Hotel** — Bevagna
   - slug: `palazzo-brunamonti-boutique-hotel-bevagna`
   - indirizzo: Corso Giacomo Matteotti, 79, 06031 Bevagna PG
10. **Residenza Porta Guelfa** — Bevagna
   - slug: `residenza-porta-guelfa-bevagna`
   - indirizzo: Via Ponte delle Tavole, 2, 06031 Bevagna PG
11. **A Casa di Gaia** — Beverino
   - slug: `a-casa-di-gaia-beverino`
   - indirizzo: Via Montetenero, 5, 19020 Riccò del Golfo di Spezia SP
12. **Affittacamere Casa di Campagna La Scortica, camere di charme, ristorantino tipico** — Beverino
   - slug: `affittacamere-casa-di-campagna-la-scortica-camer-beverino`
   - indirizzo: Via Marco Federici, 25, 19020 Beverino SP
13. **Affittacamere PZ** — Beverino
   - slug: `affittacamere-pz-beverino`
   - indirizzo: Via Foce, 2, 19018 Vernazza SP
14. **Agriturismo Angiò nel Ceré** — Beverino
   - slug: `agriturismo-angio-nel-cere-beverino`
   - indirizzo: Via Cerè, 13, 19020 Beverino SP
15. **Agriturismo Casalino** — Beverino
   - slug: `agriturismo-casalino-beverino`
   - indirizzo: Via Trezzo, 61, 19020 Beverino SP
16. **Agriturismo L'Erba Persa** — Beverino
   - slug: `agriturismo-l-erba-persa-beverino`
   - indirizzo: Via Castagnarossa, 8, 19020 Beverino SP
17. **Agriturismo La Corte di Candido Beverino** — Beverino
   - slug: `agriturismo-la-corte-di-candido-beverino-beverino`
   - indirizzo: Via Serrapiana, 4, 19020 Beverino SP
18. **Agriturismo La Giara** — Beverino
   - slug: `agriturismo-la-giara-beverino`
   - indirizzo: Via M. Federici, 15, 19020 Beverino SP
19. **Al Castello Da Annamaria** — Beverino
   - slug: `al-castello-da-annamaria-beverino`
   - indirizzo: Via Roma, 1, 19020 Beverino SP
20. **B&B Oasi Verde** — Beverino
   - slug: `b-b-oasi-verde-beverino`
   - indirizzo: Via Trezzo, 147 19020, di Corvara SP
21. **Bed & Breakfast La Fontanella** — Beverino
   - slug: `bed-breakfast-la-fontanella-beverino`
   - indirizzo: Via Valle, 57, 19020 Polverara SP
22. **Bed and breakfast "La Casa del Sole"** — Beverino
   - slug: `bed-and-breakfast-la-casa-del-sole-beverino`
   - indirizzo: Via Trezzo, 58, 19020 Beverino SP
23. **Casa Lilly** — Beverino
   - slug: `casa-lilly-beverino`
   - indirizzo: Via Alessandro Corradi, 30, 19020 Beverino SP
24. **Hotel Palazzo Costa** — Beverino
   - slug: `hotel-palazzo-costa-beverino`
   - indirizzo: Via Castagnarossa, 15, 19020 Beverino SP
25. **Il Portico affittacamere** — Beverino
   - slug: `il-portico-affittacamere-beverino`
   - indirizzo: Piazza Giulio Beverini, 4, 19121 La Spezia SP
26. **La Cascina di Anna** — Beverino
   - slug: `la-cascina-di-anna-beverino`
   - indirizzo: Via della Chiesa, 1, 19020 Castiglione Vara SP
27. **Agriturismo Ca' Giulietta** — Bevilacqua
   - slug: `agriturismo-ca-giulietta-bevilacqua`
   - indirizzo: Via Barco, 6, 37066 Sommacampagna VR
28. **Agriturismo Corte dei Mori** — Bevilacqua
   - slug: `agriturismo-corte-dei-mori-bevilacqua`
   - indirizzo: Via Valpiana, 4, 48013 San Cassiano Brisighella RA
29. **Agriturismo dei Grippi** — Bevilacqua
   - slug: `agriturismo-dei-grippi-bevilacqua`
   - indirizzo: Località Casa Fasani, 1, 37060 Sona VR
30. **Albergo Ristorante La Campagnola** — Bevilacqua
   - slug: `albergo-ristorante-la-campagnola-bevilacqua`
   - indirizzo: Via S. Salvaro, 318, 35040 Urbana PD
31. **B&B Madonna Villa Baietta** — Bevilacqua
   - slug: `b-b-madonna-villa-baietta-bevilacqua`
   - indirizzo: Via Mantovana, 186, 37137 Madonna di Dossobuono VR
32. **Ca' Bevilacqua B&B** — Bevilacqua
   - slug: `ca-bevilacqua-b-b-bevilacqua`
   - indirizzo: Via Santa Croce, 5607, 47032 Bertinoro FC
33. **Castello Bevilacqua** — Bevilacqua
   - slug: `castello-bevilacqua-bevilacqua`
   - indirizzo: Via Roma, 50, 37040 Bevilacqua VR
34. **Dimore Al Borgo** — Bevilacqua
   - slug: `dimore-al-borgo-bevilacqua`
   - indirizzo: Via Papa Giovanni Paolo, 2-4, 35044 Montagnana PD
35. **Affittacamere Palazzo Galifi** — Biancavilla
   - slug: `affittacamere-palazzo-galifi-biancavilla`
   - indirizzo: Piazza Armando Diaz, 1, 95047 Paternò CT