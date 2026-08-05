# Blocco 171/500 — 35 strutture senza descrizione IT

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

1. **Mini Hotel Nuova Gestione** — Asti
   - slug: `mini-hotel-nuova-gestione-asti`
   - indirizzo: Corso Alessandria, 560, 14100 Asti AT
2. **B&B Belli come il sole** — Asuni
   - slug: `b-b-belli-come-il-sole-asuni`
   - indirizzo: Via Roma, 2, 09063 Serri CA
3. **Rifugio Castello Medusa** — Asuni
   - slug: `rifugio-castello-medusa-asuni`
   - indirizzo: 09086 Samugheo OR
4. **Sard Paradise** — Asuni
   - slug: `sard-paradise-asuni`
   - indirizzo: Via Gallistru, 25, 09085 Ruinas OR
5. **Albergo del Sole** — Ateleta
   - slug: `albergo-del-sole-ateleta`
   - indirizzo: S.P. 84 Nuova, SP84 Nuova Sangrina, km 2+100, 67037 Roccaraso AQ
6. **Albergo Due Monti** — Ateleta
   - slug: `albergo-due-monti-ateleta`
   - indirizzo: Via Sangrina, 11, 67030 Ateleta AQ
7. **Aqua Montis Resort & Spa** — Ateleta
   - slug: `aqua-montis-resort-spa-ateleta`
   - indirizzo: Località, Via Difesa, snc, 67036 Rivisondoli AQ
8. **Bed & Breakfast Colle Sisto** — Ateleta
   - slug: `bed-breakfast-colle-sisto-ateleta`
   - indirizzo: Via Conte di Torino, 3A, 67030 Ateleta AQ
9. **Borgotufi Albergo Diffuso** — Ateleta
   - slug: `borgotufi-albergo-diffuso-ateleta`
   - indirizzo: Via Borgo Tufi, 80, 86080 Castel del Giudice IS
10. **Dimora Montagna Amica** — Ateleta
   - slug: `dimora-montagna-amica-ateleta`
   - indirizzo: Via Turistica, snc, 86080 Pescopennataro IS
11. **Hotel Excelsior** — Ateleta
   - slug: `hotel-excelsior-ateleta`
   - indirizzo: Via Roma, 27, 67037 Roccaraso AQ
12. **Hotel Garnì Astoria** — Ateleta
   - slug: `hotel-garni-astoria-ateleta`
   - indirizzo: Via Roncone, 8/A, 67037 Roccaraso AQ
13. **Hotel Holidays** — Ateleta
   - slug: `hotel-holidays-ateleta`
   - indirizzo: SS17, Km 136, 67037 Roccaraso AQ
14. **Hotel Il Bucaneve** — Ateleta
   - slug: `hotel-il-bucaneve-ateleta`
   - indirizzo: ex SP84 Nuova Sangrina, Via Roncone, 53, 67037 Roccaraso AQ
15. **Hotel Pizzalto** — Ateleta
   - slug: `hotel-pizzalto-ateleta`
   - indirizzo: Pizzalto, 67037 Roccaraso AQ
16. **Hotel Suisse** — Ateleta
   - slug: `hotel-suisse-ateleta`
   - indirizzo: Via Roma, 22, 67037 Roccaraso AQ
17. **Hotel Villa Danilo** — Ateleta
   - slug: `hotel-villa-danilo-ateleta`
   - indirizzo: Contrada Stazione, 1, 66040 Gamberale CH
18. **Il Pero Ateleta bed and relax** — Ateleta
   - slug: `il-pero-ateleta-bed-and-relax-ateleta`
   - indirizzo: Via Marconi, 60, 67030 Ateleta AQ
19. **Locanda e Ristorante Tre Frati** — Ateleta
   - slug: `locanda-e-ristorante-tre-frati-ateleta`
   - indirizzo: Viale Fanzago Cosimo, 4, 67033 Pescocostanzo AQ
20. **Rasinus Hotel** — Ateleta
   - slug: `rasinus-hotel-ateleta`
   - indirizzo: SP 119, Contrada Il Poggio, 1, 67037 Roccaraso AQ
21. **Azienda Agrituristica Rupe delle Sorbe** — Atella
   - slug: `azienda-agrituristica-rupe-delle-sorbe-atella`
   - indirizzo: Contrada Portiello, 8, 85020 Atella PZ
22. **B&B Cielo Stellato** — Atella
   - slug: `b-b-cielo-stellato-atella`
   - indirizzo: Via Torretta, 134, 85021 Possidente PZ
23. **B&B La Torre** — Atella
   - slug: `b-b-la-torre-atella`
   - indirizzo: Piazza Cavour, 10, 85020 Ruvo del Monte PZ
24. **B&B RoMa Atella** — Atella
   - slug: `b-b-roma-atella-atella`
   - indirizzo: Vico Caracciolo, 5, 85020 Atella PZ
25. **Bed & Breakfast La Torre** — Atella
   - slug: `bed-breakfast-la-torre-atella`
   - indirizzo: Via Annunziata, 14, 85020 Atella PZ
26. **Grand Hotel Garden** — Atella
   - slug: `grand-hotel-garden-atella`
   - indirizzo: SS 93 Km. 75, 85022, 85022 Località Giardino, PZ
27. **La Bella vista Castello** — Atella
   - slug: `la-bella-vista-castello-atella`
   - indirizzo: Contrada Perrone, SP9 di Leonessa, 85025 Melfi PZ
28. **Le pitture casa di campagna** — Atella
   - slug: `le-pitture-casa-di-campagna-atella`
   - indirizzo: Contrada carpini 19, 85020 Filiano PZ
29. **Palazzo Badiale History&Rooms** — Atella
   - slug: `palazzo-badiale-history-rooms-atella`
   - indirizzo: Via Marconi, 42, 85020 Atella PZ
30. **Residence Old Stories** — Atella
   - slug: `residence-old-stories-atella`
   - indirizzo: Strada Provinciale Ex S. S., 93, 85022 Barile PZ
31. **Residence Villa Rosa** — Atella
   - slug: `residence-villa-rosa-atella`
   - indirizzo: Via Storto S.Antonio, 24, 85020 Atella PZ
32. **Torre Serena B&B** — Atella
   - slug: `torre-serena-b-b-atella`
   - indirizzo: Via Piave, 66, 85020 Atella PZ
33. **VILLA MARTINA PIA B&B** — Atella
   - slug: `villa-martina-pia-b-b-atella`
   - indirizzo: contrada Palladino, 8, 85020 Filiano PZ
34. **1 e Resort Agriturismo Maliandi** — Atena Lucana
   - slug: `1-e-resort-agriturismo-maliandi-atena-lucana`
   - indirizzo: Via Tempa Dietro Difesa, 84030 San Pietro al Tanagro SA
35. **Acteon Palace Hotel** — Atena Lucana
   - slug: `acteon-palace-hotel-atena-lucana`
   - indirizzo: Via Mascero, 84030 Atena Lucana SA