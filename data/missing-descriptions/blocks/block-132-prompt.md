# Blocco 132/500 — 35 strutture senza descrizione IT

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

1. **San Tommaso** — Aquino
   - slug: `san-tommaso-aquino`
   - indirizzo: Via Giovenale, 90, 03031 Aquino FR
2. **Villa Angelina** — Aquino
   - slug: `villa-angelina-aquino`
   - indirizzo: Via Filippo Turati, 14, 03031 Aquino FR
3. **Villa Capodacqua B&B** — Aquino
   - slug: `villa-capodacqua-b-b-aquino`
   - indirizzo: Via Guadicciolo, 29, 03030 Castrocielo FR
4. **B&B La Corte dei Pozzi** — Aradeo
   - slug: `b-b-la-corte-dei-pozzi-aradeo`
   - indirizzo: Via Roma, 279, 73017 Sannicola LE
5. **B&B La Seta Rossa** — Aradeo
   - slug: `b-b-la-seta-rossa-aradeo`
   - indirizzo: Contrada Pennella, 73044 Galatone LE
6. **Casetta Vacanza in Campagna** — Aradeo
   - slug: `casetta-vacanza-in-campagna-aradeo`
   - indirizzo: Via San Luigi, Snc, 73040 Aradeo LE
7. **Corte Baldi Antica Dimora** — Aradeo
   - slug: `corte-baldi-antica-dimora-aradeo`
   - indirizzo: Corte Baldi, 6, 73013 Galatina LE
8. **DIMORA CASTELLO casa vacanze** — Aradeo
   - slug: `dimora-castello-casa-vacanze-aradeo`
   - indirizzo: Strada comunale castello di Forcignano, 5, 73044 Galatone LE
9. **Essegi** — Aradeo
   - slug: `essegi-aradeo`
   - indirizzo: Via Eugenio Montale, 17, 73040 Aradeo LE
10. **Il Torrino** — Aradeo
   - slug: `il-torrino-aradeo`
   - indirizzo: Viale Jonio, 23, 73013 Galatina LE
11. **Le Vallonee B&B** — Aradeo
   - slug: `le-vallonee-b-b-aradeo`
   - indirizzo: Via R. Grieco, 69, 73040 Aradeo LE
12. **Palazzo Donna Chicchi** — Aradeo
   - slug: `palazzo-donna-chicchi-aradeo`
   - indirizzo: Via Vittorio Emanuele III, 13, 73044 Galatone LE
13. **Palazzo Francesco Grassi B&B** — Aradeo
   - slug: `palazzo-francesco-grassi-b-b-aradeo`
   - indirizzo: Via Palmiro Togliatti, 2, 73040 Aradeo LE
14. **Palazzo Vittoria B&B** — Aradeo
   - slug: `palazzo-vittoria-b-b-aradeo`
   - indirizzo: Strada Vicinale Angelelli Paolo, 73020 Cutrofiano LE
15. **Pozzi Dolci B&B** — Aradeo
   - slug: `pozzi-dolci-b-b-aradeo`
   - indirizzo: Via Pozzi Dolci, 87, 73040 Aradeo LE
16. **Residenza Santa Lucia** — Aradeo
   - slug: `residenza-santa-lucia-aradeo`
   - indirizzo: Via Santa Lucia, 1, 73044 Galatone LE
17. **TENUTA LA MONACA Agriturismo e BeB** — Aradeo
   - slug: `tenuta-la-monaca-agriturismo-e-beb-aradeo`
   - indirizzo: LOCALITA MANDRELLE, 73040 Aradeo LE
18. **Villa delle Rose** — Aradeo
   - slug: `villa-delle-rose-aradeo`
   - indirizzo: Strada Provinciale Galatina - Galatone, km 4/5, 73013 Galatina LE
19. **A Casa Vostra Bed & Breakfast** — Aragona
   - slug: `a-casa-vostra-bed-breakfast-aragona`
   - indirizzo: Via Giovanni Falcone, 19, 92021 Aragona AG
20. **Alba Palace Hotel** — Aragona
   - slug: `alba-palace-hotel-aragona`
   - indirizzo: Via Belmonte, 21, 92026 Favara AG
21. **B&B Domus 65** — Aragona
   - slug: `b-b-domus-65-aragona`
   - indirizzo: Via Enrico de Nicola, 65, 92021 Aragona AG
22. **Bed & Breakfast Il Mandorlo - CIN IT084001C1FGZQDGCS** — Aragona
   - slug: `bed-breakfast-il-mandorlo-cin-it084001c1fgzqdgcs-aragona`
   - indirizzo: Via Imera, 138, 92100 Agrigento AG
23. **Belmonte Hotel** — Aragona
   - slug: `belmonte-hotel-aragona`
   - indirizzo: Via Sottotenente Saieva, 10, 92026 Favara AG
24. **Camere a sud** — Aragona
   - slug: `camere-a-sud-aragona`
   - indirizzo: Via Ficani, 6, 92100 Agrigento AG
25. **holiday home** — Aragona
   - slug: `holiday-home-aragona`
   - indirizzo: Via Andrea Costa, 90, 92020 Comitini AG
26. **Hotel del Viale** — Aragona
   - slug: `hotel-del-viale-aragona`
   - indirizzo: Via del Piave, 19, 92100 Agrigento AG
27. **La casa del corso** — Aragona
   - slug: `la-casa-del-corso-aragona`
   - indirizzo: Via Tommaso Grossi, 2, 92021 Aragona AG
28. **La Terrazza di Athena sweetrooms** — Aragona
   - slug: `la-terrazza-di-athena-sweetrooms-aragona`
   - indirizzo: Cortile Stivala, 92100 Agrigento AG
29. **Sulfurea B&B ***** — Aragona
   - slug: `sulfurea-b-b-aragona`
   - indirizzo: Via Apollo XI, 52, 92020 Comitini AG
30. **Terrazza sul Rabato** — Aragona
   - slug: `terrazza-sul-rabato-aragona`
   - indirizzo: Via Giuseppe Garibaldi, 142, 92100 Agrigento AG
31. **Turismo Rurale "Principe di Aragona"** — Aragona
   - slug: `turismo-rurale-principe-di-aragona-aragona`
   - indirizzo: C.da Fontana Vicario, 92021 Aragona AG
32. **Villa Maryam** — Aragona
   - slug: `villa-maryam-aragona`
   - indirizzo: Via Navarro della Miraglia, 3, 92100 Agrigento AG
33. **A casa di Carla B&B** — Aramengo
   - slug: `a-casa-di-carla-b-b-aramengo`
   - indirizzo: Via Maestra, 5, 10090 San Raffaele Cimena TO
34. **Acquaementa** — Aramengo
   - slug: `acquaementa-aramengo`
   - indirizzo: Via Scallaro, 30, 10020 Cavagnolo TO
35. **Affittacamere San Rocco** — Aramengo
   - slug: `affittacamere-san-rocco-aramengo`
   - indirizzo: Via R. Giuliani, 23, 14020 Aramengo AT