# Blocco 420/500 — 35 strutture senza descrizione IT

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

1. **Palazzo Deca MANCINI** — Capolona
   - slug: `palazzo-deca-mancini-capolona`
   - indirizzo: Località Ponte Caliano, 118, 52010 Subbiano AR
2. **Santantimo Tuscany Inn** — Capolona
   - slug: `santantimo-tuscany-inn-capolona`
   - indirizzo: Località Chiassa Vico, 90, 52100 Arezzo AR
3. **Torre Santa Flora** — Capolona
   - slug: `torre-santa-flora-capolona`
   - indirizzo: Frazione Pontecaliano, 169, 52010 Arezzo AR
4. **Villa Casafredda Agriturismo** — Capolona
   - slug: `villa-casafredda-agriturismo-capolona`
   - indirizzo: Loc Ceciliano 82, 52100 Arezzo AR
5. **Villa La Ginestra - Casa vacanze / Bed & breakfast** — Capolona
   - slug: `villa-la-ginestra-casa-vacanze-bed-breakfast-capolona`
   - indirizzo: Località Castelnuovo, 74, 52010 Subbiano AR
6. **Villa la Nussa b&b** — Capolona
   - slug: `villa-la-nussa-b-b-capolona`
   - indirizzo: Via Veneto, 145, 52010 Capolona AR
7. **Villaspino** — Capolona
   - slug: `villaspino-capolona`
   - indirizzo: Pieve di Cenina, 163, 52010 Capolona AR
8. **Affittacamere DolceLago** — Caponago
   - slug: `affittacamere-dolcelago-caponago`
   - indirizzo: Via Corsica, 29, 23843 Dolzago LC
9. **B&B IL GUFO 42** — Caponago
   - slug: `b-b-il-gufo-42-caponago`
   - indirizzo: Via Giacomo Leopardi, 42, 20055 Vimodrone MI
10. **Bigatt B&B** — Caponago
   - slug: `bigatt-b-b-caponago`
   - indirizzo: Via S. G. Bosco, 7, 20043 Vanzago MI
11. **Camera 40** — Caponago
   - slug: `camera-40-caponago`
   - indirizzo: Via Italia, 40, 20064 Gorgonzola MI
12. **Devero Hotel** — Caponago
   - slug: `devero-hotel-caponago`
   - indirizzo: Largo J. F. Kennedy, 1, 20873 Cavenago di Brianza MB
13. **Grow Green** — Caponago
   - slug: `grow-green-caponago`
   - indirizzo: Cascina Turro, 20867 Caponago MB
14. **Il giardino di Fiorina** — Caponago
   - slug: `il-giardino-di-fiorina-caponago`
   - indirizzo: Via Bollate, 53, 20226 Novate Milanese MI
15. **Il Topazio B&B** — Caponago
   - slug: `il-topazio-b-b-caponago`
   - indirizzo: Via Aldo Moro, 111, 20066 Melzo MI
16. **Rona Motel** — Caponago
   - slug: `rona-motel-caponago`
   - indirizzo: Viale Monza, 15, 20867 Caponago MB
17. **Antica Dimora del Tratturo Magno** — Caporciano
   - slug: `antica-dimora-del-tratturo-magno-caporciano`
   - indirizzo: Via della Fonte, 1, 67020 Tussio AQ
18. **Dimora al colle** — Caporciano
   - slug: `dimora-al-colle-caporciano`
   - indirizzo: Via degli Orti, 2, 67020 Caporciano AQ
19. **Palazzo D'Alessandro Wunderkammer & Suites** — Caporciano
   - slug: `palazzo-d-alessandro-wunderkammer-suites-caporciano`
   - indirizzo: Via Vicinato Grande, 13, 67020 Caporciano AQ
20. **Regio Tratturo** — Caporciano
   - slug: `regio-tratturo-caporciano`
   - indirizzo: Via Roma, 35, 67020 Caporciano AQ
21. **Agriturismo Locanda Nina - Irpinia** — Caposele
   - slug: `agriturismo-locanda-nina-irpinia-caposele`
   - indirizzo: 83040 Ponteromito AV
22. **Al Chiaro di Luna B&B** — Caposele
   - slug: `al-chiaro-di-luna-b-b-caposele`
   - indirizzo: Via Croce, 85, 83052 Paternopoli AV
23. **B&B Tenuta Bianca** — Caposele
   - slug: `b-b-tenuta-bianca-caposele`
   - indirizzo: Via dell'Anfiteatro, 29, 84020 Oliveto Citra SA
24. **ALBA** — Capoterra
   - slug: `alba-capoterra`
   - indirizzo: Via Cagliari, 74, 09012 Capoterra CA
25. **B&B Casa Delfina** — Capoterra
   - slug: `b-b-casa-delfina-capoterra`
   - indirizzo: Via Trento, 45, 09012 Capoterra CA
26. **B&B Il Fenicottero** — Capoterra
   - slug: `b-b-il-fenicottero-capoterra`
   - indirizzo: Via Lombardia, 71, 09012 Capoterra CA
27. **B&B Montrabu** — Capoterra
   - slug: `b-b-montrabu-capoterra`
   - indirizzo: Traversa di Via della Vittoria, 09, 09012 Capoterra CA
28. **B&B Villa Chederina** — Capoterra
   - slug: `b-b-villa-chederina-capoterra`
   - indirizzo: Via Regina Margherita, 54, 09012 Capoterra CA
29. **Bed and breakfast SU PRESCIU** — Capoterra
   - slug: `bed-and-breakfast-su-presciu-capoterra`
   - indirizzo: Via Armando Diaz, 25, 09012 Capoterra CA
30. **Casa Corona** — Capoterra
   - slug: `casa-corona-capoterra`
   - indirizzo: Via Matteotti, 20, 09012 Capoterra CA
31. **Corte Maddalena** — Capoterra
   - slug: `corte-maddalena-capoterra`
   - indirizzo: S.da Statale 195 Sulcitana, 09012 Capoterra CA
32. **Gentarrubia B&B** — Capoterra
   - slug: `gentarrubia-b-b-capoterra`
   - indirizzo: Via Berna, 8, 09012 La Maddalena CA
33. **Holiday Inn Cagliari** — Capoterra
   - slug: `holiday-inn-cagliari-capoterra`
   - indirizzo: Viale Umberto Ticca, 23, 09122 Cagliari CA
34. **Hotel Santa Gilla** — Capoterra
   - slug: `hotel-santa-gilla-capoterra`
   - indirizzo: Via Ustica, 13, 09012 Capoterra CA
35. **Hotel Tanca Irde** — Capoterra
   - slug: `hotel-tanca-irde-capoterra`
   - indirizzo: Località Fra Giuanni, 09012 Capoterra CA