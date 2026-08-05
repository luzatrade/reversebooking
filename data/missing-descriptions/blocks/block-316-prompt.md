# Blocco 316/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante Riposo** — Bracca
   - slug: `hotel-ristorante-riposo-bracca`
   - indirizzo: Via de Medici, 101, 24016 San Pellegrino Terme BG
2. **Monte Zucco Relax** — Bracca
   - slug: `monte-zucco-relax-bracca`
   - indirizzo: Via Monte Zucco, 11, 24016 Frasnito BG
3. **Resort San Pellegrino Terme** — Bracca
   - slug: `resort-san-pellegrino-terme-bracca`
   - indirizzo: Via Botta, 8, 24010 Bracca BG
4. **Ristorante Da Gianni di Bertinotti G. & C.** — Bracca
   - slug: `ristorante-da-gianni-di-bertinotti-g-c-bracca`
   - indirizzo: Via Tiolo, 37, 24019 Zogno BG
5. **agriturismo LBStud di Riccioni G.** — Bracciano
   - slug: `agriturismo-lbstud-di-riccioni-g-bracciano`
   - indirizzo: Via Baglione, 13, 00062 Bracciano RM
6. **Alloggio Turistico Isonzo - Bracciano (Roma)** — Bracciano
   - slug: `alloggio-turistico-isonzo-bracciano-roma-bracciano`
   - indirizzo: Via Isonzo, 12, 00062 Bracciano RM
7. **DomusBiri** — Bracciano
   - slug: `domusbiri-bracciano`
   - indirizzo: Via G. Argenti, 19, 00062 Lungolago RM
8. **Ecoalbergo Bracciano** — Bracciano
   - slug: `ecoalbergo-bracciano-bracciano`
   - indirizzo: Piazza Giuseppe Mazzini, 12, 00062 Bracciano RM
9. **Granducato di Bracciano - Suite Duomo** — Bracciano
   - slug: `granducato-di-bracciano-suite-duomo-bracciano`
   - indirizzo: Via Della Rotonda, 16, 00062 Bracciano RM
10. **La Gismonda** — Bracciano
   - slug: `la-gismonda-bracciano`
   - indirizzo: Via della Cisterna, 6, 00062 Bracciano RM
11. **Le camere di Vittoria** — Bracciano
   - slug: `le-camere-di-vittoria-bracciano`
   - indirizzo: Via Giulio Volpi, 7, 00062 Bracciano RM
12. **OAK country relax** — Bracciano
   - slug: `oak-country-relax-bracciano`
   - indirizzo: via degli scopeti, 1, 00066 Manziana RM
13. **Poggio delle Molare** — Bracciano
   - slug: `poggio-delle-molare-bracciano`
   - indirizzo: Via delle Molare, 10, 00062 Bracciano RM
14. **Vigna Caio Relais & Spa** — Bracciano
   - slug: `vigna-caio-relais-spa-bracciano`
   - indirizzo: Via del Riposo, 1, 00062 Bracciano RM
15. **Villa Clementina Hotel Spa & Ristorante Bracciano** — Bracciano
   - slug: `villa-clementina-hotel-spa-ristorante-bracciano-bracciano`
   - indirizzo: Traversa Quarto del Lago, 12, 00062 Bracciano RM
16. **Agriturismo Tenuta Don Carlo** — Bracigliano
   - slug: `agriturismo-tenuta-don-carlo-bracigliano`
   - indirizzo: Via Cupa Belvedere, 84015 Nocera Superiore SA
17. **B&B Dea Guest House** — Bracigliano
   - slug: `b-b-dea-guest-house-bracigliano`
   - indirizzo: Via Mercatello, 115, 83025 Borgo AV
18. **B&B dei Rota affittacamere Mercato San Severino Salerno** — Bracigliano
   - slug: `b-b-dei-rota-affittacamere-mercato-san-severino-bracigliano`
   - indirizzo: Via Tommaso Sanseverino, n 12, 84085 Mercato San Severino SA
19. **B&B IL PICCOLO PRINCIPE** — Bracigliano
   - slug: `b-b-il-piccolo-principe-bracigliano`
   - indirizzo: Via Giovanni Amendola, 12, 84085 Mercato San Severino SA
20. **B&B Le Rocce** — Bracigliano
   - slug: `b-b-le-rocce-bracigliano`
   - indirizzo: Via Secondo, Via Pendino Lombardi, 8, 84083 Castel San Giorgio SA
21. **B&B Sun Garden** — Bracigliano
   - slug: `b-b-sun-garden-bracigliano`
   - indirizzo: Via Biagio De Giovanni, 9, 83026 Montoro AV
22. **borgo paradiso** — Bracigliano
   - slug: `borgo-paradiso-bracigliano`
   - indirizzo: Via F. D'Amato, 9, 84083 Lanzara SA
23. **Casa Vacanze Mercolino** — Bracigliano
   - slug: `casa-vacanze-mercolino-bracigliano`
   - indirizzo: Via Nazario Sauro, 87, 84082 Bracigliano SA
24. **Civico 31 luxury rooms** — Bracigliano
   - slug: `civico-31-luxury-rooms-bracigliano`
   - indirizzo: Trav. Via Mannara, 31, 84083 Castel San Giorgio SA
25. **Dream Room** — Bracigliano
   - slug: `dream-room-bracigliano`
   - indirizzo: Via S. Felice, 27, 84085 Piazza del Galdo-Sant'angelo SA
26. **i milord** — Bracigliano
   - slug: `i-milord-bracigliano`
   - indirizzo: Via Domenico Alfieri, 19, 84083 Lanzara SA
27. **I Milord 2** — Bracigliano
   - slug: `i-milord-2-bracigliano`
   - indirizzo: Via S. Maria di Costantinopoli, 51, 84083 Castel San Giorgio SA
28. **Il Vicoletto room** — Bracigliano
   - slug: `il-vicoletto-room-bracigliano`
   - indirizzo: Vico Demanio Piazza, 23, 84085 Mercato San Severino SA
29. **InBloom-Angolo Nascosto** — Bracigliano
   - slug: `inbloom-angolo-nascosto-bracigliano`
   - indirizzo: Via S. Felice, 513, 84085 Piazza del Galdo-Sant'angelo SA
30. **La casa di Francy** — Bracigliano
   - slug: `la-casa-di-francy-bracigliano`
   - indirizzo: Via Vescovo Gabrie e Capaccio, 84082 Bracigliano SA
31. **Locanda della Bottega** — Bracigliano
   - slug: `locanda-della-bottega-bracigliano`
   - indirizzo: Via Roma, 33/1 piano, 84084 Fisciano SA
32. **NONNA CONCETTA B&B NOCERA** — Bracigliano
   - slug: `nonna-concetta-b-b-nocera-bracigliano`
   - indirizzo: Via Carlo Cafiero, 14, 84014 Nocera Inferiore SA
33. **San Severino Park Hotel & Spa** — Bracigliano
   - slug: `san-severino-park-hotel-spa-bracigliano`
   - indirizzo: Via Bagnara, 10, 84010 Mercato San Severino SA
34. **Albergo Huber** — Braies/Prags
   - slug: `albergo-huber-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 6, 39030 Braies BZ
35. **Alpin Natur Hotel Brückele** — Braies/Prags
   - slug: `alpin-natur-hotel-bruckele-braies-prags`
   - indirizzo: Ausserprags, Frazione Braies di Fuori, 4, 39030 Braies BZ