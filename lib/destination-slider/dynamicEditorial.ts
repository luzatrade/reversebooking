import { unstable_cache } from "next/cache";
import type { CityHighlight } from "@/data/cityHighlights";
import { fetchCommonsPhotoUrl } from "@/lib/destination-slider/commonsPhotos";
import { fetchWikipediaHeroImage } from "@/lib/destination-slider/wikipediaPhotos";

type LandmarkTemplate = {
  id: string;
  nameIt: string;
  nameEn: string;
  searchSuffix: string;
  hintIt: string;
  hintEn: string;
};

const IT_COASTAL_IDS = new Set([
  "IT-AGR",
  "IT-AHO",
  "IT-BRI",
  "IT-BDS",
  "IT-CAG",
  "IT-CAP",
  "IT-CTA",
  "IT-CEF",
  "IT-CQT",
  "IT-GAR",
  "IT-DES",
  "IT-JES",
  "IT-LCC",
  "IT-LIV",
  "IT-MON",
  "IT-NAP",
  "IT-OLB",
  "IT-PMO",
  "IT-POL",
  "IT-POF",
  "IT-REG",
  "IT-RMI",
  "IT-SAL",
  "IT-SOR",
  "IT-SRM",
  "IT-TAO",
  "IT-TAR",
  "IT-VIA",
  "IT-SIR",
  "TH-HKT",
  "US-MIA",
  "US-LAX",
  "AU-SYD",
  "BR-RIO",
  "PT-LIS",
]);

const IT_ALPINE_IDS = new Set(["IT-AOT", "IT-BZO", "IT-COR", "IT-MER", "IT-CMO"]);

const COASTAL_LANDMARK: LandmarkTemplate = {
  id: "seafront",
  nameIt: "Lungomare",
  nameEn: "Seafront",
  searchSuffix: "lungomare seafront beach",
  hintIt: "Vista mare",
  hintEn: "Sea views",
};

const ALPINE_LANDMARK: LandmarkTemplate = {
  id: "alpine",
  nameIt: "Montagna e natura",
  nameEn: "Mountains & nature",
  searchSuffix: "mountains alpine panorama",
  hintIt: "Paesaggio",
  hintEn: "Landscape",
};

const GENERIC_LANDMARKS: LandmarkTemplate[] = [
  {
    id: "historic",
    nameIt: "Centro storico",
    nameEn: "Historic center",
    searchSuffix: "historic center old town",
    hintIt: "Da esplorare",
    hintEn: "Worth exploring",
  },
  {
    id: "cathedral",
    nameIt: "Duomo e monumenti",
    nameEn: "Cathedral & monuments",
    searchSuffix: "cathedral church duomo",
    hintIt: "Architettura",
    hintEn: "Architecture",
  },
  {
    id: "museum",
    nameIt: "Musei",
    nameEn: "Museums",
    searchSuffix: "museum",
    hintIt: "Arte e cultura",
    hintEn: "Art & culture",
  },
  {
    id: "square",
    nameIt: "Piazza principale",
    nameEn: "Main square",
    searchSuffix: "main square piazza",
    hintIt: "Cuore della città",
    hintEn: "City heart",
  },
  {
    id: "panorama",
    nameIt: "Panorama",
    nameEn: "City panorama",
    searchSuffix: "panorama skyline city view",
    hintIt: "Vista sulla città",
    hintEn: "City view",
  },
];

/** Ricerche mirate per le mete più cercate. */
const CITY_LANDMARK_OVERRIDES: Record<string, LandmarkTemplate[]> = {
  "IT-ROM": [
    { id: "colosseum", nameIt: "Colosseo", nameEn: "Colosseum", searchSuffix: "Colosseum Rome", hintIt: "Anfiteatro simbolo", hintEn: "Iconic amphitheatre" },
    { id: "vatican", nameIt: "Basilica di San Pietro", nameEn: "St. Peter's Basilica", searchSuffix: "St Peter Vatican Rome", hintIt: "Cupola e piazza", hintEn: "Dome & square" },
    { id: "trevi", nameIt: "Fontana di Trevi", nameEn: "Trevi Fountain", searchSuffix: "Trevi Fountain Rome", hintIt: "Barocco e leggende", hintEn: "Baroque & legends" },
    { id: "pantheon", nameIt: "Pantheon", nameEn: "Pantheon", searchSuffix: "Pantheon Rome", hintIt: "Oculus e marmi", hintEn: "Oculus & marble" },
    { id: "forum-rom", nameIt: "Foro Romano", nameEn: "Roman Forum", searchSuffix: "Roman Forum Rome", hintIt: "Rovine imperiali", hintEn: "Imperial ruins" },
    { id: "navona-rom", nameIt: "Piazza Navona", nameEn: "Piazza Navona", searchSuffix: "Piazza Navona Rome", hintIt: "Fontane barocche", hintEn: "Baroque fountains" },
  ],
  "IT-FLR": [
    { id: "duomo-flr", nameIt: "Duomo di Firenze", nameEn: "Florence Cathedral", searchSuffix: "Florence Cathedral Duomo", hintIt: "Campanile", hintEn: "Bell tower" },
    { id: "ponte-vecchio", nameIt: "Ponte Vecchio", nameEn: "Ponte Vecchio", searchSuffix: "Ponte Vecchio Florence", hintIt: "Sull'Arno", hintEn: "On the Arno" },
    { id: "uffizi", nameIt: "Galleria degli Uffizi", nameEn: "Uffizi Gallery", searchSuffix: "Uffizi Gallery Florence", hintIt: "Arte", hintEn: "Art" },
  ],
  "IT-VCE": [
    { id: "san-marco", nameIt: "Piazza San Marco", nameEn: "St. Mark's Square", searchSuffix: "Piazza San Marco Venice", hintIt: "Cuore di Venezia", hintEn: "Heart of Venice" },
    { id: "rialto", nameIt: "Ponte di Rialto", nameEn: "Rialto Bridge", searchSuffix: "Rialto Bridge Venice", hintIt: "Canal Grande", hintEn: "Grand Canal" },
    { id: "gondola", nameIt: "Canal Grande", nameEn: "Grand Canal", searchSuffix: "Grand Canal Venice gondola", hintIt: "In gondola", hintEn: "By gondola" },
  ],
  "IT-MIL": [
    { id: "duomo-mil", nameIt: "Duomo di Milano", nameEn: "Milan Cathedral", searchSuffix: "Milan Cathedral Duomo", hintIt: "Gotico e guglie iconiche", hintEn: "Gothic spires & icons" },
    { id: "galleria-mil", nameIt: "Galleria Vittorio Emanuele II", nameEn: "Galleria Vittorio Emanuele II", searchSuffix: "Galleria Vittorio Emanuele Milan", hintIt: "Portici ottocenteschi", hintEn: "19th-century arcades" },
    { id: "navigli", nameIt: "Navigli", nameEn: "Navigli", searchSuffix: "Navigli Milan canals", hintIt: "Canali e aperitivo", hintEn: "Canals & aperitivo" },
    { id: "castello-mil", nameIt: "Castello Sforzesco", nameEn: "Sforza Castle", searchSuffix: "Sforza Castle Milan", hintIt: "Cortili e musei", hintEn: "Courtyards & museums" },
    { id: "scala-mil", nameIt: "Teatro alla Scala", nameEn: "La Scala", searchSuffix: "Teatro alla Scala Milan", hintIt: "Lirica e balletto", hintEn: "Opera & ballet" },
    { id: "sempione-mil", nameIt: "Parco Sempione", nameEn: "Sempione Park", searchSuffix: "Parco Sempione Arco della Pace Milan", hintIt: "Verde dietro il Castello", hintEn: "Green behind the castle" },
  ],
  "IT-NAP": [
    { id: "vesuvio", nameIt: "Vesuvio e golfo", nameEn: "Vesuvius & bay", searchSuffix: "Naples Vesuvius bay view", hintIt: "Panorama", hintEn: "View" },
    { id: "spaccanapoli", nameIt: "Spaccanapoli", nameEn: "Spaccanapoli", searchSuffix: "Naples Spaccanapoli historic", hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "castel-nap", nameIt: "Castel dell'Ovo", nameEn: "Castel dell'Ovo", searchSuffix: "Castel dell Ovo Naples", hintIt: "Sul mare", hintEn: "By the sea" },
  ],
  "IT-BLQ": [
    { id: "blq-towers", nameIt: "Due Torri", nameEn: "Two Towers", searchSuffix: "Two Towers Bologna Asinelli", hintIt: "Simbolo della città", hintEn: "City symbol" },
    { id: "blq-piazza", nameIt: "Piazza Maggiore", nameEn: "Piazza Maggiore", searchSuffix: "Piazza Maggiore Bologna", hintIt: "Cuore di Bologna", hintEn: "Heart of Bologna" },
    { id: "blq-portico", nameIt: "Portici UNESCO", nameEn: "UNESCO porticoes", searchSuffix: "Bologna porticoes UNESCO", hintIt: "A piedi in città", hintEn: "Walk the city" },
    { id: "blq-san-petronio", nameIt: "Basilica di San Petronio", nameEn: "San Petronio Basilica", searchSuffix: "San Petronio Bologna", hintIt: "In piazza", hintEn: "On the square" },
  ],
  "IT-VRN": [
    { id: "vrn-arena", nameIt: "Arena di Verona", nameEn: "Verona Arena", searchSuffix: "Verona Arena amphitheatre", hintIt: "Lirica sotto le stelle", hintEn: "Opera under the stars" },
    { id: "vrn-juliet", nameIt: "Casa di Giulietta", nameEn: "Juliet's House", searchSuffix: "Juliet House Verona balcony", hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "vrn-erbe", nameIt: "Piazza delle Erbe", nameEn: "Piazza delle Erbe", searchSuffix: "Piazza delle Erbe Verona", hintIt: "Mercato", hintEn: "Market square" },
    { id: "vrn-adige", nameIt: "Ponte Pietra", nameEn: "Ponte Pietra", searchSuffix: "Ponte Pietra Verona Adige", hintIt: "Sull'Adige", hintEn: "On the Adige" },
  ],
  "IT-PMO": [
    { id: "pmo-cathedral", nameIt: "Cattedrale di Palermo", nameEn: "Palermo Cathedral", searchSuffix: "Palermo Cathedral", hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "pmo-normanni", nameIt: "Cappella Palatina", nameEn: "Palatine Chapel", searchSuffix: "Palatine Chapel Palermo Norman", hintIt: "Arabo-normanno", hintEn: "Arab-Norman" },
    { id: "pmo-mondello", nameIt: "Mondello", nameEn: "Mondello beach", searchSuffix: "Mondello beach Palermo", hintIt: "Mare cristallino", hintEn: "Clear sea" },
    { id: "pmo-teatro", nameIt: "Teatro Massimo", nameEn: "Teatro Massimo", searchSuffix: "Teatro Massimo Palermo", hintIt: "Cultura", hintEn: "Culture" },
  ],
  "IT-TAO": [
    { id: "tao-theatre", nameIt: "Teatro Greco", nameEn: "Greek Theatre", searchSuffix: "Taormina Greek Theatre Sicily", hintIt: "Vista sull'Etna", hintEn: "Etna views" },
    { id: "tao-isola", nameIt: "Isola Bella", nameEn: "Isola Bella", searchSuffix: "Isola Bella Taormina", hintIt: "Baia turchese", hintEn: "Turquoise bay" },
    { id: "tao-corso", nameIt: "Corso Umberto", nameEn: "Corso Umberto", searchSuffix: "Corso Umberto Taormina", hintIt: "Passeggiata", hintEn: "Evening stroll" },
  ],
  "IT-SOR": [
    { id: "sor-marina", nameIt: "Marina Grande", nameEn: "Marina Grande", searchSuffix: "Marina Grande Sorrento", hintIt: "Costiera", hintEn: "Amalfi Coast" },
    { id: "sor-center", nameIt: "Centro storico", nameEn: "Historic center", searchSuffix: "Sorrento historic center cliff", hintIt: "Vista sul golfo", hintEn: "Gulf views" },
    { id: "sor-capri", nameIt: "Vista su Capri", nameEn: "Capri views", searchSuffix: "Sorrento Capri view bay", hintIt: "Isola vicina", hintEn: "Nearby island" },
  ],
  "IT-CTA": [
    { id: "cta-duomo", nameIt: "Duomo di Catania", nameEn: "Catania Cathedral", searchSuffix: "Catania Cathedral Duomo Piazza", hintIt: "Barocco", hintEn: "Baroque" },
    { id: "cta-etna", nameIt: "Etna", nameEn: "Mount Etna", searchSuffix: "Mount Etna Catania Sicily", hintIt: "Vulcano", hintEn: "Volcano" },
    { id: "cta-fish", nameIt: "Pescheria", nameEn: "Fish market", searchSuffix: "Catania fish market Pescheria", hintIt: "Vita locale", hintEn: "Local life" },
  ],
  "IT-TRN": [
    { id: "trn-mole", nameIt: "Mole Antonelliana", nameEn: "Mole Antonelliana", searchSuffix: "Mole Antonelliana Turin", hintIt: "Skyline", hintEn: "Skyline" },
    { id: "trn-piazza", nameIt: "Piazza Castello", nameEn: "Piazza Castello", searchSuffix: "Piazza Castello Turin", hintIt: "Centro reale", hintEn: "Royal center" },
    { id: "trn-venaria", nameIt: "Reggia di Venaria", nameEn: "Venaria Palace", searchSuffix: "Venaria Reale Turin palace", hintIt: "Fuori centro", hintEn: "Outside center" },
  ],
  "IT-BRI": [
    { id: "bri-basilica", nameIt: "Basilica di San Nicola", nameEn: "Basilica di San Nicola", searchSuffix: "Basilica San Nicola Bari", hintIt: "Bari vecchia", hintEn: "Old town" },
    { id: "bri-lungomare", nameIt: "Lungomare", nameEn: "Seafront", searchSuffix: "Bari lungomare seafront", hintIt: "Adriatico", hintEn: "Adriatic" },
    { id: "bri-castello", nameIt: "Castello normanno-svevo", nameEn: "Norman-Swabian Castle", searchSuffix: "Castello Svevo Bari", hintIt: "Storia", hintEn: "History" },
  ],
  "IT-PSA": [
    { id: "psa-tower", nameIt: "Torre di Pisa", nameEn: "Leaning Tower", searchSuffix: "Leaning Tower of Pisa", hintIt: "Piazza dei Miracoli", hintEn: "Piazza dei Miracoli" },
    { id: "psa-duomo", nameIt: "Duomo di Pisa", nameEn: "Pisa Cathedral", searchSuffix: "Pisa Cathedral Piazza dei Miracoli", hintIt: "Romanico", hintEn: "Romanesque" },
    { id: "psa-arno", nameIt: "Lungarno", nameEn: "Arno riverfront", searchSuffix: "Pisa Arno river Lungarno", hintIt: "Passeggiata", hintEn: "Riverside walk" },
  ],
  "IT-SIE": [
    { id: "sie-campo", nameIt: "Piazza del Campo", nameEn: "Piazza del Campo", searchSuffix: "Piazza del Campo Siena", hintIt: "Palio", hintEn: "Palio" },
    { id: "sie-duomo", nameIt: "Duomo di Siena", nameEn: "Siena Cathedral", searchSuffix: "Siena Cathedral Duomo", hintIt: "Gotico", hintEn: "Gothic" },
    { id: "sie-torre", nameIt: "Torre del Mangia", nameEn: "Torre del Mangia", searchSuffix: "Torre del Mangia Siena", hintIt: "Panorama", hintEn: "View" },
  ],
  "IT-AGR": [
    { id: "agr-valley", nameIt: "Valle dei Templi", nameEn: "Valley of the Temples", searchSuffix: "Valley of the Temples Agrigento", hintIt: "Magna Grecia", hintEn: "Magna Graecia" },
    { id: "agr-temple", nameIt: "Tempio della Concordia", nameEn: "Temple of Concordia", searchSuffix: "Temple Concordia Agrigento", hintIt: "UNESCO", hintEn: "UNESCO" },
  ],
  "IT-CEF": [
    { id: "cef-rock", nameIt: "Rocca di Cefalù", nameEn: "Cefalù Rocca", searchSuffix: "Cefalu Rocca cliff", hintIt: "Panorama", hintEn: "View" },
    { id: "cef-cathedral", nameIt: "Duomo di Cefalù", nameEn: "Cefalù Cathedral", searchSuffix: "Cefalu Cathedral Duomo beach", hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "cef-beach", nameIt: "Lungomare", nameEn: "Seafront", searchSuffix: "Cefalu beach seafront", hintIt: "Mare", hintEn: "Sea" },
  ],
  "IT-CAP": [
    { id: "cap-faraglioni", nameIt: "Faraglioni", nameEn: "Faraglioni", searchSuffix: "Faraglioni Capri", hintIt: "Icona", hintEn: "Iconic" },
    { id: "cap-piazzetta", nameIt: "Piazzetta", nameEn: "Piazzetta", searchSuffix: "Capri Piazzetta square", hintIt: "Vita sociale", hintEn: "Social hub" },
    { id: "cap-blue", nameIt: "Grotta Azzurra", nameEn: "Blue Grotto", searchSuffix: "Blue Grotto Capri", hintIt: "In barca", hintEn: "By boat" },
  ],
  "IT-POF": [
    { id: "pof-harbour", nameIt: "Portofino", nameEn: "Portofino harbour", searchSuffix: "Portofino harbour Liguria", hintIt: "Riviera", hintEn: "Riviera" },
    { id: "pof-castle", nameIt: "Castello Brown", nameEn: "Castello Brown", searchSuffix: "Castello Brown Portofino", hintIt: "Panorama", hintEn: "View" },
  ],
  "IT-CQT": [
    { id: "cqt-manarola", nameIt: "Manarola", nameEn: "Manarola", searchSuffix: "Manarola Cinque Terre", hintIt: "Colori", hintEn: "Colors" },
    { id: "cqt-vernazza", nameIt: "Vernazza", nameEn: "Vernazza", searchSuffix: "Vernazza Cinque Terre harbour", hintIt: "Mare", hintEn: "Sea" },
    { id: "cqt-path", nameIt: "Sentiero Azzurro", nameEn: "Blue Trail", searchSuffix: "Cinque Terre coastal trail", hintIt: "Trekking", hintEn: "Hiking" },
  ],
  "IT-GOA": [
    { id: "goa-porto", nameIt: "Porto antico", nameEn: "Old Port", searchSuffix: "Porto Antico Genoa Aquarium", hintIt: "Rinnovato", hintEn: "Revitalized" },
    { id: "goa-caruggi", nameIt: "Caruggi", nameEn: "Historic alleys", searchSuffix: "Genoa caruggi historic center", hintIt: "Da esplorare", hintEn: "Explore" },
    { id: "goa-palazzi", nameIt: "Palazzi dei Rolli", nameEn: "Palazzi dei Rolli", searchSuffix: "Palazzi dei Rolli Genoa UNESCO", hintIt: "UNESCO", hintEn: "UNESCO" },
  ],
  "IT-LCC": [
    { id: "lcc-duomo", nameIt: "Duomo di Lecce", nameEn: "Lecce Cathedral", searchSuffix: "Lecce Cathedral baroque", hintIt: "Barocco", hintEn: "Baroque" },
    { id: "lcc-piazza", nameIt: "Piazza del Duomo", nameEn: "Piazza del Duomo", searchSuffix: "Piazza del Duomo Lecce", hintIt: "Centro", hintEn: "Center" },
    { id: "lcc-santa-croce", nameIt: "Basilica di Santa Croce", nameEn: "Santa Croce Basilica", searchSuffix: "Santa Croce Lecce baroque", hintIt: "Pietra leccese", hintEn: "Lecce stone" },
  ],
  "IT-CMO": [
    { id: "cmo-lake", nameIt: "Lago di Como", nameEn: "Lake Como", searchSuffix: "Lake Como Como city waterfront", hintIt: "Acqua", hintEn: "Water" },
    { id: "cmo-duomo", nameIt: "Duomo di Como", nameEn: "Como Cathedral", searchSuffix: "Como Cathedral Duomo", hintIt: "Centro", hintEn: "Center" },
    { id: "cmo-funicular", nameIt: "Brunate", nameEn: "Brunate viewpoint", searchSuffix: "Brunate Como panorama", hintIt: "Panorama", hintEn: "View" },
  ],
  "IT-SIR": [
    { id: "sir-castle", nameIt: "Rocca Scaligera", nameEn: "Scaliger Castle", searchSuffix: "Rocca Scaligera Sirmione Lake Garda", hintIt: "Lago di Garda", hintEn: "Lake Garda" },
    { id: "sir-thermal", nameIt: "Terme di Catullo", nameEn: "Grotte di Catullo", searchSuffix: "Grotte di Catullo Sirmione", hintIt: "Storia romana", hintEn: "Roman history" },
  ],
  "IT-RMI": [
    { id: "rmi-seafront", nameIt: "Lungomare", nameEn: "Seafront", searchSuffix: "Rimini beach seafront", hintIt: "Riviera", hintEn: "Riviera" },
    { id: "rmi-tiberius", nameIt: "Ponte di Tiberio", nameEn: "Bridge of Tiberius", searchSuffix: "Bridge of Tiberius Rimini", hintIt: "Romana", hintEn: "Roman" },
    { id: "rmi-borgo", nameIt: "Borgo San Giuliano", nameEn: "Borgo San Giuliano", searchSuffix: "Borgo San Giuliano Rimini", hintIt: "Fellini", hintEn: "Fellini" },
  ],
  "IT-POL": [
    { id: "pol-cliff", nameIt: "Lama Monachile", nameEn: "Lama Monachile", searchSuffix: "Polignano a Mare Lama Monachile beach", hintIt: "Scogliera", hintEn: "Cliffs" },
    { id: "pol-old-town", nameIt: "Centro storico", nameEn: "Historic center", searchSuffix: "Polignano a Mare historic center", hintIt: "Sul mare", hintEn: "By the sea" },
  ],
  "IT-CAG": [
    { id: "cag-castello", nameIt: "Castello", nameEn: "Castello district", searchSuffix: "Castello Cagliari Sardinia", hintIt: "Quartiere storico", hintEn: "Historic quarter" },
    { id: "cag-poetto", nameIt: "Poetto", nameEn: "Poetto beach", searchSuffix: "Poetto beach Cagliari", hintIt: "Mare", hintEn: "Sea" },
  ],
  "IT-OLB": [
    { id: "olb-costa", nameIt: "Costa Smeralda", nameEn: "Costa Smeralda", searchSuffix: "Costa Smeralda Sardinia beach", hintIt: "Acque cristalline", hintEn: "Crystal waters" },
    { id: "olb-centro", nameIt: "Centro storico", nameEn: "Historic center", searchSuffix: "Olbia historic center Sardinia", hintIt: "Gallura", hintEn: "Gallura" },
  ],
  "FR-PAR": [
    { id: "eiffel", nameIt: "Torre Eiffel", nameEn: "Eiffel Tower", searchSuffix: "Eiffel Tower Paris", hintIt: "Champ de Mars", hintEn: "Champ de Mars" },
    { id: "louvre", nameIt: "Louvre", nameEn: "Louvre Museum", searchSuffix: "Louvre Museum Paris", hintIt: "Museo", hintEn: "Museum" },
    { id: "notre-dame", nameIt: "Notre-Dame", nameEn: "Notre-Dame", searchSuffix: "Notre Dame Paris", hintIt: "Île de la Cité", hintEn: "Île de la Cité" },
  ],
  "GB-LON": [
    { id: "big-ben", nameIt: "Big Ben", nameEn: "Big Ben", searchSuffix: "Big Ben London", hintIt: "Westminster", hintEn: "Westminster" },
    { id: "tower-bridge", nameIt: "Tower Bridge", nameEn: "Tower Bridge", searchSuffix: "Tower Bridge London", hintIt: "Thames", hintEn: "Thames" },
    { id: "london-eye", nameIt: "London Eye", nameEn: "London Eye", searchSuffix: "London Eye", hintIt: "South Bank", hintEn: "South Bank" },
  ],
  "ES-BCN": [
    { id: "sagrada", nameIt: "Sagrada Família", nameEn: "Sagrada Família", searchSuffix: "Sagrada Familia Barcelona", hintIt: "Gaudí", hintEn: "Gaudí" },
    { id: "park-guell", nameIt: "Park Güell", nameEn: "Park Güell", searchSuffix: "Park Guell Barcelona", hintIt: "Colline", hintEn: "Hillside" },
    { id: "rambla", nameIt: "La Rambla", nameEn: "La Rambla", searchSuffix: "La Rambla Barcelona", hintIt: "Centro", hintEn: "Center" },
  ],
  "US-NYC": [
    { id: "statue", nameIt: "Statua della Libertà", nameEn: "Statue of Liberty", searchSuffix: "Statue of Liberty New York", hintIt: "Harbor", hintEn: "Harbor" },
    { id: "times", nameIt: "Times Square", nameEn: "Times Square", searchSuffix: "Times Square New York", hintIt: "Manhattan", hintEn: "Manhattan" },
    { id: "brooklyn", nameIt: "Brooklyn Bridge", nameEn: "Brooklyn Bridge", searchSuffix: "Brooklyn Bridge New York", hintIt: "Skyline", hintEn: "Skyline" },
  ],
  "JP-TYO": [
    { id: "shibuya", nameIt: "Shibuya Crossing", nameEn: "Shibuya Crossing", searchSuffix: "Shibuya Crossing Tokyo", hintIt: "Tokyo", hintEn: "Tokyo" },
    { id: "sensoji", nameIt: "Senso-ji", nameEn: "Senso-ji Temple", searchSuffix: "Senso-ji Tokyo Asakusa", hintIt: "Asakusa", hintEn: "Asakusa" },
    { id: "skytree", nameIt: "Tokyo Skytree", nameEn: "Tokyo Skytree", searchSuffix: "Tokyo Skytree", hintIt: "Vista", hintEn: "View" },
  ],
  "IT-MAT": [
    { id: "sassi", nameIt: "Sassi di Matera", nameEn: "Sassi di Matera", searchSuffix: "Sassi Matera", hintIt: "UNESCO", hintEn: "UNESCO" },
    { id: "matera-view", nameIt: "Panorama sui Sassi", nameEn: "Sassi viewpoint", searchSuffix: "Matera panorama", hintIt: "Tramonto", hintEn: "Sunset" },
  ],
  "IT-ABB": [
    { id: "trulli", nameIt: "Trulli", nameEn: "Trulli", searchSuffix: "Trulli Alberobello", hintIt: "UNESCO", hintEn: "UNESCO" },
  ],
};

function pickTemplates(cityId: string, countryCode: string) {
  const templates: LandmarkTemplate[] = [];

  if (CITY_LANDMARK_OVERRIDES[cityId]) {
    templates.push(...CITY_LANDMARK_OVERRIDES[cityId]);
  }

  if (IT_COASTAL_IDS.has(cityId)) templates.push(COASTAL_LANDMARK);
  if (IT_ALPINE_IDS.has(cityId)) templates.push(ALPINE_LANDMARK);

  for (const item of GENERIC_LANDMARKS) {
    if (!templates.some((entry) => entry.id === item.id)) templates.push(item);
  }

  return templates.slice(0, 6);
}

async function fetchLandmarkPhoto(cityName: string, countryLabel: string, template: LandmarkTemplate) {
  const queries = [
    `${cityName} ${template.searchSuffix}`,
    `${cityName} ${countryLabel} ${template.searchSuffix}`,
    `${template.searchSuffix} ${cityName}`,
  ];

  for (const query of queries) {
    const photoUrl = await fetchCommonsPhotoUrl(query);
    if (photoUrl) return photoUrl;
  }
  return null;
}

async function buildDynamicEditorialHighlights(input: {
  cityId: string;
  cityName: string;
  countryCode: string;
  countryName: string;
}): Promise<CityHighlight[]> {
  const templates = pickTemplates(input.cityId, input.countryCode);
  const countryLabel = input.countryName || input.countryCode;
  const seenUrls = new Set<string>();
  const highlights: CityHighlight[] = [];

  const photos = await Promise.all(
    templates.map(async (template) => ({
      template,
      photoUrl: await fetchLandmarkPhoto(input.cityName, countryLabel, template),
    })),
  );

  for (const { template, photoUrl } of photos) {
    if (!photoUrl || seenUrls.has(photoUrl)) continue;
    seenUrls.add(photoUrl);
    highlights.push({
      id: `dyn-${template.id}`,
      nameIt: template.nameIt,
      nameEn: template.nameEn,
      photoUrl,
      hintIt: template.hintIt,
      hintEn: template.hintEn,
    });
  }

  if (highlights.length < 2) {
    const hero =
      (await fetchWikipediaHeroImage({
        cityName: input.cityName,
        countryCode: input.countryCode,
      })) ?? (await fetchCommonsPhotoUrl(`${input.cityName} ${countryLabel}`));

    if (hero && !seenUrls.has(hero)) {
      highlights.unshift({
        id: "dyn-hero",
        nameIt: `Panorama di ${input.cityName}`,
        nameEn: `${input.cityName} panorama`,
        photoUrl: hero,
        hintIt: "Vista sulla città",
        hintEn: "City view",
      });
    }
  }

  return highlights.slice(0, 6);
}

export async function getDynamicEditorialHighlights(input: {
  cityId: string;
  cityName: string;
  countryCode: string;
  countryName: string;
}): Promise<CityHighlight[]> {
  const cacheKey = input.cityId || `${input.countryCode}-${input.cityName}`;
  return unstable_cache(
    () =>
      buildDynamicEditorialHighlights({
        cityId: input.cityId,
        cityName: input.cityName,
        countryCode: input.countryCode,
        countryName: input.countryName,
      }),
    ["dynamic-editorial-v4", cacheKey, input.cityName, input.countryCode],
    { revalidate: 86400 },
  )();
}
