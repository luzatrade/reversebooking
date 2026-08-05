# Blocco 443/500 — 35 strutture senza descrizione IT

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

1. **Cora Hotels Leon d'Oro Castell'Arquato** — Carpaneto Piacentino
   - slug: `cora-hotels-leon-d-oro-castell-arquato-carpaneto-piacentino`
   - indirizzo: Piazza Europa, 6, 29014 Castell'Arquato PC
2. **Hotel "La Maison de Vi"- country house et de charme** — Carpaneto Piacentino
   - slug: `hotel-la-maison-de-vi-country-house-et-de-charme-carpaneto-piacentino`
   - indirizzo: Frazione Cimafava, 67, 29013 Carpaneto Piacentino PC
3. **Bed and Breakfast Agrifoglio** — Carpanzano
   - slug: `bed-and-breakfast-agrifoglio-carpanzano`
   - indirizzo: Via Porticelle, 19, 87057 Scigliano CS
4. **B&B Il Bughetto** — Carpegna
   - slug: `b-b-il-bughetto-carpegna`
   - indirizzo: Via Poggiale, 16, 61021 Carpegna PU
5. **B&B IL POGGIO** — Carpegna
   - slug: `b-b-il-poggio-carpegna`
   - indirizzo: Ca'moneta 17, 47868 Montecopiolo RN
6. **B&B Molino Del Gobbo** — Carpegna
   - slug: `b-b-molino-del-gobbo-carpegna`
   - indirizzo: Località Campomarzio, 1, 47866 Sant'Agata Feltria RN
7. **Bed and Breakfast Dal Tenente - Caffè del Corso** — Carpegna
   - slug: `bed-and-breakfast-dal-tenente-caffe-del-corso-carpegna`
   - indirizzo: Corso Giuseppe Garibaldi, 22, 61048 Sant'Angelo in Vado PU
8. **Carpegna Town Suites** — Carpegna
   - slug: `carpegna-town-suites-carpegna`
   - indirizzo: Via Giacomo Leopardi, 2, 61021 Carpegna PU
9. **Falcon Hotel** — Carpegna
   - slug: `falcon-hotel-carpegna`
   - indirizzo: Via S. Girolamo, 30, 47866 Sant'Agata Feltria RN
10. **Hotel il Duca del Montefeltro** — Carpegna
   - slug: `hotel-il-duca-del-montefeltro-carpegna`
   - indirizzo: Via Moro Aldo, 12, 47864 Pennabilli RN
11. **Hotel Magda** — Carpegna
   - slug: `hotel-magda-carpegna`
   - indirizzo: Via Aurelio Saffi, 55, 47863 Novafeltria RN
12. **La Cegna** — Carpegna
   - slug: `la-cegna-carpegna`
   - indirizzo: Via Ca' Fantino, 61010 Montemaggio PU
13. **La Locanda dell'Ambra** — Carpegna
   - slug: `la-locanda-dell-ambra-carpegna`
   - indirizzo: Via Garibaldi, 28, 47867 Talamello RN
14. **Locanda al Coppo** — Carpegna
   - slug: `locanda-al-coppo-carpegna`
   - indirizzo: Via per S. Marino, 1, 61010 Monte Grimano Terme PU
15. **Podere Fabbrani** — Carpegna
   - slug: `podere-fabbrani-carpegna`
   - indirizzo: Rovine di Cavedale, 47864 Pennabilli RN
16. **B&B rosa mistica** — Carpenedolo
   - slug: `b-b-rosa-mistica-carpenedolo`
   - indirizzo: Via Fornace, 34, 25018 Montichiari BS
17. **Casa nel Vicolo** — Carpenedolo
   - slug: `casa-nel-vicolo-carpenedolo`
   - indirizzo: Vicolo Mercato, 6, 25018 Montichiari BS
18. **Hotel il Giardinetto** — Carpenedolo
   - slug: `hotel-il-giardinetto-carpenedolo`
   - indirizzo: Via Guglielmo Marconi, 39, 25015 Desenzano del Garda BS
19. **Hotel Nazionale** — Carpenedolo
   - slug: `hotel-nazionale-carpenedolo`
   - indirizzo: Via Guglielmo Marconi, 23, 25015 Desenzano del Garda BS
20. **Hotel Palazzo Novello** — Carpenedolo
   - slug: `hotel-palazzo-novello-carpenedolo`
   - indirizzo: Via Tito Speri, 19, 25018 Montichiari BS
21. **Agriturismo Montebi** — Carpeneto
   - slug: `agriturismo-montebi-carpeneto`
   - indirizzo: Cascina Montebi, 113, 15070 Trisobbio AL
22. **Albergo Vittoria Ovada, Hotel Ovada** — Carpeneto
   - slug: `albergo-vittoria-ovada-hotel-ovada-carpeneto`
   - indirizzo: Str. Voltri, 27, 15076 Ovada AL
23. **B&B Cantine Pietronero** — Carpeneto
   - slug: `b-b-cantine-pietronero-carpeneto`
   - indirizzo: Via Roma, 23, 15010 Orsara Bormida AL
24. **B&B Casa Dormiveglia** — Carpeneto
   - slug: `b-b-casa-dormiveglia-carpeneto`
   - indirizzo: Cascina Bartameloni, 40, 15010 Montaldo Bormida AL
25. **B&B Cascina Bartameloni** — Carpeneto
   - slug: `b-b-cascina-bartameloni-carpeneto`
   - indirizzo: Cascina Bartameloni, 45, 15010 Montaldo Bormida AL
26. **B&B Cascina Olmo** — Carpeneto
   - slug: `b-b-cascina-olmo-carpeneto`
   - indirizzo: Via della Costa, 32, 15071 Carpeneto AL
27. **B&B Cascina Rosa Camilla** — Carpeneto
   - slug: `b-b-cascina-rosa-camilla-carpeneto`
   - indirizzo: Str. Vicinale Orsecco, 450, 15071 Carpeneto AL
28. **B&B è chiuso definitivamente** — Carpeneto
   - slug: `b-b-e-chiuso-definitivamente-carpeneto`
   - indirizzo: Via Italia, 7, 15070 Trisobbio AL
29. **B&B Tre Querce** — Carpeneto
   - slug: `b-b-tre-querce-carpeneto`
   - indirizzo: regione caldana, 71, 15010 Montaldo Bormida AL
30. **Cascina Madonnina** — Carpeneto
   - slug: `cascina-madonnina-carpeneto`
   - indirizzo: Cascina Madonnina, 55, 15070 Trisobbio AL
31. **Guest House Il Borgo del Castello** — Carpeneto
   - slug: `guest-house-il-borgo-del-castello-carpeneto`
   - indirizzo: Via Amorina, 16, 15010 Cremolino AL
32. **Hotel Ristorante La Bruceta** — Carpeneto
   - slug: `hotel-ristorante-la-bruceta-carpeneto`
   - indirizzo: Via Bruceta, 2, 15010 Cremolino AL
33. **WineBikeHostel** — Carpeneto
   - slug: `winebikehostel-carpeneto`
   - indirizzo: Piazza Senatore Borgatta, 4, 15078 Rocca Grimalda AL
34. **Affittacamere Ventisettembre** — Carpi
   - slug: `affittacamere-ventisettembre-carpi`
   - indirizzo: Via XX Settembre, 23, 41012 Carpi MO
35. **Agriturismo Ca' Marsiglia** — Carpi
   - slug: `agriturismo-ca-marsiglia-carpi`
   - indirizzo: Via Provinciale Motta, 468 109, 41012 Carpi MO