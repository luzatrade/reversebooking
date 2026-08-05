# Blocco 331/500 — 35 strutture senza descrizione IT

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

1. **Albergo Tenuta Stroblhof** — Bronzolo/Branzoll
   - slug: `albergo-tenuta-stroblhof-bronzolo-branzoll`
   - indirizzo: Pigenoerweg, 25, 39057 Appiano sulla strada del vino BZ
2. **Albergo Zur Pfleg** — Bronzolo/Branzoll
   - slug: `albergo-zur-pfleg-bronzolo-branzoll`
   - indirizzo: Via Pietralba, 94, 39055 Laives BZ
3. **Das Panorama - Dependance** — Bronzolo/Branzoll
   - slug: `das-panorama-dependance-bronzolo-branzoll`
   - indirizzo: Via Prey, 11, 39052 Caldaro BZ
4. **Garni Sparer** — Bronzolo/Branzoll
   - slug: `garni-sparer-bronzolo-branzoll`
   - indirizzo: Campi al Lago, 2, 39052 Caldaro sulla strada del Vino BZ
5. **Gasthof Klughammer** — Bronzolo/Branzoll
   - slug: `gasthof-klughammer-bronzolo-branzoll`
   - indirizzo: Localita' Klughammer, 5, Campi al Lago, 5, 39052 Caldaro sulla strada del Vino BZ
6. **Gasthof Rechtebner, Seit/Leifers bei Bozen** — Bronzolo/Branzoll
   - slug: `gasthof-rechtebner-seit-leifers-bei-bozen-bronzolo-branzoll`
   - indirizzo: Via La Costa, 21, 39055 Laives BZ
7. **Hotel Hasslhof** — Bronzolo/Branzoll
   - slug: `hotel-hasslhof-bronzolo-branzoll`
   - indirizzo: Sankt Josef am See, 62, 39052 Kaltern am See BZ
8. **Hotel Ideal Park** — Bronzolo/Branzoll
   - slug: `hotel-ideal-park-bronzolo-branzoll`
   - indirizzo: Via John Fitzgerald Kennedy, 233, 39055 Laives BZ
9. **Hotel Plattenhof** — Bronzolo/Branzoll
   - slug: `hotel-plattenhof-bronzolo-branzoll`
   - indirizzo: Frazione Sella, 33, 39040 Termeno sulla Strada del Vino BZ
10. **Hotel Stampfer** — Bronzolo/Branzoll
   - slug: `hotel-stampfer-bronzolo-branzoll`
   - indirizzo: Via Stazione, 19, 39051 Bronzolo BZ
11. **Hotel Steiner** — Bronzolo/Branzoll
   - slug: `hotel-steiner-bronzolo-branzoll`
   - indirizzo: Via John Fitzgerald Kennedy, 32, 39055 Laives BZ
12. **Pension Leuchtenburg** — Bronzolo/Branzoll
   - slug: `pension-leuchtenburg-bronzolo-branzoll`
   - indirizzo: Campi al Lago, 14, 39051 Caldaro sulla strada del Vino BZ
13. **Rösslhof** — Bronzolo/Branzoll
   - slug: `rosslhof-bronzolo-branzoll`
   - indirizzo: S. Giuseppe al Lago, 34B, 39052 Caldaro sulla strada del Vino BZ
14. **Seehotel Sparer** — Bronzolo/Branzoll
   - slug: `seehotel-sparer-bronzolo-branzoll`
   - indirizzo: Via Monticolo, 53, 39057 San Michele BZ
15. **Seerose** — Bronzolo/Branzoll
   - slug: `seerose-bronzolo-branzoll`
   - indirizzo: S. Giuseppe al Lago, 6, 39052 Caldaro BZ
16. **B&B La Stanza dei Sogni Saluzzo** — Brossasco
   - slug: `b-b-la-stanza-dei-sogni-saluzzo-brossasco`
   - indirizzo: Via Revello, 19 H, 12037 Saluzzo CN
17. **Il Sogno di Remì** — Brossasco
   - slug: `il-sogno-di-remi-brossasco`
   - indirizzo: Borgata Bruna, 12020 Brossasco CN
18. **Affittacamere La stella delle Alpi** — Brosso
   - slug: `affittacamere-la-stella-delle-alpi-brosso`
   - indirizzo: Vicolo Bertarione, 4, 10089 Vico Canavese TO
19. **B&B Piccolo Relais** — Brosso
   - slug: `b-b-piccolo-relais-brosso`
   - indirizzo: Via Conte Michele Cagnis, 6, 10010 Lessolo TO
20. **B&B ranch Alba Montanaria, dormire beb Valchiusella, Maneggio cavalli** — Brosso
   - slug: `b-b-ranch-alba-montanaria-dormire-beb-valchiusel-brosso`
   - indirizzo: Strada statale s/n - regione, montanaria, 10089 Brosso TO
21. **L'Incontro** — Brosso
   - slug: `l-incontro-brosso`
   - indirizzo: Regione Lago, 1, 10089 Meugliano TO
22. **Ristorante Albergo Bar Centro** — Brosso
   - slug: `ristorante-albergo-bar-centro-brosso`
   - indirizzo: Piazza Garibaldi, 1, 10089 Vico Canavese TO
23. **Albergo Vittoria** — Brovello-Carpugnino
   - slug: `albergo-vittoria-brovello-carpugnino`
   - indirizzo: Via Regina Margherita, 21, 28836 Gignese VB
24. **B&B Orto di Marisa** — Brovello-Carpugnino
   - slug: `b-b-orto-di-marisa-brovello-carpugnino`
   - indirizzo: Via delle Rose, 36, 28833 Brovello-carpugnino VB
25. **Boutique Hotel Stresa** — Brovello-Carpugnino
   - slug: `boutique-hotel-stresa-brovello-carpugnino`
   - indirizzo: Corso Umberto I, 21, 28838 Stresa VB
26. **Hotel Brisino** — Brovello-Carpugnino
   - slug: `hotel-brisino-brovello-carpugnino`
   - indirizzo: Via per Magognino, 2, 28838 Stresa VB
27. **Hotel Luina** — Brovello-Carpugnino
   - slug: `hotel-luina-brovello-carpugnino`
   - indirizzo: Via Giuseppe Garibaldi, 21, 28838 Stresa VB
28. **Hotel Ristorante La Capannina** — Brovello-Carpugnino
   - slug: `hotel-ristorante-la-capannina-brovello-carpugnino`
   - indirizzo: Via Crose, 57, 28040 Massino Visconti NO
29. **SEMPIONE BOUTIQUE HOTEL** — Brovello-Carpugnino
   - slug: `sempione-boutique-hotel-brovello-carpugnino`
   - indirizzo: Corso Italia, 46, 28838 Stresa VB
30. **agriturismo Come una volta** — Brozolo
   - slug: `agriturismo-come-una-volta-brozolo`
   - indirizzo: Via Braia, 2, 10020 Brozolo TO
31. **Agriturismo Il Giardino Del Ciliegi** — Brozolo
   - slug: `agriturismo-il-giardino-del-ciliegi-brozolo`
   - indirizzo: Via Peile, 15, 10020 Brozolo TO
32. **La Casa Della Lavanda B&B** — Brozolo
   - slug: `la-casa-della-lavanda-b-b-brozolo`
   - indirizzo: Via Braia, 16, 10020 Brozolo TO
33. **Nutrilamente** — Brozolo
   - slug: `nutrilamente-brozolo`
   - indirizzo: Via Montenero, 14, 14020 Robella AT
34. **Sotto la Luna Bruna B&B** — Brozolo
   - slug: `sotto-la-luna-bruna-b-b-brozolo`
   - indirizzo: Fraz. Cocconito, Str. Cocconito, 18, 14023 Cocconato AT
35. **AFFITTACAMERE Top Suit Centro** — Brugherio
   - slug: `affittacamere-top-suit-centro-brugherio`
   - indirizzo: Via Antonio Gramsci, 18/20, 20861 Brugherio MB