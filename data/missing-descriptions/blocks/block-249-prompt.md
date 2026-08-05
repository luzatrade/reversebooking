# Blocco 249/500 — 35 strutture senza descrizione IT

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

1. **Hotel Belvedere** — Bellona
   - slug: `hotel-belvedere-bellona`
   - indirizzo: SS87, 85, 81100 Caserta CE
2. **Hotel Capys S. R. L.** — Bellona
   - slug: `hotel-capys-s-r-l-bellona`
   - indirizzo: Via Santa Maria la Fossa, 24, 81043 Capua CE
3. **Hotel Del Sole** — Bellona
   - slug: `hotel-del-sole-bellona`
   - indirizzo: Contrada Santa Justa, 81050 Pastorano CE
4. **Hotel Miami ️️️** — Bellona
   - slug: `hotel-miami-bellona`
   - indirizzo: SP 333, 20, 81041 Triflisco CE
5. **Hotel The Queen** — Bellona
   - slug: `hotel-the-queen-bellona`
   - indirizzo: Via Casilina, Km. 191.300, 81050 Pastorano CE
6. **La Cascina Eurhotel** — Bellona
   - slug: `la-cascina-eurhotel-bellona`
   - indirizzo: S.s. Appia, Km 194, 81050 Pastorano CE
7. **Medea Resort Hotel & Ricevimenti** — Bellona
   - slug: `medea-resort-hotel-ricevimenti-bellona`
   - indirizzo: SP 333, 11, 81041 Triflisco CE
8. **Sotto le stelle di capua B&B** — Bellona
   - slug: `sotto-le-stelle-di-capua-b-b-bellona`
   - indirizzo: Via Duomo, 14/Terzo Piano, Int.1, 81043 Capua CE
9. **Tenuta San Domenico** — Bellona
   - slug: `tenuta-san-domenico-bellona`
   - indirizzo: Traversa di Via Provinciale, Via Galatina, 81043 Sant'Angelo In Formis CE
10. **Agriturismo Li Guira** — Bellosguardo
   - slug: `agriturismo-li-guira-bellosguardo`
   - indirizzo: Contrada Cannavali, snc, 84075 Stio SA
11. **B&B Antonella** — Bellosguardo
   - slug: `b-b-antonella-bellosguardo`
   - indirizzo: Via Ortale, 6, 84060 Perito SA
12. **Le Cammarose** — Bellosguardo
   - slug: `le-cammarose-bellosguardo`
   - indirizzo: Contrada Cammarose, 84055 Felitto SA
13. **Villa Vilù** — Bellosguardo
   - slug: `villa-vilu-bellosguardo`
   - indirizzo: c/da Tufolo, Bellosguardo, Italy, 84020, 84020 Bellosguardo SA
14. **Al torrione** — Belluno
   - slug: `al-torrione-belluno`
   - indirizzo: Via Roma, 15, 32100 Belluno BL
15. **Albergo Mirella** — Belluno
   - slug: `albergo-mirella-belluno`
   - indirizzo: Via Don Giovanni Minzoni, 6, 32100 Belluno BL
16. **B & B "Al sole di Cavessago"** — Belluno
   - slug: `b-b-al-sole-di-cavessago-belluno`
   - indirizzo: Via della Vigna, 44, 32100 Belluno BL
17. **Casa de Bertoldi - Agriturismo** — Belluno
   - slug: `casa-de-bertoldi-agriturismo-belluno`
   - indirizzo: Villa alla Costa, Via Pedecastello, 40, 32024 Castion BL
18. **Casa Fullin** — Belluno
   - slug: `casa-fullin-belluno`
   - indirizzo: Via Cusighe, 3, 32100 Belluno BL
19. **Casa Per Ferie Al Centro** — Belluno
   - slug: `casa-per-ferie-al-centro-belluno`
   - indirizzo: Piazza Giorgio Piloni, 11, 32100 Belluno BL
20. **Dolomiti Suite** — Belluno
   - slug: `dolomiti-suite-belluno`
   - indirizzo: Via Feltre, 25, 32100 Belluno BL
21. **DolomitiNice1** — Belluno
   - slug: `dolomitinice1-belluno`
   - indirizzo: Via Cordevole, 82, 32100 Belluno BL
22. **DORMIRE CALDI Affittacamere** — Belluno
   - slug: `dormire-caldi-affittacamere-belluno`
   - indirizzo: Via Cavassico Inferiore, 9, 32026 Trichiana BL
23. **Gioz87** — Belluno
   - slug: `gioz87-belluno`
   - indirizzo: Via Gioz, 87, 32100 Belluno BL
24. **La Tieda - locazione turistica** — Belluno
   - slug: `la-tieda-locazione-turistica-belluno`
   - indirizzo: Via Madeago, 26, 32100 Belluno BL
25. **A Taverna Intru u Vicu** — Belmonte Calabro
   - slug: `a-taverna-intru-u-vicu-belmonte-calabro`
   - indirizzo: Vico Terzo Indipendenza, 7, 87033 Belmonte Calabro CS
26. **B&B Dimora Dante** — Belmonte Calabro
   - slug: `b-b-dimora-dante-belmonte-calabro`
   - indirizzo: Sopportico Piazza, 87032 Amantea CS
27. **Hotel Gaudio** — Belmonte Calabro
   - slug: `hotel-gaudio-belmonte-calabro`
   - indirizzo: Strada Statale 18 Tirrena Inferiore, 87030 Longobardi CS
28. **Il Flauto Magico B&B** — Belmonte Calabro
   - slug: `il-flauto-magico-b-b-belmonte-calabro`
   - indirizzo: V. Antonio Verre, snc, 87033 Belmonte Calabro CS
29. **La Casa della Filanda** — Belmonte Calabro
   - slug: `la-casa-della-filanda-belmonte-calabro`
   - indirizzo: Via Cavour, 13, 87033 Belmonte Calabro CS
30. **LA LOCANDA DEL SARTO** — Belmonte Calabro
   - slug: `la-locanda-del-sarto-belmonte-calabro`
   - indirizzo: Viale Michele Bianchi, 33, 87033 Belmonte Calabro CS
31. **Villa le Palme Longobardi** — Belmonte Calabro
   - slug: `villa-le-palme-longobardi-belmonte-calabro`
   - indirizzo: Via Marina, 35, 87030 Longobardi CS
32. **Villa Maria B&B** — Belmonte Calabro
   - slug: `villa-maria-b-b-belmonte-calabro`
   - indirizzo: Via Alessandro Volta, 4, 87040 Marano Principato CS
33. **Agriturismo Belvedere** — Belmonte Castello
   - slug: `agriturismo-belvedere-belmonte-castello`
   - indirizzo: Via del Belvedere, 1650, 03042 Atina FR
34. **Agriturismo di charme erbadoro** — Belmonte Castello
   - slug: `agriturismo-di-charme-erbadoro-belmonte-castello`
   - indirizzo: Via Antica Molito, 12, 03041 Alvito FR
35. **Agriturismo eco-bio Belmonte Vacanze** — Belmonte Castello
   - slug: `agriturismo-eco-bio-belmonte-vacanze-belmonte-castello`
   - indirizzo: Via Torri, 62, 50050 Montaione FI