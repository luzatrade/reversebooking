# Blocco 7/500 — 35 strutture senza descrizione IT

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

1. **Infinity Suite** — Acerra
   - slug: `infinity-suite-acerra`
   - indirizzo: Via Spiniello, 101, 80011 Acerra NA
2. **La dolce sosta** — Acerra
   - slug: `la-dolce-sosta-acerra`
   - indirizzo: Via Montegrappa, 30, 80011 Acerra NA
3. **Living Bed and Breakfast** — Acerra
   - slug: `living-bed-and-breakfast-acerra`
   - indirizzo: Via Francesco Ferraro, 1, 80026 Casoria NA
4. **MAISON 464** — Acerra
   - slug: `maison-464-acerra`
   - indirizzo: Via Napoli, 464, 81027 San Felice a Cancello CE
5. **Paradisea Club and Residences** — Acerra
   - slug: `paradisea-club-and-residences-acerra`
   - indirizzo: Via Rossi, 197, 80040 Napoli NA
6. **Pavean Suites Frattamaggiore** — Acerra
   - slug: `pavean-suites-frattamaggiore-acerra`
   - indirizzo: Corso Durante, 218, 80027 Frattamaggiore NA
7. **Sunrise Hotel** — Acerra
   - slug: `sunrise-hotel-acerra`
   - indirizzo: Via Giacinto Gigante, 124, 80026 Casoria NA
8. **UTOPIA The Art of Bed & Breakfast** — Acerra
   - slug: `utopia-the-art-of-bed-breakfast-acerra`
   - indirizzo: V. Europa, 17, 80034 Marigliano NA
9. **Victoria Hotel** — Acerra
   - slug: `victoria-hotel-acerra`
   - indirizzo: Via Madonnelle, 55, 80030 Castello di Cisterna NA
10. **A due passi da...** — Aci Bonaccorsi
   - slug: `a-due-passi-da-aci-bonaccorsi`
   - indirizzo: Via Eugenio Montale, 35, 95025 Aci Sant'Antonio CT
11. **B&B ALBA** — Aci Bonaccorsi
   - slug: `b-b-alba-aci-bonaccorsi`
   - indirizzo: Via Rosario Scuderi, 95029 Viagrande CT
12. **B&B Antichi Ricordi** — Aci Bonaccorsi
   - slug: `b-b-antichi-ricordi-aci-bonaccorsi`
   - indirizzo: Via Giovanni Pascoli, 13, 95025 Aci Sant'Antonio CT
13. **B&B Casalotto Inn** — Aci Bonaccorsi
   - slug: `b-b-casalotto-inn-aci-bonaccorsi`
   - indirizzo: Via Giovanni Pascoli, 11, 95025 Aci Sant'Antonio CT
14. **B&B I Colori dell'Etna** — Aci Bonaccorsi
   - slug: `b-b-i-colori-dell-etna-aci-bonaccorsi`
   - indirizzo: Viale Giovanni Caboto, Via Portopalo, 5/7, 95037 San Giovanni la Punta CT
15. **B&B Il Vulcano** — Aci Bonaccorsi
   - slug: `b-b-il-vulcano-aci-bonaccorsi`
   - indirizzo: 4, Via M.llo Alfredo Agosta, 95022 Aci Catena CT
16. **B&B L'Agrifoglio dell'Etna** — Aci Bonaccorsi
   - slug: `b-b-l-agrifoglio-dell-etna-aci-bonaccorsi`
   - indirizzo: Via Principi di Villafranca, n°22/a, 95039 Trecastagni CT
17. **B&B La Casetta** — Aci Bonaccorsi
   - slug: `b-b-la-casetta-aci-bonaccorsi`
   - indirizzo: Via Francesco Crispi, 40, 95020 Aci Bonaccorsi CT
18. **B&B Le Antiche Cisterne** — Aci Bonaccorsi
   - slug: `b-b-le-antiche-cisterne-aci-bonaccorsi`
   - indirizzo: Via Salvatore Quasimodo, 14, 95030 Tremestieri Etneo CT
19. **B&B Sotto l'eremo** — Aci Bonaccorsi
   - slug: `b-b-sotto-l-eremo-aci-bonaccorsi`
   - indirizzo: Via Eremo Sant'Anna, 29, 95022 Aci Catena CT
20. **B&B suite** — Aci Bonaccorsi
   - slug: `b-b-suite-aci-bonaccorsi`
   - indirizzo: Viale della Regione, 75, 95029 Viagrande CT
21. **Bed and Breakfast Mariclà - Viagrande** — Aci Bonaccorsi
   - slug: `bed-and-breakfast-maricla-viagrande-aci-bonaccorsi`
   - indirizzo: Via A. Cabane', 10, 95029 Viagrande CT
22. **Bed and Breakfast Terra e Stelle** — Aci Bonaccorsi
   - slug: `bed-and-breakfast-terra-e-stelle-aci-bonaccorsi`
   - indirizzo: Via Francesco Riso, 45, 95025 Aci Sant'Antonio CT
23. **Etna Country** — Aci Bonaccorsi
   - slug: `etna-country-aci-bonaccorsi`
   - indirizzo: Via Etnea, 396, 95030 Tremestieri Etneo CT
24. **Grand Hotel Villa Itria** — Aci Bonaccorsi
   - slug: `grand-hotel-villa-itria-aci-bonaccorsi`
   - indirizzo: Via Antonio, Via Aniante, 3, 95029 Viagrande CT
25. **Il Tiglio** — Aci Bonaccorsi
   - slug: `il-tiglio-aci-bonaccorsi`
   - indirizzo: Via Petrone, 55, 95029 Viagrande CT
26. **Locanda Sant'Antonio** — Aci Bonaccorsi
   - slug: `locanda-sant-antonio-aci-bonaccorsi`
   - indirizzo: Piazza Maggiore, 29, 95025 Aci Sant'Antonio CT
27. **Profumi di Aci - Boutique B&B** — Aci Bonaccorsi
   - slug: `profumi-di-aci-boutique-b-b-aci-bonaccorsi`
   - indirizzo: Via Nizzeti, 203, 95022 Nizzeti CT
28. **Sikelia Rooms** — Aci Bonaccorsi
   - slug: `sikelia-rooms-aci-bonaccorsi`
   - indirizzo: Via Giuseppe Garibaldi, 128, 95029 Viagrande CT
29. **Zaffiro Lavico rooms Etna nature sea** — Aci Bonaccorsi
   - slug: `zaffiro-lavico-rooms-etna-nature-sea-aci-bonaccorsi`
   - indirizzo: Via Giuseppe Ungaretti, 7/D, 95025 Aci Sant'Antonio CT
30. **4 Spa Resort Hotel** — Aci Castello
   - slug: `4-spa-resort-hotel-aci-castello`
   - indirizzo: Via Nazionale, 114, 95021 Aci Castello CT
31. **Aci Trezza La Cornera Appartamenti Lungomare** — Aci Castello
   - slug: `aci-trezza-la-cornera-appartamenti-lungomare-aci-castello`
   - indirizzo: Via A. Capparelli, 40, 95021 Aci Castello CT
32. **b&b Borgo Marinaro** — Aci Castello
   - slug: `b-b-borgo-marinaro-aci-castello`
   - indirizzo: Via Volturno, 4, 95021 Aci Castello CT
33. **B&B Brezza di Mare** — Aci Castello
   - slug: `b-b-brezza-di-mare-aci-castello`
   - indirizzo: Via Livorno, 63, 95021 Aci Castello CT
34. **B&B Epos Acitrezza** — Aci Castello
   - slug: `b-b-epos-acitrezza-aci-castello`
   - indirizzo: Via Provinciale, 262, 95021 Aci Castello CT
35. **B&B Stella Marina** — Aci Castello
   - slug: `b-b-stella-marina-aci-castello`
   - indirizzo: Via Litteri, 48, 95021 Aci Trezza CT