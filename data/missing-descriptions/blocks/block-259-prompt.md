# Blocco 259/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Hotel Nikolai Residence** — Berlin
   - slug: `hotel-nikolai-residence-berlin`
   - indirizzo: Am Nußbaum 5, 10178 Berlin
   - website: http://www.nikolai-residence.com/
2. **Maritim proArte Hotel Berlin** — Berlin
   - slug: `maritim-proarte-hotel-berlin-berlin`
   - indirizzo: Friedrichstraße 151 Dorotheenstraße 65 (Navigationsadresse, 10117 Berlin
   - website: https://www.maritim.de/de/hotels/deutschland/proarte-hotel-berlin/unser-hotel?utm_campaign=yext&utm_source=bpa&utm_medium=local
3. **Meliá Berlin** — Berlin
   - slug: `melia-berlin-berlin`
   - indirizzo: Friedrichstraße 103, 10117 Berlin
   - website: https://www.melia.com/de/hotels/deutschland/berlin/melia-berlin?utm_campaign=google&utm_content=6514&utm_medium=organic&utm_source=directories
4. **Monbijou Hotel** — Berlin
   - slug: `monbijou-hotel-berlin`
   - indirizzo: Monbijou Hotel, Monbijoupl. 1, 10178 Berlin
   - website: https://monbijouhotel.com/?lang=de/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile
5. **Steigenberger Hotel am Kanzleramt** — Berlin
   - slug: `steigenberger-hotel-am-kanzleramt-berlin`
   - indirizzo: Ella-Trebe-Straße 5, 10557 Berlin
   - website: https://hrewards.com/de/steigenberger-hotel-am-kanzleramt-berlin?wt_mc=seo_listing.shr.yext.berlin_kanzleramt.hotel_link.text_cta
6. **Albergo Locanda Primavera** — Berlingo
   - slug: `albergo-locanda-primavera-berlingo`
   - indirizzo: Via Brescia, 18, 25050 Rodengo Saiano BS
   - website: http://www.locandaprimavera.it/
7. **B&B Franciacorta Rodengo Saiano** — Berlingo
   - slug: `b-b-franciacorta-rodengo-saiano-berlingo`
   - indirizzo: Via Privata Stretta, 5, 25050 Rodengo Saiano BS
   - website: https://www.bed-and-breakfast.it/it/lombardia/bb-franciacorta-rodengo-saiano/67508?refresh
8. **B&B il melograno** — Berlingo
   - slug: `b-b-il-melograno-berlingo`
   - indirizzo: Via Guglielmo Marconi, 8C, 25030 Berlingo BS
   - website: https://www.bebilmelogranoberlingo.it/home
9. **B&B Morgana** — Berlingo
   - slug: `b-b-morgana-berlingo`
   - indirizzo: 17/A, Via Campagna, 25030 Castrezzato BS
   - website: http://morgana.org.es/
10. **Bed & breakfast COVIDAFRANCIACORTA** — Berlingo
   - slug: `bed-breakfast-covidafranciacorta-berlingo`
   - indirizzo: Via Galileo Galilei, 8, 25030 Castrezzato BS
11. **Casa 774 B&B Franciacorta** — Berlingo
   - slug: `casa-774-b-b-franciacorta-berlingo`
   - indirizzo: Via Luigi Pirandello, 34, 25050 Passirano BS
12. **Foresteria La Corte** — Berlingo
   - slug: `foresteria-la-corte-berlingo`
   - indirizzo: Via X Giornate, 22, 25030 Castrezzato BS
13. **Hotel Franciacorta 3 STELLE** — Berlingo
   - slug: `hotel-franciacorta-3-stelle-berlingo`
   - indirizzo: Via Donatori di Sangue, 10/D, 25050 Paderno Franciacorta BS
   - website: http://www.hotelfranciacorta.it/
14. **il Glicine B&B e RISTORANTE** — Berlingo
   - slug: `il-glicine-b-b-e-ristorante-berlingo`
   - indirizzo: Via Calchera, 32, 25046 Cazzago San Martino BS
   - website: http://www.ilglicinefranciacorta.com/
15. **Villa Fenaroli Palace Hotel** — Berlingo
   - slug: `villa-fenaroli-palace-hotel-berlingo`
   - indirizzo: Via Giuseppe Mazzini, 14, 25086 Rezzato BS
   - website: http://www.villafenaroli.it/
16. **Villa Franca in Franciacorta** — Berlingo
   - slug: `villa-franca-in-franciacorta-berlingo`
   - indirizzo: Via IV Novembre, 5A, 25050 Passirano BS
   - website: http://www.villafrancainfranciacorta.com/
17. **Agriturismo Casa Ricotta** — Bernalda
   - slug: `agriturismo-casa-ricotta-bernalda`
   - indirizzo: Strada Casa Ricotta, 1, 75012 Bernalda MT
   - website: https://www.casaricotta.it/
18. **Agriturismo La Volpe e la Stella** — Bernalda
   - slug: `agriturismo-la-volpe-e-la-stella-bernalda`
   - indirizzo: C.da Sant'Agata, 75024 Montescaglioso MT
   - website: https://www.poderecarriero.it/
19. **Albergo diffuso Il Borgo Ritrovato** — Bernalda
   - slug: `albergo-diffuso-il-borgo-ritrovato-bernalda`
   - indirizzo: Via N. Andrisani, 25, 75024 Montescaglioso MT
   - website: http://www.ilborgoritrovato.com/
20. **B&B Casa Venezia** — Bernalda
   - slug: `b-b-casa-venezia-bernalda`
   - indirizzo: Via Trieste, 10, 75012 Bernalda MT
   - website: https://www.bbcasavenezia.it/
21. **B&B IL Sogno** — Bernalda
   - slug: `b-b-il-sogno-bernalda`
   - indirizzo: Via Fiume, 37, 75024 Montescaglioso MT
   - website: https://securestay.eu/bnb-il-sogno-a-montescaglioso
22. **B&B Ristorante Pizzeria L'Oasi Metaponto (Matera)** — Bernalda
   - slug: `b-b-ristorante-pizzeria-l-oasi-metaponto-matera-bernalda`
   - indirizzo: Via del Lido, 47, 75012 Lido di Metaponto MT
   - website: https://www.oasimetaponto.it/
23. **B&B Soprattutto** — Bernalda
   - slug: `b-b-soprattutto-bernalda`
   - indirizzo: P.za Cirillo, 12, 75023 Montalbano Jonico MT
   - website: http://soprattutto.com.es/
24. **B&B VILLA DEGLI ANGELI** — Bernalda
   - slug: `b-b-villa-degli-angeli-bernalda`
   - indirizzo: Via Madonna degli Angeli, 75012 Bernalda MT
   - website: http://villa-degli-angeli.org.es/
25. **Blue Iris Home** — Bernalda
   - slug: `blue-iris-home-bernalda`
   - indirizzo: Viale delle Sirene, 55, 75012 Lido di Metaponto MT
   - website: https://www.booking.com/hotel/it/blue-iris-home.it.html
26. **Borgo San Gaetano** — Bernalda
   - slug: `borgo-san-gaetano-bernalda`
   - indirizzo: Corso Metaponto, 25, 75012 Bernalda MT
   - website: http://www.borgosangaetano.com/
27. **Domus Dams B&B** — Bernalda
   - slug: `domus-dams-b-b-bernalda`
   - indirizzo: Via Giambattista Gattini, 1, 75024 Montescaglioso MT
   - website: https://domus-dams-bb.hotelperiviaggi.top/
28. **Foresteria dell'Abbazia** — Bernalda
   - slug: `foresteria-dell-abbazia-bernalda`
   - indirizzo: Piazza Cavalieri di Vittorio Veneto, 75024 Montescaglioso MT
   - website: https://www.foresteriabbazia.com/
29. **Hotel Forliano - Sala Ricevimenti Minerva** — Bernalda
   - slug: `hotel-forliano-sala-ricevimenti-minerva-bernalda`
   - indirizzo: Strada Statale Basentana, Km. 90, 100, 75012 Bernalda MT
   - website: http://www.hotelforliano.it/
30. **Hotel Giardino Giamperduto** — Bernalda
   - slug: `hotel-giardino-giamperduto-bernalda`
   - indirizzo: Via Giamperduto, 37, 75012 Bernalda MT
   - website: http://www.giamperduto.com/
31. **Hotel Palatinum** — Bernalda
   - slug: `hotel-palatinum-bernalda`
   - indirizzo: S.da Statale 106 Jonica, 75012 Metaponto MT
   - website: http://www.hotelpalatinum.it/
32. **Hotel Sacco** — Bernalda
   - slug: `hotel-sacco-bernalda`
   - indirizzo: Via del Lido, 7, 75012 Metaponto MT
   - website: http://hotelsacco.carrd.co/
33. **House Pitagorici Bernalda** — Bernalda
   - slug: `house-pitagorici-bernalda-bernalda`
   - indirizzo: Via Giuseppe Verdi, 36, 75012 Bernalda MT
   - website: https://hotelipitagorici-it.webnode.it/
34. **Masseria Scannaturco** — Bernalda
   - slug: `masseria-scannaturco-bernalda`
   - indirizzo: V. Demetra, 75020 Marina di Pisticci MT
   - website: https://www.masseriascannaturco.com/
35. **Pensione Afrodite** — Bernalda
   - slug: `pensione-afrodite-bernalda`
   - indirizzo: Viale Europa, 48, 75012 Metaponto MT
   - website: https://www.booking.com/Share-VBXw0XI