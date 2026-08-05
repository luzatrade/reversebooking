# Blocco 354/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Sole** — Cadrezzate con Osmate
   - slug: `albergo-ristorante-sole-cadrezzate-con-osmate`
   - indirizzo: Via Ruga del Porto Vecchio, 1, 21018 Sesto Calende VA
2. **B&B HOTEL Malpensa Lago Maggiore** — Cadrezzate con Osmate
   - slug: `b-b-hotel-malpensa-lago-maggiore-cadrezzate-con-osmate`
   - indirizzo: Via Milano, 23, 21029 Vergiate VA
3. **GreenRose Guest House** — Cadrezzate con Osmate
   - slug: `greenrose-guest-house-cadrezzate-con-osmate`
   - indirizzo: Via Maggiore, 10, 21062 Cadrezzate con Osmate VA
4. **Hotel Europa** — Cadrezzate con Osmate
   - slug: `hotel-europa-cadrezzate-con-osmate`
   - indirizzo: Via al Porto, 68, 21027 Ispra VA
5. **Tenuta Aquasole, Hotel e Ristorante nella natura, Sale Meeting e Centro Congressi Aziendali a Mercallo** — Cadrezzate con Osmate
   - slug: `tenuta-aquasole-hotel-e-ristorante-nella-natura-cadrezzate-con-osmate`
   - indirizzo: V. Fornace, 498/1, 21020 Mercallo VA
6. **Agriturismo alle Rive** — Caerano di San Marco
   - slug: `agriturismo-alle-rive-caerano-di-san-marco`
   - indirizzo: Via Mercato Vecchio, 39, 31031 Caerano di San Marco TV
7. **Bed & Breakfast Millennio** — Caerano di San Marco
   - slug: `bed-breakfast-millennio-caerano-di-san-marco`
   - indirizzo: Via S. Francesco, 44, 31031 Caerano di San Marco TV
8. **Casale dei Pra' Affittacamere** — Caerano di San Marco
   - slug: `casale-dei-pra-affittacamere-caerano-di-san-marco`
   - indirizzo: Via Pra de Roda, 10-10/A, 31031 Caerano di San Marco TV
9. **Albergo delle Valli** — Cafasse
   - slug: `albergo-delle-valli-cafasse`
   - indirizzo: Via C. Miglietti, 67, 10070 Germagnano TO
10. **Casa Del Caval Bianco - Affittacamere** — Cafasse
   - slug: `casa-del-caval-bianco-affittacamere-cafasse`
   - indirizzo: Via Andrea Mensa, 26, 10078 Venaria Reale TO
11. **Floating Dream** — Cafasse
   - slug: `floating-dream-cafasse`
   - indirizzo: Via Lanzo, 1, 10070 Fiano TO
12. **Hotel Galant** — Cafasse
   - slug: `hotel-galant-cafasse`
   - indirizzo: Corso Giuseppe Garibaldi, 155, 10078 Venaria Reale TO
13. **Hotel Ristorante Piemonte** — Cafasse
   - slug: `hotel-ristorante-piemonte-cafasse`
   - indirizzo: Via Umberto I, 23, 10074 Lanzo Torinese TO
14. **Hotel Stazione Reale** — Cafasse
   - slug: `hotel-stazione-reale-cafasse`
   - indirizzo: Viale Roma, 20, 10078 Venaria Reale TO
15. **Il Mondo in Valle di Simonetti Monica** — Cafasse
   - slug: `il-mondo-in-valle-di-simonetti-monica-cafasse`
   - indirizzo: Via Pessinetto Fuori, 41, 10070 Pessinetto TO
16. **La Vispa Teresa B&B** — Cafasse
   - slug: `la-vispa-teresa-b-b-cafasse`
   - indirizzo: via case Togliatti 5 - località, 10070 Plassa-togliatti TO
17. **Le Finestre sui Canali** — Cafasse
   - slug: `le-finestre-sui-canali-cafasse`
   - indirizzo: Vicolo Cubito, 18, 10070 Cafasse TO
18. **Locanda Vecchio Novecento** — Cafasse
   - slug: `locanda-vecchio-novecento-cafasse`
   - indirizzo: Via Corio, 8A, 10070 Grosso TO
19. **Agriturismo Il Capitano** — Caggiano
   - slug: `agriturismo-il-capitano-caggiano`
   - indirizzo: Località Mozzone, 84030 Caggiano SA
20. **Hotel Pino** — Caggiano
   - slug: `hotel-pino-caggiano`
   - indirizzo: Via Principessa Elena, 24, 84030 Caggiano SA
21. **Locanda Severino** — Caggiano
   - slug: `locanda-severino-caggiano`
   - indirizzo: Largo Re Galantuomo, 11, 84030 Caggiano SA
22. **Agriturismo Cardella** — Cagli
   - slug: `agriturismo-cardella-cagli`
   - indirizzo: Località Cardella, 68, 61046 Piobbico PU
23. **Albergo Ristorante Birra al Pozzo** — Cagli
   - slug: `albergo-ristorante-birra-al-pozzo-cagli`
   - indirizzo: Pianacce, 12, 61041 Acqualagna PU
24. **B&B Villa Taddea** — Cagli
   - slug: `b-b-villa-taddea-cagli`
   - indirizzo: Località Bacciardi, 1A, 61046 Piobbico PU
25. **Hotel - Ristorante Il Daino** — Cagli
   - slug: `hotel-ristorante-il-daino-cagli`
   - indirizzo: Via Roma, 19, 61040 Frontone PU
26. **Hotel Pineta Snc** — Cagli
   - slug: `hotel-pineta-snc-cagli`
   - indirizzo: Viale della Vittoria, 15, 61043 Cagli PU
27. **Hotel Stazione di Posta** — Cagli
   - slug: `hotel-stazione-di-posta-cagli`
   - indirizzo: Via Flaminia, km 221 230, 61044 Cantiano PU
28. **La Rosa Rossa** — Cagli
   - slug: `la-rosa-rossa-cagli`
   - indirizzo: Via del Burano, 1, 61043 Cagli PU
29. **San Pietro Fuori le Mura B&B** — Cagli
   - slug: `san-pietro-fuori-le-mura-b-b-cagli`
   - indirizzo: Via Corvalan, 61043 Cagli PU
30. **Serendipity, Boutique Country House** — Cagli
   - slug: `serendipity-boutique-country-house-cagli`
   - indirizzo: Località S. Rocco, 11, 61044 Cantiano PU
31. **Hotel Ristorante San Marino** — Caglio
   - slug: `hotel-ristorante-san-marino-caglio`
   - indirizzo: Via Regina Nuova, 64, 22010 Laglio CO
32. **Residenza Santa Valeria** — Caglio
   - slug: `residenza-santa-valeria-caglio`
   - indirizzo: Via Giovanni Segantini, 14, 22030 Caglio CO
33. **Affittacamere Uvaspina** — Cagnano Amiterno
   - slug: `affittacamere-uvaspina-cagnano-amiterno`
   - indirizzo: Frazione Bivio di Pizzoli, 67017 Pizzoli AQ
34. **Agriturismo La Canestra - cucina tipica, fattoria didattica, camere** — Cagnano Amiterno
   - slug: `agriturismo-la-canestra-cucina-tipica-fattoria-d-cagnano-amiterno`
   - indirizzo: Via S. Rocco, 7, 67014 Capitignano AQ
35. **Locanda fonte dell'orso** — Cagnano Amiterno
   - slug: `locanda-fonte-dell-orso-cagnano-amiterno`
   - indirizzo: S.P. 30 km 5,5, 67100 L'Aquila AQ