# Blocco 369/500 — 35 strutture senza descrizione IT

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

1. **Bed and breakfast Nido di Rondine** — Calliano
   - slug: `bed-and-breakfast-nido-di-rondine-calliano`
   - indirizzo: 4, Fraz, 38077 Lundo TN
2. **Casa Del Noce Di Poletti Deanna Sas & C.** — Calliano
   - slug: `casa-del-noce-di-poletti-deanna-sas-c-calliano`
   - indirizzo: Via Riccardo Zandonai, 10, 38060 Villa Lagarina TN
3. **Casa Vertigo** — Calliano
   - slug: `casa-vertigo-calliano`
   - indirizzo: Via Asiago, 3, 38123 Trento TN
4. **In Collina B&B** — Calliano
   - slug: `in-collina-b-b-calliano`
   - indirizzo: Via Aldo Gorfer, 8, 38123 Trento TN
5. **La Lesivèra bed and breakfast** — Calliano
   - slug: `la-lesivera-bed-and-breakfast-calliano`
   - indirizzo: Via Italo Balbo, 14, 38079 Saone TN
6. **Storie di bosco B&B** — Calliano
   - slug: `storie-di-bosco-b-b-calliano`
   - indirizzo: loc. Bellaria, 38060 Villa Lagarina TN
7. **WANDERLUST B&B** — Calliano
   - slug: `wanderlust-b-b-calliano`
   - indirizzo: Via Madonna delle Grazie, 49, 38064 Folgaria TN
8. **CASA DEI CILIEGI - CIN IT005025B4M23OALTY** — Calliano Monferrato
   - slug: `casa-dei-ciliegi-cin-it005025b4m23oalty-calliano-monferrato`
   - indirizzo: Regione Perno, 132, 14033 Castell'Alfero AT
9. **Castello di Calliano Monferrato** — Calliano Monferrato
   - slug: `castello-di-calliano-monferrato-calliano-monferrato`
   - indirizzo: Via Galliano, 21, 14031 Calliano Monferrato AT
10. **La Casa di Alice** — Calliano Monferrato
   - slug: `la-casa-di-alice-calliano-monferrato`
   - indirizzo: Via Cesare Battisti, 21, 14020 Villa San Secondo AT
11. **Relais San Desiderio** — Calliano Monferrato
   - slug: `relais-san-desiderio-calliano-monferrato`
   - indirizzo: Via Bricco, 5, 14031 San Desiderio AT
12. **Relais Sant'Uffizio** — Calliano Monferrato
   - slug: `relais-sant-uffizio-calliano-monferrato`
   - indirizzo: Strada Sant'Uffizio, 1, 14030 Cioccaro, Penango AT
13. **Tenuta del Barone** — Calliano Monferrato
   - slug: `tenuta-del-barone-calliano-monferrato`
   - indirizzo: Via Barone, 18, 14030 Penango AT
14. **B&B Casa de Flumeri** — Calolziocorte
   - slug: `b-b-casa-de-flumeri-calolziocorte`
   - indirizzo: Via Innominato, 10/E, 23801 Calolziocorte LC
15. **Hotel San Gerolamo** — Calolziocorte
   - slug: `hotel-san-gerolamo-calolziocorte`
   - indirizzo: Via S. Gerolamo, 56, 23808 Vercurago LC
16. **la dimora dei due laghi** — Calolziocorte
   - slug: `la-dimora-dei-due-laghi-calolziocorte`
   - indirizzo: Via Portichetti, snc, 23801 Calolziocorte LC
17. **Osteria Marascia** — Calolziocorte
   - slug: `osteria-marascia-calolziocorte`
   - indirizzo: Via Padri Serviti, 2, 23801 Calolziocorte LC
18. **Picobello Zimmer e Atelier - Foresteria** — Calolziocorte
   - slug: `picobello-zimmer-e-atelier-foresteria-calolziocorte`
   - indirizzo: Via Don Achille Bolis, 4, 23801 Calolziocorte LC
19. **Agorà Vulcano B&B** — Calopezzati
   - slug: `agora-vulcano-b-b-calopezzati`
   - indirizzo: Via Risorgimento, 10, 87060 Mirto CS
20. **Albergo Garden** — Calopezzati
   - slug: `albergo-garden-calopezzati`
   - indirizzo: Via Nazionale, 135, 87060 Mandatoriccio CS
21. **Albergo Hotel Parrilla** — Calopezzati
   - slug: `albergo-hotel-parrilla-calopezzati`
   - indirizzo: Via Nazionale, 12A, 87062 Cariati CS
22. **B&B Daniela** — Calopezzati
   - slug: `b-b-daniela-calopezzati`
   - indirizzo: Via Stabilimento, 96, 87062 Cariati CS
23. **b&b Gattopardo** — Calopezzati
   - slug: `b-b-gattopardo-calopezzati`
   - indirizzo: Via Cristoforo Colombo, 168, 87062 Cariati Marina CS
24. **Ci Thorno Hotel** — Calopezzati
   - slug: `ci-thorno-hotel-calopezzati`
   - indirizzo: Via Piave, 26, 87060 Crosia CS
25. **Convento dei Riformati** — Calopezzati
   - slug: `convento-dei-riformati-calopezzati`
   - indirizzo: via san Marco, contrada sant'Isidoro, 1, 87060 Calopezzati CS
26. **Grand Hostel Calabria** — Calopezzati
   - slug: `grand-hostel-calabria-calopezzati`
   - indirizzo: Via Amalfi, 18, 87060 Pietrapaola CS
27. **Hostels Euro Mediterraneo** — Calopezzati
   - slug: `hostels-euro-mediterraneo-calopezzati`
   - indirizzo: Via Luigi Minnicelli, 16, 87064 Rossano CS
28. **Hotel Al Rustico** — Calopezzati
   - slug: `hotel-al-rustico-calopezzati`
   - indirizzo: CORSO FIUMARELLA, S.da Statale 106 Jonica, 16, 87060 Crosia CS
29. **Hotel Anthony Mirto Crosia - Ristorante i sapori del mare** — Calopezzati
   - slug: `hotel-anthony-mirto-crosia-ristorante-i-sapori-d-calopezzati`
   - indirizzo: Via Nazionale, 169, 87060 Mirto CS
30. **Hotel Costa dello Ionio** — Calopezzati
   - slug: `hotel-costa-dello-ionio-calopezzati`
   - indirizzo: Via Venezia, 87060 Mandatoriccio CS
31. **Hotel Maria Grazia** — Calopezzati
   - slug: `hotel-maria-grazia-calopezzati`
   - indirizzo: Viale della Libertà, 16, 87060 Calopezzati CS
32. **Hotel Playa** — Calopezzati
   - slug: `hotel-playa-calopezzati`
   - indirizzo: Via Venezia, 87060 Marina di Mandatoriccio CS
33. **Hotel Ristorante Pizzeria Costa Azzurra a Pietrapaola** — Calopezzati
   - slug: `hotel-ristorante-pizzeria-costa-azzurra-a-pietra-calopezzati`
   - indirizzo: Via Firenze, 87060 Pietrapaola CS
34. **Hotel San Nilo** — Calopezzati
   - slug: `hotel-san-nilo-calopezzati`
   - indirizzo: Dichiesa, Via S. Nilo, 8, 87064 Rossano CS
35. **Hotel Scigliano** — Calopezzati
   - slug: `hotel-scigliano-calopezzati`
   - indirizzo: Viale Regina Margherita, 257, 87064 Corigliano-Rossano CS