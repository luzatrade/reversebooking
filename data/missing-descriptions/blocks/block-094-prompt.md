# Blocco 94/500 — 35 strutture senza descrizione IT

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

1. **Al Tagliere di Nese** — Alzano Lombardo
   - slug: `al-tagliere-di-nese-alzano-lombardo`
   - indirizzo: Via Guglielmo Marconi, 69, 24022 Alzano Lombardo BG
2. **B&B Al Grattacielo** — Alzano Lombardo
   - slug: `b-b-al-grattacielo-alzano-lombardo`
   - indirizzo: Via Roma, 25, 24022 Alzano Lombardo BG
3. **B&B Del Gran Ducato di Alzano Sopra** — Alzano Lombardo
   - slug: `b-b-del-gran-ducato-di-alzano-sopra-alzano-lombardo`
   - indirizzo: Via S. Giuliano, 4, 24022 Alzano Lombardo BG
4. **Hotel Post** — Alzano Lombardo
   - slug: `hotel-post-alzano-lombardo`
   - indirizzo: Via Borgo Palazzo, 191, 24125 Bergamo BG
5. **Hotel Ristorante Marcellino** — Alzano Lombardo
   - slug: `hotel-ristorante-marcellino-alzano-lombardo`
   - indirizzo: Corso Milano, 90, 24020 Selvino BG
6. **Locanda Gatto Bianco** — Alzano Lombardo
   - slug: `locanda-gatto-bianco-alzano-lombardo`
   - indirizzo: Via Borgo Santa Caterina, 40, 24124 Bergamo BG
7. **Radisson Blu Hotel** — Alzano Lombardo
   - slug: `radisson-blu-hotel-alzano-lombardo`
   - indirizzo: Via Carlo Serassi, 26, 24124 Bergamo BG
8. **Relais Villa Carrara | Bed & Breakfast in provincia di Bergamo** — Alzano Lombardo
   - slug: `relais-villa-carrara-bed-breakfast-in-provincia-alzano-lombardo`
   - indirizzo: via Papa Giovanni XXIII, Piazza Mercato, 62, 24020 Villa di Serio BG
9. **San Valentino Hotel** — Alzano Lombardo
   - slug: `san-valentino-hotel-alzano-lombardo`
   - indirizzo: Via P. Cavalli, 38, 24020 Villa di Serio BG
10. **Villa Sant'Antonio** — Alzano Lombardo
   - slug: `villa-sant-antonio-alzano-lombardo`
   - indirizzo: Via Raffaello Sanzio, 3, 24027 Nembro BG
11. **Albergo Ristorante Giardino** — Alzano Scrivia
   - slug: `albergo-ristorante-giardino-alzano-scrivia`
   - indirizzo: Via Frazione Mezzano, 117, 27039 Sannazzaro de' Burgondi PV
12. **Albergo Villa Viola** — Alzano Scrivia
   - slug: `albergo-villa-viola-alzano-scrivia`
   - indirizzo: Via S. Devani, 33, 15057 Tortona AL
13. **DIMORA DELLA CORTE** — Alzano Scrivia
   - slug: `dimora-della-corte-alzano-scrivia`
   - indirizzo: Vicolo Salvaneschi, 6, 27055 Rivanazzano Terme PV
14. **Hotel Clementi** — Alzano Scrivia
   - slug: `hotel-clementi-alzano-scrivia`
   - indirizzo: Via Diviani, 15, 27052 Godiasco Salice Terme PV
15. **Hotel Eridano** — Alzano Scrivia
   - slug: `hotel-eridano-alzano-scrivia`
   - indirizzo: Via S. Bernardino, 18, 27039 Sannazzaro de' Burgondi PV
16. **Hotel Motel K Suite a Tema & Wellness** — Alzano Scrivia
   - slug: `hotel-motel-k-suite-a-tema-wellness-alzano-scrivia`
   - indirizzo: Via Valloni, 8, 27050 Casei Gerola PV
17. **Hotel Ristorante Bellinzona** — Alzano Scrivia
   - slug: `hotel-ristorante-bellinzona-alzano-scrivia`
   - indirizzo: Via G. Mazzini, 71, 27050 Casei Gerola PV
18. **Hotel Ristorante Chierico** — Alzano Scrivia
   - slug: `hotel-ristorante-chierico-alzano-scrivia`
   - indirizzo: Via Roma, 14, 27020 Carbonara al Ticino PV
19. **Hotel Ristorante Il Carrettino** — Alzano Scrivia
   - slug: `hotel-ristorante-il-carrettino-alzano-scrivia`
   - indirizzo: Rivalta Scrivia, Rivalta Nuova, Strada Provinciale per Pozzolo Formigaro, 15, 15057 •, AL
20. **Il Castello di San Gaudenzio** — Alzano Scrivia
   - slug: `il-castello-di-san-gaudenzio-alzano-scrivia`
   - indirizzo: Via Mulino, 2, 27050 San Gaudenzio PV
21. **La Stazione di Salice** — Alzano Scrivia
   - slug: `la-stazione-di-salice-alzano-scrivia`
   - indirizzo: Via Diviani, 7, 27055 Rivanazzano Terme PV
22. **Park Hotel** — Alzano Scrivia
   - slug: `park-hotel-alzano-scrivia`
   - indirizzo: Via Diviani, 8, 27055 Salice Terme PV
23. **Ristorante Albergo Antica Dimora San Michele** — Alzano Scrivia
   - slug: `ristorante-albergo-antica-dimora-san-michele-alzano-scrivia`
   - indirizzo: Via Roma, 2, 27034 Lomello PV
24. **Caroline Home** — Alzate Brianza
   - slug: `caroline-home-alzate-brianza`
   - indirizzo: Via Montello, 92, 22040 Alzate Brianza CO
25. **Cassinazza** — Alzate Brianza
   - slug: `cassinazza-alzate-brianza`
   - indirizzo: Via dei Platani, 22030 Alzate Brianza CO
26. **Elleboro B&B** — Alzate Brianza
   - slug: `elleboro-b-b-alzate-brianza`
   - indirizzo: Via Giuseppe Garibaldi, 29, 22060 Carugo CO
27. **Affitta camere B&B Due Cuori - Suite** — Al�
   - slug: `affitta-camere-b-b-due-cuori-suite-al`
   - indirizzo: Via di Ceglie del Campo Monte Grappa, 46, 70129 Bari BA
28. **Affittacamere MIOE** — Al�
   - slug: `affittacamere-mioe-al`
   - indirizzo: Via Napoli, 29, 73036 Muro Leccese LE
29. **B&B Puglia d'Amare** — Al�
   - slug: `b-b-puglia-d-amare-al`
   - indirizzo: Via Colonna, 23, 74020 Lizzano TA
30. **B&B You & Me** — Al�
   - slug: `b-b-you-me-al`
   - indirizzo: V. Sferra Cavalli, 13, 70044 Polignano a Mare BA
31. **Bed & Breakfast "Mille e una notte"** — Al�
   - slug: `bed-breakfast-mille-e-una-notte-al`
   - indirizzo: Via Maratea, 26, 72015 Torre Canne BR
32. **Dimora dei Pentimi** — Al�
   - slug: `dimora-dei-pentimi-al`
   - indirizzo: Via Pentimi, 40, 70015 Noci BA
33. **Inn Puglia Guest House** — Al�
   - slug: `inn-puglia-guest-house-al`
   - indirizzo: Via Maselli Campagna, 141, 70021 Acquaviva delle Fonti BA
34. **La Neviera | Apulia Rooms** — Al�
   - slug: `la-neviera-apulia-rooms-al`
   - indirizzo: Claustro Michele Oreste, 5/6, 70022 Altamura BA
35. **Masseria Trulli&Stelle Bed & Breakfast** — Al�
   - slug: `masseria-trulli-stelle-bed-breakfast-al`
   - indirizzo: Contrada Fongio Zona H 116, 70015 Noci BA