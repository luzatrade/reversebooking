# Blocco 488/500 — 35 strutture senza descrizione IT

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

1. **Bed and Breakfast Stella Lucca** — Lucca
   - slug: `bed-and-breakfast-stella-lucca-lucca`
   - indirizzo: Traversa II via Pisana, 74, 55100 Lucca LU, Italia
2. **Corte dei Folletti** — Lucca
   - slug: `corte-dei-folletti-lucca`
   - indirizzo: Viale Castruccio Castracani, 1192, 55100 Lucca LU, Italia
3. **Da Francesco** — Lucca
   - slug: `da-francesco-lucca`
   - indirizzo: Corte Paoli, 10, (traversa Via XX Settembre) (GPS: 43.841429, 10, 503381, 55100 Lucca LU, Italia
4. **Guest house Nonna Adriana** — Lucca
   - slug: `guest-house-nonna-adriana-lucca`
   - indirizzo: Via Borgo Giannotti, 19, 55100 Lucca LU, Italia
5. **Hotel Stipino** — Lucca
   - slug: `hotel-stipino-lucca`
   - indirizzo: Via Romana, 95, 55100 Lucca LU, Italia
6. **Il Ponte Affittacamere** — Lucca
   - slug: `il-ponte-affittacamere-lucca`
   - indirizzo: via sarzanese trav. III n 11 Ponte San Pietro, 55100 Lucca LU, Italia
7. **Le Camere di Caterina** — Lucca
   - slug: `le-camere-di-caterina-lucca`
   - indirizzo: V. Galli Tassi, 85, 55100 Lucca LU, Italia
8. **VERDERAME Rooms & Suite in Lucca** — Lucca
   - slug: `verderame-rooms-suite-in-lucca-lucca`
   - indirizzo: Via S. Donato, 1423, 55100 Lucca LU, Italia
9. **Villa Grespola** — Lucca
   - slug: `villa-grespola-lucca`
   - indirizzo: Via della Chiesa XXXII, 36, 55100 Lucca LU, Italia
10. **Grand Hôtel Des Terreaux** — Lyon
   - slug: `grand-hotel-des-terreaux-lyon`
   - indirizzo: 16 Rue Lanterne, 69001 Lyon
11. **Hotel de Bretagne** — Lyon
   - slug: `hotel-de-bretagne-lyon`
   - indirizzo: 10 Rue Dubois, 69002 Lyon
12. **Hôtel des Artistes** — Lyon
   - slug: `hotel-des-artistes-lyon`
   - indirizzo: 8 Rue Gaspard André, Pl. des Célestins, 69002 Lyon
13. **Hôtel des Célestins** — Lyon
   - slug: `hotel-des-celestins-lyon`
   - indirizzo: 4 Rue des Archers, 69002 Lyon
14. **Hôtel Fort St Laurent Lyon - Handwritten Collection** — Lyon
   - slug: `hotel-fort-st-laurent-lyon-handwritten-collectio-lyon`
   - indirizzo: 1 Rue Bodin, Pl. Bellevue, 69001 Lyon
15. **Hôtel Maison Nô - Lyon** — Lyon
   - slug: `hotel-maison-no-lyon-lyon`
   - indirizzo: 11 Rue du Bât d'Argent, 69001 Lyon
16. **Hôtel Mercure Lyon Centre Beaux Arts** — Lyon
   - slug: `hotel-mercure-lyon-centre-beaux-arts-lyon`
   - indirizzo: 73-75 Rue du Président Édouard Herriot, 69002 Lyon
17. **Hôtel Mercure Lyon Centre Château Perrache** — Lyon
   - slug: `hotel-mercure-lyon-centre-chateau-perrache-lyon`
   - indirizzo: Esplanade De La Gare, 12 Cr de Verdun Rambaud, 69002 Lyon
18. **Hôtel Mercure Lyon Centre Plaza République** — Lyon
   - slug: `hotel-mercure-lyon-centre-plaza-republique-lyon`
   - indirizzo: 5 Rue Jacques Stella, 69002 Lyon
19. **Hôtel Mercure Lyon Centre Saxe Lafayette** — Lyon
   - slug: `hotel-mercure-lyon-centre-saxe-lafayette-lyon`
   - indirizzo: 29 Rue de Bonnel, 69003 Lyon
20. **Hôtel Première Classe Lyon Centre - Gare Part Dieu** — Lyon
   - slug: `hotel-premiere-classe-lyon-centre-gare-part-dieu-lyon`
   - indirizzo: 75 Bd Marius Vivier Merle, 69003 Lyon
21. **Hôtel Vaubecour** — Lyon
   - slug: `hotel-vaubecour-lyon`
   - indirizzo: 28 Rue Vaubecour 2é étage, 69002 Lyon
22. **Hotel Victoria** — Lyon
   - slug: `hotel-victoria-lyon`
   - indirizzo: 3 Rue Delandine, 69002 Lyon
23. **MEININGER Hotel Lyon Centre Berthelot** — Lyon
   - slug: `meininger-hotel-lyon-centre-berthelot-lyon`
   - indirizzo: 7 Rue Professeur Zimmermann, 69007 Lyon
24. **OKKO Hotels Lyon Centre** — Lyon
   - slug: `okko-hotels-lyon-centre-lyon`
   - indirizzo: 14 Bis Quai du Général Sarrail, 69006 Lyon
25. **B&B HOTEL Madrid Centro Puerta del Sol** — Madrid
   - slug: `b-b-hotel-madrid-centro-puerta-del-sol-madrid`
   - indirizzo: C. de la Montera, 10, Centro, 28013 Madrid
26. **Hostal Cruz Sol** — Madrid
   - slug: `hostal-cruz-sol-madrid`
   - indirizzo: Plaza de Santa Cruz, 6, Centro, 28012 Madrid
27. **Hostal Madrid** — Madrid
   - slug: `hostal-madrid-madrid`
   - indirizzo: C. de Esparteros, 6, Centro, 28012 Madrid
28. **Hotel Cortezo** — Madrid
   - slug: `hotel-cortezo-madrid`
   - indirizzo: Calle del Dr Cortezo, 3, Centro, 28012 Madrid
29. **hotel madrid** — Madrid
   - slug: `hotel-madrid-madrid`
   - indirizzo: C. del Marqués Viudo de Pontejos, 13-11, Centro, Centro, 28012 Madrid
30. **Hotel Moderno** — Madrid
   - slug: `hotel-moderno-madrid`
   - indirizzo: C. del Arenal, 2, Centro, 28013 Madrid
31. **Hotel Preciados Madrid** — Madrid
   - slug: `hotel-preciados-madrid-madrid`
   - indirizzo: C. de Preciados, 37, Centro, 28013 Madrid
32. **Hyatt Centric Gran Via Madrid** — Madrid
   - slug: `hyatt-centric-gran-via-madrid-madrid`
   - indirizzo: Gran Vía, 31, Centro, 28013 Centro, Madrid
33. **Liabeny Hotel Madrid** — Madrid
   - slug: `liabeny-hotel-madrid-madrid`
   - indirizzo: C. de la Salud, 3, Centro, 28013 Madrid
34. **Petit Palace Preciados** — Madrid
   - slug: `petit-palace-preciados-madrid`
   - indirizzo: C. de Galdo, 2, Centro, 28013 Madrid
35. **Petit Palace Puerta del Sol** — Madrid
   - slug: `petit-palace-puerta-del-sol-madrid`
   - indirizzo: C. del Arenal, 4, Centro, 28013 Madrid