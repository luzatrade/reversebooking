# Blocco 221/500 — 35 strutture senza descrizione IT

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

1. **Solho Hotel 4 stelle S** — Bardolino
   - slug: `solho-hotel-4-stelle-s-bardolino`
   - indirizzo: Via Borgo Cavour, 38, 37011 Bardolino VR
2. **Wanderlust Hotel Bardolino** — Bardolino
   - slug: `wanderlust-hotel-bardolino-bardolino`
   - indirizzo: Via Marconi, 11, 37011 Bardolino VR
3. **Ca' Fiore Hotel** — Bardonecchia
   - slug: `ca-fiore-hotel-bardonecchia`
   - indirizzo: Via Campo Principe, 4, 10052 Bardonecchia TO
4. **Case Verdi Bardonecchia** — Bardonecchia
   - slug: `case-verdi-bardonecchia-bardonecchia`
   - indirizzo: Via Cesare Battisti, 1, 10052 Bardonecchia TO
5. **Chalet Bellevue, hotel meublé** — Bardonecchia
   - slug: `chalet-bellevue-hotel-meuble-bardonecchia`
   - indirizzo: Str. Millaures, 17 bis, 10052 Bardonecchia TO
6. **Cicapuy** — Bardonecchia
   - slug: `cicapuy-bardonecchia`
   - indirizzo: Via Puy, 39, 10056 Oulx TO
7. **HOTEL BUCANEVE** — Bardonecchia
   - slug: `hotel-bucaneve-bardonecchia`
   - indirizzo: Viale G. dalla Vecchia, 2, 10052 Bardonecchia TO
8. **Hotel Etoile Des Neiges** — Bardonecchia
   - slug: `hotel-etoile-des-neiges-bardonecchia`
   - indirizzo: Frazione Jouvenceaux, 24B, 10050 Sauze d'Oulx TO
9. **Hotel Europa - Hotel Bardonecchia** — Bardonecchia
   - slug: `hotel-europa-hotel-bardonecchia-bardonecchia`
   - indirizzo: Via la Rho, 80/82, 10052 Bardonecchia TO
10. **Hotel Gran Baita** — Bardonecchia
   - slug: `hotel-gran-baita-bardonecchia`
   - indirizzo: Via Villaggio Alpino, 21, 10050 Sauze d'Oulx TO
11. **Hotel K2- Restaurant & Bar** — Bardonecchia
   - slug: `hotel-k2-restaurant-bar-bardonecchia`
   - indirizzo: Via Villaggio Alpino, 1, 10050 Sauze d'Oulx TO
12. **Hotel La Nigritella Bardonecchia** — Bardonecchia
   - slug: `hotel-la-nigritella-bardonecchia-bardonecchia`
   - indirizzo: Via Melezet, 96, 10052 Bardonecchia TO
13. **Hotel Relais des Alpes** — Bardonecchia
   - slug: `hotel-relais-des-alpes-bardonecchia`
   - indirizzo: Piazza III Reggimento Alpini, 24, 10050 Sauze d'Oulx TO
14. **Hotel Rosa Serenella Bar.** — Bardonecchia
   - slug: `hotel-rosa-serenella-bar-bardonecchia`
   - indirizzo: www.hotelrosaserenella.net, Viale della Vittoria, 37, 10052 Bardonecchia TO
15. **Hotel Sommeiller** — Bardonecchia
   - slug: `hotel-sommeiller-bardonecchia`
   - indirizzo: Piazza Statuto, 3, 10052 Bardonecchia TO
16. **Hotel Villa Myosotis - Ristorante Biovey Bardonecchia** — Bardonecchia
   - slug: `hotel-villa-myosotis-ristorante-biovey-bardonecc-bardonecchia`
   - indirizzo: Via Gen. Cantore, 2, 10052 Bardonecchia TO
17. **Residence "La Tana del Ghiro"** — Bardonecchia
   - slug: `residence-la-tana-del-ghiro-bardonecchia`
   - indirizzo: Via Giovanni Giolitti, 12, 10052 Bardonecchia TO
18. **Residence LES LACS** — Bardonecchia
   - slug: `residence-les-lacs-bardonecchia`
   - indirizzo: Via Stazione, 4, 10052 Bardonecchia TO
19. **Residence Tabor** — Bardonecchia
   - slug: `residence-tabor-bardonecchia`
   - indirizzo: Via Stazione, 6, 10052 Bardonecchia TO
20. **Residence Villa Frejus** — Bardonecchia
   - slug: `residence-villa-frejus-bardonecchia`
   - indirizzo: Viale della Vittoria, 12, 10052 Bardonecchia TO
21. **Rivé Hotel** — Bardonecchia
   - slug: `rive-hotel-bardonecchia`
   - indirizzo: 10052 Bardonecchia TO
22. **Savoia Mountain Resort** — Bardonecchia
   - slug: `savoia-mountain-resort-bardonecchia`
   - indirizzo: Località Fregiusia, 10052 Bardonecchia TO
23. **AB&B LEONARDO** — Bareggio
   - slug: `ab-b-leonardo-bareggio`
   - indirizzo: Via Torino, 40, 20017 Rho MI
24. **B&B Agriturismo Cascina la Palazzina** — Bareggio
   - slug: `b-b-agriturismo-cascina-la-palazzina-bareggio`
   - indirizzo: Via la Palazzina, 3, 20080 Albairate MI
25. **B&B dei Gemelli** — Bareggio
   - slug: `b-b-dei-gemelli-bareggio`
   - indirizzo: Via Martiri della Libertà, 42/44, 20008 Bareggio MI
26. **B&B I Due Leoni** — Bareggio
   - slug: `b-b-i-due-leoni-bareggio`
   - indirizzo: Via Filanda, 10, 20007 Cornaredo MI
27. **B&B La Tartaruga Srl** — Bareggio
   - slug: `b-b-la-tartaruga-srl-bareggio`
   - indirizzo: Largo Roma, 17, 20006 Pregnana Milanese MI
28. **B&B LE CAMELIE BAREGGIO** — Bareggio
   - slug: `b-b-le-camelie-bareggio-bareggio`
   - indirizzo: Via Isonzo, 23, 20008 Brughiera MI
29. **B&B Lo Smeraldo** — Bareggio
   - slug: `b-b-lo-smeraldo-bareggio`
   - indirizzo: Via S. Protaso, 35, 20008 Bareggio MI
30. **Hotel Esperia** — Bareggio
   - slug: `hotel-esperia-bareggio`
   - indirizzo: Piazza della Libertà, 2, 20017 Rho MI
31. **Hotel Vecchio Convento** — Bareggio
   - slug: `hotel-vecchio-convento-bareggio`
   - indirizzo: Via Alcide De Gasperi, 65, 20008 Bareggio MI
32. **Idea Hotel Milano San Siro** — Bareggio
   - slug: `idea-hotel-milano-san-siro-bareggio`
   - indirizzo: Via Gaetano Airaghi, 125, 20153 Milano MI
33. **Settimotel** — Bareggio
   - slug: `settimotel-bareggio`
   - indirizzo: Strada Provinciale ex Strada Statale 11 Km 130/776, 20019 Settimo Milanese MI
34. **soggiorni al casolare** — Bareggio
   - slug: `soggiorni-al-casolare-bareggio`
   - indirizzo: Via Cornaredo, 21, 20006 Pregnana Milanese MI
35. **"la locanda" di Perico Paola** — Barengo
   - slug: `la-locanda-di-perico-paola-barengo`
   - indirizzo: Via Revislate, 4/1° piano, 28013 Gattico-Veruno NO