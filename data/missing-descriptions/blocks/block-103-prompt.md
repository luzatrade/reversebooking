# Blocco 103/500 — 35 strutture senza descrizione IT

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

1. **Park Plaza Victoria Amsterdam** — Amsterdam
   - slug: `park-plaza-victoria-amsterdam-amsterdam`
   - indirizzo: Damrak 1-5, 1012 LG Amsterdam
2. **Royal Amsterdam Hotel & Restaurant** — Amsterdam
   - slug: `royal-amsterdam-hotel-restaurant-amsterdam`
   - indirizzo: Rembrandtplein 44, 1017 CV Amsterdam
3. **SUPPER Hotel** — Amsterdam
   - slug: `supper-hotel-amsterdam`
   - indirizzo: Singel 462, 1017 AW Amsterdam
4. **WestCord City Centre Hotel Amsterdam** — Amsterdam
   - slug: `westcord-city-centre-hotel-amsterdam-amsterdam`
   - indirizzo: Nieuwezijds Voorburgwal 50, 1012 SC Amsterdam
5. **XO Hotels City Centre** — Amsterdam
   - slug: `xo-hotels-city-centre-amsterdam`
   - indirizzo: Beursstraat 11-19, 1012 JT Amsterdam
6. **Amamì B&B** — Anacapri
   - slug: `amami-b-b-anacapri`
   - indirizzo: Vicolo Portico, 9, 80071 Anacapri NA
7. **Amira Resort Capri** — Anacapri
   - slug: `amira-resort-capri-anacapri`
   - indirizzo: Via Rio Lincian, 96, 80071 Anacapri NA
8. **B&B Il Paradiso di Capri** — Anacapri
   - slug: `b-b-il-paradiso-di-capri-anacapri`
   - indirizzo: Via la Guardia, 59, 80071 Anacapri NA
9. **B&B Le Ginestre** — Anacapri
   - slug: `b-b-le-ginestre-anacapri`
   - indirizzo: Via Migliara, 53/A, 80071 Anacapri NA
10. **Casa Adriana** — Anacapri
   - slug: `casa-adriana-anacapri`
   - indirizzo: Via Filietto, 52a, 80071 Anacapri NA
11. **Casa Astra** — Anacapri
   - slug: `casa-astra-anacapri`
   - indirizzo: Via Rio, Via Linciano, 63, 80071 Anacapri NA
12. **Casa Blu** — Anacapri
   - slug: `casa-blu-anacapri`
   - indirizzo: Via Cagliari, 11, 80071 Anacapri NA
13. **Casa Le Anfore B&B Anacapri** — Anacapri
   - slug: `casa-le-anfore-b-b-anacapri-anacapri`
   - indirizzo: Str. Faro di Carena, 15, 80071 Anacapri NA
14. **Casa Mariantonia** — Anacapri
   - slug: `casa-mariantonia-anacapri`
   - indirizzo: Via Giuseppe Orlandi, 180, 80071 Anacapri NA
15. **Da Gelsomina - Ristorante** — Anacapri
   - slug: `da-gelsomina-ristorante-anacapri`
   - indirizzo: Via Migliara, 72, 80071 Anacapri NA
16. **Hotel Bellavista Anacapri** — Anacapri
   - slug: `hotel-bellavista-anacapri-anacapri`
   - indirizzo: Via Giuseppe Orlandi, 10, 80071 Anacapri NA
17. **Hotel Caesar Augustus** — Anacapri
   - slug: `hotel-caesar-augustus-anacapri`
   - indirizzo: Via Giuseppe Orlandi, 4, 80071 Anacapri NA
18. **Il Carrubo Capri** — Anacapri
   - slug: `il-carrubo-capri-anacapri`
   - indirizzo: Via Damecuta, 21, 80071 Anacapri NA
19. **iltruciolosuite** — Anacapri
   - slug: `iltruciolosuite-anacapri`
   - indirizzo: Traversa I Carlo Ferraro, 12/12A, 80071 Anacapri NA
20. **La Cicas** — Anacapri
   - slug: `la-cicas-anacapri`
   - indirizzo: Via Vigna, 60, 80071 Anacapri NA
21. **La Draghina B&B Capri Island** — Anacapri
   - slug: `la-draghina-b-b-capri-island-anacapri`
   - indirizzo: Via Tuoro, 57, 80071 Anacapri NA
22. **La Romantique Anacapri** — Anacapri
   - slug: `la-romantique-anacapri-anacapri`
   - indirizzo: Via Catena, 41, 80071 Anacapri NA
23. **Villa Mimosa Anacapri** — Anacapri
   - slug: `villa-mimosa-anacapri-anacapri`
   - indirizzo: Str. Faro di Carena, 48/A, 80071 Anacapri NA
24. **Agriturismo Giudici - Tenuta Vico Moricino** — Anagni
   - slug: `agriturismo-giudici-tenuta-vico-moricino-anagni`
   - indirizzo: km 5, Via Anticolana, 03012 Anagni FR
25. **Albergo Ristorante Federico** — Anagni
   - slug: `albergo-ristorante-federico-anagni`
   - indirizzo: Via Anticolana, 03012 Anagni FR
26. **Antica Dimora Palazzo Ciprani** — Anagni
   - slug: `antica-dimora-palazzo-ciprani-anagni`
   - indirizzo: Piazza Perfetti, 3, 03012 Anagni FR
27. **b&b centro storico** — Anagni
   - slug: `b-b-centro-storico-anagni`
   - indirizzo: Vicolo Cocchetto, n20, 03012 Anagni FR
28. **B&B Novecento** — Anagni
   - slug: `b-b-novecento-anagni`
   - indirizzo: Viale Regina Margherita, 39, 03012 Anagni FR
29. **Casale San Pietro** — Anagni
   - slug: `casale-san-pietro-anagni`
   - indirizzo: Vic. Le, Via Loiso Santa Giusta, 03012 San Filippo FR
30. **Dimora il Bacio B&B** — Anagni
   - slug: `dimora-il-bacio-b-b-anagni`
   - indirizzo: Strada Vittorio Emanuele, 289, 03012 Anagni FR
31. **Hotel Anagni Le Rose** — Anagni
   - slug: `hotel-anagni-le-rose-anagni`
   - indirizzo: Via Anticolana, km 0, 03012 Anagni FR
32. **Hotel Citta' dei Papi** — Anagni
   - slug: `hotel-citta-dei-papi-anagni`
   - indirizzo: Via di Fontana Sant'Angelo, 03012 Anagni FR
33. **Il Viaggiatore** — Anagni
   - slug: `il-viaggiatore-anagni`
   - indirizzo: Strada Vittorio Emanuele, 34, 03012 Anagni FR
34. **La terrazza Anagni** — Anagni
   - slug: `la-terrazza-anagni-anagni`
   - indirizzo: Via Nino Stoppani, 7, 03012 Anagni FR
35. **Le Stanze del Duomo** — Anagni
   - slug: `le-stanze-del-duomo-anagni`
   - indirizzo: Via Dante, 68, 03012 Anagni FR