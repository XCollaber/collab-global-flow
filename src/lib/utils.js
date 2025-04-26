
/**
 * Combines multiple class names into a single string
 * @param {string} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Truncates a string to the specified length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated string
 */
export function truncate(str, length) {
  if (!str) return '';
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

/**
 * Formats a date
 * @param {Date|string} date - Date to format
 * @param {string} format - Format string
 * @returns {string} - Formatted date
 */
export function formatDate(date, format = 'medium') {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: format
  }).format(d);
}
