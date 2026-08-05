# Blocco 353/500 — 35 strutture senza descrizione IT

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

1. **Azienda Agricola Il Contadino di Punghellini** — Cadelbosco di Sopra
   - slug: `azienda-agricola-il-contadino-di-punghellini-cadelbosco-di-sopra`
   - indirizzo: V. Carlo Marx, 97, 42124 Reggio nell'Emilia RE
2. **Casa Isabel** — Cadelbosco di Sopra
   - slug: `casa-isabel-cadelbosco-di-sopra`
   - indirizzo: Via Caduti di Via Nuova, 6, 42023 Cadelbosco di Sopra RE
3. **IL CASALE Bed & Breakfast** — Cadelbosco di Sopra
   - slug: `il-casale-bed-breakfast-cadelbosco-di-sopra`
   - indirizzo: Via Leonardo da Vinci, 23, 42023 Cadelbosco di Sotto RE
4. **Master Hotel** — Cadelbosco di Sopra
   - slug: `master-hotel-cadelbosco-di-sopra`
   - indirizzo: Galleria Giuseppe Carretti, 3/a, 42023 Cadelbosco di Sopra RE
5. **Pianderna Agriwellness** — Cadelbosco di Sopra
   - slug: `pianderna-agriwellness-cadelbosco-di-sopra`
   - indirizzo: Via Pianderna, 9, 42019 Scandiano RE
6. **Ristorante Hotel Bar Gemmi** — Cadelbosco di Sopra
   - slug: `ristorante-hotel-bar-gemmi-cadelbosco-di-sopra`
   - indirizzo: Via G. Marconi, 2, 42023 Cadelbosco di Sotto RE
7. **Affittacamere R&B Emilia 54** — Cadeo
   - slug: `affittacamere-r-b-emilia-54-cadeo`
   - indirizzo: Via S. Rocco, 2, 29010 Cadeo PC
8. **B&B La Villetta** — Cadeo
   - slug: `b-b-la-villetta-cadeo`
   - indirizzo: Via Marco Boscarelli, 16, 29121 Piacenza PC
9. **Best Western Park Hotel** — Cadeo
   - slug: `best-western-park-hotel-cadeo`
   - indirizzo: Str. Val Nure, 7, 29122 Piacenza PC
10. **Cristal** — Cadeo
   - slug: `cristal-cadeo`
   - indirizzo: Via Cristoforo Colombo, 126, 29122 Piacenza PC
11. **La Scottina Relais & Bistrot** — Cadeo
   - slug: `la-scottina-relais-bistrot-cadeo`
   - indirizzo: Str. Riglio, snc, 29010 Cadeo PC
12. **Villa Costanza Hotel & Gourmet Restaurant** — Cadeo
   - slug: `villa-costanza-hotel-gourmet-restaurant-cadeo`
   - indirizzo: Strada Ponteriglio, 27, 29010 Pontenure PC
13. **Albergo Palazzo Lodron Bertelli** — Caderzone Terme
   - slug: `albergo-palazzo-lodron-bertelli-caderzone-terme`
   - indirizzo: Piazza S. Antonio, 38080 Caderzone TN
14. **Centro Pineta Family Hotel & Wellness** — Caderzone Terme
   - slug: `centro-pineta-family-hotel-wellness-caderzone-terme`
   - indirizzo: Via Giacomo Matteotti, 43, 38086 Pinzolo TN
15. **Hotel Denny** — Caderzone Terme
   - slug: `hotel-denny-caderzone-terme`
   - indirizzo: Via Giuseppe Garibaldi, 4, 38080 Carisolo TN
16. **Hotel Orso Grigio** — Caderzone Terme
   - slug: `hotel-orso-grigio-caderzone-terme`
   - indirizzo: Via Roncac, 6, 38080 Carisolo TN
17. **Hotel Villa Fosine Di Maffei Raffaela & C. Snc** — Caderzone Terme
   - slug: `hotel-villa-fosine-di-maffei-raffaela-c-snc-caderzone-terme`
   - indirizzo: Via Fucine, 19, 38086 Pinzolo TN
18. **Maso del Brenta** — Caderzone Terme
   - slug: `maso-del-brenta-caderzone-terme`
   - indirizzo: Località Pan, 38080 Caderzone TN
19. **Anman S.R.L** — Cadoneghe
   - slug: `anman-s-r-l-cadoneghe`
   - indirizzo: Piazzale della Stazione, 6, 35131 Padova PD
20. **B&B William** — Cadoneghe
   - slug: `b-b-william-cadoneghe`
   - indirizzo: Vicolo Bernardo Parentino, 7, 35132 Padova PD
21. **Bed and Breakfast Agostini Daniela** — Cadoneghe
   - slug: `bed-and-breakfast-agostini-daniela-cadoneghe`
   - indirizzo: Via Belvedere, 1, 35010 Cadoneghe PD
22. **Casa del Pellegrino** — Cadoneghe
   - slug: `casa-del-pellegrino-cadoneghe`
   - indirizzo: Via M. Cesarotti, 21, 35123 Padova PD
23. **Hilton Garden Inn Padua City Centre** — Cadoneghe
   - slug: `hilton-garden-inn-padua-city-centre-cadoneghe`
   - indirizzo: Corso Milano, 40, 35139 Padova PD
24. **HORNEL room** — Cadoneghe
   - slug: `hornel-room-cadoneghe`
   - indirizzo: Via Franzela, 3, 35135 Padova PD
25. **Hotel Autostrada** — Cadoneghe
   - slug: `hotel-autostrada-cadoneghe`
   - indirizzo: Via S. Marco, 5, 35129 Padova PD
26. **Hotel Patavium** — Cadoneghe
   - slug: `hotel-patavium-cadoneghe`
   - indirizzo: Via Beato Pellegrino, 106, 35137 Padova PD
27. **Hotel Sagittario Padova Italy** — Cadoneghe
   - slug: `hotel-sagittario-padova-italy-cadoneghe`
   - indirizzo: Via Giovanni Randaccio, 6, 35129 Padova PD
28. **Hotello Padova - Hostel & More** — Cadoneghe
   - slug: `hotello-padova-hostel-more-cadoneghe`
   - indirizzo: Corso del Popolo, 2, 35131 Padova PD
29. **Le Padovanelle** — Cadoneghe
   - slug: `le-padovanelle-cadoneghe`
   - indirizzo: Via dell'Ippodromo, 4, 35100 Ponte di Brenta PD
30. **Matrix Hotel & Residence** — Cadoneghe
   - slug: `matrix-hotel-residence-cadoneghe`
   - indirizzo: Via Germania, 22, 35010 Vigonza PD
31. **Takate Collection** — Cadoneghe
   - slug: `takate-collection-cadoneghe`
   - indirizzo: Piazza A. de Gasperi, 47, 35131 Padova PD
32. **VillaLuigia** — Cadoneghe
   - slug: `villaluigia-cadoneghe`
   - indirizzo: Via Umberto I, 10, 35010 Vigonza PD
33. **Agriturismo La Fornace a Senna Comasco, di Formenti Ivan** — Cadorago
   - slug: `agriturismo-la-fornace-a-senna-comasco-di-formen-cadorago`
   - indirizzo: Via Fornace, 2, 22070 Senna Comasco CO
34. **B&B HOTEL Como Baradello** — Cadorago
   - slug: `b-b-hotel-como-baradello-cadorago`
   - indirizzo: Piazzale Camerlata, 9/a, 22100 Como CO
35. **B&B Il Melograno** — Cadorago
   - slug: `b-b-il-melograno-cadorago`
   - indirizzo: Via del Mandresco, 5, 22074 Lomazzo CO