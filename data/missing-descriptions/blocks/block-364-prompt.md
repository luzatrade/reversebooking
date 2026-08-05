# Blocco 364/500 — 35 strutture senza descrizione IT

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

1. **Hotel Seegarten** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `hotel-seegarten-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: St. Josef am See 17, 39052 Caldaro BZ
2. **Hotel Torgglhof Kaltern** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `hotel-torgglhof-kaltern-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Saltner, 30, 39052 Caldaro sulla strada del Vino BZ
3. **Hotel Weingarten** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `hotel-weingarten-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Località Pianizza di Sotto, 9, 39052 Caldaro BZ
4. **Im Zeitlauf - life with nature** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `im-zeitlauf-life-with-nature-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Santa Maria, 6D, 39052 Caldaro sulla strada del Vino BZ
5. **Kalterer See Hof** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `kalterer-see-hof-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: St. Josef am See 32b, S. Giuseppe al Lago, 32/b, 39052 Caldaro sulla strada del Vino BZ
6. **Kaltern am See** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `kaltern-am-see-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Piazza Principale, 10, 39052 Caldaro sulla strada del Vino BZ
7. **Pensione Latemar** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `pensione-latemar-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Europa, 18, 39052 Caldaro BZ
8. **Residence La Terrazza** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `residence-la-terrazza-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Barleiter Weg, 14/1. Stock, 39052 Kaltern an der Weinstraße., Autonome Provinz Bozen - Südtirol
9. **Villa Weingarten** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `villa-weingarten-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Vicolo di Sotto, 24, 39052 Caldaro sulla strada del Vino BZ
10. **WEINGUT GARNI HOTEL KLOSTERHOF@** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `weingut-garni-hotel-klosterhof-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Klavenz, 40, 39052 Caldaro sulla strada del Vino BZ
11. **Weisses Rössl Kaltern** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `weisses-rossl-kaltern-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Piazza Principale, 11, 39052 Caldaro sulla strada del Vino BZ
12. **A Casa Del Contadino** — Caldarola
   - slug: `a-casa-del-contadino-caldarola`
   - indirizzo: Contrada San, Via Domenico Sbardellati, 62020 Caldarola MC
13. **B&B Sole e Luna** — Caldarola
   - slug: `b-b-sole-e-luna-caldarola`
   - indirizzo: Via Case Sparse, 25, 62020 Caccamo sul Lago, MC
14. **Casa Tre Querce Italy** — Caldarola
   - slug: `casa-tre-querce-italy-caldarola`
   - indirizzo: Contrada Cete, 37, 62020 Colmurano MC
15. **La Locanda della Rocca** — Caldarola
   - slug: `la-locanda-della-rocca-caldarola`
   - indirizzo: 62026 Rocca Colonnalta MC
16. **Mazzamurello B&B** — Caldarola
   - slug: `mazzamurello-b-b-caldarola`
   - indirizzo: Contrada Acquaviva, 62020 Caldarola MC
17. **Ristorante HotelTesoro** — Caldarola
   - slug: `ristorante-hoteltesoro-caldarola`
   - indirizzo: Via Annibal Caro, 62020 Caldarola MC
18. **B&B Il Borghetto di DURAZZO Paola Calderara di Reno (Bo)** — Calderara di Reno
   - slug: `b-b-il-borghetto-di-durazzo-paola-calderara-di-r-calderara-di-reno`
   - indirizzo: Via Longarola, 84, 40012 Calderara di Reno BO
19. **B&B Il Giardino** — Calderara di Reno
   - slug: `b-b-il-giardino-calderara-di-reno`
   - indirizzo: Via Aldina, 45, 40012 San Vitale Grande BO
20. **B&B SANTA CECILIA** — Calderara di Reno
   - slug: `b-b-santa-cecilia-calderara-di-reno`
   - indirizzo: Via Prati, 23, 40012 Calderara di Reno BO
21. **Bianca Room&Breakfast** — Calderara di Reno
   - slug: `bianca-room-breakfast-calderara-di-reno`
   - indirizzo: Via Surrogazione, 52, 40012 Lippo BO
22. **Giardino di Mia** — Calderara di Reno
   - slug: `giardino-di-mia-calderara-di-reno`
   - indirizzo: Via Roma, 108, 40012 Calderara di Reno BO
23. **Hotel Brianza** — Calderara di Reno
   - slug: `hotel-brianza-calderara-di-reno`
   - indirizzo: Via Don Minzoni, 16, 40012 Calderara di Reno BO
24. **Hotel del Borgo** — Calderara di Reno
   - slug: `hotel-del-borgo-calderara-di-reno`
   - indirizzo: V. Marco Emilio Lepido, 195, 40132 Bologna BO
25. **Hotel I Portici** — Calderara di Reno
   - slug: `hotel-i-portici-calderara-di-reno`
   - indirizzo: Via dell'Indipendenza, 69, 40121 Bologna BO
26. **Hotel Marconi Express** — Calderara di Reno
   - slug: `hotel-marconi-express-calderara-di-reno`
   - indirizzo: Via Cesare Boldrini, 24, 40121 Bologna BO
27. **HP Fly Hotel Bologna** — Calderara di Reno
   - slug: `hp-fly-hotel-bologna-calderara-di-reno`
   - indirizzo: Via Don Minzoni, 16, 40012 Calderara di Reno BO
28. **La Torre di Longara** — Calderara di Reno
   - slug: `la-torre-di-longara-calderara-di-reno`
   - indirizzo: V. Valli, 44, 40012 Longara BO
29. **Le Case di Antonio** — Calderara di Reno
   - slug: `le-case-di-antonio-calderara-di-reno`
   - indirizzo: Via Cesare Boldrini, 3, 40121 Bologna BO
30. **MADE IN BO-Affittacamere-Rooms-Bologna Rooms-Camere Stazione Centrale-Camere Bologna-Camere** — Calderara di Reno
   - slug: `made-in-bo-affittacamere-rooms-bologna-rooms-cam-calderara-di-reno`
   - indirizzo: Via Cesare Boldrini, 16, 40121 Bologna BO
31. **MalaMù BnB Eventi** — Calderara di Reno
   - slug: `malamu-bnb-eventi-calderara-di-reno`
   - indirizzo: Via Pepoli, 19, 40069 Zola Predosa BO
32. **Reno bed and breakfast** — Calderara di Reno
   - slug: `reno-bed-and-breakfast-calderara-di-reno`
   - indirizzo: Via Longarola, 82, 40012 Longara BO
33. **Ristorante Hotel Emi** — Calderara di Reno
   - slug: `ristorante-hotel-emi-calderara-di-reno`
   - indirizzo: Via Surrogazione, 45, 40012 Calderara di Reno BO
34. **Triumvirato Rooms** — Calderara di Reno
   - slug: `triumvirato-rooms-calderara-di-reno`
   - indirizzo: Via del Triumvirato, 123/3, 40132 Bologna BO
35. **Agritur Primo Sole** — Caldes
   - slug: `agritur-primo-sole-caldes`
   - indirizzo: Vicolo dei Ponti, 15, 38023 Cles TN