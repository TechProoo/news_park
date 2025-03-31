export function formatDateToDDMMYYYY(date: Date | string): string {
  const parsedDate = new Date(date); // Ensure it's a Date object
  if (isNaN(parsedDate.getTime())) return "Invalid Date"; // Handle invalid dates

  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = parsedDate.getFullYear();

  return `${day}/${month}/${year}`;
}
