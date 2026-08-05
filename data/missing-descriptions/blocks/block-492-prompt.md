# Blocco 492/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **The Manhattan at Times Square Hotel** — New York
   - slug: `the-manhattan-at-times-square-hotel-new-york`
   - indirizzo: 790 7th Ave, New York, NY 10019
   - website: https://www.ihg.com/spnd/hotels/us/en/new-york/nycat/hoteldetail
2. **The Westin New York at Times Square** — New York
   - slug: `the-westin-new-york-at-times-square-new-york`
   - indirizzo: 270 W 43rd St, New York, NY 10036
   - website: https://www.marriott.com/en-us/hotels/nycsw-the-westin-new-york-at-times-square/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
3. **Thompson Central Park New York, by Hyatt** — New York
   - slug: `thompson-central-park-new-york-by-hyatt-new-york`
   - indirizzo: 119 W 56th St, New York, NY 10019
   - website: https://www.hyatt.com/thompson-hotels/en-US/lgatp-thompson-central-park-new-york?src=corp_lclb_google_seo_lgatp&utm_source=google&utm_medium=organic&utm_campaign=lmr
4. **Warwick New York** — New York
   - slug: `warwick-new-york-new-york`
   - indirizzo: 65 W 54th St, New York, NY 10019
   - website: https://www.warwickhotels.com/warwick-new-york/?utm_source=google&utm_medium=local&utm_campaign=seo
5. **Affittacamere La Piazzetta** — Orvieto
   - slug: `affittacamere-la-piazzetta-orvieto`
   - indirizzo: Via Angelo da Orvieto, 10, 05018 Orvieto TR, Italia
   - website: http://lapiazzettaorvieto.it/
6. **Affittacamere La Rosa di Orvieto** — Orvieto
   - slug: `affittacamere-la-rosa-di-orvieto-orvieto`
   - indirizzo: Via Adda, 14, 05018 Orvieto TR, Italia
   - website: http://www.bedandbreakfastorvieto.com/
7. **Albergo Picchio** — Orvieto
   - slug: `albergo-picchio-orvieto`
   - indirizzo: Via Giovanni Salvatori, 17, 05018 Orvieto Scalo TR, Italia
   - website: http://www.hotelpicchio.it/
8. **B&B CasaSelita** — Orvieto
   - slug: `b-b-casaselita-orvieto`
   - indirizzo: Str. di Porta Romana, 8, 05018 Orvieto TR, Italia
   - website: http://www.casaselita.com/
9. **B&B Il Giardino Di Venere‎ Bed and Breakfast Terni** — Orvieto
   - slug: `b-b-il-giardino-di-venere-bed-and-breakfast-tern-orvieto`
   - indirizzo: Str. di Cerreta, 5, 05100 Terni TR, Italia
   - website: http://www.ilgiardinodivenere.it/
10. **B&B Il Terrazzo** — Orvieto
   - slug: `b-b-il-terrazzo-orvieto`
   - indirizzo: Via Arno, 37/a, 05018 Orvieto TR, Italia
   - website: https://www.bebilterrazzo.it/
11. **B&B La Casa di Tufo** — Orvieto
   - slug: `b-b-la-casa-di-tufo-orvieto`
   - indirizzo: Via del Paradiso, 11, 05018 Orvieto TR, Italia
   - website: http://www.lacasaditufo.it/
12. **B&B LATTRAZIONEDELGECO** — Orvieto
   - slug: `b-b-lattrazionedelgeco-orvieto`
   - indirizzo: Cin: IT055032B407033513, B&B Lattrazionedelgeco, Str. di Collescipoli, 229, 05100 Terni TR, Italia
13. **B&B Michelangeli** — Orvieto
   - slug: `b-b-michelangeli-orvieto`
   - indirizzo: Via dei Saracinelli, 20, 05018 Orvieto TR, Italia
   - website: http://www.bbmichelangeli.com/
14. **B&B TORRE POLIDORI** — Orvieto
   - slug: `b-b-torre-polidori-orvieto`
   - indirizzo: Via Loggia dei Mercanti, 8, 05018 Orvieto TR, Italia
   - website: http://www.torrepolidoriorvieto.it/
15. **Bed and Breakfast “La Casa del Frenz”** — Orvieto
   - slug: `bed-and-breakfast-la-casa-del-frenz-orvieto`
   - indirizzo: Via Sesia, 2, 05018 Sferracavallo TR, Italia
16. **Casa Vèra Orvieto Affittacamere Appartamenti Centro Storico** — Orvieto
   - slug: `casa-vera-orvieto-affittacamere-appartamenti-cen-orvieto`
   - indirizzo: Vicolo Albani, 8, 05018 Orvieto TR, Italia
   - website: http://www.casaveraorvieto.it/
17. **Grand Hotel Italia** — Orvieto
   - slug: `grand-hotel-italia-orvieto`
   - indirizzo: Via di Piazza del Popolo, 13, 05018 Orvieto TR, Italia
   - website: http://www.grandhotelitalia.it/
18. **Hotel Posta** — Orvieto
   - slug: `hotel-posta-orvieto`
   - indirizzo: Via Luca Signorelli, 18, 05018 Orvieto TR, Italia
   - website: https://www.hotelpostaorvieto.it/
19. **Hotel Villa Acquafredda** — Orvieto
   - slug: `hotel-villa-acquafredda-orvieto`
   - indirizzo: Località Acquafredda, 1, 05018 Orvieto TR, Italia
   - website: https://hotel-villa-acquafredda.com.es/
20. **La Magnolia Orvieto** — Orvieto
   - slug: `la-magnolia-orvieto-orvieto`
   - indirizzo: Via del Duomo, 29, 05018 Orvieto TR, Italia
   - website: https://www.bblamagnolia.it/
21. **La Soffitta e La Torre Affittacamere** — Orvieto
   - slug: `la-soffitta-e-la-torre-affittacamere-orvieto`
   - indirizzo: Via del Popolo, 2, 05018 Orvieto TR, Italia
   - website: http://www.bandblasoffitta.com/
22. **Ripa Medici, Rooms and Suites** — Orvieto
   - slug: `ripa-medici-rooms-and-suites-orvieto`
   - indirizzo: Vicolo Ripa Medici, 14, 05018 Orvieto TR, Italia
   - website: http://www.ripamedici.com/
23. **Sant'Angelo 42** — Orvieto
   - slug: `sant-angelo-42-orvieto`
   - indirizzo: Via Sant'Angelo, 42, 05018 Orvieto TR, Italia
   - website: http://www.bborvieto.com/
24. **&And Hostel Hommachi East** — Osaka
   - slug: `and-hostel-hommachi-east-osaka`
   - indirizzo: 2-chōme-3-14 Tokiwamachi, Chuo Ward, Osaka, 540-0028
   - website: https://andhostel.jp/hommachieast/
25. **Best Western Plus Hotel Fino Osaka Kitahama** — Osaka
   - slug: `best-western-plus-hotel-fino-osaka-kitahama-osaka`
   - indirizzo: 1-chōme-7-17 Imabashi, Chuo Ward, Osaka, 541-0042
   - website: https://bwhotels.jp/osaka-kitahama
26. **Hotel Cordia Osaka Hommachi** — Osaka
   - slug: `hotel-cordia-osaka-hommachi-osaka`
   - indirizzo: 4-chōme-6-14 Honmachi, Chuo Ward, Osaka, 541-0053
   - website: https://cordia-osaka.com/hommachi/
27. **HOTEL FORZA OSAKA KITAHAMA** — Osaka
   - slug: `hotel-forza-osaka-kitahama-osaka`
   - indirizzo: 2-chōme-2-21 Imabashi, Chuo Ward, Osaka, 541-0042
   - website: https://www.hotelforza.jp/osakakitahama
28. **Hotel Hillarys Shinsaibashi** — Osaka
   - slug: `hotel-hillarys-shinsaibashi-osaka`
   - indirizzo: 1-chōme-17-11 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083
   - website: https://www.hotel-hillarys.com/shinsaibashi/
29. **Hotel Kansai** — Osaka
   - slug: `hotel-kansai-osaka`
   - indirizzo: 9-15 Toganochō, Kita Ward, Osaka, 530-0056
   - website: http://www.hotel-kansai.co.jp/
30. **Hotel Livemax Osaka-Yodoyabashi** — Osaka
   - slug: `hotel-livemax-osaka-yodoyabashi-osaka`
   - indirizzo: 2-chōme-6-9 Awajimachi, Chuo Ward, Osaka, 541-0047
   - website: https://www.hotel-livemax.com/osaka/yodoyabashi/
31. **HOTEL LiVEMAX Umeda Central** — Osaka
   - slug: `hotel-livemax-umeda-central-osaka`
   - indirizzo: 1-chōme-5-23 Sonezaki, Kita Ward, Osaka, 530-0057
   - website: https://www.hotel-livemax.com/osaka/umeda-central/
32. **Hotel Lore Shinsaibashi** — Osaka
   - slug: `hotel-lore-shinsaibashi-osaka`
   - indirizzo: 〒542-0082 Osaka, Chuo Ward, Shimanouchi, 1-chōme−18−８ 4F
   - website: https://hpdsp.jp/hotel-ekichika/
33. **Hotel Meldia Osaka Higobashi** — Osaka
   - slug: `hotel-meldia-osaka-higobashi-osaka`
   - indirizzo: 1-chōme-16-28 Edobori, Nishi Ward, Osaka, 550-0002
   - website: https://stay.rakuten.co.jp/urban/osaka-higobashi/
34. **HOTEL RESOL TRINITY OSAKA** — Osaka
   - slug: `hotel-resol-trinity-osaka-osaka`
   - indirizzo: 2-chōme-6-6 Kōraibashi, Chuo Ward, Osaka, 541-0043
   - website: https://www.resol-hotel.jp/trinity-osaka/
35. **HOTEL VINE OSAKA KITAHAMA** — Osaka
   - slug: `hotel-vine-osaka-kitahama-osaka`
   - indirizzo: 1-chōme-6-6 Hiranomachi, Chuo Ward, Osaka, 541-0046
   - website: https://hotelvine.jp/