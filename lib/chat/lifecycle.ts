/** Chat closes 24 hours after the planned check-in date (start of that calendar day). */
export function chatClosesAt(checkIn: string): Date {
  const [year, month, day] = checkIn.split("-").map(Number);
  const closes = new Date(year, month - 1, day);
  closes.setHours(closes.getHours() + 24);
  return closes;
}

export function isChatOpen(checkIn: string, now: Date = new Date()): boolean {
  return now < chatClosesAt(checkIn);
}
