# Blocco 270/500 — 35 strutture senza descrizione IT

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

1. **La locanda di villa toscana** — Bibbona
   - slug: `la-locanda-di-villa-toscana-bibbona`
   - indirizzo: Via Vittorio Emanuele, 41, 57020 Bibbona LI
2. **Locanda Etrusca** — Bibbona
   - slug: `locanda-etrusca-bibbona`
   - indirizzo: Piazza della Vittoria, 57020 Bibbona LI
3. **Park Hotel Marinetta - Beach & Spa** — Bibbona
   - slug: `park-hotel-marinetta-beach-spa-bibbona`
   - indirizzo: Via dei Cavalleggeri Nord, 3, 57020 Marina di Bibbona LI
4. **Poggio Picchio** — Bibbona
   - slug: `poggio-picchio-bibbona`
   - indirizzo: frazione Bibbona, 30, 57020 Bibbona LI
5. **Punti Di Vista B&B Food & Wine Experience** — Bibbona
   - slug: `punti-di-vista-b-b-food-wine-experience-bibbona`
   - indirizzo: Piazza della Vittoria, 10, 57020 Bibbona LI
6. **Relais Sant'Elena | Relais di Charme, Vacanze Bibbona Toscana** — Bibbona
   - slug: `relais-sant-elena-relais-di-charme-vacanze-bibbo-bibbona`
   - indirizzo: Via Vicinale di Campo di Sasso, 57020 Bibbona LI
7. **Residence Ristorante Il Paradiso** — Bibbona
   - slug: `residence-ristorante-il-paradiso-bibbona`
   - indirizzo: Strada Provinciale del Poggetto, 55, 56040 Guardistallo PI
8. **Residenza d'Epoca CAVALIERE Romantic Rooms near BOLGHERI** — Bibbona
   - slug: `residenza-d-epoca-cavaliere-romantic-rooms-near-bibbona`
   - indirizzo: Via Vittorio Emanuele, 60, 57020 Bibbona LI
9. **Agriturismo Cascina San Nazario Remband - Bibiana** — Bibiana
   - slug: `agriturismo-cascina-san-nazario-remband-bibiana-bibiana`
   - indirizzo: Via della Libertà, 17, 10060 Bibiana TO
10. **Albergo Ristorante Sud America** — Bibiana
   - slug: `albergo-ristorante-sud-america-bibiana`
   - indirizzo: Piazza Statuto, 14, 12034 Paesana CN
11. **B&B Mombracco** — Bibiana
   - slug: `b-b-mombracco-bibiana`
   - indirizzo: Via dei Peano, 16, 12030 Envie CN
12. **Hotel la Colletta** — Bibiana
   - slug: `hotel-la-colletta-bibiana`
   - indirizzo: Borgata Colletta, 29, 12034 Paesana CN
13. **Hotel Palavas** — Bibiana
   - slug: `hotel-palavas-bibiana`
   - indirizzo: Borgata Garnier, 1, 10060 Villar Pellice TO
14. **Affittacamere Da Nonna Elisa** — Biccari
   - slug: `affittacamere-da-nonna-elisa-biccari`
   - indirizzo: Via Piazza Vecchia, 65, 71039 Roseto Valfortore FG
15. **Agriturismo Pirro** — Biccari
   - slug: `agriturismo-pirro-biccari`
   - indirizzo: C.da Cuparoni - SS 160, Lucera-Troia (incrocio per Faeto), 71029 Troia FG
16. **Albergo Miravalle** — Biccari
   - slug: `albergo-miravalle-biccari`
   - indirizzo: Contrada Ciampoli, 1, 71039 Roseto Valfortore FG
17. **B&B Agorà** — Biccari
   - slug: `b-b-agora-biccari`
   - indirizzo: Via Madonna delle Grazie, Piazza Giacomo Matteotti, 106, 71032 Biccari FG
18. **B&B Al Belvedere** — Biccari
   - slug: `b-b-al-belvedere-biccari`
   - indirizzo: Via Giuseppe Verdi, 54, 71030 Volturino FG
19. **B&B Casa Cavalli** — Biccari
   - slug: `b-b-casa-cavalli-biccari`
   - indirizzo: Piazza del Duomo, 5, 71036 Lucera FG
20. **BED & BREAKFAST PALAZZO DEL CONTESTABILE - TROIA - FOGGIA - PUGLIA** — Biccari
   - slug: `bed-breakfast-palazzo-del-contestabile-troia-fog-biccari`
   - indirizzo: Corso Umberto I, 137, 71029 Troia FG
21. **Borgo Vinceri** — Biccari
   - slug: `borgo-vinceri-biccari`
   - indirizzo: Sentiero della Fortezza Svevo-Angioina, 71036 Lucera FG
22. **Bubble Room sul Tetto della Puglia** — Biccari
   - slug: `bubble-room-sul-tetto-della-puglia-biccari`
   - indirizzo: Lago Pescara, 71032 Biccari FG
23. **Relais in Contrada** — Biccari
   - slug: `relais-in-contrada-biccari`
   - indirizzo: Str. Vicinale Perazzo, 5, 71036 Lucera FG
24. **Suite del Lago_LuxuryRoom** — Biccari
   - slug: `suite-del-lago-luxuryroom-biccari`
   - indirizzo: Via Salita Annunziata, 38, 71032 Biccari FG
25. **Agriturismo Al Buttasella** — Bicinicco
   - slug: `agriturismo-al-buttasella-bicinicco`
   - indirizzo: Via Chiasottis, 8, 33050 Mortegliano UD
26. **Albergo Casa Orter** — Bicinicco
   - slug: `albergo-casa-orter-bicinicco`
   - indirizzo: Via della Stazione, 13, 33050 Risano UD
27. **Alle Robinie bed & breakfast** — Bicinicco
   - slug: `alle-robinie-bed-breakfast-bicinicco`
   - indirizzo: Via Orsaria, 14, 33040 Pradamano UD
28. **B&B casa di Giò** — Bicinicco
   - slug: `b-b-casa-di-gio-bicinicco`
   - indirizzo: Via Bolzano, 10, 33048 San Giovanni al Natisone UD
29. **B&B Corte Alfier di Alfier Andrea & Francesco** — Bicinicco
   - slug: `b-b-corte-alfier-di-alfier-andrea-francesco-bicinicco`
   - indirizzo: Frazione di, Via Pozzuolo, 2, 33050 Lavariano UD
30. **Standard Hotel Udine** — Bicinicco
   - slug: `standard-hotel-udine-bicinicco`
   - indirizzo: Via Pier Paolo Pasolini, 4, 33040 Pradamano UD
31. **Villa di Tissano** — Bicinicco
   - slug: `villa-di-tissano-bicinicco`
   - indirizzo: Piazza Caimo, 4, 33050 Santa Maria la Longa UD
32. **BED & BREAKFAST SUL PONTE - GRAVINA IN PUGLIA** — Bidon�
   - slug: `bed-breakfast-sul-ponte-gravina-in-puglia-bidon`
   - indirizzo: Via Fontana la Stella, 59, 70024 Gravina in Puglia BA
33. **Agorà Palace Hotel** — Biella
   - slug: `agora-palace-hotel-biella`
   - indirizzo: Via Alfonso Lamarmora, 13A, 13900 Biella BI
34. **Albergo Cala Luna** — Biella
   - slug: `albergo-cala-luna-biella`
   - indirizzo: Via Antonio Gramsci, 145, 13894 Gaglianico BI
35. **Augustus hotel** — Biella
   - slug: `augustus-hotel-biella`
   - indirizzo: Via Orfanotrofio, 6, 13900 Biella BI