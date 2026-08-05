# Blocco 394/500 — 35 strutture senza descrizione IT

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

1. **Le Residenze degli Ulivi** — Campofilone
   - slug: `le-residenze-degli-ulivi-campofilone`
   - indirizzo: Contrada Valdaso, 22, 63861 Campofilone FM
2. **Vista d'aMare** — Campofilone
   - slug: `vista-d-amare-campofilone`
   - indirizzo: Via dei Piceni, 38, 63827 Pedaso FM
3. **Abbazia Santa Maria Del Bosco** — Campofiorito
   - slug: `abbazia-santa-maria-del-bosco-campofiorito`
   - indirizzo: SP35, 90030 Contessa Entellina PA
4. **Agriturismo Ridocco** — Campofiorito
   - slug: `agriturismo-ridocco-campofiorito`
   - indirizzo: contrada Ridocco. s.s, 188c/km 15,500, 90034 Corleone PA
5. **Chiosi Country Club (Turismo rurale)** — Campofiorito
   - slug: `chiosi-country-club-turismo-rurale-campofiorito`
   - indirizzo: Via del Pino, snc, 90034 Contrada Chiosi PA
6. **Don Giovanni Hotel** — Campofiorito
   - slug: `don-giovanni-hotel-campofiorito`
   - indirizzo: Contrada Pandolfina, 92017 Sambuca di Sicilia AG
7. **Il Bevaio di Corleone** — Campofiorito
   - slug: `il-bevaio-di-corleone-campofiorito`
   - indirizzo: SS188dir/c, 13, 90034 Campofiorito PA
8. **Albergo Residenza al Teatro** — Campoformido
   - slug: `albergo-residenza-al-teatro-campoformido`
   - indirizzo: Via Pracchiuso, 38, 33100 Udine UD
9. **B&B Benvenuti** — Campoformido
   - slug: `b-b-benvenuti-campoformido`
   - indirizzo: Via Cormor, 81, 33030 Udine UD
10. **B&B HOTEL Udine** — Campoformido
   - slug: `b-b-hotel-udine-campoformido`
   - indirizzo: Via Duino, 8, 33100 Udine UD
11. **Bed & Breakfast "Al Teatro"** — Campoformido
   - slug: `bed-breakfast-al-teatro-campoformido`
   - indirizzo: Viale Trieste, 18, 33100 Udine UD
12. **BED&BREAKFAST APRICOT** — Campoformido
   - slug: `bed-breakfast-apricot-campoformido`
   - indirizzo: Via XXV Aprile, 7B, 33050 Pozzuolo del Friuli UD
13. **Casanova Inn** — Campoformido
   - slug: `casanova-inn-campoformido`
   - indirizzo: Via Spilimbergo, 133, 33035 Martignacco UD
14. **Hotel Capri** — Campoformido
   - slug: `hotel-capri-campoformido`
   - indirizzo: Via S. Caterina, 60, 33037 Pasian di Prato UD
15. **Bed & Breakfast Piazza** — Campofranco
   - slug: `bed-breakfast-piazza-campofranco`
   - indirizzo: Contrada Fosse, 93010 Sutera CL
16. **Pernottamento “Fontana Di Li Rosi”** — Campofranco
   - slug: `pernottamento-fontana-di-li-rosi-campofranco`
   - indirizzo: Via Vittorio Emanuele, 22, 93010 Campofranco CL
17. **Villa Rahal** — Campofranco
   - slug: `villa-rahal-campofranco`
   - indirizzo: Via Picone Chiodo, 3, 92020 Racalmuto AG
18. **A Casa di Emma** — Campogalliano
   - slug: `a-casa-di-emma-campogalliano`
   - indirizzo: Strada Statale per Carpi Nord, 1500, 41123 Ganaceto MO
19. **Albergo Aqvila D'Oro** — Campogalliano
   - slug: `albergo-aqvila-d-oro-campogalliano`
   - indirizzo: Piazza Ventiquattro Maggio, 3, 42048 Rubiera RE
20. **Albergo La Gentile** — Campogalliano
   - slug: `albergo-la-gentile-campogalliano`
   - indirizzo: Viale Martiri della Libertà, 21, 41011 Campogalliano MO
21. **B&B Dei Paduli** — Campogalliano
   - slug: `b-b-dei-paduli-campogalliano`
   - indirizzo: Via Zimella, 77, 42122 Reggio nell'Emilia RE
22. **Best Western Hotel Modena District** — Campogalliano
   - slug: `best-western-hotel-modena-district-campogalliano`
   - indirizzo: Via del Passatore, 160, 41011 Campogalliano MO
23. **Hotel Commercio** — Campogalliano
   - slug: `hotel-commercio-campogalliano`
   - indirizzo: Via G. di Vittorio, 14, 41011 Campogalliano MO
24. **Hotel Europa** — Campogalliano
   - slug: `hotel-europa-campogalliano`
   - indirizzo: Corso Vittorio Emanuele II, 52, 41121 Modena MO
25. **Hotel Fontana** — Campogalliano
   - slug: `hotel-fontana-campogalliano`
   - indirizzo: VIA MULINO DELLA VALLE, 1, 42048 Rubiera RE
26. **Hotel Magnagallo** — Campogalliano
   - slug: `hotel-magnagallo-campogalliano`
   - indirizzo: Via Magnagallo Est, 7, 41011 Campogalliano MO
27. **Hotel Tiby** — Campogalliano
   - slug: `hotel-tiby-campogalliano`
   - indirizzo: Via E. Rainusso, 108, 41124 Modena MO
28. **Hotel Villino della Flanella** — Campogalliano
   - slug: `hotel-villino-della-flanella-campogalliano`
   - indirizzo: Via Viazza di Ramo, 248, 41123 Modena MO
29. **IL Borgo CAMERE** — Campogalliano
   - slug: `il-borgo-camere-campogalliano`
   - indirizzo: Str. Cave di Ramo, 170, 41123 Modena MO
30. **la Brunita** — Campogalliano
   - slug: `la-brunita-campogalliano`
   - indirizzo: Via Secchia, 2, 42048 Rubiera RE
31. **La Villa delle Rose - Affittacamere a Carpi** — Campogalliano
   - slug: `la-villa-delle-rose-affittacamere-a-carpi-campogalliano`
   - indirizzo: Via Della Rosa Parte Est, 35, 41012 Carpi MO
32. **LVG Hotel Collection - Principe** — Campogalliano
   - slug: `lvg-hotel-collection-principe-campogalliano`
   - indirizzo: Corso Vittorio Emanuele II, 94, 41121 Modena MO
33. **Marchi Hotel** — Campogalliano
   - slug: `marchi-hotel-campogalliano`
   - indirizzo: Via Modena - Capri, 81, 41019 Carpi MO
34. **RMH Modena Raffaello - Hotel** — Campogalliano
   - slug: `rmh-modena-raffaello-hotel-campogalliano`
   - indirizzo: Str. Cognento, 5, 41126 Modena MO
35. **Sun Hotel** — Campogalliano
   - slug: `sun-hotel-campogalliano`
   - indirizzo: Via Palmiro Togliatti, 1 H, 42048 Rubiera RE