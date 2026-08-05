# Blocco 459/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Hotel Nord** — Casalpusterlengo
   - slug: `hotel-nord-casalpusterlengo`
   - indirizzo: Via I Maggio, 3, 26862 Guardamiglio LO
   - website: https://www.piacenzahotels.com/it/hotelnord/
2. **Guest House Località Sorbara** — Casalromano
   - slug: `guest-house-localita-sorbara-casalromano`
   - indirizzo: Str. Canneto-Asola, 3, 46041 Asola MN
   - website: https://www.localitasorbara.com/
3. **Hospitale I Mori** — Casalromano
   - slug: `hospitale-i-mori-casalromano`
   - indirizzo: Località, Str. per Sorbara, 33, 46041 Asola MN
   - website: http://www.hospitaleimori.it/pages/home.html
4. **Oasi Borghetto Verde** — Casalromano
   - slug: `oasi-borghetto-verde-casalromano`
   - indirizzo: Via Cervo, 46040 Cavriana MN
   - website: http://oasiborghettoverde.com/
5. **Al Casale B&B** — Casalserugo
   - slug: `al-casale-b-b-casalserugo`
   - indirizzo: Via Don Maniero, 7, 35020 Casalserugo PD
   - website: http://www.bb-alcasale.it/
6. **Resort di Campagna - La Posa degli Agri** — Casalserugo
   - slug: `resort-di-campagna-la-posa-degli-agri-casalserugo`
   - indirizzo: Via Orsaretto, 4, 35020 Isola Dell'abbà PD
   - website: https://www.laposadegliagri.com/homepage
7. **Room Garden** — Casalserugo
   - slug: `room-garden-casalserugo`
   - indirizzo: int. Garden, Via Chiesa Vecchia, 70, 35125 Padova PD
   - website: http://www.padovabnb.it/
8. **The Meridien House** — Casalserugo
   - slug: `the-meridien-house-casalserugo`
   - indirizzo: Via Ca' Mazzoldi, 14, 35020 Casalserugo PD
   - website: http://www.giniko.it/
9. **Tulip Inn Padova Hotel** — Casalserugo
   - slug: `tulip-inn-padova-hotel-casalserugo`
   - indirizzo: Corso Stati Uniti, 54, 35127 Padova PD
   - website: https://tulip-inn-padova.goldentulip.com/?utm_source=google&utm_medium=maps&utm_content=ITA15081&utm_campaign=GoldenTulip
10. **Diamond Suite** — Casaluce
   - slug: `diamond-suite-casaluce`
   - indirizzo: Via Lemitone I Tratto, 198, 81030 Borgo San Lorenzo CE
11. **Domus Antica Guest House** — Casaluce
   - slug: `domus-antica-guest-house-casaluce`
   - indirizzo: Via Pietro Morelli, 13, 81055 Santa Maria Capua Vetere CE
   - website: https://www.domusantica.it/
12. **AGORA' CASTELNUOVO DELLA DAUNIA** — Casalvecchio di Puglia
   - slug: `agora-castelnuovo-della-daunia-casalvecchio-di-puglia`
   - indirizzo: Piazza Plebiscito, 37, 71034 Castelnuovo della Daunia FG
   - website: http://agora-castelnuovo-della-daunia.com.es/
13. **il Cortiletto del Borgo** — Casalvecchio di Puglia
   - slug: `il-cortiletto-del-borgo-casalvecchio-di-puglia`
   - indirizzo: Vico Sauchelli, 71038 Pietramontecorvino FG
   - website: https://ilcortilettodelborgo.it/
14. **Vista Normanna** — Casalvecchio di Puglia
   - slug: `vista-normanna-casalvecchio-di-puglia`
   - indirizzo: Via Fares, 23, 71038 Pietramontecorvino FG
   - website: https://bebpietramontecorvino.it/
15. **B&B Il Padrino** — Casalvecchio Siculo
   - slug: `b-b-il-padrino-casalvecchio-siculo`
   - indirizzo: Via Borgo, 3, 98038 Savoca ME
   - website: https://www.bbilpadrino.com/
16. **CasaBlanc b&b** — Casalvecchio Siculo
   - slug: `casablanc-b-b-casalvecchio-siculo`
   - indirizzo: Via Leonardo Sciascia, 44, 98028 Santa Teresa di Riva ME
17. **Dolce Casa n 41** — Casalvecchio Siculo
   - slug: `dolce-casa-n-41-casalvecchio-siculo`
   - indirizzo: Contura Inferiore, 41, 98038 Savoca ME
   - website: http://www.dolcecasan41.it/
18. **DOMUS MHYRIA SICILY** — Casalvecchio Siculo
   - slug: `domus-mhyria-sicily-casalvecchio-siculo`
   - indirizzo: Via Petrazza, 1, 98032 Casalvecchio Siculo ME
19. **La Locanda degli amici** — Casalvecchio Siculo
   - slug: `la-locanda-degli-amici-casalvecchio-siculo`
   - indirizzo: CONTRADA SAN GAETANO, 98028 Santa Teresa di Riva ME
   - website: https://lalocandadegliamici.it/
20. **La luce di Ambra** — Casalvecchio Siculo
   - slug: `la-luce-di-ambra-casalvecchio-siculo`
   - indirizzo: Via Risorgimento, 59, 98020 Rocchenere ME
   - website: https://ambra.bedsandhotels.com/
21. **Main Palace Hotel** — Casalvecchio Siculo
   - slug: `main-palace-hotel-casalvecchio-siculo`
   - indirizzo: V. Lungomare Cristoforo Colombo, 15, 98027 Roccalumera ME
   - website: https://www.mainpalacehotel.com/?utm_source=GB&utm_medium=organic
22. **Marranzanu Rooms** — Casalvecchio Siculo
   - slug: `marranzanu-rooms-casalvecchio-siculo`
   - indirizzo: Piazzale Stazione, 20, 98028 Santa Teresa di Riva ME
   - website: https://www.bbmarranzanu.com/
23. **NUOVA AURORA Rent Rooms** — Casalvecchio Siculo
   - slug: `nuova-aurora-rent-rooms-casalvecchio-siculo`
   - indirizzo: Corso Umberto I, 32, 98027 Roccalumera ME
   - website: http://www.nuovaaurora.it/
24. **Agriturismo Il Fascinaro** — Casalvieri
   - slug: `agriturismo-il-fascinaro-casalvieri`
   - indirizzo: Via San Pietro, 20, 03034 Casalvieri FR
25. **Pistillo** — Casalvieri
   - slug: `pistillo-casalvieri`
   - indirizzo: PistilloCASALVIERI, 03034 Casalvieri FR
26. **B&B Castelcicala** — Casamarciano
   - slug: `b-b-castelcicala-casamarciano`
   - indirizzo: Via S. Francesco, 192, 80035 Nola NA
   - website: http://www.castelcicala.com/
27. **B&B Adrian’s** — Casamassima
   - slug: `b-b-adrian-s-casamassima`
   - indirizzo: Via V.Grisanzio di Pinto, 17, 70010 Turi BA
   - website: https://adrians-bb.percorsiitaliani.top/
28. **B&B Guarini** — Casamassima
   - slug: `b-b-guarini-casamassima`
   - indirizzo: area residenziale Barialto, via Guarino Guarini, 2, 70010 Casamassima BA
   - website: http://bnbguarini.it/
29. **B&B Le Tre Rose** — Casamassima
   - slug: `b-b-le-tre-rose-casamassima`
   - indirizzo: Via Imbriani, 27, 70010 Casamassima BA
30. **B&B Relais del Marchese** — Casamassima
   - slug: `b-b-relais-del-marchese-casamassima`
   - indirizzo: Via Forno D'Addante, 16, 70010 Turi BA
   - website: http://www.relaisdelmarchese.it/
31. **Bed & Breakfast Via Roma 15** — Casamassima
   - slug: `bed-breakfast-via-roma-15-casamassima`
   - indirizzo: Via Roma, 15, 70021 Acquaviva delle Fonti BA
   - website: http://www.bb-viaroma.it/
32. **Bed and Breakfast Gaia** — Casamassima
   - slug: `bed-and-breakfast-gaia-casamassima`
   - indirizzo: Via Cellamare, 59, 70010 Casamassima BA
   - website: https://www.airbnb.com/h/bebgaia
33. **Dimora Rossi** — Casamassima
   - slug: `dimora-rossi-casamassima`
   - indirizzo: Via Sedile, 8, 70010 Turi BA
   - website: http://www.dimorarossi.it/it/
34. **Dimora Storica Palazzo Didonna** — Casamassima
   - slug: `dimora-storica-palazzo-didonna-casamassima`
   - indirizzo: Via Diego Martinelli, 24, 70018 Rutigliano BA
   - website: http://www.palazzodidonna.it/
35. **Dimore Chialè** — Casamassima
   - slug: `dimore-chiale-casamassima`
   - indirizzo: Viale Angelo Pende, 44, 70010 Casamassima BA