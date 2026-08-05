# Blocco 380/500 — 35 strutture senza descrizione IT

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

1. **Sabbia D'oro Hotel** — Camini
   - slug: `sabbia-d-oro-hotel-camini`
   - indirizzo: Via Europa, Lungomare Cristoforo Colombo, 20, 89046 Marina di Gioiosa Ionica RC
2. **Agriturismo Cà San Sebastiano** — Camino
   - slug: `agriturismo-ca-san-sebastiano-camino`
   - indirizzo: Via Ombra, 10/12, 15020 Camino AL
3. **Bricco Bed&bike** — Camino
   - slug: `bricco-bed-bike-camino`
   - indirizzo: Via Bricco, 10, 15020 Odalengo Grande AL
4. **Ca Villa Club Agriturismo** — Camino
   - slug: `ca-villa-club-agriturismo-camino`
   - indirizzo: Via Santo Stefano, 19, 15020 Gabiano AL
5. **CA' MARTINA** — Camino
   - slug: `ca-martina-camino`
   - indirizzo: Via della Parrocchia, 21, 15020 Camino AL
6. **Canonica dei Templari** — Camino
   - slug: `canonica-dei-templari-camino`
   - indirizzo: Via Montesion, 63, 15020 Camino AL
7. **Dubini** — Camino
   - slug: `dubini-camino`
   - indirizzo: Via Roma, 34, 15020 Mombello Monferrato AL
8. **Lilelo - Little Leisure Lodge** — Camino
   - slug: `lilelo-little-leisure-lodge-camino`
   - indirizzo: Viale Pininfarina, 40, 14035 Grazzano Badoglio AT
9. **Palazzo Tornielli** — Camino
   - slug: `palazzo-tornielli-camino`
   - indirizzo: Via Roma, 79, 15020 Mombello Monferrato AL
10. **Resort Castello di Gabiano** — Camino
   - slug: `resort-castello-di-gabiano-camino`
   - indirizzo: Via S. Defendente, 15020 Gabiano AL
11. **Tenuta Monvillone Country House & Restaurant** — Camino
   - slug: `tenuta-monvillone-country-house-restaurant-camino`
   - indirizzo: Via Alla Stazione, 32, 15020 Cereseto AL
12. **TORNOSUBITO MOLETO** — Camino
   - slug: `tornosubito-moleto-camino`
   - indirizzo: Frazione Moleto Basso, 8, 15038 Moleto AL
13. **Torre Veglio** — Camino
   - slug: `torre-veglio-camino`
   - indirizzo: Strada Folegna, 15030 Terruggia AL
14. **Agriturismo Villa Mainardi** — Camino al Tagliamento
   - slug: `agriturismo-villa-mainardi-camino-al-tagliamento`
   - indirizzo: Località Gorizzo, 31, 33030 Gorizzo UD
15. **B&B Villa Francesca** — Camino al Tagliamento
   - slug: `b-b-villa-francesca-camino-al-tagliamento`
   - indirizzo: Via Tagliamento, 34, 33030 Camino Al Tagliamento UD
16. **Borgo dei Conti della Torre** — Camino al Tagliamento
   - slug: `borgo-dei-conti-della-torre-camino-al-tagliamento`
   - indirizzo: Via Ponte Madrisio, 13, 33075 Morsano al Tagliamento PN
17. **Hotel Bella Venezia** — Camino al Tagliamento
   - slug: `hotel-bella-venezia-camino-al-tagliamento`
   - indirizzo: Via del Marinaio, 3, 33053 Latisana UD
18. **La di Morson** — Camino al Tagliamento
   - slug: `la-di-morson-camino-al-tagliamento`
   - indirizzo: Via Molino, 27, 33030 Camino al Tagliamento UD
19. **Locanda Forchir** — Camino al Tagliamento
   - slug: `locanda-forchir-camino-al-tagliamento`
   - indirizzo: Località Gorizzo, 26, 33030 Camino al Tagliamento UD
20. **Agriturismo La Moneghina** — Camisano Vicentino
   - slug: `agriturismo-la-moneghina-camisano-vicentino`
   - indirizzo: 36040, Via Monache, 7, 36040 Grumolo delle Abbadesse VI
21. **B&B Bagni di sole** — Camisano Vicentino
   - slug: `b-b-bagni-di-sole-camisano-vicentino`
   - indirizzo: Via Moia, 1, 35010 Campo San Martino PD
22. **Bed and Breakfast Casarosa** — Camisano Vicentino
   - slug: `bed-and-breakfast-casarosa-camisano-vicentino`
   - indirizzo: Via Boschiera, 43, 35016 Piazzola sul Brenta PD
23. **Casa Amigos 2** — Camisano Vicentino
   - slug: `casa-amigos-2-camisano-vicentino`
   - indirizzo: Via Torrossa, 20, 36043 Camisano Vicentino VI
24. **Fattoria Grimana** — Camisano Vicentino
   - slug: `fattoria-grimana-camisano-vicentino`
   - indirizzo: Via Zocco, 101, 36047 Montegalda VI
25. **Hotel Posta 77** — Camisano Vicentino
   - slug: `hotel-posta-77-camisano-vicentino`
   - indirizzo: Via Andrea Palladio, 6, 35010 San Giorgio in Bosco PD
26. **HOTEL VENICE** — Camisano Vicentino
   - slug: `hotel-venice-camisano-vicentino`
   - indirizzo: Via F. Beggiato, 56, 36040 Grisignano di Zocco VI
27. **La Casa Vecchia B&B** — Camisano Vicentino
   - slug: `la-casa-vecchia-b-b-camisano-vicentino`
   - indirizzo: Via Palazzon, 7/A, 36043 Camisano Vicentino VI
28. **Little House** — Camisano Vicentino
   - slug: `little-house-camisano-vicentino`
   - indirizzo: Piazza G.Marconi, 29, 35010 Campo San Martino PD
29. **Affittacamere vistuta di vua** — Cammarata
   - slug: `affittacamere-vistuta-di-vua-cammarata`
   - indirizzo: Via Teatro, 33, 92020 San Giovanni Gemini AG
30. **Agriturismo Lago Verde srl società agricola** — Cammarata
   - slug: `agriturismo-lago-verde-srl-societa-agricola-cammarata`
   - indirizzo: Contrada Timpi, 90021 Alia PA
31. **MikAle Luxury Rooms** — Cammarata
   - slug: `mikale-luxury-rooms-cammarata`
   - indirizzo: Via de Gregorio, 5, 92025 Casteltermini AG
32. **Albergo Augusta Camogli hotel** — Camogli
   - slug: `albergo-augusta-camogli-hotel-camogli`
   - indirizzo: Via Piero Schiaffino, 100, 16032 Camogli GE
33. **Albergo Soggiorno Selene** — Camogli
   - slug: `albergo-soggiorno-selene-camogli`
   - indirizzo: Via Nicolò Cuneo, 16, 16032 Camogli GE
34. **B&B Casa Ninni** — Camogli
   - slug: `b-b-casa-ninni-camogli`
   - indirizzo: Via Enrico Figari, 67, 16032 Camogli GE
35. **B&b Il pesce doro** — Camogli
   - slug: `b-b-il-pesce-doro-camogli`
   - indirizzo: Via della Repubblica, 144/10, 16032 Camogli GE