# Blocco 129/500 — 35 strutture senza descrizione IT

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

1. **B&B L'antico Rudere** — Aprigliano
   - slug: `b-b-l-antico-rudere-aprigliano`
   - indirizzo: Via Donato Bendicenti, 14, 87100 Cosenza CS
2. **B&B Le Ortensie** — Aprigliano
   - slug: `b-b-le-ortensie-aprigliano`
   - indirizzo: Viale della Repubblica, 143/scala B, 87100 Cosenza CS
3. **B&B Sasso** — Aprigliano
   - slug: `b-b-sasso-aprigliano`
   - indirizzo: Via Alberico Talarico, 11, 87100 Cosenza CS
4. **B&B The Dream** — Aprigliano
   - slug: `b-b-the-dream-aprigliano`
   - indirizzo: Via Pasquale Rossi, 97, 87100 Cosenza CS
5. **Borgo Riolo sas di Bozzo Francesca** — Aprigliano
   - slug: `borgo-riolo-sas-di-bozzo-francesca-aprigliano`
   - indirizzo: 87100 Donnici Inferiore CS
6. **clc home b&b cosenza** — Aprigliano
   - slug: `clc-home-b-b-cosenza-aprigliano`
   - indirizzo: Via Domenico Milelli, 26, 87100 Cosenza CS
7. **Donna Giovanna Guest House** — Aprigliano
   - slug: `donna-giovanna-guest-house-aprigliano`
   - indirizzo: Via Piave, 98, 87100 Cosenza CS
8. **Italiana Hotels Cosenza** — Aprigliano
   - slug: `italiana-hotels-cosenza-aprigliano`
   - indirizzo: Via Panebianco, 452, 87100 Cosenza CS
9. **Kosentia B&B** — Aprigliano
   - slug: `kosentia-b-b-aprigliano`
   - indirizzo: Via Cesare Marini, 9, 87100 Cosenza CS
10. **La Bienbi'** — Aprigliano
   - slug: `la-bienbi-aprigliano`
   - indirizzo: Via Terenzio Tavolaro, 10, 87100 Cosenza CS
11. **Le stanzedi Karola&Luigia** — Aprigliano
   - slug: `le-stanzedi-karola-luigia-aprigliano`
   - indirizzo: Via Duomo, 12, 87059 Spezzano Piccolo CS
12. **Misve Home** — Aprigliano
   - slug: `misve-home-aprigliano`
   - indirizzo: Via Savoia, 6, 87100 Cosenza CS
13. **VillaFam** — Aprigliano
   - slug: `villafam-aprigliano`
   - indirizzo: Via Benito Aloisi, 13, 87100 Donnici Superiore CS
14. **Affittacamere casano** — Aprilia
   - slug: `affittacamere-casano-aprilia`
   - indirizzo: Via A. di Crollalanza, 29, 04011 Aprilia LT
15. **Anna Rooms** — Aprilia
   - slug: `anna-rooms-aprilia`
   - indirizzo: Piazza Don Luigi Sturzo, 13, 04011 Aprilia LT
16. **Appartment Le Mirage 2.0** — Aprilia
   - slug: `appartment-le-mirage-2-0-aprilia`
   - indirizzo: Via Giuseppe di Vittorio, 6, 04011 Aprilia LT
17. **B & B Delle Valli** — Aprilia
   - slug: `b-b-delle-valli-aprilia`
   - indirizzo: Via delle Valli, 13, 04011 Aprilia LT
18. **B&B "Il casale di Giulia"** — Aprilia
   - slug: `b-b-il-casale-di-giulia-aprilia`
   - indirizzo: Via Carano, 149/151, 04011 Aprilia LT
19. **B&B Aprilia - Casale del Vento** — Aprilia
   - slug: `b-b-aprilia-casale-del-vento-aprilia`
   - indirizzo: Via Basento, 10, 04011 Fossignano LT
20. **B&B La Riserva Nuova** — Aprilia
   - slug: `b-b-la-riserva-nuova-aprilia`
   - indirizzo: Via Riserva Nuova, 62, 04011 Aprilia LT
21. **Bed & Breakfast Le Mirage** — Aprilia
   - slug: `bed-breakfast-le-mirage-aprilia`
   - indirizzo: Via della Stazione, 04011 Aprilia LT
22. **COMÓ EXCLUSIVE affittacamere** — Aprilia
   - slug: `como-exclusive-affittacamere-aprilia`
   - indirizzo: Via Pontina, 206, 04011 Aprilia LT
23. **Della Piana Residence Srl** — Aprilia
   - slug: `della-piana-residence-srl-aprilia`
   - indirizzo: Via della Piana, 22, 04011 Aprilia LT
24. **Favola Affittacamere** — Aprilia
   - slug: `favola-affittacamere-aprilia`
   - indirizzo: Piazza Salvatore Valeri, 4, 00048 Nettuno RM
25. **Hotel Aquila | Aprilia** — Aprilia
   - slug: `hotel-aquila-aprilia-aprilia`
   - indirizzo: Via Alessandro Volta, 6, 04011 Aprilia LT
26. **Hotel Enea Aprilia** — Aprilia
   - slug: `hotel-enea-aprilia-aprilia`
   - indirizzo: Via del Commercio, 1, 04011 Aprilia LT
27. **Hotel San Michele** — Aprilia
   - slug: `hotel-san-michele-aprilia`
   - indirizzo: Via delle Margherite, 23, 04011 Aprilia LT
28. **La Tenuta del Passero - Fraz.Le Ferriere** — Aprilia
   - slug: `la-tenuta-del-passero-fraz-le-ferriere-aprilia`
   - indirizzo: Via Corsira, 2, 04011 Latina LT
29. **Lucaia B&B** — Aprilia
   - slug: `lucaia-b-b-aprilia`
   - indirizzo: Via delle Due Case, 31, 04011 Aprilia LT
30. **Peonia Rooms** — Aprilia
   - slug: `peonia-rooms-aprilia`
   - indirizzo: Via Nettunense, 283, 04011 Campo di Carne LT
31. **S'Home - Villa nel Verde fuori Roma - Alloggio Sostenibile** — Aprilia
   - slug: `s-home-villa-nel-verde-fuori-roma-alloggio-soste-aprilia`
   - indirizzo: Via Carano, 50/E, 04011 Aprilia LT
32. **SIMON HOTEL APRILIA** — Aprilia
   - slug: `simon-hotel-aprilia-aprilia`
   - indirizzo: Via Caracalla, 04011 Aprilia LT
33. **Agriturimo La Dimora del Croccio** — Aquara
   - slug: `agriturimo-la-dimora-del-croccio-aquara`
   - indirizzo: contrada Remolino, 84055 Felitto SA
34. **Agriturismo Casale Condotti** — Aquara
   - slug: `agriturismo-casale-condotti-aquara`
   - indirizzo: Località Condotti, 84020 Aquara SA
35. **Agriturismo CuoreLieto del Cilento** — Aquara
   - slug: `agriturismo-cuorelieto-del-cilento-aquara`
   - indirizzo: Località Cerabona Strada Provinciale 12/c, snc, 84020 Corleto Monforte SA