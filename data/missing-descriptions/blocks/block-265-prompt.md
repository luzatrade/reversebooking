# Blocco 265/500 — 35 strutture senza descrizione IT

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

1. **Nuovo Agriturismo Villa Enrichetta** — Bettola
   - slug: `nuovo-agriturismo-villa-enrichetta-bettola`
   - indirizzo: Località Villa Enrichetta, 1, 29021 Bettola PC
2. **UvaMatta** — Bettola
   - slug: `uvamatta-bettola`
   - indirizzo: Via Domenico Lusardi, 54, 29020 Carmiano PC
3. **Veleia Locanda** — Bettola
   - slug: `veleia-locanda-bettola`
   - indirizzo: SP14, 29018 Magnani PC
4. **Agriturismo L'Uliveto Magico** — Bettona
   - slug: `agriturismo-l-uliveto-magico-bettona`
   - indirizzo: Via cicaleto, 1, 06033 Cannara PG
5. **agriturismo la macina di bettona** — Bettona
   - slug: `agriturismo-la-macina-di-bettona-bettona`
   - indirizzo: Via Corta, 06084 Passaggio PG
6. **Agriturismo Residenza Il Girasole** — Bettona
   - slug: `agriturismo-residenza-il-girasole-bettona`
   - indirizzo: Via Perugia, 100, 06084 Bettona PG
7. **Agriturismo Umbrian Sunrise** — Bettona
   - slug: `agriturismo-umbrian-sunrise-bettona`
   - indirizzo: Strada Provinciale 412 Loc, 06033 Collemancio PG
8. **B&B River Melody Umbria** — Bettona
   - slug: `b-b-river-melody-umbria-bettona`
   - indirizzo: Via Col di Mezzo, 47, 06084 Bettona PG
9. **Bed And Breakfast Madonna Del Latte** — Bettona
   - slug: `bed-and-breakfast-madonna-del-latte-bettona`
   - indirizzo: Vocabolo Pilercio, 30, 06033 Cannara PG
10. **Borgo Sant'Anna** — Bettona
   - slug: `borgo-sant-anna-bettona`
   - indirizzo: Via Sant'Anna, 17, 06084 Passaggio PG
11. **Country House Il Sambro** — Bettona
   - slug: `country-house-il-sambro-bettona`
   - indirizzo: Via Molinella, 19, 06084 Passaggio PG
12. **Country House le Case Coloniche Umbria** — Bettona
   - slug: `country-house-le-case-coloniche-umbria-bettona`
   - indirizzo: Vocabolo la Torre, 06053 Deruta PG
13. **Il Poggio degli Olivi** — Bettona
   - slug: `il-poggio-degli-olivi-bettona`
   - indirizzo: Via Montebalacca, 06080 Passaggio PG
14. **La Pila - Il Santuario dell'essere** — Bettona
   - slug: `la-pila-il-santuario-dell-essere-bettona`
   - indirizzo: Via Cinque Cerri, 06084 Bettona PG
15. **MAME'** — Bettona
   - slug: `mame-bettona`
   - indirizzo: Via S. Bernardino, 46, 06084 Bettona PG
16. **Palazzo Fiumi-LaPlaca** — Bettona
   - slug: `palazzo-fiumi-laplaca-bettona`
   - indirizzo: Piazza Preziotti, 4, 06084 Bettona PG
17. **Relais La Corte di Bettona** — Bettona
   - slug: `relais-la-corte-di-bettona-bettona`
   - indirizzo: Via Santa Caterina, 2, 06084 Bettona PG
18. **Società Agricola F.lli Angelucci S.r.l.** — Bettona
   - slug: `societa-agricola-f-lli-angelucci-s-r-l-bettona`
   - indirizzo: Vocabolo S. Nicola, 69, 06033 Collemancio PG
19. **Tra grilli e cicale** — Bettona
   - slug: `tra-grilli-e-cicale-bettona`
   - indirizzo: Strada esterna vicinale del felceto, 3, 06053 Deruta PG
20. **Villa Paolotti** — Bettona
   - slug: `villa-paolotti-bettona`
   - indirizzo: Piazza Umberto Balducci, 1, 06084 Bettona PG
21. **A casa di Lara** — Beura-Cardezza
   - slug: `a-casa-di-lara-beura-cardezza`
   - indirizzo: Via Domodossola, 10, 28851 Beura-cardezza VB
22. **Agriturismo La Tensa** — Beura-Cardezza
   - slug: `agriturismo-la-tensa-beura-cardezza`
   - indirizzo: Località Tensa, 28845 Domodossola VB
23. **Albergo Biglia** — Beura-Cardezza
   - slug: `albergo-biglia-beura-cardezza`
   - indirizzo: Piazza Arturo dell'Oro, 22, 28845 Domodossola VB
24. **B&B Le Camelie** — Beura-Cardezza
   - slug: `b-b-le-camelie-beura-cardezza`
   - indirizzo: Borgata S. Quirico, 20, 28845 Domodossola VB
25. **Bed & Breakfast Tiffany a Domodossola** — Beura-Cardezza
   - slug: `bed-breakfast-tiffany-a-domodossola-beura-cardezza`
   - indirizzo: Via G. G. Galletti, 72, 28845 Domodossola VB
26. **Cá Bussun** — Beura-Cardezza
   - slug: `ca-bussun-beura-cardezza`
   - indirizzo: via Guelfi, 2, 28845 Domodossola VB
27. **Dimora Domese** — Beura-Cardezza
   - slug: `dimora-domese-beura-cardezza`
   - indirizzo: Via Benedetto del Ponte, 4, 28845 Domodossola VB
28. **AGRITURISMO ETICO LE GRAZIE** — Bevagna
   - slug: `agriturismo-etico-le-grazie-bevagna`
   - indirizzo: Via Madonna delle Grazie, 20, 06031 Bevagna PG
29. **Agriturismo Il Poggio Dei Pettirossi** — Bevagna
   - slug: `agriturismo-il-poggio-dei-pettirossi-bevagna`
   - indirizzo: Via del Poggio, 1, 06031 Bevagna PG
30. **Agriturismo Villaggio Green** — Bevagna
   - slug: `agriturismo-villaggio-green-bevagna`
   - indirizzo: Località Polzella, 35, 06036 Montefalco PG
31. **B&B Antignano** — Bevagna
   - slug: `b-b-antignano-bevagna`
   - indirizzo: 06031 Bevagna PG, Italia
32. **B&B Casa Anna Bevagna Umbria** — Bevagna
   - slug: `b-b-casa-anna-bevagna-umbria-bevagna`
   - indirizzo: Piazza dell'Asilo, 8, 06031 Bevagna PG
33. **B&B Dell'Annunziata** — Bevagna
   - slug: `b-b-dell-annunziata-bevagna`
   - indirizzo: Via Santissima Annunziata, 8, 06031 Bevagna PG
34. **B&B Marinucci's House - Le stanze del Canonico** — Bevagna
   - slug: `b-b-marinucci-s-house-le-stanze-del-canonico-bevagna`
   - indirizzo: Via S. Francesco, 9, 06031 Bevagna PG
35. **B&B Porta Perugina** — Bevagna
   - slug: `b-b-porta-perugina-bevagna`
   - indirizzo: Piazza Giuseppe Garibaldi, 4, 06031 Bevagna PG