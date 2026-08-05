# Blocco 395/500 — 35 strutture senza descrizione IT

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

1. **Agrihotel La Vecchia Quercia** — Campolattaro
   - slug: `agrihotel-la-vecchia-quercia-campolattaro`
   - indirizzo: Via Cerquelle, 28, 82032 Cerreto Sannita BN
2. **Agriturismo Alta Collina** — Campolattaro
   - slug: `agriturismo-alta-collina-campolattaro`
   - indirizzo: Contrada Lammia, 5, Via Lammia, 5, 82100 Benevento BN
3. **Albergo Diffuso Campolattaro** — Campolattaro
   - slug: `albergo-diffuso-campolattaro-campolattaro`
   - indirizzo: Via Palazzo, 82020 Campolattaro BN
4. **Bed and breakfast “P’a Carrera”** — Campolattaro
   - slug: `bed-and-breakfast-p-a-carrera-campolattaro`
   - indirizzo: Via Napoli, 33, 82020 Fragneto Monforte BN
5. **Da Lello Bed and Relax** — Campolattaro
   - slug: `da-lello-bed-and-relax-campolattaro`
   - indirizzo: Contrada Torrepalazzo, 29, 82030 Torrecuso BN
6. **Hotel Vittoria** — Campolattaro
   - slug: `hotel-vittoria-campolattaro`
   - indirizzo: Via Torrepalazzo Insediamento Produttivo, 7, 82030 Torrepalazzo I.p. BN
7. **Il Grottino (Fragneto Monforte) - Ristorante, Pizzeria, Hotel** — Campolattaro
   - slug: `il-grottino-fragneto-monforte-ristorante-pizzeri-campolattaro`
   - indirizzo: Contrada Celone, 82020 Fragneto Monforte BN
8. **La Cartolina del Sannio** — Campolattaro
   - slug: `la-cartolina-del-sannio-campolattaro`
   - indirizzo: 82020 Campolattaro BN
9. **La Magnolia sul Lago** — Campolattaro
   - slug: `la-magnolia-sul-lago-campolattaro`
   - indirizzo: Contrada, Via Toppi, 2, 82020 Campolattaro BN
10. **La Torre Medievale** — Campolattaro
   - slug: `la-torre-medievale-campolattaro`
   - indirizzo: Via Palazzo, 9, 82020 Campolattaro BN
11. **Scardalano Resort** — Campolattaro
   - slug: `scardalano-resort-campolattaro`
   - indirizzo: Via degli Italici, Snc, 82026 Morcone BN
12. **Anthea Guest House** — Campoli Appennino
   - slug: `anthea-guest-house-campoli-appennino`
   - indirizzo: SP96, 389, 03030 Campoli Appennino FR
13. **Bed and Bears** — Campoli Appennino
   - slug: `bed-and-bears-campoli-appennino`
   - indirizzo: Via Borgo Loreto, 262, 03030 Campoli Appennino FR
14. **Hotel Garnì Posta** — Campoli Appennino
   - slug: `hotel-garni-posta-campoli-appennino`
   - indirizzo: Largo Molinari, 67032 Pescasseroli AQ
15. **Hotel Valentino** — Campoli Appennino
   - slug: `hotel-valentino-campoli-appennino`
   - indirizzo: Viale S. Domenico, 1, 03039 Sora FR
16. **Monte Marsicano Hotel** — Campoli Appennino
   - slug: `monte-marsicano-hotel-campoli-appennino`
   - indirizzo: Via della Piazza, 1, 67032 Pescasseroli AQ
17. **Ristorante Hotel Plistia** — Campoli Appennino
   - slug: `ristorante-hotel-plistia-campoli-appennino`
   - indirizzo: Viale Principe di Napoli, 28, 67032 Pescasseroli AQ
18. **Al Rifugio della Volpe** — Campoli del Monte Taburno
   - slug: `al-rifugio-della-volpe-campoli-del-monte-taburno`
   - indirizzo: Contrada Coppole, 1, 82030 Tocco Caudio BN
19. **B&B Camposauro** — Campoli del Monte Taburno
   - slug: `b-b-camposauro-campoli-del-monte-taburno`
   - indirizzo: Via Santa Croce, 82038 Vitulano BN
20. **Bed & Breakfast Magico Riposo Telese Terme** — Campoli del Monte Taburno
   - slug: `bed-breakfast-magico-riposo-telese-terme-campoli-del-monte-taburno`
   - indirizzo: Via Roma, 9, 82037 Telese BN
21. **Borgo San Pietro** — Campoli del Monte Taburno
   - slug: `borgo-san-pietro-campoli-del-monte-taburno`
   - indirizzo: Viale San Pietro, 82, 82038 Vitulano BN
22. **L'Antico Rifugio del Tasso** — Campoli del Monte Taburno
   - slug: `l-antico-rifugio-del-tasso-campoli-del-monte-taburno`
   - indirizzo: Via Rosato, 82030 Cautano BN
23. **La Chiazzolla** — Campoli del Monte Taburno
   - slug: `la-chiazzolla-campoli-del-monte-taburno`
   - indirizzo: Via Vittorio Emanuele, 3, 82030 Campoli del Monte Taburno BN
24. **San Michele** — Campoli del Monte Taburno
   - slug: `san-michele-campoli-del-monte-taburno`
   - indirizzo: Via Provinciale Vitulanese, 97, 82030 Foglianise BN
25. **B&B Il Borgo** — Campolieto
   - slug: `b-b-il-borgo-campolieto`
   - indirizzo: Via borgo San Rocco matrice, 4, 86030 Matrice CB
26. **Bed & Breakfast Montagano** — Campolieto
   - slug: `bed-breakfast-montagano-campolieto`
   - indirizzo: Via Appennini, 81, 86023 Montagano CB
27. **Casa Cristina** — Campolieto
   - slug: `casa-cristina-campolieto`
   - indirizzo: Via Matteo R. Imbriani, 22, 86040 Ripabottoni CB
28. **Da Nicolo** — Campolieto
   - slug: `da-nicolo-campolieto`
   - indirizzo: Via Scalo Ferroviario, snc, 86030 Matrice CB
29. **B & B Barco 41** — Campolongo Maggiore
   - slug: `b-b-barco-41-campolongo-maggiore`
   - indirizzo: Via Enrico Mattei, 41, 35020 Sant'Angelo di Piove di Sacco PD
30. **B&B BURRO e MARMELLATA** — Campolongo Maggiore
   - slug: `b-b-burro-e-marmellata-campolongo-maggiore`
   - indirizzo: Via Brentasecca, 31, 35020 Saonara PD
31. **Bed and Breakfast Casa Taty CIN: IT027012B4E3USENQO** — Campolongo Maggiore
   - slug: `bed-and-breakfast-casa-taty-cin-it027012b4e3usen-campolongo-maggiore`
   - indirizzo: Via Benedetto Cairoli, 133, 30031 Dolo VE
32. **Trattoria la Busa e alloggi** — Campolongo Maggiore
   - slug: `trattoria-la-busa-e-alloggi-campolongo-maggiore`
   - indirizzo: Via G. Boccaccio, 4, 35020 Ponte San Nicolò PD
33. **Affittacamere - La Corte Dell'Ulivo** — Campolongo Tapogliano
   - slug: `affittacamere-la-corte-dell-ulivo-campolongo-tapogliano`
   - indirizzo: Via Ulivi, 30, 34070 Polazzo GO
34. **Agriturismo Villa Chiopris** — Campolongo Tapogliano
   - slug: `agriturismo-villa-chiopris-campolongo-tapogliano`
   - indirizzo: Via C. Battisti, 6, 33048 Chiopris Viscone UD
35. **Casa Lovisoni** — Campolongo Tapogliano
   - slug: `casa-lovisoni-campolongo-tapogliano`
   - indirizzo: Piazza Libertà, 15, 33052 Cervignano del Friuli UD