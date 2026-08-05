# Blocco 451/500 — 35 strutture senza descrizione IT

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

1. **Hotel Regina** — Casagiove
   - slug: `hotel-regina-casagiove`
   - indirizzo: Via Nazionale Appia, 34, 81022 Casagiove CE
2. **Villa Maria Cristina** — Casagiove
   - slug: `villa-maria-cristina-casagiove`
   - indirizzo: VIA GIULIO ANTONIO ACQUAVIVA 24, Via Archivio, 16, 81100 Caserta CE
3. **Hotel Giulia Ocean Club** — Casal di Principe
   - slug: `hotel-giulia-ocean-club-casal-di-principe`
   - indirizzo: Via Circumvallazione Esterna, 120 località Ponte Riccio, 80019 Qualiano NA
4. **Hotel Miramare** — Casal di Principe
   - slug: `hotel-miramare-casal-di-principe`
   - indirizzo: Via Domitiana, 75/C, 80014 Giugliano in Campania NA
5. **Hotel Orizzonte** — Casal di Principe
   - slug: `hotel-orizzonte-casal-di-principe`
   - indirizzo: Via S. Francesco a Patria, 189, 80014 Giugliano in Campania NA
6. **Hotel Tempio** — Casal di Principe
   - slug: `hotel-tempio-casal-di-principe`
   - indirizzo: Via Carrafiello, 8, 80014 Giugliano in Campania NA
7. **Hotel Tiffany** — Casal di Principe
   - slug: `hotel-tiffany-casal-di-principe`
   - indirizzo: Via Ripuaria, 104, 80014 Giugliano in Campania NA
8. **La sosta in suite** — Casal di Principe
   - slug: `la-sosta-in-suite-casal-di-principe`
   - indirizzo: Via D. G. Giovenale, 10, 81030 Villa di Briano CE
9. **Plana Resort** — Casal di Principe
   - slug: `plana-resort-casal-di-principe`
   - indirizzo: Via Occidentale, 81030 Castel Volturno CE
10. **Agriturismo Zio Cristoforo, ristorante e piscina** — Casal Velino
   - slug: `agriturismo-zio-cristoforo-ristorante-e-piscina-casal-velino`
   - indirizzo: Via Chiuse, 40, 84040 Casal Velino SA
11. **Hotel Indaco** — Casal Velino
   - slug: `hotel-indaco-casal-velino`
   - indirizzo: Via Virgilio, 5, 84040 Marina di Casal Velino SA
12. **Hotel La Vela** — Casal Velino
   - slug: `hotel-la-vela-casal-velino`
   - indirizzo: Via Caracciolo, 96, 84068 Pioppi SA
13. **Hotel Leucosya** — Casal Velino
   - slug: `hotel-leucosya-casal-velino`
   - indirizzo: Via Donna Sabella, 1, 84040 Casal Velino SA
14. **Hotel Stella Maris 4 stelle Cilento** — Casal Velino
   - slug: `hotel-stella-maris-4-stelle-cilento-casal-velino`
   - indirizzo: Via Velia, 156, 84040 Casal Velino SA
15. **Hydra Club Hotel & Village** — Casal Velino
   - slug: `hydra-club-hotel-village-casal-velino`
   - indirizzo: Via Dominella, 16, 84040 Marina di Casal Velino SA
16. **Il Profumo dei Sensi** — Casal Velino
   - slug: `il-profumo-dei-sensi-casal-velino`
   - indirizzo: Via Umberto I, 80, 84068 Pollica SA
17. **Pensione Zio Attilio** — Casal Velino
   - slug: `pensione-zio-attilio-casal-velino`
   - indirizzo: Località Dominella, 84040 Casal Velino SA
18. **Victoria Resort** — Casal Velino
   - slug: `victoria-resort-casal-velino`
   - indirizzo: Via Porta Rosa, 49, 84046 Marina di Ascea SA
19. **Agriturismo Arkadia** — Casalanguida
   - slug: `agriturismo-arkadia-casalanguida`
   - indirizzo: Contrada Torre Sinello, 44, 66054 Vasto CH
20. **B&B da Nic e Ste** — Casalanguida
   - slug: `b-b-da-nic-e-ste-casalanguida`
   - indirizzo: Contrada Boragna Lunga 13 Incrocio Contrada Costa d’Annunzio, 66021 Casalbordino CH
21. **B&B dal Barbarossa** — Casalanguida
   - slug: `b-b-dal-barbarossa-casalanguida`
   - indirizzo: Via Difenza, 37 zona, 66054 Roselli CH
22. **B&B Rosa Dalfonsina** — Casalanguida
   - slug: `b-b-rosa-dalfonsina-casalanguida`
   - indirizzo: Contrada Pallano, 10, 66020 Villalfonsina CH
23. **B&B Casino del Monaco** — Casalattico
   - slug: `b-b-casino-del-monaco-casalattico`
   - indirizzo: Via Casino del Monaco, 1, 03034 Casalvieri FR
24. **Casa Marianna B&B** — Casalattico
   - slug: `casa-marianna-b-b-casalattico`
   - indirizzo: Vico Tramontana, 3, 03030 Fontechiari FR
25. **Agriturismo La Costa dei Trabocchi** — Casalbordino
   - slug: `agriturismo-la-costa-dei-trabocchi-casalbordino`
   - indirizzo: Contrada Piana S. Tommaso, 66020 Torino di Sangro CH
26. **Agriturismo Santo Stefano in Rivo Maris Casalbordino lido** — Casalbordino
   - slug: `agriturismo-santo-stefano-in-rivo-maris-casalbor-casalbordino`
   - indirizzo: Contrada Santo Stefano, 8, 66021 Casalbordino CH
27. **B&B Corte Rossetti Relax Assoluto | Luxury Urban Spa** — Casalbordino
   - slug: `b-b-corte-rossetti-relax-assoluto-luxury-urban-s-casalbordino`
   - indirizzo: Vicolo III Roma, 1, 66021 Casalbordino CH
28. **B&B Dimora Portanuova** — Casalbordino
   - slug: `b-b-dimora-portanuova-casalbordino`
   - indirizzo: Via Porta Nuova, 16, 66021 Casalbordino CH
29. **B&B Il respiro del mare** — Casalbordino
   - slug: `b-b-il-respiro-del-mare-casalbordino`
   - indirizzo: via Emilio Alessandrini, 63, 66021 Lido di Casalbordino CH
30. **Borgo Sabelli** — Casalbordino
   - slug: `borgo-sabelli-casalbordino`
   - indirizzo: Contrada Piana Sabelli, 22, 66021 Casalbordino CH
31. **Hotel Calgary** — Casalbordino
   - slug: `hotel-calgary-casalbordino`
   - indirizzo: Via Vittorio Bachelet, 70, 66021 Casalbordino CH
32. **Hotel Rio** — Casalbordino
   - slug: `hotel-rio-casalbordino`
   - indirizzo: Via Scirocco, 5, 66054 Vasto CH
33. **Hotel Ristorante Le Morge** — Casalbordino
   - slug: `hotel-ristorante-le-morge-casalbordino`
   - indirizzo: Contrada Palude, 54, 66020 Torino di Sangro CH
34. **Hotel Solaris** — Casalbordino
   - slug: `hotel-solaris-casalbordino`
   - indirizzo: Contrada Termine, 1, 66021 Casalbordino CH
35. **Hotel Sporting Casalbordino** — Casalbordino
   - slug: `hotel-sporting-casalbordino-casalbordino`
   - indirizzo: Via Alessandrini, 55, 66021 Casalbordino CH