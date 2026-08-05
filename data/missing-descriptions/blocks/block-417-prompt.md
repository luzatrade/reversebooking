# Blocco 417/500 — 35 strutture senza descrizione IT

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

1. **Locanda cascina Chigollo** — Capiago Intimiano
   - slug: `locanda-cascina-chigollo-capiago-intimiano`
   - indirizzo: Via Chigollo, 7, 22070 Capiago Intimiano CO
2. **Agriturismo Bardari** — Capistrano
   - slug: `agriturismo-bardari-capistrano`
   - indirizzo: Contrada Trunchi, 88022 Curinga CZ
3. **Agriturismo Sant'Elia** — Capistrano
   - slug: `agriturismo-sant-elia-capistrano`
   - indirizzo: Località Sant'Elia, 89818 Capistrano VV
4. **B&B Casa Armonia** — Capistrano
   - slug: `b-b-casa-armonia-capistrano`
   - indirizzo: Vico II° Armonia, 9, 89812 Pizzo VV
5. **B&B stella d'oro** — Capistrano
   - slug: `b-b-stella-d-oro-capistrano`
   - indirizzo: SS 18 Tirrena Inferiore, 18, 89900 Vibo Valentia VV
6. **Casa Dei Mille Bed And Breakfast** — Capistrano
   - slug: `casa-dei-mille-bed-and-breakfast-capistrano`
   - indirizzo: Via S. Francesco, 89812 Pizzo VV
7. **Domus Piedigrotta** — Capistrano
   - slug: `domus-piedigrotta-capistrano`
   - indirizzo: Via Riviera Prangi, 110, 89812 Pizzo VV
8. **Hotel Castelmonardo** — Capistrano
   - slug: `hotel-castelmonardo-capistrano`
   - indirizzo: Via 4 Novembre, 144, 89814 Filadelfia VV
9. **Hotel della Piazza** — Capistrano
   - slug: `hotel-della-piazza-capistrano`
   - indirizzo: Piazza della Repubblica, 89812 Pizzo VV
10. **Hotel Ristorante Marinella** — Capistrano
   - slug: `hotel-ristorante-marinella-capistrano`
   - indirizzo: Via Riviera Prangi, 89812 Pizzo VV
11. **Il Casalino** — Capistrano
   - slug: `il-casalino-capistrano`
   - indirizzo: Vico I Uccelli, 89812 Pizzo VV
12. **Puerto Seguro B&B a Pizzo** — Capistrano
   - slug: `puerto-seguro-b-b-a-pizzo-capistrano`
   - indirizzo: VII deviazione, Via Riviera Prangi, 89812 Loc. Marinella VV
13. **Residenza Antico Borgo** — Capistrano
   - slug: `residenza-antico-borgo-capistrano`
   - indirizzo: Via B. Maiolo, 30, 89814 Filadelfia VV
14. **Residenza Vinci** — Capistrano
   - slug: `residenza-vinci-capistrano`
   - indirizzo: Via Giuseppe Marcello, Via M. Salomone, 225, 89812 Pizzo VV
15. **Locanda 3 scalini** — Capistrello
   - slug: `locanda-3-scalini-capistrello`
   - indirizzo: Via SS, Palentina, 9, 67050 Capistrello AQ
16. **Casale Virginia** — Capitignano
   - slug: `casale-virginia-capitignano`
   - indirizzo: Località San Matteo, 64010 Montereale AQ
17. **La Pennichella** — Capitignano
   - slug: `la-pennichella-capitignano`
   - indirizzo: Via della Molinella, SNC 67015, 67015 Piedicolle AQ
18. **Affittacamere nebrodi** — Capizzi
   - slug: `affittacamere-nebrodi-capizzi`
   - indirizzo: V. Vespri, 140, 98031 Capizzi ME
19. **Agriturismo L'Uliveto** — Capizzi
   - slug: `agriturismo-l-uliveto-capizzi`
   - indirizzo: C.da Drago Lucida, 98070 Reitano ME
20. **Agriturismo Leanza "La Baita"** — Capizzi
   - slug: `agriturismo-leanza-la-baita-capizzi`
   - indirizzo: c.da Sciammo SS120, km152, 98033, 98030 San Teodoro ME
21. **Agriturismo Monte Soprano** — Capizzi
   - slug: `agriturismo-monte-soprano-capizzi`
   - indirizzo: Contrada Cipolluzzi, snc, 94010 Cerami EN
22. **Albergo Za' Maria** — Capizzi
   - slug: `albergo-za-maria-capizzi`
   - indirizzo: Via Nazionale, 113, 98072 Caronia ME
23. **B&B La Grande Mela** — Capizzi
   - slug: `b-b-la-grande-mela-capizzi`
   - indirizzo: Via Caracciolo, 54, 98077 Santo Stefano di Camastra ME
24. **B&b Le Tre Stelle** — Capizzi
   - slug: `b-b-le-tre-stelle-capizzi`
   - indirizzo: Via Giuseppe Garibaldi, 2, 94010 Cerami EN
25. **B&b San Procopio** — Capizzi
   - slug: `b-b-san-procopio-capizzi`
   - indirizzo: Via Conte Ruggero, 180, 94018 Troina EN
26. **Heart of Sicily** — Capizzi
   - slug: `heart-of-sicily-capizzi`
   - indirizzo: Via Prillo, 6, 98073 Mistretta ME
27. **Hotel La Playa Blanca** — Capizzi
   - slug: `hotel-la-playa-blanca-capizzi`
   - indirizzo: Via Nino Martoglio, 98077 Santo Stefano di Camastra ME
28. **LA CASA DEL TEMPO** — Capizzi
   - slug: `la-casa-del-tempo-capizzi`
   - indirizzo: Via Vittorio Emanuele, n.19, 94010 Cerami EN
29. **La Dolce Vita Regalbuto** — Capizzi
   - slug: `la-dolce-vita-regalbuto-capizzi`
   - indirizzo: Contrada Piano Arena, 94017 Regalbuto EN
30. **la struttura è immersa nel cuore del centro storico, tra le tante coloratissime botteghe di ceramiche artigianali** — Capizzi
   - slug: `la-struttura-e-immersa-nel-cuore-del-centro-stor-capizzi`
   - indirizzo: Via Vittorio Emanuele, 22/A, 98077 Santo Stefano di Camastra ME
31. **Tus'Hotel** — Capizzi
   - slug: `tus-hotel-capizzi`
   - indirizzo: Contrada Torrazza Porto Marina Lotarello, ss113 SS 113 - Km. 163, 98079 Castel di Tusa ME
32. **.** — Capizzone
   - slug: `struttura-capizzone`
   - indirizzo: Via Partigiani, 33, 24030 Caroli BG
33. **Ristorante Al Botto** — Capizzone
   - slug: `ristorante-al-botto-capizzone`
   - indirizzo: Via S. Bernardo, 10, 24030 Roncola BG
34. **AGATIRSO** — Capo d'Orlando
   - slug: `agatirso-capo-d-orlando`
   - indirizzo: Via Saint Bon, 22, 98071 Capo d'Orlando ME
35. **AWA B&B** — Capo d'Orlando
   - slug: `awa-b-b-capo-d-orlando`
   - indirizzo: via consolare antica 163, Via Raffaello, 3, 98071 Capo d'Orlando ME