import type { DateCombination } from '../domain/travel-query.js';

const DAY_MS = 86_400_000;

function parseDate(value: string): Date {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid ISO date: ${value}`);
  return date;
}

export function generateDateCombinations(
  availabilityStart: string,
  availabilityEnd: string,
  minDays: number,
  maxDays: number,
): DateCombination[] {
  if (!Number.isInteger(minDays) || !Number.isInteger(maxDays) || minDays < 1 || maxDays < minDays) {
    throw new Error('minDays/maxDays must be positive integers and maxDays >= minDays');
  }
  const start = parseDate(availabilityStart);
  const end = parseDate(availabilityEnd);
  if (start > end) throw new Error('availabilityStart must be before availabilityEnd');

  const combinations: DateCombination[] = [];
  for (let departure = start; departure <= end; departure = new Date(departure.getTime() + DAY_MS)) {
    for (let days = minDays; days <= maxDays; days++) {
      const returnDate = new Date(departure.getTime() + days * DAY_MS);
      if (returnDate > end) continue;
      combinations.push({
        departureDate: departure.toISOString().slice(0, 10),
        returnDate: returnDate.toISOString().slice(0, 10),
        nights: days,
        calendarDays: days + 1,
      });
    }
  }
  return combinations;
}
