# Blocco 105/500 — 35 strutture senza descrizione IT

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

1. **Metropolitan Suites Ancona** — Ancona
   - slug: `metropolitan-suites-ancona-ancona`
   - indirizzo: Corso Giuseppe Mazzini, 156b, 60121 Ancona AN
2. **SeePort Hotel** — Ancona
   - slug: `seeport-hotel-ancona`
   - indirizzo: Via Rupi di Via XXIX Settembre, 12, 60122 Ancona AN
3. **The City Hotel Ancona** — Ancona
   - slug: `the-city-hotel-ancona-ancona`
   - indirizzo: Via Giacomo Matteotti, 112/114, 60121 Ancona AN
4. **Touring Hotel Falconara** — Ancona
   - slug: `touring-hotel-falconara-ancona`
   - indirizzo: Via Spagnoli, 18, 60015 Falconara Marittima AN
5. **Azienda Agrituristica Biologica Il Querceto** — Andali
   - slug: `azienda-agrituristica-biologica-il-querceto-andali`
   - indirizzo: Località Cerzeto, 1, 88832 Santa Severina KR
6. **Azienda Agrituristica Le Puzelle** — Andali
   - slug: `azienda-agrituristica-le-puzelle-andali`
   - indirizzo: Località Puzelle, SS107bis, 88832 Santa Severina KR
7. **Bed & Breakfast La Villetta** — Andali
   - slug: `bed-breakfast-la-villetta-andali`
   - indirizzo: Via Ilaria Alpi, 1, 88070 Botricello CZ
8. **Casa Laino** — Andali
   - slug: `casa-laino-andali`
   - indirizzo: Andali, Piazza Raffaele, 88070 Belcastro CZ
9. **Cassiodoro Rooms Affittacamere** — Andali
   - slug: `cassiodoro-rooms-affittacamere-andali`
   - indirizzo: V.le Cassiodoro, 159/183, 88100 Catanzaro CZ
10. **Hotel 4 Lampioni** — Andali
   - slug: `hotel-4-lampioni-andali`
   - indirizzo: Via Nazionale, 91, 88051 Cropani CZ
11. **Hotel Onda Bleu** — Andali
   - slug: `hotel-onda-bleu-andali`
   - indirizzo: S.da Statale 106 Jonica, Km.212, 88070 Botricello CZ
12. **Hotel Ristorante L'Orizzonte** — Andali
   - slug: `hotel-ristorante-l-orizzonte-andali`
   - indirizzo: Contrada Campolongo, 88841 Le Castella KR
13. **La collina dolce** — Andali
   - slug: `la-collina-dolce-andali`
   - indirizzo: Strada Statale 180, 88051 Cropani CZ
14. **Sandhotel via De Gasperi Botricello** — Andali
   - slug: `sandhotel-via-de-gasperi-botricello-andali`
   - indirizzo: Via De Gasperi, 88070 Botricello CZ
15. **VOI Floriana Resort** — Andali
   - slug: `voi-floriana-resort-andali`
   - indirizzo: Via del Mare, 8, 88050 Simeri Crichi CZ
16. **Zaro Suites Bed & Breakfast** — Andali
   - slug: `zaro-suites-bed-breakfast-andali`
   - indirizzo: Via della Resistenza, 10, 88100 Catanzaro CZ
17. **ADLER MERYEM wellness hotel** — Andalo
   - slug: `adler-meryem-wellness-hotel-andalo`
   - indirizzo: Piazza Centrale, 2, 38010 Andalo TN
18. **Alphotel Milano Andalo** — Andalo
   - slug: `alphotel-milano-andalo-andalo`
   - indirizzo: Via Dossi, 8, 38010 Andalo TN
19. **Alpino Baby Family Hotel** — Andalo
   - slug: `alpino-baby-family-hotel-andalo`
   - indirizzo: Via Priori, 17, 38010 Andalo TN
20. **Appartamenti - Residence Cima Tosa - Andalo** — Andalo
   - slug: `appartamenti-residence-cima-tosa-andalo-andalo`
   - indirizzo: Via S. Rocco, 8, 38010 Andalo TN
21. **Astoria Comfort Hotel Andalo** — Andalo
   - slug: `astoria-comfort-hotel-andalo-andalo`
   - indirizzo: Via Crosare, 7, 38010 Andalo TN
22. **Dolomiti Hotel Olimpia** — Andalo
   - slug: `dolomiti-hotel-olimpia-andalo`
   - indirizzo: Via Paganella, 19, 38010 Andalo TN
23. **Garden Wellness Hotel - Andalo Trentino** — Andalo
   - slug: `garden-wellness-hotel-andalo-trentino-andalo`
   - indirizzo: Viale Trento, 19, 38010 Andalo TN
24. **Grand Hotel Piz Galin** — Andalo
   - slug: `grand-hotel-piz-galin-andalo`
   - indirizzo: Via Dossi, 1, 38010 Andalo TN
25. **Hotel Al Plan** — Andalo
   - slug: `hotel-al-plan-andalo`
   - indirizzo: Viale Trento, 5, 38010 Andalo TN
26. **Hotel Andalo** — Andalo
   - slug: `hotel-andalo-andalo`
   - indirizzo: Piazzale Paganella, 7, 38010 Andalo TN
27. **Hotel Dal Bon** — Andalo
   - slug: `hotel-dal-bon-andalo`
   - indirizzo: Via Dossi, 4, 38010 Andalo TN
28. **Hotel Dolce Avita** — Andalo
   - slug: `hotel-dolce-avita-andalo`
   - indirizzo: Via del Moro, 1, 38010 Andalo TN
29. **Hotel Eden Andalo - Mountain Lifestyle** — Andalo
   - slug: `hotel-eden-andalo-mountain-lifestyle-andalo`
   - indirizzo: Via Paganella, 25, 38010 Andalo TN
30. **Hotel Garni La Roccia** — Andalo
   - slug: `hotel-garni-la-roccia-andalo`
   - indirizzo: Via Ponte Lambin, 38010 Andalo TN
31. **Hotel Ghezzi** — Andalo
   - slug: `hotel-ghezzi-andalo`
   - indirizzo: Viale Trento, 12, 38010 Andalo TN
32. **Hotel K2** — Andalo
   - slug: `hotel-k2-andalo`
   - indirizzo: Via Rindole, 2, 38010 Andalo TN
33. **Hotel Negritella** — Andalo
   - slug: `hotel-negritella-andalo`
   - indirizzo: Via Paganella, 32, 38010 Andalo TN
34. **Hotel Nordik** — Andalo
   - slug: `hotel-nordik-andalo`
   - indirizzo: Via Paganella, 11, 38010 Andalo TN
35. **Hotel Piancastello - Andalo** — Andalo
   - slug: `hotel-piancastello-andalo-andalo`
   - indirizzo: Via Strigole, 6, 38010 Andalo TN