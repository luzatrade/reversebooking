# Blocco 176/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Araba Fenice** — Aulla
   - slug: `affittacamere-araba-fenice-aulla`
   - indirizzo: Via Umberto Maddalena, 103, 19020 Vezzano Ligure SP
2. **B&B Aulla Torre di San Caprasio** — Aulla
   - slug: `b-b-aulla-torre-di-san-caprasio-aulla`
   - indirizzo: Piazza L. Corbani, 6, 54011 Aulla MS
3. **B&B Ca' di Megoto** — Aulla
   - slug: `b-b-ca-di-megoto-aulla`
   - indirizzo: Via Collina, 8, 54011 Aulla MS
4. **B&B Cadrecca Tra Terra Luna e Mare** — Aulla
   - slug: `b-b-cadrecca-tra-terra-luna-e-mare-aulla`
   - indirizzo: Via Cadrecca, 13, 54016 Monti MS
5. **B&B i Maseri** — Aulla
   - slug: `b-b-i-maseri-aulla`
   - indirizzo: Via dei Pini, 28, 54035 Fosdinovo SP
6. **B&B Il Tempo del Vento** — Aulla
   - slug: `b-b-il-tempo-del-vento-aulla`
   - indirizzo: Via Tresana, 5, 54012 Tresana MS
7. **B&B Tenuta CampoMagliano** — Aulla
   - slug: `b-b-tenuta-campomagliano-aulla`
   - indirizzo: Via Pratomedici, 13, 54011 Bigliolo MS
8. **Bed & Bike aulla** — Aulla
   - slug: `bed-bike-aulla-aulla`
   - indirizzo: Via Cerri, 71/73, 54011 Aulla MS
9. **Casa dolce casa** — Aulla
   - slug: `casa-dolce-casa-aulla`
   - indirizzo: Via I Maggio, 147, 54028 Villafranca in Lunigiana MS
10. **Da Gambin** — Aulla
   - slug: `da-gambin-aulla`
   - indirizzo: 190 ⛉ Via Provinciale Podenzana, 54010 Podenzana MS
11. **Dalla Gina e Paolino B&B** — Aulla
   - slug: `dalla-gina-e-paolino-b-b-aulla`
   - indirizzo: Via selva, 6, 54011 Aulla MS
12. **Demy Hotel** — Aulla
   - slug: `demy-hotel-aulla`
   - indirizzo: Via A. Salucci, 9, 54011 Aulla MS
13. **Gli Ulivi** — Aulla
   - slug: `gli-ulivi-aulla`
   - indirizzo: Via Carignano, 70, 54035 Fosdinovo MS
14. **La Bianca Fattoria** — Aulla
   - slug: `la-bianca-fattoria-aulla`
   - indirizzo: Via Turì, 120, 19038 Sarzana SP
15. **La Casa di Manù** — Aulla
   - slug: `la-casa-di-manu-aulla`
   - indirizzo: Via Stadano, 45, 54010 Aulla MS
16. **Locanda da Marì** — Aulla
   - slug: `locanda-da-mari-aulla`
   - indirizzo: Via Malacosta, 2B, 54011 Aulla MS
17. **Lunezia Resort** — Aulla
   - slug: `lunezia-resort-aulla`
   - indirizzo: 54011 Aulla MS
18. **Relais San Filippo in Sogaglia** — Aulla
   - slug: `relais-san-filippo-in-sogaglia-aulla`
   - indirizzo: Località Sogaglia, 6, 54026 Pieve MS
19. **Villa Borgo degli artisti boutique rooms** — Aulla
   - slug: `villa-borgo-degli-artisti-boutique-rooms-aulla`
   - indirizzo: Via Colletto, 12, 54011 Canova MS
20. **Albergo del Sole** — Aurano
   - slug: `albergo-del-sole-aurano`
   - indirizzo: Piazza Imbarcadero, 18, 21010 Porto Valtravaglia VA
21. **Albergo Il Vapore** — Aurano
   - slug: `albergo-il-vapore-aurano`
   - indirizzo: Via Nazionale, 90, 28824 Oggebbio VB
22. **Bed & Breakfast CA' DEL PITUR di Cicogna** — Aurano
   - slug: `bed-breakfast-ca-del-pitur-di-cicogna-aurano`
   - indirizzo: Via Borgonuovo, 1, 28801 Cicogna VB
23. **Hotel Sole** — Aurano
   - slug: `hotel-sole-aurano`
   - indirizzo: CIR 103016-ALB-00002 CIN IT103016A1UX8Z4B98, http://www.albergosole.it, Via Nuova per Cassino, 6, 28821 Cannero Riviera VB
24. **Hotel Villa Rosy** — Aurano
   - slug: `hotel-villa-rosy-aurano`
   - indirizzo: VIA LAURO, 1, 28818 Premeno VB
25. **Luxury Italy Apartments** — Aurano
   - slug: `luxury-italy-apartments-aurano`
   - indirizzo: Vicolo Jacchini, 6, 28921 Intra VB
26. **Ostello Val Grande** — Aurano
   - slug: `ostello-val-grande-aurano`
   - indirizzo: Via Borgonuovo, 2, 28801 Cicogna VB
27. **Agriturismo Agagin** — Aurigo
   - slug: `agriturismo-agagin-aurigo`
   - indirizzo: Via Regina Margherita, 62, 18010 Agaggio Inferiore IM
28. **Agriturismo casa Ferrari** — Aurigo
   - slug: `agriturismo-casa-ferrari-aurigo`
   - indirizzo: Via regia S.n, 18021 Caravonica IM
29. **Agriturismo le meridiane** — Aurigo
   - slug: `agriturismo-le-meridiane-aurigo`
   - indirizzo: Via Candeasco, 1, 18021 Borgomaro IM
30. **Agriturismo Nonni Devia** — Aurigo
   - slug: `agriturismo-nonni-devia-aurigo`
   - indirizzo: Via Roma, 17, 18023 Lucinasco IM
31. **Agriturismo San Michele** — Aurigo
   - slug: `agriturismo-san-michele-aurigo`
   - indirizzo: Via Fontana Vecchia, 14, 18024 Dolcedo IM
32. **Albergo Diffuso Relais del Maro** — Aurigo
   - slug: `albergo-diffuso-relais-del-maro-aurigo`
   - indirizzo: Via Guglieri Ambrogio, 1, 18021 Borgomaro IM
33. **Albergo Lorenzina** — Aurigo
   - slug: `albergo-lorenzina-aurigo`
   - indirizzo: Via Nazionale, 65, 18020 Pornassio IM
34. **Albergo Stella** — Aurigo
   - slug: `albergo-stella-aurigo`
   - indirizzo: Via Angiolo Silvio Novaro, 3, 18100 Imperia IM
35. **Ca' da Cardella** — Aurigo
   - slug: `ca-da-cardella-aurigo`
   - indirizzo: Via Giardino, 10 bis, 18025 Mendatica IM