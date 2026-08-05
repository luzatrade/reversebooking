# Blocco 95/500 — 35 strutture senza descrizione IT

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

1. **ME Milan Il Duca** — Al�
   - slug: `me-milan-il-duca-al`
   - indirizzo: Piazza della Repubblica, 13, 20124 Milano MI
2. **Mirella Charming B&B** — Al�
   - slug: `mirella-charming-b-b-al`
   - indirizzo: c.da terranova,79 s.p. 113, km 13, 00, 70043 Monopoli BA
3. **Murr Luxury Rooms** — Al�
   - slug: `murr-luxury-rooms-al`
   - indirizzo: Via Aldo Moro, 14, 70015 Noci BA
4. **Relais Medea** — Al�
   - slug: `relais-medea-al`
   - indirizzo: Via Vincenzo zingaropoli, 74027 San Giorgio Ionico TA
5. **Via del Mare Apulia B&B Spa Suite** — Al�
   - slug: `via-del-mare-apulia-b-b-spa-suite-al`
   - indirizzo: SP111, 70018 Rutigliano BA
6. **103 Boutique Hotel Stintino** — Al� dei Sardi
   - slug: `103-boutique-hotel-stintino-al-dei-sardi`
   - indirizzo: Lungomare Cristoforo Colombo, 103, 07040 Stintino SS
7. **B&B Golfo Asinara -suite con Idromassaggio R4976** — Al� dei Sardi
   - slug: `b-b-golfo-asinara-suite-con-idromassaggio-r4976-al-dei-sardi`
   - indirizzo: Via Porto Torres, 25, 07037 Sorso SS
8. **Domo La villa del lupo** — Al� dei Sardi
   - slug: `domo-la-villa-del-lupo-al-dei-sardi`
   - indirizzo: Via Pattada, 21, 07100 Sassari SS
9. **Garden Hotel Alghero** — Al� dei Sardi
   - slug: `garden-hotel-alghero-al-dei-sardi`
   - indirizzo: Località Arenosu, 1, 07041 Alghero SS
10. **Hotel Alma di Alghero** — Al� dei Sardi
   - slug: `hotel-alma-di-alghero-al-dei-sardi`
   - indirizzo: Via Lido, 29, 07041 Alghero SS
11. **Hotel Cala Reale** — Al� dei Sardi
   - slug: `hotel-cala-reale-al-dei-sardi`
   - indirizzo: Via Cala di Rena, 1, 07040 Stintino SS
12. **Hotel dei Pini** — Al� dei Sardi
   - slug: `hotel-dei-pini-al-dei-sardi`
   - indirizzo: Str. Vicinale del Lazzaretto, 07041 Alghero SS
13. **Hotel Giardino La Playa** — Al� dei Sardi
   - slug: `hotel-giardino-la-playa-al-dei-sardi`
   - indirizzo: Via Pantelleria, 14, 07041 Alghero SS
14. **Hotel Grazia Deledda S. R. L.** — Al� dei Sardi
   - slug: `hotel-grazia-deledda-s-r-l-al-dei-sardi`
   - indirizzo: Viale Dante Alighieri, 47, 07100 Sassari SS
15. **Hotel Il Gabbiano** — Al� dei Sardi
   - slug: `hotel-il-gabbiano-al-dei-sardi`
   - indirizzo: Via Giuseppe Garibaldi, 97, 07041 Alghero SS
16. **Hotel La Ciaccia** — Al� dei Sardi
   - slug: `hotel-la-ciaccia-al-dei-sardi`
   - indirizzo: Via Cristoforo Colombo, 28, 07039 Valledoria SS
17. **Hotel Mistral** — Al� dei Sardi
   - slug: `hotel-mistral-al-dei-sardi`
   - indirizzo: Via Liguria, 41, 07041 Alghero SS
18. **Hotel Punta Negra l'Alguer/Alghero** — Al� dei Sardi
   - slug: `hotel-punta-negra-l-alguer-alghero-al-dei-sardi`
   - indirizzo: SS127bis, 07041 Alghero SS
19. **Hotel S'Astore** — Al� dei Sardi
   - slug: `hotel-s-astore-al-dei-sardi`
   - indirizzo: Via Giorgio la Pira, 9, 07010 Benetutti SS
20. **Hotel San Marco** — Al� dei Sardi
   - slug: `hotel-san-marco-al-dei-sardi`
   - indirizzo: Via Lido, 57, 07041 Alghero SS
21. **S'ARD Guest House Sassari** — Al� dei Sardi
   - slug: `s-ard-guest-house-sassari-al-dei-sardi`
   - indirizzo: P.zza Mons, P.za Monsignor Arcangelo Mazzotti, 11, 07100 Sassari SS
22. **Affittacamere Lido Marchesana** — Al� Terme
   - slug: `affittacamere-lido-marchesana-al-terme`
   - indirizzo: Via Lungomare Marchesana, 155, 98050 Terme Vigliatore ME
23. **Agrolea Hotel Ristorante** — Al� Terme
   - slug: `agrolea-hotel-ristorante-al-terme`
   - indirizzo: Contrada Calvano, 98059 Rodì Milici ME
24. **B&B Borgo Camicia IN** — Al� Terme
   - slug: `b-b-borgo-camicia-in-al-terme`
   - indirizzo: Via, Stretto Crocevia, 27, 98040 Barcellona Pozzo di Gotto ME
25. **B&B Il Gelso Rooms** — Al� Terme
   - slug: `b-b-il-gelso-rooms-al-terme`
   - indirizzo: Via Stretto Badia, 26, 98050 Terme ME
26. **B&B La Gatta Bianca** — Al� Terme
   - slug: `b-b-la-gatta-bianca-al-terme`
   - indirizzo: Via Giacomo Matteotti, 8, 98060 Oliveri ME
27. **B&B Tonnarella Beach** — Al� Terme
   - slug: `b-b-tonnarella-beach-al-terme`
   - indirizzo: Via della Campana, 40, 98054 Furnari ME
28. **B&B Torreforte** — Al� Terme
   - slug: `b-b-torreforte-al-terme`
   - indirizzo: Via della Campana, 20, 98054 Tonnarella ME
29. **BAARIA House Hotel** — Al� Terme
   - slug: `baaria-house-hotel-al-terme`
   - indirizzo: Via Regina Margherita, 106, 98051 Barcellona Pozzo di Gotto ME
30. **Bed&Breakfast Terme Vigliatore** — Al� Terme
   - slug: `bed-breakfast-terme-vigliatore-al-terme`
   - indirizzo: Via Stretto Marro, 7, 98050 Terme ME
31. **Best Western Plus Hotel Terre di Eolo** — Al� Terme
   - slug: `best-western-plus-hotel-terre-di-eolo-al-terme`
   - indirizzo: National Road, SS 113 Settentrionale Sicula, Km 70.920, 98066 Patti ME
32. **Grand Hotel La Rosa Dei Venti** — Al� Terme
   - slug: `grand-hotel-la-rosa-dei-venti-al-terme`
   - indirizzo: Via Giuseppe Garibaldi, 1, 98060 Campogrande ME
33. **Hotel IL Gabbiano Beach** — Al� Terme
   - slug: `hotel-il-gabbiano-beach-al-terme`
   - indirizzo: Via Lungomare Marchesana, 4, 98050 Terme ME
34. **Hotel La Piramide Di Puglisi Cosimo** — Al� Terme
   - slug: `hotel-la-piramide-di-puglisi-cosimo-al-terme`
   - indirizzo: Via Piccolo Torrente Pagliara, 20, 98027 Roccalumera ME
35. **Hotel Riviera Azzurra Ristorante** — Al� Terme
   - slug: `hotel-riviera-azzurra-ristorante-al-terme`
   - indirizzo: Via del Mare, 1, 98060 Oliveri ME