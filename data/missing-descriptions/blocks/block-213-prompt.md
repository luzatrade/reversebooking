# Blocco 213/500 — 35 strutture senza descrizione IT

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

1. **B&B il Sasso Bianco IT012055C16CJVBT5T** — Barasso
   - slug: `b-b-il-sasso-bianco-it012055c16cjvbt5t-barasso`
   - indirizzo: Via Streccione, 3, 21025 Comerio VA
2. **B&B TraMonti e Laghi** — Barasso
   - slug: `b-b-tramonti-e-laghi-barasso`
   - indirizzo: Via Stazione, 3, 21025 Comerio VA
3. **CASALE DEL CANTICO** — Barasso
   - slug: `casale-del-cantico-barasso`
   - indirizzo: Via Valcuvia, 2, 21030 Brenta VA
4. **Los Perros Hermanos** — Barasso
   - slug: `los-perros-hermanos-barasso`
   - indirizzo: Via Luigi Galvani, 16, 21028 Villaggio Ignis VA
5. **"Via dei Mari" Guest House** — Baratili San Pietro
   - slug: `via-dei-mari-guest-house-baratili-san-pietro`
   - indirizzo: Via Case Sparse, 09170 Oristano OR
6. **40º Parallelo Affittacamere/GuestHouse** — Baratili San Pietro
   - slug: `40-parallelo-affittacamere-guesthouse-baratili-san-pietro`
   - indirizzo: Via Tiziano Vecellio, 11, 09070 Riola Sardo OR
7. **Affittacamere Shardana** — Baratili San Pietro
   - slug: `affittacamere-shardana-baratili-san-pietro`
   - indirizzo: Via Sassari, 21, 09072 Cabras OR
8. **Agriturismo Il Melograno** — Baratili San Pietro
   - slug: `agriturismo-il-melograno-baratili-san-pietro`
   - indirizzo: Via G. Leopardi, 13, 09070 Riola Sardo OR
9. **Agriturismo La Cantina** — Baratili San Pietro
   - slug: `agriturismo-la-cantina-baratili-san-pietro`
   - indirizzo: Via Chiesa, 54, 09070 Baratili San Pietro OR
10. **Agriturismo S'Omu** — Baratili San Pietro
   - slug: `agriturismo-s-omu-baratili-san-pietro`
   - indirizzo: Via Roma, 49-51, 09070 Baratili San Pietro OR
11. **Agriturismo Sa Crannaccia** — Baratili San Pietro
   - slug: `agriturismo-sa-crannaccia-baratili-san-pietro`
   - indirizzo: Corso Amerigo Vespucci, 32, 09072 Cabras OR
12. **B&B Al Rimedio** — Baratili San Pietro
   - slug: `b-b-al-rimedio-baratili-san-pietro`
   - indirizzo: Via delle Grazie, 2, 09170 Oristano OR
13. **B&B Marino E Lily** — Baratili San Pietro
   - slug: `b-b-marino-e-lily-baratili-san-pietro`
   - indirizzo: Via Grazia Deledda, 26, 09070 Baratili San Pietro OR
14. **B&B Rita & Renzo** — Baratili San Pietro
   - slug: `b-b-rita-renzo-baratili-san-pietro`
   - indirizzo: Via Roma, 11A, 09070 Riola Sardo OR
15. **Gavino** — Baratili San Pietro
   - slug: `gavino-baratili-san-pietro`
   - indirizzo: Via Roma, 104, 09070 Riola Sardo OR
16. **Gioia Guest House** — Baratili San Pietro
   - slug: `gioia-guest-house-baratili-san-pietro`
   - indirizzo: 6/A Via Salvator Anjelo de Castro, Via Regina Elena, 28, 09072 Cabras OR
17. **Hotel Lucrezia** — Baratili San Pietro
   - slug: `hotel-lucrezia-baratili-san-pietro`
   - indirizzo: Via Roma, 14, 09070 Riola Sardo OR
18. **Hotel Villa Canu** — Baratili San Pietro
   - slug: `hotel-villa-canu-baratili-san-pietro`
   - indirizzo: Via Firenze, 9, 09072 Cabras OR
19. **Il Giglio** — Baratili San Pietro
   - slug: `il-giglio-baratili-san-pietro`
   - indirizzo: SP9, 09170 Massama OR
20. **La Casa di Desideria** — Baratili San Pietro
   - slug: `la-casa-di-desideria-baratili-san-pietro`
   - indirizzo: Via S. Pietro, 6, 09070 Baratili San Pietro OR
21. **S'Apprigu** — Baratili San Pietro
   - slug: `s-apprigu-baratili-san-pietro`
   - indirizzo: Via Roma, 34, 09072 Cabras OR
22. **S'Ommu Ezza** — Baratili San Pietro
   - slug: `s-ommu-ezza-baratili-san-pietro`
   - indirizzo: Via Vittorio Emanuele III, 31, 09070 Narbolia OR
23. **Sa Doa** — Baratili San Pietro
   - slug: `sa-doa-baratili-san-pietro`
   - indirizzo: via Sebastiano Satta, Via Alessandro Manzoni, 3, 09070 Baratili San Pietro OR
24. **Agriturismo Cascina Del Peso** — Barbania
   - slug: `agriturismo-cascina-del-peso-barbania`
   - indirizzo: Via Lombardore, 306, 10040 Leini TO
25. **Agriturismo la Bedina** — Barbania
   - slug: `agriturismo-la-bedina-barbania`
   - indirizzo: Via Levone, 10080 Rivara TO
26. **Albergo Sangri-la'** — Barbania
   - slug: `albergo-sangri-la-barbania`
   - indirizzo: Via delle Valli, 10, 10074 Lanzo Torinese TO
27. **Bed & Breakfast da Kate** — Barbania
   - slug: `bed-breakfast-da-kate-barbania`
   - indirizzo: Via Principessa Jolanda, 11, 10090 Foglizzo TO
28. **Best Western Plus Hotel Le Rondini** — Barbania
   - slug: `best-western-plus-hotel-le-rondini-barbania`
   - indirizzo: Via Parrocchia, 5, 10070 San Francesco Al Campo TO
29. **Dimora A Corte** — Barbania
   - slug: `dimora-a-corte-barbania`
   - indirizzo: Via Torino, 2, 10075 Mathi TO
30. **Il Mulino B&B Rivara** — Barbania
   - slug: `il-mulino-b-b-rivara-barbania`
   - indirizzo: Casale Molino, 1, 10080 Rivara TO
31. **La casa dei fiori** — Barbania
   - slug: `la-casa-dei-fiori-barbania`
   - indirizzo: Via dei Fiori, 17, 10077 San Maurizio Canavese TO
32. **Via Ai Portici Suite** — Barbania
   - slug: `via-ai-portici-suite-barbania`
   - indirizzo: Via Gibellini, 87, 10072 Caselle Torinese TO
33. **Agriturismo B&B Cadabò** — Barbara
   - slug: `agriturismo-b-b-cadabo-barbara`
   - indirizzo: C.da Sant Angelo 4, 60036 Montecarotto AN
34. **Agriturismo il Bacucco** — Barbara
   - slug: `agriturismo-il-bacucco-barbara`
   - indirizzo: Contrada Bacucco, 11, 60036 Montecarotto AN
35. **Agriturismo Lo Sgorzolo** — Barbara
   - slug: `agriturismo-lo-sgorzolo-barbara`
   - indirizzo: Via Montesecco, 67, 61045 Pergola PU