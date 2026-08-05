# Blocco 450/500 — 35 strutture senza descrizione IT

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

1. **Il Gatto Che Ride** — Carvico
   - slug: `il-gatto-che-ride-carvico`
   - indirizzo: Via Roncarro, 9, 24030 Carvico BG
2. **B&B Al Portico** — Carzano
   - slug: `b-b-al-portico-carzano`
   - indirizzo: Piazza Maggiore, 12, 38050 Telve TN
3. **B&B Alpentor - Porta delle Alpi** — Carzano
   - slug: `b-b-alpentor-porta-delle-alpi-carzano`
   - indirizzo: Vicolo Valletta, 13, 38050 Telve TN
4. **B&b e Ristorante Le Rose** — Carzano
   - slug: `b-b-e-ristorante-le-rose-carzano`
   - indirizzo: Via XVIII Settembre, 35, 38050 Carzano TN
5. **B&B Elisè** — Carzano
   - slug: `b-b-elise-carzano`
   - indirizzo: Via Cenone, 35/1, 38059 Castel Ivano TN
6. **B&B Le Soleil** — Carzano
   - slug: `b-b-le-soleil-carzano`
   - indirizzo: B&B le soleil, Via Alcide Degasperi, 1, 38050 Scurelle TN
7. **Masetto Egidio Eco-Agritur** — Carzano
   - slug: `masetto-egidio-eco-agritur-carzano`
   - indirizzo: Via della, Via della Róda 1, 6, 38059 Strigno TN
8. **Almaré B&B** — Casabona
   - slug: `almare-b-b-casabona`
   - indirizzo: Via Taras, 7, 88900 Crotone KR
9. **B&B Carlo V** — Casabona
   - slug: `b-b-carlo-v-casabona`
   - indirizzo: Via Garibaldi, 25, 88900 Crotone KR
10. **B&B la casa di Bianca Luxury** — Casabona
   - slug: `b-b-la-casa-di-bianca-luxury-casabona`
   - indirizzo: Via Don Minzoni, 19, 88900 Crotone KR
11. **Bed & Breakfast Pitagora** — Casabona
   - slug: `bed-breakfast-pitagora-casabona`
   - indirizzo: Via Matteotti, 70, 88900 Crotone KR
12. **Bed and Breakfast "Castello"** — Casabona
   - slug: `bed-and-breakfast-castello-casabona`
   - indirizzo: Via Francesco le Rose, 40, 88900 Crotone KR
13. **Bed and Breakfast "Magna Grecia" - Crotone** — Casabona
   - slug: `bed-and-breakfast-magna-grecia-crotone-casabona`
   - indirizzo: Via Terina, 4, 88900 Crotone KR
14. **Agriturismo La Quercia** — Casacalenda
   - slug: `agriturismo-la-quercia-casacalenda`
   - indirizzo: Contrada Convento, 2, 86043 Casacalenda CB
15. **B&B Arcobaleno** — Casacalenda
   - slug: `b-b-arcobaleno-casacalenda`
   - indirizzo: Viale Kennedy, 34, 86043 Casacalenda CB
16. **Affittacamere Montepiano - Day USE** — Casacanditella
   - slug: `affittacamere-montepiano-day-use-casacanditella`
   - indirizzo: Via Montepiano, 36, 66010 San Rocco CH
17. **Albergo Ristorante S. Eufemia** — Casacanditella
   - slug: `albergo-ristorante-s-eufemia-casacanditella`
   - indirizzo: Via Sant'Eufemia, 125, 66010 Fara Filiorum Petri CH
18. **B&B Dimora Rossipinti** — Casacanditella
   - slug: `b-b-dimora-rossipinti-casacanditella`
   - indirizzo: Contrada Calvario, 37, 66030 Filetto CH
19. **B&B La Casa Della Nonna** — Casacanditella
   - slug: `b-b-la-casa-della-nonna-casacanditella`
   - indirizzo: Via di Rapino, 40, 66010 Fara Filiorum Petri CH
20. **B&B La Dea Maja** — Casacanditella
   - slug: `b-b-la-dea-maja-casacanditella`
   - indirizzo: Via Giardino, 54, 66010 Fara Filiorum Petri CH
21. **B&B Lo Gnomo** — Casacanditella
   - slug: `b-b-lo-gnomo-casacanditella`
   - indirizzo: via Capocciato - via Umberto Primo 43, 66010 Pennapiedimonte CH
22. **B&B Nontiscordardime** — Casacanditella
   - slug: `b-b-nontiscordardime-casacanditella`
   - indirizzo: Corso Umberto I, 5, 66036 Orsogna CH
23. **Grelios stanze preziose** — Casacanditella
   - slug: `grelios-stanze-preziose-casacanditella`
   - indirizzo: Vicolo Zulli, 2, 66016 Guardiagrele CH
24. **Hotel Altevie** — Casacanditella
   - slug: `hotel-altevie-casacanditella`
   - indirizzo: Via Bocca di Valle, 115, 66016 Guardiagrele CH
25. **Ranieri Events and B&B** — Casacanditella
   - slug: `ranieri-events-and-b-b-casacanditella`
   - indirizzo: Via Colle Crudele, 8, 66010 San Martino sulla Marrucina CH
26. **Residence Praetorium Maiella Park- CIN IT069069B45KOR2IPG** — Casacanditella
   - slug: `residence-praetorium-maiella-park-cin-it069069b4-casacanditella`
   - indirizzo: Via la Valle, 8, 66010 Pretoro CH
27. **Affittacamere Silvagni** — Casagiove
   - slug: `affittacamere-silvagni-casagiove`
   - indirizzo: Piazza Pasquale Silvagni, 11, 81022 Casagiove CE
28. **Afrodite Guest House** — Casagiove
   - slug: `afrodite-guest-house-casagiove`
   - indirizzo: Corso Pietro Giannone, 132, 81100 Caserta CE
29. **B&b 4th Floor Caserta** — Casagiove
   - slug: `b-b-4th-floor-caserta-casagiove`
   - indirizzo: Via Cesare Battisti, 109, 81100 Caserta CE
30. **B&B La Reggia** — Casagiove
   - slug: `b-b-la-reggia-casagiove`
   - indirizzo: Via Gaetano Salvemini, 27, 81100 Caserta CE
31. **Bed & Breakfast Le Fontane del Re** — Casagiove
   - slug: `bed-breakfast-le-fontane-del-re-casagiove`
   - indirizzo: Piazza Luigi Vanvitelli, 4/D, 81100 Caserta CE
32. **bedbreakfast "Caserta Royale Apartment"** — Casagiove
   - slug: `bedbreakfast-caserta-royale-apartment-casagiove`
   - indirizzo: Via Caduti sul Lavoro, 14, 81022 Casagiove CE
33. **Casa Casagiove** — Casagiove
   - slug: `casa-casagiove-casagiove`
   - indirizzo: Via Ferrante Fratelli, 13, 81022 Casagiove CE
34. **Caserta Royale Suites** — Casagiove
   - slug: `caserta-royale-suites-casagiove`
   - indirizzo: Via Regalone, 19, 81022 Casagiove CE
35. **Hotel Baby** — Casagiove
   - slug: `hotel-baby-casagiove`
   - indirizzo: Via Giuseppe Verdi, 41, 81100 Caserta CE