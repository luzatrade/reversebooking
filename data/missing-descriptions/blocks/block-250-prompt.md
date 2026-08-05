# Blocco 250/500 — 35 strutture senza descrizione IT

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

1. **B&B La Marella** — Belmonte del Sannio
   - slug: `b-b-la-marella-belmonte-del-sannio`
   - indirizzo: C.da Rigaini 79 - Località Marella, 86081 Agnone IS
2. **Bed&Breakfast La Caruscia** — Belmonte del Sannio
   - slug: `bed-breakfast-la-caruscia-belmonte-del-sannio`
   - indirizzo: Contrada Maiella, 22, 86029 Trivento CB
3. **Belmonte-Holiday** — Belmonte del Sannio
   - slug: `belmonte-holiday-belmonte-del-sannio`
   - indirizzo: Via Cardarelli, 8, 86080 Belmonte del Sannio IS
4. **Hotel Lo Smeraldo | Sala Ricevimenti** — Belmonte del Sannio
   - slug: `hotel-lo-smeraldo-sala-ricevimenti-belmonte-del-sannio`
   - indirizzo: Contrada Canneto, 1, 86020 Roccavivara CB
5. **Palazzo Della Città** — Belmonte del Sannio
   - slug: `palazzo-della-citta-belmonte-del-sannio`
   - indirizzo: CIN: IT094002B4TRNA6EQU, Via Vittorio Alfieri, 1, 86081 Agnone IS
6. **Sydney B&B** — Belmonte del Sannio
   - slug: `sydney-b-b-belmonte-del-sannio`
   - indirizzo: Via Fonte Lava, 21, 66033 Castiglione Messer Marino CH
7. **Arenarius Resort** — Belmonte in Sabina
   - slug: `arenarius-resort-belmonte-in-sabina`
   - indirizzo: Via cecola, 4, 02030 Ornaro RI
8. **Brindavan Country House** — Belmonte in Sabina
   - slug: `brindavan-country-house-belmonte-in-sabina`
   - indirizzo: SP30, N° 18, 02020 Concerviano RI
9. **Hotel Ristorante Valentino** — Belmonte in Sabina
   - slug: `hotel-ristorante-valentino-belmonte-in-sabina`
   - indirizzo: Via Rieti, 9, 02100 Rieti RI
10. **Hotel Serena** — Belmonte in Sabina
   - slug: `hotel-serena-belmonte-in-sabina`
   - indirizzo: Via dei Salici, 46/A, 02100 Rieti RI
11. **La Noce di Creta Agriturismo Biologico - Osteria Nuova di Poggio Moiano - Rieti - In Sabina** — Belmonte in Sabina
   - slug: `la-noce-di-creta-agriturismo-biologico-osteria-n-belmonte-in-sabina`
   - indirizzo: Vocabolo Colle Mastrangelo, 250, 02037 Osteria Nuova RI
12. **Park Hotel Villa Potenziani** — Belmonte in Sabina
   - slug: `park-hotel-villa-potenziani-belmonte-in-sabina`
   - indirizzo: Via S. Mauro, 6, 02100 Rieti RI
13. **Albergo Miravalle** — Belmonte Mezzagno
   - slug: `albergo-miravalle-belmonte-mezzagno`
   - indirizzo: Contrada Segretaria, 8, 90036 Misilmeri PA
14. **B&B Angolo83** — Belmonte Mezzagno
   - slug: `b-b-angolo83-belmonte-mezzagno`
   - indirizzo: Via Roma, 83, 90133 Palermo PA
15. **B&B CHARME 93 Principe di Belmonte** — Belmonte Mezzagno
   - slug: `b-b-charme-93-principe-di-belmonte-belmonte-mezzagno`
   - indirizzo: Via Principe di Belmonte, 93, 90139 Palermo PA
16. **B&B I Cinque Continenti** — Belmonte Mezzagno
   - slug: `b-b-i-cinque-continenti-belmonte-mezzagno`
   - indirizzo: Via Piccola Teatro S. Cecilia, 5/1° piano, 90133 Palermo PA
17. **B&B Palermo Sole & Cultura** — Belmonte Mezzagno
   - slug: `b-b-palermo-sole-cultura-belmonte-mezzagno`
   - indirizzo: Via Francesco Palumbo Minà, 7, 90127 Palermo PA
18. **Ballarò Hotel** — Belmonte Mezzagno
   - slug: `ballaro-hotel-belmonte-mezzagno`
   - indirizzo: Via Maqueda, 26, 90134 Palermo PA
19. **Belmonte102 Esclusive Suites** — Belmonte Mezzagno
   - slug: `belmonte102-esclusive-suites-belmonte-mezzagno`
   - indirizzo: Via Principe di Belmonte, 102, 90139 Palermo PA
20. **Casa Vacanza Monviso LeFuoriserieAppartamenti** — Belmonte Mezzagno
   - slug: `casa-vacanza-monviso-lefuoriserieappartamenti-belmonte-mezzagno`
   - indirizzo: Via del Ponticello, 5, 90134 Palermo PA
21. **Hotel Concordia** — Belmonte Mezzagno
   - slug: `hotel-concordia-belmonte-mezzagno`
   - indirizzo: Via Roma, 72, 90133 Palermo PA
22. **Hotel del Centro** — Belmonte Mezzagno
   - slug: `hotel-del-centro-belmonte-mezzagno`
   - indirizzo: Via Roma, 72, 90133 Palermo PA
23. **Hotel San Paolo Palace** — Belmonte Mezzagno
   - slug: `hotel-san-paolo-palace-belmonte-mezzagno`
   - indirizzo: Via Messina Marine, 91, 90123 Palermo PA
24. **Palazzo Balsamo Boutique Hotel** — Belmonte Mezzagno
   - slug: `palazzo-balsamo-boutique-hotel-belmonte-mezzagno`
   - indirizzo: Via Divisi, 93, 90133 Palermo PA
25. **Palazzo Cartari** — Belmonte Mezzagno
   - slug: `palazzo-cartari-belmonte-mezzagno`
   - indirizzo: V. dei Cartari, 21, 90133 Palermo PA
26. **Stardust Home** — Belmonte Mezzagno
   - slug: `stardust-home-belmonte-mezzagno`
   - indirizzo: Vicolo Sciacca, 6, 90124 Palermo PA
27. **Belmonte inn** — Belmonte Piceno
   - slug: `belmonte-inn-belmonte-piceno`
   - indirizzo: Contrada Colle Tenna, 63875 Belmonte Piceno FM
28. **Aura Club - La Fenice** — Belpasso
   - slug: `aura-club-la-fenice-belpasso`
   - indirizzo: Via Roma, 268, 95032 Belpasso CT
29. **B&B - Althea Etna Garden** — Belpasso
   - slug: `b-b-althea-etna-garden-belpasso`
   - indirizzo: Via Nuova, 8, 95030 Nicolosi CT
30. **B&B BcenS la città delle 100 sculture** — Belpasso
   - slug: `b-b-bcens-la-citta-delle-100-sculture-belpasso`
   - indirizzo: Via Roma, 265, 95032 Belpasso CT
31. **B&B FOSSANOCE** — Belpasso
   - slug: `b-b-fossanoce-belpasso`
   - indirizzo: Via Don Luigi Sturzo, 12, 95032 Belpasso CT
32. **B&B La Grotta** — Belpasso
   - slug: `b-b-la-grotta-belpasso`
   - indirizzo: Via Adua, 18, 95030 Nicolosi CT
33. **B&B La Porta dell'Etna** — Belpasso
   - slug: `b-b-la-porta-dell-etna-belpasso`
   - indirizzo: Via Somma, 107, 95030 Nicolosi CT
34. **B&B La Rena Rossa** — Belpasso
   - slug: `b-b-la-rena-rossa-belpasso`
   - indirizzo: Via Luigi Capuana, 6a, 95030 Nicolosi CT
35. **B&B Mount Etna** — Belpasso
   - slug: `b-b-mount-etna-belpasso`
   - indirizzo: Via Alcide de Gasperi, 66, 95032 Belpasso CT