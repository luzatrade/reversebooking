# Blocco 430/500 — 35 strutture senza descrizione IT

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

1. **lodevì rooms** — Carapelle
   - slug: `lodevi-rooms-carapelle`
   - indirizzo: Via Monte Grappa, 58, 71121 Foggia FG
2. **Momento soggiorno di charme** — Carapelle
   - slug: `momento-soggiorno-di-charme-carapelle`
   - indirizzo: Piazza Umberto Giordano, 13c, 71121 Foggia FG
3. **Residenza del Sele B&B Luxury** — Carapelle
   - slug: `residenza-del-sele-b-b-luxury-carapelle`
   - indirizzo: Corso Pietro Giannone, 1, 71121 Foggia FG
4. **Nonno Severino** — Carapelle Calvisio
   - slug: `nonno-severino-carapelle-calvisio`
   - indirizzo: Via Gabriele d'Annunzio, 61, 67020 Santo Stefano di Sessanio AQ
5. **Notti magiche** — Carapelle Calvisio
   - slug: `notti-magiche-carapelle-calvisio`
   - indirizzo: Piazza Torre Maggiore, 7, 67020 Castelvecchio Calvisio AQ
6. **Ospitalità Santo Stefano** — Carapelle Calvisio
   - slug: `ospitalita-santo-stefano-carapelle-calvisio`
   - indirizzo: SS17, KM 58.285, 67020 San Pio delle Camere AQ
7. **Agriturismo OlivArancio** — Carasco
   - slug: `agriturismo-olivarancio-carasco`
   - indirizzo: Via degli Ulivi, 39, 16040 Leivi GE
8. **B&B Bella Vista** — Carasco
   - slug: `b-b-bella-vista-carasco`
   - indirizzo: Via Fontana, 9, 16042 Carasco GE
9. **B&B La Terrazza** — Carasco
   - slug: `b-b-la-terrazza-carasco`
   - indirizzo: Via Martiri della Liberazione, 139, 16043 Chiavari GE
10. **B&B Rivarola al Tempo dei Castelli** — Carasco
   - slug: `b-b-rivarola-al-tempo-dei-castelli-carasco`
   - indirizzo: Via Vittorio Veneto, 254, 16042 Rivarola GE
11. **Ca' da Tollo B&B** — Carasco
   - slug: `ca-da-tollo-b-b-carasco`
   - indirizzo: Via degli Ulivi, 49, 16030 Cogorno GE
12. **Camping Paradiso** — Carasco
   - slug: `camping-paradiso-carasco`
   - indirizzo: Via Menin, 3, 16042 Carasco GE
13. **Grand Hotel Torre Fara** — Carasco
   - slug: `grand-hotel-torre-fara-carasco`
   - indirizzo: Via Preli, 15, 16043 Chiavari GE
14. **Hotel & Garden** — Carasco
   - slug: `hotel-garden-carasco`
   - indirizzo: Piazza Leonardi, 10, 16043 Chiavari GE
15. **Hotel Doria in chiusura per CAMBIO GESTIONE** — Carasco
   - slug: `hotel-doria-in-chiusura-per-cambio-gestione-carasco`
   - indirizzo: Piazza Leonardi, 10, 16043 Chiavari GE
16. **Hotel Miramare** — Carasco
   - slug: `hotel-miramare-carasco`
   - indirizzo: Piazza Vittorio Veneto, 20, 16033 Lavagna GE
17. **Il Gelso** — Carasco
   - slug: `il-gelso-carasco`
   - indirizzo: Via dei Caduti, 92, 16040 San Bartolomeo GE
18. **Loggia Piani Nuovi** — Carasco
   - slug: `loggia-piani-nuovi-carasco`
   - indirizzo: Via Piani Nuovi, 8, 16042 Carasco GE
19. **Tigullio** — Carasco
   - slug: `tigullio-carasco`
   - indirizzo: Via Giacomo Matteotti, 1, 16033 Lavagna GE
20. **Agriturismo Annarella** — Carassai
   - slug: `agriturismo-annarella-carassai`
   - indirizzo: via molino vecchio, 6, 63063 Carassai AP
21. **Agriturismo C'era una volta** — Carassai
   - slug: `agriturismo-c-era-una-volta-carassai`
   - indirizzo: Contrada S. Gregorio, 34, 63065 Ripatransone AP
22. **Agriturismo Il Podere del nonno** — Carassai
   - slug: `agriturismo-il-podere-del-nonno-carassai`
   - indirizzo: Via Sant'impero, 4, 63065 Ripatransone AP
23. **Agriturismo La casa del vecchio mulino** — Carassai
   - slug: `agriturismo-la-casa-del-vecchio-mulino-carassai`
   - indirizzo: Contrada Menocchia, 63063 Carassai AP
24. **Agriturismo La Favella** — Carassai
   - slug: `agriturismo-la-favella-carassai`
   - indirizzo: Contrada Menocchia, 54, 63062 Montefiore dell'Aso AP
25. **Agriturismo Nonno Pio** — Carassai
   - slug: `agriturismo-nonno-pio-carassai`
   - indirizzo: Contrada Tesino, 58, 63073 Offida AP
26. **Camping San Procolo** — Carassai
   - slug: `camping-san-procolo-carassai`
   - indirizzo: Contrada Selve, 3, 63847 Monte Vidon Combatte FM
27. **Casa Eviano** — Carassai
   - slug: `casa-eviano-carassai`
   - indirizzo: Contrada da Montecucco, 12, 63063 Carassai AP
28. **Casale di Maro** — Carassai
   - slug: `casale-di-maro-carassai`
   - indirizzo: Contrada S. Martino, 10, 63846 Monte Giberto FM
29. **Dimora Storica Palazzo Polini Fioretti** — Carassai
   - slug: `dimora-storica-palazzo-polini-fioretti-carassai`
   - indirizzo: Via Roma, 6, 63063 Carassai AP
30. **Hotel Boutique Magnolia** — Carassai
   - slug: `hotel-boutique-magnolia-carassai`
   - indirizzo: Contrada Menocchia, 212/a, 63062 Montefiore dell'Aso AP
31. **La Cicala Agriturismo** — Carassai
   - slug: `la-cicala-agriturismo-carassai`
   - indirizzo: via Casali, 22, 63063 Carassai AP
32. **La Rosa e La Viola** — Carassai
   - slug: `la-rosa-e-la-viola-carassai`
   - indirizzo: Via Montevarmine, 28, 63063 Carassai AP
33. **Locanda del Sole Agriturismo Ristorante Osteria Cucina Tradizionale Carne Marchigiana Alloggi Piscina Eventi** — Carassai
   - slug: `locanda-del-sole-agriturismo-ristorante-osteria-carassai`
   - indirizzo: Contrada Bore di Fiano, 5, 63846 Monte Giberto FM
34. **Villa Meraviglia** — Carassai
   - slug: `villa-meraviglia-carassai`
   - indirizzo: Contrada Casali, 15, 63063 Carassai AP
35. **Agriturismo San Genesio** — Carate Brianza
   - slug: `agriturismo-san-genesio-carate-brianza`
   - indirizzo: Via Raffaello Sanzio, 31, 23886 Cagliano, Colle Brianza LC