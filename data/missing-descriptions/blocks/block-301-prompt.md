# Blocco 301/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **B&B Borgo San Martino** — Borgo San Martino
   - slug: `b-b-borgo-san-martino-borgo-san-martino-2`
   - indirizzo: Borgo S. Martino, 182, 00039 Zagarolo RM
   - website: https://www.booking.com/Share-AuKzc2
2. **B&B Borgo San Martino** — Borgo San Martino
   - slug: `b-b-borgo-san-martino-borgo-san-martino`
   - indirizzo: Vico S. Martino, 7, 70043 Monopoli BA
   - website: http://www.borgosanmartinomonopoli.it/
3. **Agriturismo Raimondi Cominesi Amilcare** — Borgo San Siro
   - slug: `agriturismo-raimondi-cominesi-amilcare-borgo-san-siro`
   - indirizzo: Località Fornazzo, 27026 Madonna delle Bozzole PV
   - website: https://www.agriturismoraimondi.it/
4. **B&B dalLo Zio** — Borgo San Siro
   - slug: `b-b-dallo-zio-borgo-san-siro`
   - indirizzo: Via Fornace, 15, 27030 Ottobiano PV
   - website: http://www.bebdallozio.it/
5. **Hotel Il Pino Ristorante Bar** — Borgo San Siro
   - slug: `hotel-il-pino-ristorante-bar-borgo-san-siro`
   - indirizzo: Corso Cavour, 1, 27026 Garlasco PV
   - website: https://hotel-il-pino.hotelperiviaggi.top/
6. **Piccola Torre Maison** — Borgo San Siro
   - slug: `piccola-torre-maison-borgo-san-siro`
   - indirizzo: Via Giovanni Merula, 39, 27029 Vigevano PV
   - website: http://www.piccolatorre.it/
7. **Yoghi & Bubu - Appartamenti Per Brevi Periodi/Casa Vacanze/ B&B Cir018018** — Borgo San Siro
   - slug: `yoghi-bubu-appartamenti-per-brevi-periodi-casa-v-borgo-san-siro`
   - indirizzo: Via Maestra, 70, 27020 Borgo San Siro PV
8. **Antica Casa Balsari** — Borgo Ticino
   - slug: `antica-casa-balsari-borgo-ticino`
   - indirizzo: Piazza Martiri, 16, 28040 Borgo Ticino NO
   - website: https://www.anticacasabalsari.it/
9. **Albergo Ristorante Riviera** — Borgo Tossignano
   - slug: `albergo-ristorante-riviera-borgo-tossignano`
   - indirizzo: Via Montanara Nord, 39, 40021 Borgo Tossignano BO
   - website: https://www.facebook.com/albergo.riviera
10. **Alla Corte del Picchio Room & Breakfast** — Borgo Tossignano
   - slug: `alla-corte-del-picchio-room-breakfast-borgo-tossignano`
   - indirizzo: CIR 037016-AF-00001 - CIN IT037016B4P62OGRTB, Via Picchio, 1, 40023 Castel Guelfo di Bologna BO
   - website: http://www.allacortedelpicchio.it/
11. **B&B di Paola e Luca** — Borgo Tossignano
   - slug: `b-b-di-paola-e-luca-borgo-tossignano`
   - indirizzo: Via Rio Gambellaro, 1b, 40021 Borgo Tossignano BO
   - website: https://www.bedandbreakfast.eu/it/a/u7zNddqqUIFm/bb-di-paola-e-luca
12. **Cà vanello b&bio** — Borgo Tossignano
   - slug: `ca-vanello-b-bio-borgo-tossignano`
   - indirizzo: Via Montanara Sud, 24, 40021 Borgo Tossignano BO
13. **Casa Flosa B&B** — Borgo Tossignano
   - slug: `casa-flosa-b-b-borgo-tossignano`
   - indirizzo: Via Flosa, 553, 40059 Medicina BO
   - website: https://casaflosa.it/
14. **La Compagnia B&B** — Borgo Tossignano
   - slug: `la-compagnia-b-b-borgo-tossignano`
   - indirizzo: Via Gaiano Casanola, 123, 48027 Solarolo RA
   - website: http://www.lacompagniabb.it/
15. **Ostello dei Gessi** — Borgo Tossignano
   - slug: `ostello-dei-gessi-borgo-tossignano`
   - indirizzo: Piazza Andrea Costa, 13, 40021 Tossignano BO
   - website: http://prolocoborgotossignano.it/ostello-dei-gessi/
16. **Secret Garden of Tossignano** — Borgo Tossignano
   - slug: `secret-garden-of-tossignano-borgo-tossignano`
   - indirizzo: Via Castiglione, 20, 40021 Tossignano BO
17. **Agriturismo Biologico Terra Antica** — Borgo Val di Taro
   - slug: `agriturismo-biologico-terra-antica-borgo-val-di-taro`
   - indirizzo: Località Cappella di San Martino, 31, 43043 Borgo Val di Taro PR
   - website: http://www.terra-antica.it/
18. **Agriturismo Il Noce d'Oro** — Borgo Val di Taro
   - slug: `agriturismo-il-noce-d-oro-borgo-val-di-taro`
   - indirizzo: Localita' Il Fornello, Frazione di San Martino, 26, 43043 Borgo Val di Taro PR
   - website: http://www.ilnocedoro.it/
19. **Agriturismo Le Querciole** — Borgo Val di Taro
   - slug: `agriturismo-le-querciole-borgo-val-di-taro`
   - indirizzo: Localita San Pietro 3, 43043 Borgo Val di Taro PR
   - website: http://www.agriturismo-lequerciole.it/
20. **Albergo Bar Firenze** — Borgo Val di Taro
   - slug: `albergo-bar-firenze-borgo-val-di-taro`
   - indirizzo: Piazza Giuseppe Verdi, 3, 43043 Borgo Val di Taro PR
   - website: http://www.albergo-firenze.it/
21. **Albergo Roma** — Borgo Val di Taro
   - slug: `albergo-roma-borgo-val-di-taro`
   - indirizzo: Largo Roma, 9, 43043 Borgo Val di Taro PR
   - website: http://www.nuovoalbergoroma.it/
22. **B&B Borgoeden** — Borgo Val di Taro
   - slug: `b-b-borgoeden-borgo-val-di-taro`
   - indirizzo: Località Marzocco di Brunelli, 48, 43043 Borgo Val di Taro PR
   - website: https://santiagorecommends.eu/borgoeden-italy
23. **B&B Rose e Cioccolato** — Borgo Val di Taro
   - slug: `b-b-rose-e-cioccolato-borgo-val-di-taro`
   - indirizzo: Località Brunelli, 22, 43043 Borgo Val di Taro PR
   - website: http://www.rosecioccolato.com/
24. **LIBERTY ROOM AND BREAKFAST** — Borgo Val di Taro
   - slug: `liberty-room-and-breakfast-borgo-val-di-taro`
   - indirizzo: Via Montegrappa, 4, 43043 Borgo Val di Taro PR
   - website: http://www.libertyroomandbreakfast.it/
25. **AGRITURISMO Az.Agr. SAETTA' di Marco Casagrande** — Borgo Valbelluna
   - slug: `agriturismo-az-agr-saetta-di-marco-casagrande-borgo-valbelluna`
   - indirizzo: Via Saettà, 155, 32026 Lentiai BL
   - website: http://agriturismosaetta-dolomiti.it/
26. **Agriturismo Bon Tajer** — Borgo Valbelluna
   - slug: `agriturismo-bon-tajer-borgo-valbelluna`
   - indirizzo: Via Colderù, 112, 32026 Lentiai BL
   - website: http://www.bontajer.it/
27. **Agriturismo Ca' Ribelli** — Borgo Valbelluna
   - slug: `agriturismo-ca-ribelli-borgo-valbelluna`
   - indirizzo: Via Rive di Villa, 60, 32026 Borgo Valbelluna BL
   - website: https://www.arcaprealpina.it/agriturismo/
28. **Agriturismo Casa Marietta** — Borgo Valbelluna
   - slug: `agriturismo-casa-marietta-borgo-valbelluna`
   - indirizzo: Via Campo, 5, 32026 Borgo Valbelluna BL
   - website: https://casamarietta.eu/
29. **Agriturismo Fattoria Ortoalpino** — Borgo Valbelluna
   - slug: `agriturismo-fattoria-ortoalpino-borgo-valbelluna`
   - indirizzo: Località Confos, 69/a, 32026 Borgo Valbelluna BL
   - website: http://www.ortoalpino.it/
30. **agriturismo la casa nei boschi** — Borgo Valbelluna
   - slug: `agriturismo-la-casa-nei-boschi-borgo-valbelluna`
   - indirizzo: Via Boschi, 14, 32026 Borgo Valbelluna BL
   - website: https://agriturismo-la-casa-nei-boschi.it/
31. **Antica Villa Sophie B&B** — Borgo Valbelluna
   - slug: `antica-villa-sophie-b-b-borgo-valbelluna`
   - indirizzo: Via Donatori Sangue, 6, 32026 Sant'Antonio Tortal BL
   - website: http://www.anticavillasophie.it/
32. **B&B Ai Pianai** — Borgo Valbelluna
   - slug: `b-b-ai-pianai-borgo-valbelluna`
   - indirizzo: Via Pellegai, 128, 32026 MEL BL
   - website: http://www.aipianai.it/
33. **B&B Al Portico** — Borgo Valbelluna
   - slug: `b-b-al-portico-borgo-valbelluna`
   - indirizzo: Località Pialdier, 101, 32026 Borgo Valbelluna BL
   - website: https://beb.it/bebalportico
34. **B&B AL VECCHIO CARPINO** — Borgo Valbelluna
   - slug: `b-b-al-vecchio-carpino-borgo-valbelluna`
   - indirizzo: Via Farra, 9, 32026 Mel BL
   - website: https://alvecchiocarpino.com/
35. **b&b alla Lanterna** — Borgo Valbelluna
   - slug: `b-b-alla-lanterna-borgo-valbelluna`
   - indirizzo: Frazione Casteldardo, 50A Trichiana, 32026 Niccia BL
   - website: https://www.allalanterna.it/