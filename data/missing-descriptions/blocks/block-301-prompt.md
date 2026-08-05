# Blocco 301/500 — 35 strutture senza descrizione IT

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

1. **B&B Borgo San Martino** — Borgo San Martino
   - slug: `b-b-borgo-san-martino-borgo-san-martino`
   - indirizzo: Vico S. Martino, 7, 70043 Monopoli BA
2. **B&B Borgo San Martino** — Borgo San Martino
   - slug: `b-b-borgo-san-martino-borgo-san-martino-2`
   - indirizzo: Borgo S. Martino, 182, 00039 Zagarolo RM
3. **Agriturismo Raimondi Cominesi Amilcare** — Borgo San Siro
   - slug: `agriturismo-raimondi-cominesi-amilcare-borgo-san-siro`
   - indirizzo: Località Fornazzo, 27026 Madonna delle Bozzole PV
4. **B&B dalLo Zio** — Borgo San Siro
   - slug: `b-b-dallo-zio-borgo-san-siro`
   - indirizzo: Via Fornace, 15, 27030 Ottobiano PV
5. **Hotel Il Pino Ristorante Bar** — Borgo San Siro
   - slug: `hotel-il-pino-ristorante-bar-borgo-san-siro`
   - indirizzo: Corso Cavour, 1, 27026 Garlasco PV
6. **Piccola Torre Maison** — Borgo San Siro
   - slug: `piccola-torre-maison-borgo-san-siro`
   - indirizzo: Via Giovanni Merula, 39, 27029 Vigevano PV
7. **Yoghi & Bubu - Appartamenti Per Brevi Periodi/Casa Vacanze/ B&B Cir018018** — Borgo San Siro
   - slug: `yoghi-bubu-appartamenti-per-brevi-periodi-casa-v-borgo-san-siro`
   - indirizzo: Via Maestra, 70, 27020 Borgo San Siro PV
8. **Antica Casa Balsari** — Borgo Ticino
   - slug: `antica-casa-balsari-borgo-ticino`
   - indirizzo: Piazza Martiri, 16, 28040 Borgo Ticino NO
9. **Albergo Ristorante Riviera** — Borgo Tossignano
   - slug: `albergo-ristorante-riviera-borgo-tossignano`
   - indirizzo: Via Montanara Nord, 39, 40021 Borgo Tossignano BO
10. **Alla Corte del Picchio Room & Breakfast** — Borgo Tossignano
   - slug: `alla-corte-del-picchio-room-breakfast-borgo-tossignano`
   - indirizzo: CIR 037016-AF-00001 - CIN IT037016B4P62OGRTB, Via Picchio, 1, 40023 Castel Guelfo di Bologna BO
11. **B&B di Paola e Luca** — Borgo Tossignano
   - slug: `b-b-di-paola-e-luca-borgo-tossignano`
   - indirizzo: Via Rio Gambellaro, 1b, 40021 Borgo Tossignano BO
12. **Cà vanello b&bio** — Borgo Tossignano
   - slug: `ca-vanello-b-bio-borgo-tossignano`
   - indirizzo: Via Montanara Sud, 24, 40021 Borgo Tossignano BO
13. **Casa Flosa B&B** — Borgo Tossignano
   - slug: `casa-flosa-b-b-borgo-tossignano`
   - indirizzo: Via Flosa, 553, 40059 Medicina BO
14. **La Compagnia B&B** — Borgo Tossignano
   - slug: `la-compagnia-b-b-borgo-tossignano`
   - indirizzo: Via Gaiano Casanola, 123, 48027 Solarolo RA
15. **Ostello dei Gessi** — Borgo Tossignano
   - slug: `ostello-dei-gessi-borgo-tossignano`
   - indirizzo: Piazza Andrea Costa, 13, 40021 Tossignano BO
16. **Secret Garden of Tossignano** — Borgo Tossignano
   - slug: `secret-garden-of-tossignano-borgo-tossignano`
   - indirizzo: Via Castiglione, 20, 40021 Tossignano BO
17. **Agriturismo Biologico Terra Antica** — Borgo Val di Taro
   - slug: `agriturismo-biologico-terra-antica-borgo-val-di-taro`
   - indirizzo: Località Cappella di San Martino, 31, 43043 Borgo Val di Taro PR
18. **Agriturismo Il Noce d'Oro** — Borgo Val di Taro
   - slug: `agriturismo-il-noce-d-oro-borgo-val-di-taro`
   - indirizzo: Localita' Il Fornello, Frazione di San Martino, 26, 43043 Borgo Val di Taro PR
19. **Agriturismo Le Querciole** — Borgo Val di Taro
   - slug: `agriturismo-le-querciole-borgo-val-di-taro`
   - indirizzo: Localita San Pietro 3, 43043 Borgo Val di Taro PR
20. **Albergo Bar Firenze** — Borgo Val di Taro
   - slug: `albergo-bar-firenze-borgo-val-di-taro`
   - indirizzo: Piazza Giuseppe Verdi, 3, 43043 Borgo Val di Taro PR
21. **Albergo Roma** — Borgo Val di Taro
   - slug: `albergo-roma-borgo-val-di-taro`
   - indirizzo: Largo Roma, 9, 43043 Borgo Val di Taro PR
22. **B&B Borgoeden** — Borgo Val di Taro
   - slug: `b-b-borgoeden-borgo-val-di-taro`
   - indirizzo: Località Marzocco di Brunelli, 48, 43043 Borgo Val di Taro PR
23. **B&B Rose e Cioccolato** — Borgo Val di Taro
   - slug: `b-b-rose-e-cioccolato-borgo-val-di-taro`
   - indirizzo: Località Brunelli, 22, 43043 Borgo Val di Taro PR
24. **LIBERTY ROOM AND BREAKFAST** — Borgo Val di Taro
   - slug: `liberty-room-and-breakfast-borgo-val-di-taro`
   - indirizzo: Via Montegrappa, 4, 43043 Borgo Val di Taro PR
25. **AGRITURISMO Az.Agr. SAETTA' di Marco Casagrande** — Borgo Valbelluna
   - slug: `agriturismo-az-agr-saetta-di-marco-casagrande-borgo-valbelluna`
   - indirizzo: Via Saettà, 155, 32026 Lentiai BL
26. **Agriturismo Bon Tajer** — Borgo Valbelluna
   - slug: `agriturismo-bon-tajer-borgo-valbelluna`
   - indirizzo: Via Colderù, 112, 32026 Lentiai BL
27. **Agriturismo Ca' Ribelli** — Borgo Valbelluna
   - slug: `agriturismo-ca-ribelli-borgo-valbelluna`
   - indirizzo: Via Rive di Villa, 60, 32026 Borgo Valbelluna BL
28. **Agriturismo Casa Marietta** — Borgo Valbelluna
   - slug: `agriturismo-casa-marietta-borgo-valbelluna`
   - indirizzo: Via Campo, 5, 32026 Borgo Valbelluna BL
29. **Agriturismo Fattoria Ortoalpino** — Borgo Valbelluna
   - slug: `agriturismo-fattoria-ortoalpino-borgo-valbelluna`
   - indirizzo: Località Confos, 69/a, 32026 Borgo Valbelluna BL
30. **agriturismo la casa nei boschi** — Borgo Valbelluna
   - slug: `agriturismo-la-casa-nei-boschi-borgo-valbelluna`
   - indirizzo: Via Boschi, 14, 32026 Borgo Valbelluna BL
31. **Antica Villa Sophie B&B** — Borgo Valbelluna
   - slug: `antica-villa-sophie-b-b-borgo-valbelluna`
   - indirizzo: Via Donatori Sangue, 6, 32026 Sant'Antonio Tortal BL
32. **B&B Ai Pianai** — Borgo Valbelluna
   - slug: `b-b-ai-pianai-borgo-valbelluna`
   - indirizzo: Via Pellegai, 128, 32026 MEL BL
33. **B&B Al Portico** — Borgo Valbelluna
   - slug: `b-b-al-portico-borgo-valbelluna`
   - indirizzo: Località Pialdier, 101, 32026 Borgo Valbelluna BL
34. **B&B AL VECCHIO CARPINO** — Borgo Valbelluna
   - slug: `b-b-al-vecchio-carpino-borgo-valbelluna`
   - indirizzo: Via Farra, 9, 32026 Mel BL
35. **b&b alla Lanterna** — Borgo Valbelluna
   - slug: `b-b-alla-lanterna-borgo-valbelluna`
   - indirizzo: Frazione Casteldardo, 50A Trichiana, 32026 Niccia BL