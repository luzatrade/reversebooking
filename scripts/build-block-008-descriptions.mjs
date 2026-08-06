/**
 * Build scripts/data/block-008-user-descriptions.json from block-008 slugs + Italian SEO text.
 * Usage: node scripts/build-block-008-descriptions.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BLOCK = resolve(ROOT, "data/missing-descriptions/blocks/block-008.json");
const OUT = resolve(__dirname, "data/block-008-user-descriptions.json");
const SOURCE_MD = resolve(__dirname, "data/block-008-user-source.md");

/** Remove markdown bold markers from hotel names in text. */
function stripMarkdownBold(text) {
  return text.replace(/\*\*/g, "");
}

function parseUserMarkdown(text) {
  const sections = text.split(/^###\s+\d+\.\s+/m).slice(1);
  const out = [];
  for (const section of sections) {
    const itMatch = section.match(/\* \*\*Descrizione SEO \(IT\):\*\* (.+?)(?=\n\* \*\*SEO Description|\n---|\n### |$)/s);
    if (!itMatch) continue;
    const slugLine = section.match(/\* \*\*Slug:\*\*\s*`([^`]+)`/)?.[1];
    const slugBacktick = section.match(/slug:\s*`([^`]+)`/)?.[1];
    const slug = slugLine || slugBacktick;
    if (!slug) continue;
    out.push({ slug, description: stripMarkdownBold(itMatch[1].trim()) });
  }
  return out;
}

/**
 * Italian SEO paragraphs keyed by slug (order-independent).
 * Populate from user "Descrizione SEO (IT)" paste, or place markdown in block-008-user-source.md.
 */
const DESCRIPTIONS_BY_SLUG = {
  "cbh-sicitaly-group-aci-castello":
    "Il CBH Sicitaly Group sorge in Via Piave, 25 ad Aci Castello (CT), un'esclusiva località balneare situata lungo la suggestiva Riviera dei Ciclopi. Posizionato alle coordinate 37.555731, 15.147621, l'alloggio garantisce una sistemazione ideale per chi ricerca tranquillità, funzionalità ed eccellenti collegamenti con la città di Catania e l'Etna. La struttura dista pochi minuti a piedi dal centro storico di Aci Castello e dal suo celebre Castello Normanno arroccato su una scogliera basaltica, oltre ad offrire un facile accesso al caratteristico borgo marinaro di Aci Trezza e alla Riserva Naturale Marina Isole Ciclopi. Le camere e gli spazi interni sono progettati per garantire massimo comfort, dotati di aria condizionata, connessione Wi-Fi ad alta velocità, TV a schermo piatto, bagno privato e ambienti finemente arredati in stile contemporaneo. Grazie alla vicinanza al mare e alle principali arterie stradali orientali della Sicilia, è la meta ideale per coppie in fuga romantica, famiglie in vacanza e professionisti in viaggio d'affari che cercano un punto d'appoggio strategico e raffinato.",
  "ciclope-resort-aci-castello":
    "Situato in Via Provinciale, 3 ad Aci Castello (CT), alle coordinate 37.560936, 15.158651, il Ciclope Resort è una raffinata struttura ricettiva immersa nella spettacolare cornice della Riviera dei Ciclopi, a breve distanza da Aci Trezza. Famoso per la sua posizione immersa nella natura tra la rigogliosa macchia mediterranea e il blu dello Jonio, il resort consente di raggiungere a piedi i luoghi resi celebri dal romanzo \"I Malavoglia\" di Giovanni Verga, la pittoresca Piazza delle Scuole e il lungomare con vista sui Faraglioni. I clienti possono usufruire di servizi premium tra cui piscina all'aperto, solarium equipaggiato con lettini e ombrelloni, ristorante panoramico con specialità di pesce fresco, bar a bordo vasca, connessione Wi-Fi gratuita in tutta la struttura e parcheggio privato. Le sistemazioni, eleganti e luminose, offrono balcone o terrazza con vista mare o giardino, aria condizionata e minibar. Il Ciclope Resort rappresenta la scelta ideale per turisti internazionali, viaggiatori wellness e famiglie che desiderano una vacanza di totale relax sul mare della Sicilia orientale.",
  "four-points-by-sheraton-catania-aci-castello":
    "Four Points by Sheraton Catania si affaccia su Via Antonello da Messina 45, 95021 Aci Castello (CT), GPS 37.542212, 15.136547, con vista sul golfo e sul profilo vulcanico dell'Etna. L'hotel 4 stelle Marriott propone camere insonorizzate con aria condizionata, Wi-Fi ad alta velocità, TV satellitare, minibar e bagno privato; aree meeting, ristorante, bar e parcheggio privato completano l'offerta. Soluzione ideale per congressi, eventi aziendali e turismo leisure tra Catania, Acireale e la costa ionica orientale.",
  "grand-hotel-baia-verde-aci-castello":
    "Grand Hotel Baia Verde è ubicato in Via Angelo Musco 8, 95021 Aci Castello (CT), coordinate 37.539994, 15.132745, direttamente sul lungomare con accesso alla spiaggia di sabbia fine. Le camere vista mare o giardino includono aria condizionata, Wi-Fi, TV LCD e bagno privato; piscina all'aperto, solarium, ristorante di cucina siciliana e parcheggio privato arricchiscono il soggiorno. Meta perfetta per vacanze balneari, matrimoni e weekend romantici tra Aci Castello, Capomulini e le gole dell'Alcantara.",
  "grand-hotel-faraglioni-aci-castello":
    "GRAND HOTEL FARAGLIONI domina Via Lungomare dei Ciclopi 115, 95021 Aci Castello (CT), GPS 37.559904, 15.160326, con terrazze panoramiche sui faraglioni e sul mare Ionio. Camere eleganti dotate di climatizzazione, Wi-Fi gratuito, minibar, TV satellitare e bagno con prodotti di qualità; ristorante gourmet, bar lounge e servizio spiaggia. La struttura accoglie ospiti in cerca di lusso e quiete sulla costa etnea, a pochi passi da Aci Trezza e dal porto di Catania.",
  "hello-b-b-aci-castello":
    "Hello B&B accoglie in Via Pantolla 3, 95021 Aci Trezza (CT), coordinate 37.562559, 15.160808, nel borgo marinaro reso celebre da Giovanni Verga. Camere colorate e accoglienti con aria condizionata, Wi-Fi, TV e bagno privato o esterno; colazione dolce e salata con prodotti locali. Ideale per chi ama il mare cristallino, i boat tour sui faraglioni e le escursioni verso Taormina, Siracusa e i crateri dell'Etna.",
  "la-scogliera-in-bed-breakfast-aci-castello":
    "La Scogliera In - Bed & Breakfast si trova in Via Domenico Tempio 8, 95021 Aci Castello (CT), GPS 37.537939, 15.126981, in posizione sopraelevata sulla scogliera lavica. Le camere dal design contemporaneo offrono balcone vista mare, aria condizionata, Wi-Fi, smart TV e bagno privato con doccia walk-in. Colazione artigianale e terrazza solarium rendono la struttura perfetta per coppie e fotografi in cerca di tramonti sul golfo di Catania.",
  "la-terrazza-sul-mare-aci-castello":
    "La Terrazza sul Mare sorge in Via Fornace 20, 95021 Aci Castello (CT), coordinate 37.556822, 15.148083, con ampie terrazze affacciate sul mare Ionio. Sistemazioni luminose con climatizzazione, Wi-Fi gratuito, TV e bagno privato; alcune unità con angolo cottura. Vicina al centro storico e alla spiaggia, è la scelta giusta per soggiorni relax tra mare, cultura verghiana e itinerari etnei.",
  "lachea-hotel-aci-castello":
    "Lachea Hotel si trova in Via Cardinale Dusmet 4, 95021 Aci Castello (CT), GPS 37.566886, 15.161209, alle falde del promontorio del castello normanno. Camere confortevoli con aria condizionata, Wi-Fi, TV satellitare e bagno privato; reception attiva e parcheggio nelle vicinanze. Posizione strategica per visitare l'isola della Lachea, Aci Trezza e la città di Catania in autobus o auto.",
  "oasi-perla-del-mare-bed-breakfast-aci-castello":
    "Oasi Perla del Mare - Bed&Breakfast è in Via Sciarelli 55, 95021 Aci Castello (CT), coordinate 37.543287, 15.132717, immerso in un giardino mediterraneo a pochi minuti dal mare. Camere rilassanti con climatizzazione, Wi-Fi, TV e bagno privato; colazione con marmellate homemade e area relax esterna. Accoglie chi cerca tranquillità e ospitalità familiare sulla costa ionica orientale.",
  "president-park-hotel-aci-castello":
    "President Park Hotel sorge in Via Vampolieri 49, 95021 Aci Castello (CT), GPS 37.565525, 15.155795, in posizione collinare con vista Etna e mare. Camere spaziose con aria condizionata, Wi-Fi ad alta velocità, minibar, TV LCD e bagno privato; ristorante, bar, parcheggio gratuito e sale meeting. Preferito da viaggiatori business e gruppi che necessitano di collegamenti rapidi con Catania, l'aeroporto e la zona industriale.",
  "sicilia-s-residence-hotel-art-spa-aci-castello":
    "Sicilia's - Residence Hotel - Art & Spa si trova in Via dei Tigli 3, 95022 Aci Catena (CT), coordinate 37.574496, 15.156609, tra verde collinare e panorami etnei. Appartamenti e suite con angolo cottura, climatizzazione, Wi-Fi, TV e bagno privato; centro benessere con sauna, bagno turco e trattamenti estetici. Combina arte contemporanea e relax per soggiorni medio-lunghi tra Etna, Acireale e la riviera.",
  "sicitaly-acicastello-aci-castello":
    "SicItaly Acicastello accoglie in Via Piave 23, 95021 Aci Castello (CT), GPS 37.555809, 15.147601, nel centro del borgo costiero. Camere moderne con aria condizionata, Wi-Fi gratuito, TV e bagno privato; servizio di concierge per tour Etna, escursioni marine e noleggio auto. Punto d'appoggio ideale per scoprire la Sicilia orientale con autonomia e comfort.",
  "zeus-residence-hotel-aparthotel-meeting-congress-aci-castello":
    "Zeus Residence Hotel - Aparthotel - Meeting & Congress Catania è in Via Antonello da Messina 8, 95021 Aci Castello (CT), coordinate 37.541051, 15.134235, vicino al centro congressuale di Catania. Suite e appartamenti con cucina attrezzata, climatizzazione, Wi-Fi, TV satellitare e bagno privato; sale plenarie, business center e parcheggio custodito. Struttura business-friendly per eventi, fiere e trasferte nell'hinterland catanese.",
  "best-western-hotel-santa-caterina-aci-catena":
    "Best Western Hotel Santa Caterina si trova in Via Santa Caterina 42B, 95024 Acireale (CT), GPS 37.606049, 15.16838, alle porte del centro barocco di Acireale. Camere BW Signature con aria condizionata, Wi-Fi gratuito, TV a schermo piatto, minibar e bagno privato; colazione continentale, bar e parcheggio. Scelta affidabile per turismo culturale, Carnevale di Acireale e gite sulla costa ionica.",
  "casa-vacanze-sole-delle-aci-aci-catena":
    "CASA VACANZE SOLE DELLE ACI è in Via Dante Alighieri 30, 95025 Aci Sant'Antonio (CT), coordinate 37.608245, 15.131239, in tranquillo quartiere residenziale. Appartamenti indipendenti con cucina completa, climatizzazione, Wi-Fi, lavatrice e terrazza; ideale per famiglie e gruppi. Permette di visitare Etna, Acireale e Catania restandi in un contesto autentico delle colline acesi.",
  "grande-albergo-maugeri-aci-catena":
    "Grande Albergo Maugeri domina Piazza Giuseppe Garibaldi 27, 95024 Acireale (CT), GPS 37.61693, 15.165917, nel cuore del centro storico patrimonio UNESCO. Camere classiche con aria condizionata, Wi-Fi, TV e bagno privato; ristorante di cucina siciliana, saloni liberty e vista sul duomo. Icona alberghiera per chi ama il barocco acireale, il Carnevale e le passeggiate sul lungomare.",
  "il-vecchio-sentiero-aci-catena":
    "Il vecchio sentiero si trova in Via Aranci 61, 95024 Acireale (CT), coordinate 37.612719, 15.169196, lungo un viale alberato residenziale. Camere accoglienti con riscaldamento, Wi-Fi, TV e bagno privato; colazione con prodotti di stagione e patio esterno. Atmosfera intima per ospiti che cercano quiete tra Acireale, Capomulini e le frazioni collinari dell'Etna.",
  "san-nicolo-aci-catena":
    "San Nicolò sorge in Via S. Nicolò 151, 95022 Aci Catena (CT), GPS 37.576593, 15.134515, immerso nel verde alle pendici etnee. Sistemazioni rustiche-chic con climatizzazione, Wi-Fi, TV e bagno privato; giardino e area barbecue. Perfetto per trekking, viti e agriturismo slow tra sentieri vulcanici e borghi dell'area acese.",
  "wave-hotel-aci-catena":
    "Wave Hotel è in Viale della Fiera Franca 33, 95024 Acireale (CT), coordinate 37.575021, 15.169105, a ridosso del lungomare e della fiera locale. Camere design con aria condizionata, Wi-Fi ad alta velocità, smart TV, minibar e bagno privato; ristorante vista mare e parcheggio privato. Accoglie turisti e partecipanti a eventi tra Acireale, Santa Maria la Scala e Catania.",
  "b-b-vicolo-del-chiostro-aci-sant-antonio":
    "B&B Vicolo del Chiostro accoglie in Via Don Giovanni Bosco 3, 95025 Aci Sant'Antonio (CT), GPS 37.606463, 15.128148, nel centro del borgo collinare. Camere curate con aria condizionata, Wi-Fi, TV e bagno privato; colazione dolce con granite e brioche siciliane. Punto di partenza per escursioni sull'Etna, Viagrande e le cantine dell'Etna DOC.",
  "beb-casa-di-mari-aci-sant-antonio":
    "BeB Casa di Mari si trova in Via Dante Alighieri 16, 95025 Aci Sant'Antonio (CT), coordinate 37.608099, 15.130685, in dimora ristrutturata con patio interno. Camere luminose con climatizzazione, Wi-Fi gratuito, TV e bagno privato; ospitalità familiare e consigli su itinerari etnei. Ideale per coppie e piccoli gruppi in cerca di autenticità.",
  "relais-san-giuliano-boutique-hotel-de-charme-aci-sant-antonio":
    "Relais San Giuliano Boutique Hotel De Charme sorge tra Via Giuseppe Garibaldi 280 e Via Antonello da Messina 3, 95029 Viagrande (CT), GPS 37.615716, 15.099539, in villa d'epoca con parco secolare. Suite di charme con aria condizionata, Wi-Fi, minibar, TV satellitare e bagno in marmo; piscina, ristorante gourmet e spa. Rifugio esclusivo tra Etna, vigneti e borghi dell'entroterra catanese.",
  "villa-corallo-dell-etna-aci-sant-antonio":
    "Villa Corallo dell'Etna è in Via Allegracuore 21, 95024 Acireale (CT), coordinate 37.617248, 15.13537, su collinetta panoramica con vista vulcano e mare. Camere ed appartamenti con terrazza, climatizzazione, Wi-Fi, TV e bagno privato; piscina, giardino mediterraneo e colazione all'aperto. Meta per relax e enoturismo tra Acireale e le pendici dell'Etna.",
  "villa-delle-palme-aci-sant-antonio":
    "Villa Delle Palme si trova in Via Livorno 143, 95026 Aci Castello (CT), GPS 37.573608, 15.166709, in villa liberty circondata da palme secolari. Camere raffinati con aria condizionata, Wi-Fi, TV e bagno privato; terrazza solarium e parcheggio privato. Atmosfera elegante per soggiorni tra mare, castello normanno e nightlife catanese.",
  "villa-di-leo-borgo-viscalori-aci-sant-antonio":
    "Villa Di Leo Borgo Viscalori domina Piazza S. Biagio 2, 95029 Viagrande (CT), coordinate 37.606278, 15.090491, nel borgo storico di Viagrande. Camere in pietra lavica con climatizzazione, Wi-Fi, TV e bagno privato; cortile interno e vista Etna. Scelta per chi ama borghi autentici, feste patronali e passeggiate nel Parco dell'Etna.",
  "b-b-acireale-il-cavalluccio-marino-fronte-mare-acireale":
    "B&B ACIREALE- il Cavalluccio Marino fronte mare è in Via Argenta 38, 95024 Acireale (CT), GPS 37.634115, 15.175208, con accesso diretto alla spiaggia di scogli. Camere vista mare con balcone, aria condizionata, Wi-Fi, TV e bagno privato; solarium e colazione con prodotti di mare. Perfetto per vacanze balneari, snorkeling e tramonti sul golfo di Catania.",
  "b-b-comeinsicily-corte-dei-limoni-charming-relax-acireale":
    "B&B ComeinSicily - Corte dei Limoni - Charming & Relaxing Luxury Hotel si trova in Via Monsignor Genuardi 32, 95024 Acireale (CT), coordinate 37.613156, 15.166966, in palazzo storico con cortile di limoni. Suite di design con climatizzazione, Wi-Fi, smart TV, minibar e bagno di pregio; spa privata e servizio concierge. Esperienza luxury nel centro barocco di Acireale.",
  "b-b-le-chiazzette-acireale":
    "B&B Le Chiazzette sorge in Via Marzulli 67, 95024 Acireale (CT), GPS 37.613767, 15.167963, in tipico vicolo acireale. Camere accoglienti con aria condizionata, Wi-Fi, TV e bagno privato; terrazza con vista sui tetti e colazione siciliana. Ideale per fotografi del barocco, amanti del Carnevale e passeggiate sul lungomare.",
  "b-b-the-artists-acireale-acireale":
    "B&B THE ARTISTS ACIREALE accoglie in Via Romeo 40, 95024 Acireale (CT), coordinate 37.612412, 15.167275, in casa d'artista con opere contemporanee. Camere thematic con climatizzazione, Wi-Fi, TV e bagno privato; atelier condiviso e colazione creativa. Unisce ospitalità e cultura per viaggiatori curiosi del patrimonio acireale.",
  "baroque-b-b-acireale":
    "baroque B&B si trova in P.za Duomo, 95024 Acireale (CT), GPS 37.613037, 15.165778, affacciato sulla piazza del Duomo e sul mare. Camere barocche con aria condizionata, Wi-Fi gratuito, TV e bagno privato; vista su cupola e costa ionica. Location premium per eventi del Carnevale, processioni pasquali e turismo culturale.",
  "hotel-capomulini-dimora-storica-acireale":
    "Hotel Capomulini Dimora Storica è in Via Capomulini 32, 95024 Acireale (CT), coordinate 37.576663, 15.171008, in dimora del XVIII secolo sul promontorio di Capomulini. Camere con travi a vista, climatizzazione, Wi-Fi, TV satellitare e bagno privato; ristorante panoramico e terrazza vista Etna. Rifugio romantico tra spiagge, lava reef e sentieri costieri.",
  "hotel-ibis-styles-catania-acireale-acireale":
    "Hotel ibis Styles Catania Acireale sorge in Via Madonna delle Grazie 98A/B, 95024 Acireale (CT), GPS 37.594887, 15.169107, con design colorato Accor. Camere ibis Sweet Bed con aria condizionata, Wi-Fi ad alta velocità, TV LCD e bagno privato; colazione buffet, bar 24h e parcheggio. Soluzione moderna tra autostrada A18, Etna e centro di Acireale.",
  "hotel-orizzonte-acireale-acireale":
    "Hotel Orizzonte Acireale si trova in Viale Cristoforo Colombo 2, 95024 Acireale (CT), coordinate 37.638055, 15.162628, sul lungomare nord di Acireale. Camere vista mare con climatizzazione, Wi-Fi, TV satellitare e bagno privato; ristorante, piscina stagionale e solarium. Accoglie vacanze al mare e soggiorni wellness sulla riviera dei limoni.",
  "hotel-santa-tecla-palace-acireale":
    "Hotel Santa Tecla Palace è in Via Balestrate 100, 95024 Acireale (CT), GPS 37.629393, 15.175041, in palazzo signorile con giardino e vista costa. Camere e suite con aria condizionata, Wi-Fi, minibar, TV LCD e bagno privato; piscina, ristorante e parcheggio custodito. Eleganza e servizio per matrimoni, meeting e turismo d'élite tra Acireale e Catania.",
};

function loadDescriptions() {
  try {
    const md = readFileSync(SOURCE_MD, "utf8").trim();
    if (md) {
      const parsed = parseUserMarkdown(md);
      if (parsed.length) {
        const map = Object.fromEntries(parsed.map((r) => [r.slug, r.description]));
        return { map, source: SOURCE_MD };
      }
    }
  } catch {
    /* optional source file */
  }
  return { map: DESCRIPTIONS_BY_SLUG, source: "embedded DESCRIPTIONS_BY_SLUG" };
}

function main() {
  const block = JSON.parse(readFileSync(BLOCK, "utf8"));
  const slugs = block.hotels.map((h) => h.slug);
  const { map, source } = loadDescriptions();

  const rows = slugs.map((slug) => {
    const description = map[slug];
    if (!description?.trim()) {
      throw new Error(`Missing Italian description for slug: ${slug}`);
    }
    return { slug, description: stripMarkdownBold(description.trim()) };
  });

  if (rows.length !== 35) {
    throw new Error(`Expected 35 entries, got ${rows.length}`);
  }

  writeFileSync(OUT, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`Wrote ${rows.length} entries → ${OUT}`);
  console.log(`Source: ${source}`);
  console.log(`First: ${rows[0].slug}`);
  console.log(`Last: ${rows[rows.length - 1].slug}`);
}

main();
