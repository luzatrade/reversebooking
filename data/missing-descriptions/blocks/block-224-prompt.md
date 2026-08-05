# Blocco 224/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Chiai Francesco** — Bari Sardo
   - slug: `agriturismo-chiai-francesco-bari-sardo`
   - indirizzo: Località Circillai, 08042 Bari Sardo OG
2. **Agriturismo Su Solianu** — Bari Sardo
   - slug: `agriturismo-su-solianu-bari-sardo`
   - indirizzo: Strada Comunale sa Mardona, Località, 08042 Bari Sardo OG
3. **B&B Campu Moru** — Bari Sardo
   - slug: `b-b-campu-moru-bari-sardo`
   - indirizzo: Località Campu Moru, 08042 Bari Sardo OG
4. **B&B Is Callelleddus** — Bari Sardo
   - slug: `b-b-is-callelleddus-bari-sardo`
   - indirizzo: Via Galileo Galilei, 30, 08042 Bari Sardo OG
5. **B&B Passiflora** — Bari Sardo
   - slug: `b-b-passiflora-bari-sardo`
   - indirizzo: Via Maria Farina Poetessa, 2, 08042 Bari Sardo OG
6. **Camping La Pineta** — Bari Sardo
   - slug: `camping-la-pineta-bari-sardo`
   - indirizzo: località Planargia, 08042 Bari Sardo OG
7. **Camping Marina** — Bari Sardo
   - slug: `camping-marina-bari-sardo`
   - indirizzo: Viale della Pineta, 29, 08042 Bari Sardo OG
8. **Domus de Janas Beach Resort** — Bari Sardo
   - slug: `domus-de-janas-beach-resort-bari-sardo`
   - indirizzo: Via della Torre, 24, 08042 Torre di Bari OG
9. **Felix Hotels – Galanias Hotel & Retreat** — Bari Sardo
   - slug: `felix-hotels-galanias-hotel-retreat-bari-sardo`
   - indirizzo: Via Belvedere, 2, 08042 Bari Sardo OG
10. **Hotel Baja Azzurra** — Bari Sardo
   - slug: `hotel-baja-azzurra-bari-sardo`
   - indirizzo: Via della Torre, 10, 08042 Bari Sardo OG
11. **Hotel Cardedu** — Bari Sardo
   - slug: `hotel-cardedu-bari-sardo`
   - indirizzo: Localita' Su Scusorgiu, 08040 Cardedu OG
12. **Hotel Ogliastra** — Bari Sardo
   - slug: `hotel-ogliastra-bari-sardo`
   - indirizzo: Via Dante Alighieri, 47, 08040 Lotzorai OG
13. **La Torre, Hotel Ristorante Bar** — Bari Sardo
   - slug: `la-torre-hotel-ristorante-bar-bari-sardo`
   - indirizzo: Via della Torre, 08042 Bari Sardo OG
14. **Le Corti Sarde - Apart Hotel** — Bari Sardo
   - slug: `le-corti-sarde-apart-hotel-bari-sardo`
   - indirizzo: Via Trento, 13, 08042 Bari Sardo OG
15. **Prima Luna** — Bari Sardo
   - slug: `prima-luna-bari-sardo`
   - indirizzo: Via Pietro Micca, 08042 Bari Sardo OG
16. **Residence Cort'E Accas** — Bari Sardo
   - slug: `residence-cort-e-accas-bari-sardo`
   - indirizzo: Strada Comunale Sa Marina, 08042 Torre di Bari OG
17. **Resort Baia Cea** — Bari Sardo
   - slug: `resort-baia-cea-bari-sardo`
   - indirizzo: Via del Muflone, 08042 Bari Sardo OG
18. **Sosta Camping Torre di Bari Sardo** — Bari Sardo
   - slug: `sosta-camping-torre-di-bari-sardo-bari-sardo`
   - indirizzo: Strada Comunale Sa Marina, 08042 Bari Sardo OG
19. **Teku Boutique Hotel** — Bari Sardo
   - slug: `teku-boutique-hotel-bari-sardo`
   - indirizzo: Corso Vittorio Emanuele, 95, 08042 Bari Sardo OG
20. **Agriturismo La Fornace - Caravaggio** — Bariano
   - slug: `agriturismo-la-fornace-caravaggio-bariano`
   - indirizzo: Via Guglielmo Oberdan, snc, 24043 Caravaggio BG
21. **Da Mimmo - Ristorante Pizzeria | Hotel Il Borghetto** — Bariano
   - slug: `da-mimmo-ristorante-pizzeria-hotel-il-borghetto-bariano`
   - indirizzo: Via Piave, 2, 24050 Bariano BG
22. **Agriturismo Corte Roeli** — Baricella
   - slug: `agriturismo-corte-roeli-baricella`
   - indirizzo: Via Nazionale, 387 40051, 40051 Pegola BO
23. **B&B Dolce Vita** — Baricella
   - slug: `b-b-dolce-vita-baricella`
   - indirizzo: Via Scalone, 1, 40051 Malalbergo BO
24. **B&B Elena** — Baricella
   - slug: `b-b-elena-baricella`
   - indirizzo: Via Roma, 17, 40051 Altedo BO
25. **B&B House Garden Loft** — Baricella
   - slug: `b-b-house-garden-loft-baricella`
   - indirizzo: Via Europa, 55, 40052 Baricella BO
26. **B&B Le Palme** — Baricella
   - slug: `b-b-le-palme-baricella`
   - indirizzo: Via Rotonda Segnatello, 3/3, 40010 Bentivoglio BO
27. **bed and breakfast il giardino** — Baricella
   - slug: `bed-and-breakfast-il-giardino-baricella`
   - indirizzo: Via Savena Vecchia, 95, 40052 Baricella BO
28. **Ca' di Luca B&B** — Baricella
   - slug: `ca-di-luca-b-b-baricella`
   - indirizzo: Via Fratelli Cervi, 68 Fraz, 40061 Cà Dé Fabbri BO
29. **Casa Armonia Affittacamere** — Baricella
   - slug: `casa-armonia-affittacamere-baricella`
   - indirizzo: Via del Parco, 8, 40015 San Venanzio BO
30. **Casa Morandi B&B** — Baricella
   - slug: `casa-morandi-b-b-baricella`
   - indirizzo: Via Calamosco, 11, 40127 Bologna BO
31. **Casa Nives** — Baricella
   - slug: `casa-nives-baricella`
   - indirizzo: Via G. Setti, 133/PIANO TERRA, 40018 Maccaretolo BO
32. **Ciccilia B&B** — Baricella
   - slug: `ciccilia-b-b-baricella`
   - indirizzo: Via S. Marino, 13, 40057 Granarolo dell'Emilia BO
33. **Hotel Maxim** — Baricella
   - slug: `hotel-maxim-baricella`
   - indirizzo: V. Stalingrado, 152, 40128 Bologna BO
34. **Hotel Paradiso Altedo** — Baricella
   - slug: `hotel-paradiso-altedo-baricella`
   - indirizzo: Via Nazionale, 166/A, 40051 Altedo BO
35. **Hotel Tuscolano** — Baricella
   - slug: `hotel-tuscolano-baricella`
   - indirizzo: Via del Tuscolano, 29, 40128 Bologna BO