# Blocco 470/500 — 35 strutture senza descrizione IT

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

1. **Maison Younesco Villa exclusive tra Langhe e Monferrato** — Castagnole delle Lanze
   - slug: `maison-younesco-villa-exclusive-tra-langhe-e-mon-castagnole-delle-lanze`
   - indirizzo: Via Ener Bettica, 31, 14054 Castagnole delle Lanze AT
2. **Monvì Wine Relais** — Castagnole delle Lanze
   - slug: `monvi-wine-relais-castagnole-delle-lanze`
   - indirizzo: Str. S. Martino, 3, 14055 Costigliole d'Asti AT
3. **Vicolo Al Castello - Langhe e Monferrato Suites** — Castagnole delle Lanze
   - slug: `vicolo-al-castello-langhe-e-monferrato-suites-castagnole-delle-lanze`
   - indirizzo: Vicolo Risso, 5, Via Pola, 1, 14055 Costigliole d'Asti AT
4. **Villa Cristina Suite** — Castagnole delle Lanze
   - slug: `villa-cristina-suite-castagnole-delle-lanze`
   - indirizzo: Via Piani, 5/A, 14054 Castagnole delle Lanze AT
5. **VILLA FERNANDO** — Castagnole delle Lanze
   - slug: `villa-fernando-castagnole-delle-lanze`
   - indirizzo: Via Val Guarena, 6, 14054 Castagnole delle Lanze AT
6. **Villa Gallina** — Castagnole delle Lanze
   - slug: `villa-gallina-castagnole-delle-lanze`
   - indirizzo: Via Gallina, 24, 12052 Neive CN
7. **Villa La Mura** — Castagnole delle Lanze
   - slug: `villa-la-mura-castagnole-delle-lanze`
   - indirizzo: Strada Convento Tinella, 22, 14055 Costigliole d'Asti AT
8. **Villa Perla** — Castagnole delle Lanze
   - slug: `villa-perla-castagnole-delle-lanze`
   - indirizzo: Str. Bricco Quaglia, 14, 14055 Costigliole d'Asti AT
9. **Agriturismo Cascina Madonna** — Castagnole Monferrato
   - slug: `agriturismo-cascina-madonna-castagnole-monferrato`
   - indirizzo: Via Alessandria, 55, 14030 Refrancore AT
10. **B&B La Vite e l'Ulivo** — Castagnole Monferrato
   - slug: `b-b-la-vite-e-l-ulivo-castagnole-monferrato`
   - indirizzo: Via S. Secondo, 33, 14030 Castagnole Monferrato AT
11. **Golf Club Margara** — Castagnole Monferrato
   - slug: `golf-club-margara-castagnole-monferrato`
   - indirizzo: WCR6+WX, Regione Margara, 15043 Fubine Monferrato AL
12. **La Culla di Bacco** — Castagnole Monferrato
   - slug: `la-culla-di-bacco-castagnole-monferrato`
   - indirizzo: Via Garibaldi, 6, 14030 Castagnole Monferrato AT
13. **La Mondianese D&Vine** — Castagnole Monferrato
   - slug: `la-mondianese-d-vine-castagnole-monferrato`
   - indirizzo: Cascina Mondianese, 12, 14030 Montemagno Monferrato AT
14. **Relais di Tenuta Santa Caterina** — Castagnole Monferrato
   - slug: `relais-di-tenuta-santa-caterina-castagnole-monferrato`
   - indirizzo: Via Guglielmo Marconi, 23, 14035 Grazzano Badoglio AT
15. **B&B Edera** — Castagnole Piemonte
   - slug: `b-b-edera-castagnole-piemonte`
   - indirizzo: Via Garibaldi, 27, 10060 Castagnole Piemonte TO
16. **Hotel Parisi** — Castagnole Piemonte
   - slug: `hotel-parisi-castagnole-piemonte`
   - indirizzo: Via Luigi, Via Galvani, 19, 10042 Nichelino TO
17. **Le Soleil B&B** — Castagnole Piemonte
   - slug: `le-soleil-b-b-castagnole-piemonte`
   - indirizzo: Via Borgata S. Rocco, 26, 10060 Cercenasco TO
18. **B&B La Colinesse** — Castana
   - slug: `b-b-la-colinesse-castana`
   - indirizzo: Frazione Casa del Moro, 13, 27040 Montù Beccaria PV
19. **Delightful Home-Lovely Hill View** — Castana
   - slug: `delightful-home-lovely-hill-view-castana`
   - indirizzo: Ca de Bazzini, 28, 27044 Canneto Pavese PV
20. **B&B DEL CORSO** — Castano Primo
   - slug: `b-b-del-corso-castano-primo`
   - indirizzo: Corso Martiri Patrioti, 39, 20022 Castano Primo MI
21. **Da Mariuccia** — Castano Primo
   - slug: `da-mariuccia-castano-primo`
   - indirizzo: Via Don Luigi Pozzi, 43, 20020 Robecchetto con Induno MI
22. **Hotel & Motel Malpensa Inn AirPort Malpensa Milano** — Castano Primo
   - slug: `hotel-motel-malpensa-inn-airport-malpensa-milano-castano-primo`
   - indirizzo: Via Sant'Anna, 25, 21015 Lonate Pozzolo VA
23. **I’M B&B** — Castano Primo
   - slug: `i-m-b-b-castano-primo`
   - indirizzo: Via Santa Caterina, 81, 21015 Lonate Pozzolo VA
24. **L'ago nel pagliaio** — Castano Primo
   - slug: `l-ago-nel-pagliaio-castano-primo`
   - indirizzo: Via Giacomo Matteotti, 34, 20029 Turbigo MI
25. **VILLORESI ROOMS** — Castano Primo
   - slug: `villoresi-rooms-castano-primo`
   - indirizzo: Via Gallarate, 14/16, 20022 Castano Primo MI
26. **B&B Oltrepo di Albertini Gloria** — Casteggio
   - slug: `b-b-oltrepo-di-albertini-gloria-casteggio`
   - indirizzo: Via Emilia, 27045 Casteggio PV
27. **B&B REGINETTA** — Casteggio
   - slug: `b-b-reginetta-casteggio`
   - indirizzo: Via Alessandro Manzoni, 154, 27045 Casteggio PV
28. **Agriturismo Masseria Portiere Stella** — Castel di Iudica
   - slug: `agriturismo-masseria-portiere-stella-castel-di-iudica`
   - indirizzo: Contrada Portiere Stella, 95047 Paternò CT
29. **Albergo Hotel Castel Miralago** — Castel di Iudica
   - slug: `albergo-hotel-castel-miralago-castel-di-iudica`
   - indirizzo: SS121, KM 60, 94017 Regalbuto EN
30. **Belvedere** — Castel di Iudica
   - slug: `belvedere-castel-di-iudica`
   - indirizzo: Via Giuseppe Garibaldi, 77, 95040 Castel di Judica CT
31. **B&B Il Miglio In Più** — Castel di Lucio
   - slug: `b-b-il-miglio-in-piu-castel-di-lucio`
   - indirizzo: Via Nazionale, 107, 98079 Castel di Tusa ME
32. **Exclusive Apartments in center** — Castel di Lucio
   - slug: `exclusive-apartments-in-center-castel-di-lucio`
   - indirizzo: Strada Santa Caterina, 3, 98073 Mistretta ME
33. **La Rocca** — Castel di Lucio
   - slug: `la-rocca-castel-di-lucio`
   - indirizzo: Via S. Antonio Abate, 9, 94014 Nicosia EN
34. **Le Nuvole** — Castel di Lucio
   - slug: `le-nuvole-castel-di-lucio`
   - indirizzo: Via Croce Missione, 8, 98077 Santo Stefano di Camastra ME
35. **a Badia** — Castelbuono
   - slug: `a-badia-castelbuono`
   - indirizzo: Via Roma, 97, 90013 Castelbuono PA