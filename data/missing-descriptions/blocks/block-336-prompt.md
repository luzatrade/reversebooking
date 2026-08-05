# Blocco 336/500 — 35 strutture senza descrizione IT

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

1. **Chambres d'hotes A Barma Drola** — Brusson
   - slug: `chambres-d-hotes-a-barma-drola-brusson`
   - indirizzo: Frazione Estoul 18, 11022 Brusson AO
2. **Chambres d'Hòtes" Le Coin Des Mélèzes"** — Brusson
   - slug: `chambres-d-hotes-le-coin-des-melezes-brusson`
   - indirizzo: Località Fenilliettaz, 31, 11022 Estoul AO
3. **Hotel Beau Site** — Brusson
   - slug: `hotel-beau-site-brusson`
   - indirizzo: Rue Trois Villages, 4, 11022 Brusson AO
4. **La Maison de Dolphe - Chalet de Charme a Brusson** — Brusson
   - slug: `la-maison-de-dolphe-chalet-de-charme-a-brusson-brusson`
   - indirizzo: Loc, 11022 Brusson AO
5. **Laghetto** — Brusson
   - slug: `laghetto-brusson`
   - indirizzo: Rue Trois Villages, 291, 11022 Brusson AO
6. **Les Hiboux** — Brusson
   - slug: `les-hiboux-brusson`
   - indirizzo: Hameau Ponteil, 24, 11022 Brusson AO
7. **Mi casa tu casa** — Brusson
   - slug: `mi-casa-tu-casa-brusson`
   - indirizzo: Rue de l'Eglise, 79, 11022 Brusson AO
8. **Residence Aquila** — Brusson
   - slug: `residence-aquila-brusson`
   - indirizzo: Rue Trois Villages, 63, 11022 Brusson AO
9. **Valley Vacanze** — Brusson
   - slug: `valley-vacanze-brusson`
   - indirizzo: Rue Valley, 38, 11022 Brusson AO
10. **B&B La Petite Maison Coazze** — Bruzolo
   - slug: `b-b-la-petite-maison-coazze-bruzolo`
   - indirizzo: Via Matteotti, 130, 10050 Coazze TO
11. **B&B Terra di confine** — Bruzolo
   - slug: `b-b-terra-di-confine-bruzolo`
   - indirizzo: Via Roma, 89, 10050 Venaus TO
12. **La Meizoun Blancho** — Bruzolo
   - slug: `la-meizoun-blancho-bruzolo`
   - indirizzo: Via Grange, 10, 10060 Fenestrelle TO
13. **Relais des Alpes** — Bruzolo
   - slug: `relais-des-alpes-bruzolo`
   - indirizzo: Frazione S. Lorenzo, 82, 10050 Giaglione TO
14. **Yamabushi Bed & Breakfast** — Bruzolo
   - slug: `yamabushi-bed-breakfast-bruzolo`
   - indirizzo: Via Cresta Fiorita, 10, 10050 Gravere TO
15. **Villa francesca e cristina** — Bruzzano Zeffirio
   - slug: `villa-francesca-e-cristina-bruzzano-zeffirio`
   - indirizzo: 89030 Ferruzzano RC
16. **B&B La Corte** — Bubbiano
   - slug: `b-b-la-corte-bubbiano`
   - indirizzo: Via Battisti, 48, 27022 Casorate Primo PV
17. **Agriturismo Mondo** — Bubbio
   - slug: `agriturismo-mondo-bubbio`
   - indirizzo: Regione Stropeta, 100, 14051 Bubbio AT
18. **Agriturismo Tre colline in langa** — Bubbio
   - slug: `agriturismo-tre-colline-in-langa-bubbio`
   - indirizzo: SP25, 157, 14051 Bubbio AT
19. **B&B Cascina Sant'Elena** — Bubbio
   - slug: `b-b-cascina-sant-elena-bubbio`
   - indirizzo: Regione Tatorba, 70, 14051 Bubbio AT
20. **Ca d' Becon di Cresta Rita** — Bubbio
   - slug: `ca-d-becon-di-cresta-rita-bubbio`
   - indirizzo: Via Giarone, N. 11, 14051 Bubbio AT
21. **Il Castello di Bubbio Hotel Ristorante** — Bubbio
   - slug: `il-castello-di-bubbio-hotel-ristorante-bubbio`
   - indirizzo: Piazza del Castello, 1, 14051 Bubbio AT
22. **La Casa dei Caprioli** — Bubbio
   - slug: `la-casa-dei-caprioli-bubbio`
   - indirizzo: Regione Sant Antonio, 83, 14051 Bubbio AT
23. **Ristorante hotel "La Magnolia"** — Bubbio
   - slug: `ristorante-hotel-la-magnolia-bubbio`
   - indirizzo: Regione grassi, 48, 14051 Bubbio AT
24. **Villa Sibilla - Agriturismo di Charme** — Bubbio
   - slug: `villa-sibilla-agriturismo-di-charme-bubbio`
   - indirizzo: Via S. Giuseppe, 12, 14051 Bubbio AT
25. **Agriturismo A'Cunziria** — Buccheri
   - slug: `agriturismo-a-cunziria-buccheri`
   - indirizzo: Contrada, Via Masera, 95049 Vizzini CT
26. **Agriturismo Casmene** — Buccheri
   - slug: `agriturismo-casmene-buccheri`
   - indirizzo: Contrada Guffari s.n, 96010 Buscemi SR
27. **Agriturismo Giannavi'** — Buccheri
   - slug: `agriturismo-giannavi-buccheri`
   - indirizzo: Contrada Giannavi' sp 23, 96010 Palazzolo Acreide SR
28. **Agriturismo Roccadia** — Buccheri
   - slug: `agriturismo-roccadia-buccheri`
   - indirizzo: C.Da Roccadia Sn, 96013 Carlentini SR
29. **Agriturismo Valle Di Chiaramonte** — Buccheri
   - slug: `agriturismo-valle-di-chiaramonte-buccheri`
   - indirizzo: Contrada Piano Zacchi Pantanelli, 97012 Chiaramonte Gulfi RG
30. **Amecasa accoglienza diffusa** — Buccheri
   - slug: `amecasa-accoglienza-diffusa-buccheri`
   - indirizzo: Corso Umberto I, 127, 95040 Licodia Eubea CT
31. **Borgo degli Ulivi** — Buccheri
   - slug: `borgo-degli-ulivi-buccheri`
   - indirizzo: C.da Bibbia, 96010 Palazzolo Acreide SR
32. **Dimore Hyblon** — Buccheri
   - slug: `dimore-hyblon-buccheri`
   - indirizzo: Piazza Matrice, 2, 96010 Cassaro SR
33. **Domus Hyblaea Resort** — Buccheri
   - slug: `domus-hyblaea-resort-buccheri`
   - indirizzo: Via Giuseppe Campailla, snc, 96010 Palazzolo Acreide SR
34. **Feudo Bauly - Ristorante, Hotel, Ricevimenti** — Buccheri
   - slug: `feudo-bauly-ristorante-hotel-ricevimenti-buccheri`
   - indirizzo: C/da Bauly, 96017 Noto SR
35. **Il Borghetto di Santa Lucia** — Buccheri
   - slug: `il-borghetto-di-santa-lucia-buccheri`
   - indirizzo: Contrada Santa Lucia, 96017, 96017 Noto SR