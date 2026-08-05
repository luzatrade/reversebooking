# Blocco 212/500 — 35 strutture senza descrizione IT

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

1. **Hotel Italia Ischia - Beach hotel** — Barano d'Ischia
   - slug: `hotel-italia-ischia-beach-hotel-barano-d-ischia`
   - indirizzo: Via Salvatore Girardi, 59, 80074 Casamicciola Terme NA
2. **Hotel La Gondola** — Barano d'Ischia
   - slug: `hotel-la-gondola-barano-d-ischia`
   - indirizzo: Via Maronti, 57, 80072 Barano D'ischia NA
3. **Hotel La Luna** — Barano d'Ischia
   - slug: `hotel-la-luna-barano-d-ischia`
   - indirizzo: Via Provinciale, Via Croce Testaccio, 27, 80072 Barano D'ischia NA
4. **Hotel la Mandorla** — Barano d'Ischia
   - slug: `hotel-la-mandorla-barano-d-ischia`
   - indirizzo: Via Provinciale Maronti, 57, 80072 Barano d'Ischia NA
5. **Hotel Maronti** — Barano d'Ischia
   - slug: `hotel-maronti-barano-d-ischia`
   - indirizzo: Via Maronti, 18, 80072 Barano d'Ischia NA
6. **Hotel Olmitello** — Barano d'Ischia
   - slug: `hotel-olmitello-barano-d-ischia`
   - indirizzo: Spiaggia dei Maronti - Ischia, 80072 Barano D'ischia NA
7. **Hotel Parco Smeraldo Terme and Residence** — Barano d'Ischia
   - slug: `hotel-parco-smeraldo-terme-and-residence-barano-d-ischia`
   - indirizzo: Via Maronti, 42, 80072 Barano d'Ischia NA
8. **Hotel Poggio del Sole** — Barano d'Ischia
   - slug: `hotel-poggio-del-sole-barano-d-ischia`
   - indirizzo: Via Baiola, 269, 80075 Forio NA
9. **Hotel Regina Del Mare** — Barano d'Ischia
   - slug: `hotel-regina-del-mare-barano-d-ischia`
   - indirizzo: Via Maronti, 70, 80070 Barano d'Ischia NA
10. **Hotel San Giorgio Terme** — Barano d'Ischia
   - slug: `hotel-san-giorgio-terme-barano-d-ischia`
   - indirizzo: Via Maronti, 42, 80077 Barano d'Ischia NA
11. **Hotel Sunset Green Ischia** — Barano d'Ischia
   - slug: `hotel-sunset-green-ischia-barano-d-ischia`
   - indirizzo: Via Maronti, 58, 80072 Barano d'Ischia NA
12. **Hotel Terme Saint Raphael, Dimhotels** — Barano d'Ischia
   - slug: `hotel-terme-saint-raphael-dimhotels-barano-d-ischia`
   - indirizzo: Via Maronti, 5, 80072 Barano D'ischia NA
13. **Hotel Villa al Mare** — Barano d'Ischia
   - slug: `hotel-villa-al-mare-barano-d-ischia`
   - indirizzo: Via Maronti, 66, 80072 Barano d'Ischia NA
14. **Hotel Villa Maria Sant'Angelo d'Ischia** — Barano d'Ischia
   - slug: `hotel-villa-maria-sant-angelo-d-ischia-barano-d-ischia`
   - indirizzo: Via Quadro, 29, 80081 Sant'Angelo NA
15. **Hotel Vittorio** — Barano d'Ischia
   - slug: `hotel-vittorio-barano-d-ischia`
   - indirizzo: Via Maronti, 166, 80072 Barano d'Ischia NA
16. **Lemon Tree Rooms** — Barano d'Ischia
   - slug: `lemon-tree-rooms-barano-d-ischia`
   - indirizzo: Corsa Regina Elena, 77, 80072 Barano d'Ischia NA
17. **ALEXA CASA VACANZE** — Baranzate
   - slug: `alexa-casa-vacanze-baranzate`
   - indirizzo: Strada Statale del Sempione, 61, 20016 Pero MI
18. **Appartamenti Antica Corte Milanese** — Baranzate
   - slug: `appartamenti-antica-corte-milanese-baranzate`
   - indirizzo: Via Repubblica, 86, 20026 Novate Milanese MI
19. **B&B Cort di Quèla** — Baranzate
   - slug: `b-b-cort-di-quela-baranzate`
   - indirizzo: Via Alessandro Manzoni, 7, 20021 Baranzate MI
20. **Best Western Plus The Hub Hotel** — Baranzate
   - slug: `best-western-plus-the-hub-hotel-baranzate`
   - indirizzo: Via Privata Polonia, 10, 20157 Milano MI
21. **CXMilan | NoM Campus & Hotel** — Baranzate
   - slug: `cxmilan-nom-campus-hotel-baranzate`
   - indirizzo: V. Alda Merini, 2, 20026 Novate Milanese MI
22. **Domina Milano Fiera** — Baranzate
   - slug: `domina-milano-fiera-baranzate`
   - indirizzo: Via Don Orione, 20026 Novate Milanese MI
23. **FrenzHouse Baranzate** — Baranzate
   - slug: `frenzhouse-baranzate-baranzate`
   - indirizzo: Via Nazario Sauro, 132, 20021 Baranzate MI
24. **Hotel Accursio** — Baranzate
   - slug: `hotel-accursio-baranzate`
   - indirizzo: Viale Certosa, 88, 20156 Milano MI
25. **Hotel Bel Sit** — Baranzate
   - slug: `hotel-bel-sit-baranzate`
   - indirizzo: Via Gallarate, 2, 20151 Milano MI
26. **Hotel Bonola** — Baranzate
   - slug: `hotel-bonola-baranzate`
   - indirizzo: Via Torrazza, 15, 20151 Milano MI
27. **Hotel bulà** — Baranzate
   - slug: `hotel-bula-baranzate`
   - indirizzo: Via Caduti Bollatesi, Via XI Febbraio, 38, 20021 Bollate MI
28. **Hotel Forum** — Baranzate
   - slug: `hotel-forum-baranzate`
   - indirizzo: Via Fiume, 7, 20021 Baranzate MI
29. **HOTEL MIRAGE Sure Hotel Collection by Best Western** — Baranzate
   - slug: `hotel-mirage-sure-hotel-collection-by-best-weste-baranzate`
   - indirizzo: Viale Certosa, 104/106, 20156 Milano MI
30. **Hotel Raffaello** — Baranzate
   - slug: `hotel-raffaello-baranzate`
   - indirizzo: Viale Certosa, 108, 20156 Milano MI
31. **Klima Hotel Milano Fiere** — Baranzate
   - slug: `klima-hotel-milano-fiere-baranzate`
   - indirizzo: Via Privata Venezia Giulia, 8, 20157 Milano MI
32. **Phi Hotel Milano** — Baranzate
   - slug: `phi-hotel-milano-baranzate`
   - indirizzo: Via Falzarego, 1, 20021 Baranzate MI
33. **Villa Rosina** — Baranzate
   - slug: `villa-rosina-baranzate`
   - indirizzo: Via S. Pietro, 36, 20017 Rho MI
34. **Albergo Crystal** — Barasso
   - slug: `albergo-crystal-barasso`
   - indirizzo: Via Giuseppe Speroni, 10, 21100 Varese VA
35. **B&B Il Nido Al Lago** — Barasso
   - slug: `b-b-il-nido-al-lago-barasso`
   - indirizzo: Via Preja, 17, 21026 Gavirate VA