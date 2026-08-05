# Blocco 90/500 — 35 strutture senza descrizione IT

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

1. **La Fornace di Garessio** — Alto
   - slug: `la-fornace-di-garessio-alto`
   - indirizzo: Via Armando Diaz 74, Via Dott. Professor Attilio Odasso, 35, 12075 Garessio CN
2. **Locanda Albergo Ristorante Da Lisetta** — Alto
   - slug: `locanda-albergo-ristorante-da-lisetta-alto`
   - indirizzo: Via Piemonte, 21, 17039 Erli SV
3. **Locanda da Teresa** — Alto
   - slug: `locanda-da-teresa-alto`
   - indirizzo: Piazza Milite Ignoto, 4, 17057 Bardineto SV
4. **NonnAmelia** — Alto
   - slug: `nonnamelia-alto`
   - indirizzo: Via Libertà, 2/b, 17030 Nasino SV
5. **Sotto Le Stelle Guesthouse** — Alto
   - slug: `sotto-le-stelle-guesthouse-alto`
   - indirizzo: Via Oberto Manfredi, 6, 18026 Pieve di Teco IM
6. **Albergo Ristorante ITALIA** — Alto Reno Terme
   - slug: `albergo-ristorante-italia-alto-reno-terme`
   - indirizzo: Bacino del Brasimone, Via Bacino, 89, 40032 Camugnano BO
7. **ANTICA LOCANDA LA POSTA** — Alto Reno Terme
   - slug: `antica-locanda-la-posta-alto-reno-terme`
   - indirizzo: Via Roma, 95, 40041 Gaggio Montano BO
8. **B&B La Presa** — Alto Reno Terme
   - slug: `b-b-la-presa-alto-reno-terme`
   - indirizzo: Località casa Moschini, 40046 Granaglione BO
9. **B&B Le Limentre** — Alto Reno Terme
   - slug: `b-b-le-limentre-alto-reno-terme`
   - indirizzo: Località S. Pellegrino al Cassero, 10, 51020 San Pellegrino PT
10. **Cà Gennara Agri B&B** — Alto Reno Terme
   - slug: `ca-gennara-agri-b-b-alto-reno-terme`
   - indirizzo: Località Cà Gennara, 18, 40046 Capugnano BO
11. **Ecochiocciola** — Alto Reno Terme
   - slug: `ecochiocciola-alto-reno-terme`
   - indirizzo: Via Testa, 80, 41055 Maserno MO
12. **Hotel Bertusi** — Alto Reno Terme
   - slug: `hotel-bertusi-alto-reno-terme`
   - indirizzo: Via Mazzini, 105, 40046 Porretta Terme BO
13. **Hotel Capriolo** — Alto Reno Terme
   - slug: `hotel-capriolo-alto-reno-terme`
   - indirizzo: Piazza XXVII Settembre, 14, 40042 Vidiciatico BO
14. **Hotel Delle Acque & Natural Spa** — Alto Reno Terme
   - slug: `hotel-delle-acque-natural-spa-alto-reno-terme`
   - indirizzo: Via Roma, 9, 40046 Porretta Terme BO
15. **Hotel Helvetia Thermal SPA** — Alto Reno Terme
   - slug: `hotel-helvetia-thermal-spa-alto-reno-terme`
   - indirizzo: Piazza Vittorio Veneto, 11, 40046 Porretta Terme BO
16. **Hotel Il Crinale** — Alto Reno Terme
   - slug: `hotel-il-crinale-alto-reno-terme`
   - indirizzo: Via Pietrafitta, 28, 40030 Grizzana Morandi BO
17. **Hotel Il Fondaccio** — Alto Reno Terme
   - slug: `hotel-il-fondaccio-alto-reno-terme`
   - indirizzo: Via Gasperini, 22, 40042 Lizzano In Belvedere BO
18. **Hotel Italia** — Alto Reno Terme
   - slug: `hotel-italia-alto-reno-terme`
   - indirizzo: Piazza della Libertà, 2, 40046 Porretta Terme BO
19. **Hotel Montegrande** — Alto Reno Terme
   - slug: `hotel-montegrande-alto-reno-terme`
   - indirizzo: Via Guglielmo Marconi 27 Frazione Vidiciatico, 40042 Comune di, BO
20. **Hotel Roma** — Alto Reno Terme
   - slug: `hotel-roma-alto-reno-terme`
   - indirizzo: Piazza Vittorio Veneto, 4, 40046 Porretta Terme BO
21. **Hotel Santoli** — Alto Reno Terme
   - slug: `hotel-santoli-alto-reno-terme`
   - indirizzo: Via Roma, 3, 40046 Porretta Terme BO
22. **L'OCA GIULIVA RELAIS** — Alto Reno Terme
   - slug: `l-oca-giuliva-relais-alto-reno-terme`
   - indirizzo: via serra, 474, 40041 Masonte BO
23. **La rosa dei Pepoli** — Alto Reno Terme
   - slug: `la-rosa-dei-pepoli-alto-reno-terme`
   - indirizzo: Piazza Libertà, 28, 40035 Castiglione dei Pepoli BO
24. **Locanda del Sole** — Alto Reno Terme
   - slug: `locanda-del-sole-alto-reno-terme`
   - indirizzo: Piazza Spuntiglia, 1-2-3, 41055 Maserno MO
25. **Room & Breakfast Della Torre** — Alto Reno Terme
   - slug: `room-breakfast-della-torre-alto-reno-terme`
   - indirizzo: Via Mazzini, 30, 40046 Porretta Terme BO
26. **Affittacamere Tagliaferro** — Alto Sermenza
   - slug: `affittacamere-tagliaferro-alto-sermenza`
   - indirizzo: SP10, 3, 13029 Rima VC
27. **Albergo Ristorante Fontana** — Alto Sermenza
   - slug: `albergo-ristorante-fontana-alto-sermenza`
   - indirizzo: Localita' Centro 15, 13020 Rimella VC
28. **Albergo Ristorante La Torre** — Alto Sermenza
   - slug: `albergo-ristorante-la-torre-alto-sermenza`
   - indirizzo: Via Roma, 28, 13022 Boccioleto VC
29. **Albergo Rosetta** — Alto Sermenza
   - slug: `albergo-rosetta-alto-sermenza`
   - indirizzo: Via Statale, 24, 13028 Scopello VC
30. **Ca dal Cros** — Alto Sermenza
   - slug: `ca-dal-cros-alto-sermenza`
   - indirizzo: Localita' Gabbio, 13023 Campertogno VC
31. **Casa Bastucchi** — Alto Sermenza
   - slug: `casa-bastucchi-alto-sermenza`
   - indirizzo: Loc. Rima, 11, 13029 Alto Sermenza VC
32. **Foresteria Valsesia** — Alto Sermenza
   - slug: `foresteria-valsesia-alto-sermenza`
   - indirizzo: Via Val Sermenza, 4, 13020 Cerva VC
33. **Hotel Nuovo Pecetto** — Alto Sermenza
   - slug: `hotel-nuovo-pecetto-alto-sermenza`
   - indirizzo: Frazione Pecetto, 50, 28876 Macugnaga VB
34. **Hotel Signal** — Alto Sermenza
   - slug: `hotel-signal-alto-sermenza`
   - indirizzo: Via Pecetto, 118, 28876 Macugnaga VB
35. **Mondo d'Oro** — Alto Sermenza
   - slug: `mondo-d-oro-alto-sermenza`
   - indirizzo: Via Martino Trabucati, 11, 28875 Ceppo Morelli VB