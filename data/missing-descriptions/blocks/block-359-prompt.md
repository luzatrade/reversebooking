# Blocco 359/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo La Cerra Tempio Pausania** — Calangianus
   - slug: `agriturismo-la-cerra-tempio-pausania-calangianus`
   - indirizzo: Strada Statale 133 di Palau, km 12/500, 07029 Tempio Pausania OT
2. **B&B La Jatta** — Calangianus
   - slug: `b-b-la-jatta-calangianus`
   - indirizzo: Via Padre Manzella, 10, 07023 Calangianus OT
3. **B&B Sole e Luna** — Calangianus
   - slug: `b-b-sole-e-luna-calangianus`
   - indirizzo: Via Paolo Careddu, 14, 07029 Tempio Pausania OT
4. **Hotel Relais Valkarana** — Calangianus
   - slug: `hotel-relais-valkarana-calangianus`
   - indirizzo: 07030 Sant'Antonio di Gallura OT
5. **Hotel Ristorante San Trano** — Calangianus
   - slug: `hotel-ristorante-san-trano-calangianus`
   - indirizzo: Via Caprera, 19, 07020 Luogosanto OT
6. **La Vecchia Posta B&b** — Calangianus
   - slug: `la-vecchia-posta-b-b-calangianus`
   - indirizzo: Via Unione, 14, 07023 Calangianus OT
7. **Tenuta Paltusa** — Calangianus
   - slug: `tenuta-paltusa-calangianus`
   - indirizzo: unnamed road, 07023 Calangianus OT
8. **Affittacamere Civico7 Reggio Calabria** — Calanna
   - slug: `affittacamere-civico7-reggio-calabria-calanna`
   - indirizzo: Piazza Rosario, 7, 89018 Villa San Giovanni RC
9. **Anoneto Bilardi Reggio Calabria** — Calanna
   - slug: `anoneto-bilardi-reggio-calabria-calanna`
   - indirizzo: Via Consortile, 55, 89135 Reggio di Calabria RC
10. **Anthea b&b** — Calanna
   - slug: `anthea-b-b-calanna`
   - indirizzo: Via Provinciale Vecchia Archi, 94, 89121 Reggio di Calabria RC
11. **Around the World** — Calanna
   - slug: `around-the-world-calanna`
   - indirizzo: Via Nazionale, 763, 89018 Villa San Giovanni RC
12. **B&B Acrobatic** — Calanna
   - slug: `b-b-acrobatic-calanna`
   - indirizzo: Via Roma, 12, 89018 Villa San Giovanni RC
13. **B&B Elegance** — Calanna
   - slug: `b-b-elegance-calanna`
   - indirizzo: Via Nazionale, 724, 89018 Villa San Giovanni RC
14. **B&B Lagiocosa** — Calanna
   - slug: `b-b-lagiocosa-calanna`
   - indirizzo: Via Nazionale Pentimele, 87, 89122 Reggio di Calabria RC
15. **B&B Smeralda** — Calanna
   - slug: `b-b-smeralda-calanna`
   - indirizzo: Via Stazione Vecchia, 26/Scala B, 89018 Villa San Giovanni RC
16. **B&B Vistamare** — Calanna
   - slug: `b-b-vistamare-calanna`
   - indirizzo: Via Nazionale, 674, 89018 Villa San Giovanni RC
17. **Baia Dello Stretto** — Calanna
   - slug: `baia-dello-stretto-calanna`
   - indirizzo: Lungomare Natale de Grazia, 267, 89135 Reggio di Calabria RC
18. **Bed e breakfast New Zarà Villa San Giovanni** — Calanna
   - slug: `bed-e-breakfast-new-zara-villa-san-giovanni-calanna`
   - indirizzo: Largo Salvatore Delfino, 4, 89018 Villa San Giovanni RC
19. **HOTEL IL DOLLARO** — Calanna
   - slug: `hotel-il-dollaro-calanna`
   - indirizzo: Viale Umberto Zanotti Bianco, 37, 89018 Villa San Giovanni RC
20. **Hotel Le Sirene - Scilla (RC)** — Calanna
   - slug: `hotel-le-sirene-scilla-rc-calanna`
   - indirizzo: Via Nazionale, 57, 89058 Scilla RC
21. **La Casa Dei Sogni** — Calanna
   - slug: `la-casa-dei-sogni-calanna`
   - indirizzo: Via Nazionale, 150 Gallico, 89135 Reggio Calabria RC
22. **Sea Side Home** — Calanna
   - slug: `sea-side-home-calanna`
   - indirizzo: Via Prof. Giuseppe Zagari, 44, 89058 Scilla RC
23. **Sun and Beach** — Calanna
   - slug: `sun-and-beach-calanna`
   - indirizzo: Via Nazionale, 144, 89135 Catona RC
24. **Sunset bistrot hotel le sirene** — Calanna
   - slug: `sunset-bistrot-hotel-le-sirene-calanna`
   - indirizzo: Via Cristoforo Colombo, 34, 89058 Scilla RC
25. **Xenion Guest House** — Calanna
   - slug: `xenion-guest-house-calanna`
   - indirizzo: Piazzale Delle Erbe, 16 A, 89018 Villa San Giovanni RC
26. **Agriturismo In Valle Sul Fiume** — Calasca-Castiglione
   - slug: `agriturismo-in-valle-sul-fiume-calasca-castiglione`
   - indirizzo: 3, Località Due Ponti, 28873, 28873 Calasca-Castiglione VB
27. **Casa Shanty** — Calasca-Castiglione
   - slug: `casa-shanty-calasca-castiglione`
   - indirizzo: Località Duiamen, 28873 Duiamen VB
28. **Antica Dimora Historic Building** — Calascibetta
   - slug: `antica-dimora-historic-building-calascibetta`
   - indirizzo: Via Sant'Agrippina, 12, 94100 Enna EN
29. **B&B Bdieci** — Calascibetta
   - slug: `b-b-bdieci-calascibetta`
   - indirizzo: Via Bari, 10, 94019 Valguarnera Caropepe EN
30. **Baglio San Pietro** — Calascibetta
   - slug: `baglio-san-pietro-calascibetta`
   - indirizzo: Via Panotto, 94014 Nicosia EN
31. **Calascibetta B&B LE DUE PALME** — Calascibetta
   - slug: `calascibetta-b-b-le-due-palme-calascibetta`
   - indirizzo: Via Roma, 45, 94010 Calascibetta EN
32. **Camere D'Artista** — Calascibetta
   - slug: `camere-d-artista-calascibetta`
   - indirizzo: Via Roma, 264, 94100 Enna EN
33. **Dimora del Duomo** — Calascibetta
   - slug: `dimora-del-duomo-calascibetta`
   - indirizzo: Piazza Duomo, 6, 94100 Enna EN
34. **Dimora Storica suiteinncentro** — Calascibetta
   - slug: `dimora-storica-suiteinncentro-calascibetta`
   - indirizzo: Via Roma, 316, 94100 Enna EN
35. **Federico II Palace Hotel** — Calascibetta
   - slug: `federico-ii-palace-hotel-calascibetta`
   - indirizzo: Str. Vicinale Salerno, 94100 Enna EN