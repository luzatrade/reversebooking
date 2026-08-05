# Blocco 220/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Le Carovane** — Bardi
   - slug: `agriturismo-le-carovane-bardi`
   - indirizzo: Loc. Bertoli, 43053 Compiano PR
2. **Agriturismo Podere Barzia** — Bardi
   - slug: `agriturismo-podere-barzia-bardi`
   - indirizzo: loc.Barzia, 226, 43032 Bardi PR
3. **Agriturismo Poggio d'incanto** — Bardi
   - slug: `agriturismo-poggio-d-incanto-bardi`
   - indirizzo: Strada del Poggio di San Bernardino, 12, 29021 Bettola PC
4. **Antica Osteria La Colomba** — Bardi
   - slug: `antica-osteria-la-colomba-bardi`
   - indirizzo: Località Tolarolo, 206, 43049 Varsi PR
5. **B & B Le Sei Dame** — Bardi
   - slug: `b-b-le-sei-dame-bardi`
   - indirizzo: Via Giordani, 18, 43032 Bardi PR
6. **Ca' del Grano** — Bardi
   - slug: `ca-del-grano-bardi`
   - indirizzo: Via S. Francesco, 5, 43032 Bardi PR
7. **Hotel Ristorante San Marco** — Bardi
   - slug: `hotel-ristorante-san-marco-bardi`
   - indirizzo: Via Monsignor Checchi, 2, 43041 Bedonia PR
8. **Il pozzo e la macina romantic country-chic b&b** — Bardi
   - slug: `il-pozzo-e-la-macina-romantic-country-chic-b-b-bardi`
   - indirizzo: Località Fornace, 194, 43032 Bardi PR
9. **La Locanda dei 2** — Bardi
   - slug: `la-locanda-dei-2-bardi`
   - indirizzo: Via Pione, 2, 29010 Vernasca PC
10. **Prati dei Campassi** — Bardi
   - slug: `prati-dei-campassi-bardi`
   - indirizzo: Loc. Predario, 26, 43032 Bardi PR
11. **Ristorante - Hotel Stella Azzurra** — Bardi
   - slug: `ristorante-hotel-stella-azzurra-bardi`
   - indirizzo: Località Cavignaga, 100, 43041 Bedonia PR
12. **Tolasudolsa Rooms, Breakfast & Mountain Bike** — Bardi
   - slug: `tolasudolsa-rooms-breakfast-mountain-bike-bardi`
   - indirizzo: Località Sambuceto, 208, 43053 Compiano PR
13. **Villaggio Turistico Il Falco** — Bardi
   - slug: `villaggio-turistico-il-falco-bardi`
   - indirizzo: Località Pessola, 110, 43049 Pessola PR
14. **Ca di Voi** — Bardineto
   - slug: `ca-di-voi-bardineto`
   - indirizzo: Frazione Caragna, 17020 Calizzano SV
15. **Ca du 5°** — Bardineto
   - slug: `ca-du-5-bardineto`
   - indirizzo: Via Lavrio, 89, 17020 Bardino Nuovo SV
16. **Fratelli Oddone** — Bardineto
   - slug: `fratelli-oddone-bardineto`
   - indirizzo: Via Martino, 13, 17020 Bardineto SV
17. **Tra cielo e mare** — Bardineto
   - slug: `tra-cielo-e-mare-bardineto`
   - indirizzo: Via S. Sebastiano, 20, 17027 Pietra Ligure SV
18. **Un Coccodrillo a Frassino** — Bardineto
   - slug: `un-coccodrillo-a-frassino-bardineto`
   - indirizzo: Via frassino, 22, 17020 Calizzano SV
19. **Amaris Hotel - feeling Lake Garda** — Bardolino
   - slug: `amaris-hotel-feeling-lake-garda-bardolino`
   - indirizzo: Via della Pace, 18, 37016 Garda VR
20. **Art Hotel Ventaglio** — Bardolino
   - slug: `art-hotel-ventaglio-bardolino`
   - indirizzo: Via Campagnola, 52, 37011 Bardolino VR
21. **B&B Lucy Bardolino** — Bardolino
   - slug: `b-b-lucy-bardolino-bardolino`
   - indirizzo: Via Marconi, 28/1, 37011 Bardolino VR
22. **Hotel Al Sole Bardolino** — Bardolino
   - slug: `hotel-al-sole-bardolino-bardolino`
   - indirizzo: Via S. Colombano, 5, 37011 Bardolino VR
23. **Hotel Bardolino** — Bardolino
   - slug: `hotel-bardolino-bardolino`
   - indirizzo: Via Santa Cristina, 19, 37011 Bardolino VR
24. **Hotel Campagnola** — Bardolino
   - slug: `hotel-campagnola-bardolino`
   - indirizzo: Via Santa Cristina, 30, 37011 Bardolino VR
25. **Hotel Capri Bardolino** — Bardolino
   - slug: `hotel-capri-bardolino-bardolino`
   - indirizzo: Via Mirabello, 21, 37011 Bardolino VR
26. **Hotel Gabbiano by Double Hospitality** — Bardolino
   - slug: `hotel-gabbiano-by-double-hospitality-bardolino`
   - indirizzo: Via dei Cipressi, 24, 37016 Garda VR
27. **Hotel Marina** — Bardolino
   - slug: `hotel-marina-bardolino`
   - indirizzo: Via Marconi, 15, 37011 Bardolino VR
28. **Hotel Maximilian Bardolino** — Bardolino
   - slug: `hotel-maximilian-bardolino-bardolino`
   - indirizzo: Via Nicolò Copernico, 2, 37011 Bardolino VR
29. **Hotel Namia by Dori** — Bardolino
   - slug: `hotel-namia-by-dori-bardolino`
   - indirizzo: Via Fosse, 20, 37011 Bardolino VR
30. **Hotel Nettuno** — Bardolino
   - slug: `hotel-nettuno-bardolino`
   - indirizzo: Via Dante Alighieri, 41, 37011 Bardolino VR
31. **Hotel Romantic** — Bardolino
   - slug: `hotel-romantic-bardolino`
   - indirizzo: Via Berengario, 22, 37010 Cavaion Veronese VR
32. **Hotel Sportsman** — Bardolino
   - slug: `hotel-sportsman-bardolino`
   - indirizzo: Via Gardesana dell'Acqua, 17, 37011 Bardolino VR
33. **Kairos Garda Hotel** — Bardolino
   - slug: `kairos-garda-hotel-bardolino`
   - indirizzo: Via XXV Aprile, 36, 37014 Castelnuovo del Garda VR
34. **La Zerla** — Bardolino
   - slug: `la-zerla-bardolino`
   - indirizzo: Località Ca' Bottura, 3, 37011 Lago di Garda, VR
35. **Resort Locanda San Verolo Boutique Hotel - Garda Countryside & Lake** — Bardolino
   - slug: `resort-locanda-san-verolo-boutique-hotel-garda-c-bardolino`
   - indirizzo: Località S. Verolo, 1, 37010 Costermano sul Garda VR