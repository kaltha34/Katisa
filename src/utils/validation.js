/**
 * Form validation utility functions
 */

/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates that a field is not empty
 * @param {string} value - Value to check
 * @returns {boolean} - Whether the value is not empty
 */
export const isNotEmpty = (value) => {
  return value !== null && value !== undefined && value.trim() !== '';
};

/**
 * Validates a phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
  // Basic phone validation - allows various formats
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

/**
 * Validates minimum length of a string
 * @param {string} value - Value to check
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - Whether the value meets the minimum length
 */
export const hasMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

/**
 * Validates maximum length of a string
 * @param {string} value - Value to check
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} - Whether the value is within the maximum length
 */
export const hasMaxLength = (value, maxLength) => {
  return !value || value.length <= maxLength;
};

/**
 * Validates a form field and returns validation result
 * @param {string} fieldName - Name of the field
 * @param {string} value - Value to validate
 * @param {Object} rules - Validation rules to apply
 * @returns {Object} - Validation result with isValid and errorMessage
 */
export const validateField = (fieldName, value, rules) => {
  // Default to valid
  let isValid = true;
  let errorMessage = '';

  // Apply each rule
  if (rules.required && !isNotEmpty(value)) {
    isValid = false;
    errorMessage = `${fieldName} is required`;
  } else if (rules.email && !isValidEmail(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid email address';
  } else if (rules.phone && !isValidPhone(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid phone number';
  } else if (rules.minLength && !hasMinLength(value, rules.minLength)) {
    isValid = false;
    errorMessage = `${fieldName} must be at least ${rules.minLength} characters`;
  } else if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
    isValid = false;
    errorMessage = `${fieldName} cannot exceed ${rules.maxLength} characters`;
  }

  return { isValid, errorMessage };
};
