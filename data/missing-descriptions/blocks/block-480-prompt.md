# Blocco 480/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Dolce Siesta camere** — Custonaci
   - slug: `dolce-siesta-camere-custonaci`
   - indirizzo: Viale C. Colombo, 184, 91030 Castelluzzo TP
   - website: http://www.dolcesiesta.it/
2. **History Hotel** — Custonaci
   - slug: `history-hotel-custonaci`
   - indirizzo: Via Salemi, 5, 91019 Valderice TP
   - website: http://www.historyhotel.it/
3. **Hotel Achibea** — Custonaci
   - slug: `hotel-achibea-custonaci`
   - indirizzo: Via Verdesca, 26, 91030 Castelluzzo TP
   - website: https://www.hotelachibea.it/
4. **Hotel Baglio Catalano** — Custonaci
   - slug: `hotel-baglio-catalano-custonaci`
   - indirizzo: Contrada Purgatorio, 18, 91015 Purgatorio TP
   - website: https://www.hotelbagliocatalano.com/
5. **IL CORTILE | HOTEL & RESTAURANT** — Custonaci
   - slug: `il-cortile-hotel-restaurant-custonaci`
   - indirizzo: Via Padre Francesco Randazzo, 33B, 91015 Custonaci TP
   - website: https://hotelilcortile.com/
6. **Il Giardino della Nonna** — Custonaci
   - slug: `il-giardino-della-nonna-custonaci`
   - indirizzo: Viale C. Colombo, 162, 91030 Castelluzzo TP
   - website: http://www.ilgiardinodellanonna.com/
7. **Il Tramonto B&B** — Custonaci
   - slug: `il-tramonto-b-b-custonaci`
   - indirizzo: Via Don Bartolo, 7, 91030 Castelluzzo TP
   - website: https://iltramontobeb.it/
8. **Rotte e Sentieri B&B** — Custonaci
   - slug: `rotte-e-sentieri-b-b-custonaci`
   - indirizzo: Viale C. Colombo, 157, 91030 Castelluzzo TP
   - website: http://www.rotteesentieri.com/
9. **B&B "Le Stanze nel Castello"** — Delia
   - slug: `b-b-le-stanze-nel-castello-delia`
   - indirizzo: Piazza Castello, 1, 93010 Delia CL
   - website: https://www.lestanzenelcastello.com/
10. **B&B ANGELO** — Delia
   - slug: `b-b-angelo-delia`
   - indirizzo: Via Padre Pio da Pietrelcina, 4, 93100 Caltanissetta CL
   - website: https://www.bebangelo.it/
11. **B&B DE CASA** — Delia
   - slug: `b-b-de-casa-delia`
   - indirizzo: Via Casale, 31, 93017 San Cataldo CL
   - website: http://www.bebdecasa.com/
12. **Corte Antica Luxury** — Delia
   - slug: `corte-antica-luxury-delia`
   - indirizzo: Corso Giuseppe Garibaldi, 237, 92029 Ravanusa AG
13. **Sicily Bike** — Delia
   - slug: `sicily-bike-delia`
   - indirizzo: Contrada Cusatino, n/n, 93010 Serradifalco CL
   - website: http://www.sicilybike.it/
14. **Carlton Downtown Hotel** — Dubai
   - slug: `carlton-downtown-hotel-dubai`
   - indirizzo: Sheikh Zayed Road Near - Metro Station - المركز التجاري الثانية - DIFC - دبي
   - website: http://www.carltondowntown.com/
15. **Emirates Grand Hotel** — Dubai
   - slug: `emirates-grand-hotel-dubai`
   - indirizzo: 116957 Sheikh Zayed Rd - Trade Center First - Dubai
   - website: https://www.oyorooms.com/UAE/291238/
16. **Four Points by Sheraton Sheikh Zayed Road, Dubai** — Dubai
   - slug: `four-points-by-sheraton-sheikh-zayed-road-dubai-dubai`
   - indirizzo: Union Tower - Sheikh Zayed Rd - Trade Center First - Dubai
   - website: https://www.marriott.com/en-us/hotels/dxbsf-four-points-sheikh-zayed-road-dubai/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
17. **Gevora Hotel** — Dubai
   - slug: `gevora-hotel-dubai`
   - indirizzo: 101 Sheikh Zayed Rd - Trade Center Second - DIFC - Dubai
   - website: https://www.gevorahotels.com/
18. **ibis One Central** — Dubai
   - slug: `ibis-one-central-dubai`
   - indirizzo: Trade Centre - 1st Floor - District - دبي
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=7080&merchantid=seo-maps-AE-7080&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
19. **ibis World Trade Centre Dubai** — Dubai
   - slug: `ibis-world-trade-centre-dubai-dubai`
   - indirizzo: Sheikh Zayed Rd - Trade Center Second - Dubai
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=3572&merchantid=seo-maps-AE-3572&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
20. **LEVA Hotel , Mazaya Centre** — Dubai
   - slug: `leva-hotel-mazaya-centre-dubai`
   - indirizzo: Sheikh Zayed Collector Rd - opposite Downtown - Al Wasl - Dubai
   - website: https://www.stayleva.com/leva-hotel-mazaya-centre
21. **Millennium Central Downtown - Dubai** — Dubai
   - slug: `millennium-central-downtown-dubai-dubai`
   - indirizzo: Al Asayel St - Business Bay - Dubai
   - website: https://www.millenniumhotels.com/en/dubai/millennium-central-downtown/
22. **Novotel World Trade Centre Dubai** — Dubai
   - slug: `novotel-world-trade-centre-dubai-dubai`
   - indirizzo: Al Mustaqbal St - Trade Center Second - Dubai
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=5261&merchantid=seo-maps-AE-5261&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
23. **Number One Tower Suites Dubai** — Dubai
   - slug: `number-one-tower-suites-dubai-dubai`
   - indirizzo: 676F+5FM - Sheikh Zayed Rd - Trade Center First - Dubai
   - website: https://www.numberonetower.com/
24. **Park Regis Business Bay** — Dubai
   - slug: `park-regis-business-bay-dubai`
   - indirizzo: ParkLane Tower - Al A'amal St - Business Bay - Dubai
   - website: http://www.parkregisbusinessbay.com/
25. **Ramada by Wyndham Downtown Dubai** — Dubai
   - slug: `ramada-by-wyndham-downtown-dubai-dubai`
   - indirizzo: Boulevard Street - برج خليفة - Burj Residence Phase I & II - دبي
   - website: https://www.wyndhamhotels.com/en-uk/ramada/dubai-united-arab-emirates/ramada-downtown-dubai/overview?CID=LC:wmcic5n98gs1g0r:33637&iata=00093796
26. **Residence Inn by Marriott Sheikh Zayed Road, Dubai** — Dubai
   - slug: `residence-inn-by-marriott-sheikh-zayed-road-duba-dubai`
   - indirizzo: Sheikh Zayed Rd - Trade Center Second - DIFC - Dubai
   - website: https://www.marriott.com/en-us/hotels/dxbsz-residence-inn-sheikh-zayed-road-dubai/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
27. **Staybridge Suites Dubai Financial Centre by IHG** — Dubai
   - slug: `staybridge-suites-dubai-financial-centre-by-ihg-dubai`
   - indirizzo: Financial Centre Metro Station - Sheikh Zayed Rd - Trade Center First - Dubai
   - website: https://www.ihg.com/staybridge/hotels/gb/en/dubai/dxbfn/hoteldetail?cm_mmc=GoogleMaps-_-SB-_-AE-_-DXBFN
28. **The Tower Plaza Hotel Dubai** — Dubai
   - slug: `the-tower-plaza-hotel-dubai-dubai`
   - indirizzo: Sheikh Zayed Road - TC - Metro Station - opp. Emirates Towers - Trade Center First - Dubai
   - website: http://www.thetowerplazahotel.com/
29. **384 Guesthouse** — Enna
   - slug: `384-guesthouse-enna`
   - indirizzo: Via Roma, 384, 94100 Enna EN
30. **B&B Centro Sicilia Enna Centro** — Enna
   - slug: `b-b-centro-sicilia-enna-centro-enna`
   - indirizzo: Via Ree Pentite, 6, 94100 Enna EN
   - website: http://www.enna-accommodation.it/
31. **B&B Del Centro** — Enna
   - slug: `b-b-del-centro-enna`
   - indirizzo: Via Sant'Agata, 104, 94100 Enna EN
32. **B&B Enna Inn Centro** — Enna
   - slug: `b-b-enna-inn-centro-enna`
   - indirizzo: Via Sant'Agata, 49, 94100 Enna EN
33. **Doctor House** — Enna
   - slug: `doctor-house-enna`
   - indirizzo: Via Roma, 353, 94100 Enna EN
   - website: https://doctorhouseaccomodations.it/
34. **Hotel Bristol Enna Centro** — Enna
   - slug: `hotel-bristol-enna-centro-enna`
   - indirizzo: Piazza Arcangelo Ghisleri, 13, 94100 Enna EN
   - website: http://www.hotelbristolen.it/
35. **Affittacamere Antico Borgo Erice** — Erice
   - slug: `affittacamere-antico-borgo-erice-erice`
   - indirizzo: Via Gian Filippo Guarnotti, 12, 91016 Erice TP
   - website: http://www.ericeanticoborgo.com/