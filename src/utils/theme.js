/**
 * Theme utility functions for consistent styling and dark mode support
 */

/**
 * Default theme colors - Vibrant Katisa Technologies Theme
 */
export const colors = {
  primary: {
    light: '#FBBF24', // Amber-400
    DEFAULT: '#F59E0B', // Amber-500
    dark: '#D97706', // Amber-600
  },
  secondary: {
    light: '#FCD34D', // Amber-300
    DEFAULT: '#FBBF24', // Amber-400
    dark: '#F59E0B', // Amber-500
  },
  accent: {
    light: '#FDE68A', // Amber-200
    DEFAULT: '#FCD34D', // Amber-300
    dark: '#FBBF24', // Amber-400
  },
  dark: {
    light: '#4B5563', // Gray-600
    DEFAULT: '#1F2937', // Gray-800
    dark: '#111827', // Gray-900
  },
  light: {
    light: '#F9FAFB', // Gray-50
    DEFAULT: '#F3F4F6', // Gray-100
    dark: '#E5E7EB', // Gray-200
  },
  success: {
    light: '#10B981', // Emerald-500
    DEFAULT: '#059669', // Emerald-600
    dark: '#047857', // Emerald-700
  },
  error: {
    light: '#EF4444', // Red-500
    DEFAULT: '#DC2626', // Red-600
    dark: '#B91C1C', // Red-700
  },
  warning: {
    light: '#F59E0B', // Amber-500
    DEFAULT: '#D97706', // Amber-600
    dark: '#B45309', // Amber-700
  },
  info: {
    light: '#3B82F6', // Blue-500
    DEFAULT: '#2563EB', // Blue-600
    dark: '#1D4ED8', // Blue-700
  },
};

/**
 * Font families
 */
export const fonts = {
  sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * Font sizes
 */
export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

/**
 * Spacing values
 */
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

/**
 * Border radius values
 */
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

/**
 * Shadow values
 */
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

/**
 * Breakpoints for responsive design
 */
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Z-index values
 */
export const zIndices = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  dropdown: '1000',
  sticky: '1100',
  fixed: '1200',
  modal: '1300',
  popover: '1400',
  tooltip: '1500',
};

/**
 * Transition presets
 */
export const transitions = {
  fast: 'all 0.2s ease',
  DEFAULT: 'all 0.3s ease',
  slow: 'all 0.5s ease',
};

/**
 * Get CSS variable value
 * @param {string} name - CSS variable name
 * @returns {string} - CSS variable value
 */
export const getCssVar = (name) => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
};

/**
 * Set CSS variable value
 * @param {string} name - CSS variable name
 * @param {string} value - CSS variable value
 */
export const setCssVar = (name, value) => {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(`--${name}`, value);
};

/**
 * Toggle dark mode
 * @param {boolean} isDark - Whether to enable dark mode
 */
export const toggleDarkMode = (isDark) => {
  if (typeof window === 'undefined') return;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

/**
 * Initialize theme based on user preference
 */
export const initTheme = () => {
  if (typeof window === 'undefined') return;
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    toggleDarkMode(true);
  }
};

/**
 * Complete theme object
 */
export const theme = {
  colors,
  fonts,
  fontSizes,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndices,
  transitions,
};

export default theme;
