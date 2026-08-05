# Blocco 455/500 — 35 strutture senza descrizione IT

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

1. **L'arte dell'accoglienza - B&B** — Casalecchio di Reno
   - slug: `l-arte-dell-accoglienza-b-b-casalecchio-di-reno`
   - indirizzo: Via G. Garibaldi, 45, 40033 Casalecchio di Reno BO
2. **Podere Boschetto R&B** — Casalecchio di Reno
   - slug: `podere-boschetto-r-b-casalecchio-di-reno`
   - indirizzo: 22 /2Via, di Monte Albano, 40135 Bologna BO
3. **SHG Hotel Bologna** — Casalecchio di Reno
   - slug: `shg-hotel-bologna-casalecchio-di-reno`
   - indirizzo: Via Risorgimento, 186, 40069 Zola Predosa BO
4. **Villa Aretusi** — Casalecchio di Reno
   - slug: `villa-aretusi-casalecchio-di-reno`
   - indirizzo: Via Aretusi, 5, 40132 Bologna BO
5. **Agriturismo “Veritas” Bed & Wine** — Casaleggio Boiro
   - slug: `agriturismo-veritas-bed-wine-casaleggio-boiro`
   - indirizzo: Circonvallazione Alfio Lamanna, 15075 Mornese AL
6. **Cascina Burroni Azienda agricola di Alessia Parodi** — Casaleggio Boiro
   - slug: `cascina-burroni-azienda-agricola-di-alessia-paro-casaleggio-boiro`
   - indirizzo: Cascina Burroni, 15, 15070 Lerma AL
7. **Cascina Galata** — Casaleggio Boiro
   - slug: `cascina-galata-casaleggio-boiro`
   - indirizzo: 15070 Casaleggio Boiro AL
8. **Nel Caruggio - B&B** — Casaleggio Boiro
   - slug: `nel-caruggio-b-b-casaleggio-boiro`
   - indirizzo: Via Benso Domenico, 19, 15075 Mornese AL
9. **Oasi Castello di Lerma** — Casaleggio Boiro
   - slug: `oasi-castello-di-lerma-casaleggio-boiro`
   - indirizzo: Piazza Roma, 5, 15070 Lerma AL
10. **B&B Ametista Affittacamere** — Casaleggio Novara
   - slug: `b-b-ametista-affittacamere-casaleggio-novara`
   - indirizzo: Via Mameli, 2/o, 28060 Casaleggio Novara NO
11. **Villa Cometa** — Casaleggio Novara
   - slug: `villa-cometa-casaleggio-novara`
   - indirizzo: Via Mameli, 28060 Casaleggio Novara NO
12. **Agriturismo Le Cadabese** — Casaleone
   - slug: `agriturismo-le-cadabese-casaleone`
   - indirizzo: Via Cadabese, 57, 37053 Asparetto VR
13. **Ai Tigli e La Casa Grande di Corte Italia** — Casaleone
   - slug: `ai-tigli-e-la-casa-grande-di-corte-italia-casaleone`
   - indirizzo: Via Roma, 3, 37060 Sorgà VR
14. **Albergo Romagnolo** — Casaleone
   - slug: `albergo-romagnolo-casaleone`
   - indirizzo: Via Vittorio Veneto, 105, 37053 Cerea VR
15. **Bo Casa - Affittacamere B&B** — Casaleone
   - slug: `bo-casa-affittacamere-b-b-casaleone`
   - indirizzo: Via Venera, 1, 37052 Casaleone VR
16. **Casa Antica Rossato** — Casaleone
   - slug: `casa-antica-rossato-casaleone`
   - indirizzo: Via Mantova, 99, 37053 Cerea VR
17. **Mulino Delle Valli - Hotel** — Casaleone
   - slug: `mulino-delle-valli-hotel-casaleone`
   - indirizzo: Via Boldiere, 4, 37052 Casaleone VR
18. **Residenza Stazione** — Casaleone
   - slug: `residenza-stazione-casaleone`
   - indirizzo: Via G. Oberdan, 30, 37060 Verona, VR
19. **Rooster Hotel** — Casaleone
   - slug: `rooster-hotel-casaleone`
   - indirizzo: Corso V. Emanuele II, 18, 37058 Sanguinetto VR
20. **Agriturismo Cascina Pezzolo** — Casaletto Lodigiano
   - slug: `agriturismo-cascina-pezzolo-casaletto-lodigiano`
   - indirizzo: Via Pezzolo, 2b, 26854 Pieve Fissiraga LO
21. **Air Bag** — Casaletto Lodigiano
   - slug: `air-bag-casaletto-lodigiano`
   - indirizzo: SS 9 Via Emilia, 26838 Tavazzano con Villavesco LO
22. **Easy Room Italy Rogoredo** — Casaletto Lodigiano
   - slug: `easy-room-italy-rogoredo-casaletto-lodigiano`
   - indirizzo: Via Monte Popera, 8, 20138 Milano MI
23. **Il Cortile guesthouse Affitti brevi** — Casaletto Lodigiano
   - slug: `il-cortile-guesthouse-affitti-brevi-casaletto-lodigiano`
   - indirizzo: Via Ceregallo, 3, 20070 San Zenone al Lambro MI
24. **Albergo Cavaliere** — Casaletto Spartano
   - slug: `albergo-cavaliere-casaletto-spartano`
   - indirizzo: Via Nazionale, 67, 84030 Caselle in Pittari SA
25. **B & B Villa Rachele** — Casaletto Spartano
   - slug: `b-b-villa-rachele-casaletto-spartano`
   - indirizzo: Via Polito, 14, 84030 Casaletto Spartano SA
26. **Bed & Breakfast Rio Casaletto** — Casaletto Spartano
   - slug: `bed-breakfast-rio-casaletto-casaletto-spartano`
   - indirizzo: Via Nazionale, 180/a, 84030 Casaletto Spartano SA
27. **Casa Vacanze Il Melograno** — Casaletto Spartano
   - slug: `casa-vacanze-il-melograno-casaletto-spartano`
   - indirizzo: via, Via Giuseppe Garibaldi, 1, 84030 Tortorella SA
28. **Elios Residence Hotel** — Casaletto Spartano
   - slug: `elios-residence-hotel-casaletto-spartano`
   - indirizzo: V. Dante Alighieri, 84073 Fortino SA
29. **Hotel Eden Park Cilento** — Casaletto Spartano
   - slug: `hotel-eden-park-cilento-casaletto-spartano`
   - indirizzo: Via Cantiere, 41/47, 84050 Capitello SA
30. **Hotel Pisacane** — Casaletto Spartano
   - slug: `hotel-pisacane-casaletto-spartano`
   - indirizzo: Via Carlo Alberto, 35, 84073 Sapri SA
31. **Incanto di Luna** — Casaletto Spartano
   - slug: `incanto-di-luna-casaletto-spartano`
   - indirizzo: via Piscioli 7A, 84050 Ispani SA
32. **Masseria Agromusicale Cata Catascia** — Casaletto Spartano
   - slug: `masseria-agromusicale-cata-catascia-casaletto-spartano`
   - indirizzo: contrada San Nicola, snc, 84030 Tortorella SA
33. **Palazzo Gallotti** — Casaletto Spartano
   - slug: `palazzo-gallotti-casaletto-spartano`
   - indirizzo: Via Nazionale, 19, 84030 Battaglia SA
34. **Palazzo Menghina** — Casaletto Spartano
   - slug: `palazzo-menghina-casaletto-spartano`
   - indirizzo: Piazza municipio (via Roma, 2, 84030 Casaletto Spartano SA
35. **Sant'Antonio Hotel** — Casaletto Spartano
   - slug: `sant-antonio-hotel-casaletto-spartano`
   - indirizzo: Via S. Rocco, 84030 Torraca SA