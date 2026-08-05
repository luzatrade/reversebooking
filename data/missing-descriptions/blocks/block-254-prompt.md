# Blocco 254/500 — 35 strutture senza descrizione IT

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

1. **B&B Casa del Sole** — Bene Lario
   - slug: `b-b-casa-del-sole-bene-lario`
   - indirizzo: Via G, Via Carlo Galbiati, 4, 22010 Grandola ed Uniti CO
2. **B&B La Marinella** — Bene Lario
   - slug: `b-b-la-marinella-bene-lario`
   - indirizzo: Via Osteno, 29, 22018 Porlezza CO
3. **B&B Peonia** — Bene Lario
   - slug: `b-b-peonia-bene-lario`
   - indirizzo: Via Ghiacciaia, 5, 22018 Porlezza CO
4. **Fiore Gottro** — Bene Lario
   - slug: `fiore-gottro-bene-lario`
   - indirizzo: 143, Via S. Giorgio, 22010 Carlazzo CO
5. **Foresteria BB Sul Lago** — Bene Lario
   - slug: `foresteria-bb-sul-lago-bene-lario`
   - indirizzo: Lungo Lago Giacomo Matteotti, 19a, 22018 Porlezza CO
6. **Garden Rooms** — Bene Lario
   - slug: `garden-rooms-bene-lario`
   - indirizzo: Via Armando Diaz, 30, 22017 Menaggio CO
7. **Hotel Bellavista** — Bene Lario
   - slug: `hotel-bellavista-bene-lario`
   - indirizzo: Via IV Novembre, 21, 22017 Menaggio CO
8. **Hotel Loveno 2 stars** — Bene Lario
   - slug: `hotel-loveno-2-stars-bene-lario`
   - indirizzo: Via N. Sauro, 55, 22017 Menaggio CO
9. **Hotel Merloni** — Bene Lario
   - slug: `hotel-merloni-bene-lario`
   - indirizzo: Via Re Magi, 10, 22010 Grandola ed Uniti CO
10. **Hotel Ristorante Bar Pizzeria La Sorgente** — Bene Lario
   - slug: `hotel-ristorante-bar-pizzeria-la-sorgente-bene-lario`
   - indirizzo: Via per la Grona, 68, 22010 Ligomena CO
11. **Hotel Ristorante Risorgimento** — Bene Lario
   - slug: `hotel-ristorante-risorgimento-bene-lario`
   - indirizzo: Via Carlo Vanetti, 16, 22018 Porlezza CO
12. **Lake Como Hostel La Primula, Menaggio** — Bene Lario
   - slug: `lake-como-hostel-la-primula-menaggio-bene-lario`
   - indirizzo: Via IV Novembre, 106, 22017 Menaggio CO
13. **Rustico Lago di Como** — Bene Lario
   - slug: `rustico-lago-di-como-bene-lario`
   - indirizzo: Via Colombera, 19, 22010 Barna CO
14. **Agriturismo La Tilia** — Bene Vagienna
   - slug: `agriturismo-la-tilia-bene-vagienna`
   - indirizzo: Strada Cascina Bealessio, 3, 12060 Lequio Tanaro CN
15. **Antica Dimora Gallo Basteris** — Bene Vagienna
   - slug: `antica-dimora-gallo-basteris-bene-vagienna`
   - indirizzo: Piazza V Luglio 1944, 37, 12060 Piozzo CN
16. **B&B Amò le Langhe** — Bene Vagienna
   - slug: `b-b-amo-le-langhe-bene-vagienna`
   - indirizzo: Frazione Lucchi, 58, 12068 Narzole CN
17. **B&b Bene&breakfast** — Bene Vagienna
   - slug: `b-b-bene-breakfast-bene-vagienna`
   - indirizzo: Via Carrù, 35/37, 12041 Bene Vagienna CN
18. **B&B Ca' Rino** — Bene Vagienna
   - slug: `b-b-ca-rino-bene-vagienna`
   - indirizzo: Frazione Santo Stefano, 24, 12041 Bene Vagienna CN
19. **B&B Il Forno Dal 1922** — Bene Vagienna
   - slug: `b-b-il-forno-dal-1922-bene-vagienna`
   - indirizzo: Via del Forno, 74, 12041 Bene Vagienna CN
20. **Bed and Breakfast Selisa** — Bene Vagienna
   - slug: `bed-and-breakfast-selisa-bene-vagienna`
   - indirizzo: SP206, 4, 12041 Bene Vagienna CN
21. **Ca' del Viaggiatore** — Bene Vagienna
   - slug: `ca-del-viaggiatore-bene-vagienna`
   - indirizzo: Località Calcinera 48, 12060 Farigliano CN
22. **Cascina Belmonte B&B** — Bene Vagienna
   - slug: `cascina-belmonte-b-b-bene-vagienna`
   - indirizzo: Via Belmonte, 32, 12045 Fossano CN
23. **Cortile Gancia Sweet House** — Bene Vagienna
   - slug: `cortile-gancia-sweet-house-bene-vagienna`
   - indirizzo: Via Pace, 25, 12068 Narzole CN
24. **Hotel Romanisio** — Bene Vagienna
   - slug: `hotel-romanisio-bene-vagienna`
   - indirizzo: Via Monsignor Angelo Soracco, 1, 12045 Fossano CN
25. **La Cascina di Villa Due** — Bene Vagienna
   - slug: `la-cascina-di-villa-due-bene-vagienna`
   - indirizzo: Strada Fondovalle, 16, 12068 Narzole CN
26. **La Vigna Del Maestro** — Bene Vagienna
   - slug: `la-vigna-del-maestro-bene-vagienna`
   - indirizzo: Frazione Santo Stefano, 55, 12041 Bene Vagienna CN
27. **Villa Amai** — Bene Vagienna
   - slug: `villa-amai-bene-vagienna`
   - indirizzo: SP159, 12041 Bene Vagienna CN
28. **Carrales Guest•House** — Benetutti
   - slug: `carrales-guest-house-benetutti`
   - indirizzo: Via Giampiero Chironi, 84, 08100 Nuoro NU
29. **Domo Peonia Bianca** — Benetutti
   - slug: `domo-peonia-bianca-benetutti`
   - indirizzo: Via Roma, 4, 08100 Nuoro NU
30. **DOMO Silvia e Paolo** — Benetutti
   - slug: `domo-silvia-e-paolo-benetutti`
   - indirizzo: Corso Giuseppe Garibaldi, 58, 08100 Nuoro NU
31. **EuroHotel** — Benetutti
   - slug: `eurohotel-benetutti`
   - indirizzo: Via Trieste, 62, 08100 Nuoro NU
32. **Felix Hotels – Residence Hotel Grandi Magazzini** — Benetutti
   - slug: `felix-hotels-residence-hotel-grandi-magazzini-benetutti`
   - indirizzo: Via Dalmazia, 5, 08100 Nuoro NU
33. **Gli olivi** — Benetutti
   - slug: `gli-olivi-benetutti`
   - indirizzo: Via Alghero, 6, 08025 Oliena NU
34. **Hotel Ristorante Grillo** — Benetutti
   - slug: `hotel-ristorante-grillo-benetutti`
   - indirizzo: Via Monsignor Giuseppe Melas, 14, 08100 Nuoro NU
35. **Hotel Ristorante su Lithu** — Benetutti
   - slug: `hotel-ristorante-su-lithu-benetutti`
   - indirizzo: Strada Statale 389 di Buddusò e del Correboi, 08021 Bitti NU