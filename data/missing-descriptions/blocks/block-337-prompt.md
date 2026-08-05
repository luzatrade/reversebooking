# Blocco 337/500 — 35 strutture senza descrizione IT

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

1. **La Bella Vita Agriturismo** — Buccheri
   - slug: `la-bella-vita-agriturismo-buccheri`
   - indirizzo: Contrada Pantanelle, 97012 Chiaramonte Gulfi RG
2. **La Mela di Venere Agriturismo** — Buccheri
   - slug: `la-mela-di-venere-agriturismo-buccheri`
   - indirizzo: contrada fondi vecchi, Contrada Famelio, 96010 Palazzolo Acreide SR
3. **Le case di Sant'Andrea - no swimming pool** — Buccheri
   - slug: `le-case-di-sant-andrea-no-swimming-pool-buccheri`
   - indirizzo: Strada Provinciale 5 Lentini, 96010 Buccheri SR
4. **Lo Zafferaneto hotel, ristorante & spa** — Buccheri
   - slug: `lo-zafferaneto-hotel-ristorante-spa-buccheri`
   - indirizzo: SP5 Buccheri-San Giovanni, 96015 Buccheri SR
5. **Locanda Gulfi** — Buccheri
   - slug: `locanda-gulfi-buccheri`
   - indirizzo: Contrada Patrìa, sn, 97012 Chiaramonte Gulfi RG
6. **Southeast Hotel** — Buccheri
   - slug: `southeast-hotel-buccheri`
   - indirizzo: s/n, 97012 Coffa RG
7. **Tenuta Sorìa - Az. Agricola Baroni di Ramursura** — Buccheri
   - slug: `tenuta-soria-az-agricola-baroni-di-ramursura-buccheri`
   - indirizzo: S.P. 5 per Buccheri, 96015 Francofonte SR
8. **Vento del Sud** — Buccheri
   - slug: `vento-del-sud-buccheri`
   - indirizzo: S.S 514, km 8, 97012 Chiaramonte Gulfi RG
9. **Villaggio Agrituristico Campanio** — Buccheri
   - slug: `villaggio-agrituristico-campanio-buccheri`
   - indirizzo: Contrada Campanio sn, 96010 Ferla SR
10. **B&B Abruzzo Mare e Monti Chieti** — Bucchianico
   - slug: `b-b-abruzzo-mare-e-monti-chieti-bucchianico`
   - indirizzo: Str. di Colle Marconi, 66100 Chieti CH
11. **B&B Villa Angela Vallemare** — Bucchianico
   - slug: `b-b-villa-angela-vallemare-bucchianico`
   - indirizzo: 65012 Cepagatti PE
12. **B&B Villa dei Desideri - Bed and Breakfast Chieti** — Bucchianico
   - slug: `b-b-villa-dei-desideri-bed-and-breakfast-chieti-bucchianico`
   - indirizzo: Strada Pila, 1, 66100 Chieti CH
13. **Frapippo B&B** — Bucchianico
   - slug: `frapippo-b-b-bucchianico`
   - indirizzo: Str. Peschiera, 102, 66100 Chieti CH
14. **Galè Suite Apartment** — Bucchianico
   - slug: `gale-suite-apartment-bucchianico`
   - indirizzo: Viale Abruzzo, 70, 66100 Chieti CH
15. **La locanda degli asinelli** — Bucchianico
   - slug: `la-locanda-degli-asinelli-bucchianico`
   - indirizzo: Contrada Cese, 39, 66011 Bucchianico CH
16. **LACASETTADILINA** — Bucchianico
   - slug: `lacasettadilina-bucchianico`
   - indirizzo: Via Grazia Deledda, 24, 65012 Villareia PE
17. **Villa Costanza** — Bucchianico
   - slug: `villa-costanza-bucchianico`
   - indirizzo: Via Iconicella, 19, 66010 Ripa Teatina CH
18. **Agriturismo A Casa di Samuele** — Bucciano
   - slug: `agriturismo-a-casa-di-samuele-bucciano`
   - indirizzo: Via Rotabile, 48, 81010 Squille CE
19. **B&b A Casa di Rut** — Bucciano
   - slug: `b-b-a-casa-di-rut-bucciano`
   - indirizzo: Via Vignali, 5, 82010 Moiano BN
20. **Il Bambù - Ospitalità Rurale** — Bucciano
   - slug: `il-bambu-ospitalita-rurale-bucciano`
   - indirizzo: Via Cocola, 27, 82030 Dugenta BN
21. **Casa Giulia Navigli Affittacamere** — Buccinasco
   - slug: `casa-giulia-navigli-affittacamere-buccinasco`
   - indirizzo: Via IV Novembre, 39/A, 20094 Corsico MI
22. **DANDT HOME** — Buccinasco
   - slug: `dandt-home-buccinasco`
   - indirizzo: Via Enrico Fermi, 2, 20090 Trezzano sul Naviglio MI
23. **Hostal D'Annunzio house** — Buccinasco
   - slug: `hostal-d-annunzio-house-buccinasco`
   - indirizzo: Via G. D'Annunzio, 6, 20090 Cesano Boscone MI
24. **Hotel Gambara** — Buccinasco
   - slug: `hotel-gambara-buccinasco`
   - indirizzo: Via Fra Galgario, 4, 20146 Milano MI
25. **Hotel GF S.r.l.** — Buccinasco
   - slug: `hotel-gf-s-r-l-buccinasco`
   - indirizzo: Via Donizetti, 3, 20094 Cesano Boscone MI
26. **iH Hotels Milano Eur - Trezzano sul Naviglio** — Buccinasco
   - slug: `ih-hotels-milano-eur-trezzano-sul-naviglio-buccinasco`
   - indirizzo: Viale Leonardo da Vinci, 36 A, 20090 Trezzano sul Naviglio MI
27. **il Sole di Baggio - Rooms** — Buccinasco
   - slug: `il-sole-di-baggio-rooms-buccinasco`
   - indirizzo: Via delle Forze Armate, 376, 20152 Milano MI
28. **Navigli Suites** — Buccinasco
   - slug: `navigli-suites-buccinasco`
   - indirizzo: Via Mortara, 2, 20144 Milano MI
29. **Affittacamere “La Maison”** — Buccino
   - slug: `affittacamere-la-maison-buccino`
   - indirizzo: Via delle Grotte, 22, 84035 Polla SA
30. **Agriturismo Antica Quercia** — Buccino
   - slug: `agriturismo-antica-quercia-buccino`
   - indirizzo: Contrada Portola, 1, 84020 San Gregorio Magno SA
31. **Agriturismo La Sfruscià Resort** — Buccino
   - slug: `agriturismo-la-sfruscia-resort-buccino`
   - indirizzo: SP10b, 84020 San Gregorio Magno SA
32. **B&B - Casa Vacanze il Vicolo - Oliveto Citra** — Buccino
   - slug: `b-b-casa-vacanze-il-vicolo-oliveto-citra-buccino`
   - indirizzo: Via Plebiscito, 84020 Oliveto Citra SA
33. **Bed & Breakfast Miraville** — Buccino
   - slug: `bed-breakfast-miraville-buccino`
   - indirizzo: Corso Umberto I, 84020 Valva SA
34. **Eliceto Resort & SPA** — Buccino
   - slug: `eliceto-resort-spa-buccino`
   - indirizzo: Località Eliceto, 84021 Buccino SA
35. **Hotel Valle Verde** — Buccino
   - slug: `hotel-valle-verde-buccino`
   - indirizzo: Piazza Aldo Moro, 3, 84020 San Gregorio Magno SA