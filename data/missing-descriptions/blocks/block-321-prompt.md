# Blocco 321/500 — 35 strutture senza descrizione IT

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

1. **Almarett B&B** — Brennero/Brenner
   - slug: `almarett-b-b-brennero-brenner`
   - indirizzo: Localita' Durach, 5, 39040 Racines BZ
2. **Feuerstein Nature Family Resort** — Brennero/Brenner
   - slug: `feuerstein-nature-family-resort-brennero-brenner`
   - indirizzo: Pflersch, 185, 39041 Brenner, Autonome Provinz Bozen - Südtirol
3. **Goldenes Kreuz Hotel** — Brennero/Brenner
   - slug: `goldenes-kreuz-hotel-brennero-brenner`
   - indirizzo: Città Nuova, 36, 39049 Vipiteno BZ
4. **Hotel Alpin Val di Fleres** — Brennero/Brenner
   - slug: `hotel-alpin-val-di-fleres-brennero-brenner`
   - indirizzo: Fleres, 84, 39041 Colle Isarco BZ
5. **Hotel Argentum** — Brennero/Brenner
   - slug: `hotel-argentum-brennero-brenner`
   - indirizzo: Pflerschtal, St. Anton 157, 39041 Colle Isarco BZ
6. **Hotel Bergkristall** — Brennero/Brenner
   - slug: `hotel-bergkristall-brennero-brenner`
   - indirizzo: Via Fleres, 88, 39041 Colle Isarco BZ
7. **Hotel Brenner** — Brennero/Brenner
   - slug: `hotel-brenner-brennero-brenner`
   - indirizzo: Reifenstein, 39049 Vipiteno BZ
8. **Hotel Café Schuster** — Brennero/Brenner
   - slug: `hotel-cafe-schuster-brennero-brenner`
   - indirizzo: Via Parrocchia, 1, 39041 Colle Isarco BZ
9. **Hotel Erna** — Brennero/Brenner
   - slug: `hotel-erna-brennero-brenner`
   - indirizzo: Via Fleres, 2, 39041 Colle Isarco BZ
10. **Hotel Gudrun** — Brennero/Brenner
   - slug: `hotel-gudrun-brennero-brenner`
   - indirizzo: Via Posta Vecchia, 8, 39041 Colle Isarco BZ
11. **Hotel Residence Lorenz Ristorante Bar Pizzeria** — Brennero/Brenner
   - slug: `hotel-residence-lorenz-ristorante-bar-pizzeria-brennero-brenner`
   - indirizzo: Via Färber, 5, 39041 Colle Isarco BZ
12. **Hühnerspielhütte - Rifugio Cima Gallina** — Brennero/Brenner
   - slug: `huhnerspielhutte-rifugio-cima-gallina-brennero-brenner`
   - indirizzo: Via Notenburg, 17, 39041 Colle Isarco BZ
13. **LaMonte Premium Apartments by Feuerstein** — Brennero/Brenner
   - slug: `lamonte-premium-apartments-by-feuerstein-brennero-brenner`
   - indirizzo: Pflersch, 89, 39041 Brenner, Autonome Provinz Bozen - Südtirol
14. **PENSION ALPENBLICK / Sterzing** — Brennero/Brenner
   - slug: `pension-alpenblick-sterzing-brennero-brenner`
   - indirizzo: Fraktion Raminges, 9A, 39049 Vipiteno BZ
15. **Pension Knappenhof** — Brennero/Brenner
   - slug: `pension-knappenhof-brennero-brenner`
   - indirizzo: Pflersch, 86, 39041 Gossensaß, Autonome Provinz Bozen - Südtirol
16. **Pensione Alpenhof** — Brennero/Brenner
   - slug: `pensione-alpenhof-brennero-brenner`
   - indirizzo: Via Stranghe, 4, 39041 Colle Isarco BZ
17. **Smarthotel brenner24** — Brennero/Brenner
   - slug: `smarthotel-brenner24-brennero-brenner`
   - indirizzo: St. Valentin Str., 11, 39041 Brenner, Autonome Provinz Bozen - Südtirol
18. **A** — Breno
   - slug: `a-breno`
   - indirizzo: Via Fausto Cadeo, 10, 25047 Darfo Boario Terme BS
19. **Hotel Milano** — Breno
   - slug: `hotel-milano-breno`
   - indirizzo: V. Manifattura Vittorio Olcese, 17, 25047 Boario Terme BS
20. **Hotel San Martino** — Breno
   - slug: `hotel-san-martino-breno`
   - indirizzo: Via S. Martino, 28, 25047 Darfo Boario Terme BS
21. **Albergo Ristorante Il Pescatore** — Brenta
   - slug: `albergo-ristorante-il-pescatore-brenta`
   - indirizzo: Via Varese, 4, 21010 Porto Valtravaglia VA
22. **La Dama del Porto - Ristorante e Camere** — Brenta
   - slug: `la-dama-del-porto-ristorante-e-camere-brenta`
   - indirizzo: Via dei Pescatori, 2, 21014 Laveno-Mombello VA
23. **Locanda Da I Baldi** — Brenta
   - slug: `locanda-da-i-baldi-brenta`
   - indirizzo: Viale G. Garibaldi, 7, 21014 Laveno-Mombello VA
24. **Residencehotel Torre del Brenta** — Brenta
   - slug: `residencehotel-torre-del-brenta-brenta`
   - indirizzo: Via Pradalago, 32, 38086 Madonna di Campiglio TN
25. **Ristorante Hotel Colonne** — Brenta
   - slug: `ristorante-hotel-colonne-brenta`
   - indirizzo: Via Fincarà, 37, 21100 Varese VA
26. **AFFITTACAMERE CORTE VALDADIGE GUEST HOUSE** — Brentino Belluno
   - slug: `affittacamere-corte-valdadige-guest-house-brentino-belluno`
   - indirizzo: Via Santuario, 9, 37020 Brentino Belluno VR
27. **Agriturismo Revena farm guest house wine holiday** — Brentino Belluno
   - slug: `agriturismo-revena-farm-guest-house-wine-holiday-brentino-belluno`
   - indirizzo: Località Revena, 3, 37020 Brentino Belluno VR
28. **Agriturismo Tre Forti** — Brentino Belluno
   - slug: `agriturismo-tre-forti-brentino-belluno`
   - indirizzo: Località Canova Tessari, 37010 Rivoli Veronese VR
29. **b&benantio** — Brentino Belluno
   - slug: `b-benantio-brentino-belluno`
   - indirizzo: Piazza della Vittoria, 10, 37020 Belluno Veronese VR
30. **Casa Gianchia B&B** — Brentino Belluno
   - slug: `casa-gianchia-b-b-brentino-belluno`
   - indirizzo: Via Casalini, 1, 37020 Brentino VR
31. **Hotel Belvedere** — Brentino Belluno
   - slug: `hotel-belvedere-brentino-belluno`
   - indirizzo: Via Graziani, 12, 37013 Spiazzi VR
32. **Hotel Monte Baldo** — Brentino Belluno
   - slug: `hotel-monte-baldo-brentino-belluno`
   - indirizzo: Via Prada, 37010 Brenzone sul Garda VR
33. **Hotel Ristorante Bar Olivo** — Brentino Belluno
   - slug: `hotel-ristorante-bar-olivo-brentino-belluno`
   - indirizzo: Via Don Cesare Scala, 35, 37020 Brentino Belluno VR
34. **Parc Hotel San Pietro** — Brentino Belluno
   - slug: `parc-hotel-san-pietro-brentino-belluno`
   - indirizzo: Via Centro, 2, 37013 Spiazzi VR
35. **Stella Alpina Hotel** — Brentino Belluno
   - slug: `stella-alpina-hotel-brentino-belluno`
   - indirizzo: Piazzale Giovanni Paolo Secondo, 2, 37020 Ferrara di Monte Baldo VR