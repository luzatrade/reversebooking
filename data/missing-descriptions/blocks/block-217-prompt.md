# Blocco 217/500 — 35 strutture senza descrizione IT

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

1. **Hotel Alcide** — Barberino Tavarnelle
   - slug: `hotel-alcide-barberino-tavarnelle`
   - indirizzo: Viale Guglielmo Marconi, 67, 53036 Poggibonsi SI
2. **Hotel Borgo di Cortefreda** — Barberino Tavarnelle
   - slug: `hotel-borgo-di-cortefreda-barberino-tavarnelle`
   - indirizzo: Via Roma, 191, 50028 Barberino Tavarnelle FI
3. **Hotel Primavera** — Barberino Tavarnelle
   - slug: `hotel-primavera-barberino-tavarnelle`
   - indirizzo: Via della Repubblica, 27, 50028 Barberino Val D'elsa FI
4. **Hotel Semifonte** — Barberino Tavarnelle
   - slug: `hotel-semifonte-barberino-tavarnelle`
   - indirizzo: Via Pisana, 1 Loc, 50021 Barberino Val D'elsa FI
5. **Hotel Villa San Giorgio** — Barberino Tavarnelle
   - slug: `hotel-villa-san-giorgio-barberino-tavarnelle`
   - indirizzo: Localita' Cinciano, 5, 53036 Poggibonsi SI
6. **Il Paretaio** — Barberino Tavarnelle
   - slug: `il-paretaio-barberino-tavarnelle`
   - indirizzo: Via delle Ginestre, 12, 50028 Barberino Val D'elsa FI
7. **La Locanda di Pietracupa** — Barberino Tavarnelle
   - slug: `la-locanda-di-pietracupa-barberino-tavarnelle`
   - indirizzo: Strada Pietracupa, 31, 50028 Madonna di Pietracupa FI
8. **Le Terrazze del Chianti bed & breakfast Residenza d'Epoca e di Charme** — Barberino Tavarnelle
   - slug: `le-terrazze-del-chianti-bed-breakfast-residenza-barberino-tavarnelle`
   - indirizzo: Via del Giglio, 26 San Donato in Poggio - Chianti, 50028 Barberino Tavarnelle FI
9. **Palazzo Malaspina B&B** — Barberino Tavarnelle
   - slug: `palazzo-malaspina-b-b-barberino-tavarnelle`
   - indirizzo: Via del Giglio, 35, 50028 San Donato FI
10. **Park Hotel Chianti** — Barberino Tavarnelle
   - slug: `park-hotel-chianti-barberino-tavarnelle`
   - indirizzo: Via Michelangelo, 5, 50028 Barberino Tavarnelle FI
11. **Relais Badia a Passignano** — Barberino Tavarnelle
   - slug: `relais-badia-a-passignano-barberino-tavarnelle`
   - indirizzo: Via Martiri di Pratale, 12, 50028 Barberino Tavarnelle FI
12. **Soggiorno L'Italia** — Barberino Tavarnelle
   - slug: `soggiorno-l-italia-barberino-tavarnelle`
   - indirizzo: Via Roma, 136, 50028 Tavarnelle Val di Pesa FI
13. **Villa San Filippo | BZAR hotels** — Barberino Tavarnelle
   - slug: `villa-san-filippo-bzar-hotels-barberino-tavarnelle`
   - indirizzo: Via delle Ginestre, 6, 50028 Barberino Tavarnelle FI
14. **Agriturismo Cascina Angelina** — Barbianello
   - slug: `agriturismo-cascina-angelina-barbianello`
   - indirizzo: Str. Madonna, 87, 27045 Casteggio PV
15. **Agriturismo Corte Montini** — Barbianello
   - slug: `agriturismo-corte-montini-barbianello`
   - indirizzo: via edoardo montini, 1, 27046 Santa Giuletta PV
16. **alberodikarta b&b** — Barbianello
   - slug: `alberodikarta-b-b-barbianello`
   - indirizzo: Ca de Bazzini, 29, 27044 Canneto Pavese PV
17. **Beb l’ulivo** — Barbianello
   - slug: `beb-l-ulivo-barbianello`
   - indirizzo: Strada Privata delle Robinie, 1, 27046 Santa Giuletta PV
18. **Bresbot B&B** — Barbianello
   - slug: `bresbot-b-b-barbianello`
   - indirizzo: Via A. Depretis, 254, 27042 Bressana PV
19. **Foresteria Lombarda La vecchia cantina** — Barbianello
   - slug: `foresteria-lombarda-la-vecchia-cantina-barbianello`
   - indirizzo: Via Colombarone, 36, 27044 Canneto Pavese PV
20. **Hotel Ristorante Kataclisma** — Barbianello
   - slug: `hotel-ristorante-kataclisma-barbianello`
   - indirizzo: Via Alessandro Manzoni, 1, 27040 Casatisma PV
21. **Motel 7 Laghi** — Barbianello
   - slug: `motel-7-laghi-barbianello`
   - indirizzo: Strada Provinciale Bressana - Salice, 2, 27040 Castelletto di Branduzzo PV
22. **Albergo Stern** — Barbiano/Barbian
   - slug: `albergo-stern-barbiano-barbian`
   - indirizzo: Via Kunter, 1, 39040 Colma BZ
23. **Frühaufhof apartments** — Barbiano/Barbian
   - slug: `fruhaufhof-apartments-barbiano-barbian`
   - indirizzo: Ganderbachstraße, 10, 39040 Barbiano BZ
24. **Gamper Hof** — Barbiano/Barbian
   - slug: `gamper-hof-barbiano-barbian`
   - indirizzo: Ganderbachstraße, 2, 39040 Barbiano BZ
25. **Gasslitterhof** — Barbiano/Barbian
   - slug: `gasslitterhof-barbiano-barbian`
   - indirizzo: 12, Barbiano, Via Barbiano, 39040 Barbiano BZ
26. **Gasthof Lamm** — Barbiano/Barbian
   - slug: `gasthof-lamm-barbiano-barbian`
   - indirizzo: Via Paese, 8, 39040 Barbiano BZ
27. **Gasthof Messnerhof** — Barbiano/Barbian
   - slug: `gasthof-messnerhof-barbiano-barbian`
   - indirizzo: Via Dreikirchen, 8, 39040 Barbiano BZ
28. **Gasthof Traube** — Barbiano/Barbian
   - slug: `gasthof-traube-barbiano-barbian`
   - indirizzo: Dorf Paese, 14, 39040 Barbiano BZ
29. **Gasthof zum Englwirt** — Barbiano/Barbian
   - slug: `gasthof-zum-englwirt-barbiano-barbian`
   - indirizzo: Str. Dorf, 2, 39040 Barbiano BZ
30. **Gostnerhof** — Barbiano/Barbian
   - slug: `gostnerhof-barbiano-barbian`
   - indirizzo: Via Barbiano, 9, 39040 Barbiano BZ
31. **haus urban Apartments** — Barbiano/Barbian
   - slug: `haus-urban-apartments-barbiano-barbian`
   - indirizzo: Via delle Cascate, 1, 39040 Barbiano BZ
32. **Hotel Barbianerhof** — Barbiano/Barbian
   - slug: `hotel-barbianerhof-barbiano-barbian`
   - indirizzo: Via dei Campi, 19, 39040 Barbiano BZ
33. **Hotel Briol** — Barbiano/Barbian
   - slug: `hotel-briol-barbiano-barbian`
   - indirizzo: Via Briol, 1, 39040 Barbiano BZ
34. **Hotel Eismacherei Rösslwirt Barbian** — Barbiano/Barbian
   - slug: `hotel-eismacherei-rosslwirt-barbian-barbiano-barbian`
   - indirizzo: Via Paese, Dorf, 6, 39040 Barbiano BZ
35. **Hotel Haus an der Luck** — Barbiano/Barbian
   - slug: `hotel-haus-an-der-luck-barbiano-barbian`
   - indirizzo: Via Rosengarten, 11, 39040 Barbiano BZ