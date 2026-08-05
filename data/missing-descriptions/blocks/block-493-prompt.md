# Blocco 493/500 — 35 strutture senza descrizione IT
Genera description (IT, narrativa ~120–200 parole) e description_en (EN, Property Overview style) per ogni hotel.
Output finale: JSON array come block-002-updates.json con slug, description, description_en, indirizzo.
## Strutture
1. **Premier Hotel -CABIN PRESIDENT- Osaka** — Osaka
   - slug: `premier-hotel-cabin-president-osaka-osaka`
   - indirizzo: 1-chōme-3-19 Minamimorimachi, Kita Ward, Osaka, 530-0054
   - website: https://cabin.kenhotels.com/osaka/
2. **Smile Hotel Osaka Yotsubashi** — Osaka
   - slug: `smile-hotel-osaka-yotsubashi-osaka`
   - indirizzo: 1-chōme-4-12 Shinmachi, Nishi Ward, Osaka, 550-0013
   - website: https://smile-hotels.com/hotels/show/osakayotsubashi
3. **The Royal Park Hotel Iconic Osaka-Midosuji** — Osaka
   - slug: `the-royal-park-hotel-iconic-osaka-midosuji-osaka`
   - indirizzo: 〒541-0046 Osaka, Chuo Ward, Hiranomachi, 4-chōme−2−３ 15F
   - website: https://www.royalparkhotels.co.jp/ic/osakamidosuji/
4. **Britannique Hotel - Paris Centre** — Paris
   - slug: `britannique-hotel-paris-centre-paris`
   - indirizzo: 20 Av. Victoria, 75001 Paris
   - website: https://hotel-britannique.fr/
5. **Europe Saint Séverin Hotel - Paris Centre** — Paris
   - slug: `europe-saint-severin-hotel-paris-centre-paris`
   - indirizzo: 38-40 Rue Saint-Séverin, 75005 Paris
   - website: http://www.hoteleurope.net/
6. **Grand Hôtel de Paris** — Paris
   - slug: `grand-hotel-de-paris-paris`
   - indirizzo: 72 Bd de Strasbourg, 75010 Paris
   - website: https://www.grand-hotel-paris.com/
7. **Hôtel du Centre** — Paris
   - slug: `hotel-du-centre-paris`
   - indirizzo: 112 Rue de Charenton, 75012 Paris
8. **Hôtel du Centre - hôtel Paris Amore** — Paris
   - slug: `hotel-du-centre-hotel-paris-amore-paris`
   - indirizzo: 63 Rue du Faubourg du Temple, 75010 Paris
9. **Hotel du Sentier** — Paris
   - slug: `hotel-du-sentier-paris`
   - indirizzo: 48 Rue du Caire, 75002 Paris
   - website: https://hoteldusentier.com/
10. **Hôtel Duo** — Paris
   - slug: `hotel-duo-paris`
   - indirizzo: 11 Rue du Temple, 75004 Paris
   - website: http://www.duo-paris.com/
11. **Hôtel Elixir Paris** — Paris
   - slug: `hotel-elixir-paris-paris`
   - indirizzo: 7 Rue Jean Lantier, 75001 Paris
   - website: http://hotelelixir.com/
12. **Hotel La Ville** — Paris
   - slug: `hotel-la-ville-paris`
   - indirizzo: 70 Rue de Rivoli, 75004 Paris
13. **Hôtel Le 123 Sébastopol - Astotel** — Paris
   - slug: `hotel-le-123-sebastopol-astotel-paris`
   - indirizzo: 123 Bd de Sébastopol, 75002 Paris
   - website: https://www.astotel.com/hotel/hotel-le-123-sebastopol/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness_123sebastopol
14. **Hôtel Les Rives Oceanik** — Paris
   - slug: `hotel-les-rives-oceanik-paris`
   - indirizzo: 29 Rue Gay-Lussac, 75005 Paris
   - website: https://www.lesrivesoceanik.com/fr/
15. **Hôtel Maison Mère** — Paris
   - slug: `hotel-maison-mere-paris`
   - indirizzo: 7 Rue Mayran, 75009 Paris
   - website: https://www.maisonmere.co/
16. **Hôtel Malte - Astotel** — Paris
   - slug: `hotel-malte-astotel-paris`
   - indirizzo: 63 Rue de Richelieu, 75002 Paris
   - website: https://www.astotel.com/hotel/hotel-malte/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness_malte
17. **Hôtel National des Arts et Métiers** — Paris
   - slug: `hotel-national-des-arts-et-metiers-paris`
   - indirizzo: 243 Rue Saint-Martin, 75003 Paris
   - website: http://www.hotelnational.paris/
18. **Hôtel Novotel Paris les Halles** — Paris
   - slug: `hotel-novotel-paris-les-halles-paris`
   - indirizzo: 8 Pl. Marguerite de Navarre, 75001 Paris
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=0785&merchantid=seo-maps-FR-0785&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
19. **SO/ Paris Hotel** — Paris
   - slug: `so-paris-hotel-paris`
   - indirizzo: 10 Rue Agrippa d'Aubigné, 75004 Paris
   - website: https://so-hotels.com/en/paris/?utm_source=google&utm_medium=organic&utm_campaign=gmb-website&utm_content=website_button
20. **Arco Hotel Phuket Town** — Phuket
   - slug: `arco-hotel-phuket-town-phuket`
   - indirizzo: 3, 51 Soi Talingchan, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://www.arcophukettown.com/
21. **B2 Phuket Boutique & Budget Hotel** — Phuket
   - slug: `b2-phuket-boutique-budget-hotel-phuket`
   - indirizzo: 9, 45 Thep Krasattri Rd, Tambon Ratsada, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://www.b2hotel.com/phuket/b2-phuket-boutique-budget-hotel/
22. **Courtyard by Marriott Phuket Town** — Phuket
   - slug: `courtyard-by-marriott-phuket-town-phuket`
   - indirizzo: 1 Soi Surin, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://www.marriott.com/en-us/hotels/hktct-courtyard-phuket-town/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0
23. **Dara Hotel** — Phuket
   - slug: `dara-hotel-phuket`
   - indirizzo: 14/18,14/21 ถนน เจ้าฟ้าตะวันออก Tambon Wichit, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://www.daraphuket.com/
24. **Horange Phuket Town** — Phuket
   - slug: `horange-phuket-town-phuket`
   - indirizzo: 57/3-9, Phuket Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://horange.getguest.co/
25. **Hotel Midtown Ratsada** — Phuket
   - slug: `hotel-midtown-ratsada-phuket`
   - indirizzo: 62/9-20 Thanon Ratsada, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://midtownratsada.com/
26. **Ibis Styles Phuket City** — Phuket
   - slug: `ibis-styles-phuket-city-phuket`
   - indirizzo: 23 Thavornwogwong Road, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9929&merchantid=seo-maps-TH-9929&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
27. **Isara Boutique Hotel and Café** — Phuket
   - slug: `isara-boutique-hotel-and-cafe-phuket`
   - indirizzo: 72 Krabi, Tambon Talat Nuea, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://isaraboutiquehotelandcafe.zoombookdirect.com/?utm_source=googlemybusiness&utm_medium=organic&utm_campaign=google_my_business
28. **Novotel Phuket City Phokeethra** — Phuket
   - slug: `novotel-phuket-city-phokeethra-phuket`
   - indirizzo: 40, 5 Chanajaroen Road, Tambon Talat Yai, Amphur Muang, Chang Wat Phuket 83000
   - website: https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9932&merchantid=seo-maps-TH-9932&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps
29. **Pearl Hotel Phuket** — Phuket
   - slug: `pearl-hotel-phuket-phuket`
   - indirizzo: 42 Montri Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://www.pearlhotelphuket.com/?utm_source=instagram&utm_medium=organic_social
30. **Royal Phuket City Hotel** — Phuket
   - slug: `royal-phuket-city-hotel-phuket`
   - indirizzo: 154 Phangnga Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://www.royalphuketcity.com/
31. **Sino House Phuket Hotel** — Phuket
   - slug: `sino-house-phuket-hotel-phuket`
   - indirizzo: 1 Montri Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://sinohousephuket.com/
32. **Sound Gallery House** — Phuket
   - slug: `sound-gallery-house-phuket`
   - indirizzo: 33/6 Vichitsongkram Rd, Tambon Talat Nuea, Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: https://www.soundgalleryhouse.com/
33. **The Blanket Hotel @phuket town** — Phuket
   - slug: `the-blanket-hotel-phuket-town-phuket`
   - indirizzo: 95 15-21 Montri Rd, Talad Yhai District Amphoe Mueang Phuket, Chang Wat Phuket 83000
   - website: http://www.theblankethotels.com/
34. **The Tint At Phuket Town** — Phuket
   - slug: `the-tint-at-phuket-town-phuket`
   - indirizzo: 2, 11 Thanon Dibuk, Tambon Talat Yai, Maung, Chang Wat Phuket 83000
   - website: http://www.thetintphuket.com/
35. **Eight Hotel Portofino, an SLH Hotel** — Portofino
   - slug: `eight-hotel-portofino-an-slh-hotel-portofino`
   - indirizzo: Via del Fondaco, 11, 16034 Portofino GE
   - website: https://portofino.eighthotels.it/