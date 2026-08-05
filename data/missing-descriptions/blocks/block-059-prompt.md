# Blocco 59/500 — 35 strutture senza descrizione IT

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

1. **Hotel Parnaso** — Albidona
   - slug: `hotel-parnaso-albidona`
   - indirizzo: Via Longo, 3, 87075 Trebisacce CS
2. **Hotel Ristorante Pizzeria 111** — Albidona
   - slug: `hotel-ristorante-pizzeria-111-albidona`
   - indirizzo: contrada pantano, S.da Statale 106 Jonica, 87076 Villapiana Lido CS
3. **Hotel Villa S. Maria** — Albidona
   - slug: `hotel-villa-s-maria-albidona`
   - indirizzo: Via Nazionale SS92, 87070 Cerchiara di Calabria CS
4. **La Dimora dei Nonni** — Albidona
   - slug: `la-dimora-dei-nonni-albidona`
   - indirizzo: Via Duca D'Aosta, 6, 87070 Albidona CS
5. **LUDOGA' LUXURY SUITE** — Albidona
   - slug: `ludoga-luxury-suite-albidona`
   - indirizzo: Viale dei barcaioli, 1, 87075 Trebisacce CS
6. **Luxury House** — Albidona
   - slug: `luxury-house-albidona`
   - indirizzo: Via Nazionale, 87076 Villapiana Lido CS
7. **Masseria Torre di Albidona** — Albidona
   - slug: `masseria-torre-di-albidona-albidona`
   - indirizzo: 87075 Piana della Torre CS
8. **Merigio'** — Albidona
   - slug: `merigio-albidona`
   - indirizzo: Via delle Gardenie, 95, 87076 Villapiana Lido CS
9. **Relais Capo Spulico - Beach & SPA** — Albidona
   - slug: `relais-capo-spulico-beach-spa-albidona`
   - indirizzo: Via Piano Marina, 87070 Roseto Capo Spulico CS
10. **Rifugio Radura del Grano** — Albidona
   - slug: `rifugio-radura-del-grano-albidona`
   - indirizzo: Viale Sparviero, 87070 Plataci CS
11. **Agriturismo Capeeto** — Albignasego
   - slug: `agriturismo-capeeto-albignasego`
   - indirizzo: V. Lago Dolfin, 2, 35124 Padova PD
12. **Agriturismo Verdecielo** — Albignasego
   - slug: `agriturismo-verdecielo-albignasego`
   - indirizzo: Via Pozzoveggiani, 30/C, 35124 Padova PD
13. **Aurora Rooms & Suite** — Albignasego
   - slug: `aurora-rooms-suite-albignasego`
   - indirizzo: Via Roma, 238, 35020 Albignasego PD
14. **B&B Alle Ortensie** — Albignasego
   - slug: `b-b-alle-ortensie-albignasego`
   - indirizzo: Cin : IT028003C16QQZVHCT, Vicolo Giacomo Zanella, 26A, 35020 Albignasego PD
15. **Baràca Padova** — Albignasego
   - slug: `baraca-padova-albignasego`
   - indirizzo: Via Battaglia, 37, 35020 Albignasego PD
16. **Bed and Breakfast Ai Girasoli** — Albignasego
   - slug: `bed-and-breakfast-ai-girasoli-albignasego`
   - indirizzo: Via Piovese, 182, 35127 Padova PD
17. **Bread and Butter rooms** — Albignasego
   - slug: `bread-and-butter-rooms-albignasego`
   - indirizzo: Via G. Galilei, 107, 35020 Albignasego PD
18. **CAMINHOUSE** — Albignasego
   - slug: `caminhouse-albignasego`
   - indirizzo: Via Sicilia, 4, 35127 Padova PD
19. **Casa Roma rooms &apartments** — Albignasego
   - slug: `casa-roma-rooms-apartments-albignasego`
   - indirizzo: Via Guizza Conselvana, 144, 35125 Padova PD
20. **DC Hotel International** — Albignasego
   - slug: `dc-hotel-international-albignasego`
   - indirizzo: Corso Stati Uniti, 14/B, 35127 Padova PD
21. **HOTEL COLONNA** — Albignasego
   - slug: `hotel-colonna-albignasego`
   - indirizzo: Via Roma, 174, 35020 Albignasego PD
22. **Hotel Master** — Albignasego
   - slug: `hotel-master-albignasego`
   - indirizzo: Via G. Mameli, 89, 35020 Albignasego PD
23. **Il colore dei sogni** — Albignasego
   - slug: `il-colore-dei-sogni-albignasego`
   - indirizzo: Via Vo' di Placca, 73, 35020 Due Carrare PD
24. **M14 Hotel & SPA** — Albignasego
   - slug: `m14-hotel-spa-albignasego`
   - indirizzo: Via Acquette, 9, 35122 Padova PD
25. **Martina's Rooms** — Albignasego
   - slug: `martina-s-rooms-albignasego`
   - indirizzo: Via Roma, 80, 35020 Albignasego PD
26. **Palazzo Gilberto** — Albignasego
   - slug: `palazzo-gilberto-albignasego`
   - indirizzo: Via Sorio, 66A, 35141 Padova PD
27. **Sissi Bed & Breakfast** — Albignasego
   - slug: `sissi-bed-breakfast-albignasego`
   - indirizzo: Via Padova, 56, 35030 Selvazzano Dentro PD
28. **Villa San Bonifacio - Veneto Villa Mandriola** — Albignasego
   - slug: `villa-san-bonifacio-veneto-villa-mandriola-albignasego`
   - indirizzo: Via Sebastiano Caboto, 10, 35020 Mandriola PD
29. **Agriturismo Bellarosa Bio** — Albinea
   - slug: `agriturismo-bellarosa-bio-albinea`
   - indirizzo: Via Roncosano, 11, 42020 Albinea RE
30. **Agriturismo BOSCO DEL FRACASSO** — Albinea
   - slug: `agriturismo-bosco-del-fracasso-albinea`
   - indirizzo: Via Bosco del Fracasso, 20, 42019 Scandiano RE
31. **Agriturismo Il Brugnolo** — Albinea
   - slug: `agriturismo-il-brugnolo-albinea`
   - indirizzo: Via Sabatini, 10, 42019 Scandiano RE
32. **Agriturismo La Razza** — Albinea
   - slug: `agriturismo-la-razza-albinea`
   - indirizzo: Via Monterampino, 3, 42123 Reggio nell'Emilia RE
33. **Antico Podere Emilia** — Albinea
   - slug: `antico-podere-emilia-albinea`
   - indirizzo: Via Carlo Darwin, 2, 42123 Reggio nell'Emilia RE
34. **Azienda Agricola e Agrituristica Cavazzone** — Albinea
   - slug: `azienda-agricola-e-agrituristica-cavazzone-albinea`
   - indirizzo: Via Cavazzone, 4, 42030 Viano RE
35. **B&B Des Artistes** — Albinea
   - slug: `b-b-des-artistes-albinea`
   - indirizzo: Via E. Zacconi, 19, 42020 Albinea RE