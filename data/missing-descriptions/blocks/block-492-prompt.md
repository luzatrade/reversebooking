# Blocco 492/500 — 35 strutture senza descrizione IT

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

1. **The Manhattan at Times Square Hotel** — New York
   - slug: `the-manhattan-at-times-square-hotel-new-york`
   - indirizzo: 790 7th Ave, New York, NY 10019
2. **The Westin New York at Times Square** — New York
   - slug: `the-westin-new-york-at-times-square-new-york`
   - indirizzo: 270 W 43rd St, New York, NY 10036
3. **Thompson Central Park New York, by Hyatt** — New York
   - slug: `thompson-central-park-new-york-by-hyatt-new-york`
   - indirizzo: 119 W 56th St, New York, NY 10019
4. **Warwick New York** — New York
   - slug: `warwick-new-york-new-york`
   - indirizzo: 65 W 54th St, New York, NY 10019
5. **Affittacamere La Piazzetta** — Orvieto
   - slug: `affittacamere-la-piazzetta-orvieto`
   - indirizzo: Via Angelo da Orvieto, 10, 05018 Orvieto TR, Italia
6. **Affittacamere La Rosa di Orvieto** — Orvieto
   - slug: `affittacamere-la-rosa-di-orvieto-orvieto`
   - indirizzo: Via Adda, 14, 05018 Orvieto TR, Italia
7. **Albergo Picchio** — Orvieto
   - slug: `albergo-picchio-orvieto`
   - indirizzo: Via Giovanni Salvatori, 17, 05018 Orvieto Scalo TR, Italia
8. **B&B CasaSelita** — Orvieto
   - slug: `b-b-casaselita-orvieto`
   - indirizzo: Str. di Porta Romana, 8, 05018 Orvieto TR, Italia
9. **B&B Il Giardino Di Venere‎ Bed and Breakfast Terni** — Orvieto
   - slug: `b-b-il-giardino-di-venere-bed-and-breakfast-tern-orvieto`
   - indirizzo: Str. di Cerreta, 5, 05100 Terni TR, Italia
10. **B&B Il Terrazzo** — Orvieto
   - slug: `b-b-il-terrazzo-orvieto`
   - indirizzo: Via Arno, 37/a, 05018 Orvieto TR, Italia
11. **B&B La Casa di Tufo** — Orvieto
   - slug: `b-b-la-casa-di-tufo-orvieto`
   - indirizzo: Via del Paradiso, 11, 05018 Orvieto TR, Italia
12. **B&B LATTRAZIONEDELGECO** — Orvieto
   - slug: `b-b-lattrazionedelgeco-orvieto`
   - indirizzo: Cin: IT055032B407033513, B&B Lattrazionedelgeco, Str. di Collescipoli, 229, 05100 Terni TR, Italia
13. **B&B Michelangeli** — Orvieto
   - slug: `b-b-michelangeli-orvieto`
   - indirizzo: Via dei Saracinelli, 20, 05018 Orvieto TR, Italia
14. **B&B TORRE POLIDORI** — Orvieto
   - slug: `b-b-torre-polidori-orvieto`
   - indirizzo: Via Loggia dei Mercanti, 8, 05018 Orvieto TR, Italia
15. **Bed and Breakfast “La Casa del Frenz”** — Orvieto
   - slug: `bed-and-breakfast-la-casa-del-frenz-orvieto`
   - indirizzo: Via Sesia, 2, 05018 Sferracavallo TR, Italia
16. **Casa Vèra Orvieto Affittacamere Appartamenti Centro Storico** — Orvieto
   - slug: `casa-vera-orvieto-affittacamere-appartamenti-cen-orvieto`
   - indirizzo: Vicolo Albani, 8, 05018 Orvieto TR, Italia
17. **Grand Hotel Italia** — Orvieto
   - slug: `grand-hotel-italia-orvieto`
   - indirizzo: Via di Piazza del Popolo, 13, 05018 Orvieto TR, Italia
18. **Hotel Posta** — Orvieto
   - slug: `hotel-posta-orvieto`
   - indirizzo: Via Luca Signorelli, 18, 05018 Orvieto TR, Italia
19. **Hotel Villa Acquafredda** — Orvieto
   - slug: `hotel-villa-acquafredda-orvieto`
   - indirizzo: Località Acquafredda, 1, 05018 Orvieto TR, Italia
20. **La Magnolia Orvieto** — Orvieto
   - slug: `la-magnolia-orvieto-orvieto`
   - indirizzo: Via del Duomo, 29, 05018 Orvieto TR, Italia
21. **La Soffitta e La Torre Affittacamere** — Orvieto
   - slug: `la-soffitta-e-la-torre-affittacamere-orvieto`
   - indirizzo: Via del Popolo, 2, 05018 Orvieto TR, Italia
22. **Ripa Medici, Rooms and Suites** — Orvieto
   - slug: `ripa-medici-rooms-and-suites-orvieto`
   - indirizzo: Vicolo Ripa Medici, 14, 05018 Orvieto TR, Italia
23. **Sant'Angelo 42** — Orvieto
   - slug: `sant-angelo-42-orvieto`
   - indirizzo: Via Sant'Angelo, 42, 05018 Orvieto TR, Italia
24. **&And Hostel Hommachi East** — Osaka
   - slug: `and-hostel-hommachi-east-osaka`
   - indirizzo: 2-chōme-3-14 Tokiwamachi, Chuo Ward, Osaka, 540-0028
25. **Best Western Plus Hotel Fino Osaka Kitahama** — Osaka
   - slug: `best-western-plus-hotel-fino-osaka-kitahama-osaka`
   - indirizzo: 1-chōme-7-17 Imabashi, Chuo Ward, Osaka, 541-0042
26. **Hotel Cordia Osaka Hommachi** — Osaka
   - slug: `hotel-cordia-osaka-hommachi-osaka`
   - indirizzo: 4-chōme-6-14 Honmachi, Chuo Ward, Osaka, 541-0053
27. **HOTEL FORZA OSAKA KITAHAMA** — Osaka
   - slug: `hotel-forza-osaka-kitahama-osaka`
   - indirizzo: 2-chōme-2-21 Imabashi, Chuo Ward, Osaka, 541-0042
28. **Hotel Hillarys Shinsaibashi** — Osaka
   - slug: `hotel-hillarys-shinsaibashi-osaka`
   - indirizzo: 1-chōme-17-11 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083
29. **Hotel Kansai** — Osaka
   - slug: `hotel-kansai-osaka`
   - indirizzo: 9-15 Toganochō, Kita Ward, Osaka, 530-0056
30. **Hotel Livemax Osaka-Yodoyabashi** — Osaka
   - slug: `hotel-livemax-osaka-yodoyabashi-osaka`
   - indirizzo: 2-chōme-6-9 Awajimachi, Chuo Ward, Osaka, 541-0047
31. **HOTEL LiVEMAX Umeda Central** — Osaka
   - slug: `hotel-livemax-umeda-central-osaka`
   - indirizzo: 1-chōme-5-23 Sonezaki, Kita Ward, Osaka, 530-0057
32. **Hotel Lore Shinsaibashi** — Osaka
   - slug: `hotel-lore-shinsaibashi-osaka`
   - indirizzo: 〒542-0082 Osaka, Chuo Ward, Shimanouchi, 1-chōme−18−８ 4F
33. **Hotel Meldia Osaka Higobashi** — Osaka
   - slug: `hotel-meldia-osaka-higobashi-osaka`
   - indirizzo: 1-chōme-16-28 Edobori, Nishi Ward, Osaka, 550-0002
34. **HOTEL RESOL TRINITY OSAKA** — Osaka
   - slug: `hotel-resol-trinity-osaka-osaka`
   - indirizzo: 2-chōme-6-6 Kōraibashi, Chuo Ward, Osaka, 541-0043
35. **HOTEL VINE OSAKA KITAHAMA** — Osaka
   - slug: `hotel-vine-osaka-kitahama-osaka`
   - indirizzo: 1-chōme-6-6 Hiranomachi, Chuo Ward, Osaka, 541-0046