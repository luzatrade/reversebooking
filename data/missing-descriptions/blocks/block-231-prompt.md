# Blocco 231/500 — 35 strutture senza descrizione IT

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

1. **Hotel Nuova Orchidea** — Bascap�
   - slug: `hotel-nuova-orchidea-bascap`
   - indirizzo: Via Milano, 1, 20070 Dresano MI
2. **Hotel Sabrina** — Bascap�
   - slug: `hotel-sabrina-bascap`
   - indirizzo: Via Emilia, 4, 26858 Sordio LO
3. **Palazzo Marignano Hotel** — Bascap�
   - slug: `palazzo-marignano-hotel-bascap`
   - indirizzo: Via Martiri della Libertà, 8, 20077 Melegnano MI
4. **Poste Regie - Milan Guest House** — Bascap�
   - slug: `poste-regie-milan-guest-house-bascap`
   - indirizzo: Via Giovanni Battista Cassinis, 76, 20139 Milano MI
5. **Ripamonti Residence & Hotel Milano** — Bascap�
   - slug: `ripamonti-residence-hotel-milano-bascap`
   - indirizzo: Via dei Pini, 3, 20072 Pieve Emanuele MI
6. **Agriturismo Buriano by Bellaluce** — Baschi
   - slug: `agriturismo-buriano-by-bellaluce-baschi`
   - indirizzo: Localita' Camporena, 01020 Lubriano VT
7. **Agriturismo La Quiete di Caiano** — Baschi
   - slug: `agriturismo-la-quiete-di-caiano-baschi`
   - indirizzo: Vocabolo Caiano, 166, 05023 Baschi TR
8. **Agriturismo La Vite E L'ulivo** — Baschi
   - slug: `agriturismo-la-vite-e-l-ulivo-baschi`
   - indirizzo: Vocabolo Montebello, 147, 05023 Baschi TR
9. **Agriturismo Le Casette** — Baschi
   - slug: `agriturismo-le-casette-baschi`
   - indirizzo: Le Casette, 05020 Montecchio TR
10. **Agriturismo Pomonte** — Baschi
   - slug: `agriturismo-pomonte-baschi`
   - indirizzo: Loc. canino 1, 05019 Orvieto TR
11. **Agriturismo San Bartolomeo** — Baschi
   - slug: `agriturismo-san-bartolomeo-baschi`
   - indirizzo: via Caserlena, 1, 05020 Montecchio TR
12. **Alloggio turistico MiraCivita** — Baschi
   - slug: `alloggio-turistico-miracivita-baschi`
   - indirizzo: Via G. Marconi, 17, 01020 Lubriano VT
13. **B&B Dimora Paolina** — Baschi
   - slug: `b-b-dimora-paolina-baschi`
   - indirizzo: Via Guglielmo Marconi, 5, 05023 Baschi TR
14. **B&B Poggio Stallone** — Baschi
   - slug: `b-b-poggio-stallone-baschi`
   - indirizzo: Località Acquafredda, 15, 05018 Orvieto TR
15. **Casale al lago** — Baschi
   - slug: `casale-al-lago-baschi`
   - indirizzo: vocabolo pomurlo nuovo 240, 05023 Baschi TR
16. **Hotel Gialletti** — Baschi
   - slug: `hotel-gialletti-baschi`
   - indirizzo: Via Angelo Costanzi, 71, 05018 Orvieto TR
17. **Il Borgo Affitacamere** — Baschi
   - slug: `il-borgo-affitacamere-baschi`
   - indirizzo: Via del Pericolo, 17, 01024 Castiglione In Teverina VT
18. **L'OASI DEL RIPOSO - Affitta camere** — Baschi
   - slug: `l-oasi-del-riposo-affitta-camere-baschi`
   - indirizzo: Via Amelia, 46, 05023 Baschi TR
19. **La casa di Gioia** — Baschi
   - slug: `la-casa-di-gioia-baschi`
   - indirizzo: Via 4 Novembre, 9, 01024 Castiglione In Teverina VT
20. **La Gallinella Rossa - CIN IT055007C23Z030941** — Baschi
   - slug: `la-gallinella-rossa-cin-it055007c23z030941-baschi`
   - indirizzo: vocabolo casa delle monache, 84, 05023 Baschi TR
21. **Le Macchie** — Baschi
   - slug: `le-macchie-baschi`
   - indirizzo: Vocabolo Macchie, 143, 05023 Baschi TR
22. **PODERE BARBI (PODERE STUCCHIO)** — Baschi
   - slug: `podere-barbi-podere-stucchio-baschi`
   - indirizzo: Vocabolo Murotondo, 05023 Baschi TR
23. **Agriturismo Zà Beata** — Basciano
   - slug: `agriturismo-za-beata-basciano`
   - indirizzo: 6 Contrada Centrella, Penna Sant'andrea, 64039 PENNA SANT_ANDREA TE
24. **Antica Interamnia** — Basciano
   - slug: `antica-interamnia-basciano`
   - indirizzo: Via dei Mosaici, 12, 64100 Teramo TE
25. **B&B Arcobaleno** — Basciano
   - slug: `b-b-arcobaleno-basciano`
   - indirizzo: Via Benedetto Croce, 23, 64039 Penna Sant'Andrea TE
26. **B&B letterario Palazzo Pistocchi** — Basciano
   - slug: `b-b-letterario-palazzo-pistocchi-basciano`
   - indirizzo: Vico Degli Orti, 15, 64100 Teramo TE
27. **Bed and Breakfast Memory** — Basciano
   - slug: `bed-and-breakfast-memory-basciano`
   - indirizzo: Via Macera, 16, 64020 Canzano TE
28. **Corte dei Tini Relais & Ristorante** — Basciano
   - slug: `corte-dei-tini-relais-ristorante-basciano`
   - indirizzo: SS81, 64100 Villa Vomano TE
29. **Hotel Gran Sasso** — Basciano
   - slug: `hotel-gran-sasso-basciano`
   - indirizzo: Via Luigi Vinciguerra, 12, 64100 Teramo TE
30. **Hotel Michelangelo** — Basciano
   - slug: `hotel-michelangelo-basciano`
   - indirizzo: Viale A. de Paulis Fedele, 9, 64100 Teramo TE
31. **Hotel Podio** — Basciano
   - slug: `hotel-podio-basciano`
   - indirizzo: Via del Cimitero, 64100 Poggio Cono TE
32. **La Casa di Gemma B&B** — Basciano
   - slug: `la-casa-di-gemma-b-b-basciano`
   - indirizzo: via Guglielmo Marconi, 16, 64100 Villa Vomano TE
33. **La Villetta sul Mavone** — Basciano
   - slug: `la-villetta-sul-mavone-basciano`
   - indirizzo: Via Casette, 11, 64042 Villa Petto TE
34. **Park Hotel Sporting** — Basciano
   - slug: `park-hotel-sporting-basciano`
   - indirizzo: Via Alcide de Gasperi, 41, 64100 Teramo TE
35. **ReGenzio Affittacamere** — Basciano
   - slug: `regenzio-affittacamere-basciano`
   - indirizzo: Villa Pizzicato, 31, 64042 Colledara TE