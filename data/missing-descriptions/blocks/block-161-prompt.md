# Blocco 161/500 — 35 strutture senza descrizione IT

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

1. **Locanda dell' Arcangelo** — Artena
   - slug: `locanda-dell-arcangelo-artena`
   - indirizzo: Via della Marina, terrazze panoramiche, Via Vittorio Emanuele III', 57, 04010 Rocca Massima LT
2. **Raggio di Luna affittacamere** — Artena
   - slug: `raggio-di-luna-affittacamere-artena`
   - indirizzo: Via Casilina, 141, 00038 Valmontone RM
3. **Ristorante Albergo Ciacitto** — Artena
   - slug: `ristorante-albergo-ciacitto-artena`
   - indirizzo: Via Pozzo Nuovo, 17, 00031 Artena RM
4. **Albergo La Baita B & B** — Artogne
   - slug: `albergo-la-baita-b-b-artogne`
   - indirizzo: Viale Alessandro Manzoni, 49, 25047 Darfo Boario Terme BS
5. **Albergo Ristorante Airone** — Artogne
   - slug: `albergo-ristorante-airone-artogne`
   - indirizzo: Via Nazionale, 15, 25047 Darfo Boario Terme BS
6. **B & B "La Teiera"** — Artogne
   - slug: `b-b-la-teiera-artogne`
   - indirizzo: V.cl Torrente Dezzo, 13, 25047 Darfo Boario Terme BS
7. **B&B Al Cortile del Bertolet** — Artogne
   - slug: `b-b-al-cortile-del-bertolet-artogne`
   - indirizzo: Via Torre, 69, 25050 Pian Camuno BS
8. **B&B Le Pateghe** — Artogne
   - slug: `b-b-le-pateghe-artogne`
   - indirizzo: V. Plan di Montecampione, 90, 25040 Artogne BS
9. **B&B Montecampione** — Artogne
   - slug: `b-b-montecampione-artogne`
   - indirizzo: V. Plan di Montecampione, 74, 25040 Artogne BS
10. **Le Alpi bed&living** — Artogne
   - slug: `le-alpi-bed-living-artogne`
   - indirizzo: Via Roma, 32, 25040 Cividate Camuno BS
11. **Ostello del Porto** — Artogne
   - slug: `ostello-del-porto-artogne`
   - indirizzo: Via G. Paglia, 70, 24065 Lovere BG
12. **Albergo Cheverel** — Arvier
   - slug: `albergo-cheverel-arvier`
   - indirizzo: Frazione Cheverel, 154, 11015 La Salle AO
13. **Albergo la Meridiana** — Arvier
   - slug: `albergo-la-meridiana-arvier`
   - indirizzo: Località Chateau Feuillet, 17, 11010 Saint-Pierre AO
14. **B&B Au Chateau Blanc** — Arvier
   - slug: `b-b-au-chateau-blanc-arvier`
   - indirizzo: Via Corrado Gex, 22, 11011 Arvier AO
15. **Beau Séjour Sarre** — Arvier
   - slug: `beau-sejour-sarre-arvier`
   - indirizzo: Localita' Arensod, 5, Frazione Arensod, 4, 11010 Montan-angelin-arensod AO
16. **Edelweiss** — Arvier
   - slug: `edelweiss-arvier`
   - indirizzo: Frazione Trepont, 87, 11018 Villeneuve AO
17. **Hôtel Beau Séjour** — Arvier
   - slug: `hotel-beau-sejour-arvier`
   - indirizzo: Via Corrado Gex, 114, 11011 Arvier AO
18. **Hotel Chateau** — Arvier
   - slug: `hotel-chateau-arvier`
   - indirizzo: Via della Libertà, 10, 11010 Saint-Pierre AO
19. **Hotel Col Du Mont** — Arvier
   - slug: `hotel-col-du-mont-arvier`
   - indirizzo: Via Corrado Gex, 74, 11011 Arvier AO
20. **Hotel des Roses** — Arvier
   - slug: `hotel-des-roses-arvier`
   - indirizzo: Frazione Trepont, 10, 11018 Villeneuve AO
21. **Hotel Étoile Du Nord** — Arvier
   - slug: `hotel-etoile-du-nord-arvier`
   - indirizzo: Frazione Arensod, 43, 11010 Sarre AO
22. **Hotel Le Clou** — Arvier
   - slug: `hotel-le-clou-arvier`
   - indirizzo: Via Corrado Gex, 26, 11011 Arvier AO
23. **Hotel Restaurant Valdotain** — Arvier
   - slug: `hotel-restaurant-valdotain-arvier`
   - indirizzo: Piazza Assunzione, 6/7, 11018 Villeneuve AO
24. **Hotel Ristorante Paramont** — Arvier
   - slug: `hotel-ristorante-paramont-arvier`
   - indirizzo: Frazione Planaval, 1, 11011 Planaval AO
25. **Hotel Ruitor** — Arvier
   - slug: `hotel-ruitor-arvier`
   - indirizzo: Via Corrado Gex, 38, 11011 Arvier AO
26. **HOTEL SAINT NICOLAS** — Arvier
   - slug: `hotel-saint-nicolas-arvier`
   - indirizzo: Localita' Fossaz Dessous, 4, 11010 Saint-Nicolas AO
27. **L'angolino di Bonny** — Arvier
   - slug: `l-angolino-di-bonny-arvier`
   - indirizzo: Fraz, Via XIII Settembre, 47/B, 11011 Leverogne AO
28. **Maison de la montagne - Chambres & Relax** — Arvier
   - slug: `maison-de-la-montagne-chambres-relax-arvier`
   - indirizzo: Via Lostan, 19, 11011 Arvier AO
29. **Ristoro Vagneur** — Arvier
   - slug: `ristoro-vagneur-arvier`
   - indirizzo: Nucleo Vens, 36, 11010 Saint-Nicolas AO
30. **View of the vineyards** — Arvier
   - slug: `view-of-the-vineyards-arvier`
   - indirizzo: Via Corrado Gex, 79, 11011 Arvier AO
31. **7Pines Resort Sardinia, part of Destination by Hyatt** — Arzachena
   - slug: `7pines-resort-sardinia-part-of-destination-by-hy-arzachena`
   - indirizzo: Loc. Li, Via Mucchi Bianchi, 07021 Baja Sardinia GA
32. **Casa Mia Ristorante Lounge bar - Costa Smeralda** — Arzachena
   - slug: `casa-mia-ristorante-lounge-bar-costa-smeralda-arzachena`
   - indirizzo: Via Evangelista Torricelli, 3, 07021 Arzachena OT
33. **Cascioni Eco Retreat, an SLH Hotel** — Arzachena
   - slug: `cascioni-eco-retreat-an-slh-hotel-arzachena`
   - indirizzo: SP 59 bis, 07021 Arzachena OT
34. **Cervo Hotel, Costa Smeralda Resort** — Arzachena
   - slug: `cervo-hotel-costa-smeralda-resort-arzachena`
   - indirizzo: Piazzetta Costa Smeralda, 07021 Porto Cervo OT
35. **Club Esse Cala Bitta - Baia Sardinia** — Arzachena
   - slug: `club-esse-cala-bitta-baia-sardinia-arzachena`
   - indirizzo: V. Cala Bitta, 07021 Arzachena OT