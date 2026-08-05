# Blocco 119/500 — 35 strutture senza descrizione IT

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

1. **Cascina Ghitin Relais** — Antignano
   - slug: `cascina-ghitin-relais-antignano`
   - indirizzo: Str. Valle Orfane, 106, 14100 Asti AT
2. **Dimora Cordero - Camere di charme** — Antignano
   - slug: `dimora-cordero-camere-di-charme-antignano`
   - indirizzo: Via Roma, 41, 12040 Priocca CN
3. **Hotel&SPA Stella delle Langhe** — Antignano
   - slug: `hotel-spa-stella-delle-langhe-antignano`
   - indirizzo: Via Giuseppe Romita, 8a, 12040 Canove CN
4. **La Cascina del Castello** — Antignano
   - slug: `la-cascina-del-castello-antignano`
   - indirizzo: Frazione S. Marzanotto, 151, 14100 Asti AT
5. **La Fabbrica dell'Oro** — Antignano
   - slug: `la-fabbrica-dell-oro-antignano`
   - indirizzo: Via Carlo Lessona, 8, 14100 Asti AT
6. **La Granda agrirelax** — Antignano
   - slug: `la-granda-agrirelax-antignano`
   - indirizzo: Via Asti, 41, 14010 San Martino Alfieri AT
7. **La Rondinella da Zulmira** — Antignano
   - slug: `la-rondinella-da-zulmira-antignano`
   - indirizzo: Regione San Grato, 82, 14018 Villafranca d'Asti AT
8. **La Valle Bed and breakfast Asti** — Antignano
   - slug: `la-valle-bed-and-breakfast-asti-antignano`
   - indirizzo: Strada Lascaris, FRAZIONE, 61/62, 14100 Valleandona AT
9. **Luna del Bel Vedere** — Antignano
   - slug: `luna-del-bel-vedere-antignano`
   - indirizzo: Corso Giacomo Matteotti, 129, 14100 Asti AT
10. **Moonfrà** — Antignano
   - slug: `moonfra-antignano`
   - indirizzo: Via Malabaila, 8, 14010 Antignano AT
11. **Phi Hotel Palio** — Antignano
   - slug: `phi-hotel-palio-antignano`
   - indirizzo: Via C. Benso di Cavour, 106, 14100 Asti AT
12. **Stanza di 'Nonna Giovanna'** — Antignano
   - slug: `stanza-di-nonna-giovanna-antignano`
   - indirizzo: d'Asti, Strada Morgnano, 1, 14010 Morgnano AT
13. **Sunstar Hotel Piemont** — Antignano
   - slug: `sunstar-hotel-piemont-antignano`
   - indirizzo: Via Mario Bausola, 2, 14057 Isola d'Asti AT
14. **WellHome Asti** — Antignano
   - slug: `wellhome-asti-antignano`
   - indirizzo: Piazza Leonardo da Vinci, 29, 14100 Asti AT
15. **'A Nuciara Park Hotel & Wellness Center** — Antillo
   - slug: `a-nuciara-park-hotel-wellness-center-antillo`
   - indirizzo: Via Portella, 88, 98023 Grotte, Furci Siculo ME
16. **Agriturismo La Quercia** — Antillo
   - slug: `agriturismo-la-quercia-antillo`
   - indirizzo: Unnamed Road,98050 37°58'59.2"N 15°11'39.2"E, 98050 Fondachelli-Fantina ME
17. **Agriturismo Pilato - Antillo** — Antillo
   - slug: `agriturismo-pilato-antillo-antillo`
   - indirizzo: Contrada Pilato, 98030 Antillo ME
18. **Albergo Diffuso Borgo Gallodoro** — Antillo
   - slug: `albergo-diffuso-borgo-gallodoro-antillo`
   - indirizzo: Via Gioiello, 2, 98030 Gallodoro ME
19. **B&B La Dolce Mela** — Antillo
   - slug: `b-b-la-dolce-mela-antillo`
   - indirizzo: Via Manganelli, 3, 98034 Francavilla di Sicilia ME
20. **B&B Quattro Torri** — Antillo
   - slug: `b-b-quattro-torri-antillo`
   - indirizzo: Via Regina Margherita, 338, 98028 Santa Teresa di Riva ME
21. **B&B Villa Grazia** — Antillo
   - slug: `b-b-villa-grazia-antillo`
   - indirizzo: via Girgenti 3, Rocchenere 98020 Pagliara, 98020 Rocchenere ME
22. **Camere Santa Margherita** — Antillo
   - slug: `camere-santa-margherita-antillo`
   - indirizzo: Via Santa Margherita, 8, 98030 Sant'Alessio Siculo ME
23. **Elihotel** — Antillo
   - slug: `elihotel-antillo`
   - indirizzo: Via Lungomare, 274, 98030 Sant'Alessio Siculo ME
24. **Hotel Agostiniana** — Antillo
   - slug: `hotel-agostiniana-antillo`
   - indirizzo: Via Alcide de Gasperi, 98030 Forza d'Agrò ME
25. **Hotel La Grotta Di Foti Santo** — Antillo
   - slug: `hotel-la-grotta-di-foti-santo-antillo`
   - indirizzo: Via Consolare Valeria, 218, 98030 Sant'Alessio Siculo ME
26. **Hotel Marabel** — Antillo
   - slug: `hotel-marabel-antillo`
   - indirizzo: Via Antonio Musumeci, 29, 98030 Sant'Alessio Siculo ME
27. **Hotel San Pietro Beach** — Antillo
   - slug: `hotel-san-pietro-beach-antillo`
   - indirizzo: Via Luigi Rizzo, 98037 Letojanni ME
28. **I Tesori del Mare** — Antillo
   - slug: `i-tesori-del-mare-antillo`
   - indirizzo: Vico Adua, 12, 98037 Letojanni ME
29. **Il Belvedere** — Antillo
   - slug: `il-belvedere-antillo`
   - indirizzo: Via Botte, 98038 Savoca ME
30. **Orizzonte Hotel** — Antillo
   - slug: `orizzonte-hotel-antillo`
   - indirizzo: Via Michelangelo Garufi, 34, 98037 Letojanni ME
31. **Palazzo Durante** — Antillo
   - slug: `palazzo-durante-antillo`
   - indirizzo: Piazza Durante, 14, 98037 Letojanni ME
32. **VERDE MARE** — Antillo
   - slug: `verde-mare-antillo`
   - indirizzo: Via F. Crispi, n° 70, 98028 Santa Teresa di Riva ME
33. **VERDELLO HOME SAVOCA** — Antillo
   - slug: `verdello-home-savoca-antillo`
   - indirizzo: Via Scorsonello, 3, 98038 Savoca ME
34. **Barone G. R. Macrì** — Antonimina
   - slug: `barone-g-r-macri-antonimina`
   - indirizzo: Contrada Modi, 89040 Gerace RC
35. **Bed And Breakfast Bellavista** — Antonimina
   - slug: `bed-and-breakfast-bellavista-antonimina`
   - indirizzo: Contrada Rocca, 6, 89040 Gerace RC