# Blocco 276/500 — 35 strutture senza descrizione IT

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

1. **La Maddalena Suite & Rooms** — Bitonto
   - slug: `la-maddalena-suite-rooms-bitonto`
   - indirizzo: Vico Galliani, 16, 70032 Bitonto BA
2. **Orchidea** — Bitonto
   - slug: `orchidea-bitonto`
   - indirizzo: Via Giuseppe Lembo, 13, 70127 Bari BA
3. **Palazzo Antica Via Appia** — Bitonto
   - slug: `palazzo-antica-via-appia-bitonto`
   - indirizzo: Via Porta Robustina, 34, 70032 Bitonto BA
4. **San Marco Antico Relais** — Bitonto
   - slug: `san-marco-antico-relais-bitonto`
   - indirizzo: Via Altone, S.N, 70032 Bitonto BA
5. **Suite Spa Of Dreams** — Bitonto
   - slug: `suite-spa-of-dreams-bitonto`
   - indirizzo: Corte S. Domenico, 6, 70032 Bitonto BA
6. **Tenuta Gurgo** — Bitonto
   - slug: `tenuta-gurgo-bitonto`
   - indirizzo: Via Patierno, 70032 C.da Santa Susanna, Bitonto BA
7. **Villa Palladino** — Bitonto
   - slug: `villa-palladino-bitonto`
   - indirizzo: Via Paul Harris, 22, 70054 Giovinazzo BA
8. **B&B Alta Dimora** — Bitritto
   - slug: `b-b-alta-dimora-bitritto`
   - indirizzo: Via Filippo Turati, 2, 70020 Bitritto BA
9. **B&B Butterfly Suite** — Bitritto
   - slug: `b-b-butterfly-suite-bitritto`
   - indirizzo: Via Alcide De Gasperi, 8A, 70020 Bitritto BA
10. **B&B Casa di Illy** — Bitritto
   - slug: `b-b-casa-di-illy-bitritto`
   - indirizzo: Via Luigi Settembrini, 29, 70020 Bitritto BA
11. **B&B Dormireabari** — Bitritto
   - slug: `b-b-dormireabari-bitritto`
   - indirizzo: Via Giuseppe Mazzini, 20, 70020 Bitritto BA
12. **B&B La Dimora del Re** — Bitritto
   - slug: `b-b-la-dimora-del-re-bitritto`
   - indirizzo: Via Don Lorenzo Milani, 18/20, 70020 Bitritto BA
13. **B&B La perla** — Bitritto
   - slug: `b-b-la-perla-bitritto`
   - indirizzo: Via Giuseppe Lembo, 6, 70127 Bari BA
14. **B&B MIRAGE** — Bitritto
   - slug: `b-b-mirage-bitritto`
   - indirizzo: Via Bitritto, 128/bis, 70124 Bari BA
15. **Bed & Breakfast Santa Fara Residence** — Bitritto
   - slug: `bed-breakfast-santa-fara-residence-bitritto`
   - indirizzo: Via Bitritto, 100d, 70124 Bari BA
16. **Dimora Odigitria B&B** — Bitritto
   - slug: `dimora-odigitria-b-b-bitritto`
   - indirizzo: Via Fascilla, 1, 70020 Bitritto BA
17. **Hotel New Bari** — Bitritto
   - slug: `hotel-new-bari-bitritto`
   - indirizzo: Via Giuseppe Mazzini, 34, 70020 Bitritto BA
18. **Hotel Olivò** — Bitritto
   - slug: `hotel-olivo-bitritto`
   - indirizzo: Via Carlo Levi, 12, 70020 Bitritto BA
19. **Il Bergamotto • Affittacamere • Guesthouse • B&B** — Bitritto
   - slug: `il-bergamotto-affittacamere-guesthouse-b-b-bitritto`
   - indirizzo: Via Monsignor Enrico Nicodemo, 16, 70020 Bitritto BA
20. **Palazzo Mimi** — Bitritto
   - slug: `palazzo-mimi-bitritto`
   - indirizzo: Via Luigi Cadorna, 4, 70020 Bitritto BA
21. **Paradise Rooms Apartments** — Bitritto
   - slug: `paradise-rooms-apartments-bitritto`
   - indirizzo: Via Nicola Balenzano, 21, 70020 Bitritto BA
22. **Vetritte Luxury** — Bitritto
   - slug: `vetritte-luxury-bitritto`
   - indirizzo: Via Giusti Vescovo, 6, 70020 Bitritto BA
23. **Agua Dorada boutique hotel** — Bitti
   - slug: `agua-dorada-boutique-hotel-bitti`
   - indirizzo: Via Berlinguer, 7, 08020 Lula NU
24. **Albergo Antico Borgo** — Bitti
   - slug: `albergo-antico-borgo-bitti`
   - indirizzo: V. Canne al Vento, 7, 08020 Galtellì NU
25. **B&B Mes'Agustu** — Bitti
   - slug: `b-b-mes-agustu-bitti`
   - indirizzo: Via Cedrino, 08020 Galtellì NU
26. **B&B Notte al Museo** — Bitti
   - slug: `b-b-notte-al-museo-bitti`
   - indirizzo: Via Goffredo Mameli, 08021 Bitti NU
27. **B&B Oasi Tepilora** — Bitti
   - slug: `b-b-oasi-tepilora-bitti`
   - indirizzo: V. Nino Bixio, 95, 08021 Bitti NU
28. **B&B Roseddu** — Bitti
   - slug: `b-b-roseddu-bitti`
   - indirizzo: Via Brigata Reggio, 6, 08021 Bitti NU
29. **B&B Sa Domo de Diosa** — Bitti
   - slug: `b-b-sa-domo-de-diosa-bitti`
   - indirizzo: 08021 Bitti NU
30. **B&B Sa Zodia Guest House** — Bitti
   - slug: `b-b-sa-zodia-guest-house-bitti`
   - indirizzo: Via Brescia, 25, 08021 Bitti NU
31. **B&B Santu Tomas** — Bitti
   - slug: `b-b-santu-tomas-bitti`
   - indirizzo: Via S. Tommaso, 2, 08021 Bitti NU
32. **Casa Solotti** — Bitti
   - slug: `casa-solotti-bitti`
   - indirizzo: Localita'Solotti Monte Ortobene, Nuoro, 08100 Nuoro NU
33. **Grazia Deledda** — Bitti
   - slug: `grazia-deledda-bitti`
   - indirizzo: Via Nazionale, 233, 08020 Galtellì NU
34. **Mary House** — Bitti
   - slug: `mary-house-bitti`
   - indirizzo: Via Berbera, 2, 08100 Nuoro NU
35. **Nughe 'e' Oro Guesthouse Homestay** — Bitti
   - slug: `nughe-e-oro-guesthouse-homestay-bitti`
   - indirizzo: Via Giacomo Matteotti, 14, 08100 Nuoro NU