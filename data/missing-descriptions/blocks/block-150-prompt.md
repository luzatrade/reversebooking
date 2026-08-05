# Blocco 150/500 — 35 strutture senza descrizione IT

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

1. **Hotel Residence Zust** — Arizzano
   - slug: `hotel-residence-zust-arizzano`
   - indirizzo: Via Ticino, 39, 28921 Verbania VB
2. **la casa nel bosco BeB** — Arizzano
   - slug: `la-casa-nel-bosco-beb-arizzano`
   - indirizzo: Via per Esio, 3, 28813 Bee VB
3. **La Gatéra Guest House (Cin IT103003B4YX3PZM4B CIR 103003-AFF-00002)** — Arizzano
   - slug: `la-gatera-guest-house-cin-it103003b4yx3pzm4b-cir-arizzano`
   - indirizzo: Via Arizzano, 20, 28811 Cissano VB
4. **Ostello di Verbania** — Arizzano
   - slug: `ostello-di-verbania-arizzano`
   - indirizzo: Salita Edmondo Borri, 7, 28922 Verbania VB
5. **Residenza Lisy Rooms Affittacamere** — Arizzano
   - slug: `residenza-lisy-rooms-affittacamere-arizzano`
   - indirizzo: Via S. Martino, 8, 28923 Verbania VB
6. **Tra Lago e Stelle** — Arizzano
   - slug: `tra-lago-e-stelle-arizzano`
   - indirizzo: Via Arizzano, 11, 28811 Cissano VB
7. **Agriturismo "Cerrosughero"** — Arlena di Castro
   - slug: `agriturismo-cerrosughero-arlena-di-castro`
   - indirizzo: Strada regionale 312, località Cerrosughero, km 22.600, 01011 Canino VT
8. **Agriturismo Bisenzio - Braceria-Pizzeria-Camere** — Arlena di Castro
   - slug: `agriturismo-bisenzio-braceria-pizzeria-camere-arlena-di-castro`
   - indirizzo: Strada Provinciale Verentana, 60, 01010 Capodimonte VT
9. **Agriturismo Casale Bonaparte** — Arlena di Castro
   - slug: `agriturismo-casale-bonaparte-arlena-di-castro`
   - indirizzo: Strada Provinciale Doganella, km 17.00, 01010 Cellere VT
10. **Agriturismo Le Ginestre** — Arlena di Castro
   - slug: `agriturismo-le-ginestre-arlena-di-castro`
   - indirizzo: Strada Verentana, km.16/700, 01010 Loc. Ginestreto, VT
11. **Agriturismo Prataccio** — Arlena di Castro
   - slug: `agriturismo-prataccio-arlena-di-castro`
   - indirizzo: SP Lamone, 36, 01010 Ischia di Castro VT
12. **Agriturismo Santa Maria** — Arlena di Castro
   - slug: `agriturismo-santa-maria-arlena-di-castro`
   - indirizzo: Via Santa Maria, 01010 Marta VT
13. **Alloggio turistico 103** — Arlena di Castro
   - slug: `alloggio-turistico-103-arlena-di-castro`
   - indirizzo: Via Guglielmo Marconi, 77, 01010 Capodimonte VT
14. **Arcipelago di Arte et Agricoltura** — Arlena di Castro
   - slug: `arcipelago-di-arte-et-agricoltura-arlena-di-castro`
   - indirizzo: Str. Poggio della Ginestra, km 3.700, 01017 Tuscania VT
15. **B&b La Barabbata** — Arlena di Castro
   - slug: `b-b-la-barabbata-arlena-di-castro`
   - indirizzo: Via Papa Callisto III, 48, 01010 Marta VT
16. **B&B Vallecupa** — Arlena di Castro
   - slug: `b-b-vallecupa-arlena-di-castro`
   - indirizzo: Località Vallecupa, snc, 01010 Farnese VT
17. **BED & BREAKFAST AL PORTO** — Arlena di Castro
   - slug: `bed-breakfast-al-porto-arlena-di-castro`
   - indirizzo: Via Antonio Gramsci, 8, 01010 Marta VT
18. **Il Poggio di Musignano** — Arlena di Castro
   - slug: `il-poggio-di-musignano-arlena-di-castro`
   - indirizzo: S.da Vicinale del Pidocchio, 15, 01011 Canino VT
19. **La Mela Rosa** — Arlena di Castro
   - slug: `la-mela-rosa-arlena-di-castro`
   - indirizzo: Via Roma, 33, 01018 Valentano VT
20. **La Stalla** — Arlena di Castro
   - slug: `la-stalla-arlena-di-castro`
   - indirizzo: Via dell'Olivo, 63/1, 01017 Tuscania VT
21. **La Torretta** — Arlena di Castro
   - slug: `la-torretta-arlena-di-castro`
   - indirizzo: Via della Torretta, 11, 01017 Tuscania VT
22. **Locanda Di Mirandolina B&B Ristorante** — Arlena di Castro
   - slug: `locanda-di-mirandolina-b-b-ristorante-arlena-di-castro`
   - indirizzo: Via Pozzo Bianco, 40, 01017 Tuscania VT
23. **Qui Dormì l'Etrusco** — Arlena di Castro
   - slug: `qui-dormi-l-etrusco-arlena-di-castro`
   - indirizzo: Via Goffredo Mameli, 37, 01011 Canino VT
24. **Residenze del Bosco** — Arlena di Castro
   - slug: `residenze-del-bosco-arlena-di-castro`
   - indirizzo: Via Della Annessione, 33-35, 01017 Tuscania VT
25. **Ristorante Albergo da Otello Poleggi Sas** — Arlena di Castro
   - slug: `ristorante-albergo-da-otello-poleggi-sas-arlena-di-castro`
   - indirizzo: Via Laertina, 5, 01010 Marta VT
26. **Suite-tti** — Arlena di Castro
   - slug: `suite-tti-arlena-di-castro`
   - indirizzo: Via Cialdini, 19, 01018 Valentano VT
27. **B&B Lilly's Home** — Arluno
   - slug: `b-b-lilly-s-home-arluno`
   - indirizzo: Via Santi Gervaso e Protaso, 18, 20004 Arluno MI
28. **Hotel dei Giardini** — Arluno
   - slug: `hotel-dei-giardini-arluno`
   - indirizzo: Via dei Giardini, 8, 20014 Nerviano MI
29. **Hotel Ristorante Novara Expo** — Arluno
   - slug: `hotel-ristorante-novara-expo-arluno`
   - indirizzo: V. Santa Maria, 6, 20008 Bareggio MI
30. **Living Hotel Milano** — Arluno
   - slug: `living-hotel-milano-arluno`
   - indirizzo: Via Giacomo Matteotti, 18, 20010 Cornaredo MI
31. **Monica Hotel Fiera** — Arluno
   - slug: `monica-hotel-fiera-arluno`
   - indirizzo: Via Olivetti, 1/3, 20006 Pregnana Milanese MI
32. **Motel Ovest** — Arluno
   - slug: `motel-ovest-arluno`
   - indirizzo: 20009 Strada Statale 11 MI
33. **Unico Hotel** — Arluno
   - slug: `unico-hotel-arluno`
   - indirizzo: SP34, 20002 Ossona MI
34. **B&B Bellavista** — Armeno
   - slug: `b-b-bellavista-armeno`
   - indirizzo: Via Pratolungo, 20, 28028 Pettenasco NO
35. **Casa dei Padri** — Armeno
   - slug: `casa-dei-padri-armeno`
   - indirizzo: Piazza della Vittoria, 5, 28011 Armeno NO