# Blocco 107/500 — 35 strutture senza descrizione IT

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

1. **B&B SanPietro Andora** — Andora
   - slug: `b-b-sanpietro-andora-andora`
   - indirizzo: Località Metta, 1/A, 17020 Andora SV
2. **B&B Villa Corsini** — Andora
   - slug: `b-b-villa-corsini-andora`
   - indirizzo: Via Vincenzo Maglione, 2, 17020 Laigueglia SV
3. **Dachi casa vacanze** — Andora
   - slug: `dachi-casa-vacanze-andora`
   - indirizzo: Località Negri, 17020 Andora SV
4. **Gli Ulivi Rooms and Breakfast** — Andora
   - slug: `gli-ulivi-rooms-and-breakfast-andora`
   - indirizzo: Località Piazza, 11, 17020 Andora SV
5. **Hotel - Ristorante Jole Andora** — Andora
   - slug: `hotel-ristorante-jole-andora-andora`
   - indirizzo: Via Marco Polo, 16, 17051 Marina di Andora SV
6. **Hotel Galleano 3 Stelle** — Andora
   - slug: `hotel-galleano-3-stelle-andora`
   - indirizzo: Via Angelo Fontana, 12, 17051 Marina di Andora SV
7. **Hotel I Due Gabbiani** — Andora
   - slug: `hotel-i-due-gabbiani-andora`
   - indirizzo: Via Mezzacqua, 2, 17020 Andora SV
8. **Hotel Lungomare** — Andora
   - slug: `hotel-lungomare-andora`
   - indirizzo: Via Capri, 10, 17020 Marina di Andora SV
9. **Hotel Mediterraneo** — Andora
   - slug: `hotel-mediterraneo-andora`
   - indirizzo: Via Andrea Doria, 18, 17020 Laigueglia SV
10. **Hotel Moresco** — Andora
   - slug: `hotel-moresco-andora`
   - indirizzo: Via Aurelia, 96, 17020 Marina di Andora SV
11. **La Casita** — Andora
   - slug: `la-casita-andora`
   - indirizzo: Via P. Ferreri, 75/Interno 13, 17021 Alassio SV
12. **Residence La Palma** — Andora
   - slug: `residence-la-palma-andora`
   - indirizzo: Viale Giuseppe Mazzini, 36, 17020 Andora SV
13. **Villaggio Turistico Colombo** — Andora
   - slug: `villaggio-turistico-colombo-andora`
   - indirizzo: Via Marchese Maglioni, 17020 Marina di Andora SV
14. **Affittacamere Belvedere - da Renzo** — Andorno Micca
   - slug: `affittacamere-belvedere-da-renzo-andorno-micca`
   - indirizzo: Via Camillo Vercellone, 44, 13817 Sordevolo BI
15. **Agriturismo "Casa di Piero e Marilena"** — Andorno Micca
   - slug: `agriturismo-casa-di-piero-e-marilena-andorno-micca`
   - indirizzo: Via Mulini, 64, 13878 Candelo BI
16. **Agriturismo Borgo Cà del Becca** — Andorno Micca
   - slug: `agriturismo-borgo-ca-del-becca-andorno-micca`
   - indirizzo: VIA AMBA ALAGI, 11, 13841 Bioglio BI
17. **Agriturismo La Fucina** — Andorno Micca
   - slug: `agriturismo-la-fucina-andorno-micca`
   - indirizzo: Via alla Fucina, 1, 13856 Vigliano Biellese BI
18. **B&B Casa Dolce Casa** — Andorno Micca
   - slug: `b-b-casa-dolce-casa-andorno-micca`
   - indirizzo: Via Sandigliano, 89, 13878 Candelo BI
19. **B&B Gli Eremiti** — Andorno Micca
   - slug: `b-b-gli-eremiti-andorno-micca`
   - indirizzo: Str. degli Eremiti, 44, 13811 San Giuseppe di Casto, Andorno Micca BI
20. **B&B Sans égal** — Andorno Micca
   - slug: `b-b-sans-egal-andorno-micca`
   - indirizzo: Str. dei Campi, 14, 13900 Biella BI
21. **B&B Villa Maria** — Andorno Micca
   - slug: `b-b-villa-maria-andorno-micca`
   - indirizzo: Via Martiri Libertà, 150, 13897 Occhieppo Inferiore BI
22. **Cascina Serra Bed & Breakfast eco-house** — Andorno Micca
   - slug: `cascina-serra-bed-breakfast-eco-house-andorno-micca`
   - indirizzo: Str. Case Sparse, 7, 13895 Muzzano BI
23. **Il Talucco: Bed & Breakfast** — Andorno Micca
   - slug: `il-talucco-bed-breakfast-andorno-micca`
   - indirizzo: Via Raffaello Sanzio, 31, 13855 Valdengo BI
24. **La Cà di Carol** — Andorno Micca
   - slug: `la-ca-di-carol-andorno-micca`
   - indirizzo: Regione Ronco Tonone, 5, 13818 Tollegno BI
25. **La Nuvola** — Andorno Micca
   - slug: `la-nuvola-andorno-micca`
   - indirizzo: Via Roma, 82, 13816 Sagliano Micca BI
26. **Le Terrazze Di Tavigliano** — Andorno Micca
   - slug: `le-terrazze-di-tavigliano-andorno-micca`
   - indirizzo: Via Ingegnere, VIa Italo Meliga, 2, 13811 Tavigliano BI
27. **Locanda l'Erbavoglio** — Andorno Micca
   - slug: `locanda-l-erbavoglio-andorno-micca`
   - indirizzo: Frazione Fusero, 9, 13821 Callabiana BI
28. **Villa Bernardino Galliari** — Andorno Micca
   - slug: `villa-bernardino-galliari-andorno-micca`
   - indirizzo: Via Bernardino Galliari, 309, 13811 Andorno Micca BI
29. **Aia di San Giorgio** — Andrano
   - slug: `aia-di-san-giorgio-andrano`
   - indirizzo: Via Vecchia Ortelle, 73030 Vignacastrisi LE
30. **Azienda Agrituristica B&B La Torre** — Andrano
   - slug: `azienda-agrituristica-b-b-la-torre-andrano`
   - indirizzo: Via Umberto I, 73030 Vignacastrisi LE
31. **Bellavista B&B Castro (le)** — Andrano
   - slug: `bellavista-b-b-castro-le-andrano`
   - indirizzo: Via Sant'Antonio, 261, 73030 Castro LE
32. **Belvedere** — Andrano
   - slug: `belvedere-andrano`
   - indirizzo: Via Belvedere, 18, 73030 Castro di Lecce LE
33. **CAMPURRA affittacamere** — Andrano
   - slug: `campurra-affittacamere-andrano`
   - indirizzo: Via Benvenuto Cellini, 29, 73030 Diso LE
34. **Delle Antiche Rotte** — Andrano
   - slug: `delle-antiche-rotte-andrano`
   - indirizzo: Via Comunale Saccuddi, 25 ex contrada madonna del lattarico, 73032 Marina di Andrano LE
35. **Eliados Casa Vacanze** — Andrano
   - slug: `eliados-casa-vacanze-andrano`
   - indirizzo: Vicinale Doleo, 73030 Diso LE