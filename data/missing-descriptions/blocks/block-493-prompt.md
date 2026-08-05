# Blocco 493/500 — 35 strutture senza descrizione IT

Compila descrizioni SEO per HotelsDrop.com.

## Regole obbligatorie (NON inventare)

1. **Solo informazioni verificabili** da fonti ufficiali o affidabili:
   - sito ufficiale della struttura
   - pagina Google Business / Maps della struttura
   - pagine ufficiali di catena/franchising
2. **VIETATO inventare**: servizi, stelle, premi, distanze, storia, ristrutturazioni, Michelin, piscine/spa se non confermate.
3. Se **non trovi** testo descrittivo sufficiente e verificabile:
   - **NON** compila `description` né `description_en`
   - aggiungi la struttura in `not_found` con motivo breve (es. "sito assente", "solo nome su OTA", "dati insufficienti")
4. Se trovi solo testo in inglese: `description_en` = adattamento fedele; `description` = traduzione fedele (non creativa).
5. Se trovi solo testo in italiano: `description` = fedele; `description_en` = traduzione fedele.
6. Lunghezza quando presente: ~120–200 parole per lingua, tono hospitality professionale.
7. Puoi menzionare HotelsDrop solo in chiusura (1 frase): richiesta gratuita, offerte dirette, zero commissioni per chi viaggia — **solo** se il resto del testo è reale.

## Formato output (JSON strict)

Rispondi **solo** con un oggetto JSON (no markdown fence):

{
  "updates": [
    {
      "slug": "slug-esatto",
      "indirizzo": "indirizzo verificato o seed",
      "description": "testo IT solo se verificato",
      "description_en": "testo EN solo se verificato",
      "sources": ["https://sito-ufficiale...", "https://..."]
    }
  ],
  "not_found": [
    {
      "slug": "slug-esatto",
      "nome": "Nome struttura",
      "city_name": "Città",
      "reason": "motivo sintetico"
    }
  ]
}

- In `updates`: **solo** strutture con almeno `description` O `description_en` verificati (idealmente entrambi).
- In `not_found`: **tutte** le strutture del blocco senza testo verificabile.
- Ogni struttura del blocco deve comparire in `updates` O in `not_found` (non omettere righe).

## Strutture del blocco

1. **Premier Hotel -CABIN PRESIDENT- Osaka** — Osaka
   - slug: `premier-hotel-cabin-president-osaka-osaka`
   - indirizzo: 1-chōme-3-19 Minamimorimachi, Kita Ward, Osaka, 530-0054
2. **Smile Hotel Osaka Yotsubashi** — Osaka
   - slug: `smile-hotel-osaka-yotsubashi-osaka`
   - indirizzo: 1-chōme-4-12 Shinmachi, Nishi Ward, Osaka, 550-0013
3. **The Royal Park Hotel Iconic Osaka-Midosuji** — Osaka
   - slug: `the-royal-park-hotel-iconic-osaka-midosuji-osaka`
   - indirizzo: 〒541-0046 Osaka, Chuo Ward, Hiranomachi, 4-chōme−2−３ 15F
4. **Britannique Hotel - Paris Centre** — Paris
   - slug: `britannique-hotel-paris-centre-paris`
   - indirizzo: 20 Av. Victoria, 75001 Paris
5. **Europe Saint Séverin Hotel - Paris Centre** — Paris
   - slug: `europe-saint-severin-hotel-paris-centre-paris`
   - indirizzo: 38-40 Rue Saint-Séverin, 75005 Paris
6. **Grand Hôtel de Paris** — Paris
   - slug: `grand-hotel-de-paris-paris`
   - indirizzo: 72 Bd de Strasbourg, 75010 Paris
7. **Hôtel du Centre** — Paris
   - slug: `hotel-du-centre-paris`
   - indirizzo: 112 Rue de Charenton, 75012 Paris
8. **Hôtel du Centre - hôtel Paris Amore** — Paris
   - slug: `hotel-du-centre-hotel-paris-amore-paris`
   - indirizzo: 63 Rue du Faubourg du Temple, 75010 Paris
9. **Hotel du Sentier** — Paris
   - slug: `hotel-du-sentier-paris`
   - indirizzo: 48 Rue du Caire, 75002 Paris
10. **Hôtel Duo** — Paris
   - slug: `hotel-duo-paris`
   - indirizzo: 11 Rue du Temple, 75004 Paris
11. **Hôtel Elixir Paris** — Paris
   - slug: `hotel-elixir-paris-paris`
   - indirizzo: 7 Rue Jean Lantier, 75001 Paris
12. **Hotel La Ville** — Paris
   - slug: `hotel-la-ville-paris`
   - indirizzo: 70 Rue de Rivoli, 75004 Paris
13. **Hôtel Le 123 Sébastopol - Astotel** — Paris
   - slug: `hotel-le-123-sebastopol-astotel-paris`
   - indirizzo: 123 Bd de Sébastopol, 75002 Paris
14. **Hôtel Les Rives Oceanik** — Paris
   - slug: `hotel-les-rives-oceanik-paris`
   - indirizzo: 29 Rue Gay-Lussac, 75005 Paris
15. **Hôtel Maison Mère** — Paris
   - slug: `hotel-maison-mere-paris`
   - indirizzo: 7 Rue Mayran, 75009 Paris
16. **Hôtel Malte - Astotel** — Paris
   - slug: `hotel-malte-astotel-paris`
   - indirizzo: 63 Rue de Richelieu, 75002 Paris
17. **Hôtel National des Arts et Métiers** — Paris
   - slug: `hotel-national-des-arts-et-metiers-paris`
   - indirizzo: 243 Rue Saint-Martin, 75003 Paris
18. **Hôtel Novotel Paris les Halles** — Paris
   - slug: `hotel-novotel-paris-les-halles-paris`
   - indirizzo: 8 Pl. Marguerite de Navarre, 75001 Paris
19. **SO/ Paris Hotel** — Paris
   - slug: `so-paris-hotel-paris`
   - indirizzo: 10 Rue Agrippa d'Aubigné, 75004 Paris
20. **Arco Hotel Phuket Town** — Phuket
   - slug: `arco-hotel-phuket-town-phuket`
   - indirizzo: 3, 51 Soi Talingchan, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
21. **B2 Phuket Boutique & Budget Hotel** — Phuket
   - slug: `b2-phuket-boutique-budget-hotel-phuket`
   - indirizzo: 9, 45 Thep Krasattri Rd, Tambon Ratsada, Amphoe Mueang Phuket, Chang Wat Phuket 83000
22. **Courtyard by Marriott Phuket Town** — Phuket
   - slug: `courtyard-by-marriott-phuket-town-phuket`
   - indirizzo: 1 Soi Surin, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
23. **Dara Hotel** — Phuket
   - slug: `dara-hotel-phuket`
   - indirizzo: 14/18,14/21 ถนน เจ้าฟ้าตะวันออก Tambon Wichit, Amphoe Mueang Phuket, Chang Wat Phuket 83000
24. **Horange Phuket Town** — Phuket
   - slug: `horange-phuket-town-phuket`
   - indirizzo: 57/3-9, Phuket Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
25. **Hotel Midtown Ratsada** — Phuket
   - slug: `hotel-midtown-ratsada-phuket`
   - indirizzo: 62/9-20 Thanon Ratsada, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
26. **Ibis Styles Phuket City** — Phuket
   - slug: `ibis-styles-phuket-city-phuket`
   - indirizzo: 23 Thavornwogwong Road, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
27. **Isara Boutique Hotel and Café** — Phuket
   - slug: `isara-boutique-hotel-and-cafe-phuket`
   - indirizzo: 72 Krabi, Tambon Talat Nuea, Amphoe Mueang Phuket, Chang Wat Phuket 83000
28. **Novotel Phuket City Phokeethra** — Phuket
   - slug: `novotel-phuket-city-phokeethra-phuket`
   - indirizzo: 40, 5 Chanajaroen Road, Tambon Talat Yai, Amphur Muang, Chang Wat Phuket 83000
29. **Pearl Hotel Phuket** — Phuket
   - slug: `pearl-hotel-phuket-phuket`
   - indirizzo: 42 Montri Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
30. **Royal Phuket City Hotel** — Phuket
   - slug: `royal-phuket-city-hotel-phuket`
   - indirizzo: 154 Phangnga Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
31. **Sino House Phuket Hotel** — Phuket
   - slug: `sino-house-phuket-hotel-phuket`
   - indirizzo: 1 Montri Rd, Tambon Talat Yai, Amphoe Mueang Phuket, Chang Wat Phuket 83000
32. **Sound Gallery House** — Phuket
   - slug: `sound-gallery-house-phuket`
   - indirizzo: 33/6 Vichitsongkram Rd, Tambon Talat Nuea, Amphoe Mueang Phuket, Chang Wat Phuket 83000
33. **The Blanket Hotel @phuket town** — Phuket
   - slug: `the-blanket-hotel-phuket-town-phuket`
   - indirizzo: 95 15-21 Montri Rd, Talad Yhai District Amphoe Mueang Phuket, Chang Wat Phuket 83000
34. **The Tint At Phuket Town** — Phuket
   - slug: `the-tint-at-phuket-town-phuket`
   - indirizzo: 2, 11 Thanon Dibuk, Tambon Talat Yai, Maung, Chang Wat Phuket 83000
35. **Eight Hotel Portofino, an SLH Hotel** — Portofino
   - slug: `eight-hotel-portofino-an-slh-hotel-portofino`
   - indirizzo: Via del Fondaco, 11, 16034 Portofino GE