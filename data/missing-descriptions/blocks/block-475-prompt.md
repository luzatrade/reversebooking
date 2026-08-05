# Blocco 475/500 — 35 strutture senza descrizione IT

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

1. **Cuarto Hotel Cebu** — Cebu
   - slug: `cuarto-hotel-cebu-cebu`
   - indirizzo: Corner J.Llorente, and G, Don Gil Garcia St, Cebu City, 6000 Cebu
2. **Escario Central Hotel** — Cebu
   - slug: `escario-central-hotel-cebu`
   - indirizzo: 8V9V+7JQ, N Escario St, Cebu City, 6000 Cebu
3. **Hamersons Hotel Cebu** — Cebu
   - slug: `hamersons-hotel-cebu-cebu`
   - indirizzo: 0337 Don Mariano Cui St, Cebu City, 6000 Cebu
4. **Holiday Plaza Hotel - Cebu City** — Cebu
   - slug: `holiday-plaza-hotel-cebu-city-cebu`
   - indirizzo: F. Ramos St, Cebu City, 6000 Cebu
5. **Hotel Elizabeth Cebu** — Cebu
   - slug: `hotel-elizabeth-cebu-cebu`
   - indirizzo: 8W82+GVJ, Archbishop Reyes Ave, Cebu City, 6000 Cebu
6. **Lex Hotel Cebu** — Cebu
   - slug: `lex-hotel-cebu-cebu`
   - indirizzo: Escario St., cor. Juana Osmena, Ext Juana Osmeña Extension Rd, Cebu City, 6000 Cebu
7. **NS Royal Hotel** — Cebu
   - slug: `ns-royal-hotel-cebu`
   - indirizzo: 8V6W+R3P Uptown Business District, Juana Osmeña St, Cebu City, 6000 Cebu
8. **Pacific Pensionne House** — Cebu
   - slug: `pacific-pensionne-house-cebu`
   - indirizzo: 313-A Jones Avenue, Osmeña Blvd, Cebu City, 6000 Cebu
9. **Primeway Suites Cebu** — Cebu
   - slug: `primeway-suites-cebu-cebu`
   - indirizzo: 3rd Floor, Primeway Plaza, G/F Space #3 and #4A, 176 F. Ramos St, Cebu City, 6000 Cebu
10. **Rajah Park Hotel** — Cebu
   - slug: `rajah-park-hotel-cebu`
   - indirizzo: Benigno DU Building, Fuente Osmeña Cir, Cebu City, 6000 Cebu
11. **Artemis Hotel Cefalù** — Cefal�
   - slug: `artemis-hotel-cefalu-cefal`
   - indirizzo: Via Roma, 101, 90015 Cefalù PA
12. **Astro Suite Hotel RTA 4 stelle** — Cefal�
   - slug: `astro-suite-hotel-rta-4-stelle-cefal`
   - indirizzo: Lungomare Giuseppe Giardina, 90015 Cefalù PA
13. **Blue Bay** — Cefal�
   - slug: `blue-bay-cefal`
   - indirizzo: Via Cavallaro, 18, 90015 Cefalù PA
14. **Cefalù Sea Palace** — Cefal�
   - slug: `cefalu-sea-palace-cefal`
   - indirizzo: Lungomare Giuseppe Giardina, snc, 90015 Cefalù PA
15. **Emerald Hotel Residence Cefalu** — Cefal�
   - slug: `emerald-hotel-residence-cefalu-cefal`
   - indirizzo: Via Cefalù, 90015 Sant'Ambrogio PA
16. **Hotel - Residence Calanica** — Cefal�
   - slug: `hotel-residence-calanica-cefal`
   - indirizzo: Via della, Via della Calagrande, 90015 Cefalù PA
17. **Hotel Alberi del Paradiso - Cefalù** — Cefal�
   - slug: `hotel-alberi-del-paradiso-cefalu-cefal`
   - indirizzo: Via dei Mulini, 18/20, 90015 Cefalù PA
18. **Hotel Kalura** — Cefal�
   - slug: `hotel-kalura-cefal`
   - indirizzo: Via Cavallaro, 13, 90015 Cefalù PA
19. **Hotel Le Calette** — Cefal�
   - slug: `hotel-le-calette-cefal`
   - indirizzo: V. Angela di Francesca, 1, 90015 Cefalù PA
20. **Hotel Mediterraneo** — Cefal�
   - slug: `hotel-mediterraneo-cefal`
   - indirizzo: Via Antonio Gramsci, 2, 90015 Cefalù PA
21. **HOTEL RIVA DEL SOLE CEFALU'** — Cefal�
   - slug: `hotel-riva-del-sole-cefalu-cefal`
   - indirizzo: Viale, Lungomare Giuseppe Giardina, n.25, 90015 Cefalù PA
22. **Hotel Santa Lucia Le Sabbie D'Oro** — Cefal�
   - slug: `hotel-santa-lucia-le-sabbie-d-oro-cefal`
   - indirizzo: Contrada Santa Lucia, SS 113 Settentrionale Sicula, 90015 Cefalù PA
23. **Hotel Tourist** — Cefal�
   - slug: `hotel-tourist-cefal`
   - indirizzo: Lungomare Giuseppe Giardina, 145, 90015 Cefalù PA
24. **Hotel Vallegrande Nature Resort Cefalù by Geocharme - CIN IT082027A1N5RHY3WD** — Cefal�
   - slug: `hotel-vallegrande-nature-resort-cefalu-by-geocha-cefal`
   - indirizzo: Contrada Vallegrande, 90015 Cefalù PA
25. **Insulae Resort** — Cefal�
   - slug: `insulae-resort-cefal`
   - indirizzo: Via Samotracia, 90015 Cefalù PA
26. **La Plumeria Hotel Restaurant** — Cefal�
   - slug: `la-plumeria-hotel-restaurant-cefal`
   - indirizzo: Corso Ruggero, 185, 90015 Cefalù PA
27. **Resort Hotel Baia del Capitano** — Cefal�
   - slug: `resort-hotel-baia-del-capitano-cefal`
   - indirizzo: Contrada Mazzaforno, 90015 Mazzaforno PA
28. **Salemare Rooms & Suites** — Cefal�
   - slug: `salemare-rooms-suites-cefal`
   - indirizzo: Cortile Cristoforo Colombo, 90015 Cefalù PA
29. **Sunset Hotel** — Cefal�
   - slug: `sunset-hotel-cefal`
   - indirizzo: Lungomare Giuseppe Giardina, 119, 90015 Cefalù PA
30. **Al Pescatore Hotel - 3 Stelle** — Cefal� Diana
   - slug: `al-pescatore-hotel-3-stelle-cefal-diana`
   - indirizzo: Via Dietro Castello, 6, 90015 Cefalù PA
31. **b&b Caravella Mezzojuso** — Cefal� Diana
   - slug: `b-b-caravella-mezzojuso-cefal-diana`
   - indirizzo: Corso Vittorio Emanuele 46, Via Ugo Bassi, 1, 90030 Mezzojuso PA
32. **Hotel La Giara** — Cefal� Diana
   - slug: `hotel-la-giara-cefal-diana`
   - indirizzo: Via Veterani, 40, 90015 Cefalù PA
33. **Hotel Restaurant Diana** — Cefal� Diana
   - slug: `hotel-restaurant-diana-cefal-diana`
   - indirizzo: C/da San Paolo, snc, 90051 Ustica PA
34. **Victoria Palace Hotel** — Cefal� Diana
   - slug: `victoria-palace-hotel-cefal-diana`
   - indirizzo: Lungomare Giuseppe Giardina, 90015 Cefalù PA
35. **Antica Acropoli Locazione Turistica Centuripe** — Centuripe
   - slug: `antica-acropoli-locazione-turistica-centuripe-centuripe`
   - indirizzo: Piazza Lanuvio, 23, 94010 Centuripe EN