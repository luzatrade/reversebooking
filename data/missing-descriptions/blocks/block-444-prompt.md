# Blocco 444/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo La Stumina** — Carpi
   - slug: `agriturismo-la-stumina-carpi`
   - indirizzo: Via Ascari 6 A Cortile di, 41012 Carpi MO
2. **al civico 73 Bed & Breakfast** — Carpi
   - slug: `al-civico-73-bed-breakfast-carpi`
   - indirizzo: strada statale 413 romana sud, 73, 41012 Carpi MO
3. **B&B La Francesa** — Carpi
   - slug: `b-b-la-francesa-carpi`
   - indirizzo: Stradello Fassi, 3, 41012 Carpi MO
4. **B&B Villa dei Cigni Reali** — Carpi
   - slug: `b-b-villa-dei-cigni-reali-carpi`
   - indirizzo: Via Marchiona, 10a, 41012 Carpi MO
5. **Bed & Breakfast Villa delle Palme** — Carpi
   - slug: `bed-breakfast-villa-delle-palme-carpi`
   - indirizzo: Via Pola Esterna, 13, 41012 Carpi MO
6. **Borgo CASE NUOVE Bed and Breakfast** — Carpi
   - slug: `borgo-case-nuove-bed-and-breakfast-carpi`
   - indirizzo: Stradello Donella, 10A, 41012 Carpi MO
7. **Carpi Suite – Appartamenti Minghetti** — Carpi
   - slug: `carpi-suite-appartamenti-minghetti-carpi`
   - indirizzo: Via Marco Minghetti, 23, 41012 Carpi MO
8. **Carpi Suite – Appartamento B&B a Carpi** — Carpi
   - slug: `carpi-suite-appartamento-b-b-a-carpi-carpi`
   - indirizzo: Via Federico Garcia Lorca, 1, 41012 Carpi MO
9. **Da Maxim affittacamere** — Carpi
   - slug: `da-maxim-affittacamere-carpi`
   - indirizzo: Via Della Rosa Parte Est, 35, 41012 Carpi MO
10. **Hotel Carpi** — Carpi
   - slug: `hotel-carpi-carpi`
   - indirizzo: Via delle Magliaie, 2/4, 41012 Carpi MO
11. **L'Andito** — Carpi
   - slug: `l-andito-carpi`
   - indirizzo: Svoto Cattania, 9, 41012 Carpi MO
12. **Lanterna R&B** — Carpi
   - slug: `lanterna-r-b-carpi`
   - indirizzo: Via Giordano Bruno, 31, 41012 Carpi MO
13. **Maison Rebecca** — Carpi
   - slug: `maison-rebecca-carpi`
   - indirizzo: Via Curta Santa Chiara, 7, 41012 Carpi MO
14. **Suite Cecilia** — Carpi
   - slug: `suite-cecilia-carpi`
   - indirizzo: Corso Sandro Cabassi, 14 a, 41012 Carpi MO
15. **Acca Sporting Milano** — Carpiano
   - slug: `acca-sporting-milano-carpiano`
   - indirizzo: Via Sporting Mirasole, 56, 20090 Opera MI
16. **AN Hotel Dépendance Milano Melegnano** — Carpiano
   - slug: `an-hotel-dependance-milano-melegnano-carpiano`
   - indirizzo: Via Don Giuseppe Dossetti, 4 20074, 20074 Francolino MI
17. **Golf Hotel Milano** — Carpiano
   - slug: `golf-hotel-milano-carpiano`
   - indirizzo: Via Abruzzo, snc, 20073 Opera MI
18. **Suite Carpiano** — Carpiano
   - slug: `suite-carpiano-carpiano`
   - indirizzo: Via per Carpiano, 2/C, 20077 Melegnano MI
19. **AGRITURISMO TENUTA KYRIOS** — Carpignano Salentino
   - slug: `agriturismo-tenuta-kyrios-carpignano-salentino`
   - indirizzo: S.P. 147 Borgagne, 73020 Carpignano Salentino LE
20. **Calura Residence** — Carpignano Salentino
   - slug: `calura-residence-carpignano-salentino`
   - indirizzo: Via U. Foscolo, 92, 73020 Carpignano Salentino LE
21. **Corte dei Salentini B&B** — Carpignano Salentino
   - slug: `corte-dei-salentini-b-b-carpignano-salentino`
   - indirizzo: Via Provinciale Martano - Otranto, 54, 73020 Carpignano Salentino LE
22. **Furnirussi Tenuta** — Carpignano Salentino
   - slug: `furnirussi-tenuta-carpignano-salentino`
   - indirizzo: Strada Comunale Scine 29, frazione di Carpignano Salentino LE IT, 73020 Serrano LE
23. **Mamma Assunta B&B** — Carpignano Salentino
   - slug: `mamma-assunta-b-b-carpignano-salentino`
   - indirizzo: Via Edmondo de Amicis, 46, 73026 Borgagne LE
24. **Masseria Giamarra** — Carpignano Salentino
   - slug: `masseria-giamarra-carpignano-salentino`
   - indirizzo: Strada Provinciale 48 Martano-Otranto 130, 73020 Carpignano Salentino LE
25. **Masseria San Cosimo Agriresort** — Carpignano Salentino
   - slug: `masseria-san-cosimo-agriresort-carpignano-salentino`
   - indirizzo: contrada San Cosimo, 73020 Carpignano Salentino LE
26. **SALENTO GUESTHOUSE** — Carpignano Salentino
   - slug: `salento-guesthouse-carpignano-salentino`
   - indirizzo: Via Roma, 26, 73020 Carpignano Salentino LE
27. **Vico Sant'Antonio** — Carpignano Salentino
   - slug: `vico-sant-antonio-carpignano-salentino`
   - indirizzo: Vico S. Antonio, 73020 Carpignano Salentino LE
28. **B&B Carpignano** — Carpignano Sesia
   - slug: `b-b-carpignano-carpignano-sesia`
   - indirizzo: Via Cristoforo Colombo, 18, 74018 Palagianello TA
29. **La Sesia Beauty Vice** — Carpignano Sesia
   - slug: `la-sesia-beauty-vice-carpignano-sesia`
   - indirizzo: Via Torino, 37, 28064 Carpignano Sesia NO
30. **La Sesia Hotel Srl** — Carpignano Sesia
   - slug: `la-sesia-hotel-srl-carpignano-sesia`
   - indirizzo: Via Torino, 37, 28064 Carpignano Sesia NO
31. **Albergo Ristorante Marola** — Carpineti
   - slug: `albergo-ristorante-marola-carpineti`
   - indirizzo: di, Viale Bismantova, 2, 42033 Marola RE
32. **B&B Villa Rossana** — Carpineti
   - slug: `b-b-villa-rossana-carpineti`
   - indirizzo: Via Monchio di Mulazzano, 6, 43037 Lesignano de' Bagni PR
33. **Boiardo Hotel** — Carpineti
   - slug: `boiardo-hotel-carpineti`
   - indirizzo: Via Pedemontana, 6, 42019 Scandiano RE
34. **Camere del Castello Carpineti** — Carpineti
   - slug: `camere-del-castello-carpineti-carpineti`
   - indirizzo: Via Castello delle Carpinete, 26, 42033 Carpineti RE
35. **Hotel Ristorante Pizzeria Parco** — Carpineti
   - slug: `hotel-ristorante-pizzeria-parco-carpineti`
   - indirizzo: Via Aravecchia, 27, 41046 Palagano MO