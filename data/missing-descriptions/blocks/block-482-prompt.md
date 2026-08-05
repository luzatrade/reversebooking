# Blocco 482/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Al Giardino dei limoni** — Favignana
   - slug: `affittacamere-al-giardino-dei-limoni-favignana`
   - indirizzo: Vicolo Domenico Cimarosa, 12, 91023 Favignana TP
2. **Ajamola '800** — Favignana
   - slug: `ajamola-800-favignana`
   - indirizzo: Via C. Colombo, 50, 91023 Favignana TP
3. **Albergo Egadi** — Favignana
   - slug: `albergo-egadi-favignana`
   - indirizzo: Via C. Colombo, 17, 91023 Favignana TP
4. **B&B Scalo Vecchio** — Favignana
   - slug: `b-b-scalo-vecchio-favignana`
   - indirizzo: Via San Giuseppe, 9, 91023 Marettimo TP
5. **Bed & Breakfast Sulmare Marettimo** — Favignana
   - slug: `bed-breakfast-sulmare-marettimo-favignana`
   - indirizzo: Via Campi, 22, 91023 Marettimo TP
6. **Cave Bianche Hotel** — Favignana
   - slug: `cave-bianche-hotel-favignana`
   - indirizzo: SC Fanfalo, 91023 Favignana TP
7. **Dimora La Torre Room** — Favignana
   - slug: `dimora-la-torre-room-favignana`
   - indirizzo: Via Vittorio Emanuele, 31, 91023 Favignana TP
8. **FAVIGNANA HOTEL Concept Holiday** — Favignana
   - slug: `favignana-hotel-concept-holiday-favignana`
   - indirizzo: via circonvallazione, 91023 Favignana TP
9. **Hotel Aegusa** — Favignana
   - slug: `hotel-aegusa-favignana`
   - indirizzo: Via Giuseppe Garibaldi, 11/17, 91023 Favignana TP
10. **Hotel Il Portico** — Favignana
   - slug: `hotel-il-portico-favignana`
   - indirizzo: Via Meucci, 3, 91023 Favignana TP
11. **Hotel Tempo di Mare** — Favignana
   - slug: `hotel-tempo-di-mare-favignana`
   - indirizzo: Via Frascia, 6, 91023 Favignana TP
12. **Il Corallo Rosso** — Favignana
   - slug: `il-corallo-rosso-favignana`
   - indirizzo: Contrada Setteminne, Snc, 91023 Favignana TP
13. **Il Mulino** — Favignana
   - slug: `il-mulino-favignana`
   - indirizzo: Via Alessandro Manzoni, 38, 91023 Favignana TP
14. **Insula Hotel** — Favignana
   - slug: `insula-hotel-favignana`
   - indirizzo: Via Daniele Manin, 2, 91023 Favignana TP
15. **Isola del Miele Affitta camere** — Favignana
   - slug: `isola-del-miele-affitta-camere-favignana`
   - indirizzo: Via Chiesella, 91010 Marettimo TP
16. **L'Oasi di Favignana** — Favignana
   - slug: `l-oasi-di-favignana-favignana`
   - indirizzo: Via Vincenzo Fardella, 49, 91023 Favignana TP
17. **Mangia's Favignana Resort** — Favignana
   - slug: `mangia-s-favignana-resort-favignana`
   - indirizzo: Punta Fanfalo, Str. Costiera di Mezzogiorno, 91023 Favignana TP
18. **Miramare Residence** — Favignana
   - slug: `miramare-residence-favignana`
   - indirizzo: Strada Provinciale Punta Sottile, 10, 91023 Favignana TP
19. **Borgo del Carato Case Sollima** — Ferla
   - slug: `borgo-del-carato-case-sollima-ferla`
   - indirizzo: S.S. 124, Km 97.100, 96010 Palazzolo Acreide SR
20. **Ficodindia rooms Sortino Pantalica** — Ferla
   - slug: `ficodindia-rooms-sortino-pantalica-ferla`
   - indirizzo: Ronco II di Via S. Francesco, 96010 Sortino SR
21. **Zaiera Resort 4 stelle** — Ferla
   - slug: `zaiera-resort-4-stelle-ferla`
   - indirizzo: SS124, CONTRADA ZAIERA, SNC, 96010 Solarino SR
22. **B&B HOTEL Ferrara** — Ferrara
   - slug: `b-b-hotel-ferrara-ferrara`
   - indirizzo: Via Giovan Battista Pigna, 5/7, 44100 Ferrara FE, Italia
23. **B&B Casa Degli Artisti** — Ficarazzi
   - slug: `b-b-casa-degli-artisti-ficarazzi`
   - indirizzo: Via Lincoln, 101, 90133 Palermo PA
24. **B&B La Scivola Rooms** — Ficarazzi
   - slug: `b-b-la-scivola-rooms-ficarazzi`
   - indirizzo: Via Provinciale, 38, 95021 Aci Castello CT
25. **B&B Oasis - Acitrezza** — Ficarazzi
   - slug: `b-b-oasis-acitrezza-ficarazzi`
   - indirizzo: Via Gondar, 43, 95021 Aci Castello CT
26. **B&B Palazzo Corselli** — Ficarazzi
   - slug: `b-b-palazzo-corselli-ficarazzi`
   - indirizzo: Corso Butera, 100, 90011 Bagheria PA
27. **B&B Pirriera Aspra Palermo** — Ficarazzi
   - slug: `b-b-pirriera-aspra-palermo-ficarazzi`
   - indirizzo: Corso Baldassare Scaduto, 95, 90011 Bagheria PA
28. **Bed & Breakfast Marina d’Aspra** — Ficarazzi
   - slug: `bed-breakfast-marina-d-aspra-ficarazzi`
   - indirizzo: Via Concordia Mediterranea, 6b, 90011 Aspra PA
29. **Casa del mare mely** — Ficarazzi
   - slug: `casa-del-mare-mely-ficarazzi`
   - indirizzo: Via Mare, 65, 90010 Ficarazzi PA
30. **La Martinica Casa Vacanze** — Ficarazzi
   - slug: `la-martinica-casa-vacanze-ficarazzi`
   - indirizzo: Via Marco Polo, 1, 90010 Ficarazzi PA
31. **Villa Flavia Eco B&B** — Ficarazzi
   - slug: `villa-flavia-eco-b-b-ficarazzi`
   - indirizzo: Contrada Urio, 13, 90017 Capo Zafferano PA
32. **VILLA HEMINGWAY - LA CASA DI LEONARDO E LA CASA DI ALESSIA** — Ficarazzi
   - slug: `villa-hemingway-la-casa-di-leonardo-e-la-casa-di-ficarazzi`
   - indirizzo: Viale Europa, 29 B, 90010 Ficarazzi PA
33. **San Noto Antica residenza di caccia** — Ficarra
   - slug: `san-noto-antica-residenza-di-caccia-ficarra`
   - indirizzo: Contrada S. Noto, 11, 98062 Ficarra ME
34. **Villa Ginevra** — Ficarra
   - slug: `villa-ginevra-ficarra`
   - indirizzo: SP146, 98062 Ficarra ME
35. **Albergo Nizza** — Fiumedinisi
   - slug: `albergo-nizza-fiumedinisi`
   - indirizzo: Corso Umberto I, 138, 98026 Nizza di Sicilia ME