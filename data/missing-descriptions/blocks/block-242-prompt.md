# Blocco 242/500 — 35 strutture senza descrizione IT

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

1. **Metro Station Mini Van CAPSULA House** — Beinasco
   - slug: `metro-station-mini-van-capsula-house-beinasco`
   - indirizzo: Via Rochemolles, 15, 10146 Torino TO
2. **Turin Metro Young - Hostel** — Beinasco
   - slug: `turin-metro-young-hostel-beinasco`
   - indirizzo: Via Brione, 20, 10143 Torino TO
3. **Affittacamere Santino's house - CIN: IT004163B4IOUF7XOX** — Beinette
   - slug: `affittacamere-santino-s-house-cin-it004163b4iouf-beinette`
   - indirizzo: Via del Lazzaretto, 14, 12016 Peveragno CN
4. **Agriturismo B&B Ciabot Besimauda** — Beinette
   - slug: `agriturismo-b-b-ciabot-besimauda-beinette`
   - indirizzo: Via Brard 58 fraz.San Giovenale - Peveragno (CN), 12016 Peveragno CN
5. **Agriturismo Cascina Veja** — Beinette
   - slug: `agriturismo-cascina-veja-beinette`
   - indirizzo: Fraz, Frazione Vigna, 4, 12013 Chiusa di Pesio CN
6. **Agriturismo La Dimora del Contadino** — Beinette
   - slug: `agriturismo-la-dimora-del-contadino-beinette`
   - indirizzo: Strada del Merlo, 121, 12084 Mondovì CN
7. **Albergo Ristorante Bacco Beinette** — Beinette
   - slug: `albergo-ristorante-bacco-beinette-beinette`
   - indirizzo: Via XXIV Maggio, 37, 12081 Beinette CN
8. **Alpuntogiusto** — Beinette
   - slug: `alpuntogiusto-beinette`
   - indirizzo: Via Colletto, 9, 12016 Peveragno CN
9. **B&B Alla Borgata** — Beinette
   - slug: `b-b-alla-borgata-beinette`
   - indirizzo: Via Rosbella, 9, 12012 Boves CN
10. **B&B antiche radici** — Beinette
   - slug: `b-b-antiche-radici-beinette`
   - indirizzo: 8M36+V9, 12013 Chiusa di Pesio CN
11. **B&B Giravento** — Beinette
   - slug: `b-b-giravento-beinette`
   - indirizzo: Via Monte Carbonet, 39, 12011 Borgo San Dalmazzo CN
12. **B&B L'Abric** — Beinette
   - slug: `b-b-l-abric-beinette`
   - indirizzo: Via Maestra, 16, 12015 Limonetto CN
13. **B&B La Bisimauda** — Beinette
   - slug: `b-b-la-bisimauda-beinette`
   - indirizzo: Via Cuneo, 87, 12012 Boves CN
14. **B&B La Casa Arancione - Camere & Charme CIN IT004028C2S6F8UZHQ** — Beinette
   - slug: `b-b-la-casa-arancione-camere-charme-cin-it004028-beinette`
   - indirizzo: Via Peveragno, 13, 12012 Boves CN
15. **B&B La Coccinella** — Beinette
   - slug: `b-b-la-coccinella-beinette`
   - indirizzo: Via Tetti Vittorio, 10, 12012 Rivoira CN
16. **B&B Milú** — Beinette
   - slug: `b-b-milu-beinette`
   - indirizzo: Via Panin, 18, 12010 Cuneo CN
17. **B&B Villa Antilia** — Beinette
   - slug: `b-b-villa-antilia-beinette`
   - indirizzo: Via Vigne, 20, 12022 Busca CN
18. **B&B Virgula** — Beinette
   - slug: `b-b-virgula-beinette`
   - indirizzo: Via Carlo Pascal, 1, 12100 Cuneo CN
19. **Cascina La Commenda** — Beinette
   - slug: `cascina-la-commenda-beinette`
   - indirizzo: Via Vecchia di Santa Margherita, 5, 12016 Santa Margherita CN
20. **Cuneo Guest House** — Beinette
   - slug: `cuneo-guest-house-beinette`
   - indirizzo: Corso Giovanni Giolitti, 34, 12100 Cuneo CN
21. **ROSBed & Breakfast** — Beinette
   - slug: `rosbed-breakfast-beinette`
   - indirizzo: Via Rosbella, 36, 12012 Boves CN
22. **Seguendo L'Oca** — Beinette
   - slug: `seguendo-l-oca-beinette`
   - indirizzo: Via Passatore, 87, 12010 Cervasca CN
23. **AGRITURISMO BORGO SANTA LUCIA - AGRITURISMO CROPANI** — Belcastro
   - slug: `agriturismo-borgo-santa-lucia-agriturismo-cropan-belcastro`
   - indirizzo: Contrada Santa Lucia, snc, 88051 Cropani CZ
24. **B&B FONTANA GIULIA** — Belcastro
   - slug: `b-b-fontana-giulia-belcastro`
   - indirizzo: Via della Concordia, 88054 Sersale CZ
25. **Villaggio Triton - Aurum Hotels** — Belcastro
   - slug: `villaggio-triton-aurum-hotels-belcastro`
   - indirizzo: Viale S. Vincenzo, 88050 Sellia Marina CZ
26. **Agriturismo Corte Belfiore Elio Bresciani** — Belfiore
   - slug: `agriturismo-corte-belfiore-elio-bresciani-belfiore`
   - indirizzo: Via Podiola, 8, 46019 Viadana MN
27. **Agriturismo Corte Belvedere** — Belfiore
   - slug: `agriturismo-corte-belvedere-belfiore`
   - indirizzo: Strada dei Colli, 98, 46040 Monzambano MN
28. **Agriturismo Corte dei Fiori** — Belfiore
   - slug: `agriturismo-corte-dei-fiori-belfiore`
   - indirizzo: Str. delle Caselle, 173, 37013 Pesina VR
29. **Agriturismo Il Melograno** — Belfiore
   - slug: `agriturismo-il-melograno-belfiore`
   - indirizzo: Località Pigno, 8/d, 37069 Villafranca di Verona VR
30. **Agriturismo La Fredda** — Belfiore
   - slug: `agriturismo-la-fredda-belfiore`
   - indirizzo: Via Fredda, 1, 37066 Sommacampagna VR
31. **Agriturismo La Perlara - Adults Only ( + 16 )** — Belfiore
   - slug: `agriturismo-la-perlara-adults-only-16-belfiore`
   - indirizzo: Via Trezzolano, 17, 37141 Verona VR
32. **Agriturismo Millefiori la Corte delle Rose** — Belfiore
   - slug: `agriturismo-millefiori-la-corte-delle-rose-belfiore`
   - indirizzo: Via Borghetto, 7, 45100 Rovigo RO
33. **Antico Casale Bergamini** — Belfiore
   - slug: `antico-casale-bergamini-belfiore`
   - indirizzo: Via Stazione Vecchia, 764, 37015 Sant'Ambrogio di Valpolicella VR
34. **Bed & Breakfast Belfiore** — Belfiore
   - slug: `bed-breakfast-belfiore-belfiore`
   - indirizzo: Via Sorattino, 42, 25017 Lonato del Garda BS
35. **Belfiore Park Hotel 4s** — Belfiore
   - slug: `belfiore-park-hotel-4s-belfiore`
   - indirizzo: Via G. Zanardelli, 5, 37010 Brenzone sul Garda VR