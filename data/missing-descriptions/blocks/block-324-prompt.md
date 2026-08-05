# Blocco 324/500 — 35 strutture senza descrizione IT

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

1. **PARK HOTEL ITALIA** — Bressanvido
   - slug: `park-hotel-italia-bressanvido`
   - indirizzo: Via Villa, 89, 36056 Tezze sul Brenta VI
2. **Affittacamere Pone** — Bresso
   - slug: `affittacamere-pone-bresso`
   - indirizzo: Via Cadore, 54, 20099 Sesto San Giovanni MI
3. **B&B Casa Pucci Milano** — Bresso
   - slug: `b-b-casa-pucci-milano-bresso`
   - indirizzo: Via Dante Alighieri, 14a, 20091 Bresso MI
4. **B&B De I Bravi - Charming guest house** — Bresso
   - slug: `b-b-de-i-bravi-charming-guest-house-bresso`
   - indirizzo: V. Angelo Bizzozero, 1F, 20032 Cormano MI
5. **B&b Eros casa** — Bresso
   - slug: `b-b-eros-casa-bresso`
   - indirizzo: Via Luigi Pastro, 10, 20161 Milano MI
6. **B&B HOTEL Milano Ornato** — Bresso
   - slug: `b-b-hotel-milano-ornato-bresso`
   - indirizzo: Via Luigi Ornato, 64, 20162 Milano MI
7. **B&B La Casa del Nespolo di... Niguarda** — Bresso
   - slug: `b-b-la-casa-del-nespolo-di-niguarda-bresso`
   - indirizzo: Via Paulucci di Calboli Fulcieri, 32, 20162 Milano MI
8. **B&b La Corte di Brusuglio** — Bresso
   - slug: `b-b-la-corte-di-brusuglio-bresso`
   - indirizzo: Via Renzo Villa, 3, 20032 Cormano MI
9. **Breda Suites Hotel Milano** — Bresso
   - slug: `breda-suites-hotel-milano-bresso`
   - indirizzo: Viale Sarca, 336, 20126 Milano MI
10. **Casa Alice Guest House** — Bresso
   - slug: `casa-alice-guest-house-bresso`
   - indirizzo: Via Edmondo De Amicis, 10, 20091 Bresso MI
11. **CasaTitta Bed & Breakfast** — Bresso
   - slug: `casatitta-bed-breakfast-bresso`
   - indirizzo: Via Giulio Belinzaghi, 21, 20159 Milano MI
12. **CiaoMi Long & Short Stay - Training & Events - Niguarda Bicocca** — Bresso
   - slug: `ciaomi-long-short-stay-training-events-niguarda-bresso`
   - indirizzo: Via Adriatico, 8, 20162 Milano MI
13. **Guest House Pirelli** — Bresso
   - slug: `guest-house-pirelli-bresso`
   - indirizzo: Via Giovanni Battista Pirelli, 26, 20100 Milano MI
14. **La Casa Nel Parco Affittacamere** — Bresso
   - slug: `la-casa-nel-parco-affittacamere-bresso`
   - indirizzo: Via Gian Carlo Clerici, 342, 20099 Sesto San Giovanni MI
15. **milano affittacamere stazione centrale metropolitana** — Bresso
   - slug: `milano-affittacamere-stazione-centrale-metropoli-bresso`
   - indirizzo: Viale Monza, 38, 20125 Milano MI
16. **Neo Hotel** — Bresso
   - slug: `neo-hotel-bresso`
   - indirizzo: Via XXV Aprile, 49/51, 20091 Bresso MI
17. **Ora Hotels City Milano** — Bresso
   - slug: `ora-hotels-city-milano-bresso`
   - indirizzo: Via XXV Aprile, 49, 20091 Milano MI
18. **Residenze Niguarda** — Bresso
   - slug: `residenze-niguarda-bresso`
   - indirizzo: Via Luigi Ornato, 18, 20162 Milano MI
19. **Agriturismo La Betulla** — Brezzo di Bedero
   - slug: `agriturismo-la-betulla-brezzo-di-bedero`
   - indirizzo: Via Belmonte, 50, 21010 Brezzo di Bedero VA
20. **Agriturismo Tschang Wilma** — Brezzo di Bedero
   - slug: `agriturismo-tschang-wilma-brezzo-di-bedero`
   - indirizzo: 9, via Pira Pianeggi, 21010 Caldè VA
21. **B&B Le Camelie** — Brezzo di Bedero
   - slug: `b-b-le-camelie-brezzo-di-bedero`
   - indirizzo: Via XXV Aprile, 2, 21030 Brissago-Valtravaglia VA
22. **B&B Tana del ghiro-Ligurno-Porto Valtravaglia-Lago Maggiore-Varese** — Brezzo di Bedero
   - slug: `b-b-tana-del-ghiro-ligurno-porto-valtravaglia-la-brezzo-di-bedero`
   - indirizzo: Via San Rocco, 18, 21010 Porto Valtravaglia VA
23. **La Corte Antica** — Brezzo di Bedero
   - slug: `la-corte-antica-brezzo-di-bedero`
   - indirizzo: Via Alessandro Manzoni, 34, 21016 Luino VA
24. **Luino Casa Amatissima** — Brezzo di Bedero
   - slug: `luino-casa-amatissima-brezzo-di-bedero`
   - indirizzo: Via Portovaltravaglia, 16, 21010 Brezzo di Bedero VA
25. **Agriturismo La Meridiana** — Briaglia
   - slug: `agriturismo-la-meridiana-briaglia`
   - indirizzo: Località Torretta, 6, 12082 Frabosa Soprana CN
26. **Albergo della Ceramica** — Briaglia
   - slug: `albergo-della-ceramica-briaglia`
   - indirizzo: Via XX Settembre, 2, 12089 Villanova Mondovì CN
27. **B&B Caplin** — Briaglia
   - slug: `b-b-caplin-briaglia`
   - indirizzo: Via Località Gratteria, 11, 12084 Mondovì CN
28. **Dimora della Posta** — Briaglia
   - slug: `dimora-della-posta-briaglia`
   - indirizzo: Corso Statuto, 16, 12084 Mondovì CN
29. **Relais Colle Messino** — Briaglia
   - slug: `relais-colle-messino-briaglia`
   - indirizzo: Via Ellero Tetti, 14, 12080 Briaglia CN
30. **Albergo Solari** — Briatico
   - slug: `albergo-solari-briatico`
   - indirizzo: Via Gabriele d'Annunzio, 30, 89817 Briatico VV
31. **Albergo Terrazzino** — Briatico
   - slug: `albergo-terrazzino-briatico`
   - indirizzo: Piazza Marinella, Loc, n, 6, 89900 Bivona VV
32. **Aramoni B&B** — Briatico
   - slug: `aramoni-b-b-briatico`
   - indirizzo: Via Corrado Alvaro, 13, 89868 Zambrone VV
33. **B&B Il Giardino Sul Mare** — Briatico
   - slug: `b-b-il-giardino-sul-mare-briatico`
   - indirizzo: SS522, 89817 Briatico VV
34. **B&B La casa di Tina - Briatico** — Briatico
   - slug: `b-b-la-casa-di-tina-briatico-briatico`
   - indirizzo: Via Lungomare, 69, 89817 Briatico VV
35. **Hotel Costa Bella** — Briatico
   - slug: `hotel-costa-bella-briatico`
   - indirizzo: Strada St, Località Solaro, 522, 89817 Briatico VV