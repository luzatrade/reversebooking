# Blocco 491/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **La Casa del Viandante** — Modena
   - slug: `la-casa-del-viandante-modena`
   - indirizzo: Via Emilia Ovest, 500, 41123 Modena MO, Italia
   - website: http://www.lacasadelviandante.it/
2. **La Corte Dei Sogni** — Modena
   - slug: `la-corte-dei-sogni-modena`
   - indirizzo: Stradello Romano, 8, 41122 Modena MO, Italia
   - website: http://www.lacortedeisogni.it/
3. **Loft Albinelli** — Modena
   - slug: `loft-albinelli-modena`
   - indirizzo: Via Luigi Albinelli, 40, 41121 Modena MO, Italia
   - website: https://protexstay.eu/loft-albinelli-modena
4. **Pisacane61** — Modena
   - slug: `pisacane61-modena`
   - indirizzo: Via Carlo Pisacane, 61, 41122 Modena MO, Italia
   - website: http://www.pisacane61.it/
5. **Residence Da Giò - B&B a Modena vicino all'Hesperia e al centro storico-Case Vacanze A Modena** — Modena
   - slug: `residence-da-gio-b-b-a-modena-vicino-all-hesperi-modena`
   - indirizzo: Via Archirola, 29, 41124 Modena MO, Italia
   - website: http://www.residencedagio.it/
6. **Room & breakfast canalino 21** — Modena
   - slug: `room-breakfast-canalino-21-modena`
   - indirizzo: Via Canalino, 21, 41121 Modena MO, Italia
   - website: http://www.bbcanalino21.com/
7. **Salotto delle Arti** — Modena
   - slug: `salotto-delle-arti-modena`
   - indirizzo: Rua del Muro, 86, 41121 Modena MO, Italia
   - website: http://www.salottodellearti.it/
8. **Villa Argiolas Bed & Breakfast** — Modena
   - slug: `villa-argiolas-bed-breakfast-modena`
   - indirizzo: Via Alessandro Argiolas, 34, 41126 Modena MO, Italia
   - website: https://villargiolas.it/
9. **villa sofia b&b** — Modena
   - slug: `villa-sofia-b-b-modena`
   - indirizzo: Via M. Bonacini, 6, 41121 Modena MO, Italia
10. **Bold Hotel München Zentrum** — Munich
   - slug: `bold-hotel-munchen-zentrum-munich`
   - indirizzo: Lindwurmstraße 70A, 80337 München-Ludwigsvorstadt-Isarvorstadt
   - website: https://bold-hotels.com/de/hotels/bold-muenchen-zentrum/
11. **Hotel Brack** — Munich
   - slug: `hotel-brack-munich`
   - indirizzo: Lindwurmstraße 153, 80337 München
   - website: http://www.hotel-brack.de/
12. **Hotel Eder** — Munich
   - slug: `hotel-eder-munich`
   - indirizzo: Zweigstraße 8, 80336 München-Ludwigsvorstadt-Isarvorstadt
   - website: http://www.hotel-eder.de/
13. **Hotel Europäischer Hof** — Munich
   - slug: `hotel-europaischer-hof-munich`
   - indirizzo: Bayerstraße 31, 80335 München-Ludwigsvorstadt-Isarvorstadt
   - website: https://heh.de/
14. **Hotel Excelsior Munich** — Munich
   - slug: `hotel-excelsior-munich-munich`
   - indirizzo: Schützenstr 11, 80335 München-Ludwigsvorstadt-Isarvorstadt
   - website: https://excelsior-hotel.de/
15. **Hotel Gio** — Munich
   - slug: `hotel-gio-munich`
   - indirizzo: Häberlstraße 9, 80337 München-Ludwigsvorstadt-Isarvorstadt
   - website: https://www.hotel-gio.de/
16. **Hotel Italia** — Munich
   - slug: `hotel-italia-munich`
   - indirizzo: Schillerstraße 19, 80336 München
   - website: http://www.hotelitalia.de/
17. **Hotel Mariandl** — Munich
   - slug: `hotel-mariandl-munich`
   - indirizzo: Goethestraße 51, 80336 München-Ludwigsvorstadt-Isarvorstadt
   - website: http://www.mariandl.com/
18. **Hotel S16** — Munich
   - slug: `hotel-s16-munich`
   - indirizzo: Schillerstraße 16, 80336 München
   - website: http://munichhotels16.com/
19. **Hotel Wallis** — Munich
   - slug: `hotel-wallis-munich`
   - indirizzo: Schwanthalerstraße 8, 80336 München
   - website: http://www.hotel-wallis.de/
20. **Hotel Westend - München** — Munich
   - slug: `hotel-westend-munchen-munich`
   - indirizzo: Schwanthalerstraße 121, 80339 München
   - website: https://www.westend-hotel.de/
21. **Koenigshof, a Luxury Collection Hotel, Munich** — Munich
   - slug: `koenigshof-a-luxury-collection-hotel-munich-munich`
   - indirizzo: Karlsplatz 25, 80335 München
   - website: https://www.marriott.com/en-us/hotels/muclk-koenigshof-a-luxury-collection-hotel-munich/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
22. **Munich Deluxe Hotel** — Munich
   - slug: `munich-deluxe-hotel-munich`
   - indirizzo: Schwanthalerstraße 116, 80339 München-Schwanthalerhöhe
   - website: http://hotelmunichdeluxe.de/
23. **Platzl Hotel** — Munich
   - slug: `platzl-hotel-munich`
   - indirizzo: Sparkassenstraße 10, 80331 München-Altstadt-Lehel
   - website: https://www.platzl.de/
24. **Schmellergarten** — Munich
   - slug: `schmellergarten-munich`
   - indirizzo: Schmellerstraße 20, 80337 München-Ludwigsvorstadt-Isarvorstadt
   - website: http://www.schmellergarten.de/
25. **1 Hotel Central Park** — New York
   - slug: `1-hotel-central-park-new-york`
   - indirizzo: 1414 6th Ave, New York, NY 10019
   - website: https://www.1hotels.com/central-park?utm_source=google-gbp&utm_medium=organic&utm_campaign=gbp
26. **Ameritania Hotel at Times Square** — New York
   - slug: `ameritania-hotel-at-times-square-new-york`
   - indirizzo: 230 W 54th St, New York, NY 10019
   - website: https://www.ameritanianyc.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing
27. **Belvedere Hotel** — New York
   - slug: `belvedere-hotel-new-york`
   - indirizzo: 319 W 48th St, New York, NY 10036
   - website: https://www.belvederehotelnyc.com/?utm_source=google&utm_medium=Local+SEO&utm_campaign=Google+Business+Profile
28. **Dream Midtown, by Hyatt** — New York
   - slug: `dream-midtown-by-hyatt-new-york`
   - indirizzo: 210 W 55th St, New York, NY 10019
   - website: https://www.hyatt.com/dream-hotels/en-US/nycdm-dream-midtown?src=corp_lclb_google_seo_nycdm&utm_source=google&utm_medium=organic&utm_campaign=lmr
29. **Hampton Inn Manhattan/Times Square Central** — New York
   - slug: `hampton-inn-manhattan-times-square-central-new-york`
   - indirizzo: 220 W 41st St, New York, NY 10036
   - website: https://www.hilton.com/en/hotels/nycffhx-hampton-manhattan-times-square-central/?SEO_id=GMB-AMER-HX-NYCFFHX&y_source=1_MjQ0MjgxOS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D
30. **Hilton Club The Central at 5th New York** — New York
   - slug: `hilton-club-the-central-at-5th-new-york-new-york`
   - indirizzo: 12 E 48th St, New York, NY 10017
   - website: https://www.hilton.com/en/hotels/nyckpgv-hilton-club-the-central-at-5th-new-york/?SEO_id=GMB-AMER-HH-NYCKPGV&y_source=1_MjUwNjU2MjAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D
31. **Hilton Garden Inn New York/Central Park South-Midtown West** — New York
   - slug: `hilton-garden-inn-new-york-central-park-south-mi-new-york`
   - indirizzo: 237 W 54th St, New York, NY 10019
   - website: https://www.hilton.com/en/hotels/nycwfgi-hilton-garden-inn-new-york-central-park-south-midtown-west/?SEO_id=GMB-AMER-GI-NYCWFGI&y_source=1_MjA4MzIzMC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D
32. **Hotel Riu Plaza New York Times Square** — New York
   - slug: `hotel-riu-plaza-new-york-times-square-new-york`
   - indirizzo: 305 W 46th St, New York, NY 10036
   - website: https://www.riu.com/en/hotel/united-states/new-york/hotel-riu-plaza-new-york-times-square?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=ZNY
33. **Paramount Times Square - A Generator Hotel** — New York
   - slug: `paramount-times-square-a-generator-hotel-new-york`
   - indirizzo: 235 W 46th St, New York, NY 10036
   - website: https://staygenerator.com/hotels/new-york/paramount-times-square?utm_source=google-my-business&utm_medium=organic&utm_campaign=paramount
34. **Park Central Hotel New York** — New York
   - slug: `park-central-hotel-new-york-new-york`
   - indirizzo: 870 7th Ave, New York, NY 10019
   - website: https://www.parkcentralny.com/?utm_source=google&utm_medium=organic&utm_campaign=googlelisting&utm_id=gmb
35. **Sanctuary Hotel New York** — New York
   - slug: `sanctuary-hotel-new-york-new-york`
   - indirizzo: 132 W 47th St, New York, NY 10036
   - website: http://www.sanctuaryhotelnyc.com/?utm_source=google&utm_medium=organic&utm_campaign=business_listing