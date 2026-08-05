# Blocco 25/500 — 35 strutture senza descrizione IT

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

1. **Ristorante Hotel Villa Denise** — Africo
   - slug: `ristorante-hotel-villa-denise-africo`
   - indirizzo: ss106, km85, S.da Statale 106 Jonica, km85, 89034 Bovalino RC
2. **Villa Tripepi** — Africo
   - slug: `villa-tripepi-africo`
   - indirizzo: Via Marina, 12, 89035 Bova Marina RC
3. **Villaggio Jonio Blu - Kalabrien** — Africo
   - slug: `villaggio-jonio-blu-kalabrien-africo`
   - indirizzo: Via C. Colombo, 8, 89032 Bianco RC
4. **A casa di Elli** — Agazzano
   - slug: `a-casa-di-elli-agazzano`
   - indirizzo: Strada Misano, 11, 29010 Piano terra PC
5. **Albergo Ristorante Il Cervo** — Agazzano
   - slug: `albergo-ristorante-il-cervo-agazzano`
   - indirizzo: Piazza Europa, 20, 29010 Agazzano PC
6. **I Galli Bed and Breakfast** — Agazzano
   - slug: `i-galli-bed-and-breakfast-agazzano`
   - indirizzo: Via F. Gatti, 29010 Agazzano PC
7. **Residence Luisa** — Agazzano
   - slug: `residence-luisa-agazzano`
   - indirizzo: Via Ranuzio Anguissola Scotti, 3, 29011 Agazzano PC
8. **Ristorante Il Calle** — Agazzano
   - slug: `ristorante-il-calle-agazzano`
   - indirizzo: Strada Misano, 13, 29010 Agazzano PC
9. **Affittacamere Leonardo's – Agerola | Costiera Amalfitana.** — Agerola
   - slug: `affittacamere-leonardo-s-agerola-costiera-amalfi-agerola`
   - indirizzo: Via Miramare, 17, 80051 Agerola NA
10. **Agriturismo Punta San Lazzaro** — Agerola
   - slug: `agriturismo-punta-san-lazzaro-agerola`
   - indirizzo: Via Santa Lucia, 80051 Agerola NA
11. **B&B Mamaral** — Agerola
   - slug: `b-b-mamaral-agerola`
   - indirizzo: Via Pendola, 11, 80051 Pianillo NA
12. **B&B Mon Reve Agerola** — Agerola
   - slug: `b-b-mon-reve-agerola-agerola`
   - indirizzo: Via Galli, 14, 80051 Agerola NA
13. **B&B SANTA MARIA AGEROLA** — Agerola
   - slug: `b-b-santa-maria-agerola-agerola`
   - indirizzo: Via Santa Maria, 13, 80051 Agerola NA
14. **Casa Torre** — Agerola
   - slug: `casa-torre-agerola`
   - indirizzo: Via Punta Fenile via punta fenile2/a, 80051 Agerola NA
15. **Furore Grand Hotel** — Agerola
   - slug: `furore-grand-hotel-agerola`
   - indirizzo: Via Dell'Amore, 2, 84010 Furore SA
16. **HEDÈRA ROOMS** — Agerola
   - slug: `hedera-rooms-agerola`
   - indirizzo: Via Case Amatruda, 4/a, 80051 Pianillo NA
17. **Il Borgo** — Agerola
   - slug: `il-borgo-agerola`
   - indirizzo: Via Matteo Renato Florio, 81, 80051 Agerola NA
18. **Il Vigneto di Nonno Pietro - Fraz.Pianillo** — Agerola
   - slug: `il-vigneto-di-nonno-pietro-fraz-pianillo-agerola`
   - indirizzo: Via Santa Croce, 6, 80051 Pianillo NA
19. **La dolce vita** — Agerola
   - slug: `la-dolce-vita-agerola`
   - indirizzo: Via degli Ontanelli, 1/A, 80051 Agerola NA
20. **La Villa Carmelina** — Agerola
   - slug: `la-villa-carmelina-agerola`
   - indirizzo: Via Gemini, 1, 80051 Agerola NA
21. **Le 5 Perle** — Agerola
   - slug: `le-5-perle-agerola`
   - indirizzo: Via Roma 1, traversa, 3, 80051 Agerola NA
22. **O Spritt House** — Agerola
   - slug: `o-spritt-house-agerola`
   - indirizzo: Via Villani, 12, 80051 Agerola NA
23. **Quota 646** — Agerola
   - slug: `quota-646-agerola`
   - indirizzo: Via Antonio Coppola II Traversa, 2, 80051 Agerola NA
24. **Relais Miló** — Agerola
   - slug: `relais-milo-agerola`
   - indirizzo: Prima, Via Roma, 80051 Agerola NA
25. **Rossy Palace - Amalficoast Suites** — Agerola
   - slug: `rossy-palace-amalficoast-suites-agerola`
   - indirizzo: Via Belvedere, 13, 80051 Agerola NA
26. **Silvana's House** — Agerola
   - slug: `silvana-s-house-agerola`
   - indirizzo: Via Antonio Coppola, 61, 80051 San Lazzaro NA
27. **Terrazza 72 Deluxe Room & Breakfast** — Agerola
   - slug: `terrazza-72-deluxe-room-breakfast-agerola`
   - indirizzo: Via Miramare, 24/26, 80051 Agerola NA
28. **Zia Adele** — Agerola
   - slug: `zia-adele-agerola`
   - indirizzo: Via Antonio Coppola, 143, 80051 Pianillo NA
29. **Agriturismo Il Muto di Gallura** — Aggius
   - slug: `agriturismo-il-muto-di-gallura-aggius`
   - indirizzo: SP27, 07020 Aggius OT
30. **Al Vecchio Corso Locanda (B&B e Ristorante)** — Aggius
   - slug: `al-vecchio-corso-locanda-b-b-e-ristorante-aggius`
   - indirizzo: Via Roma, 96, 07029 Tempio Pausania OT
31. **B&B Camera & Caffè** — Aggius
   - slug: `b-b-camera-caffe-aggius`
   - indirizzo: Via Mentana, 5, 07029 Tempio Pausania OT
32. **B&b Da Silvestro** — Aggius
   - slug: `b-b-da-silvestro-aggius`
   - indirizzo: Via Belluno, 53, 07029 Tempio Pausania OT
33. **B&B La Tasgia** — Aggius
   - slug: `b-b-la-tasgia-aggius`
   - indirizzo: Loc, 07020 Bonaita OT
34. **B&B Letto&Latte** — Aggius
   - slug: `b-b-letto-latte-aggius`
   - indirizzo: Via Marsala, 11, 07029 Tempio Pausania OT
35. **B&B Lo Stazzo** — Aggius
   - slug: `b-b-lo-stazzo-aggius`
   - indirizzo: Località Bonaita, 11, 07020 Aggius OT