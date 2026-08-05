# Blocco 293/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Alleluja: Country House and Glamping Resort** — Bore
   - slug: `agriturismo-alleluja-country-house-and-glamping-bore`
   - indirizzo: Via Besozzola, 34, 43047 Berzieri PR
2. **Albergo San Carlo** — Bore
   - slug: `albergo-san-carlo-bore`
   - indirizzo: V.le Giacomo Matteotti, 33, 43039 Salsomaggiore Terme PR
3. **Grand Hotel Regina Salsomaggiore Terme** — Bore
   - slug: `grand-hotel-regina-salsomaggiore-terme-bore`
   - indirizzo: Largo Roma, 3, 43039 Salsomaggiore Terme PR
4. **Green Park Monastero** — Bore
   - slug: `green-park-monastero-bore`
   - indirizzo: Località Casale Monastero, 13, 29020 Morfasso PC
5. **Hotel Amica** — Bore
   - slug: `hotel-amica-bore`
   - indirizzo: Viale Rimembranze, 6 bis, 43039 Salsomaggiore Terme PR
6. **Hotel Residence Ricordo Du Parc** — Bore
   - slug: `hotel-residence-ricordo-du-parc-bore`
   - indirizzo: Via Tabiano, 39, 43039 Bagni di Tabiano PR
7. **Room & Breakfast Diana E Ninni** — Bore
   - slug: `room-breakfast-diana-e-ninni-bore`
   - indirizzo: Via Trento, 4, 43039 Salsomaggiore Terme PR
8. **Società Agricola Visconti Massimo & C.** — Bore
   - slug: `societa-agricola-visconti-massimo-c-bore`
   - indirizzo: Località Pollorsi, 1, 29010 Vernasca PC
9. **Agriturismo San Giuseppe** — Boretto
   - slug: `agriturismo-san-giuseppe-boretto`
   - indirizzo: Via L. Bertozzi, 24, 42043 Gattatico RE
10. **Albergo delle industrie** — Boretto
   - slug: `albergo-delle-industrie-boretto`
   - indirizzo: Via delle Industrie, 2, 26041 Casalmaggiore CR
11. **alzaia38** — Boretto
   - slug: `alzaia38-boretto`
   - indirizzo: Via Trento, 8, 42022 Boretto RE
12. **B&B Antica cascina** — Boretto
   - slug: `b-b-antica-cascina-boretto`
   - indirizzo: Via Geminiolo, 26, 42022 Boretto RE
13. **B&B da Luisa** — Boretto
   - slug: `b-b-da-luisa-boretto`
   - indirizzo: Via Pietro Saccani, 58, 42022 Boretto RE
14. **B&B Happiness in the Country** — Boretto
   - slug: `b-b-happiness-in-the-country-boretto`
   - indirizzo: Via Ghiarole, 2, 42041 Ghiarole RE
15. **B&B Il Ponticello** — Boretto
   - slug: `b-b-il-ponticello-boretto`
   - indirizzo: Via Pieve, 200, 42044 Gualtieri RE
16. **B&B La casa dei prugni** — Boretto
   - slug: `b-b-la-casa-dei-prugni-boretto`
   - indirizzo: Via Geminiolo, 43, 42022 Boretto RE
17. **B&B La Casetta** — Boretto
   - slug: `b-b-la-casetta-boretto`
   - indirizzo: via Quadra Pazzaglia Nord n°1, 42041 Ghiarole di Brescello RE
18. **B&B Stazione Don Camillo** — Boretto
   - slug: `b-b-stazione-don-camillo-boretto`
   - indirizzo: Viale Venturini, 11, 42041 Brescello RE
19. **bed and breakfast l'Ulma e l'Opi** — Boretto
   - slug: `bed-and-breakfast-l-ulma-e-l-opi-boretto`
   - indirizzo: Via Sacco e Vanzetti, 5/B, 42016 Guastalla RE
20. **CONFIDENCE HOTEL LIGABUE** — Boretto
   - slug: `confidence-hotel-ligabue-boretto`
   - indirizzo: Piazza IV Novembre, 6, 42044 Gualtieri RE
21. **Hotel Residence Parma** — Boretto
   - slug: `hotel-residence-parma-boretto`
   - indirizzo: Via Emilia Est, 250, 43123 Parma PR
22. **La Casa all'ombra della Chiesa** — Boretto
   - slug: `la-casa-all-ombra-della-chiesa-boretto`
   - indirizzo: Via M. Nizzoli, 42041 Brescello RE
23. **La Sosta fuori stazione B&B** — Boretto
   - slug: `la-sosta-fuori-stazione-b-b-boretto`
   - indirizzo: Viale Venturini, 12, 42041 Brescello RE
24. **Luna Residence Hotel** — Boretto
   - slug: `luna-residence-hotel-boretto`
   - indirizzo: Via Antonio Maria Molossi, 14, 26041 Casalmaggiore CR
25. **Soc. Agr. La Pervinca s.s.** — Boretto
   - slug: `soc-agr-la-pervinca-s-s-boretto`
   - indirizzo: Via delle Ville, n° 54, 42016 San Girolamo RE
26. **Trattoria Del Pesce Albergo del Po Osteria al Ponte museo dei pontieri** — Boretto
   - slug: `trattoria-del-pesce-albergo-del-po-osteria-al-po-boretto`
   - indirizzo: Via Argine, 5, 42022 Boretto RE
27. **Agriturismo Fornace Certosa** — Borgarello
   - slug: `agriturismo-fornace-certosa-borgarello`
   - indirizzo: Via Fratelli Cervi, 2/4, 27010 Giussago PV
28. **Agriturismo Maiocchi** — Borgarello
   - slug: `agriturismo-maiocchi-borgarello`
   - indirizzo: strada provinciale per San Genesio, 2, 27010 Borgarello PV
29. **B&B Borgo Tre Case (sulla Via Francigena a 2 passi da Pavia)** — Borgarello
   - slug: `b-b-borgo-tre-case-sulla-via-francigena-a-2-pass-borgarello`
   - indirizzo: Strada Canarazzo - cascina Casoni 6, 27020 Carbonara al Ticino PV
30. **B&B One Million** — Borgarello
   - slug: `b-b-one-million-borgarello`
   - indirizzo: Via Giovanni Verga, 33, 27010 Borgarello PV
31. **Abba Camere B&B** — Borgaro Torinese
   - slug: `abba-camere-b-b-borgaro-torinese`
   - indirizzo: Via Lanzo, 125, 10071 Borgaro Torinese TO
32. **Agriturismo Cascina Argentera** — Borgaro Torinese
   - slug: `agriturismo-cascina-argentera-borgaro-torinese`
   - indirizzo: Via Argentera, 35, 10079 Mappano TO
33. **Agriturismo Cascina Domina** — Borgaro Torinese
   - slug: `agriturismo-cascina-domina-borgaro-torinese`
   - indirizzo: Str. della Trinita', 42, 10090 Gassino Torinese TO
34. **Agriturismo I Camini** — Borgaro Torinese
   - slug: `agriturismo-i-camini-borgaro-torinese`
   - indirizzo: Str. Fornacino, 95, 10040 Leini TO
35. **Agriturismo Il Ristoro dei Folletti - Ristorazione, Azienda Agricola e Bed&Breakfast** — Borgaro Torinese
   - slug: `agriturismo-il-ristoro-dei-folletti-ristorazione-borgaro-torinese`
   - indirizzo: Str. Ceriaglio, 7, 10020 Casalborgone TO