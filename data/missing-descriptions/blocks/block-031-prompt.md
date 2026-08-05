# Blocco 31/500 — 35 strutture senza descrizione IT

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

1. **Ristorante Hotel Centrale** — Agnosine
   - slug: `ristorante-hotel-centrale-agnosine`
   - indirizzo: Via Casimiro Bonomi, 2, 25078 Vestone BS
2. **Villa Cesarina** — Agnosine
   - slug: `villa-cesarina-agnosine`
   - indirizzo: Via Roma, 63, 25080 Vallio Terme BS
3. **Agordo Cerbiatto** — Agordo
   - slug: `agordo-cerbiatto-agordo`
   - indirizzo: Via Campo dei Fiori, 11, 32021 Agordo BL
4. **Agordo Suite** — Agordo
   - slug: `agordo-suite-agordo`
   - indirizzo: Viale Sommariva, 28, 32021 Agordo BL
5. **Agriturismo Busa dei Sbrase** — Agordo
   - slug: `agriturismo-busa-dei-sbrase-agordo`
   - indirizzo: via busa dei sbrase, 1, 32027 Taibon Agordino BL
6. **Albergo Dolomiti** — Agordo
   - slug: `albergo-dolomiti-agordo`
   - indirizzo: Localita' Caverson, 1, 32020 Falcade BL
7. **Albergo Pensione 2 Angeli** — Agordo
   - slug: `albergo-pensione-2-angeli-agordo`
   - indirizzo: Via Carrera, 6, 32021 Agordo BL
8. **Albergo Ristorante Monte Civetta** — Agordo
   - slug: `albergo-ristorante-monte-civetta-agordo`
   - indirizzo: Località Listolade, 44, 32027 Taibon Agordino BL
9. **Bed and Breakfast Montagna Antica** — Agordo
   - slug: `bed-and-breakfast-montagna-antica-agordo`
   - indirizzo: vicolo San Pietro, 2, 32021 Agordo BL
10. **Bed and Breakfast Sól Fiorì** — Agordo
   - slug: `bed-and-breakfast-sol-fiori-agordo`
   - indirizzo: Via Campo dei Fiori, 11, 32021 Agordo BL
11. **Hotel Alle Alpi** — Agordo
   - slug: `hotel-alle-alpi-agordo`
   - indirizzo: Piazza Kennedy, 26, 32022 Alleghe BL
12. **Hotel Alpenrose** — Agordo
   - slug: `hotel-alpenrose-agordo`
   - indirizzo: Via Coldai, 85, 32022 Alleghe BL
13. **Hotel Chalet Giasenei - Dolomitic Experience** — Agordo
   - slug: `hotel-chalet-giasenei-dolomitic-experience-agordo`
   - indirizzo: Via Prà di Là, 4, 38050 Sagron Mis TN
14. **Hotel Erice Agordo** — Agordo
   - slug: `hotel-erice-agordo-agordo`
   - indirizzo: Via IV Novembre, 13, 32021 Agordo BL
15. **Hotel Garni Roberta** — Agordo
   - slug: `hotel-garni-roberta-agordo`
   - indirizzo: Località Malga Ciapela, 68, 32023 Rocca Pietore BL
16. **Hotel Pineta** — Agordo
   - slug: `hotel-pineta-agordo`
   - indirizzo: Via Salpian, 18, 32020 Piè Falcade BL
17. **Hotel Ristorante Pasticceria Stella Alpina** — Agordo
   - slug: `hotel-ristorante-pasticceria-stella-alpina-agordo`
   - indirizzo: Piazza Municipio, 7, 32020 Piè Falcade BL
18. **Hotel San Giusto** — Agordo
   - slug: `hotel-san-giusto-agordo`
   - indirizzo: Via Fiòita, 2, 32020 Falcade BL
19. **Hotel Scoiattolo** — Agordo
   - slug: `hotel-scoiattolo-agordo`
   - indirizzo: Via Pineta, 23, 32020 Falcade BL
20. **Hotel Sporting** — Agordo
   - slug: `hotel-sporting-agordo`
   - indirizzo: Via Pecol, 7, 32012 Val di Zoldo BL
21. **HOTEL STELLA ALPINA** — Agordo
   - slug: `hotel-stella-alpina-agordo`
   - indirizzo: Via Roma, 1, 32020 Voltago Agordino BL
22. **Hotel Villa Imperina** — Agordo
   - slug: `hotel-villa-imperina-agordo`
   - indirizzo: Via Pragrande, 5, 32021 Agordo BL
23. **Affittacamere L'Aurora** — Agosta
   - slug: `affittacamere-l-aurora-agosta`
   - indirizzo: V.le Ungheria, 84, 00039 Zagarolo RM
24. **Agriturismo Le Cannucceta** — Agosta
   - slug: `agriturismo-le-cannucceta-agosta`
   - indirizzo: str. Prov, 58a/km 6.600, 00030 Castel San Pietro Romano RM
25. **Albergo Ristorante Stella** — Agosta
   - slug: `albergo-ristorante-stella-agosta`
   - indirizzo: Piazza della Liberazione, 3, 00036 Palestrina RM
26. **B&B Il Sorriso Dei Monti** — Agosta
   - slug: `b-b-il-sorriso-dei-monti-agosta`
   - indirizzo: Via Segni, 20, 02035 Orvinio RI
27. **B&B Margherita** — Agosta
   - slug: `b-b-margherita-agosta`
   - indirizzo: Via Folcara, 16/interno 4, 00025 Gerano RM
28. **LA LUNA NEL POZZO** — Agosta
   - slug: `la-luna-nel-pozzo-agosta`
   - indirizzo: Via delle Pantane, snc, 00020 Riofreddo RM
29. **La Nuova Fattoria Ristorante Hotel** — Agosta
   - slug: `la-nuova-fattoria-ristorante-hotel-agosta`
   - indirizzo: Via Tiburtina Valeria, km 68/300, 67061 Carsoli AQ
30. **Le Calecatine** — Agosta
   - slug: `le-calecatine-agosta`
   - indirizzo: Via Valle della Pastorella, 1, 67066 Rocca di Botte AQ
31. **Locanda dell'Orso** — Agosta
   - slug: `locanda-dell-orso-agosta`
   - indirizzo: 00020 Cervara di Roma RM
32. **Locanda Della Casella** — Agosta
   - slug: `locanda-della-casella-agosta`
   - indirizzo: Via della Casella, 10, 00020 Cineto Romano RM
33. **Ostello Il Girasole** — Agosta
   - slug: `ostello-il-girasole-agosta`
   - indirizzo: Via del Municipio, 5, 00020 Rocca Canterano RM
34. **The Life Hotel** — Agosta
   - slug: `the-life-hotel-agosta`
   - indirizzo: Via S. Polo dei Cavalieri, 00010 Marcellina RM
35. **Villa Clementi Boutique Hotel** — Agosta
   - slug: `villa-clementi-boutique-hotel-agosta`
   - indirizzo: Viale Giulio Venzi, 2, 00033 Cave RM