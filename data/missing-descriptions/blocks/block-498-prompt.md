# Blocco 498/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Shimokita Stay シモキタステイ** — Tokyo
   - slug: `shimokita-stay-tokyo`
   - indirizzo: 2-chōme-27-2 Kitazawa, Setagaya City, Tokyo 155-0031
   - website: https://www.airbnb.jp/users/154517762/listings
2. **Shinjuku Washington Hotel** — Tokyo
   - slug: `shinjuku-washington-hotel-tokyo`
   - indirizzo: 3-chōme-2-9 Nishishinjuku, Shinjuku City, Tokyo 160-8336
   - website: https://www.shinjyuku-wh.com/
3. **Smile Hotel Tokyo Asagaya** — Tokyo
   - slug: `smile-hotel-tokyo-asagaya-tokyo`
   - indirizzo: 3-chōme-37-11 Asagayaminami, Suginami City, Tokyo 166-0004
   - website: https://smile-hotels.com/hotels/show/tokyoasagaya
4. **The Knot Tokyo Shinjuku** — Tokyo
   - slug: `the-knot-tokyo-shinjuku-tokyo`
   - indirizzo: 4-chōme-31-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://hotel-the-knot.jp/tokyoshinjuku/
5. **WPÜ HOTEL** — Tokyo
   - slug: `wpu-hotel-tokyo`
   - indirizzo: 7-chōme-10-5 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://hotel.wpu.co/shinjuku/
6. **Albergo Maccotta** — Trapani
   - slug: `albergo-maccotta-trapani`
   - indirizzo: Via Argentieri, 4, 91100 Trapani TP, Italia
   - website: https://www.albergomaccotta.it/
7. **Albergo Room of Andrea - Palazzo Platamone** — Trapani
   - slug: `albergo-room-of-andrea-palazzo-platamone-trapani`
   - indirizzo: Viale Regina Margherita, 31, 91100 Trapani TP, Italia
   - website: https://www.roomofandrea.it/
8. **Albergo Russo** — Trapani
   - slug: `albergo-russo-trapani`
   - indirizzo: Via Tintori, 4, 91100 Trapani TP, Italia
   - website: http://www.albergorusso.it/
9. **Albergo Tiziano** — Trapani
   - slug: `albergo-tiziano-trapani`
   - indirizzo: Via Giuseppe Rubino, 4, 91100 Trapani TP, Italia
   - website: http://hoteltizianotrapani.it/
10. **Albergo Vittoria** — Trapani
   - slug: `albergo-vittoria-trapani`
   - indirizzo: Via Francesco Crispi, 4, 91100 Trapani TP, Italia
   - website: http://www.hotelvittoriatrapani.it
11. **ALLA MARINA - BED AND BREAKFAST** — Trapani
   - slug: `alla-marina-bed-and-breakfast-trapani`
   - indirizzo: Viale Regina Elena, 4, 91100 Trapani TP, Italia
   - website: https://www.beballamarina.it/
12. **B&B Il profumo del porto** — Trapani
   - slug: `b-b-il-profumo-del-porto-trapani`
   - indirizzo: Via Ammiraglio Staiti, 15, 91100 Trapani TP, Italia
   - website: https://www.ilprofumodelporto.it/
13. **Bed & Breakfast Terrazze Villanova** — Trapani
   - slug: `bed-breakfast-terrazze-villanova-trapani`
   - indirizzo: Vicolo Villanova, 33, 91100 Trapani TP, Italia
   - website: http://www.terrazzevillanova.it/
14. **Bed and Breakfast "Le 5 Torri"** — Trapani
   - slug: `bed-and-breakfast-le-5-torri-trapani`
   - indirizzo: Via Fiscale, 4, 91100 Trapani TP, Italia
   - website: https://www.bb5torri.it/
15. **Bed And Breakfast Il Cavaliere** — Trapani
   - slug: `bed-and-breakfast-il-cavaliere-trapani`
   - indirizzo: Via Pompeo Zuccalà, 19, 91100 Trapani TP, Italia
   - website: http://www.bebilcavaliere.com/
16. **Bed and Breakfast Il Quadrifoglio a Trapani - Casa Vacanze Trapani** — Trapani
   - slug: `bed-and-breakfast-il-quadrifoglio-a-trapani-casa-trapani`
   - indirizzo: Via Nettuno, 26, 91100 Trapani TP, Italia
   - website: http://www.ilquadrifogliobb.it/
17. **Bed And Breakfast Ligny** — Trapani
   - slug: `bed-and-breakfast-ligny-trapani`
   - indirizzo: Via Torre di Ligny, 14, 91100 Trapani TP, Italia
18. **Bed and Breakfast Via Spalti 52** — Trapani
   - slug: `bed-and-breakfast-via-spalti-52-trapani`
   - indirizzo: Via Spalti, 52, 91100 Trapani TP, Italia
   - website: https://beb.it/viaspalti52trapani
19. **Central Gallery Rooms | Palazzo D'Alì Staiti XIX** — Trapani
   - slug: `central-gallery-rooms-palazzo-d-ali-staiti-xix-trapani`
   - indirizzo: Lungomare Dante Alighieri, 28, 91100 Trapani TP, Italia
   - website: https://www.centralgalleryrooms.com/
20. **Drepanon, prospettive sul mediterraneo B&B** — Trapani
   - slug: `drepanon-prospettive-sul-mediterraneo-b-b-trapani`
   - indirizzo: Viale Regina Elena, 24, 91100 Trapani TP, Italia
   - website: https://drepanon.tripcombined.com/
21. **Giardini Mon Plaisir** — Trapani
   - slug: `giardini-mon-plaisir-trapani`
   - indirizzo: Via Giacomo Mistretta, 13, 91100 Trapani TP, Italia
   - website: https://www.giardinimonplaisir.it/
22. **La Casa sul Mare - Bed & Breakfast** — Trapani
   - slug: `la-casa-sul-mare-bed-breakfast-trapani`
   - indirizzo: Via Torre di Ligny, 30, 91100 Trapani TP, Italia
   - website: http://www.lacasasulmaretrapani.it/
23. **La Trinacria Rooms** — Trapani
   - slug: `la-trinacria-rooms-trapani`
   - indirizzo: Via Corallai, 49, 91100 Trapani TP, Italia
   - website: http://www.latrinacriarooms.com/
24. **Teti Sea View Rooms & Apts. Trapani City Center** — Trapani
   - slug: `teti-sea-view-rooms-apts-trapani-city-center-trapani`
   - indirizzo: Via Scudaniglio, 30, 91100 Trapani TP, Italia
   - website: http://tetivacanze.com/
25. **Vida Rooms** — Trapani
   - slug: `vida-rooms-trapani`
   - indirizzo: Via Francesco Manzo, 17, 91100 Trapani TP, Italia
   - website: https://www.vidarooms.com/
26. **Albergo Trento** — Trento
   - slug: `albergo-trento-trento`
   - indirizzo: Corso Porta Nuova, 36, 37122 Verona VR, Italia
   - website: http://www.albergotrento.it/
27. **B&B Eden** — Trento
   - slug: `b-b-eden-trento`
   - indirizzo: Via Roma, 27, 38122 Trento TN, Italia
   - website: http://bbeden.it/
28. **B&B HOTEL Trento** — Trento
   - slug: `b-b-hotel-trento-trento`
   - indirizzo: Via Innsbruck, 11, 38100 Trento TN, Italia
   - website: https://www.hotel-bb.com/it/hotel/trento?utm_source=googlemaps&utm_medium=fichehotel&utm_campaign=yext
29. **B&B la Malvasia** — Trento
   - slug: `b-b-la-malvasia-trento`
   - indirizzo: Via della Malvasia, 77, 38122 Trento TN, Italia
   - website: http://www.bblamalvasia.it/
30. **B&B Le Muse Trento** — Trento
   - slug: `b-b-le-muse-trento-trento`
   - indirizzo: Vicolo Cristoforo Madruzzo, 6, 38122 Trento TN, Italia
   - website: https://bb-le-muse-trento.italytravelpro.top/
31. **B&B Margot Trento** — Trento
   - slug: `b-b-margot-trento-trento`
   - indirizzo: Via Andrea Maffei, 1, 38122 Trento TN, Italia
   - website: http://www.bbmargot.com/
32. **B&B Palazzo Malfatti** — Trento
   - slug: `b-b-palazzo-malfatti-trento`
   - indirizzo: Via Rodolfo Belenzani, 47, 38122 Trento TN, Italia
   - website: http://www.bbpalazzomalfatti.it/
33. **B&B PIEDICASTELLO** — Trento
   - slug: `b-b-piedicastello-trento`
   - indirizzo: Via Dòs Trento, 70, 38121 Trento TN, Italia
   - website: https://piedicastellobeb.it/
34. **B&B Trento nel Verde** — Trento
   - slug: `b-b-trento-nel-verde-trento`
   - indirizzo: Via Mesiano, 77/A, 38122 Trento TN, Italia
   - website: http://www.trentonelverde.com/
35. **Bed and Breakfast Relax** — Trento
   - slug: `bed-and-breakfast-relax-trento`
   - indirizzo: Via Giacomo Matteotti, 85, 38122 Trento TN, Italia
   - website: http://www.bb-relax.eu/