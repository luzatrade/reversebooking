# Blocco 406/500 — 35 strutture senza descrizione IT

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

1. **Lo Scoiattolo** — Canistro
   - slug: `lo-scoiattolo-canistro`
   - indirizzo: Via Napoli, 138, 67050 Castellafiume AQ
2. **Agriturismo Antico Casale** — Canna
   - slug: `agriturismo-antico-casale-canna`
   - indirizzo: Contrada Santa Marina, 7, 87073 Oriolo CS
3. **Agriturismo Cervinace** — Canna
   - slug: `agriturismo-cervinace-canna`
   - indirizzo: C/da Cervinace, 4, 87073 Oriolo CS
4. **Agriturismo Pace Canna** — Canna
   - slug: `agriturismo-pace-canna-canna`
   - indirizzo: Contrada Destre, 3, 87070 Canna CS
5. **Alma Hotel** — Canna
   - slug: `alma-hotel-canna`
   - indirizzo: Via Tripoli, 2, 75027 San Giorgio Lucano MT
6. **B&B Dimora Valicenti** — Canna
   - slug: `b-b-dimora-valicenti-canna`
   - indirizzo: Corso V. Emanuele, 146, 75027 San Giorgio Lucano MT
7. **B&B Giampi e Carmela** — Canna
   - slug: `b-b-giampi-e-carmela-canna`
   - indirizzo: Via Mercato, 36, 87070 Rocca CS
8. **B&B Nova Siri** — Canna
   - slug: `b-b-nova-siri-canna`
   - indirizzo: Vicolo II Gramsci, 13/c, 75020 Nova Siri Scalo MT
9. **B&B Ristorante Pizzeria Villhour** — Canna
   - slug: `b-b-ristorante-pizzeria-villhour-canna`
   - indirizzo: Contrada Montemilone, 87074 Rocca Imperiale CS
10. **Bella Vista Mare** — Canna
   - slug: `bella-vista-mare-canna`
   - indirizzo: Contrada Secolare, 9, 87070 Montegiordano CS
11. **Best Western Hotel Imperiale** — Canna
   - slug: `best-western-hotel-imperiale-canna`
   - indirizzo: Via Maiorana, 75020 Nova Siri MT
12. **Casa castello** — Canna
   - slug: `casa-castello-canna`
   - indirizzo: Via Federico Svevo, 29, 87074 Rocca Imperiale CS
13. **Eco Resort dei Siriti** — Canna
   - slug: `eco-resort-dei-siriti-canna`
   - indirizzo: Contrada Piantata, 75020 Nova Siri MT
14. **Hotel Villa Cirigliano** — Canna
   - slug: `hotel-villa-cirigliano-canna`
   - indirizzo: Pane E Vino, 75028 Tursi MT
15. **il borgo del benessere** — Canna
   - slug: `il-borgo-del-benessere-canna`
   - indirizzo: V. Mercato, 39, 87074 Rocca Imperiale CS
16. **Il Giglio Casa Albergo** — Canna
   - slug: `il-giglio-casa-albergo-canna`
   - indirizzo: Via Giglio, 4, 75026 Rotondella MT
17. **Prestige Luxury Rooms & Apartment** — Canna
   - slug: `prestige-luxury-rooms-apartment-canna`
   - indirizzo: Piazza Tarsia Vittorio, 1, Via Giuseppe Garibaldi, 39, 87070 Montegiordano CS
18. **Siris Hotel** — Canna
   - slug: `siris-hotel-canna`
   - indirizzo: Via Magna Grecia, 2, 75020 Nova Siri MT
19. **Toccacielo** — Canna
   - slug: `toccacielo-canna`
   - indirizzo: Contrada Laccata, 75020 Nova Siri MT
20. **A Casa Mia B&B** — Cannalonga
   - slug: `a-casa-mia-b-b-cannalonga`
   - indirizzo: Via Municipio, 51, 84060 Moio della Civitella SA
21. **Agriturismo L'Oasi** — Cannalonga
   - slug: `agriturismo-l-oasi-cannalonga`
   - indirizzo: Via Bonopra, 84052 Massascusa SA
22. **Agriturismo Salella - Azienda Agricola** — Cannalonga
   - slug: `agriturismo-salella-azienda-agricola-cannalonga`
   - indirizzo: Salella, 84070 Salento SA
23. **Askia Rooms & Breakfast** — Cannalonga
   - slug: `askia-rooms-breakfast-cannalonga`
   - indirizzo: Località Fumarella Località, Via Fiumarella, 3, 84046 Marina di Ascea SA
24. **B&B L'Aurora** — Cannalonga
   - slug: `b-b-l-aurora-cannalonga`
   - indirizzo: Via per Vallo, 1, 84052 Ceraso SA
25. **Casale Degli Ulivi Ristorante e Resort** — Cannalonga
   - slug: `casale-degli-ulivi-ristorante-e-resort-cannalonga`
   - indirizzo: Via Tempone, 1, 84060 Moio della Civitella SA
26. **Hotel Giardino San Michele** — Cannalonga
   - slug: `hotel-giardino-san-michele-cannalonga`
   - indirizzo: Via Monte Gelbison, 84060 Novi Velia SA
27. **La Casa al Piccolo Borgo** — Cannalonga
   - slug: `la-casa-al-piccolo-borgo-cannalonga`
   - indirizzo: Via San Salvatore, 1, 84040 Vallo della Lucania SA
28. **Palazzo Resilente** — Cannalonga
   - slug: `palazzo-resilente-cannalonga`
   - indirizzo: Via Velina, 102, 84040 Velina SA
29. **Ruggiero Park Hotel** — Cannalonga
   - slug: `ruggiero-park-hotel-cannalonga`
   - indirizzo: Via Antonio della Gatta, 22, 84078 Vallo della Lucania SA
30. **Affittacamere Bella Treccia** — Cannara
   - slug: `affittacamere-bella-treccia-cannara`
   - indirizzo: Vocabolo Selvetta, 44, 06033 Cannara PG
31. **Agriturismo Il Cicaleto Cannara** — Cannara
   - slug: `agriturismo-il-cicaleto-cannara-cannara`
   - indirizzo: 06033 Cannara PG
32. **AGRITURISMO INCANTO DELLA NATURA** — Cannara
   - slug: `agriturismo-incanto-della-natura-cannara`
   - indirizzo: Vocabolo Conversino, 171, 06033 Cannara PG
33. **Al Vecchio Pozzo** — Cannara
   - slug: `al-vecchio-pozzo-cannara`
   - indirizzo: Via Fornaci, 156, 06033 Cannara PG
34. **b & b antica dimora delle acque** — Cannara
   - slug: `b-b-antica-dimora-delle-acque-cannara`
   - indirizzo: Via del Borgo, 2, 06033 Cannara PG
35. **B&B Cuor di Lavanda** — Cannara
   - slug: `b-b-cuor-di-lavanda-cannara`
   - indirizzo: Vocabolo S.S. Apostoli, 101, 06033 Cannara PG