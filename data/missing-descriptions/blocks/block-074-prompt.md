# Blocco 74/500 — 35 strutture senza descrizione IT

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

1. **Bed & Breakfast Cascina Setteventi** — Alice Bel Colle
   - slug: `bed-breakfast-cascina-setteventi-alice-bel-colle`
   - indirizzo: Via Leonotti, 71, 14046 Mombaruzzo AT
2. **Bed e Breakfast Il Girasole** — Alice Bel Colle
   - slug: `bed-e-breakfast-il-girasole-alice-bel-colle`
   - indirizzo: Via Privata Oreste Berruti, 7, 15019 Strevi AL
3. **Casa Levi** — Alice Bel Colle
   - slug: `casa-levi-alice-bel-colle`
   - indirizzo: Regione Nausano, 4, 15012 Bistagno AL
4. **Cascina Valtignosa - camere con vigna** — Alice Bel Colle
   - slug: `cascina-valtignosa-camere-con-vigna-alice-bel-colle`
   - indirizzo: SP233, 15016 Cassine AL
5. **Giarvino Boutique Guest House & Ristorante** — Alice Bel Colle
   - slug: `giarvino-boutique-guest-house-ristorante-alice-bel-colle`
   - indirizzo: Str. dei Botti, 18, 15011 Acqui Terme AL
6. **Hotel Belvedere** — Alice Bel Colle
   - slug: `hotel-belvedere-alice-bel-colle`
   - indirizzo: Piazza Guacchione, 15010 Alice Bel Colle AL
7. **Laficaia** — Alice Bel Colle
   - slug: `laficaia-alice-bel-colle`
   - indirizzo: Via San Michele, 41, 14046 Casalotto AT
8. **Modern farm house** — Alice Bel Colle
   - slug: `modern-farm-house-alice-bel-colle`
   - indirizzo: Via San Rocco, 14040 Montabone AT
9. **Viaggio della Vita BnB** — Alice Bel Colle
   - slug: `viaggio-della-vita-bnb-alice-bel-colle`
   - indirizzo: Via Roma, 82, 14044 Fontanile AT
10. **B&B Antiche Pietre** — Alice Castello
   - slug: `b-b-antiche-pietre-alice-castello`
   - indirizzo: Via Castello, 18, 10012 Bollengo TO
11. **B&B Bouganville** — Alice Castello
   - slug: `b-b-bouganville-alice-castello`
   - indirizzo: Via al Castello, 2, 13886 Viverone BI
12. **B&B Il Mirtillo** — Alice Castello
   - slug: `b-b-il-mirtillo-alice-castello`
   - indirizzo: Via Vische, 24, 13040 Moncrivello VC
13. **B&B lalanternadiviverone** — Alice Castello
   - slug: `b-b-lalanternadiviverone-alice-castello`
   - indirizzo: Via Tizzani, 23, 13886 Viverone BI
14. **b&b Le Lune** — Alice Castello
   - slug: `b-b-le-lune-alice-castello`
   - indirizzo: Via Cavaglià, 2, 13883 Roppolo BI
15. **B&B Le Orchidee** — Alice Castello
   - slug: `b-b-le-orchidee-alice-castello`
   - indirizzo: Via Santhià, 14, 13040 Madonna VC
16. **B&B Spighe Paglia e Girasole** — Alice Castello
   - slug: `b-b-spighe-paglia-e-girasole-alice-castello`
   - indirizzo: Via Cascina Pratoferro, 15, 10030 Vische TO
17. **BOSQUEY RANCH - Maneggio e Bed & Breakfast - Biella Vercelli Piemonte** — Alice Castello
   - slug: `bosquey-ranch-maneggio-e-bed-breakfast-biella-ve-alice-castello`
   - indirizzo: Via Selva, 22, 13040 Alice Castello VC
18. **Fattoria delle Rose - Società Semplice Agricola** — Alice Castello
   - slug: `fattoria-delle-rose-societa-semplice-agricola-alice-castello`
   - indirizzo: Cascina Emilia, Via Dante Alighieri, 61, 13885 Vigellio BI
19. **Hotel Ristorante La Torretta** — Alice Castello
   - slug: `hotel-ristorante-la-torretta-alice-castello`
   - indirizzo: Via Livorno Ferraris, 1, 13041 Bianzè VC
20. **Lunafragola** — Alice Castello
   - slug: `lunafragola-alice-castello`
   - indirizzo: Via Enrico Brugo, 11, 10030 Vische TO
21. **Nautica Tarello** — Alice Castello
   - slug: `nautica-tarello-alice-castello`
   - indirizzo: Località Comuna, Strada Provinciale Viverone Alice - Castello, snc, 13886 Viverone BI
22. **Piscina San Lorenzo** — Alice Castello
   - slug: `piscina-san-lorenzo-alice-castello`
   - indirizzo: Corso XXV aprile, 52, 13048 Santhià VC
23. **Riders** — Alice Castello
   - slug: `riders-alice-castello`
   - indirizzo: Via Santhià, 24, 13040 Alice Castello VC
24. **THE LAKE HOUSE** — Alice Castello
   - slug: `the-lake-house-alice-castello`
   - indirizzo: Strada per Masseria Veneria,12, 13886 Viverone BI
25. **A Casa di Nunzia** — Alife
   - slug: `a-casa-di-nunzia-alife`
   - indirizzo: 81013 Caiazzo CE
26. **Affittacamere Il Colle** — Alife
   - slug: `affittacamere-il-colle-alife`
   - indirizzo: Via Colle, 3, 82030 Faicchio BN
27. **Albergo Al Sole** — Alife
   - slug: `albergo-al-sole-alife`
   - indirizzo: Strada Statale N. 158 Dir, 81016 Piedimonte Matese CE
28. **Anima Antiqua** — Alife
   - slug: `anima-antiqua-alife`
   - indirizzo: SP69 +, 600, 81010 Gioia Sannitica CE
29. **B&B Le Scalelle** — Alife
   - slug: `b-b-le-scalelle-alife`
   - indirizzo: Piazza Ercole d’Agnese, 14, 81016 Piedimonte Matese CE
30. **Borgo Scorciarini B&B** — Alife
   - slug: `borgo-scorciarini-b-b-alife`
   - indirizzo: Via Angelo Scorciarini Coppola, 9, 81016 Piedimonte Matese CE
31. **Casa di Gianni B&B** — Alife
   - slug: `casa-di-gianni-b-b-alife`
   - indirizzo: Via G. Giuseppe D'Amore, 13, 81016 Piedimonte Matese CE
32. **Hotel Ristorante La Piana** — Alife
   - slug: `hotel-ristorante-la-piana-alife`
   - indirizzo: Via Telese, 296, 82031 Amorosi BN
33. **La Cascina nel Bosco** — Alife
   - slug: `la-cascina-nel-bosco-alife`
   - indirizzo: Cese dei Ceci, 2, 82030 Faicchio BN
34. **La Dimora del Viandante** — Alife
   - slug: `la-dimora-del-viandante-alife`
   - indirizzo: Via Roma, 495/497, 81010 Dragoni CE
35. **La Meridiana Country House** — Alife
   - slug: `la-meridiana-country-house-alife`
   - indirizzo: Via Starza, 5, 81016 San Potito Sannitico CE