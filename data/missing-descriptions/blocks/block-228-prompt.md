# Blocco 228/500 — 35 strutture senza descrizione IT

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

1. **b&b Mariele** — Baronissi
   - slug: `b-b-mariele-baronissi`
   - indirizzo: Via Bellini, 33, 84081 Orignano SA
2. **B&B Michela** — Baronissi
   - slug: `b-b-michela-baronissi`
   - indirizzo: Via Salvador Allende, 90/A, 84081 Baronissi SA
3. **B&B Vento e Amore** — Baronissi
   - slug: `b-b-vento-e-amore-baronissi`
   - indirizzo: Via la Fora, 5, 84081 Caprecano SA
4. **B&B Veronica** — Baronissi
   - slug: `b-b-veronica-baronissi`
   - indirizzo: Viale Ferrovia, 29, 84081 Baronissi SA
5. **Bed And Breakfast Iride** — Baronissi
   - slug: `bed-and-breakfast-iride-baronissi`
   - indirizzo: Via Cappella, 6, 84081 Baronissi SA
6. **Casa Francesca-Affittacamere** — Baronissi
   - slug: `casa-francesca-affittacamere-baronissi`
   - indirizzo: Via Pendino, 31/1, 84085 Mercato San Severino SA
7. **Hotel Dei Principati** — Baronissi
   - slug: `hotel-dei-principati-baronissi`
   - indirizzo: Via Salvador Allende, 88, 84081 Baronissi SA
8. **La magnolia B&B** — Baronissi
   - slug: `la-magnolia-b-b-baronissi`
   - indirizzo: Piazza Trivio (ex, Via Corte, 10, 84081 Baronissi SA
9. **Mezzaluna Guest House** — Baronissi
   - slug: `mezzaluna-guest-house-baronissi`
   - indirizzo: Via Pozzillo, 2, 84081 Baronissi SA
10. **Salerno B&B** — Baronissi
   - slug: `salerno-b-b-baronissi`
   - indirizzo: Via D. Cirillo, 71, 84081 Baronissi SA
11. **Setteabbracci Suite & Apartments** — Baronissi
   - slug: `setteabbracci-suite-apartments-baronissi`
   - indirizzo: Via dei Due Principati, 84081 Antessano SA
12. **TerrAmare Suites** — Baronissi
   - slug: `terramare-suites-baronissi`
   - indirizzo: Via Carpineto, 1a, 84081 Baronissi SA
13. **Tree Luxury** — Baronissi
   - slug: `tree-luxury-baronissi`
   - indirizzo: Via Don Minzoni, 29, 84081 Baronissi SA
14. **Villitaly suite & coffee** — Baronissi
   - slug: `villitaly-suite-coffee-baronissi`
   - indirizzo: Via dei Due Principati, 93, 84081 Baronissi SA
15. **Agriturismo Borgo Furma** — Barrafranca
   - slug: `agriturismo-borgo-furma-barrafranca`
   - indirizzo: SS117bis, 94100 Enna EN
16. **Agriturismo La Fattoria di San Francesco** — Barrafranca
   - slug: `agriturismo-la-fattoria-di-san-francesco-barrafranca`
   - indirizzo: Contrada Menta, Snc, 94016 Pietraperzia EN
17. **Albergo Suite D'Autore** — Barrafranca
   - slug: `albergo-suite-d-autore-barrafranca`
   - indirizzo: Piazza Cattedrale, 1, 94015 Piazza Armerina EN
18. **Antichi Ricordi Hotel di Charme & SPA** — Barrafranca
   - slug: `antichi-ricordi-hotel-di-charme-spa-barrafranca`
   - indirizzo: Via Villaglori, 45, 93100 Caltanissetta CL
19. **B&B " Borgo Pileri"** — Barrafranca
   - slug: `b-b-borgo-pileri-barrafranca`
   - indirizzo: SP27, 93013 Mazzarino CL
20. **B&B Dante** — Barrafranca
   - slug: `b-b-dante-barrafranca`
   - indirizzo: Via Dante, 7, 94012 Barrafranca EN
21. **B&B Diana** — Barrafranca
   - slug: `b-b-diana-barrafranca`
   - indirizzo: Viale Generale Ciancio, 88, 94015 Piazza Armerina EN
22. **B&B La Casa sulla Collina d'Oro** — Barrafranca
   - slug: `b-b-la-casa-sulla-collina-d-oro-barrafranca`
   - indirizzo: Via Piersanti Mattarella, 94015 Piazza Armerina EN
23. **Camurria Sicilian B&B** — Barrafranca
   - slug: `camurria-sicilian-b-b-barrafranca`
   - indirizzo: Via Garibaldi, 76, 94015 Piazza Armerina EN
24. **Giardino delle Zagare** — Barrafranca
   - slug: `giardino-delle-zagare-barrafranca`
   - indirizzo: Via Favara, 11, 94015 Piazza Armerina EN
25. **La Quercia e l'Asino** — Barrafranca
   - slug: `la-quercia-e-l-asino-barrafranca`
   - indirizzo: Via Martin Luther King, 4, 94015 Piazza Armerina EN
26. **La Stazione** — Barrafranca
   - slug: `la-stazione-barrafranca`
   - indirizzo: Piazza Senatore Marescalchi, 8, 94015 Piazza Armerina EN
27. **Affitacamere JIL** — Barrali
   - slug: `affitacamere-jil-barrali`
   - indirizzo: Via Leonardo Da Vinci, 10/Primo piano, 09048 Sinnai CA
28. **B&B Martina Senorbì** — Barrali
   - slug: `b-b-martina-senorbi-barrali`
   - indirizzo: Via Brigata Sassari, 51, 09040 Senorbì CA
29. **B&B Ramses** — Barrali
   - slug: `b-b-ramses-barrali`
   - indirizzo: Via Stazione, 124/primo piano, 09068 Uta CA
30. **Domo San Leone** — Barrali
   - slug: `domo-san-leone-barrali`
   - indirizzo: Via S. Leone, 27, 09068 Uta CA
31. **Donnicalia B&B - Bed & Bliss** — Barrali
   - slug: `donnicalia-b-b-bed-bliss-barrali`
   - indirizzo: Viale Matteotti, 8A, 09038 Serramanna VS
32. **Garden Hotel** — Barrali
   - slug: `garden-hotel-barrali`
   - indirizzo: strada provinciale 33 km 2 Strada provinciale Nuraminis /Samatzai, 09024 Nuraminis CA
33. **Guesthouse Loru** — Barrali
   - slug: `guesthouse-loru-barrali`
   - indirizzo: Via Monserrato, 76, 09028 Sestu CA
34. **Hammam** — Barrali
   - slug: `hammam-barrali`
   - indirizzo: Via Giuseppe Atzeni, 25, 09040 Senorbì CA
35. **Hotel Palladium** — Barrali
   - slug: `hotel-palladium-barrali`
   - indirizzo: Viale Europa, 115, 09023 Monastir CA