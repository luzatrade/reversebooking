# Blocco 335/500 — 35 strutture senza descrizione IT

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

1. **B&B HOTEL Napoli San Mauro** — Brusciano
   - slug: `b-b-hotel-napoli-san-mauro-brusciano`
   - indirizzo: Via Casarea, 45, 80013 Casalnuovo di Napoli NA
2. **B&B L’Attico e La Ballata Brusciano Centro** — Brusciano
   - slug: `b-b-l-attico-e-la-ballata-brusciano-centro-brusciano`
   - indirizzo: Via Alcide De Gasperi, 5, 80031 Brusciano NA
3. **BeB I gigli** — Brusciano
   - slug: `beb-i-gigli-brusciano`
   - indirizzo: Via della Repubblica, 7, 80031 Brusciano NA
4. **Dimora delle Rose** — Brusciano
   - slug: `dimora-delle-rose-brusciano`
   - indirizzo: Strada Provinciale Pomigliano - Miuli, 36b, 80030 Mariglianella NA
5. **Hotel Caribe** — Brusciano
   - slug: `hotel-caribe-brusciano`
   - indirizzo: Via Antonio Vivaldi, 1, 80013 Casalnuovo di Napoli NA
6. **Hotel Casal Dell'Angelo** — Brusciano
   - slug: `hotel-casal-dell-angelo-brusciano`
   - indirizzo: V. XI Settembre, 40/400, 80034 Marigliano NA
7. **Hotel dei Platani** — Brusciano
   - slug: `hotel-dei-platani-brusciano`
   - indirizzo: SS7bis, 26, 80035 Nola NA
8. **Hotel Quadrifoglio Napoli** — Brusciano
   - slug: `hotel-quadrifoglio-napoli-brusciano`
   - indirizzo: Via Kennedy, 8, 80030 Castello di Cisterna NA
9. **Luxury Farm** — Brusciano
   - slug: `luxury-farm-brusciano`
   - indirizzo: Via Nuova del Bosco, 80034 Marigliano NA
10. **Residence Bouganville** — Brusciano
   - slug: `residence-bouganville-brusciano`
   - indirizzo: Via Libertà, 4, 80031 Brusciano NA
11. **Ro agriMaison** — Brusciano
   - slug: `ro-agrimaison-brusciano`
   - indirizzo: V9P2+9GR, 80040 Volla NA
12. **Roseal B&B** — Brusciano
   - slug: `roseal-b-b-brusciano`
   - indirizzo: Via Guido De Ruggiero, 80031 Brusciano NA
13. **voco Nola - Naples Vulcano Buono by IHG** — Brusciano
   - slug: `voco-nola-naples-vulcano-buono-by-ihg-brusciano`
   - indirizzo: Localita Boscofangone, 80035 Nola NA
14. **Agriturismo "Il Carpio"** — Brusimpiano
   - slug: `agriturismo-il-carpio-brusimpiano`
   - indirizzo: Via Carpio, 21030 Cugliate-Fabiasco VA
15. **Agriturismo Villa Brugolta** — Brusimpiano
   - slug: `agriturismo-villa-brugolta-brusimpiano`
   - indirizzo: 21031 Cadegliano-Viconago VA, Italia
16. **AL BOCCALINO Bed & Breakfast** — Brusimpiano
   - slug: `al-boccalino-bed-breakfast-brusimpiano`
   - indirizzo: Via Francesco Borromini 27, 6815 Melide, Svizzera
17. **Apartment Lac** — Brusimpiano
   - slug: `apartment-lac-brusimpiano`
   - indirizzo: Via Giuseppe Garibaldi, 2, 21050 Brusimpiano VA
18. **B&B MANITO** — Brusimpiano
   - slug: `b-b-manito-brusimpiano`
   - indirizzo: Via Valle, 4, 21037 Lavena Ponte Tresa VA
19. **casafile 4 ½ -Zimmer- Ferienhaus** — Brusimpiano
   - slug: `casafile-4-zimmer-ferienhaus-brusimpiano`
   - indirizzo: Via M. Bagattini, 6, 21050 Brusimpiano VA
20. **Dolceresio Lugano Lake B&B** — Brusimpiano
   - slug: `dolceresio-lugano-lake-b-b-brusimpiano`
   - indirizzo: Vila da Roncaiöö 1, 6827 Brusino Arsizio, Svizzera
21. **Grotto Flora B&B** — Brusimpiano
   - slug: `grotto-flora-b-b-brusimpiano`
   - indirizzo: Via Municipio 8, 6927 Agra, Svizzera
22. **Hotel Grotto Bagat** — Brusimpiano
   - slug: `hotel-grotto-bagat-brusimpiano`
   - indirizzo: Via Brusimpiano, 18, 21037 Lavena Ponte Tresa VA
23. **La Corte di Franco** — Brusimpiano
   - slug: `la-corte-di-franco-brusimpiano`
   - indirizzo: Via Caminatti, 2, 21050 Brusimpiano VA
24. **Osteria al Cantonaccio con alloggio** — Brusimpiano
   - slug: `osteria-al-cantonaccio-con-alloggio-brusimpiano`
   - indirizzo: Via Giuseppe Garibaldi, 17, 21050 Brusimpiano VA
25. **Villa Mia Lugano Lake** — Brusimpiano
   - slug: `villa-mia-lugano-lake-brusimpiano`
   - indirizzo: Via Federico Motta, 8, 21050 Brusimpiano VA
26. **Cascina Cottignano** — Brusnengo
   - slug: `cascina-cottignano-brusnengo`
   - indirizzo: Località Cascina Cottignano, 1, 13866 Masserano BI
27. **StarsBOX Le Moline** — Brusnengo
   - slug: `starsbox-le-moline-brusnengo`
   - indirizzo: frazione bozzone 3, 13866 Masserano BI
28. **Affittacamere Ciampian** — Brusson
   - slug: `affittacamere-ciampian-brusson`
   - indirizzo: Rue Col de Joux, 11022 Brusson AO
29. **Affittacamere La Luge D'Antan** — Brusson
   - slug: `affittacamere-la-luge-d-antan-brusson`
   - indirizzo: Rue Col de Joux, 71, 11022 Brusson AO
30. **Albergo Croce Bianca** — Brusson
   - slug: `albergo-croce-bianca-brusson`
   - indirizzo: Rue Arcesaz 70, 11022 Brusson AO
31. **Albergo Nord** — Brusson
   - slug: `albergo-nord-brusson`
   - indirizzo: Rue Trois Villages, 98, 11022 Brusson AO
32. **AU RASCARD - CHALET D'HOTES** — Brusson
   - slug: `au-rascard-chalet-d-hotes-brusson`
   - indirizzo: Hameau Crêtes, 18, 11022 Brusson AO
33. **B&B L'Abreny** — Brusson
   - slug: `b-b-l-abreny-brusson`
   - indirizzo: Loc. Les Cretes, 5, Brusson, 11022 Brusson AO
34. **Brusson** — Brusson
   - slug: `brusson-brusson`
   - indirizzo: Hameau Ponteil, 24, 11022 Brusson AO
35. **brusson alloggi vacanze** — Brusson
   - slug: `brusson-alloggi-vacanze-brusson`
   - indirizzo: Rue Trois Villages, 39, 11020 Brusson AO