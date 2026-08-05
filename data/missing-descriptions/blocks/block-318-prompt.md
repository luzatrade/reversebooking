# Blocco 318/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Villa Spaia** — Brancaleone
   - slug: `villa-spaia-brancaleone`
   - indirizzo: Via Zelante, 89036 Brancaleone RC
   - website: https://www.booking.com/hotel/it/villa-spaia.it.html
2. **Villaggio Club Altalia** — Brancaleone
   - slug: `villaggio-club-altalia-brancaleone`
   - indirizzo: Contrada Altalia, 10-12, 89036 Brancaleone RC
   - website: https://villaggioaltalia.it/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness
3. **Il Giardino** — Brandico
   - slug: `il-giardino-brandico`
   - indirizzo: Via Giosuè Carducci, 3, 25030 Trenzano BS
   - website: https://www.booking.com/hotel/it/il-giardino-comezzano.it.html
4. **B&B HOTEL Settimo Torinese** — Brandizzo
   - slug: `b-b-hotel-settimo-torinese-brandizzo`
   - indirizzo: Via Leinì, 101, 10036 Settimo Torinese TO
   - website: https://www.hotel-bb.com/it/hotel/settimo-torinese?utm_source=googlemaps&utm_medium=fichehotel&utm_campaign=yext
5. **Green Hotel** — Brandizzo
   - slug: `green-hotel-brandizzo`
   - indirizzo: Via Milano, 177, 10036 Settimo Torinese TO
   - website: http://www.green-hotel.it/
6. **Hotel Fortyfive** — Brandizzo
   - slug: `hotel-fortyfive-brandizzo`
   - indirizzo: Stradale Torino, 40, 10034 Chivasso TO
   - website: http://www.hotelfortyfive.it/
7. **Hotel Serenella** — Brandizzo
   - slug: `hotel-serenella-brandizzo`
   - indirizzo: Via Conte Luigi Tarino, 4, 10124 Torino TO
   - website: http://www.albergoserenella.com/
8. **Hotel Vecchio Pavone** — Brandizzo
   - slug: `hotel-vecchio-pavone-brandizzo`
   - indirizzo: Via Giacomo Leopardi, 1, 10079 Mappano TO
   - website: http://hotel-vecchio-pavone.org.es/
9. **Hotel Verdina 2.0 SRL** — Brandizzo
   - slug: `hotel-verdina-2-0-srl-brandizzo`
   - indirizzo: Via Pisa, 69, 10088 Volpiano TO
   - website: http://verdinahotel.it/
10. **L'ulivo Selvatico** — Brandizzo
   - slug: `l-ulivo-selvatico-brandizzo`
   - indirizzo: Via Piave, 2, 10032 Brandizzo TO
   - website: https://staying-at.life/l-39-ulivo-selvatico-italy
11. **Maison di Gugli** — Brandizzo
   - slug: `maison-di-gugli-brandizzo`
   - indirizzo: Via Torino, 82, 10032 Brandizzo TO
   - website: https://francescastraveltips.com/maison-di-gugli-italy
12. **Residence Viali Chivasso** — Brandizzo
   - slug: `residence-viali-chivasso-brandizzo`
   - indirizzo: Viale V. Veneto, 8, 10034 Chivasso TO
   - website: https://affittacamere-viali-centro-chivasso.italiatourism.top/
13. **Via Casne 2 - Affitti brevi** — Brandizzo
   - slug: `via-casne-2-affitti-brevi-brandizzo`
   - indirizzo: Via Casne, 2, 10088 Volpiano TO
14. **Albergo Carona** — Branzi
   - slug: `albergo-carona-branzi`
   - indirizzo: Via Angelo Bianchi, 22, 24010 Carona BG
   - website: https://albergoristorantecarona.it/
15. **Albergo Panoramico valle brembana** — Branzi
   - slug: `albergo-panoramico-valle-brembana-branzi`
   - indirizzo: Via Foppo, 49, 24010 Moio De' Calvi BG
   - website: http://www.albergo-panoramico.com/
16. **Hotel Des Alpes** — Branzi
   - slug: `hotel-des-alpes-branzi`
   - indirizzo: Via Cortivo, 9, 24010 Foppolo BG
   - website: https://www.albergodesalpes.it/
17. **K2 Hotel & Restaurant** — Branzi
   - slug: `k2-hotel-restaurant-branzi`
   - indirizzo: Via Foppelle, 42, 24010 Foppolo BG
   - website: http://residencek2.it/
18. **La Locandiera Carona** — Branzi
   - slug: `la-locandiera-carona-branzi`
   - indirizzo: Piazza Vittorio Veneto, 3, 24010 Carona BG
   - website: https://www.instagram.com/lalocandieracarona?igsh=d3BteXFsMGVlcW43
19. **Locanda Ristorante Pizzeria I Riviù** — Branzi
   - slug: `locanda-ristorante-pizzeria-i-riviu-branzi`
   - indirizzo: Via Rivioni, 14, 24010 Branzi BG
   - website: http://www.facebook.com/riviubranzi/
20. **Orobie Alps Resort** — Branzi
   - slug: `orobie-alps-resort-branzi`
   - indirizzo: Via Monica, 70, 24010 Roncobello BG
   - website: http://www.orobiealpsresort.com/
21. **Villa Carona Hotel & Spa** — Branzi
   - slug: `villa-carona-hotel-spa-branzi`
   - indirizzo: Via Pagliari, 24010 Carona BG
   - website: https://hotelvillacarona.com/
22. **Agriturismo San Faustino** — Braone
   - slug: `agriturismo-san-faustino-braone`
   - indirizzo: Via San Faustino, 1, 25040 Ceto BS
23. **B&B Santa Cristina** — Braone
   - slug: `b-b-santa-cristina-braone`
   - indirizzo: Via S. Gregorio, 3/A, 25040 Sommaprada di Lozio BS
   - website: http://www.santacristinalozio.it/
24. **B&B Valentina** — Braone
   - slug: `b-b-valentina-braone`
   - indirizzo: Via Falger, 13, 25050 Niardo BS
   - website: http://airbnb.it/h/bnbvalentina
25. **Bed and breaskfast Blè** — Braone
   - slug: `bed-and-breaskfast-ble-braone`
   - indirizzo: V. Dassaro, 5, 25040 Cerveno BS
   - website: https://lakesit.cyou/breaskfast-bli-7rxgv9
26. **Casa Visnenza B&B** — Braone
   - slug: `casa-visnenza-b-b-braone`
   - indirizzo: Via S. Faustino, 7, 25044 Capo di Ponte BS
   - website: http://casavisnenza.com/
27. **Catif Ladrù** — Braone
   - slug: `catif-ladru-braone`
   - indirizzo: Via Bassa, 3, 25040 Cerveno BS
   - website: https://dennisstravelexperience.eu/catif-ladru-italy
28. **I sei petali | Agriturismo Azienda agricola** — Braone
   - slug: `i-sei-petali-agriturismo-azienda-agricola-braone`
   - indirizzo: Via Strada Di Mezzo, 3, 25044 Capo di Ponte BS
   - website: https://iseipetali.com/
29. **Ostello di Vallecamonica** — Braone
   - slug: `ostello-di-vallecamonica-braone`
   - indirizzo: Via Monsignor Vittorio Bonomelli, 11, 25043 Breno BS
   - website: http://www.ostellodivallecamonica.com/it/
30. **Appartamento a BREBBIA** — Brebbia
   - slug: `appartamento-a-brebbia-brebbia`
   - indirizzo: Via IV Novembre, 11, 21020 Brebbia VA
31. **Colori del Lago** — Brebbia
   - slug: `colori-del-lago-brebbia`
   - indirizzo: Via Trento, 9, 21020 Brebbia VA
32. **DKamping Village** — Brebbia
   - slug: `dkamping-village-brebbia`
   - indirizzo: via Carducci, 943, 21027 Ispra VA
   - website: https://dkampingvillage.it/
33. **Nel giardino di Dafne** — Brebbia
   - slug: `nel-giardino-di-dafne-brebbia`
   - indirizzo: Via Santa Caterina, 35, 28838 Stresa VB
   - website: http://www.agriturismonelgiardinodidafne.com/
34. **Residence Sport & Benessere** — Brebbia
   - slug: `residence-sport-benessere-brebbia`
   - indirizzo: Via G. Garibaldi, 21, 21020 Brebbia VA
   - website: http://www.sport-benessere.it/
35. **Agriturismo Ca' Del Gelso** — Breda di Piave
   - slug: `agriturismo-ca-del-gelso-breda-di-piave`
   - indirizzo: Via Levada, 1, 31030 Breda di Piave TV
   - website: http://www.cadelgelso.com/