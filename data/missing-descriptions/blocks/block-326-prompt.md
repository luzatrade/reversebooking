# Blocco 326/500 — 35 strutture senza descrizione IT

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

1. **Ca-Jo Bed and Breakfast** — Briga Alta
   - slug: `ca-jo-bed-and-breakfast-briga-alta`
   - indirizzo: Sarezzo frazione Cappello, 23, 12075 Garessio CN
2. **dolce...Mente** — Briga Alta
   - slug: `dolce-mente-briga-alta`
   - indirizzo: Via Tanarello, 4, 18025 Piaggia CN
3. **Fiocco Di Neve Relais & Spa 5L** — Briga Alta
   - slug: `fiocco-di-neve-relais-spa-5l-briga-alta`
   - indirizzo: Via Roma, 2/C, 12015 Limone Piemonte CN
4. **Grand Hotel Principe** — Briga Alta
   - slug: `grand-hotel-principe-briga-alta`
   - indirizzo: Via Genova, 45, 12015 Limone Piemonte CN
5. **Hotel L'Artisin** — Briga Alta
   - slug: `hotel-l-artisin-briga-alta`
   - indirizzo: Via Almellina, 26, 12015 Limone Piemonte CN
6. **Hôtel le Mirval** — Briga Alta
   - slug: `hotel-le-mirval-briga-alta`
   - indirizzo: Hôtel, 3 Rue Saint-Vincent Ferrier, 06430 La Brigue, Francia
7. **Hotel Marguareis** — Briga Alta
   - slug: `hotel-marguareis-briga-alta`
   - indirizzo: Via S. Secondo, 9, 12015 Limone Piemonte CN
8. **La Briga** — Briga Alta
   - slug: `la-briga-briga-alta`
   - indirizzo: Piazza A. Pastorelli, 1, 18025 Briga Alta CN
9. **Patatouc** — Briga Alta
   - slug: `patatouc-briga-alta`
   - indirizzo: Tetti Matlas, 9, 12015 Limonetto CN
10. **B&B Il Borgo Agnello** — Briga Novarese
   - slug: `b-b-il-borgo-agnello-briga-novarese`
   - indirizzo: Via Borgomanero, 38, 28040 Paruzzaro NO
11. **B&B IL CORTILE** — Briga Novarese
   - slug: `b-b-il-cortile-briga-novarese`
   - indirizzo: Via Dante, 3, 28010 Soriso NO
12. **I Route Matt** — Briga Novarese
   - slug: `i-route-matt-briga-novarese`
   - indirizzo: Vicolo Cantonetto, 8, 28024 Auzate NO
13. **Tenuta Montezeglio** — Briga Novarese
   - slug: `tenuta-montezeglio-briga-novarese`
   - indirizzo: SP111, 28045 Invorio NO
14. **Villa Jasmine Bed & Breakfast** — Briga Novarese
   - slug: `villa-jasmine-bed-breakfast-briga-novarese`
   - indirizzo: Viale del Borgarino, 2, 28013 Gattico NO
15. **B&B Orio Affittacamere Foresteria Lombarda** — Brignano Gera d'Adda
   - slug: `b-b-orio-affittacamere-foresteria-lombarda-brignano-gera-d-adda`
   - indirizzo: Via Ferdinando Magellano, 24050 Grassobbio BG
16. **Capetone** — Brignano Gera d'Adda
   - slug: `capetone-brignano-gera-d-adda`
   - indirizzo: Via Castel Rozzone, 36, 24053 Brignano Gera d'Adda BG
17. **Da Filippo - B&B a Treviglio** — Brignano Gera d'Adda
   - slug: `da-filippo-b-b-a-treviglio-brignano-gera-d-adda`
   - indirizzo: Viale Francesco Cassani, 31, 24047 Treviglio BG
18. **Agriturismo Cascina Battignana** — Brignano-Frascata
   - slug: `agriturismo-cascina-battignana-brignano-frascata`
   - indirizzo: Cascina Battignana, 1, 15056 San Sebastiano Curone AL
19. **Tenuta Ca' Bella** — Brignano-Frascata
   - slug: `tenuta-ca-bella-brignano-frascata`
   - indirizzo: Frazione Ca' Bella, 15056 Dernice AL
20. **Al centro - exclusive apartment** — Brindisi
   - slug: `al-centro-exclusive-apartment-brindisi`
   - indirizzo: Via Saponea, 66, 72100 Brindisi BR
21. **B&B Annunziata** — Brindisi
   - slug: `b-b-annunziata-brindisi`
   - indirizzo: Via Annunziata, 19, 72100 Brindisi BR
22. **B&B Porta del Salento** — Brindisi
   - slug: `b-b-porta-del-salento-brindisi`
   - indirizzo: Via Bastioni S. Giorgio, 18, 72100 Brindisi BR
23. **Best Western Hotel Nettuno** — Brindisi
   - slug: `best-western-hotel-nettuno-brindisi`
   - indirizzo: Via Angelo Titi, 41, 72100 Brindisi BR
24. **Boutique Hotel Executive Inn** — Brindisi
   - slug: `boutique-hotel-executive-inn-brindisi`
   - indirizzo: Via Pozzo Traiano, 24, 72100 Brindisi BR
25. **Filia Solis - Old Town SUITEs & SPA** — Brindisi
   - slug: `filia-solis-old-town-suites-spa-brindisi`
   - indirizzo: Via Bernardo de Royas, 17, 72100 Brindisi BR
26. **GRAN DUCA SAN RICCARDO LUXURY HOUSE & SUITE SPA -CHECK IN H24 - AFFITTACAMERE - HOTEL VICINO AEROPORTO - AIRPORT BRINDISI** — Brindisi
   - slug: `gran-duca-san-riccardo-luxury-house-suite-spa-ch-brindisi`
   - indirizzo: Viale Duca degli Abruzzi, 26, 72100 Brindisi BR
27. **Grande Albergo Internazionale** — Brindisi
   - slug: `grande-albergo-internazionale-brindisi`
   - indirizzo: Viale Regina Margherita, 23, 72100 Brindisi BR
28. **Hotel & Residence Nemo - area portuale e industriale di Brindisi - STRUTTURA APERTA** — Brindisi
   - slug: `hotel-residence-nemo-area-portuale-e-industriale-brindisi`
   - indirizzo: Via Riccardo Moretti, 3, 72100 Brindisi BR
29. **Hotel Bastione** — Brindisi
   - slug: `hotel-bastione-brindisi`
   - indirizzo: Via Bastioni Carlo V, 50, Strada per Patri, snc, 72100 Brindisi BR
30. **HOTEL L`APPRODO** — Brindisi
   - slug: `hotel-l-approdo-brindisi`
   - indirizzo: Vle Domenico Mennitti, 32, 72100 Brindisi BR
31. **Hotel Minerva** — Brindisi
   - slug: `hotel-minerva-brindisi`
   - indirizzo: S.S 16 per S.Vito km 908, 72100 Brindisi BR
32. **Hotel Orientale** — Brindisi
   - slug: `hotel-orientale-brindisi`
   - indirizzo: Corso Giuseppe Garibaldi, 40, 72100 Brindisi BR
33. **Hotel Torino** — Brindisi
   - slug: `hotel-torino-brindisi`
   - indirizzo: Largo Pietro Palumbo, 6, 72100 Brindisi BR
34. **ibis Styles Brindisi** — Brindisi
   - slug: `ibis-styles-brindisi-brindisi`
   - indirizzo: V.le Aldo Moro, 66, 72100 Brindisi BR
35. **La Casa di Eva** — Brindisi
   - slug: `la-casa-di-eva-brindisi`
   - indirizzo: Via Del Geranio, 10, 72100 Brindisi BR