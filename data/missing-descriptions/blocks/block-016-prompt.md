# Blocco 16/500 — 35 strutture senza descrizione IT

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

1. **b&b Il Lavatoio Dimora Storica** — Acquaviva d'Isernia
   - slug: `b-b-il-lavatoio-dimora-storica-acquaviva-d-isernia`
   - indirizzo: Via Paradiso, 18, 67031 Castel di Sangro AQ
2. **B&B La Torre dell'Orologio** — Acquaviva d'Isernia
   - slug: `b-b-la-torre-dell-orologio-acquaviva-d-isernia`
   - indirizzo: Via Castello, 12, 86080 Roccasicura IS
3. **B&B Noce Spagnola** — Acquaviva d'Isernia
   - slug: `b-b-noce-spagnola-acquaviva-d-isernia`
   - indirizzo: Via Garibaldi, 9, 86070 Rocchetta a Volturno IS
4. **B&B Tenuta Belvedere** — Acquaviva d'Isernia
   - slug: `b-b-tenuta-belvedere-acquaviva-d-isernia`
   - indirizzo: Via S. Rocco, 1, 86070 Fornelli IS
5. **B&B Villa Maria Paola Isernia** — Acquaviva d'Isernia
   - slug: `b-b-villa-maria-paola-isernia-acquaviva-d-isernia`
   - indirizzo: Contrada Pezzelle, Via Colle Roseto, 10, 86170 Isernia IS
6. **Bactaria - Bed and Breakfast** — Acquaviva d'Isernia
   - slug: `bactaria-bed-and-breakfast-acquaviva-d-isernia`
   - indirizzo: Via Madonna delle Grotte, 86070 Rocchetta a Volturno IS
7. **Borgo Donna Teresa** — Acquaviva d'Isernia
   - slug: `borgo-donna-teresa-acquaviva-d-isernia`
   - indirizzo: Localita, Via S. Nicola, 86071 Castel San Vincenzo IS
8. **Borgo La Forgia** — Acquaviva d'Isernia
   - slug: `borgo-la-forgia-acquaviva-d-isernia`
   - indirizzo: Piazzetta Mario Funaro, 2, 86080 Roccasicura IS
9. **Masseria Monte Pizzi** — Acquaviva d'Isernia
   - slug: `masseria-monte-pizzi-acquaviva-d-isernia`
   - indirizzo: Via Vaglie, 40, 40, 86083 Carovilli IS
10. **Palazzo De' Farrocco** — Acquaviva d'Isernia
   - slug: `palazzo-de-farrocco-acquaviva-d-isernia`
   - indirizzo: Piazza S. Anna, 1, 86072 Cerro al Volturno IS
11. **Residenza Marcelli** — Acquaviva d'Isernia
   - slug: `residenza-marcelli-acquaviva-d-isernia`
   - indirizzo: Corso Marcelli, 300, 86170 Isernia IS
12. **Sport Village Hotel & Spa** — Acquaviva d'Isernia
   - slug: `sport-village-hotel-spa-acquaviva-d-isernia`
   - indirizzo: Piazza del Mezzogiorno, 6, 67031 Castel di Sangro AQ
13. **Albertario | B&B e Affittacamere** — Acquaviva delle Fonti
   - slug: `albertario-b-b-e-affittacamere-acquaviva-delle-fonti`
   - indirizzo: Piazza Don Albertario, 16, 70021 Acquaviva delle Fonti BA
14. **Altrove Bed&Breakfast** — Acquaviva delle Fonti
   - slug: `altrove-bed-breakfast-acquaviva-delle-fonti`
   - indirizzo: Vico II Piergentile, 16, 70021 Acquaviva delle Fonti BA
15. **Aqua - Letto e Colazione** — Acquaviva delle Fonti
   - slug: `aqua-letto-e-colazione-acquaviva-delle-fonti`
   - indirizzo: Via Giulio Cafaro 1, Estramurale S. Pietro, 83, 70021 Acquaviva delle Fonti BA
16. **B&B Bellini Appartamento** — Acquaviva delle Fonti
   - slug: `b-b-bellini-appartamento-acquaviva-delle-fonti`
   - indirizzo: Via Roberto Colaninno, 51, 70021 Acquaviva delle Fonti BA
17. **B&B dell'Orologio** — Acquaviva delle Fonti
   - slug: `b-b-dell-orologio-acquaviva-delle-fonti`
   - indirizzo: Via Giovanni Squicciarini, 9, 70021 Acquaviva delle Fonti BA
18. **B&B La Stazione** — Acquaviva delle Fonti
   - slug: `b-b-la-stazione-acquaviva-delle-fonti`
   - indirizzo: Via Giovanni XXIII, 61, 70021 Acquaviva delle Fonti BA
19. **B&B PIAZZA KOLBE** — Acquaviva delle Fonti
   - slug: `b-b-piazza-kolbe-acquaviva-delle-fonti`
   - indirizzo: Via Massimiliano Kolbe, 3, 70021 Acquaviva delle Fonti BA
20. **B&B Terraeccellente Italia** — Acquaviva delle Fonti
   - slug: `b-b-terraeccellente-italia-acquaviva-delle-fonti`
   - indirizzo: Estramurale Giovanni Battista Molignani, 26, 70021 Acquaviva delle Fonti BA
21. **Boutique Hotel Casa Del Teatro** — Acquaviva delle Fonti
   - slug: `boutique-hotel-casa-del-teatro-acquaviva-delle-fonti`
   - indirizzo: Via Mele, 5, 70021 Acquaviva delle Fonti BA
22. **Garibaldi House - B&B Luxury** — Acquaviva delle Fonti
   - slug: `garibaldi-house-b-b-luxury-acquaviva-delle-fonti`
   - indirizzo: Piazza Giuseppe Garibaldi, 18/primo piano, 70021 Acquaviva delle Fonti BA
23. **HYDRIA GUEST HOUSE ART GALLERY** — Acquaviva delle Fonti
   - slug: `hydria-guest-house-art-gallery-acquaviva-delle-fonti`
   - indirizzo: Via Pozzo Contella, 9, 70021 Acquaviva delle Fonti BA
24. **Il rifugio di Vaaz** — Acquaviva delle Fonti
   - slug: `il-rifugio-di-vaaz-acquaviva-delle-fonti`
   - indirizzo: Via Francesco Paolo Dalfino, 36, 70010 Sammichele di Bari BA
25. **Interno 4 - Maselli** — Acquaviva delle Fonti
   - slug: `interno-4-maselli-acquaviva-delle-fonti`
   - indirizzo: Via Sebastiano di Chio, 12, 70021 Acquaviva delle Fonti BA
26. **Italians B&B Luxury Suite** — Acquaviva delle Fonti
   - slug: `italians-b-b-luxury-suite-acquaviva-delle-fonti`
   - indirizzo: Via Arco Tampoia, 9, 70021 Acquaviva delle Fonti BA
27. **Mirò B&B** — Acquaviva delle Fonti
   - slug: `miro-b-b-acquaviva-delle-fonti`
   - indirizzo: Via Martiri delle Foibe, 1, 70021 Acquaviva delle Fonti BA
28. **Nel Vicoletto** — Acquaviva delle Fonti
   - slug: `nel-vicoletto-acquaviva-delle-fonti`
   - indirizzo: Via Ugo Foscolo, 1, 70020 Cassano delle Murge BA
29. **Palace B&B** — Acquaviva delle Fonti
   - slug: `palace-b-b-acquaviva-delle-fonti`
   - indirizzo: Via Roma, 7, 70021 Acquaviva delle Fonti BA
30. **Pumo Home - Apulian Luxury Rooms** — Acquaviva delle Fonti
   - slug: `pumo-home-apulian-luxury-rooms-acquaviva-delle-fonti`
   - indirizzo: Via Francesco Cirillo, 20, 70021 Acquaviva delle Fonti BA
31. **Supriani Luxury Bed & Breakfast** — Acquaviva delle Fonti
   - slug: `supriani-luxury-bed-breakfast-acquaviva-delle-fonti`
   - indirizzo: Via Francesco, Via Supriani, 42, 70021 Acquaviva delle Fonti BA
32. **Tenuta Gentile Resort & Spa** — Acquaviva delle Fonti
   - slug: `tenuta-gentile-resort-spa-acquaviva-delle-fonti`
   - indirizzo: Via S. Antonio Abate, 2, 70020 Cassano delle Murge BA
33. **AFFITTACAMERE VILLA SANTA LUCIA** — Acquaviva Picena
   - slug: `affittacamere-villa-santa-lucia-acquaviva-picena`
   - indirizzo: Via Santa Lucia, 6, 63074 San Benedetto del Tronto AP
34. **Agriturismo Aqua Viva** — Acquaviva Picena
   - slug: `agriturismo-aqua-viva-acquaviva-picena`
   - indirizzo: Via Santa Caterina, 8, 63075 Acquaviva Picena AP
35. **B&B Il Giardino Mediterraneo** — Acquaviva Picena
   - slug: `b-b-il-giardino-mediterraneo-acquaviva-picena`
   - indirizzo: Via Carlo Alberto Dalla Chiesa, 58, 63075 Acquaviva Picena AP