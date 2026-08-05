# Blocco 255/500 — 35 strutture senza descrizione IT

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

1. **Hotel Sandalia** — Benetutti
   - slug: `hotel-sandalia-benetutti`
   - indirizzo: Via Luigi Einaudi, 12/14, 08100 Nuoro NU
2. **Locanda Tipica Sa Corte** — Benetutti
   - slug: `locanda-tipica-sa-corte-benetutti`
   - indirizzo: Via Nuoro, 138, 08025 Oliena NU
3. **Nicolhaus** — Benetutti
   - slug: `nicolhaus-benetutti`
   - indirizzo: C/so bar Mario, Corso Cocco Ortu, 07010 Benetutti SS
4. **Paghe Eco Luxury Experience** — Benetutti
   - slug: `paghe-eco-luxury-experience-benetutti`
   - indirizzo: Strada Statale 389 di Buddusò e del Correboi, 07020 Buddusò OT
5. **Agriturismo Cascina Rabalot** — Benevello
   - slug: `agriturismo-cascina-rabalot-benevello`
   - indirizzo: SP32, 12055 Diano d'Alba CN
6. **B&B Le Stanze della Musica** — Benevello
   - slug: `b-b-le-stanze-della-musica-benevello`
   - indirizzo: Via Berria, 14, 12050 Borgomale CN
7. **Casa Remussi** — Benevello
   - slug: `casa-remussi-benevello`
   - indirizzo: Via Meruzzano, 8, 12050 Treiso CN
8. **Cit Ni** — Benevello
   - slug: `cit-ni-benevello`
   - indirizzo: SP31, 62, 12050 Bosia CN
9. **Hotel Relais Montemarino** — Benevello
   - slug: `hotel-relais-montemarino-benevello`
   - indirizzo: Via Alba, 66, 12050 Borgomale CN
10. **La Sismonda B&B** — Benevello
   - slug: `la-sismonda-b-b-benevello`
   - indirizzo: Str. Tagliata, 8, 12050 Rodello CN
11. **Locanda San Lorenzo** — Benevello
   - slug: `locanda-san-lorenzo-benevello`
   - indirizzo: frazione S.Lorenzo, 9, 12050 Roddino CN
12. **Moncrivel Rooms & Relax** — Benevello
   - slug: `moncrivel-rooms-relax-benevello`
   - indirizzo: Via Palazzo Vecchio, 2, 12050 Benevello CN
13. **Relais Villa d'Amelia** — Benevello
   - slug: `relais-villa-d-amelia-benevello`
   - indirizzo: Località Manera, 1, 12050 Benevello CN
14. **ALBERGO DELLA CORTE LUBAN S.R.L.** — Benevento
   - slug: `albergo-della-corte-luban-s-r-l-benevento`
   - indirizzo: Piazza Piano di Corte, 11, 82100 Benevento BN
15. **Antum Hotel** — Benevento
   - slug: `antum-hotel-benevento`
   - indirizzo: Viale Principe di Napoli, 137, 82100 Benevento BN
16. **B&B Domus Traiani** — Benevento
   - slug: `b-b-domus-traiani-benevento`
   - indirizzo: Via Cupa Santa Lucia, 7, 82100 Benevento BN
17. **Hotel Antiche Terme** — Benevento
   - slug: `hotel-antiche-terme-benevento`
   - indirizzo: Via Posillipo, 82100 Benevento BN
18. **Hotel DG Garden** — Benevento
   - slug: `hotel-dg-garden-benevento`
   - indirizzo: Via dei Liguri Bebiani, 82100 Benevento BN
19. **Hotel il Molino** — Benevento
   - slug: `hotel-il-molino-benevento`
   - indirizzo: Via dei Mulini, 48, 82100 Benevento BN
20. **Hotel Villa Traiano** — Benevento
   - slug: `hotel-villa-traiano-benevento`
   - indirizzo: Viale dei Rettori, 9, 82100 Benevento BN
21. **La Corte degli Archi** — Benevento
   - slug: `la-corte-degli-archi-benevento`
   - indirizzo: Via Carlo Torre, 14, 82100 Benevento BN
22. **La Fara B&B** — Benevento
   - slug: `la-fara-b-b-benevento`
   - indirizzo: Via Capitano Salvatore Rampone, 53, 82100 Benevento BN
23. **Palazzo dei Catenielli 63 B&B** — Benevento
   - slug: `palazzo-dei-catenielli-63-b-b-benevento`
   - indirizzo: Viale Principe di Napoli, 63, 82100 Benevento BN
24. **SOTTARCO B&Benevento** — Benevento
   - slug: `sottarco-b-benevento-benevento`
   - indirizzo: Via S. Pasquale, 22, 82100 Benevento BN
25. **Affittacamere con Camere di Charme** — Benna
   - slug: `affittacamere-con-camere-di-charme-benna`
   - indirizzo: Via Santuario d'Oropa, 364, 13900 Biella BI
26. **Affittacamere Piazza Castello** — Benna
   - slug: `affittacamere-piazza-castello-benna`
   - indirizzo: Piazza Castello, 20, 13878 Candelo BI
27. **B&B Alpaca Biella** — Benna
   - slug: `b-b-alpaca-biella-benna`
   - indirizzo: Via Azario, 2, 13900 Biella BI
28. **b&b Cascina Belsito Guest House** — Benna
   - slug: `b-b-cascina-belsito-guest-house-benna`
   - indirizzo: Via Bel Sito, 7, 13900 Biella BI
29. **B&B Il Cascinale** — Benna
   - slug: `b-b-il-cascinale-benna`
   - indirizzo: Via Re Umberto I, 43, 13871 Benna BI
30. **B&B Il Glicine** — Benna
   - slug: `b-b-il-glicine-benna`
   - indirizzo: Via Lovis, 3, 13887 Zimone BI
31. **B&B Villa Luisa** — Benna
   - slug: `b-b-villa-luisa-benna`
   - indirizzo: Via Pietro Micca, 40, 13878 Candelo BI
32. **Bed and Breakfast Villa Botto** — Benna
   - slug: `bed-and-breakfast-villa-botto-benna`
   - indirizzo: Via per Castelletto Cervo, 418, 13836 Cossato BI
33. **M-AppHotel** — Benna
   - slug: `m-apphotel-benna`
   - indirizzo: SP230, 6, 13871 Zona Industriale Campogrande BI
34. **Agriturismo Ben Ti Voglio** — Bentivoglio
   - slug: `agriturismo-ben-ti-voglio-bentivoglio`
   - indirizzo: Località Castell'Arienti, 5, 40141 Bologna BO
35. **Ben Ti Voglio BeB** — Bentivoglio
   - slug: `ben-ti-voglio-beb-bentivoglio`
   - indirizzo: Via S. Pertini, 24 Via F.lli Cervi, 13 Vicinanza Ospedale e Interporto, 40010 Bentivoglio BO