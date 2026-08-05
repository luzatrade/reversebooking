# Blocco 389/500 — 35 strutture senza descrizione IT

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

1. **Hotel Villa Nettuno** — Campo nell'Elba
   - slug: `hotel-villa-nettuno-campo-nell-elba`
   - indirizzo: Viale degli Etruschi, 652, 57034 Marina di Campo LI
2. **Locanda Dell'Amicizia Di Pierulivo Enrica & C. S.A.S.** — Campo nell'Elba
   - slug: `locanda-dell-amicizia-di-pierulivo-enrica-c-s-a-campo-nell-elba`
   - indirizzo: 57034 Vallebuia LI, Italia
3. **PFA Hotel Ginevra - Isola d'Elba** — Campo nell'Elba
   - slug: `pfa-hotel-ginevra-isola-d-elba-campo-nell-elba`
   - indirizzo: Via A. de Gasperi, 63, 57038 Cavo LI
4. **Piccolo Hotel Versilia** — Campo nell'Elba
   - slug: `piccolo-hotel-versilia-campo-nell-elba`
   - indirizzo: Via dell'Acquedotto, 1580, 57034 Marina di Campo LI
5. **AGRIALLOGGI LAPALAZZINA** — Campo San Martino
   - slug: `agrialloggi-lapalazzina-campo-san-martino`
   - indirizzo: Via Vittorio Veneto, 72, 35010 Curtarolo PD
6. **Agriturismo con alloggi Honey Farm** — Campo San Martino
   - slug: `agriturismo-con-alloggi-honey-farm-campo-san-martino`
   - indirizzo: Via dell'Orto, 52b, 35016 Piazzola sul Brenta PD
7. **Agriturismo Sartor San Giorgio in Bosco** — Campo San Martino
   - slug: `agriturismo-sartor-san-giorgio-in-bosco-campo-san-martino`
   - indirizzo: Via Calandrine, 2320, 35010 San Giorgio in Bosco PD
8. **B&B Maison Parco del Brenta Curtarolo** — Campo San Martino
   - slug: `b-b-maison-parco-del-brenta-curtarolo-campo-san-martino`
   - indirizzo: di Curtarolo, Via Monte Pasubio, 41, 35010 Pieve PD
9. **Camerini Guest House** — Campo San Martino
   - slug: `camerini-guest-house-campo-san-martino`
   - indirizzo: Via XX Settembre, 71, 35016 Piazzola sul Brenta PD
10. **Hotel Alle Scuole** — Campo San Martino
   - slug: `hotel-alle-scuole-campo-san-martino`
   - indirizzo: Via Garavello Don Ernesto, 2, 35010 Santa Maria di Non PD
11. **Hotel Ariston** — Campo San Martino
   - slug: `hotel-ariston-campo-san-martino`
   - indirizzo: Via Antoniana, 230, 35011 Campodarsego PD
12. **Hotel Bracco** — Campo San Martino
   - slug: `hotel-bracco-campo-san-martino`
   - indirizzo: Via Loreggiola, 115, 35010 Loreggiola PD
13. **Hotel-Ristorante-Pizzeria "al Leone"** — Campo San Martino
   - slug: `hotel-ristorante-pizzeria-al-leone-campo-san-martino`
   - indirizzo: Via Roma, 47, 35010 Villa del Conte PD
14. **La Brenta Vecchia Ristorante & Alloggi** — Campo San Martino
   - slug: `la-brenta-vecchia-ristorante-alloggi-campo-san-martino`
   - indirizzo: Via Maresana, 22 /A, 35010 Vigodarzere PD
15. **La Penisola Agriturismo** — Campo San Martino
   - slug: `la-penisola-agriturismo-campo-san-martino`
   - indirizzo: Via Kennedy, 19, 35010 Campo San Martino PD
16. **AhriaPura Apartments** — Campo Tures/Sand in Taufers
   - slug: `ahriapura-apartments-campo-tures-sand-in-taufers`
   - indirizzo: Michelreiserweg, 5, 39032 Campo Tures BZ
17. **Albergo Trojer** — Campo Tures/Sand in Taufers
   - slug: `albergo-trojer-campo-tures-sand-in-taufers`
   - indirizzo: Via S. Maurizio, 9, 39032 Campo Tures BZ
18. **Alphotel Stocker** — Campo Tures/Sand in Taufers
   - slug: `alphotel-stocker-campo-tures-sand-in-taufers`
   - indirizzo: Via Wiesenhof, 41, 39032 Campo Tures BZ
19. **Apparthotel Central** — Campo Tures/Sand in Taufers
   - slug: `apparthotel-central-campo-tures-sand-in-taufers`
   - indirizzo: Josef Jungmann Straße, 1, 39032 Campo Tures BZ
20. **B&B Hotel Heini** — Campo Tures/Sand in Taufers
   - slug: `b-b-hotel-heini-campo-tures-sand-in-taufers`
   - indirizzo: Vicolo Bayer, 16, 39032 Campo Tures BZ
21. **Bergheimat By Alfred** — Campo Tures/Sand in Taufers
   - slug: `bergheimat-by-alfred-campo-tures-sand-in-taufers`
   - indirizzo: Via Obergasse, 21, 39032 Acereto BZ
22. **Feldmilla Design Hotel - Wellness & SPA** — Campo Tures/Sand in Taufers
   - slug: `feldmilla-design-hotel-wellness-spa-campo-tures-sand-in-taufers`
   - indirizzo: Via al Castello, 9, 39032 Campo Tures BZ
23. **Garberhof** — Campo Tures/Sand in Taufers
   - slug: `garberhof-campo-tures-sand-in-taufers`
   - indirizzo: Via Winkel, 60, 39032 Campo Tures BZ
24. **Garni Bergfried** — Campo Tures/Sand in Taufers
   - slug: `garni-bergfried-campo-tures-sand-in-taufers`
   - indirizzo: Vicolo Bayer, 32, 39032 Campo Tures BZ
25. **Garni Zimmerhofer** — Campo Tures/Sand in Taufers
   - slug: `garni-zimmerhofer-campo-tures-sand-in-taufers`
   - indirizzo: Via Dottor Daimer, 56, 39032 Campo Tures BZ
26. **Hotel Alte Mühle** — Campo Tures/Sand in Taufers
   - slug: `hotel-alte-muhle-campo-tures-sand-in-taufers`
   - indirizzo: Via S. Maurizio, 1/2, 39032 Campo Tures BZ
27. **Hotel Drumlerhof** — Campo Tures/Sand in Taufers
   - slug: `hotel-drumlerhof-campo-tures-sand-in-taufers`
   - indirizzo: via del municipio, 6, 39032 Campo Tures BZ
28. **Hotel Hellweger** — Campo Tures/Sand in Taufers
   - slug: `hotel-hellweger-campo-tures-sand-in-taufers`
   - indirizzo: Via Hugo Von Taufers, 22, 39032 Campo Tures BZ
29. **Hotel Mirabell** — Campo Tures/Sand in Taufers
   - slug: `hotel-mirabell-campo-tures-sand-in-taufers`
   - indirizzo: Via Hugo Von Taufers, 44, 39032 Campo Tures BZ
30. **Hotel Residence Alpinum** — Campo Tures/Sand in Taufers
   - slug: `hotel-residence-alpinum-campo-tures-sand-in-taufers`
   - indirizzo: Josef Jungmann Straße, 12, 39032 Campo Tures BZ
31. **Hotel Restaurant Spangla** — Campo Tures/Sand in Taufers
   - slug: `hotel-restaurant-spangla-campo-tures-sand-in-taufers`
   - indirizzo: Via Aurina, Ahrntalerstrasse, 23, 39032 Campo Tures BZ
32. **Hotel Stifter** — Campo Tures/Sand in Taufers
   - slug: `hotel-stifter-campo-tures-sand-in-taufers`
   - indirizzo: Via Valle Aurina, 16, 39030 Lutago BZ
33. **Residence Margareth** — Campo Tures/Sand in Taufers
   - slug: `residence-margareth-campo-tures-sand-in-taufers`
   - indirizzo: Josef Jungmann Straße, 4, 39032 Campo Tures BZ
34. **Residence Taufers** — Campo Tures/Sand in Taufers
   - slug: `residence-taufers-campo-tures-sand-in-taufers`
   - indirizzo: Via Selva dei Molini, 1, 39032 Molini di Tures BZ
35. **Residence Villa Calluna** — Campo Tures/Sand in Taufers
   - slug: `residence-villa-calluna-campo-tures-sand-in-taufers`
   - indirizzo: via Dr. Daimer, Str. 23, 39032 Sand in Taufers, Autonome Provinz Bozen - Südtirol