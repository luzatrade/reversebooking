# Blocco 392/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Cantuccio** — Campodimele
   - slug: `b-b-il-cantuccio-campodimele`
   - indirizzo: Via Cristoforo Colombo, 43, 04022 Fondi LT
2. **B&B Il Vicoletto** — Campodimele
   - slug: `b-b-il-vicoletto-campodimele`
   - indirizzo: Vico Casale, 3, 04020 Itri LT
3. **Bed & Breakfast Mblò** — Campodimele
   - slug: `bed-breakfast-mblo-campodimele`
   - indirizzo: Largo Luigi Fortunato, 9, 04022 Fondi LT
4. **BedAndBreakfast Camere Primavera** — Campodimele
   - slug: `bedandbreakfast-camere-primavera-campodimele`
   - indirizzo: Via S. Gaetano, 11, 04022 Fondi LT
5. **E Spunta La Luna** — Campodimele
   - slug: `e-spunta-la-luna-campodimele`
   - indirizzo: Str. Vicinale Meroli, 4, 04020 Campodimele LT
6. **Il Beccaria Relais B&B** — Campodimele
   - slug: `il-beccaria-relais-b-b-campodimele`
   - indirizzo: Piazza Cesare Beccaria, 7, 04022 Fondi LT
7. **La Taverna Ristorante B&B** — Campodimele
   - slug: `la-taverna-ristorante-b-b-campodimele`
   - indirizzo: SR82, 29, 04020 Taverna LT
8. **Ostello Ossigeno** — Campodimele
   - slug: `ostello-ossigeno-campodimele`
   - indirizzo: Strada Regionale, 82, 04020 Itri LT
9. **VILLA REGINA - Sperlonga Vertice Rooms** — Campodimele
   - slug: `villa-regina-sperlonga-vertice-rooms-campodimele`
   - indirizzo: Via Chiarastella, 26, 04022 Fondi LT
10. **Agriturismo Tenuta Colle San Pietro - Ristorante tipico con alloggi e fattoria didattica** — Campodipietra
   - slug: `agriturismo-tenuta-colle-san-pietro-ristorante-t-campodipietra`
   - indirizzo: C/da San Pietro, 22/a, 86010 Campodipietra CB
11. **Agriturismo Terra e Sapori** — Campodipietra
   - slug: `agriturismo-terra-e-sapori-campodipietra`
   - indirizzo: Contrada Soglioni, 12, 86010 Campodipietra CB
12. **B&B Cherry House Bed&Breakfast** — Campodipietra
   - slug: `b-b-cherry-house-bed-breakfast-campodipietra`
   - indirizzo: Via San Giovanni dei Gelsi, 102/A, 86100 Campobasso CB
13. **Hostel San Mercurio** — Campodipietra
   - slug: `hostel-san-mercurio-campodipietra`
   - indirizzo: vicolo del piano, 2, 86018 Toro CB
14. **AFFITTACAMERE VALCHIAVENNA** — Campodolcino
   - slug: `affittacamere-valchiavenna-campodolcino`
   - indirizzo: Mese, Via Roma, 15, 23020 Chiavenna SO
15. **Albergo Ristorante Stella Alpina** — Campodolcino
   - slug: `albergo-ristorante-stella-alpina-campodolcino`
   - indirizzo: Via Fraciscio, 62, 23021 Campodolcino SO
16. **Alps Oriental Wellness Hotel** — Campodolcino
   - slug: `alps-oriental-wellness-hotel-campodolcino`
   - indirizzo: Via Prestone, 91, 23021 Campodolcino SO
17. **B&B Cristo Rè** — Campodolcino
   - slug: `b-b-cristo-re-campodolcino`
   - indirizzo: 23021 Campodolcino SO
18. **B&B Lo Scoiattolo** — Campodolcino
   - slug: `b-b-lo-scoiattolo-campodolcino`
   - indirizzo: Via Fraciscio, 103, 23021 Campodolcino SO
19. **B&B Portarezza** — Campodolcino
   - slug: `b-b-portarezza-campodolcino`
   - indirizzo: Via Portarezza, 42, 23021 Campodolcino SO
20. **Ca De Val** — Campodolcino
   - slug: `ca-de-val-campodolcino`
   - indirizzo: Via Don Romeo Ballerini, 3, 23021 Campodolcino SO
21. **Campodolcino Camping** — Campodolcino
   - slug: `campodolcino-camping-campodolcino`
   - indirizzo: Via x Starleggia, 2, 23021 Campodolcino SO
22. **Casa Alpina San Luigi** — Campodolcino
   - slug: `casa-alpina-san-luigi-campodolcino`
   - indirizzo: via gualdera, 75, 23021 Gualdera, SO
23. **Hotel Bucaneve** — Campodolcino
   - slug: `hotel-bucaneve-campodolcino`
   - indirizzo: Loc. Alpe Motta, Via Motta, 45, 23021 Campodolcino SO
24. **Hotel Chalet Capriolo** — Campodolcino
   - slug: `hotel-chalet-capriolo-campodolcino`
   - indirizzo: Via G. Carducci, 33, 23024 Madesimo SO
25. **Hotel Europa** — Campodolcino
   - slug: `hotel-europa-campodolcino`
   - indirizzo: Via Corti, 135, 23021 Campodolcino SO
26. **Hotel K2** — Campodolcino
   - slug: `hotel-k2-campodolcino`
   - indirizzo: Via G. Carducci, 11, 23024 Madesimo SO
27. **Hotel Ristorante Tambò** — Campodolcino
   - slug: `hotel-ristorante-tambo-campodolcino`
   - indirizzo: Via per Motta, 15, 23021 Campodolcino SO
28. **Il Cervo Mountain Apartment** — Campodolcino
   - slug: `il-cervo-mountain-apartment-campodolcino`
   - indirizzo: Via Corti, 81, 23021 Campodolcino SO
29. **Residence Baita dei Pini** — Campodolcino
   - slug: `residence-baita-dei-pini-campodolcino`
   - indirizzo: Via Don Luigi Guanella, 95, 23021 Campodolcino SO
30. **Residence Fior Di Roccia S.N.C. Di De Stefani Stef Snc** — Campodolcino
   - slug: `residence-fior-di-roccia-s-n-c-di-de-stefani-ste-campodolcino`
   - indirizzo: Via Fraciscio, 70, 23021 Fraciscio SO
31. **Residence Larice Bianco** — Campodolcino
   - slug: `residence-larice-bianco-campodolcino`
   - indirizzo: Via delle Soste, 33, 23021 Campodolcino SO
32. **San Luigi Rooms & Apartments** — Campodolcino
   - slug: `san-luigi-rooms-apartments-campodolcino`
   - indirizzo: Via Don Luigi Guanella, 2, 23021 Campodolcino SO
33. **"Dimora di Bosco" room & breakfast - CIN IT028072B4GUMUSDOY** — Campodoro
   - slug: `dimora-di-bosco-room-breakfast-cin-it028072b4gum-campodoro`
   - indirizzo: via d. manin, 5, 35030 Rubano PD
34. **Agriturismo Gallo Nero** — Campodoro
   - slug: `agriturismo-gallo-nero-campodoro`
   - indirizzo: Via Monte Cengio, 2, 35035 Mestrino PD
35. **Albergo La Loggia** — Campodoro
   - slug: `albergo-la-loggia-campodoro`
   - indirizzo: Via IV Novembre, 34, 35035 Mestrino PD