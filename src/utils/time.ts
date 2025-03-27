export function isRecent30DaysDate(date: string) {
  const inputDate = new Date(date);
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  return inputDate >= thirtyDaysAgo && inputDate <= currentDate;
}

export function calculateYearsSince(period: string) {
  const [month, year] = period.split('.').map(Number);
  const startDate = new Date(year, month - 1);
  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - startDate.getMonth();

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }
  return `${yearsDiff} years ${monthsDiff ? `${monthsDiff} months` : ``}`;
}

export function formatDate(datestring: string): string {
  const date = new Date(datestring);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function convertMinutesToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
}
