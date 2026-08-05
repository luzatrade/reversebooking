# Blocco 318/500 — 35 strutture senza descrizione IT

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

1. **Villa Spaia** — Brancaleone
   - slug: `villa-spaia-brancaleone`
   - indirizzo: Via Zelante, 89036 Brancaleone RC
2. **Villaggio Club Altalia** — Brancaleone
   - slug: `villaggio-club-altalia-brancaleone`
   - indirizzo: Contrada Altalia, 10-12, 89036 Brancaleone RC
3. **Il Giardino** — Brandico
   - slug: `il-giardino-brandico`
   - indirizzo: Via Giosuè Carducci, 3, 25030 Trenzano BS
4. **B&B HOTEL Settimo Torinese** — Brandizzo
   - slug: `b-b-hotel-settimo-torinese-brandizzo`
   - indirizzo: Via Leinì, 101, 10036 Settimo Torinese TO
5. **Green Hotel** — Brandizzo
   - slug: `green-hotel-brandizzo`
   - indirizzo: Via Milano, 177, 10036 Settimo Torinese TO
6. **Hotel Fortyfive** — Brandizzo
   - slug: `hotel-fortyfive-brandizzo`
   - indirizzo: Stradale Torino, 40, 10034 Chivasso TO
7. **Hotel Serenella** — Brandizzo
   - slug: `hotel-serenella-brandizzo`
   - indirizzo: Via Conte Luigi Tarino, 4, 10124 Torino TO
8. **Hotel Vecchio Pavone** — Brandizzo
   - slug: `hotel-vecchio-pavone-brandizzo`
   - indirizzo: Via Giacomo Leopardi, 1, 10079 Mappano TO
9. **Hotel Verdina 2.0 SRL** — Brandizzo
   - slug: `hotel-verdina-2-0-srl-brandizzo`
   - indirizzo: Via Pisa, 69, 10088 Volpiano TO
10. **L'ulivo Selvatico** — Brandizzo
   - slug: `l-ulivo-selvatico-brandizzo`
   - indirizzo: Via Piave, 2, 10032 Brandizzo TO
11. **Maison di Gugli** — Brandizzo
   - slug: `maison-di-gugli-brandizzo`
   - indirizzo: Via Torino, 82, 10032 Brandizzo TO
12. **Residence Viali Chivasso** — Brandizzo
   - slug: `residence-viali-chivasso-brandizzo`
   - indirizzo: Viale V. Veneto, 8, 10034 Chivasso TO
13. **Via Casne 2 - Affitti brevi** — Brandizzo
   - slug: `via-casne-2-affitti-brevi-brandizzo`
   - indirizzo: Via Casne, 2, 10088 Volpiano TO
14. **Albergo Carona** — Branzi
   - slug: `albergo-carona-branzi`
   - indirizzo: Via Angelo Bianchi, 22, 24010 Carona BG
15. **Albergo Panoramico valle brembana** — Branzi
   - slug: `albergo-panoramico-valle-brembana-branzi`
   - indirizzo: Via Foppo, 49, 24010 Moio De' Calvi BG
16. **Hotel Des Alpes** — Branzi
   - slug: `hotel-des-alpes-branzi`
   - indirizzo: Via Cortivo, 9, 24010 Foppolo BG
17. **K2 Hotel & Restaurant** — Branzi
   - slug: `k2-hotel-restaurant-branzi`
   - indirizzo: Via Foppelle, 42, 24010 Foppolo BG
18. **La Locandiera Carona** — Branzi
   - slug: `la-locandiera-carona-branzi`
   - indirizzo: Piazza Vittorio Veneto, 3, 24010 Carona BG
19. **Locanda Ristorante Pizzeria I Riviù** — Branzi
   - slug: `locanda-ristorante-pizzeria-i-riviu-branzi`
   - indirizzo: Via Rivioni, 14, 24010 Branzi BG
20. **Orobie Alps Resort** — Branzi
   - slug: `orobie-alps-resort-branzi`
   - indirizzo: Via Monica, 70, 24010 Roncobello BG
21. **Villa Carona Hotel & Spa** — Branzi
   - slug: `villa-carona-hotel-spa-branzi`
   - indirizzo: Via Pagliari, 24010 Carona BG
22. **Agriturismo San Faustino** — Braone
   - slug: `agriturismo-san-faustino-braone`
   - indirizzo: Via San Faustino, 1, 25040 Ceto BS
23. **B&B Santa Cristina** — Braone
   - slug: `b-b-santa-cristina-braone`
   - indirizzo: Via S. Gregorio, 3/A, 25040 Sommaprada di Lozio BS
24. **B&B Valentina** — Braone
   - slug: `b-b-valentina-braone`
   - indirizzo: Via Falger, 13, 25050 Niardo BS
25. **Bed and breaskfast Blè** — Braone
   - slug: `bed-and-breaskfast-ble-braone`
   - indirizzo: V. Dassaro, 5, 25040 Cerveno BS
26. **Casa Visnenza B&B** — Braone
   - slug: `casa-visnenza-b-b-braone`
   - indirizzo: Via S. Faustino, 7, 25044 Capo di Ponte BS
27. **Catif Ladrù** — Braone
   - slug: `catif-ladru-braone`
   - indirizzo: Via Bassa, 3, 25040 Cerveno BS
28. **I sei petali | Agriturismo Azienda agricola** — Braone
   - slug: `i-sei-petali-agriturismo-azienda-agricola-braone`
   - indirizzo: Via Strada Di Mezzo, 3, 25044 Capo di Ponte BS
29. **Ostello di Vallecamonica** — Braone
   - slug: `ostello-di-vallecamonica-braone`
   - indirizzo: Via Monsignor Vittorio Bonomelli, 11, 25043 Breno BS
30. **Appartamento a BREBBIA** — Brebbia
   - slug: `appartamento-a-brebbia-brebbia`
   - indirizzo: Via IV Novembre, 11, 21020 Brebbia VA
31. **Colori del Lago** — Brebbia
   - slug: `colori-del-lago-brebbia`
   - indirizzo: Via Trento, 9, 21020 Brebbia VA
32. **DKamping Village** — Brebbia
   - slug: `dkamping-village-brebbia`
   - indirizzo: via Carducci, 943, 21027 Ispra VA
33. **Nel giardino di Dafne** — Brebbia
   - slug: `nel-giardino-di-dafne-brebbia`
   - indirizzo: Via Santa Caterina, 35, 28838 Stresa VB
34. **Residence Sport & Benessere** — Brebbia
   - slug: `residence-sport-benessere-brebbia`
   - indirizzo: Via G. Garibaldi, 21, 21020 Brebbia VA
35. **Agriturismo Ca' Del Gelso** — Breda di Piave
   - slug: `agriturismo-ca-del-gelso-breda-di-piave`
   - indirizzo: Via Levada, 1, 31030 Breda di Piave TV