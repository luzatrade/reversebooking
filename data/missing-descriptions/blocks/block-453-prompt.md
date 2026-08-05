# Blocco 453/500 — 35 strutture senza descrizione IT

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

1. **Hotel Azalea** — Casale Corte Cerro
   - slug: `hotel-azalea-casale-corte-cerro`
   - indirizzo: Via Domo, 6, 28831 Baveno VB
2. **Hotel Due Palme** — Casale Corte Cerro
   - slug: `hotel-due-palme-casale-corte-cerro`
   - indirizzo: Via Pallanza, 1, 28802 Mergozzo VB
3. **Hotel Simplon** — Casale Corte Cerro
   - slug: `hotel-simplon-casale-corte-cerro`
   - indirizzo: Corso Giuseppe Garibaldi, 52, 28831 Baveno VB
4. **Hotel Splendid** — Casale Corte Cerro
   - slug: `hotel-splendid-casale-corte-cerro`
   - indirizzo: Str. Nazionale del Sempione, 12, 28831 Baveno VB
5. **Il riccio di Ricciano** — Casale Corte Cerro
   - slug: `il-riccio-di-ricciano-casale-corte-cerro`
   - indirizzo: Via Pedemonte, 1, 28881 Casale Corte Cerro VB
6. **Ostello di Germagno** — Casale Corte Cerro
   - slug: `ostello-di-germagno-casale-corte-cerro`
   - indirizzo: Via Piero Sindico, 5, 28887 Germagno VB
7. **Ristorante Albergo La Quartina** — Casale Corte Cerro
   - slug: `ristorante-albergo-la-quartina-casale-corte-cerro`
   - indirizzo: Via Pallanza, 20, 28802 Mergozzo VB
8. **Albergo Ristorante Antica Tosca** — Casale di Scodosia
   - slug: `albergo-ristorante-antica-tosca-casale-di-scodosia`
   - indirizzo: Viale Trento, 36, 35044 Montagnana PD
9. **Az. Agr. Ponte al Masero** — Casale di Scodosia
   - slug: `az-agr-ponte-al-masero-casale-di-scodosia`
   - indirizzo: Via Malmercato, 67, 35040 Merlara PD
10. **B&B Ca' Gialla** — Casale di Scodosia
   - slug: `b-b-ca-gialla-casale-di-scodosia`
   - indirizzo: Via Roma, 677, 35040 Urbana PD
11. **B&B Ca` del Sole** — Casale di Scodosia
   - slug: `b-b-ca-del-sole-casale-di-scodosia`
   - indirizzo: Via Mure Sud, 8, 35044 Montagnana PD
12. **La Colombara Camp&Lodge** — Casale di Scodosia
   - slug: `la-colombara-camp-lodge-casale-di-scodosia`
   - indirizzo: Via Crosare di Sotto, 50, 37040 Pressana VR
13. **Leon d'Oro** — Casale di Scodosia
   - slug: `leon-d-oro-casale-di-scodosia`
   - indirizzo: Viale Fiume, 20, 35042 Este PD
14. **Art Hotel** — Casale Litta
   - slug: `art-hotel-casale-litta`
   - indirizzo: Viale Padre G. B. Aguggiari, 26, 21100 Varese VA
15. **Hotel Ristorante 3 Re Srl di Silvera Silvia e Raffaella & C.** — Casale Litta
   - slug: `hotel-ristorante-3-re-srl-di-silvera-silvia-e-ra-casale-litta`
   - indirizzo: Piazza Giuseppe Garibaldi, 25, 21018 Sesto Calende VA
16. **Malpensa BeB al Castello | Casale Litta Varese** — Casale Litta
   - slug: `malpensa-beb-al-castello-casale-litta-varese-casale-litta`
   - indirizzo: Vicolo S. Francesco, 6, 21020 Casale Litta VA
17. **B&B Casa Cerboneschi** — Casale Marittimo
   - slug: `b-b-casa-cerboneschi-casale-marittimo`
   - indirizzo: Via Roma, 10, 56040 Casale Marittimo PI
18. **B&B La Macina** — Casale Marittimo
   - slug: `b-b-la-macina-casale-marittimo`
   - indirizzo: S. P. dei tre comuni 62 Loc, Via Vallileggia, 56040 Montescudaio PI
19. **Casale Vecchio** — Casale Marittimo
   - slug: `casale-vecchio-casale-marittimo`
   - indirizzo: 56040 Casale Marittimo PI
20. **Fattoria Podere i Luoghi** — Casale Marittimo
   - slug: `fattoria-podere-i-luoghi-casale-marittimo`
   - indirizzo: Via dei Tre Comuni, 56040 Casale Marittimo PI
21. **Il Poggio** — Casale Marittimo
   - slug: `il-poggio-casale-marittimo`
   - indirizzo: Via Vicinale Valicandoli, 56040 Casale Marittimo PI
22. **Le Camere del Borgo** — Casale Marittimo
   - slug: `le-camere-del-borgo-casale-marittimo`
   - indirizzo: Via della Madonna, 6, 56040 Montescudaio PI
23. **Le Camere di Nonna Mara** — Casale Marittimo
   - slug: `le-camere-di-nonna-mara-casale-marittimo`
   - indirizzo: Via, Strada Provinciale dei Tre Comuni, 76, 56040 Montescudaio PI
24. **Le Conche Srl** — Casale Marittimo
   - slug: `le-conche-srl-casale-marittimo`
   - indirizzo: Via Cecinese, 40, 56040 Casale Marittimo PI
25. **Locanda dell'Aioncino** — Casale Marittimo
   - slug: `locanda-dell-aioncino-casale-marittimo`
   - indirizzo: 81, Bibbona, Via Bolgherese, 57020 Bibbona LI
26. **Relais San Baio - No Kids** — Casale Marittimo
   - slug: `relais-san-baio-no-kids-casale-marittimo`
   - indirizzo: Via della Macchia, 5, 57023 Cecina LI
27. **Residence Le Fontanelle** — Casale Marittimo
   - slug: `residence-le-fontanelle-casale-marittimo`
   - indirizzo: Via delle Fontanelle, 1, 56040 Montescudaio PI
28. **Riparbella Country Suite - #maremmachevacanza Group** — Casale Marittimo
   - slug: `riparbella-country-suite-maremmachevacanza-group-casale-marittimo`
   - indirizzo: Località S. Martino, Snc, 56046 Riparbella PI
29. **Ristorante & Agriturismo Podere Santa Rita** — Casale Marittimo
   - slug: `ristorante-agriturismo-podere-santa-rita-casale-marittimo`
   - indirizzo: Agriturismo Podere Santa Rita - Deluxe Double Room (2 Adults + 1 Child), Strada Provinciale dei Tre Comuni, 95, 56040 Montescudaio PI
30. **Ristorante Locanda Le Volte** — Casale Marittimo
   - slug: `ristorante-locanda-le-volte-casale-marittimo`
   - indirizzo: Via Roma, 61, 56040 Casale Marittimo PI
31. **THE LΛB™** — Casale Marittimo
   - slug: `the-l-b-casale-marittimo`
   - indirizzo: Via Cecinese, 70, 56040 Casale Marittimo PI
32. **Vieni Via Con Me Home** — Casale Marittimo
   - slug: `vieni-via-con-me-home-casale-marittimo`
   - indirizzo: Via della Madonna, 15, 56040 Casale Marittimo PI
33. **B&B Villa Mery guest house** — Casale Monferrato
   - slug: `b-b-villa-mery-guest-house-casale-monferrato`
   - indirizzo: Corso Indipendenza, 65, 15033 Casale Monferrato AL
34. **Casa Cristina** — Casale Monferrato
   - slug: `casa-cristina-casale-monferrato`
   - indirizzo: Vicolo Salomone Olper, 28, 15033 Casale Monferrato AL
35. **Cascina Faletta - Ristorante - B&B - Wine Tasting** — Casale Monferrato
   - slug: `cascina-faletta-ristorante-b-b-wine-tasting-casale-monferrato`
   - indirizzo: Regione Mandoletta, 81, 15033 Casale Monferrato AL