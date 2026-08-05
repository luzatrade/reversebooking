# Blocco 104/500 — 35 strutture senza descrizione IT

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

1. **B&B Alveare di Rita** — Ancarano
   - slug: `b-b-alveare-di-rita-ancarano`
   - indirizzo: Via Mediana Inferiore, 19, 63085 Maltignano AP
2. **B&B Bio-Melampo** — Ancarano
   - slug: `b-b-bio-melampo-ancarano`
   - indirizzo: Str. Vicinale Casette, 19, 64010 Ancarano TE
3. **B&B River** — Ancarano
   - slug: `b-b-river-ancarano`
   - indirizzo: Str. della Bonifica, 40, 63100 Ascoli Piceno AP
4. **B&B Spineola** — Ancarano
   - slug: `b-b-spineola-ancarano`
   - indirizzo: Via Pio La Torre, 63078 Spinetoli AP
5. **Bed and breakfast Giardino Agritourist** — Ancarano
   - slug: `bed-and-breakfast-giardino-agritourist-ancarano`
   - indirizzo: Contrada San Fedele, zona Via Gabriele D'Annunzio, 2, 64010 Controguerra TE
6. **Country House Andromeda** — Ancarano
   - slug: `country-house-andromeda-ancarano`
   - indirizzo: Contrada Ciafone, n.50, 63073 Offida AP
7. **Country House Il Piacere** — Ancarano
   - slug: `country-house-il-piacere-ancarano`
   - indirizzo: Via Ugo La Malfa, 64010 Civitella del Tronto TE
8. **Emidio Pepe** — Ancarano
   - slug: `emidio-pepe-ancarano`
   - indirizzo: Contrada Chiesi, 10, 64010 Torano Nuovo TE
9. **Fly b&b** — Ancarano
   - slug: `fly-b-b-ancarano`
   - indirizzo: Via A. De Gasperi, 6, 64010 Ancarano TE
10. **Hotel Ristorante Clodi** — Ancarano
   - slug: `hotel-ristorante-clodi-ancarano`
   - indirizzo: Via dei Peschi, 64, 63100 Ascoli Piceno AP
11. **Hotel Ristorante Concorde** — Ancarano
   - slug: `hotel-ristorante-concorde-ancarano`
   - indirizzo: Viale J. F. Kennedy, 197, 64016 Sant'Egidio alla Vibrata TE
12. **Hotel Ristorante Pizzeria Tramonto** — Ancarano
   - slug: `hotel-ristorante-pizzeria-tramonto-ancarano`
   - indirizzo: Contrada Madonna della Carità, 45, 64010 Ancarano TE
13. **Hotel Scacco Rosso** — Ancarano
   - slug: `hotel-scacco-rosso-ancarano`
   - indirizzo: Via Piave, 23, 64016 Sant'Egidio alla Vibrata TE
14. **Il Gruccione** — Ancarano
   - slug: `il-gruccione-ancarano`
   - indirizzo: Via Santa Maria ad Cellas, 18, 64027 Sant'Omero TE
15. **IL SALICE Hotel Ristorante Pizzeria** — Ancarano
   - slug: `il-salice-hotel-ristorante-pizzeria-ancarano`
   - indirizzo: Viale Vibrata, 13/A, 64010 Civitella del Tronto TE
16. **Pantorano rooms** — Ancarano
   - slug: `pantorano-rooms-ancarano`
   - indirizzo: Piazzetta delle Volte, 6, 63078 Pagliare del Tronto AP
17. **Villa dei Priori** — Ancarano
   - slug: `villa-dei-priori-ancarano`
   - indirizzo: Via Salaria, Km 220, 63077 Monsampolo del Tronto AP
18. **Villa Yucca - B&B and Glamping** — Ancarano
   - slug: `villa-yucca-b-b-and-glamping-ancarano`
   - indirizzo: Contrada Flaio, 35, 64010 Torano Nuovo TE
19. **Villa9cento** — Ancarano
   - slug: `villa9cento-ancarano`
   - indirizzo: Via dei Fossi, 5, 63082 Castel di Lama AP
20. **Albergo Cantiani** — Ancona
   - slug: `albergo-cantiani-ancona`
   - indirizzo: Via Lorenzo Lotto, 22, 60127 Ancona AN
21. **Ego Hotel Ancona** — Ancona
   - slug: `ego-hotel-ancona-ancona`
   - indirizzo: Via Flaminia, 220, 60126 Ancona AN
22. **G Hotel Ancona** — Ancona
   - slug: `g-hotel-ancona-ancona`
   - indirizzo: V. della Sbrozzola, 26, 60027 Osimo AN
23. **Grand Hotel Palace** — Ancona
   - slug: `grand-hotel-palace-ancona`
   - indirizzo: Lungomare Luigi Vanvitelli, 24, 60121 Ancona AN
24. **Grand Hotel Passetto** — Ancona
   - slug: `grand-hotel-passetto-ancona`
   - indirizzo: Via Thaon de Revel, 1, 60124 Ancona AN
25. **Hotel Ankon** — Ancona
   - slug: `hotel-ankon-ancona`
   - indirizzo: Via Loreto, 13/a, 60126 Ancona AN
26. **Hotel Concorde Camerano** — Ancona
   - slug: `hotel-concorde-camerano-ancona`
   - indirizzo: Via Aspio Terme, 191, 60021 Camerano AN
27. **Hotel della Rosa** — Ancona
   - slug: `hotel-della-rosa-ancona`
   - indirizzo: Piazza Fratelli Rosselli, 3, 60126 Ancona AN
28. **Hotel della Vittoria** — Ancona
   - slug: `hotel-della-vittoria-ancona`
   - indirizzo: Via Fabio Filzi, 2, 60123 Ancona AN
29. **Hotel Emilia** — Ancona
   - slug: `hotel-emilia-ancona`
   - indirizzo: Via Collina di Portonovo, 149/A, 60129 Ancona AN
30. **Hotel Europa** — Ancona
   - slug: `hotel-europa-ancona`
   - indirizzo: Via Sentino, 3, 60126 Ancona AN
31. **Hotel Fortuna** — Ancona
   - slug: `hotel-fortuna-ancona`
   - indirizzo: Piazza Rosselli, 15, 60126 Ancona AN
32. **Hotel Italia - ANCONA** — Ancona
   - slug: `hotel-italia-ancona-ancona`
   - indirizzo: Piazza Rosselli, 9, 60126 Ancona AN
33. **Hotel La Fonte** — Ancona
   - slug: `hotel-la-fonte-ancona`
   - indirizzo: Via Fonte Magna, 33, 60027 Osimo AN
34. **Hotel NH Ancona** — Ancona
   - slug: `hotel-nh-ancona-ancona`
   - indirizzo: Via Rupi di Via XXIX Settembre, 14, 60122 Ancona AN
35. **Hotel Palace del Conero** — Ancona
   - slug: `hotel-palace-del-conero-ancona`
   - indirizzo: Via Grandi, 6, 60027 Aspio Terme AN