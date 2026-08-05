# Blocco 101/500 — 35 strutture senza descrizione IT

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

1. **B&B La Piazzetta** — Amendolara
   - slug: `b-b-la-piazzetta-amendolara`
   - indirizzo: Via delle Rose, 23, 87070 Roseto Capo Spulico CS
2. **B&B Rosa Dei Venti** — Amendolara
   - slug: `b-b-rosa-dei-venti-amendolara`
   - indirizzo: Contrada Civita, 87070 Villaggio Baia del Castello CS
3. **B&B Roseto Mare** — Amendolara
   - slug: `b-b-roseto-mare-amendolara`
   - indirizzo: Via Ellade, 7a, 87070 Roseto Capo Spulico CS
4. **Cala dei Saraceni** — Amendolara
   - slug: `cala-dei-saraceni-amendolara`
   - indirizzo: CONTRADA, Via Piano Marina, 87070 Roseto Capo Spulico CS
5. **La dimora di Angela** — Amendolara
   - slug: `la-dimora-di-angela-amendolara`
   - indirizzo: Contrada Gabriele, 9, 87071 Amendolara CS
6. **La dimora di Poseidone** — Amendolara
   - slug: `la-dimora-di-poseidone-amendolara`
   - indirizzo: Contrada colfari, 1, 87071 Amendolara CS
7. **Masseria Cielogreco** — Amendolara
   - slug: `masseria-cielogreco-amendolara`
   - indirizzo: Contrada Cielogreco, snc, 87071 Amendolara CS
8. **Masseria Stamato** — Amendolara
   - slug: `masseria-stamato-amendolara`
   - indirizzo: contrada fragalizzi, 3, 87071 Amendolara CS
9. **Villaggio calabria agriturismo La Lista** — Amendolara
   - slug: `villaggio-calabria-agriturismo-la-lista-amendolara`
   - indirizzo: S.S. n, S.da Statale 106 Jonica, 87071 Marina di Amendolara CS
10. **Albergo Omnidiet** — Ameno
   - slug: `albergo-omnidiet-ameno`
   - indirizzo: Via Monte Falò, 8, 28011 Armeno NO
11. **Albergo Ristorante La Genzianella** — Ameno
   - slug: `albergo-ristorante-la-genzianella-ameno`
   - indirizzo: Via per Armeno, 10, 28010 Miasino NO
12. **Albergo Ristorante Monterosa** — Ameno
   - slug: `albergo-ristorante-monterosa-ameno`
   - indirizzo: Viale Armando Diaz, 7, 28010 Ameno NO
13. **B&B Il giardino sul lago** — Ameno
   - slug: `b-b-il-giardino-sul-lago-ameno`
   - indirizzo: Via Giovanetti, 52, 28016 Orta San Giulio NO
14. **B&B Lavanda e Rosmarino** — Ameno
   - slug: `b-b-lavanda-e-rosmarino-ameno`
   - indirizzo: Via Martelli, 33, 28010 Miasino NO
15. **B&b Lortallino** — Ameno
   - slug: `b-b-lortallino-ameno`
   - indirizzo: Località Lortallino, 4, 28010 Ameno NO
16. **Campeggio Punta di Crabbia** — Ameno
   - slug: `campeggio-punta-di-crabbia-ameno`
   - indirizzo: Via Crabbia, 2/A, 28028 Pettenasco NO
17. **Camping Orta** — Ameno
   - slug: `camping-orta-ameno`
   - indirizzo: Via Domodossola, 28, 28016 Orta San Giulio NO
18. **Hotel Battle of Britain** — Ameno
   - slug: `hotel-battle-of-britain-ameno`
   - indirizzo: Viale Santuario Bocciola, 17, 28010 Ameno NO
19. **Hotel Fontaine Bleue** — Ameno
   - slug: `hotel-fontaine-bleue-ameno`
   - indirizzo: Via Novara, 67, 28016 Orta San Giulio NO
20. **Hotel Ristorante Giardinetto** — Ameno
   - slug: `hotel-ristorante-giardinetto-ameno`
   - indirizzo: Via Provinciale, 1, 28028 Pettenasco NO
21. **Hotel San Rocco** — Ameno
   - slug: `hotel-san-rocco-ameno`
   - indirizzo: Via Gippini, 11, 28016 Orta San Giulio NO
22. **L'Approdo** — Ameno
   - slug: `l-approdo-ameno`
   - indirizzo: Corso Roma, 80, 28028 Pettenasco NO
23. **L'Oasi Amena** — Ameno
   - slug: `l-oasi-amena-ameno`
   - indirizzo: Viale Giacomo Matteotti, 3, 28010 Ameno NO
24. **L'Oca Mannara** — Ameno
   - slug: `l-oca-mannara-ameno`
   - indirizzo: via Leonardo Strigini, 1, 28010 Ameno NO
25. **La Darbia Resort** — Ameno
   - slug: `la-darbia-resort-ameno`
   - indirizzo: Via per Miasino, 28016 Orta San Giulio NO
26. **Ostello del Quadrifoglio by Le Pigne World** — Ameno
   - slug: `ostello-del-quadrifoglio-by-le-pigne-world-ameno`
   - indirizzo: Vicolo Filiberti, 8, 28010 Ameno NO
27. **Villa Antica Colonia Spa&Wellness** — Ameno
   - slug: `villa-antica-colonia-spa-wellness-ameno`
   - indirizzo: Via Primatesta, 7, 28028 Crabbia NO
28. **Villa Crespi** — Ameno
   - slug: `villa-crespi-ameno`
   - indirizzo: Via Giuseppe Fava, 18, 28016 Orta San Giulio NO
29. **Affittacamere Don Orazio Antico Casale** — Amorosi
   - slug: `affittacamere-don-orazio-antico-casale-amorosi`
   - indirizzo: via Iacovelli, 82030 Faicchio BN
30. **Agriturismo - Bed and Breakfast Masseria Mezzanotte** — Amorosi
   - slug: `agriturismo-bed-and-breakfast-masseria-mezzanott-amorosi`
   - indirizzo: Via Corte Nocera, 28, 82030 San Salvatore Telesino BN
31. **Agriturismo e Azienda Agricola Corte Ciervo** — Amorosi
   - slug: `agriturismo-e-azienda-agricola-corte-ciervo-amorosi`
   - indirizzo: Contrada Purgatorio, 3, 82030 San Salvatore Telesino BN
32. **Amorosi** — Amorosi
   - slug: `amorosi-amorosi`
   - indirizzo: Via Telese, 296, 82031 Telese BN
33. **B&B Mon Amour CASA VACANZA ,amorosi benevento** — Amorosi
   - slug: `b-b-mon-amour-casa-vacanza-amorosi-benevento-amorosi`
   - indirizzo: Via S. Salvatore, 19, 82031 Amorosi BN
34. **Casa Lerario** — Amorosi
   - slug: `casa-lerario-amorosi`
   - indirizzo: Contrada Laura, 6, 82030 Melizzano BN
35. **Choco B&B - Amnesia Experience** — Amorosi
   - slug: `choco-b-b-amnesia-experience-amorosi`
   - indirizzo: Via Fausto Coppi, 16D, 82037 Telese Terme BN