# Blocco 460/500 — 35 strutture senza descrizione IT

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

1. **Domus Klara** — Casamassima
   - slug: `domus-klara-casamassima`
   - indirizzo: Via S. Paolo, 5, 70010 Turi BA
2. **Holiday Residence di Michele Lucente** — Casamassima
   - slug: `holiday-residence-di-michele-lucente-casamassima`
   - indirizzo: SP 65 Casamassima/ Conversano km3, 70010 Turi BA
3. **Hotel Esperia** — Casamassima
   - slug: `hotel-esperia-casamassima`
   - indirizzo: Via Giovanni Verga, 18, 70010 Sammichele di Bari BA
4. **La Casetta B&B** — Casamassima
   - slug: `la-casetta-b-b-casamassima`
   - indirizzo: Via Palombaro, 80, 70010 Turi BA
5. **La Maison** — Casamassima
   - slug: `la-maison-casamassima`
   - indirizzo: Via Antonio De Marinis, 2, 70021 Acquaviva delle Fonti BA
6. **La Torre del Tempo** — Casamassima
   - slug: `la-torre-del-tempo-casamassima`
   - indirizzo: Via Giuseppe Massari, 14, 70010 Turi BA
7. **Albergo l'Approdo** — Casamicciola Terme
   - slug: `albergo-l-approdo-casamicciola-terme`
   - indirizzo: Via Eddomade, 29, 80074 Casamicciola Terme NA
8. **B&B Verde** — Casamicciola Terme
   - slug: `b-b-verde-casamicciola-terme`
   - indirizzo: Via Fundera, 8, 80074 Casamicciola Terme NA
9. **ELMA Park Hotel Terme & Spa** — Casamicciola Terme
   - slug: `elma-park-hotel-terme-spa-casamicciola-terme`
   - indirizzo: Corso Vittorio Emanuele, 57, 80074 Casamicciola Terme NA
10. **Excelsior Mare Suites** — Casamicciola Terme
   - slug: `excelsior-mare-suites-casamicciola-terme`
   - indirizzo: Corso Luigi Manzi, 12, 80074 Casamicciola Terme NA
11. **GRIFO HOTEL CHARME & SPA** — Casamicciola Terme
   - slug: `grifo-hotel-charme-spa-casamicciola-terme`
   - indirizzo: Parnaso dello Spalatriello, 28, 80074 Casamicciola Terme NA
12. **Hotel Bel Tramonto** — Casamicciola Terme
   - slug: `hotel-bel-tramonto-casamicciola-terme`
   - indirizzo: Via Castanito, 124A, 80074 Casamicciola Terme NA
13. **Hotel Casa Di Meglio** — Casamicciola Terme
   - slug: `hotel-casa-di-meglio-casamicciola-terme`
   - indirizzo: Corso Vittorio Emanuele, 46, 80074 Casamicciola Terme NA
14. **Hotel e B&b Parco Conte Ischia** — Casamicciola Terme
   - slug: `hotel-e-b-b-parco-conte-ischia-casamicciola-terme`
   - indirizzo: Via Eddomade, 42, 80074 Casamicciola Terme NA
15. **Hotel La Madonnina** — Casamicciola Terme
   - slug: `hotel-la-madonnina-casamicciola-terme`
   - indirizzo: Via Salvatore Girardi, 8, 80074 Casamicciola Terme NA
16. **Hotel La Maggioressa** — Casamicciola Terme
   - slug: `hotel-la-maggioressa-casamicciola-terme`
   - indirizzo: Via Giuseppe Garibaldi, 29, 80074 Casamicciola Terme NA
17. **Hotel Pensione Monti** — Casamicciola Terme
   - slug: `hotel-pensione-monti-casamicciola-terme`
   - indirizzo: Calata Sant'Antonio, 7, 80074 Casamicciola Terme NA
18. **Hotel Terme Gran Paradiso** — Casamicciola Terme
   - slug: `hotel-terme-gran-paradiso-casamicciola-terme`
   - indirizzo: Via Principessa Margherita, 20, 80074 Casamicciola Terme NA
19. **Hotel Terme La Pergola & Villa Flavio** — Casamicciola Terme
   - slug: `hotel-terme-la-pergola-villa-flavio-casamicciola-terme`
   - indirizzo: Via Casa Mennella, 1, 80074 Casamicciola Terme NA
20. **Hotel Villa D’Orta** — Casamicciola Terme
   - slug: `hotel-villa-d-orta-casamicciola-terme`
   - indirizzo: Via Vicinale Castanito, 1, 80074 Casamicciola Terme NA
21. **Hotel Villa Fiorentina** — Casamicciola Terme
   - slug: `hotel-villa-fiorentina-casamicciola-terme`
   - indirizzo: Via Rotaro, 38, 80074 Casamicciola Terme NA
22. **Marina 10 design hotel&SPA** — Casamicciola Terme
   - slug: `marina-10-design-hotel-spa-casamicciola-terme`
   - indirizzo: Piazza Marina, 35, 80074 Casamicciola Terme NA
23. **Palazzo Manzi Terme & Spa** — Casamicciola Terme
   - slug: `palazzo-manzi-terme-spa-casamicciola-terme`
   - indirizzo: Piazza Bagni di Gurgitello, 4, 80074 Casamicciola Terme NA
24. **Paradise Relais Villa Jantò** — Casamicciola Terme
   - slug: `paradise-relais-villa-janto-casamicciola-terme`
   - indirizzo: Via Grande Sentinella, 32, 80074 Casamicciola Terme NA
25. **Stella Maris Terme** — Casamicciola Terme
   - slug: `stella-maris-terme-casamicciola-terme`
   - indirizzo: Via Salvatore Girardi, 21, 80074 Casamicciola Terme NA
26. **B&B La Corte** — Casandrino
   - slug: `b-b-la-corte-casandrino`
   - indirizzo: Via Cesare Battisti, 30, 80029 Sant'Antimo NA
27. **Hotel El Pamas** — Casandrino
   - slug: `hotel-el-pamas-casandrino`
   - indirizzo: Via Pietro Nenni, 29, 80018 Mugnano di Napoli NA
28. **Hotel Lento** — Casandrino
   - slug: `hotel-lento-casandrino`
   - indirizzo: Via Roma, 193, 80017 Melito di Napoli NA
29. **Hotel Runa** — Casandrino
   - slug: `hotel-runa-casandrino`
   - indirizzo: Via Pietro Nenni, 26, 80018 Mugnano di Napoli NA
30. **Hotel Stefano a Melito** — Casandrino
   - slug: `hotel-stefano-a-melito-casandrino`
   - indirizzo: Via Cristoforo Colombo, 12, 80017 Melito di Napoli NA
31. **Maison Comì** — Casandrino
   - slug: `maison-comi-casandrino`
   - indirizzo: Via Riscatto, 4, 80027 Frattamaggiore NA
32. **SAVIOR DELUXE ROOMS** — Casandrino
   - slug: `savior-deluxe-rooms-casandrino`
   - indirizzo: Via Umberto Zanotti Bianco, 3, 80144 Napoli NA
33. **Terra Mia Residence** — Casandrino
   - slug: `terra-mia-residence-casandrino`
   - indirizzo: Via Volpe, 6, 80018 Mugnano di Napoli NA
34. **Villa Chianese** — Casandrino
   - slug: `villa-chianese-casandrino`
   - indirizzo: Via XX Settembre, 24, 80145 Napoli NA
35. **Agriturismo A Canonica** — Casanova Lerrone
   - slug: `agriturismo-a-canonica-casanova-lerrone`
   - indirizzo: Borgata Benecci, 24, 17033 Casanova Lerrone SV