# Blocco 348/500 — 35 strutture senza descrizione IT

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

1. **The Green House** — Busseto
   - slug: `the-green-house-busseto`
   - indirizzo: Via Roma, 111, 43011 Busseto PR
2. **Azienda agrituristica "la torretta "** — Bussi sul Tirino
   - slug: `azienda-agrituristica-la-torretta-bussi-sul-tirino`
   - indirizzo: Via, 65028 Pretara PE
3. **Azienda Agrituristica Il Fortino** — Bussi sul Tirino
   - slug: `azienda-agrituristica-il-fortino-bussi-sul-tirino`
   - indirizzo: 1 Localita' Forca Di Penne, Capestrano, AQ 67022, 67022 Capestrano AQ
4. **B&B Popoli Terme** — Bussi sul Tirino
   - slug: `b-b-popoli-terme-bussi-sul-tirino`
   - indirizzo: Via Capponi, 2, 65026 Popoli PE
5. **B&B Radici** — Bussi sul Tirino
   - slug: `b-b-radici-bussi-sul-tirino`
   - indirizzo: Via Progresso, 50, 65022 Bussi sul Tirino PE
6. **B&B Tirino** — Bussi sul Tirino
   - slug: `b-b-tirino-bussi-sul-tirino`
   - indirizzo: Via della Repubblica, 126, 65022 Bussi sul Tirino PE
7. **Baron's Estate/Tenuta del Barone** — Bussi sul Tirino
   - slug: `baron-s-estate-tenuta-del-barone-bussi-sul-tirino`
   - indirizzo: Viale della Repubblica, 80, 65029 Torre de' Passeri PE
8. **La Trita Dimore di Charme** — Bussi sul Tirino
   - slug: `la-trita-dimore-di-charme-bussi-sul-tirino`
   - indirizzo: Piazza Commercio, 16, 65022 Bussi sul Tirino PE
9. **B&B Campobasso 30E** — Busso
   - slug: `b-b-campobasso-30e-busso`
   - indirizzo: Viale Duca d'Aosta, 30E, 86100 Campobasso CB
10. **B&B Pagliarelle** — Busso
   - slug: `b-b-pagliarelle-busso`
   - indirizzo: Via Circonvallazione San Bonifacio, 1, 86010 Oratino CB
11. **Essential Rooms** — Busso
   - slug: `essential-rooms-busso`
   - indirizzo: Viale del Castello, 3, 86100 Campobasso CB
12. **Hotel Palma Costa Gioiosa** — Busso
   - slug: `hotel-palma-costa-gioiosa-busso`
   - indirizzo: SS618, 86010 Castropignano CB
13. **Agriturismo San Salvar** — Bussolengo
   - slug: `agriturismo-san-salvar-bussolengo`
   - indirizzo: Via S. Salvar, 33, 37012 Bussolengo VR
14. **Albergo La Carica** — Bussolengo
   - slug: `albergo-la-carica-bussolengo`
   - indirizzo: Via Rovereto, 42, 37010 Pastrengo VR
15. **Albergo Ristorante Roma** — Bussolengo
   - slug: `albergo-ristorante-roma-bussolengo`
   - indirizzo: Via Giacomo Matteotti, 8, 37012 Bussolengo VR
16. **Albergo Trattoria Ai Perseghi** — Bussolengo
   - slug: `albergo-trattoria-ai-perseghi-bussolengo`
   - indirizzo: Piazzale Vittorio Veneto, 11, 37012 Bussolengo VR
17. **B&B Girelli Sorelle - Bed and Breakfast Bussolengo** — Bussolengo
   - slug: `b-b-girelli-sorelle-bed-and-breakfast-bussolengo-bussolengo`
   - indirizzo: Località Zamboni, 120, 37012 Bussolengo VR
18. **B&B Milù** — Bussolengo
   - slug: `b-b-milu-bussolengo`
   - indirizzo: Via Rovereto, 12, 37012 Bussolengo VR
19. **B&B Santa Lucia** — Bussolengo
   - slug: `b-b-santa-lucia-bussolengo`
   - indirizzo: Via Chiesa Vecchia, 7A, 37026 Santa Lucia VR
20. **Casa Citella "Alloggio Turistico" - 37012 Bussolengo Verona** — Bussolengo
   - slug: `casa-citella-alloggio-turistico-37012-bussolengo-bussolengo`
   - indirizzo: Rivendicato, Via Citella, 19, 37012 Bussolengo VR
21. **Del Falco Agricamp** — Bussolengo
   - slug: `del-falco-agricamp-bussolengo`
   - indirizzo: Via delle Penezie, 37012 Bussolengo VR
22. **Hotel Al Bosco** — Bussolengo
   - slug: `hotel-al-bosco-bussolengo`
   - indirizzo: Via Bosco, 1c, 37060 Sona VR
23. **Hotel Centro Turistico Gardesano** — Bussolengo
   - slug: `hotel-centro-turistico-gardesano-bussolengo`
   - indirizzo: Via Pastrengo, 69, 37012 Bussolengo VR
24. **Hotel Krystal** — Bussolengo
   - slug: `hotel-krystal-bussolengo`
   - indirizzo: Via Dante Alighieri, 8, 37012 Bussolengo VR
25. **Hotel Saccardi & SPA - Adult Only** — Bussolengo
   - slug: `hotel-saccardi-spa-adult-only-bussolengo`
   - indirizzo: Via Ciro Ferrari, 08, 37066 Caselle VR
26. **Hotel Veronesi La Torre** — Bussolengo
   - slug: `hotel-veronesi-la-torre-bussolengo`
   - indirizzo: Via Monte Baldo, 22, 37062 Dossobuono VR
27. **Le Colline del Garda** — Bussolengo
   - slug: `le-colline-del-garda-bussolengo`
   - indirizzo: Via Pastrengo, 85, 37012 Torcolo VR
28. **Montresor Hotel Tower** — Bussolengo
   - slug: `montresor-hotel-tower-bussolengo`
   - indirizzo: Via A. Mantegna, 30, 37012 Bussolengo VR
29. **Residence Ca di Capri** — Bussolengo
   - slug: `residence-ca-di-capri-bussolengo`
   - indirizzo: Località Ca' di Capri, 100, 37012 Bussolengo VR
30. **Residenza Agnello D'Oro** — Bussolengo
   - slug: `residenza-agnello-d-oro-bussolengo`
   - indirizzo: Via Piorta, 8, 37012 Bussolengo VR
31. **Ristorante Pizzeria Cozzeria Hotel Moro Freoni** — Bussolengo
   - slug: `ristorante-pizzeria-cozzeria-hotel-moro-freoni-bussolengo`
   - indirizzo: Via Nazionale del Brennero, 31, 37029 San Pietro in Cariano VR
32. **VeronaLago B&B Accessibile** — Bussolengo
   - slug: `veronalago-b-b-accessibile-bussolengo`
   - indirizzo: Vicolo Murici, 1C, 37012 Bussolengo VR
33. **Affittacamere al Cantoun** — Bussoleno
   - slug: `affittacamere-al-cantoun-bussoleno`
   - indirizzo: Via Ramats, 8, 10050 Chiomonte TO
34. **Alba Camere** — Bussoleno
   - slug: `alba-camere-bussoleno`
   - indirizzo: Via Asilo, 18, 10050 Chiomonte TO
35. **B&B Giardino dei Merli** — Bussoleno
   - slug: `b-b-giardino-dei-merli-bussoleno`
   - indirizzo: Via Guglielmo Marconi, 1, 10053 Bussoleno TO