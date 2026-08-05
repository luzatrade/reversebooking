# Blocco 39/500 — 35 strutture senza descrizione IT

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

1. **Virginia Resort & Spa** — Aiello del Sabato
   - slug: `virginia-resort-spa-aiello-del-sabato`
   - indirizzo: Via Rivarano, 83024 Avellino AV
2. **Viva! Hotel Avellino** — Aiello del Sabato
   - slug: `viva-hotel-avellino-aiello-del-sabato`
   - indirizzo: Via Circumvallazione, 123, 83100 Avellino AV
3. **A Casa di Angela** — Aieta
   - slug: `a-casa-di-angela-aieta`
   - indirizzo: V. dei Mercanti, 58, 87028 Praia a Mare CS
4. **AD UN PASSO DAL MARE** — Aieta
   - slug: `ad-un-passo-dal-mare-aieta`
   - indirizzo: Via Vincenzo Bellini, 7, 87028 Praia a Mare CS
5. **Agriturismo Terre Rosse Di Massadita** — Aieta
   - slug: `agriturismo-terre-rosse-di-massadita-aieta`
   - indirizzo: ctr. Massadita, 87020 Aieta CS
6. **B&B " B&B Casa za CLARA"** — Aieta
   - slug: `b-b-b-b-casa-za-clara-aieta`
   - indirizzo: Via Lomonaco Notar, 5, 87020 Aieta CS
7. **B&B Biancaluna** — Aieta
   - slug: `b-b-biancaluna-aieta`
   - indirizzo: V. Cantogrande, 75, 87020 Aieta CS
8. **B&B Isola Dino sweet home** — Aieta
   - slug: `b-b-isola-dino-sweet-home-aieta`
   - indirizzo: Via Cristoforo Colombo, 40, 87028 Praia a Mare CS
9. **B&B Li Gutti** — Aieta
   - slug: `b-b-li-gutti-aieta`
   - indirizzo: Discesa Pisano, 21, 87020 Aieta CS
10. **Harmony** — Aieta
   - slug: `harmony-aieta`
   - indirizzo: Lungomare Colonnello Francesco Sirimarco, 22, 87020 Tortora Marina CS
11. **Hotel Borgo La Tana - Maratea** — Aieta
   - slug: `hotel-borgo-la-tana-maratea-aieta`
   - indirizzo: Via dell'Amicizia, 22, 85046 Castrocucco di Maratea PZ
12. **Hotel Brutium** — Aieta
   - slug: `hotel-brutium-aieta`
   - indirizzo: contrada sarre, 5, 87020 Tortora CS
13. **Hotel Calabria** — Aieta
   - slug: `hotel-calabria-aieta`
   - indirizzo: Via Roma, 58, 87028 Praia a Mare CS
14. **HOTEL GERMANIA** — Aieta
   - slug: `hotel-germania-aieta`
   - indirizzo: Hotel germania, Via Roma, 44, 87028 Praia a Mare CS
15. **Hotel La Loggia** — Aieta
   - slug: `hotel-la-loggia-aieta`
   - indirizzo: Centro storico, 87020 Tortora CS
16. **Hotel Napoleone** — Aieta
   - slug: `hotel-napoleone-aieta`
   - indirizzo: Viale A. Moro, 109, 87020 Tortora Marina CS
17. **Hotel Praja mare** — Aieta
   - slug: `hotel-praja-mare-aieta`
   - indirizzo: Via Giuseppe Garibaldi, 27, 87028 Praia a Mare CS
18. **Hotel Residenza del Golfo** — Aieta
   - slug: `hotel-residenza-del-golfo-aieta`
   - indirizzo: Viale Europa, Loc. Foresta, 87028 Praia a Mare CS
19. **Hotel TEA Praia** — Aieta
   - slug: `hotel-tea-praia-aieta`
   - indirizzo: Via Dante Alighieri, 60, 87028 Praia a Mare CS
20. **Le Due Lanterne** — Aieta
   - slug: `le-due-lanterne-aieta`
   - indirizzo: V. Cantogrande, 36, 87020 Aieta CS
21. **A Casa Nostra** — Ailano
   - slug: `a-casa-nostra-ailano`
   - indirizzo: 1 Contrada, Via Mancini, 81051 Pietramelara CE
22. **Albergo Penza** — Ailano
   - slug: `albergo-penza-ailano`
   - indirizzo: P.za Roma, 83, 81016 Piedimonte Matese CE
23. **B&B il giardino di Eolo** — Ailano
   - slug: `b-b-il-giardino-di-eolo-ailano`
   - indirizzo: Via Montemaggiore, 81051 Pietramelara CE
24. **B&B La casa di Anna** — Ailano
   - slug: `b-b-la-casa-di-anna-ailano`
   - indirizzo: Via Nicola Gigli, 81057 Teano CE
25. **B&B La Libellula** — Ailano
   - slug: `b-b-la-libellula-ailano`
   - indirizzo: SP207, 1, 81010 Pratella CE
26. **Chalet Vista Lago** — Ailano
   - slug: `chalet-vista-lago-ailano`
   - indirizzo: 81010 San Gregorio Matese CE
27. **Da Nonna Pasqualina** — Ailano
   - slug: `da-nonna-pasqualina-ailano`
   - indirizzo: Via Chiesa, 81010 Ciorlano CE
28. **Hotel Ascot** — Ailano
   - slug: `hotel-ascot-ailano`
   - indirizzo: Via Ceraselle, 55, 81059 Montano CE
29. **Jenny's House** — Ailano
   - slug: `jenny-s-house-ailano`
   - indirizzo: Via Casilina, 167, 81050 Presenzano CE
30. **L'angolo fiorito** — Ailano
   - slug: `l-angolo-fiorito-ailano`
   - indirizzo: Via Nazionale dei Pentri, 47, 86090 Castelpetroso IS
31. **La Caveja** — Ailano
   - slug: `la-caveja-ailano`
   - indirizzo: Via Santissima Annunziata, 10, 81040 Pietravairano CE
32. **La Quercia di Aorivola** — Ailano
   - slug: `la-quercia-di-aorivola-ailano`
   - indirizzo: Via Teano, 3, 81059 Aorivola CE
33. **La Rossa Fantastica** — Ailano
   - slug: `la-rossa-fantastica-ailano`
   - indirizzo: Via Madonna delle Grazie, 14, 81016 Piedimonte Matese CE
34. **Le Sale Resort** — Ailano
   - slug: `le-sale-resort-ailano`
   - indirizzo: Via Francesco Landi, 47, 81100 Caserta CE
35. **TENUTA D'AUSILIO Event MIGLIORE HOTEL 4 STELLE VAIRANO PATENORA CAIANELLO** — Ailano
   - slug: `tenuta-d-ausilio-event-migliore-hotel-4-stelle-v-ailano`
   - indirizzo: SS 85 Venafrana, 81058 Vairano Patenora CE