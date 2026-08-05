# Blocco 185/500 — 35 strutture senza descrizione IT

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

1. **Alpine Forest Hotel** — Ayas
   - slug: `alpine-forest-hotel-ayas`
   - indirizzo: Loc. Frachey, SR45, 6, 11020 Champoluc AO
2. **Au Charmant Petit Lac • Spa & Park Eco-Hotel** — Ayas
   - slug: `au-charmant-petit-lac-spa-park-eco-hotel-ayas`
   - indirizzo: Route Ramey, 50, 11020 Champoluc AO
3. **Breithorn Hotel, Champoluc** — Ayas
   - slug: `breithorn-hotel-champoluc-ayas`
   - indirizzo: Route Ramey, 27, 11020 Champoluc AO
4. **HG Hotel Italia** — Ayas
   - slug: `hg-hotel-italia-ayas`
   - indirizzo: Rue Valley, 2, 11022 Brusson AO
5. **Hotel Bijou** — Ayas
   - slug: `hotel-bijou-ayas`
   - indirizzo: Piazza Cavalieri di Vittorio Veneto, 3, 11027 Saint-Vincent AO
6. **Hotel Castor** — Ayas
   - slug: `hotel-castor-ayas`
   - indirizzo: Route Ramey, 2, 11020 Champoluc AO
7. **Hotel De Champoluc** — Ayas
   - slug: `hotel-de-champoluc-ayas`
   - indirizzo: Route Ramey, 65, 11020 Champoluc AO
8. **Hotel l'Espoir** — Ayas
   - slug: `hotel-l-espoir-ayas`
   - indirizzo: Route Barmasc, 11020 Antagnod AO
9. **Hotel Le Clocher 3 stelle** — Ayas
   - slug: `hotel-le-clocher-3-stelle-ayas`
   - indirizzo: Route Barmasc, 72, 11020 Ayas AO
10. **Hotel Le Rocher** — Ayas
   - slug: `hotel-le-rocher-ayas`
   - indirizzo: SR45, 11020 Champoluc - Ayas AO
11. **Hotel Petit Prince** — Ayas
   - slug: `hotel-petit-prince-ayas`
   - indirizzo: route tchavagnod, 1, 11020 Antagnod AO
12. **Hotel Relais des Glaciers** — Ayas
   - slug: `hotel-relais-des-glaciers-ayas`
   - indirizzo: Rue J. B. Dondeynaz, 9, 11020 Champoluc AO
13. **Hotel Santa San** — Ayas
   - slug: `hotel-santa-san-ayas`
   - indirizzo: Route Barmasc, 1, 11020 Antagnod AO
14. **Hotellerie de Mascognaz** — Ayas
   - slug: `hotellerie-de-mascognaz-ayas`
   - indirizzo: Champoluc, 11020 Mascognaz AO
15. **La Falconetta** — Ayas
   - slug: `la-falconetta-ayas`
   - indirizzo: Route Barmasc, 2, 11020 Antagnod AO
16. **La Rouja** — Ayas
   - slug: `la-rouja-ayas`
   - indirizzo: Rue des Guides, 19, 11020 Ayas AO
17. **Le Fleur des neiges** — Ayas
   - slug: `le-fleur-des-neiges-ayas`
   - indirizzo: Chemin de Crestella, n. 7, 11020 Antagnod AO
18. **Maison Poluc Boutique Hotel** — Ayas
   - slug: `maison-poluc-boutique-hotel-ayas`
   - indirizzo: Frazione Corbet, n°15, 11020 Corbet AO
19. **Punta Zerbion** — Ayas
   - slug: `punta-zerbion-ayas`
   - indirizzo: frazione corbet, SR45, 8, 11020 Ayas AO
20. **Rifugio Vieux Crest** — Ayas
   - slug: `rifugio-vieux-crest-ayas`
   - indirizzo: Crest, 11020 Champoluc AO
21. **Alpine A&S CIR VDA AYMAVILLES n.0003** — Aymavilles
   - slug: `alpine-a-s-cir-vda-aymavilles-n-0003-aymavilles`
   - indirizzo: Frazione Micheley, 39, 11010 Aymavilles AO
22. **Chacaril • Albergo • Ristorante** — Aymavilles
   - slug: `chacaril-albergo-ristorante-aymavilles`
   - indirizzo: Frazione Pila, 8, 11020 Gressan AO
23. **Hotel della Nouva** — Aymavilles
   - slug: `hotel-della-nouva-aymavilles`
   - indirizzo: Frazione Pila, 75, 11020 Pila AO
24. **Hotel Panoramique** — Aymavilles
   - slug: `hotel-panoramique-aymavilles`
   - indirizzo: Frazione Pont D'Avisod, 90, 11010 Sarre AO
25. **Hotel Printemps** — Aymavilles
   - slug: `hotel-printemps-aymavilles`
   - indirizzo: Frazione Pila, 92, 11020 Gressan AO
26. **Hotel Rendez-Vous** — Aymavilles
   - slug: `hotel-rendez-vous-aymavilles`
   - indirizzo: Frazione Urbains, 4, 11010 Aymavilles AO
27. **Hôtel Ristorante Pizzeria Château** — Aymavilles
   - slug: `hotel-ristorante-pizzeria-chateau-aymavilles`
   - indirizzo: Frazione Saint Maurice, 1, 11010 Aymavilles AO
28. **La Maison de Deni** — Aymavilles
   - slug: `la-maison-de-deni-aymavilles`
   - indirizzo: 11010 Aymavilles AO
29. **Lo Fléyé** — Aymavilles
   - slug: `lo-fleye-aymavilles`
   - indirizzo: Località Bussan Dessus, 91, 11010 Saint-Pierre AO
30. **Maison Serendipity** — Aymavilles
   - slug: `maison-serendipity-aymavilles`
   - indirizzo: Frazione Crétaz-Saint-Martin, 23, 11010 Aymavilles AO
31. **Residence Moulin** — Aymavilles
   - slug: `residence-moulin-aymavilles`
   - indirizzo: Frazione Moulins, 66, 11010 Aymavilles AO
32. **Affittacamere Massimo D'Azeglio** — Azeglio
   - slug: `affittacamere-massimo-d-azeglio-azeglio`
   - indirizzo: Vico Palazzo, 3, 76121 Barletta BT
33. **B&B Dimora d'Azeglio** — Azeglio
   - slug: `b-b-dimora-d-azeglio-azeglio`
   - indirizzo: Via Sant'Anna, 1, 72012 Carovigno BR
34. **Bed and Breakfast Antica Residenza d'Azeglio HOTEL** — Azeglio
   - slug: `bed-and-breakfast-antica-residenza-d-azeglio-hot-azeglio`
   - indirizzo: Via d'Azeglio, N 64, 40123 Bologna BO
35. **Bettoja Hotel Massimo d'Azeglio** — Azeglio
   - slug: `bettoja-hotel-massimo-d-azeglio-azeglio`
   - indirizzo: Via Cavour, 18, 00185 Roma RM