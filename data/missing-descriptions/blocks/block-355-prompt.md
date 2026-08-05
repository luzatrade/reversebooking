# Blocco 355/500 — 35 strutture senza descrizione IT

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

1. **San Donato Golf Resort & Spa** — Cagnano Amiterno
   - slug: `san-donato-golf-resort-spa-cagnano-amiterno`
   - indirizzo: S.P. per Menzano snc, 67100 Santi di Preturo AQ
2. **Affittacamere Helios** — Cagnano Varano
   - slug: `affittacamere-helios-cagnano-varano`
   - indirizzo: Via S. Giovanni Battista, 8, 71013 San Giovanni Rotondo FG
3. **Agriturismo dai Nonni** — Cagnano Varano
   - slug: `agriturismo-dai-nonni-cagnano-varano`
   - indirizzo: Contrada Montegrande snc, 71010 Ischitella FG
4. **Agriturismo Morus Alba Gargano** — Cagnano Varano
   - slug: `agriturismo-morus-alba-gargano-cagnano-varano`
   - indirizzo: Via Torre Varano, 40, 71010 Foce Varano FG
5. **Albergo Il Giardino I Rodi Garganico** — Cagnano Varano
   - slug: `albergo-il-giardino-i-rodi-garganico-cagnano-varano`
   - indirizzo: Contrada Scopparone, 71012 Rodi Garganico FG
6. **Appartamenti e Dimora Santucci** — Cagnano Varano
   - slug: `appartamenti-e-dimora-santucci-cagnano-varano`
   - indirizzo: via Crocifisso, 12, 71012 Rodi Garganico FG
7. **B&B Atlantide** — Cagnano Varano
   - slug: `b-b-atlantide-cagnano-varano`
   - indirizzo: Corso Pietro Giannone, 158, 71010 Cagnano Varano FG
8. **B&B Tancredi** — Cagnano Varano
   - slug: `b-b-tancredi-cagnano-varano`
   - indirizzo: Via G. Marconi, 2, 71010 Cagnano Varano FG
9. **B&B Torre Del Lago** — Cagnano Varano
   - slug: `b-b-torre-del-lago-cagnano-varano`
   - indirizzo: Via Torre Varano, 78, 71010 Foce Varano FG
10. **Blue Marine Village** — Cagnano Varano
   - slug: `blue-marine-village-cagnano-varano`
   - indirizzo: via delle Dalie, 11, 71012 Rodi Garganico FG
11. **Camere Santa Lucia** — Cagnano Varano
   - slug: `camere-santa-lucia-cagnano-varano`
   - indirizzo: Viale Cappuccini, 32, 71013 San Giovanni Rotondo FG
12. **Casa Natura Coppa Del Giglio** — Cagnano Varano
   - slug: `casa-natura-coppa-del-giglio-cagnano-varano`
   - indirizzo: Località Bosco Quarto, 71037 Monte Sant'Angelo FG
13. **Frontemare Hotel Village & Spa | Gargano** — Cagnano Varano
   - slug: `frontemare-hotel-village-spa-gargano-cagnano-varano`
   - indirizzo: Via Belvedere, 71012 Rodi Garganico FG
14. **Gran Paradiso Hotel Spa** — Cagnano Varano
   - slug: `gran-paradiso-hotel-spa-cagnano-varano`
   - indirizzo: Viale Aldo Moro, snc, 71013 San Giovanni Rotondo FG
15. **Hotel Colonne** — Cagnano Varano
   - slug: `hotel-colonne-cagnano-varano`
   - indirizzo: Viale Cappuccini, 135, 71013 San Giovanni Rotondo FG
16. **Hotel Leon Ristorante Al Cavallino Rosso** — Cagnano Varano
   - slug: `hotel-leon-ristorante-al-cavallino-rosso-cagnano-varano`
   - indirizzo: Via Tratturo delle Corse, 14, 71013 San Giovanni Rotondo FG
17. **Hotel Poggio degli Ulivi • Rodi Garganico** — Cagnano Varano
   - slug: `hotel-poggio-degli-ulivi-rodi-garganico-cagnano-varano`
   - indirizzo: SS89, Km. 67,800, 71012 Rodi Garganico FG
18. **Hotel Sollievo** — Cagnano Varano
   - slug: `hotel-sollievo-cagnano-varano`
   - indirizzo: Viale Cappuccini, 129, 71013 San Giovanni Rotondo FG
19. **Masseria Romagnolo** — Cagnano Varano
   - slug: `masseria-romagnolo-cagnano-varano`
   - indirizzo: CONTRADA GRAVITA, 71010 Carpino FG
20. **Villa Santacroce** — Cagnano Varano
   - slug: `villa-santacroce-cagnano-varano`
   - indirizzo: Via Santa Croce, 21, 71013 San Giovanni Rotondo FG
21. **Agriturismo La Monaca** — Caianello
   - slug: `agriturismo-la-monaca-caianello`
   - indirizzo: Via Vecchia Ceraselle, 81059 Caianello CE
22. **B&b I Greci** — Caianello
   - slug: `b-b-i-greci-caianello`
   - indirizzo: Via San Rocco, 81058 Vairano Patenora CE
23. **Casa della nonna b&b** — Caianello
   - slug: `casa-della-nonna-b-b-caianello`
   - indirizzo: Via de Quattro, 81058 Vairano Scalo CE
24. **Golden Residence** — Caianello
   - slug: `golden-residence-caianello`
   - indirizzo: Traversa I, Via Ceraselle, 30, 81059 Caianello CE
25. **Hotel dei Boschi di Antonia** — Caianello
   - slug: `hotel-dei-boschi-di-antonia-caianello`
   - indirizzo: Viale delle Terme, 15, 81035 Roccamonfina CE
26. **Hotel Ristorante Bellavista** — Caianello
   - slug: `hotel-ristorante-bellavista-caianello`
   - indirizzo: Via Roma, 89, 81035 Roccamonfina CE
27. **Hotel Ristorante Villa Pegaso** — Caianello
   - slug: `hotel-ristorante-villa-pegaso-caianello`
   - indirizzo: Via Casilina, 19, km, 151, 81049 San Pietro Infine CE
28. **Hotel San Leo - Sessa Aurunca Ce** — Caianello
   - slug: `hotel-san-leo-sessa-aurunca-ce-caianello`
   - indirizzo: Vico I S. Leo, 1, 81037 Sessa Aurunca CE
29. **i Cacciagalli - Wine Resort** — Caianello
   - slug: `i-cacciagalli-wine-resort-caianello`
   - indirizzo: SP91, 81057 Teano CE
30. **Roccamonfina Palace Hotel** — Caianello
   - slug: `roccamonfina-palace-hotel-caianello`
   - indirizzo: Piazza Nicola Amore, 102, 81035 Roccamonfina CE
31. **Agriturismo Le Ghiandaie** — Caiazzo
   - slug: `agriturismo-le-ghiandaie-caiazzo`
   - indirizzo: Via Polizzano, 50, 81013 Piana di Monte Verna CE
32. **Alle Antiche Mura** — Caiazzo
   - slug: `alle-antiche-mura-caiazzo`
   - indirizzo: Via San Francesco, 5, 81013 Caiazzo CE
33. **B&b Belvedere di Caiazzo** — Caiazzo
   - slug: `b-b-belvedere-di-caiazzo-caiazzo`
   - indirizzo: SP 336 Sannitica, 22/a, 81013 Caiazzo CE
34. **B&B Casa Aulivo** — Caiazzo
   - slug: `b-b-casa-aulivo-caiazzo`
   - indirizzo: Via San Francesco, 81013 Caiazzo CE
35. **Hotel Caserta Antica** — Caiazzo
   - slug: `hotel-caserta-antica-caiazzo`
   - indirizzo: Via Tiglio, 75, 81100 Caserta CE