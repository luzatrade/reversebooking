# Blocco 271/500 — 35 strutture senza descrizione IT

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

1. **B&B Del Piazzo** — Biella
   - slug: `b-b-del-piazzo-biella`
   - indirizzo: Corso del Piazzo, 14, 13900 Biella BI
2. **Hotel Agata** — Biella
   - slug: `hotel-agata-biella`
   - indirizzo: Str. alla Fornace, 6/A, 13900 Biella BI
3. **Hotel Astoria** — Biella
   - slug: `hotel-astoria-biella`
   - indirizzo: Viale Roma, 09, 13900 Biella BI
4. **Hotel Bugella** — Biella
   - slug: `hotel-bugella-biella`
   - indirizzo: Via S. Giuseppe Cottolengo, 65, 13900 Biella BI
5. **Hotel Europa** — Biella
   - slug: `hotel-europa-biella`
   - indirizzo: Corso Europa, 7/D, 13900 Biella BI
6. **Hotel Michelangelo** — Biella
   - slug: `hotel-michelangelo-biella`
   - indirizzo: Piazza Adua, 5, 13900 Biella BI
7. **Hotel Repubblica 55** — Biella
   - slug: `hotel-repubblica-55-biella`
   - indirizzo: Via della Repubblica, Via Dante Alighieri, 55, 13900 Biella BI
8. **B & B La Mela** — Bienno
   - slug: `b-b-la-mela-bienno`
   - indirizzo: Via Grimaldi, 10, 25047 Bessimo Superiore BS
9. **B&B Castello Ristorante Pizzeria** — Bienno
   - slug: `b-b-castello-ristorante-pizzeria-bienno`
   - indirizzo: Via IV Novembre, 19, 25050 Cimbergo BS
10. **B&B I Viandanti** — Bienno
   - slug: `b-b-i-viandanti-bienno`
   - indirizzo: Via Vanzolino, 13/C, 25052 Piamborno BS
11. **I Camuni** — Bienno
   - slug: `i-camuni-bienno`
   - indirizzo: Via San Rocco, 7, 25044 Capo di Ponte BS
12. **Agritur Affittacamere Mauro Capra** — Bieno
   - slug: `agritur-affittacamere-mauro-capra-bieno`
   - indirizzo: Via XVIII Settembre, 16/A, 38050 Carzano TN
13. **Agriturismo Blum** — Bieno
   - slug: `agriturismo-blum-bieno`
   - indirizzo: Strada degli Scondani, 8, 38059 Strigno TN
14. **Agriturismo Ranch dei Lupi - Osteria** — Bieno
   - slug: `agriturismo-ranch-dei-lupi-osteria-bieno`
   - indirizzo: Loc. Castrozze, 38059 Castel Ivano TN
15. **Albergo Alpina** — Bieno
   - slug: `albergo-alpina-bieno`
   - indirizzo: Via Municipio Vecchio, 9, 38053 Castello Tesino TN
16. **ALBERGO CARRARO** — Bieno
   - slug: `albergo-carraro-bieno`
   - indirizzo: Via Ammiraglio Giovanni Bettolo, 8, 38050 Bieno TN
17. **Albergo Ristorante Bellavista** — Bieno
   - slug: `albergo-ristorante-bellavista-bieno`
   - indirizzo: Via Roma, 17, 38053 Castello Tesino TN
18. **Albergo Villa Flora** — Bieno
   - slug: `albergo-villa-flora-bieno`
   - indirizzo: Piazza Achille de Giovanni, 5, 38050 Roncegno TN
19. **Alla Stazione - Hotel & Ristorante** — Bieno
   - slug: `alla-stazione-hotel-ristorante-bieno`
   - indirizzo: Via Nazionale, 20, 38050 Marter TN
20. **B&B Il Piccolo Principe** — Bieno
   - slug: `b-b-il-piccolo-principe-bieno`
   - indirizzo: Vicolo Busarello, 10, 38050 Bieno TN
21. **Coronata Haus B&B - Ristorante Pranzo** — Bieno
   - slug: `coronata-haus-b-b-ristorante-pranzo-bieno`
   - indirizzo: Loc. Maso Vazzena, 38050 Roncegno Terme TN
22. **Hotel Cima D'Asta - Ristorante Pizzeria** — Bieno
   - slug: `hotel-cima-d-asta-ristorante-pizzeria-bieno`
   - indirizzo: Via Brigata Abruzzi, 2, 38050 Pieve Tesino TN
23. **Hotel Cristo d'Oro** — Bieno
   - slug: `hotel-cristo-d-oro-bieno`
   - indirizzo: Via Monte Cima, 33, 38059 Samone TN
24. **Hotel Kapriol** — Bieno
   - slug: `hotel-kapriol-bieno`
   - indirizzo: Loc. Fradea, 38053 Castello Tesino TN
25. **Hotel Negritella** — Bieno
   - slug: `hotel-negritella-bieno`
   - indirizzo: Frazione Campestrini, 24, 38050 Torcegno TN
26. **Hotel Spera - Ristorante e Bar** — Bieno
   - slug: `hotel-spera-ristorante-e-bar-bieno`
   - indirizzo: Via Carzano, 7, 38059 Spera TN
27. **Locanda La Ruscoletta** — Bieno
   - slug: `locanda-la-ruscoletta-bieno`
   - indirizzo: Loc. Musiera 3, 38050 Telve TN
28. **Maso Weiss** — Bieno
   - slug: `maso-weiss-bieno`
   - indirizzo: Localita' alle Zunaghe, 1, 38050 Bieno TN
29. **Stella Al Pina** — Bieno
   - slug: `stella-al-pina-bieno`
   - indirizzo: Via Don Angelo Gonzo, 7, 38055 Tezze TN
30. **Taxus Hostel** — Bieno
   - slug: `taxus-hostel-bieno`
   - indirizzo: Via Brigata Abruzzi, 1, 38050 Pieve Tesino TN
31. **Affittacamere Hotel Il Piccolo Rooms** — Bientina
   - slug: `affittacamere-hotel-il-piccolo-rooms-bientina`
   - indirizzo: Viale Rinaldo Piaggio, 58, 56025 Pontedera PI
32. **Albergo Ristorante Il Patino** — Bientina
   - slug: `albergo-ristorante-il-patino-bientina`
   - indirizzo: Via della Vecchia Stazione, 50/E-F, 56031 Bientina PI
33. **B&B ALVINO** — Bientina
   - slug: `b-b-alvino-bientina`
   - indirizzo: Piazza Vittorio Emanuele II, 27, 56031 Bientina PI
34. **B&B Il Giardino di Ortensia** — Bientina
   - slug: `b-b-il-giardino-di-ortensia-bientina`
   - indirizzo: Via A. Pacini, 16, 56031 Bientina PI
35. **B&B Pontedera** — Bientina
   - slug: `b-b-pontedera-bientina`
   - indirizzo: Via Roma, 222, 56025 Pontedera PI