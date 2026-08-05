# Blocco 26/500 — 35 strutture senza descrizione IT

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

1. **B&B Santu Chilgu** — Aggius
   - slug: `b-b-santu-chilgu-aggius`
   - indirizzo: Via Risorgimento, 12, 07020 Aggius OT
2. **Calycanto guest house** — Aggius
   - slug: `calycanto-guest-house-aggius`
   - indirizzo: Viale Valentino, 1, 07029 Tempio Pausania OT
3. **Conca Marina di Paolo Cuccu** — Aggius
   - slug: `conca-marina-di-paolo-cuccu-aggius`
   - indirizzo: Loc. Conca Marina S.S. 133, Km.2, 5, 07029 Tempio Pausania OT
4. **Hotel Gabbiano** — Aggius
   - slug: `hotel-gabbiano-aggius`
   - indirizzo: Via Vigna Veccia, 40, 07038 Isola Rossa OT
5. **Hotel Pausania Inn** — Aggius
   - slug: `hotel-pausania-inn-aggius`
   - indirizzo: Strada Statale 133 di Palau, 07029 Tempio Pausania OT
6. **Hotel Ristorante Golden Gate** — Aggius
   - slug: `hotel-ristorante-golden-gate-aggius`
   - indirizzo: Strada Statale 127 Settentrionale Sarda, 07030 Bortigiadas OT
7. **L'Agnata di De André** — Aggius
   - slug: `l-agnata-di-de-andre-aggius`
   - indirizzo: Località L'Agnata | San Bachisio, 07029 Tempio Pausania OT
8. **La Casa di Babbai** — Aggius
   - slug: `la-casa-di-babbai-aggius`
   - indirizzo: Via Canonico Pes, 12, 07029 Nuchis OT
9. **La Vignaredda Residenza di Charme** — Aggius
   - slug: `la-vignaredda-residenza-di-charme-aggius`
   - indirizzo: Via Gallura, 14, 07020 Aggius OT
10. **Li Manni** — Aggius
   - slug: `li-manni-aggius`
   - indirizzo: Via Pasquale Paoli, 10, 07020 Aggius OT
11. **New Petit Hotel** — Aggius
   - slug: `new-petit-hotel-aggius`
   - indirizzo: Largo Alcide De Gasperi, 11, 07029 Tempio Pausania OT
12. **Stazzu Coiga** — Aggius
   - slug: `stazzu-coiga-aggius`
   - indirizzo: Località Coiga, 1, 07020 Aggius OT
13. **Affittacamere Sikelìa** — Agira
   - slug: `affittacamere-sikelia-agira`
   - indirizzo: Via Umberto I, 28, 94014 Nicosia EN
14. **Agriturismo La Stragola** — Agira
   - slug: `agriturismo-la-stragola-agira`
   - indirizzo: Contrada Mercadante, 94014 Nicosia EN
15. **B&B Al Centro Nicosia** — Agira
   - slug: `b-b-al-centro-nicosia-agira`
   - indirizzo: vicolo Li Destri, 3, 94014 Nicosia EN
16. **B&B Casalbergo La Terza Stella** — Agira
   - slug: `b-b-casalbergo-la-terza-stella-agira`
   - indirizzo: Via Palazzo, 16, 94011 Agira EN
17. **B&B Priscilla Di Concetta Marletta** — Agira
   - slug: `b-b-priscilla-di-concetta-marletta-agira`
   - indirizzo: Via Gian Filippo Ingrassia, 115, 94017 Regalbuto EN
18. **B&B Villa Antonella** — Agira
   - slug: `b-b-villa-antonella-agira`
   - indirizzo: Contrada Castani, snc, 94015 Piazza Armerina EN
19. **Bed & Breakfast Via Venezia** — Agira
   - slug: `bed-breakfast-via-venezia-agira`
   - indirizzo: Via Venezia, 10, 94017 Regalbuto EN
20. **bed and breakfast la volpe rossa** — Agira
   - slug: `bed-and-breakfast-la-volpe-rossa-agira`
   - indirizzo: Vico Giuseppe di Gregorio, 94017 Regalbuto EN
21. **Casa al Duomo** — Agira
   - slug: `casa-al-duomo-agira`
   - indirizzo: Piazzetta Leone II, 7, 94014 Nicosia EN
22. **Case al Borgo - Albergo Diffuso** — Agira
   - slug: `case-al-borgo-albergo-diffuso-agira`
   - indirizzo: Via Diodorea, 316, 94011 Agira EN
23. **Case al Borgo Food & Beverage** — Agira
   - slug: `case-al-borgo-food-beverage-agira`
   - indirizzo: Via S. Nicola, 1, 94011 Agira EN
24. **Fratelli Mazzurco** — Agira
   - slug: `fratelli-mazzurco-agira`
   - indirizzo: S.S. 120, Via Conceria, 98033 Cesarò ME
25. **Il Castello** — Agira
   - slug: `il-castello-agira`
   - indirizzo: Contrada Castani, 94015 Piazza Armerina EN
26. **Il Centro Short Lets** — Agira
   - slug: `il-centro-short-lets-agira`
   - indirizzo: Via Luigi Capuana, 2, 94019 Valguarnera Caropepe EN
27. **IlPiccoloHotel** — Agira
   - slug: `ilpiccolohotel-agira`
   - indirizzo: Viale Guglielmo Borremans, 69, 94100 Enna EN
28. **La Madonnina** — Agira
   - slug: `la-madonnina-agira`
   - indirizzo: Via Sant'Agata, 94014 Nicosia EN
29. **Mamà B&B** — Agira
   - slug: `mama-b-b-agira`
   - indirizzo: Via Luigi Sturzo, 1, 94011 Agira EN
30. **Riviera Hotel** — Agira
   - slug: `riviera-hotel-agira`
   - indirizzo: Lago di Pergusa, 94010 Enna EN
31. **Soleil Affittacamere** — Agira
   - slug: `soleil-affittacamere-agira`
   - indirizzo: Via Sant'Agata, 42, 94014 Nicosia EN
32. **Talìa** — Agira
   - slug: `talia-agira`
   - indirizzo: Via Giacomo Matteotti, 3, 94011 Agira EN
33. **Affittacamere Villa Mary** — Agliana
   - slug: `affittacamere-villa-mary-agliana`
   - indirizzo: Via del Nespolo, 15/D, 51100 Pistoia PT
34. **Agriturismo Saliceto** — Agliana
   - slug: `agriturismo-saliceto-agliana`
   - indirizzo: Via F.lli Bandiera, 24, 51031 Agliana PT
35. **Albergo Il Giglio** — Agliana
   - slug: `albergo-il-giglio-agliana`
   - indirizzo: Piazza San Marco, 14, 59100 Prato PO