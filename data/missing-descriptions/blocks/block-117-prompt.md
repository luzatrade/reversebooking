# Blocco 117/500 — 35 strutture senza descrizione IT

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

1. **Sweet Home B&B San Ferdinando** — Anoia
   - slug: `sweet-home-b-b-san-ferdinando-anoia`
   - indirizzo: Via Provinciale Est, 9a, 89026 San Ferdinando RC
2. **Uliveto Principessa Resort & Banqueting** — Anoia
   - slug: `uliveto-principessa-resort-banqueting-anoia`
   - indirizzo: Contrada Oliveto Principessa, 1, 89022 Cittanova RC
3. **Bes Hotel La Muratella** — Antegnate
   - slug: `bes-hotel-la-muratella-antegnate`
   - indirizzo: Via del Cassinello, 1, 24055 Cologno al Serio BG
4. **Giuly’s Home** — Antegnate
   - slug: `giuly-s-home-antegnate`
   - indirizzo: Via E. Schivardi, 42, 24058 Romano di Lombardia BG
5. **Hotel il Borghetto** — Antegnate
   - slug: `hotel-il-borghetto-antegnate`
   - indirizzo: Via Piave, 2, 24050 Bariano BG
6. **Hotel Mariet** — Antegnate
   - slug: `hotel-mariet-antegnate`
   - indirizzo: Piazza M. D. Antonio Locatelli, 20, 24058 Romano di Lombardia BG
7. **Hotel Meublè Atlantic** — Antegnate
   - slug: `hotel-meuble-atlantic-antegnate`
   - indirizzo: Via Canonica, 1, 24047 Treviglio BG
8. **Hotel Verri** — Antegnate
   - slug: `hotel-verri-antegnate`
   - indirizzo: Via Beata Vergine, 4, 24040 Misano di Gera d'Adda BG
9. **I Pioppi Bed & Breakfast** — Antegnate
   - slug: `i-pioppi-bed-breakfast-antegnate`
   - indirizzo: Via Milano, 37, 25032 Chiari BS
10. **Il Leone d’Oro - Hotel** — Antegnate
   - slug: `il-leone-d-oro-hotel-antegnate`
   - indirizzo: Via Dante, 17, 24060 Telgate BG
11. **La Residenza del Viale - Affittacamere** — Antegnate
   - slug: `la-residenza-del-viale-affittacamere-antegnate`
   - indirizzo: Viale Ortigara, 7 a, 24047 Treviglio BG
12. **Locanda del Sole** — Antegnate
   - slug: `locanda-del-sole-antegnate`
   - indirizzo: Via Santo Stefano, 7, 24050 Mozzanica BG
13. **OSTELLO MOLINO DI BASSO** — Antegnate
   - slug: `ostello-molino-di-basso-antegnate`
   - indirizzo: Via Madonna di Loreto Località, 24050 Molino Di Basso BG
14. **Quattro Gatti | Ristorante e Rooms&Suites** — Antegnate
   - slug: `quattro-gatti-ristorante-e-rooms-suites-antegnate`
   - indirizzo: Via Don Giavazzi, 13, 24049 Verdello BG
15. **Ristorante - Hotel La Conchiglia** — Antegnate
   - slug: `ristorante-hotel-la-conchiglia-antegnate`
   - indirizzo: Via del Commercio, 2, 24058 Romano di Lombardia BG
16. **Sweet Motel** — Antegnate
   - slug: `sweet-motel-antegnate`
   - indirizzo: Strada Provinciale Francesca Km 6, 24049 Verdello BG
17. **Villa e Roma** — Antegnate
   - slug: `villa-e-roma-antegnate`
   - indirizzo: Via Bergamo, 33-35, 25036 Palazzolo sull'Oglio BS
18. **Affittacamere Garden Cavalese** — Anterivo/Altrei
   - slug: `affittacamere-garden-cavalese-anterivo-altrei`
   - indirizzo: Via Trento, 33, 38033 Cavalese TN
19. **Agriturismo Maso Schneider** — Anterivo/Altrei
   - slug: `agriturismo-maso-schneider-anterivo-altrei`
   - indirizzo: Località, Via Tassa, 38033 Cavalese TN
20. **Albergo Dolomiti** — Anterivo/Altrei
   - slug: `albergo-dolomiti-anterivo-altrei`
   - indirizzo: Via Dallio G.Battista, 22, 38030 Capriana TN
21. **Albergo Dolomiti - Cavalese** — Anterivo/Altrei
   - slug: `albergo-dolomiti-cavalese-anterivo-altrei`
   - indirizzo: Via Montebello, 20, 38033 Cavalese TN
22. **Albergo Pensione Serenetta** — Anterivo/Altrei
   - slug: `albergo-pensione-serenetta-anterivo-altrei`
   - indirizzo: Via Mercato, 22, 38099 Ville di Fiemme TN
23. **Albergo Stella ** Cavalese** — Anterivo/Altrei
   - slug: `albergo-stella-cavalese-anterivo-altrei`
   - indirizzo: Piazza 12 Partigiani, 6, 38033 Cavalese TN
24. **B&B nonna Rosa vista Lagorai** — Anterivo/Altrei
   - slug: `b-b-nonna-rosa-vista-lagorai-anterivo-altrei`
   - indirizzo: Via Domenica Lazzeri, 20A, 38030 Capriana TN
25. **B&B Signora Elvira** — Anterivo/Altrei
   - slug: `b-b-signora-elvira-anterivo-altrei`
   - indirizzo: Via Gian Battista Dallio, 23, 38030 Capriana TN
26. **Hotel Italia** — Anterivo/Altrei
   - slug: `hotel-italia-anterivo-altrei`
   - indirizzo: Via Segherie, 80, 38030 Castello di Fiemme TN
27. **Hotel Langeshof** — Anterivo/Altrei
   - slug: `hotel-langeshof-anterivo-altrei`
   - indirizzo: Via Katharina Lanz, 3, 39040 Anterivo BZ
28. **Hotel Latemar - Dolomites Living - Val di Fiemme** — Anterivo/Altrei
   - slug: `hotel-latemar-dolomites-living-val-di-fiemme-anterivo-altrei`
   - indirizzo: Via Latemar, 16, 38030 Castello di Fiemme TN
29. **Hotel Schönwies** — Anterivo/Altrei
   - slug: `hotel-schonwies-anterivo-altrei`
   - indirizzo: Via Principale, 19, 39040 Trodena nel parco naturale BZ
30. **Hotel Schwarzhorn** — Anterivo/Altrei
   - slug: `hotel-schwarzhorn-anterivo-altrei`
   - indirizzo: Oclini, 2, 39040 Aldino BZ
31. **Locanda Alpina Dorfner** — Anterivo/Altrei
   - slug: `locanda-alpina-dorfner-anterivo-altrei`
   - indirizzo: Casignano, 5, 39040 Montagna BZ
32. **Manna Resort** — Anterivo/Altrei
   - slug: `manna-resort-anterivo-altrei`
   - indirizzo: Doladizza, Vicolo Klamm, 3, 39040 Montagna BZ
33. **Naturhotel Waldheim** — Anterivo/Altrei
   - slug: `naturhotel-waldheim-anterivo-altrei`
   - indirizzo: Via Gottschalk, 5, 39040 Anterivo BZ
34. **Pensione Lochmann** — Anterivo/Altrei
   - slug: `pensione-lochmann-anterivo-altrei`
   - indirizzo: Frazione Guggal, 4, 39040 Anterivo BZ
35. **Residence Zum Rössl | Appartamenti vacanze** — Anterivo/Altrei
   - slug: `residence-zum-rossl-appartamenti-vacanze-anterivo-altrei`
   - indirizzo: Via Dottor Josef Noldin, 3, 39040 Anterivo BZ