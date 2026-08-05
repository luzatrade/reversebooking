# Blocco 459/500 — 35 strutture senza descrizione IT

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

1. **Hotel Nord** — Casalpusterlengo
   - slug: `hotel-nord-casalpusterlengo`
   - indirizzo: Via I Maggio, 3, 26862 Guardamiglio LO
2. **Guest House Località Sorbara** — Casalromano
   - slug: `guest-house-localita-sorbara-casalromano`
   - indirizzo: Str. Canneto-Asola, 3, 46041 Asola MN
3. **Hospitale I Mori** — Casalromano
   - slug: `hospitale-i-mori-casalromano`
   - indirizzo: Località, Str. per Sorbara, 33, 46041 Asola MN
4. **Oasi Borghetto Verde** — Casalromano
   - slug: `oasi-borghetto-verde-casalromano`
   - indirizzo: Via Cervo, 46040 Cavriana MN
5. **Al Casale B&B** — Casalserugo
   - slug: `al-casale-b-b-casalserugo`
   - indirizzo: Via Don Maniero, 7, 35020 Casalserugo PD
6. **Resort di Campagna - La Posa degli Agri** — Casalserugo
   - slug: `resort-di-campagna-la-posa-degli-agri-casalserugo`
   - indirizzo: Via Orsaretto, 4, 35020 Isola Dell'abbà PD
7. **Room Garden** — Casalserugo
   - slug: `room-garden-casalserugo`
   - indirizzo: int. Garden, Via Chiesa Vecchia, 70, 35125 Padova PD
8. **The Meridien House** — Casalserugo
   - slug: `the-meridien-house-casalserugo`
   - indirizzo: Via Ca' Mazzoldi, 14, 35020 Casalserugo PD
9. **Tulip Inn Padova Hotel** — Casalserugo
   - slug: `tulip-inn-padova-hotel-casalserugo`
   - indirizzo: Corso Stati Uniti, 54, 35127 Padova PD
10. **Diamond Suite** — Casaluce
   - slug: `diamond-suite-casaluce`
   - indirizzo: Via Lemitone I Tratto, 198, 81030 Borgo San Lorenzo CE
11. **Domus Antica Guest House** — Casaluce
   - slug: `domus-antica-guest-house-casaluce`
   - indirizzo: Via Pietro Morelli, 13, 81055 Santa Maria Capua Vetere CE
12. **AGORA' CASTELNUOVO DELLA DAUNIA** — Casalvecchio di Puglia
   - slug: `agora-castelnuovo-della-daunia-casalvecchio-di-puglia`
   - indirizzo: Piazza Plebiscito, 37, 71034 Castelnuovo della Daunia FG
13. **il Cortiletto del Borgo** — Casalvecchio di Puglia
   - slug: `il-cortiletto-del-borgo-casalvecchio-di-puglia`
   - indirizzo: Vico Sauchelli, 71038 Pietramontecorvino FG
14. **Vista Normanna** — Casalvecchio di Puglia
   - slug: `vista-normanna-casalvecchio-di-puglia`
   - indirizzo: Via Fares, 23, 71038 Pietramontecorvino FG
15. **B&B Il Padrino** — Casalvecchio Siculo
   - slug: `b-b-il-padrino-casalvecchio-siculo`
   - indirizzo: Via Borgo, 3, 98038 Savoca ME
16. **CasaBlanc b&b** — Casalvecchio Siculo
   - slug: `casablanc-b-b-casalvecchio-siculo`
   - indirizzo: Via Leonardo Sciascia, 44, 98028 Santa Teresa di Riva ME
17. **Dolce Casa n 41** — Casalvecchio Siculo
   - slug: `dolce-casa-n-41-casalvecchio-siculo`
   - indirizzo: Contura Inferiore, 41, 98038 Savoca ME
18. **DOMUS MHYRIA SICILY** — Casalvecchio Siculo
   - slug: `domus-mhyria-sicily-casalvecchio-siculo`
   - indirizzo: Via Petrazza, 1, 98032 Casalvecchio Siculo ME
19. **La Locanda degli amici** — Casalvecchio Siculo
   - slug: `la-locanda-degli-amici-casalvecchio-siculo`
   - indirizzo: CONTRADA SAN GAETANO, 98028 Santa Teresa di Riva ME
20. **La luce di Ambra** — Casalvecchio Siculo
   - slug: `la-luce-di-ambra-casalvecchio-siculo`
   - indirizzo: Via Risorgimento, 59, 98020 Rocchenere ME
21. **Main Palace Hotel** — Casalvecchio Siculo
   - slug: `main-palace-hotel-casalvecchio-siculo`
   - indirizzo: V. Lungomare Cristoforo Colombo, 15, 98027 Roccalumera ME
22. **Marranzanu Rooms** — Casalvecchio Siculo
   - slug: `marranzanu-rooms-casalvecchio-siculo`
   - indirizzo: Piazzale Stazione, 20, 98028 Santa Teresa di Riva ME
23. **NUOVA AURORA Rent Rooms** — Casalvecchio Siculo
   - slug: `nuova-aurora-rent-rooms-casalvecchio-siculo`
   - indirizzo: Corso Umberto I, 32, 98027 Roccalumera ME
24. **Agriturismo Il Fascinaro** — Casalvieri
   - slug: `agriturismo-il-fascinaro-casalvieri`
   - indirizzo: Via San Pietro, 20, 03034 Casalvieri FR
25. **Pistillo** — Casalvieri
   - slug: `pistillo-casalvieri`
   - indirizzo: PistilloCASALVIERI, 03034 Casalvieri FR
26. **B&B Castelcicala** — Casamarciano
   - slug: `b-b-castelcicala-casamarciano`
   - indirizzo: Via S. Francesco, 192, 80035 Nola NA
27. **B&B Adrian’s** — Casamassima
   - slug: `b-b-adrian-s-casamassima`
   - indirizzo: Via V.Grisanzio di Pinto, 17, 70010 Turi BA
28. **B&B Guarini** — Casamassima
   - slug: `b-b-guarini-casamassima`
   - indirizzo: area residenziale Barialto, via Guarino Guarini, 2, 70010 Casamassima BA
29. **B&B Le Tre Rose** — Casamassima
   - slug: `b-b-le-tre-rose-casamassima`
   - indirizzo: Via Imbriani, 27, 70010 Casamassima BA
30. **B&B Relais del Marchese** — Casamassima
   - slug: `b-b-relais-del-marchese-casamassima`
   - indirizzo: Via Forno D'Addante, 16, 70010 Turi BA
31. **Bed & Breakfast Via Roma 15** — Casamassima
   - slug: `bed-breakfast-via-roma-15-casamassima`
   - indirizzo: Via Roma, 15, 70021 Acquaviva delle Fonti BA
32. **Bed and Breakfast Gaia** — Casamassima
   - slug: `bed-and-breakfast-gaia-casamassima`
   - indirizzo: Via Cellamare, 59, 70010 Casamassima BA
33. **Dimora Rossi** — Casamassima
   - slug: `dimora-rossi-casamassima`
   - indirizzo: Via Sedile, 8, 70010 Turi BA
34. **Dimora Storica Palazzo Didonna** — Casamassima
   - slug: `dimora-storica-palazzo-didonna-casamassima`
   - indirizzo: Via Diego Martinelli, 24, 70018 Rutigliano BA
35. **Dimore Chialè** — Casamassima
   - slug: `dimore-chiale-casamassima`
   - indirizzo: Viale Angelo Pende, 44, 70010 Casamassima BA