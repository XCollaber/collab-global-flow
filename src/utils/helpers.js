
/**
 * Format a currency amount with the given currency code
 * @param {number} amount - The amount to format
 * @param {string} currencyCode - The currency code (e.g., USD, EUR)
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(amount, currencyCode = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

/**
 * Validate an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Debounce a function call
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generate a random ID
 * @param {number} length - The length of the ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}
