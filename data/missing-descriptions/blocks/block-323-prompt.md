# Blocco 323/500 — 35 strutture senza descrizione IT

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

1. **Hotel Don Camillo** — Brescello
   - slug: `hotel-don-camillo-brescello`
   - indirizzo: Via Strada della Cisa, 60, 42041 Brescello RE
2. **Rooms Don Alfonso** — Brescello
   - slug: `rooms-don-alfonso-brescello`
   - indirizzo: Via Emilia Est, 1/A, 43121 Parma PR
3. **Villino della Duchessa** — Brescello
   - slug: `villino-della-duchessa-brescello`
   - indirizzo: Via Cagliari, 7, 43122 Parma PR
4. **Affittacamere Bellafiora** — Bresimo
   - slug: `affittacamere-bellafiora-bresimo`
   - indirizzo: Via Bellafiora, 18, 60027 Osimo AN
5. **Agriroom** — Bresimo
   - slug: `agriroom-bresimo`
   - indirizzo: Mocenigo di Rumo, via san Vigilio 12 Via san Vigilio 12, Mocenigo di, 38020 Rumo TN
6. **Agritur Malga Bordolona Trento – Agriturismo Trento, Punto Ristoro Trento, Prodotti Tipici Trento** — Bresimo
   - slug: `agritur-malga-bordolona-trento-agriturismo-trent-bresimo`
   - indirizzo: Località Bresimo snc, 38020 Bresimo TN
7. **B&B Butterfly** — Bresimo
   - slug: `b-b-butterfly-bresimo`
   - indirizzo: Località Baselga, 17, 38020 Bresimo TN
8. **Dimora la Meridiana** — Bresimo
   - slug: `dimora-la-meridiana-bresimo`
   - indirizzo: Via Stenico, 5, 38095 Coltura TN
9. **Hotel Terme** — Bresimo
   - slug: `hotel-terme-bresimo`
   - indirizzo: Localita' Le Acque, 38020 Bresimo TN
10. **Trattoria “Il Contadino” di Lorenza Pozzatti** — Bresimo
   - slug: `trattoria-il-contadino-di-lorenza-pozzatti-bresimo`
   - indirizzo: Via Bevia, 7, 38020 Bresimo TN
11. **Atelier Guest House** — Bressana Bottarone
   - slug: `atelier-guest-house-bressana-bottarone`
   - indirizzo: Viale Carlo Marx, 15, 27058 Voghera PV
12. **Suite Vogue Sforza** — Bressana Bottarone
   - slug: `suite-vogue-sforza-bressana-bottarone`
   - indirizzo: Via Carolina Agata Bellocchio, 28, 27058 Voghera PV
13. **Albergo Garni' Cremona** — Bressanone/Brixen
   - slug: `albergo-garni-cremona-bressanone-brixen`
   - indirizzo: Viale Mozart, 2/C, 39042 Bressanone BZ
14. **Albergo Millanderhof** — Bressanone/Brixen
   - slug: `albergo-millanderhof-bressanone-brixen`
   - indirizzo: Via Plose, 58, 39042 Bressanone BZ
15. **Boutique Hotel Badhaus** — Bressanone/Brixen
   - slug: `boutique-hotel-badhaus-bressanone-brixen`
   - indirizzo: Via Ponte Aquila, 5, 39042 Bressanone BZ
16. **Cavallino d'Oro** — Bressanone/Brixen
   - slug: `cavallino-d-oro-bressanone-brixen`
   - indirizzo: Via Brennero, 3, 39042 Bressanone BZ
17. **Dominik Alpine City Wellness Hotel Brixen - Adults only** — Bressanone/Brixen
   - slug: `dominik-alpine-city-wellness-hotel-brixen-adults-bressanone-brixen`
   - indirizzo: Via Terzo di Sotto, 13, 39042 Bressanone BZ
18. **Forestis Dolomites** — Bressanone/Brixen
   - slug: `forestis-dolomites-bressanone-brixen`
   - indirizzo: Palmschoß 22, 39042 Bressanone BZ
19. **Grüner Baum** — Bressanone/Brixen
   - slug: `gruner-baum-bressanone-brixen`
   - indirizzo: Via Stufles, 11, 39042 Bressanone BZ
20. **Hotel Fernblick** — Bressanone/Brixen
   - slug: `hotel-fernblick-bressanone-brixen`
   - indirizzo: Via Obergasse 22 Fraz, Via San Leonardo, 39042 S. Andrea BZ
21. **Hotel Garni Heiseler** — Bressanone/Brixen
   - slug: `hotel-garni-heiseler-bressanone-brixen`
   - indirizzo: Via degli Alpini, 8, 39042 Bressanone BZ
22. **Hotel Gasserhof** — Bressanone/Brixen
   - slug: `hotel-gasserhof-bressanone-brixen`
   - indirizzo: Dorfstraße, 31, 39042 St. Andrä, Autonome Provinz Bozen - Südtirol
23. **Hotel Jarolim** — Bressanone/Brixen
   - slug: `hotel-jarolim-bressanone-brixen`
   - indirizzo: Bahnhofplatz, 1, 39042 Bressanone BZ
24. **Hotel Krone** — Bressanone/Brixen
   - slug: `hotel-krone-bressanone-brixen`
   - indirizzo: Via Fienili, 4, 39042 Bressanone BZ
25. **Hotel Löwenhof** — Bressanone/Brixen
   - slug: `hotel-lowenhof-bressanone-brixen`
   - indirizzo: Via Brennero, 60, 39040 Bressanone BZ
26. **Hotel Torgglerhof bei Brixen** — Bressanone/Brixen
   - slug: `hotel-torgglerhof-bei-brixen-bressanone-brixen`
   - indirizzo: Via Cornale di Sopra 25, 39042 Bressanone BZ
27. **Hotel Traube** — Bressanone/Brixen
   - slug: `hotel-traube-bressanone-brixen`
   - indirizzo: Via Roncato, 24, 39042 Bressanone BZ
28. **Lasserhaus** — Bressanone/Brixen
   - slug: `lasserhaus-bressanone-brixen`
   - indirizzo: Via Stufles, 10, 39042 Bressanone BZ
29. **My Arbor - Dolomites** — Bressanone/Brixen
   - slug: `my-arbor-dolomites-bressanone-brixen`
   - indirizzo: Leonharder Str., 26, 39042 Brixen, Autonome Provinz Bozen - Südtirol
30. **Ostello della Gioventù Kassianeum** — Bressanone/Brixen
   - slug: `ostello-della-gioventu-kassianeum-bressanone-brixen`
   - indirizzo: Brunogasse, 2, 39042 Bressanone BZ
31. **Residence Nives** — Bressanone/Brixen
   - slug: `residence-nives-bressanone-brixen`
   - indirizzo: Via Cesare Battisti, 48, 39042 Bressanone BZ
32. **Santre - dolomythic home** — Bressanone/Brixen
   - slug: `santre-dolomythic-home-bressanone-brixen`
   - indirizzo: Via Centrale, 19, 39042 Brixen, Autonome Provinz Bozen - Südtirol
33. **B&B Dal Viceré (Villa Mezzalira)** — Bressanvido
   - slug: `b-b-dal-vicere-villa-mezzalira-bressanvido`
   - indirizzo: Via S. Benedetto, 78 A, 36050 Bressanvido VI
34. **Hotel Europa** — Bressanvido
   - slug: `hotel-europa-bressanvido`
   - indirizzo: Viale Stazione, 5, 36063 Marostica VI
35. **Il Camino Rosso - The Red Chimney** — Bressanvido
   - slug: `il-camino-rosso-the-red-chimney-bressanvido`
   - indirizzo: Via Guarniere, 26/28, 36066 Ancignano VI