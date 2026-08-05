# Blocco 56/500 — 35 strutture senza descrizione IT

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

1. **Relais San Marco Luxury Guest House** — Alberona
   - slug: `relais-san-marco-luxury-guest-house-alberona`
   - indirizzo: Via S. Marco, 4, 71030 Volturino FG
2. **Suitehome B&B** — Alberona
   - slug: `suitehome-b-b-alberona`
   - indirizzo: Corso Umberto I, 75, 71029 Troia FG
3. **Albergo Hotel Canturio** — Albese con Cassano
   - slug: `albergo-hotel-canturio-albese-con-cassano`
   - indirizzo: Via Vittorio Vergani, 28, 22063 Cantù CO
4. **Axolute Comfort Hotel Como Cantù** — Albese con Cassano
   - slug: `axolute-comfort-hotel-como-cantu-albese-con-cassano`
   - indirizzo: Via A. Grandi, 32, 22063 Cantù CO
5. **B&B L'Albero Maestro** — Albese con Cassano
   - slug: `b-b-l-albero-maestro-albese-con-cassano`
   - indirizzo: Strada del bosco, 105, 22030 Orsenigo CO
6. **Bed & Breakfast Al Pesce Vela** — Albese con Cassano
   - slug: `bed-breakfast-al-pesce-vela-albese-con-cassano`
   - indirizzo: Via Roma, 130, 22032 Albese Con Cassano CO
7. **Casale Raffaello B&B** — Albese con Cassano
   - slug: `casale-raffaello-b-b-albese-con-cassano`
   - indirizzo: Via Raffaello Sanzio, 25, 22032 Albese con Cassano CO
8. **Hotel La Corte di Lurago** — Albese con Cassano
   - slug: `hotel-la-corte-di-lurago-albese-con-cassano`
   - indirizzo: Via Giuseppe Mazzini, 20, 22040 Lurago d'Erba CO
9. **I Tre Faggi** — Albese con Cassano
   - slug: `i-tre-faggi-albese-con-cassano`
   - indirizzo: Via Giuseppe Verdi, 44, 22032 Albese Con Cassano CO
10. **Miró foodbeverages & dreams** — Albese con Cassano
   - slug: `miro-foodbeverages-dreams-albese-con-cassano`
   - indirizzo: Via Manzoni, 2161, 22040 Alzate Brianza CO
11. **Relais & Spa Castello di Casiglio** — Albese con Cassano
   - slug: `relais-spa-castello-di-casiglio-albese-con-cassano`
   - indirizzo: Via Cesare Cantù, 21, 22036 Erba CO
12. **Residence Campo Rotondo** — Albese con Cassano
   - slug: `residence-campo-rotondo-albese-con-cassano`
   - indirizzo: Via Provinciale, 84, 22038 Tavernerio CO
13. **Villa Cuore** — Albese con Cassano
   - slug: `villa-cuore-albese-con-cassano`
   - indirizzo: Via ai Monti, 2, 22038 Tavernerio CO
14. **Agriturismo "Le Mandolare"** — Albettone
   - slug: `agriturismo-le-mandolare-albettone`
   - indirizzo: Via Mandolare, 6, 36021 Villaga VI
15. **Agriturismo Belvedere** — Albettone
   - slug: `agriturismo-belvedere-albettone`
   - indirizzo: Via Croce Nera, 15, 36021 Villaga VI
16. **Agriturismo Il Palazzone, alloggio con prima colazione** — Albettone
   - slug: `agriturismo-il-palazzone-alloggio-con-prima-cola-albettone`
   - indirizzo: Via Roi G, Sul retro della Trattoria Culata, Via Giuseppe Roi, 51, 36047 Montegalda VI
17. **Agriturismo Marani** — Albettone
   - slug: `agriturismo-marani-albettone`
   - indirizzo: Via Zambalda, 52, 36057 Arcugnano VI
18. **B&B Brojo Hill** — Albettone
   - slug: `b-b-brojo-hill-albettone`
   - indirizzo: Via Brojo, 18, 36023 Longare VI
19. **Country House Il Bucaneve** — Albettone
   - slug: `country-house-il-bucaneve-albettone`
   - indirizzo: Via Belvedere, 15, 35030 Rovolon PD
20. **Dal Gheppio - Nido con Vista** — Albettone
   - slug: `dal-gheppio-nido-con-vista-albettone`
   - indirizzo: Via Croce, 2, 36020 Albettone VI
21. **Albergo della Posta - Sila Wellness Hotel** — Albi
   - slug: `albergo-della-posta-sila-wellness-hotel-albi`
   - indirizzo: Via Eugenio Mancuso, 93/b, 88055 Taverna CZ
22. **Albergo Diffuso Il Miglio** — Albi
   - slug: `albergo-diffuso-il-miglio-albi`
   - indirizzo: Via Francesco Cilea, 1, 88040 Miglierina CZ
23. **B&B Francesca** — Albi
   - slug: `b-b-francesca-albi`
   - indirizzo: Località, Contrada Carrozzino, 88050 Zagarise CZ
24. **B&Bio spa Catanzaro** — Albi
   - slug: `b-bio-spa-catanzaro-albi`
   - indirizzo: Via Francesco Crispi, 146, 88100 Catanzaro CZ
25. **Dreams Resort Sellia Marina** — Albi
   - slug: `dreams-resort-sellia-marina-albi`
   - indirizzo: Località Sena S. Vincenzo, 88050 Sellia Marina CZ
26. **Ducarelli B&B** — Albi
   - slug: `ducarelli-b-b-albi`
   - indirizzo: Via Giardino, 47, 88050 Pentone CZ
27. **Grandinetti Hotel Ristorante Bar** — Albi
   - slug: `grandinetti-hotel-ristorante-bar-albi`
   - indirizzo: Contrada da Bocca di Piazza, 1, 87040 Parenti CS
28. **HOTEL 106** — Albi
   - slug: `hotel-106-albi`
   - indirizzo: Via la Petrizia, 6, 88050 Sellia Marina CZ
29. **HOTEL ALEXIA** — Albi
   - slug: `hotel-alexia-albi`
   - indirizzo: Salita Piazza Roma, 7, 88100 Catanzaro CZ
30. **Hotel Il Brigante** — Albi
   - slug: `hotel-il-brigante-albi`
   - indirizzo: 88836 Caprara KR
31. **Hotel Residence Due Mari** — Albi
   - slug: `hotel-residence-due-mari-albi`
   - indirizzo: Via Cavour, 46, 88056 Tiriolo CZ
32. **Hotel Villaggio Sirio** — Albi
   - slug: `hotel-villaggio-sirio-albi`
   - indirizzo: Viale S. Vincenzo, snc, 88050 Sellia Marina CZ
33. **Il Bivacco del Parco Sport Hotel & Residence** — Albi
   - slug: `il-bivacco-del-parco-sport-hotel-residence-albi`
   - indirizzo: Via Eugenio Mancuso, 88055 Taverna CZ
34. **Il Casale dei Ciliegi Agriturismo** — Albi
   - slug: `il-casale-dei-ciliegi-agriturismo-albi`
   - indirizzo: Via delle Ginestre, 171, 88040 Carlopoli CZ
35. **Il Semaforo Sila** — Albi
   - slug: `il-semaforo-sila-albi`
   - indirizzo: Località Pantane, 13, 88055 Taverna CZ