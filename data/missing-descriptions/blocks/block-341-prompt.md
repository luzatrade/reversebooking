# Blocco 341/500 — 35 strutture senza descrizione IT

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

1. **Villa Maria Toscana** — Buggiano
   - slug: `villa-maria-toscana-buggiano`
   - indirizzo: Via Maona, 21, 51016 Montecatini Terme PT
2. **Agriturismo Adda Vegia** — Buglio in Monte
   - slug: `agriturismo-adda-vegia-buglio-in-monte`
   - indirizzo: Via Pozzoni, 1, 23010 Buglio In Monte SO
3. **Agriturismo Luloc** — Buglio in Monte
   - slug: `agriturismo-luloc-buglio-in-monte`
   - indirizzo: Località Reval, 23010 Buglio in Monte SO
4. **Albergo del Boschetto** — Buglio in Monte
   - slug: `albergo-del-boschetto-buglio-in-monte`
   - indirizzo: Via Stelvio, 75, 23020 Poggiridenti Piano SO
5. **Bed & Breakfast Terre Alte** — Buglio in Monte
   - slug: `bed-breakfast-terre-alte-buglio-in-monte`
   - indirizzo: Piazza della Libertà, 2, 23010 Buglio In Monte SO
6. **Il Sottobosco - B&B** — Buglio in Monte
   - slug: `il-sottobosco-b-b-buglio-in-monte`
   - indirizzo: V. Folla, 19, 23010 Filorera, SO
7. **Albergo Moretto** — Bugnara
   - slug: `albergo-moretto-bugnara`
   - indirizzo: Via Nazario Sauro, 100, 67035 Pratola Peligna AQ
8. **B&B IL GIRASOLE** — Bugnara
   - slug: `b-b-il-girasole-bugnara`
   - indirizzo: Viale Fiume, 60, 67030 Introdacqua AQ
9. **B&B La Dimora** — Bugnara
   - slug: `b-b-la-dimora-bugnara`
   - indirizzo: Corso Ovidio, 238, 67039 Sulmona AQ
10. **B&B Solimo** — Bugnara
   - slug: `b-b-solimo-bugnara`
   - indirizzo: Via Circonvallazione Orientale, 7, 67039 Sulmona AQ
11. **B&b Villa Asia** — Bugnara
   - slug: `b-b-villa-asia-bugnara`
   - indirizzo: Via Bugnara, 91, 67030 Campo di Fano AQ
12. **Genzana B&B** — Bugnara
   - slug: `genzana-b-b-bugnara`
   - indirizzo: 67030 Introdacqua AQ
13. **Hotel Armando’s** — Bugnara
   - slug: `hotel-armando-s-bugnara`
   - indirizzo: Via Montenero, 15, 67039 Sulmona AQ
14. **Hotel Meeting Santacroce** — Bugnara
   - slug: `hotel-meeting-santacroce-bugnara`
   - indirizzo: Piazza Guido Ginaldi, 3, 67039 Sulmona AQ
15. **Hotel Sagittario** — Bugnara
   - slug: `hotel-sagittario-bugnara`
   - indirizzo: Via Piano Madonna di Loreto, 2, 67030 Bugnara AQ
16. **Hotel Santacroce Ovidius** — Bugnara
   - slug: `hotel-santacroce-ovidius-bugnara`
   - indirizzo: Via Circonvallazione Occidentale, 177, 67039 Sulmona AQ
17. **La Locanda di Gino** — Bugnara
   - slug: `la-locanda-di-gino-bugnara`
   - indirizzo: Via Panfilo Serafini, 1, 67039 Sulmona AQ
18. **mela__bii** — Bugnara
   - slug: `mela-bii-bugnara`
   - indirizzo: Via Torrone, 88, 67039 Sulmona AQ
19. **Stella CasaBono** — Bugnara
   - slug: `stella-casabono-bugnara`
   - indirizzo: Via Panfilo Mazara, 18, 67039 Sulmona AQ
20. **Vico Amato. Residenza** — Bugnara
   - slug: `vico-amato-residenza-bugnara`
   - indirizzo: Vico Amato, 13, 67039 Sulmona AQ
21. **Villa Del Poeta** — Bugnara
   - slug: `villa-del-poeta-bugnara`
   - indirizzo: Via Montenero, 20, 67039 Sulmona AQ
22. **Villa Diana** — Bugnara
   - slug: `villa-diana-bugnara`
   - indirizzo: Via Giovanni, Via Granata, 1, 67039 Sulmona AQ
23. **Villa Linda Bed and Breakfast** — Bugnara
   - slug: `villa-linda-bed-and-breakfast-bugnara`
   - indirizzo: SR, 479, 1, 67039 Sulmona AQ
24. **I Palazzi - Palace Grand Hotel Varese** — Buguggiate
   - slug: `i-palazzi-palace-grand-hotel-varese-buguggiate`
   - indirizzo: Via Manara Luciano, 11, 21100 Varese VA
25. **La Selvetta** — Buguggiate
   - slug: `la-selvetta-buguggiate`
   - indirizzo: Via XXV Aprile, 88, 21020 Buguggiate VA
26. **Albergo Ristorante Pizzeria Bar Dal Asìn** — Buja
   - slug: `albergo-ristorante-pizzeria-bar-dal-asin-buja`
   - indirizzo: Via Ciro di Pers, 63, 33030 Majano UD
27. **B&B The Secret Garden** — Buja
   - slug: `b-b-the-secret-garden-buja`
   - indirizzo: Via Liberazione, 27, 33030 Buja UD
28. **Hotel Bristol Buja** — Buja
   - slug: `hotel-bristol-buja-buja`
   - indirizzo: Via Monteortone, 2, 35031 Abano Terme PD
29. **Hotel San Daniele** — Buja
   - slug: `hotel-san-daniele-buja`
   - indirizzo: Via del Lago, 1, 33038 San Daniele del Friuli UD
30. **Meditur Hotel Udine Nord** — Buja
   - slug: `meditur-hotel-udine-nord-buja`
   - indirizzo: Via Alpe Adria, 10, 33010 Tavagnacco UD
31. **Agriturismo Tenuta del Fatio** — Bulgarograsso
   - slug: `agriturismo-tenuta-del-fatio-bulgarograsso`
   - indirizzo: Via Trento, 7, 22079 Villa Guardia CO
32. **B&B Woodbnb** — Bulgarograsso
   - slug: `b-b-woodbnb-bulgarograsso`
   - indirizzo: Via A. Vivaldi, 29, 22070 Cassina Rizzardi CO
33. **Hotel Maria** — Bulgarograsso
   - slug: `hotel-maria-bulgarograsso`
   - indirizzo: Via Risorgimento, 64, 22070 Luisago CO
34. **Albergo ristorante Doria** — Bulzi
   - slug: `albergo-ristorante-doria-bulzi`
   - indirizzo: Traversa S. Nicola, 07030 Santa Maria Coghinas SS
35. **Artemisia Sardegna | Guesthouse** — Bulzi
   - slug: `artemisia-sardegna-guesthouse-bulzi`
   - indirizzo: Via Antonio Gramsci, 3, 07030 Tergu SS