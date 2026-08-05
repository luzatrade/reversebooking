# Blocco 325/500 — 35 strutture senza descrizione IT

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

1. **Hotel Granduca** — Briatico
   - slug: `hotel-granduca-briatico`
   - indirizzo: Contrada scrugli, 89817 Briatico VV
2. **Hotel La Praia** — Briatico
   - slug: `hotel-la-praia-briatico`
   - indirizzo: Via del Mare, 18, 89868 Zambrone VV
3. **Hotel Scoglio del Leone** — Briatico
   - slug: `hotel-scoglio-del-leone-briatico`
   - indirizzo: Via Marina, 89868 Zambrone VV
4. **In centro** — Briatico
   - slug: `in-centro-briatico`
   - indirizzo: Via Milite Ignoto, 64, 89900 Vibo Valentia VV
5. **La Valle Verde** — Briatico
   - slug: `la-valle-verde-briatico`
   - indirizzo: contrada crita, 89868 Zambrone VV
6. **Palazzo Marzano** — Briatico
   - slug: `palazzo-marzano-briatico`
   - indirizzo: Corso Margherita, 89817 Briatico VV
7. **Residenza La Meridiana** — Briatico
   - slug: `residenza-la-meridiana-briatico`
   - indirizzo: Corso Margherita, 46, 89817 Briatico VV
8. **Villa Paglianiti - Your Family Residence !** — Briatico
   - slug: `villa-paglianiti-your-family-residence-briatico`
   - indirizzo: Contrada, Località la Brace, 1, 89817 Briatico VV
9. **Villaggio Hotel Lido San Giuseppe** — Briatico
   - slug: `villaggio-hotel-lido-san-giuseppe-briatico`
   - indirizzo: Loc. Brace, 89817 Briatico VV
10. **Agriturismo Bacca Blu** — Bricherasio
   - slug: `agriturismo-bacca-blu-bricherasio`
   - indirizzo: Str. Rivà, 31, 10060 Bricherasio TO
11. **Agriturismo La Casetta - Ristorante - B&B** — Bricherasio
   - slug: `agriturismo-la-casetta-ristorante-b-b-bricherasio`
   - indirizzo: Str. Cuccia, 25, 10060 Bricherasio TO
12. **Agriturismo Turina - B&B a Bricherasio** — Bricherasio
   - slug: `agriturismo-turina-b-b-a-bricherasio-bricherasio`
   - indirizzo: Str. Tagliarea, 16, 10060 Bricherasio TO
13. **B&B Agrialpi** — Bricherasio
   - slug: `b-b-agrialpi-bricherasio`
   - indirizzo: Str. Roncaglia, 35, 10060 Bricherasio TO
14. **B&B Becco di luna** — Bricherasio
   - slug: `b-b-becco-di-luna-bricherasio`
   - indirizzo: via Cianrama, 7, 10066 Torre Pellice TO
15. **B&B L'Orto del Geo** — Bricherasio
   - slug: `b-b-l-orto-del-geo-bricherasio`
   - indirizzo: Via Castellani, 79, 10061 Cavour TO
16. **B&B Villa Tagliarea - Eventi e Soggiorni** — Bricherasio
   - slug: `b-b-villa-tagliarea-eventi-e-soggiorni-bricherasio`
   - indirizzo: Str. Rivà, 49, 10060 Bricherasio TO
17. **Cascina Marie Location e Beb** — Bricherasio
   - slug: `cascina-marie-location-e-beb-bricherasio`
   - indirizzo: Str. Avaro, 4, 10060 Bricherasio TO
18. **Il Glomere Camping – quiet campsite in the Alps** — Bricherasio
   - slug: `il-glomere-camping-quiet-campsite-in-the-alps-bricherasio`
   - indirizzo: Via Fornaci, 25, 10060 Rorà TO
19. **La Marmotta** — Bricherasio
   - slug: `la-marmotta-bricherasio`
   - indirizzo: Piazza Parrocchiale, 11, 10062 Luserna TO
20. **Villa Sarti** — Bricherasio
   - slug: `villa-sarti-bricherasio`
   - indirizzo: Via, Piazza Parrocchiale, 6, 10062 Luserna San Giovanni TO
21. **casa tarcisio** — Brienno
   - slug: `casa-tarcisio-brienno`
   - indirizzo: Via Stretta, 14, 22020 Palanzo CO
22. **Chalet Lilia** — Brienno
   - slug: `chalet-lilia-brienno`
   - indirizzo: Via della Brugascia, 1, 22010 Brienno CO
23. **Hotel Bersagliere** — Brienno
   - slug: `hotel-bersagliere-brienno`
   - indirizzo: Via Regina Nuova, 38, 22010 Laglio CO
24. **Hotel National** — Brienno
   - slug: `hotel-national-brienno`
   - indirizzo: Piazza Rimembranza, 1, 22020 Zelbio CO
25. **LG LAKE - boutique apartments and rooms** — Brienno
   - slug: `lg-lake-boutique-apartments-and-rooms-brienno`
   - indirizzo: Via del Biello, 22010 Brienno CO
26. **Ristorante Albergo Bella Vista** — Brienno
   - slug: `ristorante-albergo-bella-vista-brienno`
   - indirizzo: Via Adeletto Zerboni, 6, 22020 Veleso CO
27. **"HOTEL EDEN" RISTORANTE** — Brienza
   - slug: `hotel-eden-ristorante-brienza`
   - indirizzo: SS 598 di Fondo Valle d'Agri, 85050 Brienza PZ
28. **Affittacamere Le Querce** — Brienza
   - slug: `affittacamere-le-querce-brienza`
   - indirizzo: Via Querce, 43, 84039 Teggiano SA
29. **B&B Bosco Ralle** — Brienza
   - slug: `b-b-bosco-ralle-brienza`
   - indirizzo: SC Ciciriello, 1, 85050 Satriano di Lucania PZ
30. **La Casa Del Borgo** — Brienza
   - slug: `la-casa-del-borgo-brienza`
   - indirizzo: Corso Umberto I, 35, 85050 Brienza PZ
31. **La Giara Bed & Breakfast** — Brienza
   - slug: `la-giara-bed-breakfast-brienza`
   - indirizzo: Via Pagano Mario, 29, 85050 Brienza PZ
32. **La Voce del Fiume | B&B a Brienza** — Brienza
   - slug: `la-voce-del-fiume-b-b-a-brienza-brienza`
   - indirizzo: Vico del Carmine, 5, 85050 Brienza PZ
33. **Palazzo Brienza** — Brienza
   - slug: `palazzo-brienza-brienza`
   - indirizzo: Piazza Mario Pagano, 18, 85100 Potenza PZ
34. **Ristorante, Pizzeria, Affittacamere Rezzo** — Brienza
   - slug: `ristorante-pizzeria-affittacamere-rezzo-brienza`
   - indirizzo: Piazza Sandro Pertini, 1, 84030 Monte San Giacomo SA
35. **Albergo Ristorante Edelweiss** — Briga Alta
   - slug: `albergo-ristorante-edelweiss-briga-alta`
   - indirizzo: Frazione Panice Sottana, 10, 12015 Limone Piemonte CN