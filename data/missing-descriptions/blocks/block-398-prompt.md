# Blocco 398/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **La Fenice** — Camporgiano
   - slug: `la-fenice-camporgiano`
   - indirizzo: Località Colle Aprico, 55031 Camporgiano LU
2. **La Luna Sul Bosco Bubble Rooms** — Camporgiano
   - slug: `la-luna-sul-bosco-bubble-rooms-camporgiano`
   - indirizzo: Località Biaia, 1a, 55031 Camporgiano LU
   - website: https://lalunasulbosco.it/
3. **La Rocca di Camporgiano - Maison Du Charme** — Camporgiano
   - slug: `la-rocca-di-camporgiano-maison-du-charme-camporgiano`
   - indirizzo: Via della Rocca, 2, 55031 Camporgiano LU
   - website: https://laroccadicamporgiano.it/
4. **Le fate del Sumbra** — Camporgiano
   - slug: `le-fate-del-sumbra-camporgiano`
   - indirizzo: Via Fossetta, 55030 Careggine LU
5. **Rancone Lodges** — Camporgiano
   - slug: `rancone-lodges-camporgiano`
   - indirizzo: Localita Rancone, 1, 55031 Camporgiano LU
   - website: https://www.ranconelodges.com/
6. **Albergo Bruno** — Camporosso
   - slug: `albergo-bruno-camporosso`
   - indirizzo: Corso Limone Piemonte, 85, 18039 Ventimiglia IM
7. **B&B La Palma** — Camporosso
   - slug: `b-b-la-palma-camporosso`
   - indirizzo: Str. degli Olandesi, 239, 18033 Camporosso IM
8. **Bed and Breakfast Casa Mia** — Camporosso
   - slug: `bed-and-breakfast-casa-mia-camporosso`
   - indirizzo: Str. degli Olandesi, 221, 18033 Camporosso IM
9. **Casa Marisa** — Camporosso
   - slug: `casa-marisa-camporosso`
   - indirizzo: Via Sant'Anna, 18, 18033 Camporosso IM
   - website: https://beb.it/casamarisa/
10. **Hotel del Ponte** — Camporosso
   - slug: `hotel-del-ponte-camporosso`
   - indirizzo: Corso della Repubblica, 102, 18033 Camporosso IM
   - website: http://www.hoteldelponte.net
11. **Hotel Kaly** — Camporosso
   - slug: `hotel-kaly-camporosso`
   - indirizzo: Lungomare Trento Trieste, 67, 18039 Ventimiglia IM
   - website: https://www.hotelkaly.it/it/
12. **Le Vecchie Poste** — Camporosso
   - slug: `le-vecchie-poste-camporosso`
   - indirizzo: Via Roma, 21, 18039 Ventimiglia IM
13. **Message in a Bottle Bed and Breakfast** — Camporosso
   - slug: `message-in-a-bottle-bed-and-breakfast-camporosso`
   - indirizzo: 18033 San Giacomo IM
14. **Petitui** — Camporosso
   - slug: `petitui-camporosso`
   - indirizzo: Via Caduti del Lavoro, 2, 18030 San Biagio della Cima IM
   - website: http://petitui.com/
15. **Agriturismo Il Casolare** — Camporotondo di Fiastrone
   - slug: `agriturismo-il-casolare-camporotondo-di-fiastrone`
   - indirizzo: Contrada Vallimestre, 44, 62026 San Ginesio MC
   - website: http://agriturismoilcasolare.eu/lagriturismo/
16. **Agriturismo L'Olmo di Casigliano** — Camporotondo di Fiastrone
   - slug: `agriturismo-l-olmo-di-casigliano-camporotondo-di-fiastrone`
   - indirizzo: c.da Casigliano snc, 62020 Cessapalombo MC
   - website: http://www.olmodicasigliano.it/
17. **Al Respiro nel Bosco, Agriturismo e Azienda Agricola biologica** — Camporotondo di Fiastrone
   - slug: `al-respiro-nel-bosco-agriturismo-e-azienda-agric-camporotondo-di-fiastrone`
   - indirizzo: Contrada Colvenale 10, 62020 Camporotondo di Fiastrone MC
   - website: http://alrespironelbosco.it/
18. **Hotel Il Boschetto** — Camporotondo di Fiastrone
   - slug: `hotel-il-boschetto-camporotondo-di-fiastrone`
   - indirizzo: Via Sandro Pertini, 55, 62029 Tolentino MC
   - website: http://www.hotel-il-boschetto.it/
19. **Valle del Lupo - Gdl - Guarida del Lobo Sas** — Camporotondo di Fiastrone
   - slug: `valle-del-lupo-gdl-guarida-del-lobo-sas-camporotondo-di-fiastrone`
   - indirizzo: C. da 62026 Via Santa Maria, 11, 62026 San Ginesio MC
   - website: http://www.lobo.it/
20. **Villa Sabrina Country House** — Camporotondo di Fiastrone
   - slug: `villa-sabrina-country-house-camporotondo-di-fiastrone`
   - indirizzo: Contrada Collina, snc, 62026 San Ginesio MC
   - website: http://www.bbvillasabrina.com/
21. **Aura Club - Valle degli Ulivi** — Camporotondo Etneo
   - slug: `aura-club-valle-degli-ulivi-camporotondo-etneo`
   - indirizzo: Via Andrea Caponnetto, 13, 95040 Motta Sant'Anastasia CT
22. **B&B Il Cuore dell'Etna** — Camporotondo Etneo
   - slug: `b-b-il-cuore-dell-etna-camporotondo-etneo`
   - indirizzo: Via III Retta di Ponente, 2/B, 95032 Belpasso CT
   - website: http://www.bebilcuoredelletna.it/
23. **B&B SAN MARTINO** — Camporotondo Etneo
   - slug: `b-b-san-martino-camporotondo-etneo`
   - indirizzo: Via Roma, 356, 95045 Misterbianco CT
   - website: https://bbsanmartino.it/
24. **B&B Terrazza dell'Etna** — Camporotondo Etneo
   - slug: `b-b-terrazza-dell-etna-camporotondo-etneo`
   - indirizzo: Via Alcide de Gasperi, 92, 95030 Mascalucia CT
   - website: https://www.bebterrazzadelletna.com/
25. **B&B Valle Allegra** — Camporotondo Etneo
   - slug: `b-b-valle-allegra-camporotondo-etneo`
   - indirizzo: Via Valle Allegra, 1, 95030 Gravina di Catania CT
   - website: http://www.valleallegra.it/
26. **Debora Holiday House** — Camporotondo Etneo
   - slug: `debora-holiday-house-camporotondo-etneo`
   - indirizzo: Via dei Vespri, 254, 95045 Misterbianco CT
   - website: https://www.deboraholidayhouse.it/
27. **Etna Botanic Garden** — Camporotondo Etneo
   - slug: `etna-botanic-garden-camporotondo-etneo`
   - indirizzo: Via Trinità, 34, 95030 Mascalucia CT
   - website: https://www.etnabotanicgarden.com/
28. **Giargeri Home** — Camporotondo Etneo
   - slug: `giargeri-home-camporotondo-etneo`
   - indirizzo: Via Nazionale, 16, 95058 Piano Tavola CT
   - website: http://www.giargerihome.it/
29. **Hotel Villa Cibele** — Camporotondo Etneo
   - slug: `hotel-villa-cibele-camporotondo-etneo`
   - indirizzo: Via Francesco Marletta, 17b, 95124 Catania CT
   - website: https://www.villacibele.it/
30. **Il Gelso Bianco Hotel** — Camporotondo Etneo
   - slug: `il-gelso-bianco-hotel-camporotondo-etneo`
   - indirizzo: Autostrada A19 CT PA Km. 3, 95045 Misterbianco CT
   - website: http://www.gelsobianco.it/
31. **La terrazza sull'Etna Affitto breve** — Camporotondo Etneo
   - slug: `la-terrazza-sull-etna-affitto-breve-camporotondo-etneo`
   - indirizzo: Contrada Monzello Di Cuti, 95040 Motta Sant'Anastasia CT
   - website: https://www.laterrazzasulletna.it/
32. **Motta Palace Apartments & Rooms** — Camporotondo Etneo
   - slug: `motta-palace-apartments-rooms-camporotondo-etneo`
   - indirizzo: Via Vittorio Emanuele, 186, 95062 Motta Sant'Anastasia CT
   - website: https://www.mottapalace.com/
33. **Motta Residence Hotel** — Camporotondo Etneo
   - slug: `motta-residence-hotel-camporotondo-etneo`
   - indirizzo: Via Ruggero II, 14, 95040 Motta Sant'Anastasia CT
   - website: http://www.mottaresidencehotel.it/
34. **Agriturismo Alle Rose** — Camposampiero
   - slug: `agriturismo-alle-rose-camposampiero`
   - indirizzo: V. Arzaroni Nord, 13, 35010 Massanzago PD
   - website: https://agriturismoallerose.it/
35. **Agriturismo Cà Amedeo** — Camposampiero
   - slug: `agriturismo-ca-amedeo-camposampiero`
   - indirizzo: Via Sabbionare, 28, 31033 Castelfranco Veneto TV
   - website: http://www.caamedeo.com/