/**
 * Scarica l'elenco ufficiale dei comuni italiani dall'API ISTAT
 * e lo salva come JSON pronto per il seed Supabase.
 *
 * Uso: npx tsx scripts/onboarding/fetch-comuni-istat.ts
 */

import { writeFileSync } from "fs";
import { resolve } from "path";

const ISTAT_API =
  "https://sdmx.istat.it/SDMXWS/rest/codelist/IT1/CL_ITTER107/latest?format=jsondata";

type Comune = {
  codice_istat: string;
  nome: string;
  provincia: string;
  sigla_provincia: string;
  regione: string;
};

const REGIONI: Record<string, string> = {
  "01": "Piemonte", "02": "Valle d'Aosta", "03": "Lombardia",
  "04": "Trentino-Alto Adige", "05": "Veneto", "06": "Friuli-Venezia Giulia",
  "07": "Liguria", "08": "Emilia-Romagna", "09": "Toscana",
  "10": "Umbria", "11": "Marche", "12": "Lazio",
  "13": "Abruzzo", "14": "Molise", "15": "Campania",
  "16": "Puglia", "17": "Basilicata", "18": "Calabria",
  "19": "Sicilia", "20": "Sardegna",
};

const PROVINCE: Record<string, { nome: string; sigla: string; regione: string }> = {};

function initProvince() {
  const raw: Array<[string, string, string]> = [
    ["001","Torino","TO"],["002","Vercelli","VC"],["003","Novara","NO"],
    ["004","Cuneo","CN"],["005","Asti","AT"],["006","Alessandria","AL"],
    ["096","Biella","BI"],["103","Verbano-Cusio-Ossola","VB"],
    ["007","Aosta","AO"],
    ["012","Varese","VA"],["013","Como","CO"],["014","Sondrio","SO"],
    ["015","Milano","MI"],["016","Bergamo","BG"],["017","Brescia","BS"],
    ["018","Pavia","PV"],["019","Cremona","CR"],["020","Mantova","MN"],
    ["097","Lecco","LC"],["098","Lodi","LO"],["108","Monza e della Brianza","MB"],
    ["021","Bolzano","BZ"],["022","Trento","TN"],
    ["023","Verona","VR"],["024","Vicenza","VI"],["025","Belluno","BL"],
    ["026","Treviso","TV"],["027","Venezia","VE"],["028","Padova","PD"],
    ["029","Rovigo","RO"],
    ["030","Udine","UD"],["031","Gorizia","GO"],["032","Trieste","TS"],
    ["093","Pordenone","PN"],
    ["008","Imperia","IM"],["009","Savona","SV"],
    ["010","Genova","GE"],["011","La Spezia","SP"],
    ["033","Piacenza","PC"],["034","Parma","PR"],["035","Reggio nell'Emilia","RE"],
    ["036","Modena","MO"],["037","Bologna","BO"],["038","Ferrara","FE"],
    ["039","Ravenna","RA"],["040","Forlì-Cesena","FC"],["099","Rimini","RN"],
    ["045","Massa-Carrara","MS"],["046","Lucca","LU"],["047","Pistoia","PT"],
    ["048","Firenze","FI"],["049","Livorno","LI"],["050","Pisa","PI"],
    ["051","Arezzo","AR"],["052","Siena","SI"],["053","Grosseto","GR"],
    ["100","Prato","PO"],
    ["054","Perugia","PG"],["055","Terni","TR"],
    ["041","Pesaro e Urbino","PU"],["042","Ancona","AN"],
    ["043","Macerata","MC"],["044","Ascoli Piceno","AP"],["109","Fermo","FM"],
    ["056","Viterbo","VT"],["057","Rieti","RI"],["058","Roma","RM"],
    ["059","Latina","LT"],["060","Frosinone","FR"],
    ["066","L'Aquila","AQ"],["067","Teramo","TE"],
    ["068","Pescara","PE"],["069","Chieti","CH"],
    ["070","Campobasso","CB"],["094","Isernia","IS"],
    ["061","Caserta","CE"],["062","Benevento","BN"],["063","Napoli","NA"],
    ["064","Avellino","AV"],["065","Salerno","SA"],
    ["071","Foggia","FG"],["072","Bari","BA"],["073","Taranto","TA"],
    ["074","Brindisi","BR"],["075","Lecce","LE"],
    ["110","Barletta-Andria-Trani","BT"],
    ["076","Potenza","PZ"],["077","Matera","MT"],
    ["078","Cosenza","CS"],["079","Catanzaro","CZ"],
    ["080","Reggio di Calabria","RC"],["101","Crotone","KR"],
    ["102","Vibo Valentia","VV"],
    ["081","Trapani","TP"],["082","Palermo","PA"],["083","Messina","ME"],
    ["084","Agrigento","AG"],["085","Caltanissetta","CL"],["086","Enna","EN"],
    ["087","Catania","CT"],["088","Ragusa","RG"],["089","Siracusa","SR"],
    ["090","Sassari","SS"],["091","Nuoro","NU"],["092","Cagliari","CA"],
    ["095","Oristano","OR"],["111","Sud Sardegna","SU"],
  ];

  const provToRegione: Record<string, string> = {
    "001":"01","002":"01","003":"01","004":"01","005":"01","006":"01","096":"01","103":"01",
    "007":"02",
    "012":"03","013":"03","014":"03","015":"03","016":"03","017":"03","018":"03","019":"03","020":"03","097":"03","098":"03","108":"03",
    "021":"04","022":"04",
    "023":"05","024":"05","025":"05","026":"05","027":"05","028":"05","029":"05",
    "030":"06","031":"06","032":"06","093":"06",
    "008":"07","009":"07","010":"07","011":"07",
    "033":"08","034":"08","035":"08","036":"08","037":"08","038":"08","039":"08","040":"08","099":"08",
    "045":"09","046":"09","047":"09","048":"09","049":"09","050":"09","051":"09","052":"09","053":"09","100":"09",
    "054":"10","055":"10",
    "041":"11","042":"11","043":"11","044":"11","109":"11",
    "056":"12","057":"12","058":"12","059":"12","060":"12",
    "066":"13","067":"13","068":"13","069":"13",
    "070":"14","094":"14",
    "061":"15","062":"15","063":"15","064":"15","065":"15",
    "071":"16","072":"16","073":"16","074":"16","075":"16","110":"16",
    "076":"17","077":"17",
    "078":"18","079":"18","080":"18","101":"18","102":"18",
    "081":"19","082":"19","083":"19","084":"19","085":"19","086":"19","087":"19","088":"19","089":"19",
    "090":"20","091":"20","092":"20","095":"20","111":"20",
  };

  for (const [code, nome, sigla] of raw) {
    const regioneCode = provToRegione[code] ?? "00";
    PROVINCE[code] = { nome, sigla, regione: REGIONI[regioneCode] ?? "Sconosciuta" };
  }
}

async function fetchComuniFromOpenData(): Promise<Comune[]> {
  console.log("Scaricamento elenco comuni da dati.gov.it ...");
  const url = "https://dati.mit.gov.it/catalog/api/action/datastore_search?resource_id=comuni&limit=10000";
  
  // Fallback: uso l'API ANPR/ministero o genero da codici ISTAT noti
  // L'approccio più affidabile: lista ufficiale CSV ISTAT
  const csvUrl = "https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv";
  
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error(`ISTAT CSV: ${response.status}`);
    const text = await response.text();
    return parseIstatCsv(text);
  } catch (err) {
    console.warn("CSV ISTAT non raggiungibile, uso fallback JSON embeddato:", err);
    return [];
  }
}

function parseIstatCsv(text: string): Comune[] {
  const lines = text.split("\n").slice(1); // skip header
  const comuni: Comune[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;
    // Il CSV ISTAT usa ; come separatore
    const cols = line.split(";").map(c => c.trim().replace(/^"|"$/g, ""));
    
    // Colonne tipiche CSV ISTAT:
    // 0: Codice Regione, 1: Codice Unità sovracomunale, 2: Codice Provincia,
    // 3: Progressivo del Comune, 4: Codice Comune formato alfanumerico,
    // 5: Denominazione (italiano), ...
    // La struttura esatta può variare, gestiamo i casi più comuni
    
    const codiceIstat = cols[4] ?? "";
    const nome = cols[5] ?? cols[6] ?? "";
    const codProv = cols[2]?.padStart(3, "0") ?? "";
    
    if (!codiceIstat || !nome) continue;
    
    const prov = PROVINCE[codProv];
    comuni.push({
      codice_istat: codiceIstat,
      nome,
      provincia: prov?.nome ?? cols[11] ?? "",
      sigla_provincia: prov?.sigla ?? "",
      regione: prov?.regione ?? REGIONI[cols[0]?.padStart(2, "0")] ?? "",
    });
  }

  return comuni;
}

async function main() {
  initProvince();
  
  let comuni = await fetchComuniFromOpenData();
  
  if (comuni.length === 0) {
    console.log("Generazione da mapping province embedded ...");
    // Fallback: generiamo un file placeholder che dovrà essere integrato manualmente
    console.error("Nessun comune scaricato. Verifica la connettività e riprova.");
    console.log("In alternativa, posiziona il CSV ISTAT in data/comuni_istat.csv");
    process.exit(1);
  }

  // Deduplica per codice ISTAT
  const seen = new Set<string>();
  comuni = comuni.filter(c => {
    if (seen.has(c.codice_istat)) return false;
    seen.add(c.codice_istat);
    return true;
  });

  comuni.sort((a, b) => a.nome.localeCompare(b.nome, "it"));

  const outPath = resolve(__dirname, "../../data/comuni_italiani.json");
  writeFileSync(outPath, JSON.stringify(comuni, null, 2), "utf-8");
  console.log(`✓ ${comuni.length} comuni salvati in ${outPath}`);
}

main().catch(console.error);
