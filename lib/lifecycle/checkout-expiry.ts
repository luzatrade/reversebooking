import { addDays, format, parseISO } from "date-fns";

/** Fuso orario IANA per paese (e città dove serve). */
const COUNTRY_TIMEZONE: Record<string, string> = {
  IT: "Europe/Rome",
  FR: "Europe/Paris",
  GB: "Europe/London",
  DE: "Europe/Berlin",
  ES: "Europe/Madrid",
  NL: "Europe/Amsterdam",
  PT: "Europe/Lisbon",
  AE: "Asia/Dubai",
  QA: "Asia/Qatar",
  TR: "Europe/Istanbul",
  TH: "Asia/Bangkok",
  SG: "Asia/Singapore",
  JP: "Asia/Tokyo",
  KR: "Asia/Seoul",
  HK: "Asia/Hong_Kong",
  CN: "Asia/Shanghai",
  AU: "Australia/Sydney",
  CA: "America/Toronto",
  MX: "America/Mexico_City",
  BR: "America/Sao_Paulo",
  AR: "America/Argentina/Buenos_Aires",
  ZA: "Africa/Johannesburg",
  MA: "Africa/Casablanca",
  EG: "Africa/Cairo",
  US: "America/New_York",
};

const CITY_TIMEZONE: Record<string, string> = {
  "US-NYC": "America/New_York",
  "US-MIA": "America/New_York",
  "US-LAX": "America/Los_Angeles",
  "CA-YVR": "America/Vancouver",
  "CA-TOR": "America/Toronto",
  "AU-MEL": "Australia/Melbourne",
  "AU-SYD": "Australia/Sydney",
  "BR-SAO": "America/Sao_Paulo",
  "BR-RIO": "America/Sao_Paulo",
  "CN-BJS": "Asia/Shanghai",
  "CN-SHA": "Asia/Shanghai",
};

export function timezoneForLocation(countryCode: string, cityId?: string | null): string {
  if (cityId && CITY_TIMEZONE[cityId]) return CITY_TIMEZONE[cityId]!;
  return COUNTRY_TIMEZONE[countryCode.toUpperCase()] ?? "UTC";
}

function zonedLocalToUtcIso(localDateTime: string, timeZone: string): string {
  const [datePart, timePart = "00:00:00"] = localDateTime.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart.split(":").map((value) => Number(value) || 0);

  let utcMs = Date.UTC(year, month - 1, day, hour, minute, second);
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const parts = getZonedParts(new Date(utcMs), timeZone);
    const desired = Date.UTC(year, month - 1, day, hour, minute, second);
    const actual = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
    utcMs += desired - actual;
  }

  return new Date(utcMs).toISOString();
}

function getZonedParts(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);
  return {
    year: read("year"),
    month: read("month"),
    day: read("day"),
    hour: read("hour"),
    minute: read("minute"),
    second: read("second"),
  };
}

/** Mezzanotte (24:00) al termine del giorno checkout nel fuso del paese → ISO UTC. */
export function checkoutExpiresAtIso(
  checkoutDate: string,
  countryCode: string,
  cityId?: string | null,
): string {
  const timezone = timezoneForLocation(countryCode, cityId);
  const nextDay = format(addDays(parseISO(checkoutDate), 1), "yyyy-MM-dd");
  return zonedLocalToUtcIso(`${nextDay}T00:00:00`, timezone);
}

export function isCheckoutExpired(
  checkoutDate: string,
  countryCode: string,
  cityId?: string | null,
  now = new Date(),
): boolean {
  return new Date(checkoutExpiresAtIso(checkoutDate, countryCode, cityId)).getTime() <= now.getTime();
}

export type CatalogOfferExpiryInput = {
  dateMode: "fixed" | "date_range" | "month_flexible";
  checkOut?: string | null;
  validUntil?: string | null;
  flexibleMonth?: number | null;
  flexibleYear?: number | null;
  countryCode: string;
  cityId?: string | null;
};

export function catalogOfferExpiresAtIso(input: CatalogOfferExpiryInput): string | null {
  if (input.dateMode === "fixed" && input.checkOut) {
    return checkoutExpiresAtIso(input.checkOut, input.countryCode, input.cityId);
  }
  if (input.dateMode === "date_range" && input.validUntil) {
    return checkoutExpiresAtIso(input.validUntil, input.countryCode, input.cityId);
  }
  if (input.dateMode === "month_flexible" && input.flexibleMonth && input.flexibleYear) {
    const month = String(input.flexibleMonth).padStart(2, "0");
    const lastDay = new Date(input.flexibleYear, input.flexibleMonth, 0).getDate();
    const endDate = `${input.flexibleYear}-${month}-${String(lastDay).padStart(2, "0")}`;
    return checkoutExpiresAtIso(endDate, input.countryCode, input.cityId);
  }
  return null;
}
