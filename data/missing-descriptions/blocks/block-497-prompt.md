# Blocco 497/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **B&B HOTEL Sassari** — Sassari
   - slug: `b-b-hotel-sassari-sassari`
   - indirizzo: Via Padre Zirano, 5, 07100 Sassari SS, Italia
   - website: https://www.hotel-bb.com/it/hotel/sassari?utm_source=googlemaps&utm_medium=fichehotel&utm_campaign=yext
2. **B&B La Terrazza di Anna** — Sassari
   - slug: `b-b-la-terrazza-di-anna-sassari`
   - indirizzo: Viale Italia, 3, 07100 Sassari SS, Italia
   - website: https://guestcentre.eu/la-terrazza-di-anna-sassari-italy
3. **B&B Viale Italia Boutique Rooms** — Sassari
   - slug: `b-b-viale-italia-boutique-rooms-sassari`
   - indirizzo: Viale Italia, 50b, 07100 Sassari SS, Italia
4. **Bed and Breakfast la casa di Atena** — Sassari
   - slug: `bed-and-breakfast-la-casa-di-atena-sassari`
   - indirizzo: Via Paolo Bentivoglio, 2, 07100 Sassari SS, Italia
5. **Bed and Breakfast Sogno Allegro a Sassari** — Sassari
   - slug: `bed-and-breakfast-sogno-allegro-a-sassari-sassari`
   - indirizzo: Via Gorizia, 3, 07100 Sassari SS, Italia
   - website: http://www.sognoallegro.it/
6. **Bed And Breakfast Torre Tonda** — Sassari
   - slug: `bed-and-breakfast-torre-tonda-sassari`
   - indirizzo: Via Arborea, 6/A, 07100 Sassari SS, Italia
   - website: http://wwe.bedandbreakfastsassari.com/
7. **Bed&Breakfast Sassari-in** — Sassari
   - slug: `bed-breakfast-sassari-in-sassari`
   - indirizzo: Via Insinuazione, 20, 07100 Sassari SS, Italia
   - website: http://www.sassari-in.it/
8. **Casa Ariston** — Sassari
   - slug: `casa-ariston-sassari`
   - indirizzo: Viale Trento, 5, 07100 Sassari SS, Italia
   - website: https://casaariston.com/it_it/
9. **Hotel Marini** — Sassari
   - slug: `hotel-marini-sassari`
   - indirizzo: Via Pietro Nenni, 2, 07100 Sassari SS, Italia
   - website: http://www.hotelmarini.com/
10. **Locanda Carra Manna** — Sassari
   - slug: `locanda-carra-manna-sassari`
   - indirizzo: Via Cetti, 10, Vicolo Palazzo Civico, 16, 07100 Sassari SS, Italia
   - website: http://www.locandacarramanna.com/
11. **Morfeo Bed and Breakfast** — Sassari
   - slug: `morfeo-bed-and-breakfast-sassari`
   - indirizzo: Viale Pasquale Stanislao Mancini, 17, 07100 Sassari SS, Italia
   - website: https://www.morfeobedandbreakfast.com/
12. **Parco delle Valli** — Sassari
   - slug: `parco-delle-valli-sassari`
   - indirizzo: Via Valle Gardona, 16, 07100 Sassari SS, Italia
   - website: http://parco-delle-valli.com.es/
13. **Piazza Azuni 18 Guest House a Sassari** — Sassari
   - slug: `piazza-azuni-18-guest-house-a-sassari-sassari`
   - indirizzo: Piazza Domenico Alberto Azuni, 18, 07100 Sassari SS, Italia
   - website: http://piazzaazuni18.octosite.net/
14. **Santa Elisabetta1 appartamento** — Sassari
   - slug: `santa-elisabetta1-appartamento-sassari`
   - indirizzo: Via Sant'Elisabetta, 1, 07100 Sassari SS, Italia
15. **Umberto 28 Guest House** — Sassari
   - slug: `umberto-28-guest-house-sassari`
   - indirizzo: Viale Umberto I, 28, 07100 Sassari SS, Italia
16. **APA Hotel Nishi Shinjuku Gochome Eki Tower** — Tokyo
   - slug: `apa-hotel-nishi-shinjuku-gochome-eki-tower-tokyo`
   - indirizzo: 3-chōme-14-1 Honmachi, Shibuya, Tokyo 151-0071
   - website: https://www.apahotel.com/resort/nishishinjuku-tower/?utm_source=google&utm_medium=maps
17. **Cerulean Tower Tokyu Hotel** — Tokyo
   - slug: `cerulean-tower-tokyu-hotel-tokyo`
   - indirizzo: 26-1 Sakuragaokachō, Shibuya, Tokyo 150-8512
   - website: https://www.tokyuhotels.co.jp/cerulean-h/
18. **Daiwa Roynet Hotel Nishi-Shinjuku Premier** — Tokyo
   - slug: `daiwa-roynet-hotel-nishi-shinjuku-premier-tokyo`
   - indirizzo: 6-chōme-12-39 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://www.daiwaroynet.jp/nishi-shinjuku/
19. **Himalaya Cloud Hotel** — Tokyo
   - slug: `himalaya-cloud-hotel-tokyo`
   - indirizzo: 2-chōme-30-2 Hatagaya, Shibuya, Tokyo 151-0072
   - website: https://himalaya-cloud-hotel.com/
20. **Hotel Bougainvillea Shinjuku** — Tokyo
   - slug: `hotel-bougainvillea-shinjuku-tokyo`
   - indirizzo: 1-chōme-61-8 Sasazuka, Shibuya, Tokyo 151-0073
   - website: https://hpdsp.jp/bougain-shinjuku/
21. **Hotel Indigo Tokyo Shibuya by IHG** — Tokyo
   - slug: `hotel-indigo-tokyo-shibuya-by-ihg-tokyo`
   - indirizzo: 2-chōme-25-12 Dōgenzaka, Shibuya, Tokyo 150-0043
   - website: https://www.ihg.com/hotelindigo/hotels/us/en/shibuyaku/hndsh/hoteldetail?cm_mmc=GoogleMaps-_-IN-_-JP-_-HNDSH
22. **HOTEL MYSTAYS Nishi Shinjuku** — Tokyo
   - slug: `hotel-mystays-nishi-shinjuku-tokyo`
   - indirizzo: 7-chōme-14-14 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://iconia.co.jp/hotel-mystays-nishi-shinjuku-tokyo/?utm_source=google&utm_medium=GBP&utm_campaign=MSNishiShinjuku
23. **Hotel Rose Garden Shinjuku** — Tokyo
   - slug: `hotel-rose-garden-shinjuku-tokyo`
   - indirizzo: 8-chōme-1-3 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: http://www.hotel-rosegarden.jp/
24. **Hotel Route Inn Tokyo Asagaya** — Tokyo
   - slug: `hotel-route-inn-tokyo-asagaya-tokyo`
   - indirizzo: 5-chōme-35-14 Naritahigashi, Suginami City, Tokyo 166-0015
   - website: https://www.route-inn.co.jp/hotel_list/tokyo/index_hotel_id_599/?utm_source=google&utm_medium=gbp&utm_campaign=web
25. **Hotel Sunroute Plaza Shinjuku** — Tokyo
   - slug: `hotel-sunroute-plaza-shinjuku-tokyo`
   - indirizzo: 2-chōme-3-1 Yoyogi, Shibuya, Tokyo 151-0053
   - website: https://sotetsu-hotels.com/sunroute/plazashinjuku/
26. **Hyatt Regency Tokyo** — Tokyo
   - slug: `hyatt-regency-tokyo-tokyo`
   - indirizzo: 2-chōme-7-2 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://www.hyatt.com/hyatt-regency/en-US/tyoty-hyatt-regency-tokyo?src=corp_lclb_google_seo_tyoty&utm_source=google&utm_medium=organic&utm_campaign=lmr
27. **JR KYUSHU HOTEL Blossom Shinjuku** — Tokyo
   - slug: `jr-kyushu-hotel-blossom-shinjuku-tokyo`
   - indirizzo: 〒151-0053 Tokyo, Shibuya, Yoyogi, 2-chōme−6−２ ＪＲ九州ホテルブラッサム新宿 １階
   - website: https://www.jrk-hotels.co.jp/Shinjuku/
28. **Kadoya Hotel** — Tokyo
   - slug: `kadoya-hotel-tokyo`
   - indirizzo: 1-chōme-23-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023
   - website: https://www.kadoya-hotel.co.jp/?utm_source=GBP&utm_medium=google&utm_campaign=cpc&utm_id=GBP
29. **Kario Sasazuka Terrace** — Tokyo
   - slug: `kario-sasazuka-terrace-tokyo`
   - indirizzo: 1-chōme-56-7 Sasazuka, Shibuya, Tokyo 151-0073
   - website: https://staytuned.asia/brands/kario/
30. **Keio Plaza Hotel Tokyo** — Tokyo
   - slug: `keio-plaza-hotel-tokyo-tokyo`
   - indirizzo: 2-chōme-2-1 Nishishinjuku, Shinjuku City, Tokyo 160-8330
   - website: https://www.keioplaza.co.jp/
31. **Mustard Hotel Shimokitazawa** — Tokyo
   - slug: `mustard-hotel-shimokitazawa-tokyo`
   - indirizzo: 3-chōme-9-19 Kitazawa, Setagaya City, Tokyo 155-0031
   - website: https://mustardhotel.com/shimokitazawa/
32. **Nishi-Shinjuku Green Hotel** — Tokyo
   - slug: `nishi-shinjuku-green-hotel-tokyo`
   - indirizzo: 2-chōme-18-1 Hatagaya, Shibuya, Tokyo 151-0072
   - website: https://green-hotels.co.jp/
33. **Park Hyatt Tokyo** — Tokyo
   - slug: `park-hyatt-tokyo-tokyo`
   - indirizzo: 2, 3-chōme-7-1 Nishishinjuku, Shinjuku City, Tokyo 163-1055
   - website: https://www.hyatt.com/park-hyatt/en-US/tyoph-park-hyatt-tokyo?src=corp_lclb_google_seo_tyoph&utm_source=google&utm_medium=organic&utm_campaign=lmr
34. **Sakura Hotel Hatagaya** — Tokyo
   - slug: `sakura-hotel-hatagaya-tokyo`
   - indirizzo: 1-chōme-32-3 Hatagaya, Shibuya, Tokyo 151-0072
   - website: https://www.sakura-hotel.co.jp/hatagaya
35. **Satellite Hotel Yoyogi Sangubashi** — Tokyo
   - slug: `satellite-hotel-yoyogi-sangubashi-tokyo`
   - indirizzo: 5-chōme-56-3 Yoyogi, Shibuya, Tokyo 151-0053
   - website: https://satellitehotel.airhost.co/ja/houses/795245