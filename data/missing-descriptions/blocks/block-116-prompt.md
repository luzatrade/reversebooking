# Blocco 116/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Disarò** — Annone Veneto
   - slug: `albergo-ristorante-disaro-annone-veneto`
   - indirizzo: Via Riviera Antonio Scarpa, 1, 31045 Motta di Livenza TV
2. **Base Hotel** — Annone Veneto
   - slug: `base-hotel-annone-veneto`
   - indirizzo: Via Rialto, 8, 30020 Noventa di Piave VE
3. **Borgo Stalis Resort** — Annone Veneto
   - slug: `borgo-stalis-resort-annone-veneto`
   - indirizzo: Via Stalis, 11, 33079 Sesto al Reghena PN
4. **Cavallo Hotel** — Annone Veneto
   - slug: `cavallo-hotel-annone-veneto`
   - indirizzo: Via Rialto, 24, 30020 Noventa di Piave VE
5. **Hotel Al Barco** — Annone Veneto
   - slug: `hotel-al-barco-annone-veneto`
   - indirizzo: Via Morer delle Anime, 4, 30029 Corbolone VE
6. **Hotel Noventa** — Annone Veneto
   - slug: `hotel-noventa-annone-veneto`
   - indirizzo: Via Calnova, 124, 30020 Noventa di Piave VE
7. **Hotel Patriarca Wellness - Ristorante La Piramide** — Annone Veneto
   - slug: `hotel-patriarca-wellness-ristorante-la-piramide-annone-veneto`
   - indirizzo: Via Antonio Pascatti, 6, 33078 San Vito al Tagliamento PN
8. **Hotel Ristorante Al Gabbiano** — Annone Veneto
   - slug: `hotel-ristorante-al-gabbiano-annone-veneto`
   - indirizzo: Via Vittoria, 45, 31047 Levada TV
9. **Hotel Ristorante Casalta** — Annone Veneto
   - slug: `hotel-ristorante-casalta-annone-veneto`
   - indirizzo: Via Calnova, 170, 30020 Noventa di Piave VE
10. **Hotel Ristorante da Gigi** — Annone Veneto
   - slug: `hotel-ristorante-da-gigi-annone-veneto`
   - indirizzo: Via Fosson, 30, 30029 San Stino di Livenza VE
11. **Hotel Ristorante Villa Monica** — Annone Veneto
   - slug: `hotel-ristorante-villa-monica-annone-veneto`
   - indirizzo: Via Angelo Dino de Carli, 26, 33080 Prata di Pordenone PN
12. **Hotel Spessotto** — Annone Veneto
   - slug: `hotel-spessotto-annone-veneto`
   - indirizzo: Via Roma, 2, 30026 Portogruaro VE
13. **Hotel Sport Portogruaro** — Annone Veneto
   - slug: `hotel-sport-portogruaro-annone-veneto`
   - indirizzo: Via Stadio, 4, 30026 Portogruaro VE
14. **Il Cecchini Hotel** — Annone Veneto
   - slug: `il-cecchini-hotel-annone-veneto`
   - indirizzo: Via Sant' Antonio, 9, 33087 Pasiano di Pordenone PN
15. **Omnia Hotel** — Annone Veneto
   - slug: `omnia-hotel-annone-veneto`
   - indirizzo: Via Rialto, 1, 30020 Noventa di Piave VE
16. **Palazzo Paradiso Hotel** — Annone Veneto
   - slug: `palazzo-paradiso-hotel-annone-veneto`
   - indirizzo: Piazza Umberto I, 39, 31040 Meduna di Livenza TV
17. **Park Hotel Villa Leon d'Oro** — Annone Veneto
   - slug: `park-hotel-villa-leon-d-oro-annone-veneto`
   - indirizzo: Via Romanziol, 5/7, 30020 Venezia - Noventa di Piave VE
18. **Villa Foscarini Cornaro** — Annone Veneto
   - slug: `villa-foscarini-cornaro-annone-veneto`
   - indirizzo: Via Palazzi, 10, 31040 Gorgo al Monticano TV
19. **B&B Antares** — Anoia
   - slug: `b-b-antares-anoia`
   - indirizzo: Via Giuseppe Mazzini, 46, 89022 Cittanova RC
20. **B&B Bed and breakfast Campo Sportivo** — Anoia
   - slug: `b-b-bed-and-breakfast-campo-sportivo-anoia`
   - indirizzo: V. Giacomo Matteotti, 27, 89029 Taurianova RC
21. **B&B La Villa Cittanova** — Anoia
   - slug: `b-b-la-villa-cittanova-anoia`
   - indirizzo: Via Vincenzo Zito, 66, 89022 Cittanova RC
22. **Casa Matilde b&b** — Anoia
   - slug: `casa-matilde-b-b-anoia`
   - indirizzo: Corso Giuseppe Mazzini, 18, 89024 Polistena RC
23. **Elpidios Galatro Terme** — Anoia
   - slug: `elpidios-galatro-terme-anoia`
   - indirizzo: Via Madonna, 77, 89054 Galatro RC
24. **Hotel & Village La Porta Del Sole** — Anoia
   - slug: `hotel-village-la-porta-del-sole-anoia`
   - indirizzo: Via Boccaccio, 89026 San Ferdinando RC
25. **Hotel le Palme** — Anoia
   - slug: `hotel-le-palme-anoia`
   - indirizzo: Via Degli Ulivi, 9, 89013 Gioia Tauro RC
26. **Hotel Palace Gioia Tauro** — Anoia
   - slug: `hotel-palace-gioia-tauro-anoia`
   - indirizzo: Via Nazionale, 18/274, 89013 Gioia Tauro RC
27. **Hotel Ristorante Antica Marina** — Anoia
   - slug: `hotel-ristorante-antica-marina-anoia`
   - indirizzo: Corso Giuseppe Garibaldi, 9, 89844 Nicotera Marina VV
28. **Hotel Ristorante Mommo** — Anoia
   - slug: `hotel-ristorante-mommo-anoia`
   - indirizzo: Via Comm. Vincenzo Grio, 32, 89024 Polistena RC
29. **Insonnyroom B&B** — Anoia
   - slug: `insonnyroom-b-b-anoia`
   - indirizzo: SS 18 Tirrena Inferiore, 466, 89013 Gioia Tauro RC
30. **Le Corti Dimora Storica** — Anoia
   - slug: `le-corti-dimora-storica-anoia`
   - indirizzo: Via M. Valensise, 36, 89024 Polistena RC
31. **Le Nouveau Grand Tour - Dimora del Commendatore B&B** — Anoia
   - slug: `le-nouveau-grand-tour-dimora-del-commendatore-b-anoia`
   - indirizzo: Corso Giacomo Oliva, 13, 89017 San Giorgio Morgeto RC
32. **Le Suite Bed & Breakfast Holiday Home** — Anoia
   - slug: `le-suite-bed-breakfast-holiday-home-anoia`
   - indirizzo: Via Santa Marina, 193, 89024 Polistena RC
33. **mura 17 bed & breakfast** — Anoia
   - slug: `mura-17-bed-breakfast-anoia`
   - indirizzo: Via Muraglie, 17, 89024 Polistena RC
34. **Residence Santa Barbara** — Anoia
   - slug: `residence-santa-barbara-anoia`
   - indirizzo: Viale Autonomia, 56, 89026 San Ferdinando RC
35. **San Giuseppe** — Anoia
   - slug: `san-giuseppe-anoia`
   - indirizzo: Via del Popolo, 11, 89844 Nicotera VV