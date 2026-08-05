# Blocco 370/500 — 35 strutture senza descrizione IT

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

1. **Kala Kretosa Hotel** — Calopezzati
   - slug: `kala-kretosa-hotel-calopezzati`
   - indirizzo: Viale Antonio Gramsci, 102, 87060 Calopezzati CS
2. **La Siesta Hotel** — Calopezzati
   - slug: `la-siesta-hotel-calopezzati`
   - indirizzo: Via Firenze, 1, 87060 Marina di Pietrapaola CS
3. **Palazzo Fiorentini Charme Hotel** — Calopezzati
   - slug: `palazzo-fiorentini-charme-hotel-calopezzati`
   - indirizzo: Via Fiorentini, 32, 87062 Cariati CS
4. **Agriturismo Cascina Bo** — Calosso
   - slug: `agriturismo-cascina-bo-calosso`
   - indirizzo: Reg. Castellazzi, 26, 14053 Canelli AT
5. **Agriturismo Il Volo** — Calosso
   - slug: `agriturismo-il-volo-calosso`
   - indirizzo: via stazione, 6, 14052 Calosso AT
6. **B&B La casa del Prof CIN IT005015C1UUGF65TT- CIR 005015-BEB-00003** — Calosso
   - slug: `b-b-la-casa-del-prof-cin-it005015c1uugf65tt-cir-calosso`
   - indirizzo: Strada Crevacuore, 20, 14052 Calosso AT
7. **B&B La Creusa** — Calosso
   - slug: `b-b-la-creusa-calosso`
   - indirizzo: Str. Sant'Anna, 28, 14052 Calosso AT
8. **Babo Agriturismo Conviviale** — Calosso
   - slug: `babo-agriturismo-conviviale-calosso`
   - indirizzo: Via Annunziata, 26, 14054 Castagnole delle Lanze AT
9. **Bed and Breakfast L'Antico Fienile** — Calosso
   - slug: `bed-and-breakfast-l-antico-fienile-calosso`
   - indirizzo: Str. S. Siro, 32, 14052 Calosso AT
10. **Bed and Breakfast Villa Giara** — Calosso
   - slug: `bed-and-breakfast-villa-giara-calosso`
   - indirizzo: Via Ripe, 5, 14052 Calosso AT
11. **Ca' Boscodonne** — Calosso
   - slug: `ca-boscodonne-calosso`
   - indirizzo: Via Boscodonne, 1, 14052 Calosso AT
12. **Ca' Rapulin** — Calosso
   - slug: `ca-rapulin-calosso`
   - indirizzo: Str. Bionzo, 13/14, 14052 Calosso AT
13. **La Casa nel Verde** — Calosso
   - slug: `la-casa-nel-verde-calosso`
   - indirizzo: Via XX Settembre, 5, 14052 Calosso AT
14. **Tenuta Le More** — Calosso
   - slug: `tenuta-le-more-calosso`
   - indirizzo: Str. Sant'Anna, 42, 14052 Calosso AT
15. **B&B Domus San Pietro** — Caloveto
   - slug: `b-b-domus-san-pietro-caloveto`
   - indirizzo: Via S. Pietro, 4, 87064 Corigliano-Rossano CS
16. **B&B La Piana degli Ulivi** — Caloveto
   - slug: `b-b-la-piana-degli-ulivi-caloveto`
   - indirizzo: C.da Amica snc - Loc, area urbana, Str. Trapesimi, 87064 Corigliano CS
17. **EGO’ Marine** — Caloveto
   - slug: `ego-marine-caloveto`
   - indirizzo: Via Colorado, 3, 87060 Marina di Mandatoriccio CS
18. **Hotel Murano** — Caloveto
   - slug: `hotel-murano-caloveto`
   - indirizzo: Viale Mediterraneo, 2, 87064 Rossano Stazione CS
19. **Hotel San Luca** — Caloveto
   - slug: `hotel-san-luca-caloveto`
   - indirizzo: C.da Frasso, Snc, 87064 Rossano CS
20. **Il Biscardino** — Caloveto
   - slug: `il-biscardino-caloveto`
   - indirizzo: SS177, snc, 87060 Cropalati CS
21. **La Sacristana BnB** — Caloveto
   - slug: `la-sacristana-bnb-caloveto`
   - indirizzo: Via Francesco Godino - Già, Piazza Sfera, 87066 Longobucco CS
22. **Casa del Sole - Antica Masseria Mizzaro** — Caltabellotta
   - slug: `casa-del-sole-antica-masseria-mizzaro-caltabellotta`
   - indirizzo: Unnamed Road, 92010 Caltabellotta AG
23. **Casa Puccio** — Caltabellotta
   - slug: `casa-puccio-caltabellotta`
   - indirizzo: 92010 Caltabellotta AG
24. **Hotel Akrabello** — Caltabellotta
   - slug: `hotel-akrabello-caltabellotta`
   - indirizzo: Via Parco degli Angeli, 92100 Agrigento AG
25. **agritur costabaira** — Caltagirone
   - slug: `agritur-costabaira-caltagirone`
   - indirizzo: s.nstrada provinciale, km 2, 95041 Costabaira CT
26. **Agriturismo Russa Belladonna** — Caltagirone
   - slug: `agriturismo-russa-belladonna-caltagirone`
   - indirizzo: 95041 Piano San Paolo CT
27. **Agriturismo San Bartolomeo SoleLuna** — Caltagirone
   - slug: `agriturismo-san-bartolomeo-soleluna-caltagirone`
   - indirizzo: Via San Bartolomeo, 3, 95041 Caltagirone CT
28. **B&B la Pilozza Infiorata a Caltagirone** — Caltagirone
   - slug: `b-b-la-pilozza-infiorata-a-caltagirone-caltagirone`
   - indirizzo: Via SS. Salvatore, 97, 95041 Caltagirone CT
29. **B&B Palazzo Taranto** — Caltagirone
   - slug: `b-b-palazzo-taranto-caltagirone`
   - indirizzo: Via S. Giuseppe, 1, 95041 Caltagirone CT
30. **Caltagirone Casa Serena** — Caltagirone
   - slug: `caltagirone-casa-serena-caltagirone`
   - indirizzo: Via Circonvallazione, 136, 95041 Caltagirone CT
31. **Carruggiu Casavacanze** — Caltagirone
   - slug: `carruggiu-casavacanze-caltagirone`
   - indirizzo: Via Bongiovanni, 48, 95041 Caltagirone CT
32. **Casa Silvia** — Caltagirone
   - slug: `casa-silvia-caltagirone`
   - indirizzo: Via Palo, 10, 95041 Caltagirone CT
33. **Colle San Mauro** — Caltagirone
   - slug: `colle-san-mauro-caltagirone`
   - indirizzo: contrada san mauro di sotto sn, 95041 Caltagirone CT
34. **Hotel NH Caltagirone Villa San Mauro** — Caltagirone
   - slug: `hotel-nh-caltagirone-villa-san-mauro-caltagirone`
   - indirizzo: Via Portosalvo, 14, 95041 Caltagirone CT
35. **Hotel Villa Sturzo** — Caltagirone
   - slug: `hotel-villa-sturzo-caltagirone`
   - indirizzo: Via Mons. Francesco Fasola, 3, 95041 Caltagirone CT