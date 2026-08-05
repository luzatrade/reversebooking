# Blocco 379/500 — 35 strutture senza descrizione IT

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

1. **Colombaia Anibaldi agriturismo** — Camerino
   - slug: `colombaia-anibaldi-agriturismo-camerino`
   - indirizzo: Località Biagi, 23, 62027 San Severino Marche MC
2. **Country House Le Calvie** — Camerino
   - slug: `country-house-le-calvie-camerino`
   - indirizzo: Loc. Calvie, 2, 62032 Camerino MC
3. **Country luxury lodge** — Camerino
   - slug: `country-luxury-lodge-camerino`
   - indirizzo: Frazione Sentino, 2, 62032 Sentino MC
4. **Hotel della Loggia** — Camerino
   - slug: `hotel-della-loggia-camerino`
   - indirizzo: Via S. Maria, 3/A, 62024 Matelica MC
5. **Hotel Fioriti** — Camerino
   - slug: `hotel-fioriti-camerino`
   - indirizzo: Piazza Giuseppe Garibaldi, 12, 62024 Matelica MC
6. **Hotel Ristorante Da Faustina | Sefro** — Camerino
   - slug: `hotel-ristorante-da-faustina-sefro-camerino`
   - indirizzo: Via Roma, 3, 62025 Sefro MC
7. **La Casa di Elena** — Camerino
   - slug: `la-casa-di-elena-camerino`
   - indirizzo: Località Palentuccio, 1, 62032 Camerino MC
8. **Relais Villa Fornari** — Camerino
   - slug: `relais-villa-fornari-camerino`
   - indirizzo: Località Calvie, 1/2, 62032 Camerino MC
9. **Villa Collio** — Camerino
   - slug: `villa-collio-camerino`
   - indirizzo: Traversa Settempedana, 91, 62027 San Severino Marche MC
10. **Agriturismo Capocanto** — Camerota
   - slug: `agriturismo-capocanto-camerota`
   - indirizzo: Località Canto, 84059 Camerota SA
11. **Albergo Marla** — Camerota
   - slug: `albergo-marla-camerota`
   - indirizzo: Via Bolivar, 128, 84059 Marina di Camerota SA
12. **Albergo Riccio – Hotel a Marina di Camerota** — Camerota
   - slug: `albergo-riccio-hotel-a-marina-di-camerota-camerota`
   - indirizzo: Lungomare Trieste, 93, 84059 Marina SA
13. **Albergo Santa Caterina** — Camerota
   - slug: `albergo-santa-caterina-camerota`
   - indirizzo: Via Indipendenza, 53, 84064 Palinuro SA
14. **B&b VerdeMare Camerota** — Camerota
   - slug: `b-b-verdemare-camerota-camerota`
   - indirizzo: Via Giardino, 15, 84059 Camerota SA
15. **Cilento Dreams Village** — Camerota
   - slug: `cilento-dreams-village-camerota`
   - indirizzo: Via Sirene III, SNC, 84059 Camerota SA
16. **CinqueStelle Albergo del centro storico** — Camerota
   - slug: `cinquestelle-albergo-del-centro-storico-camerota`
   - indirizzo: Via S. Maria, 24, 84064 Palinuro SA
17. **Grand Hotel San Pietro** — Camerota
   - slug: `grand-hotel-san-pietro-camerota`
   - indirizzo: Corso Carlo Pisacane, 171, 84051 Centola SA
18. **Hotel Baia delle Sirene** — Camerota
   - slug: `hotel-baia-delle-sirene-camerota`
   - indirizzo: Località Sirene, 84059 Marina di Camerota SA
19. **Hotel Calanca** — Camerota
   - slug: `hotel-calanca-camerota`
   - indirizzo: Via L. Mazzeo, 18, 84059 Marina di Camerota SA
20. **Hotel Delfino – Hotel a Marina di Camerota** — Camerota
   - slug: `hotel-delfino-hotel-a-marina-di-camerota-camerota`
   - indirizzo: Via Bolivar, 55, 84059 Marina di Camerota SA
21. **Hotel La Torre** — Camerota
   - slug: `hotel-la-torre-camerota`
   - indirizzo: Via Porto, 5, 84051 Palinuro SA
22. **Hotel Santa Rosalia** — Camerota
   - slug: `hotel-santa-rosalia-camerota`
   - indirizzo: Via Sirene, 7, 84059 Marina di Camerota SA
23. **Hotel Seven Residence** — Camerota
   - slug: `hotel-seven-residence-camerota`
   - indirizzo: Via Piana, SR562, 84051 Centola SA
24. **Il Sogno di Teresa** — Camerota
   - slug: `il-sogno-di-teresa-camerota`
   - indirizzo: Via S. Vito, SNC, 84059 Camerota SA
25. **Park Hotel Cilento** — Camerota
   - slug: `park-hotel-cilento-camerota`
   - indirizzo: Via Sirene, 32, 84059 Marina di Camerota SA
26. **Relais Pian delle Starze** — Camerota
   - slug: `relais-pian-delle-starze-camerota`
   - indirizzo: Contrada Monte di Luna, Località Starza, snc, 84059 Marina di Camerota SA
27. **Villaggio Blue Marine - Mini Parco Acquatico** — Camerota
   - slug: `villaggio-blue-marine-mini-parco-acquatico-camerota`
   - indirizzo: Via Sirene, 44, 84059 Marina di Camerota SA
28. **B&B Dimora dei Colli** — Camigliano
   - slug: `b-b-dimora-dei-colli-camigliano`
   - indirizzo: Via Contrada del Vecchio, 28, 81052 Pignataro Maggiore CE
29. **Oliveto ristorante pizzeria Bed and Breakfast** — Camigliano
   - slug: `oliveto-ristorante-pizzeria-bed-and-breakfast-camigliano`
   - indirizzo: Via S. Leucio, 30, 81100 Caserta CE
30. **Hotel Mediterraneo** — Camini
   - slug: `hotel-mediterraneo-camini`
   - indirizzo: Viale XXV Aprile, 5, 89047 Roccella Ionica RC
31. **Il Partenone Resort Hotel Bronzi Holidays Srl** — Camini
   - slug: `il-partenone-resort-hotel-bronzi-holidays-srl-camini`
   - indirizzo: Contrada Guardia, 1, 89040 Riace Marina RC
32. **L'orto degli Ulivi** — Camini
   - slug: `l-orto-degli-ulivi-camini`
   - indirizzo: Contrada Bordingiano snc, 89049 Stilo RC
33. **Ospitalità Diffusa Jungi Mundu** — Camini
   - slug: `ospitalita-diffusa-jungi-mundu-camini`
   - indirizzo: Via Fontana, 89040 Camini RC
34. **Park Hotel Roccella** — Camini
   - slug: `park-hotel-roccella-camini`
   - indirizzo: Contrada Lacchi, 30, 89047 Roccella Ionica RC
35. **Residence Regina** — Camini
   - slug: `residence-regina-camini`
   - indirizzo: Via Cristoforo Colombo, snc, 89046 Marina di Gioiosa Ionica RC