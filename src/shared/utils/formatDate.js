/**
 * Formats an ISO date string into a more readable format (e.g., "Jan 01, 2023").
 *
 * @param {string} iso - The ISO date string to format.
 * @returns {string} The formatted date string, or an empty string if the input is invalid.
 */
export function formatDate(iso) {
  const d = new Date(iso);
  // Check if the date is valid before formatting.
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}