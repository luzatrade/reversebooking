# Blocco 349/500 — 35 strutture senza descrizione IT

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

1. **B&B MariAldo** — Bussoleno
   - slug: `b-b-marialdo-bussoleno`
   - indirizzo: Via Giuseppe Garibaldi, 3A, 10053 Bussoleno TO
2. **Residence Madamin** — Bussoleno
   - slug: `residence-madamin-bussoleno`
   - indirizzo: Via Mentoulles, 9, 10060 Granges TO
3. **3per3** — Busto Arsizio
   - slug: `3per3-busto-arsizio`
   - indirizzo: Viale Boccaccio, 152, 21052 Busto Arsizio VA
4. **ANGOLO DI ISA** — Busto Arsizio
   - slug: `angolo-di-isa-busto-arsizio`
   - indirizzo: Via Alvise Cadamosto, 8, 21052 Busto Arsizio VA
5. **Antica Corte Room&Breakfast** — Busto Arsizio
   - slug: `antica-corte-room-breakfast-busto-arsizio`
   - indirizzo: Vicolo Custodi, 3, 21052 Busto Arsizio VA
6. **Antico Giardino - Residence** — Busto Arsizio
   - slug: `antico-giardino-residence-busto-arsizio`
   - indirizzo: Via Lodovico Antonio Muratori, 30, 21052 Busto Arsizio VA
7. **B&B GIET** — Busto Arsizio
   - slug: `b-b-giet-busto-arsizio`
   - indirizzo: Via Taormina, 26, 21052 Busto Arsizio VA
8. **B&B SouthItaly** — Busto Arsizio
   - slug: `b-b-southitaly-busto-arsizio`
   - indirizzo: n, Via Fratelli di Dio, 29, 21052 Busto Arsizio VA
9. **Bed&Breakfast Milano Malpensa** — Busto Arsizio
   - slug: `bed-breakfast-milano-malpensa-busto-arsizio`
   - indirizzo: Via Valsugana, 4, 21052 Busto Arsizio VA
10. **De Piante Guest House** — Busto Arsizio
   - slug: `de-piante-guest-house-busto-arsizio`
   - indirizzo: Via S. Francesco, 1, 21052 Busto Arsizio VA
11. **Hotel D120** — Busto Arsizio
   - slug: `hotel-d120-busto-arsizio`
   - indirizzo: Via Armando Diaz, 120, 21057 Olgiate Olona VA
12. **Hotel Espana** — Busto Arsizio
   - slug: `hotel-espana-busto-arsizio`
   - indirizzo: Viale Boccaccio, 174, 21052 Busto Arsizio VA
13. **Hotel Pineta** — Busto Arsizio
   - slug: `hotel-pineta-busto-arsizio`
   - indirizzo: Corso Sempione, 150, 21052 Busto Arsizio VA
14. **Lo sciuro** — Busto Arsizio
   - slug: `lo-sciuro-busto-arsizio`
   - indirizzo: Via Magenta, 61, 21052 Busto Arsizio VA
15. **Location Lory S.N.C Bed And Breakfast Busto Arsizio** — Busto Arsizio
   - slug: `location-lory-s-n-c-bed-and-breakfast-busto-arsi-busto-arsizio`
   - indirizzo: Via Mogadiscio, 3/bis, Via Mogadiscio, 3, 21052 Busto Arsizio VA
16. **Loft Matteotti** — Busto Arsizio
   - slug: `loft-matteotti-busto-arsizio`
   - indirizzo: Via Matteotti, 8, 21052 Busto Arsizio VA
17. **MO.OM Hotel** — Busto Arsizio
   - slug: `mo-om-hotel-busto-arsizio`
   - indirizzo: Via S. Francesco D'Assisi, 15, 21057 Olgiate Olona VA
18. **Serendipity Guest Rooms_Foresteria Lombarda** — Busto Arsizio
   - slug: `serendipity-guest-rooms-foresteria-lombarda-busto-arsizio`
   - indirizzo: Via Statuto, 11, 21052 Busto Arsizio VA
19. **bed and breakfast Orchidea** — Busto Garolfo
   - slug: `bed-and-breakfast-orchidea-busto-garolfo`
   - indirizzo: Via San Pietro, 43, 20038 Busto Garolfo MI
20. **Hotel Motel City** — Busto Garolfo
   - slug: `hotel-motel-city-busto-garolfo`
   - indirizzo: Via Papa Giovanni XXIII, 1, 20023 Legnano MI
21. **Poli Hotel** — Busto Garolfo
   - slug: `poli-hotel-busto-garolfo`
   - indirizzo: SS33 del Sempione, 241, 20028 San Vittore Olona MI
22. **UNA Hotels Malpensa** — Busto Garolfo
   - slug: `una-hotels-malpensa-busto-garolfo`
   - indirizzo: Via F. Turati, 84, 20023 Cerro Maggiore MI
23. **Affittacamere Il Cortile** — Butera
   - slug: `affittacamere-il-cortile-butera`
   - indirizzo: Corso Vittorio Emanuele II, 142, 93013 Mazzarino CL
24. **Agriturismo ALPA Mazzarino** — Butera
   - slug: `agriturismo-alpa-mazzarino-butera`
   - indirizzo: C.da Contrasto, 93013 Mazzarino CL
25. **B&B Falconara** — Butera
   - slug: `b-b-falconara-butera`
   - indirizzo: SS 115 km 242.600, 93011 Butera CL
26. **B&B La colonna Dorica** — Butera
   - slug: `b-b-la-colonna-dorica-butera`
   - indirizzo: Corso Vittorio Emanuele, 67, 93012 Gela CL
27. **B&B Villa Sara Falconara** — Butera
   - slug: `b-b-villa-sara-falconara-butera`
   - indirizzo: SS115, 93011 Butera CL
28. **Desusino Residence & Hotel** — Butera
   - slug: `desusino-residence-hotel-butera`
   - indirizzo: Strada Statale 115, Km 245, 93011 Butera CL
29. **Falconara Greenblu Resort** — Butera
   - slug: `falconara-greenblu-resort-butera`
   - indirizzo: SS115, 93011 Butera CL
30. **Hotel Lido degli Angeli** — Butera
   - slug: `hotel-lido-degli-angeli-butera`
   - indirizzo: SS 115 km 242.600 Contrada Faino, 93011 Butera CL
31. **Hotel Ristorante Pasticceria Sombrero Licata** — Butera
   - slug: `hotel-ristorante-pasticceria-sombrero-licata-butera`
   - indirizzo: SS115 c.da safarello, 92027 Licata AG
32. **Hotel Sileno** — Butera
   - slug: `hotel-sileno-butera`
   - indirizzo: Largo Mancino Soldato, 93012 Gela CL
33. **Hotel Sole Alberghi** — Butera
   - slug: `hotel-sole-alberghi-butera`
   - indirizzo: Via Mare, 32, 93012 Gela CL
34. **IL Portico dei Normanni** — Butera
   - slug: `il-portico-dei-normanni-butera`
   - indirizzo: Piazza Dante Alighieri, 15, 93011 Butera CL
35. **Lilium In** — Butera
   - slug: `lilium-in-butera`
   - indirizzo: Via Sicani, 93012 Gela CL