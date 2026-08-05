# Blocco 33/500 — 35 strutture senza descrizione IT

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

1. **Camping Lago Azzurro** — Agrate Conturbia
   - slug: `camping-lago-azzurro-agrate-conturbia`
   - indirizzo: Via Enrico Fermi, 2, 28040 Dormelletto NO
2. **Casa Violetta B&B** — Agrate Conturbia
   - slug: `casa-violetta-b-b-agrate-conturbia`
   - indirizzo: Via Roma, 60 b, 28010 Agrate Conturbia NO
3. **CRYSTAL b&b** — Agrate Conturbia
   - slug: `crystal-b-b-agrate-conturbia`
   - indirizzo: Via Monte Bianco, 1A, 28040 Dormelletto NO
4. **Emotional Grand Motel** — Agrate Conturbia
   - slug: `emotional-grand-motel-agrate-conturbia`
   - indirizzo: Via della Fontana, 41, 28010 Fontaneto d'Agogna NO
5. **Golf Hotel Castelconturbia** — Agrate Conturbia
   - slug: `golf-hotel-castelconturbia-agrate-conturbia`
   - indirizzo: Via Castelconturbia, 10, 28010 Localita' Bindellina NO
6. **Hotel Blue Relais Maggiore** — Agrate Conturbia
   - slug: `hotel-blue-relais-maggiore-agrate-conturbia`
   - indirizzo: Via Sempione, 182, 28053 Castelletto sopra Ticino NO
7. **Hotel Italia Dormelletto** — Agrate Conturbia
   - slug: `hotel-italia-dormelletto-agrate-conturbia`
   - indirizzo: Corso Cavour, 170, 28040 Dormelletto NO
8. **Hotel Le Palme** — Agrate Conturbia
   - slug: `hotel-le-palme-agrate-conturbia`
   - indirizzo: Corso Cavour, 130, 28040 Dormelletto NO
9. **Hotel Ramoverde** — Agrate Conturbia
   - slug: `hotel-ramoverde-agrate-conturbia`
   - indirizzo: Via G. Matteotti, 1, 28021 Borgomanero NO
10. **Hotel Residence Isotta** — Agrate Conturbia
   - slug: `hotel-residence-isotta-agrate-conturbia`
   - indirizzo: Via Pozzarino, 1, 28013 Veruno NO
11. **Hotel Ristorante La Perla** — Agrate Conturbia
   - slug: `hotel-ristorante-la-perla-agrate-conturbia`
   - indirizzo: Via Sottomonte, 4, 28040 Varallo Pombia NO
12. **Il Salice B&B** — Agrate Conturbia
   - slug: `il-salice-b-b-agrate-conturbia`
   - indirizzo: Via delle Venezie, 3, 28013 Veruno NO
13. **Les Arcs** — Agrate Conturbia
   - slug: `les-arcs-agrate-conturbia`
   - indirizzo: Via Motto, 11, 28010 Conturbia NO
14. **Lido Verbano Camping Village** — Agrate Conturbia
   - slug: `lido-verbano-camping-village-agrate-conturbia`
   - indirizzo: Via Sempione, 100, 28053 Castelletto sopra Ticino NO
15. **Ritratto Sul Lago Bed & Breakfast** — Agrate Conturbia
   - slug: `ritratto-sul-lago-bed-breakfast-agrate-conturbia`
   - indirizzo: Via Leonardo da Vinci, 15, 28040 Dormelletto NO
16. **SIRIO Hotel** — Agrate Conturbia
   - slug: `sirio-hotel-agrate-conturbia`
   - indirizzo: Corso Cavour, 188, 28040 Dormelletto NO
17. **Agrigento Bed** — Agrigento
   - slug: `agrigento-bed-agrigento`
   - indirizzo: Via Atenea, 321, 92100 Agrigento AG, Italia
18. **Alcova Camere** — Agrigento
   - slug: `alcova-camere-agrigento`
   - indirizzo: Via San Francesco d'Assisi, 45, 92100 Agrigento AG, Italia
19. **Alloggio Della Posta Vecchia** — Agrigento
   - slug: `alloggio-della-posta-vecchia-agrigento`
   - indirizzo: Via Giambertoni, 19, 92100 Agrigento AG, Italia
20. **B&B Agrigento GioeniVentidue** — Agrigento
   - slug: `b-b-agrigento-gioeniventidue-agrigento`
   - indirizzo: Via Gioeni, 22, 92100 Agrigento AG, Italia
21. **B&B Al Dammuso** — Agrigento
   - slug: `b-b-al-dammuso-agrigento`
   - indirizzo: Cortile Coniglio, 5, 92100 Agrigento AG, Italia
22. **B&B DIMORA DI GIRGENTI** — Agrigento
   - slug: `b-b-dimora-di-girgenti-agrigento`
   - indirizzo: Via Vela, 6, 92100 Agrigento AG, Italia
23. **B&B IL CONTE** — Agrigento
   - slug: `b-b-il-conte-agrigento`
   - indirizzo: Via Atenea, 45, 92100 Agrigento AG, Italia
24. **B&B La casa di nonna** — Agrigento
   - slug: `b-b-la-casa-di-nonna-agrigento`
   - indirizzo: Via Esseneto, 28, 92100 Agrigento AG, Italia
25. **B&B LA CITTA' DEGLI DEI** — Agrigento
   - slug: `b-b-la-citta-degli-dei-agrigento`
   - indirizzo: Via Gioeni, 150, 92100 Agrigento AG, Italia
26. **B&B VENTODITRAMONTANA** — Agrigento
   - slug: `b-b-ventoditramontana-agrigento`
   - indirizzo: Via Acrone, 85, 92100 Agrigento AG, Italia
27. **Bed and Breakfast Le Casette di Lù CIN IT084001C1DOWHC9PB** — Agrigento
   - slug: `bed-and-breakfast-le-casette-di-lu-cin-it084001c-agrigento`
   - indirizzo: Via Neve, 12, 92100 Agrigento AG, Italia
28. **Bed and Breakfast MieleZenzero** — Agrigento
   - slug: `bed-and-breakfast-mielezenzero-agrigento`
   - indirizzo: Via Carcino, 22, 92100 Agrigento AG, Italia
29. **Casa Vella Aprtament** — Agrigento
   - slug: `casa-vella-aprtament-agrigento`
   - indirizzo: Via Callicratide, 36, 92100 Agrigento AG, Italia
30. **Hotel Exclusive ****** — Agrigento
   - slug: `hotel-exclusive-agrigento`
   - indirizzo: Via Acrone, 15, 92100 Agrigento AG, Italia
31. **La Nuit** — Agrigento
   - slug: `la-nuit-agrigento`
   - indirizzo: Via Gioeni, 153, 92100 Agrigento AG, Italia
32. **La Terrazza di Carolina** — Agrigento
   - slug: `la-terrazza-di-carolina-agrigento`
   - indirizzo: Cortile Modica I, 1, 92100 Agrigento AG, Italia
33. **La Terrazza di Empedocle** — Agrigento
   - slug: `la-terrazza-di-empedocle-agrigento`
   - indirizzo: Via Empedocle, 73, 92100 Agrigento AG, Italia
34. **Marchese Sala B&B Agrigento** — Agrigento
   - slug: `marchese-sala-b-b-agrigento-agrigento`
   - indirizzo: Via Atenea, 45, 92100 Agrigento AG, Italia
35. **A TRE PASSI DAL MARE** — Agropoli
   - slug: `a-tre-passi-dal-mare-agropoli`
   - indirizzo: Via Caravaggio, 57, 84043 Agropoli SA