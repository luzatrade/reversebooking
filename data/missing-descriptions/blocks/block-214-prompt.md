# Blocco 214/500 — 35 strutture senza descrizione IT

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

1. **Albergo - Bar Al Casolare (numero solo per BAR e ALBERGO)** — Barbara
   - slug: `albergo-bar-al-casolare-numero-solo-per-bar-e-al-barbara`
   - indirizzo: Via Corinaldese, 6, 60013 Corinaldo AN
2. **ALBERGO RISTORANTE "BELLUCCI"** — Barbara
   - slug: `albergo-ristorante-bellucci-barbara`
   - indirizzo: Corso G. Marconi, 7, 60010 Castelleone di Suasa AN
3. **Albergo Ristorante Pizzeria La Palomba** — Barbara
   - slug: `albergo-ristorante-pizzeria-la-palomba-barbara`
   - indirizzo: Borgo Gramsci, 13, 61040 Mondavio PU
4. **Anna Rita B&B** — Barbara
   - slug: `anna-rita-b-b-barbara`
   - indirizzo: Via II Giugno, 23, 60031 Moie AN
5. **B& B bread and fantasy** — Barbara
   - slug: `b-b-bread-and-fantasy-barbara`
   - indirizzo: Via Santo Stefano, 1, 60010 Ostra AN
6. **B&B Da Roby** — Barbara
   - slug: `b-b-da-roby-barbara`
   - indirizzo: Via Ridolfi, 10, 60013 Corinaldo AN
7. **casa di Faustina (albergo diffuso)** — Barbara
   - slug: `casa-di-faustina-albergo-diffuso-barbara`
   - indirizzo: Via Mura del Mangano 1, Check-in at, Via del Corso, 64, 60013 Corinaldo AN
8. **Gaia** — Barbara
   - slug: `gaia-barbara`
   - indirizzo: Contrada Gambacane, 7, 60010 Ostra Vetere AN
9. **Hotel La Torre** — Barbara
   - slug: `hotel-la-torre-barbara`
   - indirizzo: Via Montecarottese, 4, 60030 Maiolati Spontini AN
10. **Il Paradiso del Re - Ristorantino esclusivo e Camere** — Barbara
   - slug: `il-paradiso-del-re-ristorantino-esclusivo-e-came-barbara`
   - indirizzo: Frazione S. Pietro, 6, 60011 Arcevia AN
11. **Il Pozzo di Vivalpa** — Barbara
   - slug: `il-pozzo-di-vivalpa-barbara`
   - indirizzo: Via S. Sebastiano, 6, 60030 Serra de' Conti AN
12. **La Veranda Sul Giardino** — Barbara
   - slug: `la-veranda-sul-giardino-barbara`
   - indirizzo: Viale della Murata, 41, 60013 Corinaldo AN
13. **Ma Hotel Corinaldo** — Barbara
   - slug: `ma-hotel-corinaldo-barbara`
   - indirizzo: Via del Corso, 60013 Corinaldo AN
14. **Ristorante Catering Hotel Giardino** — Barbara
   - slug: `ristorante-catering-hotel-giardino-barbara`
   - indirizzo: Via Enrico Mattei, 4, 61047 San Lorenzo In Campo PU
15. **Stone farmhouse Bed & Breakfast** — Barbara
   - slug: `stone-farmhouse-bed-breakfast-barbara`
   - indirizzo: Via Fiume, 6, 60030 Moie AN
16. **Agriturismo Canova** — Barbarano Mossano
   - slug: `agriturismo-canova-barbarano-mossano`
   - indirizzo: Via Canova, 6, 36048 Barbarano Mossano VI
17. **Agriturismo da Sagraro** — Barbarano Mossano
   - slug: `agriturismo-da-sagraro-barbarano-mossano`
   - indirizzo: Via Olivari, 1, 36048 Mossano VI
18. **B&B Bagolari** — Barbarano Mossano
   - slug: `b-b-bagolari-barbarano-mossano`
   - indirizzo: Via dei Pilastri, 5, 36024 Nanto VI
19. **B&B Casa Lina** — Barbarano Mossano
   - slug: `b-b-casa-lina-barbarano-mossano`
   - indirizzo: Via Cagliara, 8c, 36048 Ponte di Barbarano VI
20. **Bed and Breakfast In Valle Vicenza** — Barbarano Mossano
   - slug: `bed-and-breakfast-in-valle-vicenza-barbarano-mossano`
   - indirizzo: Via la Vallà, 12/1, 36023 Lumignano VI
21. **Bed and Breakfast Miotto** — Barbarano Mossano
   - slug: `bed-and-breakfast-miotto-barbarano-mossano`
   - indirizzo: Via Borgo, 75, 36074 Montegalda VI
22. **Casa Costabella** — Barbarano Mossano
   - slug: `casa-costabella-barbarano-mossano`
   - indirizzo: Via Costabella, 39, 36021 Villaga VI
23. **Castello di Barbarano** — Barbarano Mossano
   - slug: `castello-di-barbarano-barbarano-mossano`
   - indirizzo: Via Castello, 6, 36048 Barbarano VI
24. **HOTEL Turandot & Osteria "Nannì"** — Barbarano Mossano
   - slug: `hotel-turandot-osteria-nanni-barbarano-mossano`
   - indirizzo: Via Giuseppe Mazzini, 1, 36040 Grisignano di Zocco VI
25. **Il Casale del Vino** — Barbarano Mossano
   - slug: `il-casale-del-vino-barbarano-mossano`
   - indirizzo: Via Ramiro Fabiani, 22 A, 36048 Barbarano Mossano VI
26. **Abbraccio Home Barbarano** — Barbarano Romano
   - slug: `abbraccio-home-barbarano-barbarano-romano`
   - indirizzo: Via Belvedere, 20, 01010 Barbarano Romano VT
27. **Agriturismo il Poggio** — Barbarano Romano
   - slug: `agriturismo-il-poggio-barbarano-romano`
   - indirizzo: Via Giordano Campo, 64, 01019 Vetralla VT
28. **Agriturismo L'Introvabile** — Barbarano Romano
   - slug: `agriturismo-l-introvabile-barbarano-romano`
   - indirizzo: Strada Provinciale Blerana km 6+600, 01010 Blera VT
29. **Albergo "Da Benedetta"** — Barbarano Romano
   - slug: `albergo-da-benedetta-barbarano-romano`
   - indirizzo: Via Francesco Petrarca, 4, 01019 Vetralla VT
30. **Albergo Ristorante Antica Locanda della Via Francigena** — Barbarano Romano
   - slug: `albergo-ristorante-antica-locanda-della-via-fran-barbarano-romano`
   - indirizzo: Località Pontarello, 6, 01019 Vetralla VT
31. **B & B Le Palme** — Barbarano Romano
   - slug: `b-b-le-palme-barbarano-romano`
   - indirizzo: Via S. Francesco d'Assisi, 69, 01030 Bassano Romano VT
32. **B&B Il Parco stanza Garibaldi** — Barbarano Romano
   - slug: `b-b-il-parco-stanza-garibaldi-barbarano-romano`
   - indirizzo: Via Orsini, 4, 01010 Oriolo Romano VT
33. **B&B Il Sartore** — Barbarano Romano
   - slug: `b-b-il-sartore-barbarano-romano`
   - indirizzo: Via Cairoli, 10, 01019 Vetralla VT
34. **B&B Il Tramonto** — Barbarano Romano
   - slug: `b-b-il-tramonto-barbarano-romano`
   - indirizzo: Via braccianese Claudia, Località Monte Merlo, km 47,500, 01010 Barbarano Romano VT
35. **B&B La Finestra sul Lago** — Barbarano Romano
   - slug: `b-b-la-finestra-sul-lago-barbarano-romano`
   - indirizzo: Strada Provinciale, Valle di Vico, n. 2, 01037 Ronciglione VT