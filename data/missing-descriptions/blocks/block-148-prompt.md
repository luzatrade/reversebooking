# Blocco 148/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo San Tommaso** — Ariano Irpino
   - slug: `agriturismo-san-tommaso-ariano-irpino`
   - indirizzo: Contrada S. Tommaso, 12, 83031 Ariano Irpino AV
2. **B&B Dimora Peluso - Melito Irpino AV - Irpinia** — Ariano Irpino
   - slug: `b-b-dimora-peluso-melito-irpino-av-irpinia-ariano-irpino`
   - indirizzo: 83030 Cozza AV
3. **B&B La Reggia** — Ariano Irpino
   - slug: `b-b-la-reggia-ariano-irpino`
   - indirizzo: C.da Centovie, 20, 83031 Ariano Irpino AV
4. **Grand Hotel Biffy** — Ariano Irpino
   - slug: `grand-hotel-biffy-ariano-irpino`
   - indirizzo: Via Cardito, 83031 Ariano Irpino AV
5. **Hotel Fontana Del Re** — Ariano Irpino
   - slug: `hotel-fontana-del-re-ariano-irpino`
   - indirizzo: Corso Vittorio Emanuele, 1, 83031 Ariano Irpino AV
6. **Il Rifugio del Principe** — Ariano Irpino
   - slug: `il-rifugio-del-principe-ariano-irpino-2`
   - indirizzo: SP36, 83040 Gesualdo AV
7. **LIFE HOTEL** — Ariano Irpino
   - slug: `life-hotel-ariano-irpino`
   - indirizzo: Via Santa Barbara N 3, SS90, 120, 83031 Ariano Irpino AV
8. **Villa Antico Mulino | Eventi e Ricevimenti ad Ariano Irpino** — Ariano Irpino
   - slug: `villa-antico-mulino-eventi-e-ricevimenti-ad-aria-ariano-irpino`
   - indirizzo: Contrada Ficucelle, 2/A, 83031 Trimonti AV
9. **Villa Santoro** — Ariano Irpino
   - slug: `villa-santoro-ariano-irpino`
   - indirizzo: SS90, 83031 Serralonga AV
10. **Villa Sorriso Hotel Ristorante** — Ariano Irpino
   - slug: `villa-sorriso-hotel-ristorante-ariano-irpino`
   - indirizzo: Via Nazionale, SS90, Km. 18, 83031 Ariano Irpino AV
11. **Villa Tre Colli Agriturismo B&b** — Ariano Irpino
   - slug: `villa-tre-colli-agriturismo-b-b-ariano-irpino`
   - indirizzo: Via Turchiciello, 19, 83031 Ariano Irpino AV
12. **Agriturismo Bertilla** — Ariano nel Polesine
   - slug: `agriturismo-bertilla-ariano-nel-polesine`
   - indirizzo: Via Veneto Ariano, 1, 45012 Ariano nel Polesine RO
13. **Agriturismo Casa Ramello** — Ariano nel Polesine
   - slug: `agriturismo-casa-ramello-ariano-nel-polesine`
   - indirizzo: Via Bighette, 945012, 45012 Ariano nel Polesine RO
14. **Agriturismo Forzello** — Ariano nel Polesine
   - slug: `agriturismo-forzello-ariano-nel-polesine`
   - indirizzo: Via Brenta Ariano, 25, 45012 Ariano RO
15. **Albergo L'Oasi Cannevié** — Ariano nel Polesine
   - slug: `albergo-l-oasi-cannevie-ariano-nel-polesine`
   - indirizzo: Via per Volano, 45, 44021 Codigoro FE
16. **Albergo RISTO' Italia** — Ariano nel Polesine
   - slug: `albergo-risto-italia-ariano-nel-polesine`
   - indirizzo: Via Giacomo Matteotti, 471, 45018 Porto Tolle RO
17. **B&B Casa Egle** — Ariano nel Polesine
   - slug: `b-b-casa-egle-ariano-nel-polesine`
   - indirizzo: Via Battare, 621/149, 45015 Corbola RO
18. **B&B Da Toni** — Ariano nel Polesine
   - slug: `b-b-da-toni-ariano-nel-polesine`
   - indirizzo: Via Dottor Maddalena, 68, 45019 Taglio di Po RO
19. **Ca'Mia Rooms** — Ariano nel Polesine
   - slug: `ca-mia-rooms-ariano-nel-polesine`
   - indirizzo: Via Giacomo Matteotti, 222, 45018 Ca' Tiepolo RO
20. **La Bicocca B&B** — Ariano nel Polesine
   - slug: `la-bicocca-b-b-ariano-nel-polesine`
   - indirizzo: Vicolo Amolaretta, 24, 45011 Adria RO
21. **Locanda Yanis** — Ariano nel Polesine
   - slug: `locanda-yanis-ariano-nel-polesine`
   - indirizzo: Via Romea, 193, 44026 Zona Industriale Mesola FE
22. **Ponte Molo - Hotel** — Ariano nel Polesine
   - slug: `ponte-molo-hotel-ariano-nel-polesine`
   - indirizzo: Via Borgo Molo, 5, 45018 Porto Tolle RO
23. **Agriturismo Armando Iacchelli** — Ariccia
   - slug: `agriturismo-armando-iacchelli-ariccia`
   - indirizzo: Via delle Noci, 15, 00049 Velletri RM
24. **Albergo Ristorante Fontana di Papa** — Ariccia
   - slug: `albergo-ristorante-fontana-di-papa-ariccia`
   - indirizzo: Via Nettunense, km 12, 00072 Ariccia RM
25. **B&B Il Melograno** — Ariccia
   - slug: `b-b-il-melograno-ariccia`
   - indirizzo: Via Appia Nuova, 7, 00072 Ariccia RM
26. **GiGi** — Ariccia
   - slug: `gigi-ariccia`
   - indirizzo: Via Rufelli, 75, 00072 Ariccia RM
27. **Hotel Ristorante Villa Robinia** — Ariccia
   - slug: `hotel-ristorante-villa-robinia-ariccia`
   - indirizzo: Viale Fratelli Rosselli, 19, 00045 Genzano di Roma RM
28. **La Vista Agriturismo Boutique** — Ariccia
   - slug: `la-vista-agriturismo-boutique-ariccia`
   - indirizzo: Via Prelatura, 12, 00072 Ariccia RM
29. **Maison Martina** — Ariccia
   - slug: `maison-martina-ariccia`
   - indirizzo: Via Quinto Labieno Partico, 7, 00072 Ariccia RM
30. **Maison3g** — Ariccia
   - slug: `maison3g-ariccia`
   - indirizzo: Via dell'Uccelliera, 102, 00072 Ariccia RM
31. **Mia Rooms Ariccia** — Ariccia
   - slug: `mia-rooms-ariccia-ariccia`
   - indirizzo: Via Pagliarozza, 5-7, 00072 Ariccia RM
32. **Monte Due Torri Agriturismo** — Ariccia
   - slug: `monte-due-torri-agriturismo-ariccia`
   - indirizzo: Via Montegiove Nuovo, 77, 00045 Genzano di Roma RM
33. **Ristorante e Albergo Diffuso Lo Specchio di Diana** — Ariccia
   - slug: `ristorante-e-albergo-diffuso-lo-specchio-di-dian-ariccia`
   - indirizzo: Corso Vittorio Emanuele, 11, 00074 Nemi RM
34. **Agriturismo b&b La Cinciallegra** — Arignano
   - slug: `agriturismo-b-b-la-cinciallegra-arignano`
   - indirizzo: Cascina Serramena Bassa, 25, 10020 Riva presso Chieri TO
35. **B&B Fairy Castle** — Arignano
   - slug: `b-b-fairy-castle-arignano`
   - indirizzo: Via Pescarmona, 16, 14022 Castelnuovo Don Bosco AT