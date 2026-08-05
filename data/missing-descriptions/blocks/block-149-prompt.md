# Blocco 149/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Piccolo Leone** — Arignano
   - slug: `b-b-il-piccolo-leone-arignano`
   - indirizzo: Via Tetti Chiaffredo, 14, 10020 Arignano TO
2. **ConfineDeiSanti B&B** — Arignano
   - slug: `confinedeisanti-b-b-arignano`
   - indirizzo: Via Lovencito, 6/a, 10020 Moriondo Torinese TO
3. **I Conti della Serva** — Arignano
   - slug: `i-conti-della-serva-arignano`
   - indirizzo: Via Regione Aprà, 7, 10090 Cinzano TO
4. **Locanda del Centro** — Arignano
   - slug: `locanda-del-centro-arignano`
   - indirizzo: Via Lorenzo Martini, 34, 10020 Cambiano TO
5. **Amistade B&B** — Aritzo
   - slug: `amistade-b-b-aritzo`
   - indirizzo: Via Ospitone, 7, 09065 Seulo NU
6. **Aurora Paba** — Aritzo
   - slug: `aurora-paba-aritzo`
   - indirizzo: Via Margherita, 16, 08031 Aritzo NU
7. **B&B lugori di Murgia Stefania** — Aritzo
   - slug: `b-b-lugori-di-murgia-stefania-aritzo`
   - indirizzo: località Taccu, 09065 Seulo NU
8. **B&B Santu Giuvanni Un Tuffo nel Passato** — Aritzo
   - slug: `b-b-santu-giuvanni-un-tuffo-nel-passato-aritzo`
   - indirizzo: Via Monte Spada, 18, Campanello in, Via Monte Spada, 16, 08023 Fonni NU
9. **Bed and Breakfast - La Baita di Aritzo** — Aritzo
   - slug: `bed-and-breakfast-la-baita-di-aritzo-aritzo`
   - indirizzo: Via Bigna e Mariccu, 4, 08031 Aritzo NU
10. **Bed and Breakfast "Al Rifugio"** — Aritzo
   - slug: `bed-and-breakfast-al-rifugio-aritzo`
   - indirizzo: Via Nuova, 2, 08031 Aritzo NU
11. **Bed and Breakfast Casa Masini Fonni** — Aritzo
   - slug: `bed-and-breakfast-casa-masini-fonni-aritzo`
   - indirizzo: Via Alfonso Lamarmora, 4, 08023 Fonni NU
12. **bed breakfast sa jinta** — Aritzo
   - slug: `bed-breakfast-sa-jinta-aritzo`
   - indirizzo: Via Alfonso Lamarmora, n8, 08030 Belvì NU
13. **Chalet su Foxile** — Aritzo
   - slug: `chalet-su-foxile-aritzo`
   - indirizzo: Loc. Gidilau, 08031 Aritzo NU
14. **Cucina Tipica Hotel Ristorante Edera di Cadau Marianna** — Aritzo
   - slug: `cucina-tipica-hotel-ristorante-edera-di-cadau-ma-aritzo`
   - indirizzo: Via Roma, 40, 08030 Belvì NU
15. **Hotel Belvedere** — Aritzo
   - slug: `hotel-belvedere-aritzo`
   - indirizzo: SS295, Via Monsignor Tore, 39, 08039 Tonara NU
16. **hotel la capannina** — Aritzo
   - slug: `hotel-la-capannina-aritzo`
   - indirizzo: Via Antonio Maxia, 78, 08031 Aritzo NU
17. **Hotel Miramonti Seulo** — Aritzo
   - slug: `hotel-miramonti-seulo-aritzo`
   - indirizzo: Localita Genna e sa luna, 09065 Seulo NU
18. **Hotel Moderno** — Aritzo
   - slug: `hotel-moderno-aritzo`
   - indirizzo: Viale Kennedy, 6, 08031 Aritzo NU
19. **Hotel Ristorante Gusana** — Aritzo
   - slug: `hotel-ristorante-gusana-aritzo`
   - indirizzo: Localita' Lago Di Gusana, 08020 Gavoi NU
20. **Hotel Sa Muvara** — Aritzo
   - slug: `hotel-sa-muvara-aritzo`
   - indirizzo: Viale Kennedy, 33, 08031 Aritzo NU
21. **S'apposentu** — Aritzo
   - slug: `s-apposentu-aritzo`
   - indirizzo: Via Bachisio Sulis, 1, 08031 Aritzo NU
22. **S'Erbei Niedda Guesthouse** — Aritzo
   - slug: `s-erbei-niedda-guesthouse-aritzo`
   - indirizzo: Via Amsicora, 4, 09065 Seulo NU
23. **Sa Stiddiosa Guesthouse** — Aritzo
   - slug: `sa-stiddiosa-guesthouse-aritzo`
   - indirizzo: Via Umberto I, 17, 08030 Gadoni NU
24. **Agriturismo Al Motto** — Arizzano
   - slug: `agriturismo-al-motto-arizzano`
   - indirizzo: Via Sant'Anna, 7, 28814 Cambiasca VB
25. **B&B La Locanda del Cinghiale** — Arizzano
   - slug: `b-b-la-locanda-del-cinghiale-arizzano`
   - indirizzo: Via Roma, 11, 28812 Aurano VB
26. **B&B Villa Arancio** — Arizzano
   - slug: `b-b-villa-arancio-arizzano`
   - indirizzo: Via Santa Croce, 7, 28823 Ghiffa VB
27. **cherry home casa vacanza CIN IT103003C2R4YJFYD4** — Arizzano
   - slug: `cherry-home-casa-vacanza-cin-it103003c2r4yjfyd4-arizzano`
   - indirizzo: Corso Roma, 8, 28811 Arizzano VB
28. **Chi Ghinn** — Arizzano
   - slug: `chi-ghinn-arizzano`
   - indirizzo: Via Maggiore, 21, 28813 Bee VB
29. **Frankie’s House** — Arizzano
   - slug: `frankie-s-house-arizzano`
   - indirizzo: Corso Risorgimento, 247, 28823 Ghiffa VB
30. **Holy Lake** — Arizzano
   - slug: `holy-lake-arizzano`
   - indirizzo: Via De Amicis, 4, 28823 Ghiffa VB
31. **Hotel Ancora** — Arizzano
   - slug: `hotel-ancora-arizzano`
   - indirizzo: Corso Goffredo Mameli, 65, 28921 Verbania VB
32. **Hotel del Conte** — Arizzano
   - slug: `hotel-del-conte-arizzano`
   - indirizzo: Viale G. Garibaldi, 15, 21014 Laveno-Mombello VA
33. **Hotel Moderno** — Arizzano
   - slug: `hotel-moderno-arizzano`
   - indirizzo: Via Cesira Tresoldi Lorini, 1, 28818 Premeno VB
34. **Hotel Pesce d'Oro** — Arizzano
   - slug: `hotel-pesce-d-oro-arizzano`
   - indirizzo: Via Paolo Troubetzkoy, 136, 28925 Verbania VB
35. **Hotel Pian Nava** — Arizzano
   - slug: `hotel-pian-nava-arizzano`
   - indirizzo: Via Milano, 21, 28813 Pian Nava VB