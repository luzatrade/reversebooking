# Blocco 313/500 — 35 strutture senza descrizione IT

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

1. **Villa Appiani** — Bottanuco
   - slug: `villa-appiani-bottanuco`
   - indirizzo: Via Adriano Sala, 17, 20056 Trezzo sull'Adda MI
2. **Villa Cavour Ristorante & Hotel** — Bottanuco
   - slug: `villa-cavour-ristorante-hotel-bottanuco`
   - indirizzo: Via C. Cavour, 24040 Bottanuco BG
3. **B&B La Collina Botticino Bs** — Botticino
   - slug: `b-b-la-collina-botticino-bs-botticino`
   - indirizzo: Via Raffaello, 14, 25082 Botticino BS
4. **Hotel Leonessa Brescia** — Botticino
   - slug: `hotel-leonessa-brescia-botticino`
   - indirizzo: Via Sostegno, 7 A, 25124 Brescia BS
5. **La Taverna Del Gufo** — Bottidda
   - slug: `la-taverna-del-gufo-bottidda`
   - indirizzo: Via Giuseppe Mazzini, 08020 Sarule NU
6. **Pasu B&B** — Bottidda
   - slug: `pasu-b-b-bottidda`
   - indirizzo: Via Guglielmo Marconi, 24, 07010 Burgos SS
7. **Agriturismo di Petru i 'Ntoni** — Bova
   - slug: `agriturismo-di-petru-i-ntoni-bova`
   - indirizzo: VIA FONDO LUCARI, 89035 Bova Marina RC
8. **AGUNI' Agriturismo & Locanda** — Bova
   - slug: `aguni-agriturismo-locanda-bova`
   - indirizzo: Contrada Gunì, snc, 89030 Palizzi RC
9. **B&B Kalòs experience** — Bova
   - slug: `b-b-kalos-experience-bova`
   - indirizzo: Via XXIV Maggio, 46, 89033 Bova RC
10. **B&b La Ginestra** — Bova
   - slug: `b-b-la-ginestra-bova`
   - indirizzo: Via Rozzolino, 89033 Bova RC
11. **B&B Stin Platìa** — Bova
   - slug: `b-b-stin-platia-bova`
   - indirizzo: Piazza Roma, 20, 89033 Bova RC
12. **Bed and breakfast Vùa** — Bova
   - slug: `bed-and-breakfast-vua-bova`
   - indirizzo: Via S. Costantino, 23, 89033 Bova RC
13. **Hotel Albanuova** — Bova
   - slug: `hotel-albanuova-bova`
   - indirizzo: Via Marsala, 20, 89127 Reggio Calabria RC
14. **Hotel Centrale** — Bova
   - slug: `hotel-centrale-bova`
   - indirizzo: Piazza Mangeruca, 22, 89050 Gambarie RC
15. **Hotel Tito Serranò** — Bova
   - slug: `hotel-tito-serrano-bova`
   - indirizzo: Via Nazionale, 98, 89063 Melito di Porto Salvo RC
16. **Il Sestante B&B Condofuri RC** — Bova
   - slug: `il-sestante-b-b-condofuri-rc-bova`
   - indirizzo: Condofuri Marina Via Lungomare località Straci, 89030 Condofuri Marina RC
17. **Kalos B&B** — Bova
   - slug: `kalos-b-b-bova`
   - indirizzo: Via S. Costantino, 15, 89033 Bova RC
18. **La Casa Di Giorgia** — Bova
   - slug: `la-casa-di-giorgia-bova`
   - indirizzo: Via Placa, 150, 89133 Mosorrofa RC
19. **Agriturismo RioRosa** — Bova Marina
   - slug: `agriturismo-riorosa-bova-marina`
   - indirizzo: 89035 Bova Marina RC
20. **B&B Emmanuel** — Bova Marina
   - slug: `b-b-emmanuel-bova-marina`
   - indirizzo: Traversa Iv Maldariti, 29b, 89131 Reggio Calabria RC
21. **B&B Shalom** — Bova Marina
   - slug: `b-b-shalom-bova-marina`
   - indirizzo: S.da Statale 106 Jonica, 14, 89030 Condofuri Marina RC
22. **Camping Hotel La Zagara e Lido caribe** — Bova Marina
   - slug: `camping-hotel-la-zagara-e-lido-caribe-bova-marina`
   - indirizzo: Via Lungomare dei Mille, 148, 89063 Melito di Porto Salvo RC
23. **Didimos Resort** — Bova Marina
   - slug: `didimos-resort-bova-marina`
   - indirizzo: 37.938297, 15.708566, 89064 Saline Joniche RC
24. **Jammin Village** — Bova Marina
   - slug: `jammin-village-bova-marina`
   - indirizzo: Lungomare, 89030 Condofuri Marina RC
25. **Una Finestra Sul Mare** — Bova Marina
   - slug: `una-finestra-sul-mare-bova-marina`
   - indirizzo: Contrada Gruda, 5, 89038 Gruda RC
26. **Villa Orlando** — Bova Marina
   - slug: `villa-orlando-bova-marina`
   - indirizzo: Lardica-camilluso, 89035 Bova Marina RC
27. **AGRITURISMO L'IMPERO ROMANO** — Bovalino
   - slug: `agriturismo-l-impero-romano-bovalino`
   - indirizzo: Contrada Cavuria, 137, 89040 Cavuria RC
28. **Bed & Breakfast "La Casa di Anna"** — Bovalino
   - slug: `bed-breakfast-la-casa-di-anna-bovalino`
   - indirizzo: Via Antonino Campolo s.n.c. (ex Via Nuova Venti s.n, c, 89034 Bovalino RC
29. **maraneri rooms** — Bovalino
   - slug: `maraneri-rooms-bovalino`
   - indirizzo: Via Papa Giovanni XXIII, 13, 89034 Bovalino RC
30. **Villa Marina di Fondaco Vecchio** — Bovalino
   - slug: `villa-marina-di-fondaco-vecchio-bovalino`
   - indirizzo: Via Fondaco Vecchio, 22, 89034 Bovalino Marina RC
31. **B&B Baldì** — Bovegno
   - slug: `b-b-baldi-bovegno`
   - indirizzo: Via Provinciale, 121, 25070 Pertica Alta BS
32. **I Pini bed and breakfast** — Boves
   - slug: `i-pini-bed-and-breakfast-boves`
   - indirizzo: Vicolo Roncaia, 6, 12012 Boves CN
33. **La Terrazza** — Boves
   - slug: `la-terrazza-boves`
   - indirizzo: Via XXXI Dicembre, 6, 12012 Boves CN
34. **RICETTO SUITE DESIGN** — Boves
   - slug: `ricetto-suite-design-boves`
   - indirizzo: Via Ignazio Vian, 22, 12012 Boves CN
35. **Agriturismo Fior di Pesco** — Bovezzo
   - slug: `agriturismo-fior-di-pesco-bovezzo`
   - indirizzo: Via Pietro Capretti, 1, 25136 Brescia BS