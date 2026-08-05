# Blocco 50/500 — 35 strutture senza descrizione IT

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

1. **B&B Cozy Living** — Albano Sant'Alessandro
   - slug: `b-b-cozy-living-albano-sant-alessandro`
   - indirizzo: Via Brusaporto, 54, 24068 Seriate BG
2. **B&B HOTEL Bergamo Executive** — Albano Sant'Alessandro
   - slug: `b-b-hotel-bergamo-executive-albano-sant-alessandro`
   - indirizzo: Via Nazionale, 67, 24060 San Paolo d'Argon BG
3. **B&B LUNA** — Albano Sant'Alessandro
   - slug: `b-b-luna-albano-sant-alessandro`
   - indirizzo: Via Libertà, 1, 24068 Seriate BG
4. **B&B Miravalle Scanzorosciate BG: 2 camere, terrazzo panoramico vista colline Moscato, cantina eventi.CIN:IT016194C1CHPXAOEP** — Albano Sant'Alessandro
   - slug: `b-b-miravalle-scanzorosciate-bg-2-camere-terrazz-albano-sant-alessandro`
   - indirizzo: Via Sporla, 21, 24020 Scanzorosciate BG
5. **B&B Villa Giò** — Albano Sant'Alessandro
   - slug: `b-b-villa-gio-albano-sant-alessandro`
   - indirizzo: Via G.B. Moroni, 2, 24068 Seriate BG
6. **B&B” La Tezza”** — Albano Sant'Alessandro
   - slug: `b-b-la-tezza-albano-sant-alessandro`
   - indirizzo: Via Don Stefano Mangili, 5, 24060 Torre de' Roveri BG
7. **Borghetto Airport/Hospital** — Albano Sant'Alessandro
   - slug: `borghetto-airport-hospital-albano-sant-alessandro`
   - indirizzo: Via Boccaleone, 1, 24125 Bergamo BG
8. **CaMé** — Albano Sant'Alessandro
   - slug: `came-albano-sant-alessandro`
   - indirizzo: Via Gianbattista Grazioli, 8, 24022 Alzano Lombardo BG
9. **Casa Tua** — Albano Sant'Alessandro
   - slug: `casa-tua-albano-sant-alessandro`
   - indirizzo: Via G. Marconi, 12, 24020 Scanzorosciate BG
10. **Foresteria Green House** — Albano Sant'Alessandro
   - slug: `foresteria-green-house-albano-sant-alessandro`
   - indirizzo: Via Fiume Adda, 12/a, 24068 Seriate BG
11. **Hotel San Pancrazio** — Albano Sant'Alessandro
   - slug: `hotel-san-pancrazio-albano-sant-alessandro`
   - indirizzo: Via Fratelli Calvi, 7, 24069 Trescore Balneario BG
12. **Hotel San Rocco** — Albano Sant'Alessandro
   - slug: `hotel-san-rocco-albano-sant-alessandro`
   - indirizzo: Via F. Martinengo Colleoni, 18, 24020 Scanzorosciate BG
13. **Il Caravaggio Guest House** — Albano Sant'Alessandro
   - slug: `il-caravaggio-guest-house-albano-sant-alessandro`
   - indirizzo: Vicolo Giuseppe Garibaldi, 4, 24050 Grassobbio BG
14. **Isabel BGY House airport** — Albano Sant'Alessandro
   - slug: `isabel-bgy-house-airport-albano-sant-alessandro`
   - indirizzo: Via Lombardia, 11, 24050 Grassobbio BG
15. **Rooms Villa Bergamo Airport** — Albano Sant'Alessandro
   - slug: `rooms-villa-bergamo-airport-albano-sant-alessandro`
   - indirizzo: Via Roma, 6, 24020 Scanzorosciate BG
16. **The Flower Garden - Bed & Breakfast con piscina Bergamo** — Albano Sant'Alessandro
   - slug: `the-flower-garden-bed-breakfast-con-piscina-berg-albano-sant-alessandro`
   - indirizzo: Via C. Quarti, 20, 24020 Scanzorosciate BG
17. **Waobab - We are one B&B** — Albano Sant'Alessandro
   - slug: `waobab-we-are-one-b-b-albano-sant-alessandro`
   - indirizzo: Via Giuseppe Mazzini, 116, 24022 Alzano Lombardo BG
18. **Albergo Italia** — Albano Vercellese
   - slug: `albergo-italia-albano-vercellese`
   - indirizzo: Via Paolo Solaroli, 8, 28100 Novara NO
19. **AMY B&B Casetta di Charme** — Albano Vercellese
   - slug: `amy-b-b-casetta-di-charme-albano-vercellese`
   - indirizzo: Via Guglielmo Marconi, 30, 13032 Asigliano Vercellese VC
20. **B&B La Chiocciola** — Albano Vercellese
   - slug: `b-b-la-chiocciola-albano-vercellese`
   - indirizzo: Via Davide Squarini, 14, 28015 Momo NO
21. **Bed & Breakfast Casa di Nonna** — Albano Vercellese
   - slug: `bed-breakfast-casa-di-nonna-albano-vercellese`
   - indirizzo: Corso Giuseppe Garibaldi, 9, 13100 Vercelli VC
22. **bed and breakfast cascina baraggione** — Albano Vercellese
   - slug: `bed-and-breakfast-cascina-baraggione-albano-vercellese`
   - indirizzo: localita baraggione, 1, 28060 Granozzo con Monticello NO
23. **Bed and Breakfast la Rosa Bianca** — Albano Vercellese
   - slug: `bed-and-breakfast-la-rosa-bianca-albano-vercellese`
   - indirizzo: Corso Alessandro Salamano, 80, 13100 Vercelli VC
24. **G&G Giusy e Gabry** — Albano Vercellese
   - slug: `g-g-giusy-e-gabry-albano-vercellese`
   - indirizzo: Via Ugo Foscolo, 7, 13048 Santhià VC
25. **Guest House Nonna Rosa** — Albano Vercellese
   - slug: `guest-house-nonna-rosa-albano-vercellese`
   - indirizzo: Via Francesco Petrarca, 9, 13100 Vercelli VC
26. **Hotel Oleggio Malpensa** — Albano Vercellese
   - slug: `hotel-oleggio-malpensa-albano-vercellese`
   - indirizzo: Via Verbano, 19, 28047 Oleggio NO
27. **Hotel Ristorante Il Giardinetto** — Albano Vercellese
   - slug: `hotel-ristorante-il-giardinetto-albano-vercellese`
   - indirizzo: Via Luigi Sereno, 3, 13100 Vercelli VC
28. **La Bolgora Guest House** — Albano Vercellese
   - slug: `la-bolgora-guest-house-albano-vercellese`
   - indirizzo: Via S. Giuseppe, 3, 28060 Recetto NO
29. **La casa di Edoardo** — Albano Vercellese
   - slug: `la-casa-di-edoardo-albano-vercellese`
   - indirizzo: Via Brighinzio, 7, 13100 Vercelli VC
30. **LA CITTA' DEL RISO** — Albano Vercellese
   - slug: `la-citta-del-riso-albano-vercellese`
   - indirizzo: Corso Mario Abbiate, 50, 13100 Vercelli VC
31. **Modo Hotel** — Albano Vercellese
   - slug: `modo-hotel-albano-vercellese`
   - indirizzo: Piazza Medaglie D'Oro, 21, 13100 Vercelli VC
32. **Residence Campagnole** — Albano Vercellese
   - slug: `residence-campagnole-albano-vercellese`
   - indirizzo: Cascina Cascinoni, 6, 28060 Vicolungo NO
33. **Vercelli Palace Hotel** — Albano Vercellese
   - slug: `vercelli-palace-hotel-albano-vercellese`
   - indirizzo: Via Giovanni Tavallini, 29, 13100 Vercelli VC
34. **Vicino a tutto** — Albano Vercellese
   - slug: `vicino-a-tutto-albano-vercellese`
   - indirizzo: Via Chivasso, 27/c, 13100 Vercelli VC
35. **Agriturismo Antica Corte Cason** — Albaredo d'Adige
   - slug: `agriturismo-antica-corte-cason-albaredo-d-adige`
   - indirizzo: Via Cason, 12/a, 37055 Tombazosana VR