# Blocco 41/500 — 35 strutture senza descrizione IT

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

1. **Merano** — Airasca
   - slug: `merano-airasca`
   - indirizzo: Corso Moncalieri, 246, 10133 Torino TO
2. **NONE HOLIDAY HOTEL** — Airasca
   - slug: `none-holiday-hotel-airasca`
   - indirizzo: Via Sestriere, 33, 10060 None TO
3. **Tenuta Ajrale Country house e Location Eventi** — Airasca
   - slug: `tenuta-ajrale-country-house-e-location-eventi-airasca`
   - indirizzo: Via Pinerolo, 100, 10067 Vigone TO
4. **Villaggio tranquillo BamBnB** — Airasca
   - slug: `villaggio-tranquillo-bambnb-airasca`
   - indirizzo: Viale Piemonte, 11, 10048 Garino TO
5. **Zenit Park Hotel** — Airasca
   - slug: `zenit-park-hotel-airasca`
   - indirizzo: Via Giuseppe Griva, 75, 10040 Rivalta di Torino TO
6. **Affittacamere "Al Castello"** — Airola
   - slug: `affittacamere-al-castello-airola`
   - indirizzo: Via Monteoliveto, 29, 82011 Airola BN
7. **Agatea b&b** — Airola
   - slug: `agatea-b-b-airola`
   - indirizzo: Via Benevento, 82016 Montesarchio BN
8. **Agriturismo Gusto Nocciola** — Airola
   - slug: `agriturismo-gusto-nocciola-airola`
   - indirizzo: Via Sanguinito, 26, 82019 Sant'Agata de' Goti BN
9. **B&B Mamma Mia’s** — Airola
   - slug: `b-b-mamma-mia-s-airola`
   - indirizzo: Strada Comunale S. Giovanni, 1, 82011 Airola BN
10. **Bed And Breakfast Il Sogno** — Airola
   - slug: `bed-and-breakfast-il-sogno-airola`
   - indirizzo: Corso Caudino, 218/220, 82011 Airola BN
11. **Bed and breakfast Sogni Goti** — Airola
   - slug: `bed-and-breakfast-sogni-goti-airola`
   - indirizzo: Piazza S. Alfonso, 82019 Sant'Agata de' Goti BN
12. **Dimora Cice B&B** — Airola
   - slug: `dimora-cice-b-b-airola`
   - indirizzo: Contrada Restinola, 22, 82019 Sant'Agata de' Goti BN
13. **Hotel La Campagnola Di Carbone Raffaela** — Airola
   - slug: `hotel-la-campagnola-di-carbone-raffaela-airola`
   - indirizzo: Via Varco, 6, 83017 Rotondi AV
14. **Hotel Ristorante Al Querceto** — Airola
   - slug: `hotel-ristorante-al-querceto-airola`
   - indirizzo: 82030 Tocco Caudio BN
15. **Hotel Ristorante Guardanapoli** — Airola
   - slug: `hotel-ristorante-guardanapoli-airola`
   - indirizzo: via prov.Messercola-Durazzano 2, 81023 Cervino CE
16. **Il Castello Bed&Breakfast** — Airola
   - slug: `il-castello-bed-breakfast-airola`
   - indirizzo: Via S. Pasquale, 21, 81021 Arienzo CE
17. **La Collina dei Goti Agriturismo** — Airola
   - slug: `la-collina-dei-goti-agriturismo-airola`
   - indirizzo: 82019 San Tommaso BN
18. **La Vigna - Restaurant & Hotel** — Airola
   - slug: `la-vigna-restaurant-hotel-airola`
   - indirizzo: Via Vignale, 11, 82013 Bonea BN
19. **My Place - Complesso Turistico Sportivo** — Airola
   - slug: `my-place-complesso-turistico-sportivo-airola`
   - indirizzo: Via Caracciano, 27, 82011 Airola BN
20. **Palazzo Murat Luxury Rooms** — Airola
   - slug: `palazzo-murat-luxury-rooms-airola`
   - indirizzo: Via Annunziata, 24, 81021 Arienzo CE
21. **Vanvitelli's guest house affittacamere** — Airola
   - slug: `vanvitelli-s-guest-house-affittacamere-airola`
   - indirizzo: Via Caudisi, 4, 82011 Airola BN
22. **Villa Montemma** — Airola
   - slug: `villa-montemma-airola`
   - indirizzo: Via Monaca 3, 82016 Montesarchio BN
23. **Yellow Park Hotel Restaurant** — Airola
   - slug: `yellow-park-hotel-restaurant-airola`
   - indirizzo: Via Signorindico, 8, 82011 Forchia BN
24. **Agricamping Ponte Raggio** — Airole
   - slug: `agricamping-ponte-raggio-airole`
   - indirizzo: SP68, 18035 Dolceacqua IM
25. **Agriturismo Vecchio Frantoio** — Airole
   - slug: `agriturismo-vecchio-frantoio-airole`
   - indirizzo: Via Tenente Anfosso, 226, 18039 Villatella IM
26. **Albergo Varase** — Airole
   - slug: `albergo-varase-airole`
   - indirizzo: Via Comunale di Varase, 4c, 18039 Varase IM
27. **B&B casa KaRa** — Airole
   - slug: `b-b-casa-kara-airole`
   - indirizzo: Via corsi, 18035 Dolceacqua IM
28. **B&B La Villetta** — Airole
   - slug: `b-b-la-villetta-airole`
   - indirizzo: Via San Bernardo, 17, 18035 Dolceacqua IM
29. **Camping Delle Rose** — Airole
   - slug: `camping-delle-rose-airole`
   - indirizzo: SS64, 18030 Isolabona IM
30. **Da Giua' Bed and Breakfast** — Airole
   - slug: `da-giua-bed-and-breakfast-airole`
   - indirizzo: Piazza Vittorio Emanuele, II, 7, 18030 Apricale IM
31. **Ecovillaggio Torri Superiore** — Airole
   - slug: `ecovillaggio-torri-superiore-airole`
   - indirizzo: Via Torri Superiore, 5, 18039 Ventimiglia IM
32. **Hotel Giuseppe** — Airole
   - slug: `hotel-giuseppe-airole`
   - indirizzo: Piazza Cesare Battisti, A Ferroviaria, Via della Stazione, 31, 18039 Ventimiglia IM
33. **Hotel Provenza Srl** — Airole
   - slug: `hotel-provenza-srl-airole`
   - indirizzo: Via Cornelio Tacito, 4, 18039 Ventimiglia IM
34. **Il Giardino Degli Ulivi** — Airole
   - slug: `il-giardino-degli-ulivi-airole`
   - indirizzo: Via corsi, 18035 Dolceacqua IM
35. **L'Oasi del Rossese** — Airole
   - slug: `l-oasi-del-rossese-airole`
   - indirizzo: Regione morghe, 18035 Dolceacqua IM