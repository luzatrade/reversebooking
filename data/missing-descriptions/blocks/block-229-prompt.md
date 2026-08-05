# Blocco 229/500 — 35 strutture senza descrizione IT

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

1. **Hotel Sagittario** — Barrali
   - slug: `hotel-sagittario-barrali`
   - indirizzo: Via Cottolengo, 3, 09026 San Sperate CA
2. **La Ghirielle** — Barrali
   - slug: `la-ghirielle-barrali`
   - indirizzo: Via Caduti di Nassirya, 24, 09020 Pimentel CA
3. **La Locanda d'Oro** — Barrali
   - slug: `la-locanda-d-oro-barrali`
   - indirizzo: Viale Europa, 99, 09023 Monastir CA
4. **4Flats in Orto Di Venanzio** — Barrea
   - slug: `4flats-in-orto-di-venanzio-barrea`
   - indirizzo: Via Sarentina, 126, 67030 Barrea AQ
5. **Albergo Ostello dagli Elfi** — Barrea
   - slug: `albergo-ostello-dagli-elfi-barrea`
   - indirizzo: Via Leonardo di Loreto, 54, 67030 Barrea AQ
6. **Art Hotel Villetta Barrea** — Barrea
   - slug: `art-hotel-villetta-barrea-barrea`
   - indirizzo: Via Scanno, 13, 67030 Villetta Barrea AQ
7. **B&B Il Rifugio Nel Parco** — Barrea
   - slug: `b-b-il-rifugio-nel-parco-barrea`
   - indirizzo: Via Benedetto Virgilio, 67030 Villetta Barrea AQ
8. **Bed & Breakfast "De Contra"** — Barrea
   - slug: `bed-breakfast-de-contra-barrea`
   - indirizzo: Via Benedetto Virgilio, 21, 67030 Villetta Barrea AQ
9. **Hotel Holidays** — Barrea
   - slug: `hotel-holidays-barrea`
   - indirizzo: Via Palombara, 3, 67030 Barrea AQ
10. **Hotel Valdirose** — Barrea
   - slug: `hotel-valdirose-barrea`
   - indirizzo: Via Della Vittoria, 51, 67030 Civitella Alfedena AQ
11. **Hotel Verdeneve** — Barrea
   - slug: `hotel-verdeneve-barrea`
   - indirizzo: S.R. 83 Marsicana, Km. 50, 67030 Opi AQ
12. **Vecchio Pescatore** — Barrea
   - slug: `vecchio-pescatore-barrea`
   - indirizzo: Via Benedetto Virgilio, 187, 67030 Villetta Barrea AQ
13. **Antiche Terme di Sardara** — Barumini
   - slug: `antiche-terme-di-sardara-barumini`
   - indirizzo: Loc. Santa Maria Aquas, SP4, 09030 Sardara VS
14. **B&B Su Strintu** — Barumini
   - slug: `b-b-su-strintu-barumini`
   - indirizzo: Via Sa Giara, 1, 09029 Tuili VS
15. **Bisus De Jara** — Barumini
   - slug: `bisus-de-jara-barumini`
   - indirizzo: 09029 Tuili VS
16. **Diecizero Inn Guesthouse** — Barumini
   - slug: `diecizero-inn-guesthouse-barumini`
   - indirizzo: Viale Umberto I, n°36, 09021 Barumini VS
17. **Hotel Cardellino** — Barumini
   - slug: `hotel-cardellino-barumini`
   - indirizzo: Via Dante Alighieri, 36, 09056 Isili CA
18. **Is Perdas Agriturismo, Rural Retreat & Spa** — Barumini
   - slug: `is-perdas-agriturismo-rural-retreat-spa-barumini`
   - indirizzo: Località Motti, 09055 Gergei CA
19. **Oasi Francescana Laconi** — Barumini
   - slug: `oasi-francescana-laconi-barumini`
   - indirizzo: Via Cuccuru de Monte, 09090 Laconi OR
20. **Sa Lolla Hotel Barumini** — Barumini
   - slug: `sa-lolla-hotel-barumini-barumini`
   - indirizzo: V Cavour, 49, 09021 Barumini VS
21. **Sa Mola Experience** — Barumini
   - slug: `sa-mola-experience-barumini`
   - indirizzo: Località Santa Lucia, 09052 Escolca CA
22. **Sardara Hotel di Ibba Silvano Sasc** — Barumini
   - slug: `sardara-hotel-di-ibba-silvano-sasc-barumini`
   - indirizzo: Via Cedrino, 5, 09030 Sardara VS
23. **Su Nuraxi Agriturismo-Hotel** — Barumini
   - slug: `su-nuraxi-agriturismo-hotel-barumini`
   - indirizzo: Viale Su Nuraxi, 6, 09021 Barumini VS
24. **daMan - rooms&breakfast** — Barzago
   - slug: `daman-rooms-breakfast-barzago`
   - indirizzo: Via Forte, 3, 23890 Barzago LC
25. **Hotel filippo** — Barzago
   - slug: `hotel-filippo-barzago`
   - indirizzo: Via M. Buonarroti, 3, 23845 Costa Masnaga LC
26. **Red House** — Barzago
   - slug: `red-house-barzago`
   - indirizzo: via antonio stoppani, 592, 23852 Garlate LC
27. **Albergo Canella** — Barzana
   - slug: `albergo-canella-barzana`
   - indirizzo: Via Gaetano Donizetti, 13, 24030 Fuipiano Valle Imagna BG
28. **Casa ATENA** — Barzana
   - slug: `casa-atena-barzana`
   - indirizzo: Via Sigismondi, 40B, 24018 Villa d'Almè BG
29. **Residenza del Golf** — Barzana
   - slug: `residenza-del-golf-barzana`
   - indirizzo: Via Alessandro Manzoni, 28, 24030 Barzana BG
30. **Roncola 2021** — Barzana
   - slug: `roncola-2021-barzana`
   - indirizzo: Via Portola, 27, 24030 Roncola BG
31. **Agriturismo La Bannera** — Barzan�
   - slug: `agriturismo-la-bannera-barzan`
   - indirizzo: Contrada la Bannera, 71020 Celle di San Vito FG
32. **Agriturismo La Fornace di Ilenia Giovanna Perego Castello di Brianza(LC)** — Barzan�
   - slug: `agriturismo-la-fornace-di-ilenia-giovanna-perego-barzan`
   - indirizzo: Via del Molino, 9, 23884 Castello di Brianza LC
33. **Agriturismo La Possa** — Barzan�
   - slug: `agriturismo-la-possa-barzan`
   - indirizzo: Via Privata Combi, 2, 23816 Concenedo LC
34. **Agriturismo La Tavola di Cherubino** — Barzan�
   - slug: `agriturismo-la-tavola-di-cherubino-barzan`
   - indirizzo: Via Giovenigo, 4, 23880 Casatenovo LC
35. **B&B da Marianna** — Barzan�
   - slug: `b-b-da-marianna-barzan`
   - indirizzo: Via Luigi Cadorna, 1, 23891 Barzanò LC