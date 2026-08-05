# Blocco 40/500 — 35 strutture senza descrizione IT

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

1. **Villa Rosanna b&b** — Ailano
   - slug: `villa-rosanna-b-b-ailano`
   - indirizzo: Via Santo Spirito, 2, 81058 Caianello CE
2. **Ai 4 Gatti B&B** — Ailoche
   - slug: `ai-4-gatti-b-b-ailoche`
   - indirizzo: Frazione Vacchiero, 21, 13821 Camandona BI
3. **Albergo & Ristorante della Posta** — Ailoche
   - slug: `albergo-ristorante-della-posta-ailoche`
   - indirizzo: Via Provinciale, 235, 13835 Trivero BI
4. **Albergo Italia** — Ailoche
   - slug: `albergo-italia-ailoche`
   - indirizzo: Corso Roma, 6, 13019 Varallo VC
5. **Antico Affittacamere di Tollegno** — Ailoche
   - slug: `antico-affittacamere-di-tollegno-ailoche`
   - indirizzo: Via Garibaldi, 49, 13818 Tollegno BI
6. **Azienda Agricola con Agriturismo Ca' nel Bosco** — Ailoche
   - slug: `azienda-agricola-con-agriturismo-ca-nel-bosco-ailoche`
   - indirizzo: 13833, Frazione Gila, 25/b, 13833 Portula BI
7. **B&B Il Cortile** — Ailoche
   - slug: `b-b-il-cortile-ailoche`
   - indirizzo: Via Pietro Bora, 22, 13900 Biella BI
8. **B&B Il Gomitolo - Soggiorno di charme** — Ailoche
   - slug: `b-b-il-gomitolo-soggiorno-di-charme-ailoche`
   - indirizzo: Via XX Settembre, 32, 13818 Tollegno BI
9. **B&B La Biulla** — Ailoche
   - slug: `b-b-la-biulla-ailoche`
   - indirizzo: Via G. Porta, 39, 13863 Biolla BI
10. **B&B La Colombera** — Ailoche
   - slug: `b-b-la-colombera-ailoche`
   - indirizzo: Via IV Novembre, 49, 13853 Lessona BI
11. **B&B Residence Ianua Coeli** — Ailoche
   - slug: `b-b-residence-ianua-coeli-ailoche`
   - indirizzo: Localita' Caudana, 62, 13835 Pistolesa BI
12. **Camere Camillo** — Ailoche
   - slug: `camere-camillo-ailoche`
   - indirizzo: Via Noche, 21, 13864 Crevacuore BI
13. **Casa Valduggia** — Ailoche
   - slug: `casa-valduggia-ailoche`
   - indirizzo: Via Roma, 27, 13018 Valduggia VC
14. **CasAda** — Ailoche
   - slug: `casada-ailoche`
   - indirizzo: Via A. Cerruti, 19, 13853 Lessona BI
15. **La Burla** — Ailoche
   - slug: `la-burla-ailoche`
   - indirizzo: Località La Burla, 13010 Guardabosone VC
16. **La Casa Verde B&B** — Ailoche
   - slug: `la-casa-verde-b-b-ailoche`
   - indirizzo: Frazione Pratrivero, 274, 13835 Pratrivero BI
17. **Locanda dei Mercanti** — Ailoche
   - slug: `locanda-dei-mercanti-ailoche`
   - indirizzo: piazza Vittorio Emanuele III, 3, 13864 Crevacuore BI
18. **Locanda di Campagna Guardabosone** — Ailoche
   - slug: `locanda-di-campagna-guardabosone-ailoche`
   - indirizzo: Via Roma, 37G, 13010 Guardabosone VC
19. **Ristorante Albergo bar Noveis** — Ailoche
   - slug: `ristorante-albergo-bar-noveis-ailoche`
   - indirizzo: Frazione Noveis, 20, 13864 Caprile BI
20. **THE HORSE - GUEST HOUSE** — Ailoche
   - slug: `the-horse-guest-house-ailoche`
   - indirizzo: VIA ENRICO FERMI, 2, 28076 Pogno NO
21. **Villa Erbetta Home Restaurant+B&B** — Ailoche
   - slug: `villa-erbetta-home-restaurant-b-b-ailoche`
   - indirizzo: Via Torchio, 13010 Guardabosone VC
22. **Apparta hotel** — Airasca
   - slug: `apparta-hotel-airasca`
   - indirizzo: Via Bellezia, 2, 10043 Orbassano TO
23. **b&b D'or dublè** — Airasca
   - slug: `b-b-d-or-duble-airasca`
   - indirizzo: Via Garavella, 12, 10041 Carignano TO
24. **B&B Le Mimose** — Airasca
   - slug: `b-b-le-mimose-airasca`
   - indirizzo: Str. Cesani Sardegna, 52, 10060 Bricherasio TO
25. **B&B Pian Savin** — Airasca
   - slug: `b-b-pian-savin-airasca`
   - indirizzo: Via Pian Savin, Borgata Tora, 1, 10094 Giaveno TO
26. **B&B Quattro Gatti** — Airasca
   - slug: `b-b-quattro-gatti-airasca`
   - indirizzo: Fraz, Via Gabellieri, 9, 10060 Piscina TO
27. **Casa Del Grande Vecchio** — Airasca
   - slug: `casa-del-grande-vecchio-airasca`
   - indirizzo: Via Roma, 83, 10060 Airasca TO
28. **Glicini Hotel** — Airasca
   - slug: `glicini-hotel-airasca`
   - indirizzo: Via Val Pellice, 68, 10060 San Secondo di Pinerolo TO
29. **Hotel Cavalieri** — Airasca
   - slug: `hotel-cavalieri-airasca`
   - indirizzo: Stradale Orbassano, 21, 10064 Pinerolo TO
30. **Hotel Eden** — Airasca
   - slug: `hotel-eden-airasca`
   - indirizzo: Str. Rivalta, 15, 10043 Orbassano TO
31. **Hotel Original** — Airasca
   - slug: `hotel-original-airasca`
   - indirizzo: Via Arturo Farinelli, 4, 10135 Torino TO
32. **Hotel Quo Vadis** — Airasca
   - slug: `hotel-quo-vadis-airasca`
   - indirizzo: Via Sestriere, 71, 10060 None TO
33. **Hotel Residence Guido Reni** — Airasca
   - slug: `hotel-residence-guido-reni-airasca`
   - indirizzo: Via Tempio Pausania, 43, 10137 Torino TO
34. **Hotel Residence Sestriere** — Airasca
   - slug: `hotel-residence-sestriere-airasca`
   - indirizzo: Via Brofferio, 5, 10024 Moncalieri TO
35. **Hotel San Giorgio** — Airasca
   - slug: `hotel-san-giorgio-airasca`
   - indirizzo: Via S. Giorgio, 41, 10090 Sangano TO