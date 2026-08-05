# Blocco 260/500 — 35 strutture senza descrizione IT

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

1. **Tenuta Orsanese** — Bernalda
   - slug: `tenuta-orsanese-bernalda`
   - indirizzo: Contrada Stornara, 74013 Marina di Ginosa TA
2. **Albergo Brioschi** — Bernareggio
   - slug: `albergo-brioschi-bernareggio`
   - indirizzo: Via G. Matteotti, 20, 20040 Cambiago MI
3. **Residenza Alla Stazione Di Claudia Sas** — Bernareggio
   - slug: `residenza-alla-stazione-di-claudia-sas-bernareggio`
   - indirizzo: Via Roma, 27, 20866 Carnate MB
4. **"La Terrazza sul Naviglio" B&B** — Bernate Ticino
   - slug: `la-terrazza-sul-naviglio-b-b-bernate-ticino`
   - indirizzo: Via Umberto I, 14, 20010 Bernate Ticino MI
5. **Agriturismo - Altana del Motto Rosso** — Bernate Ticino
   - slug: `agriturismo-altana-del-motto-rosso-bernate-ticino`
   - indirizzo: Loc. Motto Rosso, 8, 28013 Gattico-Veruno NO
6. **Agriturismo Cascina Conta** — Bernate Ticino
   - slug: `agriturismo-cascina-conta-bernate-ticino`
   - indirizzo: Str. Preloreto, 20013 Magenta MI
7. **Agriturismo Cascina Resta** — Bernate Ticino
   - slug: `agriturismo-cascina-resta-bernate-ticino`
   - indirizzo: Cascina Resta, 1, 20010 Vittuone MI
8. **Agriturismo Cascina Rosio** — Bernate Ticino
   - slug: `agriturismo-cascina-rosio-bernate-ticino`
   - indirizzo: Agriturismo Cascina Rosio, 20080 Albairate MI
9. **Agriturismo Fattoria Pasqué** — Bernate Ticino
   - slug: `agriturismo-fattoria-pasque-bernate-ticino`
   - indirizzo: Via I Maggio, 11, 21020 Casale Litta VA
10. **Agriturismo la galizia** — Bernate Ticino
   - slug: `agriturismo-la-galizia-bernate-ticino`
   - indirizzo: Cascina Galizia Accesso dalla SP. 127 Km.2+0.250, 20012 Cuggiono MI
11. **Agriturismo Rosaspina** — Bernate Ticino
   - slug: `agriturismo-rosaspina-bernate-ticino`
   - indirizzo: Via Località Airoldi, 1, 20013 Magenta MI
12. **Agriturismo&Scuderia Fano's Farm** — Bernate Ticino
   - slug: `agriturismo-scuderia-fano-s-farm-bernate-ticino`
   - indirizzo: Via Piana, 90, 28019 Suno NO
13. **B&B Suite Manzoni** — Bernate Ticino
   - slug: `b-b-suite-manzoni-bernate-ticino`
   - indirizzo: Via A. Manzoni, 2, 20010 Boffalora Sopra Ticino MI
14. **B&B Via Roma** — Bernate Ticino
   - slug: `b-b-via-roma-bernate-ticino`
   - indirizzo: Via Roma, 34, 20010 Bernate Ticino MI
15. **Capuccina Agriturismo** — Bernate Ticino
   - slug: `capuccina-agriturismo-bernate-ticino`
   - indirizzo: Str. Capuccina, 7, 28060 Cureggio NO
16. **Cascina Caremma** — Bernate Ticino
   - slug: `cascina-caremma-bernate-ticino`
   - indirizzo: Via Cascina Caremma, 2, 20080 Besate MI
17. **Cascina Regina** — Bernate Ticino
   - slug: `cascina-regina-bernate-ticino`
   - indirizzo: Str. Valle, 36, 20013 Magenta MI
18. **La Barcella** — Bernate Ticino
   - slug: `la-barcella-bernate-ticino`
   - indirizzo: Cascina Barcella, 20087 Robecco Sul Naviglio MI
19. **Molino Santa Marta** — Bernate Ticino
   - slug: `molino-santa-marta-bernate-ticino`
   - indirizzo: Via della Valle, snc, 20087 Casterno MI
20. **Tenuta Bramasole** — Bernate Ticino
   - slug: `tenuta-bramasole-bernate-ticino`
   - indirizzo: Viale Lombardia, 71, 20001 Inveruno MI
21. **Az. Agr. Lu Garun Rus Di Tallone Mara** — Bernezzo
   - slug: `az-agr-lu-garun-rus-di-tallone-mara-bernezzo`
   - indirizzo: Via Provinciale, 4, 12010 Andonno CN
22. **B&B Antica Fontana** — Bernezzo
   - slug: `b-b-antica-fontana-bernezzo`
   - indirizzo: Piazzetta Monsignor Giorgis, 3, 12010 Bernezzo CN
23. **B&B Il Rosso e Il Blu** — Bernezzo
   - slug: `b-b-il-rosso-e-il-blu-bernezzo`
   - indirizzo: Corso Antonio Gramsci, 26, 12100 Cuneo CN
24. **B&B Rubino** — Bernezzo
   - slug: `b-b-rubino-bernezzo`
   - indirizzo: Via Panin, 18d, 12100 Cervasca CN
25. **Bed and breakfast Ma.Gi.A** — Bernezzo
   - slug: `bed-and-breakfast-ma-gi-a-bernezzo`
   - indirizzo: Via Cristoforo Colombo, 20 A/Primo piano, 12010 San Rocco CN
26. **Ca’ Mea room wellness food** — Bernezzo
   - slug: `ca-mea-room-wellness-food-bernezzo`
   - indirizzo: Via Mistral, 34, 12020 Saretto CN
27. **Clarín Rooms** — Bernezzo
   - slug: `clarin-rooms-bernezzo`
   - indirizzo: Via Mellana, 5, 12100 Cuneo CN
28. **Hotel Ristorante Da Politano** — Bernezzo
   - slug: `hotel-ristorante-da-politano-bernezzo`
   - indirizzo: Via Santuario, 125, 12012 Boves CN
29. **La Cà ët Mec C.I.N. IT004185C17YCH** — Bernezzo
   - slug: `la-ca-et-mec-c-i-n-it004185c17ych-bernezzo`
   - indirizzo: Str. Santa Margherita, 14, 12017 Robilante CN
30. **La Locanda del Bistrot dei Vinai** — Bernezzo
   - slug: `la-locanda-del-bistrot-dei-vinai-bernezzo`
   - indirizzo: Via Vittorio Amedeo Secondo, 11, 12100 Cuneo CN
31. **Locanda dei Gelsi** — Bernezzo
   - slug: `locanda-dei-gelsi-bernezzo`
   - indirizzo: Via della Resistenza, 22, 12020 Villar San Costanzo CN
32. **Senza Fretta Osteria con Camere** — Bernezzo
   - slug: `senza-fretta-osteria-con-camere-bernezzo`
   - indirizzo: Via Dronero, 3bis, 12100 Cuneo CN
33. **Stare Bene B&B** — Bernezzo
   - slug: `stare-bene-b-b-bernezzo`
   - indirizzo: Via Alpi, 24, 12010 Bernezzo CN
34. **Agricola - Casa, Cucina, Bottega** — Bertinoro
   - slug: `agricola-casa-cucina-bottega-bertinoro`
   - indirizzo: Via Cesuola, 901, 47521 Cesena FC
35. **Agriturismo 7 Colonne** — Bertinoro
   - slug: `agriturismo-7-colonne-bertinoro`
   - indirizzo: Via Cantalupo, 47032 Bertinoro FC