# Blocco 334/500 — 35 strutture senza descrizione IT

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

1. **Albergo Oberraut Ristorante** — Brunico/Bruneck
   - slug: `albergo-oberraut-ristorante-brunico-bruneck`
   - indirizzo: Via Ameto, 1, 39031 Brunico BZ
2. **Aparthotel Panorama** — Brunico/Bruneck
   - slug: `aparthotel-panorama-brunico-bruneck`
   - indirizzo: Via Gisse, 36, 39030 Gais BZ
3. **B&B Apartment Obermair** — Brunico/Bruneck
   - slug: `b-b-apartment-obermair-brunico-bruneck`
   - indirizzo: Via In der Sandgrube, 16, 39031 Riscone BZ
4. **B&B Niedermairhof** — Brunico/Bruneck
   - slug: `b-b-niedermairhof-brunico-bruneck`
   - indirizzo: Via Duca Teodone, 1, 39031 Brunico BZ
5. **Garni Hattlerhof B&B** — Brunico/Bruneck
   - slug: `garni-hattlerhof-b-b-brunico-bruneck`
   - indirizzo: Via Pipen, 2, 39031 Brunico BZ
6. **Garni Schorneck** — Brunico/Bruneck
   - slug: `garni-schorneck-brunico-bruneck`
   - indirizzo: Via Funivia, 11/a, 39031 Riscone BZ
7. **Gasthof Sonne** — Brunico/Bruneck
   - slug: `gasthof-sonne-brunico-bruneck`
   - indirizzo: Via Josef Renzler, 24, 39030 San Lorenzo di Sebato BZ
8. **Hotel ANDER** — Brunico/Bruneck
   - slug: `hotel-ander-brunico-bruneck`
   - indirizzo: Via Campo Tures, 1, 39031 Brunico BZ
9. **Hotel Bologna Brunico (BZ)** — Brunico/Bruneck
   - slug: `hotel-bologna-brunico-bz-brunico-bruneck`
   - indirizzo: Via Leonardo Da Vinci, 1, 39031 Brunico BZ
10. **Hotel Garni Hochgruber** — Brunico/Bruneck
   - slug: `hotel-garni-hochgruber-brunico-bruneck`
   - indirizzo: Via Funivia, 5, 39031 Brunico BZ
11. **Hotel Gissbach** — Brunico/Bruneck
   - slug: `hotel-gissbach-brunico-bruneck`
   - indirizzo: Via Gissbach, 27, 39031 Brunico BZ
12. **Hotel Krondlhof** — Brunico/Bruneck
   - slug: `hotel-krondlhof-brunico-bruneck`
   - indirizzo: Via Riscone, 35, 39031 Brunico BZ
13. **Hotel Krone** — Brunico/Bruneck
   - slug: `hotel-krone-brunico-bruneck`
   - indirizzo: Via Ragen di Sopra, 8, 39031 Brunico BZ
14. **Hotel Lindnerhof** — Brunico/Bruneck
   - slug: `hotel-lindnerhof-brunico-bruneck`
   - indirizzo: Santo Stefano, 40A, 39030 Brunico BZ
15. **Hotel Martha** — Brunico/Bruneck
   - slug: `hotel-martha-brunico-bruneck`
   - indirizzo: Via Harrasser, 11, 39031 Riscone BZ
16. **Hotel Post** — Brunico/Bruneck
   - slug: `hotel-post-brunico-bruneck`
   - indirizzo: Bastioni, 9, 39031 Brunico BZ
17. **Hotel Reischach** — Brunico/Bruneck
   - slug: `hotel-reischach-brunico-bruneck`
   - indirizzo: Via Prack Zu Asch, 10, 39031 Riscone BZ
18. **Hotel Restaurant Blitzburg** — Brunico/Bruneck
   - slug: `hotel-restaurant-blitzburg-brunico-bruneck`
   - indirizzo: Via Europa, 10, 39031 Brunico BZ
19. **Hotel Waldhof** — Brunico/Bruneck
   - slug: `hotel-waldhof-brunico-bruneck`
   - indirizzo: Via Sonnberg, 7, 39030 Perca BZ
20. **Affittacamere la Chicca di Sartoris Lorenzo Giovanni** — Bruno
   - slug: `affittacamere-la-chicca-di-sartoris-lorenzo-giov-bruno`
   - indirizzo: Via Sticca, 16, 15016 Cassine AL
21. **Azienda Agricola I Vigneti del Mandorlo di Mottura Stefano** — Bruno
   - slug: `azienda-agricola-i-vigneti-del-mandorlo-di-mottu-bruno`
   - indirizzo: Via Bella Parancone, 7, 14046 Mombaruzzo AT
22. **B&B Casa Allineri** — Bruno
   - slug: `b-b-casa-allineri-bruno`
   - indirizzo: Via Giovanni Maraldi, 37, 14043 Castelnuovo Belbo AT
23. **B&B Profumi** — Bruno
   - slug: `b-b-profumi-bruno`
   - indirizzo: Via Nizza, 15, 14040 Noche AT
24. **Cascina Scoviglio** — Bruno
   - slug: `cascina-scoviglio-bruno`
   - indirizzo: Via Bordina, 18, 14046 Mombaruzzo AT
25. **Monferrato Guest House - Casa Gabry** — Bruno
   - slug: `monferrato-guest-house-casa-gabry-bruno`
   - indirizzo: Via Baldizzone, 22, 14046 Bruno AT
26. **Joia Hotel & Luxury Apartments RTA** — Brusaporto
   - slug: `joia-hotel-luxury-apartments-rta-brusaporto`
   - indirizzo: Via Cascina la Cà, 24060 Brusaporto BG
27. **La Dimora Brusaporto - Da Vittorio** — Brusaporto
   - slug: `la-dimora-brusaporto-da-vittorio-brusaporto`
   - indirizzo: Via Cantalupa, 17, 24060 Brusaporto BG
28. **Orio Stay&Fly** — Brusaporto
   - slug: `orio-stay-fly-brusaporto`
   - indirizzo: Via IV Novembre, 2/C, 24050 Orio al Serio BG
29. **Agriturismo Casa Matilde** — Brusasco
   - slug: `agriturismo-casa-matilde-brusasco`
   - indirizzo: Via Giacomo Leopardi, 1, 10020 Lauriano TO
30. **Agriturismo Parva Domus** — Brusasco
   - slug: `agriturismo-parva-domus-brusasco`
   - indirizzo: Via Casa Porta, 51, 10020 Cavagnolo TO
31. **B&B Ca' dla Nona** — Brusasco
   - slug: `b-b-ca-dla-nona-brusasco`
   - indirizzo: Via Giulio Romano Vercelli, 115, 10020 Marcorengo TO
32. **B&B Ca' Solare** — Brusasco
   - slug: `b-b-ca-solare-brusasco`
   - indirizzo: Via Giulio Romano Vercelli, 15, 10020 Marcorengo TO
33. **Bed and Breakfast La Streghina Paolina** — Brusasco
   - slug: `bed-and-breakfast-la-streghina-paolina-brusasco`
   - indirizzo: via Monticelli, 36, 10020 Verrua Savoia TO
34. **Il Tiglio Affittacamere** — Brusasco
   - slug: `il-tiglio-affittacamere-brusasco`
   - indirizzo: Via Montechiaro, 18, 10020 Cavagnolo TO
35. **Tenuta al Monte** — Brusasco
   - slug: `tenuta-al-monte-brusasco`
   - indirizzo: Località Monte, 46, 10020 Verrua Savoia TO