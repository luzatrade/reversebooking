# Blocco 471/500 — 35 strutture senza descrizione IT

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

1. **B&B Aria di Mare - Pollina,Sicilia** — Castelbuono
   - slug: `b-b-aria-di-mare-pollina-sicilia-castelbuono`
   - indirizzo: Via Camillo Benso Conte di Cavour, 46, 90010 Finale PA
2. **B&B Porta Delle Madonie** — Castelbuono
   - slug: `b-b-porta-delle-madonie-castelbuono`
   - indirizzo: Piazzetta del Popolo, 3, 90010 Campofelice di Roccella PA
3. **B&B TULIP LOTUS CASTELBUONO** — Castelbuono
   - slug: `b-b-tulip-lotus-castelbuono-castelbuono`
   - indirizzo: Via Roma, 18, 90013 Castelbuono PA
4. **B&B Villa Letizia** — Castelbuono
   - slug: `b-b-villa-letizia-castelbuono`
   - indirizzo: Via Isnello, snc, 90013 Castelbuono PA
5. **B&B Villa Letizia Inn** — Castelbuono
   - slug: `b-b-villa-letizia-inn-castelbuono`
   - indirizzo: Via Giuseppe Mazzini, 7, 90013 Castelbuono PA
6. **Casa sul corso** — Castelbuono
   - slug: `casa-sul-corso-castelbuono`
   - indirizzo: Via Turrisi, 6, 90013 Castelbuono PA
7. **Stanze in Casa Castiglia Castelbuono** — Castelbuono
   - slug: `stanze-in-casa-castiglia-castelbuono-castelbuono`
   - indirizzo: 37.94580023270191, 14.070480149698705, 90013 Castelbuono PA
8. **Villa La Plaja** — Castelbuono
   - slug: `villa-la-plaja-castelbuono`
   - indirizzo: Contrada Plaia degli Uccelli, 90015 Cefalù PA
9. **Villa Tiberio** — Castelbuono
   - slug: `villa-tiberio-castelbuono`
   - indirizzo: contrada Tiberio, 90010 San Mauro Castelverde PA
10. **Bed and Breakfast Case Giannone** — Casteldaccia
   - slug: `bed-and-breakfast-case-giannone-casteldaccia`
   - indirizzo: Via Luigi Einaudi, 90017 Santa Flavia PA
11. **Blue Life, sea-luxury rooms** — Casteldaccia
   - slug: `blue-life-sea-luxury-rooms-casteldaccia`
   - indirizzo: SS 113 Settentrionale Sicula, 138, 90014 Casteldaccia PA
12. **Isabella House** — Casteldaccia
   - slug: `isabella-house-casteldaccia`
   - indirizzo: Via Pietro Nenni, 9/C, 90014 Casteldaccia PA
13. **Namuri Rooms & Suites Sicily - Casa Vacanze - Casteldaccia** — Casteldaccia
   - slug: `namuri-rooms-suites-sicily-casa-vacanze-castelda-casteldaccia`
   - indirizzo: Via S. Giuseppe, 68, 90014 Casteldaccia PA
14. **Room Galletti-Inguaggiato** — Casteldaccia
   - slug: `room-galletti-inguaggiato-casteldaccia`
   - indirizzo: Corso Butera, 116, 90011 Bagheria PA
15. **Solus B&B** — Casteldaccia
   - slug: `solus-b-b-casteldaccia`
   - indirizzo: via della rotonda, 2, 90014 Casteldaccia PA
16. **Vile in Palermo** — Casteldaccia
   - slug: `vile-in-palermo-casteldaccia`
   - indirizzo: SS 113 Settentrionale Sicula, 70, 90014 Casteldaccia PA
17. **Agriturismo "Don Cesarino" - Az. Agr. Ing. Dario Di Vincenzo** — Castell'Umberto
   - slug: `agriturismo-don-cesarino-az-agr-ing-dario-di-vin-castell-umberto`
   - indirizzo: C.da Palazzo S.Giorgio, n.1, 98070 Castell'Umberto ME
18. **Agriturismo Fattoria San Pio** — Castell'Umberto
   - slug: `agriturismo-fattoria-san-pio-castell-umberto`
   - indirizzo: Contrada Rocca San Pietro, 98074 Naso ME
19. **Agriturismo Fontanapietra** — Castell'Umberto
   - slug: `agriturismo-fontanapietra-castell-umberto`
   - indirizzo: Contrada Colla, 8, 98078 Tortorici ME
20. **AGRITURISMO LA SORGENTE** — Castell'Umberto
   - slug: `agriturismo-la-sorgente-castell-umberto`
   - indirizzo: Contrada Santa Lucia, 4, 98069 Sinagra ME
21. **Antica Dimora Marinelli** — Castell'Umberto
   - slug: `antica-dimora-marinelli-castell-umberto`
   - indirizzo: Via Garibaldi, 97, 98062 Ficarra ME
22. **B&B Il Capitano** — Castell'Umberto
   - slug: `b-b-il-capitano-castell-umberto`
   - indirizzo: Via Trazzera Marina, 294, 98071 Capo d'Orlando ME
23. **Tenuta Albachiara** — Castell'Umberto
   - slug: `tenuta-albachiara-castell-umberto`
   - indirizzo: Contrada, Piano S. Cono, 534, 98074 Naso ME
24. **Affittacamere Case D'Anna - Castellammare del Golfo** — Castellammare del Golfo
   - slug: `affittacamere-case-d-anna-castellammare-del-golf-castellammare-del-golfo`
   - indirizzo: Corso Giuseppe Garibaldi, 122, 91014 Castellammare del Golfo TP
25. **B&B A Mare** — Castellammare del Golfo
   - slug: `b-b-a-mare-castellammare-del-golfo`
   - indirizzo: V. Guglielmo Marconi, 195, 91014 Castellammare del Golfo TP
26. **Badia Rooms & Breakfast** — Castellammare del Golfo
   - slug: `badia-rooms-breakfast-castellammare-del-golfo`
   - indirizzo: Via Bizet, 7/9, 91014 Castellammare del Golfo TP
27. **Cerri Hotel** — Castellammare del Golfo
   - slug: `cerri-hotel-castellammare-del-golfo`
   - indirizzo: Via Mascagni, 4, 91014 Castellammare del Golfo TP
28. **Cocciu D'Amuri** — Castellammare del Golfo
   - slug: `cocciu-d-amuri-castellammare-del-golfo`
   - indirizzo: Contrada, Via Gemma D'Oro, 34, 91014 Castellammare del Golfo TP
29. **Hotel Al Madarig** — Castellammare del Golfo
   - slug: `hotel-al-madarig-castellammare-del-golfo`
   - indirizzo: Largo Petrolo, 7, 91014 Castellammare del Golfo TP
30. **Hotel Belvedere Resort** — Castellammare del Golfo
   - slug: `hotel-belvedere-resort-castellammare-del-golfo`
   - indirizzo: SS187, Km 37, 91014 Castellammare del Golfo TP
31. **Hotel Cala Marina** — Castellammare del Golfo
   - slug: `hotel-cala-marina-castellammare-del-golfo`
   - indirizzo: Via Don Leonardo Zangara, n 1, 91014 Castellammare del Golfo TP
32. **Hotel Cetarium** — Castellammare del Golfo
   - slug: `hotel-cetarium-castellammare-del-golfo`
   - indirizzo: Via Don Leonardo Zangara, 45, 91014 Castellammare del Golfo TP
33. **Hotel Punta Nord - Est** — Castellammare del Golfo
   - slug: `hotel-punta-nord-est-castellammare-del-golfo`
   - indirizzo: Viale Leonardo da Vinci, 67, 91014 Castellammare del Golfo TP
34. **Hotel Sopra Le Mura** — Castellammare del Golfo
   - slug: `hotel-sopra-le-mura-castellammare-del-golfo`
   - indirizzo: Via Giacomo Puccini, 62, 91014 Castellammare del Golfo TP
35. **La Piazzetta Hotel** — Castellammare del Golfo
   - slug: `la-piazzetta-hotel-castellammare-del-golfo`
   - indirizzo: Piazza Europa, 8, 91014 Castellammare del Golfo TP