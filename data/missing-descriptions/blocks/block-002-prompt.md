# Blocco 2/500 — 35 strutture senza descrizione IT

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

1. **Il sospiro** — Abriola
   - slug: `il-sospiro-abriola`
   - indirizzo: Contrada Policeta, 5, 85050 Satriano di Lucania PZ
2. **La Dolce Vita** — Abriola
   - slug: `la-dolce-vita-abriola`
   - indirizzo: Contrada Valloni, 85010 Abriola PZ
3. **La Fattoria Sotto il Cielo** — Abriola
   - slug: `la-fattoria-sotto-il-cielo-abriola`
   - indirizzo: Contrada Petrucco, 9A, 85010 Pignola PZ
4. **La Villa Resort.** — Abriola
   - slug: `la-villa-resort-abriola`
   - indirizzo: Via Europa, 10/A, 85010 Pignola PZ
5. **Locanda Arcadia** — Abriola
   - slug: `locanda-arcadia-abriola`
   - indirizzo: Via Forra, 1, 85055 Picerno PZ
6. **Open** — Abriola
   - slug: `open-abriola`
   - indirizzo: Viale Seminario Maggiore, 4, 85100 Potenza PZ
7. **Ostello Villafranca** — Abriola
   - slug: `ostello-villafranca-abriola`
   - indirizzo: Via Neviera, 8, 85010 Pignola PZ
8. **Parco Ricevimenti Hotel Pierfaone** — Abriola
   - slug: `parco-ricevimenti-hotel-pierfaone-abriola`
   - indirizzo: Contrada Pierfaone, 85010 Abriola PZ
9. **PIERFAONE HOTEL E SPA** — Abriola
   - slug: `pierfaone-hotel-e-spa-abriola`
   - indirizzo: Contrada Pierfaone, 85010 Abriola PZ
10. **Pietrapanna** — Abriola
   - slug: `pietrapanna-abriola`
   - indirizzo: Contrada Potentissima, snc, 85010 Calvello PZ
11. **Baglio Occhipinti** — Acate
   - slug: `baglio-occhipinti-acate`
   - indirizzo: C.da Fossa di Lupo, Strada Km 5, 4, 97019 Pedalino RG
12. **Cordial Hotel** — Acate
   - slug: `cordial-hotel-acate`
   - indirizzo: S.S. 115 Comiso Km. 1, 97013 Comiso RG
13. **Dimora di Dante** — Acate
   - slug: `dimora-di-dante-acate`
   - indirizzo: Contrada Serravalle, sn, 97012 Chiaramonte Gulfi RG
14. **El Homs Palace Hotel** — Acate
   - slug: `el-homs-palace-hotel-acate`
   - indirizzo: Via Generale Girlando, 49, 97013 Comiso RG
15. **GH Baraka Village** — Acate
   - slug: `gh-baraka-village-acate`
   - indirizzo: Via Fratelli di Dio, 97019 Scoglitti RG
16. **Grand Hotel Vittoria** — Acate
   - slug: `grand-hotel-vittoria-acate`
   - indirizzo: Vico III Carlo Pisacane, 53/B, 97019 Vittoria RG
17. **Home D&D** — Acate
   - slug: `home-d-d-acate`
   - indirizzo: SP11, 93015 Niscemi CL
18. **Hotel Europa** — Acate
   - slug: `hotel-europa-acate`
   - indirizzo: Via Generale Armando Diaz, 4/a, 97019 Vittoria RG
19. **Hotel Mida** — Acate
   - slug: `hotel-mida-acate`
   - indirizzo: Via delle Seppie, 4, 97019 Scoglitti RG
20. **Hotel Villa San Bartolo Resort** — Acate
   - slug: `hotel-villa-san-bartolo-resort-acate`
   - indirizzo: Contrada San Bartolo (presso Hotel Villa San Bartolo), 97019 Vittoria RG
21. **Iblea Hotel** — Acate
   - slug: `iblea-hotel-acate`
   - indirizzo: Contrada Coffa, snc, 97012 Chiaramonte Gulfi RG
22. **Palazzo Melfi Suite Hotel** — Acate
   - slug: `palazzo-melfi-suite-hotel-acate`
   - indirizzo: 4, Piazza Fonte Diana, 97013 Comiso RG
23. **Rocca** — Acate
   - slug: `rocca-acate`
   - indirizzo: SS115, 4, 97011 Acate RG
24. **Stella dei venti** — Acate
   - slug: `stella-dei-venti-acate`
   - indirizzo: Contrada Gaspanella, km 6, 8, 97019 Vittoria RG
25. **Terra del sole b&b a Vittoria** — Acate
   - slug: `terra-del-sole-b-b-a-vittoria-acate`
   - indirizzo: Via Bologna, 204, 97019 Vittoria RG
26. **TERRE IBLEE RESORT** — Acate
   - slug: `terre-iblee-resort-acate`
   - indirizzo: C/da sperlinga, 97012 Chiaramonte Gulfi RG
27. **Villa Orchidea** — Acate
   - slug: `villa-orchidea-acate`
   - indirizzo: Contrada Boscorotondo, SP5, 97013 Comiso RG
28. **Vittoria Colonna** — Acate
   - slug: `vittoria-colonna-acate`
   - indirizzo: Via Magenta, 419, 97019 Vittoria RG
29. **Yhomisus** — Acate
   - slug: `yhomisus-acate`
   - indirizzo: Via Papa Giovanni XXIII, 75, 97013 Comiso RG
30. **A Casa Nostra** — Accadia
   - slug: `a-casa-nostra-accadia`
   - indirizzo: Viale Antonino Ripandelli, 87, 71024 Candela FG
31. **Agriturismo Antica Masseria Lo Conte B&B, sala eventi** — Accadia
   - slug: `agriturismo-antica-masseria-lo-conte-b-b-sala-ev-accadia`
   - indirizzo: Via Torreamando, 99, 83031 Ariano Irpino AV
32. **Agriturismo Casale Cerere** — Accadia
   - slug: `agriturismo-casale-cerere-accadia`
   - indirizzo: Contrada Serritelli, 61, 83046 Lacedonia AV
33. **Agriturismo La fortezza** — Accadia
   - slug: `agriturismo-la-fortezza-accadia`
   - indirizzo: Contrada Orneta, 88, 83031 Orneta AV
34. **Azienda Agrituristica Petrilli** — Accadia
   - slug: `azienda-agrituristica-petrilli-accadia`
   - indirizzo: Via Scampata, 83040 Flumeri AV
35. **B&B Sant Arcangelo** — Accadia
   - slug: `b-b-sant-arcangelo-accadia`
   - indirizzo: Via Francesco Crispi, 6, 71028 Sant'Agata di Puglia FG