export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isNotEmpty = (value) =>
  value !== null && value !== undefined && String(value).trim() !== '';

export const isValidPhone = (phone) =>
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);

export const hasMinLength = (value, minLength) => value && value.length >= minLength;

export const validateField = (fieldName, value, rules) => {
  let isValid = true;
  let errorMessage = '';

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
  }

  return { isValid, errorMessage };
};
