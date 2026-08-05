# Blocco 382/500 — 35 strutture senza descrizione IT

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

1. **AGRITURISMO FONTE DI BRACA** — Campagnatico
   - slug: `agriturismo-fonte-di-braca-campagnatico`
   - indirizzo: LOCALITA POGGIO CAIANO76, 58042 Campagnatico GR
2. **Agriturismo in Toscana con Piscina - Fonte Marina Alta** — Campagnatico
   - slug: `agriturismo-in-toscana-con-piscina-fonte-marina-campagnatico`
   - indirizzo: Unnamed Road, 58042, 58042, 58042 Campagnatico GR
3. **Agriturismo Podere Il Sorbo** — Campagnatico
   - slug: `agriturismo-podere-il-sorbo-campagnatico`
   - indirizzo: Località Granaione, 50, 58042 Granaione GR
4. **AGRITURISMO TAMANTINO** — Campagnatico
   - slug: `agriturismo-tamantino-campagnatico`
   - indirizzo: PODERE TAMANTINO, 58042, 58042 Campagnatico GR
5. **Agriturismo Villa Bellaria** — Campagnatico
   - slug: `agriturismo-villa-bellaria-campagnatico`
   - indirizzo: Via dei Granai, 1, 58042 Campagnatico GR
6. **BioAgriturismo CORTE DEGLI ULIVI - Maremma Toscana** — Campagnatico
   - slug: `bioagriturismo-corte-degli-ulivi-maremma-toscana-campagnatico`
   - indirizzo: Strada Provinciale dello Sbirro, 58100 Roselle GR
7. **Castello Di Vicarello** — Campagnatico
   - slug: `castello-di-vicarello-campagnatico`
   - indirizzo: Loc, Via Vicarello, 1, 58044 Poggi del Sasso GR
8. **Glamping Le Dune** — Campagnatico
   - slug: `glamping-le-dune-campagnatico`
   - indirizzo: Località Ficari, SNC, 58044 Cinigiano GR
9. **Guest House** — Campagnatico
   - slug: `guest-house-campagnatico`
   - indirizzo: Via Mazzini, 19, 58042 Campagnatico GR
10. **HOTEL ALBERGO LEA** — Campagnatico
   - slug: `hotel-albergo-lea-campagnatico`
   - indirizzo: Via Batignanese, 113, 58100 Grosseto GR
11. **Hotel Relais Santa Genoveffa** — Campagnatico
   - slug: `hotel-relais-santa-genoveffa-campagnatico`
   - indirizzo: Podere Santa Genoveffa, 29, 58045 Civitella Paganico GR
12. **Hotel Rifugio da Giulia** — Campagnatico
   - slug: `hotel-rifugio-da-giulia-campagnatico`
   - indirizzo: SP64, Km 2/00, 58045 Paganico GR
13. **Locanda del glicine** — Campagnatico
   - slug: `locanda-del-glicine-campagnatico`
   - indirizzo: Piazza Garibaldi, 6, 58042 Campagnatico GR
14. **Locanda nel Cassero Camere** — Campagnatico
   - slug: `locanda-nel-cassero-camere-campagnatico`
   - indirizzo: Via del Cassero, 29, 58045 Civitella Marittima GR
15. **Locanda nel Cassero ristorante** — Campagnatico
   - slug: `locanda-nel-cassero-ristorante-campagnatico`
   - indirizzo: Via del Cassero, 29, 58045 Civitella Paganico GR
16. **Monte di Bù affittacamere** — Campagnatico
   - slug: `monte-di-bu-affittacamere-campagnatico`
   - indirizzo: Loc.marrucheti, Podere Monte di Bù, 76, 58042 Bagno Roselle GR
17. **Paradise Agricamp** — Campagnatico
   - slug: `paradise-agricamp-campagnatico`
   - indirizzo: Localita' Poggio Sasso S.N.C, 58036 Roccastrada GR
18. **PIERINIeBRUGI/AGRITURISMO BELVEDERE** — Campagnatico
   - slug: `pieriniebrugi-agriturismo-belvedere-campagnatico`
   - indirizzo: Podere Belvedere, 12, 58042 Campagnatico GR
19. **Albergo Antica Hostelleria** — Campagnola Cremasca
   - slug: `albergo-antica-hostelleria-campagnola-cremasca`
   - indirizzo: Via Izano, 2a, 26013 Crema CR
20. **B&B San Clemente - Crema** — Campagnola Cremasca
   - slug: `b-b-san-clemente-crema-campagnola-cremasca`
   - indirizzo: Via Suor Maria Crocefissa di Rosa, 3, 26013 Crema CR
21. **B&B Sangiligio** — Campagnola Cremasca
   - slug: `b-b-sangiligio-campagnola-cremasca`
   - indirizzo: Via Donati Pietro, 50, 26013 Crema CR
22. **Hotel Il Ponte di Rialto** — Campagnola Cremasca
   - slug: `hotel-il-ponte-di-rialto-campagnola-cremasca`
   - indirizzo: Via Luigi Cadorna, 7, 26013 Crema CR
23. **Agriturismo Lucchetta** — Campagnola Emilia
   - slug: `agriturismo-lucchetta-campagnola-emilia`
   - indirizzo: Str. S. Venerio, n°86, 42046 Reggiolo RE
24. **B&B Primavera** — Campagnola Emilia
   - slug: `b-b-primavera-campagnola-emilia`
   - indirizzo: Via Chiesa di Santa Croce, 9, 41012 Carpi MO
25. **Hotel dei Gonzaga - Reggiolo, Reggio Emilia** — Campagnola Emilia
   - slug: `hotel-dei-gonzaga-reggiolo-reggio-emilia-campagnola-emilia`
   - indirizzo: Str. Malagoli, 5, 42046 Reggiolo RE
26. **Hotel Il Rifugio** — Campagnola Emilia
   - slug: `hotel-il-rifugio-campagnola-emilia`
   - indirizzo: Via Chiesa Matildica, 4, 46023 Gonzaga MN
27. **Hotel Villa Nabila** — Campagnola Emilia
   - slug: `hotel-villa-nabila-campagnola-emilia`
   - indirizzo: Viale Marconi, 4, 42046 Reggiolo RE
28. **La Perla del Mercante B&B** — Campagnola Emilia
   - slug: `la-perla-del-mercante-b-b-campagnola-emilia`
   - indirizzo: Via Mercanti, 6, 42015 Correggio RE
29. **Tenuta Santo Stefano - Hotel** — Campagnola Emilia
   - slug: `tenuta-santo-stefano-hotel-campagnola-emilia`
   - indirizzo: V. Vettigano, 26, 42012 Campagnola Emilia RE
30. **Acquamarina B&B Deluxe** — Campana
   - slug: `acquamarina-b-b-deluxe-campana`
   - indirizzo: Via Cristoforo Colombo, 39, 87062 Cariati CS
31. **agriturismo al grande gelso** — Campana
   - slug: `agriturismo-al-grande-gelso-campana`
   - indirizzo: c/da sant' angelo, 87062 Cariati CS
32. **Al Giglio** — Campana
   - slug: `al-giglio-campana`
   - indirizzo: Via Ieronimo, 12, 87062 Cariati CS
33. **B&B Birillo Cariati** — Campana
   - slug: `b-b-birillo-cariati-campana`
   - indirizzo: Via A. de Gasperi, 139, 87062 Cariati CS
34. **B&B Domus Purpurea** — Campana
   - slug: `b-b-domus-purpurea-campana`
   - indirizzo: Piazza Duomo, snc, 87064 Rossano CS
35. **B&B Fiore di Cappero by Calabria Stay** — Campana
   - slug: `b-b-fiore-di-cappero-by-calabria-stay-campana`
   - indirizzo: via 49° Fanteria, 20, 87062 Cariati CS