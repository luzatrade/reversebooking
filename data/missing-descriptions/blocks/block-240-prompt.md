# Blocco 240/500 — 35 strutture senza descrizione IT

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

1. **Residence Ortensia** — Baveno
   - slug: `residence-ortensia-baveno`
   - indirizzo: Via Piave, 36, 28831 Baveno VB
2. **Villa Valesca** — Baveno
   - slug: `villa-valesca-baveno`
   - indirizzo: Via Sempione Nord, 7, 28838 Stresa VB
3. **Agriturismo Il Balcone sulla Valle** — Bedero Valcuvia
   - slug: `agriturismo-il-balcone-sulla-valle-bedero-valcuvia`
   - indirizzo: Via Camparoncino, 7, 21039 Bedero Valcuvia VA
4. **B&B Dolci Ricordi Cunardo** — Bedero Valcuvia
   - slug: `b-b-dolci-ricordi-cunardo-bedero-valcuvia`
   - indirizzo: Via del Filatoio, 2, 21035 Cunardo VA
5. **Ca' Pelitti** — Bedero Valcuvia
   - slug: `ca-pelitti-bedero-valcuvia`
   - indirizzo: Via F. Pelitti, 4, 21039 Ganna VA
6. **Casa Tilde Guest House** — Bedero Valcuvia
   - slug: `casa-tilde-guest-house-bedero-valcuvia`
   - indirizzo: Via Sabotino, 5, 21035 Cunardo VA
7. **Hotel Ristorante pizzeria Carillon** — Bedero Valcuvia
   - slug: `hotel-ristorante-pizzeria-carillon-bedero-valcuvia`
   - indirizzo: Via Grumello, 4, 21037 Lavena Ponte Tresa VA
8. **La Finestra sul Lago** — Bedero Valcuvia
   - slug: `la-finestra-sul-lago-bedero-valcuvia`
   - indirizzo: Via Ferrari, 29, 21050 Ardena VA
9. **Stampa 1968 Hotel e Ristorante** — Bedero Valcuvia
   - slug: `stampa-1968-hotel-e-ristorante-bedero-valcuvia`
   - indirizzo: Via Stampa, 3, 21031 Cadegliano-Viconago VA
10. **Agriturismo L' Unicorno** — Bedizzole
   - slug: `agriturismo-l-unicorno-bedizzole`
   - indirizzo: via Borghetto, 13, 25081 Bedizzole BS
11. **AHG Golf Hotel Porta Del Sole** — Bedizzole
   - slug: `ahg-golf-hotel-porta-del-sole-bedizzole`
   - indirizzo: Via Omodeo, 3, 25080 Soiano BS
12. **Al Borgo Antico - Ristorante & Bed and Breakfast** — Bedizzole
   - slug: `al-borgo-antico-ristorante-bed-and-breakfast-bedizzole`
   - indirizzo: Via Francesco Gioia, 18, 25081 Bedizzole BS
13. **Al Borgo Antico di Mai Roberta & C. Sas** — Bedizzole
   - slug: `al-borgo-antico-di-mai-roberta-c-sas-bedizzole`
   - indirizzo: Via Francesco Gioia, 18/20, 25081 Masciaga di Sopra BS
14. **B&B I Melograni** — Bedizzole
   - slug: `b-b-i-melograni-bedizzole`
   - indirizzo: Via Sonvigo, 28, 25081 Bedizzole BS
15. **BED BREAKFAST LA CASA DI AGNESE** — Bedizzole
   - slug: `bed-breakfast-la-casa-di-agnese-bedizzole`
   - indirizzo: Via Don Gorini, 25081 Bedizzole BS
16. **Cornelia** — Bedizzole
   - slug: `cornelia-bedizzole`
   - indirizzo: Via Antonio Callegari, 6, 25081 Bedizzole BS
17. **Foresteria del Borgo Etrusco** — Bedizzole
   - slug: `foresteria-del-borgo-etrusco-bedizzole`
   - indirizzo: Via Industria, 14, 25017 Lonato BS
18. **Hotel Della Torre 1850** — Bedizzole
   - slug: `hotel-della-torre-1850-bedizzole`
   - indirizzo: Strada Statale 11 Padana Superiore, 33, 25011 Calcinato BS
19. **Hotel Francesco** — Bedizzole
   - slug: `hotel-francesco-bedizzole`
   - indirizzo: Via G. Marconi, 18, 25015 Padenghe Sul Garda BS
20. **Hotel Il Rustichello** — Bedizzole
   - slug: `hotel-il-rustichello-bedizzole`
   - indirizzo: Viale Roma, 90, 25017 Lonato BS
21. **Hotel La Bussola** — Bedizzole
   - slug: `hotel-la-bussola-bedizzole`
   - indirizzo: Via G. Marconi, 102, 25080 Padenghe sul Garda BS
22. **Hotel La Passeggiata** — Bedizzole
   - slug: `hotel-la-passeggiata-bedizzole`
   - indirizzo: Viale, Via E. Andreis, 100, 25015 Desenzano del Garda BS
23. **Le Terrazze sul Lago - Hotel & Residence** — Bedizzole
   - slug: `le-terrazze-sul-lago-hotel-residence-bedizzole`
   - indirizzo: Via Ri Fiochel, 77, 25080 Padenghe sul Garda BS
24. **Palazzo Arzaga Hotel Spa & Golf Resort (ora QC Termegarda)** — Bedizzole
   - slug: `palazzo-arzaga-hotel-spa-golf-resort-ora-qc-term-bedizzole`
   - indirizzo: Via Arzaga, 1, 25080 Calvagese della Riviera BS
25. **Ristorante Hotel Rustichello Lonato del Garda** — Bedizzole
   - slug: `ristorante-hotel-rustichello-lonato-del-garda-bedizzole`
   - indirizzo: 92, Viale Roma, 90, 25017 Lonato BS
26. **Splendido Bay** — Bedizzole
   - slug: `splendido-bay-bedizzole`
   - indirizzo: Viale Guglielmo Marconi, 99, 25080 Padenghe Sul Garda BS
27. **Agritur E-Cinque** — Bedollo
   - slug: `agritur-e-cinque-bedollo`
   - indirizzo: Via Molini, 6/primo piano, 39040 Salorno sulla Strada del Vino BZ
28. **Agriturismo Malga Stramaiolo Bedollo** — Bedollo
   - slug: `agriturismo-malga-stramaiolo-bedollo-bedollo`
   - indirizzo: Loc. Stramaiolo, 38043 Bedollo TN
29. **Albergo Monte Croce** — Bedollo
   - slug: `albergo-monte-croce-bedollo`
   - indirizzo: Piazza Antonio Rosmini, 6, 38043 Bedollo TN
30. **B&B La Balbina- bed and breakfast Piné** — Bedollo
   - slug: `b-b-la-balbina-bed-and-breakfast-pine-bedollo`
   - indirizzo: Via Santissima Trinità, 19, 38043 Varda TN
31. **B&B La Locanda di Geppetto** — Bedollo
   - slug: `b-b-la-locanda-di-geppetto-bedollo`
   - indirizzo: Via Ceramont, 11, 38043 Bedollo TN
32. **B&B Le Molinare Home Relax** — Bedollo
   - slug: `b-b-le-molinare-home-relax-bedollo`
   - indirizzo: Via Santa Maria, 28, 38043 Bedollo TN
33. **BIO HOTEL BRUSAGO VITAL & WELLNESS** — Bedollo
   - slug: `bio-hotel-brusago-vital-wellness-bedollo`
   - indirizzo: Piazza Rosmini, 2, 38043 Brusago TN
34. **Gasthof Salurn** — Bedollo
   - slug: `gasthof-salurn-bedollo`
   - indirizzo: Via Dr. Josef Noldin, 2, 39040 Salorno BZ
35. **Hotel Tirol Natural Idyll** — Bedollo
   - slug: `hotel-tirol-natural-idyll-bedollo`
   - indirizzo: C.D.Santuari, 3, 38048 Montesover TN