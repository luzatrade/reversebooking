# Blocco 484/500 — 35 strutture senza descrizione IT

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

1. **CHARME HOTEL VILLA | Principe di Fitalia** — Floridia
   - slug: `charme-hotel-villa-principe-di-fitalia-floridia`
   - indirizzo: Traversa Tonnara Terrauzza, 38, 96100 Siracusa SR
2. **Crispi 10** — Floridia
   - slug: `crispi-10-floridia`
   - indirizzo: Via Francesco Crispi, 12, 96014 Floridia SR
3. **Hotel Il Podere - Siracusa** — Floridia
   - slug: `hotel-il-podere-siracusa-floridia`
   - indirizzo: Traversa Torre Landolina, 11, 96100 Siracusa SR
4. **Hotel Lady Lusya** — Floridia
   - slug: `hotel-lady-lusya-floridia`
   - indirizzo: Str. Spinagallo, 16, 96100 Siracusa SR
5. **Hotel Vittorio Emanuele** — Floridia
   - slug: `hotel-vittorio-emanuele-floridia`
   - indirizzo: Corso Vittorio Emanuele, 765, 96014 Floridia SR
6. **Italiana Resort Maniace** — Floridia
   - slug: `italiana-resort-maniace-floridia`
   - indirizzo: Via Castello Maniace, 71, 96100 Siracusa SR
7. **Rudy Arenaile** — Floridia
   - slug: `rudy-arenaile-floridia`
   - indirizzo: Via Isola Bali, 17, 96100 Arenella SR
8. **B&B Teodora** — Fondachelli-Fantina
   - slug: `b-b-teodora-fondachelli-fantina`
   - indirizzo: Contrada, n, 8, 98036 Muscianò-cupparo ME
9. **Hotel da Peppe** — Fondachelli-Fantina
   - slug: `hotel-da-peppe-fondachelli-fantina`
   - indirizzo: Via Vittorio Emanuele, 346, 98037 Letojanni ME
10. **Al Vicoletto House** — Forza d'Agr�
   - slug: `al-vicoletto-house-forza-d-agr`
   - indirizzo: Via dei Normanni, 10, 98030 Forza d'Agrò ME
11. **B&B MareAgró** — Forza d'Agr�
   - slug: `b-b-mareagro-forza-d-agr`
   - indirizzo: V. Agrò, 18, 98028 Santa Teresa di Riva ME
12. **B&B Miroca** — Forza d'Agr�
   - slug: `b-b-miroca-forza-d-agr`
   - indirizzo: Via Consolare Valeria, 59/A, 98030 Sant'Alessio Siculo ME
13. **Bed & Breakfast Casa Famiani** — Forza d'Agr�
   - slug: `bed-breakfast-casa-famiani-forza-d-agr`
   - indirizzo: CIR: 19083038C100301-CIN: IT083038C19YSKRBXO, Via Millo, 4, 98037 Letojanni ME
14. **Casa Francesco** — Forza d'Agr�
   - slug: `casa-francesco-forza-d-agr`
   - indirizzo: Vico I di, Via Spitalio, 1, 98030 Forza d'Agrò ME
15. **Casa Vacanza La Rocca** — Forza d'Agr�
   - slug: `casa-vacanza-la-rocca-forza-d-agr`
   - indirizzo: Via Rocca, 1, 98030 Forza d'Agrò ME
16. **Domus Mea** — Forza d'Agr�
   - slug: `domus-mea-forza-d-agr`
   - indirizzo: Via Belvedere, 17, 98030 Forza d'Agrò ME
17. **Masseria Filippo de Raho - Agri Bio Relais** — Forza d'Agr�
   - slug: `masseria-filippo-de-raho-agri-bio-relais-forza-d-agr`
   - indirizzo: in fondo, Via N. Rizzo, 15, 73100 Villa Convento LE
18. **Alcantara Resort di Charme Adults Only Hotel** — Francavilla di Sicilia
   - slug: `alcantara-resort-di-charme-adults-only-hotel-francavilla-di-sicilia`
   - indirizzo: Via Colonnello F. Mannino 7, 98030 Gaggi ME
19. **Casavacanze Alcantara** — Francavilla di Sicilia
   - slug: `casavacanze-alcantara-francavilla-di-sicilia`
   - indirizzo: Contrada cipollati, 95012 Castiglione di Sicilia CT
20. **La Porta dell'Alcantara** — Francavilla di Sicilia
   - slug: `la-porta-dell-alcantara-francavilla-di-sicilia`
   - indirizzo: Via Provinciale, 12, 98030 Gaggi ME
21. **Le Oreadi** — Francavilla di Sicilia
   - slug: `le-oreadi-francavilla-di-sicilia`
   - indirizzo: Contrada Manuli, 98034 Francavilla di Sicilia ME
22. **Agriturismo La Goccia D'oro** — Francofonte
   - slug: `agriturismo-la-goccia-d-oro-francofonte`
   - indirizzo: Contrada Casa Bianca, 96010 Palazzolo Acreide SR
23. **Castello Camemi** — Francofonte
   - slug: `castello-camemi-francofonte`
   - indirizzo: Contrada Camemi, 95049 Vizzini CT
24. **Ferula loft Sortino Pantalica** — Francofonte
   - slug: `ferula-loft-sortino-pantalica-francofonte`
   - indirizzo: Via Mida, 10, 96010 Sortino SR
25. **Furrìa - bed & breakfast** — Francofonte
   - slug: `furria-bed-breakfast-francofonte`
   - indirizzo: Vizzini Scalo, 95049 Vizzini CT
26. **Serenity House di Valeria Favara** — Francofonte
   - slug: `serenity-house-di-valeria-favara-francofonte`
   - indirizzo: SP197, 95048 Scordia CT
27. **Terraeventi** — Francofonte
   - slug: `terraeventi-francofonte`
   - indirizzo: Contrada Patrìa, 6, 97012 Chiaramonte Gulfi RG
28. **Villa Cutrera** — Francofonte
   - slug: `villa-cutrera-francofonte`
   - indirizzo: Piano dell’Acqua, 4, 97012 Chiaramonte Gulfi RG
29. **B&B Corte dei Figuli** — Frazzan�
   - slug: `b-b-corte-dei-figuli-frazzan`
   - indirizzo: Via Roma, 32, 73010 San Pietro In Lama LE
30. **B&B Il Giardino di Flora** — Frazzan�
   - slug: `b-b-il-giardino-di-flora-frazzan`
   - indirizzo: Via Bellini, 2, 73020 Castromediano LE
31. **B&B La Dimora delle Grazie** — Frazzan�
   - slug: `b-b-la-dimora-delle-grazie-frazzan`
   - indirizzo: Via Duomo, 4, 73016 San Cesario di Lecce LE
32. **Corte Dei Taralli B&B** — Frazzan�
   - slug: `corte-dei-taralli-b-b-frazzan`
   - indirizzo: Corte dei Taralli, 1, 73100 Lecce LE
33. **Dimora Vico dei Nohi B&B** — Frazzan�
   - slug: `dimora-vico-dei-nohi-b-b-frazzan`
   - indirizzo: Vico dei Nohi, 7, 73100 Lecce LE
34. **La Dimora dei Professori DiffusHotel** — Frazzan�
   - slug: `la-dimora-dei-professori-diffushotel-frazzan`
   - indirizzo: Via Gioacchino Toma, 71, Via Gioacchino Toma, 65, 73100 Lecce LE
35. **Luxury B&B** — Frazzan�
   - slug: `luxury-b-b-frazzan`
   - indirizzo: Via Archimede, 16, 73100 Lecce LE