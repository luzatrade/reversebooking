# Blocco 24/500 — 35 strutture senza descrizione IT

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

1. **L'Antico Granaio** — Affile
   - slug: `l-antico-granaio-affile`
   - indirizzo: Via Palianese Sud, 03018 Paliano FR
2. **Nido del Nibbio** — Affile
   - slug: `nido-del-nibbio-affile`
   - indirizzo: SP44b, 00028 Livata, Subiaco RM
3. **Storico Hotel Italia** — Affile
   - slug: `storico-hotel-italia-affile`
   - indirizzo: Viale dei Boschi, 28, 00028 Livata RM
4. **Barbato** — Afragola
   - slug: `barbato-afragola`
   - indirizzo: Corso Secondigliano, 498/500, 80144 Napoli NA
5. **Capri SPA Hotel** — Afragola
   - slug: `capri-spa-hotel-afragola`
   - indirizzo: Via Lipari, 12, 80026 Casoria NA
6. **Hotel Blanc** — Afragola
   - slug: `hotel-blanc-afragola`
   - indirizzo: Via S. Salvatore, 20, 80026 Casoria NA
7. **Hotel Business** — Afragola
   - slug: `hotel-business-afragola`
   - indirizzo: Strada Statale Sannitica 87 Km. 7.800, Strada Statale Sannitica 87, Km. 7.350, 80026 Casoria NA
8. **Hotel Daytona** — Afragola
   - slug: `hotel-daytona-afragola`
   - indirizzo: Via Romeo Nicola, 10, 80026 Casoria NA
9. **Hotel Fly** — Afragola
   - slug: `hotel-fly-afragola`
   - indirizzo: Via Giovanni Amato, 14, 80026 Casoria NA
10. **Hotel Masaniello** — Afragola
   - slug: `hotel-masaniello-afragola`
   - indirizzo: Via Circumvallazione Esterna, Via Vincenzo Gemito, snc, 80026 Casoria NA
11. **Hotel Meeting** — Afragola
   - slug: `hotel-meeting-afragola`
   - indirizzo: Via Circumvallazione Esterna, 85, 80026 Casoria NA
12. **Hotel Sannita** — Afragola
   - slug: `hotel-sannita-afragola`
   - indirizzo: Via Indipendenza, 23, 80026 Casoria NA
13. **Life Hotel** — Afragola
   - slug: `life-hotel-afragola`
   - indirizzo: Via Salice, 20, 80021 Casalnuovo di Napoli NA
14. **Pietrabianca Resort** — Afragola
   - slug: `pietrabianca-resort-afragola`
   - indirizzo: Via Pratola, 80, 80038 Pomigliano d'Arco NA
15. **Residence Hotel Felix** — Afragola
   - slug: `residence-hotel-felix-afragola`
   - indirizzo: Vico V Via Vittorio Emanuele III, 89867 Arzano NA
16. **SUITE CELESTIA CASORIA BY SUITE** — Afragola
   - slug: `suite-celestia-casoria-by-suite-afragola`
   - indirizzo: Via Armando Diaz, 32, 80026 Casoria NA
17. **Suite concept Italy** — Afragola
   - slug: `suite-concept-italy-afragola`
   - indirizzo: Via Armando Diaz, 32, 80026 Casoria NA
18. **Vama House** — Afragola
   - slug: `vama-house-afragola`
   - indirizzo: Traversa II di Corso Secondigliano, 80144 Napoli NA
19. **Afrodite Boutique Hotel** — Africo
   - slug: `afrodite-boutique-hotel-africo`
   - indirizzo: Via Aldo Moro, 89034 Bovalino RC
20. **B & B Donna Beatrice** — Africo
   - slug: `b-b-donna-beatrice-africo`
   - indirizzo: cda vescovado, 89032 Bianco RC
21. **B&B Casa Cosmano** — Africo
   - slug: `b-b-casa-cosmano-africo`
   - indirizzo: Traversa IV Contrada Caldara, 13, 89036 Brancaleone Marina RC
22. **B&B Il Mulino Locri** — Africo
   - slug: `b-b-il-mulino-locri-africo`
   - indirizzo: Via Taranto, 4, 89044 Locri RC
23. **B&B Villa delle Rose - Bova Marina - Reggio Calabria** — Africo
   - slug: `b-b-villa-delle-rose-bova-marina-reggio-calabria-africo`
   - indirizzo: Contrada Monoscalco, 89035 Bova Marina RC
24. **Bed & Breakfast Kalinikta** — Africo
   - slug: `bed-breakfast-kalinikta-africo`
   - indirizzo: V. Oliverio, 19, 89044 Locri RC
25. **Corte Vena** — Africo
   - slug: `corte-vena-africo`
   - indirizzo: Contrada Grazia, 89032 Bianco RC
26. **Erasippe Residence** — Africo
   - slug: `erasippe-residence-africo`
   - indirizzo: Via Erasippe, 13, 89044 Locri RC
27. **Grand Hotel Aspromonte** — Africo
   - slug: `grand-hotel-aspromonte-africo`
   - indirizzo: Via Carmelia, 5, 89012 Delianuova RC
28. **Hotel Il Girasole** — Africo
   - slug: `hotel-il-girasole-africo`
   - indirizzo: Via Marina, 64, 89035 Bova Marina RC
29. **Hotel Lungomare** — Africo
   - slug: `hotel-lungomare-africo`
   - indirizzo: Via Vittorio Emanuele III, 89036 Brancaleone Marina RC
30. **Hotel Maria Bianco (RC)** — Africo
   - slug: `hotel-maria-bianco-rc-africo`
   - indirizzo: via Nazionale, 89032 Bianco RC
31. **Hotel Ristorante Panama** — Africo
   - slug: `hotel-ristorante-panama-africo`
   - indirizzo: Via Ugo Foscolo, 46, 89037 Ardore Marina RC
32. **Il Vicoletto B&B** — Africo
   - slug: `il-vicoletto-b-b-africo`
   - indirizzo: Corso Umberto I, 198, 89034 Bovalino RC
33. **Kore Suites&Apartments** — Africo
   - slug: `kore-suites-apartments-africo`
   - indirizzo: Via Agesidamo, 34, 89044 Locri RC
34. **Palazzo Reginella Hotel & Residence** — Africo
   - slug: `palazzo-reginella-hotel-residence-africo`
   - indirizzo: Corso Umberto I, 196, 89034 Bovalino Marina RC
35. **Punto Verde** — Africo
   - slug: `punto-verde-africo`
   - indirizzo: SP76, 89031 Ardore Marina RC