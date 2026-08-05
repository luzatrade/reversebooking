# Blocco 291/500 — 35 strutture senza descrizione IT

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

1. **B & B La Grotta delle Fate** — Bonnanaro
   - slug: `b-b-la-grotta-delle-fate-bonnanaro`
   - indirizzo: SP3, 07045 Ossi SS
2. **B&B Attico25** — Bonnanaro
   - slug: `b-b-attico25-bonnanaro`
   - indirizzo: Viale Italia, 25, 07100 Sassari SS
3. **B&B Monte Arana di Fernanda Puggioni** — Bonnanaro
   - slug: `b-b-monte-arana-di-fernanda-puggioni-bonnanaro`
   - indirizzo: Via Monte Arana, 16, 07043 Bonnanaro SS
4. **Azienda Agricola Serranello** — Bono
   - slug: `azienda-agricola-serranello-bono`
   - indirizzo: Via Cesare Battisti, 26A, 07011 Bono SS
5. **Carru de Ammentos** — Bono
   - slug: `carru-de-ammentos-bono`
   - indirizzo: Via Roma, 24, 07014 Ozieri SS
6. **Le Ortensie** — Bono
   - slug: `le-ortensie-bono`
   - indirizzo: Via Giosuè Carducci, 17, 07011 Bono SS
7. **Arcu de Chelu B&B** — Bonorva
   - slug: `arcu-de-chelu-b-b-bonorva`
   - indirizzo: Via Roma, 42, 09090 Modolo OR
8. **B&B Fiori di Fiori Andreina** — Bonorva
   - slug: `b-b-fiori-di-fiori-andreina-bonorva`
   - indirizzo: Via Giacomo Matteotti, 14, 07012 Bonorva SS
9. **B&B SAS Coltes** — Bonorva
   - slug: `b-b-sas-coltes-bonorva`
   - indirizzo: Via Leopardi, 8, 07012 Bonorva SS
10. **Badde Amena - Affittacamere (no colazione)** — Bonorva
   - slug: `badde-amena-affittacamere-no-colazione-bonorva`
   - indirizzo: Via S. Pancrazio, 24, 09090 Suni OR
11. **Civico 9 Affittacamere** — Bonorva
   - slug: `civico-9-affittacamere-bonorva`
   - indirizzo: Corso Vittorio Emanuele II, 9, 07012 Bonorva SS
12. **S'istella Affittacamere** — Bonorva
   - slug: `s-istella-affittacamere-bonorva`
   - indirizzo: Via Nazionale, 56, 09090 Tinnura OR
13. **SA Domo Tua** — Bonorva
   - slug: `sa-domo-tua-bonorva`
   - indirizzo: Via Roma, 77, 07012 Bonorva SS
14. **Agriturismo Da Davide** — Bonvicino
   - slug: `agriturismo-da-davide-bonvicino`
   - indirizzo: Borgata Curine, Località Sotto, 9, 12060 Somano CN
15. **Agriturismo La Pieve** — Bonvicino
   - slug: `agriturismo-la-pieve-bonvicino`
   - indirizzo: Via Torino, 353, 12063 Dogliani CN
16. **B & B Montisclari Monchiero Langhe** — Bonvicino
   - slug: `b-b-montisclari-monchiero-langhe-bonvicino`
   - indirizzo: Località Borgonuovo B, 101, 12060 Monchiero CN
17. **B&B Abbadia** — Bonvicino
   - slug: `b-b-abbadia-bonvicino`
   - indirizzo: Via G. Galliano, 7, 12077 Monesiglio CN
18. **Casa Baricalino Cantina** — Bonvicino
   - slug: `casa-baricalino-cantina-bonvicino`
   - indirizzo: Località Baricalino, 7, 12060 Novello CN
19. **Cascina Stralla** — Bonvicino
   - slug: `cascina-stralla-bonvicino`
   - indirizzo: Località Piancerreto, 12060 Farigliano CN
20. **Cascina Zan** — Bonvicino
   - slug: `cascina-zan-bonvicino`
   - indirizzo: Loc, Località Viora, 26, 12070 Paroldo CN
21. **I Muri - Piemonte** — Bonvicino
   - slug: `i-muri-piemonte-bonvicino`
   - indirizzo: Via Muri, 2, 12060 Bonvicino CN
22. **Il Sartù** — Bonvicino
   - slug: `il-sartu-bonvicino`
   - indirizzo: Frazione Rossi, 43, 12060 Cuneo CN
23. **La casa di Talin** — Bonvicino
   - slug: `la-casa-di-talin-bonvicino`
   - indirizzo: località baraccone, 4, 12050 Serravalle Langhe CN
24. **La Corte di San Rocco** — Bonvicino
   - slug: `la-corte-di-san-rocco-bonvicino`
   - indirizzo: Via Roma, 88, 12060 Murazzano CN
25. **Myricae** — Bonvicino
   - slug: `myricae-bonvicino`
   - indirizzo: Fraz Viaiano, 1, 12060 Farigliano CN
26. **Il Boscaiolo è un accogliente B&B vicino L'Aquila, situato a Sassa Scalo a pochi minuti dal centro.** — Borbona
   - slug: `il-boscaiolo-e-un-accogliente-b-b-vicino-l-aquil-borbona`
   - indirizzo: Via della Scuola, 5, 67100 Sassa Scalo AQ
27. **IL QUERCETO DELLE MARINE** — Borbona
   - slug: `il-querceto-delle-marine-borbona`
   - indirizzo: Via Martin Luther King, 67100 L'Aquila AQ
28. **Leoness Affittacamere** — Borbona
   - slug: `leoness-affittacamere-borbona`
   - indirizzo: Viale Francesco Crispi, 20, 02016 Leonessa RI
29. **Room & Breakfast Oasi del Vetoio** — Borbona
   - slug: `room-breakfast-oasi-del-vetoio-borbona`
   - indirizzo: Str. Lago di Vetoio, 67100 L'Aquila AQ
30. **San Francesco Suite** — Borbona
   - slug: `san-francesco-suite-borbona`
   - indirizzo: Via Vittorio Emanuele, 11, 02018 Poggio Bustone RI
31. **Sweet Home** — Borbona
   - slug: `sweet-home-borbona`
   - indirizzo: Via Amiternum, n. 32, 67100 L'Aquila AQ
32. **Al Capriolo - Locanda Ristorante Chalet** — Borca di Cadore
   - slug: `al-capriolo-locanda-ristorante-chalet-borca-di-cadore`
   - indirizzo: Via Nazionale, 108, 32040 Vodo di Cadore BL
33. **Albergo Antelao** — Borca di Cadore
   - slug: `albergo-antelao-borca-di-cadore`
   - indirizzo: Via Costa, 3, 32046 San Vito di Cadore BL
34. **Albergo Edelweiss** — Borca di Cadore
   - slug: `albergo-edelweiss-borca-di-cadore`
   - indirizzo: Via Mareson, 32012 Mareson-Pecol BL
35. **Albergo San Leo** — Borca di Cadore
   - slug: `albergo-san-leo-borca-di-cadore`
   - indirizzo: Via la Vares, 39, 32040 Borca di Cadore BL