# Blocco 487/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Hotel Borges Chiado** — Lisbon
   - slug: `hotel-borges-chiado-lisbon`
   - indirizzo: R. Garrett 108, 1200-205 Lisboa
   - website: http://www.hotelborges.com/
2. **Hotel Britania Art Deco Lisboa** — Lisbon
   - slug: `hotel-britania-art-deco-lisboa-lisbon`
   - indirizzo: Rua Rodrigues Sampaio, 17, 1150-278 Lisboa
   - website: http://www.britanialisboa.com/
3. **Hotel Marquês de Pombal** — Lisbon
   - slug: `hotel-marques-de-pombal-lisbon`
   - indirizzo: Av. da Liberdade 243, 1250-143 Lisboa
   - website: http://www.hotel-marquesdepombal.pt/?partner=7649utm_source=google&utm_medium=organic&utm_campaign=MyBusiness&utm
4. **Hotel Mundial** — Lisbon
   - slug: `hotel-mundial-lisbon`
   - indirizzo: Praça Martim Moniz 2, 1100-341 Lisboa
   - website: https://www.hotel-mundial.pt/
5. **Hotel Santa Justa Lisboa** — Lisbon
   - slug: `hotel-santa-justa-lisboa-lisbon`
   - indirizzo: R. dos Correeiros 204, 1100-170 Lisboa
   - website: https://www.hotelsantajustalisboa.com/
6. **Hotel Vincci Baixa** — Lisbon
   - slug: `hotel-vincci-baixa-lisbon`
   - indirizzo: R. do Comércio 32 38, 1100-150 Lisboa
   - website: https://www.vinccibaixa.com/?utm_source=google&utm_medium=organic&utm_campaign=GoogleMyBusiness&partner=8221
7. **Inspira Liberdade Boutique Hotel** — Lisbon
   - slug: `inspira-liberdade-boutique-hotel-lisbon`
   - indirizzo: R. de Santa Marta 48, 1150-297 Lisboa
   - website: https://inspirahotels.com/?partner=8797&utm_source=googlebusinesslisting&utm_medium=gmb_liberdade
8. **Internacional Design Hotel** — Lisbon
   - slug: `internacional-design-hotel-lisbon`
   - indirizzo: Rua da Betesga 3, 1100-090 Lisboa
   - website: http://www.idesignhotel.com/
9. **Lisbon City Hotel by City Hotels** — Lisbon
   - slug: `lisbon-city-hotel-by-city-hotels-lisbon`
   - indirizzo: Av. Alm. Reis 49, 1150-010 Lisboa
   - website: http://www.lisboncityhotel.com/
10. **Central Hotel London** — London
   - slug: `central-hotel-london-london`
   - indirizzo: 16-18 Argyle St, London WC1H 8EG
   - website: http://www.centralhotellondon.com/
11. **City London Hotel** — London
   - slug: `city-london-hotel-london`
   - indirizzo: 30 Borough Rd, London SE1 0AJ
   - website: http://www.citylondonhotel.com/
12. **Holiday Inn Express London - Southwark by IHG** — London
   - slug: `holiday-inn-express-london-southwark-by-ihg-london`
   - indirizzo: 103-109 Southwark St, London SE1 0JQ
   - website: https://www.ihg.com/holidayinnexpress/hotels/gb/en/london/lonsw/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-GB-_-LONSW
13. **Hotel Indigo London - 1 Leicester Square by IHG** — London
   - slug: `hotel-indigo-london-1-leicester-square-by-ihg-london`
   - indirizzo: 1 Leicester Square, London WC2H 7NA
   - website: https://www.ihg.com/hotelindigo/hotels/gb/en/london/lonls/hoteldetail?cm_mmc=GoogleMaps-_-IN-_-GB-_-LONLS
14. **Hyde London City** — London
   - slug: `hyde-london-city-london`
   - indirizzo: 15 Old Bailey, London EC4M 7EF
   - website: https://hydehotels.com/london-city/?utm_source=google&utm_medium=organic&utm_campaign=gmb-website&utm_content=website_button
15. **Leonardo Royal London St Paul's** — London
   - slug: `leonardo-royal-london-st-paul-s-london`
   - indirizzo: 10 Godliman St, London EC4V 5AJ
   - website: https://www.leonardo-hotels.com/london/leonardo-royal-hotel-london-st-pauls
16. **London Hotel** — London
   - slug: `london-hotel-london`
   - indirizzo: London SW1V 2BB
   - website: https://www.oyorooms.com/gb/hotels-in-london/
17. **Lost Property St Paul's London - Curio Collection by Hilton** — London
   - slug: `lost-property-st-paul-s-london-curio-collection-london`
   - indirizzo: 3-5 Ludgate Hill, London EC4M 7AA
   - website: https://www.hilton.com/en/hotels/lonccqq-lost-property-st-pauls-london/?SEO_id=GMB-EMEA-QQ-LONCCQQ
18. **master St. Paul's Serviced Apartments** — London
   - slug: `master-st-paul-s-serviced-apartments-london`
   - indirizzo: 9 Creed Ln, London EC4V 5BR
   - website: https://www.stay-master.com/london/master-st-pauls?utm_source=GMB
19. **ME London** — London
   - slug: `me-london-london`
   - indirizzo: 336-337 Strand, London WC2R 1HA
   - website: https://www.melia.com/en/hotels/united-kingdom/london/me-london?utm_campaign=google&utm_content=6328&utm_medium=organic&utm_source=directories
20. **Novotel London Blackfriars** — London
   - slug: `novotel-london-blackfriars-london`
   - indirizzo: Novotel, 46 Blackfriars Rd, London SE1 8NZ
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=7942&merchantid=seo-maps-GB-7942&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
21. **Premier Inn London Holborn hotel** — London
   - slug: `premier-inn-london-holborn-hotel-london`
   - indirizzo: 27-29 Red Lion St, London WC1R 4PS
   - website: https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-holborn.html?cid=GLBC_LONHOL
22. **Strand Palace** — London
   - slug: `strand-palace-london`
   - indirizzo: 372 Strand, London WC2R 0JJ
   - website: https://www.strandpalacehotel.co.uk/?utm_source=google&utm_medium=local&utm_campaign=hotel-strandpalace
23. **The Londoner Hotel** — London
   - slug: `the-londoner-hotel-london`
   - indirizzo: 38 Leicester Square, London WC2H 7DX
   - website: https://www.thelondoner.com/?utm_source=Yext&utm_medium=Organic&utm_campaign=Londoner
24. **The Westin London City** — London
   - slug: `the-westin-london-city-london`
   - indirizzo: 60 Upper Thames St., London EC4V 3AD
   - website: https://www.marriott.com/en-us/hotels/lonwi-the-westin-london-city/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
25. **Al Tuscany Bed & Breakfast** — Lucca
   - slug: `al-tuscany-bed-breakfast-lucca`
   - indirizzo: Via Cenami, 17, 55100 Lucca LU, Italia
   - website: https://al-tuscany.amenitiz.io/it/booking/room
26. **Albergo alla Corte degli Angeli** — Lucca
   - slug: `albergo-alla-corte-degli-angeli-lucca`
   - indirizzo: V. Degli Angeli, 23, 55100 Lucca LU, Italia
   - website: http://www.allacortedegliangeli.com/
27. **Albergo Moderno Lucca** — Lucca
   - slug: `albergo-moderno-lucca-lucca`
   - indirizzo: in, Via Vincenzo Civitali, 38, 55100 Lucca LU, Italia
   - website: https://www.albergomoderno.top/
28. **At Home Bed and Breakfast** — Lucca
   - slug: `at-home-bed-and-breakfast-lucca`
   - indirizzo: Via dell'Anfiteatro, 32, 55100 Lucca LU, Italia
   - website: http://www.athomelucca.com/
29. **B&B Antica Corte dei Principi** — Lucca
   - slug: `b-b-antica-corte-dei-principi-lucca`
   - indirizzo: Via Olivo, 2, 55100 Lucca LU, Italia
   - website: https://anticacortedeiprincipi.it/
30. **B&B Evelina** — Lucca
   - slug: `b-b-evelina-lucca`
   - indirizzo: Via Streghi, 12, 55100 Lucca LU, Italia
31. **B&B Franco's Villa - Bed and Breakfast Lucca - Culliness** — Lucca
   - slug: `b-b-franco-s-villa-bed-and-breakfast-lucca-culli-lucca`
   - indirizzo: Via del Santo, 236, 55023 Diecimo LU, Italia
   - website: https://www.francosvilla.it/
32. **B&B Villa Anna** — Lucca
   - slug: `b-b-villa-anna-lucca`
   - indirizzo: Viale Luigi Cadorna, 41, 55100 Lucca LU, Italia
   - website: https://www.villannalucca.it/
33. **Bed & Breakfast La Boheme** — Lucca
   - slug: `bed-breakfast-la-boheme-lucca`
   - indirizzo: Via del Moro, 2, 55100 Lucca LU, Italia
   - website: http://www.boheme.it/
34. **Bed & Breakfast La gemma di Elena** — Lucca
   - slug: `bed-breakfast-la-gemma-di-elena-lucca`
   - indirizzo: Via della Zecca, 33, 55100 Lucca LU, Italia
   - website: http://www.lagemmadielena.it/
35. **Bed and Breakfast Lucca Fora** — Lucca
   - slug: `bed-and-breakfast-lucca-fora-lucca`
   - indirizzo: Via Pesciatina, 143, 55012 Lunata LU, Italia
   - website: https://www.bedandbreakfastlucca.net/