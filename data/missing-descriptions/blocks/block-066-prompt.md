# Blocco 66/500 — 35 strutture senza descrizione IT

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

1. **Hotel Sant'Ilario | Recharge with Renewables** — Aldeno
   - slug: `hotel-sant-ilario-recharge-with-renewables-aldeno`
   - indirizzo: V.le Trento, 68, 38068 Rovereto TN
2. **La Finestra sul Giardino - B&B** — Aldeno
   - slug: `la-finestra-sul-giardino-b-b-aldeno`
   - indirizzo: Via Sant' Uldarico, 13/B, 38073 Cavedine TN
3. **Villaggio Hotel Aquila** — Aldeno
   - slug: `villaggio-hotel-aquila-aldeno`
   - indirizzo: Via III Novembre, 11, 38060 Calliano TN
4. **Agriturismo Thomaserhof** — Aldino/Aldein
   - slug: `agriturismo-thomaserhof-aldino-aldein`
   - indirizzo: 39040 Stadt BZ, Italia
5. **Albergo Gasthof zur Mühle | Ristorante Pizzeria** — Aldino/Aldein
   - slug: `albergo-gasthof-zur-muhle-ristorante-pizzeria-aldino-aldein`
   - indirizzo: Via degli Olmi, 4, 39040 Ora BZ
6. **Albergo Genzianella** — Aldino/Aldein
   - slug: `albergo-genzianella-aldino-aldein`
   - indirizzo: Via Dolomiti, 3, 39040 San Lugano BZ
7. **Albergo Krone** — Aldino/Aldein
   - slug: `albergo-krone-aldino-aldein`
   - indirizzo: Dorf - Paese, 4, 39040 Aldino BZ
8. **Albergo Rosa** — Aldino/Aldein
   - slug: `albergo-rosa-aldino-aldein`
   - indirizzo: Piazza Diobono, 1, 39040 San Lugano BZ
9. **Albergo Schönblick** — Aldino/Aldein
   - slug: `albergo-schonblick-aldino-aldein`
   - indirizzo: Via Wildeich, 14, 39040 Aldino BZ
10. **ALBERGO STELLA - STERN** — Aldino/Aldein
   - slug: `albergo-stella-stern-aldino-aldein`
   - indirizzo: Via Centro, 18, 39050 Nova Ponente BZ
11. **berghoferin** — Aldino/Aldein
   - slug: `berghoferin-aldino-aldein`
   - indirizzo: Redagno di Sopra, 54, 39040 Redagno, Aldino BZ
12. **Gasthof Ebner Pfiffikus** — Aldino/Aldein
   - slug: `gasthof-ebner-pfiffikus-aldino-aldein`
   - indirizzo: 26 Dorf, 39040 Aldino BZ
13. **Gasthof/Albergo Rössl** — Aldino/Aldein
   - slug: `gasthof-albergo-rossl-aldino-aldein`
   - indirizzo: Via Centro, 2, 39050 Nova Ponente BZ
14. **Hotel Albero Verde** — Aldino/Aldein
   - slug: `hotel-albero-verde-aldino-aldein`
   - indirizzo: Via Pietralba, 82, 39055 Laives BZ
15. **Hotel Leonard** — Aldino/Aldein
   - slug: `hotel-leonard-aldino-aldein`
   - indirizzo: Località Pietralba, 4, 39050 Nova Ponente BZ
16. **Hotel Restaurant Brückenwirt Al Ponte** — Aldino/Aldein
   - slug: `hotel-restaurant-bruckenwirt-al-ponte-aldino-aldein`
   - indirizzo: Dolomitenstraße, Kalditsch Doladizza, 16 A, 39040 Montagna BZ
17. **Hotel zur Post - Vincenzo Degasperi** — Aldino/Aldein
   - slug: `hotel-zur-post-vincenzo-degasperi-aldino-aldein`
   - indirizzo: Largo Municipio, 29, 39044 Egna BZ
18. **Koflhof** — Aldino/Aldein
   - slug: `koflhof-aldino-aldein`
   - indirizzo: Eich Kofl, 4, 39040 Aldino BZ
19. **Panoramahotel Obkircher** — Aldino/Aldein
   - slug: `panoramahotel-obkircher-aldino-aldein`
   - indirizzo: Platzviertel, 6, 39050 Deutschnofen, Autonome Provinz Bozen - Südtirol
20. **Pension Stern** — Aldino/Aldein
   - slug: `pension-stern-aldino-aldein`
   - indirizzo: Dorf 30, 39040 Aldino BZ
21. **Rasterhof** — Aldino/Aldein
   - slug: `rasterhof-aldino-aldein`
   - indirizzo: Localita' Mitterstrich, 2, 39040 Aldino BZ
22. **Residence Hof Am Keller** — Aldino/Aldein
   - slug: `residence-hof-am-keller-aldino-aldein`
   - indirizzo: Via Pinzano, 15, 39040 Montagna sulla Strada del Vino BZ
23. **Ristorante Hotel Andreas Hofer** — Aldino/Aldein
   - slug: `ristorante-hotel-andreas-hofer-aldino-aldein`
   - indirizzo: Via Vecchie Fondamenta, 21/23, 39044 Egna BZ
24. **ABAS - Ristorante, pizzeria, affittacamere** — Ales
   - slug: `abas-ristorante-pizzeria-affittacamere-ales`
   - indirizzo: Corso Cattedrale, 62, 09091 Ales OR
25. **B&B di Luisa Ledda** — Ales
   - slug: `b-b-di-luisa-ledda-ales`
   - indirizzo: Vico Terzo, Corso Cattedrale, 3, 09091 Ales OR
26. **Blao Boutique Hotel** — Ales
   - slug: `blao-boutique-hotel-ales`
   - indirizzo: Via Giuseppe Mazzini, 112, 09170 Oristano OR
27. **Dimora del Chiostro** — Ales
   - slug: `dimora-del-chiostro-ales`
   - indirizzo: Via Carmine, 8, 09170 Oristano OR
28. **Feel Boutique Rooms** — Ales
   - slug: `feel-boutique-rooms-ales`
   - indirizzo: Galleria Felice Porcella, 4, 09170 Oristano OR
29. **Hotel Mistral** — Ales
   - slug: `hotel-mistral-ales`
   - indirizzo: Via Martiri di Belfiore, 2, 09170 Oristano OR
30. **Il Melograno Bed & Breakfast** — Ales
   - slug: `il-melograno-bed-breakfast-ales`
   - indirizzo: Via Giovanni Spano, 20, 09170 Oristano OR
31. **La Casetta Guest House** — Ales
   - slug: `la-casetta-guest-house-ales`
   - indirizzo: Via Azuni, 55, 09170 Oristano OR
32. **La Pavoncella b&b Oristano** — Ales
   - slug: `la-pavoncella-b-b-oristano-ales`
   - indirizzo: Via Palmas, 111, 09170 Oristano OR
33. **Maison Belle Époque & suites with pool** — Ales
   - slug: `maison-belle-epoque-suites-with-pool-ales`
   - indirizzo: Via Santa Chiara, 8, 09170 Oristano OR
34. **NIU Rooms** — Ales
   - slug: `niu-rooms-ales`
   - indirizzo: Via Tirso, 95, 09170 Oristano OR
35. **Notte di Luna** — Ales
   - slug: `notte-di-luna-ales`
   - indirizzo: Via Carmine, 17, 09170 Oristano OR