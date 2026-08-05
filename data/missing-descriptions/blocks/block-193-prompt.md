# Blocco 193/500 — 35 strutture senza descrizione IT

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

1. **Chiara’s Home** — Badolato
   - slug: `chiara-s-home-badolato`
   - indirizzo: Via Cristoforo Colombo, 10, 88060 Marina di Davoli CZ
2. **Club Esse Aquilia Beach Village** — Badolato
   - slug: `club-esse-aquilia-beach-village-badolato`
   - indirizzo: Via Aquilia, snc, 88060 Badolato CZ
3. **Hotel Nettuno** — Badolato
   - slug: `hotel-nettuno-badolato`
   - indirizzo: Viale Grecia Magna, 42, 88068 Soverato CZ
4. **Il Borgo & Feudo b&b** — Badolato
   - slug: `il-borgo-feudo-b-b-badolato`
   - indirizzo: Via S. Leonardo, 9, 88060 Badolato CZ
5. **Nausicaa Village** — Badolato
   - slug: `nausicaa-village-badolato`
   - indirizzo: Viale Francesco Lucifero, 88060 Sant'Andrea Apostolo dello Ionio CZ
6. **Pansini Hotel Residence** — Badolato
   - slug: `pansini-hotel-residence-badolato`
   - indirizzo: Via Nazionale, 137, 88060 Badolato Marina CZ
7. **Riva del Sol Beach Resort** — Badolato
   - slug: `riva-del-sol-beach-resort-badolato`
   - indirizzo: Località Cuttura, Contrada Cuttura, 1, 88060 Santa Caterina dello Ionio CZ
8. **Villaggio La Feluca** — Badolato
   - slug: `villaggio-la-feluca-badolato`
   - indirizzo: Contrada Rugo, 88060 Isca sullo Ionio CZ
9. **Affittacamere Santa Caterina** — Bagaladi
   - slug: `affittacamere-santa-caterina-bagaladi`
   - indirizzo: Via Santa Caterina d'Alessandria, 187, 89122 Reggio Calabria RC
10. **Athena Luxury Room** — Bagaladi
   - slug: `athena-luxury-room-bagaladi`
   - indirizzo: Via Tommaso Campanella, 46, 89127 Reggio di Calabria RC
11. **B&B "Il Giardino delle Meraviglie"** — Bagaladi
   - slug: `b-b-il-giardino-delle-meraviglie-bagaladi`
   - indirizzo: Via Antonio Familiari, 44, 89063 Melito di Porto Salvo RC
12. **B&B Green** — Bagaladi
   - slug: `b-b-green-bagaladi`
   - indirizzo: Viale Galileo Galilei, 9, 89129 Reggio di Calabria RC
13. **B&B Il Gabbiano** — Bagaladi
   - slug: `b-b-il-gabbiano-bagaladi`
   - indirizzo: Traversa Quarta, Via Maldariti, 29, 89131 Reggio Calabria RC
14. **B&B La Pineta** — Bagaladi
   - slug: `b-b-la-pineta-bagaladi`
   - indirizzo: Viale Genoese Zerbi, 13a, 89127 Reggio Calabria RC
15. **Hotel Continental** — Bagaladi
   - slug: `hotel-continental-bagaladi`
   - indirizzo: Via Vincenzo Florio, 10, 89123 Reggio Calabria RC
16. **Il Corallo Azzurro – B&b** — Bagaladi
   - slug: `il-corallo-azzurro-b-b-bagaladi`
   - indirizzo: Via Nazionale Bocale 2, 270, 89134 Reggio di Calabria RC
17. **Il Falco Luxury B&B al Centro Città** — Bagaladi
   - slug: `il-falco-luxury-b-b-al-centro-citta-bagaladi`
   - indirizzo: Via del Torrione, 72, 89125 Reggio di Calabria RC
18. **Le Mirage Boutique II** — Bagaladi
   - slug: `le-mirage-boutique-ii-bagaladi`
   - indirizzo: Via Cavour, 1, 89127 Reggio Calabria RC
19. **Magnagrecia B&B** — Bagaladi
   - slug: `magnagrecia-b-b-bagaladi`
   - indirizzo: Via Magna Grecia, 13, 89128 Reggio di Calabria RC
20. **nonna rosa Reggio calabria** — Bagaladi
   - slug: `nonna-rosa-reggio-calabria-bagaladi`
   - indirizzo: Traversa 1ª Privata Scagliola, 8, 89131 Reggio di Calabria RC
21. **Nta zia** — Bagaladi
   - slug: `nta-zia-bagaladi`
   - indirizzo: Via S. Teodoro, 4, 89060 Bagaladi RC
22. **Paradiso Hotel & Banqueting** — Bagaladi
   - slug: `paradiso-hotel-banqueting-bagaladi`
   - indirizzo: RIONE BRANCA LAZZARO LAZZARO RC IT, Rione Capo D'Armi Dir Faro, 89065 Rione Branca RC
23. **Possidonea 28** — Bagaladi
   - slug: `possidonea-28-bagaladi`
   - indirizzo: Via Possidonea, 28, 89125 Reggio Calabria RC
24. **Re Ruggero Rooms** — Bagaladi
   - slug: `re-ruggero-rooms-bagaladi`
   - indirizzo: Via Ruggero Re, 6, 89127 Reggio Calabria RC
25. **Rhegion B&B** — Bagaladi
   - slug: `rhegion-b-b-bagaladi`
   - indirizzo: Via Antonio Cimino, 59, 89127 Reggio di Calabria RC
26. **Villa sul Mare Bed & Breakfast** — Bagaladi
   - slug: `villa-sul-mare-bed-breakfast-bagaladi`
   - indirizzo: Via Lungomare dei Mille, 34, 89063 Melito di Porto Salvo RC
27. **Vista Mare B&B Reggio Calabria /Vista mare affittacamere reggio calabria** — Bagaladi
   - slug: `vista-mare-b-b-reggio-calabria-vista-mare-affitt-bagaladi`
   - indirizzo: Via Reggio Campi, A 9, 89126 Reggio di Calabria RC
28. **Agriturismo Rajata** — Bagheria
   - slug: `agriturismo-rajata-bagheria`
   - indirizzo: SP127, 88, 90011 Bagheria PA
29. **B&B Bagheria** — Bagheria
   - slug: `b-b-bagheria-bagheria`
   - indirizzo: Via Bernardo Mattarella, 20, 90011 Bagheria PA
30. **B&B D'Amico87** — Bagheria
   - slug: `b-b-d-amico87-bagheria`
   - indirizzo: Via D. d'Amico, 87/Secondo piano, 90011 Bagheria PA
31. **Baglio delle Rondini** — Bagheria
   - slug: `baglio-delle-rondini-bagheria`
   - indirizzo: Viale Sant'Isidoro, 84, 90011 Bagheria PA
32. **Da Franco il Conte** — Bagheria
   - slug: `da-franco-il-conte-bagheria`
   - indirizzo: Via Vallone de Spuches, 29/31, 90011 Bagheria PA
33. **Hotel Centrale** — Bagheria
   - slug: `hotel-centrale-bagheria`
   - indirizzo: Via Greco, 5, 90011 Bagheria PA
34. **Hotel Villa D'Amato** — Bagheria
   - slug: `hotel-villa-d-amato-bagheria`
   - indirizzo: Via Messina Marine, 180, 90121 Palermo PA
35. **La Martinica Srl** — Bagheria
   - slug: `la-martinica-srl-bagheria`
   - indirizzo: Viale Europa, 9, 90010 Ficarazzi PA