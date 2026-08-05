# Blocco 120/500 — 35 strutture senza descrizione IT

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

1. **Il Giardino degli Aranci** — Antonimina
   - slug: `il-giardino-degli-aranci-antonimina`
   - indirizzo: Via Regina Margherita, 9, 89040 Antonimina RC
2. **Magia dell’Aspromonte** — Antonimina
   - slug: `magia-dell-aspromonte-antonimina`
   - indirizzo: Località Acquafredda, SNC, 89040 Ciminà RC
3. **Parco dei Principi Hotel Roccella Jonica** — Antonimina
   - slug: `parco-dei-principi-hotel-roccella-jonica-antonimina`
   - indirizzo: Loc. Badessa, S.da Statale 106 Jonica, Km 111, 89047 Roccella Ionica RC
4. **Visit.Antonimina | Affittacamere & Home** — Antonimina
   - slug: `visit-antonimina-affittacamere-home-antonimina`
   - indirizzo: Via Roma, 44/46, 89040 Antonimina RC
5. **Agriturismo Cupello** — Antrodoco
   - slug: `agriturismo-cupello-antrodoco`
   - indirizzo: Via Amiternum, 1, 67012 Cagnano Amiterno AQ
6. **Agriturismo Ristorante Santa Giusta** — Antrodoco
   - slug: `agriturismo-ristorante-santa-giusta-antrodoco`
   - indirizzo: località santa giusta, 02030 Poggio San Lorenzo RI
7. **B&B A CASA DI MAMMA** — Antrodoco
   - slug: `b-b-a-casa-di-mamma-antrodoco`
   - indirizzo: Via Veneto, 6, 02100 Rieti RI
8. **Bed & Breakfast La Vecchia Osteria** — Antrodoco
   - slug: `bed-breakfast-la-vecchia-osteria-antrodoco`
   - indirizzo: S.R. 471, 67015 Montereale AQ
9. **Bed and Breakfast Il Picchio Verde Cittaducale** — Antrodoco
   - slug: `bed-and-breakfast-il-picchio-verde-cittaducale-antrodoco`
   - indirizzo: Via Mezzanola, 2, 02015 Cittaducale RI
10. **Da Artù** — Antrodoco
   - slug: `da-artu-antrodoco`
   - indirizzo: Via Monviso, 7, 02015 Cittaducale RI
11. **Guest House La Palazzina a Rieti, zona Quattrostrade, vicino al Santuario della Foresta. Affitta camere confortevoli.** — Antrodoco
   - slug: `guest-house-la-palazzina-a-rieti-zona-quattrostr-antrodoco`
   - indirizzo: Via Angelo Maria Ricci, 107, 02100 Rieti RI
12. **Hotel Blu** — Antrodoco
   - slug: `hotel-blu-antrodoco`
   - indirizzo: Via Salaria per l'Aquila, 52, 02100 Rieti RI
13. **Hotel Campo Stella** — Antrodoco
   - slug: `hotel-campo-stella-antrodoco`
   - indirizzo: SP10, 02016 Leonessa RI
14. **Hotel Europa** — Antrodoco
   - slug: `hotel-europa-antrodoco`
   - indirizzo: Via S. Rufo, 49, 02100 Rieti RI
15. **Hotel Grazia Ristorante la Capricciosa** — Antrodoco
   - slug: `hotel-grazia-ristorante-la-capricciosa-antrodoco`
   - indirizzo: Via delle Conserve, 14, 67049 Rocca Santo Stefano AQ
16. **Hotel Miramonti** — Antrodoco
   - slug: `hotel-miramonti-antrodoco`
   - indirizzo: Piazza Guglielmo Oberdan, 5, 02100 Rieti RI
17. **Il Rifugio nel Bosco - Cammino di Francesco** — Antrodoco
   - slug: `il-rifugio-nel-bosco-cammino-di-francesco-antrodoco`
   - indirizzo: Via Acquamartina, 7, 02100 Rieti RI
18. **L'Archetto Apartment Rieti** — Antrodoco
   - slug: `l-archetto-apartment-rieti-antrodoco`
   - indirizzo: Via della Verdura, 51, 02100 Rieti RI
19. **La Casa della Rocca** — Antrodoco
   - slug: `la-casa-della-rocca-antrodoco`
   - indirizzo: Piazza Santa Maria Assunta, 3, 02013 Antrodoco RI
20. **Ostello Il Castagno** — Antrodoco
   - slug: `ostello-il-castagno-antrodoco`
   - indirizzo: Via Fossi, 15, 02013 Antrodoco RI
21. **Palazzo Pallini** — Antrodoco
   - slug: `palazzo-pallini-antrodoco`
   - indirizzo: Corso Roma, 12, 02013 Antrodoco RI
22. **Porta Conca Apartments** — Antrodoco
   - slug: `porta-conca-apartments-antrodoco`
   - indirizzo: Via Bevilacqua, 20, 02100 Rieti RI
23. **Albergo Cristallo** — Antrona Schieranco
   - slug: `albergo-cristallo-antrona-schieranco`
   - indirizzo: Centro Abitato Pecetto, 22, 28876 Macugnaga VB
24. **Albergo Edelweiss** — Antrona Schieranco
   - slug: `albergo-edelweiss-antrona-schieranco`
   - indirizzo: Via Guglielmo Marconi, 43, 28842 Bognanco VB
25. **Albergo Emiliana** — Antrona Schieranco
   - slug: `albergo-emiliana-antrona-schieranco`
   - indirizzo: Via Sempione, 11, 28844 Villadossola VB
26. **Albergo Ristorante Da Cecilia** — Antrona Schieranco
   - slug: `albergo-ristorante-da-cecilia-antrona-schieranco`
   - indirizzo: Frazione Graniga, 37, 28842 Bognanco VB
27. **Albergo Ristorante Lago Pineta** — Antrona Schieranco
   - slug: `albergo-ristorante-lago-pineta-antrona-schieranco`
   - indirizzo: 15, Regione Lago Pineta, 28841 Antrona Schieranco VB
28. **Albergo Ristorante Regina bognanco Verbania** — Antrona Schieranco
   - slug: `albergo-ristorante-regina-bognanco-verbania-antrona-schieranco`
   - indirizzo: Via Guglielmo Marconi, 2, 28842 Fonti VB
29. **B&B Casa Quaroni** — Antrona Schieranco
   - slug: `b-b-casa-quaroni-antrona-schieranco`
   - indirizzo: via del Ri, 2, 28871 Bannio Anzino VB
30. **B&B La vecchia posta** — Antrona Schieranco
   - slug: `b-b-la-vecchia-posta-antrona-schieranco`
   - indirizzo: Via Guglielmo Marconi, 16, 28841 Antrona Schieranco VB
31. **Casa Alpina De Filippi** — Antrona Schieranco
   - slug: `casa-alpina-de-filippi-antrona-schieranco`
   - indirizzo: Piazza Pecetto, 73, 28876 Macugnaga VB
32. **Dream Hotel** — Antrona Schieranco
   - slug: `dream-hotel-antrona-schieranco`
   - indirizzo: Via Monte Rosa, 41, 28876 Macugnaga VB
33. **Hotel Corona** — Antrona Schieranco
   - slug: `hotel-corona-antrona-schieranco`
   - indirizzo: Via Guglielmo Marconi, 8, 28845 Domodossola VB
34. **Hotel Dufour** — Antrona Schieranco
   - slug: `hotel-dufour-antrona-schieranco`
   - indirizzo: Piazza Municipio, 100, 28876 Macugnaga VB
35. **Hotel Internazionale** — Antrona Schieranco
   - slug: `hotel-internazionale-antrona-schieranco`
   - indirizzo: Regione alle Nosere, 8C, 28845 Domodossola VB