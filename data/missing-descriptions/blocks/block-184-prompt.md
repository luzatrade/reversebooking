# Blocco 184/500 — 35 strutture senza descrizione IT

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

1. **B&B da Stefano** — Avise
   - slug: `b-b-da-stefano-avise`
   - indirizzo: fraz. Runaz 70, 11010 Avise AO
2. **B&B Le coeur de Rochefort** — Avise
   - slug: `b-b-le-coeur-de-rochefort-avise`
   - indirizzo: Frazione Rochefort, 22, 11011 Arvier AO
3. **B&B Luca76** — Avise
   - slug: `b-b-luca76-avise`
   - indirizzo: Frazione Cerellaz, 5, 11010 Avise AO
4. **Hotel Des Alpes** — Avise
   - slug: `hotel-des-alpes-avise`
   - indirizzo: Frazione Cerellaz, 54, 11010 Avise AO
5. **Hotel Notre Maison** — Avise
   - slug: `hotel-notre-maison-avise`
   - indirizzo: Loc Villette, 4, 11010 Saint-Pierre AO
6. **La vieille Meison de Pappa** — Avise
   - slug: `la-vieille-meison-de-pappa-avise`
   - indirizzo: Frazione Lalex, 53, 11010 Sarre AO
7. **Maison Bovard** — Avise
   - slug: `maison-bovard-avise`
   - indirizzo: Gerbelle, 16, 11010 Valgrisenche AO
8. **B&B Ermes** — Avola
   - slug: `b-b-ermes-avola`
   - indirizzo: via De Pretis 10, 96012 Avola SR
9. **B&B Meliora Rooms** — Avola
   - slug: `b-b-meliora-rooms-avola`
   - indirizzo: Via Rattazzi, 86, 96012 Avola SR
10. **B&B Nonna Nina** — Avola
   - slug: `b-b-nonna-nina-avola`
   - indirizzo: Via Resistenza Partigiani, 14, 96012 Avola SR
11. **B&B Pantanello Rooms** — Avola
   - slug: `b-b-pantanello-rooms-avola`
   - indirizzo: Di fronte alla spiaggia di Pantanello, Via G. Fortunato, 3, 96012 Avola SR
12. **B&B Salvo e Terry** — Avola
   - slug: `b-b-salvo-e-terry-avola`
   - indirizzo: Via Sandro Pertini, 19, 96012 Avola SR
13. **Green House** — Avola
   - slug: `green-house-avola`
   - indirizzo: Via Mario d'Aleo, 7, 96012 Avola SR
14. **Hotel Don Giovanni 1943** — Avola
   - slug: `hotel-don-giovanni-1943-avola`
   - indirizzo: Via Aldo Moro, 4, 96012 Avola SR
15. **Hotel Merlino** — Avola
   - slug: `hotel-merlino-avola`
   - indirizzo: Viale Papa Giovanni Paolo II, 96012 Avola SR
16. **Hotel Paclà** — Avola
   - slug: `hotel-pacla-avola`
   - indirizzo: Contrada Zuccara, 96012 Avola SR
17. **Hotel Villa Ionia** — Avola
   - slug: `hotel-villa-ionia-avola`
   - indirizzo: Via Sandro Pertini, 18, 96012 Avola SR
18. **Hybla Major B&B** — Avola
   - slug: `hybla-major-b-b-avola`
   - indirizzo: Via Baracca, 8, 96012 Avola SR
19. **Il Moro Charming Rooms** — Avola
   - slug: `il-moro-charming-rooms-avola`
   - indirizzo: Via Benedetto Croce, 11, 96012 Avola SR
20. **Le Torrette rooms** — Avola
   - slug: `le-torrette-rooms-avola`
   - indirizzo: Viale Lido, 66, 96012 Avola SR
21. **Le Tre Punte B&B** — Avola
   - slug: `le-tre-punte-b-b-avola`
   - indirizzo: Via 1° Maggio, 2, 96012 Avola SR
22. **Marricriu BeB Rooms and Pool Avola** — Avola
   - slug: `marricriu-beb-rooms-and-pool-avola-avola`
   - indirizzo: Via Vespri Siciliani, 2, 96012 Avola SR
23. **Miramare Rooms** — Avola
   - slug: `miramare-rooms-avola`
   - indirizzo: Via Miramare, 3, 96012 Avola SR
24. **Morfeo Charming Rooms & Relax** — Avola
   - slug: `morfeo-charming-rooms-relax-avola`
   - indirizzo: Via Procida, 116, 96012 Avola SR
25. **Shurhuq | Ospitalità Siciliana** — Avola
   - slug: `shurhuq-ospitalita-siciliana-avola`
   - indirizzo: Viale Lido, 23, 96012 Avola SR
26. **Zanzi 's Charming Rooms** — Avola
   - slug: `zanzi-s-charming-rooms-avola`
   - indirizzo: Via Procida, 77, 96012 Avola SR
27. **Agriturismo Casa Castellini** — Avolasca
   - slug: `agriturismo-casa-castellini-avolasca`
   - indirizzo: Frazione Ca' dei, Frazione Cà Castellini, 2, 15050 Garbagna AL
28. **B&B Chiara** — Avolasca
   - slug: `b-b-chiara-avolasca`
   - indirizzo: Via Palazzo, 4, 15056 San Sebastiano Curone AL
29. **B&B La Casa dei Mimirs** — Avolasca
   - slug: `b-b-la-casa-dei-mimirs-avolasca`
   - indirizzo: Frazione San Vito 3, 15050 Garbagna AL
30. **B&B Ponte del Tonno** — Avolasca
   - slug: `b-b-ponte-del-tonno-avolasca`
   - indirizzo: Via 14 Marzo, 70, 15050 Garbagna AL
31. **Borgo di Castellania** — Avolasca
   - slug: `borgo-di-castellania-avolasca`
   - indirizzo: Via Fausto Coppi, 1, 15051 Castellania AL
32. **Il Mirto Crespo** — Avolasca
   - slug: `il-mirto-crespo-avolasca`
   - indirizzo: Str. della Fitteria, 6, 15056 San Sebastiano Curone AL
33. **Ilgiardinodimarianna** — Avolasca
   - slug: `ilgiardinodimarianna-avolasca`
   - indirizzo: Strada Cassano, 15067 Novi Ligure AL
34. **LA BEDOLLA ‘41** — Avolasca
   - slug: `la-bedolla-41-avolasca`
   - indirizzo: Str. Bedolla, 41, 15057 Tortona AL
35. **Locanda del Barco - Tenuta Bellingeri** — Avolasca
   - slug: `locanda-del-barco-tenuta-bellingeri-avolasca`
   - indirizzo: Via Case Sparse, 15050 Sant'Agata Fossili AL