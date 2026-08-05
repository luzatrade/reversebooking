# Blocco 181/500 — 35 strutture senza descrizione IT

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

1. **Hotel Max** — Aversa
   - slug: `hotel-max-aversa`
   - indirizzo: Viale John Fitzgerald Kennedy, 155, 81031 Aversa CE
2. **Hotel Smeraldo** — Aversa
   - slug: `hotel-smeraldo-aversa`
   - indirizzo: Via Circumvallazione Esterna località Ponte Riccio, 78, 80019 Qualiano NA
3. **Hotel Stefany** — Aversa
   - slug: `hotel-stefany-aversa`
   - indirizzo: Giugliano NA IT, Via Lago Patria, 287, 80014 Lago Patria NA
4. **Hotel Vogue** — Aversa
   - slug: `hotel-vogue-aversa`
   - indirizzo: Via Masseria Vecchia, 79, 80014 Giugliano in Campania NA
5. **IL GIRAMONDO** — Aversa
   - slug: `il-giramondo-aversa`
   - indirizzo: Via Armando Diaz, 52, 81031 Aversa CE
6. **La Resilienza Relais** — Aversa
   - slug: `la-resilienza-relais-aversa`
   - indirizzo: Via d'Azeglio, 13, 80028 Grumo Nevano NA
7. **le chiavi di polidoro** — Aversa
   - slug: `le-chiavi-di-polidoro-aversa`
   - indirizzo: Via Magenta, 51, 81031 Aversa CE
8. **Le Pinede Hotel Relax** — Aversa
   - slug: `le-pinede-hotel-relax-aversa`
   - indirizzo: Via Stella Maris, 10, 80014 Giugliano in Campania NA
9. **Suite al Borgo** — Aversa
   - slug: `suite-al-borgo-aversa`
   - indirizzo: Via Alessandro Bisceglia, 23, 81031 Aversa CE
10. **Tenuta Don Alfonso** — Aversa
   - slug: `tenuta-don-alfonso-aversa`
   - indirizzo: Via Giovanni Antonio Campano, 65, 80145 Napoli NA
11. **B&B Cala del Conte** — Avetrana
   - slug: `b-b-cala-del-conte-avetrana`
   - indirizzo: Via Monte Grappa, 26, 74020 Avetrana TA
12. **B&b Giadà** — Avetrana
   - slug: `b-b-giada-avetrana`
   - indirizzo: Via Goffredo Mameli, 46, 74020 Avetrana TA
13. **B&B La Rosa Antica Avetrana** — Avetrana
   - slug: `b-b-la-rosa-antica-avetrana-avetrana`
   - indirizzo: Via Martiri D'Ungheria, 52, 74020 Avetrana TA
14. **B&B Tenuta Canneddi** — Avetrana
   - slug: `b-b-tenuta-canneddi-avetrana`
   - indirizzo: Via Guglielmo Marconi, 25, 74020 Avetrana TA
15. **B&B Vento del Mare** — Avetrana
   - slug: `b-b-vento-del-mare-avetrana`
   - indirizzo: Via Bouganvillea, 74024 San Pietro In Bevagna TA
16. **Bed&Breakfast Largo Imperiali** — Avetrana
   - slug: `bed-breakfast-largo-imperiali-avetrana`
   - indirizzo: Largo Imperiale M, 19, 74020 Avetrana TA
17. **Bed&Breakfast Le 5 Volte** — Avetrana
   - slug: `bed-breakfast-le-5-volte-avetrana`
   - indirizzo: Via J. F. Kennedy, 13, 74020 Avetrana TA
18. **Hotel Belsito** — Avetrana
   - slug: `hotel-belsito-avetrana`
   - indirizzo: Via dei Tigli Urmo Belsito, 74020 Avetrana TA
19. **HOTEL CARAIBISIACO PUGLIA SUL MARE IONIO** — Avetrana
   - slug: `hotel-caraibisiaco-puglia-sul-mare-ionio-avetrana`
   - indirizzo: Via dei Pittospori, 74024 San Pietro In Bevagna TA
20. **La Gemma del Sud** — Avetrana
   - slug: `la-gemma-del-sud-avetrana`
   - indirizzo: Via Vincenzo Gioberti, 10, 74020 Avetrana TA
21. **La Vetrana Rooms | JD Vacanze** — Avetrana
   - slug: `la-vetrana-rooms-jd-vacanze-avetrana`
   - indirizzo: Piazzetta Chiesa, 74020 Avetrana TA
22. **Li Caseddi ti lu Cesarinu** — Avetrana
   - slug: `li-caseddi-ti-lu-cesarinu-avetrana`
   - indirizzo: Via Cairoli, 7, 74020 Avetrana TA
23. **Masseria Grottella** — Avetrana
   - slug: `masseria-grottella-avetrana`
   - indirizzo: Via Ludovico Ariosto, 42, 74020 Avetrana TA
24. **Masseria La Porticella** — Avetrana
   - slug: `masseria-la-porticella-avetrana`
   - indirizzo: Via Porticella, 94, 74020 Avetrana TA
25. **Palazzo Mancini** — Avetrana
   - slug: `palazzo-mancini-avetrana`
   - indirizzo: Via Langellotti, 4, 74020 Avetrana TA
26. **Samana' Bed and Breakfast** — Avetrana
   - slug: `samana-bed-and-breakfast-avetrana`
   - indirizzo: Via Lago di Varano, Snc, 73010 Porto Cesareo LE
27. **Vento del Salento** — Avetrana
   - slug: `vento-del-salento-avetrana`
   - indirizzo: Via A. De Gasperi, 128, 74020 Avetrana TA
28. **Albergo Motel Belvedere** — Avezzano
   - slug: `albergo-motel-belvedere-avezzano`
   - indirizzo: Via XX Settembre, 484, 67051 Avezzano AQ
29. **ALBERGO RIO** — Avezzano
   - slug: `albergo-rio-avezzano`
   - indirizzo: Via Santa Croce, n. 18, 67050 Canistro AQ
30. **B&B Relais Marlene** — Avezzano
   - slug: `b-b-relais-marlene-avezzano`
   - indirizzo: Via Cardinale Mazzarino, 46, 67051 Avezzano AQ
31. **B&B' Tra i due Parchi'** — Avezzano
   - slug: `b-b-tra-i-due-parchi-avezzano`
   - indirizzo: Via Celano, 28, 67051 Avezzano AQ
32. **Hotel De Meis** — Avezzano
   - slug: `hotel-de-meis-avezzano`
   - indirizzo: Via Roma, 202, 67053 Capistrello AQ
33. **Hotel Olimpia** — Avezzano
   - slug: `hotel-olimpia-avezzano`
   - indirizzo: Via Avezzano, 91, 67068 Cappelle AQ
34. **Hotel Velino** — Avezzano
   - slug: `hotel-velino-avezzano`
   - indirizzo: Via Montello, 9, 67051 Avezzano AQ
35. **Il Risorgimento Avezzano** — Avezzano
   - slug: `il-risorgimento-avezzano-avezzano`
   - indirizzo: Via Guglielmo Marconi, 46, 67051 Avezzano AQ