# Blocco 52/500 — 35 strutture senza descrizione IT

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

1. **Sotto al bosco B&B** — Albaredo per San Marco
   - slug: `sotto-al-bosco-b-b-albaredo-per-san-marco`
   - indirizzo: Via Monastero, 13, 23015 Dubino SO
2. **TERRA BUONA Rooms & Lounge Bar** — Albaredo per San Marco
   - slug: `terra-buona-rooms-lounge-bar-albaredo-per-san-marco`
   - indirizzo: Piazza Caduti, 4, 23019 Traona SO
3. **Una Finestra sulle Alpi** — Albaredo per San Marco
   - slug: `una-finestra-sulle-alpi-albaredo-per-san-marco`
   - indirizzo: Via Lissi, 2, 23010 Bema SO
4. **Agriturismo Casa Delle Erbe** — Albareto
   - slug: `agriturismo-casa-delle-erbe-albareto`
   - indirizzo: Località Pieve di Campi, 60A, 43051 Albareto PR
5. **Agriturismo Costa d'Orsola** — Albareto
   - slug: `agriturismo-costa-d-orsola-albareto`
   - indirizzo: Località Orsola, 54027, 54027 Pontremoli MS
6. **Agriturismo Mulino Marghen** — Albareto
   - slug: `agriturismo-mulino-marghen-albareto`
   - indirizzo: Località Noce, 54029 Zeri MS
7. **Albergo Belvedere** — Albareto
   - slug: `albergo-belvedere-albareto`
   - indirizzo: SP52, 1, 19010 Ossegna SP
8. **Albergo Ristorante La Veranda** — Albareto
   - slug: `albergo-ristorante-la-veranda-albareto`
   - indirizzo: Via Mario Padovani, 26, 19010 Tavarone SP
9. **B&B Ca' d'Andrea** — Albareto
   - slug: `b-b-ca-d-andrea-albareto`
   - indirizzo: Via Provinciale, 48, 43050 Valmozzola PR
10. **B&B Ca' Del Duca** — Albareto
   - slug: `b-b-ca-del-duca-albareto`
   - indirizzo: Località Barbigarezza, 2, 43053 Compiano PR
11. **B&B Costalta** — Albareto
   - slug: `b-b-costalta-albareto`
   - indirizzo: Loc. Costalta, 67, Località Costalta, 67, 43053 Strela, Compiano PR
12. **B&B Il Casolare Bioenergetico : Seminari olistici, soggiorni per famiglie e gruppi.** — Albareto
   - slug: `b-b-il-casolare-bioenergetico-seminari-olistici-albareto`
   - indirizzo: Via Albareto, 402, 43051 Le Moie PR
13. **B&B Il Poggio di Traverde** — Albareto
   - slug: `b-b-il-poggio-di-traverde-albareto`
   - indirizzo: Località Traverde, 15, 54027 Traverde MS
14. **B&B New Arcobaleno Ossegna** — Albareto
   - slug: `b-b-new-arcobaleno-ossegna-albareto`
   - indirizzo: Via XXIV Maggio, 5, 19010 Ossegna SP
15. **Borgo Casale** — Albareto
   - slug: `borgo-casale-albareto`
   - indirizzo: Località Casale, 43051 Albareto PR
16. **Casa del Gigi BnB** — Albareto
   - slug: `casa-del-gigi-bnb-albareto`
   - indirizzo: Località Pieve di Campi, 41, 43051 Albareto PR
17. **Funghi e Fate** — Albareto
   - slug: `funghi-e-fate-albareto`
   - indirizzo: Gotra, 76, 43051 Albareto PR
18. **Hotel Mistrello** — Albareto
   - slug: `hotel-mistrello-albareto`
   - indirizzo: Via Europa, 2, 43043 Borgo Val di Taro PR
19. **Hotel Residence Sant'Anna** — Albareto
   - slug: `hotel-residence-sant-anna-albareto`
   - indirizzo: Via Roma, 3-5, 43041 Bedonia PR
20. **La Ca' Verde - Azienda Agricola e Bed and Breakfast Rurale** — Albareto
   - slug: `la-ca-verde-azienda-agricola-e-bed-and-breakfast-albareto`
   - indirizzo: Via San Quirico, 65, 43051 Albareto PR
21. **La Casa del Sarto - FedericoFarm** — Albareto
   - slug: `la-casa-del-sarto-federicofarm-albareto`
   - indirizzo: Località Grondola Strada Provinciale del Brattello km 8, 54027 Pontremoli MS
22. **La Castagna Matta** — Albareto
   - slug: `la-castagna-matta-albareto`
   - indirizzo: Località Case Mazzetta, 415/A, 43051 Case Mazzetta PR
23. **La Vecchia Colonia e La Castagna Matta** — Albareto
   - slug: `la-vecchia-colonia-e-la-castagna-matta-albareto`
   - indirizzo: Località Case Mazzetta, 416, 43051 Case Mazzetta PR
24. **Agriturismo 'd Raine'** — Albaretto della Torre
   - slug: `agriturismo-d-raine-albaretto-della-torre`
   - indirizzo: Via Brantegna, 41, 12050 Montelupo Albese CN
25. **Agriturismo Casa del principe** — Albaretto della Torre
   - slug: `agriturismo-casa-del-principe-albaretto-della-torre`
   - indirizzo: Località Fontane, 15, 12050 Torre Bormida CN
26. **Agriturismo Cascina Pajanòt** — Albaretto della Torre
   - slug: `agriturismo-cascina-pajanot-albaretto-della-torre`
   - indirizzo: via Alba, 12050 Borgomale CN
27. **Agriturismo Le Arcate** — Albaretto della Torre
   - slug: `agriturismo-le-arcate-albaretto-della-torre`
   - indirizzo: Via Montelupo, 52, 12050 Sinio CN
28. **Agriturismo Rihane** — Albaretto della Torre
   - slug: `agriturismo-rihane-albaretto-della-torre`
   - indirizzo: Località Assiè, 3, 12050 Sinio CN
29. **Al Brich** — Albaretto della Torre
   - slug: `al-brich-albaretto-della-torre`
   - indirizzo: Via S. Antonino, 1/A, 12050 Albaretto della Torre CN
30. **B&B Il Sole Delle Rive** — Albaretto della Torre
   - slug: `b-b-il-sole-delle-rive-albaretto-della-torre`
   - indirizzo: Via Borine, 29, 12050 Sinio CN
31. **B&B La Buonora** — Albaretto della Torre
   - slug: `b-b-la-buonora-albaretto-della-torre`
   - indirizzo: Via Montelupo, 59, 12050 Sinio CN
32. **B&B La Fontana nelle Langhe** — Albaretto della Torre
   - slug: `b-b-la-fontana-nelle-langhe-albaretto-della-torre`
   - indirizzo: Via della Fontana, 4, 12050 Rodello CN
33. **B&B La Rola** — Albaretto della Torre
   - slug: `b-b-la-rola-albaretto-della-torre`
   - indirizzo: Via Umberto, 4, 12050 Albaretto della Torre CN
34. **Casa di Langa** — Albaretto della Torre
   - slug: `casa-di-langa-albaretto-della-torre`
   - indirizzo: Località Talloria 1, 12050 Cerretto Langhe CN
35. **Hotel Ca' del Lupo** — Albaretto della Torre
   - slug: `hotel-ca-del-lupo-albaretto-della-torre`
   - indirizzo: Via Ballerina, 14, 12050 Montelupo Albese CN