# Blocco 338/500 — 35 strutture senza descrizione IT

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

1. **La Cantina di Bacco + Casa Vacanze Franco ed Enza** — Buccino
   - slug: `la-cantina-di-bacco-casa-vacanze-franco-ed-enza-buccino`
   - indirizzo: Piazza, 84020 San Gregorio Magno SA
2. **Agriturismo Antiche Dimore di Poggianto** — Bucine
   - slug: `agriturismo-antiche-dimore-di-poggianto-bucine`
   - indirizzo: Pergine Valdarno (Arezzo), Località Poggiauto, 52019 Pergine Valdarno AR
3. **Agriturismo Le Mura** — Bucine
   - slug: `agriturismo-le-mura-bucine`
   - indirizzo: località Le Mura, 31, 52021 Bucine AR
4. **Agriturismo Podere Luisa** — Bucine
   - slug: `agriturismo-podere-luisa-bucine`
   - indirizzo: Via Di Rendola, 152, 52025 Montevarchi AR
5. **Agriturismo Relais Campiglioni** — Bucine
   - slug: `agriturismo-relais-campiglioni-bucine`
   - indirizzo: Via Campiglioni Le Selici, 31, 52025 Montevarchi AR
6. **Agriturismo Tenuta Lupinari** — Bucine
   - slug: `agriturismo-tenuta-lupinari-bucine`
   - indirizzo: Località i Lupinari, 52021 Bucine AR
7. **Agriturismo Tontenano** — Bucine
   - slug: `agriturismo-tontenano-bucine`
   - indirizzo: Tontenano, 52021 Bucine AR
8. **Agriturismo Villa Le Vigne** — Bucine
   - slug: `agriturismo-villa-le-vigne-bucine`
   - indirizzo: Via di Caposelvi, 178, 52025 Montevarchi AR
9. **Belvedere** — Bucine
   - slug: `belvedere-bucine`
   - indirizzo: Località Frosini, 14, 52020 Bucine AR
10. **BnB Casa le Rondini Toscana** — Bucine
   - slug: `bnb-casa-le-rondini-toscana-bucine`
   - indirizzo: Localita Migliarina, 109, 52021 Bucine AR
11. **Chianti La Collina** — Bucine
   - slug: `chianti-la-collina-bucine`
   - indirizzo: Vepri, 52021 Bucine AR
12. **FATTORIA CASABIANCA di Liquori Aldo** — Bucine
   - slug: `fattoria-casabianca-di-liquori-aldo-bucine`
   - indirizzo: Località Frosini, 14, 52021 Bucine AR
13. **Hotel Delta** — Bucine
   - slug: `hotel-delta-bucine`
   - indirizzo: Via G. Puccini, 30, 52025 Montevarchi AR
14. **I Salici Agriturismo** — Bucine
   - slug: `i-salici-agriturismo-bucine`
   - indirizzo: via presciano, 17, 52020 Pergine Valdarno AR
15. **Poggio Ugo** — Bucine
   - slug: `poggio-ugo-bucine`
   - indirizzo: Via per Cennina, 12, 52021 Bucine AR
16. **Relais La Martina** — Bucine
   - slug: `relais-la-martina-bucine`
   - indirizzo: Loc. Ripaltella, 52021 Pietraviva AR
17. **Salceta, a Tuscany Country House** — Bucine
   - slug: `salceta-a-tuscany-country-house-bucine`
   - indirizzo: Via Pian di Chena, 2, 52028 Campogialli AR
18. **Vepri B4** — Bucine
   - slug: `vepri-b4-bucine`
   - indirizzo: Strada Comunale D'ambra B4 Bucine, 52021 Bucine AR
19. **Villa di Capannole** — Bucine
   - slug: `villa-di-capannole-bucine`
   - indirizzo: 23, Località, 52021 Bucine AR
20. **Villa Petrea** — Bucine
   - slug: `villa-petrea-bucine`
   - indirizzo: Via S. Donato, 3, 52021 Bucine AR
21. **Agriturismo F.lli Muzzu** — Buddus�
   - slug: `agriturismo-f-lli-muzzu-buddus`
   - indirizzo: Via A. Moro, 6, 07020 Sa Serra SS
22. **AGRITURISMO MURGIA** — Buddus�
   - slug: `agriturismo-murgia-buddus`
   - indirizzo: 07020 Su Tirialzu OT
23. **Sa Corte Nova** — Buddus�
   - slug: `sa-corte-nova-buddus`
   - indirizzo: Via Karl Marx, 10, 08020 Lula NU
24. **Agriturismo al Ranch** — Budoia
   - slug: `agriturismo-al-ranch-budoia`
   - indirizzo: Via Pedemontana Occidentale, 40, 33070 Budoia PN
25. **Albergo Diffuso Polcenigo** — Budoia
   - slug: `albergo-diffuso-polcenigo-budoia`
   - indirizzo: Piazza Plebiscito, 20, 33070 Polcenigo PN
26. **B&B La Casa di Elsa** — Budoia
   - slug: `b-b-la-casa-di-elsa-budoia`
   - indirizzo: Via Sacile, 33, 33070 Polcenigo PN
27. **B&B Palazzo Scolari** — Budoia
   - slug: `b-b-palazzo-scolari-budoia`
   - indirizzo: Via Gorgazzo, 2, 33070 Polcenigo PN
28. **Bed & Breakfast Venezia delle Nevi** — Budoia
   - slug: `bed-breakfast-venezia-delle-nevi-budoia`
   - indirizzo: via Solvela, 4, 33070 Budoia PN
29. **Casa Vacanza Polcenigo- Bed and Breakfast - B&B Casa Titti Polcenigo** — Budoia
   - slug: `casa-vacanza-polcenigo-bed-and-breakfast-b-b-cas-budoia`
   - indirizzo: Via Pordenone, 130, 33070 Polcenigo PN
30. **Relais Sauc & SPA - Agriturismo** — Budoia
   - slug: `relais-sauc-spa-agriturismo-budoia`
   - indirizzo: Località Sauc, 2, 33070 Budoia PN
31. **Albergo Terra Di Gallura** — Budoni
   - slug: `albergo-terra-di-gallura-budoni`
   - indirizzo: Via Emilio Lussu, 1, 07051 Budoni OT
32. **Bravo Budoni - Area Li Cupulatti** — Budoni
   - slug: `bravo-budoni-area-li-cupulatti-budoni`
   - indirizzo: Via A. Vespucci, 5, 07051 Agrustos OT
33. **BUDONI BEACH HOTEL** — Budoni
   - slug: `budoni-beach-hotel-budoni`
   - indirizzo: Via Porto Ainu, 07051 Budoni SU
34. **Budoni Resort** — Budoni
   - slug: `budoni-resort-budoni`
   - indirizzo: Via A. Vespucci, 5, 07051 Agrustos OT
35. **Club Hotel Eurovillage** — Budoni
   - slug: `club-hotel-eurovillage-budoni`
   - indirizzo: Via A. Vespucci, 07051 Agrustos OT