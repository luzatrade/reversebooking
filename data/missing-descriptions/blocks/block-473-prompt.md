# Blocco 473/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Tempio di Hera** — Castelvetrano
   - slug: `b-b-il-tempio-di-hera-castelvetrano`
   - indirizzo: S.S. 115, C/Da Garraffo, 16, 91022 Castelvetrano TP
2. **Baitan - Custom Experience Hotel** — Castelvetrano
   - slug: `baitan-custom-experience-hotel-castelvetrano`
   - indirizzo: Contrada Spagnola, 337/D Bis, 91025 Marsala TP
3. **Bed and Breakfast San Giovanni** — Castelvetrano
   - slug: `bed-and-breakfast-san-giovanni-castelvetrano`
   - indirizzo: Via XXIV Maggio, 91022 Castelvetrano TP
4. **HOME DOLCE LUNA** — Castelvetrano
   - slug: `home-dolce-luna-castelvetrano`
   - indirizzo: Via Pietro Luna, 91022 Castelvetrano TP
5. **Hotel Alceste** — Castelvetrano
   - slug: `hotel-alceste-castelvetrano`
   - indirizzo: Via Alceste, 21, 91022 Marinella TP
6. **La Terrazza di Harmakhis** — Castelvetrano
   - slug: `la-terrazza-di-harmakhis-castelvetrano`
   - indirizzo: Bivio Cappuccini, Snc, 91028 Partanna TP
7. **Mahara Hotel** — Castelvetrano
   - slug: `mahara-hotel-castelvetrano`
   - indirizzo: Lungomare S. Vito, 3, 91026 Mazara del Vallo TP
8. **Palazzo al Carmine Dimora Storica** — Castelvetrano
   - slug: `palazzo-al-carmine-dimora-storica-castelvetrano`
   - indirizzo: Via Giacomo Leopardi, 25, 91022 Castelvetrano TP
9. **Affittacamere Bellavista** — Castiglione di Sicilia
   - slug: `affittacamere-bellavista-castiglione-di-sicilia`
   - indirizzo: Via S. Francesco, 95012 Castiglione di Sicilia CT
10. **Agriturismo, Bedandbreakfast, Ghiritina** — Castiglione di Sicilia
   - slug: `agriturismo-bedandbreakfast-ghiritina-castiglione-di-sicilia`
   - indirizzo: Contrada Ghiritina, 98034 Francavilla di Sicilia ME
11. **Animosa Suites** — Castiglione di Sicilia
   - slug: `animosa-suites-castiglione-di-sicilia`
   - indirizzo: Via Guglielmo Marconi, 95012 Castiglione di Sicilia CT
12. **B&B - Country house- Il Tanaceto** — Castiglione di Sicilia
   - slug: `b-b-country-house-il-tanaceto-castiglione-di-sicilia`
   - indirizzo: Contrada Nemmi, 95012 Castiglione di Sicilia CT
13. **B&B Le Vie del Borgo** — Castiglione di Sicilia
   - slug: `b-b-le-vie-del-borgo-castiglione-di-sicilia`
   - indirizzo: via maggiore baracca, 5, 95012 Castiglione di Sicilia CT
14. **CarMa Luxury Rooms** — Castiglione di Sicilia
   - slug: `carma-luxury-rooms-castiglione-di-sicilia`
   - indirizzo: Via Gorizia, 6, 95015 Linguaglossa CT
15. **Casa Fiore del Borgo** — Castiglione di Sicilia
   - slug: `casa-fiore-del-borgo-castiglione-di-sicilia`
   - indirizzo: Via Dante Alighieri, 8, 95012 Castiglione di Sicilia CT
16. **Casa Fiore nella Roccia** — Castiglione di Sicilia
   - slug: `casa-fiore-nella-roccia-castiglione-di-sicilia`
   - indirizzo: Via Madonna della Catena, 82, 95012 Castiglione di Sicilia CT
17. **Casale Romano eco hotel** — Castiglione di Sicilia
   - slug: `casale-romano-eco-hotel-castiglione-di-sicilia`
   - indirizzo: ss 185 km 55, 6, 98030 Motta Camastra ME
18. **Cento Tarì Guest House** — Castiglione di Sicilia
   - slug: `cento-tari-guest-house-castiglione-di-sicilia`
   - indirizzo: Via Regina Margherita, 28, 95012 Castiglione di Sicilia CT
19. **Hotel Federico II** — Castiglione di Sicilia
   - slug: `hotel-federico-ii-castiglione-di-sicilia`
   - indirizzo: Via Maggiore Baracca, 2, 95012 Castiglione di Sicilia CT
20. **Hotel Florio** — Castiglione di Sicilia
   - slug: `hotel-florio-castiglione-di-sicilia`
   - indirizzo: Via Biblioteca Villadicanense, 10, 95012 Castiglione di Sicilia CT
21. **Il Glicine** — Castiglione di Sicilia
   - slug: `il-glicine-castiglione-di-sicilia`
   - indirizzo: Via S. Giuseppe, 8, 95017 Piedimonte Etneo CT
22. **L’ Arco dei Sogni** — Castiglione di Sicilia
   - slug: `l-arco-dei-sogni-castiglione-di-sicilia`
   - indirizzo: Via Posta Vecchia, 1, 98030 Malvagna ME
23. **Mareneve Resort** — Castiglione di Sicilia
   - slug: `mareneve-resort-castiglione-di-sicilia`
   - indirizzo: Via Mareneve, 63, 95015 Linguaglossa CT
24. **Terralcantara la Casa delle Monache** — Castiglione di Sicilia
   - slug: `terralcantara-la-casa-delle-monache-castiglione-di-sicilia`
   - indirizzo: Contrada Finaita, 98034 Graniti ME
25. **B&B Babilonia** — Castrofilippo
   - slug: `b-b-babilonia-castrofilippo`
   - indirizzo: V G Leopardi, 7, 92020 Castrofilippo AG
26. **B&B Ercole** — Castrofilippo
   - slug: `b-b-ercole-castrofilippo`
   - indirizzo: Viale Cannatello, 50, 92100 Agrigento AG
27. **B&B VILLA JOLANDA & CARMELO** — Castrofilippo
   - slug: `b-b-villa-jolanda-carmelo-castrofilippo`
   - indirizzo: Contrada Mosella, 41, 92100 Villaggio Mosè AG
28. **Casa di Mamma 'Ntò B&B** — Castrofilippo
   - slug: `casa-di-mamma-nto-b-b-castrofilippo`
   - indirizzo: Via Guido Rossa, 92020 Castrofilippo AG
29. **Casa Vacanze Nonno Pietro** — Castrofilippo
   - slug: `casa-vacanze-nonno-pietro-castrofilippo`
   - indirizzo: Via Ciccarelli, 9, 92020 Castrofilippo AG
30. **Hotel Kore** — Castrofilippo
   - slug: `hotel-kore-castrofilippo`
   - indirizzo: Viale Leonardo Sciascia, 210, 92100 Agrigento AG
31. **Hotel Tre Torri - Agrigento** — Castrofilippo
   - slug: `hotel-tre-torri-agrigento-castrofilippo`
   - indirizzo: Viale Cannatello, 7, 92100 Villaggio Mosè AG
32. **Il Moro - Agrigento Rooms** — Castrofilippo
   - slug: `il-moro-agrigento-rooms-castrofilippo`
   - indirizzo: Viale Aldo Moro, 234, 92026 Favara AG
33. **Marianè** — Castrofilippo
   - slug: `mariane-castrofilippo`
   - indirizzo: Via S. Benedetto, 3, 92026 Favara AG
34. **Agriturismo Il Gelsomino Ritrovato** — Castroreale
   - slug: `agriturismo-il-gelsomino-ritrovato-castroreale`
   - indirizzo: Via Orgaz, 19, 98057 Milazzo ME
35. **Albergo Mendolia** — Castroreale
   - slug: `albergo-mendolia-castroreale`
   - indirizzo: Via Madonna delle Grazie, 48, 98057 Milazzo ME