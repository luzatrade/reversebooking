# Blocco 339/500 — 35 strutture senza descrizione IT

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

1. **Hotel Cala Mirto** — Budoni
   - slug: `hotel-cala-mirto-budoni`
   - indirizzo: Località Porto Ainu, 07051 Budoni OT
2. **Hotel Castello Budoni** — Budoni
   - slug: `hotel-castello-budoni-budoni`
   - indirizzo: PMQR+VC, 07051 Budoni OT
3. **Hotel Matta Village** — Budoni
   - slug: `hotel-matta-village-budoni`
   - indirizzo: Matta e Peru 2, 07020 Matta E Peru OT
4. **Hotel Pedra Niedda** — Budoni
   - slug: `hotel-pedra-niedda-budoni`
   - indirizzo: Via Porto Ainu, 1, 07051 Tanaunella OT
5. **Hotel Pedra Ruja** — Budoni
   - slug: `hotel-pedra-ruja-budoni`
   - indirizzo: Via Roma, 07051 Budoni OT
6. **Janna 'e Sole Resort** — Budoni
   - slug: `janna-e-sole-resort-budoni`
   - indirizzo: Via B. Fieschi, 4, 07051 Budoni OT
7. **Residence L'Uddastru** — Budoni
   - slug: `residence-l-uddastru-budoni`
   - indirizzo: Via Porto San Paolo, 07051 Malamurì, Budoni OT
8. **Resort Abbaia Ba** — Budoni
   - slug: `resort-abbaia-ba-budoni`
   - indirizzo: Via Emilio Lussu, Snc, 07051 Budoni OT
9. **Sa Prata Hotel & Resort** — Budoni
   - slug: `sa-prata-hotel-resort-budoni`
   - indirizzo: Via Eleonora d'Arborea, 07051 Tanaunella OT
10. **Secret Village Budoni** — Budoni
   - slug: `secret-village-budoni-budoni`
   - indirizzo: 07051 Budoni OT
11. **Stella Marina** — Budoni
   - slug: `stella-marina-budoni`
   - indirizzo: Via dei Lidi, 80, 07051 Budoni OT
12. **Tenuta Lu Baroni** — Budoni
   - slug: `tenuta-lu-baroni-budoni`
   - indirizzo: Via dei Giacinti, 07051 Porto Ottiolu OT
13. **TUI BLUE Budoni** — Budoni
   - slug: `tui-blue-budoni-budoni`
   - indirizzo: Via Cristoforo Colombo, 3, 07051 Agrustos GA
14. **Villa Lentischio - Domo Gallura e Domo Baronia - Budoni** — Budoni
   - slug: `villa-lentischio-domo-gallura-e-domo-baronia-bud-budoni`
   - indirizzo: Via Torquato Tasso, 200, 07051 Budoni OT
15. **Villaggio Baia dei Pini** — Budoni
   - slug: `villaggio-baia-dei-pini-budoni`
   - indirizzo: Località Pedra e Cupa, 07051 Budoni NU
16. **A casa di Lella** — Budrio
   - slug: `a-casa-di-lella-budrio`
   - indirizzo: Via E. Zanardi, 4, 40054 Budrio BO
17. **Agriturismo Country House Santa Maria Maddalena** — Budrio
   - slug: `agriturismo-country-house-santa-maria-maddalena-budrio`
   - indirizzo: Via Armiggia, 34, 40054 Budrio BO
18. **Agriturismo Flabeto** — Budrio
   - slug: `agriturismo-flabeto-budrio`
   - indirizzo: Via Bagnarola, 4, 40054 Budrio BO
19. **Agriturismo La Dondina** — Budrio
   - slug: `agriturismo-la-dondina-budrio`
   - indirizzo: Via Dondina, 1, 40054 Budrio BO
20. **Agriturismo La Riccardina** — Budrio
   - slug: `agriturismo-la-riccardina-budrio`
   - indirizzo: Via Cantapoiana, 2, 40054 Budrio BO
21. **Agriturismo Podere Amati** — Budrio
   - slug: `agriturismo-podere-amati-budrio`
   - indirizzo: Via Fornace, 3, 40054 Budrio BO
22. **Albergo Aurora** — Budrio
   - slug: `albergo-aurora-budrio`
   - indirizzo: Via P. C. S. Nasica, 110, 40055 Castenaso BO
23. **B&B HOLE6** — Budrio
   - slug: `b-b-hole6-budrio`
   - indirizzo: Via Chiusa Nuova, 8/4, 40055 Castenaso BO
24. **B&B House Bellaria** — Budrio
   - slug: `b-b-house-bellaria-budrio`
   - indirizzo: Via Renato Torreggiani, 71, 40068 San Lazzaro di Savena BO
25. **B&B Il Giardino dei Portici Medicina | Piano Terra | Centro Storico | Central Ground Floor Stay | Public Parking | A/C | WiFi** — Budrio
   - slug: `b-b-il-giardino-dei-portici-medicina-piano-terra-budrio`
   - indirizzo: Piazza A. Costa, 6, 40059 Medicina BO
26. **B&B L'Alberone** — Budrio
   - slug: `b-b-l-alberone-budrio`
   - indirizzo: Via Mingarano, 23, 40054 Budrio BO
27. **B&B La Terrazza** — Budrio
   - slug: `b-b-la-terrazza-budrio`
   - indirizzo: SS 9 Via Emilia, 52, 40064 Ozzano dell'Emilia BO
28. **B&B La Torre** — Budrio
   - slug: `b-b-la-torre-budrio`
   - indirizzo: Via Viazza in Destra, 25, 40054 Budrio BO
29. **B&B Mo va là** — Budrio
   - slug: `b-b-mo-va-la-budrio`
   - indirizzo: Via Zenzalino Sud, 25A, 40054 Budrio BO
30. **bblovebologna** — Budrio
   - slug: `bblovebologna-budrio`
   - indirizzo: Via Dorando Petri, 2, 40055 Castenaso BO
31. **Colibrì Art b&b** — Budrio
   - slug: `colibri-art-b-b-budrio`
   - indirizzo: Via Provinciale Superiore, 211, 40062 San Martino In Argine BO
32. **Hotel San Francesco** — Budrio
   - slug: `hotel-san-francesco-budrio`
   - indirizzo: Via Frati Cappuccini, 3, 40054 Budrio BO
33. **La dimora di Amélie __parcheggio gratuito** — Budrio
   - slug: `la-dimora-di-amelie-parcheggio-gratuito-budrio`
   - indirizzo: CIN: IT037054C2C82OEI2T, Via Cà Bassa, 1B, 40068 San Lazzaro di Savena BO
34. **QuieOra B&B DADUDU'** — Budrio
   - slug: `quieora-b-b-dadudu-budrio`
   - indirizzo: Via Loris Fortuna, 73, 40054 Budrio BO
35. **Alelca Domo B&B** — Buggerru
   - slug: `alelca-domo-b-b-buggerru`
   - indirizzo: Località, Str. delle dune di S. Nicolò, 4, 09010 Buggerru CI