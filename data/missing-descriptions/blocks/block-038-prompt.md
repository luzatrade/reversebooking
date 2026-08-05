# Blocco 38/500 — 35 strutture senza descrizione IT

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

1. **al Vecchio Confine Cervignano del Friuli** — Aiello del Friuli
   - slug: `al-vecchio-confine-cervignano-del-friuli-aiello-del-friuli`
   - indirizzo: Via Palmanova, 11, 33052 Strassoldo UD
2. **Albergo Commercio** — Aiello del Friuli
   - slug: `albergo-commercio-aiello-del-friuli`
   - indirizzo: Borgo Cividale, 15, 33057 Palmanova UD
3. **Albergo Trattoria AL TAJ** — Aiello del Friuli
   - slug: `albergo-trattoria-al-taj-aiello-del-friuli`
   - indirizzo: Via Julia, 25, 33050 Sevegliano UD
4. **B&B "La meridiana"** — Aiello del Friuli
   - slug: `b-b-la-meridiana-aiello-del-friuli`
   - indirizzo: Via F. Petrarca, 1, 33041 Aiello del Friuli UD
5. **Bed and Breakfast Casa della Fornace** — Aiello del Friuli
   - slug: `bed-and-breakfast-casa-della-fornace-aiello-del-friuli`
   - indirizzo: Via Venezia, 7, 33050 San Vito al Torre UD
6. **Casa Barnaba-manin** — Aiello del Friuli
   - slug: `casa-barnaba-manin-aiello-del-friuli`
   - indirizzo: Via Stretta, 1, 33050 Clauiano UD
7. **Casa Bianca Pizzeria Ristorante Albergo** — Aiello del Friuli
   - slug: `casa-bianca-pizzeria-ristorante-albergo-aiello-del-friuli`
   - indirizzo: Via Gorizia, 3, 33050 San Vito Al Torre UD
8. **Hotel Ai Dogi** — Aiello del Friuli
   - slug: `hotel-ai-dogi-aiello-del-friuli`
   - indirizzo: Piazza Grande, 11A, 33057 Palmanova UD
9. **Hotel Friuli** — Aiello del Friuli
   - slug: `hotel-friuli-aiello-del-friuli`
   - indirizzo: Viale del Ledra, 24, 33100 Udine UD
10. **Hotel Friuli Cervignano** — Aiello del Friuli
   - slug: `hotel-friuli-cervignano-aiello-del-friuli`
   - indirizzo: Piazza Unità d'Italia, 20, 33052 Cervignano del Friuli UD
11. **Hotel Internazionale** — Aiello del Friuli
   - slug: `hotel-internazionale-aiello-del-friuli`
   - indirizzo: Via Monsignor Angelo, Via Ramazzotti, 2, 33052 Cervignano del Friuli UD
12. **Hotel Major** — Aiello del Friuli
   - slug: `hotel-major-aiello-del-friuli`
   - indirizzo: Via Pietro Micca, 19, 34077 Ronchi dei Legionari GO
13. **Hotel Ristorante Al Cervo** — Aiello del Friuli
   - slug: `hotel-ristorante-al-cervo-aiello-del-friuli`
   - indirizzo: Viale Venezia, 23, 33052 Cervignano del Friuli UD
14. **Hotel Roma** — Aiello del Friuli
   - slug: `hotel-roma-aiello-del-friuli`
   - indirizzo: Borgo Cividale, 27, 33057 Palmanova UD
15. **Hotel Villa Strassoldo "Ex Attianese Hotel"** — Aiello del Friuli
   - slug: `hotel-villa-strassoldo-ex-attianese-hotel-aiello-del-friuli`
   - indirizzo: Via Cisis, 31, 33052 Strassoldo UD
16. **Rist Hotel Airport** — Aiello del Friuli
   - slug: `rist-hotel-airport-aiello-del-friuli`
   - indirizzo: Via III° Armata, 20, 34070 Fogliano Redipuglia GO
17. **Stasion Di Pueste** — Aiello del Friuli
   - slug: `stasion-di-pueste-aiello-del-friuli`
   - indirizzo: Via Julia, 21, 33050 Nogaredo Al Torre UD
18. **Country House Hotel** — Aiello del Sabato
   - slug: `country-house-hotel-aiello-del-sabato`
   - indirizzo: S.Provinciale 70 AV (AVELLINO OVEST, 83013 Mercogliano AV
19. **Country House Pietra Bianca** — Aiello del Sabato
   - slug: `country-house-pietra-bianca-aiello-del-sabato`
   - indirizzo: Contrada Pietrabianca, 22, 83050 San Potito Ultra AV
20. **Frank Hotel** — Aiello del Sabato
   - slug: `frank-hotel-aiello-del-sabato`
   - indirizzo: Piazza Papa Giovanni XXIII, 23, 83042 Atripalda AV
21. **Hotel BelSito Avellino Est** — Aiello del Sabato
   - slug: `hotel-belsito-avellino-est-aiello-del-sabato`
   - indirizzo: SS7, 83030 Manocalzati AV
22. **Hotel Civita** — Aiello del Sabato
   - slug: `hotel-civita-aiello-del-sabato`
   - indirizzo: V. Manfredi, 124, 83042 Atripalda AV
23. **HOTEL CRISTAL** — Aiello del Sabato
   - slug: `hotel-cristal-aiello-del-sabato`
   - indirizzo: Via Tavernole, 35, 83030 Manocalzati AV
24. **Hotel de la Ville** — Aiello del Sabato
   - slug: `hotel-de-la-ville-aiello-del-sabato`
   - indirizzo: Via Giovanni Palatucci, 20, 83100 Avellino AV
25. **Hotel Don Lorenzo** — Aiello del Sabato
   - slug: `hotel-don-lorenzo-aiello-del-sabato`
   - indirizzo: Via Terminio, 24, 83028 Sala AV
26. **Hotel Il Ciliegio** — Aiello del Sabato
   - slug: `hotel-il-ciliegio-aiello-del-sabato`
   - indirizzo: Via S. Pietro, 28, 83050 Santo Stefano del Sole AV
27. **Hotel Ristorante Malaga** — Aiello del Sabato
   - slug: `hotel-ristorante-malaga-aiello-del-sabato`
   - indirizzo: Via Appia, 95, 83042 Atripalda AV
28. **Hotel Serino** — Aiello del Sabato
   - slug: `hotel-serino-aiello-del-sabato`
   - indirizzo: Via Terminio, 119, 83028 Serino AV
29. **La Locandina Ristorante** — Aiello del Sabato
   - slug: `la-locandina-ristorante-aiello-del-sabato`
   - indirizzo: Via Palazzo Parisi, 13, 83020 Aiello del Sabato AV
30. **Leonardo rooms** — Aiello del Sabato
   - slug: `leonardo-rooms-aiello-del-sabato`
   - indirizzo: Corso Europa, 56, 83100 Avellino AV
31. **Liguorini House b&b in Avellino** — Aiello del Sabato
   - slug: `liguorini-house-b-b-in-avellino-aiello-del-sabato`
   - indirizzo: Via Manlio Rossi Doria, 43, 83100 Avellino AV
32. **Lungofiume Suite** — Aiello del Sabato
   - slug: `lungofiume-suite-aiello-del-sabato`
   - indirizzo: Via Madonna de la Salette, 17, 83100 Avellino AV
33. **Royal Hotel Montevergine** — Aiello del Sabato
   - slug: `royal-hotel-montevergine-aiello-del-sabato`
   - indirizzo: Via Cerreto, 6, 83014 Ospedaletto D'alpinolo AV
34. **Solofra Palace Hotel & Resort & Spa** — Aiello del Sabato
   - slug: `solofra-palace-hotel-resort-spa-aiello-del-sabato`
   - indirizzo: Via Melito, 28, 83029 Solofra AV
35. **Villa Calvo Ricevimenti** — Aiello del Sabato
   - slug: `villa-calvo-ricevimenti-aiello-del-sabato`
   - indirizzo: Via Palazzo Parisi, 13, 83020 Aiello del Sabato AV