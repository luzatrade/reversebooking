# Blocco 225/500 — 35 strutture senza descrizione IT

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

1. **"Zia Sisina" - Dimora Storica** — Barile
   - slug: `zia-sisina-dimora-storica-barile`
   - indirizzo: Corso Vittorio Emanuele, 41, 85022 Barile PZ
2. **Agriturismo Carpe Diem** — Barile
   - slug: `agriturismo-carpe-diem-barile`
   - indirizzo: 85029 Boreano PZ
3. **Agriturismo Il Casale dell'Acqua Rossa** — Barile
   - slug: `agriturismo-il-casale-dell-acqua-rossa-barile`
   - indirizzo: Via Monticchio Sgarroni, snc, 85028 Rionero in Vulture PZ
4. **Agriturismo La Masseria di Proserpina** — Barile
   - slug: `agriturismo-la-masseria-di-proserpina-barile`
   - indirizzo: Contrada piano delle spine snc, 85020 Ripacandida PZ
5. **Agriturismo Valle Ofanto** — Barile
   - slug: `agriturismo-valle-ofanto-barile`
   - indirizzo: SS Ofantina, km 23, 85020 Rapone PZ
6. **Agriturismo Villa delle Rose** — Barile
   - slug: `agriturismo-villa-delle-rose-barile`
   - indirizzo: Contrada masseria della croce, 85020 Atella PZ
7. **ALLEGROFRANCO B&B** — Barile
   - slug: `allegrofranco-b-b-barile`
   - indirizzo: Via Belgio, 3, 85022 Barile PZ
8. **B&B Il Casale della Gioia** — Barile
   - slug: `b-b-il-casale-della-gioia-barile`
   - indirizzo: Contrada Cardinale, 85025 Melfi PZ
9. **B&B L'OASI DEL VULTURE** — Barile
   - slug: `b-b-l-oasi-del-vulture-barile`
   - indirizzo: Via Vulture, 179, 85027 Rapolla PZ
10. **B&B Le Preziose Dimore** — Barile
   - slug: `b-b-le-preziose-dimore-barile`
   - indirizzo: Via Emanuele Lauridia, 30, 85029 Venosa PZ
11. **B&B White House** — Barile
   - slug: `b-b-white-house-barile`
   - indirizzo: Via Venezia, 1, 85025 Melfi PZ
12. **Nel Giardino di Ester Bed and Breakfast** — Barile
   - slug: `nel-giardino-di-ester-bed-and-breakfast-barile`
   - indirizzo: Corso Alcide De Gasperi, 70, 85022 Barile PZ
13. **Villa Ulivi - Bubble Glamping - B&B** — Barile
   - slug: `villa-ulivi-bubble-glamping-b-b-barile`
   - indirizzo: contrada carciuso 2, 85020 Filiano PZ
14. **“Mo'Sci” bottega & Cucina** — Barisciano
   - slug: `mo-sci-bottega-cucina-barisciano`
   - indirizzo: Via Roma, 8, 67020 Castelvecchio Calvisio AQ
15. **Al Faraone Pizzeria Country House B&B** — Barisciano
   - slug: `al-faraone-pizzeria-country-house-b-b-barisciano`
   - indirizzo: SS17, 2, 67026 Poggio Picenze AQ
16. **Albergo Ristorante Paneolio** — Barisciano
   - slug: `albergo-ristorante-paneolio-barisciano`
   - indirizzo: Via Umberto I, 89/91, 67026 Poggio Picenze AQ
17. **B&B A casa di Emy** — Barisciano
   - slug: `b-b-a-casa-di-emy-barisciano`
   - indirizzo: strada Provinciale per castel del monte 66, 67021 Barisciano AQ
18. **B&B Dimora Belvedere** — Barisciano
   - slug: `b-b-dimora-belvedere-barisciano`
   - indirizzo: Via Belvedere, 12, 67021 Barisciano AQ
19. **B&B Palazzo la Loggia** — Barisciano
   - slug: `b-b-palazzo-la-loggia-barisciano`
   - indirizzo: Via Barisciano, 67021 Barisciano AQ
20. **Bed e Breakfast LA DOTE** — Barisciano
   - slug: `bed-e-breakfast-la-dote-barisciano`
   - indirizzo: Piazza Cristoforo Colombo, 12, 67020 Santo Stefano di Sessanio AQ
21. **Casa Guerrino** — Barisciano
   - slug: `casa-guerrino-barisciano`
   - indirizzo: Via delle Aie, 67100 Bazzano AQ
22. **Complesso Turistico Aurora - camere & appartamenti** — Barisciano
   - slug: `complesso-turistico-aurora-camere-appartamenti-barisciano`
   - indirizzo: Via Piedi le Vigne, 22, 67026 Poggio Picenze AQ
23. **Convento di San Colombo B&B - Dimora Storica** — Barisciano
   - slug: `convento-di-san-colombo-b-b-dimora-storica-barisciano`
   - indirizzo: Strada Provinciale km 4,200, 67021 Barisciano AQ
24. **Gran Sasso Letizia B&B** — Barisciano
   - slug: `gran-sasso-letizia-b-b-barisciano`
   - indirizzo: Via delle Aie, 8, 67100 Filetto AQ
25. **Hotel La Valle dell'Aquila** — Barisciano
   - slug: `hotel-la-valle-dell-aquila-barisciano`
   - indirizzo: Via Fura, 25, 67100 L'Aquila AQ
26. **La Bifora e Le Lune** — Barisciano
   - slug: `la-bifora-e-le-lune-barisciano`
   - indirizzo: Vico sotto gli archi, Parcheggio, Piazza della Giudea, 5, 67020 Santo Stefano di Sessanio AQ
27. **La Dimora di Ziella** — Barisciano
   - slug: `la-dimora-di-ziella-barisciano`
   - indirizzo: Via Parisse, 3, 67021 Barisciano AQ
28. **La Villetta - Food & Drink - Rooms for Rent** — Barisciano
   - slug: `la-villetta-food-drink-rooms-for-rent-barisciano`
   - indirizzo: Fonte Cerreto, 67100 Assergi AQ
29. **Natour l'Ostello per i camminatori** — Barisciano
   - slug: `natour-l-ostello-per-i-camminatori-barisciano`
   - indirizzo: Via Provinciale, 67021 Barisciano AQ
30. **"IL PICCOLO GOLF" - Foresteria Lombarda** — Barlassina
   - slug: `il-piccolo-golf-foresteria-lombarda-barlassina`
   - indirizzo: Via Pavia, 32, 20835 Muggiò MB
31. **Albergo Golf Barlassina** — Barlassina
   - slug: `albergo-golf-barlassina-barlassina`
   - indirizzo: Via Privata Golf, 42, 20823 Barlassina MB
32. **B&B Casa Emma** — Barlassina
   - slug: `b-b-casa-emma-barlassina`
   - indirizzo: Via Giovanni Randaccio, 10, 21047 Saronno VA
33. **B&B Elisa** — Barlassina
   - slug: `b-b-elisa-barlassina`
   - indirizzo: Via Bainsizza, 773, 21042 Caronno Pertusella VA
34. **B&B Honey Rooms** — Barlassina
   - slug: `b-b-honey-rooms-barlassina`
   - indirizzo: Via S. Solutore, 34, 21047 Saronno VA
35. **Hotel Cyrano** — Barlassina
   - slug: `hotel-cyrano-barlassina`
   - indirizzo: Via IV Novembre, 11/13, 21047 Saronno VA