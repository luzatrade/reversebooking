# Blocco 377/500 — 35 strutture senza descrizione IT

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

1. **Locanda Il Gallo** — Cambiasca
   - slug: `locanda-il-gallo-cambiasca`
   - indirizzo: Via S. Carlo, 7, 28831 Feriolo VB
2. **B&B** — Camburzano
   - slug: `b-b-camburzano`
   - indirizzo: Via Vobbia, 4, 13895 Muzzano BI
3. **B&B La Varda** — Camburzano
   - slug: `b-b-la-varda-camburzano`
   - indirizzo: Via Almasso, 4, 13888 Ceresane-Curanuova BI
4. **IO&TE room and spa lo Spazio del Benessere** — Camburzano
   - slug: `io-te-room-and-spa-lo-spazio-del-benessere-camburzano`
   - indirizzo: Via Martiri della Libertà, 19, 13817 Sordevolo BI
5. **Boschetto AltaLanga** — Camerana
   - slug: `boschetto-altalanga-camerana`
   - indirizzo: loc. Boschetto, n.12, 12077 Monesiglio CN
6. **La Locanda dei Cartunè** — Camerana
   - slug: `la-locanda-dei-cartune-camerana`
   - indirizzo: Via Padre Giovanni Secco, 8, 12070 Tetti CN
7. **Rifugio La Pavoncella** — Camerana
   - slug: `rifugio-la-pavoncella-camerana`
   - indirizzo: Loc. San Giovanni Belbo, 1, 12072 Camerana CN
8. **Albergo Ristorante da Nazzarè** — Camerano
   - slug: `albergo-ristorante-da-nazzare-camerano`
   - indirizzo: Via Aspio Terme, 39, 60021 Camerano AN
9. **Aspio Hotel & Bakery** — Camerano
   - slug: `aspio-hotel-bakery-camerano`
   - indirizzo: Via Aspio Terme, snc, 60021 Camerano AN
10. **Aspio Residence** — Camerano
   - slug: `aspio-residence-camerano`
   - indirizzo: Via Albano Corneli, Frazione Aspio, 6, 60021 Camerano AN
11. **Hotel Cristoforo Colombo** — Camerano
   - slug: `hotel-cristoforo-colombo-camerano`
   - indirizzo: Strada Statale Adriatica, km 310, 400, 60027 Osimo AN
12. **Hotel Dorico** — Camerano
   - slug: `hotel-dorico-camerano`
   - indirizzo: Via Flaminia, 8, 60126 Ancona AN
13. **Hotel Le Cave Sirolo** — Camerano
   - slug: `hotel-le-cave-sirolo-camerano`
   - indirizzo: Via Monte Conero, 2, 60020 Sirolo AN
14. **Hotel Milano** — Camerano
   - slug: `hotel-milano-camerano`
   - indirizzo: Via Montebello, 1A, 60122 Ancona AN
15. **Hotel Monteconero** — Camerano
   - slug: `hotel-monteconero-camerano`
   - indirizzo: Via Monte Conero, 26, 60020 Sirolo AN
16. **Klass Hotel** — Camerano
   - slug: `klass-hotel-camerano`
   - indirizzo: SS16, 16, 60022 Castelfidardo AN
17. **Palazzo Ruschioni Boutique Hotel** — Camerano
   - slug: `palazzo-ruschioni-boutique-hotel-camerano`
   - indirizzo: Via S. Francesco, 22, 60021 Camerano AN
18. **Ristorante Hotel la Perla** — Camerano
   - slug: `ristorante-hotel-la-perla-camerano`
   - indirizzo: Via Direttissima del Conero, 1/3, 60021 Camerano AN
19. **Al Mobile Antico** — Camerano Casasco
   - slug: `al-mobile-antico-camerano-casasco`
   - indirizzo: Via Angelo Gatti, 20, 14020 Camerano AT
20. **da Nonna Irene** — Camerano Casasco
   - slug: `da-nonna-irene-camerano-casasco`
   - indirizzo: Via Francesco Vercelli, 17, 14020 Camerano AT
21. **Hotel Cavour** — Camerano Casasco
   - slug: `hotel-cavour-camerano-casasco`
   - indirizzo: Piazza Guglielmo Marconi, 18, 14100 Asti AT
22. **Hotel Genova** — Camerano Casasco
   - slug: `hotel-genova-camerano-casasco`
   - indirizzo: Corso Alessandria, 26, 14100 Asti AT
23. **La Cà Cita** — Camerano Casasco
   - slug: `la-ca-cita-camerano-casasco`
   - indirizzo: Via Montà, 5, 14010 Cortazzone AT
24. **La Ferte' Restaurant And Suites** — Camerano Casasco
   - slug: `la-ferte-restaurant-and-suites-camerano-casasco`
   - indirizzo: Str. Valmanera, 150, 14100 Asti AT
25. **La Terrazza Affittacamere** — Camerano Casasco
   - slug: `la-terrazza-affittacamere-camerano-casasco`
   - indirizzo: Regione Palazzasso, 36/5, 14010 Cantarana AT
26. **Agriturismo Il posto delle fragole** — Camerata Cornello
   - slug: `agriturismo-il-posto-delle-fragole-camerata-cornello`
   - indirizzo: Via Sentino, 3, 24015 Sentino, San Giovanni Bianco BG
27. **Albergo Diffuso Ornica** — Camerata Cornello
   - slug: `albergo-diffuso-ornica-camerata-cornello`
   - indirizzo: Via F. lli Calvi, 80, 24010 Ornica BG
28. **B&B DA PIERI** — Camerata Cornello
   - slug: `b-b-da-pieri-camerata-cornello`
   - indirizzo: Via Portiera, 1, 24015 San Giovanni Bianco BG
29. **La Tana del Tasso Rooms&Breakfast** — Camerata Cornello
   - slug: `la-tana-del-tasso-rooms-breakfast-camerata-cornello`
   - indirizzo: Via Cornello, 19, 24010 Camerata Cornello BG
30. **ParinaInn-Locanda** — Camerata Cornello
   - slug: `parinainn-locanda-camerata-cornello`
   - indirizzo: Via Orbrembo, 106, 24010 Camerata Cornello BG
31. **3 Cannelle b&b e Bike Hotel** — Camerata Nuova
   - slug: `3-cannelle-b-b-e-bike-hotel-camerata-nuova`
   - indirizzo: Via Roma, 24, 67067 Sante Marie AQ
32. **B&B La Grotta** — Camerata Nuova
   - slug: `b-b-la-grotta-camerata-nuova`
   - indirizzo: Via Lungo Imele, 4, 67069 Tagliacozzo AQ
33. **B&B La Mela Selvatica** — Camerata Nuova
   - slug: `b-b-la-mela-selvatica-camerata-nuova`
   - indirizzo: Via Aringo, 28, 02022 Collalto Sabino RI
34. **B&B La Quercia che Ride** — Camerata Nuova
   - slug: `b-b-la-quercia-che-ride-camerata-nuova`
   - indirizzo: Località Grottelle snc, Camerata Nuova, 00020, 00020 Camerata Nuova RM
35. **B&B La Stella Danzante** — Camerata Nuova
   - slug: `b-b-la-stella-danzante-camerata-nuova`
   - indirizzo: Loc, Colle Santo Stefano, 5, 00020 Camerata Nuova RM