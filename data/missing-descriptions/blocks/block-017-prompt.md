# Blocco 17/500 — 35 strutture senza descrizione IT

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

1. **B&B La Fontanella** — Acquaviva Picena
   - slug: `b-b-la-fontanella-acquaviva-picena`
   - indirizzo: Via Santa Lucia, 16, 63074 San Benedetto del Tronto AP
2. **B&B Verdemare** — Acquaviva Picena
   - slug: `b-b-verdemare-acquaviva-picena`
   - indirizzo: Contrada Casarica, 29, 63075 Acquaviva Picena AP
3. **Bed & breakfast geco** — Acquaviva Picena
   - slug: `bed-breakfast-geco-acquaviva-picena`
   - indirizzo: Contrada Cabiano, 32, 63038 Ripatransone AP
4. **Colle Serrano Relais Resort** — Acquaviva Picena
   - slug: `colle-serrano-relais-resort-acquaviva-picena`
   - indirizzo: Contrada Colle di Guardia, 63065 Ripatransone AP
5. **Country Hotel & Resort I Calanchi** — Acquaviva Picena
   - slug: `country-hotel-resort-i-calanchi-acquaviva-picena`
   - indirizzo: Contrada Verrame, 1, 63035 Ripatransone AP
6. **Country house Una** — Acquaviva Picena
   - slug: `country-house-una-acquaviva-picena`
   - indirizzo: Contrada Sant'Andrea, 66, 63064 Cupra Marittima AP
7. **Hotel La Palazzina** — Acquaviva Picena
   - slug: `hotel-la-palazzina-acquaviva-picena`
   - indirizzo: Via Premuda, 7, 63074 San Benedetto del Tronto AP
8. **Hotel Oviv • La dimora del Borgo** — Acquaviva Picena
   - slug: `hotel-oviv-la-dimora-del-borgo-acquaviva-picena`
   - indirizzo: Via Marziale, 43, 63075 Acquaviva Picena AP
9. **Hotel San Giacomo** — Acquaviva Picena
   - slug: `hotel-san-giacomo-acquaviva-picena`
   - indirizzo: Via Giacomo Leopardi, 4, 63076 Monteprandone AP
10. **La Panoramica Country House** — Acquaviva Picena
   - slug: `la-panoramica-country-house-acquaviva-picena`
   - indirizzo: Via Panoramica, 20, 63074 San Benedetto del Tronto AP
11. **Pensione Vagnozzi Nazario** — Acquaviva Picena
   - slug: `pensione-vagnozzi-nazario-acquaviva-picena`
   - indirizzo: Via Cilea, 113, 63066 Grottammare AP
12. **Relais Concorde** — Acquaviva Picena
   - slug: `relais-concorde-acquaviva-picena`
   - indirizzo: Via Parini, n. 34, 63066 Grottammare AP
13. **Residence Borgo da Mare** — Acquaviva Picena
   - slug: `residence-borgo-da-mare-acquaviva-picena`
   - indirizzo: Via Allegretti, 13, 63030 Monteprandone AP
14. **Residence Club Hotel Le Terrazze** — Acquaviva Picena
   - slug: `residence-club-hotel-le-terrazze-acquaviva-picena`
   - indirizzo: Lungomare Alcide de Gasperi, 70, 63066 Grottammare AP
15. **Tenute Il Crinale Agriturismo e Ristorante** — Acquaviva Picena
   - slug: `tenute-il-crinale-agriturismo-e-ristorante-acquaviva-picena`
   - indirizzo: Via Ferretti, 31, 63081 Castorano AP
16. **Villa Angela** — Acquaviva Picena
   - slug: `villa-angela-acquaviva-picena`
   - indirizzo: Via Santa Lucia, 40, 63074 San Benedetto del Tronto AP
17. **Villa Francesca Luxury** — Acquaviva Picena
   - slug: `villa-francesca-luxury-acquaviva-picena`
   - indirizzo: Via Ischia, 19, 63066 Grottammare AP
18. **Agriturismo Casalicchio** — Acquaviva Platani
   - slug: `agriturismo-casalicchio-acquaviva-platani`
   - indirizzo: Contrada Casalicchio, 92022 Cammarata AG
19. **Agriturismo Monticelli** — Acquaviva Platani
   - slug: `agriturismo-monticelli-acquaviva-platani`
   - indirizzo: Contrada Monticelli, 93014 Mussomeli CL
20. **Archi di San Giacomo** — Acquaviva Platani
   - slug: `archi-di-san-giacomo-acquaviva-platani`
   - indirizzo: Via San Giacomo, 3, 92022 Cammarata AG
21. **B&B Acquaviva** — Acquaviva Platani
   - slug: `b-b-acquaviva-acquaviva-platani`
   - indirizzo: Via Umberto I, n137, 93010 Acquaviva Platani CL
22. **B&B La Terrazza degli Scrittori** — Acquaviva Platani
   - slug: `b-b-la-terrazza-degli-scrittori-acquaviva-platani`
   - indirizzo: Contrada Bovo, 92020 Racalmuto AG
23. **B&B Troisi** — Acquaviva Platani
   - slug: `b-b-troisi-acquaviva-platani`
   - indirizzo: Contrada Casalvecchio, snc, 92020 Racalmuto AG
24. **Bed and breakfast Agrumi in terrazza** — Acquaviva Platani
   - slug: `bed-and-breakfast-agrumi-in-terrazza-acquaviva-platani`
   - indirizzo: Via Rosario Livatino, 19, 92021 Aragona AG
25. **Bed and Breakfast Arcobaleno** — Acquaviva Platani
   - slug: `bed-and-breakfast-arcobaleno-acquaviva-platani`
   - indirizzo: c.da santa cecilia, 92025 Casteltermini AG
26. **Bio Resort Fontes Episcopi** — Acquaviva Platani
   - slug: `bio-resort-fontes-episcopi-acquaviva-platani`
   - indirizzo: Contrada Fontes Episcopi, 92021 Aragona AG
27. **Casa Paradiso - Ospitalità Diffusa** — Acquaviva Platani
   - slug: `casa-paradiso-ospitalita-diffusa-acquaviva-platani`
   - indirizzo: Via Carracchia di Sopra, 24, 90030 Castronovo di Sicilia PA
28. **Casale Margherita** — Acquaviva Platani
   - slug: `casale-margherita-acquaviva-platani`
   - indirizzo: Contrada Malandrino, 92022 Cammarata AG
29. **Halykos S.R.L.** — Acquaviva Platani
   - slug: `halykos-s-r-l-acquaviva-platani`
   - indirizzo: Via Bonfiglio, 20, 92022 Cammarata AG
30. **Luna d'Arte** — Acquaviva Platani
   - slug: `luna-d-arte-acquaviva-platani`
   - indirizzo: Via Corsica, 9, 93014 Mussomeli CL
31. **Manfredomus** — Acquaviva Platani
   - slug: `manfredomus-acquaviva-platani`
   - indirizzo: Viale del Castello, Snc, 93014 Mussomeli CL
32. **Musmelia Rooms** — Acquaviva Platani
   - slug: `musmelia-rooms-acquaviva-platani`
   - indirizzo: Piazza Umberto 1°, 26, 93014 Mussomeli CL
33. **Regalpetra Hotel** — Acquaviva Platani
   - slug: `regalpetra-hotel-acquaviva-platani`
   - indirizzo: Via Garibaldi, 208, 92020 Racalmuto AG
34. **Sorge Palace Room and Breakfast** — Acquaviva Platani
   - slug: `sorge-palace-room-and-breakfast-acquaviva-platani`
   - indirizzo: Via Andrea Chiaramonte, 20, 93014 Mussomeli CL
35. **Susafa | A Member of Small Luxury Hotels of the World** — Acquaviva Platani
   - slug: `susafa-a-member-of-small-luxury-hotels-of-the-wo-acquaviva-platani`
   - indirizzo: Contrada Susafa, 90028 Polizzi Generosa PA