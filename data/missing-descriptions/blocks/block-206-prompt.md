# Blocco 206/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Hotel Medea** — Baldissero d'Alba
   - slug: `hotel-medea-baldissero-d-alba`
   - indirizzo: Corso Unità d'Italia, 64d, 12051 Alba CN
   - website: http://www.hotelmedea.com/
2. **L'Ottavo Sapore - Ospitalità Rurale** — Baldissero d'Alba
   - slug: `l-ottavo-sapore-ospitalita-rurale-baldissero-d-alba`
   - indirizzo: Località Avai, 44.789436009446526, 7.916596136795743, 12040 Monteu Roero CN
   - website: https://www.lottavosaporeospitalita.com/
3. **La collina dei Passeri** — Baldissero d'Alba
   - slug: `la-collina-dei-passeri-baldissero-d-alba`
   - indirizzo: Str. Meccia, 5, 12060 Pocapaglia CN
   - website: http://www.lacollinadeipasseribnb.it/
4. **La noisette B&B** — Baldissero d'Alba
   - slug: `la-noisette-b-b-baldissero-d-alba`
   - indirizzo: Via Stazione, 34, 12066 Monticello d'Alba CN
   - website: http://lanoisette.it/
5. **Parco Didattico Le Colline di Giuca C/O Agriturismo I Bageta** — Baldissero d'Alba
   - slug: `parco-didattico-le-colline-di-giuca-c-o-agrituri-baldissero-d-alba`
   - indirizzo: Località Sigola, 36, 12040 Baldissero d'Alba CN
   - website: http://www.lecollinedigiuca.com/
6. **Pocoburro Ca' d'arte** — Baldissero d'Alba
   - slug: `pocoburro-ca-d-arte-baldissero-d-alba`
   - indirizzo: Via Castello, 2, 12040 Montaldo Roero CN
   - website: https://www.pocoburro.it/
7. **Villa Adriana** — Baldissero d'Alba
   - slug: `villa-adriana-baldissero-d-alba`
   - indirizzo: Vicolo Fossaretto, 6, 12042 Bra CN
   - website: http://www.villaadrianabra.com/
8. **Agriturismo Ai Guiet** — Baldissero Torinese
   - slug: `agriturismo-ai-guiet-baldissero-torinese`
   - indirizzo: Via Superga, 48, 10020 Baldissero Torinese TO
   - website: https://www.agriturismoaiguiet.it/
9. **azienda agricola La Collina di Laura Bartolomeo** — Baldissero Torinese
   - slug: `azienda-agricola-la-collina-di-laura-bartolomeo-baldissero-torinese`
   - indirizzo: Via Superga, 47/11, 10020 Baldissero Torinese TO
   - website: https://www.agricola-lacollina.com/
10. **B&B Il Sogno** — Baldissero Torinese
   - slug: `b-b-il-sogno-baldissero-torinese`
   - indirizzo: Corso Palermo, 46, 10152 Torino TO
   - website: https://www.hotelsitalian.com/bb-il-sogno/
11. **B&B Il Sussurro Della Collina** — Baldissero Torinese
   - slug: `b-b-il-sussurro-della-collina-baldissero-torinese`
   - indirizzo: Via Lunga, 74, 10099 San Mauro Torinese TO
   - website: http://www.ilsussurrodellacollina.it/
12. **CXTurin | Vanchiglia Campus & Hotel** — Baldissero Torinese
   - slug: `cxturin-vanchiglia-campus-hotel-baldissero-torinese`
   - indirizzo: Corso Regina Margherita, 2, 10153 Torino TO
   - website: http://www.cx-place.com/
13. **Hotel Elite** — Baldissero Torinese
   - slug: `hotel-elite-baldissero-torinese`
   - indirizzo: Via Trento, 35, 10099 San Mauro Torinese TO
   - website: http://www.hotelelitepiscinadelsole.com/
14. **Hotel La Pace Sas** — Baldissero Torinese
   - slug: `hotel-la-pace-sas-baldissero-torinese`
   - indirizzo: Via Roma, 36, 10099 San Mauro Torinese TO
   - website: https://www.hotellapacetorino.com/
15. **Hotel Miramonti** — Baldissero Torinese
   - slug: `hotel-miramonti-baldissero-torinese`
   - indirizzo: P.za Derna, 238, 10154 Torino TO
   - website: http://www.hotelmiramontitorino.it/
16. **Hotel Ponte Sassi** — Baldissero Torinese
   - slug: `hotel-ponte-sassi-baldissero-torinese`
   - indirizzo: Piazza Alberto Pasini, 3, 10132 Torino TO
   - website: http://www.hotelpontesassi.com/
17. **Hotel Residence** — Baldissero Torinese
   - slug: `hotel-residence-baldissero-torinese`
   - indirizzo: Via Ribordone, 12, 10156 Torino TO
   - website: http://www.sharing.to.it/
18. **Loft Regio Parco** — Baldissero Torinese
   - slug: `loft-regio-parco-baldissero-torinese`
   - indirizzo: Via Modena, 31, 10152 Torino TO
   - website: https://staylio.eu/loft-regio-parco-torino
19. **TRE MERLOT** — Baldissero Torinese
   - slug: `tre-merlot-baldissero-torinese`
   - indirizzo: Via Chieri, 66/2, 10020 Baldissero Torinese TO
   - website: http://bondiolistudio.it/
20. **AmarMare Bed & Breakfast** — Balestrate
   - slug: `amarmare-bed-breakfast-balestrate`
   - indirizzo: Via Panorama, 90047 Partinico PA
   - website: https://www.amarmare.it/
21. **b&b Casa Ruffino** — Balestrate
   - slug: `b-b-casa-ruffino-balestrate`
   - indirizzo: Via Madonna del Ponte, 49, 90041 Balestrate PA
   - website: http://www.casaruffino.it/
22. **B&B I TRAMONTI DEL GOLFO** — Balestrate
   - slug: `b-b-i-tramonti-del-golfo-balestrate`
   - indirizzo: Via Pio la Torre, 90041 Balestrate PA
   - website: https://relait.cyou/tramonti-del-golfo-ie4t4v
23. **B&B Stanze del Mare** — Balestrate
   - slug: `b-b-stanze-del-mare-balestrate`
   - indirizzo: Via Libertà, 38, 90041 Balestrate PA
   - website: http://stanze-delmare.com.es/
24. **Balestrate Center Rooms** — Balestrate
   - slug: `balestrate-center-rooms-balestrate`
   - indirizzo: Via Pitrè, 17, 90041 Balestrate PA
   - website: https://www.balestratecenterrooms.it/
25. **Bed and Breakfast "La casa sul mare "** — Balestrate
   - slug: `bed-and-breakfast-la-casa-sul-mare-balestrate`
   - indirizzo: Via della Repubblica, 13, 90041 Balestrate PA
   - website: http://www.lacasasulmare.com/
26. **Casa Quinzio B&B** — Balestrate
   - slug: `casa-quinzio-b-b-balestrate`
   - indirizzo: Via D.d'Aosta, 99, 90041 Balestrate PA
   - website: http://www.casaquinzio.it/
27. **Case Playa** — Balestrate
   - slug: `case-playa-balestrate`
   - indirizzo: Contrada Forgia, 90041 Balestrate PA
   - website: https://www.caseplaya.it/
28. **Hotel Costa Azul** — Balestrate
   - slug: `hotel-costa-azul-balestrate`
   - indirizzo: Contrada Forgia, 90041 Balestrate PA
   - website: http://www.hotelcostaazul.it/
29. **Hotel Marina Holiday Resort & Spa** — Balestrate
   - slug: `hotel-marina-holiday-resort-spa-balestrate`
   - indirizzo: Via Riva dei Pescatori, s.n., Via del Mare, 1, 90041 Balestrate PA
   - website: https://www.marinaholiday.it/
30. **Il Girasole B & B** — Balestrate
   - slug: `il-girasole-b-b-balestrate`
   - indirizzo: Via Lepanto, 11, 90041 Balestrate PA
   - website: http://www.ilgirasolebb.com/
31. **La Balestra B&B** — Balestrate
   - slug: `la-balestra-b-b-balestrate`
   - indirizzo: Via V. Emanuele Orlando, 24, 90041 Balestrate PA
   - website: https://www.labalestrabb.eu/
32. **La Casa dei palmizi** — Balestrate
   - slug: `la-casa-dei-palmizi-balestrate`
   - indirizzo: Via Giuseppe Mazzini, 65, 90041 Balestrate PA
33. **La Maiolica B&B** — Balestrate
   - slug: `la-maiolica-b-b-balestrate`
   - indirizzo: Via Monte Grappa, 88b, 90041 Balestrate PA
   - website: https://la-maiolica-bb.italiapaesaggiviaggi.top/
34. **Le Vele di Balestrate** — Balestrate
   - slug: `le-vele-di-balestrate-balestrate`
   - indirizzo: Via Giacomo Leopardi, 4, 90041 Balestrate PA
   - website: https://leveledibalestrate.it/
35. **Orlando Bayview** — Balestrate
   - slug: `orlando-bayview-balestrate`
   - indirizzo: Via Giovanni Pascoli, 1, 90041 Balestrate PA
   - website: http://www.orlandobayview.com/