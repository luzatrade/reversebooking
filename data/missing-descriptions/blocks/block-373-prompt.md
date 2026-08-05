# Blocco 373/500 — 35 strutture senza descrizione IT

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

1. **CASA MIA GUESTHOUSE - AFFITTA CAMERE - FORESTERIA** — Calvatone
   - slug: `casa-mia-guesthouse-affitta-camere-foresteria-calvatone`
   - indirizzo: Via Favorita, 6, 26034 San Lorenzo Guazzone CR
2. **Corte Airone** — Calvatone
   - slug: `corte-airone-calvatone`
   - indirizzo: Strada Comunale per Isola Dovarese, 2, 26034 Castelfranco D'oglio CR
3. **Hotel Locanda Ca' Rossa** — Calvatone
   - slug: `hotel-locanda-ca-rossa-calvatone`
   - indirizzo: Via Palvarino, 5, 26037 San Giovanni in Croce CR
4. **La Casa nel Borgo** — Calvatone
   - slug: `la-casa-nel-borgo-calvatone`
   - indirizzo: Via della Vittoria, 21, 26034 Castelfranco D'oglio CR
5. **Ostello Castello Mina della Scala** — Calvatone
   - slug: `ostello-castello-mina-della-scala-calvatone`
   - indirizzo: Via Eugenio Montale, 2/10, 26030 Casteldidone CR
6. **Ristorante Hotel La Clochette** — Calvatone
   - slug: `ristorante-hotel-la-clochette-calvatone`
   - indirizzo: Via Giuseppina, 137, 26030 Solarolo Rainerio CR
7. **B&B Al Ponte** — Calvello
   - slug: `b-b-al-ponte-calvello`
   - indirizzo: Via Giuseppe Mazzini, 17, 85100 Potenza PZ
8. **B&b Geordie's** — Calvello
   - slug: `b-b-geordie-s-calvello`
   - indirizzo: V.le Guglielmo Marconi, 116, 85100 Potenza PZ
9. **B&B Zio Domenico** — Calvello
   - slug: `b-b-zio-domenico-calvello`
   - indirizzo: Contrada La Marmora, 7, 85050 Grumento Nova PZ
10. **La Locanda del Buon Formaggio** — Calvello
   - slug: `la-locanda-del-buon-formaggio-calvello`
   - indirizzo: Via Sandro Pertini, 39, 85050 Tito PZ
11. **Lucantò Accommodations** — Calvello
   - slug: `lucanto-accommodations-calvello`
   - indirizzo: Via Marsicovetere, 2, 85010 Calvello PZ
12. **Albergo Hotel Ristorante Miravalle** — Calvene
   - slug: `albergo-hotel-ristorante-miravalle-calvene`
   - indirizzo: Via Campiello, 94, 36010 Roana VI
13. **B&B Casa Pralunghi** — Calvene
   - slug: `b-b-casa-pralunghi-calvene`
   - indirizzo: Via Pralunghi, 21, 36030 Calvene VI
14. **CalVenere** — Calvene
   - slug: `calvenere-calvene`
   - indirizzo: Via Pozza, 5, 36030 Calvene VI
15. **Trattoria da Toi** — Calvene
   - slug: `trattoria-da-toi-calvene`
   - indirizzo: Via Sisemol, 38, 36063 Marostica VI
16. **Trattoria Locanda Alla Rosa** — Calvene
   - slug: `trattoria-locanda-alla-rosa-calvene`
   - indirizzo: Via Velo, 32, 36046 Lusiana Conco VI
17. **Agriturismo Castolda** — Calvenzano
   - slug: `agriturismo-castolda-calvenzano`
   - indirizzo: Via Castolda, 90, 24047 Treviglio BG
18. **Albergo Dimora Storica Ristorante Tre Re** — Calvenzano
   - slug: `albergo-dimora-storica-ristorante-tre-re-calvenzano`
   - indirizzo: Viale Giovanni XXIII, 23, 24043 Caravaggio BG
19. **B&B Ca' di Ae** — Calvenzano
   - slug: `b-b-ca-di-ae-calvenzano`
   - indirizzo: Via Maestri Giacinto, 5, 24040 Misano di Gera d'Adda BG
20. **Cascina Bassanella** — Calvenzano
   - slug: `cascina-bassanella-calvenzano`
   - indirizzo: Via Castolda, 88, 24047 Treviglio BG
21. **LOCANDA I TAROCCHI RISTO ALLOGGI & PIZZA** — Calvenzano
   - slug: `locanda-i-tarocchi-risto-alloggi-pizza-calvenzano`
   - indirizzo: Via G. Verdi, 18, 26019 Vailate CR
22. **Albergo Ristorante Bosco Magnano** — Calvera
   - slug: `albergo-ristorante-bosco-magnano-calvera`
   - indirizzo: 15, 85030 Taverna Magnano PZ
23. **Azienda Agrituristica CaRa Terra Lucana** — Calvera
   - slug: `azienda-agrituristica-cara-terra-lucana-calvera`
   - indirizzo: Contrada Mancuoso,, 85032 Chiaromonte PZ
24. **B&b Antica Dimora** — Calvera
   - slug: `b-b-antica-dimora-calvera`
   - indirizzo: Piazza Garibaldi, 37, 85032 Chiaromonte PZ
25. **B&B Casa Miraglia** — Calvera
   - slug: `b-b-casa-miraglia-calvera`
   - indirizzo: Via di Giura Giovanni, 20, 85032 Chiaromonte PZ
26. **B&B Il Mercantello** — Calvera
   - slug: `b-b-il-mercantello-calvera`
   - indirizzo: via Antonio Lauria, 85032 Teana PZ
27. **B&B La Cannalia** — Calvera
   - slug: `b-b-la-cannalia-calvera`
   - indirizzo: CONTRADA CANNALIA, 85032 Teana PZ
28. **B&b Mille e una Notte** — Calvera
   - slug: `b-b-mille-e-una-notte-calvera`
   - indirizzo: Contrada Taverna Magnano, 20, 85030 San Severino Lucano PZ
29. **BioAgriturismo Tenuta Montenuovo** — Calvera
   - slug: `bioagriturismo-tenuta-montenuovo-calvera`
   - indirizzo: C.da Montenuovo, snc, 85030 Calvera PZ
30. **Hotel Mercure Di Sproviero** — Calvera
   - slug: `hotel-mercure-di-sproviero-calvera`
   - indirizzo: Via Roma, 34, 85040 Castelluccio Inferiore PZ
31. **Hotel Ristorante Pino Loricato** — Calvera
   - slug: `hotel-ristorante-pino-loricato-calvera`
   - indirizzo: Via Nazionale, 11, 85040 Castelluccio Inferiore PZ
32. **I fiori del Pollino - Guest House** — Calvera
   - slug: `i-fiori-del-pollino-guest-house-calvera`
   - indirizzo: C.da Celani, n° 33, 85030 San Severino Lucano PZ
33. **San Raffaele Hotel Restaurant & Resort** — Calvera
   - slug: `san-raffaele-hotel-restaurant-resort-calvera`
   - indirizzo: Via Pastani, 83, 85040 Castelluccio Superiore PZ
34. **Villa RosaMaria** — Calvera
   - slug: `villa-rosamaria-calvera`
   - indirizzo: Via Pontini, 12, 85030 San Chirico Raparo PZ
35. **B&B Martina** — Calvi
   - slug: `b-b-martina-calvi`
   - indirizzo: Via Nazionale, 31, 83036 Passo di Mirabella-pianopantano AV