import { majorWorldCities } from "@/lib/constants/world-cities";
import { cityHeroImages } from "@/data/cityHeroImages";

/**
 * Verified Unsplash photo IDs — each resolved to a real, free-to-use image.
 * Format: the segment after "photo-" in https://images.unsplash.com/photo-{ID}
 */
export const TRAVEL_PHOTOS: Record<string, string> = {
  // Roma
  colosseum: "1552832230-c0197dd311b5",
  colosseumSunrise: "1752813372873-6e694a7574ee",
  romeTrasteverse: "1529154166925-574a0236a4f4",
  romePantheon: "1531572753322-ad063cecc140",
  // Firenze
  florence: "1523906834658-6e24ef2386f9",
  florencePonteVecchio: "1541370976299-4d24ebbc9077",
  florenceArno: "1745752726939-f7db6fc6ede8",
  florenceOltrarno: "1764377848355-2c2ef0e5f759",
  // Venezia
  veniceGrandCanal: "1508184089160-2758663ef519",
  veniceSunset: "1761589339308-542aee20bbbb",
  veniceRialto: "1762023663745-69f010423bc7",
  veniceAlley: "1534846605592-3c77ab4bf433",
  // Napoli
  naplesVesuvius: "1768322264436-9b766658d037",
  naplesCoast: "1775188816339-181d3d8cb06b",
  naplesSpaccanapoli: "1763906667343-dcdb19b1ee4e",
  naplesPizza: "1670275558804-c3de1af9af45",
  // Milano
  milanDuomo: "1516296270211-f3ae5494e65d",
  milanGalleria: "1583855604333-8981393dfde5",
  milanNavigli: "1584742842761-6735a7caf8f5",
  milanNight: "1520440229-6469a149ac59",
  // Torino
  turinMole: "1568891299194-3d3a2e3b0f4e",
  // Verona
  veronaArena: "1570155722844-b1295e3de1ba",
  // Bologna
  bolognaPiazza: "1564594736846-b28a3de9e6d1",
  // Costiera Amalfitana
  amalfiPositanoHill: "1601581875309-fafbf2d3ed3a",
  amalfiPositanoSea: "1510041883570-1c5b27d85cb8",
  amalfiCoastCliffs: "1530476219733-88085e45aa2c",
  amalfiPositanoColors: "1560189236-71c235494695",
  // Cinque Terre
  cinqueTerre: "1516483638261-f4dbaf036963",
  cinqueTerreManarola: "1756917888644-57216c259a6d",
  cinqueTerreVernazza: "1534445867742-43195f401b6c",
  cinqueTerreCoast: "1551801319-ca06060f3fcc",
  // Sicilia / Taormina
  taormina: "1523531294919-4bcd7c65e216",
  taorminaCorso: "1584892177159-ba2727159318",
  taorminaIsolaBella: "1612834857321-08085283147b",
  taorminaCoast: "1568843434673-fa08a17c6ceb",
  // Sardegna
  sardinia: "1507525428034-b723cf961d3e",
  sardiniaEmerald: "1558508006-b47365cf0e61",
  sardiniaBeach: "1591103000599-50f5b4ec7d3d",
  sardiniaCagliari: "1605273729374-503edcbcc5f8",
  sardiniaCliffs: "1472207241423-9e30d66d4b0f",
  // Puglia / Alberobello
  pugliaTrulli: "1491566102020-21838225c3c8",
  pugliaPolignano: "1747328085826-998aaf4df365",
  pugliaCoast: "1720794511492-891637166241",
  pugliaOldTown: "1717168175995-126eee88c3a2",
  pugliaFood: "1509024644558-2f56ce76c490",
  // Lago di Como
  lakeComo: "1587046377996-01aa69d0e290",
  lakeComoVilla: "1664433451451-11337deef597",
  lakeComoBoat: "1582150050076-52baeeba4a74",
  lakeComoBellagio: "1586974726316-c6302de6a160",
  // Parigi
  paris: "1502602898657-3e91760cbb34",
  parisSeine: "1499856871958-5b9627545d1a",
  parisStreet: "1511739001486-6bfe10ce785f",
  parisMontmartre: "1524063221847-15c7329095d8",
  parisNight: "1499856871958-5b9627545d1a",
  // Londra
  london: "1513635269975-59663e0ac1ad",
  londonTowerBridge: "1454537468202-b7ff71d51c2e",
  londonEye: "1503780099440-e6ab046a1d71",
  londonBigBen: "1529655683826-aba9b3e77383",
  londonBridge: "1454537468202-b7ff71d51c2e",
  // Barcellona
  barcelonaSagrada: "1558560354-c17a5af844d6",
  barcelonaAerial: "1563344019-cefeb9b19784",
  barcelonaGothic: "1519749701521-90c37a9ec3f5",
  barcelonaBeach: "1590758351375-6a95b47f98d3",
  // Madrid
  madridPlaza: "1543785734-4b6e564642f8",
  madridPalace: "1558642452-9d2a7deb7f62",
  madridRetiro: "1741353171152-5a9cfc05e094",
  madridTapas: "1565599837634-134bc3aadce8",
  // Berlino
  berlinGate: "1775045309134-7525be4e2f2d",
  berlinGateDusk: "1762983326643-1892404695e2",
  berlinMuseum: "1567806740800-c6d7be4a17dc",
  // Amsterdam
  amsterdamCanal: "1534351590666-13e3e96b5017",
  amsterdamHouses: "1468436139062-f60a71c5c892",
  amsterdamJordaan: "1468436139062-f60a71c5c892",
  amsterdamMarket: "1552826533-b8508864bcb3",
  // Lisbona
  lisbonTram: "1555881400-74d7acaacd8b",
  lisbonPanorama: "1548707309-dcebeab9ea9b",
  lisbonBelem: "1570556979680-d06d000d4ceb",
  lisbonPastel: "1550603101-c6e9eebe832b",
  // Praga
  pragueBridge: "1458150945447-7fb764c11a92",
  pragueOld: "1541849546-216549ae216d",
  pragueSquare: "1580852710598-96912fc48065",
  pragueNight: "1532631287453-22064af5316b",
  // Vienna
  viennaSchonbrunn: "1516550893923-42d28e5677af",
  viennaPalace: "1569138151303-dab274ecc4b4",
  viennaCafe: "1544038314-3a8986f60123",
  viennaRing: "1590612673391-17b643e5039a",
  // Istanbul
  istanbulMosque: "1524231757912-21f4fe3a7200",
  istanbulSkyline: "1541432901042-2d8bd64b4a9b",
  istanbulBazaar: "1560153540-6c2534111f16",
  istanbulFood: "1482930172332-2293d7138235",
  // Santorini
  santorini: "1570077188670-e3a8d69ac5ff",
  santoriniSunset: "1530991472021-ce0e43475f6e",
  santoriniOia: "1533105079780-92b9be482077",
  santoriniBeach: "1532189406528-86316fa63c4c",
  // Dubai
  dubai: "1512453979798-5ea266f8880c",
  dubaiMarina: "1518684079-3c830dcef090",
  dubaiDesert: "1489493585363-d69421e0edd3",
  // Tokyo
  tokyo: "1540959733332-eab4deabeeaf",
  tokyoShibuya: "1542051841857-5f90071e7989",
  tokyoTemple: "1545569341-9eb8b30979d9",
  tokyoShinjuku: "1532236395709-7d70320fec2d",
  // New York
  nyc: "1496442226666-8d4d0e62e6e9",
  nycBrooklyn: "1534430480872-3498386e7856",
  nycCentral: "1512749971649-3c44057ed6ab",
  nycTimesSquare: "1479660095429-2cf4e1360472",
  // Bangkok
  bangkokTemple: "1508009603885-50cf7c579365",
  bangkokWatArun: "1768392810963-017c92313d79",
  bangkokWatSunset: "1762950297550-1d8d7cce12ae",
  bangkokWatNight: "1563492065599-3520f775eeed",
  bangkokSkyline: "1504121619445-01661434a022",
  // Phuket
  phuketBeach: "1552465011-b4e21bf6e79a",
  phuketViewpoint: "1601225612316-b4733315a717",
  phuketIsland: "1754295560175-86037557a4fd",
  phuketSunset: "1552464717-70ffd59710bf",
  // Generic
  beach: "1552465011-b4e21bf6e79a",
  europeStreet: "1515542622106-78bda8ba0e5b",
  canal: "1506973035872-a4ec16b8e8d9",
  culture: "1488646953014-85cb44e25828",
  night: "1558618666-fcd25c85cd64",
};

export function unsplashPhoto(photoId: string, width = 800, height = 500) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export function picsumPhoto(seed: string, width = 800, height = 500) {
  const safe = encodeURIComponent(seed.replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 80));
  return `https://picsum.photos/seed/${safe}/${width}/${height}`;
}

export const GLOBAL_TRAVEL_FALLBACK = unsplashPhoto(TRAVEL_PHOTOS.culture);

const IT_SOUTH_POOL = [TRAVEL_PHOTOS.amalfiPositanoHill, TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.pugliaTrulli, TRAVEL_PHOTOS.sardinia];
const IT_NORTH_POOL = [TRAVEL_PHOTOS.veniceGrandCanal, TRAVEL_PHOTOS.milanDuomo, TRAVEL_PHOTOS.lakeComo, TRAVEL_PHOTOS.veronaArena, TRAVEL_PHOTOS.bolognaPiazza];
const IT_CENTER_POOL = [TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.cinqueTerre, TRAVEL_PHOTOS.florencePonteVecchio, TRAVEL_PHOTOS.romeTrasteverse];

const IT_SOUTH_CITY_IDS = new Set([
  "IT-REG", "IT-BRI", "IT-LCC", "IT-TAR", "IT-AGR", "IT-CTA", "IT-PMO",
  "IT-TAO", "IT-SOR", "IT-CAP", "IT-MON", "IT-POL", "IT-CEF", "IT-OLB",
  "IT-CAG", "IT-AHO", "IT-BDS",
]);

const IT_NORTH_CITY_IDS = new Set([
  "IT-MIL", "IT-VCE", "IT-VRN", "IT-TRN", "IT-BLQ", "IT-BGY", "IT-BZO",
  "IT-TRS", "IT-CMO", "IT-GAR", "IT-DES", "IT-SIR", "IT-COR", "IT-MER",
  "IT-VIC", "IT-BSC", "IT-PAD",
]);

const REGION_POOL: Record<string, string[]> = {
  IT: IT_CENTER_POOL,
  FR: [TRAVEL_PHOTOS.paris, TRAVEL_PHOTOS.parisSeine, TRAVEL_PHOTOS.parisStreet, TRAVEL_PHOTOS.culture],
  ES: [TRAVEL_PHOTOS.barcelonaSagrada, TRAVEL_PHOTOS.madridPlaza, TRAVEL_PHOTOS.barcelonaAerial, TRAVEL_PHOTOS.madridPalace],
  GB: [TRAVEL_PHOTOS.london, TRAVEL_PHOTOS.londonBridge, TRAVEL_PHOTOS.londonBigBen, TRAVEL_PHOTOS.night],
  DE: [TRAVEL_PHOTOS.berlinGate, TRAVEL_PHOTOS.berlinGateDusk, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  NL: [TRAVEL_PHOTOS.amsterdamCanal, TRAVEL_PHOTOS.amsterdamHouses, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet],
  PT: [TRAVEL_PHOTOS.lisbonTram, TRAVEL_PHOTOS.lisbonPanorama, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.europeStreet],
  CZ: [TRAVEL_PHOTOS.pragueBridge, TRAVEL_PHOTOS.pragueOld, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  AT: [TRAVEL_PHOTOS.viennaSchonbrunn, TRAVEL_PHOTOS.viennaPalace, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture],
  TR: [TRAVEL_PHOTOS.istanbulMosque, TRAVEL_PHOTOS.istanbulSkyline, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  GR: [TRAVEL_PHOTOS.santorini, TRAVEL_PHOTOS.santoriniSunset, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture],
  US: [TRAVEL_PHOTOS.nyc, TRAVEL_PHOTOS.nycBrooklyn, TRAVEL_PHOTOS.nycCentral, TRAVEL_PHOTOS.night],
  JP: [TRAVEL_PHOTOS.tokyo, TRAVEL_PHOTOS.tokyoShibuya, TRAVEL_PHOTOS.tokyoTemple, TRAVEL_PHOTOS.culture],
  TH: [TRAVEL_PHOTOS.bangkokWatArun, TRAVEL_PHOTOS.bangkokWatSunset, TRAVEL_PHOTOS.phuketViewpoint, TRAVEL_PHOTOS.phuketIsland, TRAVEL_PHOTOS.bangkokTemple],
  AE: [TRAVEL_PHOTOS.dubai, TRAVEL_PHOTOS.dubaiMarina, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.culture],
  DEFAULT: [TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.beach],
};

const CITY_HERO_OVERRIDES: Record<string, string> = {
  "IT-ROM": TRAVEL_PHOTOS.colosseum,
  "IT-MIL": TRAVEL_PHOTOS.milanDuomo,
  "IT-FLR": TRAVEL_PHOTOS.florence,
  "IT-VCE": TRAVEL_PHOTOS.veniceGrandCanal,
  "IT-NAP": TRAVEL_PHOTOS.naplesVesuvius,
  "IT-TRN": TRAVEL_PHOTOS.turinMole,
  "IT-VRN": TRAVEL_PHOTOS.veronaArena,
  "IT-BLQ": TRAVEL_PHOTOS.bolognaPiazza,
  "IT-PMO": TRAVEL_PHOTOS.taormina,
  "IT-CTA": TRAVEL_PHOTOS.taormina,
  "IT-TAO": TRAVEL_PHOTOS.taormina,
  "IT-SOR": TRAVEL_PHOTOS.amalfiPositanoHill,
  "IT-CAP": TRAVEL_PHOTOS.amalfiPositanoSea,
  "IT-REG": TRAVEL_PHOTOS.naplesCoast,
  "IT-BRI": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-LCC": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-TAR": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-AGR": TRAVEL_PHOTOS.taorminaIsolaBella,
  "IT-CAG": TRAVEL_PHOTOS.sardinia,
  "IT-OLB": TRAVEL_PHOTOS.sardinia,
  "IT-AHO": TRAVEL_PHOTOS.sardinia,
  "IT-CMO": TRAVEL_PHOTOS.lakeComo,
  "IT-MAT": TRAVEL_PHOTOS.bolognaPiazza,
  "IT-CQT": TRAVEL_PHOTOS.cinqueTerre,
  "FR-PAR": TRAVEL_PHOTOS.paris,
  "GB-LON": TRAVEL_PHOTOS.london,
  "ES-BCN": TRAVEL_PHOTOS.barcelonaSagrada,
  "ES-MAD": TRAVEL_PHOTOS.madridPlaza,
  "DE-BER": TRAVEL_PHOTOS.berlinGate,
  "NL-AMS": TRAVEL_PHOTOS.amsterdamCanal,
  "PT-LIS": TRAVEL_PHOTOS.lisbonTram,
  "CZ-PRG": TRAVEL_PHOTOS.pragueBridge,
  "AT-VIE": TRAVEL_PHOTOS.viennaSchonbrunn,
  "TR-IST": TRAVEL_PHOTOS.istanbulMosque,
  "GR-ATH": TRAVEL_PHOTOS.istanbulMosque,
  "GR-JTR": TRAVEL_PHOTOS.santorini,
  "GR-JMK": TRAVEL_PHOTOS.santoriniSunset,
  "US-NYC": TRAVEL_PHOTOS.nyc,
  "US-LAX": TRAVEL_PHOTOS.nycTimesSquare,
  "US-MIA": TRAVEL_PHOTOS.phuketBeach,
  "JP-TYO": TRAVEL_PHOTOS.tokyo,
  "TH-HKT": TRAVEL_PHOTOS.phuketViewpoint,
  "TH-BKK": TRAVEL_PHOTOS.bangkokWatArun,
  "AE-DXB": TRAVEL_PHOTOS.dubai,
  "SG-SIN": TRAVEL_PHOTOS.tokyoShinjuku,
  "AU-SYD": TRAVEL_PHOTOS.dubaiMarina,
  "BR-RIO": TRAVEL_PHOTOS.phuketIsland,
};

/** 3–5 foto iconiche per ogni meta del catalogo browse. */
const CITY_PHOTO_POOLS: Record<string, string[]> = {
  "IT-ROM": [TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.colosseumSunrise, TRAVEL_PHOTOS.romeTrasteverse, TRAVEL_PHOTOS.romePantheon],
  "IT-MIL": [TRAVEL_PHOTOS.milanDuomo, TRAVEL_PHOTOS.milanGalleria, TRAVEL_PHOTOS.milanNavigli, TRAVEL_PHOTOS.milanNight],
  "IT-VCE": [TRAVEL_PHOTOS.veniceGrandCanal, TRAVEL_PHOTOS.veniceSunset, TRAVEL_PHOTOS.veniceRialto, TRAVEL_PHOTOS.veniceAlley],
  "IT-NAP": [TRAVEL_PHOTOS.naplesVesuvius, TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.naplesSpaccanapoli, TRAVEL_PHOTOS.naplesPizza],
  "IT-FLR": [TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.florencePonteVecchio, TRAVEL_PHOTOS.florenceArno, TRAVEL_PHOTOS.florenceOltrarno],
  "IT-SOR": [TRAVEL_PHOTOS.amalfiPositanoHill, TRAVEL_PHOTOS.amalfiPositanoSea, TRAVEL_PHOTOS.amalfiCoastCliffs, TRAVEL_PHOTOS.amalfiPositanoColors],
  "IT-CQT": [TRAVEL_PHOTOS.cinqueTerreManarola, TRAVEL_PHOTOS.cinqueTerre, TRAVEL_PHOTOS.cinqueTerreVernazza, TRAVEL_PHOTOS.cinqueTerreCoast],
  "IT-CMO": [TRAVEL_PHOTOS.lakeComo, TRAVEL_PHOTOS.lakeComoBellagio, TRAVEL_PHOTOS.lakeComoVilla, TRAVEL_PHOTOS.lakeComoBoat],
  "IT-BRI": [TRAVEL_PHOTOS.pugliaTrulli, TRAVEL_PHOTOS.pugliaPolignano, TRAVEL_PHOTOS.pugliaOldTown, TRAVEL_PHOTOS.pugliaFood],
  "IT-TAO": [TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.taorminaCorso, TRAVEL_PHOTOS.taorminaIsolaBella, TRAVEL_PHOTOS.taorminaCoast],
  "IT-CAG": [TRAVEL_PHOTOS.sardiniaEmerald, TRAVEL_PHOTOS.sardiniaBeach, TRAVEL_PHOTOS.sardiniaCagliari, TRAVEL_PHOTOS.sardiniaCliffs],
  "FR-PAR": [TRAVEL_PHOTOS.paris, TRAVEL_PHOTOS.parisSeine, TRAVEL_PHOTOS.parisMontmartre, TRAVEL_PHOTOS.parisNight],
  "GB-LON": [TRAVEL_PHOTOS.londonTowerBridge, TRAVEL_PHOTOS.londonBigBen, TRAVEL_PHOTOS.londonEye, TRAVEL_PHOTOS.london],
  "ES-BCN": [TRAVEL_PHOTOS.barcelonaSagrada, TRAVEL_PHOTOS.barcelonaAerial, TRAVEL_PHOTOS.barcelonaGothic, TRAVEL_PHOTOS.barcelonaBeach],
  "ES-MAD": [TRAVEL_PHOTOS.madridPlaza, TRAVEL_PHOTOS.madridPalace, TRAVEL_PHOTOS.madridRetiro, TRAVEL_PHOTOS.madridTapas],
  "DE-BER": [TRAVEL_PHOTOS.berlinGate, TRAVEL_PHOTOS.berlinGateDusk, TRAVEL_PHOTOS.berlinMuseum, TRAVEL_PHOTOS.berlinGateDusk],
  "NL-AMS": [TRAVEL_PHOTOS.amsterdamCanal, TRAVEL_PHOTOS.amsterdamHouses, TRAVEL_PHOTOS.amsterdamJordaan, TRAVEL_PHOTOS.amsterdamMarket],
  "PT-LIS": [TRAVEL_PHOTOS.lisbonTram, TRAVEL_PHOTOS.lisbonPanorama, TRAVEL_PHOTOS.lisbonBelem, TRAVEL_PHOTOS.lisbonPastel],
  "CZ-PRG": [TRAVEL_PHOTOS.pragueBridge, TRAVEL_PHOTOS.pragueOld, TRAVEL_PHOTOS.pragueSquare, TRAVEL_PHOTOS.pragueNight],
  "AT-VIE": [TRAVEL_PHOTOS.viennaSchonbrunn, TRAVEL_PHOTOS.viennaPalace, TRAVEL_PHOTOS.viennaCafe, TRAVEL_PHOTOS.viennaRing],
  "TR-IST": [TRAVEL_PHOTOS.istanbulMosque, TRAVEL_PHOTOS.istanbulSkyline, TRAVEL_PHOTOS.istanbulBazaar, TRAVEL_PHOTOS.istanbulFood],
  "GR-JTR": [TRAVEL_PHOTOS.santorini, TRAVEL_PHOTOS.santoriniOia, TRAVEL_PHOTOS.santoriniBeach, TRAVEL_PHOTOS.santoriniSunset],
  "AE-DXB": [TRAVEL_PHOTOS.dubai, TRAVEL_PHOTOS.dubaiMarina, TRAVEL_PHOTOS.dubaiDesert, TRAVEL_PHOTOS.dubaiMarina],
  "JP-TYO": [TRAVEL_PHOTOS.tokyo, TRAVEL_PHOTOS.tokyoShibuya, TRAVEL_PHOTOS.tokyoTemple, TRAVEL_PHOTOS.tokyoShinjuku],
  "US-NYC": [TRAVEL_PHOTOS.nyc, TRAVEL_PHOTOS.nycBrooklyn, TRAVEL_PHOTOS.nycCentral, TRAVEL_PHOTOS.nycTimesSquare],
  "TH-BKK": [TRAVEL_PHOTOS.bangkokWatArun, TRAVEL_PHOTOS.bangkokWatSunset, TRAVEL_PHOTOS.bangkokWatNight, TRAVEL_PHOTOS.bangkokSkyline],
  "TH-HKT": [TRAVEL_PHOTOS.phuketViewpoint, TRAVEL_PHOTOS.phuketIsland, TRAVEL_PHOTOS.phuketSunset, TRAVEL_PHOTOS.phuketBeach],
  "IT-TRN": [TRAVEL_PHOTOS.turinMole, TRAVEL_PHOTOS.milanDuomo, TRAVEL_PHOTOS.lakeComoBellagio, TRAVEL_PHOTOS.veronaArena],
  "IT-VRN": [TRAVEL_PHOTOS.veronaArena, TRAVEL_PHOTOS.veniceRialto, TRAVEL_PHOTOS.veniceAlley, TRAVEL_PHOTOS.milanNight],
  "IT-BLQ": [TRAVEL_PHOTOS.bolognaPiazza, TRAVEL_PHOTOS.florenceOltrarno, TRAVEL_PHOTOS.florencePonteVecchio, TRAVEL_PHOTOS.milanGalleria],
  "IT-PMO": [TRAVEL_PHOTOS.taorminaCorso, TRAVEL_PHOTOS.taorminaCoast, TRAVEL_PHOTOS.taorminaIsolaBella, TRAVEL_PHOTOS.naplesPizza],
  "IT-CTA": [TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.taorminaCoast, TRAVEL_PHOTOS.taorminaIsolaBella, TRAVEL_PHOTOS.naplesVesuvius],
  "IT-CAP": [TRAVEL_PHOTOS.amalfiPositanoSea, TRAVEL_PHOTOS.amalfiPositanoHill, TRAVEL_PHOTOS.amalfiCoastCliffs, TRAVEL_PHOTOS.amalfiPositanoColors],
  "IT-REG": [TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.taorminaCoast, TRAVEL_PHOTOS.sardiniaCliffs, TRAVEL_PHOTOS.sardiniaBeach],
  "IT-LCC": [TRAVEL_PHOTOS.pugliaPolignano, TRAVEL_PHOTOS.pugliaOldTown, TRAVEL_PHOTOS.pugliaFood, TRAVEL_PHOTOS.pugliaCoast],
  "IT-TAR": [TRAVEL_PHOTOS.pugliaCoast, TRAVEL_PHOTOS.pugliaPolignano, TRAVEL_PHOTOS.pugliaOldTown, TRAVEL_PHOTOS.pugliaFood],
  "IT-AGR": [TRAVEL_PHOTOS.taorminaIsolaBella, TRAVEL_PHOTOS.taorminaCoast, TRAVEL_PHOTOS.sardiniaCliffs, TRAVEL_PHOTOS.sardiniaBeach],
  "IT-OLB": [TRAVEL_PHOTOS.sardiniaEmerald, TRAVEL_PHOTOS.sardiniaBeach, TRAVEL_PHOTOS.sardiniaCliffs, TRAVEL_PHOTOS.sardiniaCagliari],
  "IT-AHO": [TRAVEL_PHOTOS.sardiniaBeach, TRAVEL_PHOTOS.sardiniaCliffs, TRAVEL_PHOTOS.sardiniaEmerald, TRAVEL_PHOTOS.sardiniaCagliari],
  "IT-MAT": [TRAVEL_PHOTOS.bolognaPiazza, TRAVEL_PHOTOS.florenceOltrarno, TRAVEL_PHOTOS.veronaArena, TRAVEL_PHOTOS.romePantheon],
  "GR-ATH": [TRAVEL_PHOTOS.istanbulMosque, TRAVEL_PHOTOS.istanbulSkyline, TRAVEL_PHOTOS.viennaPalace, TRAVEL_PHOTOS.pragueSquare],
  "GR-JMK": [TRAVEL_PHOTOS.santoriniSunset, TRAVEL_PHOTOS.santoriniOia, TRAVEL_PHOTOS.santoriniBeach, TRAVEL_PHOTOS.santorini],
  "US-LAX": [TRAVEL_PHOTOS.nycTimesSquare, TRAVEL_PHOTOS.nycBrooklyn, TRAVEL_PHOTOS.phuketBeach, TRAVEL_PHOTOS.dubaiMarina],
  "US-MIA": [TRAVEL_PHOTOS.phuketBeach, TRAVEL_PHOTOS.phuketSunset, TRAVEL_PHOTOS.nycCentral, TRAVEL_PHOTOS.santoriniBeach],
  "SG-SIN": [TRAVEL_PHOTOS.tokyoShinjuku, TRAVEL_PHOTOS.tokyoShibuya, TRAVEL_PHOTOS.bangkokSkyline, TRAVEL_PHOTOS.dubaiMarina],
  "AU-SYD": [TRAVEL_PHOTOS.dubaiMarina, TRAVEL_PHOTOS.phuketBeach, TRAVEL_PHOTOS.santoriniSunset, TRAVEL_PHOTOS.nycBrooklyn],
  "BR-RIO": [TRAVEL_PHOTOS.phuketIsland, TRAVEL_PHOTOS.phuketSunset, TRAVEL_PHOTOS.santoriniBeach, TRAVEL_PHOTOS.nyc],
};

function poolForCity(canonicalId: string | null, countryCode?: string | null) {
  if (canonicalId && CITY_PHOTO_POOLS[canonicalId]) return CITY_PHOTO_POOLS[canonicalId];
  return poolForCountry(countryCode, canonicalId);
}

const CITY_NAME_ALIASES: Record<string, string> = {
  roma: "IT-ROM", rome: "IT-ROM",
  milano: "IT-MIL", milan: "IT-MIL",
  firenze: "IT-FLR", florence: "IT-FLR",
  venezia: "IT-VCE", venice: "IT-VCE",
  napoli: "IT-NAP", naples: "IT-NAP",
  torino: "IT-TRN", turin: "IT-TRN",
  bologna: "IT-BLQ",
  verona: "IT-VRN",
  palermo: "IT-PMO",
  catania: "IT-CTA",
  matera: "IT-MAT",
  sorrento: "IT-SOR",
  capri: "IT-CAP",
  taormina: "IT-TAO",
  "reggio calabria": "IT-REG",
  bari: "IT-BRI",
  lecce: "IT-LCC",
  "cinque terre": "IT-CQT",
  "costiera amalfitana": "IT-SOR",
  "amalfi coast": "IT-SOR",
  "lago di como": "IT-CMO",
  "lake como": "IT-CMO",
  como: "IT-CMO",
  alberobello: "IT-BRI",
  cagliari: "IT-CAG",
  olbia: "IT-OLB",
  alghero: "IT-AHO",
  parigi: "FR-PAR", paris: "FR-PAR",
  londra: "GB-LON", london: "GB-LON",
  barcellona: "ES-BCN", barcelona: "ES-BCN",
  madrid: "ES-MAD",
  berlino: "DE-BER", berlin: "DE-BER",
  amsterdam: "NL-AMS",
  lisbona: "PT-LIS", lisbon: "PT-LIS",
  praga: "CZ-PRG", prague: "CZ-PRG",
  vienna: "AT-VIE", wien: "AT-VIE",
  istanbul: "TR-IST",
  santorini: "GR-JTR",
  mykonos: "GR-JMK",
  atene: "GR-ATH", athens: "GR-ATH",
  dubai: "AE-DXB",
  tokyo: "JP-TYO",
  phuket: "TH-HKT",
  bangkok: "TH-BKK",
  "new york": "US-NYC",
};

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function poolForItalianCity(cityId?: string | null) {
  if (!cityId) return IT_CENTER_POOL;
  if (cityId === "IT-ROM") return [TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.colosseumSunrise, TRAVEL_PHOTOS.romeTrasteverse, TRAVEL_PHOTOS.romePantheon];
  if (IT_SOUTH_CITY_IDS.has(cityId)) return IT_SOUTH_POOL;
  if (IT_NORTH_CITY_IDS.has(cityId)) return IT_NORTH_POOL;
  return IT_CENTER_POOL;
}

function poolForCountry(countryCode?: string | null, cityId?: string | null) {
  const code = countryCode?.toUpperCase();
  if (code === "IT") return poolForItalianCity(cityId);
  if (code && REGION_POOL[code]) return REGION_POOL[code];
  return REGION_POOL.DEFAULT;
}

export function resolveCanonicalCityId(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
}): string | null {
  const cityId = input.cityId?.trim();
  if (cityId && majorWorldCities.some((city) => city.city_id === cityId)) return cityId;
  if (cityId && CITY_HERO_OVERRIDES[cityId]) return cityId;

  const normalizedName = normalizeText(input.cityName);
  if (CITY_NAME_ALIASES[normalizedName]) return CITY_NAME_ALIASES[normalizedName];

  const countryCode = input.countryCode?.toUpperCase();
  const byName = majorWorldCities.find(
    (city) => normalizeText(city.city_name) === normalizedName && (!countryCode || city.country_code === countryCode),
  );
  if (byName) return byName.city_id;

  if (cityId?.includes("-")) {
    const slug = cityId.split("-").slice(1).join("-");
    const slugNorm = normalizeText(slug.replace(/-/g, " "));
    if (CITY_NAME_ALIASES[slugNorm]) return CITY_NAME_ALIASES[slugNorm];
    const fromSlug = majorWorldCities.find(
      (city) =>
        normalizeText(city.city_name) === slugNorm &&
        (!countryCode || city.country_code === countryCode),
    );
    if (fromSlug) return fromSlug.city_id;
  }

  return cityId || null;
}

export function getCityHeroImage(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
}): string {
  const canonicalId = resolveCanonicalCityId(input);
  // Priorità alla hero curata sul nostro storage (galleria city_media).
  if (canonicalId && cityHeroImages[canonicalId]) {
    return cityHeroImages[canonicalId];
  }
  if (input.cityId && cityHeroImages[input.cityId]) {
    return cityHeroImages[input.cityId];
  }
  if (canonicalId && CITY_HERO_OVERRIDES[canonicalId]) {
    return unsplashPhoto(CITY_HERO_OVERRIDES[canonicalId]);
  }

  const pool = poolForCountry(input.countryCode, canonicalId);
  const key = canonicalId || `${input.countryCode ?? "XX"}-${normalizeText(input.cityName)}`;
  const photoId = pool[hashString(key) % pool.length];
  return unsplashPhoto(photoId);
}

export function getCityPhotoVariants(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
  count?: number;
}): string[] {
  const count = input.count ?? 5;
  const hero = getCityHeroImage(input);
  const canonicalId = resolveCanonicalCityId(input) ?? `${input.countryCode}-${normalizeText(input.cityName)}`;
  const pool = poolForCity(canonicalId, input.countryCode).map((id) => unsplashPhoto(id));
  const urls = [hero];

  for (const url of pool) {
    if (urls.length >= count) break;
    if (!urls.includes(url)) urls.push(url);
  }

  for (let index = 1; urls.length < count; index += 1) {
    urls.push(picsumPhoto(`${canonicalId}-poi-${index}`));
  }

  return urls.slice(0, count);
}
