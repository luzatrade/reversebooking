# Blocco 169/500 — 35 strutture senza descrizione IT

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

1. **Bed & Breakfast Il Vecchio Ginepro** — Assemini
   - slug: `bed-breakfast-il-vecchio-ginepro-assemini`
   - indirizzo: Via Bologna, 78, 09012 Capoterra CA
2. **Corte Boero Bed&Breakfast - Eventi** — Assemini
   - slug: `corte-boero-bed-breakfast-eventi-assemini`
   - indirizzo: SP 1 Località Santa Lucia Uta, 09010, 09068 Uta CA
3. **Hotel Grillo** — Assemini
   - slug: `hotel-grillo-assemini`
   - indirizzo: Via Carmine, 132, 09032 Assemini CA
4. **HOTEL ROSA** — Assemini
   - slug: `hotel-rosa-assemini`
   - indirizzo: Via Venezia, 47, 09012 Capoterra CA
5. **Il Roseto Affitti Brevi** — Assemini
   - slug: `il-roseto-affitti-brevi-assemini`
   - indirizzo: Via Campidano, 20, 09032 Assemini CA
6. **Mansio Airport Hotel & Residence** — Assemini
   - slug: `mansio-airport-hotel-residence-assemini`
   - indirizzo: Via Salvio Argiolas, 3, 09067 Elmas CA
7. **The Orange House** — Assemini
   - slug: `the-orange-house-assemini`
   - indirizzo: Via Toscana, 3, 09032 Assemini CA
8. **Villa Mostallino Affittacamere** — Assemini
   - slug: `villa-mostallino-affittacamere-assemini`
   - indirizzo: Via Principe di Piemonte, 6, 09032 Assemini CA
9. **Agriturismo La Piaggia - Assisi** — Assisi
   - slug: `agriturismo-la-piaggia-assisi-assisi`
   - indirizzo: Viale Giovanna di Savoia, 3, 06181 Assisi PG, Italia
10. **Albergo Anna** — Assisi
   - slug: `albergo-anna-assisi`
   - indirizzo: Via dei Priori, 48, 06123 Perugia PG, Italia
11. **Antico Borgo Assisi Bed and Breakfast** — Assisi
   - slug: `antico-borgo-assisi-bed-and-breakfast-assisi`
   - indirizzo: V. Petrata, 21, 06181 Assisi PG, Italia
12. **B&B Il Chiostro** — Assisi
   - slug: `b-b-il-chiostro-assisi`
   - indirizzo: Via Borgo Aretino, 1, 06181 Assisi PG, Italia
13. **B&B Il Rifugio** — Assisi
   - slug: `b-b-il-rifugio-assisi`
   - indirizzo: Via Mario Poletti, 34 (Loc.Ospedalicchio di, 06083 Bastia Umbra PG, Italia
14. **B&B Lavanda e Rosmarino** — Assisi
   - slug: `b-b-lavanda-e-rosmarino-assisi`
   - indirizzo: Via di Mezzo, 8, 06181 Assisi PG, Italia
15. **B&B New Day** — Assisi
   - slug: `b-b-new-day-assisi`
   - indirizzo: Via S. Francesco, 18, 06181 Assisi PG, Italia
16. **B&B Raffiori** — Assisi
   - slug: `b-b-raffiori-assisi`
   - indirizzo: Via Protomartiri Francescani, 84, 06181 Assisi PG, Italia
17. **B&B Residenza La Corte Assisi** — Assisi
   - slug: `b-b-residenza-la-corte-assisi-assisi`
   - indirizzo: Via del Pozzo della Mensa, 27, 06181 Assisi PG, Italia
18. **Bed and Breakfast - La Via Francigena - Assisi** — Assisi
   - slug: `bed-and-breakfast-la-via-francigena-assisi-assisi`
   - indirizzo: Via Romana, 82, 06181 Assisi PG, Italia
19. **Bed And Breakfast Barbara Assisi** — Assisi
   - slug: `bed-and-breakfast-barbara-assisi-assisi`
   - indirizzo: Vocabolo Bevagna, 29, 06033 Cannara PG, Italia
20. **Domus Mariae B&B Assisi** — Assisi
   - slug: `domus-mariae-b-b-assisi-assisi`
   - indirizzo: Viale Giovanni XXIII, 29, 06181 Assisi PG, Italia
21. **Hotel Lieto Soggiorno** — Assisi
   - slug: `hotel-lieto-soggiorno-assisi`
   - indirizzo: Via Arnaldo Fortini, 26, 06181 Assisi PG, Italia
22. **Hotel Pallotta Assisi** — Assisi
   - slug: `hotel-pallotta-assisi-assisi`
   - indirizzo: Via S. Rufino, 6, 06181 Assisi PG, Italia
23. **Hotel San Rufino** — Assisi
   - slug: `hotel-san-rufino-assisi`
   - indirizzo: Via Porta Perlici, 7, 06181 Assisi PG, Italia
24. **Il Fienile Di Assisi** — Assisi
   - slug: `il-fienile-di-assisi-assisi`
   - indirizzo: Via della Madonnina, 3., Castelnuovo di Assisi., 06181 Assisi PG, Italia
25. **Sogni d'Assisi B&B** — Assisi
   - slug: `sogni-d-assisi-b-b-assisi`
   - indirizzo: Via S. Benedetto, 15, 06181 Assisi PG, Italia
26. **Vico Del Poeta** — Assisi
   - slug: `vico-del-poeta-assisi`
   - indirizzo: Via Giovanni Jorgensen, 6, 06181 Assisi PG, Italia
27. **Villa Clara Assisi** — Assisi
   - slug: `villa-clara-assisi-assisi`
   - indirizzo: Via Beviglie, 41, 06181 Tordibetto PG, Italia
28. **Villa Luce Assisi Rooms & Suites** — Assisi
   - slug: `villa-luce-assisi-rooms-suites-assisi`
   - indirizzo: Via Giuseppe Leonelli, 4, 06181 Santa Maria degli Angeli PG, Italia
29. **Agriturismo Crotto Di Somana** — Asso
   - slug: `agriturismo-crotto-di-somana-asso`
   - indirizzo: Piazza Monsignor Clemente Gaddi, 23826 Mandello del Lario LC
30. **Albergo Ristorante Miravalle** — Asso
   - slug: `albergo-ristorante-miravalle-asso`
   - indirizzo: Via Pian del Tivano, 27, 22030 Sormano CO
31. **Albergo Ristorante Sala - Spa** — Asso
   - slug: `albergo-ristorante-sala-spa-asso`
   - indirizzo: Via Vittorio Veneto, 21, 22039 Valbrona CO
32. **b&b Al Pozzo** — Asso
   - slug: `b-b-al-pozzo-asso`
   - indirizzo: 23862 Civate LC, Italia
33. **B&B Big Family** — Asso
   - slug: `b-b-big-family-asso`
   - indirizzo: Via Boschetto, 6, 23867 Suello LC
34. **B&B La Pusianella** — Asso
   - slug: `b-b-la-pusianella-asso`
   - indirizzo: Via Giuseppe Mazzini, 22, 22030 Pusiano CO
35. **Bed&Bike Ghisallo** — Asso
   - slug: `bed-bike-ghisallo-asso`
   - indirizzo: V. Milano, 54, 22030 Magreglio CO