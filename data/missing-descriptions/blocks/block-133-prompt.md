# Blocco 133/500 — 35 strutture senza descrizione IT

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

1. **Cannon d'Oro** — Aramengo
   - slug: `cannon-d-oro-aramengo`
   - indirizzo: Piazza Camillo Benso Conte di Cavour, 21, 14023 Cocconato AT
2. **Dalla Magna Livia L. & L. Di Cavalitto Alessandro** — Aramengo
   - slug: `dalla-magna-livia-l-l-di-cavalitto-alessandro-aramengo`
   - indirizzo: Via Giulio Romano Vercelli, 83, 10020 Marcorengo TO
3. **La Civignola - Agriturismo Resort** — Aramengo
   - slug: `la-civignola-agriturismo-resort-aramengo`
   - indirizzo: Str. Civignola, 20, 10020 Casalborgone TO
4. **Locanda Martelletti** — Aramengo
   - slug: `locanda-martelletti-aramengo`
   - indirizzo: Piazza Statuto, 10, 14023 Cocconato AT
5. **Theresa sulla collina b&b** — Aramengo
   - slug: `theresa-sulla-collina-b-b-aramengo`
   - indirizzo: VIA RECINTO 25 FRAZ, 14020 Passerano AT
6. **Vecchio Castagno - ristorante albergo** — Aramengo
   - slug: `vecchio-castagno-ristorante-albergo-aramengo`
   - indirizzo: Str. Cocconito, 1, 14023 Cocconito Vignaretto AT
7. **Agriturismo al Luogo del Giulio** — Arba
   - slug: `agriturismo-al-luogo-del-giulio-arba`
   - indirizzo: Via Pordenone, 155, 33085 Maniago PN
8. **albergo al palazat** — Arba
   - slug: `albergo-al-palazat-arba`
   - indirizzo: Piazza Plebiscito, 6, 33092 Cavasso Nuovo PN
9. **Albergo Julienne** — Arba
   - slug: `albergo-julienne-arba`
   - indirizzo: Via D. Manin, 63, 33090 Arba PN
10. **Albergo Ristorante Belvedere** — Arba
   - slug: `albergo-ristorante-belvedere-arba`
   - indirizzo: Via Odorico Odorico, 54, 33094 Sequals PN
11. **Bed & Breakfast Cuore di Lavanda** — Arba
   - slug: `bed-breakfast-cuore-di-lavanda-arba`
   - indirizzo: Via Damiano Chiesa, 6, 33097 Spilimbergo PN
12. **CASA ROSSA AI COLLI - alloggio** — Arba
   - slug: `casa-rossa-ai-colli-alloggio-arba`
   - indirizzo: Via ai Colli, 2/1, 33030 Ragogna UD
13. **Casa Valcellina | Albergo e Ristorante** — Arba
   - slug: `casa-valcellina-albergo-e-ristorante-arba`
   - indirizzo: Viale Stazione, 26, 33086 Montereale Valcellina PN
14. **Corte Morea - Hotel - B&B - Ristorante** — Arba
   - slug: `corte-morea-hotel-b-b-ristorante-arba`
   - indirizzo: Via della Roggia, 38, 33090 Sequals PN
15. **Dolcenero Hotel Residence** — Arba
   - slug: `dolcenero-hotel-residence-arba`
   - indirizzo: Via Fagagna, 1, 33038 San Daniele del Friuli UD
16. **Gelindo dei Magredi** — Arba
   - slug: `gelindo-dei-magredi-arba`
   - indirizzo: 33099 Vivaro PN
17. **Grand Hotel President** — Arba
   - slug: `grand-hotel-president-arba`
   - indirizzo: Via Cividale, 10, 33097 Spilimbergo PN
18. **Hotel Al Giardino** — Arba
   - slug: `hotel-al-giardino-arba`
   - indirizzo: Via Circonvallazione Nuova, 3, 33092 Fanna PN
19. **Hotel Oliva** — Arba
   - slug: `hotel-oliva-arba`
   - indirizzo: Via Luigi Longo, 2, 33081 Aviano PN
20. **Hotel Relais Picaron** — Arba
   - slug: `hotel-relais-picaron-arba`
   - indirizzo: Via Astemio, 3, 33038 San Daniele del Friuli UD
21. **Hotel Vajont** — Arba
   - slug: `hotel-vajont-arba`
   - indirizzo: Piazza Monte Toc, 5, 33080 Vajont PN
22. **Il Grappolo d'Oro** — Arba
   - slug: `il-grappolo-d-oro-arba`
   - indirizzo: Via Sequals, 1, 33090 Arba PN
23. **Ostarie Vecjo Friûl 1901** — Arba
   - slug: `ostarie-vecjo-friul-1901-arba`
   - indirizzo: Via Nazionale, 7, 33039 Rivis UD
24. **Portone180 GuestHouse** — Arba
   - slug: `portone180-guesthouse-arba`
   - indirizzo: Via XX Settembre, 180, 33080 Roveredo in Piano PN
25. **Residence Stefania** — Arba
   - slug: `residence-stefania-arba`
   - indirizzo: Via Roma, 17, 33092 Cavasso Nuovo PN
26. **Agriturismo Le Mimose** — Arborea
   - slug: `agriturismo-le-mimose-arborea`
   - indirizzo: Str. 24 Ovest, 09092 Arborea OR
27. **Agriturismo S'Aranada** — Arborea
   - slug: `agriturismo-s-aranada-arborea`
   - indirizzo: Via Gioberti, 09094 Marrubiu OR
28. **B&B FraeFe** — Arborea
   - slug: `b-b-fraefe-arborea`
   - indirizzo: Str. 18Bis Est, 6, 09092 Arborea OR
29. **Capo Frasca resort** — Arborea
   - slug: `capo-frasca-resort-arborea`
   - indirizzo: Via Mare Mediterraneo, 23, 09031 Sant'Antonio di Santadi VS
30. **Dal tramonto all'alba** — Arborea
   - slug: `dal-tramonto-all-alba-arborea`
   - indirizzo: Str. 18 Ovest, 11, 09092 Arborea OR
31. **Horse Country Resort Congress & SPA** — Arborea
   - slug: `horse-country-resort-congress-spa-arborea`
   - indirizzo: Str. 24 Ovest, 09092 Arborea OR
32. **Hotel Gran Torre** — Arborea
   - slug: `hotel-gran-torre-arborea`
   - indirizzo: strada Torregrande Pontile, 09072 Cabras OR
33. **Hotel Le Torri** — Arborea
   - slug: `hotel-le-torri-arborea`
   - indirizzo: Via Sardegna, 23, 09092 Arborea OR
34. **Hotel Lido Beach** — Arborea
   - slug: `hotel-lido-beach-arborea`
   - indirizzo: Via Vittorio Bottego, 77, 09170 Torre Grande OR
35. **Il Vecchio Oliveto Bed & Breakfast** — Arborea
   - slug: `il-vecchio-oliveto-bed-breakfast-arborea`
   - indirizzo: Is Bangius, 09094 Marrubiu OR