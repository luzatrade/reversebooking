# Blocco 207/500 — 35 strutture senza descrizione IT

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

1. **Sunset House** — Balestrate
   - slug: `sunset-house-balestrate`
   - indirizzo: Via Pitrè, 72, 90041 Balestrate PA
2. **vanity spa hotel** — Balestrate
   - slug: `vanity-spa-hotel-balestrate`
   - indirizzo: Via Roma, 65, 90041 Balestrate PA
3. **Villa Rosa Bella Vista Balestrate** — Balestrate
   - slug: `villa-rosa-bella-vista-balestrate-balestrate`
   - indirizzo: Via Carlo Alberto Dalla Chiesa, 14, 90041 Balestrate PA
4. **Ai Pozzi Village** — Balestrino
   - slug: `ai-pozzi-village-balestrino`
   - indirizzo: Via Silvio Amico, 35, 17025 Loano SV
5. **Antico Melo** — Balestrino
   - slug: `antico-melo-balestrino`
   - indirizzo: Via Campo, 12, 17034 Castelvecchio di Rocca Barbena SV
6. **B&B Casa Rosso - Le Cantine** — Balestrino
   - slug: `b-b-casa-rosso-le-cantine-balestrino`
   - indirizzo: Via Nuova, 40, 17035 Cisano sul Neva SV
7. **B&B Due passi dal mare** — Balestrino
   - slug: `b-b-due-passi-dal-mare-balestrino`
   - indirizzo: SS 1, 17, 17023 Ceriale SV
8. **B&B Ghe pensu mi** — Balestrino
   - slug: `b-b-ghe-pensu-mi-balestrino`
   - indirizzo: P.za Mario Cennamo, 8, 17020 Toirano SV
9. **Casa Nina** — Balestrino
   - slug: `casa-nina-balestrino`
   - indirizzo: Via Pietro Mainero, 54, 17020 Toirano SV
10. **Come nelle Favole** — Balestrino
   - slug: `come-nelle-favole-balestrino`
   - indirizzo: Via Braida, 52, 17020 Toirano SV
11. **Domo de Aste** — Balestrino
   - slug: `domo-de-aste-balestrino`
   - indirizzo: Via Giovanni Battista Parodi, 8, 17020 Toirano SV
12. **Gemy** — Balestrino
   - slug: `gemy-balestrino`
   - indirizzo: Via Buragi, 10, 17020 Boissano SV
13. **Il Giardino degli Aranci** — Balestrino
   - slug: `il-giardino-degli-aranci-balestrino`
   - indirizzo: Via Balestrino, 4, 17020 Toirano SV
14. **Il Pittore di Stelle** — Balestrino
   - slug: `il-pittore-di-stelle-balestrino`
   - indirizzo: Via Capae, 8, 17020 Boissano SV
15. **La Pergola** — Balestrino
   - slug: `la-pergola-balestrino`
   - indirizzo: Via Calatafimi, 24, 17025 Loano SV
16. **Le case rotte** — Balestrino
   - slug: `le-case-rotte-balestrino`
   - indirizzo: Località Fossato, 1, 17020 Balestrino SV
17. **Residence Oliveto Aparthotel** — Balestrino
   - slug: `residence-oliveto-aparthotel-balestrino`
   - indirizzo: Via Romana, 31 - 37, 17023 Ceriale SV
18. **Scià Dina** — Balestrino
   - slug: `scia-dina-balestrino`
   - indirizzo: Via Giovanni Battista Parodi, 36, 17020 Toirano SV
19. **Zac House** — Balestrino
   - slug: `zac-house-balestrino`
   - indirizzo: Via Morette, 28, 17020 Boissano SV
20. **Albergo Ristorante Sporting Club** — Ballabio
   - slug: `albergo-ristorante-sporting-club-ballabio`
   - indirizzo: Via Casimiro Ferrari, 3, 23811 Ballabio LC
21. **B&B Il Castagneto** — Ballabio
   - slug: `b-b-il-castagneto-ballabio`
   - indirizzo: Via Castagneti, 28, 23818 Pasturo LC
22. **B&B Il Colombé** — Ballabio
   - slug: `b-b-il-colombe-ballabio`
   - indirizzo: Via Giuseppe Mazzini, 3, 23891 Barzanò LC
23. **B&B la Castagna** — Ballabio
   - slug: `b-b-la-castagna-ballabio`
   - indirizzo: Via dei Partigiani, 36, 23900 Lecco LC
24. **BB Partenza Funivia Piani D'Erna** — Ballabio
   - slug: `bb-partenza-funivia-piani-d-erna-ballabio`
   - indirizzo: Via Prealpi, 34, 23900 Lecco LC
25. **Bed & Breakfast La Betulla** — Ballabio
   - slug: `bed-breakfast-la-betulla-ballabio`
   - indirizzo: Piazza Scotti, 3/A, 23815 Introbio LC
26. **Foresteria Lombarda** — Ballabio
   - slug: `foresteria-lombarda-ballabio`
   - indirizzo: Via Francesca Manzoni, 13, 23816 Barzio LC
27. **Il bosco - vicino al lago, vicino alle montagne** — Ballabio
   - slug: `il-bosco-vicino-al-lago-vicino-alle-montagne-ballabio`
   - indirizzo: Via Provinciale, 6, 23811 Ballabio LC
28. **LA CHAMBRE D'HOTE** — Ballabio
   - slug: `la-chambre-d-hote-ballabio`
   - indirizzo: Via Giuseppe Parini, 3, 23811 Ballabio LC
29. **Lecco Hostel & Rooms** — Ballabio
   - slug: `lecco-hostel-rooms-ballabio`
   - indirizzo: Corso Giacomo Matteotti, 89a, 23900 Lecco LC
30. **Lullaby B&B** — Ballabio
   - slug: `lullaby-b-b-ballabio`
   - indirizzo: Via Europa, 1, 23811 Ballabio LC
31. **Rocca dell’Innominato** — Ballabio
   - slug: `rocca-dell-innominato-ballabio`
   - indirizzo: Via del Sarto, 30, 23900 Lecco LC
32. **Tra Monti e Lago** — Ballabio
   - slug: `tra-monti-e-lago-ballabio`
   - indirizzo: Via Carrobbio, 1, 23811 Ballabio LC
33. **Villa Annamaria** — Ballabio
   - slug: `villa-annamaria-ballabio`
   - indirizzo: Via Provinciale, 1, 23811 Ballabio LC
34. **4 Mori Family Village** — Ballao
   - slug: `4-mori-family-village-ballao`
   - indirizzo: Località Is Perdigonis, ex S.S. 125, Km. 58, 09043 Muravera CA
35. **B&B Lago Mulargia** — Ballao
   - slug: `b-b-lago-mulargia-ballao`
   - indirizzo: Via Tirso, 25, 09040 Siurgus Donigala CA