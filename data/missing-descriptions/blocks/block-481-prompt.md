# Blocco 481/500 — 35 strutture senza descrizione IT

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

1. **Al Postale 17** — Erice
   - slug: `al-postale-17-erice`
   - indirizzo: Via Vittorio Emanuele, 111, 91016 Erice TP
2. **Albergo • Hotel Edelweiss** — Erice
   - slug: `albergo-hotel-edelweiss-erice`
   - indirizzo: Via Padre Vincenzo Cortile, 91016 Erice TP
3. **Albergo Villa San Giovanni** — Erice
   - slug: `albergo-villa-san-giovanni-erice`
   - indirizzo: Viale Nunzio Nasi, 12, 91016 Erice TP
4. **B&B Bella vista** — Erice
   - slug: `b-b-bella-vista-erice`
   - indirizzo: Via Chiaramonte, n.25, 91016 Erice TP
5. **B&B Erice Mare** — Erice
   - slug: `b-b-erice-mare-erice`
   - indirizzo: Via Darete, 47 Pizzolungo rinominata, via Leda, 11, 91016 Erice TP
6. **Baia dei Mulini Resort & Spa** — Erice
   - slug: `baia-dei-mulini-resort-spa-erice`
   - indirizzo: Lungomare Dante Alighieri, 91016 Casa Santa TP
7. **Camere di Ulisse - Affitta Camere/Alloggi Erice** — Erice
   - slug: `camere-di-ulisse-affitta-camere-alloggi-erice-erice`
   - indirizzo: Via Santa Lucia, 2, 91016 Erice TP
8. **Casa Cattauro** — Erice
   - slug: `casa-cattauro-erice`
   - indirizzo: Via Sales, 33, 91016 Erice TP
9. **Erice Doc** — Erice
   - slug: `erice-doc-erice`
   - indirizzo: Via G. Fontana, 91016 Erice TP
10. **Hotel Elimo Ristorante Panoramico** — Erice
   - slug: `hotel-elimo-ristorante-panoramico-erice`
   - indirizzo: Via Vittorio Emanuele, 75, 91016 Erice TP
11. **Hotel Moderno** — Erice
   - slug: `hotel-moderno-erice`
   - indirizzo: Via Vittorio Emanuele, n°63, 91016 Erice TP
12. **Hotel San Domenico** — Erice
   - slug: `hotel-san-domenico-erice`
   - indirizzo: Via Tomm Guarrasi, 26, 91016 Erice TP
13. **Hotel Tirreno** — Erice
   - slug: `hotel-tirreno-erice`
   - indirizzo: Via Enea, 37, 91016 Pizzolungo TP
14. **Hotel Venere di Erice Resort e Spa** — Erice
   - slug: `hotel-venere-di-erice-resort-e-spa-erice`
   - indirizzo: Via Erice, snc/Km 1, 91019 Valderice TP
15. **Il Carmine** — Erice
   - slug: `il-carmine-erice`
   - indirizzo: Piazza Carmine, 23, 91016 Erice TP
16. **PARCO DEGLI AROMI RESORT e SPA** — Erice
   - slug: `parco-degli-aromi-resort-e-spa-erice`
   - indirizzo: c/da linciasella, 91019 Valderice TP
17. **Pietre Antiche Appartamenti e Camere** — Erice
   - slug: `pietre-antiche-appartamenti-e-camere-erice`
   - indirizzo: Via G. Fontana, 12, 91016 Erice TP
18. **Residenza San Martino** — Erice
   - slug: `residenza-san-martino-erice`
   - indirizzo: Via Pietro Salerno, 91016 Erice TP
19. **Agriturismo Mama Lina** — Falcone
   - slug: `agriturismo-mama-lina-falcone`
   - indirizzo: SP119, 90, 98066 Patti ME
20. **Ermes B&B** — Falcone
   - slug: `ermes-b-b-falcone`
   - indirizzo: Via Nazionale, 296, 98060 Falcone ME
21. **Hotel Europa - Falcone, Sicily** — Falcone
   - slug: `hotel-europa-falcone-sicily-falcone`
   - indirizzo: Via Nazionale, 306, 98060 Falcone ME
22. **Hotel Grotte Ristorante Pizzeria** — Falcone
   - slug: `hotel-grotte-ristorante-pizzeria-falcone`
   - indirizzo: Via Grotte, 5, 98066 Patti ME
23. **Hotel Trattoria 4 Stagioni** — Falcone
   - slug: `hotel-trattoria-4-stagioni-falcone`
   - indirizzo: Via Comunale Fiume, 7, 98060 Falcone ME
24. **La Brezza B & B** — Falcone
   - slug: `la-brezza-b-b-falcone`
   - indirizzo: Via Maiolino, 165, 98060 Falcone ME
25. **La Casa Du Barone** — Falcone
   - slug: `la-casa-du-barone-falcone`
   - indirizzo: Via Nazionale, 168, 98060 Falcone ME
26. **La Ruota** — Falcone
   - slug: `la-ruota-falcone`
   - indirizzo: Via Cristoforo Colombo, 17, 98060 Oliveri ME
27. **Le Stelle Del Tirreno** — Falcone
   - slug: `le-stelle-del-tirreno-falcone`
   - indirizzo: Via Giuseppe Mazzini, 13, 98060 Falcone ME
28. **Sea Elegance Home Holiday** — Falcone
   - slug: `sea-elegance-home-holiday-falcone`
   - indirizzo: Via Diodoro, 16, 98060 Oliveri ME
29. **B&B Aurora** — Favara
   - slug: `b-b-aurora-favara`
   - indirizzo: Via Roma, 90, 92026 Favara AG
30. **Diodorus Luxury Experience** — Favara
   - slug: `diodorus-luxury-experience-favara`
   - indirizzo: Contrada Esa Chimento S/N, Via Chimento, 92100 Favara AG
31. **Il Giardino Dei Templi** — Favara
   - slug: `il-giardino-dei-templi-favara`
   - indirizzo: Via Panoramica Valle dei Templi, 5, 92100 Agrigento AG
32. **Le Suite Di Via Veneto** — Favara
   - slug: `le-suite-di-via-veneto-favara`
   - indirizzo: Corso Vittorio Veneto, 365, 92026 Favara AG
33. **SCIABICA SUITE - Sicilian Experience** — Favara
   - slug: `sciabica-suite-sicilian-experience-favara`
   - indirizzo: Cortile Bentivegna, 24, 92026 Favara AG
34. **URBAN RELAX B&B** — Favara
   - slug: `urban-relax-b-b-favara`
   - indirizzo: Viale Aldo Moro, 234/AF, 92026 Favara AG
35. **Affittacamere Al Gattopardo** — Favignana
   - slug: `affittacamere-al-gattopardo-favignana`
   - indirizzo: Via Arturo di Vita, 4, 91023 Favignana TP