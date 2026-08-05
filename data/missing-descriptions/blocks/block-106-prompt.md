# Blocco 106/500 — 35 strutture senza descrizione IT

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

1. **Sassdei Suite Hotel - Andalo** — Andalo
   - slug: `sassdei-suite-hotel-andalo-andalo`
   - indirizzo: Via Rindole, 4, 38010 Andalo TN
2. **B&B Al Carotin** — Andalo Valtellino
   - slug: `b-b-al-carotin-andalo-valtellino`
   - indirizzo: Via Superiore, 58, 23009 Andalo Valtellino SO
3. **Cà Elsa B&B** — Andalo Valtellino
   - slug: `ca-elsa-b-b-andalo-valtellino`
   - indirizzo: Via Spluga, 115, 23015 Nuova Olonio SO
4. **Hotel Berlinghera** — Andalo Valtellino
   - slug: `hotel-berlinghera-andalo-valtellino`
   - indirizzo: Via Dascio, 25, 22010 Dascio CO
5. **Hotel del Mera** — Andalo Valtellino
   - slug: `hotel-del-mera-andalo-valtellino`
   - indirizzo: Via Dascio, 11, 22010 Sorico CO
6. **Hotel Europa** — Andalo Valtellino
   - slug: `hotel-europa-andalo-valtellino`
   - indirizzo: Via Cesare Battisti, 4, 22010 Sorico CO
7. **Hotel Lago di Como** — Andalo Valtellino
   - slug: `hotel-lago-di-como-andalo-valtellino`
   - indirizzo: Via Legnone, 4, 23823 Colico LC
8. **Hotel Rezia Valtellina** — Andalo Valtellino
   - slug: `hotel-rezia-valtellina-andalo-valtellino`
   - indirizzo: Via Statale, 33, 23013 Cosio Valtellino SO
9. **Hotel Risi** — Andalo Valtellino
   - slug: `hotel-risi-andalo-valtellino`
   - indirizzo: Via Lungolario Polti, 1, 23823 Colico LC
10. **Hotel Ristorante Baraglia** — Andalo Valtellino
   - slug: `hotel-ristorante-baraglia-andalo-valtellino`
   - indirizzo: Via Bondo, 8, 23010 Mello SO
11. **Hotel Roma Colico** — Andalo Valtellino
   - slug: `hotel-roma-colico-andalo-valtellino`
   - indirizzo: Via Laghetto, 8, 23823 Colico LC
12. **Residence I Fiori** — Andalo Valtellino
   - slug: `residence-i-fiori-andalo-valtellino`
   - indirizzo: Via S. Giovanni Bosco, 40, 23010 Piantedo SO
13. **Residenza Conca Verde B&B** — Andalo Valtellino
   - slug: `residenza-conca-verde-b-b-andalo-valtellino`
   - indirizzo: Via Europa, 30, 23013 Cosio Valtellino SO
14. **Spluga Sosta & Hotel** — Andalo Valtellino
   - slug: `spluga-sosta-hotel-andalo-valtellino`
   - indirizzo: Via Spluga, 42, 23015 Dubino SO
15. **Agriturismo del Florario** — Andezeno
   - slug: `agriturismo-del-florario-andezeno`
   - indirizzo: Str. della Giardina, 10023 Chieri TO
16. **Agriturismo La Vijà** — Andezeno
   - slug: `agriturismo-la-vija-andezeno`
   - indirizzo: Str. Tetti Lusso, 8, 10023 Chieri TO
17. **Aston Hotel** — Andezeno
   - slug: `aston-hotel-andezeno`
   - indirizzo: Str. al Traforo di Pino, 23, 10025 Pino Torinese TO
18. **B&B MadamaDorè** — Andezeno
   - slug: `b-b-madamadore-andezeno`
   - indirizzo: C.so Vittorio Emanuele II, 78, 10020 Andezeno TO
19. **Castello di Montaldo - Hotel Spa Wedding Congress** — Andezeno
   - slug: `castello-di-montaldo-hotel-spa-wedding-congress-andezeno`
   - indirizzo: Piazza Superga, 1, 10020 Montaldo Torinese TO
20. **Cico e Mamasita** — Andezeno
   - slug: `cico-e-mamasita-andezeno`
   - indirizzo: Via Cavour, 41, 10020 Andezeno TO
21. **Hotel Cascina Speranza** — Andezeno
   - slug: `hotel-cascina-speranza-andezeno`
   - indirizzo: Via Alessandro Pertini, 25, 10020 Riva presso Chieri TO
22. **Hotel Glis** — Andezeno
   - slug: `hotel-glis-andezeno`
   - indirizzo: Corso Lombardia, 42, 10099 San Mauro Torinese TO
23. **Hotel La Maddalena** — Andezeno
   - slug: `hotel-la-maddalena-andezeno`
   - indirizzo: Via Beppe Fenoglio, 4, 10023 Chieri TO
24. **Hotel Panorama** — Andezeno
   - slug: `hotel-panorama-andezeno`
   - indirizzo: Via Alessandro Volta, 2, 10020 Cambiano TO
25. **Il Bricco B&B** — Andezeno
   - slug: `il-bricco-b-b-andezeno`
   - indirizzo: Bricco Ornesio, 10090 Sciolze TO
26. **Marconi Apartment** — Andezeno
   - slug: `marconi-apartment-andezeno`
   - indirizzo: Via Guglielmo Marconi, 9, 10023 Chieri TO
27. **PUNTO DI VISTA - Bed and Breakfast** — Andezeno
   - slug: `punto-di-vista-bed-and-breakfast-andezeno`
   - indirizzo: Str. Turriglie, 33, 10023 Chieri TO
28. **Rocca di Arignano** — Andezeno
   - slug: `rocca-di-arignano-andezeno`
   - indirizzo: Via Gino Lisa, 16, 10020 Arignano TO
29. **Rosatea B&B** — Andezeno
   - slug: `rosatea-b-b-andezeno`
   - indirizzo: Str. della Rosa, 53, 10023 Chieri TO
30. **Agriturismo Domus Serena** — Andora
   - slug: `agriturismo-domus-serena-andora`
   - indirizzo: 17051, Via Piangrande, 32, 17020 Andora SV
31. **Agriturismo Gli Aromi** — Andora
   - slug: `agriturismo-gli-aromi-andora`
   - indirizzo: Via Piangrande, 31, 17020 Pian Grande SV
32. **Agriturismo Il Glicine** — Andora
   - slug: `agriturismo-il-glicine-andora`
   - indirizzo: Via A. Divizia, 29, 17020 Andora SV
33. **Albergo Adriana** — Andora
   - slug: `albergo-adriana-andora`
   - indirizzo: Via Novara, 20, 17020 Laigueglia SV
34. **Albergo La Pineta** — Andora
   - slug: `albergo-la-pineta-andora`
   - indirizzo: Str. della Pineta, 10, 17020 Andora SV
35. **B&B Andoramare** — Andora
   - slug: `b-b-andoramare-andora`
   - indirizzo: Via Rattalino, 13, 17020 Marina di Andora SV