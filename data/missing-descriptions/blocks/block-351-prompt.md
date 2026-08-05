# Blocco 351/500 — 35 strutture senza descrizione IT

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

1. **West Point Airport Hotel** — Buttapietra
   - slug: `west-point-airport-hotel-buttapietra`
   - indirizzo: Via Staffali, 2/A, 37062 Dossobuono VR
2. **Hotel Des Alpes** — Buttigliera Alta
   - slug: `hotel-des-alpes-buttigliera-alta`
   - indirizzo: Corso Moncenisio, 55, 10090 Rosta TO
3. **Hotel Vittoria** — Buttigliera Alta
   - slug: `hotel-vittoria-buttigliera-alta`
   - indirizzo: Corso Torino, 90/a, 10051 Avigliana TO
4. **Oca Carolina** — Buttigliera Alta
   - slug: `oca-carolina-buttigliera-alta`
   - indirizzo: Via Cornaglio, 20, 10090 Buttigliera Alta TO
5. **Rosta Residence Ranverso** — Buttigliera Alta
   - slug: `rosta-residence-ranverso-buttigliera-alta`
   - indirizzo: Via Buttigliera Alta, 41, 10090 Rosta TO
6. **B&B Bricco dei Ciliegi** — Buttigliera d'Asti
   - slug: `b-b-bricco-dei-ciliegi-buttigliera-d-asti`
   - indirizzo: Via Del Negro, 22, 14010 Cortazzone AT
7. **B&B Il Vecchio Pero** — Buttigliera d'Asti
   - slug: `b-b-il-vecchio-pero-buttigliera-d-asti`
   - indirizzo: Frazione Morialdo, 21, 14022 Castelnuovo Don Bosco AT
8. **Cascina Barosca** — Buttigliera d'Asti
   - slug: `cascina-barosca-buttigliera-d-asti`
   - indirizzo: Frazione Morialdo, 45, 14022 Castelnuovo Don Bosco AT
9. **La valle incantata B&B e Home Restaurant** — Buttigliera d'Asti
   - slug: `la-valle-incantata-b-b-e-home-restaurant-buttigliera-d-asti`
   - indirizzo: Via Circonvallazione Savi, 45, 14019 Villanova d'Asti AT
10. **Lusi è in Collina** — Buttigliera d'Asti
   - slug: `lusi-e-in-collina-buttigliera-d-asti`
   - indirizzo: via del, Via Bricco Cisero, 6, 14013 Cortandone AT
11. **Relais Conac 1888 - Luxury B&B - Adults Only** — Buttigliera d'Asti
   - slug: `relais-conac-1888-luxury-b-b-adults-only-buttigliera-d-asti`
   - indirizzo: Piazzale Piemonte, 6b, 14022 Castelnuovo Don Bosco AT
12. **Agriturismo Il Vagabondo** — Buttrio
   - slug: `agriturismo-il-vagabondo-buttrio`
   - indirizzo: Caminetto di Buttrio, Via G. B. Beltrame, 18/1, 33042 Buttrio UD
13. **Agriturismo Meridiano** — Buttrio
   - slug: `agriturismo-meridiano-buttrio`
   - indirizzo: Localita' Busa Cappello, 1/4, 33043 Cividale del Friuli UD
14. **Agriturismo Tra Le Vigne** — Buttrio
   - slug: `agriturismo-tra-le-vigne-buttrio`
   - indirizzo: Via del Pozzo, 5, 33042 Buttrio UD
15. **Al Palazzetto** — Buttrio
   - slug: `al-palazzetto-buttrio`
   - indirizzo: Vicolo Gorgo, 3, 33100 Udine UD
16. **Alloggio Agrituristico Conte Ottelio** — Buttrio
   - slug: `alloggio-agrituristico-conte-ottelio-buttrio`
   - indirizzo: Via Torricelle, 12, 33040 Pradamano UD
17. **Azienda Agricola Castello di Buttrio Srl** — Buttrio
   - slug: `azienda-agricola-castello-di-buttrio-srl-buttrio`
   - indirizzo: Via del Pozzo, 5, 33042 Buttrio UD
18. **Castello di Buttrio - Exclusive Country House** — Buttrio
   - slug: `castello-di-buttrio-exclusive-country-house-buttrio`
   - indirizzo: Via del Pozzo, 5, 33042 Buttrio UD
19. **Danieli Factory Campus** — Buttrio
   - slug: `danieli-factory-campus-buttrio`
   - indirizzo: Via Nazionale, 73, 33042 Buttrio UD
20. **delParco Hotel** — Buttrio
   - slug: `delparco-hotel-buttrio`
   - indirizzo: Via Bonaldo Stringher, 13, 33042 Buttrio UD
21. **HOTEL CLOCCHIATTI NEXT** — Buttrio
   - slug: `hotel-clocchiatti-next-buttrio`
   - indirizzo: Via Cividale, 29, 33100 Udine UD
22. **Hotel Principe** — Buttrio
   - slug: `hotel-principe-buttrio`
   - indirizzo: V.le Europa Unita, 51, 33100 Udine UD
23. **Le Camere dell'Albero Bianco | Affittacamere con uso cucina e piscina a Manzano** — Buttrio
   - slug: `le-camere-dell-albero-bianco-affittacamere-con-u-buttrio`
   - indirizzo: Via della Chiesa, 6, 33044 Manzano UD
24. **Le Fucine Hotel** — Buttrio
   - slug: `le-fucine-hotel-buttrio`
   - indirizzo: Via Nazionale, 48, 33042 Buttrio UD
25. **VILLA DRAGONI** — Buttrio
   - slug: `villa-dragoni-buttrio`
   - indirizzo: Viale Florio, 18, 33042 Buttrio UD
26. **Agriturismo "Ca' di Matt"** — Cabella Ligure
   - slug: `agriturismo-ca-di-matt-cabella-ligure`
   - indirizzo: Cascina Valle, 1, 15060 Mongiardino Ligure AL
27. **Albergo Capanne di Cosola** — Cabella Ligure
   - slug: `albergo-capanne-di-cosola-cabella-ligure`
   - indirizzo: Loc. Capanne di Cosola, 5, 15060 Cabella Ligure AL
28. **Albergo Ponte** — Cabella Ligure
   - slug: `albergo-ponte-cabella-ligure`
   - indirizzo: Frazione Montaldo di Cosola, 5, 15060 Cabella Ligure AL
29. **B&B L'Angolo Divino** — Cabella Ligure
   - slug: `b-b-l-angolo-divino-cabella-ligure`
   - indirizzo: Via Liggia, 8, 16015 Casella GE
30. **La Baita** — Cabella Ligure
   - slug: `la-baita-cabella-ligure`
   - indirizzo: Regione Salogni, 12, 15054 Salogni AL
31. **Ristorante Albergo Cacciatori** — Cabella Ligure
   - slug: `ristorante-albergo-cacciatori-cabella-ligure`
   - indirizzo: Frazione Aie di Cosola, 41, 15060 Aie Cosola AL
32. **Albergo Ristorante Sole** — Cabiate
   - slug: `albergo-ristorante-sole-cabiate`
   - indirizzo: Piazza Roma, 41, 22066 Mariano Comense CO
33. **Blu 9 Hotel** — Cabiate
   - slug: `blu-9-hotel-cabiate`
   - indirizzo: Via Meda, 2/B, 22060 Novedrate CO
34. **Corte Del Fuin** — Cabiate
   - slug: `corte-del-fuin-cabiate`
   - indirizzo: Via Fratelli Cairoli, 33, 20831 Seregno MB
35. **Hotel Residence La Fontana** — Cabiate
   - slug: `hotel-residence-la-fontana-cabiate`
   - indirizzo: Via Padre Masciadri, 1, 22066 Mariano Comense CO