# Blocco 399/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo I 9 Filari** — Camposampiero
   - slug: `agriturismo-i-9-filari-camposampiero`
   - indirizzo: Via Magarotto, 35, 35010 Limena PD
2. **Al Tezzon Hotel** — Camposampiero
   - slug: `al-tezzon-hotel-camposampiero`
   - indirizzo: Borgo Trento Trieste, 33/10, 35012 Camposampiero PD
3. **Alloggi Villa Rosa** — Camposampiero
   - slug: `alloggi-villa-rosa-camposampiero`
   - indirizzo: Via Baratella, 15, 35012 Camposampiero PD
4. **B&B ARMONIE DI CAMPAGNA** — Camposampiero
   - slug: `b-b-armonie-di-campagna-camposampiero`
   - indirizzo: Via Campagna, 97, 35015 Galliera Veneta PD
5. **B&B Sotto le Mura** — Camposampiero
   - slug: `b-b-sotto-le-mura-camposampiero`
   - indirizzo: Via Trieste, 24, 35013 Cittadella PD
6. **Ca' Boin Bed & Breakfast** — Camposampiero
   - slug: `ca-boin-bed-breakfast-camposampiero`
   - indirizzo: Via dei Piazzotti, 29, 31030 Albaredo di Vedelago TV
7. **Eudaimonia Apartments Fratte** — Camposampiero
   - slug: `eudaimonia-apartments-fratte-camposampiero`
   - indirizzo: Via Ghiacciaia, 69, 35010 Fratte PD
8. **Hotel San Paolo** — Camposampiero
   - slug: `hotel-san-paolo-camposampiero`
   - indirizzo: Via Borgo Padova, 5, 35012 Camposampiero PD
9. **Residence La Castellana** — Camposampiero
   - slug: `residence-la-castellana-camposampiero`
   - indirizzo: Via Monte Grappa, 54U, 31023 Resana TV
10. **B&B Mon Rêve - Camposano (Na)** — Camposano
   - slug: `b-b-mon-reve-camposano-na-camposano`
   - indirizzo: Via Madonnella, 52, 80030 Camposano NA
11. **Dubai Village** — Camposano
   - slug: `dubai-village-camposano`
   - indirizzo: Via Dubai, 1, 80030 Camposano NA
12. **Hotel Palazzo Giordano Bruno** — Camposano
   - slug: `hotel-palazzo-giordano-bruno-camposano`
   - indirizzo: SS7bis, 321, 80035 Nola NA
13. **Il Cortile - Bed & Breakfast Agriturismo** — Camposano
   - slug: `il-cortile-bed-breakfast-agriturismo-camposano`
   - indirizzo: Via Roma, 43, 80033 Cicciano NA
14. **LADI HOUSE** — Camposano
   - slug: `ladi-house-camposano`
   - indirizzo: Via Monsignor Amilcare Boccio, 109, 80035 Nola NA
15. **OhAhSi** — Camposano
   - slug: `ohahsi-camposano`
   - indirizzo: V. Nazionale delle Puglie, 107, 80035 Nola NA
16. **Radisson Hotel Naples Nola** — Camposano
   - slug: `radisson-hotel-naples-nola-camposano`
   - indirizzo: Ss/7 Bis, km 50, 80035 Nola NA
17. **Villa Nancy** — Camposano
   - slug: `villa-nancy-camposano`
   - indirizzo: Via Roma, 129, 80030 Cimitile NA
18. **Aden B&B** — Camposanto
   - slug: `aden-b-b-camposanto`
   - indirizzo: Via San Cristoforo, 59D, 40017 San Matteo della Decima BO
19. **B & B Villa dei Calchi** — Camposanto
   - slug: `b-b-villa-dei-calchi-camposanto`
   - indirizzo: Via degli Estensi, 474, 41038 San Felice Sul Panaro MO
20. **B&B I Pioppi Cipressini** — Camposanto
   - slug: `b-b-i-pioppi-cipressini-camposanto`
   - indirizzo: Via degli Orsi, 692/B, 40014 Crevalcore BO
21. **Bed & Breakfast La Corte di Adelina** — Camposanto
   - slug: `bed-breakfast-la-corte-di-adelina-camposanto`
   - indirizzo: Via Viazzola, 1704/b, 41017 Ravarino MO
22. **hotel appartamenti camere via onorio ferraresi** — Camposanto
   - slug: `hotel-appartamenti-camere-via-onorio-ferraresi-camposanto`
   - indirizzo: Via O. Ferraresi, 12, 41038 San Felice sul Panaro MO
23. **Hotel Cavezzo** — Camposanto
   - slug: `hotel-cavezzo-camposanto`
   - indirizzo: Via Camillo Benso Conte di Cavour, 373, 41032 Cavezzo MO
24. **Hotel La Cantina Srl** — Camposanto
   - slug: `hotel-la-cantina-srl-camposanto`
   - indirizzo: Via Statale, 179, 41036 Medolla MO
25. **Hotel Luna** — Camposanto
   - slug: `hotel-luna-camposanto`
   - indirizzo: Via dell' Olmone, 516, 41038 San Felice Sul Panaro MO
26. **Hotel Polo** — Camposanto
   - slug: `hotel-polo-camposanto`
   - indirizzo: Via Perossaro, 1466, 41038 San Felice Sul Panaro MO
27. **Le stanze di Matilde** — Camposanto
   - slug: `le-stanze-di-matilde-camposanto`
   - indirizzo: Via di Mezzo Levante, 4685, 40014 Crevalcore BO
28. **Agriturismo Regina di Cuori** — Campotosto
   - slug: `agriturismo-regina-di-cuori-campotosto`
   - indirizzo: Via Tredici Cantoni, 67100 L'Aquila AQ
29. **Fanesia Coliving** — Campotosto
   - slug: `fanesia-coliving-campotosto`
   - indirizzo: Corso Vittorio Emanuele III', 9, 64044 Fano Adriano TE
30. **Hotel Nido dell'Aquila** — Campotosto
   - slug: `hotel-nido-dell-aquila-campotosto`
   - indirizzo: Località Fonte Cerreto, 67100 Assergi AQ
31. **Hotel Residence Azzurro** — Campotosto
   - slug: `hotel-residence-azzurro-campotosto`
   - indirizzo: Via Giovanni di Vincenzo, 2, 67100 L'Aquila AQ
32. **La Fontana** — Campotosto
   - slug: `la-fontana-campotosto`
   - indirizzo: Codice CIN IT067034C18M5KJ6UD, Via Casarine, 9, 64047 Intermesoli TE
33. **La Valle del Gran Sasso Hotel - Residence** — Campotosto
   - slug: `la-valle-del-gran-sasso-hotel-residence-campotosto`
   - indirizzo: SS17bis, 67100 Assergi AQ
34. **Locanda Mausonium** — Campotosto
   - slug: `locanda-mausonium-campotosto`
   - indirizzo: Via Lecco, 26, 67013 Mascioni AQ
35. **Agriturismo Prunara Farmstead - F.lli Santoli** — Camugnano
   - slug: `agriturismo-prunara-farmstead-f-lli-santoli-camugnano`
   - indirizzo: Località Prunara, 73, 40036 Monzuno BO