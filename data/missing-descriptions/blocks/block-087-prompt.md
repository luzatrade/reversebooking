# Blocco 87/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo La Pieve** — Altidona
   - slug: `agriturismo-la-pieve-altidona`
   - indirizzo: Contrada latrocella, 11, 63873 Altidona FM
2. **Alba sul Mare Guest House** — Altidona
   - slug: `alba-sul-mare-guest-house-altidona`
   - indirizzo: Contrada Montecantino, 47/a, 63061 Massignano AP
3. **B&B La poeta- vicino A14 Pedaso** — Altidona
   - slug: `b-b-la-poeta-vicino-a14-pedaso-altidona`
   - indirizzo: Contrada Valdaso, 58, 63861 Campofilone FM
4. **B&B Vicolo Fiorito** — Altidona
   - slug: `b-b-vicolo-fiorito-altidona`
   - indirizzo: Vicolo Matteo Barabucci, 1, 63873 Altidona FM
5. **Bar Hotel Caprice** — Altidona
   - slug: `bar-hotel-caprice-altidona`
   - indirizzo: Via Aprutina, 43/47, 63873 Altidona FM
6. **Bed & Breakfast Duchessa** — Altidona
   - slug: `bed-breakfast-duchessa-altidona`
   - indirizzo: Via Madonna Manù, 63868 Lapedona FM
7. **Bed and Breakfast CASAJO** — Altidona
   - slug: `bed-and-breakfast-casajo-altidona`
   - indirizzo: Via Madonna Manù nr. 40, 63026 Lapedona AP
8. **Camping Garden River** — Altidona
   - slug: `camping-garden-river-altidona`
   - indirizzo: Via Ottorino Respighi, 63873 Marina di Altidona FM
9. **Casa degli Archi** — Altidona
   - slug: `casa-degli-archi-altidona`
   - indirizzo: Via Madonna Manù, 41, 63868 Lapedona FM
10. **Dimora Villa Ricci** — Altidona
   - slug: `dimora-villa-ricci-altidona`
   - indirizzo: Via Guglielmo Marconi, 20, 63827 Pedaso FM
11. **Hotel Palmensis** — Altidona
   - slug: `hotel-palmensis-altidona`
   - indirizzo: Via della Stazione, 56, 63900 Fermo FM
12. **Hotel Ristorante Rivamare** — Altidona
   - slug: `hotel-ristorante-rivamare-altidona`
   - indirizzo: Via Montecantino, 59, 63061 Marina di Massignano AP
13. **Hotel ristorante Valdaso** — Altidona
   - slug: `hotel-ristorante-valdaso-altidona`
   - indirizzo: Via Papa Giovanni XXIII, 22, 63827 Pedaso FM
14. **Il nido di Alice** — Altidona
   - slug: `il-nido-di-alice-altidona`
   - indirizzo: Via Monti di Monterubbiano, 4, 63868 Lapedona FM
15. **La Sorgente Country House** — Altidona
   - slug: `la-sorgente-country-house-altidona`
   - indirizzo: Contrada Marezi, 36/a, 63061 Massignano AP
16. **Monna Terra B&B** — Altidona
   - slug: `monna-terra-b-b-altidona`
   - indirizzo: Via Costa di Chiara 13/14, 63900 Torre di Palme FM
17. **Podere Miray Agriturismo & Bottega** — Altidona
   - slug: `podere-miray-agriturismo-bottega-altidona`
   - indirizzo: SP35, 63900 Fermo FM
18. **Riva Verde Camping Village Residence Acquapark** — Altidona
   - slug: `riva-verde-camping-village-residence-acquapark-altidona`
   - indirizzo: SS16, 63873 Altidona FM
19. **Vicolo Malavolta 7 - Rooms and Suites** — Altidona
   - slug: `vicolo-malavolta-7-rooms-and-suites-altidona`
   - indirizzo: Largo Adriatico, 63873 Marina di Altidona FM
20. **Albergo - Residence Mistef** — Altilia
   - slug: `albergo-residence-mistef-altilia`
   - indirizzo: Vincolo Autostradale A3 29, 88042 Falerna CZ
21. **Albergo Carpino** — Altilia
   - slug: `albergo-carpino-altilia`
   - indirizzo: Via Parisi, 34, 87050 Pian del Lago CS
22. **Azienda Agrituristica Montebeltrano** — Altilia
   - slug: `azienda-agrituristica-montebeltrano-altilia`
   - indirizzo: 87040 Montebeltrano CS
23. **B&B Calabria** — Altilia
   - slug: `b-b-calabria-altilia`
   - indirizzo: Via Roma, 7, 87057 Scigliano CS
24. **Georgerock** — Altilia
   - slug: `georgerock-altilia`
   - indirizzo: via pietragiorgi, 8, 87034 Grimaldi CS
25. **GH Baia di Tempsa Resort** — Altilia
   - slug: `gh-baia-di-tempsa-resort-altilia`
   - indirizzo: SS 18 Tirrena Inferiore, 87032 Campora San Giovanni CS
26. **Hotel Ristorante Valle del Savuto** — Altilia
   - slug: `hotel-ristorante-valle-del-savuto-altilia`
   - indirizzo: SS 18 Tirrena Inferiore, n 15, 87032 Campora San Giovanni CS
27. **L'Isola di Aurora** — Altilia
   - slug: `l-isola-di-aurora-altilia`
   - indirizzo: Località SAVUTO, 88040 Martirano CZ
28. **La scala del libro** — Altilia
   - slug: `la-scala-del-libro-altilia`
   - indirizzo: Via Nazionale, 87056 Santo Stefano di Rogliano CS
29. **Palace Hotel Una Nuova Strada** — Altilia
   - slug: `palace-hotel-una-nuova-strada-altilia`
   - indirizzo: Viale Stazione, 88047 Nocera Terinese CZ
30. **Residenza Matilde Bed & Breakfast** — Altilia
   - slug: `residenza-matilde-bed-breakfast-altilia`
   - indirizzo: Vico 1 Granatello, 24, 87030 Fiumefreddo Bruzio CS
31. **“IL CUCCO” casa vacanza** — Altino
   - slug: `il-cucco-casa-vacanza-altino`
   - indirizzo: Contrada Valloni, 35, 66010 Gessopalena CH
32. **Agriturismo Casa Mia** — Altino
   - slug: `agriturismo-casa-mia-altino`
   - indirizzo: Contrada Prangiarella, 9, 66020 Paglieta CH
33. **b&b da nonna 'Nzia** — Altino
   - slug: `b-b-da-nonna-nzia-altino`
   - indirizzo: Corso Margherita, 25, 66037 Sant'Eusanio del Sangro CH
34. **B&B Il Ghiro** — Altino
   - slug: `b-b-il-ghiro-altino`
   - indirizzo: 66010 San Martino Sulla Marrucina CH, Italia
35. **B&B Il Glicine Campagnolo** — Altino
   - slug: `b-b-il-glicine-campagnolo-altino`
   - indirizzo: 66041 Castelluccio CH