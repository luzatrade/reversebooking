# Blocco 115/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Adige Padova** — Anguillara Veneta
   - slug: `albergo-ristorante-adige-padova-anguillara-veneta`
   - indirizzo: Via Barchessa, 2, 35040 Boara Pisani PD
2. **Aura Dimore ad Arquà Petrarca** — Anguillara Veneta
   - slug: `aura-dimore-ad-arqua-petrarca-anguillara-veneta`
   - indirizzo: Via Montericco, 7, 35032 Arquà Petrarca PD
3. **Cà Rocca Relais** — Anguillara Veneta
   - slug: `ca-rocca-relais-anguillara-veneta`
   - indirizzo: Via Basse, 2, 35043 Monselice PD
4. **Country House Campofiore** — Anguillara Veneta
   - slug: `country-house-campofiore-anguillara-veneta`
   - indirizzo: Via Isola di, Via Isola Terranova, 60, 35029 Pontelongo PD
5. **Hotel Fuori Città** — Anguillara Veneta
   - slug: `hotel-fuori-citta-anguillara-veneta`
   - indirizzo: Via Peagna, 2, 35048 Stanghella PD
6. **Hotel Petrarca** — Anguillara Veneta
   - slug: `hotel-petrarca-anguillara-veneta`
   - indirizzo: Via Roma, 90, 35040 Boara Pisani PD
7. **le casette di Olga** — Anguillara Veneta
   - slug: `le-casette-di-olga-anguillara-veneta`
   - indirizzo: Via Amolaro, 15, 35030 Baone PD
8. **Quo Vadis Qui Vieni** — Anguillara Veneta
   - slug: `quo-vadis-qui-vieni-anguillara-veneta`
   - indirizzo: Via Balbi Valier, 1, 45100 Rovigo RO
9. **Ristorante Hotel europa** — Anguillara Veneta
   - slug: `ristorante-hotel-europa-anguillara-veneta`
   - indirizzo: V.le Porta Po, 92, 45100 Rovigo RO
10. **Albergo Escondido Ferrara Snc di Ferrara Santo & C.** — Annicco
   - slug: `albergo-escondido-ferrara-snc-di-ferrara-santo-c-annicco`
   - indirizzo: Frazione Olzano, 2, 26015 Soresina CR
11. **Appartamento73** — Annicco
   - slug: `appartamento73-annicco`
   - indirizzo: Via Montegrappa, 32, 26020 Cignone CR
12. **b&b family home** — Annicco
   - slug: `b-b-family-home-annicco`
   - indirizzo: Via Trento e Trieste, 24, 26015 Soresina CR
13. **Bes Hotel Cremona Soncino** — Annicco
   - slug: `bes-hotel-cremona-soncino-annicco`
   - indirizzo: Via Milano, 25, 26029 Soncino CR
14. **Hotel Villa Borghesi** — Annicco
   - slug: `hotel-villa-borghesi-annicco`
   - indirizzo: Via Alcide de Gasperi, 17, 26020 Cignone CR
15. **il Poeta Contadino** — Annicco
   - slug: `il-poeta-contadino-annicco`
   - indirizzo: Via Mara Maretti Soldi, SP6, 26011 Casalbuttano ed Uniti CR
16. **Residence Michela** — Annicco
   - slug: `residence-michela-annicco`
   - indirizzo: Via Giuseppe Garibaldi, 27, 26026 Pizzighettone CR
17. **Albergo Ristorante Arrigoni** — Annone di Brianza
   - slug: `albergo-ristorante-arrigoni-annone-di-brianza`
   - indirizzo: Via Roma, 60, 23892 Bulciago LC
18. **Albergo Sorgente** — Annone di Brianza
   - slug: `albergo-sorgente-annone-di-brianza`
   - indirizzo: Via Gajum, 36, 22035 Canzo CO
19. **B&B Armonie del Lago** — Annone di Brianza
   - slug: `b-b-armonie-del-lago-annone-di-brianza`
   - indirizzo: Via Ponte, 15, 23841 Annone di Brianza LC
20. **Cornizzolo Bed Breakfast** — Annone di Brianza
   - slug: `cornizzolo-bed-breakfast-annone-di-brianza`
   - indirizzo: Via Boschetto, 6, 23867 Suello LC
21. **Dogana Vecchia** — Annone di Brianza
   - slug: `dogana-vecchia-annone-di-brianza`
   - indirizzo: Via Provinciale, 25, 23862 Civate LC
22. **don abbondio Hotel Ristorante** — Annone di Brianza
   - slug: `don-abbondio-hotel-ristorante-annone-di-brianza`
   - indirizzo: Piazza Era, 10, 23900 Lecco LC
23. **Hotel Alberi Lecco** — Annone di Brianza
   - slug: `hotel-alberi-lecco-annone-di-brianza`
   - indirizzo: Lungolario Isonzo, 4, 23900 Lecco LC
24. **Hotel Baia di Pare** — Annone di Brianza
   - slug: `hotel-baia-di-pare-annone-di-brianza`
   - indirizzo: Via Frazione Parè, 35, 23868 Valmadrera LC
25. **Hotel Bellavista** — Annone di Brianza
   - slug: `hotel-bellavista-annone-di-brianza`
   - indirizzo: Frazione Parè, 87, 23868 Valmadrera LC
26. **Hotel Griso Collection** — Annone di Brianza
   - slug: `hotel-griso-collection-annone-di-brianza`
   - indirizzo: Viale Italia, 24, 23864 Malgrate LC
27. **Hotel Moderno** — Annone di Brianza
   - slug: `hotel-moderno-annone-di-brianza`
   - indirizzo: Piazza Armando Diaz, 5, 23900 Lecco LC
28. **Hotel Nuovo** — Annone di Brianza
   - slug: `hotel-nuovo-annone-di-brianza`
   - indirizzo: Via Statale, 1122, 23852 Lecco LC
29. **Hotel Ristorante Parco Belvedere** — Annone di Brianza
   - slug: `hotel-ristorante-parco-belvedere-annone-di-brianza`
   - indirizzo: Via Belvedere, 50, 23855 Pescate LC
30. **Hotel Ristorante Pizzeria Caviate** — Annone di Brianza
   - slug: `hotel-ristorante-pizzeria-caviate-annone-di-brianza`
   - indirizzo: Lungolario Piave, 17, 23900 Lecco LC
31. **HSM - Hotel San Martino** — Annone di Brianza
   - slug: `hsm-hotel-san-martino-annone-di-brianza`
   - indirizzo: Via Europa, 4, 23846 Garbagnate Monastero LC
32. **Parini Hotel** — Annone di Brianza
   - slug: `parini-hotel-annone-di-brianza`
   - indirizzo: Piazza Ospedale, 4, 23842 Bosisio Parini LC
33. **Red's Redaelli Hotel** — Annone di Brianza
   - slug: `red-s-redaelli-hotel-annone-di-brianza`
   - indirizzo: Via Don Rinaldo Beretta, 24, 23891 Barzanò LC
34. **Agriturismo Quadrifoglio Relax** — Annone Veneto
   - slug: `agriturismo-quadrifoglio-relax-annone-veneto`
   - indirizzo: Via G. B. Giustinian, 7, 30027 San Donà di Piave VE
35. **Albergo Leon D'Oro** — Annone Veneto
   - slug: `albergo-leon-d-oro-annone-veneto`
   - indirizzo: Via Roma, 2, 30020 Noventa di Piave VE