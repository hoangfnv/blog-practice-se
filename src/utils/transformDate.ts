export function transformDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  // Helper function to pad single digits with leading zeros
  const pad = (num: number) => num.toString().padStart(2, '0');

  // Extract date components
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);  // getMonth() is 0-based, so we add 1
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  // Define the format and replace the placeholders with actual date values
  return format
    .replace('YYYY', year.toString())        // Full year (e.g., 2024)
    .replace('YY', year.toString().slice(-2)) // Last two digits of the year (e.g., 24)
    .replace('MM', month)                    // Month in two digits (e.g., 01, 11)
    .replace('M', (date.getMonth() + 1).toString()) // Month in single digit (e.g., 1, 11)
    .replace('DD', day)                      // Day of the month in two digits (e.g., 01, 15)
    .replace('D', date.getDate().toString())  // Day of the month in single digit (e.g., 5)
    .replace('HH', hour)                     // Hour in 24-hour format (e.g., 01, 14)
    .replace('H', date.getHours().toString()) // Hour in single digit (e.g., 1, 14)
    .replace('mm', minute)                   // Minutes (e.g., 01, 45)
    .replace('m', date.getMinutes().toString()) // Minutes in single digit (e.g., 5)
    .replace('SS', second)                   // Seconds (e.g., 01, 59)
    .replace('S', date.getSeconds().toString()); // Seconds in single digit (e.g., 1, 59)
}
