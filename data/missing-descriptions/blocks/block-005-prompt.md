# Blocco 5/500 — 35 strutture senza descrizione IT

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

1. **La Casa di Angizia** — Acciano
   - slug: `la-casa-di-angizia-acciano`
   - indirizzo: Via Fara, 33, 67020 Gagliano Aterno AQ
2. **Ostello Fiume Tirino** — Acciano
   - slug: `ostello-fiume-tirino-acciano`
   - indirizzo: Via Antonio Gramsci, snc, 65022 Bussi Sul Tirino PE
3. **Palazzo Pirro - Dimora Storica** — Acciano
   - slug: `palazzo-pirro-dimora-storica-acciano`
   - indirizzo: Via Vittorio Veneto, 4, 67020 San Lorenzo AQ
4. **Tenuta Il Guerriero - Agricampeggio Capestrano** — Acciano
   - slug: `tenuta-il-guerriero-agricampeggio-capestrano-acciano`
   - indirizzo: Contrada Cesa snc, 67022 Capestrano AQ
5. **Agricampeggio Alta Montagna Bio** — Accumoli
   - slug: `agricampeggio-alta-montagna-bio-accumoli`
   - indirizzo: Loc. Madonna delle Coste,2, 02011 Accumoli RI
6. **Agricamping Il Casale** — Accumoli
   - slug: `agricamping-il-casale-accumoli`
   - indirizzo: loc. Madonna delle Coste, 02011 Accumoli RI
7. **Agriturismo 'Coop. Grisciano'** — Accumoli
   - slug: `agriturismo-coop-grisciano-accumoli`
   - indirizzo: Frazione Grisciano, 02011 Accumoli RI
8. **Agriturismo il Casale degli Amici** — Accumoli
   - slug: `agriturismo-il-casale-degli-amici-accumoli`
   - indirizzo: Vocabolo Cappuccini, 157, 06046 Norcia PG
9. **Agriturismo Il Casale Pica** — Accumoli
   - slug: `agriturismo-il-casale-pica-accumoli`
   - indirizzo: Via Villa Camponeschi, 1, 02019 Posta RI
10. **Agriturismo La Valle del Sambuco** — Accumoli
   - slug: `agriturismo-la-valle-del-sambuco-accumoli`
   - indirizzo: Via Sambuco, 44, 06046 Loc. Casali di Serravalle, Norcia PG
11. **Agriturismo Le Sorgenti** — Accumoli
   - slug: `agriturismo-le-sorgenti-accumoli`
   - indirizzo: Loc. Casali Legogne, 06046 Norcia PG
12. **Agriturismo Valle Tezze** — Accumoli
   - slug: `agriturismo-valle-tezze-accumoli`
   - indirizzo: Località Valle Tezze, 06043 Cascia PG
13. **Camere Antico Mulino** — Accumoli
   - slug: `camere-antico-mulino-accumoli`
   - indirizzo: Viale Cavour, 06043 Padule PG
14. **Con Mario e Almerina** — Accumoli
   - slug: `con-mario-e-almerina-accumoli`
   - indirizzo: Via G. Leopardi, 72, 06046 Frascaro PG
15. **Country House Il Casale di Ginetto** — Accumoli
   - slug: `country-house-il-casale-di-ginetto-accumoli`
   - indirizzo: Località Fogliano, 58, 06043 Fogliano PG
16. **Country House il Vecchio Ippocastano** — Accumoli
   - slug: `country-house-il-vecchio-ippocastano-accumoli`
   - indirizzo: Piazza di Avendita, 06043 Avendita PG
17. **GANS Bed & Breakfast** — Accumoli
   - slug: `gans-bed-breakfast-accumoli`
   - indirizzo: Via Tranquillo Graziani, 10/A, 06043 Cascia PG
18. **Hotel Delle Rose** — Accumoli
   - slug: `hotel-delle-rose-accumoli`
   - indirizzo: Via Fasce, 2, 06043 Cascia PG
19. **Hotel Il Quadrifoglio** — Accumoli
   - slug: `hotel-il-quadrifoglio-accumoli`
   - indirizzo: Via Camillo Benso Conte di Cavour, 1, 06043 Cascia PG
20. **Hotel La Corte** — Accumoli
   - slug: `hotel-la-corte-accumoli`
   - indirizzo: Via Pier Paolo Prosperi, 1, 06043 Cascia PG
21. **Hotel Ristorante Il Castagneto** — Accumoli
   - slug: `hotel-ristorante-il-castagneto-accumoli`
   - indirizzo: V. del Castagneto, 35, 02012 Amatrice RI
22. **Hotel Villa Stella** — Accumoli
   - slug: `hotel-villa-stella-accumoli`
   - indirizzo: Via del Tiro a Segno, 28, 06043 Cascia PG
23. **Ristorante Hotel Terme** — Accumoli
   - slug: `ristorante-hotel-terme-accumoli`
   - indirizzo: P.za Terme, 20, 63095 Acquasanta Terme AP
24. **Albergo Il Casone - Il Casone Srl** — Acerenza
   - slug: `albergo-il-casone-il-casone-srl-acerenza`
   - indirizzo: CTR. CASONE BOSCO S. GIULIANO, 85011 Acerenza PZ
25. **Antica Dimora del Drengot** — Acerenza
   - slug: `antica-dimora-del-drengot-acerenza`
   - indirizzo: Via Boreale, 5, 85011 Acerenza PZ
26. **B&B Tra I Castelli** — Acerenza
   - slug: `b-b-tra-i-castelli-acerenza`
   - indirizzo: Fraz. Dragonetti via, Largo Pitagora, 2, 85020 Filiano PZ
27. **Bed & Breakfastl Palatium** — Acerenza
   - slug: `bed-breakfastl-palatium-acerenza`
   - indirizzo: Via Roma, 3, 85026 Palazzo San Gervasio PZ
28. **Borgo Lamurese** — Acerenza
   - slug: `borgo-lamurese-acerenza`
   - indirizzo: Contrada Cefalo, 19, 85021 Avigliano PZ
29. **Casa Normanna** — Acerenza
   - slug: `casa-normanna-acerenza`
   - indirizzo: Via N. Sole, 9, 85011 Acerenza PZ
30. **Hotel Tulbia** — Acerenza
   - slug: `hotel-tulbia-acerenza`
   - indirizzo: Via S. Maria, 18 c, Via S. Maria, 18/C, 85017 Tolve PZ
31. **Hotel Villa del Sorriso** — Acerenza
   - slug: `hotel-villa-del-sorriso-acerenza`
   - indirizzo: Via Appia, 135, 85029 Venosa PZ
32. **Il Casale del Borgo** — Acerenza
   - slug: `il-casale-del-borgo-acerenza`
   - indirizzo: Via Vittorio Emanuele III, 92, 85010 Cancellara PZ
33. **La Portella - Albergo Diffuso** — Acerenza
   - slug: `la-portella-albergo-diffuso-acerenza`
   - indirizzo: Via Balestrieri, 110, 85015 Oppido Lucano PZ
34. **LA ROSA DEL BARONE** — Acerenza
   - slug: `la-rosa-del-barone-acerenza`
   - indirizzo: Via Vittorio Emanuele III, 29, 85010 Cancellara PZ
35. **Locanda Di Eolo** — Acerenza
   - slug: `locanda-di-eolo-acerenza`
   - indirizzo: Localita' Rubavento, 85010 Vaglio Basilicata PZ