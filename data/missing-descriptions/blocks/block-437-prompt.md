# Blocco 437/500 — 35 strutture senza descrizione IT

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

1. **Hotel Cappuccetto Rosso** — Carinaro
   - slug: `hotel-cappuccetto-rosso-carinaro`
   - indirizzo: Via Gramsci, 5, 81030 Lusciano CE
2. **Hotel Plana** — Carinaro
   - slug: `hotel-plana-carinaro`
   - indirizzo: Via Domenico Mondo, 81100 Caserta CE
3. **Inn Naples Airport** — Carinaro
   - slug: `inn-naples-airport-carinaro`
   - indirizzo: Via Boscariello, 81030 Gricignano di Aversa CE
4. **MOTEL 24H** — Carinaro
   - slug: `motel-24h-carinaro`
   - indirizzo: Viale della Libertà, 100, 81030 Lusciano CE
5. **B&B La Trinacria** — Carini
   - slug: `b-b-la-trinacria-carini`
   - indirizzo: Via Giuseppe Pitrè, 146, 90049 Terrasini PA
6. **Camera 81 Homestay** — Carini
   - slug: `camera-81-homestay-carini`
   - indirizzo: Via Enrico Berlinguer, 81, 90044 Carini PA
7. **Cappuccini Green Relax** — Carini
   - slug: `cappuccini-green-relax-carini`
   - indirizzo: Via Antonino Curreri, 144, 90044 Carini PA
8. **Dojo Idro rooms** — Carini
   - slug: `dojo-idro-rooms-carini`
   - indirizzo: SS 113 Settentrionale Sicula, 241, 90044 Carini PA
9. **Fiori di quercia** — Carini
   - slug: `fiori-di-quercia-carini`
   - indirizzo: Via Lazio, 25, 90044 Carini PA
10. **HUB Rooms** — Carini
   - slug: `hub-rooms-carini`
   - indirizzo: Corso Italia, 198, 90044 Carini PA
11. **Il melograno** — Carini
   - slug: `il-melograno-carini`
   - indirizzo: Via Padre Pietro Migliore, 11, 90044 Carini PA
12. **Kristal** — Carini
   - slug: `kristal-carini`
   - indirizzo: Corso Umberto I, 204A, 90045 Cinisi PA
13. **Le Métro** — Carini
   - slug: `le-metro-carini`
   - indirizzo: Piazza Stazione, 32, 90044 Carini PA
14. **Piano Monaco** — Carini
   - slug: `piano-monaco-carini`
   - indirizzo: Via Madonna delle Grazie, 41/43, 90044 Carini PA
15. **Sicily rooms** — Carini
   - slug: `sicily-rooms-carini`
   - indirizzo: Unnamed Road, 90044, 90044 Carini PA
16. **Vecchia Carrucola** — Carini
   - slug: `vecchia-carrucola-carini`
   - indirizzo: P.za San Francesco, 2, 90044 Carini PA
17. **Villa Sul Mare Palermo** — Carini
   - slug: `villa-sul-mare-palermo-carini`
   - indirizzo: via Portulaca, 36, 90044 Carini PA
18. **Agriturismo La Caffettiera** — Carinola
   - slug: `agriturismo-la-caffettiera-carinola`
   - indirizzo: Via masseria Caffettiera, 54, 81040 Francolise CE
19. **Agriturismo La Molara San Martino** — Carinola
   - slug: `agriturismo-la-molara-san-martino-carinola`
   - indirizzo: Via Sessa Mignano, 81030 San Martino CE
20. **Agriturismo Masseria Campierti** — Carinola
   - slug: `agriturismo-masseria-campierti-carinola`
   - indirizzo: Strada Falciano, 81030 Casanova CE
21. **Cascine e Dintorni** — Carinola
   - slug: `cascine-e-dintorni-carinola`
   - indirizzo: Viale dei Ciliegi, 81057 Casale CE
22. **Consoli Crispino** — Carinola
   - slug: `consoli-crispino-carinola`
   - indirizzo: Via Circumvallazione, 11, 81050 Francolise CE
23. **Hotel Sinuessa Terme** — Carinola
   - slug: `hotel-sinuessa-terme-carinola`
   - indirizzo: presso Hotel Sinuessa, Via Domiziana, Km 14.600, 81037 Mondragone CE
24. **LA CAVELLA | Ristorante & Country House | Sessa Aurunca** — Carinola
   - slug: `la-cavella-ristorante-country-house-sessa-aurunc-carinola`
   - indirizzo: Via Pasquale, Via P. Tuozzi, 42, 81037 Sessa Aurunca CE
25. **piccolo albergo del musicista** — Carinola
   - slug: `piccolo-albergo-del-musicista-carinola`
   - indirizzo: Via Claudio Foro, 21, 81030 Ventaroli CE
26. **Societa' Agricola Tenuta Sciacca Safav Srl** — Carinola
   - slug: `societa-agricola-tenuta-sciacca-safav-srl-carinola`
   - indirizzo: Via Provinciale, 1, 81030 Mondragone CE
27. **Villa Carmela** — Carinola
   - slug: `villa-carmela-carinola`
   - indirizzo: Loc, Via Travata, 81037 Fasani CE
28. **VILLA CECILIA BED AND BREAKFAST** — Carinola
   - slug: `villa-cecilia-bed-and-breakfast-carinola`
   - indirizzo: Via delle Monache, 81030 Cellole CE
29. **Affittacamere posto tappa casa Zola** — Carisio
   - slug: `affittacamere-posto-tappa-casa-zola-carisio`
   - indirizzo: Via G. Massa, 15, 13883 Roppolo BI
30. **Agriturismo Il Nespolo** — Carisio
   - slug: `agriturismo-il-nespolo-carisio`
   - indirizzo: Strada per Vettignè, 13048 Santhià VC
31. **B&B Casa di Lia** — Carisio
   - slug: `b-b-casa-di-lia-carisio`
   - indirizzo: Via Guido Mentegazzi, 28, 13900 Biella BI
32. **B&B il Passatempo di Enrica** — Carisio
   - slug: `b-b-il-passatempo-di-enrica-carisio`
   - indirizzo: frazione Vettignè, 13048 Santhià VC
33. **La Piazzetta B&B** — Carisio
   - slug: `la-piazzetta-b-b-carisio`
   - indirizzo: Via Roma, 14, 13887 Magnano BI
34. **Albergo Garni' Martina** — Carisolo
   - slug: `albergo-garni-martina-carisolo`
   - indirizzo: Via Roncac, 3, 38080 Carisolo TN
35. **B&B Casa il Sasso Pinzolo** — Carisolo
   - slug: `b-b-casa-il-sasso-pinzolo-carisolo`
   - indirizzo: Via S. Vigilio, 20, 38086 Pinzolo TN