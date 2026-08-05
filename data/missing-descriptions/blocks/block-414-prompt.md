# Blocco 414/500 — 35 strutture senza descrizione IT

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

1. **Bed & Breakfast Villa Flora** — Capaccio Paestum
   - slug: `bed-breakfast-villa-flora-capaccio-paestum`
   - indirizzo: Contrada Celso SS. 18 Tirrenia Inferiore, Km. 102+400, 84043 Agropoli SA
2. **Casa Rubini** — Capaccio Paestum
   - slug: `casa-rubini-capaccio-paestum`
   - indirizzo: Via Tavernelle, 5, 84047 Paestum SA
3. **Domus Hera** — Capaccio Paestum
   - slug: `domus-hera-capaccio-paestum`
   - indirizzo: Via Fuscillo, 702, 84047 Paestum SA
4. **Hotel Almas Paestum ***** — Capaccio Paestum
   - slug: `hotel-almas-paestum-capaccio-paestum`
   - indirizzo: Strada Statale, 18 km 90, 84047 Capaccio Paestum SA
5. **Hotel Dei Templi** — Capaccio Paestum
   - slug: `hotel-dei-templi-capaccio-paestum`
   - indirizzo: Via Tavernelle, 64, 84047 Capaccio Paestum SA
6. **Hotel La Sorgente Paestum** — Capaccio Paestum
   - slug: `hotel-la-sorgente-paestum-capaccio-paestum`
   - indirizzo: Via Licinella, 178/A, 84047 Licinella-Torre di Paestum SA
7. **Hotel Parco dei Principi Paestum** — Capaccio Paestum
   - slug: `hotel-parco-dei-principi-paestum-capaccio-paestum`
   - indirizzo: via Poseidonia loc. Ponte di Ferro, 84047 Capaccio Paestum SA
8. **Hotel Royal Paestum** — Capaccio Paestum
   - slug: `hotel-royal-paestum-capaccio-paestum`
   - indirizzo: Via Francesco Gregorio, 40, 84047 Capaccio Paestum SA
9. **Hotel Sogaris Paestum** — Capaccio Paestum
   - slug: `hotel-sogaris-paestum-capaccio-paestum`
   - indirizzo: Via dell'Amore, 23, 84047 Licinella-Torre di Paestum SA
10. **Hotel Villa Rita** — Capaccio Paestum
   - slug: `hotel-villa-rita-capaccio-paestum`
   - indirizzo: Via Nettuno, 9, 84047 Paestum SA
11. **L',incanto di Paestum** — Capaccio Paestum
   - slug: `l-incanto-di-paestum-capaccio-paestum`
   - indirizzo: Via Chiorbo, 63, 84047 Capaccio Paestum SA
12. **Paestum Inn Beach Resort** — Capaccio Paestum
   - slug: `paestum-inn-beach-resort-capaccio-paestum`
   - indirizzo: Via Litoranea Linora, 84047 Capaccio Paestum SA
13. **Tafuri Hotel Ristorante** — Capaccio Paestum
   - slug: `tafuri-hotel-ristorante-capaccio-paestum`
   - indirizzo: Viale della Repubblica, 153, 84047 Capaccio Paestum SA
14. **Al tempio della pace** — Capaci
   - slug: `al-tempio-della-pace-capaci`
   - indirizzo: Via Paride, 5, 90044 Parco degli Ulivi PA
15. **AR Palace Hotel - Palermo** — Capaci
   - slug: `ar-palace-hotel-palermo-capaci`
   - indirizzo: Viale dei Saraceni, 75A, 90040 Isola delle Femmine PA
16. **Azzurro Mare** — Capaci
   - slug: `azzurro-mare-capaci`
   - indirizzo: Via Piano Ponente, 41, 90040 Isola delle Femmine PA
17. **B&B case vacanze House Orlando** — Capaci
   - slug: `b-b-case-vacanze-house-orlando-capaci`
   - indirizzo: Via Dammuso, 21, 90147 Palermo PA
18. **B&B Villa Salvatore** — Capaci
   - slug: `b-b-villa-salvatore-capaci`
   - indirizzo: Via S. Giuseppe Maria Tomasi, 35, 90040 Torretta PA
19. **Baglio Delle Ninfee** — Capaci
   - slug: `baglio-delle-ninfee-capaci`
   - indirizzo: Piazza Santa Rosalia, 90040 Torretta PA
20. **Bellevue del Golfo Hotel & Spa** — Capaci
   - slug: `bellevue-del-golfo-hotel-spa-capaci`
   - indirizzo: Via Plauto, 40, 90147 Palermo PA
21. **Casa di Alice** — Capaci
   - slug: `casa-di-alice-capaci`
   - indirizzo: Via di Maggio, 50, 90040 Isola delle Femmine PA
22. **Casa di Lele** — Capaci
   - slug: `casa-di-lele-capaci`
   - indirizzo: Via Pastificio, 17, 90044 Carini PA
23. **Casa Di Mitri** — Capaci
   - slug: `casa-di-mitri-capaci`
   - indirizzo: Via Nazionale, 335, 90044 Carini PA
24. **Eufemia Hotel** — Capaci
   - slug: `eufemia-hotel-capaci`
   - indirizzo: Via Nazionale, 30, 90040 Isola delle Femmine PA
25. **Hotel Sirenetta 4 stelle** — Capaci
   - slug: `hotel-sirenetta-4-stelle-capaci`
   - indirizzo: Viale dei Saraceni, 81, 90040 Isola delle Femmine PA
26. **La Scogliera Azzurra - Ristorante - Hotel - Lido** — Capaci
   - slug: `la-scogliera-azzurra-ristorante-hotel-lido-capaci`
   - indirizzo: Fondo Scalici Simone 8-10, 90040, 90040 Isola delle Femmine PA
27. **Saracen Sands Hotel & Congress Centre** — Capaci
   - slug: `saracen-sands-hotel-congress-centre-capaci`
   - indirizzo: Via Libertà, 128/A, 90040 Isola delle Femmine PA
28. **Sikelia Bed & Breakfast** — Capaci
   - slug: `sikelia-bed-breakfast-capaci`
   - indirizzo: parco degli ulivi 1, Via Teseo, 9, 90044 Carini PA
29. **Sul Mare** — Capaci
   - slug: `sul-mare-capaci`
   - indirizzo: Vicolo Argento, 5, 90040 Isola delle Femmine PA
30. **Villa Bonocore Maletto** — Capaci
   - slug: `villa-bonocore-maletto-capaci`
   - indirizzo: Via Salvatore Minutilla, 3, 90147 Palermo PA
31. **Villa Seven Palms** — Capaci
   - slug: `villa-seven-palms-capaci`
   - indirizzo: Passaggio delle Ginestre, 9, 90040 Isola delle Femmine PA
32. **Villaggio Dei Saraceni** — Capaci
   - slug: `villaggio-dei-saraceni-capaci`
   - indirizzo: Via Libertà, 128/A, 90040 Isola delle Femmine PA
33. **A CASA DI LELE, CAPALBIO camere e appartamenti** — Capalbio
   - slug: `a-casa-di-lele-capalbio-camere-e-appartamenti-capalbio`
   - indirizzo: Via del Cutignolo, 43, 58011 Capalbio GR
34. **Agrialbergo Capalbio La Sugherella** — Capalbio
   - slug: `agrialbergo-capalbio-la-sugherella-capalbio`
   - indirizzo: Str. Sugherella, 3, 58011 Capalbio GR
35. **Agriturismo Ghiaccio Bosco Capalbio** — Capalbio
   - slug: `agriturismo-ghiaccio-bosco-capalbio-capalbio`
   - indirizzo: Str. della Sgrilla, 4, 58011 Capalbio GR