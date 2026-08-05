# Blocco 18/500 — 35 strutture senza descrizione IT

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

1. **Tenuta Lanza Il Mulino** — Acquaviva Platani
   - slug: `tenuta-lanza-il-mulino-acquaviva-platani`
   - indirizzo: Contrada Mulino, 93010 Acquaviva Platani CL
2. **Viola Bed & Breakfast** — Acquaviva Platani
   - slug: `viola-bed-breakfast-acquaviva-platani`
   - indirizzo: Via Boccaccio, 7, 93014 Mussomeli CL
3. **Agriturismo Antico Frantoio Salmeri** — Acquedolci
   - slug: `agriturismo-antico-frantoio-salmeri-acquedolci`
   - indirizzo: Contrada Nicetta, Snc, 98070 Acquedolci ME
4. **Agriturismo La Valle degli Ulivi | Nebrodi** — Acquedolci
   - slug: `agriturismo-la-valle-degli-ulivi-nebrodi-acquedolci`
   - indirizzo: SS 113 Settentrionale Sicula, 98070 Acquedolci ME
5. **Agriturismo Villa Ortoleva** — Acquedolci
   - slug: `agriturismo-villa-ortoleva-acquedolci`
   - indirizzo: Contrada oliveto, 98070 Acquedolci ME
6. **Assabinirica** — Acquedolci
   - slug: `assabinirica-acquedolci`
   - indirizzo: Contrada oliveto, 98070 Acquedolci ME
7. **B&B Il Girasole** — Acquedolci
   - slug: `b-b-il-girasole-acquedolci`
   - indirizzo: Contrada Tavola Grande, 90, 98071 Capo d'Orlando ME
8. **B&B Serena** — Acquedolci
   - slug: `b-b-serena-acquedolci`
   - indirizzo: Via Sardini, 2, 98071 Longi ME
9. **BeB Nonna Sicilia** — Acquedolci
   - slug: `beb-nonna-sicilia-acquedolci`
   - indirizzo: Via Beato Felice, 98070 Rocca di Capri Leone ME
10. **Bed & Breakfast "A due Passi dal Mare"** — Acquedolci
   - slug: `bed-breakfast-a-due-passi-dal-mare-acquedolci`
   - indirizzo: Via Trazzera Marina, 105, 98071 Capo d'Orlando ME
11. **Bed and Breakfast Bellavista** — Acquedolci
   - slug: `bed-and-breakfast-bellavista-acquedolci`
   - indirizzo: Contrada Vina, 14, 98071 Capo d'Orlando ME
12. **Capo Nettuno Hotel** — Acquedolci
   - slug: `capo-nettuno-hotel-acquedolci`
   - indirizzo: Via Trazzera Marina, 352, 98071 Capo d'Orlando ME
13. **Casa Giada** — Acquedolci
   - slug: `casa-giada-acquedolci`
   - indirizzo: Via Alessandro Manzoni, 20, 98070 Torrenova ME
14. **Hotel Bed and Breakfast "Il Geranio"** — Acquedolci
   - slug: `hotel-bed-and-breakfast-il-geranio-acquedolci`
   - indirizzo: Contrada S. Marina, 98070 Acquedolci ME
15. **Il Fiore Bianco** — Acquedolci
   - slug: `il-fiore-bianco-acquedolci`
   - indirizzo: Contrada S. Martino, 46, 98071 Capo d'Orlando ME
16. **La Collina B&B** — Acquedolci
   - slug: `la-collina-b-b-acquedolci`
   - indirizzo: Contrada Certari Catutè, 85f, 98071 Capo d'Orlando ME
17. **Le Tre Stelle Marine** — Acquedolci
   - slug: `le-tre-stelle-marine-acquedolci`
   - indirizzo: Via Ricca Salerno, 57, 98070 Acquedolci ME
18. **Palazzo Fortunato S.R.L.** — Acquedolci
   - slug: `palazzo-fortunato-s-r-l-acquedolci`
   - indirizzo: Via Peschiera, 16, 98076 Sant'Agata di Militello ME
19. **Syfar Palace Hotel** — Acquedolci
   - slug: `syfar-palace-hotel-acquedolci`
   - indirizzo: Contrada Buffone, 98070 Acquedolci ME
20. **Thea B&B** — Acquedolci
   - slug: `thea-b-b-acquedolci`
   - indirizzo: Via Cirino Scaglione, 7, 98070 Acquedolci ME
21. **Villa dei Principi** — Acquedolci
   - slug: `villa-dei-principi-acquedolci`
   - indirizzo: Vicolo II Via Rosmarino, 98070 Torrenova ME
22. **Villa Mancuso De Gaetani & SPA** — Acquedolci
   - slug: `villa-mancuso-de-gaetani-spa-acquedolci`
   - indirizzo: Via Trazzera Marina, 685, 98071 Capo d'Orlando ME
23. **B&B Borgo Inferiore 24** — Acqui Terme
   - slug: `b-b-borgo-inferiore-24-acqui-terme`
   - indirizzo: Borgo Inferiore Lussito, 24, 15011 Acqui Terme AL
24. **B&B Cascina Galla** — Acqui Terme
   - slug: `b-b-cascina-galla-acqui-terme`
   - indirizzo: Str. S. Bernardo, 8, 15076 Ovada AL
25. **B&B Cascina Luvot** — Acqui Terme
   - slug: `b-b-cascina-luvot-acqui-terme`
   - indirizzo: Località Bano, 14, 15010 Melazzo AL
26. **B&B Dei Cappuccini** — Acqui Terme
   - slug: `b-b-dei-cappuccini-acqui-terme`
   - indirizzo: Via Ferdinando Magellano, 10, 15011 Acqui Terme AL
27. **B&B La Lacia** — Acqui Terme
   - slug: `b-b-la-lacia-acqui-terme`
   - indirizzo: Regione Lacia, 7, 15011 Acqui Terme AL
28. **B&B Maggiora 131** — Acqui Terme
   - slug: `b-b-maggiora-131-acqui-terme`
   - indirizzo: Strada della Maggiora, 131, 15011 Acqui Terme AL
29. **B&B Molino di Lancin** — Acqui Terme
   - slug: `b-b-molino-di-lancin-acqui-terme`
   - indirizzo: Località Gallareto, 8, 15018 Spigno Monferrato AL
30. **B&B Villa Curte Nicia** — Acqui Terme
   - slug: `b-b-villa-curte-nicia-acqui-terme`
   - indirizzo: Strada Vecchia d'Asti, 96, 14049 Nizza Monferrato AT
31. **Bed & Breakfast Casa Bolla** — Acqui Terme
   - slug: `bed-breakfast-casa-bolla-acqui-terme`
   - indirizzo: Str. Moirano, 11, 15011 Acqui Terme AL
32. **Habilita Villa Igea Residence Artemisia** — Acqui Terme
   - slug: `habilita-villa-igea-residence-artemisia-acqui-terme`
   - indirizzo: Regione Valloria, 1, 15011 Acqui Terme AL
33. **Hotel Acqui** — Acqui Terme
   - slug: `hotel-acqui-acqui-terme`
   - indirizzo: Corso Bagni, 46, 15011 Acqui Terme AL
34. **Hotel La Meridiana** — Acqui Terme
   - slug: `hotel-la-meridiana-acqui-terme`
   - indirizzo: Piazza Duomo, 4, 15011 Acqui Terme AL
35. **Hotel Valentino Acqui Terme** — Acqui Terme
   - slug: `hotel-valentino-acqui-terme-acqui-terme`
   - indirizzo: Passeggiata Fonte Fredda, 20, 15011 Acqui Terme AL