# Blocco 458/500 — 35 strutture senza descrizione IT

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

1. **B&B 6 Porte Guesthouse** — Casalmoro
   - slug: `b-b-6-porte-guesthouse-casalmoro`
   - indirizzo: Via Arturo Frizzi, 2, 46100 Mantova MN
2. **B&B Casa Casari** — Casalmoro
   - slug: `b-b-casa-casari-casalmoro`
   - indirizzo: Via Isabella D'Este, 29, 46100 Mantova MN
3. **B&B CasanonniBorgoAngeli** — Casalmoro
   - slug: `b-b-casanonniborgoangeli-casalmoro`
   - indirizzo: Via Ferdinando Negri, 5/7, 46100 Mantova MN
4. **B&B Casazze Dream** — Casalmoro
   - slug: `b-b-casazze-dream-casalmoro`
   - indirizzo: Str. Casazze, 29, 46010 Marcaria MN
5. **B&B CASCINA SAGRESTIA - Premium Quality Bed and Breakfast** — Casalmoro
   - slug: `b-b-cascina-sagrestia-premium-quality-bed-and-br-casalmoro`
   - indirizzo: Via Brescia, 120, 46041 Asola MN
6. **B&B La Casa delle Rondini** — Casalmoro
   - slug: `b-b-la-casa-delle-rondini-casalmoro`
   - indirizzo: Strada Ostigliese, 302, 46037 Governolo MN
7. **Bed and Breakfast Casa Pascolone** — Casalmoro
   - slug: `bed-and-breakfast-casa-pascolone-casalmoro`
   - indirizzo: Str. aldegatta, 11, 46020 Pegognaga MN
8. **Bed&Breakfast Le Colombare** — Casalmoro
   - slug: `bed-breakfast-le-colombare-casalmoro`
   - indirizzo: Str. Casalmoro, 23, 46042 Castel Goffredo MN
9. **Fairies apt** — Casalmoro
   - slug: `fairies-apt-casalmoro`
   - indirizzo: Via Mantova, 1/4, 46040 Casalmoro MN
10. **Foresteria Casa del Teatro** — Casalmoro
   - slug: `foresteria-casa-del-teatro-casalmoro`
   - indirizzo: Piazza Teofilo Folengo, 3, 46100 Mantova MN
11. **Agriturismo Casa Garello** — Casalnoceto
   - slug: `agriturismo-casa-garello-casalnoceto`
   - indirizzo: Località Casa Garello, 30, 27052 Salice Terme PV
12. **Albergo Ristorante Selvatico** — Casalnoceto
   - slug: `albergo-ristorante-selvatico-casalnoceto`
   - indirizzo: Via S. Pellico, 19, 27055 Rivanazzano Terme PV
13. **Hotel Milano** — Casalnoceto
   - slug: `hotel-milano-casalnoceto`
   - indirizzo: Via delle Terme, 62, 27052 Salice Terme PV
14. **Residence Alleterme** — Casalnoceto
   - slug: `residence-alleterme-casalnoceto`
   - indirizzo: Corso della Repubblica, 4, 27055 Rivanazzano Terme PV
15. **Atlantic Ostello B&B** — Casalnuovo di Napoli
   - slug: `atlantic-ostello-b-b-casalnuovo-di-napoli`
   - indirizzo: Via Genova, 63, 80143 Napoli NA
16. **Buono Hotel** — Casalnuovo di Napoli
   - slug: `buono-hotel-casalnuovo-di-napoli`
   - indirizzo: Via Nuova Poggioreale, 158/G, 80143 Napoli NA
17. **City Hotel** — Casalnuovo di Napoli
   - slug: `city-hotel-casalnuovo-di-napoli`
   - indirizzo: Via Capri, 34, 80026 Casoria NA
18. **Hostel Partenope** — Casalnuovo di Napoli
   - slug: `hostel-partenope-casalnuovo-di-napoli`
   - indirizzo: Via Filippo Maria Briganti, 388, 80141 Napoli NA
19. **Hotel Casanova** — Casalnuovo di Napoli
   - slug: `hotel-casanova-casalnuovo-di-napoli`
   - indirizzo: Corso garibaldi 333, Via Venezia, 2, 80142 Napoli NA
20. **Hotel Clarean** — Casalnuovo di Napoli
   - slug: `hotel-clarean-casalnuovo-di-napoli`
   - indirizzo: P.za Giuseppe Garibaldi, 49, 80142 Napoli NA
21. **Hotel Clinton** — Casalnuovo di Napoli
   - slug: `hotel-clinton-casalnuovo-di-napoli`
   - indirizzo: Via Nazionale delle Puglie, 245, 80026 Casoria NA
22. **Hotel Diamond** — Casalnuovo di Napoli
   - slug: `hotel-diamond-casalnuovo-di-napoli`
   - indirizzo: Piazza Guglielmo Pepe, 11, 80142 Napoli NA
23. **Hotel Futura** — Casalnuovo di Napoli
   - slug: `hotel-futura-casalnuovo-di-napoli`
   - indirizzo: Via Nazionale delle Puglie, 195, 80026 Casoria NA
24. **Hotel Ginevra** — Casalnuovo di Napoli
   - slug: `hotel-ginevra-casalnuovo-di-napoli`
   - indirizzo: Hotel ginevra stazione centrale, Via Genova, 116, 80142 Napoli NA
25. **Luxor Hotel** — Casalnuovo di Napoli
   - slug: `luxor-hotel-casalnuovo-di-napoli`
   - indirizzo: Via Luigi D'Anna, 80144 Casoria NA
26. **Rama Palace hotel** — Casalnuovo di Napoli
   - slug: `rama-palace-hotel-casalnuovo-di-napoli`
   - indirizzo: Viale dei Tigli, 78, 80013 Casalnuovo di Napoli NA
27. **Casa Iacovelli - AFFITTACAMERE** — Casalnuovo Monterotaro
   - slug: `casa-iacovelli-affittacamere-casalnuovo-monterotaro`
   - indirizzo: corso skanderbeg 15, Via Guglielmo Oberdan, 4, 71030 Casalvecchio di Puglia FG
28. **Flore B&B** — Casalnuovo Monterotaro
   - slug: `flore-b-b-casalnuovo-monterotaro`
   - indirizzo: Via Milazzo, 149, 71017 Torremaggiore FG
29. **Guest House Dimora Fiorita** — Casalnuovo Monterotaro
   - slug: `guest-house-dimora-fiorita-casalnuovo-monterotaro`
   - indirizzo: Via Imbriani, 9, 71010 Serracapriola FG
30. **Hori Balconata 2.0** — Casalnuovo Monterotaro
   - slug: `hori-balconata-2-0-casalnuovo-monterotaro`
   - indirizzo: Viale Ferrovia, 15, 71036 Lucera FG
31. **Agriturismo Nuvolino - Monzambano** — Casaloldo
   - slug: `agriturismo-nuvolino-monzambano-casaloldo`
   - indirizzo: Str. Nuvolino, 61, 46040 Monzambano MN
32. **Agriturismo Radamez** — Casaloldo
   - slug: `agriturismo-radamez-casaloldo`
   - indirizzo: Str. Davini, 4, 46040 Monzambano MN
33. **B&B Casa Di Caterina** — Casaloldo
   - slug: `b-b-casa-di-caterina-casaloldo`
   - indirizzo: Str. Davini, 5A, 46040 Monzambano MN
34. **Corte Pomgrana' Bed and Breakfast** — Casaloldo
   - slug: `corte-pomgrana-bed-and-breakfast-casaloldo`
   - indirizzo: Via Travagliati, 10, 46040 Casaloldo MN
35. **B&B Antica Piacenza** — Casalpusterlengo
   - slug: `b-b-antica-piacenza-casalpusterlengo`
   - indirizzo: Via Pantalini, 7, 29121 Piacenza PC