# Blocco 289/500 — 35 strutture senza descrizione IT

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

1. **Country Club La Tortiola** — Bondeno
   - slug: `country-club-la-tortiola-bondeno`
   - indirizzo: Via Tortiola, 15, 44049 Vigarano Mainarda FE
2. **Hotel Daniela** — Bondeno
   - slug: `hotel-daniela-bondeno`
   - indirizzo: Via Arginone, 198, 44122 Ferrara FE
3. **Hotel Luna Blu - Hotel 3 Stelle a Cento - frazione Casumaro** — Bondeno
   - slug: `hotel-luna-blu-hotel-3-stelle-a-cento-frazione-c-bondeno`
   - indirizzo: Via del Lavoro, 1b, 44042 Casumaro FE
4. **Ristorante Hotel La Perla** — Bondeno
   - slug: `ristorante-hotel-la-perla-bondeno`
   - indirizzo: Via per Zerbinate, 30, 44012 Bondeno FE
5. **Ristorante Hotel Tassi** — Bondeno
   - slug: `ristorante-hotel-tassi-bondeno`
   - indirizzo: Viale della Repubblica, 23, 44012 Bondeno FE
6. **Agritur Ai Masi Pisoni Germano** — Bondone
   - slug: `agritur-ai-masi-pisoni-germano-bondone`
   - indirizzo: Via Guà, 3/a, 38076 Pergolese TN
7. **Agriturismo La Corte dei Ciliegi** — Bondone
   - slug: `agriturismo-la-corte-dei-ciliegi-bondone`
   - indirizzo: strada di Mur, 10, 38100 Vigolo Baselga TN
8. **Agriturismo malga candriai** — Bondone
   - slug: `agriturismo-malga-candriai-bondone`
   - indirizzo: Str. di Candriai, 2, 38123 Candriai TN
9. **Agriturismo Maso Lizzone** — Bondone
   - slug: `agriturismo-maso-lizzone-bondone`
   - indirizzo: Loc. Lizzone, 3, 38074 Dro TN
10. **Albergo - Bar - Ristorante Alpina Bondone** — Bondone
   - slug: `albergo-bar-ristorante-alpina-bondone-bondone`
   - indirizzo: Via Giuseppe Giusti, 28, 38080 Bondone TN
11. **B&B al Capitello** — Bondone
   - slug: `b-b-al-capitello-bondone`
   - indirizzo: Via del Capitello, 9, 38123 Trento TN
12. **Bed & Breakfast - Chalet Nicolussi** — Bondone
   - slug: `bed-breakfast-chalet-nicolussi-bondone`
   - indirizzo: Strada di Vason, 78, 38123 Monte, TN
13. **Chalet Caminetto** — Bondone
   - slug: `chalet-caminetto-bondone`
   - indirizzo: Strada di Vason, 139, 38123 Vason TN
14. **Club Hotel Zodiaco & Residence Orizzonte** — Bondone
   - slug: `club-hotel-zodiaco-residence-orizzonte-bondone`
   - indirizzo: Strada di Vaneze, 23/24 Fraz. VANEZE, I, 38123 Monte Bondone, TN
15. **Hotel Alpine Mugon** — Bondone
   - slug: `hotel-alpine-mugon-bondone`
   - indirizzo: Strada di Vason, 118, 38123 Trento TN
16. **Hotel Dolomiti Chalet** — Bondone
   - slug: `hotel-dolomiti-chalet-bondone`
   - indirizzo: Strada per Vason, 88 °, 38123 Trento TN
17. **Idroblu** — Bondone
   - slug: `idroblu-bondone`
   - indirizzo: Via G. Verdi, 17, 38080 Bondone TN
18. **Residence Cielo Aperto** — Bondone
   - slug: `residence-cielo-aperto-bondone`
   - indirizzo: Strada di Vason, 117, 38040 Vason TN
19. **Residence e Ristobar Prada** — Bondone
   - slug: `residence-e-ristobar-prada-bondone`
   - indirizzo: Strada di Vason, 87, 38123 Trento TN
20. **Affittacamere la Dormiente** — Bonea
   - slug: `affittacamere-la-dormiente-bonea`
   - indirizzo: Via Convento, 7, 82030 Torrecuso BN
21. **Affittacamere Le Viole D'oro** — Bonea
   - slug: `affittacamere-le-viole-d-oro-bonea`
   - indirizzo: Via Roma, 13, 82030 Torrecuso BN
22. **Affittacamere simona** — Bonea
   - slug: `affittacamere-simona-bonea`
   - indirizzo: Via S. Giuseppe, 24, 82016 Montesarchio BN
23. **Agriturismo Bed and Breakfast La Vista Del Taburno** — Bonea
   - slug: `agriturismo-bed-and-breakfast-la-vista-del-tabur-bonea`
   - indirizzo: Via Cirignano, 82016 Montesarchio BN
24. **B&B Dietro l'Angolo** — Bonea
   - slug: `b-b-dietro-l-angolo-bonea`
   - indirizzo: Via Tommaso Bucciano, 43, 82100 Benevento BN
25. **B&B Santa Colomba** — Bonea
   - slug: `b-b-santa-colomba-bonea`
   - indirizzo: Via Santa Colomba, 62, 82100 Benevento BN
26. **Bed Breakfast Binario38** — Bonea
   - slug: `bed-breakfast-binario38-bonea`
   - indirizzo: Via XXV Luglio, 38, 82100 Benevento BN
27. **CHORA B&B Affittacamere** — Bonea
   - slug: `chora-b-b-affittacamere-bonea`
   - indirizzo: C.da Piana, 54, 82026 Morcone BN
28. **La Corte B&B - Montesarchio** — Bonea
   - slug: `la-corte-b-b-montesarchio-bonea`
   - indirizzo: Corso Caudino, 71, 82016 Montesarchio BN
29. **Affittacamere Venere** — Bonefro
   - slug: `affittacamere-venere-bonefro`
   - indirizzo: Via Mastromichele, 86040 Pietracatella CB
30. **Agriturismo Sorgente di Luna** — Bonefro
   - slug: `agriturismo-sorgente-di-luna-bonefro`
   - indirizzo: Contrada Guardiola, 2, 86035 Larino CB
31. **Agriturismo Torre di Magliano** — Bonefro
   - slug: `agriturismo-torre-di-magliano-bonefro`
   - indirizzo: 86047, Provincia di Campobasso, Contrada Torre Magliano, snc, 86047 Santa Croce di Magliano CB
32. **B&B da Mary** — Bonefro
   - slug: `b-b-da-mary-bonefro`
   - indirizzo: SP140, 69, 86030 Matrice CB
33. **B&B Pensieri d'autore** — Bonefro
   - slug: `b-b-pensieri-d-autore-bonefro`
   - indirizzo: Via Campania, 151, 86100 Campobasso CB
34. **B&B Primo a destra** — Bonefro
   - slug: `b-b-primo-a-destra-bonefro`
   - indirizzo: Via Monfalcone, 6/1° piano, 86100 Campobasso CB
35. **Dimora Donna Dora** — Bonefro
   - slug: `dimora-donna-dora-bonefro`
   - indirizzo: Strada Porta S. Martino, 14, 86046 San Martino in Pensilis CB