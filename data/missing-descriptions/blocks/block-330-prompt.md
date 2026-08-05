# Blocco 330/500 — 35 strutture senza descrizione IT

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

1. **Magico Appartamenti Scafa** — Brolo
   - slug: `magico-appartamenti-scafa-brolo`
   - indirizzo: Magico Appartamenti Scafa Ss113 Km 101 accanto casello ANAS, 98071 Capo d'Orlando ME
2. **Michelangelo's House** — Brolo
   - slug: `michelangelo-s-house-brolo`
   - indirizzo: Contrada Cicà, 42, 98063 Gioiosa Marea ME
3. **Residence Bianca Lancia Brolo** — Brolo
   - slug: `residence-bianca-lancia-brolo-brolo`
   - indirizzo: Via Onorevole A. Germanà, 27, 98061 Brolo ME
4. **RIVIERA DEL SOLE** — Brolo
   - slug: `riviera-del-sole-brolo`
   - indirizzo: Via del Mare, 39/A, 98060 Piraino ME
5. **Seaside Beach Hotel** — Brolo
   - slug: `seaside-beach-hotel-brolo`
   - indirizzo: Via Andrea Doria, 63, 98071 Capo d'Orlando ME
6. **Agricamping La Meyra** — Brondello
   - slug: `agricamping-la-meyra-brondello`
   - indirizzo: Meira Gian Flip 19, 44.5187414122097, 7.375720693055697, 12020 Lemma CN
7. **Agriturismo Agli Ulivi** — Brondello
   - slug: `agriturismo-agli-ulivi-brondello`
   - indirizzo: Via S. Bernardino, 46, 12037 Saluzzo CN
8. **Albergo Persico** — Brondello
   - slug: `albergo-persico-brondello`
   - indirizzo: Vicolo Mercati, 10, 12037 Saluzzo CN
9. **B&B Cai cai Saluzzo** — Brondello
   - slug: `b-b-cai-cai-saluzzo-brondello`
   - indirizzo: Via Clemente Panero, 8, 12037 Saluzzo CN
10. **B&B L'Albore** — Brondello
   - slug: `b-b-l-albore-brondello`
   - indirizzo: Via Ceretto, 68, 12024 Costigliole Saluzzo CN
11. **B&B La Torre** — Brondello
   - slug: `b-b-la-torre-brondello`
   - indirizzo: Via Villa, 35/A, 12030 Brondello CN
12. **B&B Marietta** — Brondello
   - slug: `b-b-marietta-brondello`
   - indirizzo: Via Vecchia Castellar, 2, 12020 Melle CN
13. **Casa Bart, Bike & Outdoor Hospitality** — Brondello
   - slug: `casa-bart-bike-outdoor-hospitality-brondello`
   - indirizzo: Via Giovanni Cancan, 23, 12020 Villar San Costanzo CN
14. **Hotel Ceretto** — Brondello
   - slug: `hotel-ceretto-brondello`
   - indirizzo: Str. del Ceretto, 2, 12022 Busca CN
15. **IO SONO FIOR DI LOTO - B&B** — Brondello
   - slug: `io-sono-fior-di-loto-b-b-brondello`
   - indirizzo: Via dei Gossi, 21, 12022 San Chiaffredo CN
16. **Locanda Dl'Angel** — Brondello
   - slug: `locanda-dl-angel-brondello`
   - indirizzo: Via Pramallé, 26, 12020 Villar San Costanzo CN
17. **Locanda Reloup** — Brondello
   - slug: `locanda-reloup-brondello`
   - indirizzo: Piazza S. Massimo, 13, 12020 Isasca CN
18. **Ostello Antagonisti** — Brondello
   - slug: `ostello-antagonisti-brondello`
   - indirizzo: Via Carrera, 3/a, 12020 Melle CN
19. **Ristorante Hotel Porta Santa Maria** — Brondello
   - slug: `ristorante-hotel-porta-santa-maria-brondello`
   - indirizzo: Via Roberto d'Azeglio, 37, 12022 Busca CN
20. **Segnavento-rooms and suites | B&b Manta** — Brondello
   - slug: `segnavento-rooms-and-suites-b-b-manta-brondello`
   - indirizzo: V. Collina, 8, 12030 Manta CN
21. **Affittacamere Daniela** — Broni
   - slug: `affittacamere-daniela-broni`
   - indirizzo: Via Colombarone, 36, 27044 Stradella PV
22. **Cascina Scova Resort** — Broni
   - slug: `cascina-scova-resort-broni`
   - indirizzo: Via Vallone, 18, 27100 Pavia PV
23. **Hotel Giannino** — Broni
   - slug: `hotel-giannino-broni`
   - indirizzo: Via F .Turati, 18, 27028 San Martino Siccomario PV
24. **Agriturismo SOLE DI SICILIA** — Bronte
   - slug: `agriturismo-sole-di-sicilia-bronte`
   - indirizzo: C.da Calderara, s.n, 95036 Randazzo CT
25. **Albergo Diffuso Borgo Santa Caterina "Vintage"** — Bronte
   - slug: `albergo-diffuso-borgo-santa-caterina-vintage-bronte`
   - indirizzo: Via Archimede, 37, 95012 Castiglione di Sicilia CT
26. **Antico Portale** — Bronte
   - slug: `antico-portale-bronte`
   - indirizzo: Via Concezione, 12, 94017 Regalbuto EN
27. **B&B Al Vulcanetto** — Bronte
   - slug: `b-b-al-vulcanetto-bronte`
   - indirizzo: Via Madre Chiesa, 14, 98030 Moio Alcantara ME
28. **B&B BluViRo** — Bronte
   - slug: `b-b-bluviro-bronte`
   - indirizzo: Via Ustica, 10, 95034 Bronte CT
29. **B&B Good Morning Etna** — Bronte
   - slug: `b-b-good-morning-etna-bronte`
   - indirizzo: Via Giudice Falcone, 29, 95034 Bronte CT
30. **B&B Planet Rooms** — Bronte
   - slug: `b-b-planet-rooms-bronte`
   - indirizzo: Via Roma, 30, 95034 Bronte CT
31. **B&b Vista Etna** — Bronte
   - slug: `b-b-vista-etna-bronte`
   - indirizzo: Via Galliano, 58, 95036 Randazzo CT
32. **Fronte Etna** — Bronte
   - slug: `fronte-etna-bronte`
   - indirizzo: Contrada Borgonovo, 95034 Bronte CT
33. **I Cugi House** — Bronte
   - slug: `i-cugi-house-bronte`
   - indirizzo: Via Messina, 207, 95034 Bronte CT
34. **RELAIS VILLA MIRAGLIA** — Bronte
   - slug: `relais-villa-miraglia-bronte`
   - indirizzo: SS289, 22, 98033 Cesarò ME
35. **Albergo Locanda Al Drago** — Bronzolo/Branzoll
   - slug: `albergo-locanda-al-drago-bronzolo-branzoll`
   - indirizzo: Via Chiesa Vecchia, 15, 39051 Bronzolo BZ