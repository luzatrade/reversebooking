/**
 * Aggiorna descrizioni batch 4 (13 hotel wellness/luxury) su Supabase e JSON.
 * Usage: node scripts/update-batch-4-descriptions.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const UPDATES = [
  {
    slug: "grand-hotel-excelsior-vittoria-sorrento",
    description_en: `Overlooking the Gulf of Naples, the 5-star luxury Grand Hotel Excelsior Vittoria is set atop a cliff in the heart of Sorrento. Surrounded by a private 5-acre Mediterranean botanical park filled with citrus trees, this iconic historic property features elegant 19th-century architecture, period furnishings, and panoramic sea views. Guests can enjoy a Michelin-starred dining experience, a large outdoor heated pool with a sun terrace, and a boutique spa offering holistic wellness treatments.

Key Amenities:
- Outdoor heated pool and sun loungers
- Michelin-starred Terrazza Bosquet restaurant
- Boutique Spa & Wellness Center
- Private lift with direct access to Sorrento Pier
- Free High-Speed Wi-Fi & Private Valet Parking

Location & Nearby Attractions:
Situated directly on Piazza Tasso in central Sorrento, the property is ideally located for exploring the Amalfi Coast and nearby islands.
- Piazza Tasso (Sorrento Main Square): 1-minute walk
- Sorrento Marina Piccola (Ferries to Capri & Ischia): 2-minute lift ride / 5-minute walk
- Sorrento Train Station (Circumvesuviana): 5-minute walk
- Positano: 15 km (9.3 miles)`,
    description: `Affacciato sul Golfo di Napoli, il Grand Hotel Excelsior Vittoria 5 stelle lusso sorge su una scogliera nel cuore di Sorrento. Circondato da un parco botanico mediterraneo privato di cinque ettari con agrumi, questo iconico albergo storico offre elegante architettura ottocentesca, arredi d'epoca e viste panoramiche sul mare. Gli ospiti possono gustare un ristorante stellato Michelin, una grande piscina riscaldata all'aperto con solarium e una boutique spa con trattamenti olistici.

Servizi principali:
- Piscina riscaldata all'aperto e lettini prendisole
- Ristorante stellato Michelin Terrazza Bosquet
- Boutique Spa & Wellness Center
- Ascensore privato con accesso diretto al Molo di Sorrento
- Wi-Fi ad alta velocità gratuito e parcheggio custodito privato

Posizione e attrazioni vicine:
Situato direttamente su Piazza Tasso nel centro di Sorrento, la struttura è ideale per esplorare la Costiera Amalfitana e le isole vicine.
- Piazza Tasso: 1 minuto a piedi
- Marina Piccola di Sorrento (traghetti per Capri e Ischia): 2 minuti in ascensore / 5 minuti a piedi
- Stazione di Sorrento (Circumvesuviana): 5 minuti a piedi
- Positano: 15 km`,
  },
  {
    slug: "qc-terme-monte-bianco-pre-saint-didier",
    description_en: `Nestled at the foot of Mont Blanc, QC Terme Monte Bianco is a 4-star spa resort offering an alpine retreat in Palleusieux. Blending traditional Valle d'Aosta stone-and-wood architecture with contemporary wellness facilities, the hotel features an extensive thermal spa with outdoor heated pools facing the snow-capped mountain peaks. Rooms are styled with alpine elegance and offer mountain or garden views.

Key Amenities:
- Thermal spa circuit with outdoor whirlpools, saunas, and steam rooms
- Panoramic mountain-view relaxation lounges
- On-site alpine restaurant serving regional specialties
- Daily wellness rituals and evening aperitifs
- Free Wi-Fi and private parking

Location & Nearby Attractions:
- Pré-Saint-Didier Thermal Baths: 2-minute drive / 15-minute walk
- Courmayeur Ski Resort & Town Center: 5 km (3.1 miles)
- Skyway Monte Bianco Cable Car: 8 km (5 miles)
- Aosta: 30 km (18.6 miles)`,
    description: `Ai piedi del Monte Bianco, QC Terme Monte Bianco è un resort spa a 4 stelle che offre un rifugio alpino a Palleusieux. Unendo l'architettura tradizionale valdostana in pietra e legno a strutture benessere contemporanee, l'hotel dispone di un'ampia spa termale con piscine riscaldate all'aperto affacciate sulle vette innevate. Le camere sono arredate con eleganza alpina e offrono vista montagna o giardino.

Servizi principali:
- Percorso spa termale con idromassaggi esterni, saune e bagni di vapore
- Lounge relax panoramiche con vista sulle montagne
- Ristorante alpino in loco con specialità regionali
- Rituali benessere quotidiani e aperitivi serali
- Wi-Fi gratuito e parcheggio privato

Posizione e attrazioni vicine:
- Terme di Pré-Saint-Didier: 2 minuti in auto / 15 minuti a piedi
- Courmayeur (sci e centro): 5 km
- Funivia Skyway Monte Bianco: 8 km
- Aosta: 30 km`,
  },
  {
    slug: "qc-terme-dolomiti-pozza-di-fassa",
    description_en: `Set in the heart of the Val di Fassa, QC Terme Dolomiti is a mountain wellness sanctuary surrounded by the UNESCO World Heritage Dolomites. The resort features over 4,000 square meters of spa facilities fed by the natural thermal waters of the Alloch spring. Guest accommodations combine natural timber design with modern technology, creating an atmosphere focused on rest and physical regeneration.

Key Amenities:
- Outdoor panoramic thermal pools with Enrosadira mountain views
- Multi-sensory hydrotherapy, Japanese baths, and bio-saunas
- Fine dining restaurant focusing on local Trentino cuisine
- Comprehensive menu of massage and beauty treatments
- Free Wi-Fi and underground parking

Location & Nearby Attractions:
- Buffaure Ski Lifts (Sellaronda Connection): 1 km (0.6 miles)
- Canazei: 10 km (6.2 miles)
- Carezza Lake: 15 km (9.3 miles)
- Bolzano: 40 km (24.8 miles)`,
    description: `Nel cuore della Val di Fassa, QC Terme Dolomiti è un santuario del benessere montano circondato dalle Dolomiti patrimonio UNESCO. Il resort offre oltre 4.000 metri quadrati di strutture spa alimentate dalle acque termali naturali della sorgente Alloch. Le sistemazioni uniscono design in legno naturale e tecnologia moderna, per un'atmosfera dedicata al riposo e alla rigenerazione fisica.

Servizi principali:
- Piscine termali panoramiche all'aperto con vista Enrosadira
- Idroterapia multisensoriale, bagni giapponesi e bio-saune
- Ristorante gourmet con cucina trentina locale
- Ampia offerta di massaggi e trattamenti beauty
- Wi-Fi gratuito e parcheggio interrato

Posizione e attrazioni vicine:
- Impianti di risalita Buffaure (collegamento Sellaronda): 1 km
- Canazei: 10 km
- Lago di Carezza: 15 km
- Bolzano: 40 km`,
  },
  {
    slug: "terme-di-saturnia-natural-spa-golf-resort-manciano",
    description_en: `Centered around a 3,000-year-old thermal crater, the 5-star Terme di Saturnia Natural SPA & Golf Resort is an international destination for medical wellness and relaxation in the Tuscan Maremma. The resort features four outdoor thermal pools running at a constant 37.5°C (99.5°F), an 18-hole championship golf course, and a health clinic. Elegant rooms offer park or spring views.

Key Amenities:
- Natural thermal spring pool and hydrotherapy facilities
- 18-hole GEO-certified championship golf course
- Award-winning SPA and Beauty Clinic
- Gourmet restaurant 1919 serving Tuscan dishes
- Tennis courts and fitness center

Location & Nearby Attractions:
- Cascate del Mulino (Natural Waterfalls): 2-minute drive / 15-minute walk
- Pitigliano (Historical Tufa Town): 25 km (15.5 miles)
- Argentario Coast & Beaches: 45 km (28 miles)
- Rome Fiumicino Airport (FCO): 130 km (80 miles)`,
    description: `Costruito attorno a un cratere termale millenario, il Terme di Saturnia Natural SPA & Golf Resort 5 stelle è una destinazione internazionale per il benessere medico e il relax nella Maremma toscana. Il resort dispone di quattro piscine termali all'aperto a temperatura costante di 37,5°C, un campo da golf da 18 buche e una clinica della salute. Camere eleganti con vista parco o sorgente.

Servizi principali:
- Piscina termale naturale e strutture idroterapiche
- Campo da golf da 18 buche certificato GEO
- SPA e Beauty Clinic pluripremiati
- Ristorante gourmet 1919 con cucina toscana
- Campi da tennis e centro fitness

Posizione e attrazioni vicine:
- Cascate del Mulino: 2 minuti in auto / 15 minuti a piedi
- Pitigliano: 25 km
- Costa dell'Argentario e spiagge: 45 km
- Aeroporto di Roma Fiumicino (FCO): 130 km`,
  },
  {
    slug: "grotta-giusti-thermal-spa-resort-monsummano-terme",
    description_en: `Part of Marriott's Autograph Collection, Grotta Giusti Thermal Spa Resort is housed in a 19th-century villa set within a 45-hectare private park. The property's centerpiece is the world's largest natural thermal cave, featuring subterranean warm lakes and therapeutic vapors. The resort features air-conditioned rooms with parquet floors, fresh thermal water pools, and a spa area.

Key Amenities:
- Natural underground thermal cave (Steam Baths)
- 750 sqm outdoor thermal pool with hydro-massage jets
- Med-Spa offering mud therapy and anti-aging treatments
- Il Poeta fine-dining restaurant
- Thermal diving experiences inside the cave

Location & Nearby Attractions:
- Montecatini Terme: 4 km (2.5 miles)
- Lucca: 30 km (18.6 miles)
- Florence (Firenze): 45 km (28 miles)
- Pisa International Airport (PSA): 50 km (31 miles)`,
    description: `Parte dell'Autograph Collection di Marriott, Grotta Giusti Thermal Spa Resort è ospitato in una villa ottocentesca immersa in un parco privato di 45 ettari. Il fulcro della struttura è la più grande grotta termale naturale al mondo, con laghi sotterranei caldi e vapori terapeutici. Il resort offre camere climatizzate con parquet, piscine di acqua termale e area spa.

Servizi principali:
- Grotta termale naturale sotterranea (bagni di vapore)
- Piscina termale esterna di 750 mq con idromassaggio
- Med-Spa con fangoterapia e trattamenti anti-age
- Ristorante gourmet Il Poeta
- Esperienze di immersione termale nella grotta

Posizione e attrazioni vicine:
- Montecatini Terme: 4 km
- Lucca: 30 km
- Firenze: 45 km
- Aeroporto di Pisa (PSA): 50 km`,
  },
  {
    slug: "abano-grand-hotel-abano-terme",
    description_en: `The Abano Grand Hotel is the only 5-star luxury hotel in the Euganean Hills area. Set inside a lush tropical garden of palms and olive trees, the resort features Venetian-style architecture, crystal chandeliers, and classical art. It offers three thermal swimming pools with varying temperatures, an extensive bio-thermal mud therapy center, and spacious suites with private balconies.

Key Amenities:
- 3 large thermal water pools (indoor and outdoor connected)
- Certified bio-thermal mud treatment center
- Pietro d'Abano fine dining restaurant and poolside bistro
- Full-service spa with saunas and ice rooms
- Daily live piano music and cocktail lounge

Location & Nearby Attractions:
- Abano Terme Pedestrian Center: 2-minute walk
- Euganean Hills Regional Park: 5 km (3.1 miles)
- Padua (Padova): 12 km (7.5 miles)
- Venice (Venezia): 45 km (28 miles)`,
    description: `L'Abano Grand Hotel è l'unico hotel 5 stelle lusso dei Colli Euganei. Immerso in un rigoglioso giardino tropicale di palme e ulivi, il resort presenta architettura in stile veneziano, lampadari di cristallo e arte classica. Offre tre piscine termali a temperature diverse, un ampio centro di fangoterapia bio-termale e suite spaziose con balcone privato.

Servizi principali:
- 3 grandi piscine termali (interne ed esterne collegate)
- Centro trattamenti fango bio-termale certificato
- Ristorante gourmet Pietro d'Abano e bistrot a bordo piscina
- Spa completa con saune e stanze del ghiaccio
- Musica dal vivo al pianoforte e cocktail lounge

Posizione e attrazioni vicine:
- Centro pedonale di Abano Terme: 2 minuti a piedi
- Parco Regionale dei Colli Euganei: 5 km
- Padova: 12 km
- Venezia: 45 km`,
  },
  {
    slug: "masseria-torre-coccaro-savelletri-di-fasano",
    description_en: `Housed in a fortified 16th-century watchtower, Masseria Torre Coccaro is a 5-star resort in the Apulian countryside. Surrounded by ancient olive groves, the property features whitewashed stone architecture, vaulted suites with private plunge pools, and a lagoon-style pool carved into natural rock. Guests have access to an AVEDA spa, cooking classes, and a private beach club nearby.

Key Amenities:
- Lagoon-style swimming pool carved into rock
- AVEDA Spa located in subterranean caves
- Private Beach Club with seafood restaurant (shuttle available)
- 9-hole golf course and cooking school
- Multiple dining options using estate-grown organic produce

Location & Nearby Attractions:
- Savelletri Fishing Village & Coast: 2 km (1.2 miles)
- San Domenico Golf Club: 1.5 km (0.9 miles)
- Polignano a Mare: 25 km (15.5 miles)
- Brindisi Salento Airport (BDS): 55 km (34 miles)`,
    description: `Ospitata in una torre di avvistamento fortificata del XVI secolo, Masseria Torre Coccaro è un resort 5 stelle nella campagna pugliese. Circondata da uliveti secolari, la struttura presenta architettura in pietra bianca, suite con volte e piscine private, e una piscina laguna scavata nella roccia. Gli ospiti accedono a una spa AVEDA, corsi di cucina e un beach club privato nelle vicinanze.

Servizi principali:
- Piscina laguna scavata nella roccia
- Spa AVEDA in grotte sotterranee
- Beach Club privato con ristorante di pesce (navetta disponibile)
- Campo da golf a 9 buche e scuola di cucina
- Più ristoranti con prodotti biologici della tenuta

Posizione e attrazioni vicine:
- Savelletri e costa: 2 km
- San Domenico Golf Club: 1,5 km
- Polignano a Mare: 25 km
- Aeroporto di Brindisi Salento (BDS): 55 km`,
  },
  {
    slug: "masseria-san-domenico-savelletri-di-fasano",
    description_en: `Once a 15th-century watchtower for the Knights of Malta, Masseria San Domenico is an adults-only 5-star luxury resort set near the Adriatic coastline. The property offers an irregular seawater swimming pool framed by rock formations, expansive gardens, and a Thalassotherapy center using deep-sea water. Rooms and suites are decorated in classic Apulian style.

Key Amenities:
- Large saltwater swimming pool with natural rocks
- State-of-the-art Thalassotherapy center and spa
- 18-hole championship golf course (San Domenico Golf)
- 4 restaurants and private beach access
- Gym, tennis courts, and sauna facilities

Location & Nearby Attractions:
- Adriatic Coastline: 500 meters (0.3 miles)
- Alberobello (Trulli UNESCO site): 22 km (13.6 miles)
- Ostuni (The White City): 25 km (15.5 miles)
- Bari Karol Wojtyła Airport (BRI): 65 km (40 miles)`,
    description: `Antica torre di avvistamento dei Cavalieri di Malta del XV secolo, Masseria San Domenico è un resort 5 stelle lusso riservato agli adulti vicino alla costa adriatica. La struttura offre una grande piscina di acqua di mare tra formazioni rocciose, ampi giardini e un centro di talassoterapia con acqua di mare profonda. Camere e suite in stile pugliese classico.

Servizi principali:
- Grande piscina di acqua salata con rocce naturali
- Centro talassoterapia e spa all'avanguardia
- Campo da golf da 18 buche (San Domenico Golf)
- 4 ristoranti e accesso spiaggia privata
- Palestra, campi da tennis e sauna

Posizione e attrazioni vicine:
- Costa adriatica: 500 metri
- Alberobello (Trulli UNESCO): 22 km
- Ostuni: 25 km
- Aeroporto di Bari Karol Wojtyła (BRI): 65 km`,
  },
  {
    slug: "castello-banfi-hotel-il-borgo-montalcino",
    description_en: `Set atop a hill overlooking the vineyards of Val d'Orcia, Castello Banfi - Hotel Il Borgo is a boutique wine resort located within a restored 18th-century stone hamlet adjacent to a medieval castle. The hotel offers luxury suites styled by designer Federico Forquet, an outdoor heated infinity pool with countryside views, and curated wine-tasting experiences.

Key Amenities:
- Outdoor heated infinity pool with views of Val d'Orcia
- Michelin-recommended restaurant La Taverna & La Sala dei Grappoli
- Private wine cellar tours and Brunello di Montalcino tastings
- Fitness center and reading room with fireplace
- Complimentary wine upon arrival and personalized concierge service

Location & Nearby Attractions:
- Montalcino Town Center: 10 km (6.2 miles)
- Pienza (UNESCO site): 30 km (18.6 miles)
- Siena: 45 km (28 miles)
- Florence Airport (FLR): 120 km (74 miles)`,
    description: `In cima a una collina con vista sui vigneti della Val d'Orcia, Castello Banfi - Hotel Il Borgo è un wine resort boutique in un borgo in pietra del XVIII secolo restaurato, adiacente a un castello medievale. L'hotel offre suite di lusso firmate da Federico Forquet, piscina infinity riscaldata all'aperto con vista campagna e degustazioni di vino curate.

Servizi principali:
- Piscina infinity riscaldata all'aperto con vista Val d'Orcia
- Ristoranti consigliati Michelin La Taverna e La Sala dei Grappoli
- Tour in cantina privata e degustazioni di Brunello di Montalcino
- Palestra e sala lettura con camino
- Vino di benvenuto e concierge personalizzato

Posizione e attrazioni vicine:
- Centro di Montalcino: 10 km
- Pienza (UNESCO): 30 km
- Siena: 45 km
- Aeroporto di Firenze (FLR): 120 km`,
  },
  {
    slug: "hotel-chalet-mirabell-avelengo",
    description_en: `Perched on a sunny plateau above Merano, Hotel Chalet Mirabell is a 5-star mountain resort offering panoramic views of the South Tyrolean Alps. The property features a 6,000 sqm luxury spa area, a 25-meter heated outdoor infinity pool that merges with alpine meadows, and a natural swimming pond. Rooms feature modern chalet decor with natural stone and pine wood.

Key Amenities:
- 6,000 sqm Premium SPA with adults-only and family zones
- Heated outdoor infinity pool and natural bathing pond
- Panoramic saunas with daily Aufguss sauna rituals
- Gourmet full-board options featuring regional alpine products
- Guided hiking and activity program

Location & Nearby Attractions:
- Merano 2000 Ski & Hiking Area: 3 km (1.8 miles)
- Thermal Baths of Merano (Therme Meran): 10 km (6.2 miles)
- Trauttmansdorff Castle Gardens: 8 km (5 miles)
- Bolzano Airport (BZO): 35 km (21.7 miles)`,
    description: `Su un altopiano soleggiato sopra Merano, Hotel Chalet Mirabell è un resort montano 5 stelle con vista panoramica sulle Alpi altoatesine. La struttura dispone di una spa di lusso di 6.000 mq, piscina infinity riscaldata all'aperto di 25 metri che si fonde con i prati alpini e un laghetto naturale. Camere in stile chalet moderno con pietra naturale e legno di pino.

Servizi principali:
- Premium SPA 6.000 mq con zone adulti e famiglia
- Piscina infinity riscaldata all'aperto e laghetto naturale
- Saune panoramiche con rituali Aufguss quotidiani
- Opzioni gourmet in pensione completa con prodotti alpini regionali
- Programma di escursioni e attività guidate

Posizione e attrazioni vicine:
- Merano 2000 (sci ed escursioni): 3 km
- Terme di Merano (Therme Meran): 10 km
- Giardini di Castel Trauttmansdorff: 8 km
- Aeroporto di Bolzano (BZO): 35 km`,
  },
  {
    slug: "excelsior-dolomites-life-resort-san-vigilio-di-marebbe",
    description_en: `Designed for active travelers and mountain enthusiasts, Excelsior Dolomites Life Resort is a ski-in/ski-out hotel located in San Vigilio di Marebbe, directly on the Kronplatz (Plan de Corones) slopes. The property features the Dolomites Sky Spa with an outdoor infinity pool on the rooftop, offering views of the surrounding UNESCO mountains.

Key Amenities:
- Direct Ski-in / Ski-out access to Plan de Corones slopes
- Rooftop Dolomites Sky Spa with panoramic infinity pool (Adults only)
- Separate Family Spa with indoor pools and water slides
- Guided outdoor activity program (hiking, e-biking, skiing)
- Ski depot with private heated lockers

Location & Nearby Attractions:
- Kronplatz / Plan de Corones Ski Area: 0 meters (Direct access)
- Fanes-Sennes-Prags Nature Park: 2 km (1.2 miles)
- Pragser Wildsee (Lake Braies): 25 km (15.5 miles)
- Brunico (Bruneck): 15 km (9.3 miles)`,
    description: `Pensato per viaggiatori attivi e appassionati di montagna, Excelsior Dolomites Life Resort è un hotel ski-in/ski-out a San Vigilio di Marebbe, direttamente sulle piste del Kronplatz (Plan de Corones). La struttura offre la Dolomites Sky Spa con piscina infinity all'aperto sul rooftop e vista sulle montagne UNESCO.

Servizi principali:
- Accesso diretto ski-in / ski-out alle piste del Plan de Corones
- Dolomites Sky Spa sul tetto con piscina infinity panoramica (solo adulti)
- Family Spa separata con piscine interne e scivoli
- Programma di attività outdoor guidate (trekking, e-bike, sci)
- Deposito sci con armadietti riscaldati privati

Posizione e attrazioni vicine:
- Kronplatz / Plan de Corones: accesso diretto
- Parco Naturale Fanes-Sennes-Prags: 2 km
- Lago di Braies: 25 km
- Brunico: 15 km`,
  },
  {
    slug: "forestis-dolomites-bressanone",
    description_en: `Located at 1,800 meters above sea level on Mount Plose, Forestis Dolomites is an eco-luxury retreat directly facing the Odle/Geisler mountain peaks. Built using local stone, glass, and mountain pine wood, the resort focuses on holistic regeneration. Features include clean mountain spring water in every room, a 2,000 sqm spa inspired by Celtic druidic elements, and floor-to-ceiling windows throughout.

Key Amenities:
- 2,000 sqm Spa with indoor/outdoor stone pools and saunas
- Wyda (Celtic Yoga) sessions and outdoor meditation deck
- Farm-to-table restaurant with step-tiered seating facing the mountains
- Ski-in / Ski-out access to Mount Plose ski slopes
- Underground parking with EV charging stations

Location & Nearby Attractions:
- Bressanone (Brixen) Historic Center: 15 km (9.3 miles)
- Mount Plose Hiking & Ski Trails: Direct access
- Novacella Abbey: 18 km (11.1 miles)
- Innsbruck Airport (INN): 95 km (59 miles)`,
    description: `A 1.800 metri sul Monte Plose, Forestis Dolomites è un rifugio eco-lusso affacciato direttamente sulle Odle/Geisler. Costruito con pietra locale, vetro e legno di pino cembro, il resort è dedicato alla rigenerazione olistica. Acqua di sorgente di montagna in ogni camera, spa di 2.000 mq ispirata agli elementi druidici celtici e vetrate a tutta altezza.

Servizi principali:
- Spa 2.000 mq con piscine in pietra interne/esterne e saune
- Sessioni Wyda (yoga celtico) e terrazza meditazione all'aperto
- Ristorante farm-to-table con posti a sedere a scalini verso le montagne
- Accesso ski-in / ski-out alle piste del Monte Plose
- Parcheggio interrato con colonnine per auto elettriche

Posizione e attrazioni vicine:
- Centro storico di Bressanone: 15 km
- Sentieri escursionistici e sci del Monte Plose: accesso diretto
- Abbazia di Novacella: 18 km
- Aeroporto di Innsbruck (INN): 95 km`,
  },
  {
    slug: "cristallo-resort-spa-cortina-dampezzo",
    description_en: `A landmark of high-alpine hospitality since 1901, Cristallo Resort & Spa overlooks the town of Cortina d'Ampezzo and the Tofane mountain range. Featuring classic Art Nouveau architecture, the hotel offers refined guest rooms, a Transvital Swiss Beauty Center, and an indoor heated pool with panoramic mountain views.

Key Amenities:
- Indoor heated swimming pool with Tofane mountain views
- Ultimate Spa featuring Swiss Transvital beauty treatments
- 3 on-site restaurants, including fine dining at Gazebo
- Complimentary private shuttle to Cortina center and ski lifts
- Historical cocktail lounge with live piano performances

Location & Nearby Attractions:
- Cortina d'Ampezzo Pedestrian Center (Corso Italia): 1 km (0.6 miles)
- Faloria Cable Car: 800 meters (0.5 miles)
- Lake Misurina & Tre Cime di Lavaredo: 14 km (8.7 miles)
- Venice Marco Polo Airport (VCE): 145 km (90 miles)`,
    description: `Punto di riferimento dell'ospitalità alpina dal 1901, Cristallo Resort & Spa domina Cortina d'Ampezzo e il massiccio delle Tofane. Architettura Art Nouveau classica, camere raffinate, Transvital Swiss Beauty Center e piscina riscaldata interna con vista panoramica sulle montagne.

Servizi principali:
- Piscina riscaldata interna con vista sulle Tofane
- Ultimate Spa con trattamenti beauty svizzeri Transvital
- 3 ristoranti in loco, incluso il fine dining al Gazebo
- Navetta privata gratuita per il centro di Cortina e gli impianti di risalita
- Cocktail lounge storica con pianoforte dal vivo

Posizione e attrazioni vicine:
- Centro pedonale di Cortina d'Ampezzo (Corso Italia): 1 km
- Funivia Faloria: 800 metri
- Lago di Misurina e Tre Cime di Lavaredo: 14 km
- Aeroporto di Venezia Marco Polo (VCE): 145 km`,
  },
];

const JSON_PATH = resolve(__dirname, "../data/italy-luxury-hotels-batch-4-13.json");

async function main() {
  const hotels = JSON.parse(readFileSync(JSON_PATH, "utf8"));
  const bySlug = new Map(hotels.map((h) => [h.slug, h]));

  for (const update of UPDATES) {
    const hotel = bySlug.get(update.slug);
    if (!hotel) {
      console.error(`Slug non trovato nel JSON: ${update.slug}`);
      continue;
    }
    hotel.description = update.description;
    hotel.description_en = update.description_en;

    const { error } = await sb
      .from("onboarding_hotels")
      .update({ description: update.description, description_en: update.description_en })
      .eq("slug", update.slug);

    if (error) {
      console.error(`ERRORE Supabase ${update.slug}:`, error.message);
      process.exitCode = 1;
      continue;
    }
    console.log(`OK ${update.slug} (IT ${update.description.length} / EN ${update.description_en.length} chars)`);
  }

  writeFileSync(JSON_PATH, JSON.stringify(hotels, null, 2) + "\n");
  console.log(`\nJSON aggiornato: ${JSON_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
