# Blocco 53/500 — 35 strutture senza descrizione IT

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

1. **Hotel Castello di Sinio** — Albaretto della Torre
   - slug: `hotel-castello-di-sinio-albaretto-della-torre`
   - indirizzo: vicolo del castello, 1, 12050 Sinio CN
2. **Il Boscareto Resort & Spa** — Albaretto della Torre
   - slug: `il-boscareto-resort-spa-albaretto-della-torre`
   - indirizzo: Via Roddino, 21, 12050 Serralunga d'Alba CN
3. **Orchidea selvatica** — Albaretto della Torre
   - slug: `orchidea-selvatica-albaretto-della-torre`
   - indirizzo: 12070 Levice CN
4. **Relais La Corte di Lequio** — Albaretto della Torre
   - slug: `relais-la-corte-di-lequio-albaretto-della-torre`
   - indirizzo: Via Langa, 19, 12050 Lequio Berria CN
5. **Sogni di Langa** — Albaretto della Torre
   - slug: `sogni-di-langa-albaretto-della-torre`
   - indirizzo: Loc. Pedaggera, 5, 12050 Cerretto Langhe CN
6. **Tenuta Bricchi** — Albaretto della Torre
   - slug: `tenuta-bricchi-albaretto-della-torre`
   - indirizzo: Via Montelupo, 45, 12050 Sinio CN
7. **Trattoria Del Bivio** — Albaretto della Torre
   - slug: `trattoria-del-bivio-albaretto-della-torre`
   - indirizzo: Loc Cavallotti, 9, 12050 Cerretto Langhe CN
8. **Villa Moglietta Host in Langhe** — Albaretto della Torre
   - slug: `villa-moglietta-host-in-langhe-albaretto-della-torre`
   - indirizzo: Via S. Antonino, 9 a, 12050 Albaretto della Torre CN
9. **Affitta camere Foresteria San Giuseppe** — Albavilla
   - slug: `affitta-camere-foresteria-san-giuseppe-albavilla`
   - indirizzo: Via Como, 19, 22036 Erba CO
10. **Agriturismo Alpe di Lemna** — Albavilla
   - slug: `agriturismo-alpe-di-lemna-albavilla`
   - indirizzo: Alpe di Lemna - Fraz, 22020 Lemna CO
11. **Agriturismo Cascina Mirandola** — Albavilla
   - slug: `agriturismo-cascina-mirandola-albavilla`
   - indirizzo: Via B.Menni, 22032 Albese Con Cassano CO
12. **Agriturismo Il Talento Nella Quiete Lago di Como** — Albavilla
   - slug: `agriturismo-il-talento-nella-quiete-lago-di-como-albavilla`
   - indirizzo: Via al Fareè, 16, 22023 Centro Valle Intelvi CO
13. **Agriturismo La Roggia** — Albavilla
   - slug: `agriturismo-la-roggia-albavilla`
   - indirizzo: Via Alserio 29, 22036 Erba CO
14. **Albavilla Hotel & Co.** — Albavilla
   - slug: `albavilla-hotel-co-albavilla`
   - indirizzo: Via per Carcano, 6, 22031 Albavilla CO
15. **AQUARELLE Bed and Breakfast** — Albavilla
   - slug: `aquarelle-bed-and-breakfast-albavilla`
   - indirizzo: Via Pisciola, 16, 22020 Palanzo CO
16. **ARMONIA B & B** — Albavilla
   - slug: `armonia-b-b-albavilla`
   - indirizzo: Via XXV Aprile, 13, 22031 Albavilla CO
17. **B&B CA' MONETA** — Albavilla
   - slug: `b-b-ca-moneta-albavilla`
   - indirizzo: Via P. Porro, 8, 22031 Albavilla CO
18. **B&B Cristalli di Luce** — Albavilla
   - slug: `b-b-cristalli-di-luce-albavilla`
   - indirizzo: Piazza Comunale, 7/15, 22031 Albavilla CO
19. **B&B Il Castellaccio - Albavilla** — Albavilla
   - slug: `b-b-il-castellaccio-albavilla-albavilla`
   - indirizzo: 50mt a destra dopo il tornante n.1 salendo verso l’Alpe del Viceré In collina a circa 2km dal paese, Via Partigiana, 10, 22031 Albavilla CO
20. **B&B Il Coniglio Sulla Luna** — Albavilla
   - slug: `b-b-il-coniglio-sulla-luna-albavilla`
   - indirizzo: Via Vincenzo Bellini, 15, 22036 Erba CO
21. **B&B Le Lanterne** — Albavilla
   - slug: `b-b-le-lanterne-albavilla`
   - indirizzo: Via Stretta, 8, 22031 Albavilla CO
22. **B&B Margot** — Albavilla
   - slug: `b-b-margot-albavilla`
   - indirizzo: Via Cesare Cantù, 42, 22031 Albavilla CO
23. **B&B Shabby Chic** — Albavilla
   - slug: `b-b-shabby-chic-albavilla`
   - indirizzo: Piazza Roma, 9, 22031 Albavilla CO
24. **Cucina Delle Agridee - Azienda Agricola** — Albavilla
   - slug: `cucina-delle-agridee-azienda-agricola-albavilla`
   - indirizzo: Via Urago, 13b, 22038 Tavernerio CO
25. **Heidi Bed and Breakfast** — Albavilla
   - slug: `heidi-bed-and-breakfast-albavilla`
   - indirizzo: Via Angelo Bassi, 1, 22031 Albavilla CO
26. **Hotel Pontenuovo** — Albavilla
   - slug: `hotel-pontenuovo-albavilla`
   - indirizzo: Via Roma, 12A, 22046 Merone CO
27. **Il B&B di Piazza Motta** — Albavilla
   - slug: `il-b-b-di-piazza-motta-albavilla`
   - indirizzo: Piazza Motta, 3, 22032 Albese con Cassano CO
28. **La Villa Bianca guest house** — Albavilla
   - slug: `la-villa-bianca-guest-house-albavilla`
   - indirizzo: Via Canturina, 1, 22070 Capiago Intimiano CO
29. **Affittacamere Archivolto del Teatro** — Albenga
   - slug: `affittacamere-archivolto-del-teatro-albenga`
   - indirizzo: Via Archivolto del Teatro, 3, 17031 Albenga SV
30. **Affittacamere San Teodoro** — Albenga
   - slug: `affittacamere-san-teodoro-albenga`
   - indirizzo: Via Gian Maria Oddo, 5, 17031 Albenga SV
31. **Agriturismo alla Mal Parata** — Albenga
   - slug: `agriturismo-alla-mal-parata-albenga`
   - indirizzo: Regione Fieré, 1, 17031 Bastia SV
32. **Agriturismo Il Melograno** — Albenga
   - slug: `agriturismo-il-melograno-albenga`
   - indirizzo: Regione Pontelungo Inferiore, 20, 17031 Albenga SV
33. **Agriturismo Nonna Merj** — Albenga
   - slug: `agriturismo-nonna-merj-albenga`
   - indirizzo: Regione Pontelungo Inferiore, 19, 17031 Albenga SV
34. **Albergo Magnolia** — Albenga
   - slug: `albergo-magnolia-albenga`
   - indirizzo: Via Nazario Sauro, 90, 17031 Albenga SV
35. **Albergo Marisa Snc dei Fratelli Ancona** — Albenga
   - slug: `albergo-marisa-snc-dei-fratelli-ancona-albenga`
   - indirizzo: Via Pisa, 28, 17031 Albenga SV