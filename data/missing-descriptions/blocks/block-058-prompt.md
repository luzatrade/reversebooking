# Blocco 58/500 — 35 strutture senza descrizione IT

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

1. **Hotel La Villa Sure Hotel Collection by Best Western** — Albiano d'Ivrea
   - slug: `hotel-la-villa-sure-hotel-collection-by-best-wes-albiano-d-ivrea`
   - indirizzo: Via Torino, 334, 10015 Ivrea TO
2. **In-Famiglia** — Albiano d'Ivrea
   - slug: `in-famiglia-albiano-d-ivrea`
   - indirizzo: Via Chiaverano, 16, 10010 Cascinette d'Ivrea TO
3. **KaRe Hotel Ivrea** — Albiano d'Ivrea
   - slug: `kare-hotel-ivrea-albiano-d-ivrea`
   - indirizzo: Via Circonvallazione, 4/F, 10010 Banchette TO
4. **La Fiorana Ivrea** — Albiano d'Ivrea
   - slug: `la-fiorana-ivrea-albiano-d-ivrea`
   - indirizzo: Via dei Chiodi, 1, 10015 Ivrea TO
5. **La Terrazza** — Albiano d'Ivrea
   - slug: `la-terrazza-albiano-d-ivrea`
   - indirizzo: Piazza Caduti, 10030 Vestignè TO
6. **Sei da Noi - Affittacamere** — Albiano d'Ivrea
   - slug: `sei-da-noi-affittacamere-albiano-d-ivrea`
   - indirizzo: Via Francesco Ruffini, 17, 10015 Ivrea TO
7. **Villa d'Azeglio** — Albiano d'Ivrea
   - slug: `villa-d-azeglio-albiano-d-ivrea`
   - indirizzo: Via Azeglio, 17, 10010 Albiano d'Ivrea TO
8. **Villa San Martino B&B** — Albiano d'Ivrea
   - slug: `villa-san-martino-b-b-albiano-d-ivrea`
   - indirizzo: Str. Conversa, 19/1, 10010 Albiano d'Ivrea TO
9. **AS Hotel Dei Giovi** — Albiate
   - slug: `as-hotel-dei-giovi-albiate`
   - indirizzo: Via A. Manzoni, 99/bis, 20811 Cesano Maderno MB
10. **AS Hotel Limbiate Fiera** — Albiate
   - slug: `as-hotel-limbiate-fiera-albiate`
   - indirizzo: Corso Como, 52, 20812 Limbiate MB
11. **B&B Brianza Overview CIN IT108011C1WTGGTO9M** — Albiate
   - slug: `b-b-brianza-overview-cin-it108011c1wtggto9m-albiate`
   - indirizzo: Via E. Fermi, 31 A, 20836 Briosco MB
12. **B&B HOTEL Habitat Giussano** — Albiate
   - slug: `b-b-hotel-habitat-giussano-albiate`
   - indirizzo: Viale Como, 2, 20833 Giussano MB
13. **B&B HOTEL Milano Monza** — Albiate
   - slug: `b-b-hotel-milano-monza-albiate`
   - indirizzo: Via Lario, 19, 20900 Monza MB
14. **B&B Il Cibreino** — Albiate
   - slug: `b-b-il-cibreino-albiate`
   - indirizzo: Via S. Francesco d'Assisi, 14/16, 20845 Sovico MB
15. **B&B LE DUNE** — Albiate
   - slug: `b-b-le-dune-albiate`
   - indirizzo: Vicolo Alessandro Manzoni, 9/a, 20845 Sovico MB
16. **Beija Flor b&b** — Albiate
   - slug: `beija-flor-b-b-albiate`
   - indirizzo: Via XXIV Maggio, 39, 20843 Verano Brianza MB
17. **Carro Rooms** — Albiate
   - slug: `carro-rooms-albiate`
   - indirizzo: Piazza Carrobiolo, 6, 20900 Monza MB
18. **Casa la Ringhera** — Albiate
   - slug: `casa-la-ringhera-albiate`
   - indirizzo: Via Bernardino Luini, 2/B, 20811 Cesano Maderno MB
19. **Hotel Cora** — Albiate
   - slug: `hotel-cora-albiate`
   - indirizzo: Via della Valle, 75, 20841 Carate Brianza MB
20. **Hotel Fossati Di Fossati Antonio Snc** — Albiate
   - slug: `hotel-fossati-di-fossati-antonio-snc-albiate`
   - indirizzo: Via Conte Paolo Taverna, 20, 20844 Triuggio MB
21. **Hotel Residence Aurora** — Albiate
   - slug: `hotel-residence-aurora-albiate`
   - indirizzo: Via S. Martino, 24, 20037 Paderno Dugnano MI
22. **Hotel Selide** — Albiate
   - slug: `hotel-selide-albiate`
   - indirizzo: Via Giacomo Matteotti, 1, 20832 Desio MB
23. **Il giardino di Pietro** — Albiate
   - slug: `il-giardino-di-pietro-albiate`
   - indirizzo: Via Sele, 18, 20900 Monza MB
24. **isidoro affitta camere carugo** — Albiate
   - slug: `isidoro-affitta-camere-carugo-albiate`
   - indirizzo: Cascina Sant' Isidoro, 34/36, 22060 Carugo CO
25. **Residence Tre Pini** — Albiate
   - slug: `residence-tre-pini-albiate`
   - indirizzo: Via Adige ang, Via Tagliamento, 1/3, 20841 Carate Brianza MB
26. **Smart Hotel King, by R Collection Hotels** — Albiate
   - slug: `smart-hotel-king-by-r-collection-hotels-albiate`
   - indirizzo: Via Varese, 5, 20814 Varedo MB
27. **Affittacamere Delle Rose** — Albidona
   - slug: `affittacamere-delle-rose-albidona`
   - indirizzo: Via Crotone, 22, 87070 Roseto Capo Spulico CS
28. **Albergo Hotel Stellato** — Albidona
   - slug: `albergo-hotel-stellato-albidona`
   - indirizzo: Via Mandrale, 7, 87075 Trebisacce CS
29. **B&B Il sogno di Calipso** — Albidona
   - slug: `b-b-il-sogno-di-calipso-albidona`
   - indirizzo: Via Capri, 1, 87071 Marina di Amendolara CS
30. **B&B Il Vecchio Pescatore** — Albidona
   - slug: `b-b-il-vecchio-pescatore-albidona`
   - indirizzo: Via Lampedusa, 87071 Marina di Amendolara CS
31. **B&B Mare E Monti** — Albidona
   - slug: `b-b-mare-e-monti-albidona`
   - indirizzo: Via Filippo Turati, 6, 87070 Albidona CS
32. **B&B Sant'Elia** — Albidona
   - slug: `b-b-sant-elia-albidona`
   - indirizzo: Via Dante Alighieri, 43a, 87070 Alessandria del Carretto CS
33. **Hotel Celestina** — Albidona
   - slug: `hotel-celestina-albidona`
   - indirizzo: Via San Michele, 45, 87076 Villapiana CS
34. **Hotel Corallo** — Albidona
   - slug: `hotel-corallo-albidona`
   - indirizzo: Via Nazionale SS. 92, 104, 87076 Villapiana CS
35. **Hotel Palace Miramare** — Albidona
   - slug: `hotel-palace-miramare-albidona`
   - indirizzo: Viale Magna Grecia, 87075 Trebisacce CS