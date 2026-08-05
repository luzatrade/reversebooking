# Blocco 303/500 — 35 strutture senza descrizione IT

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

1. **Al calypso** — Borgo Virgilio
   - slug: `al-calypso-borgo-virgilio`
   - indirizzo: Via Governolo, 11, 46010 Curtatone MN
2. **b&b Douce france** — Borgo Virgilio
   - slug: `b-b-douce-france-borgo-virgilio`
   - indirizzo: Via B. Buozzi, 7, 46034 Borgo Virgilio MN
3. **B&B Emozioni e Relax** — Borgo Virgilio
   - slug: `b-b-emozioni-e-relax-borgo-virgilio`
   - indirizzo: Via Parma, 48, 46034 Pietole MN
4. **B&B Giaciglio di Virgilio** — Borgo Virgilio
   - slug: `b-b-giaciglio-di-virgilio-borgo-virgilio`
   - indirizzo: di Virgilio, Via Cesare Battisti, 5, 46034 Cerese MN
5. **B&B La Dimora delle calendule** — Borgo Virgilio
   - slug: `b-b-la-dimora-delle-calendule-borgo-virgilio`
   - indirizzo: Via T.Tasso,14 Cerese di, 46034 Borgo Virgilio MN
6. **B&B Parco del Mincio** — Borgo Virgilio
   - slug: `b-b-parco-del-mincio-borgo-virgilio`
   - indirizzo: Strada del Corriere, 19, 46034 Virgilio MN
7. **Corte LOIOL** — Borgo Virgilio
   - slug: `corte-loiol-borgo-virgilio`
   - indirizzo: Via Tre Teste, 1, 46034 Borgo Virgilio MN
8. **Hotel dei Gonzaga** — Borgo Virgilio
   - slug: `hotel-dei-gonzaga-borgo-virgilio`
   - indirizzo: Piazza Sordello, 52, 46100 Mantova MN
9. **Virgilio Residence** — Borgo Virgilio
   - slug: `virgilio-residence-borgo-virgilio`
   - indirizzo: Via Parenza Bassa, 7, 46034 Virgilio MN
10. **Hotel Eolo** — Borgocarbonara
   - slug: `hotel-eolo-borgocarbonara`
   - indirizzo: Viale Rinascita, 46, 46028 Sermide MN
11. **La Locanda nel Frutteto Room & Breakfast - Eventi** — Borgocarbonara
   - slug: `la-locanda-nel-frutteto-room-breakfast-eventi-borgocarbonara`
   - indirizzo: Via Mazzarana, 87, 41016 Novi di Modena MO
12. **Locanda Divinis** — Borgocarbonara
   - slug: `locanda-divinis-borgocarbonara`
   - indirizzo: Via S. Vito, 87, 37053 Cerea VR
13. **Villa Camurana** — Borgocarbonara
   - slug: `villa-camurana-borgocarbonara`
   - indirizzo: Via Camurana, 69, 41037 Medolla MO
14. **Albergo Ristorante Miniere** — Borgofranco d'Ivrea
   - slug: `albergo-ristorante-miniere-borgofranco-d-ivrea`
   - indirizzo: Piazza Martiri 1944, 4, 10080 Traversella TO
15. **Relais Castello San Giuseppe a Chiaverano** — Borgofranco d'Ivrea
   - slug: `relais-castello-san-giuseppe-a-chiaverano-borgofranco-d-ivrea`
   - indirizzo: 10010 Chiaverano TO
16. **Agriturismo Vignarello** — Borgolavezzaro
   - slug: `agriturismo-vignarello-borgolavezzaro`
   - indirizzo: Via Barbavara, 2, 28070 Tornaco NO
17. **ALBERGO BOTTALA** — Borgolavezzaro
   - slug: `albergo-bottala-borgolavezzaro`
   - indirizzo: 27036 Mortara PV, Italia
18. **Albergo Hotel Milano Di Lugani Giovanna & C. Snc** — Borgolavezzaro
   - slug: `albergo-hotel-milano-di-lugani-giovanna-c-snc-borgolavezzaro`
   - indirizzo: Via Roma, 18, 27025 Gambolo' PV
19. **Foresteria Lombarda Re Artù** — Borgolavezzaro
   - slug: `foresteria-lombarda-re-artu-borgolavezzaro`
   - indirizzo: Contrada della Torre, 11, 27036 Mortara PV
20. **Il Mulino alloggi foresteria** — Borgolavezzaro
   - slug: `il-mulino-alloggi-foresteria-borgolavezzaro`
   - indirizzo: Via Case Sparse per Cilavegna, 2, 27020 Parona PV
21. **'L SASS** — Borgomanero
   - slug: `l-sass-borgomanero`
   - indirizzo: Via Barcellini, 14A, 28021 Borgomanero NO
22. **B&B Benvenuti Al Nord** — Borgomanero
   - slug: `b-b-benvenuti-al-nord-borgomanero`
   - indirizzo: Via Piovale, 4, 28021 Borgomanero NO
23. **Corte 22 Bed and Breakfast e Appartamento** — Borgomanero
   - slug: `corte-22-bed-and-breakfast-e-appartamento-borgomanero`
   - indirizzo: Via Don Giovanni Bosco, 22, 28021 Borgomanero NO
24. **Hotel San Francesco** — Borgomanero
   - slug: `hotel-san-francesco-borgomanero`
   - indirizzo: Via Maggiate, 107, 28021 Borgomanero NO
25. **Il Nido del Pettirosso** — Borgomanero
   - slug: `il-nido-del-pettirosso-borgomanero`
   - indirizzo: Via Piovale, 14, 28021 Borgomanero NO
26. **LE3STANZE di Loredana** — Borgomanero
   - slug: `le3stanze-di-loredana-borgomanero`
   - indirizzo: Via Kennedy, 5/G, 28021 Borgomanero NO
27. **Maison 1706** — Borgomanero
   - slug: `maison-1706-borgomanero`
   - indirizzo: Via Brunelli Maioni, 17, 28021 Borgomanero NO
28. **Casa Rosalie** — Borgomaro
   - slug: `casa-rosalie-borgomaro`
   - indirizzo: Via Torino, 51, 18020 Cesio IM
29. **Casa Torretta** — Borgomaro
   - slug: `casa-torretta-borgomaro`
   - indirizzo: Via Lazzaro, 1, 18021 Borgomaro IM
30. **La Casa del Cavaliere** — Borgomaro
   - slug: `la-casa-del-cavaliere-borgomaro`
   - indirizzo: Via P. Merano, 22, 18021 Borgomaro IM
31. **La sosta del Viandante** — Borgomaro
   - slug: `la-sosta-del-viandante-borgomaro`
   - indirizzo: Via Vincenzo Ferrari, 8, 18021 Borgomaro IM
32. **Dimora Storica Casa Vanni** — Borgomezzavalle
   - slug: `dimora-storica-casa-vanni-borgomezzavalle`
   - indirizzo: Via Valeggia, 6, 28841 Borgomezzavalle VB
33. **Eco House e B&B A Sulì** — Borgomezzavalle
   - slug: `eco-house-e-b-b-a-suli-borgomezzavalle`
   - indirizzo: Via Camblione, 3, 28841 Camblione VB
34. **Albergo Ristorante Pian Benot Nei e Soleil** — Borgone Susa
   - slug: `albergo-ristorante-pian-benot-nei-e-soleil-borgone-susa`
   - indirizzo: Frazione, 10070 Usseglio TO
35. **B&B Autin** — Borgone Susa
   - slug: `b-b-autin-borgone-susa`
   - indirizzo: Via Carlo Emanuele I, 63, 10050 Bruzolo TO