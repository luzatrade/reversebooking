# Blocco 173/500 — 35 strutture senza descrizione IT

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

1. **B&B Atrani Rooms** — Atrani
   - slug: `b-b-atrani-rooms-atrani`
   - indirizzo: V. dei Dogi, 15a, 84010 Atrani SA
2. **CristallPont: Amalfi.Day** — Atrani
   - slug: `cristallpont-amalfi-day-atrani`
   - indirizzo: V. Dragone, 2, 84010 Atrani SA
3. **Donna Giulia** — Atrani
   - slug: `donna-giulia-atrani`
   - indirizzo: Via Roberto Il Guiscardo, 47, 84011 Amalfi SA
4. **Eva Rooms** — Atrani
   - slug: `eva-rooms-atrani`
   - indirizzo: Via Gabriele di Benedetto, 3/Interno 3, 84010 Atrani SA
5. **Hotel "L'Argine fiorito"** — Atrani
   - slug: `hotel-l-argine-fiorito-atrani`
   - indirizzo: V. dei Dogi, 45, 84010 Atrani SA
6. **Hotel Amalfi** — Atrani
   - slug: `hotel-amalfi-atrani`
   - indirizzo: Via dei Pastai, 3, 84011 Amalfi SA
7. **Hotel Croce di Amalfi** — Atrani
   - slug: `hotel-croce-di-amalfi-atrani`
   - indirizzo: Salita S. Nicola dei Greci, 13/15, 84011 Amalfi SA
8. **Hotel Fontana** — Atrani
   - slug: `hotel-fontana-atrani`
   - indirizzo: Piazza Duomo, 7, 84011 Amalfi SA
9. **Hotel Le Fioriere** — Atrani
   - slug: `hotel-le-fioriere-atrani`
   - indirizzo: Via Gennaro Capriglione, 138, 84010 Praiano SA
10. **Hotel Luna Convento** — Atrani
   - slug: `hotel-luna-convento-atrani`
   - indirizzo: Via Pantaleone Comite, 33, 84011 Amalfi SA
11. **Hotel Palazzo Ferraioli** — Atrani
   - slug: `hotel-palazzo-ferraioli-atrani`
   - indirizzo: Via Supportico Marinella, 10, 84010 Atrani SA
12. **Hotel Raito Amalfi Coast** — Atrani
   - slug: `hotel-raito-amalfi-coast-atrani`
   - indirizzo: Via Nuova Raito, 9, 84019 Vietri sul Mare SA
13. **Hotel San Francesco** — Atrani
   - slug: `hotel-san-francesco-atrani`
   - indirizzo: Via Santa Tecla, 54, 84010 Maiori SA
14. **Hotel Santa Lucia** — Atrani
   - slug: `hotel-santa-lucia-atrani`
   - indirizzo: V Alfonso Gatto, 44, 84010 Minori SA
15. **La Scogliera S.A.S Di M.G Gambardella & C.** — Atrani
   - slug: `la-scogliera-s-a-s-di-m-g-gambardella-c-atrani`
   - indirizzo: Via Gabriele di Benedetto, 3, 84010 Atrani SA
16. **Me.Fra Di Criscuolo Sonia** — Atrani
   - slug: `me-fra-di-criscuolo-sonia-atrani`
   - indirizzo: V. Michele Buonocore, 12, 84010 Atrani SA
17. **Villa Lara Hotel** — Atrani
   - slug: `villa-lara-hotel-atrani`
   - indirizzo: Via delle Cartiere, 1, 84011 Amalfi SA
18. **A Casa di Costanza** — Atri
   - slug: `a-casa-di-costanza-atri`
   - indirizzo: Via Picena, 45, 64032 Atri TE
19. **A Casa di Gió** — Atri
   - slug: `a-casa-di-gio-atri`
   - indirizzo: Via Aldo Moro, 126, 64032 Atri TE
20. **Al Civico 2** — Atri
   - slug: `al-civico-2-atri`
   - indirizzo: Via Picena, Portico San Nicola, 2, 64032 Atri TE
21. **Arco di San Francesco** — Atri
   - slug: `arco-di-san-francesco-atri`
   - indirizzo: Via S. Francesco, 64032 Atri TE
22. **B&B & SPA Novantadieci Club** — Atri
   - slug: `b-b-spa-novantadieci-club-atri`
   - indirizzo: Contrada Colle Sciarra, snc, 64032 Atri TE
23. **B&B Al Centro Storico 21** — Atri
   - slug: `b-b-al-centro-storico-21-atri`
   - indirizzo: Via Cardinale Cicada, 21, 64032 Atri TE
24. **B&B ALEXANDER** — Atri
   - slug: `b-b-alexander-atri`
   - indirizzo: CIN IT067004C16FGBD5LV, Via Domenico Tinozzi, 14, 64032 Atri TE
25. **B&B La Canfora Cin. IT067004C1Z3UJBW9V** — Atri
   - slug: `b-b-la-canfora-cin-it067004c1z3ujbw9v-atri`
   - indirizzo: SP27a, 64032 Stracca TE
26. **B&B La Casetta di Atri** — Atri
   - slug: `b-b-la-casetta-di-atri-atri`
   - indirizzo: Vico Prepositi, 12, 64032 Atri TE
27. **B&B TIO PEPE 1** — Atri
   - slug: `b-b-tio-pepe-1-atri`
   - indirizzo: Via Grecia, 4, 64026 Roseto degli Abruzzi TE
28. **Bellavista bed and breakfast** — Atri
   - slug: `bellavista-bed-and-breakfast-atri`
   - indirizzo: Via Sant' Agostino, 22, 64032 Atri TE
29. **BioAgriturismo La Quercia** — Atri
   - slug: `bioagriturismo-la-quercia-atri`
   - indirizzo: Contrada Centorame, 4, 64032 Atri TE
30. **Casa in centro storico Atri - Locazione Turistica** — Atri
   - slug: `casa-in-centro-storico-atri-locazione-turistica-atri`
   - indirizzo: Vico Rane, 18, 64032 Atri TE
31. **Cornelia B&B** — Atri
   - slug: `cornelia-b-b-atri`
   - indirizzo: Corso Elio Adriano, 29, 64032 Atri TE
32. **Hotel Abruzzo** — Atri
   - slug: `hotel-abruzzo-atri`
   - indirizzo: Viale Abruzzo, 2, 64025 Pineto TE
33. **Hotel Du Parc** — Atri
   - slug: `hotel-du-parc-atri`
   - indirizzo: Viale Umberto I, 6, 64032 Atri TE
34. **Hotel Italia** — Atri
   - slug: `hotel-italia-atri`
   - indirizzo: Piazza Tito Marucci, 4, 64025 Pineto TE
35. **Hotel Parco degli Ulivi** — Atri
   - slug: `hotel-parco-degli-ulivi-atri`
   - indirizzo: SS16, 92, 64025 Pineto TE